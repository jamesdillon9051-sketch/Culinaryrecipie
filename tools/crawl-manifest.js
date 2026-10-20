#!/usr/bin/env node
'use strict';
/* Source inventory, independent of the existing generated HTML and sitemaps. */
const fs = require('fs');
const path = require('path');
const { loadRecipes, buildContext } = require('../src/build');
const { build } = require('../src/lib/ingredient-hubs');
const { plainList } = require('../src/lib/ingredients');
const { addFahrenheit } = require('../src/lib/oven-temp');
const { layoutFor } = require('../src/lib/layouts');
const { CATEGORIES, isoDuration } = require('../src/lib/util');
const { SITE, slug } = require('../src/templates/layout');
const volumes = require('../src/data/volumes');

function manifest() {
  const recipes = loadRecipes();
  const ctx = buildContext(recipes);
  const routes = [];
  const add = (route, type, data = {}) => routes.push({ url: SITE.origin + route, route, type, ...data });
  for (const r of recipes) add(`/recipes/${r.slug}/`, 'recipe', {
    slug: r.slug, title: r.title, ingredients: plainList(r.ingredients),
    steps: r.steps.map(addFahrenheit), servings: r.servings,
    prepTime: isoDuration(r.prep), cookTime: isoDuration(r.cook),
    elapsedTime: isoDuration(r.elapsedTime), untimed: r.untimed || null,
    image: r.imageData ? `/assets/img/recipes/${r.imageData.file}.jpg` : null,
    illustration: !!(r.imageData && /illustration/.test(r.imageData.source || '')),
    datePublished: r.datePublished, dateModified: r.dateModified,
    layout: layoutFor(r).id, description: r.description,
    category: r.category, cuisine: r.cuisine,
  });
  for (const name of Object.keys(CATEGORIES)) add(`/categories/${slug(name)}/`, 'category', {
    recipeCount: recipes.filter(r => r.category === name).length,
  });
  for (const hub of recipes.subcategoryHubs) add('/' + hub.path, 'category-combination', { recipeCount: hub.recipes.length });
  for (const name of ctx.topCuisines) add(`/cuisines/${slug(name)}/`, 'cuisine', { recipeCount: recipes.filter(r => r.cuisine === name).length });
  for (const hub of build(recipes).hubs) add(`/ingredients/${hub.slug}/`, 'ingredient', { recipeCount: hub.recipes.length });
  for (const route of ['/', '/recipes/', '/categories/', '/cuisines/', '/ingredients/',
    '/search/', '/site-directory/', '/about/', '/privacy/', '/contact/']) add(route, 'other');
  const details = {};
  for (const dir of volumes.detailDirs()) for (const file of fs.readdirSync(path.join(__dirname, '../src/data', dir)).filter(f => f.endsWith('.js'))) {
    const rel = `src/data/${dir}/${file}`;
    for (const key of Object.keys(require('../' + rel))) details[key] = rel;
  }
  for (const row of routes) if (row.slug) row.detailFile = details[row.slug] || null;
  return { origin: SITE.origin, sourceRecipes: volumes.catalog().length, detailRecords: Object.keys(volumes.details({ rewrites: false })).length,
    catalogFiles: volumes.catalogFiles().length, detailFiles: new Set(Object.values(details)).size, routes };
}

if (require.main === module) process.stdout.write(JSON.stringify(manifest(), null, 2) + '\n');
module.exports = { manifest };
