'use strict';

/**
 * Diet tags computed from the recipe rather than typed onto it.
 *
 * The six hand-written tags took a session to bring into line with the
 * ingredients, because a person applied them and a person can be wrong. These
 * two are derived at build time from figures the page already prints, so they
 * are correct on the day a recipe is added and stay correct when it is edited.
 *
 * Naming both of them took more thought than computing them.
 *
 * "Sugar-Free" would be a lie on almost everything. Milk has lactose, an onion
 * has sugar in it, and a recipe with a banana in it is not sugar-free by any
 * reading. What a reader avoiding sugar can actually act on is whether the cook
 * adds any, so the tag says NO ADDED SUGAR and means exactly that: nothing in
 * the ingredient list is sugar, honey, syrup, jaggery or condensed milk.
 *
 * "High-Protein" needs a number behind it or it means whatever the writer felt.
 * Thirty grams a serving is the line, chosen because src/lib/keywords.js was
 * already using it for the "high protein X" keyword, and one threshold used
 * twice beats two thresholds that disagree.
 */

/** Sugar under whatever name it is added: all of these are added sugar. */
const ADDED_SUGAR = /\b(sugar|honey|syrup|molasses|treacle|agave|jaggery|panela|"?golden syrup"?|condensed milk|dulce de leche|caramel|fondant|icing|marzipan|nutella|chocolate chips?)\b/i;

/* Named for something else. "Sugar snap peas" and "sugar-free" both contain
   "sugar"; neither sweetens anything. */
const NOT_ADDED_SUGAR = /\b(sugar[- ]snap|sugar[- ]free|no[- ]added[- ]sugar|sugar[- ]pumpkin|caramelis?e[ds]?|caramelizing|caramelising)\b/i;

const HIGH_PROTEIN_GRAMS = 30;

/**
 * Carbohydrate per serving at or below which a recipe is called Low-Carb.
 *
 * Twenty grams is a common line and, more to the point, it is a line: the tag
 * was applied by hand to sixteen recipes while a hundred and four sit under the
 * threshold, and one of the sixteen — ceviche, at 24 g — sat above it. A number
 * anyone can check against the nutrition table beats a judgement nobody
 * recorded.
 *
 * The figure itself is the useful part and it is printed on every page. Someone
 * counting carbohydrate works from the grams, not from a label.
 */
const LOW_CARB_GRAMS = 20;

/**
 * Net carbohydrate per serving — total carbohydrate less fibre — at or below
 * which a recipe is called Keto.
 *
 * Ten grams is the working line for a ketogenic day split across meals. Net
 * rather than total because fibre is not absorbed, which is the whole reason a
 * bowl of guacamole belongs on the list and a bowl of rice does not.
 *
 * This was the last diet tag still applied by hand, and it was applied to seven
 * recipes. One of them was ceviche, at 20 g of net carbohydrate — the same
 * mistake, on the same recipe, that Low-Carb was derived to fix. Deriving it
 * removes the tag from ceviche and gives it to the eighty recipes that qualify.
 */
const KETO_NET_CARB_GRAMS = 10;

/**
 * @param {string[]} lines  the ingredient list, group headings and all
 * @returns {boolean}
 */
function hasAddedSugar(lines) {
  return (lines || []).some(line => {
    if (typeof line !== 'string' || line.startsWith('#')) return false;
    const cleaned = line.replace(new RegExp(NOT_ADDED_SUGAR.source, 'gi'), ' ');
    return ADDED_SUGAR.test(cleaned);
  });
}

/**
 * The derived tags for one recipe.
 *
 * @param {object} detail  the detail record, for `ing` and `nut`
 * @returns {string[]}
 */
function derivedTags(detail, tags_ = []) {
  const tags = [];
  /* Every vegan dish is a vegetarian one. Eighty recipes carried Vegan without
     Vegetarian, which left them out of the Vegetarian filter, off the
     vegetarian keyword phrases and invisible to a reader who searches the
     broader word — for no reason but that the second tag was typed by hand. */
  if (tags_.includes('Vegan') && !tags_.includes('Vegetarian')) tags.push('Vegetarian');
  const [, protein, carbs, , fibre] = detail.nut || [];
  if (protein >= HIGH_PROTEIN_GRAMS) tags.push('High-Protein');
  if (carbs !== undefined && carbs <= LOW_CARB_GRAMS) tags.push('Low-Carb');
  if (carbs !== undefined && carbs - (fibre || 0) <= KETO_NET_CARB_GRAMS) tags.push('Keto');
  if (!hasAddedSugar(detail.ing)) tags.push('No Added Sugar');
  return tags;
}

module.exports = { derivedTags, hasAddedSugar, ADDED_SUGAR, NOT_ADDED_SUGAR,
  HIGH_PROTEIN_GRAMS, LOW_CARB_GRAMS, KETO_NET_CARB_GRAMS };
