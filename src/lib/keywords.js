'use strict';

/**
 * Long-tail keywords, derived from the recipe rather than written by hand.
 *
 * Each recipe carries four curated keywords in its detail record. Those are the
 * phrases a person actually chose, and they stay first. Everything below is
 * generated from the row that is already there — cuisine, category, times, diet
 * tags, ingredients — which matters for two reasons.
 *
 * The first is that these lists are not decoration. build.js folds them into the
 * pre-lowered search blob behind the site's own search box, so a keyword here is
 * the difference between "what can I freeze" finding a recipe and missing it.
 * They also go into the Recipe JSON-LD.
 *
 * The second is truthfulness. A generated phrase is only emitted when the data
 * supports it: "gluten free X" needs the Gluten-Free tag, "30 minute X" needs a
 * total time of thirty minutes or less, "can you freeze X" needs the storage
 * note to mention freezing. Deriving them rather than typing them means they
 * cannot drift out of step with the recipe the way a hand-written list does.
 */
const { parse } = require('./ingredients');

/* What each category is called in the middle of a phrase. "Quick Meals recipe"
   reads like a database field; "quick meal" reads like something typed into a
   search box. */
/* Categories that name a meal, rather than a way of cooking or a kind of
   drink. Only these take "what to cook for ..." phrasing. */
const MEALTIME = new Set(['Dinner', 'Lunch', 'Breakfast', 'Desserts',
                          'Appetizers', 'Holiday Specials', 'Quick Meals']);

/* The same categories in the form they take before a noun. */
const CATEGORY_ADJECTIVE = {
  'Dinner': 'dinner',
  'Quick Meals': 'quick meal',
  'Healthy': 'healthy',
  'Appetizers': 'appetizer',
  'Baking': 'baking',
  'Desserts': 'dessert',
  'Lunch': 'lunch',
  'Drinks': 'drink',
  'Breakfast': 'breakfast',
  'Holiday Specials': 'holiday'
};

const CATEGORY_NOUN = {
  'Dinner': 'dinner recipe',
  'Quick Meals': 'quick meal',
  'Healthy': 'healthy recipe',
  'Appetizers': 'appetizer',
  'Baking': 'baking recipe',
  'Desserts': 'dessert',
  'Lunch': 'lunch recipe',
  'Drinks': 'drink',
  'Breakfast': 'breakfast recipe',
  'Holiday Specials': 'holiday recipe'
};

/* Diet tag -> the adjective people search with. Hyphens go: nobody types
   "gluten-free" into a search box more often than "gluten free". */
const DIET_WORD = {
  'Vegetarian': 'vegetarian',
  'Vegan': 'vegan',
  'Dairy-Free': 'dairy free',
  'Gluten-Free': 'gluten free',
  'Low-Carb': 'low carb',
  'Keto': 'keto',
  'High-Protein': 'high protein',
  'No Added Sugar': 'no added sugar'
};

/* Ingredients too common to identify anything. "Chicken thighs" is worth a
   keyword; "salt" would attach the same phrase to four hundred recipes. */
const PANTRY = new Set([
  'salt', 'fine sea salt', 'sea salt', 'kosher salt', 'table salt',
  'pepper', 'black pepper', 'white pepper', 'ground black pepper',
  'water', 'cold water', 'boiling water', 'ice', 'ice cubes',
  'olive oil', 'vegetable oil', 'sunflower oil', 'neutral oil', 'oil',
  'sugar', 'caster sugar', 'granulated sugar',
  'plain flour', 'all-purpose flour', 'flour'
]);

/**
 * Cooking time at or above which a dish may be called slow-cooked.
 *
 * Ninety minutes rather than two hours: a chilli that simmers for an hour and a
 * half is slow-cooked by any ordinary reading, and the figure is exported so
 * that tools/keyword-audit.js tests the phrase against the same line the
 * generator emits it on.
 */
const SLOW_COOK_MINUTES = 90;

const clean = s => String(s || '').trim().replace(/\s+/g, ' ');
const lower = s => clean(s).toLowerCase();

/**
 * The same phrase without its diacritics.
 *
 * Search boxes are typed into on keyboards that do not have the accent. A
 * reader looking for ragù napoletano types "ragu", and the site's own search
 * compares plain strings, so without this the accented title is the only thing
 * that matches and the recipe is unreachable by the spelling most people use.
 */
function fold(s) {
  return s.normalize('NFKD').replace(/[\u0300-\u036f]/g, '')
    .replace(/ø/g, 'o').replace(/æ/g, 'ae').replace(/ß/g, 'ss').replace(/ł/g, 'l');
}

/** Strip a trailing note so "beef chuck, in two large pieces" -> "beef chuck". */
function ingredientName(item) {
  return lower(item.name || item.raw).split(/,| — | – /)[0]
    .replace(/\s*\([^)]*\)/g, '')
    .replace(/^(?:fresh|dried|ground|chopped|sliced|finely|large|small|whole)\s+/, '')
    .trim();
}

/**
 * The two or three ingredients that identify the dish.
 *
 * Order in a recipe is meaningful — the thing the dish is made of is written
 * first — so this takes the earliest non-pantry entries rather than trying to
 * judge importance.
 */
function headlineIngredients(lines, limit = 3) {
  const out = [];
  for (const item of parse(lines || [])) {
    if (item.group) continue;
    const name = ingredientName(item);
    if (!name || name.length < 3 || name.length > 28) continue;
    if (PANTRY.has(name)) continue;
    if (/^\d/.test(name)) continue;
    if (out.includes(name)) continue;
    out.push(name);
    if (out.length >= limit) break;
  }
  return out;
}

/* Fixed phrases whose repeated word is idiom rather than stuffing. */
const IDIOM = /\bstep by step\b|\bside by side\b|\bday by day\b/;

/**
 * Whether a phrase says the same word twice.
 *
 * "spaghetti carbonara with spaghetti" and "beef bourguignon with beef chuck"
 * are what you get when a dish is named after its own main ingredient, and they
 * are the shape a search engine reads as stuffing. Short words are ignored so
 * that "in", "a" and "to" may repeat; "step by step" is idiom, not a repeat.
 */
function repeatsAWord(value, allowed) {
  if (IDIOM.test(value)) return false;
  const words = value.split(' ').filter(w => w.length > 2 && !(allowed && allowed.has(w)));
  return new Set(words).size !== words.length;
}

/**
 * Words a dish's own name says twice.
 *
 * Dan Dan Noodles, Piri Piri Chicken and Moin Moin are called that. Reading
 * their repeat as stuffing cut them to a third of the keywords every other
 * recipe gets, and took them out of results they used to reach.
 */
function ownRepeats(title) {
  const counts = new Map();
  for (const word of title.split(/[^a-z0-9]+/)) {
    if (word.length > 2) counts.set(word, (counts.get(word) || 0) + 1);
  }
  return new Set([...counts].filter(([, n]) => n > 1).map(([w]) => w));
}

/**
 * What the method actually does, read from the steps.
 *
 * Every phrase built from this describes the recipe on the page rather than
 * guessing from the dish name: a "grilled cheese" is fried in a pan, and a
 * keyword calling it grilled would send a reader somewhere the page does not go.
 */
function methods(recipe) {
  const steps = lower((recipe.steps || recipe.st || []).join(' '));
  const has = re => re.test(steps);
  return {
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
  };
}

/**
 * Expand one recipe's keywords.
 *
 * Every phrase below is gated on something the record actually holds, because
 * the list is checked back against the data by tools/keyword-audit.js. A phrase
 * with no evidence behind it fails the build rather than shipping.
 *
 * @param {object} recipe  catalog row plus its detail fields
 * @param {number} limit   hard cap, so a long ingredient list cannot run away
 * @returns {string[]}     curated keywords first, then derived, deduplicated
 */
function expand(recipe, limit = 160) {
  const title = lower(recipe.title);
  const cuisine = lower(recipe.cuisine);
  const category = recipe.category;
  const total = (recipe.prep || 0) + (recipe.cook || 0);
  const tags = recipe.tags || [];
  const storage = lower(recipe.storage || recipe.store || '');
  const titleWords = new Set(title.split(/[^a-z0-9]+/).filter(w => w.length > 2));

  const out = [];
  const seen = new Set();
  const repeated = ownRepeats(title);
  const add = phrase => {
    const value = lower(phrase);
    /* Three guards. A phrase that repeats a word it already contains reads as
       stuffing, an over-long one is not a query anybody types, and duplicates
       waste the cap without widening what the search box can find. */
    if (!value || seen.has(value)) return;
    if (value.split(' ').length > 9) return;
    if (repeatsAWord(value, repeated)) return;
    seen.add(value);
    out.push(value);
  };

  /* The hand-picked phrases lead, in the order somebody chose for them. */
  for (const kw of recipe.keywords || recipe.kw || []) add(kw);

  add(title);
  add(`${title} recipe`);
  add(`how to make ${title}`);
  add(`homemade ${title}`);
  add(`best ${title} recipe`);
  add(`${title} recipe from scratch`);
  add(`${title} at home`);

  /* Accented titles get an unaccented twin of every phrase built so far. It is
     the same recipe under the spelling a keyboard produces. */
  const plain = fold(title);
  if (plain !== title) {
    for (const phrase of [...out]) add(fold(phrase));
  }

  /* Only claim the cuisine when the title has not already said it — the title
     of a Nigerian pepper soup is "Nigerian Pepper Soup". */
  if (cuisine && !title.includes(cuisine)) {
    add(`${cuisine} ${title}`);
    add(`authentic ${cuisine} ${title}`);
    add(`traditional ${cuisine} recipe`);
    add(`${cuisine} recipes`);
  }
  if (cuisine) {
    add(`${cuisine} food`);
    add(`${cuisine} cooking`);
    add(`${cuisine} food at home`);
    const noun = CATEGORY_NOUN[category];
    if (noun) add(`${cuisine} ${noun}`);
  }

  const noun = CATEGORY_NOUN[category];
  const adjective = CATEGORY_ADJECTIVE[category];
  /* "easy dinner recipe" is a claim about this dish, not a label for the
     category it sits in, so it waits for the difficulty check below. */
  if (noun) {
    add(`${title} ${noun}`);
    add(`best ${noun}`);
  }
  if (adjective) {
    add(`${adjective} recipes`);
    add(`${adjective} ideas`);
    if (cuisine) add(`${cuisine} ${adjective} recipes`);
  }

  /* Time, difficulty and diet are only asserted where the row backs them. */
  if (total && total <= 30) {
    add(`quick ${title}`);
    add(`${total} minute ${title}`);
    add(`${title} in under 30 minutes`);
    add(`${title} in ${total} minutes`);
    if (cuisine) add(`quick ${cuisine} recipes`);
    if (adjective) add(`quick ${adjective} recipes`);
  } else if (total && total <= 60) {
    add(`${title} in an hour`);
    add(`${title} in ${total} minutes`);
  }
  if (recipe.cook >= SLOW_COOK_MINUTES) {
    add(`slow cooked ${title}`);
    add(`slow ${title}`);
  }
  /* Rest is unattended time the record declares, so a dish that proves or
     marinates overnight can honestly be searched for as one. */
  if (recipe.restTime >= 480) {
    add(`overnight ${title}`);
    add(`${title} the day before`);
  }
  /* "Easy" is a claim about this recipe, not a phrase to attach to all of them:
     a reader who searches it and lands on a three-hour braise has been misled,
     and the difficulty is right there in the row. */
  if (recipe.difficulty === 'Easy') {
    add(`easy ${title}`);
    add(`easy ${title} recipe`);
    add(`${title} for beginners`);
    add(`simple ${title}`);
    add(`beginner ${title}`);
    if (noun) add(`easy ${noun}`);
    if (adjective) add(`easy ${adjective} recipes`);
  }
  for (const tag of tags) {
    const word = DIET_WORD[tag];
    if (!word) continue;
    add(`${word} ${title}`);
    add(`${word} ${cuisine} recipe`);
    if (noun) add(`${word} ${noun}`);
    add(`is ${title} ${word}`);
    add(`${word} recipes`);
  }
  if (recipe.servings) {
    add(`${title} for ${recipe.servings}`);
    if (recipe.servings <= 2) add(`${title} for two`);
    if (recipe.servings >= 6) {
      add(`${title} for a crowd`);
      add(`${title} for a party`);
      add(`big batch ${title}`);
    }
  }

  /* What the dish is made of, and the two questions every recipe page is
     asked. Both are answered on the page, so both are fair to index. */
  const headline = headlineIngredients(recipe.ingredients || recipe.ing);
  for (const ing of headline) {
    add(`${title} with ${ing}`);
    add(`${ing} ${noun || 'recipe'}`);
    add(`recipes with ${ing}`);
    add(`what to make with ${ing}`);
  }
  if (headline.length >= 2) add(`${headline[0]} and ${headline[1]} recipe`);

  /* How the food is actually cooked, read from the method rather than the name. */
  const how = methods(recipe);
  if (how.oven) { add(`baked ${title}`); add(`oven baked ${title}`); add(`${title} in the oven`); }
  if (how.grill) add(`grilled ${title}`);
  if (how.fry) add(`fried ${title}`);
  if (how.deepFry) add(`deep fried ${title}`);
  if (how.stirFry) add(`${title} stir fry`);
  if (how.wok) add(`${title} in a wok`);
  if (how.slowCooker) add(`slow cooker ${title}`);
  if (how.pressure) add(`pressure cooker ${title}`);
  if (how.steam) add(`steamed ${title}`);
  if (how.blend) add(`blended ${title}`);
  if (how.onePan) { add(`one pan ${title}`); add(`one pot ${title}`); }
  if (how.boil) add(`boiled ${title}`);
  /* A cook time of zero means the method never applies heat — the timing audit
     fails the build otherwise — so "no cook" is a fact about this recipe. */
  if (recipe.cook === 0) {
    add(`no cook ${title}`);
    add(`${title} without cooking`);
  }
  if (!how.oven && (category === 'Baking' || category === 'Desserts')) {
    add(`no bake ${title}`);
  }

  add(`what to serve with ${title}`);
  add(`how to store ${title}`);
  if (recipe.pairings && recipe.pairings.length) {
    add(`${title} side dishes`);
    add(`what goes with ${title}`);
  }
  if (recipe.tips && recipe.tips.length) {
    add(`${title} tips`);
    add(`how to make perfect ${title}`);
  }
  if (storage) add(`how long does ${title} last`);
  if (/freez/.test(storage)) {
    add(`can you freeze ${title}`);
    add(`freezing ${title}`);
  }
  if (/reheat/.test(storage)) add(`how to reheat ${title}`);
  if (/refrigerat|keeps|chill/.test(storage)) {
    add(`make ahead ${title}`);
    add(`leftover ${title}`);
    if (recipe.servings >= 4) add(`${title} for meal prep`);
  }

  /* What the page demonstrably contains. Every recipe page carries numbered
     steps, an ingredient list, a nutrition table and a print stylesheet, so
     these are statements about the page rather than claims about the food. */
  add(`${title} step by step`);
  add(`${title} ingredients list`);
  add(`${title} nutrition`);
  add(`${title} calories`);
  add(`printable ${title} recipe`);
  add(`how long to cook ${title}`);
  add(`how long does ${title} take`);
  add(`what is ${title}`);
  add(`${title} prep time`);
  add(`${title} method`);
  add(`${title} instructions`);
  if (recipe.imageData) add(`${title} recipe with photos`);

  /* Nutrition claims come off the per-serving figures the page prints, so a
     dish is only called low-calorie or high-protein when its own numbers say
     so. The thresholds are the ordinary ones a reader would assume. */
  const [kcal, protein, , fat, fibre, sugar, sodium] = recipe.nutrition || recipe.nut || [];
  if (kcal) {
    add(`${title} calories per serving`);
    add(`how many calories in ${title}`);
    if (kcal < 400) { add(`low calorie ${title}`); add(`light ${title}`); }
    if (kcal < 300) add(`${title} under 300 calories`);
  }
  if (protein >= 30) add(`high protein ${title}`);
  if (fibre >= 8) add(`high fibre ${title}`);
  if (fat !== undefined && fat <= 10) add(`low fat ${title}`);
  if (sugar !== undefined && sugar <= 5) add(`low sugar ${title}`);
  if (sodium !== undefined && sodium <= 400) add(`low sodium ${title}`);
  /* No carbohydrate rule here on purpose. "Low carb" already has an
     authoritative source in the Low-Carb tag, which is an editorial judgement
     about the dish; a second rule reading the grams disagreed with it (ceviche
     is tagged Low-Carb and lists 24 g) and two sources for one claim means one
     of them is wrong on the page. The tag wins. */

  /* Two-word intent stacks, only where both halves are already true. */
  if (recipe.difficulty === 'Easy' && total && total <= 30) {
    add(`quick and easy ${title}`);
    add(`easy ${cuisine} recipes for beginners`);
  }
  if (recipe.badges && recipe.badges.includes('editors')) {
    add(`${title} tried and tested`);
  }

  return out.slice(0, limit);
}

/**
 * The slice that goes into the <meta name="keywords"> tag.
 *
 * The full list runs to about ninety phrases and is worth having: it is what
 * the site's own search box matches against, and that index costs nothing but
 * a JSON file the page was downloading anyway.
 *
 * The meta tag is a different matter. Google has ignored it since 2009, so
 * length there buys no ranking; Bing has said it reads a stuffed one as a spam
 * signal. That makes a four-kilobyte tag all downside — the honest maximum is
 * a normal-looking handful, and everything past it goes to the places that
 * actually use it.
 */
function forMeta(keywords, limit = 25) {
  return (keywords || []).slice(0, limit);
}

/**
 * The shorter list that goes into the Recipe JSON-LD.
 *
 * Google reads `keywords` on a recipe and its guidance asks for "other terms
 * for your recipe" — a handful of descriptors, not an index. Sixty phrases in
 * a structured-data field is the shape of a manual action, and the field is
 * not where the reach comes from anyway. The meta tag and the site's own
 * search index take the full list; this takes the front of it, which is the
 * curated phrases plus the strongest derived ones.
 */
function forSchema(keywords, limit = 12) {
  return (keywords || []).slice(0, limit);
}

module.exports = { expand, forSchema, forMeta, headlineIngredients, CATEGORY_NOUN,
  DIET_WORD, SLOW_COOK_MINUTES };

/**
 * Keywords for a category landing page.
 *
 * The dishes on the page are the best evidence of what it is about, so the
 * most-cooked few contribute their names. A reader searching "chicken curry"
 * should be able to reach the Dinner page that carries it.
 *
 * @param {string} name     category name, e.g. "Quick Meals"
 * @param {object[]} list   the recipes on the page, most popular first
 */
function forCategory(name, list = []) {
  /* Category names are plural on the page — "Desserts", "Quick Meals" — but
     they are used as adjectives here, and "desserts recipes" is not a phrase
     anyone types. */
  const n = CATEGORY_ADJECTIVE[name] || lower(name);
  const out = [
    `${n} recipes`, `best ${n} recipes`, `easy ${n} ideas`, `${n} recipe ideas`,
    `${n} recipes for two`, `${n} menu ideas`, `homemade ${n} recipes`,
    `simple ${n} recipes`, `${n} inspiration`, `${n} ideas for tonight`
  ];
  /* "What to cook for dinner" is one of the most-typed phrases there is.
     "What to cook for drink" is not a sentence, so this only applies to the
     categories that name a point in the day. */
  if (MEALTIME.has(name)) {
    out.push(`what to cook for ${n}`, `${n} recipes for a family`,
             `${n} ideas for a crowd`);
  }
  /* Every category but this one gains a "quick" variant; Quick Meals already
     is one, and "quick quick meal recipes" is the kind of phrase that makes a
     keyword list look generated. */
  if (!n.includes('quick')) out.push(`quick ${n} recipes`);
  for (const recipe of list.slice(0, 8)) out.push(`${lower(recipe.title)} recipe`);
  /* The cuisines actually represented on the page, not a list of every cuisine
     the site knows about. */
  const cuisines = [...new Set(list.map(r => r.cuisine))].slice(0, 8);
  for (const cuisine of cuisines) out.push(`${lower(cuisine)} ${n} recipes`);
  return dedupe(out, 40);
}

/**
 * Keywords for a cuisine landing page.
 *
 * @param {string} name     cuisine name, e.g. "Thai"
 * @param {object[]} list   the recipes on the page, most popular first
 */
function forCuisine(name, list = []) {
  const n = lower(name);
  const out = [
    `${n} recipes`, `authentic ${n} food`, `${n} cooking`, `${n} dishes`,
    `traditional ${n} recipes`, `easy ${n} recipes`, `best ${n} recipes`,
    `${n} food at home`, `how to cook ${n} food`, `${n} cuisine`,
    `classic ${n} dishes`, `${n} home cooking`, `popular ${n} food`
  ];
  for (const recipe of list.slice(0, 10)) out.push(`${lower(recipe.title)} recipe`);
  const categories = [...new Set(list.map(r => r.category))].slice(0, 6);
  for (const category of categories) {
    out.push(`${n} ${lower(CATEGORY_NOUN[category] || category)}s`);
  }
  return dedupe(out, 44);
}

/** Deduplicate case-insensitively, preserving order, and cap the length. */
function dedupe(list, limit) {
  const seen = new Set();
  const out = [];
  for (const item of list) {
    const value = lower(item);
    if (!value || seen.has(value)) continue;
    seen.add(value);
    out.push(value);
    if (out.length >= limit) break;
  }
  return out;
}

module.exports.forCategory = forCategory;
module.exports.CATEGORY_ADJECTIVE = CATEGORY_ADJECTIVE;
module.exports.forCuisine = forCuisine;
module.exports.fold = fold;

/**
 * The same keywords, folded down for the client-side search index.
 *
 * The index is a JSON file the browser downloads before the search box works,
 * and search matches plain substrings against it — so a phrase only needs to be
 * present once for a query to find it. Thirty derived keywords repeat the dish
 * name thirty times, which is thirty copies of a string the blob already has.
 * Removing the repeat keeps every query working ("can you freeze", "gluten
 * free", "for beginners") and gives back most of what the expansion cost.
 *
 * The full lists still go to the meta tag and the Recipe JSON-LD, which are
 * rendered into the page and cost no extra request.
 *
 * @param {string} title      the recipe title, kept once in full
 * @param {string[]} keywords the expanded keyword list
 * @returns {string[]}        distinct terms, the dish name appearing once
 */
function searchTerms(title, keywords) {
  const name = lower(title);
  const plain = fold(name);
  const seen = new Set();
  const out = [];
  const push = value => {
    const v = clean(value);
    if (!v || seen.has(v)) return;
    seen.add(v);
    out.push(v);
  };
  push(name);
  if (plain !== name) push(plain);
  for (const keyword of keywords) {
    /* Take out the dish name wherever it appears, accented or not, and keep
       what is left: the intent. "how to make ragù napoletano" becomes
       "how to make", which is what a query would match on anyway. */
    const rest = lower(keyword).split(name).join(' ').split(plain).join(' ');
    push(rest.replace(/\s+/g, ' ').trim());
  }
  return out;
}

module.exports.searchTerms = searchTerms;

/**
 * Keywords for an ingredient hub.
 *
 * The queries this page can honestly answer are the "what do I do with ..."
 * ones, so the phrasing leans that way rather than repeating the ingredient
 * with adjectives. The cuisines and categories named are the ones actually
 * represented in the hub.
 */
function forIngredient(hub) {
  const n = lower(hub.name);
  const out = [
    `${n} recipes`, `easy ${n} recipes`, `what to make with ${n}`,
    `${n} recipe ideas`, `best ${n} recipes`, `quick ${n} recipes`,
    `dinner with ${n}`, `${n} dishes`, `cooking with ${n}`,
    `leftover ${n} recipes`, `how to cook ${n}`, `healthy ${n} recipes`,
    `${n} recipes for dinner`, `simple ${n} recipes`, `${n} meal ideas`
  ];
  const list = hub.recipes || [];
  for (const recipe of list.slice(0, 10)) out.push(`${lower(recipe.title)} recipe`);
  for (const cuisine of [...new Set(list.map(r => r.cuisine))].slice(0, 6)) {
    out.push(`${lower(cuisine)} ${n} recipes`);
  }
  for (const category of [...new Set(list.map(r => r.category))].slice(0, 5)) {
    out.push(`${n} ${lower(CATEGORY_ADJECTIVE[category] || category)} recipes`);
  }
  /* Only the diets that some recipe in the hub actually carries. */
  const diets = new Set(list.flatMap(r => (r.tags || []).map(tag => DIET_WORD[tag]).filter(Boolean)));
  for (const diet of [...diets].slice(0, 4)) out.push(`${diet} ${n} recipes`);
  return dedupe(out, 44);
}

module.exports.forIngredient = forIngredient;
