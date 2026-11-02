#!/usr/bin/env node
'use strict';
const assert = require('assert/strict');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { register, digest, pageContent } = require('../src/lib/content-dates');
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'crawl-dates-'));
try {
  const file = path.join(tmp, 'dates.json');
  const route = '/categories/dinner/';
  const payload = ['recipe-a'];
  const html = '<header>5515 recipes</header><main><h1>Dinner</h1><p>Useful copy</p><a href="/recipes/a/">A</a><script src="ad-one.js"></script></main><footer>Old</footer>';
  const before = pageContent(html);
  fs.writeFileSync(file, JSON.stringify({ [route]: { hash: digest(payload), lastmod: '2026-10-01' } }));
  let dates = register('2026-10-20', file);
  assert.equal(dates.dateFor(route, payload, before), '2026-10-01');
  assert.deepEqual(dates.save(), { added: 0, changed: 0, removed: 0 });
  dates = register('2026-10-21', file);
  assert.equal(dates.dateFor(route, payload, before), '2026-10-01');
  assert.deepEqual(pageContent(html.replace('5515', '6000').replace('Old', 'New').replace('ad-one', 'ad-two')), before);
  const ad = '<aside class="ad-slot ad-slot--native" aria-label="Advertisement"><span>Advertisement</span><div data-ad-defer="unit.js" style="height:300px"><iframe src="/assets/ads/native-banner.html"></iframe></div></aside>';
  const withAds = html.replace('<h1>', ad + '<h1>').replace('</main>', ad + '</main>');
  assert.deepEqual(pageContent(withAds), before, 'restoring ad slots is not a content update');
  assert.deepEqual(pageContent(withAds.replaceAll('unit.js', 'new-unit.js').replaceAll('300px', '320px')), before,
    'ad delivery URLs and dimensions are not editorial changes');
  assert.notDeepEqual(pageContent(html.replace('</main>', '<aside class="panel">A cooking warning</aside></main>')), before,
    'ordinary editorial asides still count');
  assert.notDeepEqual(pageContent(html.replace('Useful copy', 'Advertising is now used on this site')), before,
    'a real privacy-policy change still counts');
  for (const [from, to] of [['Useful copy', 'Updated useful copy'], ['/recipes/a/', '/recipes/b/']]) {
    dates = register('2026-10-21', file);
    assert.equal(dates.dateFor(route, payload, pageContent(html.replace(from, to))), '2026-10-21');
  }
  dates = register('2026-10-21', file);
  assert.equal(dates.dateFor(route, ['recipe-a', 'recipe-b'], before), '2026-10-21');
  const recipeRoute = '/recipes/a/';
  dates = register('2026-10-20', file);
  assert.equal(dates.dateFor(recipeRoute, { recipeMarkup: 'single-jsonld-v1' }), '2026-10-20');
  dates.dateFor(route, payload, before);
  dates.save();
  dates = register('2026-10-21', file);
  assert.equal(dates.dateFor(recipeRoute, { recipeMarkup: 'single-jsonld-v1' }), '2026-10-20');
  assert.equal(dates.dateFor(route, payload, before), '2026-10-01');
  console.log('  ✓ 14 modification-date cases passed');
} finally { fs.rmSync(tmp, { recursive: true, force: true }); }
