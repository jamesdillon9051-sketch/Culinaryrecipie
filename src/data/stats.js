'use strict';

/* Counts derived from the catalogues rather than written into copy, so the
   headline numbers on the site can never drift from the actual data. */
const catalog = [...require('./catalog'), ...require('./catalog-2'),
                 ...require('./catalog-3'), ...require('./catalog-4')];
const images = require('./images.json');

/* The same principle applied to licensing, which matters more: a page that
   says "no photograph here needs crediting" has to stop saying it the moment
   one does. Derived, so it cannot be left stale. */
const NEEDS_CREDIT = /^(cc[-\s]?by|attribution)/i;
const SHARE_ALIKE = /(\bsa\b|share[-\s]?alike)/i;
const shots = [];
for (const entry of Object.values(images)) {
  if (!entry) continue;
  for (const shot of [entry.hero, entry.process]) if (shot && shot.licence) shots.push(shot);
}
const withPhoto = catalog.filter(r => images[r.slug] && images[r.slug].hero).length;
const credited = shots.filter(s => NEEDS_CREDIT.test(s.licence)).length;
const shareAlike = shots.filter(s => SHARE_ALIKE.test(s.licence)).length;

module.exports = {
  recipeCount: catalog.length,
  cuisineCount: new Set(catalog.map(r => r.cuisine)).size,
  categoryCount: new Set(catalog.map(r => r.category)).size,
  photoCount: withPhoto,
  placeholderCount: catalog.length - withPhoto,
  imageCount: shots.length,
  creditedImageCount: credited,
  shareAlikeImageCount: shareAlike,
  attributionOnlyImageCount: credited - shareAlike,
  publicDomainImageCount: shots.length - credited,
  /* True while every photograph is CC0 or public domain, false as soon as one
     carries an attribution condition. The about page reads this rather than
     asserting either. */
  allPublicDomain: credited === 0
};
