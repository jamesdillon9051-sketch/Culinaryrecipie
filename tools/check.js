#!/usr/bin/env node
'use strict';
/**
 * Post-build audit of dist/: broken internal links, missing alt text,
 * heading-level skips, over-long meta descriptions, duplicate element ids and
 * malformed JSON-LD. Exits non-zero if anything fails.
 *
 *   npm run check
 */
const fs = require('fs');
const path = require('path');

const DIST = path.join(__dirname, '..', 'dist');
const problems = [];
const warnings = [];
let pagesChecked = 0;

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

const files = walk(DIST);
const htmlFiles = files.filter(f => f.endsWith('.html'));
const existing = new Set(files.map(f => '/' + path.relative(DIST, f).split(path.sep).join('/')));

function resolveHref(href) {
  const clean = href.split('#')[0].split('?')[0];
  if (!clean || clean === '/') return '/index.html';
  if (clean.endsWith('/')) return clean + 'index.html';
  return clean;
}

for (const file of htmlFiles) {
  const rel = '/' + path.relative(DIST, file).split(path.sep).join('/');
  const html = fs.readFileSync(file, 'utf8');
  pagesChecked++;

  /* --- internal links ------------------------------------------------- */
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const href = match[1];
    if (/^(https?:|mailto:|data:|tel:|#|javascript:)/.test(href)) continue;
    const target = resolveHref(href);
    if (!existing.has(target)) problems.push(`${rel}: broken link -> ${href}`);
  }

  /* --- images need alt text ------------------------------------------- */
  for (const match of html.matchAll(/<img\b([^>]*)>/g)) {
    const attrs = match[1];
    if (!/\balt="/.test(attrs)) problems.push(`${rel}: <img> without alt attribute`);
    else if (/\balt=""/.test(attrs) && !/aria-hidden/.test(attrs)) {
      warnings.push(`${rel}: <img> with empty alt (decorative?)`);
    }
    if (!/\bwidth="/.test(attrs) || !/\bheight="/.test(attrs)) {
      warnings.push(`${rel}: <img> without width/height (CLS risk)`);
    }
  }

  /* --- heading hierarchy ---------------------------------------------- */
  const levels = [...html.matchAll(/<h([1-6])\b/g)].map(m => Number(m[1]));
  const h1s = levels.filter(l => l === 1).length;
  if (h1s !== 1) problems.push(`${rel}: expected exactly one <h1>, found ${h1s}`);
  for (let i = 1; i < levels.length; i++) {
    if (levels[i] > levels[i - 1] + 1) {
      problems.push(`${rel}: heading level skipped (h${levels[i - 1]} -> h${levels[i]})`);
      break;
    }
  }

  /* --- head essentials -------------------------------------------------- */
  const desc = /<meta name="description" content="([^"]*)"/.exec(html);
  if (!desc) problems.push(`${rel}: missing meta description`);
  else if (desc[1].length > 160) problems.push(`${rel}: meta description ${desc[1].length} chars (max 160)`);
  else if (desc[1].length < 50) warnings.push(`${rel}: meta description only ${desc[1].length} chars`);

  if (!/<link rel="canonical"/.test(html)) problems.push(`${rel}: missing canonical link`);
  if (!/<title>/.test(html)) problems.push(`${rel}: missing <title>`);
  if (!/property="og:image"/.test(html)) problems.push(`${rel}: missing og:image`);
  if (!/name="twitter:card"/.test(html)) problems.push(`${rel}: missing twitter:card`);
  if (!/<html lang="/.test(html)) problems.push(`${rel}: missing lang attribute`);

  const title = /<title>([^<]*)<\/title>/.exec(html);
  if (title && title[1].length > 70) warnings.push(`${rel}: title ${title[1].length} chars (over 70)`);

  /* --- duplicate ids ---------------------------------------------------- */
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(m => m[1]);
  const seen = new Set();
  for (const id of ids) {
    if (seen.has(id)) { problems.push(`${rel}: duplicate id "${id}"`); break; }
    seen.add(id);
  }

  /* --- JSON-LD ---------------------------------------------------------- */
  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      const parsed = JSON.parse(match[1]);
      if (!parsed['@context'] || !parsed['@type']) problems.push(`${rel}: JSON-LD missing @context/@type`);
    } catch (e) {
      problems.push(`${rel}: invalid JSON-LD (${e.message})`);
    }
  }

  /* --- strict-CSP compatibility ------------------------------------------
     The deployed Content-Security-Policy sets `script-src 'self'`, which
     blocks inline scripts and inline event handlers. Fail the build if one
     reappears, rather than shipping a page whose behaviour is silently
     dropped by the browser. */
  for (const match of html.matchAll(/<script\b([^>]*)>/g)) {
    const attrs = match[1];
    if (/\bsrc=/.test(attrs)) continue;
    /* JSON-LD is a data block: the browser never executes it, so CSP allows it. */
    if (/type="application\/ld\+json"/.test(attrs)) continue;
    problems.push(`${rel}: inline <script> blocked by script-src 'self'`);
  }
  for (const match of html.matchAll(/\s(on[a-z]+)="/g)) {
    problems.push(`${rel}: inline ${match[1]} handler blocked by script-src 'self'`);
  }

  /* --- accessibility spot checks --------------------------------------- */
  if (!/class="skip-link"/.test(html)) problems.push(`${rel}: missing skip-to-content link`);
  /* Match a single button without letting the body run into the next one. */
  for (const match of html.matchAll(/<button\b([^>]*)>((?:(?!<\/?button)[\s\S])*)<\/button>/g)) {
    const [, attrs, inner] = match;
    const visibleText = inner.replace(/<svg[\s\S]*?<\/svg>/g, '').replace(/<[^>]+>/g, '').trim();
    const named = /aria-label=|aria-labelledby=/.test(attrs) || visibleText.length > 0;
    if (!named) problems.push(`${rel}: button with no accessible name`);
  }
}

/* --- site plumbing ------------------------------------------------------ */
for (const required of ['/sitemap.xml', '/robots.txt', '/manifest.json', '/search-index.json', '/404.html', '/feed.xml']) {
  if (!existing.has(required)) problems.push(`missing required file: ${required}`);
}

const sitemap = fs.readFileSync(path.join(DIST, 'sitemap.xml'), 'utf8');
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
const origin = sitemapUrls[0] ? sitemapUrls[0].replace(/\/$/, '') : '';
for (const url of sitemapUrls) {
  const target = resolveHref(url.replace(origin, '') || '/');
  if (!existing.has(target)) problems.push(`sitemap points at a missing page: ${url}`);
}
if (sitemapUrls.length !== new Set(sitemapUrls).size) problems.push('sitemap contains duplicate URLs');

const index = JSON.parse(fs.readFileSync(path.join(DIST, 'search-index.json'), 'utf8'));
if (index.length !== 200) problems.push(`search index has ${index.length} entries, expected 200`);
for (const entry of index) {
  if (entry.i && !existing.has(`/assets/img/recipes/${entry.i}.jpg`)) {
    problems.push(`search index references a missing image: ${entry.i}`);
  }
}

/* --- deployment headers -------------------------------------------------- */
const netlify = fs.readFileSync(path.join(__dirname, '..', 'netlify.toml'), 'utf8');
const vercel = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'vercel.json'), 'utf8'));
const vercelCsp = vercel.headers
  .flatMap(block => block.headers)
  .filter(header => header.key === 'Content-Security-Policy')
  .map(header => header.value)[0];

if (!vercelCsp) {
  problems.push('vercel.json is missing a Content-Security-Policy header');
} else {
  if (!netlify.includes(vercelCsp)) {
    problems.push('the Netlify and Vercel CSPs have drifted apart');
  }
  const scriptSrc = /script-src ([^;]*)/.exec(vercelCsp);
  if (!scriptSrc) problems.push('CSP has no script-src directive');
  else if (/unsafe-inline|unsafe-eval/.test(scriptSrc[1])) {
    problems.push(`CSP script-src is not strict: ${scriptSrc[1].trim()}`);
  }
  for (const directive of ['object-src', 'base-uri', 'frame-ancestors', 'form-action']) {
    if (!vercelCsp.includes(directive)) problems.push(`CSP is missing ${directive}`);
  }
}

/* --- report -------------------------------------------------------------- */
const dedupe = list => {
  const counted = new Map();
  for (const item of list) {
    const key = item.replace(/^[^:]+: /, '');
    counted.set(key, (counted.get(key) || 0) + 1);
  }
  return [...counted.entries()].sort((a, b) => b[1] - a[1]);
};

console.log(`Checked ${pagesChecked} HTML pages, ${sitemapUrls.length} sitemap URLs, ${index.length} index entries.\n`);

if (warnings.length) {
  console.log(`Warnings (${warnings.length}):`);
  for (const [text, n] of dedupe(warnings).slice(0, 10)) console.log(`  · ${text}${n > 1 ? `  (x${n})` : ''}`);
  console.log('');
}

if (problems.length) {
  console.log(`FAILURES (${problems.length}):`);
  for (const [text, n] of dedupe(problems).slice(0, 20)) console.log(`  ✗ ${text}${n > 1 ? `  (x${n})` : ''}`);
  process.exit(1);
}

console.log('All checks passed.');
