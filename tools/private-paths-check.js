#!/usr/bin/env node
'use strict';
/**
 * Checks that the server refuses the project's private files and still serves
 * the site.
 *
 * The whole repository is deployed, so .htaccess answers 404 for the source, the
 * tools and the working files. This reads those RewriteRules and tests them
 * against two lists: paths that must be refused, and paths that must not be.
 * mod_rewrite matches against the path without its leading slash, which is how
 * the patterns are applied here.
 *
 *   node tools/private-paths-check.js                      the rules, offline
 *   node tools/private-paths-check.js --url https://weeklydelight.com
 *                                                          the same lists against a live host
 *                                                          (HEAD requests; sends nothing else)
 */
const fs = require('fs');
const path = require('path');

const PRIVATE = [
  'src/build.js', 'src/data/catalog.js', 'src/server/contact-send.php', 'tools/check.js',
  'tools/keywords/KEYWORDS.csv', 'CLAUDE.md', 'README.md', 'package.json', 'netlify.toml',
  'vercel.json', '_redirects', 'suspects.json', 'content_audit.csv', 'quality_report.csv',
  'MISSING-IMAGES.txt', '.git/config', '.gitignore', 'backups/', 'logs/x.jsonl',
  'docs/audit-2026-10/REPORT.md', 'contact/_pages/sent.html', 'contact/_pages/not-sent.html', 'feedback/_lib.php'
];
const PUBLIC = [
  '', 'recipes/', 'recipes/focaccia/', 'assets/css/main.css', 'assets/js/app.js',
  'assets/img/recipes/focaccia.jpg', 'search-index.json', 'sitemap-index.xml', 'robots.txt',
  'ads.txt', 'feed.xml', 'manifest.json', 'images-attribution.md', 'contact/', 'contact/send.php',
  'about/', 'privacy/', '404.html', 'collections/', 'weekly-plan/', 'guides/', 'report/', 'feedback/report.php'
];

function rules() {
  const text = fs.readFileSync(path.join(__dirname, '..', '.htaccess'), 'utf8');
  return [...text.matchAll(/^\s*RewriteRule\s+(\S+)\s+-\s+\[([^\]]*R=404[^\]]*)\]/gm)]
    .map(m => new RegExp(m[1], /NC/.test(m[2]) ? 'i' : ''));
}

const refused = (patterns, p) => patterns.some(re => re.test(p));

async function live(base) {
  const failures = [];
  const probe = async (p) => {
    const res = await fetch(new URL('/' + p, base), { method: 'HEAD', redirect: 'manual' });
    return res.status;
  };
  for (const p of PRIVATE) {
    const status = await probe(p);
    if (status === 200) failures.push(`${base}/${p} answers 200; it should not be served`);
  }
  for (const p of PUBLIC.filter(p => p !== 'contact/send.php')) {
    const status = await probe(p);
    if (status !== 200) failures.push(`${base}/${p} answers ${status}; it should be served`);
  }
  return failures;
}

async function main() {
  const failures = [];
  const patterns = rules();
  if (!patterns.length) failures.push('.htaccess has no R=404 rules for private paths');
  for (const p of PRIVATE) if (!refused(patterns, p)) failures.push(`.htaccess does not refuse /${p}`);
  for (const p of PUBLIC) if (refused(patterns, p)) failures.push(`.htaccess refuses /${p}, which the site needs`);
  const at = process.argv.indexOf('--url');
  if (at > -1) failures.push(...await live(process.argv[at + 1].replace(/\/$/, '')));
  for (const f of failures) console.log(`  ✗ ${f}`);
  if (failures.length) process.exit(1);
  console.log(`  ✓ private paths: ${PRIVATE.length} refused, ${PUBLIC.length} served${at > -1 ? ' (live host checked too)' : ''}`);
}

main().catch(err => { console.log(`  ✗ private-paths-check: ${err.message}`); process.exit(1); });
