#!/usr/bin/env node
'use strict';
/**
 * Food-handling rules a recipe's own words can break, read from the ingredient list, the method,
 * the tips and the storage note. Each rule rests on a named source; the reading behind each is in
 * docs/release-2026-10-uncertainties/food-handling-review.md.
 *
 *   oil-preserve-life   garlic, herbs, chillies or vegetables kept under oil, or meat under fat, for
 *                       more than 4 days in the fridge, or at room temperature at all (NCHFP,
 *                       "Freezing Garlic-in-Oil"; Oregon State Extension SP 50-701, rev. 2025, and
 *                       SP 50-677, rev. 2024; USDA FSIS on leftovers)
 *   unprocessed-jar     hot-filled or cold-packed jars said to keep in a cupboard or cool place, with
 *                       no boiling-water processing (NCHFP; Penn State Extension on open-kettle canning)
 *   raw-egg             egg served raw, or in a sauce or foam not taken to 71°C / 160°F, without
 *                       pasteurised eggs (FDA and FSIS on raw-egg dishes; UK FSA on British Lion eggs)
 *   raw-fish            wild fish served raw or acid-cured with no parasite freezing (FDA Fish and
 *                       Fishery Products Hazards and Controls Guidance; UK FSA; AESAN). Tuna of the
 *                       exempt species and farmed salmon are not reported.
 *   raw-shellfish,      raw prawns, and raw beef, which no method makes safe: reported for review,
 *   raw-beef            never as confirmed
 *   marinade-out        raw meat, poultry or fish left to marinate an hour or more, or overnight,
 *                       with no fridge named in the step (USDA FSIS)
 *   raw-flour           cookie dough eaten unbaked without heat-treated flour (FDA)
 *
 * "confirmed" findings fail `npm run check`; "review" findings are for a person. A finding a person
 * has read and judged goes in src/data/food-handling-reviewed.json with its reason. The verdict is
 * tied to a fingerprint of the ingredients, method, tips and storage note, so it comes back as soon
 * as any of them changes. Passing this audit does not make a recipe safe: it means only that none of
 * these patterns is in its text.
 *
 *   node tools/food-handling-audit.js                 summary; exit 1 on any confirmed finding
 *   node tools/food-handling-audit.js --list [kind]   every finding (or only confirmed / review)
 *   node tools/food-handling-audit.js --slug a,b      the findings for some recipes
 *   node tools/food-handling-audit.js --record FILE   add verdicts: [{ slug, code, key, status, reason, source? }]
 *   node tools/food-handling-audit.js --selftest      the cases at the end, which pin down each rule
 */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const LEDGER_FILE = path.join(__dirname, '..', 'src', 'data', 'food-handling-reviewed.json');
const STATUSES = new Set(['exception', 'specialist', 'cooking', 'duplicate']);

function fingerprint(r) {
  const basis = JSON.stringify([r.title, r.ingredients, r.steps, r.tips, r.storage]);
  return crypto.createHash('sha256').update(basis).digest('hex').slice(0, 12);
}

/* The longest keeping time a clause promises, in days. "A week", "two months", "12 months". */
const NUM = { a: 1, an: 1, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, ten: 10, twelve: 12 };
function days(clause) {
  let best = 0;
  for (const m of clause.matchAll(/\b(\d+|an?|one|two|three|four|five|six|seven|eight|ten|twelve)\s+(days?|weeks?|months?|years?)\b/gi)) {
    const n = Number(m[1]) || NUM[m[1].toLowerCase()];
    best = Math.max(best, n * (/^week/i.test(m[2]) ? 7 : /^month/i.test(m[2]) ? 30 : /^year/i.test(m[2]) ? 365 : 1));
  }
  return best;
}
/* Sentences, then the clauses inside them that are not about the freezer. */
const sentences = text => String(text || '').split(/(?<=[.!?])\s+/).filter(Boolean);
const clauses = s => s.split(/;|,\s*(?:or|and|but)\s+|\bor in the freezer\b/i).filter(c => !/\bfreez|\bfrozen\b/i.test(c));

const AROMATIC = /\b(?:garlic|basil|herbs?|parsley|coriander|cilantro|mint|dill|thyme|oregano|chill(?:i|ies)|chiles?|peppers?|onions?|shallots?|spring onions?|scallions?|ginger|aubergines?|tomato(?:es)?|mushrooms?|anchov\w*|shrimp|scallops?|olives?|capers)\b/i;
const PROTEIN = /\b(?:chicken|beef|pork|lamb|mutton|duck|turkey|goat|veal|venison|steak|ribs?|thighs?|drumsticks?|wings?|breasts?|brisket|fish|salmon|cod|prawns?|shrimp|squid|octopus|tofu-free)\b/i;

function check(r) {
  const out = [];
  const add = (kind, code, detail, key) => out.push({ slug: r.slug, kind, code, detail, key: String(key).trim().slice(0, 120) });
  const ing = r.ingredients || [];
  const steps = r.steps || [];
  const tips = r.tips || [];
  const store = r.storage || '';
  const name = `${r.slug} ${r.title}`;
  const all = [...ing, ...steps, ...tips, store].join(' \n ');

  /* 1. Aromatics or vegetables kept under oil, meat under fat. */
  /* A flavoured oil's storage note need not say "oil"; strained fat on its own holds no solids. */
  const oilItself = /(?:chill?i|chili|garlic|scallion|spring-onion|ginger|herb|infused|flavoured)[- ]oil|chill?i-crisp|chili-crisp|macha|xo-sauce|shito/i.test(name);
  if (ing.some(l => AROMATIC.test(l)) || /\bconfit\b/i.test(name)) {
    for (const s of [...sentences(store), ...tips.flatMap(sentences)]) {
      if (!(oilItself || /\b(?:oil|fat)\b/i.test(s)) || !/\b(?:keeps?|kept|store|refrigerat\w*|fridge|room temperature|cupboard)\b/i.test(s)) continue;
      if (/\b(?:rendered|strained)\b[^.]*\bfat\b|\bfat keeps\b/i.test(s)) continue;
      for (const c of clauses(s)) {
        const d = days(c);
        const warm = /\b(?:room temperature|cupboard|pantry|larder)\b/i.test(c) && !/\bnot\b|\bnever\b/i.test(c);
        if (d > 4 || (warm && d)) { add('confirmed', 'oil-preserve-life', `kept under oil or fat for ${d} days${warm ? ' outside the fridge' : ''}: "${s.slice(0, 140)}"`, s); break; }
      }
    }
  }

  /* 2. Jars said to keep in the cupboard with no boiling-water processing. */
  const jarred = /\bsterilis\w*|\bhot jars\b|\bvinegar-proof\b|\bseal(?:ed)? (?:at once|while hot|the jars?)\b|\binto (?:clean|hot|warm|sterilised) jars\b|\bpot (?:it |them )?in\b/i.test([...ing, ...steps].join(' '));
  const spirit = r.category === 'Drinks' || /\b(?:vodka|grappa|brandy|rum|gin|whisk(?:e)?y|everclear)\b/i.test(ing.join(' '));
  if (jarred && !spirit) {
    for (const s of sentences(store)) {
      if (/\bcanner\b|\bnot\b|\bneed\b/i.test(s)) continue;
      for (const c of clauses(s)) {
        if (/\b(?:cupboard|cool,? dark place|cool place|room temperature|pantry|larder|on the shelf)\b/i.test(c) && days(c) >= 7) {
          add('confirmed', 'unprocessed-jar', `hot-filled or cold-packed jars kept out of the fridge for ${days(c)} days with no boiling-water processing: "${s.slice(0, 140)}"`, s);
          break;
        }
      }
    }
  }

  /* 3. Raw or lightly cooked egg without pasteurised eggs. */
  const eggLines = ing.filter(l => /\byolks?\b|\begg whites?\b|\bwhites?\b.*\begg|\beggs?\b[^,]*,[^,]*\bseparated\b/i.test(l)
    && !/\bhard[- ]boiled\b|\bboiled\b|\bfor brushing\b|\bto glaze\b|\begg wash\b|\bcooked\b|\bsalted egg\b/i.test(l));
  const rawEggDish = /(?:^|-)sour$/.test(r.slug) || /mayonnaise|\baioli\b|alioli|rouille|caesar|hollandaise|bearnaise|béarnaise|benedict|eggs-florentine|eggs-royale|eggs-sardou|tartare|carpaccio|mousse|semifreddo|bourride|eggnog|carbonara|tonnato|r[eé]moulade|zabaglione|zabaione|sabayon|tiramisu|bouillabaisse|soupe-de-poisson|frites|fizz\b|\bflip\b/i.test(name)
    || /\bdrop by drop\b|\ba drop at a time\b|\bdrops? at a time\b|\bwithout ice\b|\bdry[- ]shake\b/i.test(steps.join(' '));
  /* A temperature of 71°C / 160°F or more that the egg mixture itself is taken to ("reaching 75°C
     on a thermometer", "cook to 80C"), not the butter, water or oven around it. */
  const T71 = '(?:7[1-9]|[89]\\d)\\s*°?\\s*C\\b|(?:1[6-9]\\d|20\\d)\\s*°?\\s*F\\b';
  const cookedThrough = steps.flatMap(sentences).some(s => new RegExp(`\\b(?:to|reach\\w*|reads?|registers?|at least)\\s+(?:${T71})`, 'i').test(s)
    || (/\bthermometer\b/i.test(s) && new RegExp(`\\b(?:${T71})`).test(s) && !/\b(?:butter|oil|oven)\b/i.test(s)));
  /* The ingredient line itself has to name them: a tip that only suggests pasteurised yolks
     ("Concerned about raw egg? Use pasteurised yolks") left caesar-salad with raw yolks as written. */
  if (eggLines.length && rawEggDish && !eggLines.every(l => /pasteuri[sz]ed|lion/i.test(l)) && !/pasteuri[sz]ed/i.test(ing.join(' ')) && !cookedThrough) {
    add('confirmed', 'raw-egg', `egg that is not cooked through, with no pasteurised eggs: "${eggLines[0]}"`, eggLines[0]);
  }

  /* 4. Raw or acid-cured fish, prawns and beef. */
  const rawDish = /ceviche|kokoda|\bpoke\b|gravlax|gravad|lomi|crudo|sashimi|sushi|chirashi|tartare|tiradito|kinilaw|aguachile|en-vinagre|ika-mata|leche-de-tigre|yusheng|nigiri|temaki|carpaccio/i.test(name)
    || /\b(?:eaten|served) raw\b|\bnever cooked\b/i.test(all);
  if (rawDish) {
    for (const l of ing) {
      if (/\b(?:smoked|tinned|canned|cooked|crab sticks?|in oil|sauce|stock|flakes)\b/i.test(l) || /^#/.test(l)) continue;
      if (/\b(?:salmon|trout|white fish|sea bass|bass|bream|snapper|mahi[- ]mahi|cod|halibut|kingfish|hamachi|yellowtail|mackerel|herring|anchov\w*|sardines?|scallops?|fluke|flounder|tilapia)\b/i.test(l)) {
        if (!/\bfrozen\b|\bfarmed\b/i.test(l)) add('confirmed', 'raw-fish', `fish served raw with no parasite freezing named: "${l}"`, l);
      } else if (/\b(?:prawns?|shrimp)\b/i.test(l) && /\braw\b/i.test(l)) {
        add('review', 'raw-shellfish', `raw prawns served uncooked: "${l}"`, l);
      } else if (/\b(?:beef|steak|fillet|rump|sirloin)\b/i.test(l) && !/\b(?:fish|tuna|salmon)\b/i.test(l)) {
        add('review', 'raw-beef', `raw beef served uncooked: "${l}"`, l);
      }
    }
  }

  /* 5. Marinating out of the fridge. */
  if (ing.some(l => PROTEIN.test(l) && !/\bstock\b|\bbroth\b|\bsauce\b/i.test(l))) {
    for (const step of steps) {
      if (/\bfridge\b|\brefrigerat\w*|\bchill\w*|\bcold\b/i.test(step)) continue;
      for (const s of sentences(step)) {
        if (!/\bmarinat\w*|\bmarinade\b/i.test(s)) continue;
        const hours = /\bovernight\b/i.test(s) ? 8 : Math.max(0, ...[...s.matchAll(/\b(\d+)\s*(?:to\s*\d+\s*)?(hours?|minutes?)\b/gi)].map(m => Number(m[1]) / (/^min/i.test(m[2]) ? 60 : 1)));
        if (hours >= 1) { add('confirmed', 'marinade-out', `raw protein marinated ${hours >= 8 ? 'overnight' : `${hours} h`} with no fridge named: "${s.slice(0, 140)}"`, s); break; }
      }
    }
  }

  /* 6. Raw flour in a dough eaten unbaked. */
  if (/edible-cookie-dough|cookie-dough-(?:bites|bars|dip|truffles|balls)/i.test(r.slug) && ing.some(l => /\bflour\b/i.test(l))
    && !/ready to eat raw|safe to eat raw|heat-treated and ready/i.test(ing.join(' '))) {
    add('confirmed', 'raw-flour', 'flour eaten unbaked, with no commercially heat-treated, ready-to-eat flour named', 'flour');
  }
  return out;
}

function loadLedger() {
  try { return JSON.parse(fs.readFileSync(LEDGER_FILE, 'utf8')); } catch { return { recipes: {} }; }
}

/* Each case: a name, a recipe, the finding code, and whether it must be reported. The "before"
   texts are what the recipes said before the October 2026 corrections. */
const R = (extra) => ({ slug: 'corpus', title: 'Corpus', category: 'Appetizers', ingredients: [], steps: [], tips: [], storage: '', ...extra });
const CASES = [
  ['pesto kept 5 days under oil', R({ ingredients: ['80 g basil', '1 garlic clove'], storage: 'Refrigerate under a layer of oil for 5 days, or freeze in ice-cube trays for 6 months.' }), 'oil-preserve-life', true],
  ['pesto kept 4 days under oil', R({ ingredients: ['80 g basil', '1 garlic clove'], storage: 'Refrigerate under a layer of oil for up to 4 days, or freeze in ice-cube trays for 6 months.' }), 'oil-preserve-life', false],
  ['chilli oil at room temperature', R({ slug: 'chilli-oil', title: 'Sichuan Chilli Oil', ingredients: ['80 g chilli flakes', '40 g ginger'], storage: 'In a sealed jar at room temperature for 3 months, or refrigerated for 6.' }), 'oil-preserve-life', true],
  ['an olive oil cake that keeps 5 days', R({ slug: 'olive-oil-cake', title: 'Olive Oil Cake', ingredients: ['200 ml olive oil', 'Zest of 1 orange', '1 tsp thyme'], storage: 'Keeps in an airtight container for 5 days.' }), 'oil-preserve-life', false],
  ['a vinaigrette that keeps 2 weeks', R({ ingredients: ['120 ml olive oil', '1 garlic clove', '60 ml vinegar'], storage: 'Keeps in a sealed jar in the fridge for up to 2 weeks. The olive oil may solidify when cold.' }), 'oil-preserve-life', false],
  ['jam in the cupboard for a year', R({ steps: ['Ladle into hot sterilised jars, seal at once and cool.'], storage: 'Unopened jars keep in a cool, dark cupboard for up to 1 year.' }), 'unprocessed-jar', true],
  ['jam in the fridge, cupboard only after processing', R({ steps: ['Ladle into hot sterilised jars, seal at once, cool and refrigerate.'], storage: 'Keep the jars in the fridge: unopened for up to 1 year. Hot jars and a seal alone do not make jam safe for the cupboard; cupboard jars need a tested recipe and processing in a boiling-water canner.' }), 'unprocessed-jar', false],
  ['aioli with raw yolks', R({ title: 'Aioli', ingredients: ['2 egg yolks', '300 ml olive oil'], steps: ['Add the oil drop by drop.'] }), 'raw-egg', true],
  ['aioli with pasteurised yolks', R({ title: 'Aioli', ingredients: ['2 egg yolks, pasteurised (or British Lion-stamped in the UK)', '300 ml olive oil'], steps: ['Add the oil drop by drop.'] }), 'raw-egg', false],
  ['tiramisu yolks cooked to 75°C', R({ title: 'Tiramisu', ingredients: ['4 large egg yolks'], steps: ['Whisk the yolks over simmering water until they reach 75°C on a thermometer.'] }), 'raw-egg', false],
  ['hollandaise "cooked" by hot butter', R({ title: 'Eggs Benedict', ingredients: ['3 large egg yolks'], steps: ['Melt the butter until it is around 90°C to cook the yolks as it goes in.'] }), 'raw-egg', true],
  ['ceviche of very fresh fish', R({ title: 'Ceviche', ingredients: ['600 g very fresh firm white fish, such as sea bass or bream, skinned'] }), 'raw-fish', true],
  ['ceviche of fish frozen for eating raw', R({ title: 'Ceviche', ingredients: ['600 g firm white fish, such as sea bass, sold for eating raw and previously frozen to kill parasites'] }), 'raw-fish', false],
  ['tuna poke', R({ title: 'Poke Bowl', ingredients: ['500 g sashimi-grade yellowfin tuna'] }), 'raw-fish', false],
  ['chicken marinated overnight with no fridge', R({ ingredients: ['8 chicken thighs'], steps: ['Coat the chicken in the marinade and leave to marinate overnight.'] }), 'marinade-out', true],
  ['chicken marinated overnight in the fridge', R({ ingredients: ['8 chicken thighs'], steps: ['Coat the chicken in the marinade, cover and marinate overnight in the fridge.'] }), 'marinade-out', false],
  ['a 20-minute marinade', R({ ingredients: ['8 chicken thighs'], steps: ['Turn the chicken through the marinade and leave 20 minutes.'] }), 'marinade-out', false],
  ['cookie dough bites with plain flour', R({ slug: 'cookie-dough-bites', ingredients: ['200 g plain flour'], steps: ['Spread the flour on a tray and bake for 5 minutes.'] }), 'raw-flour', true],
  ['cookie dough bites with ready-to-eat flour', R({ slug: 'cookie-dough-bites', ingredients: ['200 g heat-treated plain flour, sold as ready to eat raw'], steps: ['Stir in the flour.'] }), 'raw-flour', false],
];

function main() {
  const args = process.argv.slice(2);
  const opt = n => { const i = args.indexOf(n); return i >= 0 ? args[i + 1] : null; };

  if (args.includes('--selftest')) {
    let failed = 0;
    for (const [label, r, code, expected] of CASES) {
      const got = check(r).some(f => f.code === code);
      if (got !== expected) { failed++; console.log(`  ✗ food-handling case "${label}": ${expected ? 'not reported' : 'reported'} (${code})`); }
    }
    console.log(failed ? `${failed} of ${CASES.length} food-handling cases wrong.` : `  ✓ all ${CASES.length} food-handling cases as expected`);
    process.exit(failed ? 1 : 0);
  }

  const { loadRecipes } = require('../src/build');
  let recipes = loadRecipes();
  const bySlug = new Map(recipes.map(r => [r.slug, r]));
  const ledger = loadLedger();
  ledger.recipes = ledger.recipes || {};

  if (opt('--record')) {
    const problems = [];
    for (const v of JSON.parse(fs.readFileSync(opt('--record'), 'utf8'))) {
      const r = bySlug.get(v.slug);
      if (!r) { problems.push(`${v.slug}: no such recipe`); continue; }
      if (!STATUSES.has(v.status)) { problems.push(`${v.slug}: status "${v.status}"`); continue; }
      if (!v.reason || v.reason.length < 20) { problems.push(`${v.slug}: a verdict needs a specific reason`); continue; }
      if (!check(r).some(f => f.code === v.code && f.key === String(v.key).trim().slice(0, 120))) { problems.push(`${v.slug}: no current finding ${v.code}|${v.key}`); continue; }
      const entry = ledger.recipes[v.slug] = ledger.recipes[v.slug] || { findings: {} };
      entry.fingerprint = fingerprint(r);
      entry.findings[`${v.code}|${String(v.key).trim().slice(0, 120)}`] = { status: v.status, reason: v.reason, ...(v.source ? { source: v.source } : {}) };
    }
    fs.writeFileSync(LEDGER_FILE, JSON.stringify(ledger, null, 2) + '\n');
    for (const p of problems) console.log(`  ✗ ${p}`);
    process.exit(problems.length ? 1 : 0);
  }

  if (opt('--slug')) { const want = new Set(opt('--slug').split(',')); recipes = recipes.filter(r => want.has(r.slug)); }
  const findings = recipes.flatMap(check);
  for (const f of findings) {
    const entry = ledger.recipes[f.slug];
    const verdict = entry && entry.findings[`${f.code}|${f.key}`];
    if (!verdict) continue;
    if (entry.fingerprint !== fingerprint(bySlug.get(f.slug))) { f.detail += ` (stale review: the recipe changed after it was marked ${verdict.status})`; f.stale = true; continue; }
    if (f.kind === 'confirmed' && verdict.status !== 'exception') { f.detail += ` (marked ${verdict.status}: ${verdict.reason})`; continue; }
    f.kind = verdict.status;
    f.reason = verdict.reason;
  }
  const kinds = ['confirmed', 'review', 'specialist', 'cooking', 'exception', 'duplicate'];
  const show = args.includes('--list') ? (opt('--list') && !opt('--list').startsWith('-') ? opt('--list') : null) : undefined;
  if (show !== undefined || opt('--slug')) {
    for (const f of findings.filter(f => !show || f.kind === show)) console.log(`  ${f.kind === 'confirmed' ? '✗' : f.kind === 'review' ? '?' : '·'} ${f.slug} [${f.code}] ${f.detail}${f.reason ? ` — ${f.kind}: ${f.reason}` : ''}`);
  }
  const n = k => findings.filter(f => f.kind === k).length;
  const u = k => new Set(findings.filter(f => f.kind === k).map(f => f.slug)).size;
  console.log(`food handling across ${recipes.length} recipes: ` + kinds.map(k => `${n(k)} ${k} (${u(k)} recipes)`).join(', ') + `; ${findings.filter(f => f.stale).length} stale reviews`);
  process.exit(n('confirmed') ? 1 : 0);
}

if (require.main === module) main();
module.exports = { check, fingerprint };
