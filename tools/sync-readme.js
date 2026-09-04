#!/usr/bin/env node
'use strict';

/**
 * Rewrites the counted claims in README.md from the same derived stats the site
 * itself renders.
 *
 * The README repeats numbers that live in the data — recipe and cuisine counts,
 * how many dishes have a photograph, how the licences split. Every one of them
 * has been wrong at some point between a fetch run and the commit that followed
 * it, because updating prose by hand is the step that gets skipped. This does
 * what src/data/stats.js does for the site: derives the numbers, so the only way
 * to change them is to change the data.
 *
 * Run it after a build. `--check` exits non-zero instead of writing, which is
 * what tools/check.js calls so a stale README fails the check rather than
 * shipping.
 */
const fs = require('fs');
const path = require('path');
const stats = require('../src/data/stats');

const README = path.join(__dirname, '..', 'README.md');

/**
 * Count the HTML the build emits.
 *
 * `travel-destinations/` is a separate site that happens to share this
 * repository — it is not built from src/ and carries none of Weekly Delight's
 * layout, so counting its pages here would inflate the site's own figure by a
 * third. The single page under assets/ is the native-banner frame, which is
 * emitted by the build and is counted.
 */
function pageCount(root) {
  let n = 0;
  const skip = new Set(['node_modules', '.git', 'src', 'tools', 'travel-destinations']);
  (function walk(dir) {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      if (e.isDirectory()) {
        if (!skip.has(e.name)) walk(path.join(dir, e.name));
      } else if (e.name.endsWith('.html')) {
        n++;
      }
    }
  })(root);
  return n;
}

/** Re-wrap to the width the rest of the file is written at. */
function wrap(text, width = 79) {
  const out = [];
  let line = '';
  for (const word of text.split(/\s+/)) {
    if (line && (line + ' ' + word).length > width) { out.push(line); line = word; }
    else line = line ? line + ' ' + word : word;
  }
  if (line) out.push(line);
  return out.join('\n');
}

/* One entry per claim: a pattern that matches the sentence as it stands and the
   text it should read now. Anchored on the surrounding words rather than on the
   old digits, so it keeps working after the first rewrite. */
function replacements(root) {
  const s = stats;
  const pages = pageCount(root);
  const pd = s.publicDomainImageCount;
  const by = s.attributionOnlyImageCount;
  const sa = s.shareAlikeImageCount;
  return [
    [/^\d[\d,]* recipes · \d+ cuisines · \d+ categories · [\d,]+ static pages/m,
     `${s.recipeCount} recipes · ${s.cuisineCount} cuisines · ${s.categoryCount} categories · ${pages} static pages`],

    /* The whole paragraph, so the prose after the figures re-wraps with them
       instead of keeping the line breaks the old numbers happened to fall on. */
    [/\d+ of the \d+ recipes have a photograph\.[\s\S]*?fails to load at runtime\./,
     wrap(`${s.photoCount} of the ${s.recipeCount} recipes have a photograph. `
       + `Of the ${s.imageCount} images on the site, ${pd} are CC0 or public domain, `
       + `${by} ${by === 1 ? 'is' : 'are'} CC BY and ${sa} ${sa === 1 ? 'is' : 'are'} CC BY-SA. `
       + `Anything still without one falls back to a CSS gradient carrying the `
       + `recipe name, the same fallback that catches any image that fails to `
       + `load at runtime.`)],

    [/all \d+ recipes, navigation and taxonomy pages render fully/,
     `all ${s.recipeCount} recipes, navigation and taxonomy pages render fully`],

    /* The opening line. It said 600 while the site held 658, which is the kind
       of drift this file exists to stop. */
    [/world's \*\*[\d,]+ most famous recipes\*\*/,
     `world's **${s.recipeCount} most famous recipes**`],
  ];
}

const root = path.join(__dirname, '..');
const before = fs.readFileSync(README, 'utf8');
let after = before;
const missed = [];
for (const [pattern, text] of replacements(root)) {
  if (!pattern.test(after)) { missed.push(String(pattern).slice(0, 60)); continue; }
  after = after.replace(pattern, text);
}

if (missed.length) {
  console.error('sync-readme: no match for —\n  ' + missed.join('\n  '));
  console.error('The sentence was reworded; update the pattern in tools/sync-readme.js.');
  process.exit(2);
}

if (process.argv.includes('--check')) {
  if (after !== before) {
    console.error('README.md counts are stale. Run: node tools/sync-readme.js');
    process.exit(1);
  }
  console.log('README counts match the data.');
} else if (after !== before) {
  fs.writeFileSync(README, after);
  console.log('README.md updated.');
} else {
  console.log('README.md already current.');
}
