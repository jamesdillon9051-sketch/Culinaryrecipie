'use strict';
const { esc, jsonLd, humanTime, starsHtml, CUISINES, CATEGORIES } = require('../lib/util');

/* Site-wide configuration. Override the origin at build time with SITE_URL. */
const SITE = {
  name: 'CulinaryVault',
  tagline: 'The world\'s 200 most famous recipes, tested and explained',
  origin: (process.env.SITE_URL || 'https://culinaryvault.netlify.app').replace(/\/$/, ''),
  base: process.env.BASE_PATH || '/',
  locale: 'en_GB',
  twitter: '@culinaryvault',
  author: 'The CulinaryVault Test Kitchen',
  founded: 2019
};

const FONT_CSS = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800' +
                 '&family=Inter:wght@400;500;600;700&display=swap';

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
      <span class="brand-mark" aria-hidden="true">CV</span>Culinary<em>Vault</em>
    </a>

    <button class="icon-btn nav-toggle" id="nav-toggle" type="button"
            aria-expanded="false" aria-controls="main-nav" aria-label="Open menu">${ICONS.menu}</button>

    <nav class="main-nav" id="main-nav" aria-label="Primary">
      <a href="${SITE.base}recipes/"${active === 'recipes' ? ' aria-current="page"' : ''}>All Recipes</a>
      <div class="nav-item">
        <button class="nav-trigger" type="button" aria-expanded="false">Categories</button>
        <div class="nav-panel">${catLinks}</div>
      </div>
      <a href="${SITE.base}cuisines/"${active === 'cuisines' ? ' aria-current="page"' : ''}>Cuisines</a>
      <a href="${SITE.base}search/"${active === 'search' ? ' aria-current="page"' : ''}>Search</a>
      <a href="${SITE.base}favourites/"${active === 'favourites' ? ' aria-current="page"' : ''}>Saved <span data-fav-count></span></a>
      <a href="${SITE.base}about/"${active === 'about' ? ' aria-current="page"' : ''}>About</a>
      <a href="${SITE.base}contact/"${active === 'contact' ? ' aria-current="page"' : ''}>Contact</a>
    </nav>

    <div class="header-actions">
      <div class="search-shell header-search">
        ${ICONS.search}
        <label class="sr-only" for="header-search">Search recipes</label>
        <input type="search" id="header-search" placeholder="Search 200 recipes…" autocomplete="off"
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
        <a class="brand" href="${SITE.base}"><span class="brand-mark" aria-hidden="true">CV</span>Culinary<em>Vault</em></a>
        <p style="margin-top:1rem;max-width:34ch">Two hundred of the world's most-cooked dishes, tested in our kitchen and written down properly — with the reasons behind every step.</p>
      </div>
      <div>
        <h3>Explore</h3>
        <ul>
          <li><a href="${SITE.base}recipes/">All recipes</a></li>
          <li><a href="${SITE.base}categories/">Categories</a></li>
          <li><a href="${SITE.base}cuisines/">Cuisines</a></li>
          <li><a href="${SITE.base}search/">Search</a></li>
          <li><a href="${SITE.base}favourites/">Saved recipes</a></li>
        </ul>
      </div>
      <div><h3>Categories</h3><ul>${catLinks}</ul></div>
      <div><h3>Cuisines</h3><ul>${cuisineLinks}</ul></div>
    </div>
    <div class="footer-bottom">
      <span>&copy; ${year} ${esc(SITE.name)}. Recipes tested in our own kitchen.</span>
      <span><a href="${SITE.base}about/">About</a> &middot; <a href="${SITE.base}contact/">Contact</a> &middot; <a href="${SITE.base}sitemap.xml">Sitemap</a></span>
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
 */
function layout(page) {
  const url = SITE.origin + SITE.base + (page.path || '');
  const image = page.image || `${SITE.origin}${SITE.base}assets/img/og-default.jpg`;
  /* Keep titles under ~65 characters so Google does not truncate them. */
  const title = page.path ? `${page.title} | ${SITE.name}` : `${SITE.name} — 200 Famous Recipes, Tested`;

  const schemaBlocks = (page.schema || [])
    .map(s => `<script type="application/ld+json">${jsonLd(s)}</script>`).join('\n');

  const scripts = ['app.js'].concat(page.scripts || [])
    .map(s => `<script src="${SITE.base}assets/js/${s}" defer></script>`).join('\n');

  return `<!doctype html>
<html lang="en-GB" data-theme="light">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(page.description)}">
${page.keywords ? `<meta name="keywords" content="${esc(page.keywords.join(', '))}">` : ''}
<link rel="canonical" href="${esc(url)}">
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
<meta property="og:image:width" content="800">
<meta property="og:image:height" content="600">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="${SITE.twitter}">
<meta name="twitter:title" content="${esc(page.title)}">
<meta name="twitter:description" content="${esc(page.description)}">
<meta name="twitter:image" content="${esc(image)}">
<meta name="twitter:image:alt" content="${esc(page.imageAlt || page.title)}">

<link rel="manifest" href="${SITE.base}manifest.json">
<link rel="icon" href="${SITE.base}assets/img/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="${SITE.base}assets/img/icon-192.png">
<link rel="alternate" type="application/rss+xml" title="${esc(SITE.name)}" href="${SITE.base}feed.xml">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<style>${page.criticalCss}</style>

<!--
  Stylesheets load without blocking the first paint: each is parked at
  media="print" and promoted to media="all" by theme.js once it has loaded.
  The <noscript> copies cover visitors with JavaScript disabled.
  No inline onload handlers, so script-src needs no 'unsafe-inline'.
-->
<link rel="preload" href="${SITE.base}assets/css/main.css" as="style">
<link rel="stylesheet" href="${SITE.base}assets/css/main.css" media="print" data-async-style>
<link rel="stylesheet" href="${FONT_CSS}" media="print" data-async-style>
<noscript>
  <link rel="stylesheet" href="${SITE.base}assets/css/main.css">
  <link rel="stylesheet" href="${FONT_CSS}">
</noscript>
${page.preload ? page.preload.map(p => `<link rel="preload" href="${p.href}" as="${p.as}"${p.type ? ` type="${p.type}"` : ''}${p.crossorigin ? ' crossorigin' : ''}>`).join('\n') : ''}

<!-- Applies the saved theme before paint and promotes the stylesheets above. -->
<script src="${SITE.base}assets/js/theme.js"></script>
${schemaBlocks}
</head>
<body class="${page.bodyClass || ''}" data-base="${SITE.base}">
<a class="skip-link" href="#main">Skip to content</a>
${header(page.active, page.categories || {})}
<main id="main">
${page.body}
</main>
${footer(page.cuisines || [])}
<div class="toast" id="toast" role="status" aria-live="polite"></div>
<button class="back-to-top" id="back-to-top" type="button" aria-label="Back to top">${ICONS.arrowUp}</button>
${scripts}
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
  else if (recipe.badges.includes('trending')) badges.push('<span class="badge badge--brass">Trending</span>');

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
      <a class="btn btn--light btn--sm" href="${href}">Quick view</a>
    </div>
  </div>
  <div class="card-body">
    <span class="card-kicker">${esc(recipe.category)}</span>
    <h3><a href="${href}">${esc(recipe.title)}</a></h3>
    <p>${esc(recipe.cardBlurb)}</p>
    <div class="card-foot">
      ${starsHtml(recipe.rating, recipe.reviews)}
      <span class="card-meta">${ICONS.clock}${recipe.totalTime} min <i>&middot;</i> ${esc(recipe.difficulty)}</span>
    </div>
  </div>
</article>`;
}

/* ------------------------------------------------------- shared partials */
function newsletter(id = 'newsletter') {
  return `<section class="newsletter reveal" id="${id}" aria-labelledby="${id}-title">
  <h2 id="${id}-title">One great recipe, every Friday</h2>
  <p>Join 48,000 home cooks. Each week we send one thoroughly tested recipe, the science behind why it works, and what to drink with it. No spam, unsubscribe in one click.</p>
  <form data-newsletter novalidate>
    <label class="sr-only" for="${id}-email">Email address</label>
    <input type="email" id="${id}-email" name="email" placeholder="you@example.com" required autocomplete="email">
    <button class="btn btn--light" type="submit">Subscribe free</button>
  </form>
  <p class="form-status" role="status" hidden></p>
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
      item: SITE.origin + (item.url || SITE.base)
    }))
  };
}

module.exports = { SITE, ICONS, layout, card, newsletter, breadcrumbs, breadcrumbSchema, slug, header, footer };
