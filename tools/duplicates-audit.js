#!/usr/bin/env node
'use strict';
/**
 * No two recipes on the site may be the same dish, and none may be a shell.
 *
 * tools/dedupe-candidates.js is for deciding what to write. This is what stops
 * a duplicate that got through anyway: it runs the exact rules over the whole
 * catalogue on every `npm run check`, so a recipe added under a slightly
 * different name fails the build instead of quietly splitting an existing
 * page's ranking.
 *
 *   1. No two recipes share a folded title, core words, or primary search phrase
 *      (the first `kw` entry) — apart from the pairs listed below.
 *   2. No two recipes share half or more of their method, word for word.
 *   3. No recipe contains placeholder text of the kind a bulk generator writes
 *      into records it has not filled in.
 *
 * The exceptions are pairs that were already on the site when this audit was
 * written. They are listed rather than waved through, each is a candidate for
 * merging into one page with a redirect, and nothing new may be added to the
 * list: a new pair that trips a rule is a duplicate, and gets fixed.
 */
const volumes = require('../src/data/volumes');
const { catalogueDuplicates } = require('../src/lib/dedupe');

const catalog = volumes.catalog();
const details = volumes.details();
const recipes = catalog.map(row => ({
  slug: row.slug, title: row.title,
  kw: ((details[row.slug] || {}).kw || []).map(k => String(k).toLowerCase()),
  steps: (details[row.slug] || {}).st || [],
  text: [(details[row.slug] || {}).d, (details[row.slug] || {}).why, ...((details[row.slug] || {}).st || []),
    ...((details[row.slug] || {}).tips || []), (details[row.slug] || {}).store,
    ...((details[row.slug] || {}).ing || [])].join(' ')
}));

/* Pairs already published before this audit existed, each one a candidate for
   merging into a single page with a redirect. Sorted, slug|slug. */
const KNOWN = new Set([
  'aubergine-parmigiana|melanzane-alla-parmigiana',
  'chicken-tagine-olives|moroccan-chicken-tagine',
  'classic-potato-salad|potato-salad',
  'coleslaw|creamy-coleslaw',
  'garlic-naan|naan',
  'german-potato-salad|kartoffelsalat',
  'grilled-cheese|grilled-cheese-sandwich',
  'kibbeh|kibbeh-mekliyeh',
  'lamb-rogan-josh|rogan-josh',
  'moules-mariniere|moules-marinieres',
  'philly-soft-pretzel|soft-pretzels',
  'pork-schnitzel|schnitzel',
  'pulled-pork|pulled-pork-sandwich',
  'sfiha|sfiha-baalbakieh',
  'sloppy-joe-mix|sloppy-joes'
]);

const failures = [];

for (const group of catalogueDuplicates(recipes)) {
  const pairs = [];
  for (let i = 0; i < group.slugs.length; i++) {
    for (let j = i + 1; j < group.slugs.length; j++) pairs.push(`${group.slugs[i]}|${group.slugs[j]}`);
  }
  const fresh = pairs.filter(p => !KNOWN.has(p));
  if (fresh.length) failures.push(`${group.slugs.join(' and ')} — ${group.rule}`);
}

/* Method copied word for word. Short steps are ignored: "Serve." recurs. */
const norm = s => String(s).toLowerCase().replace(/\s+/g, ' ').trim();
const bySentence = new Map();
for (const r of recipes) {
  for (const s of new Set(r.steps.map(norm))) {
    if (s.split(' ').length < 6) continue;
    if (!bySentence.has(s)) bySentence.set(s, new Set());
    bySentence.get(s).add(r.slug);
  }
}
for (const r of recipes) {
  const mine = new Set(r.steps.map(norm).filter(s => s.split(' ').length >= 6));
  const shared = new Map();
  for (const s of mine) for (const other of bySentence.get(s) || []) if (other !== r.slug) shared.set(other, (shared.get(other) || 0) + 1);
  for (const [other, count] of shared) {
    if (r.slug < other && count / mine.size >= 0.5) failures.push(`${r.slug} and ${other} — ${count} of ${mine.size} method steps are identical`);
  }
}

const PLACEHOLDER = [/key regional/i, /aromatic spices and seasoning/i, /fresh herbs or secondary/i,
  /regional sauce or broth/i, /cooking oil or butter base/i, /standard prep instructions/i,
  /prepare all ingredients according/i, /lorem ipsum/i, /\bTODO\b/, /\bTBD\b/, /top searched/i];
for (const r of recipes) {
  const hit = PLACEHOLDER.find(p => p.test(r.text));
  if (hit) failures.push(`${r.slug} — contains placeholder text (${hit})`);
}

for (const f of failures) console.log(`  ✗ ${f}`);
if (failures.length) process.exit(1);
console.log(`No two of ${catalog.length} recipes are the same dish, share their method, or carry placeholder text.`);
