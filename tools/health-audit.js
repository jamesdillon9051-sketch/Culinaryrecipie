#!/usr/bin/env node
'use strict';
/**
 * A health label is a claim about numbers, so the numbers are checked.
 *
 * Three tags — Diabetes-Friendly, Weight-Loss Friendly and Kidney-Friendly — are written by hand into
 * the catalogue rows of the volumes that carry them. The rules each one stands for are in
 * src/lib/health.js, and this holds every tagged recipe to them on every `npm run check`:
 *
 *   1. The recipe is inside the limits for each label it carries (carbohydrate, calories, sodium,
 *      potassium, phosphorus, added sugar, the foods a kidney diet refuses).
 *   2. The nutrition printed on the page is what its own ingredient list adds up to
 *      (tools/nutrition-calc.js). A recipe whose ingredients the calculator cannot read fails, because
 *      the figure that goes missing is the one the label depends on.
 *   3. A recipe that carries a label does not promise an outcome. "Safe for diabetics", "lowers blood
 *      sugar", "burns fat", "flushes toxins" and "cures" are claims a recipe cannot back, however it is
 *      phrased, and the label never needs them.
 *   4. The volume that was written protein-rich still is (volume 34: 20 g a serving for a meal, 12 g for
 *      a snack), because its description promises it.
 *
 *   node tools/health-audit.js            list the failures, then a summary
 *   node tools/health-audit.js --slug a,b show every check for those recipes
 */
const fs = require('fs');
const path = require('path');
const health = require('../src/lib/health');
const calc = require('./nutrition-calc');

/* Things a recipe may not promise. A label describes a plate; it does not describe what the plate
   does to a person. */
const PROMISES = [
  /\b(?:safe|suitable|ideal|perfect|good) for (?:people with |anyone with |those with )?(?:diabetes|diabetics?|kidney (?:disease|failure)|ckd|dialysis)\b/i,
  /\b(?:diabet(?:ic|es)|kidney)[- ]safe\b/i,
  /\b(?:lowers?|reduces?|controls?|regulates?|balances?|stabili[sz]es?|spikes?) (?:your |the )?(?:blood (?:sugar|glucose)|glucose|a1c|cholesterol|blood pressure)\b/i,
  /\b(?:cures?|heals?|treats?|reverses?|prevents?|fights?) (?:diabetes|kidney|disease|cancer|obesity)\b/i,
  /\b(?:burns?|melts?|torch(?:es)?|blasts?) (?:belly |body )?fat\b/i,
  /\bboosts? (?:your |the )?metabolism\b/i,
  /\b(?:detox(?:es|ify|ifying)?|flush(?:es)? (?:out )?toxins|cleanse)\b/i,
  /\bguaranteed\b|\blose \d+ ?(?:lb|lbs|pounds|kg|kilos)\b|\bmelt away\b/i,
  /\b(?:won't|will not|doesn't|does not) (?:spike|raise) (?:your )?(?:blood )?(?:sugar|glucose)\b/i
];

const PROSE = ['description', 'meta', 'why', 'storage'];

/* Volumes written to a brief the label alone does not carry. */
const PROTEIN_BRIEF = { file: 'catalog-34.js', meal: 20, small: 12 };

function main(argv) {
  const { loadRecipes } = require('../src/build');
  const recipes = loadRecipes();
  const only = argv.includes('--slug') ? new Set(argv[argv.indexOf('--slug') + 1].split(',')) : null;
  const failures = [];
  const counts = { [health.DIABETES]: 0, [health.WEIGHT_LOSS]: 0, [health.KIDNEY]: 0 };

  const briefFile = path.join(__dirname, '..', 'src', 'data', PROTEIN_BRIEF.file);
  const proteinRich = new Set(fs.existsSync(briefFile) ? require(briefFile).map(row => row.slug) : []);

  for (const recipe of recipes) {
    const labels = health.labelsOf(recipe);
    if (only && !only.has(recipe.slug)) continue;
    if (proteinRich.has(recipe.slug)) {
      const need = health.isSmall(recipe) ? PROTEIN_BRIEF.small : PROTEIN_BRIEF.meal;
      if (recipe.nutrition[1] < need) failures.push(`${recipe.slug}: written for the protein-rich volume but a serving has ${recipe.nutrition[1]} g protein, under ${need} g`);
    }
    if (!labels.length) continue;
    for (const tag of labels) {
      counts[tag]++;
      for (const line of health.failures(recipe, tag)) failures.push(`${recipe.slug}: ${tag} — ${line}`);
      if (only) for (const c of health.evaluate(recipe, tag).checks) {
        console.log(`  ${c.ok ? '✓' : '✗'} ${recipe.slug} ${tag}: ${c.label} ${c.value}${c.unit ? ` ${c.unit}` : ''} (${c.kind === 'none' ? 'must be none' : `${c.kind === 'max' ? 'at most' : 'at least'} ${c.limit}${c.unit ? ` ${c.unit}` : ''}`})`);
      }
    }

    const kidney = labels.includes(health.KIDNEY);
    const computed = calc.computeRecipe(recipe.ingredients, recipe.servings);
    for (const p of computed.problems) failures.push(`${recipe.slug}: ${p}`);
    if (kidney) for (const m of computed.missingKP) failures.push(`${recipe.slug}: no potassium or phosphorus figures for ${m}`);
    if (!computed.problems.length) {
      for (const d of calc.differences({ nut: recipe.nutrition, kp: recipe.kp }, computed, { kp: kidney })) {
        failures.push(`${recipe.slug}: ${d} (node tools/nutrition-calc.js --slug ${recipe.slug} --write)`);
      }
    }

    const fields = {
      description: recipe.description, meta: recipe.meta, why: recipe.why, storage: recipe.storage,
      tips: (recipe.tips || []).join(' '), steps: (recipe.steps || []).join(' '), pairings: (recipe.pairings || []).join(' ')
    };
    for (const [field, text] of Object.entries(fields)) {
      for (const re of PROMISES) {
        const m = re.exec(text || '');
        if (m) failures.push(`${recipe.slug}: ${field} says "${m[0]}" — a ${labels[0]} recipe may describe its numbers but not promise an outcome`);
      }
    }
  }

  for (const f of failures) console.log(`  ✗ ${f}`);
  if (failures.length) { process.exitCode = 1; return; }
  const total = counts[health.DIABETES] + counts[health.WEIGHT_LOSS] + counts[health.KIDNEY];
  console.log(`  ✓ health: ${total} labels on ${recipes.filter(r => health.labelsOf(r).length).length} recipes `
    + `(${counts[health.DIABETES]} diabetes, ${counts[health.WEIGHT_LOSS]} weight loss, ${counts[health.KIDNEY]} kidney), `
    + 'each inside its limits, with nutrition that its ingredient list reproduces');
}

if (require.main === module) {
  try { main(process.argv.slice(2)); } catch (e) {
    console.log(`  ✗ health-audit: ${e.message}`);
    console.error(e.stack || e.message);
    process.exit(1);
  }
}

module.exports = { PROMISES };
