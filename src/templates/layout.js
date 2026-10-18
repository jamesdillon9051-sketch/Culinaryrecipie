'use strict';
const { esc, jsonLd, humanTime, compactTime, starsHtml, CUISINES, CATEGORIES } = require('../lib/util');
const { forMeta } = require('../lib/keywords');
const { pageTitle } = require('../lib/seo');
const { recipeCount } = require('../data/stats');
const ads = require('./ads');
const ANALYTICS = require('../data/analytics');
const CONSENT = require('../data/consent');
const ADS_CONFIG = require('../data/ads');

/* Site-wide configuration. Override the origin at build time with SITE_URL. */
const SITE = {
  name: 'Weekly Delight',
  /* Says what the site holds and nothing it cannot back. It used to say each
     recipe was "tested", which no record supports. */
  tagline: `${recipeCount} well-known recipes from around the world, explained step by step`,
  /* The live domain. Every canonical link, Open Graph URL, sitemap entry and
     JSON-LD @id on the site is built from this, so it has to be the address
     people actually reach — it pointed at a Netlify subdomain that returns 404,
     which told search engines the canonical version of every page was a URL
     that does not exist. */
  origin: (process.env.SITE_URL || 'https://weeklydelight.com').replace(/\/$/, ''),
  base: process.env.BASE_PATH || '/',
  locale: 'en_GB',
  /* No social profile is listed. One was published as Organization.sameAs and
     twitter:site without any record that the account exists or belongs to the
     site; add a handle here only once it does. */
  twitter: null,
  /* One person writes this site. The name here is the byline on every recipe's
     JSON-LD and the <meta name="author"> on every page, so it has to be true —
     it said "The Weekly Delight Test Kitchen", which described a team that does
     not exist. */
  author: 'Turab',
  /* Published as Organization.foundingDate only when set. It said 2019, and
     nothing in the project supports that: the hosting account was created in
     August 2026 and the repository's history starts in September 2026. Set
     it to the real year if the site existed earlier somewhere else. */
  founded: null,
  /* Who serves the site and its email, named on the privacy and contact pages
     because the contact form's messages pass through them. .htaccess is the
     live host's configuration; change this if the site moves. */
  host: { name: 'Hostinger', privacy: 'https://www.hostinger.com/legal/privacy-policy' }
};

/**
 * The Google Analytics tag, or nothing at all.
 *
 * Two tags, both external. Google supplies the second as an inline block, but
 * this site's own output carries no inline script — see the rule in
 * tools/check.js — so the bootstrap lives in assets/js/analytics.js and takes
 * the measurement ID from a data attribute here.
 */
function analyticsTag() {
  if (!ANALYTICS.enabled || !ANALYTICS.measurementId) return '';
  const id = ANALYTICS.measurementId;
  /* With consent gating on, nothing analytics-related is written into the page.
     The measurement ID is handed to consent.js instead, which loads gtag only
     after somebody agrees. */
  if (CONSENT.enabled) return '';
  return `<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=${id}"></script>
<script src="${assetUrl('js/analytics.js')}" data-ga-id="${id}" defer></script>`;
}

/**
 * The consent script, which is also the loader for everything it gates.
 *
 * It carries the analytics ID and the two ad-script URLs on data attributes:
 * they are inert there, and this is the only place on the page they appear
 * until a reader agrees.
 */
function consentTag() {
  if (!CONSENT.enabled) return '';
  const ga = ANALYTICS.enabled ? ANALYTICS.measurementId : '';
  const ads = ADS_CONFIG.enabled ? ADS_CONFIG : { popunder: '', socialBar: '' };
  return `<script src="${assetUrl('js/consent.js')}"
        data-version="${CONSENT.version}" data-days="${CONSENT.rememberDays}"
        data-base="${SITE.base}"
        data-ga="${esc(ga || '')}"
        data-ad-popunder="${esc(ads.popunder || '')}"
        data-ad-social="${esc(ads.socialBar || '')}" defer></script>`;
}

/* Fonts are self-hosted (see the @font-face block in assets/css/critical.css).
   Only the two latin faces are preloaded; the latin-ext ones load on demand. */
const FONT_PRELOADS = ['inter-latin.woff2', 'playfair-latin.woff2'];

/* A URL for a file under src/assets with a short content hash on the end.
   The hash is what makes a long cache lifetime safe: when a file changes its
   URL changes, so nobody is left holding a stale stylesheet or script. */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const ASSET_HASHES = new Map();
function assetUrl(rel) {
  if (!ASSET_HASHES.has(rel)) {
    const file = path.join(__dirname, '..', 'assets', rel);
    ASSET_HASHES.set(rel, crypto.createHash('md5').update(fs.readFileSync(file)).digest('hex').slice(0, 8));
  }
  return `${SITE.base}assets/${rel}?v=${ASSET_HASHES.get(rel)}`;
}

/* ------------------------------------------------------------------ icons */
const ICONS = {
  clock: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  users: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 19v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 19v-2a4 4 0 0 0-3-3.9"/><path d="M16 3.1a4 4 0 0 1 0 7.8"/></svg>',
  gauge: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21a9 9 0 1 1 9-9"/><path d="M12 12l4-3"/></svg>',
  globe: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18"/></svg>',
  heart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1L12 21l7.7-7.6 1.1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>',
  search: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
  sun: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
  moon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>',
  menu: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  print: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9V3h12v6"/><rect x="3" y="9" width="18" height="8" rx="2"/><path d="M6 15h12v6H6z"/></svg>',
  chef: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 18h12v3H6z"/><path d="M7 18v-4a5 5 0 0 1-1-9.9A4 4 0 0 1 12 3a4 4 0 0 1 6 1.1A5 5 0 0 1 17 14v4"/></svg>',
  arrowUp: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg>',
  jump: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12l7 7 7-7"/></svg>'
};

/* --------------------------------------------------------------- header */
function header(active, categories) {
  const catLinks = Object.keys(CATEGORIES).map(name =>
    `<a href="${SITE.base}categories/${slug(name)}/">${esc(name)}<span>${esc(categories[name] || 0)} recipes</span></a>`
  ).join('');

  return `<header class="site-header">
  <div class="wrap header-inner">
    <a class="brand" href="${SITE.base}" aria-label="${esc(SITE.name)} home">
      <span class="brand-mark" aria-hidden="true">WD</span>Weekly<em>Delight</em>
    </a>

    <button class="icon-btn nav-toggle" id="nav-toggle" type="button"
            aria-expanded="false" aria-controls="main-nav" aria-label="Open menu">${ICONS.menu}</button>

    <nav class="main-nav" id="main-nav" aria-label="Primary">
      <a href="${SITE.base}recipes/"${active === 'recipes' ? ' aria-current="page"' : ''}>All Recipes</a>
      <div class="nav-item">
        <button class="nav-trigger" type="button" aria-expanded="false"
                aria-controls="nav-categories">Categories</button>
        <div class="nav-panel" id="nav-categories">${catLinks}</div>
      </div>
      <a href="${SITE.base}cuisines/"${active === 'cuisines' ? ' aria-current="page"' : ''}>Cuisines</a>
      <a href="${SITE.base}ingredients/"${active === 'ingredients' ? ' aria-current="page"' : ''}>Ingredients</a>
      <a href="${SITE.base}search/"${active === 'search' ? ' aria-current="page"' : ''}>Search</a>
      <a href="${SITE.base}favourites/"${active === 'favourites' ? ' aria-current="page"' : ''}>Saved <span data-fav-count></span></a>
      <a href="${SITE.base}about/"${active === 'about' ? ' aria-current="page"' : ''}>About</a>
      <a href="${SITE.base}contact/"${active === 'contact' ? ' aria-current="page"' : ''}>Contact</a>
    </nav>

    <div class="header-actions">
      <div class="search-shell header-search">
        ${ICONS.search}
        <label class="sr-only" for="header-search">Search recipes</label>
        <input type="search" id="header-search" placeholder="Search ${recipeCount} recipes…" autocomplete="off"
               role="combobox" aria-expanded="false" aria-controls="header-ac" aria-autocomplete="list" data-search>
        <div class="autocomplete" id="header-ac" role="listbox" aria-label="Search suggestions" hidden></div>
      </div>
      <button class="icon-btn" type="button" data-theme-toggle aria-pressed="false" aria-label="Switch to dark mode">
        <span class="theme-sun">${ICONS.sun}</span>
      </button>
    </div>
  </div>
</header>`;
}

function slug(value) {
  return String(value).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

/* --------------------------------------------------------------- footer */
function footer(topCuisines) {
  const year = new Date().getFullYear();
  const cuisineLinks = topCuisines.slice(0, 6).map(c =>
    `<li><a href="${SITE.base}cuisines/${slug(c)}/">${esc(c)}</a></li>`).join('');
  const catLinks = Object.keys(CATEGORIES).slice(0, 6).map(c =>
    `<li><a href="${SITE.base}categories/${slug(c)}/">${esc(c)}</a></li>`).join('');

  return `<footer class="site-footer">
  <div class="wrap">
    <div class="footer-grid">
      <div>
        <a class="brand" href="${SITE.base}"><span class="brand-mark" aria-hidden="true">WD</span>Weekly<em>Delight</em></a>
        <p style="margin-top:1rem;max-width:34ch">${recipeCount} well-known dishes from around the world, written down with the reasons behind every step. <a href="${SITE.base}about/#how-checked">How the recipes are made and checked</a>.</p>
      </div>
      <div>
        <h3>Explore</h3>
        <ul>
          <li><a href="${SITE.base}recipes/">All recipes</a></li>
          <li><a href="${SITE.base}categories/">Categories</a></li>
          <li><a href="${SITE.base}cuisines/">Cuisines</a></li>
          <li><a href="${SITE.base}ingredients/">Ingredients</a></li>
          <li><a href="${SITE.base}search/">Search</a></li>
          <li><a href="${SITE.base}site-directory/">Site Directory</a></li>
          <li><a href="${SITE.base}favourites/">Saved recipes</a></li>
        </ul>
      </div>
      <div><h3>Categories</h3><ul>${catLinks}</ul></div>
      <div><h3>Cuisines</h3><ul>${cuisineLinks}</ul></div>
    </div>
    <div class="footer-bottom">
      <span>&copy; ${year} ${esc(SITE.name)}.</span>
      <span><a href="${SITE.base}about/">About</a> &middot; <a href="${SITE.base}contact/">Contact</a> &middot; <a href="${SITE.base}privacy/">Privacy</a>${CONSENT.enabled ? ` &middot; <a href="#" data-consent-reopen>Cookie settings</a>` : ''} &middot; <a href="${SITE.base}site-directory/">Site Directory</a> &middot; <a href="${SITE.base}sitemap-index.xml">Sitemap</a></span>
    </div>
  </div>
</footer>`;
}

/* ---------------------------------------------------------------- shell */
/**
 * @param {object} page
 *  title, description, path (e.g. "recipes/pad-thai/"), body,
 *  active, image, imageAlt, schema (array), bodyClass, scripts (array),
 *  categories, cuisines, noindex
 *
 * Every page gets a native banner above and below its content. A page that
 * places its own slots in better positions sets `ownAdSlots: true` to
 * suppress both, so it does not end up with four.
 */
function layout(page) {
  /* The inline critical CSS is what paints the first screen before the
     stylesheet arrives. A page that forgets to pass it used to be built with
     <style>undefined</style> (privacy, the ingredients index and the contact
     confirmation were), so say so here instead of shipping it. */
  if (typeof page.criticalCss !== 'string' || !page.criticalCss.trim()) {
    throw new Error(`layout(): no criticalCss for "${page.path || page.title}" — pass ctx.criticalCss`);
  }
  const url = SITE.origin + SITE.base + (page.path || '');
  const image = page.image || `${SITE.origin}${SITE.base}assets/img/og-default.jpg`;
  /* Sized to the sixty characters a result shows, with at most one hook and
     the brand dropped before the page's own name is. See ../lib/seo.js. */
  const title = page.path
    ? pageTitle(page.title, SITE.name, page.titleHooks)
    : `${SITE.name} — ${recipeCount} Famous Recipes Explained`;

  const schemaBlocks = (page.schema || [])
    .map(s => `<script type="application/ld+json">${jsonLd(s)}</script>`).join('\n');

  const scripts = ['app.js'].concat(page.scripts || [])
    .map(s => `<script src="${assetUrl('js/' + s)}" defer></script>`).join('\n');

  return `<!doctype html>
<html lang="en-GB" data-theme="light">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(page.description)}">
${page.keywords ? `<meta name="keywords" content="${esc(forMeta(page.keywords).join(', '))}">` : ''}
<link rel="canonical" href="${esc(url)}">
<link rel="alternate" hreflang="en-GB" href="${esc(url)}">
<link rel="alternate" hreflang="x-default" href="${esc(url)}">
${page.noindex ? '<meta name="robots" content="noindex, follow">' : '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">'}
<meta name="author" content="${esc(SITE.author)}">
<meta name="theme-color" content="#fbf7f0">
<meta name="color-scheme" content="light dark">

<!-- Open Graph -->
<meta property="og:type" content="${page.ogType || 'website'}">
<meta property="og:site_name" content="${esc(SITE.name)}">
<meta property="og:locale" content="${SITE.locale}">
<meta property="og:title" content="${esc(page.title)}">
<meta property="og:description" content="${esc(page.description)}">
<meta property="og:url" content="${esc(url)}">
<meta property="og:image" content="${esc(image)}">
<meta property="og:image:alt" content="${esc(page.imageAlt || page.title)}">
${page.published ? `<meta property="article:published_time" content="${esc(page.published)}">` : ''}
${page.modified ? `<meta property="article:modified_time" content="${esc(page.modified)}">` : ''}
${page.section ? `<meta property="article:section" content="${esc(page.section)}">` : ''}
<meta property="og:image:width" content="${page.imageWidth || 800}">
<meta property="og:image:height" content="${page.imageHeight || 600}">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
${SITE.twitter ? `<meta name="twitter:site" content="${SITE.twitter}">` : ''}
<meta name="twitter:title" content="${esc(page.title)}">
<meta name="twitter:description" content="${esc(page.description)}">
<meta name="twitter:image" content="${esc(image)}">
<meta name="twitter:image:alt" content="${esc(page.imageAlt || page.title)}">
${(page.cardFacts || []).map(([label, data], i) =>
  `<meta name="twitter:label${i + 1}" content="${esc(label)}">\n` +
  `<meta name="twitter:data${i + 1}" content="${esc(data)}">`).join('\n')}

<link rel="manifest" href="${SITE.base}manifest.json">
<link rel="icon" href="${SITE.base}assets/img/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="${SITE.base}assets/img/icon-192.png">
<link rel="alternate" type="application/rss+xml" title="${esc(SITE.name)}" href="${SITE.base}feed.xml">

${FONT_PRELOADS.map(f => `<link rel="preload" href="${SITE.base}assets/fonts/${f}" as="font" type="font/woff2" crossorigin>`).join('\n')}

<style>${page.criticalCss}</style>

<!--
  The stylesheet is render-blocking on purpose. It used to be parked at
  media="print" and promoted once loaded, which painted the first frame from
  the critical CSS alone and then re-laid-out the whole page when the rest
  arrived: a layout shift of 0.87 on the home page and 0.99 on recipes under a
  throttled connection. At 57 KB it costs one round trip; the shift cost most
  of the performance score.
-->
<link rel="stylesheet" href="${assetUrl('css/main.css')}">
${page.preload ? page.preload.map(p => `<link rel="preload" href="${p.href}" as="${p.as}"${p.type ? ` type="${p.type}"` : ''}${p.fetchpriority ? ` fetchpriority="${p.fetchpriority}"` : ''}${p.crossorigin ? ' crossorigin' : ''}>`).join('\n') : ''}

<!-- Applies the saved theme before paint and promotes the stylesheets above. -->
<script src="${assetUrl('js/theme.js')}"></script>
${schemaBlocks}
${analyticsTag()}
</head>
<body class="${page.bodyClass || ''}" data-base="${SITE.base}">
<a class="skip-link" href="#main">Skip to content</a>
${header(page.active, page.categories || {})}
<main id="main">
<div class="wrap">${ads.bannerSmall('Advertisement', SITE.base)}</div>
${page.ownAdSlots ? '' : `<div class="wrap">${ads.nativeBanner(0, 'Advertisement at the top of the page', SITE.base)}</div>`}
${page.body}
${page.ownAdSlots ? '' : `<div class="wrap">${ads.nativeBanner(1, 'Advertisement at the bottom of the page', SITE.base)}</div>`}
<!--
  The 300x250 banner, emitted here rather than in each page template, because
  "every page" is a claim only the layout can actually keep: a per-template
  placement is one forgotten call away from a whole section of the site
  carrying no unit, which is exactly the failure tools/check.js was written
  for. Outside the ownAdSlots test on purpose — the recipe and home templates
  place their own native banners, and this is meant to reach them too.
-->
<div class="wrap">${ads.banner('Advertisement', SITE.base)}</div>
</main>
${footer(page.cuisines || [])}
<div class="toast" id="toast" role="status" aria-live="polite"></div>
<button class="back-to-top" id="back-to-top" type="button" aria-label="Back to top">${ICONS.arrowUp}</button>
${scripts}
<!--
  The ad units load at the end of the body rather than in the head. They were
  async already, so they were not blocking the parser, but a third-party script
  in the head is still fetched and executed while the document Googlebot needs
  is being assembled. Nothing either unit does needs to happen before the
  content exists, so neither is worth putting in front of it.

  There is no exception any more. One tag used to sit at the top of the head,
  because its network asked for that placement; it has been removed, and
  tools/check.js now fails any third-party script in <head> bar Google's gtag.
-->
${ads.popunder()}
${ads.socialBar()}
${ads.loaderTag(assetUrl('js/ad-loader.js'))}
${consentTag()}
</body>
</html>`;
}

/* ------------------------------------------------------------ card partial
   `variant` controls whether the lazy-loading hints are set for
   above-the-fold (eager) or below-the-fold (lazy) rendering. */
function card(recipe, options = {}) {
  const img = recipe.imageData;
  const href = `${SITE.base}recipes/${recipe.slug}/`;
  const eager = options.eager;
  const alt = recipe.imageAlt;

  const media = img
    ? `<picture>
        <source srcset="${SITE.base}assets/img/recipes/${img.file}.webp" type="image/webp">
        <img src="${SITE.base}assets/img/recipes/${img.file}.jpg" alt="${esc(alt)}"
             width="800" height="600" data-fade data-title="${esc(recipe.title)}"
             data-ph-a="${img.color}" data-ph-b="#8c5a3c"
             ${eager ? 'loading="eager" fetchpriority="high"' : 'loading="lazy"'} decoding="async">
       </picture>`
    : `<div class="img-fallback" role="img" aria-label="${esc(alt)}"><span>${esc(recipe.title)}</span></div>`;

  const badges = [`<span class="badge badge--glass">${esc(recipe.cuisine)}</span>`];
  if (recipe.badges.includes('editors')) badges.push('<span class="badge badge--solid">Editor’s Pick</span>');
  else if (recipe.badges.includes('trending')) badges.push('<span class="badge badge--brass">Featured</span>');

  return `<article class="card${options.reveal === false ? '' : ' reveal'}"${options.delay ? ` data-delay="${options.delay}"` : ''}>
  <div class="card-media" style="background:${img ? img.color : 'var(--bg-sunken)'}">
    ${media}
    <div class="card-badges">${badges.join('')}</div>
    <button class="fav-btn" type="button" data-slug="${recipe.slug}" data-title="${esc(recipe.title)}"
            aria-pressed="false" aria-label="Save ${esc(recipe.title)} to favourites">${ICONS.heart}</button>
    <div class="quick-view">
      <dl>
        <div><dt>Prep</dt><dd>${recipe.prep}m</dd></div>
        <div><dt>Cook</dt><dd>${recipe.cook}m</dd></div>
        <div><dt>Serves</dt><dd>${recipe.servings}</dd></div>
      </dl>
      <a class="btn btn--light btn--sm" href="${href}" aria-label="Quick view: ${esc(recipe.title)}">Quick view</a>
    </div>
  </div>
  <div class="card-body">
    <span class="card-kicker">${esc(recipe.category)}</span>
    <h3><a href="${href}">${esc(recipe.title)}</a></h3>
    <p>${esc(recipe.cardBlurb)}</p>
    <div class="card-foot">
      ${starsHtml(recipe.rating, recipe.reviews)}
      <span class="card-meta">${ICONS.clock}${compactTime(recipe.elapsedTime, recipe.elapsedMax)} <i>&middot;</i> ${esc(recipe.difficulty)}</span>
    </div>
  </div>
</article>`;
}

/* ------------------------------------------------------- shared partials */
/**
 * The newsletter block.
 *
 * This said "One great recipe, every Friday" and "Join 48,000 home cooks",
 * on all 794 pages, for a letter that does not exist and a subscriber count
 * that was invented. The form has no server behind it: an address typed into it
 * goes into the reader's own browser storage, where it is of no use to anybody,
 * and is never sent.
 *
 * A made-up number used to persuade somebody to hand over their email address
 * is the worst of the fabrications this site carried, so the copy now says what
 * is true and the form is gone until there is somewhere for it to post to.
 * Wiring it up — Netlify Forms needs one attribute, since the site is already
 * hosted there — is what turns this back into a signup box.
 */
function newsletter(id = 'newsletter') {
  /* What used to stand here said there was no newsletter, and that the recipe index was sorted
     newest first, which it is not (it opens in the suggested order). What a returning reader can
     actually do is keep recipes, see the newest ones, or start from what is in the fridge. */
  return `<section class="newsletter reveal" id="${id}" aria-labelledby="${id}-title">
  <h2 id="${id}-title">Keep the recipes you want to come back to</h2>
  <p>Press the heart on any recipe and it waits on your <a href="${SITE.base}favourites/">Saved recipes</a> page, in this browser, with no account and nothing sent anywhere. To see what has been added lately, open the <a href="${SITE.base}recipes/?sort=newest">recipe index with the newest first</a>, or start from an <a href="${SITE.base}ingredients/">ingredient you already have</a>.</p>
</section>`;
}

function breadcrumbs(trail) {
  const items = trail.map((item, i) => {
    const last = i === trail.length - 1;
    return `<li>${last ? `<span aria-current="page">${esc(item.name)}</span>` : `<a href="${item.url}">${esc(item.name)}</a>`}</li>`;
  }).join('');
  return `<nav class="breadcrumbs" aria-label="Breadcrumb"><div class="wrap"><ol>${items}</ol></div></nav>`;
}

function breadcrumbSchema(trail) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      /* The last crumb is the page itself; without a URL of its own it is
         left out rather than pointed at the home page. */
      ...(item.url ? { item: item.url.startsWith('http') ? item.url : SITE.origin + item.url } : {})
    }))
  };
}

module.exports = { SITE, ICONS, layout, card, newsletter, breadcrumbs, breadcrumbSchema, slug, header, footer };
