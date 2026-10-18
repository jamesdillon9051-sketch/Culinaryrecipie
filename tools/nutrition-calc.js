#!/usr/bin/env node
'use strict';
/**
 * Nutrition worked out from the ingredient list, not written beside it.
 *
 * Every ingredient line is parsed (src/lib/ingredients.js), matched to a food in
 * tools/nutrition-foods.js, turned into grams, and added up per serving. The build runs this on
 * every recipe and prints only what it computes; the `nut` typed into a record is legacy input.
 *
 *   node tools/nutrition-calc.js --slug a,b --lines      show how every line was read, and the tier
 *   node tools/nutrition-calc.js --volume 32             compare the computed figures with the legacy `nut`
 *   node tools/nutrition-calc.js --volume 32 --write     copy the computed figures into `nut` (and `kp`)
 *
 * `nut` is [kcal, protein, carbohydrate, fat, fibre, sugars, sodium]; kcal is 4 protein + 4
 * carbohydrate + 9 fat + 7 alcohol on the rounded figures, the sum tools/nutrition-audit.js
 * checks. `kp` is [potassium, phosphorus] in mg.
 *
 * Each recipe gets a tier. 1: every line read, at most 5% of the energy from foods or per-item
 * weights without a recorded source (tools/nutrition-sources.json), and no assumption that moves
 * the figures. 2: readable, but resting on assumptions the page names (FLAG_TEXT). 3: not
 * reproducible, so nothing is printed.
 *
 * What this cannot do: it counts ingredients at their raw weight, cannot see an additive or a
 * brand's recipe, and leaves out salt added to taste. Its tolerance for comparing two sets of
 * figures (TOLERANCE) is rounding only; it says nothing about how close either is to a real dish.
 */
const fs = require('fs');
const path = require('path');
const { parseLine } = require('../src/lib/ingredients');
const { BASE, MORE, KP, ALIAS, PORTION, ALC, SOURCES, statusOf } = require('./nutrition-foods');

const ROOT = path.join(__dirname, '..');
const FOODS = { ...BASE, ...MORE };
const EACH_SOURCED = Object.fromEntries(Object.entries(SOURCES).filter(([, e]) => e.each).map(([k]) => [k, true]));

/* ----------------------------------------------------------------- matching */

const norm = text => String(text).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
  .replace(/['’]/g, '').replace(/[^a-z0-9%]+/g, ' ').trim()
  .split(' ').filter(Boolean).map(w => {
    if (w.length > 4 && w.endsWith('ies')) return `${w.slice(0, -3)}y`;
    if (w.length > 4 && w.endsWith('oes')) return w.slice(0, -2);
    if (w.length > 3 && w.endsWith('s') && !/(ss|us|is)$/.test(w)) return w.slice(0, -1);
    return w;
  }).join(' ');

const PHRASES = [];
for (const key of Object.keys(FOODS)) {
  const seen = new Set();
  for (const phrase of [key.replace(/_/g, ' '), ...(ALIAS[key] || [])]) {
    const p = norm(phrase);
    if (!p || seen.has(p)) continue;
    seen.add(p);
    PHRASES.push({ key, phrase: p, words: p.split(' ').length });
  }
}
PHRASES.sort((a, b) => b.words - a.words || b.phrase.length - a.phrase.length);

const matchCache = new Map();
function matchFood(name) {
  const text = ` ${norm(name)} `;
  if (matchCache.has(text)) return matchCache.get(text);
  let found = null;
  for (const entry of PHRASES) {
    if (text.includes(` ${entry.phrase} `)) { found = entry.key; break; }
  }
  matchCache.set(text, found);
  return found;
}

/* ------------------------------------------------------------------ grams */

const COUNT_UNITS = new Set(['', 'tin', 'tins', 'can', 'cans', 'jar', 'jars', 'packet', 'packets', 'pack', 'packs', 'sachet', 'sachets', 'pot', 'pots', 'piece', 'pieces', 'fillet', 'fillets', 'strip', 'strips', 'rasher', 'rashers', 'head', 'heads',
  'slice', 'slices', 'stalk', 'stalks', 'stick', 'sticks', 'sprig', 'sprigs', 'clove', 'cloves', 'bunch', 'bunches', 'handful', 'handfuls']);

const density = key => ((PORTION[key] || {}).tbsp || 15) / 15;

/* Unit words the site's ingredient parser leaves in the name, written out the way a recipe
   writes them. */
const UNIT_WORDS = { litre: 'l', litres: 'l', liter: 'l', liters: 'l', millilitre: 'ml', millilitres: 'ml', milliliter: 'ml', milliliters: 'ml',
  gram: 'g', grams: 'g', kilogram: 'kg', kilograms: 'kg', ounce: 'oz', ounces: 'oz', pound: 'lb', pounds: 'lb',
  tablespoon: 'tbsp', tablespoons: 'tbsp', teaspoon: 'tsp', teaspoons: 'tsp', tbsps: 'tbsp', tsps: 'tsp' };

function readUnitWords(item) {
  /* "4 to 5 tbsp ice water": the lower figure. */
  const range = item.qty != null && !item.unit && /^(?:to|-|–) \d+(?:\.\d+)? ?([a-z]+)\s+(.*)$/i.exec(item.name);
  if (range && (UNIT_WORDS[range[1].toLowerCase()] || ['g', 'kg', 'ml', 'l', 'tbsp', 'tsp', 'cup', 'cups'].includes(range[1].toLowerCase()))) {
    return { ...item, unit: UNIT_WORDS[range[1].toLowerCase()] || range[1].toLowerCase(), name: range[2] };
  }
  /* "1 small bunch parsley". */
  const sized = item.qty != null && !item.unit && /^(small|large|big) (bunch|handful)\s+(?:of )?(.*)$/i.exec(item.name);
  if (sized) return { ...item, unit: sized[2].toLowerCase(), name: sized[3] };
  /* "A pinch of chilli flakes" is one pinch. */
  const a = /^an? (pinch|dash|handful) of (.*)$/i.exec(item.raw);
  if (item.qty == null && a) return { ...item, qty: 1, unit: a[1].toLowerCase(), name: a[2] };
  if (item.unit || item.qty == null) return item;
  const m = /^([a-z]+)\s+(.*)$/i.exec(item.name);
  if (m && UNIT_WORDS[m[1].toLowerCase()]) return { ...item, unit: UNIT_WORDS[m[1].toLowerCase()], name: m[2] };
  return item;
}

function sizeFactor(name) {
  if (/\b(?:extra[- ]large|jumbo)\b/i.test(name)) return 1.5;
  if (/\b(?:large|big)\b/i.test(name)) return 1.3;
  if (/\b(?:small|baby)\b/i.test(name)) return 0.75;
  if (/\bmini\b/i.test(name)) return 0.5;
  return 1;
}

/** Grams for one ingredient line, or { problem } when the line cannot be read. */
function gramsFor(item, key) {
  const { qty, unit, name, raw } = item;
  const p = PORTION[key] || {};
  /* "(about 300 g)", "(150 g each)" or ", about 180 g each": the weight of the whole line, or of each item. */
  const paren = /(?:\((?:about |roughly |approx\.? )?(\d+(?:\.\d+)?) ?(g|kg|ml|l)(?: (each|in total|total))?\)|,\s*(?:about |roughly |approx\.? )(\d+(?:\.\d+)?) ?(g|kg|ml|l)(?: (each|in total|total))?)/i.exec(name);
  switch (unit) {
    case 'g': return { grams: qty };
    case 'kg': return { grams: qty * 1000 };
    case 'mg': return { grams: qty / 1000 };
    case 'ml': return { grams: qty * density(key) };
    case 'cl': return { grams: qty * 10 * density(key) };
    case 'l': return { grams: qty * 1000 * density(key) };
    case 'tsp': return { grams: qty * (p.tsp !== undefined ? p.tsp : 5 * density(key)) };
    case 'tbsp': return { grams: qty * (p.tbsp !== undefined ? p.tbsp : 15 * density(key)) };
    case 'cup': case 'cups': return { grams: qty * (p.cup !== undefined ? p.cup : 240 * density(key)) };
    case 'oz': return { grams: qty * 28.35 };
    case 'lb': case 'lbs': return { grams: qty * 453.6 };
    case 'pinch': case 'pinches': return { grams: qty * 0.4 };
    case 'dash': return { grams: qty * 0.6 };
    default: break;
  }
  if (COUNT_UNITS.has(unit)) {
    if (paren) {
      const amount = Number(paren[1] || paren[4]);
      const pu = (paren[2] || paren[5]).toLowerCase();
      const w = amount * (pu === 'kg' ? 1000 : pu === 'l' ? 1000 * density(key) : pu === 'ml' ? density(key) : 1);
      return { grams: /each/i.test(paren[3] || paren[6] || '') ? w * qty : w };
    }
    /* A weight per item is sourced when it comes from an SR Legacy portion (recorded in
       tools/nutrition-sources.json); a garlic clove is SR Legacy's 3 g. Anything else is a weight
       written for the site, and the energy it carries counts as unsourced. */
    /* The food's own weight per item applies to a plain count ("2 onions", "1 head"), not to a
       handful, a bunch or a slice of it. */
    const whole = ['', 'piece', 'pieces', 'head', 'heads', 'fillet', 'fillets', 'tin', 'tins', 'can', 'cans', 'rasher', 'rashers', 'link', 'links'].includes(unit);
    const sourced = (whole && Boolean(EACH_SOURCED[key])) || /^cloves?$/.test(unit);
    const each = whole && p.each !== undefined ? p.each : ({ slice: 30, slices: 30, stalk: 40, stalks: 40, stick: 40, sticks: 40, sprig: 1, sprigs: 1,
      handful: 30, handfuls: 30, bunch: 30, bunches: 30, clove: 3, cloves: 3 })[unit];
    if (each === undefined) return { problem: `no weight known for "${raw}" — give it in grams` };
    return { grams: qty * each * (unit === '' || unit === 'piece' || unit === 'pieces' ? sizeFactor(name) : 1), assumed: !sourced };
  }
  return { problem: `unit "${unit}" is not one the calculator reads: "${raw}"` };
}

/* -------------------------------------------------------------- one recipe */

/* Lines with no amount that are not counted, and what each costs the figures. Pepper, water
   and ice cost nothing; salt "to taste" leaves the sodium short; oil "for greasing" or a garnish
   "to serve" leaves the energy a little short. Anything else without an amount is unreadable. */
const NO_AMOUNT_FREE = /^(?:freshly |finely |coarsely )?(?:ground )?(?:black |white )?pepper\b|^(?:a )?(?:little |few )?(?:black )?pepper\b|^(?:cold |iced |boiling |hot |warm )?water\b|^ice\b/i;
const NO_AMOUNT_SALT = /^(?:sea |flaky |fine |kosher |coarse )?salt\b(?!ed)/i;
const NO_AMOUNT_EXTRA = /\b(?:to serve|for serving|to garnish|for garnish|garnish|to finish|for dusting|for greasing|to grease|for the (?:pan|tin|dish|board|tray)|for brushing|optional|to taste)\b/i;
/* Not food: never counted, never a problem. */
const NOT_FOOD = /\b(?:skewers?|cocktail sticks?|toothpicks?|(?:kitchen|butcher'?s?) (?:string|twine)|twine|baking paper|parchment|cheesecloth|muslin|corn husks?|banana lea(?:f|ves)|bouquet garni)\b/i;
/* Whole spices and aromatics counted by the piece: removed before serving or a gram or two each,
   so they are left out rather than given a weight nobody recorded. */
const WHOLE_AROMATIC = /\b(?:cinnamon sticks?|cinnamon|star anise|(?:green |black )?cardamom pods?|cloves(?! garlic)|whole cloves|peppercorns|allspice berries|juniper berries|vanilla (?:pods?|beans?)|curry leaves|bay leaves|(?:makrut |kaffir )?lime leaves|lemongrass(?: stalks?)?|sprigs?|parmesan rind|tea bags?|dried chill(?:i|ies)|saffron(?: threads)?|pandan leaves|dried tangerine peel|kombu|dried peperoncini)\b/i;
/* "Juice of 2 lemons": the yield per fruit recorded in SR Legacy (lemon 48 g, NDB 9152; lime
   44 g, NDB 9160; orange 86 g, NDB 9206). Zest weighs a gram or two and is left out. */
const JUICE = /^(?:the )?(?:finely grated )?(?:zest and )?juice of (\d+(?:\.\d+)?|½|half an?|an?|one|two|three) (lemons?|limes?|oranges?)\b/i;
const JUICE_YIELD = { lemon: ['lemon_juice', 48], lime: ['lime_juice', 44], orange: ['orange_juice', 86] };
const ZEST_ONLY = /^(?:the )?(?:finely )?(?:grated )?zest of\b|^(?:lemon|lime|orange) zest\b/i;
const WORD_NUM = { '½': 0.5, half: 0.5, 'half a': 0.5, 'half an': 0.5, a: 1, an: 1, one: 1, two: 2, three: 3 };
const DEEP_FRY = /\b(?:deep[- ]?fr(?:y|ying|ied)|for frying|to fry|for shallow[- ]frying|for the fryer)\b/i;
const FAT_KEY = /(?:^|_)(?:oil|fat|lard|dripping|ghee|shortening|butter)(?:_|$)|^dripping$|^lard$|^ghee$/;
const COOKED_WORD = /\b(?:cooked|boiled|leftover|steamed|day-old cooked)\b/i;
const RAW_STARCH_KEY = /^(?:rice|rice_[a-z]+|pasta|pasta_[a-z]+|spaghetti|noodles|egg_noodles|rice_noodles|quinoa|couscous|bulgur|barley|lentils|lentils_[a-z]+|split_peas|beans_dry|farro|freekeh|polenta|oats)$/;
const BONE_IN = /\b(?:whole (?:chicken|duck|turkey|goose|bird|fish|sea bream|trout|mackerel|sardines?)|bone-in|on the bone|drumsticks?|chicken wings?|wings|(?:lamb|pork|beef|veal|chicken|duck) (?:shanks?|legs?)|shanks?|oxtail|trotters?|hocks?|carcass|spare ?ribs|short ribs?|ribs\b|cutlets?|t-bone|chops?)\b/i;
const SALT_WATER = /\b(?:for the (?:pasta |cooking |boiling )?water|cooking water|to the water|for boiling|for the brine|for brining|for soaking)\b/i;
const MARINADE_GROUP = /\b(?:marinade|brine|cure|for soaking|soaking liquid|poaching liquid)\b/i;

const FLAG_TEXT = {
  'unsourced': 'part of the energy comes from foods, or weights per item, with no recorded source',
  'salt-unmeasured': 'salt added to taste is not counted, so the sodium is low',
  'salt-water': 'salt for the cooking water is counted in full, though most is poured away, so the sodium is high',
  'extra-uncounted': 'garnishes, greasing and other items with no amount are not counted',
  'tin-drained': 'a drained tin is counted at its full weight, liquid included, so those lines run high',
  'unquantified': 'an ingredient listed without an amount is not counted, so the figures run low',
  'marinade': 'the marinade or brine is counted in full, though some is discarded',
  'alternative': 'where a line offers a choice of foods, only one of them is counted',
  'optional': 'optional ingredients are counted',
  'cooked-weight': 'a cooked weight is worked out with raw figures, so those lines run high',
  'bone-in': 'weights that include bone are counted as if all of it were eaten, so the figures run high',
  'alcohol-cooked': 'all the alcohol is counted, though some is lost in cooking',
  'frying-oil': 'how much frying oil the food takes up cannot be known from the recipe'
};
/* Flags that make a figure an approximation (tier 2) rather than a documented calculation. */
const TIER2_FLAGS = new Set(['unsourced', 'unquantified', 'tin-drained', 'marinade', 'alternative', 'optional', 'cooked-weight', 'bone-in', 'alcohol-cooked']);
/* Flags that make only the sodium figure unreliable. */
const SODIUM_FLAGS = new Set(['salt-unmeasured', 'salt-water']);

const kcalOf = (key, grams) => {
  const [pr, c, f] = FOODS[key];
  return (4 * pr + 4 * c + 9 * f + 7 * (ALC[key] || 0)) * grams / 100;
};

/**
 * Add up an ingredient list.
 *
 * @param {string[]} lines    the recipe's `ing`
 * @param {number} servings
 * @param {{drink?: boolean}} [opts]   a drink is drunk as made, so its alcohol is all there
 * @returns {{nut: number[], kp: number[]|null, alcohol: number, items: object[], problems: string[],
 *            missingKP: string[], flags: string[], unsourcedShare: number, tier: number, reasons: string[]}}
 */
function computeRecipe(lines, servings, opts = {}) {
  const total = { p: 0, c: 0, f: 0, fibre: 0, sugar: 0, na: 0, k: 0, ph: 0, alc: 0 };
  const items = [];
  const problems = [];
  const missingKP = [];
  const flags = new Set();
  let group = '';
  let energy = 0;
  let unsourced = 0;
  let optionalEnergy = 0;
  let alcoholEnergy = 0;
  for (const line of lines) {
    const item = readUnitWords(parseLine(String(line)));
    if (item.group) { group = item.group; continue; }
    const label = item.raw;
    if (!item.name.trim() && /^cloves?$/i.test(item.unit || '')) { items.push({ line: label, key: null, grams: 0, note: 'whole spice or aromatic, not counted' }); continue; }
    if (NOT_FOOD.test(item.name)) { items.push({ line: label, key: null, grams: 0, note: 'not food' }); continue; }
    if (item.qty == null && ZEST_ONLY.test(item.name.trim())) { items.push({ line: label, key: null, grams: 0, note: 'zest, a gram or two, not counted' }); continue; }
    const juice = item.qty == null && JUICE.exec(item.name.trim());
    if (juice) {
      const n = Number(juice[1]) || WORD_NUM[juice[1].toLowerCase()] || 1;
      const [jkey, each] = JUICE_YIELD[juice[2].toLowerCase().replace(/s$/, '')];
      item.qty = n * each; item.unit = 'g'; item.name = jkey.replace('_', ' ');
    }
    /* "2 x 400 g tins chickpeas": the size is per tin. */
    const times = item.qty != null && !item.unit && /^x (\d+(?:\.\d+)?) ?(g|kg|ml|l)\b\s*(.*)$/i.exec(item.name);
    if (times) {
      const amount = Number(times[1]) * item.qty;
      item.unit = times[2].toLowerCase(); item.qty = amount; item.name = times[3];
    }
    const head = item.name.replace(/\([^)]*\)/g, ' ').split(/[,;]/)[0];
    let key = matchFood(head) || matchFood(item.name);
    /* "1 tin (400 g) chopped tomatoes" is the tinned food, whatever the name alone matches. */
    if (key && /^(?:tins?|cans?)$/i.test(item.unit || '')) {
      const tinned = key === 'tomato' ? 'tomatoes_tin' : `${key}_tin`;
      if (FOODS[tinned]) key = tinned;
    }
    if (!key && WHOLE_AROMATIC.test(item.name)) { items.push({ line: label, key: null, grams: 0, note: 'whole spice or aromatic, not counted' }); continue; }
    if (!key) {
      problems.push(`no food matched "${label}"`);
      items.push({ line: label, key: null, grams: 0 });
      continue;
    }
    const name = item.name.trim();
    if (item.qty == null) {
      if (NO_AMOUNT_FREE.test(name)) { items.push({ line: label, key, grams: 0, note: 'no amount, counted as nothing' }); continue; }
      if (NO_AMOUNT_SALT.test(name)) { flags.add('salt-unmeasured'); items.push({ line: label, key, grams: 0, note: 'salt to taste, not counted' }); continue; }
      if (FAT_KEY.test(key) && DEEP_FRY.test(name)) { flags.add('frying-oil'); items.push({ line: label, key, grams: 0, note: 'frying oil, not counted' }); continue; }
      if (NO_AMOUNT_EXTRA.test(name) || /\bwedges\b/i.test(name)) { flags.add('extra-uncounted'); items.push({ line: label, key, grams: 0, note: 'no amount, not counted' }); continue; }
      if (WHOLE_AROMATIC.test(name)) { items.push({ line: label, key, grams: 0, note: 'whole spice or aromatic, not counted' }); continue; }
      /* An ingredient the recipe does not quantify cannot be counted; the figures leave it out and say so. */
      flags.add('unquantified');
      items.push({ line: label, key, grams: 0, note: 'no amount, not counted' });
      continue;
    }
    if (FAT_KEY.test(key) && DEEP_FRY.test(name)) { flags.add('frying-oil'); items.push({ line: label, key, grams: 0, note: 'frying oil, not counted' }); continue; }
    const g = statusOf(key) === 'zero' && !item.unit ? { grams: 0 } : gramsFor(item, key);
    if (g.problem && WHOLE_AROMATIC.test(name)) { items.push({ line: label, key, grams: 0, note: 'whole spice or aromatic, not counted' }); continue; }
    if (g.problem) { problems.push(g.problem); items.push({ line: label, key, grams: 0 }); continue; }
    const scale = g.grams / 100;
    const [pr, c, f, fibre, sugar, na] = FOODS[key];
    total.p += pr * scale; total.c += c * scale; total.f += f * scale; total.fibre += fibre * scale; total.sugar += sugar * scale; total.na += na * scale;
    total.alc += (ALC[key] || 0) * scale;
    if (KP[key]) { total.k += KP[key][0] * scale; total.ph += KP[key][1] * scale; }
    else if (g.grams > 1) missingKP.push(`${key} ("${label}")`);
    const e = kcalOf(key, g.grams);
    energy += e;
    const status = statusOf(key);
    if (status === 'unverified' || status === 'generic' || g.assumed) unsourced += e;
    const lineFlags = [];
    if (key === 'salt' && SALT_WATER.test(name)) lineFlags.push('salt-water');
    if (group && MARINADE_GROUP.test(group) && e > 0) lineFlags.push('marinade');
    if (/\boptional\b/i.test(name)) optionalEnergy += e;
    if (COOKED_WORD.test(name) && RAW_STARCH_KEY.test(key)) lineFlags.push('cooked-weight');
    if (/\b(?:tins?|cans?|jars?)\b/i.test(label) && /\bdrained\b/i.test(label) && !/\bdrained weight\b/i.test(label)) lineFlags.push('tin-drained');
    if (BONE_IN.test(name) && !/\b(?:boneless|meat only|picked|shredded|off the bone)\b/i.test(name) && e > 0 && FOODS[key][0] > 10 && FOODS[key][1] < 5) lineFlags.push('bone-in');
    const sides = /\bor\b/i.test(head) ? head.split(/\bor\b/i) : null;
    const one = sides && matchFood(sides[0]);
    const alt = sides && matchFood(sides.slice(1).join(' '));
    if (one && alt && alt !== one) {
      const a = kcalOf(one, 100); const b = kcalOf(alt, 100);
      if (Math.abs(a - b) > 0.3 * Math.max(a, b, 1) && e > 0) lineFlags.push('alternative');
    }
    if (ALC[key] && !opts.drink) alcoholEnergy += 7 * ALC[key] * scale;
    lineFlags.forEach(x => flags.add(x));
    items.push({ line: label, key, grams: Math.round(g.grams * 10) / 10, status, ...(g.assumed ? { weight: 'assumed' } : {}), ...(lineFlags.length ? { flags: lineFlags } : {}) });
  }
  if (energy > 0 && optionalEnergy / energy > 0.05) flags.add('optional');
  if (energy > 0 && alcoholEnergy / energy > 0.05) flags.add('alcohol-cooked');
  const unsourcedShare = energy > 0 ? unsourced / energy : 0;
  if (unsourcedShare > 0.05) flags.add('unsourced');

  const per = v => v / servings;
  const r = Math.round;
  const p = r(per(total.p));
  const c = r(per(total.c));
  const f = r(per(total.f));
  const alc = r(per(total.alc));
  const fibre = Math.min(r(per(total.fibre)), c);
  const sugar = Math.min(r(per(total.sugar)), c);
  const na = Math.max(5, r(per(total.na) / 10) * 10);
  const kcal = 4 * p + 4 * c + 9 * f + 7 * alc;
  const nut = [kcal, p, c, f, fibre, sugar, na];
  const kp = [r(per(total.k) / 10) * 10, r(per(total.ph) / 10) * 10];
  if (kcal > 1100) problems.push(`${kcal} kcal a serving — check the servings`);
  if (kcal < 15) problems.push(`${kcal} kcal a serving`);

  /* Tier 1: every line read, at most 5% of the energy from foods without a recorded source, and
     no assumption that moves the figures. Tier 2: readable, but resting on assumptions the page
     names. Tier 3: not reproducible from the ingredient list; nothing is published. */
  const flagList = [...flags];
  let tier = 1;
  if (flagList.some(x => TIER2_FLAGS.has(x))) tier = 2;
  if (problems.length || flags.has('frying-oil') || unsourcedShare > 0.5) tier = 3;
  const reasons = problems.length ? ['some ingredient lines cannot be read'] : [];
  if (unsourcedShare > 0.5) reasons.push('most of the energy comes from foods with no recorded source');
  for (const x of flagList) if (FLAG_TEXT[x] && !(x === 'unsourced' && unsourcedShare > 0.5)) reasons.push(FLAG_TEXT[x]);
  const sodiumReliable = !flagList.some(x => SODIUM_FLAGS.has(x)) && tier === 1;
  return { nut, kp, alcohol: alc, items, problems, missingKP, flags: flagList, unsourcedShare, tier, reasons, sodiumReliable };
}

/* How far a written figure may sit from the computed one before the audit objects: rounding, and
   nothing else. */
const TOLERANCE = { kcal: 3, g: 1, na: 15, kp: 15 };

/** Differences between what a recipe prints and what its ingredients add up to. */
function differences(detail, computed, { kp = false } = {}) {
  const out = [];
  const names = ['kcal', 'protein', 'carbohydrate', 'fat', 'fibre', 'sugars', 'sodium'];
  (detail.nut || []).forEach((v, i) => {
    const tol = i === 0 ? TOLERANCE.kcal : i === 6 ? TOLERANCE.na : TOLERANCE.g;
    if (Math.abs(v - computed.nut[i]) > tol) out.push(`${names[i]} is ${v}, the ingredients add up to ${computed.nut[i]}`);
  });
  if (kp) {
    if (!detail.kp) out.push('no kp (potassium, phosphorus) figures');
    else ['potassium', 'phosphorus'].forEach((name, i) => {
      if (Math.abs(detail.kp[i] - computed.kp[i]) > TOLERANCE.kp) out.push(`${name} is ${detail.kp[i]}, the ingredients add up to ${computed.kp[i]}`);
    });
  }
  return out;
}

/* ------------------------------------------------------------ source files */

function volumeFile(n) {
  return path.join(ROOT, 'src', 'data', Number(n) === 1 ? 'catalog.js' : `catalog-${n}.js`);
}

/** The details file that holds a slug, and the text of it. */
function detailsFileFor(slug) {
  const dataDir = path.join(ROOT, 'src', 'data');
  for (const dir of fs.readdirSync(dataDir)) {
    if (!/^details\d*$/.test(dir)) continue;
    for (const file of fs.readdirSync(path.join(dataDir, dir))) {
      if (!file.endsWith('.js')) continue;
      const full = path.join(dataDir, dir, file);
      const text = fs.readFileSync(full, 'utf8');
      if (new RegExp(`^  '${slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}': \\{`, 'm').test(text)) return full;
    }
  }
  return null;
}

/** Rewrite nut (and kp) for one slug inside a details file's text. Returns the new text. */
function rewrite(text, slug, nut, kp) {
  const open = new RegExp(`^  '${slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}': \\{`, 'm').exec(text);
  if (!open) throw new Error(`${slug}: not in this file`);
  const start = open.index;
  const next = /\n {2}'[^']+': \{/g;
  next.lastIndex = start + open[0].length;
  const nextMatch = next.exec(text);
  const end = nextMatch ? nextMatch.index : text.length;
  let record = text.slice(start, end);
  const nutRe = /(\n {4})nut: \[[^\]]*\](,?)/;
  if (!nutRe.test(record)) throw new Error(`${slug}: no nut field`);
  const kpRe = /\n {4}kp: \[[^\]]*\],?/;
  record = record.replace(kpRe, '');
  record = record.replace(nutRe, (_, indent, comma) =>
    `${indent}nut: [${nut.join(', ')}]${kp ? `,${indent}kp: [${kp.join(', ')}]${comma}` : comma}`);
  return text.slice(0, start) + record + text.slice(end);
}

/* --------------------------------------------------------------------- cli */

function main(argv) {
  const has = flag => argv.includes(flag);
  const value = flag => { const i = argv.indexOf(flag); return i >= 0 ? argv[i + 1] : null; };
  const volumes = require('../src/data/volumes');
  const catalogue = volumes.catalog();
  const details = volumes.details();
  const bySlug = new Map(catalogue.map(row => [row.slug, row]));

  let slugs = [];
  if (value('--volume')) {
    const file = volumeFile(value('--volume'));
    if (!fs.existsSync(file)) { console.error(`no such volume: ${value('--volume')}`); process.exit(2); }
    slugs = require(file).map(row => row.slug);
  } else if (value('--slug')) slugs = value('--slug').split(',').map(s => s.trim()).filter(Boolean);
  else if (has('--labelled')) {
    const { TAGS } = require('../src/lib/health');
    slugs = catalogue.filter(row => row.tags.some(t => TAGS.includes(t))).map(row => row.slug);
  } else { console.error('give --volume N, --slug a,b or --labelled'); process.exit(2); }

  let bad = 0;
  let wrote = 0;
  const edits = new Map();
  for (const slug of slugs) {
    const row = bySlug.get(slug);
    const detail = details[slug];
    if (!row || !detail) { console.log(`  ? ${slug}: no such recipe or no details yet`); continue; }
    /* Potassium and phosphorus are kept up to date wherever a recipe already prints them. */
    const kidney = Boolean(detail.kp) || has('--kp');
    const computed = computeRecipe(detail.ing, row.servings, { drink: row.category === 'Drinks' });
    if (has('--lines')) {
      console.log(`\n${slug}  (${row.servings} servings)  tier ${computed.tier}, ${Math.round(computed.unsourcedShare * 100)}% of the energy unsourced`);
      for (const it of computed.items) console.log(`  ${String(it.grams).padStart(7)} g  ${String(it.key).padEnd(24)} ${String(it.status || '').padEnd(10)} ${it.line}${it.note ? `   [${it.note}]` : ''}${it.weight ? '   [weight per item assumed]' : ''}${it.flags ? `   [${it.flags.join(', ')}]` : ''}`);
      for (const r of computed.reasons) console.log(`  · ${r}`);
    }
    const problems = [...computed.problems, ...(kidney ? computed.missingKP.map(m => `no potassium/phosphorus figures for ${m}`) : [])];
    const diffs = differences(detail, computed, { kp: kidney });
    if (has('--write')) {
      if (computed.problems.length) { console.log(`  ✗ ${slug}: not written — ${computed.problems.join('; ')}`); bad++; continue; }
      if (kidney && computed.missingKP.length) { console.log(`  ✗ ${slug}: not written — no potassium/phosphorus for ${computed.missingKP.join(', ')}`); bad++; continue; }
      const file = detailsFileFor(slug);
      if (!file) { console.log(`  ✗ ${slug}: cannot find its details file`); bad++; continue; }
      const text = edits.get(file) || fs.readFileSync(file, 'utf8');
      edits.set(file, rewrite(text, slug, computed.nut, kidney ? computed.kp : null));
      wrote++;
      continue;
    }
    const mark = problems.length || diffs.length ? '✗' : '✓';
    if (problems.length || diffs.length || has('--report')) {
      console.log(`  ${mark} ${slug.padEnd(40)} computed [${computed.nut.join(', ')}]${kidney ? ` kp [${computed.kp.join(', ')}]` : ''}  written [${(detail.nut || []).join(', ')}]`);
      for (const text of [...problems, ...diffs]) console.log(`        ${text}`);
    }
    if (problems.length || diffs.length) bad++;
  }
  for (const [file, text] of edits) fs.writeFileSync(file, text);
  if (has('--write')) console.log(`${wrote} recipe${wrote === 1 ? '' : 's'} rewritten${bad ? `, ${bad} not written` : ''}`);
  else console.log(`${slugs.length} recipes read, ${bad} with problems`);
  if (bad) process.exitCode = 1;
}

if (require.main === module) {
  try { main(process.argv.slice(2)); } catch (e) { console.error(e.stack || e.message); process.exit(1); }
}

module.exports = { computeRecipe, differences, matchFood, gramsFor, rewrite, FOODS, TOLERANCE, FLAG_TEXT };
