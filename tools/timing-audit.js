#!/usr/bin/env node
'use strict';
/**
 * Audits the times a recipe advertises against the times its own method
 * describes, because a header that says "50 min" over a dough that proves
 * overnight is the one kind of error a reader cannot catch before starting.
 *
 * The waiting itself is read from the method by src/lib/timing.js, which is
 * also what the build uses, so the page and this audit cannot disagree about
 * it. What this file checks is that the record agrees too:
 *
 *   1. A method that bakes, fries or boils cannot have a cook time of zero.
 *   2. Unattended waiting of an hour or more — proving, chilling, marinating,
 *      fermenting, cooling — must be declared in the detail record's `rest`
 *      field as the floor the method describes, with a label for the page.
 *      A shorter wait may go undeclared (the page reads it from the method
 *      either way), but a declared rest must equal the floor, and a declared
 *      rest the method does not describe is a failure too.
 *
 *   node tools/timing-audit.js
 *   node tools/timing-audit.js --why          # the sentences each wait came from
 *   node tools/timing-audit.js --ranges       # every recipe whose method gives a range
 */
const { loadRecipes } = require('../src/build');
const volumes = require('../src/data/volumes');
const { detectWait, COOKS } = require('../src/lib/timing');

const WHY = process.argv.includes('--why');
const RANGES = process.argv.includes('--ranges');
const recipes = loadRecipes();
const details = volumes.details();
const failures = [];

for (const recipe of recipes) {
  if (recipe.cook === 0 && COOKS.test(recipe.steps.join(' '))) {
    const verb = COOKS.exec(recipe.steps.join(' '))[0];
    failures.push(`${recipe.slug} — cook time is 0 but the method says "${verb}"`);
  }
  const detail = details[recipe.slug] || {};
  const declared = detail.rest ? detail.rest[0] : 0;
  const wait = detectWait({ slug: recipe.slug, steps: recipe.steps, ingredients: recipe.ingredients });
  if (wait.min !== declared && (declared || wait.min >= 60)) {
    if (WHY) for (const line of wait.trace) failures.push(`    ${line}`);
    failures.push(wait.min
      ? `${recipe.slug} — method describes ${wait.min} min of waiting but the record `
        + `declares ${declared || 'none'}; set rest to [${wait.min}, '…']`
      : `${recipe.slug} — declares ${declared} min of rest the method does not describe`);
  }
  if (RANGES && wait.max > wait.min) {
    console.log(`  ${recipe.slug}: ${wait.min}–${wait.max} min of waiting`);
  }
}

for (const line of failures) console.log(`  ✗ ${line}`);
console.log(failures.length
  ? `\n${failures.length} timing problem${failures.length === 1 ? '' : 's'} in ${recipes.length} recipes.`
  : `All ${recipes.length} recipes state their cooking and resting times honestly.`);
process.exit(failures.length ? 1 : 0);
