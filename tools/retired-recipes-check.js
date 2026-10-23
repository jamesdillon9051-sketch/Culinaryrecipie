#!/usr/bin/env node
'use strict';
/**
 * Checks the recipes taken down as duplicates (src/data/retired-recipes.json).
 *
 * For each retired slug: no page is built at its old address, the page it
 * points to is built, nothing on the site links to the old address or lists
 * it in a sitemap, and all three host configurations send the old address to
 * the page that stays with a permanent redirect: .htaccess (the live host,
 * tested by applying its RewriteRules to the old paths the way mod_rewrite
 * does, without the leading slash), _redirects (Netlify, written by the build)
 * and vercel.json.
 *
 *   node tools/retired-recipes-check.js
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const BASE = 'https://weeklydelight.com/';
const read = rel => fs.readFileSync(path.join(ROOT, rel), 'utf8');

const register = JSON.parse(read('src/data/retired-recipes.json'));
const retired = Object.entries(register).filter(([slug]) => !slug.startsWith('_'));
const failures = [];

/* .htaccess: every 301 RewriteRule, as [pattern, target]. */
const rules = [...read('.htaccess').matchAll(/^\s*RewriteRule\s+(\S+)\s+(\S+)\s+\[([^\]]*R=301[^\]]*)\]/gm)]
  .map(m => ({ re: new RegExp(m[1], /NC/.test(m[3]) ? 'i' : ''), to: m[2] }));
const htaccessTarget = p => { const r = rules.find(rule => rule.re.test(p)); return r && r.to; };

const netlify = fs.existsSync(path.join(ROOT, '_redirects')) ? read('_redirects') : '';
const vercel = JSON.parse(read('vercel.json')).redirects || [];

/* Every built page's links, and every sitemap entry, once. */
const pages = [];
(function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) {
      if (/^(\.|node_modules|src|tools|docs|backups|logs)/.test(path.relative(ROOT, full))) continue;
      walk(full);
    } else if (name.endsWith('.html')) pages.push(full);
  }
})(ROOT);
const sitemaps = fs.readdirSync(ROOT).filter(n => /^sitemap-\d+\.xml$/.test(n)).map(read).join('\n');

for (const [slug, entry] of retired) {
  const from = `recipes/${slug}/`;
  const to = `recipes/${entry.to}/`;
  if (!entry.to || !entry.reason) failures.push(`${slug}: the register needs "to" and "reason"`);
  if (fs.existsSync(path.join(ROOT, from, 'index.html'))) failures.push(`/${from} is still built`);
  if (!fs.existsSync(path.join(ROOT, to, 'index.html'))) failures.push(`${slug} redirects to /${to}, which is not built`);
  if (register[entry.to]) failures.push(`${slug} redirects to ${entry.to}, which is itself retired`);
  for (const variant of [`recipes/${slug}/`, `recipes/${slug}`, `recipes/${slug}/index.html`]) {
    const target = htaccessTarget(variant);
    if (target !== BASE + to) failures.push(`.htaccess sends /${variant} to ${target || 'nowhere'}, not ${BASE}${to}`);
  }
  if (!netlify.includes(`/${from}  /${to}  301!`)) failures.push(`_redirects has no 301 from /${from} to /${to}`);
  if (!vercel.some(r => r.source === `/${from}` && r.destination === `/${to}` && r.permanent === true)) {
    failures.push(`vercel.json has no permanent redirect from /${from} to /${to}`);
  }
  if (sitemaps.includes(`${BASE}${from}<`)) failures.push(`a sitemap still lists /${from}`);
}

const pattern = new RegExp(`href="(?:${BASE.replace(/[.]/g, '\\.')}|/)(recipes/(?:${retired.map(([s]) => s).join('|')})/)`, 'g');
if (retired.length) {
  for (const file of pages) {
    for (const m of read(path.relative(ROOT, file)).matchAll(pattern)) {
      failures.push(`/${path.relative(ROOT, file)} links to the retired /${m[1]}`);
      break;
    }
  }
}

for (const f of failures.slice(0, 40)) console.log(`  ✗ ${f}`);
if (failures.length) {
  if (failures.length > 40) console.log(`  … and ${failures.length - 40} more`);
  process.exit(1);
}
console.log(`  ✓ retired recipes: ${retired.length} redirected on all three hosts, none built, linked or in a sitemap`);
