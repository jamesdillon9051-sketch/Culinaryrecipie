#!/usr/bin/env node
'use strict';
/**
 * Seeds src/data/published-dates.json from the project's own history.
 *
 * Every recipe used to carry a datePublished computed from its position in
 * the catalogue, counted back from 2026-07-01, which spread the recipes over
 * 2008 to 2026. Nothing supported those dates: the hosting account for the
 * domain was created on 2026-08-27 and the repository's history begins on
 * 2026-09-09. They were removed, and this file records the earliest date the
 * project's records show each page existing instead:
 *
 *   - a route already in src/data/content-dates.json at the first commit in
 *     the history gets the earliest date the register recorded for it then
 *     (the register was started on 2026-09-05), so the date is never earlier
 *     than the evidence;
 *   - every later route gets the date of the first commit whose register
 *     includes it, which is the commit that added the page.
 *
 * These are first-seen dates, not claims about anything before them. If the
 * site was live somewhere else earlier, its owner's records are the better
 * source and should replace these.
 *
 * The build reads the file and adds today's date for any route it has never
 * seen, so it only needs seeding once:
 *
 *   node tools/published-dates.js           # write the file
 *   node tools/published-dates.js --dry-run # print a summary only
 */
const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'src', 'data', 'published-dates.json');
const REGISTER = 'src/data/content-dates.json';
const git = (...args) => execFileSync('git', args, { cwd: ROOT, encoding: 'utf8', maxBuffer: 1 << 28 });

const commits = git('log', '--reverse', '--format=%H %ad', '--date=short', '--', REGISTER)
  .trim().split('\n').filter(Boolean).map(line => {
    const [hash, date] = line.split(' ');
    return { hash, date };
  });
if (!commits.length) throw new Error(`no history for ${REGISTER}`);

const firstSeen = {};
commits.forEach(({ hash, date }, i) => {
  let register;
  try { register = JSON.parse(git('show', `${hash}:${REGISTER}`)); } catch { return; }
  for (const [route, entry] of Object.entries(register)) {
    if (firstSeen[route]) continue;
    /* At the oldest commit the register already held dates of its own, all
       on or before that commit; the earliest of the two is the evidence. */
    firstSeen[route] = i === 0 && entry && entry.lastmod && entry.lastmod < date ? entry.lastmod : date;
  }
});

/* Routes that exist now but were never in a committed register get no entry;
   the build stamps them with the day it first sees them. */
const sorted = Object.fromEntries(Object.entries(firstSeen).sort(([a], [b]) => a.localeCompare(b)));
const byDay = {};
for (const d of Object.values(sorted)) byDay[d] = (byDay[d] || 0) + 1;
console.log(`${Object.keys(sorted).length} routes from ${commits.length} commits`);
for (const [d, n] of Object.entries(byDay).sort()) console.log(`  ${d}  ${n}`);
if (!process.argv.includes('--dry-run')) {
  fs.writeFileSync(OUT, JSON.stringify(sorted, null, 1) + '\n');
  console.log(`wrote ${path.relative(ROOT, OUT)}`);
}
