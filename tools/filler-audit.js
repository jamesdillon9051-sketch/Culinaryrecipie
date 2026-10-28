#!/usr/bin/env node
'use strict';
/**
 * Boilerplate in the "why" text. A sentence that appears word for word (numbers aside) in the
 * explanation of dozens of recipes tells the reader nothing about this one, and to a search engine
 * it is the same text on hundreds of pages. Three such sentences had spread from the examples in
 * src/lib/voice.js and were taken out in October 2026; this fails if they come back.
 *
 * Not checked here: the "if your oven runs hot, check at N minutes" tip, which is honest advice
 * in the place advice belongs (a recipe's tips), only repeated. Each recipe still states it once.
 *
 *   node tools/filler-audit.js            fail on the three sentences; list the most repeated others
 *   node tools/filler-audit.js --top 30   list more
 */
const { loadRecipes } = require('../src/build');

const FILLER = [
  [/(?:^|[.!?]\s+|\n\n)If your [a-z ]+? runs hot, (?:check|test) at\b/, '"If your oven runs hot, check at N minutes" in the why text (it belongs in the tips, once)'],
  [/\bThat is most of the recipe\b/i, '"That is most of the recipe, and the part people skip" and its variants'],
  [/\bNothing else is needed\./i, '"Nothing else is needed."']
];

const recipes = loadRecipes();
const problems = [];
for (const r of recipes) {
  for (const [re, what] of FILLER) if (re.test(String(r.why || ''))) problems.push(`${r.slug}: ${what}`);
}

/* For the report: sentences repeated across the most recipes' why text. */
const norm = (s, t) => String(s).toLowerCase().split(String(t).toLowerCase()).join('{title}')
  .replace(/\*\*/g, '').replace(/\d+([.,]\d+)?/g, '#').replace(/[^a-z#{}\s]/g, ' ').replace(/\s+/g, ' ').trim();
const counts = new Map();
for (const r of recipes) {
  const seen = new Set();
  for (const s of String(r.why || '').split(/\n\n+/).flatMap(p => p.split(/(?<=[.!?])\s+/))) {
    if (s.split(/\s+/).length < 5) continue;
    seen.add(norm(s, r.title));
  }
  for (const k of seen) counts.set(k, (counts.get(k) || 0) + 1);
}
const topN = process.argv.includes('--top') ? Number(process.argv[process.argv.indexOf('--top') + 1]) : 0;
if (topN) for (const [k, v] of [...counts].sort((a, b) => b[1] - a[1]).slice(0, topN)) console.log(`${String(v).padStart(4)}  ${k.slice(0, 110)}`);

if (problems.length) {
  for (const p of problems.slice(0, 40)) console.log(`  ✗ ${p}`);
  if (problems.length > 40) console.log(`  … and ${problems.length - 40} more`);
  process.exit(1);
}
console.log(`  ✓ filler: none of the three repeated sentences is in any of ${recipes.length} explanations`);
