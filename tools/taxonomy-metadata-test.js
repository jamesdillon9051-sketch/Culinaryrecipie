#!/usr/bin/env node
'use strict';
/* Read-only regressions for catalogue-driven cuisine counts and truthful
   category navigation metadata. Does not generate or modify site output. */
const assert = require('assert/strict');
const { loadRecipes, buildContext, categoryDescription, hubDescription } = require('../src/build');
const pages = require('../src/templates/pages');
const { CATEGORIES, plural } = require('../src/lib/util');
const { SITE, slug } = require('../src/templates/layout');

const recipes = loadRecipes();
const context = buildContext(recipes);
for (const count of [1, 3, context.topCuisines.length]) {
  const cuisines = context.topCuisines.slice(0, count);
  const html = pages.cuisinesIndex({ ...context, topCuisines: cuisines });
  assert.ok(html.includes(`<h1>${plural(cuisines.length, 'cuisine')}, mapped</h1>`), `dynamic cuisine heading: ${count}`);
  const section = html.match(/<section aria-labelledby="cuisine-list-title">([\s\S]*?)<\/section>/);
  assert.ok(section, 'cuisine card section missing');
  const cards = [...section[1].matchAll(/<a class="card reveal" href="([^"]+)"/g)];
  assert.equal(cards.length, cuisines.length, 'heading must count the rendered cuisine cards');
  assert.deepEqual(cards.map(match => match[1]), cuisines.map(name => `${SITE.base}cuisines/${slug(name)}/`));
}

let descriptions = 0;
let linkedFilterDescriptions = 0;
for (const name of Object.keys(CATEGORIES)) {
  const list = recipes.filter(recipe => recipe.category === name);
  const description = categoryDescription(name, list.length);
  assert.ok(description.startsWith(String(list.length) + ' '), `${name}: current recipe count missing`);
  assert.ok(!description.includes('Filter by cuisine, diet, difficulty and time.'), `${name}: filters falsely attributed to category page`);
  if (/filter/i.test(description)) {
    assert.match(description, /filter the full recipe directory\./, `${name}: filter destination unclear`);
    linkedFilterDescriptions++;
  }
  const html = pages.taxonomyPage(context, {
    recipes: list,
    title: `${name} Recipes`, heading: `${name} recipes`, eyebrow: 'Category',
    intro: CATEGORIES[name], description, keywords: [], path: `categories/${slug(name)}/`,
    active: 'categories', trail: [{ name: 'Categories', url: `${SITE.base}categories/` }, { name }]
  });
  assert.ok(html.includes(`href="${SITE.base}recipes/"`), `${name}: filter directory link missing`);
  assert.ok(!html.includes('class="filter-group"'), `${name}: test expects a static category hub`);
  const metadata = html.match(/<meta name="description" content="([^"]+)"/);
  assert.ok(metadata, `${name}: description not rendered`);
  assert.ok(!metadata[1].includes('Filter by cuisine, diet, difficulty and time.'), name);
  descriptions++;
}
assert.ok(linkedFilterDescriptions > 0, 'expected some descriptions to explain the directory filters');
const index = pages.categoriesIndex(context);
assert.ok(index.includes(`use the <a href="${SITE.base}recipes/">recipe directory</a> to filter by diet, difficulty and time`));
assert.ok(!index.includes('Each category is filtered further'), 'category index repeats nonexistent filter promise');
const timedHub = {
  name: 'Example', blurb: 'Recipes using the same ingredient.',
  recipes: [
    { cuisine: 'British', prep: 2, cook: 1, elapsedTime: 3, untimed: ['chilling until set'] },
    { cuisine: 'Italian', prep: 10, cook: 10, elapsedTime: 740 },
    { cuisine: 'British', prep: 20, cook: 20, elapsedTime: 40 }
  ]
};
assert.match(hubDescription(timedHub), /from 40 minutes/i, 'Use complete elapsed time and exclude untimed recipes');
assert.doesNotMatch(hubDescription({ ...timedHub, recipes: timedHub.recipes.slice(0, 1) }), /from \d+ minutes/i, 'An entirely untimed hub must not promise a minimum complete time');
console.log(`  ✓ Taxonomy metadata: dynamic cuisine counts (including ${context.topCuisines.length} current cuisines), ${descriptions} categories and accurate filter-directory links`);
