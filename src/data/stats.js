'use strict';

/* Counts derived from the catalogues rather than written into copy, so the
   headline numbers on the site can never drift from the actual data. */
const catalog = require('./volumes').catalog();
const images = require('./images.json');

/* The same principle applied to licensing, which matters more: a page that
   says "no photograph here needs crediting" has to stop saying it the moment
   one does. Derived, so it cannot be left stale. */
const NEEDS_CREDIT = /^(cc[-\s]?by|attribution)/i;
const SHARE_ALIKE = /(\bsa\b|share[-\s]?alike)/i;

/* A drawing is not a photograph, and every count below keeps them apart.
   Left together, 174 generated pictures would have walked into the licence
   figures as "public domain, no conditions at all" — true of the file and
   false about the site, which tells readers those figures describe
   photographs of the food taken by people who are credited for them. */
const ILLUSTRATION = /^ai illustration$/i;
const isDrawn = shot => ILLUSTRATION.test(shot.source || '') ||
                        ILLUSTRATION.test(shot.licence || '');

const shots = [];
for (const entry of Object.values(images)) {
  if (!entry) continue;
  for (const shot of [entry.hero, entry.process]) if (shot && shot.licence) shots.push(shot);
}
const drawn = shots.filter(isDrawn);
const photos = shots.filter(s => !isDrawn(s));

const heroes = catalog.map(r => (images[r.slug] || {}).hero).filter(Boolean);
const withPhoto = heroes.filter(h => !isDrawn(h)).length;
const withDrawing = heroes.filter(isDrawn).length;
const credited = photos.filter(s => NEEDS_CREDIT.test(s.licence)).length;
const shareAlike = photos.filter(s => SHARE_ALIKE.test(s.licence)).length;

module.exports = {
  recipeCount: catalog.length,
  cuisineCount: new Set(catalog.map(r => r.cuisine)).size,
  categoryCount: new Set(catalog.map(r => r.category)).size,
  photoCount: withPhoto,
  illustrationCount: withDrawing,
  placeholderCount: catalog.length - withPhoto - withDrawing,
  /* Photographs only. The licence figures beneath it describe these and
     nothing else, so a drawing can never be counted as a public-domain
     photograph. */
  imageCount: photos.length,
  drawnImageCount: drawn.length,
  creditedImageCount: credited,
  shareAlikeImageCount: shareAlike,
  attributionOnlyImageCount: credited - shareAlike,
  publicDomainImageCount: photos.length - credited,
  /* True while every photograph is CC0 or public domain, false as soon as one
     carries an attribution condition. The about page reads this rather than
     asserting either. */
  allPublicDomain: credited === 0
};
