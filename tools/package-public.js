#!/usr/bin/env node
'use strict';
/**
 * Copies the public site, and nothing else, into dist-public/ so that what goes on the web server
 * is the built output rather than the whole repository. Today the host deploys the repository into
 * public_html and .htaccess hides the private paths (README, "Deploying"); that stays as defence in
 * depth, but a directory that never contained src/, tools/ or the audit files cannot leak them.
 *
 *   npm run build && node tools/package-public.js            build dist-public/ and check it
 *   node tools/package-public.js --out <dir> [--zip]          another directory; --zip also writes <dir>.zip
 *   node tools/package-public.js --check-only [--out <dir>]   check an existing package
 *
 * What goes in is an allow-list: the generated pages and assets the build writes, the sitemaps and
 * feeds, robots.txt, ads.txt, manifest.json, .htaccess, images-attribution.md (the About page links
 * to it), and the contact endpoint with its result templates (contact/_pages is still refused by
 * .htaccess). The check fails if anything outside the allow-list, or anything that looks private,
 * is in the package, or if a sitemap URL has no page in it.
 */
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const DIRS = ['assets', 'recipes', 'categories', 'cuisines', 'ingredients', 'about', 'contact', 'privacy', 'search', 'favourites', 'site-directory',
  'collections', 'guides', 'weekly-plan', 'my-plan', 'report', 'feedback'];
const FILES = ['index.html', '404.html', 'sitemap.xml', 'sitemap-index.xml', 'robots.txt', 'ads.txt', 'manifest.json',
  'feed.xml', 'pinterest-feed.xml', 'search-index.json', '.htaccess', 'images-attribution.md'];
const SITEMAP_CHUNK = /^sitemap-\d+\.xml$/;
/* Never in a public package, wherever they turn up. */
const PRIVATE = /(^|\/)(?:src|tools|docs|backups|logs|node_modules|\.git|\.github|\.humanize|\.wide|\.nutrition-work)(\/|$)|(^|\/)(?:CLAUDE\.md|README\.md|MISSING-IMAGES\.txt|package(?:-lock)?\.json|netlify\.toml|vercel\.json|_redirects|suspects\.json|\.env|contact-config[^/]*\.php)$|\.(?:csv|py|pyc|sh|bak|log|jsonl)$/i;

const args = process.argv.slice(2);
const opt = name => { const i = args.indexOf(name); return i >= 0 ? args[i + 1] : null; };
const OUT = path.resolve(opt('--out') || path.join(ROOT, 'dist-public'));

function copy(from, to) {
  const st = fs.statSync(from);
  if (st.isDirectory()) {
    fs.mkdirSync(to, { recursive: true });
    for (const name of fs.readdirSync(from)) copy(path.join(from, name), path.join(to, name));
  } else fs.copyFileSync(from, to);
}

function walk(dir, base = dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full, base, out); else out.push(path.relative(base, full).split(path.sep).join('/'));
  }
  return out;
}

function build() {
  if (OUT === ROOT || !OUT.startsWith(path.dirname(ROOT)) && !opt('--out')) throw new Error(`refusing to write to ${OUT}`);
  fs.rmSync(OUT, { recursive: true, force: true });
  fs.mkdirSync(OUT, { recursive: true });
  for (const d of DIRS) copy(path.join(ROOT, d), path.join(OUT, d));
  for (const f of FILES) copy(path.join(ROOT, f), path.join(OUT, f));
  for (const f of fs.readdirSync(ROOT).filter(n => SITEMAP_CHUNK.test(n))) copy(path.join(ROOT, f), path.join(OUT, f));
}

function check() {
  const failures = [];
  const files = walk(OUT);
  const top = new Set(files.map(f => f.split('/')[0]));
  for (const t of top) {
    if (!DIRS.includes(t) && !FILES.includes(t) && !SITEMAP_CHUNK.test(t)) failures.push(`not on the allow-list: ${t}`);
  }
  for (const f of files) if (PRIVATE.test(f)) failures.push(`private file in the package: ${f}`);
  for (const f of [...FILES, 'contact/send.php', 'contact/_pages/sent.html', 'contact/_pages/not-sent.html',
    'feedback/_lib.php', 'feedback/report.php', 'feedback/review.php', 'feedback/subscribe.php', 'feedback/moderate.php']) {
    if (!fs.existsSync(path.join(OUT, f))) failures.push(`missing: ${f}`);
  }
  /* Every URL the sitemaps list has its page in the package. */
  let urls = 0;
  for (const f of files.filter(n => /^sitemap(?:-\d+)?\.xml$/.test(n))) {
    for (const [, loc] of fs.readFileSync(path.join(OUT, f), 'utf8').matchAll(/<loc>https:\/\/weeklydelight\.com\/([^<]*)<\/loc>/g)) {
      if (/\.xml$/.test(loc)) continue;
      urls++;
      const rel = loc === '' || loc.endsWith('/') ? `${loc}index.html` : loc;
      if (!fs.existsSync(path.join(OUT, rel))) failures.push(`sitemap URL with no file: /${loc}`);
    }
  }
  /* Local links and assets on a sample of pages resolve inside the package. */
  const sample = ['index.html', 'recipes/index.html', 'recipes/focaccia/index.html', 'about/index.html', 'contact/index.html', 'categories/dinner/index.html',
    'collections/index.html', 'weekly-plan/index.html', 'guides/index.html', 'report/index.html', 'my-plan/index.html'];
  for (const page of sample) {
    const html = fs.readFileSync(path.join(OUT, page), 'utf8');
    for (const [, ref] of html.matchAll(/(?:href|src)="(\/[^"#?]*)/g)) {
      if (ref.startsWith('//')) continue;
      const rel = ref.endsWith('/') ? `${ref.slice(1)}index.html` : ref.slice(1);
      if (!fs.existsSync(path.join(OUT, rel)) && !fs.existsSync(path.join(OUT, rel, 'index.html'))) failures.push(`${page} links to ${ref}, not in the package`);
    }
  }
  const bytes = files.reduce((n, f) => n + fs.statSync(path.join(OUT, f)).size, 0);
  console.log(`dist-public: ${files.length} files, ${(bytes / 1048576).toFixed(1)} MB, ${urls} sitemap URLs all present` + (failures.length ? '' : ', nothing private'));
  for (const f of failures.slice(0, 40)) console.log(`  ✗ ${f}`);
  if (failures.length > 40) console.log(`  … and ${failures.length - 40} more`);
  return failures.length === 0;
}

if (!args.includes('--check-only')) build();
const ok = check();
if (ok && args.includes('--zip')) {
  const zip = `${OUT}.zip`;
  fs.rmSync(zip, { force: true });
  execFileSync('zip', ['-qr', '-X', zip, '.'], { cwd: OUT });
  console.log(`wrote ${zip}`);
}
process.exit(ok ? 0 : 1);
