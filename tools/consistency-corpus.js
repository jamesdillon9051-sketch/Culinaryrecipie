#!/usr/bin/env node
'use strict';
/**
 * Small recipes that pin down what tools/recipe-consistency.js must and must not report, so that
 * widening it to read a method more like a cook does not let real gaps through. Part of
 * `npm run check`.
 */
const { check } = require('./recipe-consistency');

const recipe = (st, ing, extra = {}) => ({ slug: 'corpus', title: 'Corpus', description: '', meta: '', prep: 10, cook: 30,
  cookMax: null, restTime: 0, restMax: 0, untimed: null, servings: 4, ...extra, steps: st, ingredients: ing });
const codes = (r, built = { elapsedTime: r.prep + r.cook + r.restTime }) => check(r, built).map(f => `${f.code}|${f.key}`);

const CASES = [
  /* Gaps that must still be reported. */
  ['an unused herb is still reported', recipe(['Brown the sausages in the fat.'], ['8 sausages', '2 thyme sprigs']), 'ingredient-not-in-method|2 thyme sprigs', true],
  ['a short other name inside a longer word does not cover it', recipe(['Fry the shrimp, overlapping them in the pan.'], ['2 Chinese sausages (lap cheong), diced', '100 g shrimp']), 'ingredient-not-in-method|2 Chinese sausages (lap cheong), diced', true],
  ['a cooling the page does not disclose is reported', recipe(['Bake 30 minutes.', 'Cool completely before slicing.'], ['200 g flour']), 'required-wait-not-counted|Cool completely before slicing.', true],
  ['sequential stages beyond the cook time are reported', recipe(['Simmer the beans for 60 minutes.', 'Bake for 45 minutes.'], ['beans'], { cook: 45 }), 'stages-exceed-cook|stages', true],
  ['a claim in hours shorter than the recipe is reported', recipe(['Bake for 90 minutes.'], ['beef'], { cook: 90, prep: 30, meta: 'Six servings, ready in 1 hour 30 minutes.' }), 'time-claim|meta: servings, ready in 90 minutes', true],
  ['a divided line never split is reported', recipe(['Stir in the cheddar.', 'Bake 20 minutes.'], ['200 g cheddar, grated, divided']), 'divided-unclear|200 g cheddar, grated, divided', true],
  /* Readings that must not be reported. */
  ['the colour is named by "colour each"', recipe(['Divide into three bowls and colour each.'], ['Pink, yellow and lilac food colouring gel']), 'ingredient-not-in-method|Pink, yellow and lilac food colouring gel', false],
  ['turnip tops are the greens', recipe(['Add the greens and cook 20 minutes.'], ['400 g turnip tops or kale']), 'ingredient-not-in-method|400 g turnip tops or kale', false],
  ['potatoes cut into chips are the chips', recipe(['Fry the chips for 6 minutes.'], ['800 g potatoes, cut into thick chips']), 'ingredient-not-in-method|800 g potatoes, cut into thick chips', false],
  ['a point in the bake is not a stage', recipe(['Bake 40 minutes, covering with foil after 25 minutes.'], ['flour'], { cook: 40 }), 'stages-exceed-cook|stages', false],
  ['a disclosed untimed cooling is not reported', recipe(['Bake 30 minutes.', 'Cool completely before slicing.'], ['200 g flour'], { untimed: ['cooling completely'] }), 'required-wait-not-counted|Cool completely before slicing.', false],
  ['a split within one step is a split', recipe(['Melt 50 g of the sugar, then stir in the remaining sugar.'], ['100 g caster sugar, divided']), 'divided-unclear|100 g caster sugar, divided', false],
];

let failed = 0;
for (const [name, r, finding, expected] of CASES) {
  const got = codes(r).includes(finding);
  if (got !== expected) { failed++; console.log(`  ✗ ${name}: ${expected ? 'not reported' : 'reported'} (${finding})`); }
}
console.log(failed ? `${failed} of ${CASES.length} consistency cases wrong.` : `  ✓ all ${CASES.length} consistency cases as expected`);
process.exit(failed ? 1 : 0);
