#!/usr/bin/env node
'use strict';
/**
 * Tests the contact form endpoint (src/server/contact-send.php) end to end, locally.
 *
 * It copies the endpoint and the built result templates into a temporary public
 * folder, starts PHP's built-in server on it (several workers, so concurrent
 * requests really overlap), and runs the scenarios below. Nothing is emailed: the
 * 'log' transport writes to a file, and the SMTP scenarios talk to a fake server
 * started here on 127.0.0.1, in plain, implicit-TLS and STARTTLS forms.
 *
 *   node tools/contact-test.js        (needs `php` and `openssl` on the PATH)
 *
 * Skips, with a message and exit status 0, when php is missing.
 */
const fs = require('fs');
const os = require('os');
const net = require('net');
const tls = require('tls');
const path = require('path');
const crypto = require('crypto');
const { spawn, spawnSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
if (spawnSync('php', ['-v']).status !== 0) { console.log('  - contact-test skipped: php is not installed'); process.exit(0); }
if (!fs.existsSync(path.join(ROOT, 'contact', '_pages', 'sent.html'))) {
  console.log('  ✗ contact-test needs the built result templates: run npm run build first'); process.exit(1);
}

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'wd-contact-'));
const pub = path.join(tmp, 'public');
const priv = path.join(tmp, 'private');
fs.mkdirSync(path.join(pub, 'contact', '_pages'), { recursive: true });
fs.mkdirSync(priv, { recursive: true });
fs.copyFileSync(path.join(ROOT, 'src', 'server', 'contact-send.php'), path.join(pub, 'contact', 'send.php'));
for (const f of ['sent.html', 'not-sent.html']) fs.copyFileSync(path.join(ROOT, 'contact', '_pages', f), path.join(pub, 'contact', '_pages', f));

const SALT = 'test-salt-' + 'x'.repeat(24);
const PASSWORD = 'smtp-password-' + 'p'.repeat(12);
const results = [];
const check = (name, ok, detail) => { results.push({ name, ok, detail }); console.log(`  ${ok ? '✓' : '✗'} ${name}${ok || !detail ? '' : `: ${detail}`}`); };
const responses = [];                         // every public response body, scanned for leaks at the end

const servers = [];
process.on('uncaughtException', err => { console.log('  ✗ contact-test crashed: ' + err.stack); servers.forEach(x => x.kill()); process.exit(1); });
const freePort = () => new Promise((resolve, reject) => {
  const probe = net.createServer();
  probe.on('error', reject);
  probe.listen(0, '127.0.0.1', () => { const { port } = probe.address(); probe.close(() => resolve(port)); });
});
async function startPhp(configPath) {
  const p = await freePort();
  const child = spawn('php', ['-S', `127.0.0.1:${p}`, '-t', pub], {
    env: { ...process.env, WD_CONTACT_CONFIG: configPath, PHP_CLI_SERVER_WORKERS: '8' }, stdio: 'ignore'
  });
  servers.push(child);
  let exited = false;
  child.on('exit', () => { exited = true; });
  for (let i = 0; i < 60 && !exited; i++) {
    try { await fetch(`http://127.0.0.1:${p}/contact/send.php`); return `http://127.0.0.1:${p}`; } catch { await new Promise(r => setTimeout(r, 100)); }
  }
  throw new Error('php server did not start');
}

function writeConfig(name, cfg) {
  const json = path.join(priv, `${name}.json`);
  fs.writeFileSync(json, JSON.stringify(cfg));
  const file = path.join(priv, `${name}.php`);
  fs.writeFileSync(file, `<?php return json_decode(file_get_contents(${JSON.stringify(json)}), true);\n`);
  return file;
}

async function post(base, fields, { json = true, headers = {}, raw } = {}) {
  const res = await fetch(`${base}/contact/send.php`, {
    method: 'POST', redirect: 'manual',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded', ...(json ? { Accept: 'application/json' } : {}), ...headers },
    body: raw !== undefined ? raw : new URLSearchParams(fields).toString()
  });
  const text = await res.text();
  responses.push(text);
  let body = null;
  try { body = JSON.parse(text); } catch { /* a page */ }
  return { status: res.status, text, body, location: res.headers.get('location') };
}
const good = (over = {}) => ({ name: 'Test Reader', email: 'reader@example.org', subject: 'A question about focaccia', message: 'The dough was very wet. Is that right for this recipe?', website: '', ...over });
const readLog = file => fs.existsSync(file) ? fs.readFileSync(file, 'utf8').trim().split('\n').filter(Boolean).map(l => JSON.parse(l)) : [];

/* ----------------------------------------------------------- a fake SMTP server */
function fakeSmtp({ mode, rejectRcpt = false, user = 'mailer@example.org', pass = PASSWORD, cert }) {
  const received = [];
  const secureContext = cert ? tls.createSecureContext({ key: cert.key, cert: cert.cert }) : null;
  const handle = socket => {
    let buffer = '';
    let data = null;
    const session = { auth: [], from: null, rcpt: null, message: null, tls: socket instanceof tls.TLSSocket };
    received.push(session);
    let send = line => socket.write(line + '\r\n');
    let current = socket;
    const onData = chunk => {
      buffer += chunk.toString('latin1');
      for (;;) {
        if (data !== null) {
          const end = buffer.indexOf('\r\n.\r\n');
          if (end < 0) return;
          session.message = buffer.slice(0, end);
          buffer = buffer.slice(end + 5);
          data = null;
          send('250 queued');
          continue;
        }
        const nl = buffer.indexOf('\r\n');
        if (nl < 0) return;
        const line = buffer.slice(0, nl);
        buffer = buffer.slice(nl + 2);
        const upper = line.toUpperCase();
        if (upper.startsWith('EHLO')) {
          const caps = ['250-fake.example'];
          if (mode === 'starttls' && !session.tls) caps.push('250 STARTTLS');
          else caps.push('250 AUTH LOGIN');
          caps.forEach(send);
        } else if (upper === 'STARTTLS') {
          send('220 go ahead');
          const secure = new tls.TLSSocket(current, { isServer: true, secureContext });
          current.removeListener('data', onData);
          current = secure; session.tls = true; secure.on('data', onData);
          secure.on('error', () => {});
          send = line2 => secure.write(line2 + '\r\n');
        } else if (upper === 'AUTH LOGIN') { session.step = 'user'; send('334 VXNlcm5hbWU6'); }
        else if (session.step === 'user') { session.auth.push(Buffer.from(line, 'base64').toString()); session.step = 'pass'; send('334 UGFzc3dvcmQ6'); }
        else if (session.step === 'pass') {
          session.auth.push(Buffer.from(line, 'base64').toString()); session.step = null;
          session.authOk = session.auth[0] === user && session.auth[1] === pass;
          send(session.authOk ? '235 ok' : '535 bad credentials');
        } else if (upper.startsWith('MAIL FROM:')) { session.from = line.slice(10); send('250 ok'); }
        else if (upper.startsWith('RCPT TO:')) { session.rcpt = line.slice(8); send(rejectRcpt ? '550 no such user' : '250 ok'); }
        else if (upper === 'DATA') { data = ''; send('354 end with dot'); }
        else if (upper === 'QUIT') { send('221 bye'); current.end(); return; }
        else send('500 unknown');
      }
    };
    socket.on('data', onData);
    socket.on('error', () => {});
    send('220 fake ESMTP');
  };
  const server = mode === 'ssl' ? tls.createServer({ key: cert.key, cert: cert.cert }, handle) : net.createServer(handle);
  return new Promise(resolve => server.listen(0, '127.0.0.1', () => resolve({ port: server.address().port, received, close: () => server.close() })));
}

(async () => {
  /* ---- 1. no settings at all: honest, and no secrets */
  const none = await startPhp(path.join(priv, 'does-not-exist.php'));
  let r = await fetch(`${none}/contact/send.php?status=1`).then(x => x.json());
  check('status says "not configured" when there is no settings file', r.ok === true && r.configured === false);
  r = await post(none, good());
  check('a valid post with no settings answers 503 not-configured and sends nothing', r.status === 503 && r.body && r.body.code === 'not-configured');
  r = await post(none, good(), { json: false });
  check('a plain form post with no settings renders the "not sent" page in place (503, no redirect)', r.status === 503 && /was not sent/.test(r.text) && /not switched on/.test(r.text) && !r.location);
  r = await fetch(`${none}/contact/send.php`);
  check('a plain GET answers 405', r.status === 405);

  /* ---- 2. invalid settings are refused, not half-used */
  const weak = await startPhp(writeConfig('weak', { to: 'owner@example.org', from: 'noreply@example.org', salt: 'short', transport: 'log', log_file: path.join(priv, 'x.jsonl') }));
  r = await fetch(`${weak}/contact/send.php?status=1`).then(x => x.json());
  check('a settings file with a short salt is "not configured"', r.configured === false);
  const badTo = await startPhp(writeConfig('badto', { to: 'not-an-address', from: 'noreply@example.org', salt: SALT, transport: 'log', log_file: path.join(priv, 'x.jsonl') }));
  r = await fetch(`${badTo}/contact/send.php?status=1`).then(x => x.json());
  check('a settings file with an invalid recipient is "not configured"', r.configured === false);
  const plainRemote = await startPhp(writeConfig('plainremote', { to: 'owner@example.org', from: 'noreply@example.org', salt: SALT, transport: 'smtp', smtp: { host: 'mail.example.org', port: 25, encryption: 'none', username: 'u', password: 'p' } }));
  r = await fetch(`${plainRemote}/contact/send.php?status=1`).then(x => x.json());
  check('unencrypted SMTP to a remote host is refused', r.configured === false);

  /* ---- 3. the log transport: validation, injection, honeypot, tokens */
  const logFile = path.join(priv, 'sent.jsonl');
  const stateA = path.join(tmp, 'state-a'); fs.mkdirSync(stateA);
  const base = await startPhp(writeConfig('log', { to: 'owner@example.org', from: 'noreply@example.org', salt: SALT, transport: 'log', log_file: logFile, state_dir: stateA, rate_limit: 5, rate_window: 3600 }));
  r = await fetch(`${base}/contact/send.php?status=1`).then(x => x.json());
  check('status says "configured" with valid settings, and exposes nothing else', r.ok === true && r.configured === true && Object.keys(r).length === 2);

  r = await post(base, good({ name: 'A' }));
  check('a too-short name is rejected with 422 and a named field', r.status === 422 && r.body.code === 'invalid' && /name/.test(r.body.message));
  r = await post(base, good({ email: 'not-an-email' }));
  check('an invalid email is rejected', r.status === 422 && /email/.test(r.body.message));
  r = await post(base, good({ message: 'too short' }));
  check('a too-short message is rejected', r.status === 422 && /message/.test(r.body.message));
  r = await post(base, good({ message: 'x'.repeat(5001) }));
  check('an over-long message is rejected', r.status === 422);
  r = await post(base, null, { raw: 'name[]=a&email=reader%40example.org&subject=Hello+there&message=' + 'm'.repeat(30) });
  check('an array posted as a field is rejected, with no PHP warning in the response', r.status === 422 && !/Warning|Notice|Array to string/.test(r.text));
  r = await post(base, good({ email: 'a"b@example.org' }));
  check('an email with a quote is rejected', r.status === 422);
  r = await post(base, good(), { headers: { Origin: 'https://evil.example' } });
  check('a post whose Origin is another site is refused (403)', r.status === 403 && r.body.code === 'forbidden');
  r = await post(base, good(), { headers: { Origin: base } });
  check('a post from the same origin is accepted', r.status === 200 && r.body.ok === true);

  const before = readLog(logFile).length;
  r = await post(base, good({ website: 'http://spam.example' }));
  check('the honeypot answers as if it worked, and sends nothing', r.status === 200 && r.body.ok === true && readLog(logFile).length === before);

  r = await post(base, good({ name: 'Eve\r\nBcc: victim@example.org', subject: 'Hello\r\nBcc: victim2@example.org\r\nX-Evil: 1' }));
  const logged = readLog(logFile).pop();
  const headerNames = Object.keys(logged.headers);
  check('line breaks in name and subject cannot add a header', r.status === 200 && !/[\r\n]/.test(logged.subject) && !headerNames.some(h => /bcc|x-evil/i.test(h)) && !/[\r\n]/.test(logged.headers['Reply-To']));
  check('the Reply-To is the sender, quoted, and the To is only the configured owner', /^"Eve Bcc: victim@example\.org" <reader@example\.org>$/.test(logged.headers['Reply-To']) && logged.to === 'owner@example.org');

  r = await post(base, good(), { json: false });
  check('a plain form post redirects (303) to a signed "sent" address', r.status === 303 && /\/contact\/send\.php\?sent=\d+\.[0-9a-f]{32}$/.test(r.location));
  const sentUrl = new URL(r.location, base).href;
  let page = await fetch(sentUrl).then(async x => ({ status: x.status, text: await x.text() }));
  check('the signed address shows "Your message was sent" with the honest wording', page.status === 200 && /Your message was sent/.test(page.text) && /left this site, not that it has been read/.test(page.text));
  page = await fetch(`${base}/contact/send.php?sent=123456789.${'0'.repeat(32)}`, { redirect: 'manual' });
  check('a forged token redirects to the form, not to a "sent" page', page.status === 303 && page.headers.get('location') === '/contact/');
  page = await fetch(`${base}/contact/send.php?sent=`, { redirect: 'manual' });
  check('an empty token redirects to the form', page.status === 303);
  const old = Math.floor(Date.now() / 1000) - 3600;
  const oldToken = `${old}.${crypto.createHmac('sha256', SALT).update('sent|' + old).digest('hex').slice(0, 32)}`;
  page = await fetch(`${base}/contact/send.php?sent=${oldToken}`, { redirect: 'manual' });
  check('a correctly signed token older than 15 minutes is not accepted', page.status === 303);
  page = await fetch(`${base}/contact/send.php`, { redirect: 'manual' });
  check('visiting the endpoint directly does not show a "sent" page', page.status === 405);

  /* ---- 4. rate limits: exact under concurrency, mode, expiry, cleanup */
  const stateB = path.join(tmp, 'state-b'); fs.mkdirSync(stateB);
  const logB = path.join(priv, 'sent-b.jsonl');
  const rl = await startPhp(writeConfig('rl', { to: 'owner@example.org', from: 'noreply@example.org', salt: SALT, transport: 'log', log_file: logB, state_dir: stateB, rate_limit: 5, rate_window: 3600 }));
  const burst = await Promise.all(Array.from({ length: 14 }, () => post(rl, good())));
  const okCount = burst.filter(x => x.status === 200).length;
  const limited = burst.filter(x => x.status === 429).length;
  check('14 simultaneous posts with a limit of 5: exactly 5 are sent and 9 are limited', okCount === 5 && limited === 9 && readLog(logB).length === 5, `sent ${okCount}, limited ${limited}, logged ${readLog(logB).length}`);
  const stateFile = path.join(stateB, 'wd-contact-rate.json');
  const mode = (fs.statSync(stateFile).mode & 0o777).toString(8);
  check('the rate-limit file is mode 0600', mode === '600', mode);
  const state = JSON.parse(fs.readFileSync(stateFile, 'utf8'));
  const stored = JSON.stringify(state);
  check('the rate-limit file holds a salted hash and timestamps, never the address itself', Object.keys(state.ips).length === 1 && !/127\.0\.0\.1/.test(stored) && /^[0-9a-f]{24}$/.test(Object.keys(state.ips)[0]));
  // Expire everything by rewriting timestamps into the past, then a status check must purge.
  const past = Math.floor(Date.now() / 1000) - 7200;
  const dayOld = Math.floor(Date.now() / 1000) - 90000;     // 25 hours ago
  fs.writeFileSync(stateFile, JSON.stringify({ v: 1, ips: { aaaaaaaaaaaaaaaaaaaaaaaa: [past, past - 5], bbbbbbbbbbbbbbbbbbbbbbbb: [past] }, day: [past, dayOld] }));
  await fetch(`${rl}/contact/send.php?status=1`);
  const purged = JSON.parse(fs.readFileSync(stateFile, 'utf8'));
  check('expired per-connection entries are removed the next time the form or its status check runs', Object.keys(purged.ips).length === 0);
  check('the daily counter keeps 24 hours of timestamps and drops older ones', purged.day.length === 1 && purged.day[0] === past);
  r = await post(rl, good());
  check('after expiry the same connection can send again', r.status === 200);
  // A daily cap, using a second server with a cap of 2.
  const stateC = path.join(tmp, 'state-c'); fs.mkdirSync(stateC);
  const daily = await startPhp(writeConfig('daily', { to: 'owner@example.org', from: 'noreply@example.org', salt: SALT, transport: 'log', log_file: path.join(priv, 'sent-c.jsonl'), state_dir: stateC, rate_limit: 50, daily_limit: 2 }));
  const dr = [await post(daily, good()), await post(daily, good()), await post(daily, good())];
  check('a daily cap stops a flood however many addresses it comes from', dr[0].status === 200 && dr[1].status === 200 && dr[2].status === 429);
  // Unusable state: the form refuses to send rather than running with no limiter.
  const stateD = path.join(tmp, 'state-d'); fs.mkdirSync(stateD); fs.mkdirSync(path.join(stateD, 'wd-contact-rate.json'));
  const broken = await startPhp(writeConfig('broken', { to: 'owner@example.org', from: 'noreply@example.org', salt: SALT, transport: 'log', log_file: path.join(priv, 'sent-d.jsonl'), state_dir: stateD }));
  r = await post(broken, good());
  check('if the rate-limit state cannot be used, the form refuses to send (503) instead of running unlimited', r.status === 503 && r.body.code === 'unavailable' && readLog(path.join(priv, 'sent-d.jsonl')).length === 0);

  /* ---- 5. real SMTP, against the fake server: plain, implicit TLS, STARTTLS */
  const keyFile = path.join(tmp, 'key.pem'); const certFile = path.join(tmp, 'cert.pem');
  const gen = spawnSync('openssl', ['req', '-x509', '-newkey', 'rsa:2048', '-nodes', '-keyout', keyFile, '-out', certFile, '-days', '2', '-subj', '/CN=127.0.0.1', '-addext', 'subjectAltName=IP:127.0.0.1,DNS:localhost'], { stdio: 'ignore' });
  const haveCert = gen.status === 0;
  if (!haveCert) check('openssl is available to make a test certificate', false);
  const cert = haveCert ? { key: fs.readFileSync(keyFile), cert: fs.readFileSync(certFile) } : null;

  async function smtpScenario(label, mode, smtpOverride = {}, serverOpts = {}) {
    const fake = await fakeSmtp({ mode, cert, ...serverOpts });
    const stateDir = fs.mkdtempSync(path.join(tmp, 'state-smtp-'));
    const encryption = { plain: 'none', ssl: 'ssl', starttls: 'tls' }[mode];
    const srv = await startPhp(writeConfig('smtp-' + label.replace(/\W+/g, ''), {
      to: 'owner@example.org', from: 'mailer@example.org', salt: SALT, transport: 'smtp', state_dir: stateDir,
      smtp: { host: '127.0.0.1', port: fake.port, encryption, username: 'mailer@example.org', password: PASSWORD, cafile: certFile, ...smtpOverride }
    }));
    const res = await post(srv, good({ message: 'First line.\n.A line that starts with a dot.\nLast line with accents: café, naïve.' }));
    const session = fake.received[0];
    fake.close();
    return { res, session };
  }
  const plain = await smtpScenario('plain', 'plain');
  check('SMTP (no encryption, localhost only): accepted, authenticated, envelope correct', plain.res.status === 200 && plain.session.authOk === true && /<mailer@example\.org>/.test(plain.session.from) && /<owner@example\.org>/.test(plain.session.rcpt));
  const decode = m => { const body = m.split('\r\n\r\n').slice(1).join('\r\n\r\n'); return Buffer.from(body.replace(/\r\n/g, ''), 'base64').toString('utf8'); };
  const msg = plain.session.message || '';
  check('the SMTP message has Date, From, To, Subject, Reply-To and a Message-ID, and a base64 UTF-8 body', /^Date: .+ \+0000/m.test(msg) && /^From: Weekly Delight <mailer@example\.org>/m.test(msg) && /^To: <owner@example\.org>/m.test(msg) && /^Subject: \[Weekly Delight\] A question about focaccia/m.test(msg) && /^Reply-To: "Test Reader" <reader@example\.org>/m.test(msg) && /^Message-ID: <[0-9a-f]{24}@example\.org>/m.test(msg) && /Content-Transfer-Encoding: base64/.test(msg));
  const text = decode(msg);
  check('the body round-trips: accents, and a line that begins with a dot, survive', /café, naïve/.test(text) && /^\.A line that starts with a dot\./m.test(text) && /Name: Test Reader/.test(text));
  if (haveCert) {
    const ssl = await smtpScenario('ssl', 'ssl');
    check('SMTP over implicit TLS with a verified (private CA) certificate works', ssl.res.status === 200 && ssl.session.authOk === true && ssl.session.tls === true);
    const st = await smtpScenario('starttls', 'starttls');
    check('SMTP with STARTTLS works, and the login happens only after the upgrade', st.res.status === 200 && st.session.authOk === true && st.session.tls === true);
    const untrusted = await smtpScenario('untrusted', 'ssl', { cafile: undefined });
    check('a certificate the server does not trust is refused, and nothing is sent', untrusted.res.status === 502 && untrusted.res.body.code === 'send-failed' && !(untrusted.session && untrusted.session.message));
  }
  const wrong = await smtpScenario('wrongpass', 'plain', { password: 'not-the-password' });
  check('a wrong SMTP password gives a generic "not sent" with no server text', wrong.res.status === 502 && wrong.res.body.code === 'send-failed' && !/535|credentials|bad/i.test(wrong.res.text));
  const rejected = await smtpScenario('rcpt', 'plain', {}, { rejectRcpt: true });
  check('a recipient the SMTP server refuses gives "not sent", not success', rejected.res.status === 502 && rejected.res.body.code === 'send-failed' && !/550|no such user/i.test(rejected.res.text));
  const down = await startPhp(writeConfig('smtpdown', { to: 'owner@example.org', from: 'mailer@example.org', salt: SALT, transport: 'smtp', state_dir: fs.mkdtempSync(path.join(tmp, 'state-')), smtp: { host: '127.0.0.1', port: 9, encryption: 'none', username: 'u', password: PASSWORD } }));
  r = await post(down, good());
  check('an SMTP server that cannot be reached gives "not sent" quickly', r.status === 502 && r.body.code === 'send-failed');

  /* ---- 5b. the doctor script: checks the settings, never prints a value, sends only when told to */
  const doctor = path.join(ROOT, 'tools', 'contact-doctor.php');
  if (haveCert) {
    const fake = await fakeSmtp({ mode: 'ssl', cert });
    const doctorCfg = writeConfig('doctor', { to: 'owner@example.org', from: 'mailer@example.org', salt: SALT, transport: 'smtp', state_dir: fs.mkdtempSync(path.join(tmp, 'state-')), smtp: { host: '127.0.0.1', port: fake.port, encryption: 'ssl', username: 'mailer@example.org', password: PASSWORD, cafile: certFile } });
    // Async on purpose: spawnSync would freeze this process, and the fake SMTP server lives in it.
    const run = (...args) => new Promise(resolve => {
      const child = spawn('php', [doctor, '--config', doctorCfg, ...args]);
      let stdout = ''; let stderr = '';
      child.stdout.on('data', d => { stdout += d; }); child.stderr.on('data', d => { stderr += d; });
      child.on('close', status => resolve({ status, stdout, stderr }));
    });
    let out = await run('--probe');
    check('the doctor logs in to SMTP with --probe, and no message is sent', out.status === 0 && /login all worked/.test(out.stdout) && fake.received.every(s => !s.message), out.stdout + out.stderr + ' sessions=' + JSON.stringify(fake.received.map(x => ({ auth: x.authOk, msg: !!x.message }))));
    check('the doctor never prints the password, the salt or the addresses', ![PASSWORD, SALT, 'owner@example.org', 'mailer@example.org'].some(v => out.stdout.includes(v)));
    out = await run('--send-test');
    check('--send-test without --yes shows the message and sends nothing', out.status === 0 && /nothing was sent/.test(out.stdout) && fake.received.every(s => !s.message));
    out = await run('--send-test', '--yes');
    check('--send-test --yes sends exactly one message', out.status === 0 && fake.received.filter(s => s.message).length === 1, out.stdout + out.stderr + ' sessions=' + JSON.stringify(fake.received.map(x => ({ auth: x.authOk, msg: !!x.message }))));
    fake.close();
  }
  const bad = spawnSync('php', [doctor, '--config', path.join(priv, 'nope.php')], { encoding: 'utf8' });
  check('the doctor exits non-zero and names the problem when there are no settings', bad.status !== 0 && /no file at the expected path|no settings file/.test(bad.stdout));

  /* ---- 6. nothing private reaches a public response */
  const all = responses.join('\n');
  const leaks = [PASSWORD, SALT, 'mailer@example.org', 'owner@example.org', priv, tmp, 'contact-config', '127.0.0.1:'].filter(s => all.includes(s));
  check('no response ever contained a password, secret, address from the settings, or a server path', leaks.length === 0, leaks.join(', '));

  /* ---- done */
  servers.forEach(s => s.kill());
  fs.rmSync(tmp, { recursive: true, force: true });
  const failed = results.filter(x => !x.ok);
  console.log(failed.length ? `\n  ${failed.length} of ${results.length} contact checks failed` : `\n  all ${results.length} contact checks passed`);
  process.exit(failed.length ? 1 : 0);
})().catch(err => { console.log('  ✗ contact-test crashed: ' + err.stack); servers.forEach(s => s.kill()); process.exit(1); });
