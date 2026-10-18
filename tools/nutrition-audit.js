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

let printed = 0;
for (const recipe of recipes) {
  /* Tier 3: no figures are printed, so there is nothing to check. */
  if (!recipe.nutrition) continue;
  printed++;
  const [calories, protein, carbs, fat, fibre, sugar] = recipe.nutrition;

  recipe.nutrition.forEach((n, i) => {
    if (typeof n !== 'number' || !Number.isFinite(n) || n < 0) {
      failures.push(`${recipe.slug} — ${LABELS[i]} is ${n}`);
    }
  });
  /* Both are components of the carbohydrate figure, so neither can exceed it. */
  if (sugar > carbs) failures.push(`${recipe.slug} — sugar ${sugar} g exceeds carbs ${carbs} g`);
  if (fibre > carbs) failures.push(`${recipe.slug} — fibre ${fibre} g exceeds carbs ${carbs} g`);

  const fromMacros = 4 * protein + 4 * carbs + 9 * fat + 7 * (recipe.alcohol || 0);
  if (!fromMacros) continue;
  const ratio = calories / fromMacros;
  const alcoholic = ALCOHOL.test(recipe.ingredients.join(' '));

  if (ratio < FLOOR) {
    failures.push(`${recipe.slug} — ${calories} kcal is below its macros (${Math.round(fromMacros)} kcal)`);
  } else if (ratio > CEILING && !alcoholic) {
    failures.push(`${recipe.slug} — ${calories} kcal is above its macros (${Math.round(fromMacros)} kcal) with no alcohol to account for it`);
  }
}

/* A number the prose states must be the number the table prints. The description, the search
   snippet and the explanation used to quote figures from the hand-written estimate ("42 g of
   protein a serving"); a stated figure is allowed only where the printed one is a tier-1
   calculation, and must agree with it (2 g, 15 kcal). An amount of an ingredient ("150 g of
   sugar", "10 g of protein in every 100 g") is not a figure for the dish. */
const STATED = /(\d+(?:\.\d+)?) ?g (?:of )?(protein|carbohydrates?|carbs|fibre)\b(?! (?:in every|per 100|in 100))|(\d+(?:\.\d+)?) ?g (?:of )?(sugars?|fat)\b(?= (?:a|per|each) (?:serving|bar|cookie|muffin|slice|portion))|(\d+) ?(?:kcal|calories)\b|under (\d+) (?:calories|kcal)\b/gi;
const INDEX = { protein: 1, carbohydrate: 2, carbohydrates: 2, carbs: 2, fibre: 4, fat: 3, sugar: 5, sugars: 5 };
for (const recipe of recipes) {
  const fields = { description: recipe.description, meta: recipe.meta, why: recipe.why, tips: (recipe.tips || []).join(' ') };
  for (const [field, text] of Object.entries(fields)) {
    for (const m of String(text || '').matchAll(STATED)) {
      /* What one ingredient adds ("200 g adds around 24 g of protein") is not the dish's figure. */
      if (/\b(?:adds?|contains?|alongside|more than|well over)\b[^.]{0,25}$/i.test(String(text).slice(Math.max(0, m.index - 40), m.index))) continue;
      const n = recipe.nutrition;
      let why = '';
      if (recipe.nutritionTier !== 1) why = `the figures are ${recipe.nutritionTier === 2 ? 'approximate' : 'not published'} (tier ${recipe.nutritionTier})`;
      else if (m[1] && Math.abs(Number(m[1]) - n[INDEX[m[2].toLowerCase()]]) > 2) why = `the table prints ${n[INDEX[m[2].toLowerCase()]]} g`;
      else if (m[3] && Math.abs(Number(m[3]) - n[INDEX[m[4].toLowerCase()]]) > 2) why = `the table prints ${n[INDEX[m[4].toLowerCase()]]} g`;
      else if (m[5] && Math.abs(Number(m[5]) - n[0]) > 15) why = `the table prints ${n[0]} kcal`;
      else if (m[6] && !(n[0] < Number(m[6]))) why = `the table prints ${n[0]} kcal`;
      if (why) failures.push(`${recipe.slug} — ${field} states "${m[0]}" but ${why}`);
    }
  }
}

for (const line of failures) console.log(`  ✗ ${line}`);
console.log(failures.length
  ? `\n${failures.length} nutrition problem${failures.length === 1 ? '' : 's'} in ${recipes.length} recipes.`
  : `All ${printed} recipes that print nutrition have calorie figures that match their macros and alcohol (${recipes.length - printed} print none).`);
process.exit(failures.length ? 1 : 0);
