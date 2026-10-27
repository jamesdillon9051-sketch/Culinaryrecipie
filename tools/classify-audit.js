#!/usr/bin/env node
'use strict';
/**
 * The dish-role ledger: what src/lib/classify.js decided for every recipe, and
 * the queue of decisions it could not make.
 *
 *   node tools/classify-audit.js              summary, and fail on a broken override
 *   node tools/classify-audit.js --write DIR  also write DIR/classification-review.csv
 *                                             (the open queue), DIR/classification-all.csv
 *                                             and DIR/classification-summary.md
 *   node tools/classify-audit.js --slug a,b   how each recipe was classified, and why
 *
 * To settle a queued recipe, read its method and add it to src/data/dish-roles.json
 * with the role, the reason and who decided. Nothing in the queue is shown to a
 * reader as a main course, a side or anything else until then: the category
 * pages list it under "Not yet sorted".
 */
const fs = require('fs');
const path = require('path');
const { loadRecipes } = require('../src/build');
const { ROLES } = require('../src/lib/classify');
const OVERRIDES = require('../src/data/dish-roles.json');

const args = process.argv.slice(2);
const opt = name => { const i = args.indexOf(name); return i >= 0 ? args[i + 1] : null; };
const recipes = loadRecipes();
const bySlug = new Map(recipes.map(r => [r.slug, r]));

const problems = [];
for (const [slug, o] of Object.entries(OVERRIDES)) {
  if (!bySlug.has(slug)) problems.push(`dish-roles.json names "${slug}", which is not in the catalogue`);
  if (!ROLES[o.role]) problems.push(`dish-roles.json gives "${slug}" the unknown role "${o.role}"`);
  if (!o.reason || !o.reviewedBy || !o.date) problems.push(`dish-roles.json: "${slug}" needs a reason, reviewedBy and date`);
}
/* A support dish must never be offered as a meal. */
for (const r of recipes) {
  if (['side', 'sauce', 'condiment', 'basic', 'bread', 'drink', 'dessert'].includes(r.role) && r.occasions.includes('dinner')) {
    problems.push(`${r.slug}: a ${r.role} is listed for dinner as a meal`);
  }
  if (r.roleReview && r.occasions.length) problems.push(`${r.slug}: under review but carries occasions`);
}

const slugs = opt('--slug');
if (slugs) {
  for (const s of slugs.split(',')) {
    const r = bySlug.get(s.trim());
    if (!r) { console.log(`${s}: not found`); continue; }
    console.log(`${r.slug} (${r.title}; filed under ${r.category})`);
    console.log(`  role       ${r.role}${r.roleReview ? ' (provisional, in the review queue)' : ''}`);
    console.log(`  basis      ${r.roleBasis}: ${r.roleReason}`);
    console.log(`  occasions  ${r.occasions.join(', ') || '-'}`);
    console.log(`  methods    ${r.methods.join(', ') || '-'}`);
    console.log(`  equipment  ${r.equipment.map(e => e.label).join(', ') || '-'}${r.equipmentSizes.length ? ` (${r.equipmentSizes.join('; ')})` : ''}`);
    console.log(`  vessels    ${r.vessels.join(', ') || '-'}; one-pan candidate: ${r.onePanCandidate}`);
    console.log(`  times      prep ${r.prep}, cook ${r.cook}${r.cookMax > r.cook ? `-${r.cookMax}` : ''}, wait ${r.restTime}${r.restMax > r.restTime ? `-${r.restMax}` : ''}, elapsed ${r.elapsedTime}${r.untimed ? ' + untimed ' + r.untimed.join(', ') : ''}; serves ${r.servings}`);
  }
  process.exit(problems.length ? 1 : 0);
}

const count = {};
const basis = {};
for (const r of recipes) {
  const key = `${r.category}|${r.role}${r.roleReview ? '?' : ''}`;
  count[key] = (count[key] || 0) + 1;
  basis[r.roleBasis] = (basis[r.roleBasis] || 0) + 1;
}
const queue = recipes.filter(r => r.roleReview);
console.log(`Classified ${recipes.length} recipes: ${recipes.length - queue.length} decided, ${queue.length} in the review queue.`);
console.log(`Basis: ${Object.entries(basis).map(([k, v]) => `${k} ${v}`).join(', ')}.`);

const dir = opt('--write');
if (dir) {
  fs.mkdirSync(dir, { recursive: true });
  const csv = rows => rows.map(row => row.map(v => /[",\n]/.test(String(v)) ? `"${String(v).replace(/"/g, '""')}"` : v).join(',')).join('\n') + '\n';
  fs.writeFileSync(path.join(dir, 'classification-review.csv'), csv([
    ['slug', 'title', 'category', 'provisional_role', 'why_it_is_queued', 'prep', 'cook', 'wait', 'elapsed', 'servings', 'decision', 'decided_by', 'date']
  ].concat(queue.map(r => [r.slug, r.title, r.category, r.role, r.roleReason, r.prep, r.cook, r.restTime, r.elapsedTime, r.servings, '', '', '']))));
  fs.writeFileSync(path.join(dir, 'classification-all.csv'), csv([
    ['slug', 'title', 'category', 'role', 'review', 'basis', 'reason', 'occasions', 'methods', 'equipment', 'sizes', 'one_pan_candidate', 'prep', 'cook', 'cook_max', 'wait', 'wait_max', 'elapsed', 'untimed', 'servings']
  ].concat(recipes.map(r => [r.slug, r.title, r.category, r.role, r.roleReview ? 'yes' : '', r.roleBasis, r.roleReason,
    r.occasions.join(' '), r.methods.join(' '), r.equipment.map(e => e.id).join(' '), r.equipmentSizes.join('; '),
    r.onePanCandidate ? 'yes' : '', r.prep, r.cook, r.cookMax, r.restTime, r.restMax, r.elapsedTime, (r.untimed || []).join('; '), r.servings]))));
  const cats = [...new Set(recipes.map(r => r.category))];
  const roles = Object.keys(ROLES);
  const lines = [
    '# Dish classification summary',
    '',
    `Generated by \`node tools/classify-audit.js --write ${dir}\` from the catalogue (${recipes.length} recipes). Do not edit by hand.`,
    '',
    `- Decided: ${recipes.length - queue.length}. In the review queue: ${queue.length} (\`classification-review.csv\`).`,
    `- How each was decided: ${Object.entries(basis).map(([k, v]) => `${k} ${v}`).join(', ')}.`,
    '  - `title`: the name says what it is ("... Gravy", "... Rub", "... Curry").',
    '  - `category`: Drinks, Desserts, Appetizers and Breakfast settle it; Lunch defaults to a light meal.',
    '  - `nutrition`: calculated protein and energy per serving decide between a main and something lighter (tier 1 or 2 figures only). The least certain basis: spot-check these first.',
    '  - `ingredients`: 80 g or more of meat, fish or tofu per serving by weight in the ingredient list.',
    '  - `override`: a reviewed decision in `src/data/dish-roles.json`, with its reason. The October 2026 overrides are an editorial reading of the recipe text, not a cooking test.',
    '',
    '| Category | ' + roles.join(' | ') + ' | queued |',
    '| --- | ' + roles.map(() => '---:').join(' | ') + ' | ---: |'
  ];
  for (const c of cats) {
    lines.push(`| ${c} | ${roles.map(role => count[`${c}|${role}`] || '').join(' | ')} | ${roles.reduce((n, role) => n + (count[`${c}|${role}?`] || 0), 0) || ''} |`);
  }
  fs.writeFileSync(path.join(dir, 'classification-summary.md'), lines.join('\n') + '\n');
  console.log(`Wrote ${dir}/classification-review.csv, classification-all.csv and classification-summary.md`);
}

if (problems.length) {
  console.error(`\n${problems.length} problem(s):\n  ${problems.slice(0, 40).join('\n  ')}`);
  process.exit(1);
}
