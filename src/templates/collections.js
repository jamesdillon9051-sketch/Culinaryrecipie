'use strict';
/**
 * Curated collections, the weekly plan and the reader's own plan.
 *
 * The collections and the weekly plan are permanent, indexable pages with a
 * fixed URL each (src/data/collections.js says why each recipe is there). The
 * reader's plan (/my-plan/) is built in the browser from their saved recipes,
 * so it is noindex and not in the sitemap: there is nothing on it for a
 * crawler until someone uses it.
 */
const { esc, humanTime, humanWaitRange, compactTime, plural } = require('../lib/util');
const { SITE, ICONS, layout, card, newsletter, breadcrumbs, breadcrumbSchema } = require('./layout');

const recipeUrl = r => `${SITE.base}recipes/${r.slug}/`;
const absolute = path => `${SITE.origin}${SITE.base}${path}`;

/* The decision routes: the same list on the home page, the Dinner category and the collections index. */
function routes(ctx, { heading = 'What do you need tonight?', id = 'routes' } = {}) {
  const list = [
    ['collections/complete-dinners-in-30-minutes/', 'Complete dinners in 30 minutes', 'Protein, vegetables and a starch, start to finish'],
    ['collections/one-pan-dinners/', 'One-pan dinners', 'One tin, tray, pan or pot to wash'],
    ['collections/dinner-for-two/', 'Dinner for two', 'Written for two, nothing to halve'],
    ['weekly-plan/', 'Five dinners for this week', 'With one shopping list'],
    ['collections/cook-once-eat-twice/', 'Cook once, eat twice', 'A second dinner from the leftovers'],
    ['collections/beginner-baking/', 'Beginner-friendly baking', 'No mixer, no yeast'],
    ['ingredients/', 'Start from an ingredient', 'Chicken, rice, lentils and more'],
    ['recipes/?course=main&difficulty=Easy', 'Easy main dishes', 'Filtered from the whole index']
  ];
  return `<nav class="routes" aria-labelledby="${id}-title">
    <h2 id="${id}-title" class="routes__title">${esc(heading)}</h2>
    <ul class="routes__list">${list.map(([href, title, sub]) => `
      <li><a href="${SITE.base}${href}"><strong>${esc(title)}</strong><span>${esc(sub)}</span></a></li>`).join('')}
    </ul>
  </nav>`;
}

/** Prep, cook, waiting and total as a reader needs them, from the recipe's own figures. */
function timesLine(r) {
  const bits = [`Prep ${humanTime(r.prep)}`, `cook ${r.cookMax > r.cook ? humanWaitRange(r.cook, r.cookMax) : humanTime(r.cook)}`];
  if (r.restTime || r.restMax) bits.push(`${r.restLabel || 'waiting'} ${humanWaitRange(r.restTime, r.restMax)}`);
  return `${bits.join(', ')}; <strong>${r.untimed ? 'at least ' : ''}${humanWaitRange(r.elapsedTime, r.elapsedMax)}</strong> start to finish`;
}

function itemHtml(item, index, collection) {
  const r = item.recipe;
  const img = r.imageData;
  const media = img
    ? `<picture><source srcset="${SITE.base}assets/img/recipes/${img.file}.webp" type="image/webp">
        <img src="${SITE.base}assets/img/recipes/${img.file}.jpg" alt="${esc(r.imageAlt)}" width="800" height="600"
             loading="${index < 2 ? 'eager' : 'lazy'}" decoding="async"></picture>`
    : `<div class="img-fallback" role="img" aria-label="${esc(r.imageAlt)}"><span>${esc(r.title)}</span></div>`;
  const second = item.secondRecipe ? `
      <p class="pick__second"><strong>Second dinner:</strong> <a href="${recipeUrl(item.secondRecipe)}">${esc(item.secondRecipe.title)}</a>
        &middot; keep back ${esc(item.keep)}${item.alsoRecipe ? `, or use it in <a href="${recipeUrl(item.alsoRecipe)}">${esc(item.alsoRecipe.title)}</a>` : ''}.
        <span class="pick__store">Keeping, from the recipe: ${esc(r.storage)}</span></p>` : '';
  return `<li class="pick" id="${esc(r.slug)}">
    <a class="pick__media" href="${recipeUrl(r)}" tabindex="-1" aria-hidden="true" style="background:${img ? img.color : 'var(--bg-sunken)'}">${media}</a>
    <div class="pick__body">
      <span class="pick__num" aria-hidden="true">${index + 1}</span>
      <h3><a href="${recipeUrl(r)}">${esc(r.title)}</a></h3>
      <p class="pick__why">${esc(item.why)}</p>
      ${item.note ? `<p class="pick__note">${esc(item.note)}</p>` : ''}
      <dl class="pick__facts">
        <div><dt>Time</dt><dd>${timesLine(r)}</dd></div>
        <div><dt>Serves</dt><dd>${r.servings}</dd></div>
        ${item.kit ? `<div><dt>Equipment</dt><dd>${esc(item.kit)}</dd></div>` : ''}
        <div><dt>Difficulty</dt><dd>${esc(r.difficulty)}</dd></div>
      </dl>
      ${second}
    </div>
  </li>`;
}

function collectionPage(ctx, collection, all, sources) {
  const path = `collections/${collection.slug}/`;
  const trail = [{ name: 'Home', url: SITE.base }, { name: 'Collections', url: `${SITE.base}collections/` }, { name: collection.title }];
  const others = all.filter(c => c.slug !== collection.slug);
  const body = `
${breadcrumbs(trail)}
<div class="wrap section collection" style="padding-top:1rem">
  <header class="section-head">
    <div>
      <span class="eyebrow">Collection &middot; ${plural(collection.items.length, 'recipe')}</span>
      <h1>${esc(collection.title)}</h1>
      <p class="lede">${esc(collection.purpose)}</p>
      <p>${esc(collection.intro)}</p>
    </div>
  </header>

  <section class="criteria panel" aria-labelledby="criteria-title">
    <h2 id="criteria-title">How these were chosen</h2>
    <ul>${collection.criteria.map(c => `<li>${esc(c)}</li>`).join('')}</ul>
    <p class="form-note">Chosen by reading each recipe's ingredients and method, and checked against the recipe again every time the site is built. Times are the recipes' own figures. None of these recipes has been cooked for this collection yet; <a href="${SITE.base}about/#how-checked">how recipes are checked</a>.${collection.slug === 'cook-once-eat-twice' ? ` Leftover guidance: <a href="${sources.leftovers.url}" rel="noopener">${esc(sources.leftovers.name)}</a>.` : ''}</p>
  </section>

  <ol class="picks">${collection.items.map((item, i) => itemHtml(item, i, collection)).join('')}</ol>

  <nav class="hub-links" aria-labelledby="more-collections">
    <h2 id="more-collections">Other collections</h2>
    <ul>${others.map(c => `<li><a href="${SITE.base}collections/${c.slug}/">${esc(c.title)}</a> <span>${c.items.length}</span></li>`).join('')}
      <li><a href="${SITE.base}weekly-plan/">Five dinners for this week</a> <span>5</span></li></ul>
  </nav>
</div>
<div class="wrap" style="padding-bottom:clamp(3rem,7vw,5rem)">${newsletter(`col-${collection.slug}-news`)}</div>`;

  return layout({
    title: collection.title,
    description: collection.meta,
    keywords: [],
    path,
    active: 'collections',
    criticalCss: ctx.criticalCss,
    categories: ctx.categoryCounts,
    cuisines: ctx.topCuisines,
    image: collection.items[0].recipe.imageData ? absolute(`assets/img/recipes/${collection.items[0].recipe.imageData.file}.jpg`) : undefined,
    schema: [breadcrumbSchema(trail), {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: collection.title,
      description: collection.purpose,
      url: absolute(path),
      mainEntity: {
        '@type': 'ItemList',
        numberOfItems: collection.items.length,
        itemListElement: collection.items.map((item, i) => ({
          '@type': 'ListItem', position: i + 1, name: item.recipe.title, url: absolute(`recipes/${item.recipe.slug}/`)
        }))
      }
    }],
    body
  });
}

function collectionsIndex(ctx, all, plan) {
  const trail = [{ name: 'Home', url: SITE.base }, { name: 'Collections' }];
  const tile = (href, title, purpose, count, r) => `<li class="collection-tile">
      <a href="${href}">
        <span class="collection-tile__media" style="background:${r && r.imageData ? r.imageData.color : 'var(--bg-sunken)'}">${r && r.imageData
          ? `<img src="${SITE.base}assets/img/recipes/${r.imageData.file}.jpg" alt="" width="800" height="600" loading="lazy" decoding="async">` : ''}</span>
        <h2 class="collection-tile__title">${esc(title)}</h2>
        <span>${esc(purpose)}</span>
        <em>${plural(count, 'recipe')}</em>
      </a>
    </li>`;
  const body = `
${breadcrumbs(trail)}
<div class="wrap section" style="padding-top:1rem">
  <header class="section-head">
    <div>
      <span class="eyebrow">Collections</span>
      <h1>Recipe collections</h1>
      <p class="lede">Short lists for a particular job, each chosen by reading the recipes and checked against them on every build.</p>
      <p>The full index can be filtered any way you like. These pages are the few combinations worth a permanent page: each says what it is for, how its recipes were chosen and why each one is there.</p>
    </div>
  </header>
  <ul class="collection-grid">
    ${tile(`${SITE.base}weekly-plan/`, plan.title, 'Five dinners for four, one shopping list, and a plan for the week.', plan.days.length, plan.days[2].recipe)}
    ${all.map(c => tile(`${SITE.base}collections/${c.slug}/`, c.title, c.purpose, c.items.length, c.items[0].recipe)).join('')}
  </ul>
</div>`;
  return layout({
    title: 'Recipe Collections',
    description: 'Six short recipe collections from Weekly Delight: 30-minute dinners, one-pan dinners, dinner for two, cook once eat twice, baking, and five dinners a week.',
    keywords: [],
    path: 'collections/',
    active: 'collections',
    criticalCss: ctx.criticalCss,
    categories: ctx.categoryCounts,
    cuisines: ctx.topCuisines,
    schema: [breadcrumbSchema(trail), {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Recipe collections',
      url: absolute('collections/'),
      hasPart: [{ '@type': 'WebPage', name: plan.title, url: absolute('weekly-plan/') }]
        .concat(all.map(c => ({ '@type': 'WebPage', name: c.title, url: absolute(`collections/${c.slug}/`) })))
    }],
    body
  });
}

/** The shopping list as the build works it out for the default servings. The page's script redraws it when they change. */
function shoppingHtml(lists) {
  const row = i => `<li><label class="ing-check"><input type="checkbox" data-shop-item>
      <span class="shop-qty">${esc(i.amount)}</span> <span class="shop-name">${esc(i.name)}${i.toServe ? ' <em>(to serve)</em>' : ''}</span></label>
      <span class="shop-from">${esc(i.from.join(', '))}</span></li>`;
  return `<div data-shop-lists>
    <h3>To buy <span class="hub-group__count">${lists.buy.length}</span></h3>
    <ul class="shop-list">${lists.buy.map(row).join('')}</ul>
    <h3>Check the cupboard <span class="hub-group__count">${lists.pantry.length}</span></h3>
    <p class="form-note">Seasonings, oils and dry goods most kitchens keep. Listed so you can check, not assumed.</p>
    <ul class="shop-list shop-list--pantry">${lists.pantry.map(row).join('')}</ul>
    ${lists.optional.length ? `<h3>Optional</h3><ul class="shop-list">${lists.optional.map(row).join('')}</ul>` : ''}
  </div>`;
}

function weeklyPlanPage(ctx, plan) {
  const path = 'weekly-plan/';
  const trail = [{ name: 'Home', url: SITE.base }, { name: 'Collections', url: `${SITE.base}collections/` }, { name: plan.title }];
  const body = `
${breadcrumbs(trail)}
<div class="wrap section weekly-plan" style="padding-top:1rem" data-weekly-plan>
  <header class="section-head">
    <div>
      <span class="eyebrow">Weekly plan &middot; updated <time datetime="${plan.updated}">${esc(plan.updated)}</time></span>
      <h1>${esc(plan.title)}</h1>
      <p class="lede">${esc(plan.intro)}</p>
    </div>
    <div class="action-bar">
      <button class="btn btn--primary" type="button" data-print>${ICONS.print} Print plan and list</button>
      <button class="btn btn--ghost" type="button" data-plan-save>${ICONS.heart} Save all five</button>
    </div>
  </header>

  <section aria-labelledby="plan-days">
    <h2 id="plan-days">The dinners</h2>
    <div class="servings-control plan-servings" data-plan-scaler>
      <span id="plan-people-label">People at each dinner</span>
      <button type="button" data-plan-dec aria-label="Fewer people">&minus;</button>
      <output data-plan-people aria-live="polite" aria-labelledby="plan-people-label">${plan.people}</output>
      <button type="button" data-plan-inc aria-label="More people">+</button>
    </div>
    <p class="form-note" data-plan-scale-note>Each recipe is scaled from the servings it is written for. Cooking times do not change with the quantities; a bigger batch may need a bigger pan or two trays, and a crowded pan cooks more slowly.</p>
    <ol class="picks picks--plan">${plan.days.map((d, i) => `<li class="pick">
      <div class="pick__body">
        <span class="pick__num">${esc(d.day)}</span>
        <h3><a href="${recipeUrl(d.recipe)}">${esc(d.recipe.title)}</a></h3>
        <p class="pick__why">${esc(d.why)}</p>
        <dl class="pick__facts">
          <div><dt>Time</dt><dd>${timesLine(d.recipe)}</dd></div>
          <div><dt>Written for</dt><dd>${d.recipe.servings}; <span data-plan-factor="${d.recipe.servings}">scaled to ${plan.people}</span></dd></div>
          ${d.kit ? `<div><dt>Equipment</dt><dd>${esc(d.kit)}</dd></div>` : ''}
        </dl>
      </div></li>`).join('')}</ol>
  </section>

  <section class="panel" aria-labelledby="plan-schedule">
    <h2 id="plan-schedule">How the week runs</h2>
    <ul>${plan.schedule.map(s => `<li>${esc(s)}</li>`).join('')}</ul>
    <p class="form-note">Leftovers from any night: refrigerate within 2 hours and follow each recipe's own keeping note.</p>
  </section>

  <section class="shopping" aria-labelledby="plan-shopping">
    <h2 id="plan-shopping">Shopping list</h2>
    <p class="form-note">Added up from the five ingredient lists for the number of people above. The same food in compatible units is combined (grams with kilograms, spoons with spoons); a food given by weight in one recipe and by count in another is shown both ways rather than converted. Rounded for shopping.</p>
    ${shoppingHtml(plan.lists)}
    <script type="application/json" id="plan-data">${JSON.stringify(plan.clientData).replace(/</g, '\\u003c')}</script>
  </section>

  <section class="panel" aria-labelledby="plan-own">
    <h2 id="plan-own">Make your own plan</h2>
    <p>Save recipes with the heart button, then open <a href="${SITE.base}my-plan/">your plan</a> to put up to seven of them in a week and get one shopping list for all of them. It is kept in this browser only, with no account: clearing your browser data or switching device loses it.</p>
  </section>
</div>`;

  return layout({
    title: plan.title,
    description: 'Five dinners for four with overlapping ingredients, a day-by-day plan and one shopping list you can scale, tick off, print and save. No account or sign-up.',
    keywords: [],
    path,
    active: 'collections',
    criticalCss: ctx.criticalCss,
    categories: ctx.categoryCounts,
    cuisines: ctx.topCuisines,
    scripts: ['shopping-core.js', 'plan.js'],
    image: plan.days[0].recipe.imageData ? absolute(`assets/img/recipes/${plan.days[0].recipe.imageData.file}.jpg`) : undefined,
    schema: [breadcrumbSchema(trail), {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: plan.title,
      numberOfItems: plan.days.length,
      itemListElement: plan.days.map((d, i) => ({ '@type': 'ListItem', position: i + 1, name: `${d.day}: ${d.recipe.title}`, url: absolute(`recipes/${d.recipe.slug}/`) }))
    }],
    body
  });
}

function myPlanPage(ctx) {
  const trail = [{ name: 'Home', url: SITE.base }, { name: 'My plan' }];
  const body = `
${breadcrumbs(trail)}
<div class="wrap section" style="padding-top:1rem" data-my-plan>
  <header class="section-head">
    <div>
      <span class="eyebrow">Your plan</span>
      <h1>Plan your week from saved recipes</h1>
      <p class="lede">Choose up to seven of your saved recipes, set how many people each one feeds, and get one shopping list.</p>
      <p class="form-note">Everything here stays in this browser: no account, nothing sent anywhere. Clearing your browser data, using a private window or switching device starts it empty. Each recipe page is fetched once to read its ingredient list.</p>
    </div>
    <div class="action-bar">
      <button class="btn btn--primary" type="button" data-print>${ICONS.print} Print</button>
      <button class="btn btn--ghost" type="button" data-plan-clear>Clear plan</button>
    </div>
  </header>
  <section aria-labelledby="my-saved">
    <h2 id="my-saved">Your saved recipes</h2>
    <div data-my-saved><p class="form-note">Loading your saved recipes…</p></div>
  </section>
  <section aria-labelledby="my-plan-list">
    <h2 id="my-plan-list">This week</h2>
    <ol class="picks picks--plan" data-my-days></ol>
  </section>
  <section class="shopping" aria-labelledby="my-shopping">
    <h2 id="my-shopping">Shopping list</h2>
    <p class="form-note">Combined by the same rules as the <a href="${SITE.base}weekly-plan/">weekly plan</a>. Cooking times do not scale with the quantities, and a doubled batch may need a bigger pan.</p>
    <div data-my-shopping role="status" aria-live="polite"><p class="form-note">Add recipes above to see the list.</p></div>
  </section>
</div>`;
  return layout({
    title: 'My Plan',
    description: 'Your own week of dinners from your saved recipes, with a combined shopping list, kept in this browser only.',
    path: 'my-plan/',
    active: 'favourites',
    noindex: true,
    criticalCss: ctx.criticalCss,
    categories: ctx.categoryCounts,
    cuisines: ctx.topCuisines,
    scripts: ['shopping-core.js', 'plan.js'],
    schema: [breadcrumbSchema(trail)],
    body
  });
}

module.exports = { routes, collectionPage, collectionsIndex, weeklyPlanPage, myPlanPage, timesLine };
