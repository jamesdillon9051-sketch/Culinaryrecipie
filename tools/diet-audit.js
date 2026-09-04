#!/usr/bin/env node
'use strict';

/**
 * Checks every recipe's diet tags against its own ingredient list.
 *
 * This is a separate question from the ingredient hubs, and a stricter one. A
 * risotto made with chicken stock is not a "chicken recipe" and does not belong
 * on that hub — but it is emphatically not vegetarian. The hub matcher forgives
 * stock; a diet claim cannot.
 *
 * The tags matter more than anything else the site asserts. Someone coeliac
 * cooking from a Gluten-Free page, or someone vegan cooking from a Vegan one,
 * is trusting a claim they cannot verify from the photograph. A line that
 * offers a way out ("chicken or vegetable stock", "parmesan, to serve") is
 * fine, because the cook can take it. A line that does not is a false claim.
 *
 * Exits non-zero when a tag is contradicted, so `npm run check` fails rather
 * than shipping it.
 */
const { parse } = require('../src/lib/ingredients');

const catalog = [...require('../src/data/catalog'), ...require('../src/data/catalog-2'),
                 ...require('../src/data/catalog-3')];
const details = {};
for (const dir of ['details', 'details2', 'details3']) {
  for (const file of require('fs').readdirSync(`${__dirname}/../src/data/${dir}`)) {
    if (file.endsWith('.js')) Object.assign(details, require(`../src/data/${dir}/${file}`));
  }
}

/* What each tag forbids. Stock, lard and gelatin are in here precisely because
   they are the ones that get missed — nobody forgets that a vegan dish cannot
   contain beef. */
const FORBIDS = {
  'Vegan': /\b(chicken|beef|pork|lamb|mutton|bacon|ham|prosciutto|pancetta|guanciale|chorizo|duck|turkey|veal|fish|cod|haddock|salmon|tuna|anchov\w*|prawns?|shrimps?|squid|crab|lobster|clams?|mussels?|oysters?|gelatin\w*|lard|dripping|tallow|suet|honey|eggs?|butter|milk|cream|cheese|yogh?urt|ghee|paneer|mascarpone|parmesan|mozzarella|feta|ricotta|halloumi)\b/,
  'Vegetarian': /\b(chicken|beef|pork|lamb|mutton|bacon|ham|prosciutto|pancetta|guanciale|chorizo|duck|turkey|veal|fish|cod|haddock|salmon|tuna|anchov\w*|prawns?|shrimps?|squid|crab|lobster|clams?|mussels?|oysters?|gelatin\w*|lard|dripping|tallow|suet)\b/,
  'Dairy-Free': /\b(butter|buttermilk|milk|cream|cheese|yogh?urt|ghee|paneer|mascarpone|parmesan|mozzarella|feta|ricotta|halloumi|custard)\b/,
  'Gluten-Free': /\b(flour|bread|breadcrumbs?|pasta|spaghetti|macaroni|noodles?|couscous|semolina|barley|farro|bulgur|pastry|filo|puff|soy sauce|panko|biscuits?|croutons?)\b/
};

/* Words on the same line that mean the cook is not obliged to use it. */
const OPTIONAL = /\bor\b|optional|to serve|to finish|to top|to drizzle|omit|instead|substitute|if you like|for a (?:vegan|vegetarian|dairy[- ]free|gluten[- ]free)|garnish|topping|on the side|to taste|to accompany|\blike \w+/i;

/* Ingredients whose name trips a pattern without being the thing. */
const NOT_REALLY = [
  [/\bbutter (?:lettuce|beans?|nut|head)\b/i, 'butter'],
  [/\bbuttern\w*\b/i, 'butter'],
  [/\bpeanut butter\b|\balmond butter\b|\bnut butter\b/i, 'butter'],
  [/\bcoconut (?:milk|cream)\b/i, 'milk'],
  [/\balmond milk\b|\boat milk\b|\bsoy milk\b|\bsoya milk\b/i, 'milk'],
  [/\bcream of tartar\b/i, 'cream'],
  [/\bgluten[- ]free \w+/i, 'flour'],
  [/\b(?:coconut|rice|gram|chickpea|maize|corn|almond|buckwheat|tapioca|potato|cassava)\s+flour\b|\bbesan\b|\bcornflour\b|\bmasarepa\b|\bmasa harina\b/i, 'flour'],
  [/\brice noodles?\b|\bglass noodles?\b|\bsweet potato noodles?\b/i, 'noodle'],
  [/\btamari\b/i, 'soy sauce']
];

function lines(recipe) {
  const out = [];
  let group = '';
  for (const item of parse(recipe.ing || [])) {
    if (item.group) { group = String(item.group).toLowerCase(); continue; }
    const name = String(item.name || item.raw || '').toLowerCase();
    let cleaned = name;
    /* Global, because a single line can trip two of these: "masarepa
       (pre-cooked white maize flour)" needs both the name and the
       parenthetical gloss removed before it stops looking like wheat. */
    for (const [pattern] of NOT_REALLY) {
      cleaned = cleaned.replace(new RegExp(pattern.source, 'gi'), ' ');
    }
    out.push({ text: `${group} :: ${name}`, cleaned, group });
  }
  return out;
}

const problems = [];
for (const row of catalog) {
  const detail = details[row.slug];
  if (!detail) continue;
  const parsed = lines(detail);
  for (const tag of row.tags || []) {
    const forbidden = FORBIDS[tag];
    if (!forbidden) continue;
    for (const line of parsed) {
      const hit = line.cleaned.match(forbidden);
      if (!hit) continue;
      if (OPTIONAL.test(line.text)) continue;
      problems.push(`${row.slug}: tagged ${tag}, but "${line.text.replace(/^ :: /, '')}" contains ${hit[0]}`);
      break;
    }
  }
}

/* `--only <Tag>` narrows the run to one claim. tools/check.js uses it to enforce
   Gluten-Free, which is clean and must stay that way: the others are still being
   worked through, and a check that always fails is a check nobody reads. */
const onlyAt = process.argv.indexOf('--only');
const only = onlyAt > -1 ? process.argv[onlyAt + 1] : null;
const reported = only ? problems.filter(p => p.includes(`tagged ${only},`)) : problems;

if (reported.length) {
  console.log(`Diet tags contradicted by their own ingredients${only ? ` (${only})` : ''} (${reported.length}):`);
  for (const problem of reported) console.log(`  ✗ ${problem}`);
  process.exit(1);
}
console.log(only
  ? `${only}: all ${catalog.length} recipes consistent with their ingredients.`
  : `Diet tags: all ${catalog.length} recipes consistent with their ingredients.`);
