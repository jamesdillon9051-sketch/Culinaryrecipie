#!/usr/bin/env node
'use strict';
/**
 * Nutrition worked out from the ingredient list, not written beside it.
 *
 * The nutrition table on a recipe page says "calculated from the ingredient list". For most of
 * the catalogue that was an estimate made by eye, and the script that did the sums for volumes 26
 * to 31 was never put in the repository, so nobody could reproduce a figure. This is that script,
 * made to read the recipe itself: every ingredient line is parsed (src/lib/ingredients.js), matched
 * to a food in tools/nutrition-foods.js, turned into grams, and added up per serving. A line the
 * calculator cannot read is a failure and not a zero, because the figure it would have added is
 * exactly the one that goes missing.
 *
 *   node tools/nutrition-calc.js --volume 32             compare each recipe's nutrition with its ingredients
 *   node tools/nutrition-calc.js --volume 32 --write     rewrite `nut` (and `kp` where a recipe is Kidney-Friendly)
 *   node tools/nutrition-calc.js --slug a,b --lines      show how every ingredient line was read
 *   node tools/nutrition-calc.js --labelled              every recipe that carries a health label (what the audit reads)
 *
 * `nut` is [kcal, protein, carbohydrate, fat, fibre, sugars, sodium]; kcal is 4 protein + 4
 * carbohydrate + 9 fat on the rounded figures, the same sum tools/nutrition-audit.js checks, which
 * overstates a high-fibre dish a little and so errs on the side of the calorie limits.
 * `kp` is [potassium, phosphorus] in mg.
 *
 * What this cannot do: it counts every ingredient at its raw weight and everything listed as eaten
 * (the oil in the pan, the flour on the chicken), it cannot see an additive in a packaged food, and
 * its food table is written from memory of standard tables, good to about 10 per cent.
 */
const fs = require('fs');
const path = require('path');
const { parseLine } = require('../src/lib/ingredients');
const { BASE, MORE, KP, ALIAS, PORTION } = require('./nutrition-foods');

const ROOT = path.join(__dirname, '..');
const FOODS = { ...BASE, ...MORE };

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

const COUNT_UNITS = new Set(['', 'piece', 'pieces', 'fillet', 'fillets', 'strip', 'strips', 'rasher', 'rashers', 'head', 'heads',
  'slice', 'slices', 'stalk', 'stalks', 'stick', 'sticks', 'sprig', 'sprigs', 'clove', 'cloves', 'bunch', 'bunches', 'handful', 'handfuls']);

const density = key => ((PORTION[key] || {}).tbsp || 15) / 15;

/* Unit words the site's ingredient parser leaves in the name, written out the way a recipe
   writes them. */
const UNIT_WORDS = { litre: 'l', litres: 'l', liter: 'l', liters: 'l', millilitre: 'ml', millilitres: 'ml', milliliter: 'ml', milliliters: 'ml',
  gram: 'g', grams: 'g', kilogram: 'kg', kilograms: 'kg', ounce: 'oz', ounces: 'oz', pound: 'lb', pounds: 'lb',
  tablespoon: 'tbsp', tablespoons: 'tbsp', teaspoon: 'tsp', teaspoons: 'tsp', tbsps: 'tbsp', tsps: 'tsp' };

function readUnitWords(item) {
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
    const each = p.each !== undefined ? p.each : ({ slice: 30, slices: 30, stalk: 40, stalks: 40, stick: 40, sticks: 40, sprig: 1, sprigs: 1,
      handful: 30, handfuls: 30, bunch: 30, bunches: 30, clove: 3, cloves: 3 })[unit];
    if (each === undefined) return { problem: `no weight known for "${raw}" — give it in grams` };
    return { grams: qty * each * (unit === '' || unit === 'piece' || unit === 'pieces' ? sizeFactor(name) : 1) };
  }
  return { problem: `unit "${unit}" is not one the calculator reads: "${raw}"` };
}

/* -------------------------------------------------------------- one recipe */

const NO_AMOUNT_OK = /^(?:freshly |finely |coarsely )?(?:ground )?(?:black |white )?pepper\b|^(?:a )?(?:little |few )?(?:black )?pepper\b|^water\b|^ice\b/i;

/**
 * Add up an ingredient list.
 *
 * @param {string[]} lines    the recipe's `ing`
 * @param {number} servings
 * @returns {{nut: number[], kp: number[]|null, items: object[], problems: string[], missingKP: string[]}}
 */
function computeRecipe(lines, servings) {
  const total = { p: 0, c: 0, f: 0, fibre: 0, sugar: 0, na: 0, k: 0, ph: 0 };
  const items = [];
  const problems = [];
  const missingKP = [];
  for (const line of lines) {
    const item = readUnitWords(parseLine(String(line)));
    if (item.group) continue;
    const label = item.raw;
    const head = norm(item.name.replace(/\([^)]*\)/g, ' ').split(/[,;]/)[0]);
    const key = matchFood(item.name.replace(/\([^)]*\)/g, ' ').split(/[,;]/)[0]) || matchFood(item.name);
    if (!key) {
      problems.push(`no food matched "${label}"`);
      items.push({ line: label, key: null, grams: 0 });
      continue;
    }
    if (item.qty == null) {
      if (NO_AMOUNT_OK.test(item.name.trim())) { items.push({ line: label, key, grams: 0, note: 'no amount, counted as nothing' }); continue; }
      problems.push(`no amount on "${label}" — give a quantity`);
      items.push({ line: label, key, grams: 0 });
      continue;
    }
    const g = gramsFor(item, key);
    if (g.problem) { problems.push(g.problem); items.push({ line: label, key, grams: 0 }); continue; }
    const scale = g.grams / 100;
    const [pr, c, f, fibre, sugar, na] = FOODS[key];
    total.p += pr * scale; total.c += c * scale; total.f += f * scale; total.fibre += fibre * scale; total.sugar += sugar * scale; total.na += na * scale;
    if (KP[key]) { total.k += KP[key][0] * scale; total.ph += KP[key][1] * scale; }
    else if (g.grams > 1) missingKP.push(`${key} ("${label}")`);
    items.push({ line: label, key, grams: Math.round(g.grams * 10) / 10 });
    void head;
  }
  const per = v => v / servings;
  const r = Math.round;
  const p = r(per(total.p));
  const c = r(per(total.c));
  const f = r(per(total.f));
  const fibre = Math.min(r(per(total.fibre)), c);
  const sugar = Math.min(r(per(total.sugar)), c);
  const na = Math.max(5, r(per(total.na) / 10) * 10);
  const kcal = 4 * p + 4 * c + 9 * f;
  const nut = [kcal, p, c, f, fibre, sugar, na];
  const kp = [r(per(total.k) / 10) * 10, r(per(total.ph) / 10) * 10];
  if (kcal > 1100) problems.push(`${kcal} kcal a serving — check the servings`);
  if (kcal < 15) problems.push(`${kcal} kcal a serving`);
  return { nut, kp, items, problems, missingKP };
}

/* How far a written figure may sit from the computed one before the audit objects: rounding, and
   nothing else. */
const TOLERANCE = { kcal: 3, g: 1, na: 15, kp: 15 };

/** Differences between what a recipe prints and what its ingredients add up to. */
function differences(detail, computed, { kp = false } = {}) {
  const out = [];
  const names = ['kcal', 'protein', 'carbohydrate', 'fat', 'fibre', 'sugars', 'sodium'];
  detail.nut.forEach((v, i) => {
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
    const kidney = row.tags.includes('Kidney-Friendly') || has('--kp');
    const computed = computeRecipe(detail.ing, row.servings);
    if (has('--lines')) {
      console.log(`\n${slug}  (${row.servings} servings)`);
      for (const it of computed.items) console.log(`  ${String(it.grams).padStart(7)} g  ${String(it.key).padEnd(24)} ${it.line}${it.note ? `   [${it.note}]` : ''}`);
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

module.exports = { computeRecipe, differences, matchFood, gramsFor, rewrite, FOODS, TOLERANCE };
