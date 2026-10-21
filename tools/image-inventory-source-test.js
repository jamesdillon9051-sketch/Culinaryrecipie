#!/usr/bin/env node
'use strict';
const assert = require('assert/strict');
const fs = require('fs');
const path = require('path');
const os = require('os');
const { inventory } = require('../src/lib/image-inventory');
const images = require('../src/data/images.json');
const source = path.join(__dirname, '..', 'src', 'assets', 'img', 'recipes');
const shot = Object.values(images).map(r => r && r.hero).find(r => r && r.page &&
  fs.existsSync(path.join(source, `${r.file}.jpg`)));
const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'photo-inventory-'));
const slug = '__source-photo-build-probe__';
const rows = [{ slug, title: 'Source photo build probe' }];
const manifest = { [slug]: { hero: { ...shot, file: slug }, process: null } };
try {
  for (const ext of ['jpg', 'webp']) {
    fs.copyFileSync(path.join(source, `${shot.file}.${ext}`), path.join(directory, `${slug}.${ext}`));
  }
  const beforeCopy = inventory(rows, manifest);
  assert.equal(beforeCopy.recipes.none, 1, 'output has not received the new source photo yet');
  const fromSource = inventory(rows, manifest, { imageDir: directory });
  assert.equal(fromSource.recipes.photo, 1, 'source photo counts before output is copied');
  assert.equal(fromSource.assets.brokenRefs.length, 0);
  fs.unlinkSync(path.join(directory, `${slug}.jpg`));
  assert.equal(inventory(rows, manifest, { imageDir: directory }).recipes.none, 1,
    'source records still require a real readable JPEG and WebP pair');
} finally {
  fs.rmSync(directory, { recursive: true, force: true });
}
console.log('  ✓ Photo inventory: source assets count on the first build; missing files stay missing');
