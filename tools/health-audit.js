#!/usr/bin/env node
'use strict';
/**
 * Health claims, held out of the recipes.
 *
 * The Diabetes-Friendly, Weight-Loss Friendly and Kidney-Friendly labels were withdrawn in
 * October 2026 (src/lib/health.js says why). What this audit holds now, on every `npm run check`:
 *
 *   1. No recipe carries a withdrawn label. Putting one back needs a qualified review first.
 *   2. No recipe, in any field a reader sees, promises an outcome: "safe for diabetics", "lowers
 *      blood sugar", "burns fat", "flushes toxins", "cures" and the rest of PROMISES below.
 *   3. The volumes whose nutrition is computed from the ingredient list (32 to 34) still
 *      reproduce it (tools/nutrition-calc.js), potassium and phosphorus included where printed.
 *   4. The volume that was written protein-rich still is (volume 34: 20 g a serving for a meal,
 *      12 g for a snack), because its description promises it.
 *
 *   node tools/health-audit.js            list the failures, then a summary
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
  /* Read across the whole catalogue now, so "the fat will melt away" in a braise and "a rise is
     guaranteed" in a scone are cooking, not promises; only the weight-loss forms count. */
  /\bguaranteed (?:weight|results|to lose)\b|\blose \d+ ?(?:lb|lbs|pounds|kg|kilos)\b|\b(?:pounds|weight|inches) (?:will )?melts? away\b|\bmelts? away (?:the )?(?:pounds|weight|inches)\b/i,
  /\b(?:won't|will not|doesn't|does not) (?:spike|raise) (?:your )?(?:blood )?(?:sugar|glucose)\b/i
];

const PROSE = ['description', 'meta', 'why', 'storage'];

/* Volumes written to a brief the label alone does not carry. */
const PROTEIN_BRIEF = { file: 'catalog-34.js', meal: 20, small: 12 };

/* The volumes whose `nut` is written by `npm run calc` rather than by hand. */
const COMPUTED = ['catalog-32.js', 'catalog-33.js', 'catalog-34.js'];

function main() {
  const { loadRecipes } = require('../src/build');
  const recipes = loadRecipes();
  const failures = [];
  const rowsOf = file => {
    const full = path.join(__dirname, '..', 'src', 'data', file);
    return fs.existsSync(full) ? require(full).map(row => row.slug) : [];
  };
  const computedSlugs = new Set(COMPUTED.flatMap(rowsOf));
  const proteinRich = new Set(rowsOf(PROTEIN_BRIEF.file));
  let computedChecked = 0;

  for (const recipe of recipes) {
    for (const tag of health.WITHDRAWN) {
      if ((recipe.tags || []).includes(tag)) {
        failures.push(`${recipe.slug}: carries the withdrawn ${tag} label — a health label needs a qualified review before it comes back (src/lib/health.js)`);
      }
    }
    if (proteinRich.has(recipe.slug)) {
      const need = health.isSmall(recipe) ? PROTEIN_BRIEF.small : PROTEIN_BRIEF.meal;
      if (recipe.nutrition[1] < need) failures.push(`${recipe.slug}: written for the protein-rich volume but a serving has ${recipe.nutrition[1]} g protein, under ${need} g`);
    }
    if (computedSlugs.has(recipe.slug)) {
      computedChecked++;
      const kp = Boolean(recipe.kp);
      const computed = calc.computeRecipe(recipe.ingredients, recipe.servings);
      for (const p of computed.problems) failures.push(`${recipe.slug}: ${p}`);
      if (kp) for (const m of computed.missingKP) failures.push(`${recipe.slug}: no potassium or phosphorus figures for ${m}`);
      if (!computed.problems.length) {
        for (const d of calc.differences({ nut: recipe.nutrition, kp: recipe.kp }, computed, { kp })) {
          failures.push(`${recipe.slug}: ${d} (node tools/nutrition-calc.js --slug ${recipe.slug} --write)`);
        }
      }
    }
    const fields = {
      description: recipe.description, meta: recipe.meta, why: recipe.why, storage: recipe.storage,
      tips: (recipe.tips || []).join(' '), steps: (recipe.steps || []).join(' '), pairings: (recipe.pairings || []).join(' ')
    };
    for (const [field, text] of Object.entries(fields)) {
      for (const re of PROMISES) {
        const m = re.exec(text || '');
        if (m) failures.push(`${recipe.slug}: ${field} says "${m[0]}" — a recipe may describe its numbers but not promise a health outcome`);
      }
    }
  }
  for (const f of failures) console.log(`  ✗ ${f}`);
  if (failures.length) { process.exitCode = 1; return; }
  console.log(`  ✓ health: no withdrawn labels and no outcome promises on ${recipes.length} recipes; `
    + `${computedChecked} computed recipes reproduce their nutrition from the ingredient list`);
}

if (require.main === module) {
  try { main(process.argv.slice(2)); } catch (e) {
    console.log(`  ✗ health-audit: ${e.message}`);
    console.error(e.stack || e.message);
    process.exit(1);
  }
}

module.exports = { PROMISES };
