'use strict';
const { esc, humanTime, isoDuration, starsHtml, clamp } = require('../lib/util');
const { parse, formatQty, plainList } = require('../lib/ingredients');
const { SITE, ICONS, layout, card, newsletter, breadcrumbs, breadcrumbSchema, slug } = require('./layout');
const ads = require('./ads');

/**
 * Pull the first usable duration out of a step so we can offer an inline timer.
 * "Simmer for 15 minutes" -> 900s. Ranges take the lower bound so the cook
 * checks early rather than late.
 */
function detectTimer(text) {
  const range = /(\d+)\s*(?:to|–|-)\s*(\d+)\s*(second|minute|hour)s?/i.exec(text);
  const single = /(?:for|about|roughly)\s+(\d+)\s*(second|minute|hour)s?/i.exec(text);
  const match = range || single;
  if (!match) return null;

  const value = parseInt(match[1], 10);
  const unit = (range ? match[3] : match[2]).toLowerCase();
  const seconds = unit === 'hour' ? value * 3600 : unit === 'minute' ? value * 60 : value;
  if (seconds < 30 || seconds > 7200) return null;      // not worth a timer
  return { seconds, label: unit === 'second' ? `${value} sec` : unit === 'hour' ? `${value} hr` : `${value} min` };
}

function ingredientsHtml(lines) {
  return parse(lines).map((item, index) => {
    if (item.group) return `<li class="ing-group">${esc(item.group)}</li>`;
    const qty = item.qty
      ? `<span class="ing-qty" data-qty="${item.qty}" data-unit="${esc(item.unit)}">${esc(formatQty(item.qty, item.unit))}${item.unit ? ' ' + esc(item.unit) : ''}</span> `
      : '';
    return `<li><label class="ing-check">
      <input type="checkbox" data-ing="${index}">
      <span class="ing-text">${qty}${esc(item.name)}</span>
    </label></li>`;
  }).join('\n');
}

function stepsHtml(steps) {
  return steps.map((text, i) => {
    const timer = detectTimer(text);
    return `<li>
      <p class="step-text">${esc(text)}</p>
      <div class="step-actions">
        <button class="step-btn" type="button" data-step-done>Mark done</button>
        ${timer ? `<button class="step-btn" type="button" data-timer="${timer.seconds}">Start ${timer.label} timer</button>` : ''}
      </div>
    </li>`;
  }).join('\n');
}

function nutritionHtml(n) {
  const cells = [
    ['Calories', n[0], 'kcal'], ['Protein', n[1], 'g'], ['Carbs', n[2], 'g'],
    ['Fat', n[3], 'g'], ['Fibre', n[4], 'g'], ['Sugar', n[5], 'g'], ['Sodium', n[6], 'mg']
  ];
  return `<div class="nutrition">${cells.map(([label, value, unit]) =>
    `<div><strong>${value}${unit === 'kcal' ? '' : unit}</strong><span>${label}</span></div>`).join('')}</div>`;
}

function recipeSchema(recipe) {
  const url = `${SITE.origin}${SITE.base}recipes/${recipe.slug}/`;
  const image = recipe.imageData
    ? [`${SITE.origin}${SITE.base}assets/img/recipes/${recipe.imageData.file}.jpg`]
    : [`${SITE.origin}${SITE.base}assets/img/og-default.jpg`];

  return {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: recipe.title,
    image,
    author: { '@type': 'Organization', name: SITE.author, url: SITE.origin + SITE.base },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      logo: { '@type': 'ImageObject', url: `${SITE.origin}${SITE.base}assets/img/icon-192.png` }
    },
    datePublished: recipe.datePublished,
    dateModified: recipe.dateModified,
    description: recipe.description,
    prepTime: isoDuration(recipe.prep),
    cookTime: isoDuration(recipe.cook),
    totalTime: isoDuration(recipe.totalTime),
    recipeYield: `${recipe.servings} servings`,
    recipeCategory: recipe.category,
    recipeCuisine: recipe.cuisine,
    keywords: recipe.keywords.join(', '),
    suitableForDiet: recipe.tags.map(t => ({
      'Vegetarian': 'https://schema.org/VegetarianDiet',
      'Vegan': 'https://schema.org/VeganDiet',
      'Gluten-Free': 'https://schema.org/GlutenFreeDiet',
      'Low-Carb': 'https://schema.org/LowCalorieDiet',
      'Keto': 'https://schema.org/LowCalorieDiet',
      'Dairy-Free': 'https://schema.org/LowLactoseDiet'
    }[t])).filter(Boolean),
    nutrition: {
      '@type': 'NutritionInformation',
      servingSize: '1 serving',
      calories: `${recipe.nutrition[0]} calories`,
      proteinContent: `${recipe.nutrition[1]} g`,
      carbohydrateContent: `${recipe.nutrition[2]} g`,
      fatContent: `${recipe.nutrition[3]} g`,
      fiberContent: `${recipe.nutrition[4]} g`,
      sugarContent: `${recipe.nutrition[5]} g`,
      sodiumContent: `${recipe.nutrition[6]} mg`
    },
    recipeIngredient: plainList(recipe.ingredients),
    recipeInstructions: recipe.steps.map((text, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: `Step ${i + 1}`,
      text,
      url: `${url}#step-${i + 1}`
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: recipe.rating.toFixed(1),
      reviewCount: recipe.reviews,
      bestRating: '5',
      worstRating: '1'
    },
    tool: [],
    mainEntityOfPage: { '@type': 'WebPage', '@id': url }
  };
}

function render(recipe, context) {
  const img = recipe.imageData;
  const process = recipe.processData;
  const url = `${SITE.origin}${SITE.base}recipes/${recipe.slug}/`;

  const trail = [
    { name: 'Home', url: SITE.base },
    { name: 'Recipes', url: `${SITE.base}recipes/` },
    { name: recipe.category, url: `${SITE.base}categories/${slug(recipe.category)}/` },
    { name: recipe.title }
  ];

  const heroImg = img
    ? `<picture>
        <source srcset="${SITE.base}assets/img/recipes/${img.file}.webp" type="image/webp">
        <img src="${SITE.base}assets/img/recipes/${img.file}.jpg" alt="${esc(recipe.imageAlt)}"
             width="800" height="600" fetchpriority="high" decoding="async"
             data-fade data-title="${esc(recipe.title)}" data-ph-a="${img.color}" data-ph-b="#8c5a3c">
       </picture>`
    : `<div class="img-fallback" role="img" aria-label="${esc(recipe.imageAlt)}"><span>${esc(recipe.title)}</span></div>`;

  const processBlock = process ? `
    <figure style="margin:2.5rem 0">
      <picture>
        <source srcset="${SITE.base}assets/img/recipes/${process.file}.webp" type="image/webp">
        <img src="${SITE.base}assets/img/recipes/${process.file}.jpg"
             alt="${esc(recipe.processAlt)}" width="640" height="480" loading="lazy" decoding="async"
             data-fade data-title="${esc(recipe.title)}" data-ph-a="${process.color}" data-ph-b="#8c5a3c"
             style="border-radius:var(--radius-lg);width:100%">
      </picture>
      <figcaption style="font-size:.84rem;color:var(--text-soft);margin-top:.6rem;text-align:center">
        ${esc(recipe.processAlt)}
      </figcaption>
    </figure>` : '';

  const dietTags = recipe.tags.length
    ? `<div class="tag-row" style="margin-top:1rem">${recipe.tags.map(t =>
        `<a class="tag" href="${SITE.base}recipes/?tag=${encodeURIComponent(t)}">${esc(t)}</a>`).join('')}</div>`
    : '';

  const body = `
${breadcrumbs(trail)}
<div class="wrap">
  <article data-recipe="${recipe.slug}" data-servings="${recipe.servings}"
           data-image="${img ? `${SITE.origin}${SITE.base}assets/img/recipes/${img.file}.jpg` : ''}"
           itemscope itemtype="https://schema.org/Recipe">

    <div class="recipe-masthead">
      <header class="recipe-head">
        <span class="eyebrow">${esc(recipe.cuisine)} &middot; ${esc(recipe.category)}</span>
        <h1 itemprop="name">${esc(recipe.title)}</h1>
        <p class="lede" itemprop="description">${esc(recipe.description)}</p>

        <div class="recipe-meta">
          ${starsHtml(recipe.rating, recipe.reviews)}
          <span>${ICONS.clock}<strong>${humanTime(recipe.totalTime)}</strong> total</span>
          <span>${ICONS.users}Serves <strong data-yield>${recipe.servings} servings</strong></span>
          <span>${ICONS.gauge}<strong>${esc(recipe.difficulty)}</strong></span>
        </div>

        <div class="action-bar">
          <a class="btn btn--primary" href="#recipe-card">${ICONS.jump} Jump to Recipe</a>
          <a class="btn btn--ghost" href="#method">${ICONS.jump} Method</a>
          <button class="btn btn--ghost" type="button" data-cook-toggle aria-pressed="false">${ICONS.chef} Cook Mode</button>
          <button class="btn btn--ghost" type="button" data-print>${ICONS.print} Print</button>
          <button class="btn btn--ghost fav-btn fav-btn--inline" type="button" data-slug="${recipe.slug}"
                  data-title="${esc(recipe.title)}" aria-pressed="false">${ICONS.heart} Save</button>
        </div>
      </header>

      <div class="recipe-hero" style="background:${img ? img.color : 'var(--bg-sunken)'}${img ? `;background-image:url('${img.lqip}');background-size:cover;background-position:center` : ''}">
        ${heroImg}
      </div>
    </div>

    ${ads.nativeBanner(0, 'Advertisement below the recipe introduction')}

    <div class="recipe-layout">
      <div class="prose">
        <aside class="why-panel" aria-labelledby="why-title">
          <h2 id="why-title">Why This Recipe Works</h2>
          <p>${esc(recipe.why)}</p>
        </aside>
        ${processBlock}

        <h2 id="method">Method</h2>
        <p class="form-note" style="margin-bottom:1rem">
          Tap a step to highlight it, or turn on Cook Mode for large type and step-by-step focus.
        </p>
        <ol class="steps">${stepsHtml(recipe.steps)}</ol>

        <h2>Chef&rsquo;s Tips</h2>
        <ul>${recipe.tips.map(t => `<li>${esc(t)}</li>`).join('')}</ul>

        <h2>Pairing Suggestions</h2>
        <ul>${recipe.pairings.map(p => `<li>${esc(p)}</li>`).join('')}</ul>

        <h2>Storage &amp; Reheating</h2>
        <p>${esc(recipe.storage)}</p>

        <h2>Nutritional Highlights</h2>
        <p class="form-note">Per serving, calculated from the ingredient list. Treat these as an estimate — brands and cuts vary.</p>
        ${nutritionHtml(recipe.nutrition)}
        ${dietTags}

        <section class="reviews" aria-labelledby="reviews-title" style="margin-top:3rem">
          <h2 id="reviews-title">Reader Reviews</h2>
          <p class="form-note" id="review-summary"></p>
          <div id="review-list"></div>

          <div class="panel" style="margin-top:1.5rem">
            <h3>Cooked this? Leave a review</h3>
            <form id="review-form" class="review-form" novalidate>
              <div>
                <span class="sr-only" id="rating-label">Your rating out of 5</span>
                <div class="star-input" role="radiogroup" aria-labelledby="rating-label">
                  ${[5, 4, 3, 2, 1].map(n => `
                  <input type="radio" name="rating" id="star-${n}" value="${n}">
                  <label for="star-${n}" title="${n} star${n > 1 ? 's' : ''}"><span class="sr-only">${n} stars</span>&#9733;</label>`).join('')}
                </div>
              </div>
              <div class="field">
                <label for="review-name">Your name</label>
                <input type="text" id="review-name" name="name" autocomplete="name" required>
              </div>
              <div class="field">
                <label for="review-body">How did it go?</label>
                <textarea id="review-body" name="body" required
                          placeholder="Did you change anything? How did it turn out?"></textarea>
              </div>
              <button class="btn btn--primary" type="submit">Post review</button>
              <p class="form-status" id="review-status" role="status" hidden></p>
              <p class="form-note">Reviews are stored in your browser only — nothing is sent to a server.</p>
            </form>
          </div>
        </section>
      </div>

      <aside class="recipe-aside" id="recipe-card" aria-label="Recipe card">
        <div class="panel panel--accent">
          <h3>Ingredients</h3>
          <div class="servings-control" data-scaler>
            <span>Servings</span>
            <button type="button" data-servings-dec aria-label="Fewer servings">&minus;</button>
            <output data-servings-out aria-live="polite">${recipe.servings}</output>
            <button type="button" data-servings-inc aria-label="More servings">+</button>
          </div>
          <button class="btn btn--ghost btn--sm btn--block" type="button" data-servings-reset hidden
                  style="margin-bottom:1rem">Reset to ${recipe.servings} servings</button>
          <ul class="ingredients">${ingredientsHtml(recipe.ingredients)}</ul>
          <button class="btn btn--ghost btn--sm btn--block" type="button" data-clear-ingredients
                  style="margin-top:1rem">Clear checklist</button>
        </div>

        <div class="panel">
          <h3>At a glance</h3>
          <dl style="display:grid;grid-template-columns:auto 1fr;gap:.5rem 1rem;margin:0;font-size:.9rem">
            <dt style="color:var(--text-soft)">Prep</dt><dd style="margin:0;font-weight:600">${humanTime(recipe.prep)}</dd>
            <dt style="color:var(--text-soft)">Cook</dt><dd style="margin:0;font-weight:600">${humanTime(recipe.cook)}</dd>
            <dt style="color:var(--text-soft)">Total</dt><dd style="margin:0;font-weight:600">${humanTime(recipe.totalTime)}</dd>
            <dt style="color:var(--text-soft)">Difficulty</dt><dd style="margin:0;font-weight:600">${esc(recipe.difficulty)}</dd>
            <dt style="color:var(--text-soft)">Cuisine</dt><dd style="margin:0;font-weight:600">${esc(recipe.cuisine)}</dd>
          </dl>
        </div>

        <div class="panel">
          <h3>Share this recipe</h3>
          <div class="share-row">
            <button class="share-btn share-btn--pin" type="button" data-share="pinterest" aria-label="Pin this recipe on Pinterest" title="Pin it">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.6 19.3c-.1-.8-.2-2 0-2.9l1.3-5.4s-.3-.6-.3-1.6c0-1.5.9-2.6 2-2.6.9 0 1.4.7 1.4 1.5 0 .9-.6 2.3-.9 3.6-.3 1 .6 1.9 1.6 1.9 1.9 0 3.2-2.4 3.2-5.3 0-2.2-1.5-3.8-4.2-3.8a4.8 4.8 0 0 0-5 4.8c0 .9.3 1.5.7 2 .2.2.2.3.1.6l-.2.9c-.1.3-.3.4-.6.2-1.2-.5-1.8-1.9-1.8-3.5 0-2.6 2.2-5.7 6.5-5.7 3.5 0 5.8 2.5 5.8 5.2 0 3.6-2 6.2-4.9 6.2-1 0-1.9-.5-2.2-1.1l-.6 2.4c-.2.8-.7 1.7-1.1 2.3A10 10 0 1 0 12 2z"/></svg>
            </button>
            <button class="share-btn" type="button" data-share="facebook" aria-label="Share on Facebook" title="Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 9h3V6h-3c-2 0-3.5 1.6-3.5 3.6V12H8v3h2.5v7h3v-7H16l.5-3h-3V9.6c0-.3.2-.6.5-.6z"/></svg>
            </button>
            <button class="share-btn" type="button" data-share="x" aria-label="Share on X" title="X">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.5 3h3l-6.6 7.6L21.6 21h-6l-4.7-6.1L5.5 21h-3l7-8.1L2.2 3h6.1l4.3 5.6L17.5 3zm-1 16h1.7L7.6 4.7H5.8L16.5 19z"/></svg>
            </button>
            <button class="share-btn" type="button" data-share="whatsapp" aria-label="Share on WhatsApp" title="WhatsApp">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm5.4 14c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-1.6-.1a12 12 0 0 1-5.6-4.9c-.4-.7-.9-1.6-.9-2.5s.5-1.4.7-1.6c.2-.2.4-.3.6-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2 0 .4-.1.5l-.4.5c-.1.2-.3.3-.1.6a8 8 0 0 0 3.6 3.1c.3.1.4.1.6-.1l.8-1c.2-.2.3-.2.6-.1l2 .9c.2.1.4.2.4.3v.9z"/></svg>
            </button>
            <button class="share-btn" type="button" data-share="email" aria-label="Share by email" title="Email">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18v14H3z" fill="none" stroke="currentColor" stroke-width="2"/><path d="m3 6 9 7 9-7" fill="none" stroke="currentColor" stroke-width="2"/></svg>
            </button>
            <button class="share-btn" type="button" data-share="copy" aria-label="Copy link" title="Copy link">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 9h10v10H9z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M5 15H4V4h11v1" fill="none" stroke="currentColor" stroke-width="2"/></svg>
            </button>
          </div>
        </div>
      </aside>
    </div>

    ${ads.nativeBanner(1, 'Advertisement below the method and ingredients')}

    <section class="related section" aria-labelledby="related-title">
      <div class="section-head">
        <div>
          <span class="eyebrow">Keep going</span>
          <h2 id="related-title">Related Recipes</h2>
          <p>More ${esc(recipe.cuisine)} cooking and ${esc(recipe.category.toLowerCase())} ideas from the Vault.</p>
        </div>
        <a class="btn btn--ghost" href="${SITE.base}cuisines/${slug(recipe.cuisine)}/">All ${esc(recipe.cuisine)} recipes</a>
      </div>
      <div class="related-grid">${recipe.related.map(r => card(r)).join('')}</div>
    </section>

    ${newsletter('recipe-news')}
  </article>
</div>
<button class="btn btn--primary cook-exit" type="button" data-cook-exit>Exit Cook Mode</button>`;

  return layout({
    title: recipe.title,
    description: recipe.meta,
    keywords: recipe.keywords,
    path: `recipes/${recipe.slug}/`,
    active: 'recipes',
    ogType: 'article',
    image: img ? `${SITE.origin}${SITE.base}assets/img/recipes/${img.file}.jpg` : undefined,
    imageAlt: recipe.imageAlt,
    schema: [recipeSchema(recipe), breadcrumbSchema(trail)],
    scripts: ['recipe.js'],
    criticalCss: context.criticalCss,
    categories: context.categoryCounts,
    cuisines: context.topCuisines,
    body
  });
}

module.exports = { render, recipeSchema, detectTimer };
