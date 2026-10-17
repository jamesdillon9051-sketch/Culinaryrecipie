#!/usr/bin/env node
'use strict';

/**
 * Checks every recipe's diet tags against its own ingredient list.
 *
 * This is a separate question from the ingredient hubs, and a stricter one. A
 * risotto made with chicken stock is not a "chicken recipe" and does not belong
 * on that hub — but it is emphatically not vegetarian. The hub matcher forgives
 * stock; a diet claim cannot.
 *
 * The tags matter more than anything else the site asserts. Someone coeliac
 * cooking from a Gluten-Free page, or someone vegan cooking from a Vegan one,
 * is trusting a claim they cannot verify from the photograph. The judging is in
 * src/lib/diet-conditions.js, shared with the build, so the page, the Recipe
 * JSON-LD and this audit read every line the same way:
 *
 *   clean         nothing on the list breaks the tag.
 *   conditional   a line offers a way out ("honey or sugar", "parmesan, to
 *                 serve"); the page states the condition and the schema
 *                 leaves the diet out. Listed with --conditional.
 *   contradicted  a line with no way out, or one whose every alternative breaks
 *                 the tag ("smoked salmon or gravlax" on a vegetarian page).
 *                 Fails the run.
 *
 *   node tools/diet-audit.js                 fail on contradictions
 *   node tools/diet-audit.js --conditional   also list every condition, and the
 *                                            method steps that name only the
 *                                            forbidden side, for a person to reword
 *   node tools/diet-audit.js --only <Tag>    one tag
 */
const { loadRecipes } = require('../src/build');

const argv = process.argv.slice(2);
const onlyAt = argv.indexOf('--only');
const only = onlyAt > -1 ? argv[onlyAt + 1] : null;
const showConditional = argv.includes('--conditional');

const recipes = loadRecipes();
const problems = [];
const conditional = [];
const stepNotes = [];
for (const recipe of recipes) {
  for (const [tag, d] of Object.entries(recipe.dietStatus || {})) {
    if (only && tag !== only) continue;
    if (d.status === 'contradicted') {
      problems.push(`${recipe.slug}: tagged ${tag}, but "${d.lines[0]}" breaks it with no alternative`);
    } else if (d.status === 'conditional') {
      conditional.push(`${recipe.slug}: ${d.note}`);
      for (const s of d.steps) stepNotes.push(`${recipe.slug}: step ${s.step} names "${s.word}" without its alternative (${tag})`);
    }
  }
}

if (showConditional) {
  console.log(`Conditional diet labels (${conditional.length}):`);
  for (const line of conditional) console.log(`  · ${line}`);
  console.log(`\nMethod steps to reword (${stepNotes.length}):`);
  for (const line of stepNotes) console.log(`  · ${line}`);
  console.log('');
}

if (problems.length) {
  console.log(`Diet tags contradicted by their own ingredients${only ? ` (${only})` : ''} (${problems.length}):`);
  for (const problem of problems) console.log(`  ✗ ${problem}`);
  process.exit(1);
}
console.log(`${only ? `${only}: ` : 'Diet tags: '}no contradictions across ${recipes.length} recipes; `
  + `${conditional.length} label${conditional.length === 1 ? '' : 's'} hold only with a swap the recipe offers, and say so on the page.`);
