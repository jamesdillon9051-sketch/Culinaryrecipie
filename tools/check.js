#!/usr/bin/env node
'use strict';
/**
 * Post-build audit of the generated site at the repo root: broken internal
 * links, missing alt text,
 * heading-level skips, over-long meta descriptions, duplicate element ids and
 * malformed JSON-LD. Exits non-zero if anything fails.
 *
 *   npm run check
 */
const fs = require('fs');
const path = require('path');

const DIST = path.join(__dirname, '..');

/* The site is generated into the repo root, so the audit must skip the
   project's own directories rather than walking source and node_modules. */
const SKIP = new Set(['.git', '.github', 'node_modules', 'src', 'tools',
  /* A separate project living in this repository; it has its own build and
     its own checks, so auditing its pages here would be meaningless noise. */
  'travel-destinations']);
const problems = [];
const warnings = [];
let pagesChecked = 0;

function walk(dir, out = [], depth = 0) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (depth === 0 && SKIP.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out, depth + 1);
    else out.push(full);
  }
  return out;
}

const files = walk(DIST);
/* assets/ads/* are single-purpose documents framed into a page — an ad slot
   and nothing else. They are deliberately without an h1, a canonical or a
   skip link, so holding them to the page rules would only produce noise. */
const htmlFiles = files.filter(f =>
  f.endsWith('.html') && !path.relative(DIST, f).split(path.sep).join('/').startsWith('assets/ads/'));
const existing = new Set(files.map(f => '/' + path.relative(DIST, f).split(path.sep).join('/')));

function resolveHref(href) {
  const clean = href.split('#')[0].split('?')[0];
  if (!clean || clean === '/') return '/index.html';
  if (clean.endsWith('/')) return clean + 'index.html';
  return clean;
}

/* Schema strings, flattened the same way, so the two are comparable. */
const flatten = s => String(s).replace(/\s+/g, ' ').trim();

for (const file of htmlFiles) {
  const rel = '/' + path.relative(DIST, file).split(path.sep).join('/');
  const html = fs.readFileSync(file, 'utf8');
  pagesChecked++;

  /* --- FAQ markup matches the page ------------------------------------ */
  /* Google's condition on FAQ markup is that the Q&A be visible to the reader.
     Generated schema and generated markup can drift apart in a way nobody
     notices, so this checks the text itself rather than trusting that they came
     from the same variable. */
  /* The page as a reader sees it: scripts gone, tags gone, entities decoded,
     whitespace flattened. Searching the raw HTML found the schema inside its own
     ld+json block, so the check passed for text that appeared nowhere visible —
     exactly the failure it exists to catch. Comparing text rather than markup
     also lets an answer contain a link without breaking the match. */
  const visible = html
    .replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<[^>]+>/g, '')
    .replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ');
  for (const block of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    let parsed;
    try { parsed = JSON.parse(block[1]); } catch { problems.push(`${rel}: unparseable ld+json`); continue; }
    for (const node of [].concat(parsed)) {
      if (!node) continue;

      if (node['@type'] === 'FAQPage') {
        for (const entry of node.mainEntity || []) {
          const answer = entry.acceptedAnswer && entry.acceptedAnswer.text;
          if (!visible.includes(flatten(entry.name))) {
            problems.push(`${rel}: FAQ question is in the schema but not on the page`);
          } else if (!visible.includes(flatten(answer || ''))) {
            problems.push(`${rel}: FAQ answer is in the schema but not on the page`);
          }
        }
      }

      /* Reviews carry the same rule as the FAQ and a sharper reason for it: a
         review is a claim that a named person said something. */
      for (const review of [].concat(node.review || [])) {
        const body = review && review.reviewBody;
        const author = review && review.author && review.author.name;
        if (body && !visible.includes(flatten(body))) {
          problems.push(`${rel}: a review body is in the schema but not on the page`);
        } else if (author && !visible.includes(flatten(author))) {
          problems.push(`${rel}: a review author is in the schema but not on the page`);
        }
      }

      /* A VideoObject asserts a video the page can play. Nothing else here can
         tell the difference between that and a page that merely says so. */
      if (node['@type'] === 'VideoObject') {
        if (!/<video[\s>]|<iframe[\s>]/.test(html)) {
          problems.push(`${rel}: VideoObject in the schema but no video or iframe on the page`);
        }
      }
    }
  }

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

  /* --- no inline script of our own ---------------------------------------
     The CSP now allows 'unsafe-inline' so the ad network can do its work, but
     nothing the generator writes should depend on that. Keeping our own output
     free of inline script and inline handlers means the site would run
     unchanged if the ads came out and the strict policy went back. */
  for (const match of html.matchAll(/<script\b([^>]*)>/g)) {
    const attrs = match[1];
    if (/\bsrc=/.test(attrs)) continue;
    /* JSON-LD is a data block: the browser never executes it. */
    if (/type="application\/ld\+json"/.test(attrs)) continue;
    problems.push(`${rel}: inline <script> written by the generator`);
  }
  for (const match of html.matchAll(/\s(on[a-z]+)="/g)) {
    problems.push(`${rel}: inline ${match[1]} handler written by the generator`);
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
const expectedRecipes = require('../src/data/stats').recipeCount;
if (index.length !== expectedRecipes)
  problems.push(`search index has ${index.length} entries, expected ${expectedRecipes}`);
for (const entry of index) {
  if (entry.i && !existing.has(`/assets/img/recipes/${entry.i}.jpg`)) {
    problems.push(`search index references a missing image: ${entry.i}`);
  }
}

/* Image files nothing points at. A rejected process shot leaves its jpg and
   webp behind, and they are then copied into the build and committed for the
   life of the repository — sixteen recipes had one before this check existed.
   The manifest is the only thing that decides which files are wanted. */
const manifest = require('../src/data/images.json');
const wanted = new Set();
for (const entry of Object.values(manifest)) {
  for (const kind of ['hero', 'process']) if (entry[kind]) wanted.add(entry[kind].file);
}
for (const dir of [path.join(__dirname, '..', 'src', 'assets', 'img', 'recipes'),
                   path.join(DIST, 'assets', 'img', 'recipes')]) {
  if (!fs.existsSync(dir)) continue;
  for (const file of fs.readdirSync(dir)) {
    if (!wanted.has(file.replace(/\.(jpg|webp)$/, ''))) {
      problems.push(`image file no entry in images.json points at — ${dir.split('/').slice(-4)[0]}/${file}`);
    }
  }
}

/* Declared image sizes have to be the real ones. A wrong width and height
   reserves the wrong box before the file arrives, and the page jumps when it
   does — the Cumulative Layout Shift a reader feels and Core Web Vitals
   measures. Six recipe heroes were 640x480 under a hardcoded 800x600. */
for (const [slug, entry] of Object.entries(manifest)) {
  const file = path.join(DIST, 'recipes', slug, 'index.html');
  if (!fs.existsSync(file)) continue;
  const html = fs.readFileSync(file, 'utf8');
  for (const kind of ['hero', 'process']) {
    const image = entry[kind];
    if (!image) continue;
    const tag = new RegExp(`<img[^>]*${image.file}\\.jpg"[^>]*>`).exec(html);
    if (!tag) continue;
    const w = /width="(\d+)"/.exec(tag[0]);
    const h = /height="(\d+)"/.exec(tag[0]);
    if (!w || !h) { problems.push(`${slug} ${kind} image has no width or height`); continue; }
    if (Number(w[1]) !== image.w || Number(h[1]) !== image.h) {
      problems.push(`${slug} ${kind} image declares ${w[1]}x${h[1]} but the file is ${image.w}x${image.h}`);
    }
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
  /* 'unsafe-eval' is a different matter from 'unsafe-inline': the ad scripts
     do not need it, and it is the one that turns a string into code. */
  else if (/unsafe-eval/.test(scriptSrc[1])) {
    problems.push(`CSP script-src allows unsafe-eval: ${scriptSrc[1].trim()}`);
  }
  /* Serving ads costs us script-src as an XSS mitigation. These four cost
     nothing — no ad needs them — so a regression that drops one is a bug. */
  for (const directive of ["object-src 'none'", "base-uri 'self'",
                           "frame-ancestors 'self'", "form-action 'self'"]) {
    if (!vercelCsp.includes(directive)) problems.push(`CSP no longer sets ${directive}`);
  }
  /* Ads are third-party by nature, but the site's own scripts must stay
     first-party: a same-origin bundle is the one thing we fully control. */
  if (!/script-src [^;]*'self'/.test(vercelCsp)) {
    problems.push("CSP script-src no longer allows 'self'");
  }
}

/* --- ad coverage --------------------------------------------------------- */
/* The part of the site that earns money, and the only claim here with no other
   witness: a template edit that dropped an ad call would ship silently across
   every page and cost a day of impressions before anyone noticed.
   Skipped entirely when ads are switched off in src/data/ads.js, and when
   consent gating is on, since that deliberately withholds two of the three. */
{
  const ads = require('../src/data/ads');
  const consent = require('../src/data/consent');
  const unit = (ads.nativeBanners || [])[0];

  if (ads.enabled && !consent.enabled && unit) {
    const missing = { popunder: [], socialBar: [], slots: [] };
    for (const file of htmlFiles) {
      const html = fs.readFileSync(file, 'utf8');
      const where = '/' + path.relative(DIST, file).split(path.sep).join('/');
      if (ads.popunder && !html.includes(ads.popunder)) missing.popunder.push(where);
      if (ads.socialBar && !html.includes(ads.socialBar)) missing.socialBar.push(where);
      /* Two slots on every page: the first embeds the snippet, the second is an
         iframe onto the one-slot document. One of either is a broken layout. */
      const slots = (html.match(/container-|native-banner\.html/g) || []).length;
      if (slots !== 2) missing.slots.push(`${where} (${slots})`);
    }
    for (const [what, list] of [['the popunder', missing.popunder],
                                ['the social bar', missing.socialBar]]) {
      if (list.length) {
        problems.push(`${what} is missing from ${list.length} page${list.length === 1 ? '' : 's'}`
          + `, starting with ${list[0]}`);
      }
    }
    if (missing.slots.length) {
      problems.push(`${missing.slots.length} page(s) do not carry exactly 2 native banner slots`
        + `, starting with ${missing.slots[0]}`);
    }

    /* The framed document is the exception and has to stay one: the popunder
       and social bar inside it would fire a second time on every page. */
    const framePath = path.join(DIST, 'assets', 'ads', 'native-banner.html');
    if (!fs.existsSync(framePath)) {
      problems.push('assets/ads/native-banner.html is missing, so every second ad slot is empty');
    } else {
      const frame = fs.readFileSync(framePath, 'utf8');
      if (!frame.includes(unit.key)) problems.push('the framed ad document holds no banner');
      if (ads.popunder && frame.includes(ads.popunder)) {
        problems.push('the framed ad document carries the popunder, which would fire it twice');
      }
      if (ads.socialBar && frame.includes(ads.socialBar)) {
        problems.push('the framed ad document carries the social bar, which would fire it twice');
      }
    }
  }
}

/* --- diet claims --------------------------------------------------------- */
/* Every tag now, not just Gluten-Free. These are the claims a reader cannot
   check for themselves — someone coeliac or vegan is trusting the label over the
   photograph — and all four are at zero, so all four are held there. */
try {
  require('child_process').execFileSync(process.execPath,
    [require('path').join(__dirname, 'diet-audit.js')], { stdio: 'pipe' });
} catch (err) {
  for (const line of String(err.stdout || '').split('\n')) {
    if (line.trim().startsWith('✗')) problems.push(line.replace(/^\s*✗\s*/, ''));
  }
}

/* --- times and nutrition ------------------------------------------------- */
/* Both are numbers a reader plans around and cannot verify before committing:
   whether dinner is an hour away or a day away, and what a serving costs them.
   Neither survives being quietly wrong, so both fail the check. */
/* Keywords go in the same list. A keyword is a promise made to somebody
   before they open the page — "gluten free", "30 minute", "can you freeze
   this" — and it is the one kind of claim nobody re-reads after editing a
   recipe, so it fails the check like the rest. */
for (const audit of ['timing-audit.js', 'nutrition-audit.js', 'keyword-audit.js']) {
  try {
    require('child_process').execFileSync(process.execPath,
      [require('path').join(__dirname, audit)], { stdio: 'pipe' });
  } catch (err) {
    for (const line of String(err.stdout || '').split('\n')) {
      if (line.trim().startsWith('✗')) problems.push(line.replace(/^\s*✗\s*/, ''));
    }
  }
}

/* --- README counts ------------------------------------------------------- */
/* The README repeats numbers that live in the data. Verifying them here means a
   stale README fails the check rather than shipping. */
try {
  require('child_process').execFileSync(process.execPath,
    [require('path').join(__dirname, 'sync-readme.js'), '--check'], { stdio: 'pipe' });
} catch (err) {
  problems.push(String(err.stderr || err.message).trim().split('\n')[0]);
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
