// Lab measurement used for the October 2026 follow-up report: node tools/lab-measure.js <base-url> <label>.
// Phone viewport, 4x CPU throttle, ~1.6 Mbps / 150 ms network; third-party requests are blocked; median of 3 runs.
const path = require('path');
const { chromium } = require(path.join(require('child_process').execSync('npm root -g').toString().trim(), 'playwright'));
const PAGES = (process.env.PAGES || '/,/recipes/,/categories/dinner/,/ingredients/tomatoes/,/recipes/focaccia/,/recipes/creamy-tuscan-salmon/').split(',');
const [base, label] = [process.argv[2], process.argv[3]];
(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const out = [];
  for (const p of PAGES) {
    const runs = [];
    for (let run = 0; run < 3; run++) {
      const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 3, isMobile: true, hasTouch: true,
        userAgent: 'Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0 Mobile Safari/537.36' });
      const page = await ctx.newPage();
      let bytes = 0, requests = 0, fonts = 0, blocked = 0;
      await page.route('**/*', route => { const u = route.request().url(); if (!u.startsWith(base)) { blocked++; return route.abort(); } return route.continue(); });
      page.on('response', async r => { requests++; if (/\.woff2/.test(r.url())) fonts++; try { const b = await r.body(); bytes += b.length; } catch {} });
      const cdp = await ctx.newCDPSession(page);
      await cdp.send('Performance.enable');
      await cdp.send('Network.enable');
      await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 });
      await cdp.send('Network.emulateNetworkConditions', { offline: false, latency: 150, downloadThroughput: 1.6 * 1024 * 1024 / 8, uploadThroughput: 750 * 1024 / 8 });
      await page.addInitScript(() => {
        window.__lcp = 0; window.__cls = 0; window.__long = 0;
        new PerformanceObserver(l => { for (const e of l.getEntries()) window.__lcp = e.startTime; }).observe({ type: 'largest-contentful-paint', buffered: true });
        new PerformanceObserver(l => { for (const e of l.getEntries()) if (!e.hadRecentInput) window.__cls += e.value; }).observe({ type: 'layout-shift', buffered: true });
        new PerformanceObserver(l => { for (const e of l.getEntries()) window.__long += Math.max(0, e.duration - 50); }).observe({ type: 'longtask', buffered: true });
      });
      const t0 = Date.now();
      await page.goto(base + p, { waitUntil: 'load', timeout: 120000 });
      await page.waitForTimeout(2500);
      await page.mouse.wheel(0, 2000); await page.waitForTimeout(800);
      const m = await page.evaluate(() => ({ lcp: Math.round(window.__lcp), cls: Math.round(window.__cls * 1000) / 1000, tbt: Math.round(window.__long), dom: document.getElementsByTagName('*').length }));
      const perf = Object.fromEntries((await cdp.send('Performance.getMetrics')).metrics.map(x => [x.name, x.value]));
      runs.push({ ...m, script: Math.round(perf.ScriptDuration * 1000), kb: Math.round(bytes / 1024), requests, fonts, blocked, load: Date.now() - t0 });
      await ctx.close();
    }
    const med = k => runs.map(r => r[k]).sort((a, b) => a - b)[1];
    out.push({ page: p, lcp: med('lcp'), cls: med('cls'), tbt: med('tbt'), script: med('script'), kb: med('kb'), requests: med('requests'), fonts: med('fonts'), dom: med('dom'), blocked: med('blocked') });
  }
  console.log(JSON.stringify({ label, out }));
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
