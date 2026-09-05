'use strict';
const { esc, humanTime, starsHtml, CUISINES, CATEGORIES, DIET_TAGS, plural } = require('../lib/util');
const { faqSchema } = require('../lib/faq');
const { recipeCount, cuisineCount, imageCount, creditedImageCount,
        publicDomainImageCount, shareAlikeImageCount,
        attributionOnlyImageCount } = require('../data/stats');
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

  const editors = recipes.filter(r => r.badges.includes('editors')).slice(0, 4);
  const trending = recipes.filter(r => r.badges.includes('trending')).slice(0, 8);
  const latest = recipes.slice().sort((a, b) => b.published - a.published).slice(0, 4);
  const quick = recipes.filter(r => r.totalTime <= 30).sort((a, b) => b.rating - a.rating).slice(0, 4);
  const heroRecipe = recipes.find(r => r.slug === 'tacos-al-pastor') || recipes[0];

  const galleryPicks = recipes.filter(r => r.imageData).slice(0, 12);

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
    ${i === 0 ? `<span class="hero-chip">${ICONS.clock}${r.totalTime} min &middot; ${esc(r.cuisine)}</span>` : ''}
  </a>`;

  const body = `
<section class="hero" aria-labelledby="hero-title">
  <div class="wrap hero-grid">
    <div class="hero-copy">
      <span class="eyebrow-rule hero-line">${recipeCount} recipes &middot; ${cuisineCount} cuisines</span>
      <h1 id="hero-title" class="hero-line">Recipes worth <em>cooking twice.</em></h1>
      <p class="hero-lede hero-line">The world's most famous dishes, tested until we understood them &mdash; then written down with the reason behind every step.</p>
      <div class="hero-line">${heroSearch('hero-search', 'Search by dish, ingredient or cuisine…')}</div>
      <div class="hero-line hero-stats">
        <div><strong>${recipeCount}</strong><span>Tested recipes</span></div>
        <div><strong>${cuisineCount}</strong><span>Cuisines</span></div>
        <div><strong>4.8</strong><span>Average rating</span></div>
      </div>
    </div>
    <div class="hero-cluster" aria-label="Featured dishes">
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
        <h2 id="editors-title">The ones we make again and again</h2>
        <p>Four recipes our test kitchen keeps returning to — the versions we would cook for someone we wanted to impress.</p>
      </div>
      <a class="btn btn--ghost" href="${SITE.base}recipes/?sort=rating">Top rated</a>
    </div>
    <div class="bento">${editors.map((r, i) => card(r, { eager: i === 0, delay: i * 70 })).join('')}</div>
  </div>
</section>

<section class="section section--ink" aria-labelledby="trending-title">
  <div class="wrap">
    <div class="section-head reveal">
      <div>
        <span class="eyebrow">Trending Now</span>
        <h2 id="trending-title">What everyone is cooking this week</h2>
        <p>Ranked by what readers are actually saving and printing right now.</p>
      </div>
      <a class="btn btn--ghost" href="${SITE.base}recipes/?sort=popular">See all</a>
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
        <h2 id="cuisines-title">Twenty-nine kitchens, one kitchen table</h2>
        <p>Each cuisine has its own logic. We explain the technique that makes it work, not just the ingredient list.</p>
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
        <h2 id="latest-title">New this week</h2>
        <p>The most recent recipes to come out of testing.</p>
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
        <span class="eyebrow">From the kitchen</span>
        <h2 id="gallery-title">What we have been cooking</h2>
        <p>A scroll through the collection. Every photograph is freely licensed, and every photographer is credited on the recipe.</p>
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
    description: `The world's ${recipeCount} most famous recipes, each tested and explained: ingredients, step-by-step method, cooking science and cook mode. Free, no sign-up.`,
    keywords: ['famous recipes', 'best recipes in the world', 'tested recipes',
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
        foundingDate: String(SITE.founded),
        sameAs: [`https://twitter.com/${SITE.twitter.replace('@', '')}`]
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
    </div>
  </header>

  <form role="search" style="margin-bottom:.6rem" data-search-form>
    <div class="search-shell" style="max-width:none">
      ${ICONS.search}
      <label class="sr-only" for="directory-query">Search within these recipes</label>
      <input type="search" id="directory-query" placeholder="Search by dish, ingredient or cuisine…" autocomplete="off">
    </div>
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
            <option value="popular">Most popular</option>
            <option value="rating">Highest rated</option>
            <option value="quickest">Quickest first</option>
            <option value="newest">Newest first</option>
            <option value="az">A to Z</option>
          </select>
        </div>
      </div>
      <div id="results" class="card-grid">${(options.seed || []).map(r => card(r, { reveal: false })).join('')}</div>
    </div>
  </div>

  ${options.index === false ? '' : `<section class="faq" style="margin-top:clamp(2.5rem,6vw,4rem)" aria-labelledby="az-title">
    <h2 id="az-title">Full A&ndash;Z index</h2>
    <details>
      <summary>All ${plural(ctx.recipes.length, 'recipe')}, alphabetically</summary>
      <ul style="columns:3;column-gap:2rem;margin:1rem 0 0;padding-left:1.1rem;font-size:.92rem">
        ${ctx.recipes.slice().sort((a, b) => a.title.localeCompare(b.title))
          .map(r => `<li style="break-inside:avoid;margin-bottom:.35rem"><a href="${SITE.base}recipes/${r.slug}/">${esc(r.title)}</a></li>`).join('')}
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
    schema: [breadcrumbSchema(trail)],
    body
  });
}

/* ------------------------------------------------ taxonomy landing pages */
function taxonomyPage(ctx, options) {
  const trail = [{ name: 'Home', url: SITE.base }].concat(options.trail);
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
      ${options.recipes.map((r, i) => card(r, { eager: i < 3, delay: (i % 4) * 60 })).join('')}
    </div>
  </section>
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
               'vegetarian ingredient recipes', 'browse by ingredient', 'recipe ideas by ingredient'],
    path: 'ingredients/',
    active: 'ingredients',
    body,
    cuisines: ctx.topCuisines.slice(0, 8),
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
      <p class="lede">Every cuisine on the site, with the number of tested recipes and what makes each one tick. Start anywhere.</p>
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
    description: `Browse ${recipeCount} tested recipes across ${cuisineCount} world cuisines — Italian, Japanese, Mexican, Indian, Thai, Middle Eastern and more. Each with nutrition and method.`,
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
    a: 'Please do — use the contact form. I add recipes once I have cooked them enough times to '
     + 'be sure the method holds, which takes as long as it takes.',
    link: { text: 'contact form', href: `${SITE.base}contact/` } },
  { q: 'Do you store my saved recipes or reviews?',
    a: "No. Favourites, ingredient checkboxes and reviews all live in your browser's local "
     + 'storage. Clearing your browser data clears them, and they never reach a server.' }
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
 * It is not legal advice, and it says so. Kazakhstan-based operator, worldwide
 * readers, advertising and analytics both running: worth having somebody
 * qualified read it.
 */
/**
 * Where the contact form lands after a successful post.
 *
 * A real page rather than Netlify's generic confirmation, so the reader stays
 * on the site and knows what happens next. noindex, because a bare thank-you
 * page in search results helps nobody.
 */
function contactSuccess(ctx) {
  const trail = [{ name: 'Home', url: SITE.base },
                 { name: 'Contact', url: `${SITE.base}contact/` },
                 { name: 'Message sent' }];
  const body = `
${breadcrumbs(trail)}
<div class="wrap section" style="padding-top:1rem">
  <header class="recipe-head">
    <span class="eyebrow">Contact</span>
    <h1>Message sent</h1>
    <p class="lede">Thank you &mdash; it has reached me. I read everything, and I answer most things, though not always quickly: I am a student and this site is a hobby.</p>
  </header>
  <div class="prose" style="max-width:64ch">
    <h2>What happens now</h2>
    <p>Your message goes to the inbox for this site and I read it there. If you wrote about a recipe that did not work, that is the most useful kind of message I get, and it usually ends with the recipe being changed.</p>
    <p>Nothing was added to any list. Your address is used to reply to you and for nothing else &mdash; the <a href="${SITE.base}privacy/">privacy page</a> sets out what is kept and by whom.</p>
    <p><a class="btn btn--primary" href="${SITE.base}recipes/">Back to the recipes</a></p>
  </div>
</div>`;

  return layout({
    title: 'Message sent',
    description: 'Your message has been sent to Weekly Delight. I read everything and answer most things, though not always quickly.',
    path: 'contact/success/',
    active: 'contact',
    noindex: true,
    body,
    cuisines: ctx.topCuisines.slice(0, 8),
    schema: [breadcrumbSchema(trail)]
  });
}

function privacy(ctx) {
  const trail = [{ name: 'Home', url: SITE.base }, { name: 'Privacy' }];
  const updated = new Date().toISOString().slice(0, 10);

  const body = `
${breadcrumbs(trail)}
<div class="wrap section" style="padding-top:1rem">
  <header class="recipe-head">
    <span class="eyebrow">Privacy</span>
    <h1>Privacy &amp; cookies</h1>
    <p class="lede">What this site stores, what it sends elsewhere, and how to stop it. Written in plain language, and short because there is not much to say.</p>
  </header>

  <div class="prose" style="max-width:72ch">
    <p class="form-note">Last updated ${updated}. ${esc(SITE.name)} is run by one person, Turab, from Kazakhstan.</p>

    <h2>The short version</h2>
    <ul>
      <li>There is no account, no login and no database. This is a static site.</li>
      <li>What you save — favourites, your theme, your reviews — stays in your own browser and never reaches me.</li>
      ${CONSENT.enabled
        ? `<li>Nothing is loaded until you choose. Google Analytics and the advertising scripts are not in the page at all until you accept them, and if you refuse or ignore the banner they are never fetched.</li>
      <li>You can change your mind at any time with <a href="#" data-consent-reopen>Cookie settings</a>, at the foot of every page.</li>`
        : `<li>There is no consent banner. Analytics and advertising load with the page, so if you would rather they did not, a content blocker is the way to stop them — the links further down turn each one off at the source.</li>`}
      <li>The contact form is the only thing that sends anything to me, and only what you type into it.</li>
      <li>You can block both with any content blocker, and nothing on the site breaks.</li>
    </ul>

    ${CONSENT.enabled ? `<h2>Consent, and what it controls</h2>
    <p>The first time you visit, a banner asks whether analytics and advertising cookies are all right. Until you answer, neither is loaded &mdash; the scripts are genuinely absent from the page rather than loaded and told to behave, so refusing is not a request that something stops, it is the reason it never starts. Refusing costs you nothing: every recipe, the search, saved recipes, cook mode and the timers work exactly the same.</p>
    <p>Your answer is kept in your own browser for six months, after which the banner asks again. Change it whenever you like with the <a href="#" data-consent-reopen>Cookie settings</a> link at the foot of every page; withdrawing is one click, the same as giving it. Because a script already loaded cannot be unloaded, the page reloads when you do.</p>
    <p>The things this site stores for itself &mdash; your theme, your saved recipes, your reviews &mdash; are not covered by that choice. They never leave your device, they exist only because you asked for them, and the site would not work as you left it without them.</p>
` : `<h2>Cookies, and how to refuse them</h2>
    <p>This site does not ask before loading its analytics and advertising scripts: they run when the page does. I would rather say that plainly than imply a choice you were not given.</p>
    <p>If you do not want them, any content blocker stops both, and the site works perfectly without either — every recipe, the search, saved recipes, cook mode and the timers are unaffected. The Analytics and Advertising sections below also link to the opt-outs Google and Adsterra provide, which work across every site that uses them, not just this one.</p>
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
    <p>This is the one place the site collects anything about you, and only because you chose to type it. When you send the form, your <strong>name, email address, subject and message</strong> are posted to Netlify Forms &mdash; Netlify hosts this site &mdash; and I read them from the dashboard there. Netlify also records the time and the IP address the message came from, as a spam measure.</p>
    <p>I use your address to reply to you and for nothing else. It is not added to any list, not passed to anybody, and not used for advertising. Submissions sit in the Netlify dashboard until I delete them; if you would like a message of yours removed, say so in a reply and I will delete it there. Netlify's own <a href="https://www.netlify.com/privacy/" rel="nofollow noopener" target="_blank">privacy policy</a> covers what they do with it while it is on their systems.</p>
    <p>The form also carries a hidden field that people never see. If it arrives filled in, the submission came from a bot and is discarded. It collects nothing about you.</p>
    <p>There is no newsletter and no mailing list. The signup box that used to sit at the foot of every page has been removed, because it collected nothing and could not have sent anything.</p>

    <h2>Analytics</h2>
    <p>${CONSENT.enabled ? '<strong>Only if you accepted.</strong> ' : ''}Google Analytics 4 counts visitors and shows me which recipes get read. It sets cookies, records your approximate location from your IP address, and notes your device, browser and the pages you open. It does not tell me who you are, and I never see an individual reader &mdash; only totals.</p>
    <p>Google is the data controller for what it collects. Its own explanation is in <a href="https://policies.google.com/technologies/partner-sites" rel="nofollow noopener" target="_blank">how Google uses data from sites that use its services</a>, and you can opt out everywhere at once with the <a href="https://tools.google.com/dlpage/gaoptout" rel="nofollow noopener" target="_blank">Google Analytics opt-out add-on</a>.</p>

    <h2>Advertising</h2>
    <p>${CONSENT.enabled ? '<strong>Only if you accepted.</strong> ' : ''}The site carries advertising, which is what pays for it. The ads are served by Adsterra, not by me: they choose what you see, and they may set cookies or similar identifiers to do it, including for personalised advertising. I do not receive your data from them and I cannot see who was shown what.${CONSENT.enabled ? ' If you refuse, no ad script is fetched and the ad slots stay empty.' : ''}</p>
    <p>Adsterra publishes its own <a href="https://adsterra.com/privacy-policy/" rel="nofollow noopener" target="_blank">privacy policy</a>, which governs that part of your visit. If you would rather not be tracked for advertising, a content blocker stops it, and you can also turn off ad personalisation in <a href="https://myadcenter.google.com/" rel="nofollow noopener" target="_blank">Google's ad settings</a> for the Google side of the web.</p>

    <h2>What else the site loads</h2>
    <ul>
      <li><strong>Fonts</strong> come from Google Fonts, which means your browser contacts <code>fonts.googleapis.com</code> and <code>fonts.gstatic.com</code> and they see your IP address.</li>
      <li><strong>Photographs</strong> are served from this site itself, not from anywhere else.</li>
      <li><strong>The search index</strong> is a file downloaded from this site when you first use the search box. Your search terms are handled entirely in your browser and are never sent anywhere.</li>
      <li><strong>Hosting.</strong> The site is served by Netlify, whose servers log requests, including IP addresses, as any web server does.</li>
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
               'what data does this site collect', 'analytics and advertising cookies'],
    path: 'privacy/',
    active: 'privacy',
    body,
    cuisines: ctx.topCuisines.slice(0, 8),
    schema: [breadcrumbSchema(trail)]
  });
}

function about(ctx) {
  const trail = [{ name: 'Home', url: SITE.base }, { name: 'About' }];

  const body = `
${breadcrumbs(trail)}
<div class="wrap section" style="padding-top:1rem">
  <header class="recipe-head">
    <span class="eyebrow">About</span>
    <h1>I cook the way I fly: by checklist</h1>
    <p class="lede">I am Turab, 21, studying aviation in Kazakhstan. I am not a chef. I am the person who had to learn to cook properly in a small kitchen, on a student schedule, with nobody to fix it if I got it wrong.</p>
  </header>

  <div class="prose" style="max-width:72ch">
    <p>It started badly. In my first year of flight training I was living on whatever could be reheated between an early ground school and a late night of study. I did not have time to cook, and the little I made was bad enough that I stopped trying.</p>

    <p>What changed was not passion. It was a habit I had already been taught somewhere else. In aviation nothing important is left to memory or to mood — you work from a checklist, you set everything out before you need it, and you trust the instrument over the feeling. I started cooking the same way. Everything measured and laid out before the pan got hot. Every step written down. Every failure noted, so it did not happen twice.</p>

    <p>Those notes are this site: <strong>${recipeCount} recipes</strong>, every one of them cooked in an ordinary kitchen by somebody with an exam the next morning.</p>

    <h2>Why a student's kitchen makes better recipes</h2>
    <p>Not being a chef is the most useful thing about this site. A professional kitchen hides the parts that go wrong for you at home: the one hob that runs hotter than the rest, the oven that lies by twenty degrees, the fact that finely dicing an onion takes a normal person four minutes and not forty seconds.</p>
    <p>Nothing goes up here until it clears the same checks.</p>
    <ul>
      <li><strong>Cooked in a real kitchen.</strong> One domestic hob, one unreliable oven, ordinary pans. If it only works with equipment I do not own, it does not go up.</li>
      <li><strong>Timed honestly.</strong> The times here are how long it actually takes, chopping included. I have never met a fifteen-minute recipe that took fifteen minutes and I am not going to publish another one.</li>
      <li><strong>Weights, not cups.</strong> Grams and millilitres, because a cup of flour changes by a fifth depending on how you scoop it — and that is the difference between a good cake and a brick.</li>
      <li><strong>The failure written down.</strong> Every recipe says where it goes wrong and how to tell before it is too late. That is the part I needed most when I was starting, and the part almost nobody writes.</li>
      <li><strong>Built around a student's week.</strong> What can be made ahead, what reheats, and what genuinely takes twenty minutes on a night when you have nothing left.</li>
    </ul>
    <p>I am still learning, both things in fact. But everything here has been through my own kitchen first, and I will tell you plainly when something is hard, when it is worth it, and when it is not.</p>

    <h2>Where the photographs come from</h2>
    <p>Every photograph here is freely licensed and sourced from Wikimedia Commons. Of the ${imageCount} images on the site, ${publicDomainImageCount} are CC0 or public domain and carry no conditions at all, ${attributionOnlyImageCount} are Creative Commons Attribution, and ${shareAlikeImageCount} are Attribution-ShareAlike. Everything that asks for a credit gets one, underneath the picture on the recipe itself as well as in the <a href="${SITE.base}about/#attribution">full list</a>.</p>
    <p>Every image is resized and re-encoded for the web, which makes it an adaptation. For the ShareAlike photographs that means the resized copy here carries the same licence as the original, and the credit line beside each one says so. I do not use NonCommercial images, because this site carries advertising, or NoDerivatives images, because resizing is exactly what that licence forbids. Where no photograph of a dish exists under any of these terms, you will see a warm gradient card with the recipe name instead &mdash; I would rather show you nothing than show you someone else's photograph without permission.</p>

    <h2>How to use the site</h2>
    <ul>
      <li><strong>Adjustable servings.</strong> Every ingredient list scales. Press the plus and minus buttons and the quantities recalculate, rounding sensibly rather than giving you 1.33 eggs.</li>
      <li><strong>Cook Mode.</strong> Enlarges the type, hides everything that is not the method, keeps your screen awake and highlights the step you are on. Arrow keys move between steps.</li>
      <li><strong>Inline timers.</strong> Where a step has a duration, there is a button to start a timer for it. It will chime and buzz when it finishes.</li>
      <li><strong>Saved recipes.</strong> The heart icon saves anything to your <a href="${SITE.base}favourites/">favourites</a>, stored in your browser. No account, no email, no tracking.</li>
      <li><strong>Print properly.</strong> The print button produces a clean recipe card with no navigation, no photographs bleeding ink and no advertisements.</li>
    </ul>

    <h2 id="attribution">Attribution and licensing</h2>
    <p>Each photograph is credited underneath itself on the recipe page, with the photographer, the licence and a link back to the original file. The complete list in one place is <a href="${SITE.base}images-attribution.md">images-attribution.md</a>. The recipe text is mine. If you would like to reproduce a recipe, please link back rather than copying wholesale.</p>
  </div>

  <section class="section" aria-labelledby="team-title">
    <div class="section-head">
      <div>
        <span class="eyebrow">Who writes this</span>
        <h2 id="team-title">One person, one kitchen</h2>
        <p>There is no test kitchen and no team. There is me, a small hob and a notebook.</p>
      </div>
    </div>
    <div class="team-grid">
      <div class="team-card reveal">
        <span class="avatar" aria-hidden="true">T</span>
        <strong>Turab</strong>
        <em>Aviation student &middot; Kazakhstan</em>
        <p>Writes, cooks, photographs and breaks everything on this site. Twenty-one, mid-way through flight training, and a hobbyist cook rather than a professional one — which is the whole point of the place.</p>
      </div>
    </div>
  </section>

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
</div>
<div class="wrap" style="padding-bottom:clamp(3rem,7vw,5rem)">${newsletter('about-news')}</div>`;

  return layout({
    /* The layout appends the site name, so naming it here too gave
       'About Weekly Delight | Weekly Delight'. */
    title: 'About',
    description: `Turab, 21, an aviation student in Kazakhstan who cooks by checklist — how the ${recipeCount} recipes here are tested, timed and photographed, and what it will not do.`,
    keywords: ['about culinaryvault', 'recipe testing', 'food blog team', 'recipe standards',
               'how recipes are tested', 'aviation student cook', 'hobbyist cook blog',
               'recipe accuracy', 'who writes these recipes',
               'editorial policy', 'photo licensing'],
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
      <p class="lede">Recipe suggestions, corrections, a step that did not work in your kitchen — all of it is useful. We read everything and reply to most things within two working days.</p>

      <div class="panel" style="margin-top:2rem">
        <h2 style="font-size:1.15rem">What we are best at answering</h2>
        <ul style="padding-left:1.1rem;margin:0">
          <li>A step that did not work, and what happened instead</li>
          <li>Substitutions for an ingredient you cannot get locally</li>
          <li>Recipes you would like us to test and add</li>
          <li>Errors in quantities, timings or temperatures</li>
        </ul>
      </div>

      <div class="panel" style="margin-top:1.25rem">
        <h2 style="font-size:1.15rem">Press &amp; syndication</h2>
        <p style="margin:0;font-size:.94rem;color:var(--text-soft)">
          Happy to talk about republishing a recipe with attribution and a link. Mention "syndication" in the subject line and it will reach the right desk.
        </p>
      </div>
    </div>

    <div class="panel">
      <h2 style="margin-top:0">Send a message</h2>
      <!-- Netlify Forms.
           Netlify's build bot scans the deployed HTML for a form carrying
           data-netlify and a name, and registers it at deploy time — which is
           why this has to be in the pre-rendered markup rather than added by
           script. The hidden form-name field is what identifies the submission
           when the browser posts it.
           The action is a real page in this site rather than Netlify's default,
           because _redirects sends every unmatched path to 404.html and a
           success URL that is not a file would be caught by it. -->
      <form name="contact" method="POST" action="${SITE.base}contact/success/"
            data-netlify="true" data-netlify-honeypot="bot-field"
            data-contact novalidate>
        <input type="hidden" name="form-name" value="contact">

        <!-- The honeypot. Bots fill in every field they find; people never see
             this one, so anything that arrives with it filled is discarded by
             Netlify before it reaches the inbox. Hidden from assistive
             technology as well as from sight, because it is not a real question. -->
        <p class="sr-only" aria-hidden="true">
          <label>Leave this field empty: <input name="bot-field" tabindex="-1" autocomplete="off"></label>
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
          Your name, email address, subject and message are sent to Netlify, which hosts this site,
          and I read them from there. Nothing else is collected &mdash; see the
          <a href="${SITE.base}privacy/">privacy page</a>.
        </p>
      </form>
    </div>
  </div>
</div>`;

  return layout({
    title: 'Contact',
    description: 'Send the Weekly Delight test kitchen a recipe suggestion, a correction, or a question about a step that did not work in your kitchen. Every message is read.',
    keywords: ['contact culinaryvault', 'recipe suggestions', 'food blog contact',
               'submit a recipe', 'report a recipe error', 'recipe request',
               'work with us', 'press enquiries', 'get in touch'],
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
  <p class="lede" style="margin-inline:auto">The recipe you were looking for has moved, been renamed, or never existed. Here are four we would happily cook instead.</p>
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
    description: `That page could not be found. Search ${recipeCount} tested recipes or browse our editor's picks instead.`,
    path: '404.html',
    noindex: true,
    criticalCss: ctx.criticalCss,
    categories: ctx.categoryCounts,
    cuisines: ctx.topCuisines,
    body
  });
}

module.exports = { home, directory, taxonomyPage, ingredientsIndex, cuisinesIndex, privacy, contactSuccess, categoriesIndex, about, contact, notFound };
