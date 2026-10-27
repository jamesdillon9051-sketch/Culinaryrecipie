#!/usr/bin/env node
'use strict';
/**
 * The shopping-list rules (src/assets/js/shopping-core.js), case by case.
 * Part of `npm run check`. Each case states a behaviour the weekly plan page
 * promises in its own words, not an implementation detail.
 */
const S = require('../src/assets/js/shopping-core');
const { parse } = require('../src/lib/ingredients');

const recipe = (title, servings, lines, make) => ({ slug: title, title, servings, make: make || servings, lines: parse(lines) });
const find = (list, name) => list.buy.concat(list.pantry, list.optional).find(i => i.name === name);
const failures = [];
const expect = (label, ok, got) => { if (!ok) failures.push(`${label}${got !== undefined ? ` (got ${JSON.stringify(got)})` : ''}`); };

/* Compatible units add up; weights convert. */
let l = S.build([recipe('A', 4, ['500 g broccoli, in florets']), recipe('B', 4, ['150 g broccoli florets'])]);
expect('grams of the same food add up', find(l, 'broccoli') && find(l, 'broccoli').amount === '650 g', find(l, 'broccoli'));
l = S.build([recipe('A', 4, ['800 g potatoes, cubed']), recipe('B', 4, ['0.5 kg potatoes'])]);
expect('grams and kilograms combine into kilograms', find(l, 'potatoes') && find(l, 'potatoes').amount === '1.3 kg', find(l, 'potatoes'));

/* Counts combine only with counts, plurals included. */
l = S.build([recipe('A', 4, ['1 red pepper, diced']), recipe('B', 4, ['2 red peppers, cut into chunks', '1 red pepper, about 150 g, sliced'])]);
expect('counted items add up across plural spellings', find(l, 'red peppers') && find(l, 'red peppers').amount === '4', find(l, 'red peppers'));

/* Incompatible units are listed side by side, not converted by a guessed weight. */
l = S.build([recipe('A', 4, ['2 onions, sliced']), recipe('B', 4, ['150 g onions, chopped'])]);
const onion = l.buy.filter(i => /^onion/.test(i.name));
expect('a weight and a count of the same food are not converted', onion.length === 1 && /2/.test(onion[0].amount) && /150 g/.test(onion[0].amount), onion);

/* Distinct products stay apart. */
l = S.build([recipe('A', 4, ['500 g boneless chicken thighs']), recipe('B', 4, ['8 bone-in chicken thighs'])]);
expect('boneless and bone-in thighs stay two lines', l.buy.filter(i => /chicken thigh/.test(i.name)).length === 2, l.buy.map(i => i.name));
l = S.build([recipe('A', 4, ['400 g tinned chopped tomatoes']), recipe('B', 4, ['250 g cherry tomatoes'])]);
expect('tinned chopped tomatoes are not fresh tomatoes', l.buy.filter(i => /tomato/.test(i.name)).length === 2, l.buy.map(i => i.name));

/* Scaling follows the servings asked for. */
l = S.build([recipe('A', 4, ['400 g penne'], 2)]);
expect('scaling to half halves the quantity', find(l, 'penne').amount === '200 g', find(l, 'penne'));
l = S.build([recipe('A', 2, ['3 eggs'], 3)]);
expect('a scaled count rounds to a usable fraction', find(l, 'eggs').amount === '4 ½', find(l, 'eggs'));

/* Pantry staples and optional lines are separated, and water is dropped. */
l = S.build([recipe('A', 4, ['1 tsp fine sea salt', '2 tbsp olive oil', '600 ml water', '1 tbsp honey, optional'])]);
expect('salt goes to the pantry list', l.pantry.some(i => i.name === 'salt'), l.pantry);
expect('oil goes to the pantry list', l.pantry.some(i => i.name === 'olive oil'), l.pantry);
expect('water is not a shopping item', !l.buy.concat(l.pantry).some(i => /water/.test(i.name)));
expect('an optional line is listed as optional', l.optional.length === 1, l.optional);

/* Spoons combine and read as tablespoons from three teaspoons. */
l = S.build([recipe('A', 4, ['1 tsp ground cumin']), recipe('B', 4, ['2 tsp ground cumin'])]);
expect('three teaspoons read as one tablespoon', find(l, 'ground cumin').amount === '1 tbsp', find(l, 'ground cumin'));

/* A line with no quantity is kept, by name. */
l = S.build([recipe('A', 4, ['Lime wedges, to serve'])]);
expect('an unmeasured line is kept', l.buy.concat(l.optional).some(i => /lime/.test(i.name) && /some/.test(i.amount)), l);

if (failures.length) {
  for (const f of failures) console.log(`  ✗ shopping list: ${f}`);
  process.exit(1);
}
console.log('  ✓ shopping list: all cases hold');
