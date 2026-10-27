'use strict';
/**
 * The flagship recipe register (src/data/flagship.json): which recipes are being
 * brought up to a documented standard, and what evidence each has.
 *
 * Three statuses, kept apart and never inferred from one another:
 *
 *   automated   computed here from the build: the recipe passes every audit in
 *               `npm run check` (it would not build otherwise), has a photograph,
 *               a calculated nutrition tier, a settled dish role and no untimed
 *               stage. Never typed into the register.
 *   editorial   a named person read the page against docs/flagship/README.md and
 *               approved it, for one content version of the recipe.
 *   kitchen     a named person cooked the recipe and recorded it (who, when,
 *               equipment, actual times, yield, what happened). Accepted only
 *               after review, and only for the content version that was cooked.
 *
 * What the page shows: nothing, unless a record is current. A kitchen record is
 * shown only when it is accepted, names the recipe's current content version,
 * AND src/data/testing-notes.json says "cooked" with the same cook and date (the
 * register CLAUDE.md already requires before anything may say "tested"). An
 * edit to the recipe after it was cooked makes the record stale, and it drops
 * off the page until it is cooked again or re-reviewed.
 */
const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, '..', 'data', 'flagship.json');
const NOTES = path.join(__dirname, '..', 'data', 'testing-notes.json');
const load = f => JSON.parse(fs.readFileSync(f, 'utf8'));

const EDITORIAL = ['not-started', 'in-review', 'changes-requested', 'approved'];
const KITCHEN = ['submitted', 'accepted', 'rejected'];
const KITCHEN_FIELDS = ['recipeVersion', 'cook', 'date', 'ingredientsUsed', 'equipment', 'activeMinutes',
  'elapsedMinutes', 'yield', 'observations', 'failures', 'adjustments', 'media', 'reviewStatus'];

let cache = null;
function register() {
  if (!cache) cache = { flagship: load(FILE), notes: load(NOTES).recipes || {} };
  return cache;
}

/** The current, displayable evidence for a recipe, or nulls. */
function evidenceFor(recipe) {
  const { flagship: reg, notes } = register();
  const entry = reg.recipes[recipe.slug];
  if (!entry) return { entry: null, kitchen: null, editorial: null };
  const note = notes[recipe.slug];
  const kitchen = (entry.kitchen || []).filter(k => k.reviewStatus === 'accepted' && k.recipeVersion === recipe.contentVersion
    && note && note.status === 'cooked' && note.cookedBy === k.cook && note.date === k.date).pop() || null;
  const ed = entry.editorial || {};
  const editorial = ed.status === 'approved' && ed.recipeVersion === recipe.contentVersion && ed.reviewer && ed.date ? ed : null;
  return { entry, kitchen, editorial };
}

/** Automated status: true only when every machine check this register relies on holds. */
function automatedStatus(recipe) {
  const reasons = [];
  if (!recipe.imageData) reasons.push('no photograph');
  if (recipe.nutritionTier > 2) reasons.push('no calculated nutrition');
  if (recipe.roleReview) reasons.push('dish role still under review');
  if (recipe.untimed) reasons.push(`untimed stages: ${recipe.untimed.join(', ')}`);
  return { passed: !reasons.length, reasons };
}

/** The block under the byline. Empty unless a current record exists. */
function recordHtml(recipe, esc, longDate) {
  const { kitchen, editorial } = evidenceFor(recipe);
  const parts = [];
  if (kitchen) {
    parts.push(`Cooked for this site by ${esc(kitchen.cook)} on <time datetime="${esc(kitchen.date)}">${esc(longDate(kitchen.date))}</time>: `
      + `${esc(String(kitchen.yield))}, about ${esc(String(kitchen.activeMinutes))} minutes of active work and ${esc(String(kitchen.elapsedMinutes))} start to finish`
      + `${kitchen.equipment && kitchen.equipment.length ? `, using ${esc(kitchen.equipment.map(e => e.size ? `${e.item} (${e.size})` : e.item).join(', '))}` : ''}.`
      + `${kitchen.observations ? ` ${esc(kitchen.observations)}` : ''}`);
  }
  if (editorial) parts.push(`Read and edited against the site's checklist by ${esc(editorial.reviewer)} on <time datetime="${esc(editorial.date)}">${esc(longDate(editorial.date))}</time>.`);
  if (!parts.length) return '';
  return `<p class="flagship-record" style="margin:.35rem 0 0;font-size:.86rem">${parts.join(' ')}</p>`;
}

/**
 * Problems with the register, for tools/flagship-check.js and `npm run check`.
 * `recipes` are the built recipes (loadRecipes()).
 */
function validate(recipes) {
  const { flagship: reg, notes } = register();
  const bySlug = new Map(recipes.map(r => [r.slug, r]));
  const problems = [];
  const warnings = [];
  const slugs = Object.keys(reg.recipes || {});
  if (slugs.length < 15 || slugs.length > 25) warnings.push(`${slugs.length} flagship recipes; the programme aims at about 20`);
  for (const slug of slugs) {
    const e = reg.recipes[slug];
    const r = bySlug.get(slug);
    if (!r) { problems.push(`flagship.json: "${slug}" is not a recipe`); continue; }
    if (!e.selectedBecause) problems.push(`flagship.json: "${slug}" has no selection reason`);
    const ed = e.editorial || {};
    if (!EDITORIAL.includes(ed.status)) problems.push(`flagship.json: "${slug}" editorial status "${ed.status}" is not one of ${EDITORIAL.join(', ')}`);
    if (ed.status === 'approved' && !(ed.reviewer && ed.date && ed.recipeVersion)) problems.push(`flagship.json: "${slug}" is approved without reviewer, date and recipeVersion`);
    if (ed.status === 'approved' && ed.recipeVersion !== r.contentVersion) warnings.push(`${slug}: editorial approval is for an older version of the recipe; it is not shown`);
    for (const [i, k] of (e.kitchen || []).entries()) {
      const where = `flagship.json: "${slug}" kitchen record ${i + 1}`;
      for (const f of KITCHEN_FIELDS) if (k[f] === undefined) problems.push(`${where} lacks "${f}"`);
      if (!KITCHEN.includes(k.reviewStatus)) problems.push(`${where}: reviewStatus must be one of ${KITCHEN.join(', ')}`);
      if (!/^\d{4}-\d{2}-\d{2}$/.test(String(k.date))) problems.push(`${where}: date must be YYYY-MM-DD`);
      if (k.reviewStatus === 'accepted') {
        const note = notes[slug];
        if (!note || note.status !== 'cooked' || note.cookedBy !== k.cook || note.date !== k.date) {
          problems.push(`${where} is accepted, but testing-notes.json does not record the same cook and date as "cooked"`);
        }
        if (k.recipeVersion !== r.contentVersion) warnings.push(`${slug}: the accepted kitchen record is for an older version of the recipe; it is not shown until re-cooked or re-reviewed`);
      }
    }
  }
  /* The reverse: nothing may say "cooked" in testing-notes.json for a flagship recipe without the evidence behind it. */
  for (const [slug, n] of Object.entries(notes)) {
    if (n.status === 'cooked' && reg.recipes[slug] && !(reg.recipes[slug].kitchen || []).some(k => k.reviewStatus === 'accepted')) {
      problems.push(`testing-notes.json says "${slug}" was cooked, but flagship.json has no accepted kitchen record for it`);
    }
  }
  return { problems, warnings };
}

/** One line per flagship recipe: the three statuses, for the report and the docs. */
function statusRows(recipes) {
  const { flagship: reg } = register();
  const bySlug = new Map(recipes.map(r => [r.slug, r]));
  return Object.entries(reg.recipes).map(([slug, e]) => {
    const r = bySlug.get(slug);
    if (!r) return { slug, missing: true };
    const auto = automatedStatus(r);
    const { kitchen, editorial } = evidenceFor(r);
    return {
      slug, title: r.title, version: r.contentVersion,
      automated: auto.passed ? 'passed' : `not met (${auto.reasons.join('; ')})`,
      editorial: editorial ? `approved ${editorial.date} by ${editorial.reviewer}` : (e.editorial || {}).status || 'not-started',
      kitchen: kitchen ? `documented ${kitchen.date} by ${kitchen.cook}` : ((e.kitchen || []).length ? `${e.kitchen.length} record(s), none current and accepted` : 'not documented'),
      selectedBecause: e.selectedBecause
    };
  });
}

module.exports = { evidenceFor, recordHtml, validate, statusRows, automatedStatus, KITCHEN_FIELDS };
