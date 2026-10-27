#!/usr/bin/env node
'use strict';
/**
 * The flagship recipe register: statuses and problems.
 *
 *   node tools/flagship-check.js            table of the three statuses, fail on a broken record
 *   node tools/flagship-check.js --md FILE  also write the table as Markdown
 *
 * Part of `npm run check`. See src/lib/flagship.js for what each status means
 * and docs/flagship/README.md for the workflow.
 */
const fs = require('fs');
const { loadRecipes } = require('../src/build');
const flagship = require('../src/lib/flagship');

const recipes = loadRecipes();
const { problems, warnings } = flagship.validate(recipes);
const rows = flagship.statusRows(recipes);

for (const r of rows) {
  if (r.missing) { console.log(`  ✗ ${r.slug}: not a recipe`); continue; }
  console.log(`  ${r.slug.padEnd(26)} automated: ${r.automated.padEnd(10)} editorial: ${r.editorial.padEnd(12)} kitchen: ${r.kitchen}`);
}
const i = process.argv.indexOf('--md');
if (i > 0) {
  const md = ['| Recipe | Content version | Automated checks | Editorial review | Kitchen preparation | Why it was chosen |', '| --- | --- | --- | --- | --- | --- |']
    .concat(rows.filter(r => !r.missing).map(r => `| [${r.title}](https://weeklydelight.com/recipes/${r.slug}/) | \`${r.version}\` | ${r.automated} | ${r.editorial} | ${r.kitchen} | ${r.selectedBecause} |`));
  fs.writeFileSync(process.argv[i + 1], md.join('\n') + '\n');
  console.log(`Wrote ${process.argv[i + 1]}`);
}
for (const w of warnings) console.log(`  ! ${w}`);
if (problems.length) {
  console.error(`\n${problems.length} flagship problem(s):\n  ${problems.join('\n  ')}`);
  process.exit(1);
}
console.log(`Flagship register: ${rows.length} recipes, ${rows.filter(r => /^documented/.test(r.kitchen || '')).length} with current kitchen evidence, ${rows.filter(r => /^approved/.test(r.editorial || '')).length} editorially approved.`);
