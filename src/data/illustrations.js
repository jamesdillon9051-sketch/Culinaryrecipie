'use strict';

/**
 * What the site does with generated illustrations.
 *
 * Some dishes have never been photographed by anyone willing to license the
 * result. Six passes through Wikimedia Commons, Openverse, Commons categories
 * and Wikipedia lead images did not find them, and the ones that came back
 * were usually a different dish with the same name. Those recipes carry a
 * picture drawn by an AI image model instead of a blank gradient card.
 *
 * The labelling is not configurable and is not meant to be. Every illustration
 * says underneath itself that it is one, is listed separately in
 * images-attribution.md, and is excluded from every photograph and licence
 * count on the site — see src/data/stats.js and src/lib/util.js. tools/check.js
 * fails the build if any of that stops being true.
 *
 * The one thing that is a judgement rather than a fact is below.
 */
module.exports = {
  /**
   * Whether an illustration may be the `image` of a page's Recipe schema.
   *
   * This decides what the site tells Google, and it is a real trade rather
   * than an obvious call, so it is a switch and not a hardcoded choice.
   *
   * `true` — the illustration goes into Recipe.image, and those recipes are
   * eligible for the photo-led rich result again. What Google is handed is a
   * picture of the dish that nobody photographed. Readers are told plainly
   * that it is a drawing; the structured data has no field in which to say so.
   *
   * `false` — Recipe.image is omitted on those pages, exactly as it is for a
   * recipe with no picture at all. They lose rich-result eligibility, which is
   * the position this site already took once, deliberately: twenty-three
   * recipes gave up the rich result rather than pass the site's social card
   * off as a photograph of bread sauce. See "Stop 23 recipes claiming the
   * site's social card as a photo of the dish".
   *
   * The two cases are not the same, which is why this is not simply `false`.
   * That one was a single card with no food on it, standing in for
   * twenty-three different dishes at once. These are one picture per dish, of
   * that dish, each one checked by eye against the recipe before it was
   * published. Set this to false if you would rather not make the distinction
   * at all — nothing else has to change, and check.js keeps the on-page
   * labelling either way.
   */
  inRecipeSchema: true
};
