'use strict';
/**
 * Resolves the curated collections in src/data/collections.js against the
 * built recipes and refuses any entry that no longer meets the criteria its
 * page prints. A recipe whose times, servings or method change after it was
 * chosen fails the build here instead of quietly staying in "30 minutes".
 */
const { COLLECTIONS, WEEKLY_PLAN, SOURCES } = require('../data/collections');
const { parse } = require('./ingredients');
const shopping = require('../assets/js/shopping-core');

/* Ingredients that must already be cooked before the recipe starts. */
const ADVANCE = /\b(?:cooked (?:rice|chicken|turkey|ham|beef|pork|lentils|quinoa)|cold (?:cooked )?rice|leftover|day-old|from the day before)\b/i;
/* A cue in the method that tells a baker it is done, beyond the minutes. */
const DONENESS = /\bskewer\b|\bhollow\b|golden|springy|spring back|risen|deep gold|set\b|comes out clean|edges/i;
/* A storage note that covers the fridge. */
const FRIDGE = /\bfridge\b|\brefrigerat/i;

function checkItem(collection, item, r, bySlug, problems) {
  const c = collection.check || {};
  const say = msg => problems.push(`${collection.slug}: ${item.slug}: ${msg}`);
  if (c.role && (r.role !== c.role || r.roleReview)) say(`is a ${r.role}${r.roleReview ? ' under review' : ''}, not a ${c.role}`);
  if (c.maxElapsed) {
    if (r.untimed) say(`has untimed stages (${r.untimed.join(', ')})`);
    if (r.elapsedMax > c.maxElapsed) say(`takes up to ${r.elapsedMax} minutes start to finish, over ${c.maxElapsed}`);
  }
  if (c.noAdvance && ADVANCE.test(r.ingredients.join(' '))) say('needs an ingredient cooked in advance');
  if (c.onePan && r.vessels.length !== 1) say(`the method names ${r.vessels.length} cooking vessels (${r.vessels.join(', ') || 'none'})`);
  if (c.servings && r.servings !== c.servings) say(`serves ${r.servings}, not ${c.servings}`);
  if (c.difficulty && r.difficulty !== c.difficulty) say(`is rated ${r.difficulty}`);
  if (c.noKit) for (const e of r.equipment) if (c.noKit.includes(e.id)) say(`needs ${e.label.toLowerCase()}`);
  if (c.maxIngredients && r.ingredientCount > c.maxIngredients) say(`has ${r.ingredientCount} ingredients, over ${c.maxIngredients}`);
  if (c.difficulty && !DONENESS.test(r.steps.join(' '))) say('gives no doneness cue in the method');
  if (c.pairs) {
    const second = bySlug.get(item.second);
    if (!second) { say(`second meal "${item.second}" is not a recipe`); return; }
    if (r.servings < 4) say(`serves ${r.servings}; a cook-once base must serve at least 4`);
    if (!FRIDGE.test(r.storage)) say('its storage note does not cover the fridge');
    if (!item.keep) say('says nothing about how much to keep back');
    if (item.also && !bySlug.get(item.also)) say(`alternative "${item.also}" is not a recipe`);
  }
}

function equipmentLine(r) {
  const kit = r.equipment.filter(e => !['skewers', 'thermometer'].includes(e.id) || r.equipment.length < 3).map(e => e.label);
  return kit.length ? kit.join(', ') + (r.equipmentSizes.length ? ` (${r.equipmentSizes.join('; ')})` : '') : '';
}

/**
 * @returns {{ collections: object[], plan: object, problems: string[] }}
 */
function resolve(recipes) {
  const bySlug = new Map(recipes.map(r => [r.slug, r]));
  const problems = [];
  const collections = COLLECTIONS.map(collection => {
    const seen = new Set();
    const items = collection.items.map(item => {
      const r = bySlug.get(item.slug);
      if (!r) { problems.push(`${collection.slug}: "${item.slug}" is not a recipe`); return null; }
      if (seen.has(item.slug)) problems.push(`${collection.slug}: ${item.slug} is listed twice`);
      seen.add(item.slug);
      if (!item.why || item.why.length < 40) problems.push(`${collection.slug}: ${item.slug} needs a reason of its own`);
      checkItem(collection, item, r, bySlug, problems);
      return { ...item, recipe: r, kit: equipmentLine(r),
        secondRecipe: item.second ? bySlug.get(item.second) : null,
        alsoRecipe: item.also ? bySlug.get(item.also) : null };
    }).filter(Boolean);
    if (items.length < 8 || items.length > 15) problems.push(`${collection.slug}: ${items.length} recipes; a collection holds 8 to 15`);
    return { ...collection, items };
  });

  const days = WEEKLY_PLAN.days.map(d => {
    const r = bySlug.get(d.slug);
    if (!r) { problems.push(`weekly plan: "${d.slug}" is not a recipe`); return null; }
    if (r.role !== 'main' || r.roleReview) problems.push(`weekly plan: ${d.slug} is not a main course`);
    if (r.untimed) problems.push(`weekly plan: ${d.slug} has untimed stages`);
    return { ...d, recipe: r, kit: equipmentLine(r) };
  }).filter(Boolean);
  if (days.length !== 5) problems.push(`weekly plan: ${days.length} dinners, not 5`);
  const people = 4;
  const lists = shopping.build(days.map(d => ({
    slug: d.recipe.slug, title: d.recipe.title, servings: d.recipe.servings, make: people,
    lines: parse(d.recipe.ingredients)
  })));
  /* What the page needs to rebuild the list in the browser when the servings change. */
  const clientData = days.map(d => ({
    slug: d.recipe.slug, title: d.recipe.title, servings: d.recipe.servings,
    lines: parse(d.recipe.ingredients).map(l => l.group ? { group: l.group } : { qty: l.qty, unit: l.unit, name: l.name })
  }));
  return { collections, plan: { ...WEEKLY_PLAN, days, people, lists, clientData }, problems, sources: SOURCES };
}

module.exports = { resolve };
