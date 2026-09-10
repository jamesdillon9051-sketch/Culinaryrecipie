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
const { MAX_TITLE, MIN_DESCRIPTION, MAX_DESCRIPTION } = require('../src/lib/seo');

/**
 * The rendered text of an attribute value.
 *
 * Search engines lay out the decoded string, so length has to be measured on
 * that and not on the escaped markup.
 */
function decodeEntities(value) {
  return value
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&quot;/g, '"').replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
}

const isNoindex = html => /<meta name="robots" content="[^"]*noindex/.test(html);

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

      /* Recipe.image has to be a photograph of the dish, and og-default.jpg is
         the site's social card — a gradient with the site name on it. Twenty
         three recipes with no photo used to fall back to it here, so one
         marketing card was answering "what does this dish look like?" for all
         of them. The fallback is right for og:image and wrong for this. */
      if (node['@type'] === 'Recipe') {
        for (const src of [].concat(node.image || [])) {
          if (/og-default/.test(String(src))) {
            problems.push(`${rel}: Recipe.image is the site's social card, not a photo of the dish`);
          }
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
  /* Measured decoded, because a search engine renders the text rather than the
     markup: an apostrophe is one character on the results page and five in the
     source as &#39;, and counting the markup called a 156-character
     description 161 and failed a page that was inside the limit. */
  const desc = /<meta name="description" content="([^"]*)"/.exec(html);
  if (!desc) problems.push(`${rel}: missing meta description`);
  else {
    const text = decodeEntities(desc[1]);
    if (text.length > MAX_DESCRIPTION) {
      problems.push(`${rel}: meta description ${text.length} chars (max ${MAX_DESCRIPTION})`);
    } else if (!isNoindex(html) && text.length < MIN_DESCRIPTION) {
      /* Short is not broken, but it hands back snippet the page could have
         used, and every one of the 809 recipes was doing it. */
      problems.push(`${rel}: meta description ${text.length} chars, under the ${MIN_DESCRIPTION} a snippet will show`);
    }
  }

  const titleTag = /<title>([^<]*)<\/title>/.exec(html);
  if (titleTag && decodeEntities(titleTag[1]).length > MAX_TITLE) {
    problems.push(`${rel}: title ${decodeEntities(titleTag[1]).length} chars (max ${MAX_TITLE})`);
  }

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

  /* --- nothing on the critical path that need not be there ----------------
     A <script src> with neither async nor defer stops the parser until it has
     downloaded and run. theme.js is the one that has to: it applies the saved
     theme before the first paint and promotes the stylesheets parked at
     media="print", and deferring it would show a flash of the wrong theme on
     every page. Everything else — analytics and all three ad units — was
     blocking for no reason. */
  for (const match of html.matchAll(/<script\b([^>]*)\bsrc="([^"]*)"([^>]*)>/g)) {
    const attrs = match[1] + match[3];
    const src = match[2];
    if (/\basync\b|\bdefer\b/.test(attrs)) continue;
    if (src.endsWith('/assets/js/theme.js')) continue;
    problems.push(`${rel}: <script src="${src}"> blocks rendering — add async or defer`);
  }

  /* --- the encoding declaration is still early enough ----------------------
     The HTML parser only honours <meta charset> if the whole element is
     serialized inside the first 1024 bytes; past that it sniffs, and a page
     that names UTF-8 too late renders its accented ingredients as mojibake.
     This mattered while an ad tag sat above it: everything ahead of the
     declaration spends part of that budget. That tag is gone and the
     charset is the first thing in the head again, so the budget is no longer
     being spent; the check stays because the next thing put above it would
     spend it again silently. */
  {
    const at = html.indexOf('<meta charset');
    if (at === -1) {
      problems.push(`${rel}: no <meta charset> declaration`);
    } else {
      const end = Buffer.byteLength(html.slice(0, html.indexOf('>', at) + 1));
      if (end > 1024) {
        problems.push(`${rel}: <meta charset> ends at byte ${end}, past the 1024 the parser reads`);
      }
    }
  }

  /* --- nothing third-party in the head, bar one ----------------------------
     The head is what a crawler parses before it reaches any content, and a
     third-party script there is fetched and run while that is happening. The
     ad units carry no work that has to precede the document, so they load at
     the end of the body, and this catches any that drift back up.

     One exception, async and there on purpose: Google's own gtag, whose
     measurement is time-sensitive. There was a second — an ad tag whose
     network documented a head placement — and removing that network removed
     the exemption with it, which is why this is a hostname test again rather
     than a list read out of src/data/ads.js. A network added later gets
     nothing here by default. */
  {
    const head = html.slice(0, html.indexOf('</head>'));
    for (const [, src] of head.matchAll(/<script\b[^>]*\bsrc="(https?:\/\/[^"]+)"/g)) {
      if (src.includes('googletagmanager.com')) continue;
      problems.push(`${rel}: third-party script in <head> — ${src.slice(0, 60)}`);
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
/* Photographs that have been fetched but not yet checked by eye. A quarter of
   what the archives return is the wrong dish — the right name on the wrong
   filling, the right grain in the wrong preparation — and no scoring catches
   that, so images wait in images-pending.json until someone has looked at them.
   They are accounted for, which is what this guard is about, but nothing on the
   site points at them and the recipe keeps its gradient placeholder until an
   entry moves across into images.json. */
const pendingPath = path.join(__dirname, '..', 'src', 'data', 'images-pending.json');
if (fs.existsSync(pendingPath)) {
  for (const entry of Object.values(JSON.parse(fs.readFileSync(pendingPath, 'utf8')))) {
    for (const kind of ['hero', 'process']) if (entry[kind]) wanted.add(entry[kind].file);
  }
}
for (const dir of [path.join(__dirname, '..', 'src', 'assets', 'img', 'recipes'),
                   path.join(DIST, 'assets', 'img', 'recipes')]) {
  if (!fs.existsSync(dir)) continue;
  for (const file of fs.readdirSync(dir)) {
    if (!wanted.has(file.replace(/\.(jpg|webp)$/, ''))) {
      /* The whole path, because "src/liangpi.jpg" sent one reader looking
         for a file at the repository root that was never there. */
      problems.push(`image file no entry in images.json points at — `
        + `${path.relative(path.join(__dirname, '..'), path.join(dir, file))}`);
    }
  }
}

/* --- a drawing never passes for a photograph -----------------------------
   The site tells readers that every photograph on it is freely licensed and
   that its photographers are credited. Generated illustrations sit on the
   same page furniture as photographs, so the only thing separating the two
   for a reader is the caption underneath — which makes that caption a claim
   with nothing else backing it, and exactly the kind this file exists to
   check.

   Both directions matter. An illustration published without its notice is a
   drawing presenting itself as a photograph of the dish. A photograph
   carrying the notice tells a reader the photographer's work is machine-made
   and drops their credit. */
{
  const { isIllustration } = require('../src/lib/util');
  const NOTICE = 'Illustration, generated by AI';
  const undeclared = [];
  const mislabelled = [];

  for (const recipe of require('../src/data/volumes').catalog()) {
    const hero = (manifest[recipe.slug] || {}).hero;
    if (!hero) continue;
    const page = path.join(DIST, 'recipes', recipe.slug, 'index.html');
    if (!fs.existsSync(page)) continue;
    const html = fs.readFileSync(page, 'utf8');
    const says = html.includes(NOTICE);
    if (isIllustration(hero) && !says) undeclared.push(recipe.slug);
    if (!isIllustration(hero) && says) mislabelled.push(recipe.slug);
  }

  if (undeclared.length) {
    problems.push(`${undeclared.length} generated illustration(s) publish with no notice saying `
      + `so, starting with ${undeclared[0]} — the page presents a drawing as a photograph`);
  }
  if (mislabelled.length) {
    problems.push(`${mislabelled.length} photograph(s) carry the AI illustration notice, `
      + `starting with ${mislabelled[0]} — the photographer's credit is replaced by it`);
  }

  /* And the same separation in the attribution file, which is where the
     licence figures are set out. */
  const attribution = path.join(__dirname, '..', 'images-attribution.md');
  if (fs.existsSync(attribution)) {
    const doc = fs.readFileSync(attribution, 'utf8');
    const drawn = Object.values(manifest)
      .flatMap(e => [e && e.hero, e && e.process])
      .filter(shot => shot && isIllustration(shot));
    /* Does the photograph index name any of them?

       An earlier version of this looked for a licence column reading CC or
       "Public domain" on the row. That could never match: an illustration
       that leaks into the index carries its own licence string, "AI
       illustration", so the guard passed on exactly the file it was written
       to catch. Fault injection found it. Asking which section the filename
       appears in has no such gap.

       Everything after this heading is the photograph index. The illustrations
       table sits above it and names the same files legitimately, which is why
       the search is anchored rather than run over the whole document. */
    const INDEX_HEAD = '## Full photograph index';
    const at = doc.indexOf(INDEX_HEAD);
    const index = at === -1 ? '' : doc.slice(at);
    for (const shot of drawn) {
      if (index.includes('`' + shot.file + '.webp`')) {
        problems.push(`${shot.file} is a generated illustration but images-attribution.md `
          + `lists it in the photograph index, among work by credited photographers`);
      }
    }
    if (drawn.length && !doc.includes('## The illustrations')) {
      problems.push('images-attribution.md carries no illustrations section, but the manifest '
        + `holds ${drawn.length} of them — run npm run attribution`);
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
   consent gating is on, since that deliberately withholds the loaders until a
   reader agrees. */
{
  const ads = require('../src/data/ads');
  const consent = require('../src/data/consent');
  const unit = (ads.nativeBanners || [])[0];
  const ADS_HEIGHT = ads.frameHeight || 300;

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
    /* Both slots have to hold the same space before the network paints. The
       framed one reserves its height on the iframe; the direct embed is a bare
       div and was holding only the stylesheet's 140px against a unit that
       paints nearer three hundred, so the article moved when the ad arrived. */
    const reserved = ADS_HEIGHT;
    for (const file of htmlFiles) {
      const html = fs.readFileSync(file, 'utf8');
      const where = '/' + path.relative(DIST, file).split(path.sep).join('/');
      if (where.startsWith('/assets/')) continue;
      const container = new RegExp(`id="container-${unit.key}"[^>]*style="min-height:(\\d+)px"`).exec(html);
      if (!container) {
        problems.push(`${where}: the embedded ad slot reserves no height, so the page moves when it paints`);
      } else if (Number(container[1]) !== reserved) {
        problems.push(`${where}: ad slots reserve ${container[1]}px and ${reserved}px — they should match`);
      }
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

/* --- the social card still says what is true ------------------------------
   assets/img/og-default.jpg is the share preview for every page without a
   picture of its own, and it puts the brand and two counts in writing. It is
   also the one asset no build regenerates, so it went stale invisibly: it read
   "CULINARYVAULT — the world's 400 most famous recipes" long after the site
   was Weekly Delight with 809 of them, and it was the preview for 34 pages.
   Nothing can read text back out of a JPEG, so make_icons.py records what it
   stamped and that record is compared here. Re-run `npm run icons` to fix. */
{
  const stampPath = path.join(__dirname, '..', 'src', 'data', 'og-default.json');
  if (!fs.existsSync(stampPath)) {
    problems.push('src/data/og-default.json is missing, so nothing knows what the social card says');
  } else {
    const stamped = JSON.parse(fs.readFileSync(stampPath, 'utf8'));
    const { SITE } = require('../src/templates/layout');
    const { recipeCount } = require('../src/data/stats');
    const { CUISINES } = require('../src/lib/util');
    const live = { brand: SITE.name, recipes: recipeCount, cuisines: Object.keys(CUISINES).length };
    for (const key of ['brand', 'recipes', 'cuisines']) {
      if (String(stamped[key]) !== String(live[key])) {
        problems.push(`the social card says ${key} is ${stamped[key]} but the site says ${live[key]}`
          + ' — re-run npm run icons');
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
/* seo-audit reads the built pages as a set rather than one at a time: two
   pages sharing a title, a page nothing links to, a sitemap that has drifted
   from the routes. None of those is visible from inside a single file. */
for (const audit of ['timing-audit.js', 'nutrition-audit.js', 'keyword-audit.js', 'seo-audit.js']) {
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
