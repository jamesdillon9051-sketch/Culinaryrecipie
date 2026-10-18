#!/usr/bin/env node
'use strict';
/**
 * The record of how each finding in a review queue was resolved, kept beside the queue it answers
 * (docs/release-2026-10-uncertainties/). The checker's own ledger (src/data/consistency-reviewed.json)
 * holds verdicts on findings that are still live; this file also holds the findings that were fixed
 * and so no longer appear, with what was wrong and what changed.
 *
 *   node tools/consistency-resolutions.js add <batch.json>    [{ id, status, item, problem, action, source?, limitation? }]
 *   node tools/consistency-resolutions.js report               counts against the baseline queue, and what is unresolved
 *
 * Statuses: corrected (a defect fixed in the source), exception (the recipe is right; the checker
 * misread it), cooking (needs a real cook), specialist (needs qualified safety review), duplicate
 * (covered by another resolution, named in the action). An id is a baseline finding id
 * (slug|code|key) or, for a problem found while working that the queue did not list,
 * new|slug|topic.
 */
const fs = require('fs');
const path = require('path');

const DIR = path.join(__dirname, '..', 'docs', 'release-2026-10-uncertainties');
const FILE = path.join(DIR, 'resolutions.json');
const BASELINE = path.join(DIR, 'baseline-queue-2026-10-18.json');
const STATUSES = ['corrected', 'exception', 'cooking', 'specialist', 'duplicate'];

const load = () => (fs.existsSync(FILE) ? JSON.parse(fs.readFileSync(FILE, 'utf8')) : { resolutions: {} });
const baseline = () => JSON.parse(fs.readFileSync(BASELINE, 'utf8')).filter(f => f.kind === 'review');
const [cmd, arg] = process.argv.slice(2);

if (cmd === 'add') {
  const data = load();
  const known = new Set(baseline().map(f => f.id));
  const problems = [];
  for (const r of JSON.parse(fs.readFileSync(arg, 'utf8'))) {
    if (!STATUSES.includes(r.status)) { problems.push(`${r.id}: status ${r.status}`); continue; }
    if (!r.id.startsWith('new|') && !known.has(r.id)) { problems.push(`${r.id}: not in the baseline queue`); continue; }
    if (!r.problem || !r.action) { problems.push(`${r.id}: needs problem and action`); continue; }
    data.resolutions[r.id] = { ...data.resolutions[r.id], ...r, recorded: data.resolutions[r.id] ? data.resolutions[r.id].recorded : new Date().toISOString().slice(0, 10) };
  }
  fs.writeFileSync(FILE, JSON.stringify(data, null, 1) + '\n');
  for (const p of problems) console.log(`  ✗ ${p}`);
  console.log(`${Object.keys(data.resolutions).length} resolutions on file, ${problems.length} refused`);
  process.exit(problems.length ? 1 : 0);
} else if (cmd === 'report') {
  const data = load();
  const base = baseline();
  const by = {};
  let open = 0;
  for (const f of base) {
    const r = data.resolutions[f.id];
    if (!r) { open++; continue; }
    by[r.status] = (by[r.status] || 0) + 1;
  }
  const extra = Object.keys(data.resolutions).filter(id => id.startsWith('new|'));
  console.log(`baseline: ${base.length} findings in ${new Set(base.map(f => f.slug)).size} recipes`);
  for (const s of STATUSES) console.log(`  ${s}: ${by[s] || 0}`);
  console.log(`  not yet resolved: ${open}`);
  console.log(`found while working, outside the queue: ${extra.length}`);
  if (process.argv.includes('--open')) for (const f of base.filter(f => !data.resolutions[f.id])) console.log(`  · ${f.id}`);
} else {
  console.log('usage: consistency-resolutions.js add <batch.json> | report [--open]');
  process.exit(1);
}
