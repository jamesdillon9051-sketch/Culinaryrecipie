#!/usr/bin/env node
'use strict';
/* Read-only regression for the shared recipe template. Google recommends
   action summaries for optional HowToStep.name, never numbered labels.
   https://developers.google.com/search/docs/appearance/structured-data/recipe#how-to-step
   The catalogue has instructions, not separately authored step headings. */
const assert = require('assert/strict');
const { loadRecipes, buildContext } = require('../src/build');
const { recipeSchema, render } = require('../src/templates/recipe-page');
const { addFahrenheit } = require('../src/lib/oven-temp');
const { SITE } = require('../src/templates/layout');
const { LAYOUTS } = require('../src/lib/layouts');
const { recipeDeclarations } = require('./crawl-guard');

function checkStep(step, text, position, url, label) {
  assert.equal(step['@type'], 'HowToStep', label);
  if (step.name !== undefined) {
    assert.equal(typeof step.name, 'string', `${label}: non-text name`);
    assert.ok(step.name.trim(), `${label}: empty step name`);
    assert.ok(!/^(?:step\s*)?\d+(?:\b|[.:])/i.test(step.name), `${label}: numbered step name`);
    assert.ok(text.includes(step.name), `${label}: name is not drawn from the visible instruction`);
  }
  assert.equal(step.text, text, `${label}: instruction text changed`);
  assert.equal(step.position, position, `${label}: order changed`);
  assert.equal(step.url, url, `${label}: fragment link changed`);
}

/* Prove that the regression catches the old defect, while allowing a real
   action heading or an omitted optional name. No production data is altered. */
const instruction = 'Mix the flour and water.';
const fragment = 'https://example.test/recipe/#step-1';
const fixture = { '@type': 'HowToStep', text: instruction, position: 1, url: fragment };
for (const name of ['Step 1', 'Step 1: Mix the flour', '1. Mix the flour']) {
  assert.throws(() => checkStep({ ...fixture, name }, instruction, 1, fragment, 'fixture'), /numbered step name/);
}
checkStep({ ...fixture, name: 'Mix the flour' }, instruction, 1, fragment, 'authored heading');
checkStep(fixture, instruction, 1, fragment, 'optional heading');
assert.throws(() => checkStep({ ...fixture, name: 'Bake the cake' }, instruction, 1, fragment, 'fixture'), /visible instruction/);
assert.throws(() => checkStep({ ...fixture, text: 'Bake the cake.' }, instruction, 1, fragment, 'fixture'), /instruction text changed/);

const recipes = loadRecipes();
let steps = 0;
for (const source of recipes) {
  const recipe = { ...source, steps: source.steps.map(addFahrenheit) };
  const schema = recipeSchema(recipe);
  assert.equal(schema.recipeInstructions.length, recipe.steps.length, source.slug);
  schema.recipeInstructions.forEach((step, i) => {
    checkStep(step, recipe.steps[i], i + 1,
      `${SITE.origin}${SITE.base}recipes/${source.slug}/#step-${i + 1}`,
      `${source.slug}, instruction ${i + 1}`);
    steps++;
  });
}

/* Exercise actual serialized HTML in every layout, plus timed/untimed and
   photo/fallback variants. Read the visible step independently of JSON-LD. */
const context = buildContext(recipes);
const example = recipes.find(r => r.slug === 'baked-peaches-with-cinnamon');
assert.ok(example, 'expected historical inspection example');
const variants = LAYOUTS.map(layout => ({ ...example, layout: layout.id }));
variants.push(recipes.find(r => r.untimed), recipes.find(r => !r.imageData),
  recipes.find(r => r.imageData && r.imageData.author_type === 'Organization'));
const decode = value => value.replace(/<[^>]*>/g, '').replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
  .replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
let rendered = 0;
for (const recipe of variants.filter(Boolean)) {
  const originalSteps = [...recipe.steps];
  const html = render(recipe, context);
  assert.deepEqual(recipe.steps, originalSteps, `${recipe.slug}: render mutated source instructions`);
  assert.deepEqual(recipeDeclarations(html), { jsonld: 1, microdata: 0, rdfa: 0 }, recipe.slug);
  const blocks = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
    .map(match => JSON.parse(match[1]));
  const schema = blocks.find(block => block['@type'] === 'Recipe');
  assert.ok(blocks.some(block => block['@type'] === 'BreadcrumbList'), `${recipe.slug}: breadcrumbs lost`);
  assert.equal(schema.author.name, SITE.author, `${recipe.slug}: recipe author changed`);
  const visible = [...html.matchAll(/<li id="step-(\d+)">\s*<p class="step-text">([\s\S]*?)<\/p>/g)];
  assert.equal(visible.length, schema.recipeInstructions.length, recipe.slug);
  visible.forEach((match, i) => {
    assert.equal(Number(match[1]), i + 1, recipe.slug);
    checkStep(schema.recipeInstructions[i], decode(match[2]), i + 1,
      `${SITE.origin}${SITE.base}recipes/${recipe.slug}/#step-${i + 1}`, recipe.slug);
  });
  rendered++;
}
console.log(`  ✓ Recipe step schema: ${steps} instructions across ${recipes.length} recipes; ${rendered} rendered variants; intact text, order, anchors and one primary Recipe`);
