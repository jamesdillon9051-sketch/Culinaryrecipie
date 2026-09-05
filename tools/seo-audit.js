#!/usr/bin/env node
'use strict';
/**
 * Audits the parts of the site's search presence that live between pages
 * rather than inside one, and the few claims a snippet makes that the page
 * beneath it can contradict.
 *
 * tools/check.js already reads every page for a canonical, a title and a
 * description of the right length. What it cannot see from one file at a time
 * is whether two pages are competing for the same query, whether a page can be
 * reached at all, and whether the sitemap and robots.txt agree with the set of
 * pages that actually exists. Those are checked here.
 *
 * Five claims:
 *
 *   1. No two indexable pages share a title or a description. Two pages with
 *      one title are two pages splitting the same query between them.
 *   2. Every indexable page has at least one inbound link from inside another
 *      page's content — not from the header or footer, which link everything
 *      to everything and hide an orphan rather than fixing it.
 *   3. Every recipe links out to at least three other pages on the site.
 *   4. The sitemap holds every indexable route and nothing else.
 *   5. A description that advertises a time is not contradicted by the row.
 *
 *   node tools/seo-audit.js
 */
const fs = require('fs');
const path = require('path');
const { loadRecipes } = require('../src/build');

const ROOT = path.join(__dirname, '..');
const SKIP = new Set(['node_modules', '.git', 'src', 'tools', 'travel-destinations', 'assets']);

/** Every built HTML page, as route -> file contents. */
function pages() {
  const out = new Map();
  (function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        if (!SKIP.has(entry.name)) walk(path.join(dir, entry.name));
      } else if (entry.name.endsWith('.html')) {
        const file = path.join(dir, entry.name);
        const rel = path.relative(ROOT, file).split(path.sep).join('/');
        const route = '/' + (rel.endsWith('index.html') ? rel.slice(0, -'index.html'.length) : rel);
        out.set(route, fs.readFileSync(file, 'utf8'));
      }
    }
  })(ROOT);
  return out;
}

const decode = v => v
  .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
  .replace(/&quot;/g, '"').replace(/&apos;/g, "'")
  .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');

const attr = (html, re) => { const m = re.exec(html); return m ? decode(m[1]) : null; };
const isNoindex = html => /<meta name="robots" content="[^"]*noindex/.test(html);

/**
 * Links from inside a page's own content.
 *
 * The header carries every category and the footer every cuisine, so counting
 * those would make an unreachable page look well linked. Only what sits inside
 * <main> counts, and inside that only the parts a writer controls.
 */
function contextualLinks(html, routes) {
  const main = /<main id="main">([\s\S]*)<\/main>/.exec(html);
  const body = main ? main[1] : html;
  const found = new Set();
  for (const [, href] of body.matchAll(/<a [^>]*href="([^"#?]+)/g)) {
    if (!href.startsWith('/') || href.startsWith('//')) continue;
    if (routes.has(href)) found.add(href);
  }
  return found;
}

/* A description's promise about how long the whole dish takes. Step times —
   "steamed 8 minutes", "a 15-minute brine" — are not that promise. */
const STEP_NOUNS = /\b(brine|brining|rest|resting|prove|proving|soak|soaking|marinade|marinating|simmer|bake|baking|chill|chilling|rise|rising|steam|steaming|ferment)\b/i;
const TOTAL_TIME = [
  /(?:ready|done|on the table|to make|takes?)\s+(?:in\s+)?(?:under\s+|about\s+|just\s+)?(\d+)\s*min/i,
  /\bin\s+(?:under\s+|about\s+|just\s+)?(\d+)\s*minutes\b/i,
  /\ban?\s+(\d+)[- ]minute\s+(?!\w*\s*(?:brine|rest|prove|soak|marinade|simmer|bake|chill|rise))/i
];

/** The ceiling a description advertises, or null if it advertises none. */
function advertisedMinutes(text) {
  for (const pattern of TOTAL_TIME) {
    const match = pattern.exec(text);
    if (!match) continue;
    const before = text.slice(Math.max(0, match.index - 24), match.index);
    if (STEP_NOUNS.test(before)) continue;
    return Number(match[1]);
  }
  return null;
}

const problems = [];
const all = pages();
const routes = new Set(all.keys());
const indexable = [...all].filter(([, html]) => !isNoindex(html));

/* 1. Two pages with one title are two pages splitting one query. */
for (const field of ['title', 'description']) {
  const re = field === 'title' ? /<title>([^<]*)<\/title>/ : /<meta name="description" content="([^"]*)"/;
  const seen = new Map();
  for (const [route, html] of indexable) {
    const value = attr(html, re);
    if (!value) continue;
    if (seen.has(value)) {
      problems.push(`${route} and ${seen.get(value)} share a ${field} — "${value.slice(0, 60)}"`);
    } else {
      seen.set(value, route);
    }
  }
}

/* 2 and 3. The link graph, counting only links a writer put in the content. */
const inbound = new Map([...routes].map(r => [r, 0]));
for (const [route, html] of all) {
  const links = contextualLinks(html, routes);
  for (const target of links) inbound.set(target, inbound.get(target) + 1);
  if (route.startsWith('/recipes/') && route !== '/recipes/' && links.size < 3) {
    problems.push(`${route} links out to only ${links.size} other pages, under the 3 every recipe should carry`);
  }
}
for (const [route, html] of indexable) {
  if (route === '/') continue;
  if (inbound.get(route) === 0) {
    problems.push(`${route} is an orphan — no other page links to it from its content`);
  }
}

/* 4. The sitemap against the set of pages that exists. */
const sitemap = fs.readFileSync(path.join(ROOT, 'sitemap.xml'), 'utf8');
const listed = new Set([...sitemap.matchAll(/<loc>https?:\/\/[^/]+(\/[^<]*)<\/loc>/g)].map(m => m[1]));
for (const [route] of indexable) {
  if (!listed.has(route)) problems.push(`${route} is indexable but missing from sitemap.xml`);
}
for (const route of listed) {
  if (!routes.has(route)) problems.push(`sitemap.xml lists ${route}, which is not a page`);
  else if (isNoindex(all.get(route))) problems.push(`sitemap.xml lists ${route}, which is noindex`);
}
if (!/<lastmod>/.test(sitemap)) problems.push('sitemap.xml carries no lastmod dates');

/* robots.txt has to name the sitemap and must not block anything indexable. */
const robots = fs.readFileSync(path.join(ROOT, 'robots.txt'), 'utf8');
if (!/^Sitemap:\s*https:\/\/weeklydelight\.com\/sitemap\.xml\s*$/m.test(robots)) {
  problems.push('robots.txt does not point at https://weeklydelight.com/sitemap.xml');
}
for (const rule of robots.match(/^Disallow:\s*(\S+)\s*$/gm) || []) {
  const value = rule.replace(/^Disallow:\s*/, '').trim();
  if (value.includes('*') || value === '/') continue;
  for (const [route] of indexable) {
    if (route.startsWith(value)) problems.push(`robots.txt blocks ${value}, which covers the indexable page ${route}`);
  }
}

/* 5. A snippet promising a time the page cannot keep. */
for (const recipe of loadRecipes()) {
  const html = all.get(`/recipes/${recipe.slug}/`);
  if (!html) continue;
  const description = attr(html, /<meta name="description" content="([^"]*)"/) || '';
  const advertised = advertisedMinutes(description);
  const actual = recipe.prep + recipe.cook;
  if (advertised !== null && actual > advertised) {
    problems.push(`${recipe.slug} — the description advertises ${advertised} minutes but the recipe needs ${actual}`);
  }
}

const show = process.argv.includes('--all') ? problems.length : 40;
for (const line of problems.slice(0, show)) console.log(`  ✗ ${line}`);
if (problems.length > show) console.log(`  … and ${problems.length - show} more`);

console.log(problems.length
  ? `\n${problems.length} SEO problem${problems.length === 1 ? '' : 's'} across ${indexable.length} indexable pages.`
  : `All ${indexable.length} indexable pages carry a distinct title and description, `
    + 'an inbound link, a sitemap entry and a description the recipe can keep.');
process.exit(problems.length ? 1 : 0);
