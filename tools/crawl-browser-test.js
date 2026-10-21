#!/usr/bin/env node
'use strict';
/* Optional Playwright dev tool, no production dependency.
   NODE_PATH=/tmp/culinary-browser/node_modules node tools/crawl-browser-test.js manifest.json out.json [--baseline]
   Start tools/serve.js first. Local tests block third parties; live sample does not.
*/
const fs = require('fs');
const { chromium } = require('playwright');
const [manifestPath, outPath, flag] = process.argv.slice(2);
const manifest = JSON.parse(fs.readFileSync(manifestPath));
const baseline = flag === '--baseline';
const layouts = new Map();
for (const r of manifest.routes) if (r.layout && !layouts.has(r.layout)) layouts.set(r.layout, r.route);

(async () => {
  const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || '/usr/bin/chromium', headless: true, args: ['--no-sandbox'] });
  const results = [];
  const context = await browser.newContext();
  await context.route('**/*', route => new URL(route.request().url()).hostname === 'localhost' ? route.continue() : route.abort());
  const page = await context.newPage();
  const inspect = async () => page.evaluate(() => {
    const entities = [];
    const walk = v => {
      if (Array.isArray(v)) v.forEach(walk);
      else if (v && typeof v === 'object') {
        if (v['@type']) entities.push(v);
        Object.values(v).forEach(walk);
      }
    };
    const invalid = [];
    document.querySelectorAll('script[type="application/ld+json"]').forEach(s => { try { walk(JSON.parse(s.textContent)); } catch(e) { invalid.push(String(e)); } });
    const isRecipe = t => [].concat(t || []).some(x => x === 'Recipe' || /[/:]Recipe$/.test(x));
    return { canonical: [...document.querySelectorAll('link[rel="canonical"]')].map(e => e.href),
      robots: [...document.querySelectorAll('meta[name="robots"],meta[name="googlebot"]')].map(e => e.content),
      h1: document.querySelector('h1')?.textContent,
      recipeJSONLD: entities.filter(e => isRecipe(e['@type'])).length,
      recipeMicrodata: [...document.querySelectorAll('[itemtype]')].filter(e => isRecipe(e.getAttribute('itemtype'))).length,
      recipeRDFa: [...document.querySelectorAll('[typeof]')].filter(e => isRecipe(e.getAttribute('typeof'))).length,
      schemaTypes: entities.map(e => e['@type']), invalidJSONLD: invalid,
      recipeLinks: new Set([...document.querySelectorAll('a[href]')].map(e => e.getAttribute('href')).filter(u => /^\/recipes\/[^/?#]+\/$/.test(u))).size,
      ingredientRows: document.querySelectorAll('.ingredient').length,
      article: !!document.querySelector('article[data-recipe]'),
      stepsMatch: entities.filter(e => isRecipe(e['@type'])).every(r =>
        (r.recipeInstructions || []).every(s => {
          const target = s.url && document.getElementById(new URL(s.url).hash.slice(1));
          return target && target.querySelector('.step-text')?.textContent === s.text;
        })),
      bodyTextLength: document.body.innerText.length,
      title: document.title };
  });
  for (const [variant, route] of [...layouts, ['example', '/recipes/baked-peaches-with-cinnamon/'],
    ['untimed', manifest.routes.find(r => r.untimed)?.route],
    ['no-image', manifest.routes.find(r => r.type === 'recipe' && !r.image)?.route],
    ['home', '/'], ['directory', '/recipes/'], ['category', '/categories/dinner/'],
    ['category-combination', '/categories/baking/italian/'], ['cuisine', '/cuisines/italian/'],
    ['ingredient', '/ingredients/chicken/'], ['search', '/search/'], ['favourites', '/favourites/']]) {
    if (!route) continue;
    const response = await page.goto('http://localhost:4173' + route, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(400);
    const r = { variant, route, status: response.status(), ...await inspect(), failures: [] };
    const expected = manifest.routes.find(x => x.route === route);
    if (r.status !== 200) r.failures.push('non200');
    if (r.canonical.join() !== 'https://weeklydelight.com' + route) r.failures.push('canonical');
    if (r.invalidJSONLD.length) r.failures.push('JSON parse');
    if (expected?.type === 'recipe') {
      if (r.recipeJSONLD !== 1 || r.recipeMicrodata !== (baseline ? 1 : 0) || r.recipeRDFa) r.failures.push('Recipe entities');
      if (!r.article || r.bodyTextLength < 1000) r.failures.push('recipe content');
      if (!baseline && !r.stepsMatch) r.failures.push('structured instruction targets/text');
    }
    if (expected?.recipeCount && r.recipeLinks < expected.recipeCount) r.failures.push('category links');
    if (variant === 'directory' && r.recipeLinks !== manifest.sourceRecipes) r.failures.push('directory reachability');
    if (variant === 'favourites' && !r.robots.some(x => /noindex/.test(x))) r.failures.push('saved noindex');
    if (!baseline && variant === 'search' && r.schemaTypes.includes('CollectionPage')) r.failures.push('invisible search collection markup');
    results.push(r);
  }
  await context.close();
  // Production may still contain the defect fixed only on this branch. Record it without expecting the fix live.
  const liveContext = await browser.newContext();
  const live = await liveContext.newPage();
  try {
    const response = await live.goto('https://weeklydelight.com/recipes/baked-peaches-with-cinnamon/', { waitUntil: 'domcontentloaded', timeout: 45000 });
    await live.waitForTimeout(6000);
    // Record production DOM and loaded script URLs independently of the local fixtures.
    const liveEntities = await live.evaluate(() => ({
      scripts: [...document.scripts].filter(s => /application\/ld\+json/i.test(s.type)).map(s => s.textContent),
      microdata: [...document.querySelectorAll('[itemtype]')].map(e => ({type: e.getAttribute('itemtype'), properties: [...e.querySelectorAll('[itemprop]')].map(p => p.getAttribute('itemprop'))})),
      rdfa: [...document.querySelectorAll('[typeof]')].map(e => e.getAttribute('typeof')),
      canonical: document.querySelector('link[rel="canonical"]')?.href,
      externalScripts: [...document.scripts].map(s => s.src).filter(Boolean),
    }));
    results.push({ variant: 'live-before-deployment', status: response.status(), ...liveEntities });
  } catch(e) { results.push({ variant: 'live-before-deployment', unavailable: String(e) }); }
  await browser.close();
  fs.writeFileSync(outPath, JSON.stringify({ baseline, localThirdPartiesBlocked: true, results }, null, 2) + '\n');
  const failed = results.filter(r => r.failures?.length);
  console.log(JSON.stringify({ tested: results.length, failed: failed.map(r => ({route:r.route,failures:r.failures})) }));
  if (failed.length) process.exitCode = 1;
})().catch(e => { console.error(e); process.exitCode = 1; });
