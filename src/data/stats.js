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

/* Recipes by picture, from the one inventory tools/image-inventory.js checks: each recipe in
   exactly one group, and a record whose file is missing counts as no picture. */
/* This module loads before build() copies assets into the output directory.
   Inspect the source files so a newly added photo counts on the first build. */
const inv = require('../lib/image-inventory').inventory(catalog, images, {
  imageDir: require('path').join(__dirname, '..', 'assets', 'img', 'recipes')
});
const withPhoto = inv.recipes.photo;
const withDrawing = inv.recipes.illustration;
const credited = photos.filter(s => NEEDS_CREDIT.test(s.licence)).length;
/* Commons is the main source and Openverse (Flickr and other archives of freely
   licensed work) supplies the rest. The About page used to say all of them came
   from Commons, which was not true of about a quarter. */
const fromCommons = photos.filter(s => /^wikimedia/i.test(s.source || '')).length;
/* Stock libraries (Pixabay, and Pexels or Unsplash if a key is ever set) have
   their own licences: free to use commercially and to resize, with no credit
   required, but not Creative Commons and not public domain. They are counted
   apart so that neither of those figures can absorb them. */
const STOCK = /^(pixabay|pexels|unsplash)$/i;
const stock = photos.filter(s => STOCK.test(s.source || ''));
const archive = photos.filter(s => !STOCK.test(s.source || ''));
const shareAlike = photos.filter(s => SHARE_ALIKE.test(s.licence)).length;

module.exports = {
  recipeCount: catalog.length,
  cuisineCount: new Set(catalog.map(r => r.cuisine)).size,
  categoryCount: new Set(catalog.map(r => r.category)).size,
  photoCount: withPhoto,
  illustrationCount: withDrawing,
  placeholderCount: inv.recipes.none,
  heroPhotoFileCount: inv.assets.heroPhotoFiles,
  processPhotoFileCount: inv.assets.processPhotoFiles,
  /* Photographs only. The licence figures beneath it describe these and
     nothing else, so a drawing can never be counted as a public-domain
     photograph. */
  imageCount: photos.length,
  commonsImageCount: fromCommons,
  otherArchiveImageCount: archive.length - fromCommons,
  stockImageCount: stock.length,
  stockSources: [...new Set(stock.map(s => s.source))].sort(),
  drawnImageCount: drawn.length,
  creditedImageCount: credited,
  shareAlikeImageCount: shareAlike,
  attributionOnlyImageCount: credited - shareAlike,
  publicDomainImageCount: archive.length - credited,
  /* True while every photograph is CC0 or public domain, false as soon as one
     carries an attribution condition. The about page reads this rather than
     asserting either. */
  allPublicDomain: credited === 0
};
