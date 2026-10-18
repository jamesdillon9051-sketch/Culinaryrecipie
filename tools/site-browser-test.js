#!/usr/bin/env node
'use strict';
/**
 * Drives the built site in a phone-sized browser and checks what readers do with it, against the
 * whole collection rather than the first page of cards:
 *
 *   - the directory's count, every diet filter (as written, and with swaps) and the time filter
 *     agree with search-index.json for all recipes;
 *   - "show more" pages through to the end; sorting by quickest really orders by time;
 *   - search finds a recipe by name; the mobile menu opens and closes and says so;
 *   - on a recipe: servings scale the quantities, the unit switch works, print hides the chrome,
 *     a recipe can be saved and a private note kept, and the first Tab reaches the skip link.
 *
 *   node tools/site-browser-test.js      (needs Playwright with Chromium; serves the repo root)
 */
const fs = require('fs');
const path = require('path');
const http = require('http');
const { execSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
let chromium;
try { ({ chromium } = require(path.join(execSync('npm root -g').toString().trim(), 'playwright'))); }
catch { console.log('  - site-browser-test skipped: Playwright is not installed'); process.exit(0); }
const chrome = ['/opt/pw-browsers/chromium-1194/chrome-linux/chrome'].find(p => fs.existsSync(p));

const TYPES = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json',
  '.webp': 'image/webp', '.jpg': 'image/jpeg', '.png': 'image/png', '.svg': 'image/svg+xml', '.woff2': 'font/woff2' };
const server = http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p.endsWith('/')) p += 'index.html';
  const file = path.join(ROOT, p);
  if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404).end(); return; }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream' });
  fs.createReadStream(file).pipe(res);
});

const results = [];
const check = (name, ok, detail) => { results.push(ok); console.log(`  ${ok ? '✓' : '✗'} ${name}${ok || detail === undefined ? '' : `: ${detail}`}`); };
const index = JSON.parse(fs.readFileSync(path.join(ROOT, 'search-index.json'), 'utf8'));

(async () => {
  await new Promise(r => server.listen(0, '127.0.0.1', r));
  const base = `http://127.0.0.1:${server.address().port}`;
  const browser = await chromium.launch(chrome ? { executablePath: chrome } : {});
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  /* Third-party scripts (ads, analytics) are not part of what is being tested. */
  await ctx.route('**/*', route => route.request().url().startsWith(base) ? route.continue() : route.abort());
  const page = await ctx.newPage();
  /* "<strong>5515</strong> recipes · showing 60": the total, not the page. */
  const count = async () => {
    await page.waitForFunction(() => { const c = document.querySelector('#result-count'); return c && (c.querySelector('strong') || /No recipes/.test(c.textContent)); }, null, { timeout: 15000 });
    const strong = await page.$('#result-count strong');
    return strong ? Number((await strong.textContent()).replace(/[^\d]/g, '')) : 0;
  };
  const settle = () => page.waitForTimeout(250);

  /* ---- directory over the whole collection */
  await page.goto(base + '/recipes/', { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => document.querySelectorAll('#results .card').length > 0, null, { timeout: 15000 });
  check(`the directory counts all ${index.length} recipes`, await count() === index.length, await count());

  const diets = [...new Set(index.flatMap(r => r.f.concat(r.h || [])))].filter(t => /Vegan|Vegetarian|Gluten|Dairy|Keto|Low-Carb|High-Protein|No Added/.test(t));
  for (const tag of diets) {
    await page.goto(`${base}/recipes/?tag=${encodeURIComponent(tag)}`, { waitUntil: 'domcontentloaded' });
    await settle();
    const asWritten = index.filter(r => r.f.includes(tag)).length;
    check(`${tag}: the filter lists the ${asWritten} recipes that qualify as written`, await count() === asWritten, await count());
    const withSwap = index.filter(r => r.f.includes(tag) || (r.h || []).includes(tag)).length;
    if (withSwap !== asWritten) {
      await page.check('[data-filter-swaps]'); await settle();
      check(`${tag}: ticking the swaps box adds the ${withSwap - asWritten} that need a swap`, await count() === withSwap, await count());
    }
  }

  await page.goto(`${base}/recipes/?time=30`, { waitUntil: 'domcontentloaded' });
  await settle();
  /* A recipe whose method needs time it does not give (u) has only a floor for a total, so the
     filter leaves it out rather than promise it fits. */
  const quick = index.filter(r => r.m <= 30 && !r.u).length;
  check(`under 30 minutes, start to finish: ${quick} recipes (those with an untimed wait left out)`, await count() === quick, await count());

  await page.goto(`${base}/recipes/?sort=quickest`, { waitUntil: 'domcontentloaded' });
  await settle();
  const sortValue = await page.$eval('#sort', s => s.value);
  const times = await page.$$eval('#results .card .card-meta', els => els.slice(0, 20).map(e => parseInt(e.textContent, 10)));
  check('sorting by quickest orders the cards by time', sortValue === 'quickest' && times.every((t, i) => i === 0 || t >= times[i - 1]), times.join(','));

  await page.goto(base + '/recipes/', { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => document.querySelectorAll('#results .card').length > 0);
  let shown = await page.$$eval('#results .card', c => c.length);
  let clicks = 0;
  while (await page.isVisible('#show-more') && clicks < 200) { await page.click('#show-more'); clicks++; }
  shown = await page.$$eval('#results .card', c => c.length);
  check(`"show more" pages through to every recipe (${clicks} presses)`, shown === index.length, shown);

  /* ---- search */
  const target = index.find(r => r.g === 'focaccia') || index[0];
  await page.goto(`${base}/search/?q=${encodeURIComponent(target.t)}`, { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => /for “|for &ldquo;|for "/.test(document.querySelector('#result-count').innerHTML) && document.querySelectorAll('#results .card h3').length > 0, null, { timeout: 15000 });
  const firstTitles = await page.$$eval('#results .card h3', h => h.slice(0, 5).map(x => x.textContent));
  check(`searching "${target.t}" finds it near the top`, firstTitles.includes(target.t), firstTitles.join(' | '));

  /* ---- mobile menu */
  await page.goto(base + '/', { waitUntil: 'domcontentloaded' });
  await page.click('#nav-toggle');
  const open = await page.getAttribute('#nav-toggle', 'aria-expanded');
  await page.keyboard.press('Escape');
  await page.waitForTimeout(150);
  const closed = await page.getAttribute('#nav-toggle', 'aria-expanded');
  check('the mobile menu opens, says so, and closes with Escape', open === 'true' && closed !== 'true', `${open} → ${closed}`);

  /* ---- a recipe page */
  await page.goto(base + '/recipes/focaccia/', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(400);
  const qty = async () => page.$eval('[data-ing] [data-qty], [data-qty]', el => el.textContent.trim());
  const before = await qty();
  await page.click('[data-servings-inc]'); await page.waitForTimeout(150);
  const after = await qty();
  check('raising the servings rescales the quantities', before !== after, `${before} → ${after}`);
  await page.click('[data-servings-reset]').catch(() => {});
  const unitsBefore = await page.$eval('[data-unit]', el => el.textContent.trim());
  await page.click('[data-unit-toggle]').catch(() => {});
  await page.waitForTimeout(150);
  const unitsAfter = await page.$eval('[data-unit]', el => el.textContent.trim());
  check('the unit switch changes the units', unitsBefore !== unitsAfter, `${unitsBefore} → ${unitsAfter}`);

  await page.click('.fav-btn--inline');
  const favs = await page.evaluate(() => Object.keys(localStorage).filter(k => /fav/i.test(k)).map(k => localStorage.getItem(k)).join(' '));
  check('saving a recipe stores it in this browser', /focaccia/.test(favs), favs.slice(0, 80));

  if (await page.$('#review-form')) {
    await page.fill('#review-body', 'Browser test note: used less salt.');
    if (await page.$('input[name="author"]')) await page.fill('input[name="author"]', 'Tester');
    await page.evaluate(() => { const star = document.querySelector('input[name="rating"]'); if (star) star.checked = true; });
    await page.click('#review-form [type=submit]');
    await page.waitForTimeout(300);
    const stored = await page.evaluate(() => localStorage.getItem('cv:reviews:focaccia') || '');
    check('a private note is kept in this browser only', /less salt/.test(stored) && /less salt/.test(await page.textContent('#review-list')), stored.slice(0, 80));
  }

  await page.emulateMedia({ media: 'print' });
  const chrome1 = await page.$eval('header.site-header, .site-header, header', el => getComputedStyle(el).display).catch(() => 'none');
  check('print hides the site header', chrome1 === 'none', chrome1);
  await page.emulateMedia({ media: 'screen' });

  await page.goto(base + '/recipes/focaccia/', { waitUntil: 'domcontentloaded' });
  await page.keyboard.press('Tab');
  const focused = await page.evaluate(() => document.activeElement && document.activeElement.className);
  check('the first Tab reaches the skip link', /skip-link/.test(focused || ''), focused);

  await browser.close();
  server.close();
  const failed = results.filter(x => !x).length;
  console.log(failed ? `\n  ${failed} of ${results.length} site checks failed` : `\n  all ${results.length} site checks passed`);
  process.exit(failed ? 1 : 0);
})().catch(err => { console.log('  ✗ site-browser-test crashed: ' + err.stack); server.close(); process.exit(1); });
