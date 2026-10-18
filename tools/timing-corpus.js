#!/usr/bin/env node
'use strict';
/**
 * The cases that make waiting hard to read from a method, and what src/lib/timing.js must make of
 * each. Part of `npm run check`. Overnight counts as 8 hours, the site's floor for it.
 */
const { detectWait } = require('../src/lib/timing');

const CASES = [
  ['two waits add up', ['Mix the dough and leave to rise for 1 hour.', 'Shape, then prove for 45 minutes.', 'Bake for 20 minutes.'], 105, 105],
  ['parallel prep is not added twice', ['Leave the dough to rise for 1 hour.', 'While the dough rises, make the filling and chill it for 1 hour.'], 60, 60],
  ['repeated folds over a span', ['Every 30 minutes for 2 hours, stretch and fold the dough.'], 120, 120],
  ['folds stated as a count and an interval', ['Give the dough four sets of stretch-and-folds 30 minutes apart, then leave it to rise for 2 hours.'], 210, 210],
  ['overnight', ['Cover and refrigerate overnight.'], 480, 480],
  ['a range', ['Leave to ferment for 12 to 24 hours.'], 720, 1440],
  ['cooling before assembly', ['Cool completely, about 1 hour, before icing.'], 60, 60],
  ['optional advance prep is not a wait', ['The sauce can be made up to 2 days ahead and kept in the fridge.'], 0, 0],
  ['a short rest is not a plan', ['Rest the meat for 10 minutes before carving.'], 0, 0],
  ['at least, or overnight', ['Chill for at least 4 hours or overnight.'], 240, 240],
  ['the alternative after "or" is not part of the timing', ['Marinate for 30 minutes, or up to 24 hours in the fridge.'], 0, 0],
  ['cooking time is not waiting', ['Simmer gently for 2 hours until tender.'], 0, 0],
  ['time already spent is not a wait', ['Remove the lid after 90 minutes and leave to cool.'], 0, 0],
  ['an ingredient soak is prep set going once', { st: ['Drain the beans and simmer for 1 hour.'], ing: ['250 g dried beans, soaked overnight'] }, 480, 480],
  ['the longest of two ingredient waits governs', { st: ['Cook everything together for 20 minutes.'], ing: ['200 g chickpeas, soaked overnight', '100 g rice, soaked for 1 hour'] }, 480, 480],
];

let failed = 0;
for (const [name, x, lo, hi] of CASES) {
  const recipe = Array.isArray(x) ? { slug: 'corpus', st: x, ing: [] } : { slug: 'corpus', ...x };
  const w = detectWait(recipe);
  const ok = w.min === lo && w.max === hi;
  if (!ok) { failed++; console.log(`  ✗ ${name}: read ${w.min}–${w.max} min, expected ${lo}–${hi}`); }
}
console.log(failed ? `${failed} of ${CASES.length} timing cases read wrongly.` : `  ✓ all ${CASES.length} timing cases read as expected`);
process.exit(failed ? 1 : 0);
