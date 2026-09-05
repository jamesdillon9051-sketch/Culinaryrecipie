'use strict';

/**
 * Title and description assembly, sized to what a search result actually shows.
 *
 * Both fields were correct and short. Every one of the 809 recipe descriptions
 * came in under 140 characters against a snippet Google will print to about
 * 160, which gave back a fifth of the only sales pitch the page gets to make;
 * and every title was the bare dish name, missing the word "recipe" that the
 * dominant query for each of them actually contains.
 *
 * Nothing here writes copy. It fits copy the record already holds into the
 * space available, and stops rather than truncating — an ellipsis mid-phrase
 * spends the snippet on nothing. Every clause is derived, so tools/seo-audit.js
 * can check the finished tag back against the recipe.
 */

/* Google truncates a title around 580 pixels, which is about sixty characters
   in the font it renders results in. */
const MAX_TITLE = 60;

/* The band a description should land in: long enough to use the snippet, short
   enough not to be cut. */
const MIN_DESCRIPTION = 140;
const MAX_DESCRIPTION = 160;

/**
 * A page title with the brand on the end, and at most one hook.
 *
 * Hooks are offered best-first and the first that fits wins, so a quick recipe
 * advertises its time and everything else falls back to something shorter or to
 * nothing at all. The brand is dropped rather than the dish name if the two
 * cannot both fit: a reader scanning results is looking for the dish.
 *
 * @param {string} name    the page's own name, keyword first
 * @param {string} brand   site name for the suffix
 * @param {string[]} hooks candidate additions, most compelling first
 */
function pageTitle(name, brand, hooks = []) {
  const suffix = ` | ${brand}`;
  let title = String(name).trim();
  for (const hook of hooks) {
    if (!hook) continue;
    const candidate = `${title} ${hook}`;
    if ((candidate + suffix).length <= MAX_TITLE) { title = candidate; break; }
  }
  return (title + suffix).length <= MAX_TITLE ? title + suffix : title;
}

/**
 * A description padded up into the snippet band with clauses that are true.
 *
 * Clauses are appended in the order given until the text reaches MIN, and never
 * past MAX. Each one is added whole or not at all.
 *
 * @param {string} base      the sentence the record already carries
 * @param {string[]} clauses derived additions, most useful first
 */
function enrichDescription(base, clauses = [], limits = {}) {
  const min = limits.min || MIN_DESCRIPTION;
  const max = limits.max || MAX_DESCRIPTION;
  let text = String(base).trim();
  for (const clause of clauses) {
    if (!clause || text.length >= min) break;
    if (text.length + clause.length + 1 <= max) text += ` ${clause}`;
  }
  return text;
}

/**
 * Closing clauses every page on the site can honestly make, longest first.
 *
 * Appended after a page's own specific facts so that a description which has
 * run out of them still reaches the band. Ordered by length because
 * enrichDescription skips a clause that will not fit and tries the next, so a
 * descending list always lands on the longest one the space allows.
 */
const TAIL_CLAUSES = [
  'Each with nutrition, method and the reasoning behind it.',
  'Step-by-step method, nutrition and storage notes.',
  'Full method, nutrition and tips.',
  'Every one with full nutrition.',
  'Tested and explained.',
  'With nutrition.'
];

/**
 * The hooks a recipe may put in its title, best first.
 *
 * Time leads because a number is the most clickable thing a recipe result can
 * carry, and it is only offered when the row supports it. "Easy" is the same
 * claim the keyword generator gates on the difficulty column.
 */
function recipeTitleHooks(recipe) {
  const total = (recipe.prep || 0) + (recipe.cook || 0);
  return [
    total && total <= 30 ? `in ${total} Minutes` : null,
    recipe.difficulty === 'Easy' ? '— Easy' : null,
    recipe.cook >= 90 ? '— Slow-Cooked' : null
  ].filter(Boolean);
}

/**
 * The clauses a recipe may add to its description, most useful first.
 *
 * Concrete facts before the value proposition, because a reader deciding
 * whether to click wants the time and the yield; the closing clause says what
 * the page holds, which is the page's actual pitch and is true of all of them.
 */
function recipeDescriptionClauses(recipe) {
  const total = (recipe.prep || 0) + (recipe.cook || 0);
  const kcal = (recipe.nutrition || [])[0];
  const storage = recipe.storage || '';
  /* A hundred and nineteen of the written descriptions already name a time.
     Adding a second one repeats the sentence at best and contradicts it at
     worst — "on the table in 20 minutes. Ready in 30 minutes." */
  const saysTime = /\b\d+[- ]?(?:min|minute|hour)/i.test(recipe.meta || '');
  const diet = (recipe.tags || []).find(t =>
    ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'].includes(t));
  return [
    total && !saysTime ? `Ready in ${total} minutes.` : null,
    recipe.servings ? `Serves ${recipe.servings}.` : null,
    kcal ? `${kcal} calories a serving.` : null,
    diet && !new RegExp(diet.replace('-', '[- ]'), 'i').test(recipe.meta || '')
      ? `${diet}.` : null,
    /freez/i.test(storage) ? 'Freezer-friendly.' : null,
    /refrigerat|keeps|chill/i.test(storage) ? 'Make-ahead friendly.' : null,
    ...TAIL_CLAUSES
  ].filter(Boolean);
}

module.exports = {
  pageTitle, enrichDescription, recipeTitleHooks, recipeDescriptionClauses, TAIL_CLAUSES,
  MAX_TITLE, MIN_DESCRIPTION, MAX_DESCRIPTION
};
