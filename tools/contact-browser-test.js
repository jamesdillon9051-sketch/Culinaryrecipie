#!/usr/bin/env node
'use strict';
/**
 * Drives the built contact page in a real browser against the real endpoint, with
 * JavaScript on and with it off. Nothing is emailed (the 'log' transport).
 *
 *   node tools/contact-browser-test.js     (needs php and Playwright with Chromium)
 */
const fs = require('fs');
const os = require('os');
const net = require('net');
const path = require('path');
const { spawn, spawnSync, execSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
let chromium;
try { ({ chromium } = require(path.join(execSync('npm root -g').toString().trim(), 'playwright'))); }
catch { console.log('  - contact-browser-test skipped: Playwright is not installed'); process.exit(0); }
if (spawnSync('php', ['-v']).status !== 0) { console.log('  - contact-browser-test skipped: php is not installed'); process.exit(0); }
const chrome = ['/opt/pw-browsers/chromium-1194/chrome-linux/chrome'].find(p => fs.existsSync(p));

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'wd-contact-ui-'));
const servers = [];
const results = [];
const check = (name, ok, detail) => { results.push(ok); console.log(`  ${ok ? '✓' : '✗'} ${name}${ok || !detail ? '' : `: ${detail}`}`); };

const freePort = () => new Promise((resolve, reject) => {
  const s = net.createServer(); s.on('error', reject);
  s.listen(0, '127.0.0.1', () => { const { port } = s.address(); s.close(() => resolve(port)); });
});
async function serve(config) {
  const port = await freePort();
  let configPath = path.join(tmp, 'missing.php');
  if (config) {
    fs.writeFileSync(path.join(tmp, 'cfg.json'), JSON.stringify(config));
    configPath = path.join(tmp, 'cfg.php');
    fs.writeFileSync(configPath, `<?php return json_decode(file_get_contents(${JSON.stringify(path.join(tmp, 'cfg.json'))}), true);\n`);
  }
  const child = spawn('php', ['-S', `127.0.0.1:${port}`, '-t', ROOT], { env: { ...process.env, WD_CONTACT_CONFIG: configPath, PHP_CLI_SERVER_WORKERS: '4' }, stdio: 'ignore' });
  servers.push(child);
  for (let i = 0; i < 60; i++) { try { await fetch(`http://127.0.0.1:${port}/contact/send.php`); break; } catch { await new Promise(r => setTimeout(r, 100)); } }
  return `http://127.0.0.1:${port}`;
}
const fill = async (page, over = {}) => {
  const v = { name: 'UI Tester', email: 'ui@example.org', subject: 'Browser test', message: 'Checking what the page says after sending this form.', ...over };
  await page.fill('#contact-name', v.name); await page.fill('#contact-email', v.email);
  await page.fill('#contact-subject', v.subject); await page.fill('#contact-message', v.message);
};

(async () => {
  const browser = await chromium.launch(chrome ? { executablePath: chrome } : {});
  const logFile = path.join(tmp, 'log.jsonl');
  const state = path.join(tmp, 'state'); fs.mkdirSync(state);
  const good = { to: 'owner@example.org', from: 'noreply@example.org', salt: 'ui-test-salt-' + 'y'.repeat(20), transport: 'log', log_file: logFile, state_dir: state, rate_limit: 50 };

  /* A. not switched on */
  let base = await serve(null);
  let ctx = await browser.newContext(); let page = await ctx.newPage();
  await page.goto(base + '/contact/', { waitUntil: 'networkidle' });
  const notice = await page.isVisible('#contact-unavailable');
  const disabled = await page.isDisabled('button[type=submit]');
  check('JS on, not configured: the page says so before anyone types, and the form is disabled', notice && disabled);
  const noticeText = await page.textContent('#contact-unavailable');
  check('the notice does not promise a reply or give an address', /not switched on/.test(noticeText) && !/@/.test(noticeText));
  await ctx.close();

  /* B. switched on: success message wording, JS path */
  base = await serve(good);
  ctx = await browser.newContext(); page = await ctx.newPage();
  await page.goto(base + '/contact/', { waitUntil: 'networkidle' });
  check('JS on, configured: the form is usable and no notice is shown', !(await page.isVisible('#contact-unavailable')) && !(await page.isDisabled('button[type=submit]')));
  await fill(page); await page.click('button[type=submit]');
  await page.waitForFunction(() => { const s = document.querySelector('#contact-status'); return s && !s.hidden && s.textContent !== 'Sending…'; }, null, { timeout: 10000 });
  let status = await page.textContent('#contact-status');
  check('success says it was handed to the mail server and does not claim it was read', /handed to the mail server/.test(status) && /not that it has been read/.test(status) && !/Thank you|delivered|received/i.test(status));
  check('the form is cleared after a confirmed hand-off', (await page.inputValue('#contact-message')) === '');
  fs.existsSync(logFile) && check('exactly one message reached the transport', fs.readFileSync(logFile, 'utf8').trim().split('\n').length === 1);

  /* C. a failure keeps the text and looks like a failure */
  const longMessage = 'This text must survive a failed send. '.repeat(3);
  await fill(page, { message: longMessage });
  await page.route('**/contact/send.php', route => route.request().method() === 'POST' ? route.abort() : route.continue());
  await page.click('button[type=submit]');
  await page.waitForFunction(() => document.querySelector('#contact-status').textContent.includes('not sent'), null, { timeout: 10000 });
  check('a network failure says "not sent", is styled as an error, and keeps the typed text', /not sent/i.test(await page.textContent('#contact-status')) && (await page.getAttribute('#contact-status', 'class')).includes('form-status--error') && (await page.inputValue('#contact-message')) === longMessage);
  await page.unroute('**/contact/send.php');
  await page.route('**/contact/send.php', route => route.request().method() === 'POST' ? route.fulfill({ status: 200, contentType: 'text/html', body: '<h1>OK</h1>' }) : route.continue());
  await page.click('button[type=submit]');
  await page.waitForFunction(() => document.querySelector('#contact-status').textContent.includes('not sent'), null, { timeout: 10000 });
  check('a static host that answers 200 with a page is not mistaken for success', /not sent/i.test(await page.textContent('#contact-status')) && (await page.inputValue('#contact-message')) === longMessage);
  await ctx.close();

  /* D. no JavaScript: native post, signed redirect, and the dead-end URLs */
  ctx = await browser.newContext({ javaScriptEnabled: false }); page = await ctx.newPage();
  await page.goto(base + '/contact/');
  await fill(page); await page.click('button[type=submit]'); await page.waitForURL(u => /send\.php\?sent=/.test(u.href), { waitUntil: 'domcontentloaded' });
  check('JS off: a native post lands on a "sent" page through the signed address', /send\.php\?sent=/.test(page.url()) && /Your message was sent/.test(await page.textContent('h1')));
  await page.goto(base + '/contact/send.php?sent=1792000000.' + '0'.repeat(32), { waitUntil: 'domcontentloaded' });
  check('JS off: a made-up "sent" address goes back to the form', page.url().endsWith('/contact/'));
  await page.goto(base + '/contact/');
  await fill(page, { name: 'X' }); await page.click('button[type=submit]'); await page.waitForURL(u => /send\.php$/.test(u.pathname), { waitUntil: 'domcontentloaded' });
  check('JS off: an invalid post shows "not sent" in place, with the reason', /was not sent/.test(await page.textContent('h1')) && /name/.test(await page.textContent('.lede')));
  await ctx.close();

  /* E. the old public addresses (the .htaccess rule is checked separately: this server does not read it) */
  for (const f of ['sent', 'not-sent']) {
    const html = fs.readFileSync(path.join(ROOT, 'contact', '_pages', `${f}.html`), 'utf8');
    check(`the ${f} template is noindex and keeps its placeholder`, /noindex/.test(html) && html.includes('{{WD_MESSAGE}}'));
  }
  check('there is no static page at /contact/success/ or /contact/not-sent/', !fs.existsSync(path.join(ROOT, 'contact', 'success')) && !fs.existsSync(path.join(ROOT, 'contact', 'not-sent')));

  await browser.close();
  servers.forEach(s => s.kill()); fs.rmSync(tmp, { recursive: true, force: true });
  const failed = results.filter(x => !x).length;
  console.log(failed ? `\n  ${failed} of ${results.length} browser checks failed` : `\n  all ${results.length} browser checks passed`);
  process.exit(failed ? 1 : 0);
})().catch(err => { console.log('  ✗ contact-browser-test crashed: ' + err.stack); servers.forEach(s => s.kill()); process.exit(1); });
