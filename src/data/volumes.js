'use strict';

/**
 * The catalogue is written in volumes — catalog.js, catalog-2.js and so on,
 * each with a matching details directory. Four separate files used to list
 * those volumes by hand, so adding one meant remembering all four: the build
 * would find the new recipes, the diet audit would not, and a contradicted tag
 * would ship unaudited. They are discovered here instead.
 *
 * Order is publication order, and it decides the dates the build derives, so
 * the numbering is sorted numerically rather than lexically: catalog-10.js
 * comes after catalog-9.js, not after catalog-1.
 */
const fs = require('fs');
const path = require('path');

const DIR = __dirname;
const rank = (name, prefix) => {
  const digits = name.slice(prefix.length).replace(/\.js$/, '');
  return digits ? Number(digits.replace(/^-/, '')) : 1;
};

/** ['catalog.js', 'catalog-2.js', …] */
function catalogFiles() {
  return fs.readdirSync(DIR)
    .filter(f => /^catalog(-\d+)?\.js$/.test(f))
    .sort((a, b) => rank(a, 'catalog') - rank(b, 'catalog'));
}

/** ['details', 'details2', …] */
function detailDirs() {
  return fs.readdirSync(DIR, { withFileTypes: true })
    .filter(e => e.isDirectory() && /^details\d*$/.test(e.name))
    .map(e => e.name)
    .sort((a, b) => rank(a, 'details') - rank(b, 'details'));
}

/** Every catalogue row, in publication order. */
function catalog() {
  return catalogFiles().flatMap(file => require(path.join(DIR, file)));
}

/** Every detail record, keyed by slug. */
function details() {
  const out = {};
  for (const dir of detailDirs()) {
    const full = path.join(DIR, dir);
    for (const file of fs.readdirSync(full).filter(f => f.endsWith('.js'))) {
      Object.assign(out, require(path.join(full, file)));
    }
  }
  return out;
}

module.exports = { catalogFiles, detailDirs, catalog, details };
