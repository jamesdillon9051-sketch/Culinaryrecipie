#!/usr/bin/env node
'use strict';
/**
 * Which recipes still have no picture at all?
 *
 * Writes MISSING-IMAGES.txt at the repository root: every recipe whose hero is
 * absent from src/data/images.json, grouped by cuisine, with the number of
 * archive photographs already refused for it. That is the list to hand to
 * anyone who can supply a photograph, and the list tools/adopt_images.py
 * refers to. It was written by hand once, on 10 September, and said "199 of
 * 400" for weeks after the catalogue had grown to 2,415 and most of those
 * recipes had a picture, so it is generated now and `npm run missing`
 * regenerates it.
 *
 * A recipe with an AI illustration is not on the list: it has a picture, and
 * its caption says what kind. To see which those are, read images.json for
 * entries whose source is "AI illustration".
 *
 *   node tools/missing-images.js            write MISSING-IMAGES.txt
 *   node tools/missing-images.js --print    print it instead
 */
const fs = require('fs');
const path = require('path');
const volumes = require('../src/data/volumes');

const ROOT = path.join(__dirname, '..');
const images = JSON.parse(fs.readFileSync(path.join(ROOT, 'src', 'data', 'images.json'), 'utf8'));
const rejectsPath = path.join(ROOT, 'src', 'data', 'image-rejects.json');
const rejects = fs.existsSync(rejectsPath) ? JSON.parse(fs.readFileSync(rejectsPath, 'utf8')) : {};

const catalog = volumes.catalog();
const waiting = catalog.filter(r => !(images[r.slug] && images[r.slug].hero));

const byCuisine = new Map();
for (const r of waiting) {
  if (!byCuisine.has(r.cuisine)) byCuisine.set(r.cuisine, []);
  byCuisine.get(r.cuisine).push(r);
}
const groups = [...byCuisine.entries()].sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]));

const lines = [];
lines.push('RECIPES STILL WITHOUT A PICTURE');
lines.push('');
lines.push('A photograph, or an illustration the site draws, appears on every other recipe.');
lines.push('Save a photograph as BOTH files in  src/assets/img/recipes/');
lines.push('    <slug>.jpg    800 px wide, quality ~70');
lines.push('    <slug>.webp   800 px wide, quality ~68');
lines.push('Then run:  python3 tools/adopt_images.py   (see its header for the credit and licence it needs)');
lines.push('');
for (const [cuisine, rows] of groups) {
  const head = `== ${cuisine} (${rows.length}) `;
  lines.push(head + '='.repeat(Math.max(3, 56 - head.length)));
  for (const r of rows) {
    const n = (rejects[r.slug] || []).length;
    lines.push(`  ${r.slug.padEnd(34)} ${r.title}${n ? `   [${n} refused already]` : ''}`);
  }
  lines.push('');
}
lines.push(`TOTAL ${waiting.length} of ${catalog.length}`);
lines.push('');

const out = lines.join('\n');
if (process.argv.includes('--print')) {
  process.stdout.write(out);
} else {
  fs.writeFileSync(path.join(ROOT, 'MISSING-IMAGES.txt'), out);
  console.log(`MISSING-IMAGES.txt: ${waiting.length} of ${catalog.length} recipes have no picture`);
}
