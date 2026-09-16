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
    note: m => `No fish sauce, or keeping it vegetarian? A mix of soy sauce and a squeeze of lime gets close to the same salt-and-savoury lift the ${m} gives.`
  },
  {
    find: /\bbuttermilk\b/,
    note: m => `Out of ${m}? Stir a tablespoon of lemon juice or vinegar into the same amount of ordinary milk and let it sit five minutes before using.`
  },
  {
    find: /\b(double cream|heavy cream)\b/,
    note: m => `${m[0].toUpperCase()}${m.slice(1)} won't whip if you swap it, but for the cooking itself, full-fat crème fraîche or a lower-fat single cream works in its place.`
  },
  {
    find: /\bself[- ]raising flour\b/,
    note: m => `No ${m} to hand? Use the same weight of plain flour plus 2 teaspoons of baking powder per 150 g.`
  },
  {
    find: /\bpanko\b/,
    skip: cat => false,
    note: m => `${m[0].toUpperCase()}${m.slice(1)} gives the crunchiest crust here, but ordinary dried breadcrumbs will still fry crisp if that's what's in the cupboard.`
  },
  {
    find: /\bcoconut milk\b/,
    note: m => `For a non-vegan version, double cream can generally stand in for the ${m}; going the other way, a plant-based cream sold for cooking is the closer match to dairy than tinned coconut milk on its own.`
  },
  {
    find: /\blight soy sauce\b|\bsoy sauce\b/,
    note: m => `Tamari is the direct swap for ${m} if you need the dish gluten-free — it is brewed the same way, just without the wheat.`
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
    note: m => `A pinch of dried chilli flakes works in place of fresh chilli — start with about a third of the quantity the ${m} in the list implies, since dried chilli is more concentrated, and add more to taste.`
  },
  {
    find: /\blime(?:s)?\b/,
    note: m => `Lemon is the everyday swap for ${m} in this kind of dish — the acidity plays the same role even though the flavour is not identical.`
  },
  {
    find: /\bginger\b/,
    excludeIfAlso: /\bground ginger\b|\bginger powder\b/,
    note: () => `A quarter-teaspoon of ground ginger per tablespoon of fresh is the standard ratio if you are working from the spice rack rather than a fresh root.`
  },
  {
    find: /\bgarlic\b/,
    excludeIfAlso: /\bgarlic powder\b|\bgarlic granules\b/,
    note: () => `An eighth of a teaspoon of garlic powder per clove is the usual stand-in when you are out of fresh garlic — it will not caramelise the same way, but it carries the flavour.`
  },
  {
    find: /\bchicken stock\b/,
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
    note: m => `A measure-for-measure gluten-free flour blend can generally replace the ${m} here without changing the method, since this is savoury cooking rather than a structural bake.`
  },
  {
    find: /\bworcestershire sauce\b/,
    note: m => `For a vegetarian version, look for a plant-based Worcestershire sauce — the anchovies in the standard bottle are what makes ordinary ${m} unsuitable, not anything else in it.`
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
    if (rule.skip && rule.skip(recipe.category)) continue;
    for (const name of names) {
      const lower = name.toLowerCase();
      const match = rule.find.exec(lower);
      if (!match) continue;
      /* A line that is already the dried/ground/powdered form of the thing
         (ground ginger, chilli flakes, garlic powder) is not a candidate for
         "here is the dried form" advice about itself. */
      if (rule.excludeIfAlso && rule.excludeIfAlso.test(lower)) continue;
      out.push(rule.note(match[0]));
      break; // one hit per rule is enough; move to the next rule
    }
  }
  return out;
}

module.exports = { substitutionsFor, RULES, MAX_NOTES };
