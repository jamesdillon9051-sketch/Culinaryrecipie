'use strict';
/**
 * The cooking guides (src/data/guides.js): an index and one page each. Each page
 * names its sources and links to the recipes that show the technique; each of
 * those recipes links back (src/templates/recipe-page.js).
 */
const { esc, compactTime } = require('../lib/util');
const { SITE, layout, breadcrumbs, breadcrumbSchema } = require('./layout');

const absolute = path => `${SITE.origin}${SITE.base}${path}`;

function blockHtml(b) {
  if (b.h) return `<h2>${esc(b.h)}</h2>`;
  if (b.ul) return `<ul>${b.ul.map(i => `<li>${esc(i)}</li>`).join('')}</ul>`;
  return `<p>${esc(b.p)}</p>`;
}

function guidePage(ctx, guide, all, examples) {
  const path = `guides/${guide.slug}/`;
  const trail = [{ name: 'Home', url: SITE.base }, { name: 'Guides', url: `${SITE.base}guides/` }, { name: guide.short }];
  const body = `
${breadcrumbs(trail)}
<div class="wrap section guide" style="padding-top:1rem">
  <article class="prose guide__body">
    <span class="eyebrow">Cooking guide</span>
    <h1>${esc(guide.title)}</h1>
    <p class="lede">${esc(guide.lede)}</p>
    ${guide.body.map(blockHtml).join('\n    ')}

    ${examples.length ? `<h2>Recipes that use this</h2>
    <ul class="compact-list compact-list--actions">${examples.map(r => `<li><a href="${SITE.base}recipes/${r.slug}/">${esc(r.title)}</a>
      <span>${compactTime(r.elapsedTime, r.elapsedMax, !!r.untimed)}</span></li>`).join('')}</ul>` : ''}

    <aside class="panel sources" aria-labelledby="sources-title">
      <h2 id="sources-title">Sources</h2>
      <ul>${guide.sources.map(s => `<li><a href="${esc(s.url)}" rel="noopener">${esc(s.name)}</a></li>`).join('')}</ul>
      <p class="form-note">Written for Weekly Delight from these sources. Nothing here comes from a kitchen test; where a question needs one, the guide says so. <a href="${SITE.base}about/#corrections">Report a mistake</a>.</p>
    </aside>
  </article>
  <nav class="hub-links" aria-labelledby="more-guides">
    <h2 id="more-guides">More guides</h2>
    <ul>${all.filter(g => g.slug !== guide.slug).map(g => `<li><a href="${SITE.base}guides/${g.slug}/">${esc(g.title)}</a></li>`).join('')}</ul>
  </nav>
</div>`;
  return layout({
    title: guide.title,
    description: guide.description,
    path,
    active: 'guides',
    ogType: 'article',
    criticalCss: ctx.criticalCss,
    categories: ctx.categoryCounts,
    cuisines: ctx.topCuisines,
    schema: [breadcrumbSchema(trail), {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: guide.title,
      description: guide.description,
      author: { '@type': 'Person', name: SITE.author, url: absolute('about/') },
      publisher: { '@type': 'Organization', name: SITE.name, logo: { '@type': 'ImageObject', url: absolute('assets/img/icon-192.png') } },
      mainEntityOfPage: absolute(path),
      citation: guide.sources.map(s => s.url)
    }],
    body
  });
}

function guidesIndex(ctx, all) {
  const trail = [{ name: 'Home', url: SITE.base }, { name: 'Guides' }];
  const body = `
${breadcrumbs(trail)}
<div class="wrap section" style="padding-top:1rem">
  <header class="section-head">
    <div>
      <span class="eyebrow">Guides</span>
      <h1>Cooking guides</h1>
      <p class="lede">Short answers to the questions the recipes keep raising, each with its sources and the recipes that use it.</p>
    </div>
  </header>
  <h2 class="sr-only">All guides</h2>
  <ul class="routes__list">${all.map(g => `<li><a href="${SITE.base}guides/${g.slug}/"><strong>${esc(g.title)}</strong><span>${esc(g.description)}</span></a></li>`).join('')}</ul>
</div>`;
  return layout({
    title: 'Cooking Guides',
    description: 'Short cooking guides from Weekly Delight: reading recipe times, choosing rice, pan sizes, ingredient swaps and rescuing a split sauce, with sources.',
    path: 'guides/',
    active: 'guides',
    criticalCss: ctx.criticalCss,
    categories: ctx.categoryCounts,
    cuisines: ctx.topCuisines,
    schema: [breadcrumbSchema(trail)],
    body
  });
}

module.exports = { guidePage, guidesIndex };
