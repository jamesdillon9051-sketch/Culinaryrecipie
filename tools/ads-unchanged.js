#!/usr/bin/env node
'use strict';
/**
 * Confirms that a change left the advertising alone: the ad and consent source files, ads.txt,
 * and the advertising markup on a sample of built pages are byte-for-byte what they are at a git
 * ref (origin/main by default).
 *
 *   node tools/ads-unchanged.js [--against <ref>]
 *
 * It is a release check, not part of npm run check: the owner changing the advertising on purpose
 * is not a defect, and a check pinned to a baseline would make that look like one. Run it before
 * merging any change that was not meant to touch the ads.
 */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { execFileSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const args = process.argv.slice(2);
const ref = args.includes('--against') ? args[args.indexOf('--against') + 1] : 'origin/main';

const FILES = ['src/templates/ads.js', 'src/data/ads.js', 'src/data/consent.js', 'src/data/analytics.js',
  'src/assets/js/ad-loader.js', 'src/assets/js/consent.js', 'src/assets/js/analytics.js', 'ads.txt'];
const PAGES = ['index.html', 'recipes/index.html', 'recipes/spaghetti-carbonara/index.html', 'recipes/macarons/index.html',
  'recipes/lasagna-bolognese/index.html', 'categories/dinner/index.html', 'contact/index.html', 'about/index.html'];

const sha = buf => crypto.createHash('sha256').update(buf).digest('hex').slice(0, 16);
const atRef = file => { try { return execFileSync('git', ['show', `${ref}:${file}`], { cwd: ROOT, maxBuffer: 1 << 28 }); } catch { return null; } };

/* The advertising on a page: ad containers and their labels, ad-loader and third-party script
   tags, with asset version stamps (?v=…) taken out because they change with any CSS or JS edit. */
function adMarkup(html) {
  const s = String(html).replace(/\?v=[0-9a-f]{6,}/g, '');
  const parts = [];
  for (const re of [/<[^>]+class="[^"]*\bad(?:-|_|\b)[^"]*"[^>]*>/g, /<script[^>]+(?:ad-loader|consent|analytics|googletagmanager|adsterra|data-ad)[^>]*>/g,
    /<ins\b[^>]*>/g, /<script[^>]*>[^<]*(?:atOptions|adsbygoogle|data-cfasync)[^<]*<\/script>/g]) {
    for (const m of s.matchAll(re)) parts.push(m[0]);
  }
  return parts;
}

let failures = 0;
for (const file of FILES) {
  const full = path.join(ROOT, file);
  const now = fs.existsSync(full) ? fs.readFileSync(full) : null;
  const then = atRef(file);
  if (!now && !then) continue;
  const same = now && then && sha(now) === sha(then);
  console.log(`  ${same ? '✓' : '✗'} ${file}${same ? '' : now && then ? ' differs' : now ? ' is new' : ' was removed'}`);
  if (!same) failures++;
}
for (const page of PAGES) {
  const full = path.join(ROOT, page);
  const then = atRef(page);
  if (!fs.existsSync(full) || !then) { console.log(`  · ${page}: not in both trees, skipped`); continue; }
  const a = adMarkup(fs.readFileSync(full, 'utf8'));
  const b = adMarkup(then);
  const same = a.length === b.length && a.every((x, i) => x === b[i]);
  console.log(`  ${same ? '✓' : '✗'} ${page}: ${a.length} advertising tags${same ? ', identical' : ` now, ${b.length} at ${ref}`}`);
  if (!same) failures++;
}
console.log(failures ? `\nadvertising differs from ${ref} in ${failures} place(s)` : `\nadvertising code, configuration and page markup unchanged from ${ref}`);
process.exit(failures ? 1 : 0);
