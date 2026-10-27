#!/usr/bin/env node
'use strict';
/**
 * Drives the pages this release added or reorganised in a phone-sized browser:
 *
 *   - no page scrolls sideways at 390 px, none logs a script error, and the layout
 *     shift measured over the first second and a half stays under 0.1;
 *   - the first Tab reaches the skip link, and keyboard focus is visible on the
 *     route links and form fields;
 *   - the directory's Filters button opens the panel and says so, and the course and
 *     time filters agree with search-index.json for every recipe;
 *   - the weekly plan rescales its shopping list and keeps the count between 1 and 16;
 *   - the report form, served without its PHP backend as here, says it cannot send
 *     and disables the button, and names the recipe it was opened from;
 *   - a bake scales only from half to double and says the bake is not scaled.
 *
 *   node tools/release-browser-test.js      (needs Playwright with Chromium; serves the repo root)
 */
const fs = require('fs');
const path = require('path');
const http = require('http');
const { execSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
let chromium;
try { ({ chromium } = require('playwright')); }
catch {
  try { ({ chromium } = require(path.join(execSync('npm root -g').toString().trim(), 'playwright'))); }
  catch { console.log('  - release-browser-test unavailable: install Playwright as a development tool'); process.exit(1); }
}
const chrome = [process.env.CHROMIUM_PATH, '/usr/bin/chromium', '/opt/pw-browsers/chromium-1194/chrome-linux/chrome'].filter(Boolean).find(p => fs.existsSync(p));

const TYPES = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json',
  '.webp': 'image/webp', '.jpg': 'image/jpeg', '.png': 'image/png', '.svg': 'image/svg+xml', '.woff2': 'font/woff2' };
const server = http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p.endsWith('/')) p += 'index.html';
  const file = path.join(ROOT, p);
  /* PHP is not run here: the feedback endpoints answer as an unconfigured host would. */
  if (p.endsWith('.php')) { res.writeHead(404).end(); return; }
  if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404).end(); return; }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream' });
  fs.createReadStream(file).pipe(res);
});

const results = [];
const check = (name, ok, detail) => { results.push(ok); console.log(`  ${ok ? '✓' : '✗'} ${name}${ok || detail === undefined ? '' : `: ${detail}`}`); };
const index = JSON.parse(fs.readFileSync(path.join(ROOT, 'search-index.json'), 'utf8'));
const dirs = rel => fs.readdirSync(path.join(ROOT, rel)).filter(d => fs.existsSync(path.join(ROOT, rel, d, 'index.html')));

const PAGES = ['', 'categories/dinner/', 'recipes/', 'collections/', 'weekly-plan/', 'my-plan/', 'report/?recipe=pad-thai', 'guides/',
  'recipes/pad-thai/', 'recipes/banana-bread/']
  .concat(dirs('collections').map(d => `collections/${d}/`), dirs('guides').map(d => `guides/${d}/`));

(async () => {
  await new Promise(r => server.listen(0, '127.0.0.1', r));
  const base = `http://127.0.0.1:${server.address().port}`;
  const browser = await chromium.launch(chrome ? { executablePath: chrome } : {});
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  /* Third-party scripts (analytics, Grow) are not part of what is being tested. */
  await ctx.route('**/*', route => route.request().url().startsWith(base) ? route.continue() : route.abort());
  await ctx.addInitScript(() => {
    window.__cls = 0;
    try {
      new PerformanceObserver(list => { for (const e of list.getEntries()) if (!e.hadRecentInput) window.__cls += e.value; })
        .observe({ type: 'layout-shift', buffered: true });
    } catch (e) { /* not supported */ }
  });
  const page = await ctx.newPage();
  let errors = [];
  page.on('pageerror', e => errors.push(e.message));
  page.on('console', m => { if (m.type() === 'error' && !/Failed to load resource/.test(m.text())) errors.push(m.text()); });

  /* Every page: no sideways scroll, no script errors, little layout shift. */
  const wide = [], broken = [], shifty = [];
  for (const p of PAGES) {
    errors = [];
    await page.goto(`${base}/${p}`, { waitUntil: 'load' });
    await page.waitForTimeout(1500);
    const m = await page.evaluate(() => ({ sw: document.documentElement.scrollWidth, w: window.innerWidth, cls: window.__cls }));
    if (m.sw > m.w + 1) wide.push(`${p || '/'} (${m.sw}px)`);
    if (errors.length) broken.push(`${p || '/'}: ${errors[0]}`);
    if (m.cls >= 0.1) shifty.push(`${p || '/'} (${m.cls.toFixed(3)})`);
  }
  check(`${PAGES.length} pages fit a 390 px screen`, !wide.length, wide.join(', '));
  check('no script errors on any of them', !broken.length, broken.join('; '));
  check('layout shift under 0.1 on every one', !shifty.length, shifty.join(', '));

  /* Keyboard: the skip link first, then visible focus on a route link. */
  await page.goto(`${base}/`, { waitUntil: 'load' });
  await page.keyboard.press('Tab');
  check('the first Tab on the homepage reaches the skip link', await page.evaluate(() => document.activeElement && document.activeElement.classList.contains('skip-link')));
  await page.focus('.routes__list a');
  const ring = await page.evaluate(() => { const s = getComputedStyle(document.activeElement); return s.outlineStyle !== 'none' && parseFloat(s.outlineWidth) > 0; });
  check('a focused route link shows a focus ring', ring);

  /* The directory: the Filters button, and course + time against the index. */
  await page.goto(`${base}/recipes/`, { waitUntil: 'load' });
  const toggle = await page.$('[data-filters-toggle]');
  check('the directory has a Filters button on a phone', !!toggle && await toggle.isVisible());
  if (toggle) {
    await toggle.click();
    const open = await page.evaluate(() => ({ expanded: document.querySelector('[data-filters-toggle]').getAttribute('aria-expanded'),
      shown: getComputedStyle(document.getElementById('recipe-filters')).display !== 'none' && document.getElementById('recipe-filters').getBoundingClientRect().height > 0 }));
    check('Filters opens the panel and says it is open', open.expanded === 'true' && open.shown, JSON.stringify(open));
  }
  const count = async () => {
    await page.waitForFunction(() => { const c = document.querySelector('#result-count'); return c && (c.querySelector('strong') || /No recipes/.test(c.textContent)); }, null, { timeout: 15000 });
    const strong = await page.$('#result-count strong');
    return strong ? Number((await strong.textContent()).replace(/[^\d]/g, '')) : 0;
  };
  await page.goto(`${base}/recipes/?course=main&time=30`, { waitUntil: 'load' });
  const expectMains = index.filter(r => r.j === 'main' && !(r.m > 30 || r.u)).length;
  const gotMains = await count();
  check(`course=main&time=30 lists the ${expectMains} quick mains the index holds`, gotMains === expectMains, `${gotMains} shown`);
  await page.goto(`${base}/recipes/?course=side`, { waitUntil: 'load' });
  const expectSides = index.filter(r => r.j === 'side').length;
  check(`course=side lists the ${expectSides} sides`, await count() === expectSides);

  /* The weekly plan's shopping list follows the number of people. */
  await page.goto(`${base}/weekly-plan/`, { waitUntil: 'load' });
  await page.evaluate(() => { try { localStorage.clear(); } catch (e) { /* none */ } });
  await page.reload({ waitUntil: 'load' });
  const listText = () => page.$$eval('[data-shop-item]', els => els.map(e => e.closest('li').textContent.replace(/\s+/g, ' ').trim()).join('|'));
  const four = await listText();
  await page.click('[data-plan-inc]'); await page.click('[data-plan-inc]'); await page.click('[data-plan-inc]'); await page.click('[data-plan-inc]');
  const people = await page.textContent('[data-plan-people]');
  const eight = await listText();
  check('the plan scales from 4 to 8 people and rewrites the list', people.trim() === '8' && eight !== four && eight.length > 0, `people ${people}`);
  for (let i = 0; i < 20; i++) await page.click('[data-plan-inc]', { force: true }).catch(() => {});
  check('the plan stops at 16 people', (await page.textContent('[data-plan-people]')).trim() === '16' && await page.isDisabled('[data-plan-inc]'));

  /* Touch targets: the new controls are at least 24 px square (WCAG 2.2, 2.5.8). */
  const small = [];
  for (const [p, sel] of [['weekly-plan/', '[data-plan-dec], [data-plan-inc], [data-plan-save], [data-shop-item]'], ['recipes/', '[data-filters-toggle]'],
    ['report/', '[data-report-submit], input[type="radio"], input[type="checkbox"]'], ['recipes/banana-bread/', '[data-servings-dec], [data-servings-inc]']]) {
    await page.goto(`${base}/${p}`, { waitUntil: 'load' });
    for (const box of await page.$$eval(sel, els => els.filter(e => e.offsetParent).map(e => {
      const t = e.closest('label') || e; const r = t.getBoundingClientRect();
      return { what: e.outerHTML.slice(0, 60), w: r.width, h: r.height };
    }))) if (box.w < 24 || box.h < 24) small.push(`${p} ${box.what} ${Math.round(box.w)}×${Math.round(box.h)}`);
  }
  check('buttons and checkboxes on the new pages are at least 24 px', !small.length, small.slice(0, 4).join('; '));

  /* The report form without its backend. */
  await page.goto(`${base}/report/?recipe=pad-thai&v=abc123`, { waitUntil: 'load' });
  await page.waitForSelector('[data-report-status]:not([hidden])', { timeout: 10000 }).catch(() => {});
  const rep = await page.evaluate(() => ({
    status: (document.querySelector('[data-report-status]') || {}).textContent || '',
    hidden: document.querySelector('[data-report-status]').hidden,
    disabled: document.querySelector('[data-report-submit]').disabled,
    recipe: document.querySelector('#report-recipe').value,
    version: document.querySelector('input[name="version"]').value
  }));
  check('the report form says it cannot send while its backend is missing', !rep.hidden && /not switched on/.test(rep.status) && rep.disabled, JSON.stringify(rep));
  check('the report form is prefilled with the recipe and its version', rep.recipe === 'pad-thai' && rep.version === 'abc123', JSON.stringify(rep));
  await page.waitForFunction(() => /Reporting: /.test(document.querySelector('[data-recipe-help]').textContent), null, { timeout: 10000 }).catch(() => {});
  check('it names the recipe being reported', /Reporting: Pad Thai/i.test(await page.textContent('[data-recipe-help]')));

  /* A bake scales from half to double. */
  await page.goto(`${base}/recipes/banana-bread/`, { waitUntil: 'load' });
  const serv = async () => Number((await page.textContent('[data-servings-out]')).replace(/[^\d]/g, ''));
  const start = await serv();
  for (let i = 0; i < start * 3; i++) await page.click('[data-servings-inc]', { force: true }).catch(() => {});
  const top = await serv();
  check(`banana bread scales no further than double (${start} → ${top})`, top === start * 2 && await page.isDisabled('[data-servings-inc]'));
  const note = await page.textContent('[data-scale-note]');
  check('and says the bake itself is not scaled', /the bake is not/.test(note));
  await page.goto(`${base}/recipes/pad-thai/`, { waitUntil: 'load' });
  const ps = await serv();
  for (let i = 0; i < ps * 2 + 2; i++) await page.click('[data-servings-inc]', { force: true }).catch(() => {});
  check('a non-bake goes past double and warns about crowded pans', await serv() > ps * 2 && /crowded pan/.test(await page.textContent('[data-scale-note]')));

  await browser.close();
  server.close();
  const failed = results.filter(r => !r).length;
  console.log(failed ? `\n${failed} of ${results.length} failed.` : `\n  ✓ release browser checks: ${results.length} of ${results.length} pass`);
  process.exit(failed ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
