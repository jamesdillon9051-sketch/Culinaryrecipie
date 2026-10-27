#!/usr/bin/env node
'use strict';
/**
 * The built pages this release added or reorganised, checked as a reader and a
 * crawler would meet them. Part of `npm run check`; run after `npm run build`.
 *
 * - The Dinner category leads with main courses: no side, sauce, condiment or
 *   kitchen basic among its picture cards.
 * - Every collection and the weekly plan link only to recipes that exist, are
 *   indexable, self-canonical and in the sitemap.
 * - The reader's own plan and the report page are noindex and not in the sitemap.
 * - The weekly plan carries its ingredient data and a non-empty shopping list.
 * - Recipe pages keep one Recipe entity, carry a report link naming the recipe,
 *   and publish no rating while src/data/reviews.json is empty.
 */
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const read = rel => fs.readFileSync(path.join(ROOT, rel), 'utf8');
const exists = rel => fs.existsSync(path.join(ROOT, rel));
const failures = [];
const fail = m => failures.push(m);

const sitemap = fs.readdirSync(ROOT).filter(f => /^sitemap-\d+\.xml$/.test(f)).map(read).join('');
const inSitemap = p => sitemap.includes(`<loc>https://weeklydelight.com/${p}</loc>`);
const canonicalOf = html => (html.match(/<link rel="canonical" href="([^"]+)"/) || [])[1];
const noindex = html => /<meta name="robots" content="noindex/.test(html);

/* Dinner leads with main courses. */
{
  const html = read('categories/dinner/index.html');
  const lead = html.split('id="tax-list-title"')[1].split('</section>')[0];
  const kickers = [...lead.matchAll(/<span class="card-kicker">([^<]+)<\/span>/g)].map(m => m[1]);
  if (!kickers.length) fail('categories/dinner/: no picture cards under the main-dish heading');
  for (const k of kickers) if (/Side dish|Sauce|Condiment|Kitchen basic|Bread/.test(k)) fail(`categories/dinner/: a "${k}" card among the main dishes`);
  if (!/id="group-side"/.test(html) || !/id="group-sauce"/.test(html)) fail('categories/dinner/: sides and sauces are not listed in their own sections');
  for (const bad of ['barbecue-rub', 'buttered-peas', 'pan-gravy']) {
    if (lead.includes(`/recipes/${bad}/`)) fail(`categories/dinner/: ${bad} is listed as a main dish`);
    if (!html.includes(`/recipes/${bad}/`)) fail(`categories/dinner/: ${bad} is no longer linked at all`);
  }
}

/* Collections and the weekly plan. */
const curatedPages = ['collections/', 'weekly-plan/', 'guides/'].concat(
  fs.readdirSync(path.join(ROOT, 'collections')).filter(d => fs.statSync(path.join(ROOT, 'collections', d)).isDirectory()).map(d => `collections/${d}/`),
  fs.readdirSync(path.join(ROOT, 'guides')).filter(d => fs.statSync(path.join(ROOT, 'guides', d)).isDirectory()).map(d => `guides/${d}/`));
for (const p of curatedPages) {
  const html = read(p + 'index.html');
  if (noindex(html)) fail(`${p}: noindex on a page meant to be found`);
  if (canonicalOf(html) !== `https://weeklydelight.com/${p}`) fail(`${p}: canonical is ${canonicalOf(html)}`);
  if (!inSitemap(p)) fail(`${p}: not in the sitemap`);
  for (const m of html.matchAll(/href="\/recipes\/([a-z0-9-]+)\/"/g)) {
    if (!exists(`recipes/${m[1]}/index.html`)) fail(`${p}: links to /recipes/${m[1]}/, which was not built`);
  }
}
{
  const html = read('weekly-plan/index.html');
  const data = JSON.parse((html.match(/<script type="application\/json" id="plan-data">([\s\S]*?)<\/script>/) || [])[1] || '[]');
  if (data.length !== 5) fail(`weekly-plan/: ${data.length} recipes in the plan data, not 5`);
  if ((html.match(/data-shop-item/g) || []).length < 15) fail('weekly-plan/: the shopping list is short or missing');
  if (!/Check the cupboard/.test(html)) fail('weekly-plan/: pantry staples are not listed apart');
}
for (const p of ['my-plan/', 'report/', 'search/', 'favourites/']) {
  const html = read(p + 'index.html');
  if (!noindex(html)) fail(`${p}: should be noindex`);
  if (inSitemap(p)) fail(`${p}: should not be in the sitemap`);
}

/* Recipe pages, sampled across the catalogue. */
const recipes = fs.readdirSync(path.join(ROOT, 'recipes')).filter(d => exists(`recipes/${d}/index.html`));
const reviews = JSON.parse(read('src/data/reviews.json'));
const sample = recipes.filter((_, i) => i % 97 === 0).concat(['pad-thai', 'barbecue-rub', 'banana-bread', 'caesar-salad']);
for (const slug of sample) {
  const html = read(`recipes/${slug}/index.html`);
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m => JSON.parse(m[1]));
  const recipesLd = blocks.flatMap(b => [].concat(b)).filter(b => b['@type'] === 'Recipe');
  if (recipesLd.length !== 1) fail(`recipes/${slug}/: ${recipesLd.length} Recipe entities`);
  if (!Object.keys(reviews).length && recipesLd.some(r => r.aggregateRating || r.review)) fail(`recipes/${slug}/: rating markup with no published reviews`);
  if (!html.includes(`/report/?recipe=${slug}&amp;v=`)) fail(`recipes/${slug}/: no report link naming the recipe`);
  if (!/data-scale="(?:bake|cook)"/.test(html)) fail(`recipes/${slug}/: the scaler does not know whether this is a bake`);
}
{
  const rub = read('recipes/barbecue-rub/index.html');
  if (!/Condiment, dressing or rub/.test(rub)) fail('recipes/barbecue-rub/: the course is not shown as a condiment');
  const bread = read('recipes/banana-bread/index.html');
  if (!/data-scale="bake"/.test(bread)) fail('recipes/banana-bread/: not treated as a bake by the scaler');
}

if (failures.length) { for (const f of failures) console.log(`  ✗ ${f}`); process.exit(1); }
console.log(`  ✓ release pages: Dinner leads with mains; ${curatedPages.length} curated pages indexable and linked; ${sample.length} recipe pages sampled`);
