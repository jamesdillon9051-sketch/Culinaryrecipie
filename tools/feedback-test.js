#!/usr/bin/env node
'use strict';
/**
 * The reader feedback endpoints (src/server/feedback/), end to end, locally.
 *
 * Copies the endpoints and a small search index into a temporary public folder,
 * keeps the settings and storage in a sibling "private" folder (the layout the
 * live host uses), starts PHP's built-in server and runs the scenarios below.
 * Nothing leaves the machine: the newsletter scenario only checks the
 * unconfigured state, and no email is sent by any endpoint.
 *
 *   node tools/feedback-test.js        (needs `php`; skips with status 0 without it)
 *
 * Part of `npm run check`.
 */
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawn, spawnSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
if (spawnSync('php', ['-v']).status !== 0) { console.log('  - feedback-test skipped: php is not installed'); process.exit(0); }

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'wd-feedback-'));
const pub = path.join(tmp, 'public');
const priv = path.join(tmp, 'private');
const store = path.join(priv, 'feedback-data');
fs.mkdirSync(path.join(pub, 'feedback'), { recursive: true });
fs.mkdirSync(store, { recursive: true });
for (const f of fs.readdirSync(path.join(ROOT, 'src', 'server', 'feedback'))) {
  fs.copyFileSync(path.join(ROOT, 'src', 'server', 'feedback', f), path.join(pub, 'feedback', f));
}
fs.writeFileSync(path.join(pub, 'search-index.json'), JSON.stringify([{ g: 'pad-thai', t: 'Pad Thai' }, { g: 'cacio-e-pepe', t: 'Cacio e Pepe' }]));

const PASSWORD = 'correct horse battery staple';
const hash = spawnSync('php', ['-r', `echo password_hash(${JSON.stringify(PASSWORD)}, PASSWORD_DEFAULT);`]).stdout.toString();
const writeConfig = extra => fs.writeFileSync(path.join(priv, 'feedback-config.php'), `<?php return ${phpArray(Object.assign({
  salt: 'test-salt-' + 'x'.repeat(30), storage_dir: store, admin_password_hash: hash,
  allowed_origins: ['http://127.0.0.1:' + PORT], insecure_cookie_for_tests: true
}, extra))};`);
/* Single-quoted PHP strings: a password hash is full of "$", which double quotes would interpolate. */
const q = v => `'${String(v).replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
function phpArray(o) {
  return '[' + Object.entries(o).map(([k, v]) => `${q(k)} => ${Array.isArray(v) ? '[' + v.map(q).join(',') + ']' : typeof v === 'boolean' ? String(v) : typeof v === 'object' ? phpArray(v) : q(v)}`).join(', ') + ']';
}

const PORT = 18000 + Math.floor(Math.random() * 1000);
const BASE = `http://127.0.0.1:${PORT}`;
const server = spawn('php', ['-S', `127.0.0.1:${PORT}`, '-t', pub], { env: { ...process.env, PHP_CLI_SERVER_WORKERS: '4' }, stdio: 'ignore' });

const results = [];
const check = (name, ok, detail) => results.push({ name, ok: !!ok, detail });
const wait = ms => new Promise(r => setTimeout(r, ms));
const post = (p, body, headers = {}) => fetch(BASE + p, {
  method: 'POST', redirect: 'manual',
  headers: { 'Content-Type': 'application/json', Accept: 'application/json', Origin: BASE, ...headers },
  body: JSON.stringify(body)
}).then(async r => ({ status: r.status, body: await r.json().catch(() => ({})), headers: r.headers }));
const stored = kind => { try { return fs.readdirSync(path.join(store, kind)).filter(f => f.endsWith('.json')); } catch { return []; } };
const started = () => String(Date.now() - 10000);
const good = () => ({ recipe: 'pad-thai', version: 'abc123def456', type: 'timing', description: 'The noodles needed 4 minutes more than step 3 says.',
  changed: 'no', name: '', email: '', website: '', started: started() });

async function main() {
  for (let i = 0; i < 40; i++) { try { await fetch(BASE + '/feedback/report.php?status=1'); break; } catch { await wait(100); } }

  /* 1. No settings: honest unavailable state, nothing stored. */
  let r = await fetch(BASE + '/feedback/report.php?status=1').then(x => x.json());
  check('without settings, status says not configured', r.configured === false, r);
  r = await post('/feedback/report.php', good());
  check('without settings, a report answers 503 and is not stored', r.status === 503 && r.body.error === 'not-configured' && stored('reports').length === 0, r);

  writeConfig({});
  r = await fetch(BASE + '/feedback/report.php?status=1').then(x => x.json());
  check('with settings, status says configured', r.configured === true, r);

  /* 2. A valid report is stored, then acknowledged. */
  r = await post('/feedback/report.php', good());
  const files = stored('reports');
  check('a valid report answers 201 with an id', r.status === 201 && r.body.ok && /^\d{8}-\d{6}-[0-9a-f]{8}$/.test(r.body.id), r);
  check('the stored report is on disk before the answer', files.length === 1 && files[0] === r.body.id + '.json', files);
  const rec = files.length ? JSON.parse(fs.readFileSync(path.join(store, 'reports', files[0]), 'utf8')) : {};
  check('the record has the recipe, version, type, text and status new', rec.recipe === 'pad-thai' && rec.title === 'Pad Thai' && rec.version === 'abc123def456' && rec.type === 'timing' && rec.status === 'new', rec);
  check('the record keeps a hashed address, never the address', typeof rec.ip_hash === 'string' && !JSON.stringify(rec).includes('127.0.0.1'), rec.ip_hash);
  check('no contact details are stored when none were given', rec.email === '' && rec.name === '', rec);

  /* 3. A pasted address works as the recipe. */
  r = await post('/feedback/report.php', { ...good(), recipe: 'https://weeklydelight.com/recipes/cacio-e-pepe/' });
  check('a pasted recipe address is accepted', r.status === 201, r);

  /* 4. Validation. */
  r = await post('/feedback/report.php', { ...good(), recipe: 'not-a-recipe' });
  check('an unknown recipe is refused with a field error', r.status === 422 && r.body.fields && r.body.fields.recipe, r);
  r = await post('/feedback/report.php', { ...good(), description: 'short' });
  check('a too-short description is refused', r.status === 422 && r.body.fields.description, r);
  r = await post('/feedback/report.php', { ...good(), type: 'praise' });
  check('an unknown problem type is refused', r.status === 422 && r.body.fields.type, r);
  r = await post('/feedback/report.php', { ...good(), reply: 'yes', email: '' });
  check('asking for a reply needs an email address', r.status === 422 && r.body.fields.email, r);
  r = await post('/feedback/report.php', { ...good(), email: 'not-an-address' });
  check('a malformed email is refused', r.status === 422 && r.body.fields.email, r);

  /* 5. Abuse controls. */
  r = await post('/feedback/report.php', { ...good(), website: 'http://spam.example' });
  check('the hidden trap field refuses a bot', r.status === 422 && stored('reports').length === 2, r);
  r = await post('/feedback/report.php', { ...good(), started: String(Date.now()) });
  check('a form sent within 3 seconds is refused', r.status === 422, r);
  r = await post('/feedback/report.php', good(), { Origin: 'https://evil.example' });
  check('a post from another site is refused', r.status === 403, r);
  let limited = null;
  for (let i = 0; i < 6; i++) { const x = await post('/feedback/report.php', good()); if (x.status === 429) { limited = x; break; } }
  check('the per-connection limit answers 429 and stores nothing more', limited && limited.body.error === 'rate-limited' && stored('reports').length === 5, stored('reports').length);

  /* 6. Reviews are off by default, and held for moderation when on. */
  r = await post('/feedback/review.php', { recipe: 'pad-thai', name: 'Sam', body: 'Made it on Tuesday and the sauce was good.', rating: 4, consent: 'yes', website: '', started: started() });
  check('reviews are refused while switched off', r.status === 503 && stored('reviews').length === 0, r);
  writeConfig({ reviews_enabled: true });
  r = await post('/feedback/review.php', { recipe: 'pad-thai', name: 'Sam', body: 'Made it on Tuesday and the sauce was good.', rating: 4, consent: 'yes', website: '', started: started() });
  check('a review is stored as pending', r.status === 201 && stored('reviews').length === 1, r);
  const rev = JSON.parse(fs.readFileSync(path.join(store, 'reviews', stored('reviews')[0]), 'utf8'));
  check('the review is pending, with its rating', rev.status === 'pending' && rev.rating === 4, rev);
  r = await post('/feedback/review.php', { recipe: 'pad-thai', name: 'Sam', body: 'Made it on Tuesday and the sauce was good.', rating: 9, consent: 'yes', website: '', started: started() });
  check('a rating outside 1 to 5 is refused', r.status === 422 && r.body.fields.rating, r);
  r = await post('/feedback/review.php', { recipe: 'pad-thai', name: 'Sam', body: 'Made it on Tuesday and the sauce was good.', consent: '', website: '', started: started() });
  check('a review without consent to publish is refused', r.status === 422 && r.body.fields.consent, r);

  /* 7. Moderation: login, CSRF, state change, export of approved reviews only. */
  const jar = {};
  const get = async (p) => {
    const res = await fetch(BASE + '/feedback/moderate.php' + p, { headers: { Cookie: Object.entries(jar).map(([k, v]) => `${k}=${v}`).join('; ') }, redirect: 'manual' });
    for (const c of (res.headers.getSetCookie ? res.headers.getSetCookie() : [])) { const [kv] = c.split(';'); const [k, v] = kv.split('='); jar[k] = v; }
    return { status: res.status, text: await res.text(), headers: res.headers };
  };
  const form = async (fields) => {
    const res = await fetch(BASE + '/feedback/moderate.php', { method: 'POST', redirect: 'manual',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded', Cookie: Object.entries(jar).map(([k, v]) => `${k}=${v}`).join('; ') },
      body: new URLSearchParams(fields).toString() });
    for (const c of (res.headers.getSetCookie ? res.headers.getSetCookie() : [])) { const [kv] = c.split(';'); const [k, v] = kv.split('='); jar[k] = v; }
    return { status: res.status, text: await res.text() };
  };
  let page = await get('');
  check('the moderation page asks for a password', /type="password"/.test(page.text) && !/Problem reports/.test(page.text));
  check('the moderation page is not indexable', /noindex/.test(page.headers.get('x-robots-tag') || ''));
  let csrf = (page.text.match(/name="csrf" value="([0-9a-f]+)"/) || [])[1];
  let res = await form({ csrf, action: 'login', password: 'wrong' });
  check('a wrong password is refused', /not right/.test(res.text));
  page = await get(''); csrf = (page.text.match(/name="csrf" value="([0-9a-f]+)"/) || [])[1];
  res = await form({ csrf: 'bad', action: 'login', password: PASSWORD });
  check('a login without the CSRF token is refused', !/Problem reports/.test((await get('')).text));
  page = await get(''); csrf = (page.text.match(/name="csrf" value="([0-9a-f]+)"/) || [])[1];
  res = await form({ csrf, action: 'login', password: PASSWORD });
  page = await get('');
  check('the right password opens the moderation page', /Problem reports: new/.test(page.text), page.text.replace(/<style>[^<]*<\/style>/, '').slice(0, 600));
  check('reports are listed', (page.text.match(/<article>/g) || []).length >= 5);
  csrf = (page.text.match(/name="csrf" value="([0-9a-f]+)"/) || [])[1];
  const firstId = (page.text.match(/name="id" value="([^"]+)"/) || [])[1];
  res = await form({ csrf, action: 'report', id: firstId, status: 'fixed', note: 'Step 3 corrected' });
  const fixed = JSON.parse(fs.readFileSync(path.join(store, 'reports', firstId + '.json'), 'utf8'));
  check('a report can be marked fixed, with its history kept', fixed.status === 'fixed' && fixed.history.length === 1 && fixed.history[0].note === 'Step 3 corrected', fixed);
  let exp = await get('?export=reviews');
  check('the export holds no review until one is approved', exp.text.trim() === '[]' || exp.text.trim() === '{}', exp.text);
  page = await get('');
  csrf = (page.text.match(/name="csrf" value="([0-9a-f]+)"/) || [])[1];
  const revId = stored('reviews')[0].replace('.json', '');
  await form({ csrf, action: 'review', id: revId, status: 'approved', note: '' });
  exp = await get('?export=reviews');
  const json = JSON.parse(exp.text);
  check('an approved review is exported in reviews.json shape', json['pad-thai'] && json['pad-thai'][0].author === 'Sam' && json['pad-thai'][0].rating === 4 && /^\d{4}-\d{2}-\d{2}$/.test(json['pad-thai'][0].date), json);

  /* 8. The shared code is not a page, and the newsletter is off without a provider. */
  const lib = await fetch(BASE + '/feedback/_lib.php');
  check('the shared library answers 404 when requested', lib.status === 404, lib.status);
  r = await fetch(BASE + '/feedback/subscribe.php?status=1').then(x => x.json());
  check('the newsletter says not configured without a provider', r.configured === false, r);
  r = await post('/feedback/subscribe.php', { email: 'reader@example.org', consent: 'yes', website: '', started: started() });
  check('a sign-up without a provider answers 503 and sends nothing', r.status === 503, r);

  /* 9. A public storage folder is refused outright. */
  writeConfig({ storage_dir: path.join(pub, 'feedback') });
  r = await fetch(BASE + '/feedback/report.php?status=1').then(x => x.json());
  check('settings that put storage inside the public folder are refused', r.configured === false, r);
}

main().catch(e => check('test run', false, e.stack)).finally(() => {
  server.kill();
  fs.rmSync(tmp, { recursive: true, force: true });
  const failed = results.filter(r => !r.ok);
  for (const r of failed) console.log(`  ✗ feedback: ${r.name}${r.detail !== undefined ? ` — ${JSON.stringify(r.detail).slice(0, 300)}` : ''}`);
  console.log(`  ${failed.length ? '✗' : '✓'} feedback endpoints: ${results.length - failed.length} of ${results.length} scenarios pass`);
  process.exit(failed.length ? 1 : 0);
});
