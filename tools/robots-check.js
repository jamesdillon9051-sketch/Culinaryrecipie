#!/usr/bin/env node
'use strict';
/**
 * Reads robots.txt the way Google documents it and checks what it does.
 *
 *   - A crawler obeys the one group whose User-agent line names it most
 *     specifically, else the "*" group. Groups are never merged, which is how a
 *     "User-agent: Googlebot / Allow: /" group once switched off every rule
 *     written for "*".
 *   - Within a group the longest matching path wins; on a tie Allow wins.
 *     "*" matches any run of characters and a trailing "$" anchors the end.
 *
 * Then it holds a list of URLs to the outcome each should have, for each
 * crawler that matters. Run by tools/check.js; `--verbose` prints every case.
 *   https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt
 */
const fs = require('fs');
const path = require('path');

function parse(text) {
  const groups = [];
  let current = null;
  let lastWasAgent = false;
  for (const raw of text.split(/\r?\n/)) {
    const line = raw.replace(/#.*$/, '').trim();
    if (!line) continue;
    const m = /^([A-Za-z-]+)\s*:\s*(.*)$/.exec(line);
    if (!m) continue;
    const key = m[1].toLowerCase();
    const value = m[2].trim();
    if (key === 'user-agent') {
      if (!lastWasAgent) { current = { agents: [], rules: [] }; groups.push(current); }
      current.agents.push(value.toLowerCase());
      lastWasAgent = true;
      continue;
    }
    lastWasAgent = false;
    if (!current) continue;
    if (key === 'allow' || key === 'disallow') current.rules.push({ allow: key === 'allow', path: value });
  }
  return groups;
}

function groupFor(groups, agent) {
  const name = agent.toLowerCase();
  let best = null;
  let bestLen = -1;
  for (const g of groups) {
    for (const a of g.agents) {
      if (a !== '*' && name.startsWith(a) && a.length > bestLen) { best = g; bestLen = a.length; }
    }
  }
  return best || groups.find(g => g.agents.includes('*')) || { agents: [], rules: [] };
}

function matches(pattern, url) {
  if (!pattern) return false;
  const anchored = pattern.endsWith('$');
  const body = anchored ? pattern.slice(0, -1) : pattern;
  const re = new RegExp('^' + body.split('*').map(s => s.replace(/[.+?^${}()|[\]\\]/g, '\\$&')).join('.*') + (anchored ? '$' : ''));
  return re.test(url);
}

function allowed(groups, agent, url) {
  const g = groupFor(groups, agent);
  let verdict = { allow: true, length: -1 };
  for (const rule of g.rules) {
    if (rule.path === '' && !rule.allow) continue;          /* "Disallow:" with nothing = allow all */
    if (!matches(rule.path, url)) continue;
    const length = rule.path.length;
    if (length > verdict.length || (length === verdict.length && rule.allow)) verdict = { allow: rule.allow, length };
  }
  return verdict.allow;
}

const CRAWLERS = ['Googlebot', 'Googlebot-Image', 'Bingbot', 'AhrefsBot', 'SemrushBot', 'SomeOtherBot'];
const CASES = [
  ['/', true], ['/recipes/', true], ['/recipes/spaghetti-carbonara/', true],
  ['/categories/dinner/', true], ['/cuisines/italian/', true], ['/ingredients/chicken/', true],
  ['/search/', true], ['/about/', true], ['/contact/', true],
  /* noindex pages: crawlable, so the noindex can be read */
  ['/favourites/', true], ['/contact/success/', true], ['/contact/not-sent/', true],
  /* what a page needs to render must be fetchable */
  ['/assets/css/main.css?v=abc', true], ['/assets/js/app.js?v=abc', true],
  ['/assets/img/recipes/focaccia.jpg', true], ['/search-index.json', true],
  ['/sitemap-index.xml', true], ['/sitemap-1.xml', true], ['/feed.xml', true],
  /* filtered views, whichever position the parameter is in */
  ['/recipes/?tag=Vegan', false], ['/recipes/?cuisine=Thai&tag=Vegan', false],
  ['/recipes/?sort=newest', false], ['/recipes/?category=Dinner&sort=quick', false],
  ['/search/?q=chicken', false], ['/recipes/?difficulty=Easy', false], ['/recipes/?time=30', false],
  ['/contact/send.php', false]
];

function main() {
  const file = path.join(__dirname, '..', 'robots.txt');
  const groups = parse(fs.readFileSync(file, 'utf8'));
  const verbose = process.argv.includes('--verbose');
  const failures = [];
  for (const agent of CRAWLERS) {
    for (const [url, want] of CASES) {
      const got = allowed(groups, agent, url);
      if (verbose) console.log(`  ${got === want ? '✓' : '✗'} ${agent.padEnd(15)} ${got ? 'allow   ' : 'disallow'} ${url}`);
      if (got !== want) failures.push(`robots.txt ${got ? 'allows' : 'blocks'} ${url} for ${agent}; it should ${want ? 'allow' : 'block'} it`);
    }
  }
  if (!/^Sitemap:\s*https:\/\/\S+$/m.test(fs.readFileSync(file, 'utf8'))) failures.push('robots.txt names no Sitemap');
  for (const f of failures) console.log(`  ✗ ${f}`);
  if (failures.length) process.exit(1);
  console.log(`  ✓ robots.txt: ${CASES.length} URLs × ${CRAWLERS.length} crawlers behave as intended`);
}

if (require.main === module) main();
module.exports = { parse, groupFor, allowed, matches };
