#!/usr/bin/env node
'use strict';
/**
 * Which of these dishes are genuinely new to the site?
 *
 * Grades each candidate against every recipe already published — slug, folded
 * title, core words and the search phrases each recipe targets — so that a new
 * volume contains only dishes that differ from the ones already here. A list
 * that has been checked is then used as it is: the catalogue rows are written
 * from the NEW list, not retyped from it, because typing it out again is
 * exactly how nine already-flagged duplicates reached volume nineteen.
 *
 *   node tools/dedupe-candidates.js candidates.txt        grade a list
 *   node tools/dedupe-candidates.js candidates.txt --new  print only the new titles
 *   node tools/dedupe-candidates.js candidates.txt --related  under each new title, the closest existing recipes
 *   node tools/dedupe-candidates.js --volume 21           check a finished volume against the rest
 *   node tools/dedupe-candidates.js --title "Garlic Knots"
 *
 * A candidates file has one dish per line, "Title" or "Title | primary search
 * phrase". Blank lines and lines starting # are ignored.
 */
const fs = require('fs');
const path = require('path');
const volumes = require('../src/data/volumes');
const { buildIndex, classify, related, coreKey } = require('../src/lib/dedupe');

const args = process.argv.slice(2);
const flag = name => args.includes(name);
const value = name => { const i = args.indexOf(name); return i > -1 ? args[i + 1] : null; };

const catalogue = volumes.catalog();
const details = volumes.details();
const asRecipe = row => ({ slug: row.slug, title: row.title, kw: (details[row.slug] || {}).kw || [] });

function gradeList(candidates, index) {
  const out = { new: [], review: [], duplicate: [], repeated: [] };
  const taken = new Map();
  for (const candidate of candidates) {
    const key = coreKey(candidate.title);
    if (taken.has(key)) { out.repeated.push({ candidate, of: taken.get(key) }); continue; }
    taken.set(key, candidate.title);
    const { grade, matches } = classify(candidate, index);
    out[grade].push({ candidate, matches });
  }
  out.index = index;
  return out;
}

function report(out, total) {
  const line = (candidate, matches) => `  ${candidate.title}` + (matches.length
    ? `\n      ${matches.slice(0, 3).map(m => `${m.reason}: ${m.title} (/recipes/${m.slug}/)`).join('\n      ')}` : '');
  console.log(`${total} candidates: ${out.new.length} new, ${out.review.length} to review, `
    + `${out.duplicate.length} already on the site, ${out.repeated.length} repeated in the list\n`);
  if (out.duplicate.length) {
    console.log('ALREADY ON THE SITE — skip:');
    for (const { candidate, matches } of out.duplicate) console.log(line(candidate, matches));
    console.log('');
  }
  if (out.review.length) {
    console.log('REVIEW — one word from an existing recipe; a different dish or the same one?');
    for (const { candidate, matches } of out.review) console.log(line(candidate, matches));
    console.log('');
  }
  if (out.repeated.length) {
    console.log('REPEATED in this list — keep the first:');
    for (const { candidate, of } of out.repeated) console.log(`  ${candidate.title}  (same dish as "${of}")`);
    console.log('');
  }
  console.log('NEW:');
  for (const { candidate } of out.new) {
    console.log(`  ${candidate.title}`);
    if (flag('--related') && out.index) {
      for (const r of related(candidate, out.index, 2)) console.log(`      ~ ${r.title} (${r.slug}) [${r.shared.join(', ')}]`);
    }
  }
}

if (flag('--volume')) {
  /* A finished volume against everything else, and against itself. */
  const n = value('--volume');
  const file = path.join(__dirname, '..', 'src', 'data', n === '1' ? 'catalog.js' : `catalog-${n}.js`);
  if (!fs.existsSync(file)) { console.error(`no such volume: ${path.relative(process.cwd(), file)}`); process.exit(2); }
  const rows = require(file);
  const others = catalogue.filter(row => !rows.some(r => r.slug === row.slug)).map(asRecipe);
  const index = buildIndex(others.concat(rows.map(asRecipe)));
  let problems = 0;
  for (const row of rows) {
    const { grade, matches } = classify({ slug: row.slug, title: row.title, keyword: ((details[row.slug] || {}).kw || [])[0] }, index, row.slug);
    if (grade === 'new') continue;
    problems += grade === 'duplicate' ? 1 : 0;
    console.log(`${grade === 'duplicate' ? '  ✗' : '  ?'} ${row.slug} — ${matches.slice(0, 2).map(m => `${m.reason}: ${m.title} (${m.slug})`).join('; ')}`);
  }
  console.log(problems
    ? `\n${problems} recipe${problems === 1 ? '' : 's'} in volume ${n} already exist${problems === 1 ? 's' : ''} on the site.`
    : `Volume ${n}: all ${rows.length} recipes differ from every other recipe on the site.`);
  process.exit(problems ? 1 : 0);
}

const titles = [];
if (value('--title')) titles.push({ title: value('--title') });
const source = args.find(a => !a.startsWith('--') && a !== value('--title'));
if (source) {
  for (const raw of fs.readFileSync(source, 'utf8').split('\n')) {
    const text = raw.trim();
    if (!text || text.startsWith('#')) continue;
    const [title, keyword] = text.split('|').map(s => s.trim());
    titles.push({ title, keyword });
  }
}
if (!titles.length) { console.error('give a candidates file, --title "…" or --volume N'); process.exit(2); }

const graded = gradeList(titles, buildIndex(catalogue.map(asRecipe)));
if (flag('--new')) for (const { candidate } of graded.new) console.log(candidate.title);
else report(graded, titles.length);
