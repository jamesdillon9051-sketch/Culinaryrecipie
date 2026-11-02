#!/usr/bin/env node
'use strict';
/* Regression checks for visible static content, phone navigation and the
   existing controls affected by the shared design. Third parties are blocked:
   these are local browser checks, not live Core Web Vitals or Google tests. */
const fs = require('fs');
const path = require('path');
const http = require('http');
const assert = require('assert/strict');
const { chromium } = require('playwright');
const ROOT = path.join(__dirname, '..');
const OUT = process.env.DESIGN_TEST_OUT || '/tmp/weeklydelight-design-test';
fs.mkdirSync(OUT, { recursive: true });
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json',
  '.woff2': 'font/woff2', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.png': 'image/png', '.svg': 'image/svg+xml' };
const server = http.createServer((req, res) => {
  let url = decodeURIComponent(req.url.split('?')[0]);
  if (url.endsWith('/')) url += 'index.html';
  const file = path.resolve(ROOT, '.' + url);
  if (!file.startsWith(ROOT + path.sep)) { res.writeHead(403).end(); return; }
  fs.readFile(file, (error, body) => {
    if (error) { res.writeHead(404).end(); return; }
    res.writeHead(200, { 'content-type': TYPES[path.extname(file)] || 'application/octet-stream' }); res.end(body);
  });
});
const results = [];
async function test(name, run) {
  try { await run(); results.push({ name, pass: true }); }
  catch (error) { results.push({ name, pass: false, error: error.message }); }
}
(async () => {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const base = `http://127.0.0.1:${server.address().port}`;
  const browser = await chromium.launch({ headless: true });
  try {
    for (const width of [320, 390, 768, 1440]) {
      const ctx = await browser.newContext({ viewport: { width, height: 900 } });
      await ctx.route('**/*', route => route.request().url().startsWith(base) ? route.continue() : route.abort());
      const page = await ctx.newPage(); let errors = [];
      page.on('pageerror', error => errors.push(error.message));
      // One page from each of the six recipe layouts, on phone and desktop.
      const variants = [390, 1440].includes(width) ? ['margherita-pizza', 'spaghetti-carbonara', 'fettuccine-alfredo', 'risotto-alla-milanese', 'chicken-parmigiana', 'tiramisu'].map(slug => '/recipes/' + slug + '/') : [];
      for (const url of ['/', '/categories/dinner/', '/recipes/', '/recipes/baked-peaches-with-cinnamon/', '/collections/', '/weekly-plan/'].concat(variants)) {
        await test(`${width}px ${url}: content, width, identity and scripts`, async () => {
          errors = []; await page.goto(base + url, { waitUntil: 'networkidle' }); await page.evaluate(() => document.fonts.ready);
          const data = await page.evaluate(() => ({
            width: innerWidth, scroll: document.documentElement.scrollWidth,
            headings: document.querySelectorAll('h1').length,
            canonical: document.querySelector('link[rel="canonical"]').href,
            robots: document.querySelector('meta[name="robots"]').content,
            recipes: [...document.querySelectorAll('script[type="application/ld+json"]')].map(el => JSON.parse(el.textContent)).filter(item => item['@type'] === 'Recipe').length,
            hidden: [...document.querySelectorAll('.reveal')].filter(el => getComputedStyle(el).opacity === '0').length,
            controls: [...document.querySelectorAll('.header-actions .icon-btn,#nav-toggle')].filter(el => getComputedStyle(el).display !== 'none').map(el => ({ left: el.getBoundingClientRect().left, right: el.getBoundingClientRect().right }))
          }));
          assert(data.scroll <= data.width + 1, 'horizontal overflow'); assert.equal(data.headings, 1);
          assert.equal(data.canonical, 'https://weeklydelight.com' + url); assert(!/noindex/.test(data.robots));
          assert.equal(data.recipes, url.startsWith('/recipes/') && url !== '/recipes/' ? 1 : 0); assert.equal(data.hidden, 0, 'script-dependent hidden content');
          assert(data.controls.every(rect => rect.left >= 0 && rect.right <= data.width + 1), 'header control off screen'); assert.deepEqual(errors, []);
        });
      }
      if (width === 390) {
        await page.goto(base + '/', { waitUntil: 'networkidle' });
        await test('phone menu opens, Escape closes and restores focus', async () => {
          await page.click('#nav-toggle'); assert.equal(await page.getAttribute('#nav-toggle', 'aria-expanded'), 'true');
          assert(await page.locator('#main-nav a').first().isVisible()); await page.keyboard.press('Escape');
          assert.equal(await page.getAttribute('#nav-toggle', 'aria-expanded'), 'false');
          assert.equal(await page.evaluate(() => document.activeElement.id), 'nav-toggle');
        });
        await test('phone search link remains directly accessible', async () => {
          assert(await page.locator('.header-search-link').isVisible()); assert.equal(await page.getAttribute('.header-search-link', 'href'), '/search/');
        });
        await test('hero search still offers recipe suggestions', async () => {
          await page.fill('#hero-search', 'pad thai'); await page.locator('#hero-search-ac [role="option"]').first().waitFor({ state: 'visible', timeout: 10000 });
        });
        await test('dark theme keeps content and controls visible', async () => {
          await page.click('[data-theme-toggle]'); assert.equal(await page.getAttribute('html', 'data-theme'), 'dark');
          assert(await page.locator('.hero-browse').isVisible()); await page.screenshot({ path: path.join(OUT, 'dark-home-390.png') });
          await page.click('[data-theme-toggle]'); assert.equal(await page.getAttribute('html', 'data-theme'), 'light');
        });
        await page.goto(base + '/recipes/baked-peaches-with-cinnamon/', { waitUntil: 'networkidle' });
        await test('recipe jump, cooking mode and saving still work', async () => {
          await page.click('a[href="#recipe-card"]'); assert(new URL(page.url()).hash === '#recipe-card');
          await page.locator('[data-cook-toggle]').click(); assert.equal(await page.getAttribute('[data-cook-toggle]', 'aria-pressed'), 'true');
          await page.locator('[data-cook-exit]').click(); assert.equal(await page.getAttribute('[data-cook-toggle]', 'aria-pressed'), 'false');
          const save = page.locator('.fav-btn--inline'); await save.click(); assert.equal(await save.getAttribute('aria-pressed'), 'true');
          await save.click(); assert.equal(await save.getAttribute('aria-pressed'), 'false');
        });
      }
      await ctx.close();
    }
    for (const width of [390, 1440]) {
      const ctx = await browser.newContext({ viewport: { width, height: 900 }, javaScriptEnabled: false });
      await ctx.route('**/*', route => route.request().url().startsWith(base) ? route.continue() : route.abort());
      const page = await ctx.newPage();
      for (const url of ['/', '/recipes/', '/recipes/baked-peaches-with-cinnamon/']) {
        await test(`JavaScript off ${width}px ${url}: visible content and ordinary links`, async () => {
          await page.goto(base + url, { waitUntil: 'networkidle' });
          const nav = page.getByRole('navigation', { name: 'Browse recipes', exact: true }); assert(await nav.isVisible());
          assert.equal(await nav.locator('a').count(), 5); assert(await page.locator('h1').isVisible());
          const hidden = await page.locator('.reveal').evaluateAll(elements => elements.filter(el => getComputedStyle(el).opacity === '0').length);
          assert.equal(hidden, 0); assert(await page.locator('main a[href]').count() > 0);
          if (url === '/recipes/') { await page.locator('#az-title + details summary').click(); assert(await page.locator('.az-list a').first().isVisible()); }
          if (url.startsWith('/recipes/baked-')) assert(await page.locator('#method').isVisible());
        });
      }
      await ctx.close();
    }
  } finally { await browser.close(); await new Promise(resolve => server.close(resolve)); }
  fs.writeFileSync(path.join(OUT, 'browser-tests.json'), JSON.stringify(results, null, 2) + '\n');
  const failures = results.filter(result => !result.pass);
  console.log(`${results.length} design browser checks; ${failures.length} failed.`);
  for (const failure of failures) console.log(`  FAIL ${failure.name}: ${failure.error}`);
  if (failures.length) process.exitCode = 1;
})().catch(error => { console.error(error); server.close(); process.exitCode = 1; });
