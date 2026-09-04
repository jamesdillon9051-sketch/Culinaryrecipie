#!/usr/bin/env node
'use strict';
/**
 * Checks each recipe's calorie figure against its own macronutrients using the
 * Atwater factors — 4 kcal per gram of protein and of carbohydrate, 9 per gram
 * of fat — plus the internal arithmetic that has to hold whatever the dish is.
 *
 * Alcohol contributes 7 kcal a gram and appears in none of the three macros, so
 * a drink built on spirits legitimately states more calories than its macros
 * account for. Those are exempt from the upper bound only.
 *
 *   node tools/nutrition-audit.js
 */
const { loadRecipes } = require('../src/build');

/* Wine, cider and sherry all turn up as vinegars, which carry no alcohol and
   no calories worth the name, so the word alone is not enough. */
const ALCOHOL = /\b(vodka|gin|rum|tequila|whisk(?:e)?y|bourbon|brandy|cognac|pisco|cacha[çc]a|mezcal|prosecco|champagne|beer|lager|ale|vermouth|campari|aperol|liqueur|cointreau|triple sec|amaretto|kahlua|marsala|sake|soju|stout|bitters|schnapps|cura[çc]ao|calvados|grappa|absinthe|limoncello|baileys|frangelico|chartreuse|maraschino|port)\b|\b(?:wine|cider|sherry)\b(?!\s+vinegar)/i;

/* Rounding a per-serving figure and dividing by servings both introduce a few
   per cent of slack, so the band is wide enough to leave honest numbers alone
   and narrow enough that a transposed digit fails. */
const FLOOR = 0.92;
const CEILING = 1.12;

const LABELS = ['calories', 'protein', 'carbs', 'fat', 'fibre', 'sugar', 'sodium'];
const recipes = loadRecipes();
const failures = [];

for (const recipe of recipes) {
  const [calories, protein, carbs, fat, fibre, sugar] = recipe.nutrition;

  recipe.nutrition.forEach((n, i) => {
    if (typeof n !== 'number' || !Number.isFinite(n) || n < 0) {
      failures.push(`${recipe.slug} — ${LABELS[i]} is ${n}`);
    }
  });
  /* Both are components of the carbohydrate figure, so neither can exceed it. */
  if (sugar > carbs) failures.push(`${recipe.slug} — sugar ${sugar} g exceeds carbs ${carbs} g`);
  if (fibre > carbs) failures.push(`${recipe.slug} — fibre ${fibre} g exceeds carbs ${carbs} g`);

  const fromMacros = 4 * protein + 4 * carbs + 9 * fat;
  if (!fromMacros) continue;
  const ratio = calories / fromMacros;
  const alcoholic = ALCOHOL.test(recipe.ingredients.join(' '));

  if (ratio < FLOOR) {
    failures.push(`${recipe.slug} — ${calories} kcal is below its macros (${Math.round(fromMacros)} kcal)`);
  } else if (ratio > CEILING && !alcoholic) {
    failures.push(`${recipe.slug} — ${calories} kcal is above its macros (${Math.round(fromMacros)} kcal) with no alcohol to account for it`);
  }
}

for (const line of failures) console.log(`  ✗ ${line}`);
console.log(failures.length
  ? `\n${failures.length} nutrition problem${failures.length === 1 ? '' : 's'} in ${recipes.length} recipes.`
  : `All ${recipes.length} recipes have calorie figures that match their macros.`);
process.exit(failures.length ? 1 : 0);
