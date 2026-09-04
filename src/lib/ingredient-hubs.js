'use strict';

/**
 * Assigns recipes to ingredient hubs, and refuses to build a page it cannot
 * stand behind.
 *
 * A hub is only as good as its worst entry. The checks below exist because
 * each of them caught something: a recipe reaching a hub through a stock cube,
 * a vegan dish landing under Chicken because the word appears in a serving
 * suggestion, a page with four recipes on it that is thin content and would be
 * treated as such.
 */
const HUBS = require('../data/ingredient-hubs');
const { parse } = require('./ingredients');

/** Fewer than this and the page is too thin to deserve indexing. */
const MIN_RECIPES = 6;

/* Diet tags are editorial statements about the whole dish, so they outrank any
   string match: if a recipe says Vegan, no amount of matching puts it under
   Beef. Anything caught here is a data bug worth seeing, not something to
   quietly drop. */
const FORBIDDEN = {
  'Vegan': ['Chicken', 'Beef', 'Pork', 'Bacon', 'Lamb', 'Fish', 'Salmon',
            'Prawns', 'Eggs', 'Cheese', 'Butter', 'Cream', 'Yoghurt',
            'Paneer', 'Honey'],
  'Vegetarian': ['Chicken', 'Beef', 'Pork', 'Bacon', 'Lamb', 'Fish', 'Salmon',
                 'Prawns'],
  'Dairy-Free': ['Cheese', 'Butter', 'Cream', 'Yoghurt', 'Paneer'],
  'Gluten-Free': ['Pasta']
};


/* Wording that offers the cook a way round the ingredient. Any of these on the
   matching line means the dish can be made without it, which is what the diet
   tag is asserting. */
const OPTIONAL = /\bor\b|optional|to serve|to finish|omit|instead|substitute|if you like|for a (?:vegan|vegetarian|dairy[- ]free)|garnish|topping|on the side/i;

/** The first ingredient line that put this recipe in this hub. */
function lineMatching(text, hub) {
  for (const line of text.split(' ; ')) {
    const cleaned = hub.not ? line.replace(new RegExp(hub.not, 'gi'), ' ') : line;
    if (hub.match.test(cleaned)) return line;
  }
  return null;
}

const slugify = name => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

/** Every ingredient line of a recipe as one lowercase string to test against. */
function ingredientText(lines) {
  /* Each line carries its group heading. Recipes mark a whole section optional
     rather than repeating the word on every line — nachos heads its beef with
     "For the beef, optional" — and parse() drops headings, so without this the
     optional marker never reaches the line it applies to. */
  const out = [];
  let group = '';
  for (const item of parse(lines || [])) {
    if (item.group) { group = String(item.group).toLowerCase(); continue; }
    const name = (item.name || item.raw || '').toLowerCase();
    out.push(group ? `${group} :: ${name}` : name);
  }
  return out.join(' ; ');
}

/**
 * True when the recipe genuinely contains the hub's ingredient.
 *
 * The `not` pattern is removed from the text before `match` is tried, rather
 * than being tested separately. A recipe with both chicken thighs and chicken
 * stock should still be a chicken recipe; testing them separately would throw
 * it out, and testing only `match` would let a vegetable soup in.
 */
function contains(text, hub) {
  const cleaned = hub.not ? text.replace(new RegExp(hub.not, 'gi'), ' ') : text;
  return hub.match.test(cleaned);
}

/**
 * Build the hub list for a set of recipes.
 *
 * @param {object[]} recipes  built recipe objects, each with `ingredients`
 * @returns {{hubs: object[], rejected: object[], conflicts: string[]}}
 */
function build(recipes) {
  const conflicts = [];
  const texts = new Map(recipes.map(r => [r.slug, ingredientText(r.ingredients)]));

  const all = HUBS.map(hub => {
    const matched = [];
    for (const recipe of recipes) {
      if (!contains(texts.get(recipe.slug), hub)) continue;
      /* Every clashing tag, not just the first. Quinoa salad is tagged both
         Vegan and Dairy-Free and contains feta; reporting one hid the other. */
      const clashes = (recipe.tags || []).filter(tag => (FORBIDDEN[tag] || []).includes(hub.name));
      if (clashes.length) {
        /* Excluding it is the normal case and not worth reporting: recipes are
           written as "chicken or vegetable stock" and "parmesan, to serve",
           and that alternative is usually the whole reason the dish carries the
           tag. Only a line that offers no way out contradicts the tag, and that
           is a bug on the recipe page itself. */
        const line = lineMatching(texts.get(recipe.slug), hub);
        if (line && !OPTIONAL.test(line)) {
          for (const clash of clashes) {
            conflicts.push(`"${recipe.slug}" is tagged ${clash} but its "${line.trim()}" has no alternative`);
          }
        }
        continue;
      }
      matched.push(recipe);
    }
    return {
      ...hub,
      slug: slugify(hub.name),
      recipes: matched.sort((a, b) => b.popularity - a.popularity)
    };
  });

  return {
    hubs: all.filter(h => h.recipes.length >= MIN_RECIPES)
             .sort((a, b) => b.recipes.length - a.recipes.length),
    rejected: all.filter(h => h.recipes.length < MIN_RECIPES),
    conflicts
  };
}

module.exports = { build, contains, ingredientText, slugify, HUBS, MIN_RECIPES };
