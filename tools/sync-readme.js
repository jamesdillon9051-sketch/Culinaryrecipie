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
/* stats.js reads only the catalogues, because the site imports it on every
   page. The counts below need the merged detail records, which is affordable
   here: this runs after a build, not during one. */
const { loadRecipes } = require('../src/build');
const { questions } = require('../src/lib/faq');

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
  const recipes = loadRecipes();
  const faqCount = recipes.reduce((n, r) => n + questions(r).length, 0);
  const perRecipe = (faqCount / recipes.length).toFixed(1);
  const withRest = recipes.filter(r => r.restTime).length;
  const rated = recipes.filter(r => r.rating).length;
  const { catalogFiles, detailDirs } = require('../src/data/volumes');
  const catalogs = catalogFiles();
  const dirs = detailDirs();
  const imageFiles = fs.readdirSync(path.join(root, 'src', 'assets', 'img', 'recipes')).length;
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

    /* Every other place the recipe count is spelled out in prose. Each one had
       gone stale at 600 by the time the site held 658. */
    [/#\s+\d[\d,]* recipe pages/,
     `#    ${s.recipeCount} recipe pages`],

    [/\*\*Recipe\*\* on all \d[\d,]* recipe pages/,
     `**Recipe** on all ${s.recipeCount} recipe pages`],

    [/\*\*FAQPage\*\* on all \d[\d,]* recipe pages and the about page — [\d,]+ questions,\n\s*about [\d.]+ a recipe/,
     `**FAQPage** on all ${s.recipeCount} recipe pages and the about page — `
       + `${faqCount.toLocaleString('en-GB')} questions,\n      about ${perRecipe} a recipe`],

    [/script checks all \d[\d,]* recipes against those conditions/,
     `script checks all ${s.recipeCount} recipes against those conditions`],

    [/the other \d[\d,]* carry seeded/,
     `the other ${rated} carry seeded`],

    [/Every one of the site's \d[\d,]* recipes now passes/,
     `Every one of the site's ${s.recipeCount} recipes now passes`],

    [/\*\*[\d,]+ of the [\d,]+ recipes\*\* declare unattended/,
     `**${withRest} of the ${s.recipeCount} recipes** declare unattended`],

    /* The volume list in the file tree. It read "-8.js" while the data held
       eleven volumes, which is the same drift as a stale recipe count. */
    [/catalog-2\.js …-\d+\.js( +)# further volumes/,
     (_, pad) => `catalog-2.js …-${catalogs.length}.js${pad}# further volumes`],

    [/details2\/ …details\d+\/( +)# long-form content/,
     (_, pad) => `details2/ …details${dirs.length}/${pad}# long-form content`],

    /* Both places the image-file count is spelled out. */
    [/# \d[\d,]* image files \(WebP \+ JPEG\)/,
     `# ${imageFiles} image files (WebP + JPEG)`],

    [/css, js and \d[\d,]* image files/,
     `css, js and ${imageFiles} image files`],

    /* The licence footer claimed CC0 or public domain for everything while a
       third of the photographs are CC BY or CC BY-SA. */
    [/Photography is [^.]*\. See `images-attribution\.md`\.|Photography is [^.]*— see `images-attribution\.md`\./,
     `Photography is CC0, public domain, CC BY or CC BY-SA — see `
       + '`images-attribution.md`.'],
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
