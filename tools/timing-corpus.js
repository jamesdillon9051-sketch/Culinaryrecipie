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
  ['a required rest of 20 minutes counts', ['Bake for 40 minutes.', 'Rest 20 minutes before cutting.'], 20, 20],
  ['a wait while other work is done is not added', ['Press into the tin and chill for 15 minutes while you make the filling.'], 0, 0],
  ['a wait only some cooks need widens the range', ['If the rice cakes are frozen, soak them in warm water for 20 minutes.'], 0, 20],
  ['an improvement offered after a dash is not required', ['Rest for 20 minutes before serving — or better, cool and refrigerate overnight.'], 20, 20],
  ['a cooking time with commas before it is still cooking', ['Rinse the rice, cook it in 600 ml of water with a pinch of salt, covered, for 15 minutes, then leave off the heat for 10 minutes.'], 0, 0],
  ['serving one way or chilling is not a required chill', ['Serve warm or chill for 1 hour.'], 0, 0],
  ['skimming while it simmers is not waiting', ['Skim the grey scum off the surface for the first 20 minutes, until it stops rising.'], 0, 0],
  ['chilling the serving glasses runs alongside the work', ['Chill two tall glasses in the freezer for at least 20 minutes.'], 0, 0],
  ['at least, and up to, is a wait with a ceiling', ['Rest it, covered, for at least 30 minutes and up to 24 hours.'], 30, 1440],
  ['the verb nearest the number owns it', ['Dust with smoked paprika, scatter with chives and bacon if using, and chill 30 minutes before serving.'], 30, 30],
  ['cookies are not a cooking verb', ['Leave the cookies to set for 30 minutes at room temperature, until firm.'], 30, 30],
  ['a cooking time on the cool side of the grill is cooking', ['Cook the chicken skin-side up on the cool side, lid closed, for 35 to 45 minutes.'], 0, 0],
  ['the soaked chickpeas are boiled, not waited on', { st: ['For the channa, boil the soaked chickpeas 50 minutes until soft.'], ing: ['250 g dried chickpeas, soaked overnight'] }, 480, 480],
  ['two waits joined by "then" both count', ['Cover and prove at room temperature for 1 hour, then refrigerate overnight, at least 8 hours and up to 16.'], 540, 1020],
  ['a clause without its own verb stays with the wait before it', ['Cool in the tin for 10 minutes, then on a wire rack for 20 minutes, until completely cold.'], 20, 20],
  ['a span named in one clause and waited in the next is one wait', ['Over the next 150 minutes, give the dough four sets of stretch-and-folds at half-hour intervals, then leave it to rise until it has grown by about half.'], 150, 150],
  ['a step naming the soaked chickpeas does not cancel the overnight soak', { st: ['Drain the soaked chickpeas thoroughly and spread them on a tea towel to dry for 15 minutes.'], ing: ['250 g dried chickpeas, soaked overnight'] }, 495, 495],
  ['standing is waiting', ['Let it stand 15 minutes so the flavours meld before serving.'], 15, 15],
  ['a step that ends in serving still counts its wait', ['Rest 15 minutes, then serve.'], 15, 15],
  ['at least, or overnight', ['Chill for at least 4 hours or overnight.'], 240, 240],
  ['the alternative after "or" is not part of the timing', ['Marinate for 30 minutes, or up to 24 hours in the fridge.'], 30, 30],
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
