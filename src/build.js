#!/usr/bin/env node
'use strict';
/**
 * Weekly Delight static site generator.
 *
 *   node src/build.js
 *
 * Reads src/data/*, renders every page into the repository root, copies
 * assets and emits search-index.json, sitemap.xml, robots.txt, manifest.json
 * and feed.xml. No dependencies — Node 18+ only.
 *
 * Output goes to the root so the repository can be served as-is (GitHub Pages
 * from the repo root, or Netlify/Vercel with publish "."). That means the
 * output directory also contains the source, so the build NEVER wipes its
 * output directory wholesale — see cleanOutput() below.
 */

const fs = require('fs');
const path = require('path');

const { esc, clamp, slugify, plural, isIllustration: isDrawing, CATEGORIES, CUISINES, DIET_TAGS } = require('./lib/util');

/* Alt text says what the picture is: the dish, and that it is a drawing when it
   is one, because the alt text is what a screen reader announces. It used to add
   the cuisine, the category and one of the recipe's search phrases ("Spaghetti
   Carbonara, an Italian dinner recipe — carbonara without cream"), which
   describes the page rather than the photograph, can be untrue of a picture
   taken by someone else, and is the keyword-filled alt text Google's image
   guidelines ask sites not to write. */
function altText(row, detail, hero) {
  return clamp(hero && isDrawing(hero) ? `AI-generated illustration of ${row.title}` : row.title, 160);
}
const { plainList, parse } = require('./lib/ingredients');
const { build: buildHubs } = require('./lib/ingredient-hubs');
const { subcategories, assignRelated, SUBCATEGORY_MIN } = require('./lib/linking');
const { enrichDescription, TAIL_CLAUSES } = require('./lib/seo');
const contentDates = require('./lib/content-dates');
const { detectWait, waitLabel } = require('./lib/timing');
const { dietConditions } = require('./lib/diet-conditions');
const calc = require('../tools/nutrition-calc');
const { classify } = require('./lib/classify');
const DISH_ROLES = require('./data/dish-roles.json');
/* Tags that only the build may set, from the figures and the ingredient list. A
   few rows still carry one typed by hand; it is ignored rather than trusted. */
const DERIVED_ONLY = ['High-Protein', 'Low-Carb', 'Keto', 'No Added Sugar'];
const dietNotes = recipe => Object.values(recipe.dietStatus || {}).map(d => d.note).filter(Boolean);
/* Diet tags that hold as the recipe is written, and those that hold only with a swap the recipe
   offers. The filters and the search index keep them apart, so "Vegan" lists only what is vegan
   as written unless the reader asks for the swaps too. Derived tags are always as written. */
const asWritten = recipe => recipe.tags.filter(t => !recipe.dietStatus || !recipe.dietStatus[t] || recipe.dietStatus[t].status === 'clean');
const withSwap = recipe => recipe.tags.filter(t => recipe.dietStatus && recipe.dietStatus[t] && recipe.dietStatus[t].status === 'conditional');
const minify = require('./lib/minify');
const { CATEGORY_ADJECTIVE } = require('./lib/keywords');
const publishedReviews = require('./data/reviews.json');
const volumes = require('./data/volumes');
const inline = require('./lib/inline');
const { derivedTags } = require('./lib/diet-derived');
const { guide: hubGuide } = require('./lib/hub-guide');
const HUB_INTROS = require('./data/hub-intros');
/* What a listing page says above its cards: the hand-written paragraph where there is one
   (src/data/hub-intros.js), then what the recipes on it add up to (src/lib/hub-guide.js). */
const hubParagraphs = (pagePath, list, opts) => [HUB_INTROS[pagePath], ...hubGuide(list, opts)].filter(Boolean);
/**
 * The meta description for an ingredient hub.
 *
 * The blurbs are a short phrase each — "Silken, firm and fried" — which left
 * fourteen of these pages describing themselves in under seventy characters
 * and handing back half the snippet Google was willing to print. The rest is
 * derived from the hub itself, so it stays true as recipes come and go: the
 * cuisines actually represented, and a supported complete elapsed time.
 */
function hubDescription(hub) {
  const list = hub.recipes || [];
  const cuisines = [...new Set(list.map(r => r.cuisine))].slice(0, 3);
  /* Prep + cook excludes required rising, chilling and similar waits. An
     unquantified stage cannot support a complete-time promise at all. */
  const quickest = Math.min(...list
    .filter(r => !(r.untimed && (Array.isArray(r.untimed) ? r.untimed.length : true)))
    .map(r => r.elapsedTime)
    .filter(n => Number.isFinite(n) && n > 0));
  const name = hub.name.toLowerCase();

  /* Sentences are added only while the whole one fits. Clamping mid-phrase
     spends the snippet on an ellipsis, which reads worse than stopping early. */
  let text = `${plural(list.length, name + ' recipe')} on Weekly Delight.`;
  const fit = sentence => {
    if (text.length + sentence.length + 1 <= 158) text += ` ${sentence}`;
  };
  fit(hub.blurb);
  if (cuisines.length > 1) {
    fit(`${cuisines.slice(0, -1).join(', ')} and ${cuisines[cuisines.length - 1]} dishes`
      + (Number.isFinite(quickest) ? `, from ${quickest} minutes.` : '.'));
  } else if (Number.isFinite(quickest)) {
    fit(`From ${quickest} minutes.`);
  }
  fit('Each with the method and the reasoning behind it.');
  return text;
}

/**
 * A category's name in the middle of a phrase.
 *
 * The category names are plural — "Appetizers", "Desserts" — and were being
 * dropped straight in front of the word Recipes, which produced titles like
 * "Appetizers Recipes". src/lib/keywords.js already keeps the adjective form
 * for exactly this reason, so it is reused rather than duplicated.
 */
function categoryNoun(name) {
  const adjective = CATEGORY_ADJECTIVE[name];
  if (!adjective) return name;
  return adjective.replace(/\b\w/g, c => c.toUpperCase());
}

/* Category hubs have cuisine links; the linked recipe directory owns the
   interactive filters. Keep their description faithful to that navigation. */
function categoryDescription(name, count) {
  return enrichDescription(
    `${plural(count, categoryNoun(name).toLowerCase() + ' recipe')} on Weekly Delight. ${CATEGORIES[name]}`,
    ['Browse by cuisine, or filter the full recipe directory.', ...TAIL_CLAUSES]);
}

/* What the Quick Meals category page promises its readers. */
const QUICK_MEAL_MINUTES = 30;

/* What each category's own page leads with (src/lib/classify.js). Everything
   else filed under the category is listed below, under its own heading. */
const PRIMARY_ROLES = {
  'Dinner': ['main'], 'Quick Meals': ['main', 'light'], 'Healthy': ['main', 'light'],
  'Lunch': ['light', 'main'], 'Breakfast': ['breakfast'], 'Appetizers': ['starter'],
  'Baking': ['dessert', 'bread'], 'Desserts': ['dessert'], 'Drinks': ['drink'],
  'Holiday Specials': ['main', 'dessert']
};
const PRIMARY_HEADING = {
  'Dinner': 'Main dishes', 'Quick Meals': 'Quick meals', 'Healthy': 'Meals', 'Lunch': 'Lunches',
  'Breakfast': 'Breakfasts', 'Appetizers': 'Starters and snacks', 'Baking': 'Bakes and breads',
  'Desserts': 'Desserts', 'Drinks': 'Drinks', 'Holiday Specials': 'Holiday mains and bakes'
};

const { expand: expandKeywords, forCategory: keywordsForCategory,
        forCuisine: keywordsForCuisine, forIngredient: keywordsForIngredient,
        searchTerms, fold: keywordFold } = require('./lib/keywords');
const { SITE, slug } = require('./templates/layout');
const { recipeCount } = require('./data/stats');
const ads = require('./templates/ads');
const pages = require('./templates/pages');
const recipePage = require('./templates/recipe-page');
const collectionPages = require('./templates/collections');
const { resolve: resolveCollections } = require('./lib/collections');
const guidePages = require('./templates/guides');
const feedbackPages = require('./templates/feedback');
const { GUIDES } = require('./data/guides');

const ROOT = path.join(__dirname, '..');
const OUT = ROOT;               /* generated site is written to the repo root */
const SRC = __dirname;

/* Everything the build creates, and nothing else. cleanOutput() removes only
   these, because the output directory is also the project directory. */
const GENERATED_DIRS = ['assets', 'recipes', 'categories', 'cuisines', 'ingredients', 'collections', 'weekly-plan', 'my-plan', 'guides', 'report', 'feedback',
  'about', 'contact', 'privacy', 'search', 'favourites', 'site-directory'];
const GENERATED_FILES = ['index.html', '404.html', 'sitemap.xml', 'sitemap-index.xml', 'robots.txt', 'ads.txt',
  'manifest.json', 'feed.xml', 'pinterest-feed.xml', 'search-index.json', '_redirects'];

/* Never removable, whatever else changes. A typo in GENERATED_* that collided
   with one of these would otherwise delete the project. */
const PROTECTED = new Set(['.git', '.github', '.gitignore', '.nojekyll', 'src', 'tools',
  'node_modules', 'package.json', 'package-lock.json', 'README.md',
  'images-attribution.md', 'netlify.toml', 'vercel.json', '.htaccess']);

/* --------------------------------------------------------------- helpers */
function mkdir(dir) { fs.mkdirSync(dir, { recursive: true }); }

/**
 * Remove the previous build's output without touching anything else.
 *
 * The old implementation deleted the whole output directory. That was safe
 * when it was dist/; pointed at the repository root it would delete the
 * source, the tooling and .git, so it is deliberately replaced with a
 * targeted clean guarded by an explicit allow-list.
 */
function cleanOutput() {
  const names = [...GENERATED_DIRS, ...GENERATED_FILES];

  /* Validate the whole list before removing anything. Deleting as we validate
     would leave the site half-cleaned and unbuilt if a later entry failed. */
  const targets = names.map(name => {
    if (PROTECTED.has(name)) {
      throw new Error(`refusing to clean "${name}": it is a protected project path`);
    }
    if (name.includes('/') || name.includes('\\') || name === '.' || name === '..') {
      throw new Error(`refusing to clean unsafe path "${name}"`);
    }
    const target = path.join(OUT, name);
    if (!target.startsWith(OUT + path.sep)) {
      throw new Error(`refusing to clean outside the output directory: ${name}`);
    }
    return target;
  });

  /* The chunked sitemaps are numbered, and how many there are depends on the
     catalogue, so they are matched by pattern rather than listed. */
  const chunks = fs.readdirSync(OUT).filter(n => /^sitemap-\d+\.xml$/.test(n)).map(n => path.join(OUT, n));

  for (const target of [...targets, ...chunks]) fs.rmSync(target, { recursive: true, force: true });
}

function writePage(relPath, html) {
  const target = path.join(OUT, relPath);
  mkdir(path.dirname(target));
  fs.writeFileSync(target, html);
}

/**
 * Recipes taken down because another page is the same dish
 * (src/data/retired-recipes.json), each with the page its URL redirects to.
 * A retired slug back in the catalogue would redirect a live page, and a target
 * missing from it would send readers to a 404, so either stops the build.
 */
function retiredRecipes(recipes) {
  const list = JSON.parse(fs.readFileSync(path.join(SRC, 'data', 'retired-recipes.json'), 'utf8'));
  const live = new Set(recipes.map(r => r.slug));
  return Object.entries(list).filter(([from]) => !from.startsWith('_')).map(([from, entry]) => {
    if (live.has(from)) {
      throw new Error(`retired recipe "${from}" is in the catalogue again; take it out of one or the other`);
    }
    if (!live.has(entry.to)) {
      throw new Error(`retired recipe "${from}" redirects to "${entry.to}", which is not in the catalogue`);
    }
    return { from, to: entry.to };
  });
}

/* Listing pages that no longer have the four recipes a category-and-cuisine page needs
   (SUBCATEGORY_MIN in src/lib/linking.js) after a duplicate was retired. Each old address goes,
   in one 301, to the page that still lists its recipes; .htaccess and vercel.json carry the same. */
const RETIRED_HUBS = [
  { from: 'categories/appetizers/new-zealand/', to: 'cuisines/new-zealand/' }
];

function copyDir(from, to) {
  mkdir(to);
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    const src = path.join(from, entry.name);
    const dst = path.join(to, entry.name);
    if (entry.isDirectory()) copyDir(src, dst);
    else if (entry.name.endsWith('.css')) {
      fs.writeFileSync(dst, minify.css(fs.readFileSync(src, 'utf8')));
    } else fs.copyFileSync(src, dst);
  }
}

/* ------------------------------------------------------------ load data */

/**
 * The image manifest carries values that templates interpolate directly into
 * `style` and `src` attributes (colour, LQIP data URI, filename). It is
 * generated by the Python pipeline from third-party API responses, so each
 * field is pattern-checked here rather than trusted — one gate protecting
 * every template.
 */
const HEX_COLOUR = /^#[0-9a-f]{6}$/i;
const LQIP_URI = /^data:image\/jpeg;base64,[A-Za-z0-9+/]+=*$/;
const FILE_SLUG = /^[a-z0-9-]+$/;

function validateImage(entry, slug) {
  const clean = {};
  for (const key of ['hero', 'process']) {
    const data = entry[key];
    if (!data) { clean[key] = null; continue; }
    if (!FILE_SLUG.test(data.file || '')) {
      throw new Error(`"${slug}": image ${key} has an unsafe filename: ${JSON.stringify(data.file)}`);
    }
    if (!HEX_COLOUR.test(data.color || '')) {
      throw new Error(`"${slug}": image ${key} has an invalid colour: ${JSON.stringify(data.color)}`);
    }
    if (data.lqip && !LQIP_URI.test(data.lqip)) {
      throw new Error(`"${slug}": image ${key} has a malformed LQIP data URI`);
    }
    /* The author and title are printed under the picture and the author is
       published as its creator. What the archives return is whatever the
       uploader typed: an unfilled template ("{{{photographer}}}"), markup, an
       email address, a whole licence notice. tools/fetch_images.py cleans these
       on the way in; this is the check that the data is clean when it arrives
       here, so one that is not stops the build instead of reaching a page. */
    if (data.source !== 'AI illustration') {
      for (const field of ['author', 'title']) {
        const v = String(data[field] || '');
        if (/\{\{|\}\}|<[^>]+>|&(?:amp|lt|gt|quot|#\d+);/i.test(v) || /[\w.-]+@[\w-]+\.[a-z]{2,}/i.test(v)
            || (field === 'author' && v.length > 100)) {
          throw new Error(`"${slug}": image ${key} has an ${field} that cannot go in a credit line: ${JSON.stringify(v.slice(0, 80))}`);
        }
      }
    }
    clean[key] = data;
  }
  return clean;
}

function loadRecipes() {
  /* The catalogue is split across volumes, each with its own details
     directory. src/data/volumes.js discovers and merges them, so the rest of
     the build only ever sees one flat list of recipes. */
  const catalog = volumes.catalog();
  const details = volumes.details();

  /* A slug appearing in both volumes would silently overwrite one recipe's
     details with the other's, so it fails the build instead. */
  const seen = new Set();
  for (const row of catalog) {
    if (seen.has(row.slug)) throw new Error(`Duplicate recipe slug "${row.slug}" across catalogues`);
    seen.add(row.slug);
  }
  const images = JSON.parse(fs.readFileSync(path.join(SRC, 'data', 'images.json'), 'utf8'));

  /* Publication dates come from the project's records, not from the
     catalogue order. They used to be computed by counting back from
     2026-07-01 by each recipe's position, which spread the recipes over 2008
     to 2026 on a domain whose hosting account dates from August 2026. See
     tools/published-dates.js for where the recorded dates come from. */
  const publishedDates = contentDates.publishedRegister();

  const recipes = catalog.map((row, index) => {
    const detail = details[row.slug];
    if (!detail) throw new Error(`Missing recipe detail for "${row.slug}"`);
    for (const field of ['d', 'meta', 'kw', 'why', 'ing', 'st', 'tips', 'pair', 'store']) {
      if (!detail[field]) throw new Error(`"${row.slug}" is missing the "${field}" field`);
    }
    /* Legacy input only (the printed figures are computed below), so optional; but if given,
       seven numbers. */
    if (detail.nut && detail.nut.length !== 7) throw new Error(`"${row.slug}" nutrition needs 7 values`);
    /* Optional: estimated potassium and phosphorus in mg a serving, printed beside the
       other nutrition figures (volume 34). Half-filled is always a mistake. */
    if (detail.kp && (!Array.isArray(detail.kp) || detail.kp.length !== 2
        || !detail.kp.every(v => Number.isFinite(v) && v >= 0))) {
      throw new Error(`"${row.slug}" kp must be [potassium mg, phosphorus mg]`);
    }
    /* Unattended waiting — proving, chilling, marinating. Optional, because most
       recipes have none, but half-filled is always a mistake. */
    if (detail.cookMax !== undefined && !(Number.isInteger(detail.cookMax) && detail.cookMax >= row.cook)) {
      throw new Error(`"${row.slug}" cookMax must be a whole number of minutes, at least the row's cook time`);
    }
    /* Stages the method requires but gives no time for ("cool completely", "chill until set"),
       named so the page can say the total is a floor rather than pretend it is complete. */
    if (detail.untimed !== undefined && !(Array.isArray(detail.untimed) && detail.untimed.length
      && detail.untimed.every(u => typeof u === 'string' && /^[a-z]/.test(u) && u.length <= 60))) {
      throw new Error(`"${row.slug}" untimed must be a list of short lower-case stage names, e.g. ['cooling completely']`);
    }
    if (detail.rest && (detail.rest.length !== 2 || !(detail.rest[0] > 0) || !detail.rest[1])) {
      throw new Error(`"${row.slug}" rest must be [minutes, label]`);
    }
    /* The Quick Meals page prints "Thirty minutes or less, start to plate" over
       whatever is filed under it, so the category is a promise and not a shelf.
       Ten recipes had drifted past it, one of them at ninety minutes. */
    if (row.category === 'Quick Meals' && row.prep + row.cook > QUICK_MEAL_MINUTES) {
      throw new Error(`"${row.slug}" is filed under Quick Meals but needs `
        + `${row.prep + row.cook} minutes of hands-on work, over the ${QUICK_MEAL_MINUTES} the category promises`);
    }

    const wait = detectWait({ slug: row.slug, steps: detail.st, ingredients: detail.ing });
    /* "Thirty minutes or less, start to plate" is what the Quick Meals page
       promises, so a recipe that also needs an hour of marinating is not one. */
    if (row.category === 'Quick Meals' && row.prep + row.cook + wait.min > QUICK_MEAL_MINUTES) {
      throw new Error(`"${row.slug}" is filed under Quick Meals but takes ${row.prep + row.cook + wait.min} `
        + `minutes start to finish, waiting included, over the ${QUICK_MEAL_MINUTES} the category promises`);
    }
    if (row.category === 'Quick Meals' && detail.untimed) {
      throw new Error(`"${row.slug}" is filed under Quick Meals but needs time for ${detail.untimed.join(', ')} that the recipe does not give, so it cannot promise ${QUICK_MEAL_MINUTES} minutes`);
    }

    const image = validateImage(images[row.slug] || {}, row.slug);
    const datePublished = publishedDates.dateFor(`/recipes/${row.slug}/`);
    /* Same-day recipes keep the catalogue's own order for the "newest" sort and
       the feeds, a second apart, without moving the date anyone sees. */
    const published = Date.parse(`${datePublished}T12:00:00Z`) - index * 1000;

    /* Nutrition is worked out from the ingredient list on every build, against
       the food table and its recorded sources (tools/nutrition-calc.js,
       tools/nutrition-sources.json). The figure typed into the record (`nut`)
       is legacy input and is not printed: for half the catalogue nobody could
       say where it came from. Tier 1 is a documented calculation, tier 2 an
       approximation whose assumptions the page names, tier 3 not reproducible,
       in which case nothing is printed and nothing goes in the schema. */
    const nut = calc.computeRecipe(detail.ing, row.servings, { drink: row.category === 'Drinks' });

    /* Derived tags join the hand-written ones. They are computed from the
       nutrition figures and ingredient list, so they cannot fall out of step
       with the recipe the way the typed ones did. The ones that read the
       figures need a tier-1 calculation behind them. */
    const typed = row.tags.filter(tag => !DERIVED_ONLY.includes(tag));
    const tags = [...typed, ...derivedTags({ ing: detail.ing, nut: nut.tier === 1 ? nut.nut : null }, typed)
      .filter(tag => !typed.includes(tag))];

    const built = {
      ...row,
      tags,
      /* Whether each diet tag holds as written or only if the cook takes the
         alternative a line offers ("honey or sugar"). The page states the
         condition and the Recipe JSON-LD, which cannot, leaves the diet out. */
      dietStatus: dietConditions({ tags, ing: detail.ing, st: detail.st }),
      /* Hands-on time: preparation plus cooking. */
      totalTime: row.prep + row.cook,
      /* Unattended waiting, read from the method by src/lib/timing.js, as a
         floor and a ceiling. tools/timing-audit.js keeps the record's declared
         `rest` equal to the floor. */
      restTime: wait.min,
      restMax: wait.max,
      restLabel: wait.max ? (detail.rest ? detail.rest[1] : waitLabel(detail, wait)) : '',
      /* A wait only some cooks need ("if the rice cakes are frozen, soak them") widens the range
         without raising the floor. */
      restConditional: !wait.min && wait.max > 0,
      untimed: detail.untimed || null,
      /* Start to finish, waiting included. This is the time everything that
         promises speed reads — the card, the filters, the title, the search
         phrases and the Recipe JSON-LD's totalTime (the floor) — because a
         focaccia that rises overnight is not a 50-minute recipe, however
         little of that time needs the cook. */
      elapsedTime: row.prep + row.cook + wait.min,
      /* Where the method gives a range for the cooking itself ("simmer 2.5 to 3
         hours"), `cookMax` in the record carries the top of it; the row's cook
         time is the floor, which is what cookTime in the schema says. */
      cookMax: detail.cookMax || row.cook,
      elapsedMax: row.prep + (detail.cookMax || row.cook) + wait.max,
      description: detail.d,
      meta: clamp(detail.meta, 158),
      keywords: detail.kw,
      /* Optional, and absent on every recipe today. Both exist so the schema
         appears the moment a real asset does — see src/lib/media.js. */
      video: detail.video || null,
      publishedReviews: publishedReviews[row.slug] || [],
      /* The schema, the FAQ, the feeds and the audits read the plain copies;
         only the recipe page reads the Rich ones, which keep the **bold**
         markers it turns into <strong>. See src/lib/inline.js. */
      why: inline.plain(detail.why),
      whyRich: detail.why,
      ingredients: detail.ing,
      steps: detail.st,
      tips: detail.tips.map(inline.plain),
      tipsRich: detail.tips,
      /* Which layout the page uses and any headings written for this recipe
         alone. Both optional; see src/lib/layouts.js. */
      layout: detail.layout || null,
      headings: detail.headings || null,
      pairings: detail.pair,
      storage: detail.store,
      nutrition: nut.tier < 3 ? nut.nut : null,
      /* Potassium and phosphorus only where a recipe already printed them. */
      kp: detail.kp && nut.tier < 3 ? nut.kp : null,
      nutritionTier: nut.tier,
      nutritionReasons: nut.reasons,
      /* False when salt is added to taste or poured away with cooking water,
         or the figures are not tier 1: nothing may then be said about sodium. */
      sodiumReliable: nut.sodiumReliable,
      /* Sodium on its own, for the table and the schema: 'omit' when the salt for cooking water is
         counted although most of it is poured away (the figure would overstate it several times
         over, as carbonara's 2,710 mg did), 'partial' when salt to taste is left out (a floor), else
         'ok'. The other figures stand or fall with the tier. */
      sodiumStatus: nut.flags.includes('salt-water') ? 'omit' : nut.flags.includes('salt-unmeasured') ? 'partial' : 'ok',
      alcohol: nut.alcohol,
      cardBlurb: clamp(detail.d, 118),
      imageData: image.hero || null,
      processData: image.process || null,
      imageAlt: altText(row, detail, image.hero),
      processAlt: `${row.title}, in preparation`,
      published,
      datePublished,
      /* Filled in below, once the register exists — a recipe's modified date
         is the day its own content last changed, not a build constant. */
      dateModified: null,

      /* Ratings come from readers or from nowhere.
         --------------------------------------------------------------
         The catalogue's own rating and review columns were seeded when it
         was written, to give the cards something to show. Six hundred
         recipes carried them, every value between 4.5 and 4.9, and the
         highest claimed 4,966 reviews that nobody had left. They were
         printed on the page and published as aggregateRating, which is a
         statement to a reader and to Google that a stated number of people
         had rated the dish.

         The two columns are now an editorial ordering weight and nothing
         else — they order the taxonomy pages and the related lists, which
         is a presentation choice rather than a claim. What the page shows
         and the schema publishes comes from src/data/reviews.json, which is
         empty, so every recipe reads "Not yet rated" until somebody rates
         one. src/lib/util.js already renders exactly that, because 209
         recipes never had a seeded figure to begin with. */
      popularity: row.reviews * row.rating,
      rating: reviewAverage(publishedReviews[row.slug]),
      reviews: (publishedReviews[row.slug] || []).length
    };

    /* Widen the four curated keywords into the long-tail phrases the row
       already supports. This runs after the object is assembled because it
       reads the ingredients and storage note as well as the catalogue row. */
    /* Kept alongside the expanded list, because the structured data reserves
       slots for them: these are the phrases somebody chose for this dish, and
       ranking the expanded list by specificity alone drops them — "cold skin
       noodles" names the dish without repeating its title, so it scores below
       a generated "dairy free liangpi". */
    built.curatedKeywords = (detail.kw || []).map(k => String(k).toLowerCase());
    built.keywords = expandKeywords(built);
    return built;
  });

  /* Dish role, meals, method and kit, beside the category rather than instead of it
     (src/lib/classify.js). Read-only facts derived from the recipe's own text, so
     they are not part of the content-date fingerprint: a better rule reclassifies
     the catalogue without pretending 5,000 recipes were rewritten. */
  for (const recipe of recipes) Object.assign(recipe, classify(recipe, DISH_ROLES));

  /* Related recipes (4 to 6 each) and the subcategory every recipe sits in.
     See src/lib/linking.js for how they are chosen. */
  assignRelated(recipes, buildHubs(recipes).hubs);
  recipes.subcategoryHubs = subcategories(recipes, slug, categoryNoun);

  /* When each recipe's own content last changed. The register is attached to
     the array rather than saved here: the audit tools call loadRecipes too,
     and reading the catalogue should never write to it. Only build() saves. */
  const dates = contentDates.register();
  for (const recipe of recipes) {
    recipe.dateModified = dates.dateFor(`/recipes/${recipe.slug}/`, {
      title: recipe.title, cuisine: recipe.cuisine, category: recipe.category,
      difficulty: recipe.difficulty, prep: recipe.prep, cook: recipe.cook,
      servings: recipe.servings, rest: [recipe.restTime, recipe.restLabel],
      tags: recipe.tags, description: recipe.description, meta: recipe.meta,
      why: recipe.why, ingredients: plainList(recipe.ingredients),
      steps: recipe.steps, tips: recipe.tips, pairings: recipe.pairings,
      storage: recipe.storage, nutrition: recipe.nutrition,
      image: recipe.imageData ? recipe.imageData.file : null,
      /* This is a real, one-time structured-data correction on every recipe,
         not a build timestamp. It removes the accidental second Recipe and
         stops claiming a complete total for untimed methods. Keep the version
         stable on ordinary rebuilds; change only for meaningful recipe markup.
         Capture computed facts that the older source-only hash missed, too. */
      recipeMarkup: 'single-jsonld-v1',
      timingRange: [recipe.cookMax, recipe.restMax, recipe.restConditional],
      schemaTotal: recipe.untimed ? null : recipe.elapsedTime,
      nutritionEvidence: [recipe.nutritionTier, recipe.nutritionReasons,
        recipe.sodiumStatus, recipe.sodiumReliable, recipe.kp, recipe.alcohol],
      imageEvidence: recipe.imageData,
      publishedReviews: recipe.publishedReviews,
      video: recipe.video,
      /* Only present when a label carries a condition, so the fingerprint of
         every recipe whose labels hold outright is what it was before. */
      ...(dietNotes(recipe).length ? { diet: dietNotes(recipe) } : {}),
      /* Likewise the stages the page says the recipe does not time. */
      ...(recipe.untimed ? { untimed: recipe.untimed } : {})
    });
    /* A page cannot have been modified before it was published. */
    if (recipe.dateModified < recipe.datePublished) recipe.dateModified = recipe.datePublished;
    /* The fingerprint of the recipe's own content: what a correction report and a
       cooking record name, so either can tell later whether the recipe has changed since. */
    recipe.contentVersion = dates.hashFor(`/recipes/${recipe.slug}/`);
  }
  recipes.dates = dates;
  recipes.publishedDates = publishedDates;
  recipes.rewrites = details.__rewrites || { applied: 0, stale: [], unknown: [] };

  return recipes;
}

/**
 * The mean of a recipe's published reviews, or 0 when there are none.
 *
 * Zero is what src/lib/util.js reads as "not yet rated", which is the honest
 * thing to print for a dish nobody has scored.
 */
function reviewAverage(reviews) {
  const list = (reviews || []).filter(Boolean);
  if (!list.length) return 0;
  return Number((list.reduce((sum, r) => sum + Number(r.rating), 0) / list.length).toFixed(1));
}

/* ------------------------------------------------------------- context */
function buildContext(recipes) {
  /* Inlined into the <head> of all 946 pages, so its size is paid on every
     one of them rather than once from a cache. Minified by ./lib/minify.js,
     which was written to replace the four regexes that used to sit here: one
     of them stripped the space on both sides of a colon, and the space before
     a colon is the only thing separating `.card :hover` from `.card:hover`. */
  const criticalCss = minify.css(
    fs.readFileSync(path.join(SRC, 'assets', 'css', 'critical.css'), 'utf8'));

  const count = (list, key) => list.reduce((acc, r) => {
    acc[r[key]] = (acc[r[key]] || 0) + 1;
    return acc;
  }, {});

  const categoryCounts = count(recipes, 'category');
  const cuisineCounts = count(recipes, 'cuisine');
  const topCuisines = Object.keys(cuisineCounts).sort((a, b) => cuisineCounts[b] - cuisineCounts[a] || a.localeCompare(b));

  const tagCounts = {};
  const tagSwapCounts = {};
  for (const tag of DIET_TAGS) {
    tagCounts[tag] = recipes.filter(r => asWritten(r).includes(tag)).length;
    tagSwapCounts[tag] = recipes.filter(r => withSwap(r).includes(tag)).length;
  }

  const courseCounts = {};
  const methodCounts = {};
  for (const r of recipes) {
    const key = r.roleReview ? 'review' : r.role;
    courseCounts[key] = (courseCounts[key] || 0) + 1;
    for (const m of r.methods) methodCounts[m] = (methodCounts[m] || 0) + 1;
  }

  const timeCounts = {};
  for (const t of [15, 30, 45, 60, 120]) timeCounts[t] = recipes.filter(r => r.elapsedTime <= t).length;

  return {
    recipes,
    dates: recipes.dates,
    publishedDates: recipes.publishedDates,
    criticalCss,
    categoryCounts,
    cuisineCounts,
    topCuisines,
    facets: {
      category: categoryCounts,
      cuisine: cuisineCounts,
      cuisineList: topCuisines,
      tag: tagCounts,
      tagSwap: tagSwapCounts,
      difficulty: count(recipes, 'difficulty'),
      course: courseCounts,
      method: methodCounts,
      time: timeCounts
    }
  };
}

/* -------------------------------------------------------- search index */
function searchIndex(recipes) {
  return recipes.map(r => ({
    g: r.slug,                                   // slug
    t: r.title,                                  // title
    c: r.cuisine,                                // cuisine
    n: r.category,                               // category
    f: asWritten(r),                             // dietary flags that hold as written
    h: withSwap(r).length ? withSwap(r) : undefined,   // ...and those that hold only with a swap
    d: r.difficulty,
    /* Dish role (src/lib/classify.js), or "review" while a person has not settled it, and how
       it is cooked. Read by the Course and Method filters. */
    j: r.roleReview ? 'review' : r.role,
    y: r.methods.length ? r.methods : undefined,
    /* Start to finish, waiting included: the time filter and the "quickest"
       sort used hands-on minutes, so an overnight focaccia sat among the
       thirty-minute dinners. */
    m: r.elapsedTime,
    x: r.elapsedMax > r.elapsedTime ? r.elapsedMax : undefined,
    /* 1 where the method needs time it does not give: the times are a floor. */
    u: r.untimed ? 1 : undefined,
    p: r.prep,
    o: r.cook,
    v: r.servings,
    r: r.rating || undefined,
    w: r.popularity,
    z: r.published,
    e: r.cardBlurb,
    /* Alt text and image file only where they differ from the title and the
       slug, which is almost never: the client falls back to those. i is 1 for
       "the picture is named after the slug" and absent for no picture. */
    a: r.imageAlt !== r.title ? r.imageAlt : undefined,
    i: !r.imageData ? undefined : r.imageData.file === r.slug ? 1 : r.imageData.file,
    k: r.imageData ? r.imageData.color : null,
    /* The searchable words: the dish's name (as written and without accents),
       cuisine, category, difficulty, diet labels, the recipe's own search
       phrases, the names of its ingredients and the cooking techniques its
       method uses, accent-folded, lowered and reduced to distinct words.
       assets/js/app.js folds a query the same way, splits it on whitespace and
       requires every term to appear as a substring. The generated long tail
       ("how to make", "best", "from scratch", "printable") and the quantities
       ("500 g", "1 tsp") used to be in here too: they were two thirds of the
       file every visitor downloads before search responds, and they matched
       every recipe equally, so they could only add noise. */
    s: searchWords(r),
    /* Who reads what: app.js (header autocomplete) g, t, c, d, m, x, i, s;
       directory.js the rest. r is only sent when a recipe has a real review. */
  }));
}

/**
 * The distinct words of a blob, lowered, in first-seen order.
 *
 * Order is kept so the title's own words come first, which costs nothing and
 * makes the file readable when something needs debugging.
 */
function distinctWords(text) {
  const seen = new Set();
  const out = [];
  for (const word of text.toLowerCase().split(/\s+/)) {
    if (!word || seen.has(word)) continue;
    seen.add(word);
    out.push(word);
  }
  return out.join(' ');
}

/* Words that match nearly every recipe and so cannot narrow a search. */
const SEARCH_STOP = new Set(('a an and or the of to for with in on at by from into over under per plus about ' +
  'recipe recipes how make making made best simple homemade home style classic authentic ' +
  'traditional ultimate perfect good great ideas idea at-home scratch g kg ml l tsp tbsp cup cups ' +
  'large small fresh freshly finely roughly chopped sliced diced grated minced peeled ' +
  'optional serve serving to taste extra pinch handful').split(' '));

/* Techniques worth finding a recipe by, read from the method. */
const TECHNIQUES = [
  ['baked', /\bbak(?:e|ed|ing)\b/i], ['roasted', /\broast/i], ['grilled', /\bgrill/i],
  ['barbecue', /\bbarbecue|\bbbq\b|\bcoals?\b/i], ['fried', /\bfr(?:y|ied|ying)\b/i],
  ['deep-fried', /\bdeep[- ]fr/i], ['stir-fry', /\bstir[- ]fr/i], ['steamed', /\bsteam(?:ed|er|ing)?\b/i],
  ['braised', /\bbrais/i], ['poached', /\bpoach/i], ['smoked', /\bsmok(?:e|ed|er|ing)\b/i],
  ['slow-cooker', /\bslow cooker\b/i], ['air-fryer', /\bair fryer\b/i],
  ['pressure-cooker', /\b(?:pressure cook|instant pot)/i], ['no-bake', /\bno[- ]bake\b/i],
  ['one-pot', /\bone[- ]pot\b/i], ['sheet-pan', /\b(?:sheet pan|traybake|tray bake)\b/i],
  ['simmered', /\bsimmer/i], ['raw', /\bno cooking\b/i]
];

const foldText = text => keywordFold(String(text).toLowerCase());

function searchWords(r) {
  const method = (r.steps || []).join(' ');
  const foods = parse(r.ingredients).filter(item => !item.group)
    .map(item => String(item.name || item.raw).split(/[,(]/)[0]);
  const blob = [
    r.title, r.cuisine, r.category, r.difficulty, r.tags.join(' '), withSwap(r).join(' '),
    (r.curatedKeywords || []).join(' '), foods.join(' '),
    TECHNIQUES.filter(([, re]) => re.test(method)).map(([word]) => word).join(' ')
  ].join(' ');
  const words = [];
  const split = text => text.split(/[^a-z0-9\u00c0-\u024f'-]+/).map(w => w.replace(/^['-]+|['-]+$/g, ''));
  /* Every word of the title stays, filler or not, so "Classic Meatloaf" is found by its name. */
  for (const word of split([r.title.toLowerCase(), foldText(r.title)].join(' '))) if (word) words.push(word);
  for (const word of split([blob.toLowerCase(), foldText(blob)].join(' '))) {
    if (word.length < 2 || /^\d/.test(word) || SEARCH_STOP.has(word)) continue;
    words.push(word);
  }
  return distinctWords(words.join(' '));
}

/* --------------------------------------------------------- site plumbing */
/* Most URLs one sitemap file may hold. Google allows 50,000; a few hundred
   keeps each file quick to fetch and its coverage report readable. */
const SITEMAP_MAX = 500;

function sitemap(recipes, ctx) {
  const dates = ctx.dates;
  /* Hub pages list recipes, so their content changes when the set they list
     does. Fingerprinting that list is what stops the date moving on a rebuild
     that changed nothing. */
  const allSlugs = recipes.map(r => r.slug).sort();
  /* The legacy membership hash migrates without refreshing unchanged pages.
     Thereafter a changed description, listed recipe/card, real image or useful
     link also moves that page's date, even if its set of slugs is unchanged. */
  const hubDate = (route, payload) => dates.dateFor(route, payload,
    contentDates.pageContent(fs.readFileSync(path.join(OUT, route.slice(1), 'index.html'), 'utf8')));
  const entry = (loc, lastmod, changefreq, priority) =>
    `  <url>\n    <loc>${SITE.origin}${SITE.base}${loc}</loc>\n` +
    `    <lastmod>${lastmod}</lastmod>\n` +
    `    <changefreq>${changefreq}</changefreq>\n` +
    `    <priority>${priority}</priority>\n  </url>`;

  /* The four pages that list or count the whole catalogue move together, so
     they share its fingerprint. About and privacy are prose: their date comes
     from the text itself, not from the recipes around them. */
  const urls = [
    entry('', hubDate('/', allSlugs), 'daily', '1.0'),
    entry('recipes/', hubDate('/recipes/', allSlugs), 'daily', '0.9'),
    entry('categories/', hubDate('/categories/', Object.keys(CATEGORIES)), 'weekly', '0.8'),
    entry('cuisines/', hubDate('/cuisines/', ctx.topCuisines), 'weekly', '0.8'),
    entry('ingredients/', hubDate('/ingredients/', (ctx.hubs || []).map(h => h.slug)), 'weekly', '0.8'),
    /* /search/ is noindex: an empty search box until a script runs, and Google
       asks for site search pages to be kept out of its index. */
    entry('site-directory/', hubDate('/site-directory/', allSlugs), 'weekly', '0.6'),
    /* /favourites/ is noindex — device-local content, nothing to crawl. */
    entry('about/', hubDate('/about/', SITE.author), 'monthly', '0.5'),
    entry('privacy/', hubDate('/privacy/', 'privacy-policy-v1'), 'yearly', '0.3'),
    entry('contact/', hubDate('/contact/', 'contact-v1'), 'monthly', '0.4'),
    /* /my-plan/ is noindex: built in the reader's browser from their own saved recipes. */
    entry('collections/', hubDate('/collections/', ctx.curated.collections.map(c => c.slug)), 'weekly', '0.8'),
    entry('weekly-plan/', hubDate('/weekly-plan/', ctx.curated.plan.days.map(d => d.slug)), 'weekly', '0.8'),
    entry('guides/', hubDate('/guides/', GUIDES.map(g => g.slug)), 'monthly', '0.6'),
    ...GUIDES.map(g => entry(`guides/${g.slug}/`, hubDate(`/guides/${g.slug}/`, g.slug), 'monthly', '0.6')),
    ...ctx.curated.collections.map(c => entry(`collections/${c.slug}/`,
      hubDate(`/collections/${c.slug}/`, c.items.map(i => i.slug)), 'monthly', '0.7'))
  ];

  for (const name of Object.keys(CATEGORIES)) {
    const list = recipes.filter(r => r.category === name).map(r => r.slug).sort();
    urls.push(entry(`categories/${slug(name)}/`,
      hubDate(`/categories/${slug(name)}/`, list), 'weekly', '0.7'));
  }
  for (const name of ctx.topCuisines) {
    const list = recipes.filter(r => r.cuisine === name).map(r => r.slug).sort();
    if (list.length < SUBCATEGORY_MIN) continue;   /* noindex: too few recipes to stand as a page */
    urls.push(entry(`cuisines/${slug(name)}/`,
      hubDate(`/cuisines/${slug(name)}/`, list), 'weekly', '0.7'));
  }
  for (const hub of recipes.subcategoryHubs || []) {
    urls.push(entry(hub.path,
      hubDate(`/${hub.path}`, hub.recipes.map(r => r.slug).sort()), 'weekly', '0.6'));
  }
  for (const hub of ctx.hubs || []) {
    urls.push(entry(`ingredients/${hub.slug}/`,
      hubDate(`/ingredients/${hub.slug}/`, hub.recipes.map(r => r.slug).sort()), 'weekly', '0.7'));
  }
  for (const recipe of recipes) {
    const image = recipe.imageData
      ? `\n    <image:image>\n      <image:loc>${SITE.origin}${SITE.base}assets/img/recipes/${recipe.imageData.file}.jpg</image:loc>\n` +
        `      <image:title>${esc(recipe.title)}</image:title>\n` +
        `      <image:caption>${esc(recipe.imageAlt)}</image:caption>\n    </image:image>`
      : '';
    urls.push(
      `  <url>\n    <loc>${SITE.origin}${SITE.base}recipes/${recipe.slug}/</loc>\n` +
      `    <lastmod>${recipe.dateModified}</lastmod>\n` +
      `    <changefreq>monthly</changefreq>\n` +
      `    <priority>${recipe.badges.includes('editors') ? '0.9' : '0.8'}</priority>${image}\n  </url>`
    );
  }

  /* One file of 5,000 URLs is slow to fetch and, if it fails to parse, loses
     every page at once. Google reads a sitemap index of small files faster and
     reports each file's own coverage in Search Console, so the URLs are split
     into the fewest files of at most SITEMAP_MAX, with the sizes evened out so
     the last file is not a stub. */
  const fileCount = Math.ceil(urls.length / SITEMAP_MAX);
  const perFile = Math.ceil(urls.length / fileCount);
  const chunks = [];
  for (let i = 0; i < fileCount; i++) {
    const slice = urls.slice(i * perFile, (i + 1) * perFile);
    const lastmod = slice.map(u => (u.match(/<lastmod>([^<]+)<\/lastmod>/) || [])[1]).filter(Boolean).sort().pop();
    chunks.push({
      name: `sitemap-${i + 1}.xml`,
      lastmod,
      xml: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${slice.join('\n')}
</urlset>\n`
    });
  }
  const index = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${chunks.map(c => `  <sitemap>\n    <loc>${SITE.origin}${SITE.base}${c.name}</loc>\n    <lastmod>${c.lastmod}</lastmod>\n  </sitemap>`).join('\n')}
</sitemapindex>\n`;
  return { index, chunks };
}

/* The query parameters the recipe directory filters on. Each one is a client-side
   view of /recipes/ or /search/, never a page of its own. */
const FILTER_PARAMS = ['q', 'sort', 'tag', 'time', 'cuisine', 'category', 'difficulty', 'course', 'method', 'swaps'];

/**
 * robots.txt, as one rule set.
 *
 * It used to give Googlebot and Googlebot-Image groups of their own ("Allow: /"),
 * and a crawler obeys only the most specific group that names it, so Google
 * ignored every Disallow written for "*": the filtered directory views were open
 * to it and closed to everyone else. Each filter was also written "?tag=" only,
 * which misses the same parameter after an ampersand ("?cuisine=Thai&tag=Vegan").
 *
 * What it no longer does is list /src/ and /tools/. robots.txt is a request to
 * well-behaved crawlers, not access control, and naming private paths in a public
 * file only points at them. The server refuses those paths instead (.htaccess),
 * and pages that should stay out of the index say noindex, which a crawler can
 * only read if it is allowed to fetch them. tools/robots-check.js holds the
 * outcomes this is meant to produce.
 */
function robots() {
  const filters = FILTER_PARAMS.flatMap(p => [`Disallow: /*?${p}=`, `Disallow: /*&${p}=`]).join('\n');
  const rules = `${filters}
# The contact form's endpoint answers POST only.
Disallow: /contact/send.php`;
  return `# Weekly Delight — ${SITE.origin}${SITE.base}
#
# One group for every crawler, so that no crawler named in a group of its own
# loses these rules. Filtered views of the recipe directory are client-side and
# duplicate the canonical listing.
User-agent: *
${rules}

# The same rules, slower, for two crawlers that fetch a great deal. A crawler
# obeys only its own group, so the rules are repeated rather than inherited.
User-agent: AhrefsBot
User-agent: SemrushBot
Crawl-delay: 10
${rules}

Sitemap: ${SITE.origin}${SITE.base}sitemap-index.xml
`;
}

function manifest() {
  return JSON.stringify({
    name: `Weekly Delight — ${recipeCount} World Recipes`,
    short_name: 'Weekly Delight',
    description: SITE.tagline,
    start_url: SITE.base,
    scope: SITE.base,
    display: 'standalone',
    orientation: 'portrait-primary',
    background_color: '#fbf7f0',
    theme_color: '#b8492c',
    lang: 'en-GB',
    dir: 'ltr',
    categories: ['food', 'lifestyle', 'books'],
    icons: [
      { src: `${SITE.base}assets/img/icon-192.png`, sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: `${SITE.base}assets/img/icon-512.png`, sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: `${SITE.base}assets/img/icon-512.png`, sizes: '512x512', type: 'image/png', purpose: 'maskable' }
    ],
    shortcuts: [
      { name: 'All recipes', url: `${SITE.base}recipes/` },
      { name: 'Saved recipes', url: `${SITE.base}favourites/` },
      { name: 'Search', url: `${SITE.base}search/` }
    ]
  }, null, 2);
}

function feed(recipes) {
  const latest = recipes.slice().sort((a, b) => b.published - a.published).slice(0, 25);
  /* The newest content date among the items, not the moment of the build.
     Stamping the clock here rewrote feed.xml on every run and showed up as an
     uncommitted change after a build that had altered nothing — the same fault
     the sitemap's lastmod had, and the same fix: see ./lib/content-dates.js. */
  const lastChanged = latest.reduce(
    (newest, r) => (r.dateModified > newest ? r.dateModified : newest),
    latest[0].dateModified);
  const items = latest.map(r => `    <item>
      <title>${esc(r.title)}</title>
      <link>${SITE.origin}${SITE.base}recipes/${r.slug}/</link>
      <guid isPermaLink="true">${SITE.origin}${SITE.base}recipes/${r.slug}/</guid>
      <pubDate>${new Date(r.published).toUTCString()}</pubDate>
      <category>${esc(r.category)}</category>
      <description>${esc(r.meta)}</description>
    </item>`).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(SITE.name)}</title>
    <link>${SITE.origin}${SITE.base}</link>
    <description>${esc(SITE.tagline)}</description>
    <language>en-gb</language>
    <lastBuildDate>${new Date(lastChanged).toUTCString()}</lastBuildDate>
    <atom:link href="${SITE.origin}${SITE.base}feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>\n`;
}

/**
 * pinterest-feed.xml — every recipe with a real photograph or illustration,
 * as RSS 2.0 with the content and media namespace extensions Pinterest's
 * RSS auto-publish feature reads.
 *
 * This was asked for as a PHP script pulling from a database on
 * `ORDER BY created_at DESC`. Neither exists here — the site is a
 * dependency-free static generator (see the file header above) and every
 * recipe lives in src/data/*, not a table with a created_at column — and
 * PHP would not execute on this deployment at all, so a feed.php would ship
 * as either a 404 or, worse, the raw source served as plain text. Built
 * instead the way every other machine-readable file on this site is: at
 * build time, from the same recipe objects feed() above already uses, which
 * is also what "match the existing code structure" was asked for.
 *
 * Kept separate from feed.xml rather than replacing it. feed.xml is a
 * general subscription feed and stays capped at the 25 most recent recipes,
 * which is the normal shape for something a reader subscribes to. Pinterest
 * auto-publish is a different job — walking a backlog and pinning what it
 * has not seen yet — and the request was explicit that it should cover all
 * published recipes, not just what is new, so this is every recipe rather
 * than a recent slice.
 *
 * One filter: a recipe with no real photograph or illustration is left out.
 * Pinterest pins an image — that is the entire product — and a <media:content>
 * pointing at a file that does not exist would not quietly do nothing, it
 * would be a broken pin. recipeSchema() above already declines to publish
 * Recipe.image for exactly this reason; this is the same rule for the same
 * reason. 77 of 1,409 recipes have no photograph yet (see README, "Where the
 * photographs ran out"), so this feed carries 1,332 items, not 1,409 — a
 * true count rather than the one asked for.
 */
function pinterestFeed(recipes) {
  const withImage = recipes
    .filter(r => r.imageData)
    .slice()
    .sort((a, b) => b.published - a.published);

  const lastChanged = withImage.reduce(
    (newest, r) => (r.dateModified > newest ? r.dateModified : newest),
    withImage[0].dateModified);

  /* content:encoded is meant to be the fuller version of the item — the
     description above is the short summary already used elsewhere, this is
     the why-it-works paragraph and the chef's tips as simple HTML, built
     from fields the recipe already carries rather than written new for this
     feed. Nothing here is content the page does not already publish. */
  const encoded = r => {
    const tips = (r.tips || []).length
      ? `<ul>${r.tips.map(t => `<li>${esc(t)}</li>`).join('')}</ul>` : '';
    return `<p>${esc(r.why)}</p>${tips}`;
  };

  const items = withImage.map(r => {
    const url = `${SITE.origin}${SITE.base}recipes/${r.slug}/`;
    const imageUrl = `${SITE.origin}${SITE.base}assets/img/recipes/${r.imageData.file}.jpg`;
    return `    <item>
      <title>${esc(r.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(r.published).toUTCString()}</pubDate>
      <category>${esc(r.category)}</category>
      <description>${esc(r.meta)}</description>
      <media:content url="${esc(imageUrl)}" medium="image" type="image/jpeg" width="${r.imageData.w}" height="${r.imageData.h}"/>
      <content:encoded><![CDATA[${encoded(r)}]]></content:encoded>
    </item>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>${esc(SITE.name)}</title>
    <link>${SITE.origin}${SITE.base}</link>
    <description>${esc(SITE.tagline)} — every recipe with a photograph, for Pinterest.</description>
    <language>en-gb</language>
    <lastBuildDate>${new Date(lastChanged).toUTCString()}</lastBuildDate>
    <atom:link href="${SITE.origin}${SITE.base}pinterest-feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>\n`;
}

/* ------------------------------------------------------------------ main */
function build() {
  const started = Date.now();
  const recipes = loadRecipes();
  const ctx = buildContext(recipes);
  const rw = recipes.rewrites;
  if (rw.applied || rw.stale.length || rw.unknown.length) {
    console.log(`Rewrites: ${rw.applied} applied`
      + (rw.stale.length ? `, ${rw.stale.length} ignored because the original text changed since (${rw.stale.slice(0, 3).join(', ')}${rw.stale.length > 3 ? ', …' : ''})` : '')
      + (rw.unknown.length ? `, ${rw.unknown.length} for recipes that no longer exist` : ''));
  }

  /* The curated collections and the weekly plan are checked against the recipes
     they name before anything is written: a recipe that has drifted out of its
     collection's criteria fails the build (src/lib/collections.js). */
  const curated = resolveCollections(recipes);
  if (curated.problems.length) {
    throw new Error(`Collections no longer match their recipes:\n  ${curated.problems.join('\n  ')}`);
  }
  ctx.curated = curated;
  /* Which guides each recipe links to, and which recipes each guide links back to. */
  ctx.guideExamples = Object.fromEntries(GUIDES.map(g => [g.slug, g.examples(recipes)]));
  for (const r of recipes) r.guides = GUIDES.filter(g => g.appliesTo(r) || ctx.guideExamples[g.slug].includes(r)).slice(0, 2);

  cleanOutput();
  mkdir(OUT);

  /* Static assets ------------------------------------------------------ */
  copyDir(path.join(SRC, 'assets'), path.join(OUT, 'assets'));

  /* Pages -------------------------------------------------------------- */
  writePage('index.html', pages.home(ctx));

  writePage('recipes/index.html', pages.directory(ctx, {
    mode: 'all',
    title: 'All Recipes',
    heading: `All ${recipes.length} recipes`,
    eyebrow: 'The full directory',
    intro: 'Every recipe on Weekly Delight, filterable by category, cuisine, dietary need, difficulty and total time. Listed in a suggested order, which the sort menu changes.',
    description: `Browse all ${recipes.length} recipes on Weekly Delight. Filter by cuisine, category, dietary needs, difficulty and total cooking time. Free, with no sign-up.`,
    keywords: ['all recipes', 'recipe directory', 'browse recipes', 'recipe filter',
               'recipe index', 'full recipe list', 'browse by cuisine', 'browse by category',
               'filter recipes by diet', 'vegetarian recipes', 'vegan recipes',
               'gluten free recipes', 'quick recipes', 'easy recipes', 'dinner ideas',
               'what to cook tonight', 'recipes with photos',
               'sort recipes by cooking time', 'find a recipe'],
    path: 'recipes/',
    trail: [{ name: 'Recipes' }],
    seed: recipes.slice().sort((a, b) => b.popularity - a.popularity).slice(0, 24)
  }));

  writePage('site-directory/index.html', pages.siteDirectory(ctx));
  writePage('search/index.html', pages.directory(ctx, {
    mode: 'search',
    title: 'Search Recipes',
    heading: 'Search Weekly Delight',
    eyebrow: 'Find a recipe',
    intro: 'Search by dish, ingredient, cuisine or technique. Results update as you type and can be narrowed with the filters.',
    description: `Search ${recipes.length} recipes by dish, ingredient, cuisine or technique. Instant results with filters for time, difficulty and diet. No sign-up needed.`,
    keywords: ['recipe search', 'find recipes by ingredient', 'search recipes',
               'search by ingredient', 'what can i cook with', 'recipe finder',
               'ingredient search', 'leftover ingredient recipes', 'cook with what i have',
               'find recipes by name', 'search recipes by cuisine', 'recipe lookup',
               'search by cuisine', 'search by category', 'search by cooking time',
               'quick recipe search', 'filter recipes by diet', 'vegetarian recipe search',
               'vegan recipe search', 'gluten free recipe search', 'find a dish by name',
               'recipe database', 'browse all recipes', 'instant recipe search'],
    path: 'search/',
    active: 'search',
    noindex: true,
    index: false,
    trail: [{ name: 'Search' }]
  }));

  writePage('favourites/index.html', pages.directory(ctx, {
    mode: 'favourites',
    title: 'Saved Recipes',
    heading: 'Your saved recipes',
    eyebrow: 'Favourites',
    intro: 'Everything you have hearted, stored in this browser only. No account, no sync, no tracking.',
    description: 'Your saved Weekly Delight recipes, stored locally in your browser.',
    path: 'favourites/',
    active: 'favourites',
    noindex: true,
    index: false,
    trail: [{ name: 'Saved recipes' }]
  }));

  writePage('categories/index.html', pages.categoriesIndex(ctx));
  /* Ingredient hubs ---------------------------------------------------- */
  /* Built here rather than in buildContext so the failure is loud: a hub whose
     contents contradict a recipe's own diet tag is a data bug, and shipping the
     page would put a vegan dish under Chicken. */
  const { hubs, conflicts } = buildHubs(recipes);
  if (conflicts.length) {
    throw new Error(`Ingredient hub conflicts:\n  ${conflicts.join('\n  ')}`);
  }
  ctx.hubs = hubs;
  writePage('ingredients/index.html', pages.ingredientsIndex(ctx));
  for (const hub of hubs) {
    writePage(`ingredients/${hub.slug}/index.html`, pages.taxonomyPage(ctx, {
      recipes: hub.recipes,
      title: `${hub.name} Recipes`,
      titleHooks: [`— ${hub.recipes.length} Ways`],
      heading: `${hub.name} recipes`,
      eyebrow: 'Ingredient',
      intro: `${hub.blurb} ${plural(hub.recipes.length, 'recipe')} on the site call for ${hub.name.toLowerCase()}.`,
      guide: hubParagraphs(`ingredients/${hub.slug}/`, hub.recipes, { kind: 'ingredient', name: hub.name }),
      description: enrichDescription(hubDescription(hub), TAIL_CLAUSES),
      keywords: keywordsForIngredient(hub),
      path: `ingredients/${hub.slug}/`,
      active: 'ingredients',
      newsId: `ing-${hub.slug}-news`,
      trail: [{ name: 'Ingredients', url: `${SITE.base}ingredients/` }, { name: hub.name }]
    }));
  }

  writePage('cuisines/index.html', pages.cuisinesIndex(ctx));

  /* Collections, the weekly plan and the reader's own plan ------------- */
  writePage('collections/index.html', collectionPages.collectionsIndex(ctx, curated.collections, curated.plan));
  for (const c of curated.collections) {
    writePage(`collections/${c.slug}/index.html`, collectionPages.collectionPage(ctx, c, curated.collections, curated.sources));
  }
  writePage('weekly-plan/index.html', collectionPages.weeklyPlanPage(ctx, curated.plan));
  writePage('my-plan/index.html', collectionPages.myPlanPage(ctx));

  /* Reader feedback: the report page and the PHP endpoints it posts to.
     The endpoints' settings live outside the public directory (src/server/feedback/_lib.php). */
  writePage('report/index.html', feedbackPages.reportPage(ctx));
  fs.mkdirSync(path.join(OUT, 'feedback'), { recursive: true });
  for (const f of fs.readdirSync(path.join(SRC, 'server', 'feedback'))) {
    if (f.endsWith('.php')) fs.copyFileSync(path.join(SRC, 'server', 'feedback', f), path.join(OUT, 'feedback', f));
  }

  /* Guides --------------------------------------------------------------- */
  writePage('guides/index.html', guidePages.guidesIndex(ctx, GUIDES));
  for (const g of GUIDES) writePage(`guides/${g.slug}/index.html`, guidePages.guidePage(ctx, g, GUIDES, ctx.guideExamples[g.slug]));
  writePage('about/index.html', pages.about(ctx));
  writePage('privacy/index.html', pages.privacy(ctx));
  writePage('contact/index.html', pages.contact(ctx));
  /* Templates for the endpoint's own result pages, not public pages: the server
     refuses to serve contact/_pages/ (.htaccess), so "Message sent" can only be
     reached through the endpoint's signed redirect. */
  writePage('contact/_pages/sent.html', pages.contactSentPage(ctx));
  writePage('contact/_pages/not-sent.html', pages.contactNotSentPage(ctx));
  /* The form's endpoint, the one server-side file on the site. Its settings,
     including where messages go, live outside the public directory. */
  fs.copyFileSync(path.join(SRC, 'server', 'contact-send.php'), path.join(OUT, 'contact', 'send.php'));
  writePage('404.html', pages.notFound(ctx));

  const subHubs = recipes.subcategoryHubs;

  /* Category landing pages --------------------------------------------- */
  for (const name of Object.keys(CATEGORIES)) {
    const list = recipes.filter(r => r.category === name).sort((a, b) => b.popularity - a.popularity);
    writePage(`categories/${slug(name)}/index.html`, pages.taxonomyPage(ctx, {
      recipes: list,
      title: `${categoryNoun(name)} Recipes`,
      titleHooks: [`— ${list.length} Dishes`],
      heading: `${name} recipes`,
      eyebrow: 'Category',
      intro: `${CATEGORIES[name]} ${plural(list.length, 'recipe')}, in a suggested order.`,
      guide: hubParagraphs(`categories/${slug(name)}/`, list, { kind: 'category', name }),
      primaryRoles: PRIMARY_ROLES[name],
      primaryHeading: PRIMARY_HEADING[name],
      categoryName: name,
      routes: name === 'Dinner' ? pages.dinnerRoutes(ctx) : '',
      description: categoryDescription(name, list.length),
      keywords: keywordsForCategory(name, list),
      path: `categories/${slug(name)}/`,
      active: 'categories',
      newsId: `cat-${slug(name)}-news`,
      extra: pages.hubLinks({
        id: `cat-${slug(name)}-sub`,
        heading: `${name} recipes by cuisine`,
        links: subHubs.filter(h => h.category === name).map(h => ({
          url: `${SITE.base}${h.path}`, text: h.anchor, count: h.recipes.length }))
      }),
      trail: [{ name: 'Categories', url: `${SITE.base}categories/` }, { name }]
    }));
  }

  /* Subcategory landing pages: one cuisine within one category ---------- */
  for (const hub of subHubs) {
    const siblings = subHubs.filter(h => h.category === hub.category && h !== hub).slice(0, 12);
    const noun = categoryNoun(hub.category);
    writePage(`${hub.path}index.html`, pages.taxonomyPage(ctx, {
      recipes: hub.recipes,
      title: `${hub.cuisine} ${noun} Recipes`,
      titleHooks: [`— ${hub.recipes.length} Dishes`],
      heading: `${hub.cuisine} ${noun.toLowerCase()} recipes`,
      eyebrow: `${hub.category} · ${hub.cuisine}`,
      intro: `${plural(hub.recipes.length, hub.cuisine + ' ' + noun.toLowerCase() + ' recipe')}, in a suggested order.`,
      guide: hubParagraphs(hub.path, hub.recipes, { kind: 'combo', category: hub.category, cuisine: hub.cuisine,
        categoryTotal: recipes.filter(r => r.category === hub.category).length,
        cuisineTotal: recipes.filter(r => r.cuisine === hub.cuisine).length }),
      primaryRoles: PRIMARY_ROLES[hub.category],
      primaryHeading: `${hub.cuisine} ${PRIMARY_HEADING[hub.category].toLowerCase()}`,
      categoryName: hub.category,
      description: enrichDescription(
        `${plural(hub.recipes.length, hub.cuisine + ' ' + noun.toLowerCase() + ' recipe')} on Weekly Delight.`,
        [`${CATEGORIES[hub.category]}`, ...TAIL_CLAUSES]),
      keywords: keywordsForCategory(hub.category, hub.recipes).map(k => `${hub.cuisine.toLowerCase()} ${k}`),
      path: hub.path,
      active: 'categories',
      newsId: `sub-${slug(hub.category)}-${hub.slug}-news`,
      extra: pages.hubLinks({
        id: `sub-${slug(hub.category)}-${hub.slug}-more`,
        heading: `More ${hub.category.toLowerCase()} and ${hub.cuisine} recipes`,
        links: [
          { url: `${SITE.base}categories/${slug(hub.category)}/`, text: `All ${hub.category.toLowerCase()} recipes` },
          { url: `${SITE.base}cuisines/${hub.slug}/`, text: `All ${hub.cuisine} recipes` }
        ].concat(siblings.map(h => ({ url: `${SITE.base}${h.path}`, text: h.anchor, count: h.recipes.length })))
      }),
      trail: [
        { name: 'Categories', url: `${SITE.base}categories/` },
        { name: hub.category, url: `${SITE.base}categories/${slug(hub.category)}/` },
        { name: hub.name }
      ]
    }));
  }

  /* Cuisine landing pages ---------------------------------------------- */
  for (const name of ctx.topCuisines) {
    const list = recipes.filter(r => r.cuisine === name).sort((a, b) => b.popularity - a.popularity);
    const meta = CUISINES[name] || { flag: '', blurb: '' };
    writePage(`cuisines/${slug(name)}/index.html`, pages.taxonomyPage(ctx, {
      recipes: list,
      title: `${name} Recipes`,
      titleHooks: [`— ${list.length} Dishes`],
      heading: `${name} recipes`,
      eyebrow: `${meta.flag} Cuisine`,
      intro: `${meta.blurb} ${plural(list.length, name + ' recipe')}, from the everyday to the ambitious.`,
      guide: hubParagraphs(`cuisines/${slug(name)}/`, list, { kind: 'cuisine', name }),
      description: enrichDescription(
        `${plural(list.length, name + ' recipe')} on Weekly Delight. ${meta.blurb}`,
        [`Authentic ${name} cooking explained step by step.`,
         'With timings and make-ahead notes.', ...TAIL_CLAUSES]),
      keywords: keywordsForCuisine(name, list),
      path: `cuisines/${slug(name)}/`,
      active: 'cuisines',
      /* A cuisine with fewer recipes than a sub-category hub needs is a thin
         page that only repeats its recipes' cards, so it stays for readers
         but asks not to be indexed, and the sitemap leaves it out. */
      noindex: list.length < SUBCATEGORY_MIN,
      newsId: `cui-${slug(name)}-news`,
      extra: pages.hubLinks({
        id: `cui-${slug(name)}-sub`,
        heading: `${name} recipes by category`,
        links: subHubs.filter(h => h.cuisine === name).map(h => ({
          url: `${SITE.base}${h.path}`, text: h.anchor, count: h.recipes.length }))
      }),
      trail: [{ name: 'Cuisines', url: `${SITE.base}cuisines/` }, { name }]
    }));
  }

  /* Recipe pages -------------------------------------------------------- */
  for (const recipe of recipes) {
    writePage(`recipes/${recipe.slug}/index.html`, recipePage.render(recipe, ctx));
  }

  /* Data + plumbing ----------------------------------------------------- */
  fs.writeFileSync(path.join(OUT, 'search-index.json'), JSON.stringify(searchIndex(recipes)));
  const sitemaps = sitemap(recipes, ctx);
  fs.writeFileSync(path.join(OUT, 'sitemap-index.xml'), sitemaps.index);
  /* sitemap.xml was the address submitted to Search Console before the split.
     It stays, as the same index, so that submission keeps working. */
  fs.writeFileSync(path.join(OUT, 'sitemap.xml'), sitemaps.index);
  for (const chunk of sitemaps.chunks) fs.writeFileSync(path.join(OUT, chunk.name), chunk.xml);
  fs.writeFileSync(path.join(OUT, 'robots.txt'), robots());
  /* IAB ads.txt: who may sell this site's ad inventory. Lines live in src/data/ads.js. */
  fs.writeFileSync(path.join(OUT, 'ads.txt'), require('./data/ads').adsTxt.join('\n') + '\n');
  fs.writeFileSync(path.join(OUT, 'manifest.json'), manifest());
  fs.writeFileSync(path.join(OUT, 'feed.xml'), feed(recipes));
  fs.writeFileSync(path.join(OUT, 'pinterest-feed.xml'), pinterestFeed(recipes));
  /* Netlify's file format. The host rules live in .htaccess (the live host),
     netlify.toml and vercel.json as well, so that a move between them cannot
     drop the one rule that stops every page existing at two URLs. Order
     matters here: the catch-all has to come last or nothing after it fires. */
  fs.writeFileSync(path.join(OUT, '_redirects'),
    `https://www.weeklydelight.com/*  https://weeklydelight.com/:splat  301!\n`
    + retiredRecipes(recipes).map(r => `/recipes/${r.from}/  /recipes/${r.to}/  301!\n`).join('')
    + RETIRED_HUBS.map(h => `/${h.from}  /${h.to}  301!\n`).join('')
    + '/*  /404.html  404\n');

  /* Written after the sitemap, which is what asks for the dates. Committed, so
     the next build on any machine agrees about what changed and when. */
  const dateChanges = ctx.dates.save();
  ctx.publishedDates.save();

  /* The one-slot document that repeat native banner placements are framed
     from. Written only when there is a unit to put in it. */
  const frameHtml = ads.frameDocument(SITE.base);
  if (frameHtml) {
    const framePath = path.join(OUT, ads.FRAME_PATH);
    fs.mkdirSync(path.dirname(framePath), { recursive: true });
    fs.writeFileSync(framePath, frameHtml);
  }

  /* The one-slot document the 300x250 banner is framed from, for the same
     reason and written the same way. */
  const bannerHtml = ads.bannerDocument();
  if (bannerHtml) {
    const bannerPath = path.join(OUT, ads.BANNER_PATH);
    fs.mkdirSync(path.dirname(bannerPath), { recursive: true });
    fs.writeFileSync(bannerPath, bannerHtml);
  }

  /* The 320x50 banner's own one-slot document: a separate file because its
     atOptions would otherwise overwrite the 300x250 unit's settings. */
  const bannerSmallHtml = ads.bannerDocument(require('./data/ads').bannerSmall);
  if (bannerSmallHtml) {
    const bannerSmallPath = path.join(OUT, ads.BANNER_SMALL_PATH);
    fs.mkdirSync(path.dirname(bannerSmallPath), { recursive: true });
    fs.writeFileSync(bannerSmallPath, bannerSmallHtml);
  }

  /* Report --------------------------------------------------------------- */
  /* Walk only what we generated: at the repo root the tree also contains
     src/, tools/ and node_modules/. */
  const files = [];
  (function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else files.push(full);
    }
  });
  for (const name of GENERATED_FILES) {
    const f = path.join(OUT, name);
    if (fs.existsSync(f)) files.push(f);
  }
  for (const name of GENERATED_DIRS) {
    const dir = path.join(OUT, name);
    if (!fs.existsSync(dir)) continue;
    (function collect(d) {
      for (const entry of fs.readdirSync(d, { withFileTypes: true })) {
        const full = path.join(d, entry.name);
        if (entry.isDirectory()) collect(full);
        else files.push(full);
      }
    })(dir);
  }

  const html = files.filter(f => f.endsWith('.html'));
  const bytes = files.reduce((total, f) => total + fs.statSync(f).size, 0);
  /* Counted apart, because they are not the same thing and this line is the
     first number anyone reads after a build. Folding the drawings in would
     have reported "1,069 with photography" on 1,035 photographs. */
  const { isIllustration } = require('./lib/util');
  const withPhotos = recipes.filter(r => r.imageData && !isIllustration(r.imageData)).length;
  const withDrawings = recipes.filter(r => r.imageData && isIllustration(r.imageData)).length;
  const withImages = withPhotos + withDrawings;

  console.log(`Weekly Delight build complete in ${Date.now() - started}ms`);
  console.log(`  recipes      ${recipes.length} (${withPhotos} photographed`
    + `${withDrawings ? `, ${withDrawings} illustrated` : ''}`
    + `, ${recipes.length - withImages} using gradient placeholders)`);
  console.log(`  html pages   ${html.length}`);
  console.log(`  total files  ${files.length}`);
  console.log(`  output size  ${(bytes / 1024 / 1024).toFixed(1)} MB`);
  console.log(`  origin       ${SITE.origin}${SITE.base}`);
  if (dateChanges.added || dateChanges.changed || dateChanges.removed) {
    console.log(`  lastmod      ${dateChanges.added} new, ${dateChanges.changed} changed, `
      + `${dateChanges.removed} removed`);
  }
}

if (require.main === module) {
  try {
    build();
  } catch (error) {
    console.error('Build failed:', error.message);
    process.exit(1);
  }
}

module.exports = { build, loadRecipes, buildContext, searchIndex, categoryDescription, hubDescription };
