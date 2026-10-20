'use strict';
const { esc, humanTime, compactTime, starsHtml, CUISINES, CATEGORIES, DIET_TAGS, plural, isIllustration } = require('../lib/util');
const { faqSchema } = require('../lib/faq');
const { recipeCount, cuisineCount, imageCount, creditedImageCount,
        commonsImageCount, otherArchiveImageCount, photoCount, heroPhotoFileCount, processPhotoFileCount,
        publicDomainImageCount, shareAlikeImageCount, stockImageCount, stockSources,
        attributionOnlyImageCount, illustrationCount,
        placeholderCount } = require('../data/stats');
const ads = require('./ads');
const CONSENT = require('../data/consent');
const { SITE, ICONS, layout, card, newsletter, breadcrumbs, breadcrumbSchema, slug } = require('./layout');

/* --------------------------------------------------------------- helpers */

function heroSearch(id, placeholder) {
  return `<div class="search-shell">
    ${ICONS.search}
    <label class="sr-only" for="${id}">Search recipes</label>
    <input type="search" id="${id}" placeholder="${esc(placeholder)}" autocomplete="off"
           role="combobox" aria-expanded="false" aria-controls="${id}-ac" aria-autocomplete="list" data-search>
    <div class="autocomplete" id="${id}-ac" role="listbox" aria-label="Search suggestions" hidden></div>
  </div>`;
}

function filterSidebar(facets) {
  const group = (title, key, values, counts) => `
    <div class="filter-group">
      <h3>${esc(title)}</h3>
      <div class="filter-list">
        ${values.map(v => `<label class="check">
          <input type="checkbox" data-filter="${key}" value="${esc(v)}">
          <span>${esc(v)}</span><span class="count">${counts[v] || 0}</span>
        </label>`).join('')}
      </div>
    </div>`;

  return `<aside class="filters" aria-label="Filter recipes">
    <h2 class="sr-only">Filters</h2>
    ${group('Category', 'category', Object.keys(CATEGORIES), facets.category)}
    ${group('Cuisine', 'cuisine', facets.cuisineList, facets.cuisine)}
    ${group('Dietary', 'tag', DIET_TAGS, facets.tag)}
    <div class="filter-group">
      <label class="check" title="${esc(DIET_TAGS.filter(t => facets.tagSwap && facets.tagSwap[t]).map(t => `${t}: ${facets.tagSwap[t]} more with a swap`).join('; '))}">
        <input type="checkbox" data-filter-swaps>
        <span>Include recipes that qualify only with a swap</span>
      </label>
      <p class="form-note" style="margin:.35rem 0 0">The dietary counts are recipes that qualify as written. Each recipe page names the swap and labels the diet &ldquo;option&rdquo;. A script checks ingredient names only: it does not certify a recipe free of an allergen.</p>
    </div>
    ${group('Difficulty', 'difficulty', ['Easy', 'Medium', 'Hard'], facets.difficulty)}
    <div class="filter-group">
      <h3>Total time</h3>
      <div class="filter-list">
        ${[15, 30, 45, 60, 120].map(t => `<label class="check">
          <input type="radio" name="time" data-filter="time" value="${t}">
          <span>Under ${t} minutes</span>
          <span class="count">${facets.time[t] || 0}</span>
        </label>`).join('')}
      </div>
    </div>
  </aside>`;
}

/* ------------------------------------------------------------------ home */
function home(ctx) {
  const { recipes, categoryCounts, cuisineCounts, topCuisines } = ctx;
  const pick = slugs => slugs.map(s => recipes.find(r => r.slug === s)).filter(Boolean);

  /* Each recipe appears once on the page: the hero, the picks, the rail, the quick ones, the newest
     and the gallery used to repeat the same dozen dishes from the top of the catalogue. */
  const shown = new Set(['tacos-al-pastor', 'chicken-tikka-masala', 'chocolate-lava-cake']);
  const take = (list, n) => {
    const out = list.filter(r => !shown.has(r.slug)).slice(0, n);
    out.forEach(r => shown.add(r.slug));
    return out;
  };
  const editors = take(recipes.filter(r => r.badges.includes('editors')), 4);
  const trending = take(recipes.filter(r => r.badges.includes('trending')), 8);
  /* Ordered by the editorial weight, not by rating: nothing carries a rating
     until a reader leaves one, so sorting by it put these four in catalogue
     order and called it a ranking. */
  const quick = take(recipes.filter(r => r.elapsedTime <= 30)
    .slice().sort((a, b) => b.popularity - a.popularity), 4);
  const latest = take(recipes.slice().sort((a, b) => b.published - a.published), 4);
  const heroRecipe = recipes.find(r => r.slug === 'tacos-al-pastor') || recipes[0];

  const galleryPicks = take(recipes.filter(r => r.imageData && !isIllustration(r.imageData)), 12);

  const categoryTiles = Object.keys(CATEGORIES).map(name => {
    const sample = recipes.find(r => r.category === name && r.imageData);
    const media = sample
      ? `<picture>
          <source srcset="${SITE.base}assets/img/recipes/${sample.imageData.file}.webp" type="image/webp">
          <img src="${SITE.base}assets/img/recipes/${sample.imageData.file}.jpg" alt="${esc(name)} recipes"
               width="800" height="600" loading="lazy" decoding="async" data-fade>
         </picture>`
      : '';
    return `<a class="tile reveal" href="${SITE.base}categories/${slug(name)}/">
      ${media}
      <span class="tile-label"><strong>${esc(name)}</strong><span>${plural(categoryCounts[name], 'recipe')}</span></span>
    </a>`;
  }).join('');

  const cuisineChips = topCuisines.slice(0, 12).map(name => `
    <a class="cuisine-chip reveal" href="${SITE.base}cuisines/${slug(name)}/">
      <span class="cuisine-flag" aria-hidden="true">${CUISINES[name] ? CUISINES[name].flag : '\u{1F37D}'}</span>
      <span><strong>${esc(name)}</strong><span>${plural(cuisineCounts[name], 'recipe')}</span></span>
    </a>`).join('');

  /* Three dishes for the hero cluster: the strongest photography we have. */
  const heroShots = pick(['tacos-al-pastor', 'chicken-tikka-masala', 'chocolate-lava-cake'])
    .filter(r => r.imageData)
    .concat(recipes.filter(r => r.imageData))
    .slice(0, 3);

  const shot = (r, i) => `<a class="hero-shot" href="${SITE.base}recipes/${r.slug}/"
       style="background:${r.imageData.color}" aria-label="${esc(r.title)}">
    <picture>
      <source srcset="${SITE.base}assets/img/recipes/${r.imageData.file}.webp" type="image/webp">
      <img src="${SITE.base}assets/img/recipes/${r.imageData.file}.jpg" alt="${esc(r.imageAlt)}"
           width="800" height="600" ${i === 0 ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">
    </picture>
    ${i === 0 ? `<span class="hero-chip">${ICONS.clock}${compactTime(r.elapsedTime, r.elapsedMax, !!r.untimed)} &middot; ${esc(r.cuisine)}</span>` : ''}
  </a>`;

  const body = `
<section class="hero" aria-labelledby="hero-title">
  <div class="wrap hero-grid">
    <div class="hero-copy">
      <span class="eyebrow-rule hero-line">${recipeCount} recipes &middot; ${cuisineCount} cuisines</span>
      <h1 id="hero-title" class="hero-line">Recipes worth <em>cooking twice.</em></h1>
      <p class="hero-lede hero-line">Well-known dishes from ${cuisineCount} cuisines, written down with the reason behind every step.</p>
      <div class="hero-line">${heroSearch('hero-search', 'Search by dish, ingredient or cuisine…')}</div>
      <div class="hero-line hero-stats">
        <div><strong>${recipeCount}</strong><span>Recipes</span></div>
        <div><strong>${cuisineCount}</strong><span>Cuisines</span></div>
        <div><strong>${Object.keys(CATEGORIES).length}</strong><span>Meal types</span></div>
      </div>
    </div>
    <div class="hero-cluster" role="group" aria-label="Featured dishes">
      ${heroShots.map(shot).join('')}
    </div>
  </div>
</section>

<div class="wrap">${ads.nativeBanner(0, 'Advertisement below the header', SITE.base)}</div>

<section class="section" aria-labelledby="editors-title">
  <div class="wrap">
    <div class="section-head reveal">
      <div>
        <span class="eyebrow">Editor&rsquo;s Picks</span>
        <h2 id="editors-title">Four classics to start with</h2>
        <p>Well-loved dishes with methods worth reading closely, chosen as a starting point.</p>
      </div>
      <a class="btn btn--ghost" href="${SITE.base}recipes/">All recipes</a>
    </div>
    <div class="bento">${editors.map((r, i) => card(r, { eager: i === 0, delay: i * 70 })).join('')}</div>
  </div>
</section>

<section class="section section--ink" aria-labelledby="trending-title">
  <div class="wrap">
    <div class="section-head reveal">
      <div>
        <span class="eyebrow">To start with</span>
        <h2 id="trending-title">A handful from the archive</h2>
        <p>Press the heart on any card and it waits for you on the Saved page.</p>
      </div>
      <a class="btn btn--ghost" href="${SITE.base}recipes/">See all</a>
    </div>
    <div class="rail">${trending.map((r, i) => card(r, { delay: i * 50 })).join('')}</div>
  </div>
</section>

<section class="section" aria-labelledby="categories-title">
  <div class="wrap">
    <div class="section-head reveal">
      <div>
        <span class="eyebrow">Browse</span>
        <h2 id="categories-title">Start with a category</h2>
        <p>Ten ways in, from a fifteen-minute weeknight plate to a centrepiece worth clearing a Sunday for.</p>
      </div>
      <a class="btn btn--ghost" href="${SITE.base}categories/">All categories</a>
    </div>
    <div class="tile-grid">${categoryTiles}</div>
  </div>
</section>

<div class="wrap">${ads.nativeBanner(1, 'Advertisement between recipe sections', SITE.base)}</div>

<section class="section section--sunken" aria-labelledby="quick-title">
  <div class="wrap">
    <div class="section-head reveal">
      <div>
        <span class="eyebrow">Thirty minutes or less</span>
        <h2 id="quick-title">Fast, and not a compromise</h2>
        <p>Full-flavour cooking that fits a weeknight. Nothing skipped, nothing apologised for.</p>
      </div>
      <a class="btn btn--ghost" href="${SITE.base}recipes/?time=30">All quick recipes</a>
    </div>
    <div class="card-grid">${quick.map((r, i) => card(r, { delay: i * 60 })).join('')}</div>
  </div>
</section>

<section class="section" aria-labelledby="cuisines-title">
  <div class="wrap">
    <div class="section-head reveal">
      <div>
        <span class="eyebrow">Around the world</span>
        <h2 id="cuisines-title">${cuisineCount} cuisines, one table</h2>
        <p>Each cuisine has its own logic, and each recipe explains the technique that makes it work, not just the ingredient list. These are the twelve with the most recipes.</p>
      </div>
      <a class="btn btn--ghost" href="${SITE.base}cuisines/">All cuisines</a>
    </div>
    <div class="cuisine-grid">${cuisineChips}</div>
  </div>
</section>

<section class="section section--sunken" aria-labelledby="latest-title">
  <div class="wrap">
    <div class="section-head reveal">
      <div>
        <span class="eyebrow">Latest Additions</span>
        <h2 id="latest-title">Recently added</h2>
        <p>The newest pages in the collection, by the day each one first appeared on the site.</p>
      </div>
      <a class="btn btn--ghost" href="${SITE.base}recipes/?sort=newest">See what&rsquo;s new</a>
    </div>
    <div class="card-grid">${latest.map((r, i) => card(r, { delay: i * 60 })).join('')}</div>
  </div>
</section>

<section class="section section--sunken" aria-labelledby="gallery-title">
  <div class="wrap">
    <div class="section-head reveal">
      <div>
        <span class="eyebrow">From the collection</span>
        <h2 id="gallery-title">A look through the photographs</h2>
        <p>A scroll through the collection. Every photograph is used under a licence that allows it here, and every photographer is credited on the recipe.${illustrationCount ? ` The ${illustrationCount} dishes no one has photographed under such a licence carry a generated illustration, labelled as one.` : ''}</p>
      </div>
    </div>
    <div class="gallery">
      ${galleryPicks.map(r => `<a href="${SITE.base}recipes/${r.slug}/" data-title="${esc(r.title)}">
        <picture>
          <source srcset="${SITE.base}assets/img/recipes/${r.imageData.file}.webp" type="image/webp">
          <img src="${SITE.base}assets/img/recipes/${r.imageData.file}.jpg" alt="${esc(r.imageAlt)}"
               width="400" height="400" loading="lazy" decoding="async" data-fade>
        </picture>
      </a>`).join('')}
    </div>
  </div>
</section>

<div class="wrap">
  <div class="ornament" aria-hidden="true"><span>&#10022;</span></div>
</div>
<div class="wrap" style="padding:clamp(2.5rem,5vw,4rem) 0 clamp(3rem,7vw,5rem)">${newsletter()}</div>`;

  return layout({
    title: `${SITE.name} — ${SITE.tagline}`,
    description: `${recipeCount} well-known recipes from ${cuisineCount} cuisines, explained: ingredients, a step-by-step method, the reasoning behind it and a cook mode. Free, no sign-up.`,
    keywords: ['famous recipes', 'best recipes in the world',
               'international recipes', 'cooking guide', 'recipes from around the world',
               'world food recipes', 'authentic recipes', 'home cooking',
               'easy dinner recipes', 'classic recipes', 'traditional recipes',
               'free recipe site', 'recipes with step by step instructions',
               'recipes with nutrition information', 'what to cook tonight',
               'cooking for beginners', 'global cuisine recipes'],
    path: '',
    active: 'home',
    /* Slots are placed between the sections above, so the layout must not
       add its own. */
    ownAdSlots: true,
    image: heroRecipe.imageData ? `${SITE.origin}${SITE.base}assets/img/recipes/${heroRecipe.imageData.file}.jpg` : undefined,
    imageAlt: 'A table of dishes from around the world',
    criticalCss: ctx.criticalCss,
    categories: categoryCounts,
    cuisines: topCuisines,
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: SITE.name,
        url: SITE.origin + SITE.base,
        description: SITE.tagline,
        potentialAction: {
          '@type': 'SearchAction',
          target: { '@type': 'EntryPoint', urlTemplate: `${SITE.origin}${SITE.base}search/?q={search_term_string}` },
          'query-input': 'required name=search_term_string'
        }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: SITE.name,
        url: SITE.origin + SITE.base,
        logo: `${SITE.origin}${SITE.base}assets/img/icon-192.png`,
        /* Only facts the project can back. foundingDate said 2019 and sameAs
           named a Twitter account with no record behind either. */
        ...(SITE.founded ? { foundingDate: String(SITE.founded) } : {}),
        ...(SITE.twitter ? { sameAs: [`https://twitter.com/${SITE.twitter.replace('@', '')}`] } : {})
      },
      {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Editor’s Picks',
        itemListElement: editors.map((r, i) => ({
          '@type': 'ListItem', position: i + 1, name: r.title,
          url: `${SITE.origin}${SITE.base}recipes/${r.slug}/`
        }))
      }
    ],
    body
  });
}

/* ------------------------------------------------------- recipe directory */
function directory(ctx, options) {
  const trail = [{ name: 'Home', url: SITE.base }].concat(options.trail || [{ name: 'Recipes' }]);

  const body = `
${breadcrumbs(trail)}
<div class="wrap section" data-directory="${options.mode || 'all'}" style="padding-top:1rem">
  <header class="section-head">
    <div>
      <span class="eyebrow">${esc(options.eyebrow)}</span>
      <h1>${esc(options.heading)}</h1>
      <p class="lede">${esc(options.intro)}</p>
      ${options.mode === 'all' ? `<p>Prefer a plain list? Every recipe is also in the <a href="${SITE.base}site-directory/">site directory</a>, grouped by category.</p>` : ''}
    </div>
  </header>

  <form role="search" style="margin-bottom:.6rem" data-search-form>
    <div class="search-shell" style="max-width:none">
      ${ICONS.search}
      <label class="sr-only" for="directory-query">Search within these recipes</label>
      <input type="search" id="directory-query" placeholder="Search by dish, ingredient or cuisine…" autocomplete="off">
    </div>
    <button type="submit" class="sr-only" tabindex="-1">Search</button>
  </form>
  <p style="margin:0 0 1.5rem;font-size:.9rem;color:var(--text-soft)">
    Looking for something specific? Try
    <a href="${SITE.base}search/">full-site recipe search</a>, or browse by
    <a href="${SITE.base}cuisines/">world cuisine</a>,
    <a href="${SITE.base}categories/">meal type</a> or
    <a href="${SITE.base}ingredients/">main ingredient</a>.
  </p>

  <div class="directory">
    ${filterSidebar(ctx.facets)}
    <div>
      <div class="chip-row" id="active-filters"></div>
      <div class="toolbar">
        <p class="result-count" id="result-count" role="status" aria-live="polite"></p>
        <div>
          <label class="sr-only" for="sort">Sort recipes</label>
          <select id="sort">
            <option value="popular">Suggested order</option>
            ${ctx.recipes.some(r => r.rating) ? '<option value="rating">Highest rated</option>' : ''}
            <option value="quickest">Quickest first</option>
            <option value="newest">Newest first</option>
            <option value="az">A to Z</option>
          </select>
        </div>
      </div>
      <div id="results" class="card-grid">${(options.seed || []).map(r => card(r, { reveal: false })).join('')}</div>
      <div class="load-more" id="load-more" hidden><button type="button" class="btn btn--ghost" id="show-more">Show more recipes</button></div>
    </div>
  </div>

  ${options.index === false ? '' : `<section class="faq" style="margin-top:clamp(2.5rem,6vw,4rem)" aria-labelledby="az-title">
    <h2 id="az-title">Full A&ndash;Z index</h2>
    <details>
      <summary>All ${plural(ctx.recipes.length, 'recipe')}, alphabetically</summary>
      <ul class="az-list">
        ${ctx.recipes.slice().sort((a, b) => a.title.localeCompare(b.title))
          .map(r => `<li><a href="${SITE.base}recipes/${r.slug}/">${esc(r.title)}</a></li>`).join('')}
      </ul>
    </details>
  </section>`}
</div>
<div class="wrap" style="padding-bottom:clamp(3rem,7vw,5rem)">${newsletter('dir-news')}</div>`;

  return layout({
    title: options.title,
    titleHooks: options.titleHooks,
    description: options.description,
    keywords: options.keywords,
    path: options.path,
    active: options.active || 'recipes',
    noindex: options.noindex,
    criticalCss: ctx.criticalCss,
    categories: ctx.categoryCounts,
    cuisines: ctx.topCuisines,
    scripts: ['directory.js'],
    /* The directory is the site's biggest list and carried only a breadcrumb,
       while every taxonomy page beneath it declared a CollectionPage. The
       A-Z index below the grid names every recipe, so the list is on the page
       whether or not the schema says so — this tells a crawler what it is
       looking at. Capped at 30 for the same reason the taxonomy pages are:
       ListItem entries are a summary, not a second copy of the sitemap. */
    /* Search results are rendered in the reader's browser. A directory without
       its server-rendered index must not declare a list of invisible recipes. */
    schema: options.noindex || options.index === false ? [breadcrumbSchema(trail)] : [
      breadcrumbSchema(trail),
      {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: options.heading,
        description: options.description,
        url: SITE.origin + SITE.base + options.path,
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: ctx.recipes.length,
          itemListElement: (options.seed || ctx.recipes).slice(0, 30).map((r, i) => ({
            '@type': 'ListItem', position: i + 1, name: r.title,
            url: `${SITE.origin}${SITE.base}recipes/${r.slug}/`
          }))
        }
      }
    ],
    body
  });
}

/* ------------------------------------------------ taxonomy landing pages */
/**
 * A list of links from a hub to the hubs beneath or beside it. The anchor text
 * is the descriptive name of the page it points at ("Italian dinner recipes"),
 * never "see more".
 */
function hubLinks({ id, heading, links }) {
  if (!links || !links.length) return '';
  return `<nav class="hub-links" aria-labelledby="${id}">
    <h2 id="${id}">${esc(heading)}</h2>
    <ul>${links.map(l => `<li><a href="${l.url}">${esc(l.text)}</a>${l.count ? ` <span>${l.count}</span>` : ''}</li>`).join('')}</ul>
  </nav>`;
}

/* How many recipes a hub shows as full picture cards. The rest are listed by
   name underneath, so every recipe is still linked from its hub without the
   page carrying a picture card for each: the onions hub held 2,316 cards and
   weighed 4.4 MB of HTML before any image loaded. */
const HUB_CARDS = 48;

function taxonomyPage(ctx, options) {
  const trail = [{ name: 'Home', url: SITE.base }].concat(options.trail);
  const carded = options.recipes.slice(0, HUB_CARDS);
  const listed = options.recipes.slice(HUB_CARDS).sort((a, b) => a.title.localeCompare(b.title));
  const body = `
${breadcrumbs(trail)}
<div class="wrap section" style="padding-top:1rem">
  <header class="section-head">
    <div>
      <span class="eyebrow">${esc(options.eyebrow)}</span>
      <h1>${esc(options.heading)}</h1>
      <p class="lede">${esc(options.intro)}</p>
    </div>
    <a class="btn btn--ghost" href="${SITE.base}recipes/">All ${recipeCount} recipes</a>
  </header>

  ${options.extra || ''}

  <section aria-labelledby="tax-list-title">
    <h2 id="tax-list-title" class="sr-only">${esc(options.heading)} — all ${plural(options.recipes.length, 'recipe')}</h2>
    <div class="card-grid" style="margin-top:2rem">
      ${carded.map((r, i) => card(r, { eager: i < 3, delay: (i % 4) * 60 })).join('')}
    </div>
  </section>
  ${listed.length ? `<section class="hub-more" aria-labelledby="tax-more-title">
    <h2 id="tax-more-title">${plural(listed.length, 'more recipe')}, A&ndash;Z</h2>
    <ul class="az-list">${listed.map(r => `<li><a href="${SITE.base}recipes/${r.slug}/">${esc(r.title)}</a></li>`).join('')}</ul>
  </section>` : ''}
</div>
<div class="wrap" style="padding-bottom:clamp(3rem,7vw,5rem)">${newsletter(options.newsId || 'tax-news')}</div>`;

  return layout({
    title: options.title,
    titleHooks: options.titleHooks,
    description: options.description,
    keywords: options.keywords,
    path: options.path,
    active: options.active,
    criticalCss: ctx.criticalCss,
    categories: ctx.categoryCounts,
    cuisines: ctx.topCuisines,
    image: options.recipes[0] && options.recipes[0].imageData
      ? `${SITE.origin}${SITE.base}assets/img/recipes/${options.recipes[0].imageData.file}.jpg` : undefined,
    schema: [
      breadcrumbSchema(trail),
      {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: options.heading,
        description: options.description,
        url: SITE.origin + SITE.base + options.path,
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: options.recipes.length,
          itemListElement: options.recipes.slice(0, 30).map((r, i) => ({
            '@type': 'ListItem', position: i + 1, name: r.title,
            url: `${SITE.origin}${SITE.base}recipes/${r.slug}/`
          }))
        }
      }
    ],
    body
  });
}

/* ------------------------------------------------------- cuisines index */
/**
 * The ingredient index.
 *
 * Built like the cuisine index, with each card borrowing a photograph from the
 * most popular recipe in the hub — a page of named links with no pictures is a
 * sitemap, not a landing page.
 */
function ingredientsIndex(ctx) {
  const trail = [{ name: 'Home', url: SITE.base }, { name: 'Ingredients' }];
  const cards = ctx.hubs.map(hub => {
    const sample = hub.recipes.find(r => r.imageData);
    return `<a class="card reveal" href="${SITE.base}ingredients/${hub.slug}/" style="text-decoration:none">
      <div class="card-media" style="background:${sample && sample.imageData ? sample.imageData.color : 'var(--bg-sunken)'}">
        ${sample ? `<picture>
          <source srcset="${SITE.base}assets/img/recipes/${sample.imageData.file}.webp" type="image/webp">
          <img src="${SITE.base}assets/img/recipes/${sample.imageData.file}.jpg" alt="${esc(hub.name)} recipes"
               width="800" height="600" loading="lazy" decoding="async" data-fade>
        </picture>` : `<div class="img-fallback" role="img" aria-label="${esc(hub.name)}"><span>${esc(hub.name)}</span></div>`}
        <div class="card-badges"><span class="badge badge--glass">${plural(hub.recipes.length, 'recipe')}</span></div>
      </div>
      <div class="card-body">
        <h3>${esc(hub.name)}</h3>
        <p>${esc(hub.blurb)}</p>
      </div>
    </a>`;
  }).join('');

  const body = `
${breadcrumbs(trail)}
<div class="wrap section" style="padding-top:1rem">
  <header class="section-head">
    <div>
      <span class="eyebrow">Ingredients</span>
      <h1>Recipes by ingredient</h1>
      <p class="lede">Start from what is in the fridge. ${plural(ctx.hubs.length, 'ingredient')}, each
        one listing every recipe on the site that genuinely calls for it.</p>
    </div>
    <a class="btn btn--ghost" href="${SITE.base}recipes/">All ${recipeCount} recipes</a>
  </header>
  <section aria-labelledby="ing-list-title">
    <h2 id="ing-list-title" class="sr-only">All ${ctx.hubs.length} ingredients</h2>
    <div class="card-grid" style="margin-top:2rem">${cards}</div>
  </section>
</div>
<div class="wrap" style="padding-bottom:clamp(3rem,7vw,5rem)">${newsletter('ing-news')}</div>`;

  return layout({
    title: 'Recipes by Ingredient',
    description: `Browse ${recipeCount} recipes by their main ingredient — chicken, `
      + `aubergine, chocolate and ${ctx.hubs.length - 3} more, each list checked against the recipe itself. Free to browse.`,
    keywords: ['recipes by ingredient', 'what can i make with', 'cook with what i have',
               'ingredient index', 'leftover ingredient recipes', 'chicken recipes',
               'vegetarian ingredient recipes', 'browse by ingredient', 'recipe ideas by ingredient',
               'what to cook with leftovers', 'store cupboard recipes', 'pantry recipes',
               'use up ingredients', 'recipes with eggs', 'recipes with potatoes',
               'recipes with rice', 'cooking by ingredient', 'find a recipe by ingredient',
               'what to make with what is in the fridge', 'ingredient led recipes',
               'search recipes by ingredient', 'recipes using one ingredient',
               'a to z of ingredients'],
    path: 'ingredients/',
    active: 'ingredients',
    body,
    cuisines: ctx.topCuisines.slice(0, 8),
    criticalCss: ctx.criticalCss,
    schema: [breadcrumbSchema(trail)]
  });
}

function cuisinesIndex(ctx) {
  const trail = [{ name: 'Home', url: SITE.base }, { name: 'Cuisines' }];
  const cards = ctx.topCuisines.map(name => {
    const meta = CUISINES[name] || { flag: '\u{1F37D}', blurb: '' };
    const sample = ctx.recipes.find(r => r.cuisine === name && r.imageData);
    return `<a class="card reveal" href="${SITE.base}cuisines/${slug(name)}/" style="text-decoration:none">
      <div class="card-media" style="background:${sample && sample.imageData ? sample.imageData.color : 'var(--bg-sunken)'}">
        ${sample ? `<picture>
          <source srcset="${SITE.base}assets/img/recipes/${sample.imageData.file}.webp" type="image/webp">
          <img src="${SITE.base}assets/img/recipes/${sample.imageData.file}.jpg" alt="${esc(name)} cooking"
               width="800" height="600" loading="lazy" decoding="async" data-fade>
        </picture>` : `<div class="img-fallback" role="img" aria-label="${esc(name)}"><span>${esc(name)}</span></div>`}
        <div class="card-badges"><span class="badge badge--glass">${plural(ctx.cuisineCounts[name], 'recipe')}</span></div>
      </div>
      <div class="card-body">
        <h3><span style="font-size:1.4rem;margin-right:.4rem" aria-hidden="true">${meta.flag}</span>${esc(name)}</h3>
        <p>${esc(meta.blurb)}</p>
      </div>
    </a>`;
  }).join('');

  const body = `
${breadcrumbs(trail)}
<div class="wrap section" style="padding-top:1rem">
  <header class="section-head">
    <div>
      <span class="eyebrow">Cuisine explorer</span>
      <h1>Twenty-nine cuisines, mapped</h1>
      <p class="lede">Every cuisine on the site, with the number of recipes and what makes each one tick. Start anywhere.</p>
      <p>Want every recipe in one list? Open the <a href="${SITE.base}site-directory/">site directory</a>.</p>
    </div>
  </header>
  <section aria-labelledby="cuisine-list-title">
    <h2 id="cuisine-list-title" class="sr-only">All cuisines</h2>
    <div class="card-grid">${cards}</div>
  </section>
</div>
<div class="wrap" style="padding-bottom:clamp(3rem,7vw,5rem)">${newsletter('cuisines-news')}</div>`;

  return layout({
    title: 'Cuisine Explorer',
    description: `Browse ${recipeCount} recipes across ${cuisineCount} world cuisines — Italian, Japanese, Mexican, Indian, Thai, Middle Eastern and more. Each with ingredients and method.`,
    keywords: ['world cuisines', 'international recipes', 'cuisine guide', 'global cooking',
               'cuisines of the world', 'food by country', 'national dishes',
               'regional cooking', 'authentic world food', 'browse recipes by cuisine',
               'asian recipes', 'european recipes', 'african recipes',
               'latin american recipes', 'middle eastern recipes'],
    path: 'cuisines/',
    active: 'cuisines',
    criticalCss: ctx.criticalCss,
    categories: ctx.categoryCounts,
    cuisines: ctx.topCuisines,
    schema: [breadcrumbSchema(trail)],
    body
  });
}

/* ------------------------------------------------------ categories index */
function categoriesIndex(ctx) {
  const trail = [{ name: 'Home', url: SITE.base }, { name: 'Categories' }];
  const tiles = Object.keys(CATEGORIES).map(name => {
    const sample = ctx.recipes.find(r => r.category === name && r.imageData);
    return `<a class="tile reveal" href="${SITE.base}categories/${slug(name)}/" style="aspect-ratio:4/3">
      ${sample ? `<picture>
        <source srcset="${SITE.base}assets/img/recipes/${sample.imageData.file}.webp" type="image/webp">
        <img src="${SITE.base}assets/img/recipes/${sample.imageData.file}.jpg" alt="${esc(name)} recipes"
             width="800" height="600" loading="lazy" decoding="async" data-fade>
      </picture>` : ''}
      <span class="tile-label">
        <strong>${esc(name)}</strong>
        <span>${ctx.categoryCounts[name]} recipes &middot; ${esc(CATEGORIES[name])}</span>
      </span>
    </a>`;
  }).join('');

  const body = `
${breadcrumbs(trail)}
<div class="wrap section" style="padding-top:1rem">
  <header class="section-head">
    <div>
      <span class="eyebrow">Browse by category</span>
      <h1>Ten ways in</h1>
      <p class="lede">Breakfast through to holiday centrepieces. Each category is filtered further by cuisine, dietary needs, difficulty and time.</p>
    </div>
  </header>
  <div class="tile-grid">${tiles}</div>
</div>
<div class="wrap" style="padding-bottom:clamp(3rem,7vw,5rem)">${newsletter('cats-news')}</div>`;

  return layout({
    title: 'Recipe Categories',
    description: 'Browse Weekly Delight by category: breakfast, lunch, dinner, desserts, appetizers, drinks, baking, healthy, quick meals and holiday specials.',
    keywords: ['recipe categories', 'dinner recipes', 'dessert recipes', 'quick meals',
               'healthy recipes', 'breakfast recipes', 'lunch recipes', 'appetizer recipes',
               'baking recipes', 'drink recipes', 'holiday recipes',
               'browse recipes by category', 'meal ideas', 'weeknight dinner ideas',
               'party food ideas', 'easy baking ideas'],
    path: 'categories/',
    active: 'categories',
    criticalCss: ctx.criticalCss,
    categories: ctx.categoryCounts,
    cuisines: ctx.topCuisines,
    schema: [breadcrumbSchema(trail)],
    body
  });
}

/* ------------------------------------------------------------ about page */
/**
 * The about page's questions, in one place.
 *
 * They used to be written twice — once as markup and once inside the FAQPage
 * schema — and the two copies had drifted: the schema answered "no account
 * required" where the page said "no account", and both still said the site held
 * two hundred recipes long after it held six hundred. A reader saw one text and
 * a crawler was handed another.
 */
const ABOUT_FAQ = [
  { q: 'Are these recipes free?',
    a: `Yes, all ${recipeCount} of them, with no paywall and no account. The site runs on a `
     + 'static host and costs us very little.' },
  { q: 'Why metric weights rather than cups?',
    a: 'Because a cup of flour can vary by 20% depending on how you scoop it, and that is the '
     + 'difference between a good cake and a dense one. We give volume measures for liquids and '
     + 'small quantities where precision matters less.' },
  { q: 'Can I suggest a recipe?',
    a: 'Please do — use the contact form. Suggestions and corrections are read, and a recipe is '
     + 'added once it can be written and checked properly.',
    link: { text: 'contact form', href: `${SITE.base}contact/` } },
  { q: 'Do you store my saved recipes or notes?',
    a: "No. Favourites, ingredient checkboxes and the private ratings and notes you keep on a "
     + "recipe all live in your browser's local storage. Clearing your browser data clears them, "
     + 'and they never reach a server, so other readers cannot see them.' },
  { q: 'Were these recipes tested in a kitchen?',
    a: 'Not as a rule. The recipes follow well-established methods, were drafted with AI assistance '
     + 'and are checked automatically for internal contradictions, but unless a recipe says '
     + 'otherwise it has not been cooked and tested for this site.' }
];

/**
 * The privacy policy.
 *
 * Written from the code rather than from a template. Every claim below was
 * checked against what the site actually does: the four localStorage keys in
 * assets/js/app.js, the one fetch() call it makes, the analytics tag in
 * data/analytics.js and the ad units in data/ads.js. A policy that describes a
 * server this site does not have, or a mailing list it does not run, is worse
 * than none — it is a promise nobody is keeping.
 *
 * It is not legal advice, and it says so. One operator, worldwide
 * readers, advertising and analytics both running: worth having somebody
 * qualified read it.
 */
/**
 * The two pages the contact endpoint renders for a plain (no-JavaScript) form
 * post. They are templates: the build writes them to contact/_pages/, which the
 * server refuses to serve directly, and contact/send.php fills in {{WD_MESSAGE}}.
 *
 * They used to be public static pages (/contact/success/), so anyone who typed
 * or bookmarked that address was told "Message sent" without having sent
 * anything. Now the "sent" page is reached only through a signed redirect from
 * the endpoint, and the old addresses redirect to the form (.htaccess).
 *
 * "Sent" means the mail transport accepted the message. It does not mean the
 * message was read or reached an inbox, and the wording says so.
 */
function contactResultPage(ctx, { sent }) {
  const trail = [{ name: 'Home', url: SITE.base },
                 { name: 'Contact', url: `${SITE.base}contact/` },
                 { name: sent ? 'Message sent' : 'Not sent' }];
  const body = `
${breadcrumbs(trail)}
<div class="wrap section" style="padding-top:1rem">
  <header class="recipe-head">
    <span class="eyebrow">Contact</span>
    <h1>${sent ? 'Your message was sent' : 'Your message was not sent'}</h1>
    <p class="lede">{{WD_MESSAGE}}</p>
  </header>
  <div class="prose" style="max-width:64ch">
    ${sent
      ? `<h2>What happens next</h2>
    <p>There is no promised reply time. If you are expecting an answer and none comes, check your spam folder, because replies from a new address are sometimes filed there.</p>
    <p>Your address is used to reply to you and for nothing else; the <a href="${SITE.base}privacy/">privacy page</a> says what is kept and by whom.</p>
    <p><a class="btn btn--primary" href="${SITE.base}recipes/">Back to the recipes</a></p>`
      : `<h2>Your text</h2>
    <p>Going back with your browser's Back button usually keeps what you typed. Nothing you wrote is stored by this page.</p>
    <p><a class="btn btn--primary" href="${SITE.base}contact/">Back to the contact form</a></p>`}
  </div>
</div>`;

  return layout({
    title: sent ? 'Message sent' : 'Message not sent',
    description: sent ? 'Your message was handed to the mail server.' : 'Your message to Weekly Delight was not sent.',
    path: 'contact/',
    active: 'contact',
    noindex: true,
    body,
    cuisines: ctx.topCuisines.slice(0, 8),
    criticalCss: ctx.criticalCss,
    schema: [breadcrumbSchema(trail)]
  });
}
const contactSentPage = ctx => contactResultPage(ctx, { sent: true });
const contactNotSentPage = ctx => contactResultPage(ctx, { sent: false });

function privacy(ctx) {
  const trail = [{ name: 'Home', url: SITE.base }, { name: 'Privacy' }];
  /* The date the policy text last changed, not the date the site was last
     built. new Date() here meant every rebuild republished the page claiming
     the policy had been updated that day — on 2026-09-11 an image run with no
     bearing on privacy at all moved it, which is how this was noticed. A
     reader checking whether the terms they agreed to have changed is asking a
     question only this line answers, so it has to answer truthfully.

     It is a constant because the honest value cannot be derived from the
     build: nothing in the repository records when the policy was last
     rewritten. Bump it by hand when the text below changes. */
  const updated = '2026-10-17';

  const body = `
${breadcrumbs(trail)}
<div class="wrap section" style="padding-top:1rem">
  <header class="recipe-head">
    <span class="eyebrow">Privacy</span>
    <h1>Privacy &amp; cookies</h1>
    <p class="lede">What this site stores, what it sends elsewhere, and how to stop it. Written in plain language, and short because there is not much to say.</p>
  </header>

  <div class="prose" style="max-width:72ch">
    <p class="form-note">Last updated ${updated}. ${esc(SITE.name)} is run by one person, ${esc(SITE.author)}.</p>

    <h2>The short version</h2>
    <ul>
      <li>There is no account, no login and no database. This is a static site.</li>
      <li>What you save — favourites, your theme, your reviews — stays in your own browser and never reaches me.</li>
      ${CONSENT.enabled
        ? `<li>Nothing is loaded until you choose. Google Analytics and the advertising scripts are not in the page at all until you accept them, and if you refuse or ignore the banner they are never fetched.</li>
      <li>You can change your mind at any time with <a href="#" data-consent-reopen>Cookie settings</a>, at the foot of every page.</li>`
        : `<li>There is no consent banner. Analytics and advertising load with the page. A content blocker stops the analytics and may stop the ads, but the ad network serves them from addresses that change to get past blockers, so I cannot promise it will — the links further down turn each one off at the source.</li>`}
      <li>The contact form is the only thing that sends anything to me, and only what you type into it.</li>
      <li>Nothing on the site depends on either: if the analytics or the ads are blocked or fail to load, every recipe, the search and the timers work as before.</li>
    </ul>

    ${CONSENT.enabled ? `<h2>Consent, and what it controls</h2>
    <p>The first time you visit, a banner asks whether analytics and advertising cookies are all right. Until you answer, neither is loaded &mdash; the scripts are genuinely absent from the page rather than loaded and told to behave, so refusing is not a request that something stops, it is the reason it never starts. Refusing costs you nothing: every recipe, the search, saved recipes, cook mode and the timers work exactly the same.</p>
    <p>Your answer is kept in your own browser for six months, after which the banner asks again. Change it whenever you like with the <a href="#" data-consent-reopen>Cookie settings</a> link at the foot of every page; withdrawing is one click, the same as giving it. Because a script already loaded cannot be unloaded, the page reloads when you do.</p>
    <p>The things this site stores for itself &mdash; your theme, your saved recipes, your reviews &mdash; are not covered by that choice. They never leave your device, they exist only because you asked for them, and the site would not work as you left it without them.</p>
` : `<h2>Cookies, and how to refuse them</h2>
    <p>This site does not ask before loading its analytics and advertising scripts: they run when the page does. I would rather say that plainly than imply a choice you were not given.</p>
    <p>If you do not want them, a content blocker is the usual way to stop them, and the site works perfectly without either — every recipe, the search, saved recipes, cook mode and the timers are unaffected. I would rather be plain about the ads, though: the network serves them from addresses that change, which is how it gets past some blockers, so a blocker may stop them or may not. The Analytics and Advertising sections below also link to the opt-outs Google and Adsterra provide, which work across every site that uses them, not just this one.</p>
    <p>The things this site stores for itself &mdash; your theme, your saved recipes, your reviews &mdash; are a separate matter. They never leave your device and exist only because you asked for them.</p>
`}

    <h2>What stays on your device</h2>
    <p>The site keeps four things in your browser's local storage. They never leave the machine you are reading on, are not sent anywhere, and I cannot see them.</p>
    <ul>
      <li><strong>Your saved recipes</strong> — the hearts you tap, kept under <code>cv:favourites</code>.</li>
      <li><strong>Your theme</strong> — light or dark, under <code>cv:theme</code>.</li>
      <li><strong>Reviews you write</strong> — under <code>cv:reviews:</code> and the recipe name. Reviews on this site are private notes to yourself. Nobody else sees them, including me.</li>
      <li><strong>An old newsletter entry</strong> — under <code>cv:newsletter</code>, if you used the signup box before it was removed. Nothing was ever sent anywhere; you can clear it with your browser data.</li>
    </ul>
    <p>Clearing your browser data clears all four, and you will lose your saved recipes. There is no copy anywhere else.</p>

    <h2>The contact form</h2>
    <p>This is the one place the site collects anything about you, and only because you chose to type it. When you send the form, your <strong>name, email address, subject and message</strong> are posted to a small script on this site's server, which emails them, with the time they were sent, to the site owner's inbox. Nothing is saved in a database on the website. The message then exists wherever the owner's email lives: on ${esc(SITE.host.name)}'s mail systems if the mail is sent through them, and with the owner's own email provider.</p>
    <p>Your address is used to reply to you and for nothing else. It is not added to any list, not passed to anybody, and not used for advertising. Messages stay in the inbox until the owner deletes them; if you would like a message of yours removed, say so in a reply. ${esc(SITE.host.name)}'s own <a href="${SITE.host.privacy}" rel="nofollow noopener" target="_blank">privacy policy</a> covers what they do with it while it is on their systems.</p>
    <p><strong>What the script keeps to limit abuse.</strong> For each message it records the time and a salted hash of the IP address it came from, in a small file on the server that nothing else reads. A hash like this is pseudonymous, not anonymous: it is still personal data, because someone with the site's secret could check an address against it. An entry stops counting after an hour and is deleted the next time the form, or its set-up check, is used. If nobody uses the form, an expired entry stays in the file until the next use, so it is not guaranteed to be gone after exactly an hour. The same file keeps a count of messages in the last day, as timestamps only. Separately, the server's ordinary access logs record your IP address for every request, as described under Hosting below.</p>
    <p>The form also carries a hidden field that people never see. If it arrives filled in, the submission came from a bot and is dropped without being sent. It collects nothing about you.</p>
    <p>If the contact form has not been switched on, the page says so and nothing you type leaves your browser. There is no newsletter and no mailing list. The signup box that used to sit at the foot of every page has been removed, because it collected nothing and could not have sent anything.</p>

    <h2>Analytics</h2>
    <p>${CONSENT.enabled ? '<strong>Only if you accepted.</strong> ' : ''}Google Analytics 4 counts visitors and shows me which recipes get read. It sets cookies, records your approximate location from your IP address, and notes your device, browser and the pages you open. It does not tell me who you are, and I never see an individual reader &mdash; only totals.</p>
    <p>Google is the data controller for what it collects. Its own explanation is in <a href="https://policies.google.com/technologies/partner-sites" rel="nofollow noopener" target="_blank">how Google uses data from sites that use its services</a>, and you can opt out everywhere at once with the <a href="https://tools.google.com/dlpage/gaoptout" rel="nofollow noopener" target="_blank">Google Analytics opt-out add-on</a>.</p>

    <h2>Advertising</h2>
    <p>${CONSENT.enabled ? '<strong>Only if you accepted.</strong> ' : ''}The site carries advertising, which is what pays for it. The ads are served by Adsterra, not by me: they choose what you see, and they may set cookies or similar identifiers to do it, including for personalised advertising. I do not receive your data from them and I cannot see who was shown what.${CONSENT.enabled ? ' If you refuse, no ad script is fetched and the ad slots stay empty.' : ''}</p>
    <p>Adsterra publishes its own <a href="https://adsterra.com/privacy-policy/" rel="nofollow noopener" target="_blank">privacy policy</a>, which governs that part of your visit. If you would rather not be tracked for advertising, a content blocker may stop it, though the ads are served from addresses that change to get past blockers, so it is not a guarantee. You can also turn off ad personalisation in <a href="https://myadcenter.google.com/" rel="nofollow noopener" target="_blank">Google's ad settings</a> for the Google side of the web.</p>

    <h2>What else the site loads</h2>
    <ul>
      <li><strong>Fonts</strong> are served from this site itself, so no font provider sees your IP address.</li>
      <li><strong>Photographs</strong> are served from this site itself, not from anywhere else.</li>
      <li><strong>The search index</strong> is a file downloaded from this site when you first use the search box. Your search terms are handled entirely in your browser and are never sent anywhere.</li>
      <li><strong>Hosting.</strong> The site is served by ${esc(SITE.host.name)}, whose servers log requests, including IP addresses, as any web server does.</li>
    </ul>

    <h2>Children</h2>
    <p>This is a recipe site with no account system and nothing aimed at children. I do not knowingly collect anything from anyone, of any age.</p>

    <h2>Your rights</h2>
    <p>Unless you have sent me a message, I hold nothing about you at all: everything the site stores is already in your hands, and clearing your browser data removes it. If you have used the contact form, what I hold is that message, and you can ask me to delete it &mdash; reply to my email, or send a new message saying so, and it goes.</p>
    <p>For the data Google and Adsterra collect, their policies above set out how to make a request to them, since they are the ones holding it.</p>

    <h2>Changes</h2>
    <p>If what the site does changes — a real newsletter, a working contact form, a different ad network — this page changes with it, and the date at the top moves. There is no archive of previous versions; the site is small enough that the current one is the only one that matters.</p>

    <h2>Getting in touch</h2>
    <p>Use the <a href="${SITE.base}contact/">contact form</a>. If something on this page is wrong or unclear, that is exactly the sort of thing I would like to be told.</p>

    <p class="form-note" style="margin-top:2rem">This page describes what the site does, honestly and in plain language. It is not legal advice, and it has not been reviewed by a lawyer. If you are reading it as a template for your own site, do not — write yours from your own code, as this one was.</p>
  </div>
</div>
<div class="wrap" style="padding-bottom:clamp(3rem,7vw,5rem)">${newsletter('privacy-news')}</div>`;

  return layout({
    title: 'Privacy & Cookies',
    description: `What ${SITE.name} stores, what it sends to Google Analytics and the ad network, and how to stop it. No accounts, no database, nothing on a server.`,
    keywords: ['privacy policy', 'cookie policy', 'weekly delight privacy',
               'what data does this site collect', 'analytics and advertising cookies',
               'data protection', 'gdpr recipe site', 'personal data', 'third party cookies',
               'how to opt out of cookies', 'browser local storage', 'no account needed',
               'advertising partners', 'google analytics', 'data retention',
               'your data rights', 'saved recipes are stored on your device',
               'does this site track me', 'what cookies does this site use',
               'contact about privacy', 'cookie consent', 'weekly delight cookies'],
    path: 'privacy/',
    active: 'privacy',
    body,
    cuisines: ctx.topCuisines.slice(0, 8),
    criticalCss: ctx.criticalCss,
    schema: [breadcrumbSchema(trail)]
  });
}

function about(ctx) {
  const trail = [{ name: 'Home', url: SITE.base }, { name: 'About' }];
  const tierCount = t => ctx.recipes.filter(r => r.nutritionTier === t).length.toLocaleString('en-GB');
  const sources = require('../../tools/nutrition-sources.json').counts;
  const foodCount = Object.values(sources).reduce((a, b) => a + b, 0);

  /* What this page says about who runs the site and how the recipes were made
     has to be true of the project's own records, so it says only that.
     It used to carry a first-person biography (an age, a country, a course of
     flight training) and the claim that every one of the recipes had been
     cooked in the author's kitchen. Nothing in the project records supports
     either, and the recipe text was drafted with AI assistance, so the page now
     describes the process that actually produced the site: compilation from
     established methods, AI-assisted drafting, automated consistency checks
     and an image review. Personal details belong here again only once the
     owner has confirmed them. */
  const body = `
${breadcrumbs(trail)}
<div class="wrap section" style="padding-top:1rem">
  <header class="recipe-head">
    <span class="eyebrow">About</span>
    <h1>About Weekly Delight</h1>
    <p class="lede">Weekly Delight is a free collection of ${recipeCount} well-known recipes from ${cuisineCount} cuisines, each written with the reason behind every step. It is run by one person, ${esc(SITE.author)}.</p>
  </header>

  <div class="prose" style="max-width:72ch">
    <h2 id="how-made">How the recipes are made</h2>
    <p>The dishes here are well-known ones, and the methods follow how they are widely and traditionally made. The recipe text &mdash; the descriptions, methods, tips and storage notes &mdash; was drafted with substantial help from AI writing tools, and then put through the automated checks described below.</p>
    <p>That process is worth being plain about, because it is not the same thing as kitchen testing. <strong>Unless a recipe says otherwise, it has not been cooked and tested for this site.</strong> The checks catch a recipe that contradicts itself; they cannot tell whether a dish tastes right or whether your oven runs hot. If you cook something here and a step does not work, please <a href="${SITE.base}contact/">say so</a> &mdash; that is the most useful correction there is.</p>

    <h2 id="how-checked">What is checked automatically, and what is not</h2>
    <p>Every rebuild of the site runs a set of scripts over all ${recipeCount} recipes, and the build fails until a problem they find is fixed:</p>
    <ul>
      <li><strong>Times are read from the method.</strong> A script looks through every step for chilling, proving, marinating and other waiting, and the total time shown on the page includes it. Where the method gives a range (&ldquo;12 to 24 hours&rdquo;), the page shows the range.</li>
      <li><strong>Diet labels are compared with the ingredient list.</strong> Flour on a gluten-free recipe or honey on a vegan one fails the build. Where a label depends on choosing one ingredient over another, the label says so.</li>
      <li><strong>Nutrition is calculated, and only where it can be.</strong> See <a href="#nutrition">below</a>.</li>
      <li><strong>Search phrases have to be true of the recipe.</strong> &ldquo;30-minute&rdquo; is only used when the whole recipe, waiting included, takes thirty minutes or less.</li>
      <li><strong>Every photograph is compared with the dish and its diet label before it is published.</strong> Wrong pictures have been withdrawn rather than left up.</li>
    </ul>
    <p>None of this proves a recipe is safe for a particular diet or medical condition, and none of it is nutritional or medical advice. If you cook for an allergy or a health condition, check every ingredient yourself. The diet labels are matched against ingredient names by a script: that does not certify a recipe free of an allergen, and a packaged ingredient (stock, a sauce, a cheese) has to be checked on its own label.</p>

    <h2 id="nutrition">How the nutrition figures are worked out</h2>
    <p>Each recipe's ingredient list is read line by line, every ingredient is matched to a food, its weight is worked out, and the figures are added up and divided by the servings. Of the ${foodCount.toLocaleString('en-GB')} foods the calculator knows, ${sources.usda.toLocaleString('en-GB')} use the figures of a named entry in USDA FoodData Central (SR Legacy, a public-domain food-composition database) and ${sources.proxy} the nearest named entry where SR Legacy lacks the food itself (plain dry breadcrumbs for panko, for instance); ${sources.unverified.toLocaleString('en-GB')} still use figures written for this site that have no recorded source, and ${sources.generic} are rough stand-ins for an unnamed ingredient such as &ldquo;spice&rdquo;. Calories are 4 per gram of protein and carbohydrate, 9 per gram of fat and 7 per gram of alcohol.</p>
    <p>Every recipe falls into one of three groups, and the page says which:</p>
    <ul>
      <li><strong>Calculated (${tierCount(1)} recipes).</strong> Every line was read and at most a twentieth of the energy comes from foods without a recorded source. These figures, and only these, go into the page's structured data and decide the High-Protein, Low-Carb and Keto labels.</li>
      <li><strong>Approximate (${tierCount(2)} recipes).</strong> The sum rests on an assumption that moves it, and the page names it: a marinade counted in full, weights that include bone, a tin counted with its liquid, an ingredient with no amount, or foods without a recorded source.</li>
      <li><strong>None given (${tierCount(3)} recipes).</strong> Some lines cannot be read, or the dish is deep-fried and the oil it takes up cannot be known. Rather than print a guess, these pages give no figures.</li>
    </ul>
    <p>A calculation is not a laboratory analysis. The food table cannot see a brand's recipe or an additive, a raw weight is not a cooked one, and salt added &ldquo;to taste&rdquo; is not counted. Two sets of figures agreeing with each other is not evidence that either matches the dish on your plate.</p>

    <h2>Where the photographs come from</h2>
    <p>Of the ${recipeCount} recipes, ${photoCount.toLocaleString('en-GB')} have a photograph of the dish, ${illustrationCount} have only an AI illustration, and ${placeholderCount.toLocaleString('en-GB')} have no picture yet. Counted as files rather than recipes, there are ${imageCount.toLocaleString('en-GB')} photographs: ${heroPhotoFileCount.toLocaleString('en-GB')} main pictures and ${processPhotoFileCount} in-progress shots.</p>
    <p>None of the photographs were taken for this site, and none shows this site's own cooking: each is a third party's photograph of the dish, used under its licence and credited underneath. Of the ${imageCount.toLocaleString('en-GB')}, ${commonsImageCount.toLocaleString('en-GB')} come from Wikimedia Commons, ${otherArchiveImageCount.toLocaleString('en-GB')} were found through Openverse, which indexes Flickr and other archives of freely licensed work${stockImageCount ? `, and ${stockImageCount} come from ${stockSources.join(' and ')}, a stock library with its own licence, which allows commercial use and asks for no credit (it is given anyway)` : ''}. Of the archive photographs, ${publicDomainImageCount.toLocaleString('en-GB')} are CC0 or public domain, ${attributionOnlyImageCount.toLocaleString('en-GB')} are Creative Commons Attribution, and ${shareAlikeImageCount} are Attribution-ShareAlike.</p>
    <p>Every image is resized and re-encoded for the web. As site policy, that is treated as an adaptation: the ShareAlike photographs are offered here under the same licence as the original, and the credit line says so. Also as site policy, and not because every such licence would forbid it, NonCommercial images are not used (the site carries advertising) and neither are NoDerivatives ones, so that no question about resizing arises.</p>
    ${illustrationCount ? `<h2>And where the illustrations come from</h2>
    <p>${illustrationCount} recipes carry an illustration generated by an AI image model instead of a photograph, from a prompt written out of the recipe's own description and ingredients. Each is labelled as an AI illustration underneath the picture and in its alt text, listed separately in <a href="${SITE.base}images-attribution.md">images-attribution.md</a>, and not counted among the photographs above. It shows what the dish is meant to look like, not a dish anyone cooked. No new illustrations are being added.</p>` : ''}
    ${placeholderCount ? `<p>The ${placeholderCount.toLocaleString('en-GB')} recipes with no picture show a plain coloured card with the dish's name. A wrong picture would be worse than none.</p>` : ''}

    <h2>How to use the site</h2>
    <ul>
      <li><strong>Adjustable servings.</strong> Every ingredient list scales. Press the plus and minus buttons and the quantities recalculate, rounding sensibly rather than giving you 1.33 eggs.</li>
      <li><strong>Cook Mode.</strong> Enlarges the type, hides everything that is not the method, keeps your screen awake and highlights the step you are on. Arrow keys move between steps.</li>
      <li><strong>Inline timers.</strong> Where a step has a duration, there is a button to start a timer for it. It will chime and buzz when it finishes.</li>
      <li><strong>Saved recipes.</strong> The heart icon saves anything to your <a href="${SITE.base}favourites/">favourites</a>, stored in your browser. No account, no email.</li>
      <li><strong>Print properly.</strong> The print button produces a clean recipe card with no navigation and no advertisements.</li>
    </ul>

    <h2 id="attribution">Attribution and licensing</h2>
    <p>Each photograph is credited underneath itself on the recipe page, with the photographer, the licence and a link back to the original file${illustrationCount ? `, and each generated illustration says underneath itself that it is one` : ''}. The complete list in one place is <a href="${SITE.base}images-attribution.md">images-attribution.md</a>. If you would like to reproduce a recipe, please link back rather than copying wholesale.</p>
  </div>

  <section class="section faq" aria-labelledby="faq-title">
    <h2 id="faq-title">Common questions</h2>
    ${ABOUT_FAQ.map(({ q, a, link }) => {
      /* The link is spliced into the rendered answer only. The schema keeps the
         plain sentence, and check.js compares text rather than markup, so the
         two still agree. */
      const shown = link ? esc(a).replace(esc(link.text), `<a href="${link.href}">${esc(link.text)}</a>`) : esc(a);
      return `<details><summary>${esc(q)}</summary><p>${shown}</p></details>`;
    }).join('\n    ')}
  </section>
</div>`;

  return layout({
    /* The layout appends the site name, so naming it here too gave
       'About Weekly Delight | Weekly Delight'. */
    title: 'About',
    description: `How the ${recipeCount} recipes on Weekly Delight are written with AI assistance, then checked by script for timings, diet labels and nutrition figures.`,
    keywords: ['about weekly delight', 'how the recipes are written', 'recipe checks',
               'photo licensing', 'image attribution', 'recipe corrections'],
    path: 'about/',
    active: 'about',
    criticalCss: ctx.criticalCss,
    categories: ctx.categoryCounts,
    cuisines: ctx.topCuisines,
    schema: [
      breadcrumbSchema(trail),
      {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'About Weekly Delight',
        url: `${SITE.origin}${SITE.base}about/`,
        publisher: { '@type': 'Organization', name: SITE.name, url: SITE.origin + SITE.base }
      },
      faqSchema(ABOUT_FAQ)
    ],
    body
  });
}

/* ---------------------------------------------------------- contact page */
function contact(ctx) {
  const trail = [{ name: 'Home', url: SITE.base }, { name: 'Contact' }];
  const body = `
${breadcrumbs(trail)}
<div class="wrap section" style="padding-top:1rem">
  <div class="split" style="align-items:start">
    <div>
      <span class="eyebrow">Get in touch</span>
      <h1>Tell us how it went</h1>
      <p class="lede">Recipe suggestions, corrections, a step that did not work in your kitchen: all of it is useful. There is no promised reply time.</p>

      <div class="panel" style="margin-top:2rem">
        <h2 style="font-size:1.15rem">What we are best at answering</h2>
        <ul style="padding-left:1.1rem;margin:0">
          <li>A step that did not work, and what happened instead</li>
          <li>Substitutions for an ingredient you cannot get locally</li>
          <li>Recipes you would like added</li>
          <li>Errors in quantities, timings or temperatures</li>
        </ul>
      </div>

      <div class="panel" style="margin-top:1.25rem">
        <h2 style="font-size:1.15rem">Press &amp; syndication</h2>
        <p style="margin:0;font-size:.94rem;color:var(--text-soft)">
          Happy to talk about republishing a recipe with attribution and a link. Mention "syndication" in the subject line.
        </p>
      </div>
    </div>

    <div class="panel">
      <h2 style="margin-top:0">Send a message</h2>
      <p class="form-status form-status--error" id="contact-unavailable" role="status" hidden>
        The contact form is not switched on yet, so a message sent from this page would not go anywhere.
        Please try again later.
      </p>
      <!-- Posted to contact/send.php (src/server/contact-send.php), which runs on
           the live host. The page says a message was sent only when that script
           answers that the mail transport accepted it; anything else, including a
           host with no PHP, shows that nothing was sent and leaves the words in
           the form. Without JavaScript the browser posts it natively and gets a
           page rendered by the script. On load, the script asks send.php?status=1
           whether the form is set up, and says so before anyone types. -->
      <form name="contact" method="POST" action="${SITE.base}contact/send.php"
            data-contact novalidate>
        <!-- The honeypot. Bots fill in every field they find; people never see
             this one, so anything that arrives with it filled is dropped by the
             script without sending. Hidden from assistive technology as well as
             from sight, because it is not a real question. -->
        <p class="sr-only" aria-hidden="true">
          <label>Leave this field empty: <input type="text" name="website" tabindex="-1" autocomplete="off"></label>
        </p>
        <div class="field">
          <label for="contact-name">Your name</label>
          <input type="text" id="contact-name" name="name" autocomplete="name" required aria-describedby="name-error">
          <span class="error" id="name-error" role="alert"></span>
        </div>
        <div class="field">
          <label for="contact-email">Email address</label>
          <input type="email" id="contact-email" name="email" autocomplete="email" required aria-describedby="email-error">
          <span class="error" id="email-error" role="alert"></span>
        </div>
        <div class="field">
          <label for="contact-subject">Subject</label>
          <input type="text" id="contact-subject" name="subject" required aria-describedby="subject-error">
          <span class="error" id="subject-error" role="alert"></span>
        </div>
        <div class="field">
          <label for="contact-message">Message</label>
          <textarea id="contact-message" name="message" required aria-describedby="message-error"
                    placeholder="Which recipe, what happened, and what you were expecting."></textarea>
          <span class="error" id="message-error" role="alert"></span>
        </div>
        <button class="btn btn--primary btn--block" type="submit">Send message</button>
        <p class="form-status" id="contact-status" role="status" tabindex="-1" hidden></p>
        <p class="form-note" style="margin-top:.9rem">
          Your name, email address, subject and message are emailed to the site's owner by
          ${esc(SITE.host.name)}, which hosts this site. Nothing else is collected &mdash; see the
          <a href="${SITE.base}privacy/">privacy page</a>.
        </p>
      </form>
    </div>
  </div>
</div>`;

  return layout({
    title: 'Contact',
    description: 'Send Weekly Delight a recipe suggestion, a correction, or a question about a step that did not work in your kitchen, using the form on this page.',
    keywords: ['contact weekly delight', 'recipe suggestions', 'food blog contact',
               'submit a recipe', 'report a recipe error', 'recipe request',
               'work with us', 'press enquiries', 'get in touch',
               'email the editor', 'send feedback', 'recipe corrections',
               'ask a cooking question', 'this recipe did not work', 'suggest a dish',
               'partnership enquiries', 'advertising enquiries', 'photo credit query',
               'report a broken link', 'recipe question', 'contact the kitchen',
               'weekly delight contact'],
    path: 'contact/',
    active: 'contact',
    criticalCss: ctx.criticalCss,
    categories: ctx.categoryCounts,
    cuisines: ctx.topCuisines,
    schema: [
      breadcrumbSchema(trail),
      {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact Weekly Delight',
        url: `${SITE.origin}${SITE.base}contact/`
      }
    ],
    body
  });
}

/* -------------------------------------------------------------- 404 page */
function notFound(ctx) {
  const suggestions = ctx.recipes
    .filter(r => r.badges.includes('editors') || r.badges.includes('trending'))
    .slice(0, 4);

  const body = `
<div class="wrap section" style="text-align:center;padding-top:clamp(3rem,8vw,6rem)">
  <span class="eyebrow">Error 404</span>
  <h1>That page has left the kitchen</h1>
  <p class="lede" style="margin-inline:auto">The recipe you were looking for has moved, been renamed, or never existed. Here are four others to try instead.</p>
  <div style="max-width:520px;margin:2rem auto 0">${heroSearch('nf-search', `Search ${recipeCount} recipes…`)}</div>
  <div style="margin-top:1.5rem;display:flex;gap:.7rem;justify-content:center;flex-wrap:wrap">
    <a class="btn btn--primary" href="${SITE.base}recipes/">Browse all recipes</a>
    <a class="btn btn--ghost" href="${SITE.base}">Back to the homepage</a>
  </div>
</div>
<div class="wrap section" style="padding-top:0">
  <div class="section-head"><div><h2>Try one of these</h2></div></div>
  <div class="card-grid">${suggestions.map(r => card(r, { reveal: false })).join('')}</div>
</div>`;

  return layout({
    title: 'Page not found',
    description: `That page could not be found. Search ${recipeCount} recipes or browse the editor's picks instead.`,
    path: '404.html',
    noindex: true,
    criticalCss: ctx.criticalCss,
    categories: ctx.categoryCounts,
    cuisines: ctx.topCuisines,
    body
  });
}

/* ------------------------------------------------------- site directory */
/**
 * Every published recipe on one page, grouped by category.
 *
 * It exists for crawlers as much as for readers: the listing pages are paged
 * and the sitemap is a file a crawler may or may not read, but a plain page of
 * links, one click from the footer, puts every recipe two clicks from the
 * home page. Generated from the catalogue, so a new recipe appears here with
 * the next build and nothing has to be added by hand. There are no posts or
 * articles on this site; the recipes are the whole of the content.
 */
function siteDirectory(ctx) {
  const trail = [{ name: 'Home', url: SITE.base }, { name: 'Site directory' }];
  const byTitle = (a, b) => a.title.localeCompare(b.title, 'en');
  const names = Object.keys(CATEGORIES);
  const total = ctx.recipes.length;

  const pageLinks = [
    ['All recipes', 'recipes/'], ['Categories', 'categories/'], ['Cuisines', 'cuisines/'],
    ['Ingredients', 'ingredients/'], ['Search', 'search/'], ['About', 'about/'],
    ['Contact', 'contact/'], ['Privacy policy', 'privacy/']
  ].map(([label, href]) => `<li><a href="${SITE.base}${href}">${esc(label)}</a></li>`).join('');

  const taxonomy = (heading, id, items) => `<section aria-labelledby="${id}">
    <h2 id="${id}">${esc(heading)}</h2>
    <ul class="dir-links">${items.join('')}</ul>
  </section>`;

  const categoryLinks = names.map(n =>
    `<li><a href="${SITE.base}categories/${slug(n)}/">${esc(n)}</a></li>`);
  const cuisineLinks = ctx.topCuisines.map(n =>
    `<li><a href="${SITE.base}cuisines/${slug(n)}/">${esc(n)}</a></li>`);
  const ingredientLinks = (ctx.hubs || []).map(h =>
    `<li><a href="${SITE.base}ingredients/${h.slug}/">${esc(h.name)}</a></li>`);

  const sections = names.map(name => {
    const list = ctx.recipes.filter(r => r.category === name).sort(byTitle);
    if (!list.length) return '';
    return `<section aria-labelledby="dir-${slug(name)}">
    <h2 id="dir-${slug(name)}">${esc(name)} <small>(${plural(list.length, 'recipe')})</small></h2>
    <ul class="dir-list">${list.map(r =>
      `<li><a href="${SITE.base}recipes/${r.slug}/">${esc(r.title)}</a></li>`).join('')}</ul>
  </section>`;
  }).join('\n  ');

  const jump = names.filter(n => ctx.recipes.some(r => r.category === n)).map(n =>
    `<a href="#dir-${slug(n)}">${esc(n)}</a>`).join(' &middot; ');

  const body = `
${breadcrumbs(trail)}
<div class="wrap section" style="padding-top:1rem">
  <header class="section-head">
    <div>
      <span class="eyebrow">Site directory</span>
      <h1>Every recipe on Weekly Delight</h1>
      <p class="lede">All ${total} recipes in one list, grouped by category and sorted by name, with the main pages, cuisines and ingredient guides above them.</p>
      <p class="dir-jump">Jump to: ${jump}</p>
    </div>
  </header>
  <style>
    .dir-links{display:flex;flex-wrap:wrap;gap:.4rem 1.2rem;list-style:none;padding:0;margin:.5rem 0 1.5rem}
    .dir-list{columns:16rem;column-gap:2rem;list-style:disc;padding-left:1.2rem;margin:.5rem 0 2rem}
    .dir-list li{break-inside:avoid;margin:.15rem 0}
    .dir-jump{line-height:1.9}
    .wrap h2 small{font-weight:400;font-size:.6em;color:var(--text-muted,inherit)}
  </style>
  <section aria-labelledby="dir-pages">
    <h2 id="dir-pages">Main pages</h2>
    <ul class="dir-links">${pageLinks}</ul>
  </section>
  ${taxonomy('Browse by category', 'dir-categories', categoryLinks)}
  ${taxonomy('Browse by cuisine', 'dir-cuisines', cuisineLinks)}
  ${ingredientLinks.length ? taxonomy('Browse by ingredient', 'dir-ingredients', ingredientLinks) : ''}
  ${sections}
</div>`;

  return layout({
    title: 'Site Directory: Every Recipe',
    description: `Browse all ${total} Weekly Delight recipes in one list, grouped by category, with every cuisine and ingredient guide. Each has ingredients and method.`,
    keywords: ['recipe index', 'all recipes', 'site directory', 'recipe list by category',
               'browse all recipes', 'weekly delight recipes'],
    path: 'site-directory/',
    active: 'directory',
    criticalCss: ctx.criticalCss,
    categories: ctx.categoryCounts,
    cuisines: ctx.topCuisines,
    schema: [breadcrumbSchema(trail)],
    body
  });
}

module.exports = {
  hubLinks, home, directory, taxonomyPage, ingredientsIndex, cuisinesIndex, privacy, contactSentPage, contactNotSentPage, categoriesIndex, siteDirectory, about, contact, notFound };
