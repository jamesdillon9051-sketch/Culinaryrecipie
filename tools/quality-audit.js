#!/usr/bin/env node
'use strict';
/**
 * Content-quality sweep across every recipe, for the questions a build
 * cannot answer with a pass/fail: not "is this true" but "is this thin,
 * generic, or accidentally shared with another page".
 *
 * Word count is taken from the prose a reader actually reads — the
 * description, the why-it-works paragraph, the method, the tips, the
 * pairings and the storage note — not the ingredient list or the chrome
 * around it, because a recipe padded with navigation is not a recipe with
 * more to say.
 *
 * The generic-phrase list is built from the stock openers and closers that
 * mark templated recipe-blog copy — "elevate your", "culinary journey",
 * "you won't believe" — the kind of thing that reads as written by nobody
 * in particular. A hit here is not proof of anything on its own; it is a
 * place to go and read the sentence.
 *
 * Duplicate images are found from the source page recorded in images.json
 * rather than by re-hashing 3,400 files: two recipes citing the same
 * Commons or Wikidata page were given the same photograph, which is a
 * genuine problem — one dish is not pictured at all — and the manifest
 * already says so.
 *
 *   node tools/quality-audit.js                write quality_report.csv
 *   node tools/quality-audit.js --stdout        also print the summary
 */
const fs = require('fs');
const path = require('path');
const { loadRecipes } = require('../src/build');
const { questions } = require('../src/lib/faq');
const { parse } = require('../src/lib/ingredients');
const { substitutionsFor } = require('../src/lib/substitutions');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'quality_report.csv');
const WORD_MIN = 400;

/* Stock phrasing that marks copy nobody in particular wrote. Matched
   case-insensitively, as a substring, against the recipe's own prose only —
   never against ingredient names, which can innocently contain a word here
   ("secret ingredient" the product, say) without being the cliché. */
const GENERIC_PHRASES = [
  'elevate your', 'a burst of flavor', 'a burst of flavour',
  "let's dive in", 'in this blog post', 'you won’t believe', "you won't believe",
  'game changer', 'game-changer', 'to die for', 'melt in your mouth', 'melt-in-your-mouth',
  'look no further', 'whether you’re', "whether you're", 'perfect for any occasion',
  'the perfect combination', 'explosion of flavor', 'explosion of flavour',
  'taste buds on a journey', 'take your taste buds', 'unleash your inner',
  'tantalizing', 'tantalising', 'mouthwatering aroma', 'culinary journey',
  'culinary masterpiece', 'secret ingredient is', 'the whole family will love',
  'kids will love', 'crowd-pleaser', 'crowd pleaser', 'step-by-step guide',
  'without further ado', 'in conclusion', 'at the end of the day',
  'needless to say', 'it goes without saying', 'trust me on this',
  'is sure to impress', 'will not disappoint', 'a symphony of flavors',
  'a symphony of flavours', 'bursting with flavor', 'bursting with flavour',
  'next level', 'foodie', 'yummy', 'delish'
];

function wordsIn(text) {
  return String(text || '').trim().split(/\s+/).filter(Boolean).length;
}

/* Every reader-facing sentence on the page: the intro, the why-it-works
   paragraph, the method, the tips, the pairings, the storage note, the
   ingredient list itself, and the FAQ the page builds from the recipe's own
   figures. Left out: the ingredients panel's numbers (not prose), the
   nutrition table (numbers, not sentences) and the review form, which is
   chrome rather than content. Counting only the top few fields understated
   every recipe by the length of two real, substantial sections — the first
   version of this script called 1,324 of 1,409 recipes "thin" on that
   understatement, which was the report being wrong rather than the site. */
function bodyWordCount(r) {
  const ingredientWords = parse(r.ingredients || []).reduce(
    (n, item) => n + wordsIn(item.group || item.name), 0);
  const faqWords = questions(r).reduce((n, { q, a }) => n + wordsIn(q) + wordsIn(a), 0);
  const subWords = substitutionsFor(r).reduce((n, note) => n + wordsIn(note), 0);
  const parts = [
    r.description, r.why,
    ...(r.steps || []), ...(r.tips || []), ...(r.pairings || []), r.storage
  ];
  return parts.reduce((n, part) => n + wordsIn(part), 0) + ingredientWords + faqWords + subWords;
}

function genericHits(r) {
  const haystack = [r.description, r.meta, r.why, ...(r.tips || [])].join(' \n ').toLowerCase();
  return GENERIC_PHRASES.filter(phrase => haystack.includes(phrase));
}

/* First twelve words of `why`, folded. Four or more recipes opening on the
   exact same run of words is a template, not a coincidence — nobody writes
   the identical first sentence for unrelated dishes on purpose. */
function openingShape(why) {
  return String(why || '').toLowerCase().replace(/[^a-z0-9\s]/g, '').trim().split(/\s+/).slice(0, 12).join(' ');
}

function csvCell(v) {
  const s = String(v == null ? '' : v);
  return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
}

function main() {
  const recipes = loadRecipes();
  const images = JSON.parse(fs.readFileSync(path.join(ROOT, 'src', 'data', 'images.json'), 'utf8'));

  /* Which recipes share a photograph's source page. Illustrations are
     excluded — every one of those is drawn from the same kind of prompt
     template on purpose and sharing a generator is not sharing a photo. */
  const bySourcePage = new Map();
  for (const r of recipes) {
    const hero = (images[r.slug] || {}).hero;
    if (!hero || !hero.page || hero.licence === 'AI illustration') continue;
    if (!bySourcePage.has(hero.page)) bySourcePage.set(hero.page, []);
    bySourcePage.get(hero.page).push(r.slug);
  }
  const duplicateImageOf = new Map();
  for (const [page, slugs] of bySourcePage) {
    if (slugs.length < 2) continue;
    for (const slug of slugs) {
      duplicateImageOf.set(slug, slugs.filter(s => s !== slug).join('; '));
    }
  }

  const openings = new Map();
  for (const r of recipes) {
    const shape = openingShape(r.why);
    if (!shape) continue;
    if (!openings.has(shape)) openings.set(shape, []);
    openings.get(shape).push(r.slug);
  }
  const templatedOpeningOf = new Map();
  for (const [shape, slugs] of openings) {
    if (slugs.length < 4) continue;
    for (const slug of slugs) templatedOpeningOf.set(slug, slugs.length);
  }

  const rows = recipes.map(r => {
    const words = bodyWordCount(r);
    const generic = genericHits(r);
    const hasImage = Boolean(r.imageData);
    const isIllustration = hasImage && r.imageData.licence === 'AI illustration';
    return {
      slug: r.slug,
      title: r.title,
      word_count: words,
      under_400_words: words < WORD_MIN ? 'yes' : '',
      generic_phrases: generic.join('; '),
      generic_phrase_count: generic.length,
      templated_opening_shared_with_n: templatedOpeningOf.get(r.slug) || '',
      missing_image: hasImage ? '' : 'yes',
      is_illustration_not_photo: isIllustration ? 'yes' : '',
      duplicate_image_with: duplicateImageOf.get(r.slug) || '',
      cuisine: r.cuisine,
      category: r.category
    };
  });

  /* Thinnest first, so a human working down the list fixes the worst pages
     before the merely mediocre ones. Ties broken by generic-phrase count,
     then slug, so the file is stable across re-runs and diffs cleanly. */
  rows.sort((a, b) =>
    a.word_count - b.word_count ||
    b.generic_phrase_count - a.generic_phrase_count ||
    a.slug.localeCompare(b.slug));

  const columns = ['slug', 'title', 'word_count', 'under_400_words', 'generic_phrases',
    'generic_phrase_count', 'templated_opening_shared_with_n', 'missing_image',
    'is_illustration_not_photo', 'duplicate_image_with', 'cuisine', 'category'];
  const csv = [columns.join(',')]
    .concat(rows.map(row => columns.map(c => csvCell(row[c])).join(',')))
    .join('\n') + '\n';
  fs.writeFileSync(OUT, csv);

  const under400 = rows.filter(r => r.under_400_words).length;
  const withGeneric = rows.filter(r => r.generic_phrase_count).length;
  const withMissingImage = rows.filter(r => r.missing_image).length;
  const withDupImage = rows.filter(r => r.duplicate_image_with).length;
  const withTemplatedOpening = rows.filter(r => r.templated_opening_shared_with_n).length;
  const wordCounts = rows.map(r => r.word_count).sort((a, b) => a - b);
  const median = wordCounts[Math.floor(wordCounts.length / 2)];

  console.log(`quality_report.csv written — ${rows.length} recipes`);
  console.log(`  median body word count: ${median}`);
  console.log(`  under ${WORD_MIN} words: ${under400}`);
  console.log(`  generic/templated phrasing found: ${withGeneric}`);
  console.log(`  four or more recipes sharing an opening sentence shape: ${withTemplatedOpening}`);
  console.log(`  no photograph or illustration: ${withMissingImage}`);
  console.log(`  photograph shared with another recipe: ${withDupImage}`);

  if (process.argv.includes('--stdout')) {
    for (const r of rows.slice(0, 20)) {
      console.log(`  ${String(r.word_count).padStart(5)}w  ${r.slug}`
        + (r.generic_phrases ? `  [${r.generic_phrases}]` : ''));
    }
  }
}

main();
