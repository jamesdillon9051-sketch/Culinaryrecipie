#!/usr/bin/env node
'use strict';
/* Regression checks for generated search promises, not cooking validation. */
const assert = require('node:assert/strict');
const { loadRecipes } = require('../src/build');
const { recipeTitleHooks, recipeDescriptionClauses, TAIL_CLAUSES } = require('../src/lib/seo');

const base = { title: 'Example', prep: 10, cook: 10, elapsedTime: 20,
  difficulty: 'Easy', servings: 4, nutritionTier: 3, meta: '', tags: [] };
const completeTime = /^(?:Ready in|Takes .*start to finish)/i;
const titleTime = /^in \d+ Minutes$/;
for (const untimed of [['cooling completely'], ['chilling until set'], true]) {
  const recipe = { ...base, untimed };
  assert(!recipeTitleHooks(recipe).some(x => titleTime.test(x)), 'Untimed stage must not acquire a complete-time title');
  assert(!recipeDescriptionClauses(recipe).some(x => completeTime.test(x)), 'Untimed stage must not acquire a ready-in snippet');
}
for (const untimed of [null, undefined, []]) {
  assert(recipeTitleHooks({ ...base, untimed }).includes('in 20 Minutes'));
  assert(recipeDescriptionClauses({ ...base, untimed }).includes('Ready in 20 minutes.'));
}
const overnight = { ...base, elapsedTime: 740, restTime: 720, elapsedMax: 1460 };
assert(!recipeTitleHooks(overnight).some(x => titleTime.test(x)), 'Overnight wait cannot become a 20-minute title');
assert(recipeDescriptionClauses(overnight).some(x => /^Takes .*start to finish/.test(x)));
assert(!recipeDescriptionClauses({ ...overnight, untimed: ['cooling'] }).some(x => completeTime.test(x)));

assert(!TAIL_CLAUSES.some(x => /nutrition/i.test(x)), 'Collection fallback cannot promise nutrition for every recipe');
for (const nutritionTier of [3, undefined]) {
  assert(!recipeDescriptionClauses({ ...base, nutritionTier }).some(x => /nutrition|calories/i.test(x)));
}
assert(recipeDescriptionClauses({ ...base, nutritionTier: 1, nutrition: [320] }).includes('320 calories a serving.'));
assert(recipeDescriptionClauses({ ...base, nutritionTier: 2, nutrition: [320] }).some(x => /nutrition/i.test(x)));
assert(!recipeDescriptionClauses({ ...base, nutritionTier: 2, nutrition: [320] }).some(x => /calories/i.test(x)), 'Approximate nutrition cannot acquire an uncaveated calorie claim');
assert(!recipeDescriptionClauses({ ...base, meta: 'An example ready in 20 minutes.' }).some(x => completeTime.test(x)), 'Do not duplicate a source time claim');

const recipes = loadRecipes();
let untimedCount = 0, withheldCount = 0;
for (const recipe of recipes) {
  const clauses = recipeDescriptionClauses(recipe);
  if (recipe.untimed && recipe.untimed.length) {
    untimedCount++;
    assert(!recipeTitleHooks(recipe).some(x => titleTime.test(x)), recipe.slug);
    assert(!clauses.some(x => completeTime.test(x)), recipe.slug);
  }
  if (recipe.nutritionTier === 3) {
    withheldCount++;
    assert(!clauses.some(x => /nutrition|calories/i.test(x)), recipe.slug);
  }
}
console.log(`SEO claims: ${recipes.length} recipes; ${untimedCount} untimed recipes have no generated complete-time promise; ${withheldCount} withheld-nutrition recipes have no generated nutrition promise. Authored claims remain separately reviewable.`);
