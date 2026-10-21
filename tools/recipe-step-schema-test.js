#!/usr/bin/env node
'use strict';
/* Google recommends descriptive HowToStep names and explicitly rejects labels
   such as "Step 1". Names are optional; full instruction text must remain.
   https://developers.google.com/search/docs/appearance/structured-data/recipe#how-to-step
   Read-only: exercises the production serializer over the current catalogue. */
const assert = require('assert/strict');
const { loadRecipes } = require('../src/build');
const { recipeSchema } = require('../src/templates/recipe-page');
const { addFahrenheit } = require('../src/lib/oven-temp');
const { SITE } = require('../src/templates/layout');

const recipes = loadRecipes();
let steps = 0;
for (const source of recipes) {
  const recipe = { ...source, steps: source.steps.map(addFahrenheit) };
  const schema = recipeSchema(recipe);
  assert.equal(schema.recipeInstructions.length, recipe.steps.length, source.slug);
  schema.recipeInstructions.forEach((step, i) => {
    const label = `${source.slug}, instruction ${i + 1}`;
    assert.equal(step['@type'], 'HowToStep', label);
    assert.ok(!step.name || !/^(?:step\s*)?\d+[.:\s]*$/i.test(step.name), `${label}: non-descriptive step name`);
    assert.equal(step.text, recipe.steps[i], `${label}: instruction text changed`);
    assert.equal(step.position, i + 1, `${label}: order changed`);
    assert.equal(step.url, `${SITE.origin}${SITE.base}recipes/${source.slug}/#step-${i + 1}`, `${label}: step link changed`);
    steps++;
  });
}
console.log(`  ✓ Recipe step schema: ${steps} instructions across ${recipes.length} recipes; descriptive or omitted names, intact text, order and links`);
