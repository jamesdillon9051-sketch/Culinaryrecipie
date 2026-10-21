'use strict';

/**
 * One inventory of the recipe pictures, read by the About page (through src/data/stats.js) and
 * by tools/image-inventory.js, so the figures the site prints and the figures the audit checks
 * are the same numbers.
 *
 * Two views, kept apart because they answer different questions:
 *
 *   recipes  every published recipe falls in exactly one of three groups, and the three add up
 *            to the catalogue: a photograph of the dish, an AI illustration only, or no usable
 *            picture (no record, or a record whose file is missing or unreadable).
 *   assets   the files: photographs and illustrations, hero and process shots, counted once
 *            each however many recipes point at them; files on disk nothing points at; files
 *            more than one recipe points at; records whose file is missing.
 *
 * A file counts as present when both the .jpg and the .webp exist and the JPEG's own header gives
 * a width and height. That the picture shows the right dish is a person's judgement and is not
 * checked here.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', '..');
const IMG_DIR = path.join(ROOT, 'assets', 'img', 'recipes');

const ILLUSTRATION = /^ai illustration$/i;
const isDrawn = shot => ILLUSTRATION.test(shot.source || '') || ILLUSTRATION.test(shot.licence || '');

/** Width and height from a JPEG's start-of-frame marker, or null. */
function jpegSize(file) {
  let buf;
  try { buf = fs.readFileSync(file); } catch { return null; }
  if (buf[0] !== 0xff || buf[1] !== 0xd8) return null;
  let i = 2;
  while (i + 9 < buf.length) {
    if (buf[i] !== 0xff) { i++; continue; }
    const marker = buf[i + 1];
    const len = buf.readUInt16BE(i + 2);
    if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
      return { h: buf.readUInt16BE(i + 5), w: buf.readUInt16BE(i + 7) };
    }
    i += 2 + len;
  }
  return null;
}

/**
 * @param {object[]} catalog   catalogue rows (slug, title)
 * @param {object} images      src/data/images.json
 * @param {{checkFiles?: boolean, imageDir?: string}} [opts]  By default checks generated files;
 *   build-time statistics use the source directory, before output assets have been copied.
 */
function inventory(catalog, images, opts = {}) {
  const checkFiles = opts.checkFiles !== false;
  const imageDir = opts.imageDir || IMG_DIR;
  const onDisk = checkFiles && fs.existsSync(imageDir) ? new Set(fs.readdirSync(imageDir)) : null;
  const fileState = new Map();
  const state = file => {
    if (fileState.has(file)) return fileState.get(file);
    let s = { ok: true };
    if (onDisk) {
      const jpg = onDisk.has(`${file}.jpg`); const webp = onDisk.has(`${file}.webp`);
      const size = jpg ? jpegSize(path.join(imageDir, `${file}.jpg`)) : null;
      s = { ok: jpg && webp && Boolean(size && size.w && size.h), jpg, webp, size };
    }
    fileState.set(file, s);
    return s;
  };

  const published = new Set(catalog.map(r => r.slug));
  const perRecipe = [];
  const groups = { photo: 0, illustration: 0, none: 0 };
  const users = new Map();          // file -> slugs that use it
  const broken = [];                // { slug, role, file, why }
  const problems = [];              // record-level problems: credit, alt, size mismatch

  for (const row of catalog) {
    const entry = images[row.slug] || {};
    let group = 'none';
    for (const role of ['hero', 'process']) {
      const shot = entry[role];
      if (!shot || !shot.file) continue;
      (users.get(shot.file) || users.set(shot.file, []).get(shot.file)).push(row.slug);
      const s = state(shot.file);
      if (!s.ok) {
        broken.push({ slug: row.slug, role, file: shot.file,
          why: !s.jpg ? 'no .jpg' : !s.webp ? 'no .webp' : 'unreadable JPEG' });
        continue;
      }
      if (s.size && (s.size.w !== shot.w || s.size.h !== shot.h)) {
        problems.push(`${row.slug}: ${role} records ${shot.w}x${shot.h} but the file is ${s.size.w}x${s.size.h}`);
      }
      if (!isDrawn(shot)) {
        if (!shot.licence) problems.push(`${row.slug}: ${role} photograph has no licence`);
        if (!shot.page) problems.push(`${row.slug}: ${role} photograph has no source page`);
        if (/^cc[-\s]?by/i.test(shot.licence || '') && !String(shot.author || '').trim()) {
          problems.push(`${row.slug}: ${role} photograph is ${shot.licence} but names no author`);
        }
      }
      if (role === 'hero') group = isDrawn(shot) ? 'illustration' : 'photo';
    }
    if (!String(row.title || '').trim()) problems.push(`${row.slug}: no title to use as alt text`);
    groups[group]++;
    perRecipe.push({ slug: row.slug, group, hero: entry.hero ? entry.hero.file : null,
      source: entry.hero && group !== 'none' ? entry.hero.source : null });
  }

  const shots = [];
  for (const row of catalog) {
    const entry = images[row.slug] || {};
    for (const role of ['hero', 'process']) if (entry[role] && entry[role].file && state(entry[role].file).ok) shots.push(entry[role]);
  }
  const uniq = list => [...new Map(list.map(s => [s.file, s])).values()];
  const photoFiles = uniq(shots.filter(s => !isDrawn(s)));
  const drawnFiles = uniq(shots.filter(isDrawn));
  const referenced = new Set(users.keys());
  const unused = onDisk
    ? [...new Set([...onDisk].map(f => f.replace(/\.(jpg|webp)$/, '')))].filter(f => !referenced.has(f)).sort()
    : [];
  const shared = [...users.entries()].filter(([, slugs]) => new Set(slugs).size > 1)
    .map(([file, slugs]) => ({ file, slugs: [...new Set(slugs)] }));
  const orphanRecords = Object.keys(images).filter(slug => !published.has(slug) && images[slug] && (images[slug].hero || images[slug].process));

  return {
    recipes: { total: catalog.length, ...groups },
    perRecipe,
    assets: {
      photoFiles: photoFiles.length,
      heroPhotoFiles: uniq(catalog.map(r => (images[r.slug] || {}).hero).filter(s => s && s.file && state(s.file).ok && !isDrawn(s))).length,
      processPhotoFiles: uniq(catalog.map(r => (images[r.slug] || {}).process).filter(s => s && s.file && state(s.file).ok && !isDrawn(s))).length,
      illustrationFiles: drawnFiles.length,
      unusedFiles: unused,
      sharedFiles: shared,
      brokenRefs: broken,
      recordsForUnpublishedRecipes: orphanRecords
    },
    photos: photoFiles,
    problems
  };
}

module.exports = { inventory, isDrawn, jpegSize };
