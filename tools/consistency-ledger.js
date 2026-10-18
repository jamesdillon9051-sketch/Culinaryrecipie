#!/usr/bin/env node
'use strict';
/**
 * Records a person's verdict on findings from tools/recipe-consistency.js in
 * src/data/consistency-reviewed.json.
 *
 *   node tools/consistency-ledger.js add <batch.json>   add verdicts: [{ slug, code, key, status, reason, source?, limitation? }]
 *   node tools/consistency-ledger.js stale              list recipes whose verdicts were given against older content
 *   node tools/consistency-ledger.js restamp <slug>     after re-reading a changed recipe, confirm its verdicts still hold
 *
 * Each recipe's entry carries the fingerprint of the content it was reviewed against
 * (recipe-consistency.js, fingerprint()). Adding a verdict to a recipe whose earlier verdicts are
 * stale is refused: re-read those first and restamp, or remove them.
 *
 * A verdict is only for a finding the recipe is right about as written. A finding that shows a real
 * defect is fixed in the recipe instead, and then it no longer appears.
 */
const fs = require('fs');
const path = require('path');
const { loadRecipes } = require('../src/build');
const { check, fingerprint } = require('./recipe-consistency');

const FILE = path.join(__dirname, '..', 'src', 'data', 'consistency-reviewed.json');
const STATUSES = ['exception', 'cooking', 'specialist', 'duplicate'];
const [cmd, arg] = process.argv.slice(2);

const ledger = JSON.parse(fs.readFileSync(FILE, 'utf8'));
ledger.recipes = ledger.recipes || {};
const recipes = new Map(loadRecipes().map(r => [r.slug, r]));
const save = () => fs.writeFileSync(FILE, JSON.stringify(ledger, null, 2) + '\n');

if (cmd === 'add') {
  const batch = JSON.parse(fs.readFileSync(arg, 'utf8'));
  const problems = [];
  let added = 0;
  for (const v of batch) {
    const r = recipes.get(v.slug);
    if (!r) { problems.push(`${v.slug}: no such recipe`); continue; }
    if (!STATUSES.includes(v.status)) { problems.push(`${v.slug}: status "${v.status}" is not one of ${STATUSES.join(', ')}`); continue; }
    if (!v.reason || v.reason.length < 20) { problems.push(`${v.slug}: a verdict needs a specific reason`); continue; }
    const live = check(r, r).some(f => f.code === v.code && f.key === String(v.key).trim().slice(0, 120));
    if (!live) { problems.push(`${v.slug}: no current finding ${v.code}|${v.key}`); continue; }
    const fp = fingerprint(r);
    const entry = ledger.recipes[v.slug] || (ledger.recipes[v.slug] = { fingerprint: fp, findings: {} });
    if (entry.fingerprint !== fp && Object.keys(entry.findings).length) { problems.push(`${v.slug}: earlier verdicts are stale; re-read and restamp first`); continue; }
    entry.fingerprint = fp;
    const { slug, code, key, ...rest } = v;
    entry.findings[`${code}|${String(key).trim().slice(0, 120)}`] = rest;
    added++;
  }
  save();
  for (const p of problems) console.log(`  ✗ ${p}`);
  console.log(`${added} verdicts recorded, ${problems.length} refused`);
  process.exit(problems.length ? 1 : 0);
} else if (cmd === 'stale') {
  for (const [slug, entry] of Object.entries(ledger.recipes)) {
    const r = recipes.get(slug);
    if (!r) console.log(`  ${slug}: no such recipe`);
    else if (entry.fingerprint !== fingerprint(r)) console.log(`  ${slug}: changed since review (${Object.keys(entry.findings).length} verdicts)`);
  }
} else if (cmd === 'restamp') {
  const entry = ledger.recipes[arg];
  if (!entry || !recipes.has(arg)) { console.log(`no ledger entry for ${arg}`); process.exit(1); }
  entry.fingerprint = fingerprint(recipes.get(arg));
  save();
  console.log(`${arg}: verdicts confirmed against the current content`);
} else {
  console.log('usage: consistency-ledger.js add <batch.json> | stale | restamp <slug>');
  process.exit(1);
}
