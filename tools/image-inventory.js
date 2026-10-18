#!/usr/bin/env node
'use strict';
/**
 * The picture inventory (src/lib/image-inventory.js): every published recipe in exactly one of
 * three groups, and the files counted separately. Part of `npm run check`.
 *
 *   node tools/image-inventory.js            the counts, and a failure for anything broken
 *   node tools/image-inventory.js --list     also every recipe with no usable picture
 *   node tools/image-inventory.js --json     the whole inventory as JSON
 *
 * It fails when a record points at a file that is missing or unreadable, when the recorded size
 * disagrees with the file, when a photograph lacks its licence, source page or (for CC BY) its
 * author, when two recipes share one file, or when the three groups do not add up.
 */
const { inventory } = require('../src/lib/image-inventory');
const catalog = require('../src/data/volumes').catalog();
const images = require('../src/data/images.json');

const inv = inventory(catalog, images);
if (process.argv.includes('--json')) { console.log(JSON.stringify(inv, null, 1)); process.exit(0); }

const r = inv.recipes;
const a = inv.assets;
const failures = [...inv.problems];
if (r.photo + r.illustration + r.none !== r.total) failures.push(`the groups add up to ${r.photo + r.illustration + r.none}, not ${r.total}`);
for (const b of a.brokenRefs) failures.push(`${b.slug}: ${b.role} points at ${b.file} (${b.why})`);
for (const s of a.sharedFiles) failures.push(`${s.file} is used by ${s.slugs.join(' and ')}`);

console.log(`Recipes (${r.total}): ${r.photo} with a photograph of the dish, ${r.illustration} with an AI illustration only, ${r.none} with no picture.`);
console.log(`Files: ${a.photoFiles} photographs (${a.heroPhotoFiles} main, ${a.processPhotoFiles} in-progress), ${a.illustrationFiles} illustrations; ` +
  `${a.unusedFiles.length} unused on disk, ${a.sharedFiles.length} shared, ${a.brokenRefs.length} broken, ${a.recordsForUnpublishedRecipes.length} records for unpublished recipes.`);
if (process.argv.includes('--list')) for (const p of inv.perRecipe.filter(x => x.group === 'none')) console.log(`  - ${p.slug}`);
if (a.unusedFiles.length) console.log(`  note: unused files are not served by any page: ${a.unusedFiles.slice(0, 10).join(', ')}${a.unusedFiles.length > 10 ? ' …' : ''}`);
for (const f of failures) console.log(`  ✗ ${f}`);
process.exit(failures.length ? 1 : 0);
