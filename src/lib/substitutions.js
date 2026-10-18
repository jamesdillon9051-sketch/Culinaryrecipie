'use strict';
/**
 * Common Substitutions & Variations, computed rather than written.
 *
 * Every other section on a recipe page is either the author's prose or a
 * figure computed from it — nutrition from the ingredients, the FAQ from the
 * timings, the diet tags from both. This section follows the same rule
 * instead of being the one place on the site with 1,409 hand-typed
 * paragraphs that can drift out of date the next time an ingredient line
 * changes.
 *
 * A rule fires only when the exact phrase it needs is present in that
 * recipe's own ingredient list, and the note it produces quotes that phrase
 * back. So the text is never generic filler stapled onto every page — it is
 * either grounded in what this specific recipe actually contains, or it does
 * not appear, the same way `rest` is only ever declared when the method
 * actually describes a wait.
 *
 * Two things keep this from asserting something false:
 *   - tools/substitutions-audit.js regenerates every recipe's notes at
 *     build time and fails if a note's quoted phrase cannot be found in that
 *     recipe's ingredients, the same discipline diet-audit.js and
 *     keyword-audit.js already apply to tags and search phrases.
 *   - Swaps that behave differently in baking than in savoury cooking — a
 *     flour blend, a sugar, butter's structural role — are gated to the
 *     categories where the substitution is actually reliable, or dropped
 *     from Baking and Desserts entirely rather than offered as a flat "just
 *     swap it" that would be true in a curry and wrong in a cake.
 */

const { parse } = require('./ingredients');
const { FORBIDS, clean } = require('./diet-conditions');

/* A rule marked `only: <diet>` says the swap makes the dish suit that diet, which is true only when
   the line it swaps is the one thing in the list the diet forbids. */
function onlyBlocker(names, index, diet) {
  const re = FORBIDS[diet];
  return names.every((name, i) => i === index || !re.test(clean(String(name).toLowerCase())));
}

const BAKING_SENSITIVE = new Set(['Baking', 'Desserts']);

/* Each rule: `find` matches against a parsed ingredient's lower-cased name
   (never its quantity, so "2 onions" cannot trip a rule meant for "onion
   powder"); `skip` optionally excludes a category where the swap is not
   reliable; `note` builds the sentence from the literal matched text. Order
   matters only in that it decides which notes survive the cap below, so the
   more distinctive, recipe-specific swaps are listed ahead of the ones that
   are true of almost any savoury dish. */
const RULES = [
  {
    find: /\bfish sauce\b/,
    diet: 'Vegetarian',
    only: 'Vegetarian',
    note: m => `No fish sauce, or keeping it vegetarian? Soy sauce with a squeeze of lime gives a similar salty, savoury lift to the ${m}, though not the same flavour.`
  },
  {
    find: /\bbuttermilk\b/,
    note: m => `Out of ${m}? The usual stand-in is a tablespoon of lemon juice or vinegar stirred into 250 ml of ordinary milk and left five minutes; it is thinner than cultured ${m}, so a batter may need a little less of it.`
  },
  {
    find: /\b(double cream|heavy cream)\b/,
    /* Not where the cream sets or holds the dish up (a ganache, a panna cotta, a mousse). */
    skip: cat => BAKING_SENSITIVE.has(cat),
    note: m => `In a sauce, full-fat crème fraîche can usually take the place of the ${m}; single cream is thinner and more likely to split if it boils, so keep it below a simmer.`
  },
  {
    find: /\bself[- ]raising flour\b/,
    note: m => `No ${m} to hand? The common home substitute is the same weight of plain flour with 2 teaspoons of baking powder for every 150 g, sifted together well; the rise may not be identical to a bought ${m}.`
  },
  {
    find: /\bpanko\b/,
    skip: cat => false,
    note: m => `${m[0].toUpperCase()}${m.slice(1)} gives the crunchiest crust here, but ordinary dried breadcrumbs will still fry crisp if that's what's in the cupboard.`
  },
  {
    find: /\bcoconut milk\b/,
    skip: cat => BAKING_SENSITIVE.has(cat),
    note: m => `If coconut is a problem, a cooking cream (dairy or plant-based) can stand in for the ${m} in a sauce; the dish will lose the coconut flavour and taste noticeably different.`
  },
  {
    find: /\blight soy sauce\b|\bsoy sauce\b/,
    diet: 'Gluten-Free',
    only: 'Gluten-Free',
    note: m => `For a gluten-free version, use a tamari or soy sauce labelled gluten-free in place of the ${m}: ordinary soy sauce is brewed with wheat, and not every tamari is wheat-free.`
  },
  {
    find: /\bspring onions?\b/,
    note: m => `Out of ${m}? A small regular onion, finely sliced, or a few chives stirred in at the end both cover the job.`
  },
  {
    find: /\b(?:red |green )?chill(?:i|ies)\b/,
    /* "chilli flakes" or "chilli powder" is already the dried form, so
       offering dried chilli as a substitute for itself would be nonsense. */
    excludeIfAlso: /\bchill(?:i|ies)?\s+(?:flakes|powder)\b|\bdried chill/,
    note: m => `Dried chilli flakes can stand in for the ${m}. Heat varies a great deal between chillies and between jars, so start with a small pinch and add more to taste.`
  },
  {
    find: /\blime(?:s)?\b/,
    note: m => `Lemon is the everyday swap for ${m} in this kind of dish — the acidity plays the same role even though the flavour is not identical.`
  },
  {
    find: /\bginger\b/,
    excludeIfAlso: /\bground ginger\b|\bginger powder\b/,
    note: () => `If you only have ground ginger, a quarter-teaspoon for each tablespoon of fresh is the ratio usually given; it tastes warmer and less bright than the fresh root.`
  },
  {
    find: /\bgarlic\b/,
    excludeIfAlso: /\bgarlic powder\b|\bgarlic granules\b/,
    note: () => `An eighth of a teaspoon of garlic powder per clove is the stand-in usually given when you are out of fresh garlic; it will not brown the same way, and it burns easily, so add it with the liquid.`
  },
  {
    find: /\bchicken stock\b/,
    /* Only says "meat-free" where the stock is the only meat in the list. */
    only: 'Vegetarian',
    note: m => `Vegetable stock in place of the ${m} makes this meat-free without changing the method, if that is what you need.`
  },
  {
    find: /\b(?:dried oregano|dried thyme|dried basil|dried rosemary|dried mint|dried dill|dried cumin|dried coriander)\b/,
    note: m => `Fresh herbs work in place of the ${m} at roughly three times the quantity — a teaspoon of dried is about a tablespoon of fresh, chopped.`
  },
  {
    find: /\bwhite wine\b/,
    note: m => `A dry vermouth keeps for longer than an open bottle of ${m} and is the closer swap than a random white left in the fridge; for an alcohol-free version, use the same amount of stock with a squeeze of lemon.`
  },
  {
    find: /\bplain flour\b|\ball-purpose flour\b/,
    skip: cat => BAKING_SENSITIVE.has(cat),
    diet: 'Gluten-Free',
    only: 'Gluten-Free',
    note: m => `Where the ${m} thickens a sauce or coats something for frying, a gluten-free flour blend usually works in its place; check the blend's own instructions, and use stock and other packaged ingredients labelled gluten-free.`
  },
  {
    find: /\bworcestershire sauce\b/,
    diet: 'Vegetarian',
    only: 'Vegetarian',
    note: m => `For a vegetarian version, use a Worcestershire sauce labelled vegetarian: the standard ${m} is made with anchovies.`
  }
];

/* Cap per recipe. Any dish with onion, garlic and stock in it would
   otherwise collect five or six notes that say very little each; two or
   three specific ones are more useful than a checklist. */
const MAX_NOTES = 3;

/**
 * @param {{ingredients: string[], category: string}} recipe
 * @returns {string[]} substitution notes, grounded in this recipe's own
 *   ingredient list; empty when nothing in it matches a known rule.
 */
function substitutionsFor(recipe) {
  const items = parse(recipe.ingredients || []).filter(item => !item.group);
  const names = items.map(item => item.name);
  const out = [];

  for (const rule of RULES) {
    if (out.length >= MAX_NOTES) break;
    /* Diet-framed rules (fish sauce, soy sauce, plain flour, Worcestershire
       sauce) are handled by dietaryTipsFor below, in their own box, rather
       than appearing here as well — the same rule firing twice under two
       headings is not two pieces of advice, it is one piece of advice that
       looks like a checklist. */
    if (rule.diet) continue;
    if (rule.skip && rule.skip(recipe.category)) continue;
    for (const name of names) {
      const lower = name.toLowerCase();
      const match = rule.find.exec(lower);
      if (!match) continue;
      /* A line that is already the dried/ground/powdered form of the thing
         (ground ginger, chilli flakes, garlic powder) is not a candidate for
         "here is the dried form" advice about itself. */
      if (rule.excludeIfAlso && rule.excludeIfAlso.test(lower)) continue;
      if (rule.only && !onlyBlocker(names, names.indexOf(name), rule.only)) break;
      out.push(rule.note(match[0]));
      break; // one hit per rule is enough; move to the next rule
    }
  }
  return out;
}

/* Cap for the dietary box, kept separate from and smaller than the general
   cap: two genuine adaptation tips read as help, four reads as a wall. */
const MAX_DIET_TIPS = 2;

/**
 * "Quick Tips & Variations" — the subset of substitution rules that are
 * framed as reaching a specific diet, surfaced in their own box rather than
 * mixed into the general list.
 *
 * Deliberately covers only Vegetarian and Gluten-Free, the two diets a
 * single named ingredient can reliably unlock. Keto and Low-Carb are not
 * here on purpose: whether a dish qualifies is a question about the whole
 * recipe's carbohydrate total, not about any one ingredient, and this site's
 * own Keto and Low-Carb tags are only ever applied after that whole-dish sum
 * is checked (see nutrition-audit.js). Naming a single swap — "leave out the
 * rice" — as a keto tip on a dish whose sauce alone carries forty grams of
 * sugar would be false, and false on exactly the claim someone managing a
 * medical diet is trusting the page for.
 *
 * A rule is only offered when the recipe does not already carry that tag —
 * telling a reader how to make an already-vegetarian dish vegetarian is not
 * a tip — and only when it is grounded in an ingredient the recipe actually
 * contains, checked by the same tools/substitutions-audit.js that checks
 * the general list.
 */
function dietaryTipsFor(recipe) {
  const items = parse(recipe.ingredients || []).filter(item => !item.group);
  const names = items.map(item => item.name);
  const tags = recipe.tags || [];
  const out = [];

  for (const rule of RULES) {
    if (out.length >= MAX_DIET_TIPS) break;
    if (!rule.diet || tags.includes(rule.diet)) continue;
    if (rule.skip && rule.skip(recipe.category)) continue;
    for (const name of names) {
      const lower = name.toLowerCase();
      const match = rule.find.exec(lower);
      if (!match) continue;
      if (rule.excludeIfAlso && rule.excludeIfAlso.test(lower)) continue;
      if (rule.only && !onlyBlocker(names, names.indexOf(name), rule.only)) break;
      out.push({ diet: rule.diet, note: rule.note(match[0]) });
      break;
    }
  }
  return out;
}

module.exports = { substitutionsFor, dietaryTipsFor, RULES, MAX_NOTES, MAX_DIET_TIPS };
