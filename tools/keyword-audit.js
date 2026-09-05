#!/usr/bin/env node
'use strict';
/**
 * Audits every keyword on every recipe against the record it was derived from.
 *
 * The README has claimed for several volumes that "a script checks all N
 * recipes against those conditions and currently reports no unsupported
 * claim". There was no such script. This is it.
 *
 * A keyword is a promise made to somebody typing into a search box. "gluten
 * free lasagne" says the dish has no gluten in it, "30 minute pad thai" says
 * it can be on the table in half an hour, "can you freeze this" says the page
 * answers that question. Nobody reads a keyword list before publishing, so a
 * phrase that stopped being true when the recipe changed ships silently and
 * misleads every reader who follows it.
 *
 * Each rule below names a claim a phrase can make and the field that has to
 * back it. A keyword making a claim its recipe cannot support fails the build.
 * A keyword making no claim at all — the dish name, "how to make X" — needs no
 * evidence and passes.
 *
 *   node tools/keyword-audit.js          list the failures
 *   node tools/keyword-audit.js --stats  also print coverage figures
 */
const { loadRecipes } = require('../src/build');
const { fold, DIET_WORD, SLOW_COOK_MINUTES } = require('../src/lib/keywords');

const lower = s => String(s || '').toLowerCase();

/**
 * The claims a keyword can make, and what has to be true for each.
 *
 * `when` matches the phrase; `ok` decides whether this recipe may make it.
 * Order does not matter — every rule that matches is checked.
 */
const CLAIMS = [
  { claim: 'gluten free', when: /\bgluten free\b/, ok: r => r.tags.includes('Gluten-Free') },
  { claim: 'vegan', when: /\bvegan\b/, ok: r => r.tags.includes('Vegan') },
  /* Vegan satisfies vegetarian by definition; the build derives the second
     tag from the first, so this only ever sees both or neither. */
  { claim: 'vegetarian', when: /\bvegetarian\b/,
    ok: r => r.tags.includes('Vegetarian') || r.tags.includes('Vegan') },
  { claim: 'dairy free', when: /\bdairy free\b/, ok: r => r.tags.includes('Dairy-Free') },
  { claim: 'low carb', when: /\blow carb\b/, ok: r => r.tags.includes('Low-Carb') },
  { claim: 'keto', when: /\bketo\b/, ok: r => r.tags.includes('Keto') },
  { claim: 'no added sugar', when: /\bno added sugar\b/, ok: r => r.tags.includes('No Added Sugar') },

  /* Time. The site separates hands-on time from waiting, and every one of
     these phrases is about how long the cook is busy, so they read prep+cook
     rather than the elapsed figure. */
  { claim: 'quick', when: /\bquick\b/, ok: r => r.prep + r.cook <= 30 },
  { claim: 'under 30 minutes', when: /\bunder 30 minutes\b/, ok: r => r.prep + r.cook <= 30 },
  { claim: 'in an hour', when: /\bin an hour\b/, ok: r => r.prep + r.cook <= 60 },
  /* "in under 30 minutes" is the rule above, not a claim that the dish takes
     exactly thirty; only a bare number is read as the time itself. */
  { claim: 'n minutes', when: /(?<!under )\b(\d+) minutes?\b/,
    ok: (r, m) => Number(m[1]) === r.prep + r.cook },
  { claim: 'slow cooked', when: /\bslow cooked\b|\bslow (?!cooker)/, ok: r => r.cook >= SLOW_COOK_MINUTES },
  { claim: 'overnight', when: /\bovernight\b|\bthe day before\b/, ok: r => r.restTime >= 480 },

  /* Difficulty is a column in the catalogue, so "easy" has an owner. */
  { claim: 'easy', when: /\beasy\b|\bsimple\b|\bfor beginners\b|\bbeginner\b/,
    ok: r => r.difficulty === 'Easy' },

  /* Method, read from the steps. A phrase calling a dish baked or fried has to
     match what the method actually tells the cook to do. */
  { claim: 'baked', when: /\bbaked\b|\bin the oven\b/, ok: r => steps(r).oven },
  /* No-bake means nothing goes in an oven, which is not the same as no
     cooking at all: tiramisu warms its zabaglione over a pan of water. */
  { claim: 'no bake', when: /\bno bake\b/, ok: r => !steps(r).oven },
  { claim: 'no cook', when: /\bno cook\b|\bwithout cooking\b/, ok: r => r.cook === 0 },
  { claim: 'grilled', when: /\bgrilled\b/, ok: r => steps(r).grill },
  { claim: 'fried', when: /(?<!deep |stir )\bfried\b/, ok: r => steps(r).fry },
  { claim: 'deep fried', when: /\bdeep fried\b/, ok: r => steps(r).deepFry },
  { claim: 'stir fry', when: /\bstir fry\b/, ok: r => steps(r).stirFry },
  { claim: 'wok', when: /\bin a wok\b/, ok: r => steps(r).wok },
  { claim: 'slow cooker', when: /\bslow cooker\b/, ok: r => steps(r).slowCooker },
  { claim: 'pressure cooker', when: /\bpressure cooker\b/, ok: r => steps(r).pressure },
  { claim: 'steamed', when: /\bsteamed\b/, ok: r => steps(r).steam },
  { claim: 'blended', when: /\bblended\b/, ok: r => steps(r).blend },
  { claim: 'one pan', when: /\bone pan\b|\bone pot\b/, ok: r => steps(r).onePan },
  { claim: 'boiled', when: /\bboiled\b/, ok: r => steps(r).boil },

  /* Nutrition, off the per-serving figures the page prints. */
  { claim: 'low calorie', when: /\blow calorie\b/, ok: r => r.nutrition[0] < 400 },
  /* "light" is only a calorie claim when it stands alone after the dish name
     is taken out. "light soy sauce" and "light brown sugar" are ingredients. */
  { claim: 'light', when: /^\s*light\s*$/, ok: r => r.nutrition[0] < 400 },
  { claim: 'under 300 calories', when: /\bunder 300 calories\b/, ok: r => r.nutrition[0] < 300 },
  { claim: 'high protein', when: /\bhigh protein\b/,
    ok: r => r.nutrition[1] >= 30 || r.tags.includes('High-Protein') },
  { claim: 'high fibre', when: /\bhigh fibre\b/, ok: r => r.nutrition[4] >= 8 },
  { claim: 'low fat', when: /\blow fat\b/, ok: r => r.nutrition[3] <= 10 },
  { claim: 'low sugar', when: /\blow sugar\b/, ok: r => r.nutrition[5] <= 5 },
  { claim: 'low sodium', when: /\blow sodium\b/, ok: r => r.nutrition[6] <= 400 },

  /* Questions the page has to be able to answer. */
  { claim: 'freezing', when: /\bfreeze\b|\bfreezing\b/, ok: r => /freez/i.test(r.storage) },
  { claim: 'reheating', when: /\breheat\b/, ok: r => /reheat/i.test(r.storage) },
  { claim: 'make ahead', when: /\bmake ahead\b|\bleftover\b|\bmeal prep\b/,
    ok: r => /refrigerat|keeps|chill/i.test(r.storage) },
  { claim: 'how long it lasts', when: /\bhow long does .* last\b/, ok: r => Boolean(r.storage) },
  { claim: 'side dishes', when: /\bside dishes\b|\bwhat goes with\b/,
    ok: r => r.pairings && r.pairings.length > 0 },
  { claim: 'tips', when: /\btips\b|\bperfect\b/, ok: r => r.tips && r.tips.length > 0 },
  { claim: 'photos', when: /\bwith photos\b/, ok: r => Boolean(r.imageData) },
  { claim: 'tried and tested', when: /\btried and tested\b/, ok: r => r.badges.includes('editors') },

  /* Servings is a column, so a phrase naming a number has to match it. */
  { claim: 'for two', when: /\bfor two\b/, ok: r => r.servings <= 2 },
  { claim: 'for a crowd', when: /\bfor a crowd\b|\bfor a party\b|\bbig batch\b/,
    ok: r => r.servings >= 6 },
  { claim: 'for n', when: /\bfor (\d+)\b/, ok: (r, m) => Number(m[1]) === r.servings }
];

/**
 * Claims that are true but that the steps do not say in so many words.
 *
 * The same escape hatch tools/timing-audit.js keeps, and used the same way: one
 * line per recipe, naming the claim and why reading the method cannot settle it.
 * Everything not listed here has to be provable from the record.
 */
const ALLOW = {
  /* Cooked start to finish in a single frying pan; no step introduces a
     second one, but no step says "one pan" either. */
  shakshuka: ['one pan'],
  'breakfast-hash': ['one pan'],
  /* Browned and braised in the same pot. */
  'irish-stew': ['one pan'],
  /* Provoleta is grilled cheese — over coals traditionally, in a cast-iron
     pan here, which the method describes as searing. */
  provoleta: ['grilled'],
  /* An uitsmijter is fried eggs on bread. The method says to cook them in
     butter in a pan, which is frying, without using the word. */
  uitsmijter: ['fried']
};

/* Cached per recipe: the claim rules ask the same question many times. */
const STEP_CACHE = new Map();
function steps(recipe) {
  if (!STEP_CACHE.has(recipe.slug)) {
    const text = lower(recipe.steps.join(' '));
    const has = re => re.test(text);
    STEP_CACHE.set(recipe.slug, {
      oven: has(/\b(?:bake|bakes|baked|baking|roast|roasts|roasted|roasting)\b|\boven\b/),
      grill: has(/\b(?:grill|grills|grilled|grilling|griddle|griddled|barbecue|barbecued)\b/),
      fry: has(/\b(?:fry|fries|fried|frying|saut[eé]|saut[eé]s|saut[eé]ed)\b/),
      deepFry: has(/\bdeep[- ]fr(?:y|ies|ied|ying)\b|\bdeep fat\b|\boil to 1[7-9]\d\s*°?c\b|\bdeep(?: heavy)? (?:pan|pot|saucepan|fryer)\b/),
      wok: has(/\bwok\b/),
      stirFry: has(/\bstir[- ]fr(?:y|ies|ied|ying)\b|\bwok\b/),
      slowCooker: has(/\bslow cooker\b|\bcrock ?pot\b/),
      pressure: has(/\bpressure cooker\b|\binstant pot\b/),
      steam: has(/\bsteam(?:s|ed|ing|er)?\b/),
      blend: has(/\b(?:blend|blends|blended|blender|food processor|liquidise|liquidiser)\b/),
      onePan: has(/\bone[- ](?:pan|pot|tray)\b|\btraybake\b/),
      boil: has(/\b(?:boil|boils|boiled|boiling|simmer|simmers|simmered|simmering|poach|poaches|poached)\b/)
    });
  }
  return STEP_CACHE.get(recipe.slug);
}

/**
 * The part of a keyword that is not the dish's own name.
 *
 * A claim word inside the title is the dish, not an assertion: "Vegan Mac and
 * Cheese" is called that, and "Egg Fried Rice" contains "fried" whatever the
 * method does. Taking the title out first means a rule only ever fires on a
 * word the generator added.
 */
const TITLE_WORDS = new Map();
function claimText(keyword, recipe) {
  if (!TITLE_WORDS.has(recipe.slug)) {
    const name = lower(recipe.title);
    TITLE_WORDS.set(recipe.slug, new Set(
      (name + ' ' + fold(name)).split(/[^a-z0-9]+/).filter(w => w.length > 2)));
  }
  const words = TITLE_WORDS.get(recipe.slug);
  /* Word by word rather than as one string: "Skillet Grilled Cheese" is the
     dish's name, so "grilled cheese recipe" adds no claim to it, even though
     the phrase does not contain the title whole. */
  return lower(keyword).split(' ').filter(w => !words.has(w)).join(' ');
}

const MAX_WORDS = 9;
const IDIOM = /\bstep by step\b|\bside by side\b|\bday by day\b/;

/* Phrases where a claim word is part of a term of art rather than an
   assertion. A quick bread is leavened chemically instead of with yeast;
   the name says nothing about how long it takes. */
const TERM_OF_ART = /\bquick bread\b/;

const recipes = loadRecipes();
const failures = [];
const byClaim = new Map();
let checked = 0;

for (const recipe of recipes) {
  const seen = new Set();
  for (const keyword of recipe.keywords) {
    checked++;
    if (seen.has(keyword)) failures.push(`${recipe.slug} — repeats the keyword "${keyword}"`);
    seen.add(keyword);

    if (keyword.split(' ').length > MAX_WORDS) {
      failures.push(`${recipe.slug} — keyword longer than ${MAX_WORDS} words, starting with "${keyword.slice(0, 40)}"`);
    }
    /* A word the dish's own name says twice is not the generator stuttering. */
    const own = new Map();
    for (const w of lower(recipe.title).split(/[^a-z0-9]+/)) own.set(w, (own.get(w) || 0) + 1);
    const words = keyword.split(' ').filter(w => w.length > 2 && (own.get(w) || 0) < 2);
    if (!IDIOM.test(keyword) && new Set(words).size !== words.length) {
      failures.push(`${recipe.slug} — keyword says the same word twice — "${keyword}"`);
    }

    const text = TERM_OF_ART.test(keyword) ? '' : claimText(keyword, recipe);
    for (const rule of CLAIMS) {
      const match = rule.when.exec(text);
      if (!match) continue;
      byClaim.set(rule.claim, (byClaim.get(rule.claim) || 0) + 1);
      if ((ALLOW[recipe.slug] || []).includes(rule.claim)) continue;
      if (!rule.ok(recipe, match)) {
        failures.push(`${recipe.slug} — claims "${rule.claim}" in "${keyword}" but the record does not support it`);
      }
    }
  }
}

/* Every diet tag the site knows how to phrase should be reachable, or the
   generator has a gap the failures above cannot show. */
const phrased = new Set();
for (const recipe of recipes) {
  for (const keyword of recipe.keywords) {
    for (const word of Object.values(DIET_WORD)) if (keyword.includes(word)) phrased.add(word);
  }
}
for (const word of Object.values(DIET_WORD)) {
  const anyRecipe = recipes.some(r => r.tags.some(t => DIET_WORD[t] === word));
  if (anyRecipe && !phrased.has(word)) {
    failures.push(`no recipe carries a "${word}" keyword although recipes carry the tag`);
  }
}

const show = process.argv.includes('--all') ? failures.length : 40;
for (const line of failures.slice(0, show)) console.log(`  ✗ ${line}`);
if (failures.length > show) console.log(`  … and ${failures.length - show} more`);

/* Which claim is failing matters more than which recipe: one wrong gate in the
   generator shows up as hundreds of lines that are all the same mistake. */
if (failures.length) {
  const tally = new Map();
  for (const line of failures) {
    const m = /claims "([^"]+)"/.exec(line);
    const key = m ? m[1] : line.replace(/^\S+ — /, '').replace(/ —.*/, '').slice(0, 40);
    tally.set(key, (tally.get(key) || 0) + 1);
  }
  console.log('\nby claim: ' + [...tally].sort((a, b) => b[1] - a[1])
    .map(([k, v]) => `${k} ${v}`).join(', '));
}

if (process.argv.includes('--stats')) {
  const counts = recipes.map(r => r.keywords.length).sort((a, b) => a - b);
  console.log(`\n${checked.toLocaleString('en-GB')} keywords across ${recipes.length} recipes`);
  console.log(`  per recipe   min ${counts[0]}, median ${counts[counts.length >> 1]}, max ${counts[counts.length - 1]}`);
  console.log('  claims made  ' + [...byClaim].sort((a, b) => b[1] - a[1])
    .map(([k, v]) => `${k} ${v}`).join(', '));
}

console.log(failures.length
  ? `\n${failures.length} unsupported keyword${failures.length === 1 ? '' : 's'} in ${recipes.length} recipes.`
  : `All ${checked.toLocaleString('en-GB')} keywords on ${recipes.length} recipes are supported by their own records.`);
process.exit(failures.length ? 1 : 0);
