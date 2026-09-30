#!/usr/bin/env node
'use strict';
/**
 * Snapshot, verify and restore every file that defines a recipe.
 *
 * Recipes here are not rows in a database. They are JavaScript modules under
 * src/data: catalogue rows in the catalog files, prose in the details
 * directories, and beside them the files that decorate them (images.json,
 * reviews.json, content-dates.json, the rewrite overlay in the rewrites
 * directory). A snapshot is a byte-for-byte copy of that
 * whole directory plus a manifest of sha256 hashes, so a copy can be proved
 * intact before anyone relies on it and a restore can be proved complete after.
 *
 * Nothing that changes recipe data should run without one. tools/humanize.js
 * calls ensureBackup() itself before its first write, which takes a snapshot
 * only when no existing one already matches the current tree.
 *
 * Restore is never destructive: it snapshots the current state first, under a
 * "-pre-restore" label, so a restore can itself be undone.
 *
 * Snapshots live in backups/, which git ignores. They are a convenience for the
 * working copy. The durable copy of the originals is the git history — the
 * snapshot records which commit it was taken at, and says whether that commit
 * is already on a remote.
 *
 *   node tools/backup.js                      take a snapshot
 *   node tools/backup.js --archive            ...and also write a .tar.gz of it
 *   node tools/backup.js --keep 5             ...and delete all but the newest 5
 *   node tools/backup.js --list               list snapshots
 *   node tools/backup.js --verify [dir]       check one against its manifest (default: newest)
 *   node tools/backup.js --restore [dir]      put one back over src/data (default: newest)
 *       --prune                                 also delete files that are not in the snapshot
 *       --dry-run                               show what would change, change nothing
 */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { spawnSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const SOURCE = path.join(ROOT, 'src', 'data');
const BACKUPS = path.join(ROOT, 'backups');
const PREFIX = 'recipes-';
const FORMAT = 1;

/* ------------------------------------------------------------------ files */

/** Every file under `dir`, as sorted POSIX-style relative paths. */
function listFiles(dir, base = dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) listFiles(full, base, out);
    else if (entry.isFile()) out.push(path.relative(base, full).split(path.sep).join('/'));
  }
  return out.sort();
}

const sha256 = file => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');

function copyFile(from, to) {
  fs.mkdirSync(path.dirname(to), { recursive: true });
  fs.copyFileSync(from, to);
}

/** Hashes for a directory: { 'catalog.js': { sha256, bytes }, … } */
function hashTree(dir) {
  const files = {};
  for (const rel of listFiles(dir)) {
    const full = path.join(dir, rel);
    files[rel] = { sha256: sha256(full), bytes: fs.statSync(full).size };
  }
  return files;
}

/** One hash for the whole tree, so two trees can be compared without a diff. */
function treeHash(files) {
  const h = crypto.createHash('sha256');
  for (const rel of Object.keys(files).sort()) h.update(`${rel}\0${files[rel].sha256}\n`);
  return h.digest('hex');
}

/* ------------------------------------------------------------------- git */

function git(...args) {
  const r = spawnSync('git', args, { cwd: ROOT, encoding: 'utf8' });
  return r.status === 0 ? r.stdout.trim() : null;
}

/** Where the snapshot was taken, and whether git already holds the same bytes. */
function gitInfo() {
  const commit = git('rev-parse', 'HEAD');
  if (!commit) return null;
  const dirty = (git('status', '--porcelain', '--', 'src/data') || '').length > 0;
  const remotes = (git('branch', '-r', '--contains', commit) || '')
    .split('\n').map(s => s.trim()).filter(s => s && !s.includes('->'));
  return { commit, branch: git('rev-parse', '--abbrev-ref', 'HEAD'), dirty, onRemotes: remotes };
}

/* --------------------------------------------------------------- recipes */

function recipeCount() {
  try { return require('../src/data/volumes').catalog().length; } catch (e) { return null; }
}

/* ------------------------------------------------------------- snapshots */

function stamp() {
  return new Date().toISOString().replace(/\.\d+Z$/, '').replace(/[-:]/g, '').replace('T', '-');
}

/** Snapshot directories, oldest first. Names sort chronologically by design. */
function snapshots() {
  if (!fs.existsSync(BACKUPS)) return [];
  return fs.readdirSync(BACKUPS, { withFileTypes: true })
    .filter(e => e.isDirectory() && e.name.startsWith(PREFIX)
      && fs.existsSync(path.join(BACKUPS, e.name, 'manifest.json')))
    .map(e => path.join(BACKUPS, e.name))
    .sort();
}

function readManifest(dir) {
  return JSON.parse(fs.readFileSync(path.join(dir, 'manifest.json'), 'utf8'));
}

function resolveSnapshot(arg) {
  if (arg) {
    const direct = path.resolve(arg);
    if (fs.existsSync(path.join(direct, 'manifest.json'))) return direct;
    const named = path.join(BACKUPS, arg);
    if (fs.existsSync(path.join(named, 'manifest.json'))) return named;
    throw new Error(`No snapshot at "${arg}" (looked for a manifest.json there and in backups/)`);
  }
  /* The safety copies that restore() takes of the state it is about to replace
     are not what anyone means by "the latest backup", so they are only reached
     by naming them. */
  const all = snapshots().filter(dir => readManifest(dir).label !== 'pre-restore');
  if (!all.length) throw new Error('There are no snapshots yet. Run: node tools/backup.js');
  return all[all.length - 1];
}

/**
 * Copy src/data into backups/ and prove the copy. Returns { dir, manifest }.
 * The copy is re-read and re-hashed before this returns, so a snapshot that
 * exists is a snapshot that was verified.
 */
function snapshot({ label = '', quiet = false } = {}) {
  const files = hashTree(SOURCE);
  if (!Object.keys(files).length) throw new Error(`Nothing to back up: ${SOURCE} is empty or missing`);

  let name = `${PREFIX}${stamp()}${label ? '-' + label : ''}`;
  let dir = path.join(BACKUPS, name);
  for (let n = 2; fs.existsSync(dir); n++) dir = path.join(BACKUPS, `${name}-${n}`);

  const dataDir = path.join(dir, 'data');
  for (const rel of Object.keys(files)) copyFile(path.join(SOURCE, rel), path.join(dataDir, rel));

  const copied = hashTree(dataDir);
  const bad = Object.keys(files).filter(rel => !copied[rel] || copied[rel].sha256 !== files[rel].sha256);
  if (bad.length || Object.keys(copied).length !== Object.keys(files).length) {
    fs.rmSync(dir, { recursive: true, force: true });
    throw new Error(`Snapshot failed verification (${bad.slice(0, 5).join(', ') || 'file count differs'}); it was discarded`);
  }

  const manifest = {
    format: FORMAT,
    label,
    createdAt: new Date().toISOString(),
    source: 'src/data',
    recipes: recipeCount(),
    git: gitInfo(),
    treeHash: treeHash(files),
    totals: {
      files: Object.keys(files).length,
      bytes: Object.values(files).reduce((sum, f) => sum + f.bytes, 0)
    },
    files
  };
  fs.writeFileSync(path.join(dir, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');

  if (!quiet) {
    console.log(`Snapshot  ${path.relative(ROOT, dir)}`);
    console.log(`          ${manifest.totals.files} files, ${(manifest.totals.bytes / 1048576).toFixed(1)} MB, `
      + `${manifest.recipes == null ? 'recipe count unavailable' : manifest.recipes + ' recipes'}, verified`);
    if (manifest.git) {
      const where = manifest.git.onRemotes.length ? `on ${manifest.git.onRemotes.join(', ')}` : 'NOT on any remote branch';
      console.log(`          git ${manifest.git.commit.slice(0, 8)} (${manifest.git.branch}), ${where}`
        + (manifest.git.dirty ? '; src/data had uncommitted changes when this was taken' : ''));
    }
  }
  return { dir, manifest };
}

/** The newest snapshot that already matches the tree as it is now, if any. */
function findMatching() {
  const current = treeHash(hashTree(SOURCE));
  for (const dir of snapshots().reverse()) {
    try { if (readManifest(dir).treeHash === current) return dir; } catch (e) { /* unreadable: skip it */ }
  }
  return null;
}

/** For other tools: a snapshot of the current tree, making one only if needed. */
function ensureBackup({ quiet = false } = {}) {
  const existing = findMatching();
  if (existing) {
    if (!quiet) console.log(`Backup    ${path.relative(ROOT, existing)} already matches the current data`);
    return { dir: existing, created: false };
  }
  return { dir: snapshot({ quiet }).dir, created: true };
}

/** Problems found, [] when the snapshot is exactly what its manifest says. */
function verify(dir) {
  const manifest = readManifest(dir);
  const dataDir = path.join(dir, 'data');
  const problems = [];
  const actual = hashTree(dataDir);
  for (const [rel, want] of Object.entries(manifest.files)) {
    if (!actual[rel]) problems.push(`missing: ${rel}`);
    else if (actual[rel].sha256 !== want.sha256) problems.push(`changed: ${rel}`);
  }
  for (const rel of Object.keys(actual)) if (!manifest.files[rel]) problems.push(`not in manifest: ${rel}`);
  if (!problems.length && treeHash(manifest.files) !== manifest.treeHash) problems.push('manifest treeHash does not match its own file list');
  return problems;
}

/** Put a snapshot back over src/data. The current state is snapshotted first. */
function restore(dir, { prune = false, dryRun = false } = {}) {
  const problems = verify(dir);
  if (problems.length) {
    throw new Error(`Refusing to restore from a damaged snapshot:\n  ${problems.slice(0, 10).join('\n  ')}`);
  }
  const manifest = readManifest(dir);
  const current = hashTree(SOURCE);
  const toWrite = Object.keys(manifest.files).filter(rel => !current[rel] || current[rel].sha256 !== manifest.files[rel].sha256);
  const toDelete = prune ? Object.keys(current).filter(rel => !manifest.files[rel]) : [];
  const extra = Object.keys(current).filter(rel => !manifest.files[rel]);

  console.log(`${dryRun ? 'Would restore' : 'Restoring'} ${path.relative(ROOT, dir)}: `
    + `${toWrite.length} file(s) to write, ${toDelete.length} to delete`
    + (!prune && extra.length ? `, ${extra.length} file(s) not in the snapshot left alone (use --prune to remove them)` : ''));
  if (dryRun) {
    for (const rel of toWrite.slice(0, 20)) console.log(`  write   ${rel}`);
    for (const rel of toDelete.slice(0, 20)) console.log(`  delete  ${rel}`);
    return;
  }
  if (toWrite.length || toDelete.length) snapshot({ label: 'pre-restore' });

  for (const rel of toWrite) copyFile(path.join(dir, 'data', rel), path.join(SOURCE, rel));
  for (const rel of toDelete) fs.rmSync(path.join(SOURCE, rel), { force: true });

  /* Empty directories left behind by --prune would make the catalogue loader
     look for detail files that are no longer there. */
  const dirs = [];
  (function collect(d) {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      if (e.isDirectory()) { collect(path.join(d, e.name)); dirs.push(path.join(d, e.name)); }
    }
  })(SOURCE);
  for (const d of dirs) if (!fs.readdirSync(d).length) fs.rmdirSync(d);

  const after = hashTree(SOURCE);
  const left = Object.keys(manifest.files).filter(rel => !after[rel] || after[rel].sha256 !== manifest.files[rel].sha256);
  if (left.length) throw new Error(`Restore finished but ${left.length} file(s) still differ: ${left.slice(0, 5).join(', ')}`);
  console.log('Restored and re-checked: every file in the snapshot matches.');
}

function archive(dir) {
  const out = `${dir}.tar.gz`;
  const r = spawnSync('tar', ['-czf', out, '-C', path.dirname(dir), path.basename(dir)], { encoding: 'utf8' });
  if (r.status !== 0) {
    console.warn(`Could not write ${path.relative(ROOT, out)} (is tar installed?): ${(r.stderr || r.error || '').toString().trim()}`);
    return null;
  }
  console.log(`Archive   ${path.relative(ROOT, out)} (${(fs.statSync(out).size / 1048576).toFixed(1)} MB)`);
  return out;
}

function keepNewest(n) {
  const all = snapshots();
  const doomed = all.slice(0, Math.max(0, all.length - n));
  for (const dir of doomed) {
    fs.rmSync(dir, { recursive: true, force: true });
    fs.rmSync(`${dir}.tar.gz`, { force: true });
    console.log(`Removed   ${path.relative(ROOT, dir)}`);
  }
}

/* ------------------------------------------------------------------- cli */

function main(argv) {
  const has = flag => argv.includes(flag);
  const valueOf = flag => { const i = argv.indexOf(flag); return i >= 0 && argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[i + 1] : null; };

  if (has('--list')) {
    const all = snapshots();
    if (!all.length) return console.log('No snapshots.');
    for (const dir of all) {
      const m = readManifest(dir);
      console.log(`${path.basename(dir).padEnd(40)} ${String(m.recipes).padStart(5)} recipes  ${String(m.totals.files).padStart(4)} files  `
        + `git ${m.git ? m.git.commit.slice(0, 8) : '—'}`);
    }
    return undefined;
  }
  if (has('--verify')) {
    const dir = resolveSnapshot(valueOf('--verify'));
    const problems = verify(dir);
    if (problems.length) {
      console.error(`${path.relative(ROOT, dir)} FAILED verification:\n  ${problems.slice(0, 20).join('\n  ')}`);
      process.exitCode = 1;
    } else {
      console.log(`${path.relative(ROOT, dir)} verified: every file matches its manifest.`);
    }
    return undefined;
  }
  if (has('--restore')) {
    restore(resolveSnapshot(valueOf('--restore')), { prune: has('--prune'), dryRun: has('--dry-run') });
    return undefined;
  }

  const { dir } = snapshot();
  if (has('--archive')) archive(dir);
  const keep = valueOf('--keep');
  if (keep) keepNewest(Math.max(1, parseInt(keep, 10) || 1));
  return undefined;
}

if (require.main === module) {
  try { main(process.argv.slice(2)); } catch (e) { console.error(e.message); process.exit(1); }
}

module.exports = { snapshot, ensureBackup, findMatching, verify, restore, snapshots, hashTree, treeHash };
