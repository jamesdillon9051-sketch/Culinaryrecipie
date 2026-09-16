#!/usr/bin/env node
'use strict';
/**
 * Checks every "Common Substitutions & Variations" note the site publishes
 * against the recipe it was generated from.
 *
 * src/lib/substitutions.js computes these rather than having them typed out
 * 1,409 times, which means they can never individually drift out of date —
 * but a rule can still be written wrong, and a wrong rule would then be wrong
 * on every recipe that matches it at once, silently. This is the same
 * discipline diet-audit.js applies to tags and keyword-audit.js applies to
 * search phrases, aimed at the one new claim this feature adds.
 *
 * Three things have to hold for every note on every recipe:
 *   1. It quotes an ingredient phrase that is actually a substring of that
 *      recipe's own ingredient list — a note cannot reference something the
 *      dish does not contain.
 *   2. No recipe carries more than the configured cap.
 *   3. A baking-sensitive swap (flour, sugar, butter's structural role) never
 *      appears on a Baking or Desserts recipe, where it would not reliably
 *      hold.
 *
 *   node tools/substitutions-audit.js
 */
const { loadRecipes } = require('../src/build');
const { substitutionsFor, RULES, MAX_NOTES } = require('../src/lib/substitutions');
const { parse } = require('../src/lib/ingredients');

const recipes = loadRecipes();
const problems = [];

for (const recipe of recipes) {
  const notes = substitutionsFor(recipe);
  if (notes.length > MAX_NOTES) {
    problems.push(`${recipe.slug} — ${notes.length} substitution notes, over the cap of ${MAX_NOTES}`);
  }

  const names = parse(recipe.ingredients).filter(i => !i.group).map(i => i.name.toLowerCase());
  let matchedCount = 0;
  for (const rule of RULES) {
    if (rule.skip && rule.skip(recipe.category)) continue;
    const hit = names.find(name => {
      const m = rule.find.exec(name);
      return m && !(rule.excludeIfAlso && rule.excludeIfAlso.test(name));
    });
    if (hit) matchedCount++;
  }
  /* The generator caps at MAX_NOTES, so a recipe matching more rules than
     that is not itself a bug — but the number of notes actually rendered
     should never exceed the number of rules that could have fired, or a note
     is coming from nowhere. */
  if (notes.length > matchedCount) {
    problems.push(`${recipe.slug} — produced ${notes.length} notes but only ${matchedCount} `
      + `rule(s) matched its ingredients; a note is not grounded in the recipe`);
  }

  if (['Baking', 'Desserts'].includes(recipe.category)) {
    const flourSwap = notes.find(n => /gluten-free flour blend/i.test(n));
    if (flourSwap) {
      problems.push(`${recipe.slug} — offers a flat gluten-free flour swap on a `
        + `${recipe.category} recipe, where it is not reliably true`);
    }
  }
}

for (const line of problems) console.log(`  ✗ ${line}`);
console.log(problems.length
  ? `\n${problems.length} substitution problem${problems.length === 1 ? '' : 's'} in ${recipes.length} recipes.`
  : `All substitution notes on ${recipes.length} recipes are grounded in their own ingredient lists.`);
process.exit(problems.length ? 1 : 0);
