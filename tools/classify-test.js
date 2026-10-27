#!/usr/bin/env node
'use strict';
/**
 * Dish roles that must not regress (src/lib/classify.js). Part of `npm run check`.
 *
 * The first group are the defect this release fixed: condiments, sauces and
 * simple sides that the Dinner category offered as its quickest dinners. The
 * rest pin down rules that are easy to break: a pasta dish named for its sauce,
 * a British biscuit that is not an American one, a soup that is a meal.
 */
const { loadRecipes } = require('../src/build');
const recipes = new Map(loadRecipes().map(r => [r.slug, r]));

const CASES = [
  ['barbecue-rub', 'condiment'], ['buttered-peas', 'side'], ['minted-peas', 'side'],
  ['sun-dried-tomato-pesto', 'condiment'], ['bechamel-sauce', 'sauce'], ['pan-gravy', 'sauce'],
  ['vegan-gravy', 'sauce'], ['carolina-mustard-sauce', 'sauce'], ['corn-on-the-cob', 'side'],
  ['chicken-stock', 'basic'], ['lamb-cutlets-with-mint-sauce', 'main'], ['spaghetti-bolognese', 'main'],
  ['marinara-sauce', 'sauce'], ['focaccia-genovese', 'bread'], ['anzac-biscuits', 'dessert'],
  ['biscuits-buttermilk', 'bread'], ['fish-and-chips', 'main'], ['rice-and-peas', 'side'],
  ['chicken-tikka-masala', 'main'], ['beef-stroganoff', 'main'], ['pad-thai', 'main'],
  ['caesar-salad', 'light'], ['chocolate-chip-cookies', 'dessert'], ['mojito', 'drink']
];

const failures = [];
for (const [slug, role] of CASES) {
  const r = recipes.get(slug);
  if (!r) { failures.push(`${slug}: not in the catalogue`); continue; }
  if (r.role !== role || r.roleReview) failures.push(`${slug}: expected ${role}, got ${r.role}${r.roleReview ? ' (under review)' : ''} (${r.roleReason})`);
}
/* The quickest "main dishes" in Dinner are main courses. */
const quickest = [...recipes.values()].filter(r => r.category === 'Dinner' && r.role === 'main' && !r.roleReview)
  .sort((a, b) => a.elapsedTime - b.elapsedTime).slice(0, 25);
for (const r of quickest) {
  /* "Lamb Cutlets with Mint Sauce" is lamb; "Mint Sauce" alone would be the defect. */
  if (/\b(rub|gravy|sauce|pesto|peas|seasoning|dressing)$/i.test(r.title) && !/\s(?:with|in|and)\s/i.test(r.title)) failures.push(`${r.slug}: a ${r.title.split(' ').pop()} is among the quickest Dinner main dishes`);
}
if (failures.length) { for (const f of failures) console.log(`  ✗ classify: ${f}`); process.exit(1); }
console.log(`  ✓ classify: ${CASES.length} pinned roles hold, and the 25 quickest Dinner mains are all main courses`);
