'use strict';
/**
 * Country recipe batches: the records in recipes_data/, the rules they must
 * pass, and the pages, hubs, sitemaps and metadata index made from them.
 *
 * This module is shared on purpose. scripts/build_recipe_batch.js uses it to
 * validate and preview a batch, and src/build.js uses it to render every
 * published batch on every build. The build has to, because it deletes the
 * recipes/ folder before it writes anything: a page written by a separate
 * script alone would be gone the next time the site deployed.
 *
 * Nothing here writes copy. A record is authored data; this file lays it out,
 * checks it, and refuses to publish a record that is not real content.
 */

const fs = require('fs');
const path = require('path');
const { esc, jsonLd, humanTime, slugify } = require('./util');
const { SITE, ICONS, layout, breadcrumbs, breadcrumbSchema } = require('../templates/layout');
const { faqSchema } = require('./faq');

/* ------------------------------------------------------------- constants */

/* country_name is the name the title tag carries: "Marry Me Chicken - Easy &
   Best United States Recipe". cuisine is the adjective recipeCuisine takes. */
const COUNTRIES = {
  us: { name: 'United States', cuisine: 'American' },
  uk: { name: 'United Kingdom', cuisine: 'British' },
  ca: { name: 'Canada', cuisine: 'Canadian' },
  au: { name: 'Australia', cuisine: 'Australian' },
  nz: { name: 'New Zealand', cuisine: 'New Zealand' }
};
const BATCH_NUMBERS = [1, 2, 3, 4];
const BATCH_SIZE = 400;

/* recipes/us, recipes/uk ... and recipes/category are folders the engine owns.
   A catalogue recipe with one of these as its slug would collide with them. */
const RESERVED_SLUGS = new Set([...Object.keys(COUNTRIES), 'category']);

/* A hub with one or two links on it is a thin page. It is still built, because
   every recipe links to its hubs and a link must not 404, but it is noindex and
   left out of the sitemap until it lists enough to be worth a result. */
const MIN_INDEXABLE_HUB = 3;

/* Visible words a recipe must carry. The catalogue's own audit uses 400; these
   pages are the long-form kind, and a page under this is a stub. */
const MIN_WORDS = 650;

const DESC_MIN = 150;
const DESC_MAX = 160;

/* Stock phrasing, and the placeholder strings that the hydration script in the
   uploaded index writes into every record it generates. A record containing
   any of these is a shell, not a recipe. */
const PLACEHOLDERS = [
  /top searched/i, /key regional/i, /aromatic spices and seasoning/i,
  /fresh herbs or secondary/i, /regional sauce or broth/i, /cooking oil or butter base/i,
  /standard prep instructions/i, /required temperature/i, /prepare all ingredients according/i,
  /combine base ingredients/i, /lorem ipsum/i, /\bplaceholder\b/i, /\bTODO\b/, /\bTBD\b/,
  /\bsample recipe\b/i
];
const FLUFF = [
  'game changer', 'game-changer', 'to die for', 'melt in your mouth', 'look no further',
  'elevate your', 'culinary journey', "you won't believe", 'mouthwatering', 'tantalizing',
  'foodie', 'crowd-pleaser', 'the whole family will love', 'next level', 'delish', 'yummy'
];

const QUANTITY = /\d|[½¼¾⅓⅔]|\b(?:pinch|dash|handful|splash|drizzle|to taste|to serve|for serving|as needed|optional)\b/i;

const STOP = new Set(['a', 'an', 'the', 'of', 'and', 'or', 'for', 'with', 'without', 'in', 'on', 'to',
  'how', 'can', 'you', 'i', 'my', 'your', 'is', 'it', 'do', 'does', 'what', 'why', 'me', 'at', 'from']);

/* Words that describe how a dish is sold rather than what it is. Stripped
   before comparing a title with the catalogue, so "Classic Banana Bread" and
   "One-Bowl Banana Bread" meet on banana and bread. Method words such as "air
   fryer", "slow cooker" and "baked" are deliberately not here: they are what
   separates one search query from another, so "Air Fryer Chicken Breast" and
   "Baked Chicken Breast" are different pages, not the same one twice. */
const FILLER = new Set(['classic', 'easy', 'best', 'homemade', 'creamy', 'crispy', 'fluffy',
  'traditional', 'authentic', 'quick', 'simple', 'ultimate', 'perfect', 'one', 'bowl', 'recipe', 'style']);

/* -------------------------------------------------------------- helpers */

const abs = rel => `${SITE.origin}${SITE.base}${rel}`;
const words = s => String(s || '').trim().split(/\s+/).filter(Boolean).length;

function isoMinutes(value) {
  const m = /^PT(?:(\d+)H)?(?:(\d+)M)?$/.exec(String(value || ''));
  if (!m || (m[1] === undefined && m[2] === undefined)) return null;
  return (parseInt(m[1] || '0', 10) * 60) + parseInt(m[2] || '0', 10);
}

function stem(token) {
  return token.length > 3 && token.endsWith('s') && !token.endsWith('ss') ? token.slice(0, -1) : token;
}

function tokens(text, { drop = STOP } = {}) {
  return String(text || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
    .split(/[^a-z0-9]+/).filter(t => t && !drop.has(t)).map(stem);
}

function servingsOf(rec) {
  const m = /^(\d+)\s+\S/.exec(String(rec.yield || ''));
  return m ? parseInt(m[1], 10) : null;
}

function pathFor(kind, rec, categorySlug) {
  if (kind === 'recipe') return `recipes/${rec.country}/${rec.slug}/`;
  if (kind === 'country') return `recipes/${rec}/`;
  return `recipes/category/${categorySlug}/`;
}

/** Every sentence a reader sees, in page order. Word counts and the keyword
    check both read this, so neither can disagree with the page. */
function textParts(rec) {
  const v = rec.variations || {};
  const d = v.diet || {};
  return [
    rec.title, rec.description, ...(rec.intro || []),
    ...(rec.key_ingredients || []).flatMap(k => [k.name, k.role]),
    ...(rec.ingredients || []), ...(rec.instructions || []), ...(rec.pro_tips || []),
    ...(rec.substitutions || []), v.air_fryer, v.slow_cooker, d.low_carb, d.gluten_free, d.vegan,
    rec.storage_tips, rec.category,
    ...(rec.faqs || []).flatMap(f => [f.question, f.answer])
  ].filter(Boolean).map(String);
}

const visibleWords = rec => words(textParts(rec).join(' '));

/* ------------------------------------------------------------ validation */

/**
 * Structural and honesty checks for one record. Returns a list of problems;
 * an empty list means the record can be published.
 *
 * The checks are the ones the catalogue's own audits apply to its recipes —
 * nutrition against the Atwater factors, times against each other, keywords
 * against the page — plus the ones only mass-produced content needs: refusing
 * placeholder text, and refusing a record whose method is another record's.
 */
function validateRecord(rec, cc, batchNo) {
  const errors = [];
  const bad = msg => errors.push(msg);
  const str = (v, min = 1) => typeof v === 'string' && v.trim().length >= min;
  const list = (v, min) => Array.isArray(v) && v.length >= min && v.every(x => str(x));

  if (!/^[a-z]{2}-\d{4}$/.test(rec.id || '')) bad('id must look like us-0001');
  else if (rec.id.slice(0, 2) !== cc) bad(`id prefix "${rec.id.slice(0, 2)}" does not match country "${cc}"`);
  if (rec.country !== cc) bad(`country "${rec.country}" does not match its file "${cc}"`);
  if (rec.batch !== batchNo) bad(`batch ${rec.batch} does not match the batch_${batchNo} key it sits under`);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(rec.slug || '') || (rec.slug || '').length > 80) bad('slug must be lowercase words joined by hyphens, at most 80 characters');
  if (!str(rec.title, 3) || rec.title.length > 70) bad('title must be 3 to 70 characters');
  if (!str(rec.description, 40) || rec.description.length > 155) bad('description must be 40 to 155 characters, so it can carry the clauses that bring the meta description to 150-160');
  if (!str(rec.category) || rec.category.length > 40) bad('category is required and at most 40 characters');
  if (!['Easy', 'Medium', 'Hard'].includes(rec.difficulty)) bad('difficulty must be Easy, Medium or Hard');

  const prep = isoMinutes(rec.prep_time), cook = isoMinutes(rec.cook_time);
  const rest = rec.rest_time === undefined ? 0 : isoMinutes(rec.rest_time);
  const total = isoMinutes(rec.total_time);
  if (prep === null || cook === null || total === null || rest === null) bad('prep_time, cook_time, total_time (and rest_time if present) must be ISO 8601 durations such as PT15M or PT1H20M');
  else if (prep + cook + rest !== total) bad(`total_time is ${total} min but prep ${prep} + cook ${cook} + rest ${rest} is ${prep + cook + rest}`);
  if (servingsOf(rec) === null) bad('yield must start with a number, such as "6 servings" or "12 muffins"');

  const n = rec.nutrition;
  const fields = ['calories', 'protein_g', 'carbs_g', 'fat_g', 'fibre_g', 'sugar_g', 'sodium_mg'];
  if (!n || fields.some(f => typeof n[f] !== 'number' || n[f] < 0)) bad('nutrition needs numeric calories, protein_g, carbs_g, fat_g, fibre_g, sugar_g and sodium_mg');
  else {
    if (rec.calories !== `${n.calories} kcal`) bad(`calories "${rec.calories}" must equal nutrition.calories as "${n.calories} kcal"`);
    const atwater = 4 * n.protein_g + 4 * n.carbs_g + 9 * n.fat_g;
    const ratio = atwater ? n.calories / atwater : 0;
    if (ratio < 0.92 || ratio > 1.12) bad(`calories ${n.calories} do not match the macros (Atwater gives ${atwater}; ratio ${ratio.toFixed(2)}, allowed 0.92-1.12)`);
    if (n.sugar_g > n.carbs_g) bad('sugar exceeds carbohydrate');
    if (n.fibre_g > n.carbs_g) bad('fibre exceeds carbohydrate');
  }

  if (!str(rec.primary_keyword, 6)) bad('primary_keyword is required');
  else {
    const missing = tokens(rec.primary_keyword).filter(t => t !== 'recipe' && !tokens(rec.title).includes(t));
    if (missing.length) bad(`the title does not contain the primary keyword (missing: ${missing.join(', ')})`);
  }
  if (!list(rec.secondary_keywords, 3) || new Set(rec.secondary_keywords).size !== rec.secondary_keywords.length) bad('secondary_keywords needs at least 3 distinct phrases');

  if (!list(rec.intro, 3) || rec.intro.some(p => words(p) < 30)) bad('intro needs 3 paragraphs of at least 30 words each (why it works, origin and method, texture and taste)');
  if (!Array.isArray(rec.key_ingredients) || rec.key_ingredients.length < 3 || rec.key_ingredients.some(k => !str(k && k.name) || words(k && k.role) < 6)) bad('key_ingredients needs at least 3 entries, each with a name and a role of 6+ words');
  if (!list(rec.ingredients, 6)) bad('ingredients needs at least 6 lines');
  else {
    const withQty = rec.ingredients.filter(i => QUANTITY.test(i)).length;
    if (withQty / rec.ingredients.length < 0.75) bad('fewer than three quarters of the ingredient lines carry a quantity');
    if (new Set(rec.ingredients.map(i => i.toLowerCase())).size !== rec.ingredients.length) bad('an ingredient line is repeated');
  }
  if (!list(rec.instructions, 5) || rec.instructions.some(s => words(s) < 8)) bad('instructions needs at least 5 steps of 8+ words each');
  if (!list(rec.pro_tips, 3) || rec.pro_tips.some(s => words(s) < 12)) bad('pro_tips needs at least 3 tips of 12+ words each');
  if (!list(rec.substitutions, 2) || rec.substitutions.some(s => words(s) < 8)) bad('substitutions needs at least 2 entries of 8+ words each');

  const v = rec.variations, d = v && v.diet;
  if (!v || words(v.air_fryer) < 20 || words(v.slow_cooker) < 20) bad('variations.air_fryer and variations.slow_cooker each need 20+ words. Where a method genuinely does not suit the dish, say so and say what to do instead');
  if (!d || ['low_carb', 'gluten_free', 'vegan'].some(k => words(d[k]) < 12)) bad('variations.diet needs low_carb, gluten_free and vegan, each 12+ words');

  const storage = String(rec.storage_tips || '');
  if (words(storage) < 30) bad('storage_tips needs 30+ words');
  else {
    if (!/refrigerat|fridge/i.test(storage)) bad('storage_tips does not say how long it keeps in the fridge');
    if (!/freez/i.test(storage)) bad('storage_tips does not say whether it freezes');
    if (!/reheat/i.test(storage)) bad('storage_tips does not say how to reheat');
  }

  if (!Array.isArray(rec.faqs) || rec.faqs.length < 3 || rec.faqs.length > 4
      || rec.faqs.some(f => !str(f && f.question) || !/\?$/.test(f.question) || words(f.answer) < 15)) bad('faqs needs 3 or 4 questions ending in ?, each with a 15+ word answer');
  else if (new Set(rec.faqs.map(f => f.question.toLowerCase())).size !== rec.faqs.length) bad('a FAQ question is repeated');

  if (rec.rating !== undefined) {
    const r = rec.rating;
    if (!r || typeof r.value !== 'number' || r.value < 1 || r.value > 5 || !Number.isInteger(r.count) || r.count < 1) bad('rating, if present, must be { value: 1-5, count: a whole number of real readers }');
  }

  const all = textParts(rec).join('\n');
  for (const pattern of PLACEHOLDERS) if (pattern.test(all)) bad(`placeholder text found (${pattern}) — this record is a shell, not a recipe`);
  const lower = all.toLowerCase();
  for (const phrase of FLUFF) if (lower.includes(phrase)) bad(`stock phrase "${phrase}"`);

  const wc = visibleWords(rec);
  if (wc < MIN_WORDS) bad(`only ${wc} visible words; a page needs at least ${MIN_WORDS}`);

  /* A keyword the page does not talk about is a claim the page cannot back,
     which is what tools/keyword-audit.js refuses for the catalogue. */
  if (Array.isArray(rec.secondary_keywords)) {
    const corpus = new Set(tokens(textParts(rec).join(' ') + ' recipe'));
    for (const kw of rec.secondary_keywords) {
      const gaps = tokens(kw).filter(t => !corpus.has(t));
      if (gaps.length) bad(`keyword "${kw}" is not supported by the page (never mentions: ${gaps.join(', ')})`);
    }
  }
  return errors;
}

/** The whole-batch rules: uniqueness, and no record whose method is another's. */
function validateBatch(records, cc, batchNo, { others = [] } = {}) {
  const errors = [];
  const push = (rec, msg) => errors.push({ id: (rec && rec.id) || '?', message: msg });
  const seen = { id: new Map(), slug: new Map(), title: new Map() };
  const everything = records.concat(others);

  if (records.length > BATCH_SIZE) errors.push({ id: '-', message: `batch_${batchNo} holds ${records.length} records; the limit is ${BATCH_SIZE}` });

  for (const rec of records) {
    for (const message of validateRecord(rec, cc, batchNo)) push(rec, message);
    for (const key of ['id', 'slug']) {
      const value = rec[key];
      if (seen[key].has(value)) push(rec, `${key} "${value}" is also used by ${seen[key].get(value)}`);
      seen[key].set(value, rec.id);
    }
    const t = tokens(rec.title).join(' ');
    if (seen.title.has(t)) push(rec, `title duplicates ${seen.title.get(t)}`);
    seen.title.set(t, rec.id);
  }

  /* Already-published records in the same country also own their slugs. */
  const owned = new Map(others.filter(o => o.country === cc).map(o => [o.slug, o.id]));
  for (const rec of records) if (owned.has(rec.slug)) push(rec, `slug "${rec.slug}" is already published as ${owned.get(rec.slug)}`);

  /* The check that catches mass production: a method that is mostly another
     record's method word for word. */
  const bySentence = new Map();
  for (const rec of everything) {
    for (const s of new Set((rec.instructions || []).map(x => x.toLowerCase().replace(/\s+/g, ' ').trim()))) {
      if (!bySentence.has(s)) bySentence.set(s, new Set());
      bySentence.get(s).add(rec.id);
    }
  }
  for (const rec of records) {
    const mine = new Set((rec.instructions || []).map(x => x.toLowerCase().replace(/\s+/g, ' ').trim()));
    const shared = new Map();
    for (const s of mine) for (const id of bySentence.get(s) || []) if (id !== rec.id) shared.set(id, (shared.get(id) || 0) + 1);
    for (const [id, count] of shared) if (count / mine.size >= 0.5) push(rec, `${count} of ${mine.size} method steps are copied word for word from ${id}`);
  }
  return errors;
}

/**
 * Records that would compete with a page already on the site. Warnings, not
 * errors: a regional take can be a different page, but two pages chasing one
 * query is a decision for a person, and this is where it gets put in front of
 * them. Compares core words after filler such as "classic" and "easy" is
 * dropped, so it is a heuristic — a hit is worth reading, a miss is not proof.
 */
function overlapWarnings(records, catalogue) {
  const core = title => new Set(tokens(title, { drop: new Set([...STOP, ...FILLER]) }));
  const cat = catalogue.map(r => ({ slug: r.slug, title: r.title, core: core(r.title) }));
  const bySlug = new Map(cat.map(c => [c.slug, c]));
  const out = [];
  for (const rec of records) {
    if (bySlug.has(rec.slug)) { out.push({ id: rec.id, message: `same slug as the existing page /recipes/${rec.slug}/` }); continue; }
    const mine = core(rec.title);
    if (!mine.size) continue;
    let best = null;
    for (const c of cat) {
      if (!c.core.size) continue;
      let shared = 0;
      for (const t of mine) if (c.core.has(t)) shared++;
      /* The same dish is the same core words, or the same words plus or minus
         one ("Pancakes" and "Buttermilk Pancakes"). Sharing most of the words
         is not enough: chicken breast and chicken wings share three of four. */
      const apart = mine.size + c.core.size - 2 * shared;
      if (shared && apart <= 1 && (!best || apart < best.apart)) best = { c, apart };
    }
    if (best) out.push({ id: rec.id, message: `"${rec.title}" overlaps the existing page "${best.c.title}" (/recipes/${best.c.slug}/)` });
  }
  return out;
}

/** The same dish under two countries is two pages saying one thing. */
function crossCountryWarnings(records) {
  const byTitle = new Map();
  const out = [];
  for (const rec of records) {
    const key = tokens(rec.title, { drop: new Set([...STOP, ...FILLER]) }).sort().join(' ');
    if (!key) continue;
    const other = byTitle.get(key);
    if (other && other.country !== rec.country) out.push({ id: rec.id, message: `"${rec.title}" is also published for ${COUNTRIES[other.country].name} as ${other.id}` });
    else byTitle.set(key, rec);
  }
  return out;
}

/* ------------------------------------------------------------ data files */

function dataPath(root, cc) { return path.join(root, 'recipes_data', `${cc}_recipes.json`); }

function readCountry(root, cc) {
  const file = dataPath(root, cc);
  if (!fs.existsSync(file)) throw new Error(`missing ${path.relative(root, file)}`);
  let data;
  try { data = JSON.parse(fs.readFileSync(file, 'utf8')); }
  catch (e) { throw new Error(`${path.relative(root, file)} is not valid JSON: ${e.message}`); }
  return data;
}

function readManifest(root) {
  const file = path.join(root, 'recipes_data', 'published.json');
  if (!fs.existsSync(file)) return { us: [], uk: [], ca: [], au: [], nz: [] };
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

/**
 * Every published record, checked. Throws — with every problem listed — when
 * any of them fails, so a broken record fails the build the way a broken diet
 * tag does, rather than shipping.
 */
function loadLive(root, catalogue) {
  const manifest = readManifest(root);
  const records = [];
  const publishedAt = new Map();
  const problems = [];

  for (const slug of catalogue.map(r => r.slug)) {
    if (RESERVED_SLUGS.has(slug)) problems.push(`the catalogue recipe "${slug}" collides with recipes/${slug}/, which country pages use`);
  }
  for (const cc of Object.keys(COUNTRIES)) {
    for (const entry of manifest[cc] || []) {
      const data = readCountry(root, cc);
      const batch = data[`batch_${entry.batch}`] || [];
      const errors = validateBatch(batch, cc, entry.batch);
      for (const e of errors) problems.push(`${cc} batch ${entry.batch} ${e.id}: ${e.message}`);
      for (const rec of batch) { records.push(rec); publishedAt.set(rec.id, entry.publishedAt); }
    }
  }
  const slugs = new Set();
  for (const rec of records) {
    const key = `${rec.country}/${rec.slug}`;
    if (slugs.has(key)) problems.push(`${key} is published twice`);
    slugs.add(key);
  }
  if (problems.length) throw new Error(`Country recipes failed validation:\n  ${problems.join('\n  ')}`);
  return { manifest, records, publishedAt };
}

/* -------------------------------------------------------------- rendering */

function fitDescription(base, clauses, min, max) {
  let text = String(base).trim();
  const pool = clauses.filter(Boolean);
  while (text.length < min) {
    let best = -1;
    for (let i = 0; i < pool.length; i++) {
      if (text.length + 1 + pool[i].length <= max && (best < 0 || pool[i].length > pool[best].length)) best = i;
    }
    if (best < 0) break;
    text += ` ${pool[best]}`;
    pool.splice(best, 1);
  }
  return text;
}

/** 150-160 characters, built from the record's own facts and nothing else. */
function metaDescription(rec) {
  const minutes = isoMinutes(rec.total_time);
  return fitDescription(rec.description, [
    `Ready in ${humanTime(minutes)}.`,
    `Makes ${rec.yield}.`,
    `${rec.calories} per serving.`,
    'Includes air fryer and slow cooker options.',
    'With substitutions, storage tips and FAQs.',
    'Step-by-step method and pro tips.',
    'Plus freezing and reheating tips.',
    'Full method and pro tips.',
    'Easy step-by-step recipe.',
    'Storage tips included.',
    'With FAQs.',
    'Full method.',
    'Easy recipe.'
  ], DESC_MIN, DESC_MAX);
}

function titleTag(rec) {
  return `${rec.title} - Easy & Best ${COUNTRIES[rec.country].name} Recipe`;
}

function stat(label, value) {
  return `<div><dt style="color:var(--text-soft);font-size:.8rem">${esc(label)}</dt><dd style="margin:0;font-weight:600">${esc(value)}</dd></div>`;
}

function nutritionGrid(n) {
  const cells = [['Calories', n.calories, ''], ['Protein', n.protein_g, ' g'], ['Carbs', n.carbs_g, ' g'],
    ['Fat', n.fat_g, ' g'], ['Fibre', n.fibre_g, ' g'], ['Sugar', n.sugar_g, ' g'], ['Sodium', n.sodium_mg, ' mg']];
  return `<div class="nutrition">${cells.map(([label, value, unit]) =>
    `<div><strong>${esc(value)}${unit}</strong><span>${esc(label)}</span></div>`).join('')}</div>`;
}

function categorySlugOf(rec) { return slugify(rec.category); }

function recipeSchema(rec, url, datePublished, dateModified) {
  const country = COUNTRIES[rec.country];
  const servings = servingsOf(rec);
  const n = rec.nutrition;
  return {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: rec.title,
    ...(rec.image ? { image: [rec.image] } : {}),
    /* The site's own author, as on every catalogue recipe: one real person. */
    author: { '@type': 'Person', name: SITE.author, url: abs('about/') },
    publisher: {
      '@type': 'Organization', name: SITE.name,
      logo: { '@type': 'ImageObject', url: abs('assets/img/icon-192.png') }
    },
    datePublished, dateModified,
    description: rec.description,
    prepTime: rec.prep_time,
    cookTime: rec.cook_time,
    totalTime: rec.total_time,
    recipeYield: [String(servings), rec.yield],
    recipeCategory: rec.category,
    recipeCuisine: country.cuisine,
    keywords: [rec.primary_keyword, ...rec.secondary_keywords].join(', '),
    /* schema.org has no top-level calories on a Recipe; it lives here. */
    nutrition: {
      '@type': 'NutritionInformation',
      servingSize: '1 serving',
      calories: `${n.calories} calories`,
      proteinContent: `${n.protein_g} g`,
      carbohydrateContent: `${n.carbs_g} g`,
      fatContent: `${n.fat_g} g`,
      fiberContent: `${n.fibre_g} g`,
      sugarContent: `${n.sugar_g} g`,
      sodiumContent: `${n.sodium_mg} mg`
    },
    recipeIngredient: rec.ingredients,
    recipeInstructions: rec.instructions.map((text, i) => ({
      '@type': 'HowToStep', position: i + 1, name: `Step ${i + 1}`, text, url: `${url}#step-${i + 1}`
    })),
    /* A rating is published only when the record carries one from real
       readers. It is never invented to make the markup look complete: Google
       asks that rating markup describe genuine reviews, and this site's own
       audit refuses a rating with no reader behind it. */
    ...(rec.rating ? { aggregateRating: { '@type': 'AggregateRating', ratingValue: rec.rating.value, ratingCount: rec.rating.count, bestRating: 5, worstRating: 1 } } : {}),
    mainEntityOfPage: { '@type': 'WebPage', '@id': url }
  };
}

function related(rec, records) {
  const rank = r => (r.category === rec.category ? 0 : 2) + (r.country === rec.country ? 0 : 1);
  return records.filter(r => r.id !== rec.id).sort((a, b) => rank(a) - rank(b) || a.id.localeCompare(b.id)).slice(0, 4);
}

function renderRecipe(rec, env) {
  const country = COUNTRIES[rec.country];
  const rel = pathFor('recipe', rec);
  const url = abs(rel);
  const catSlug = categorySlugOf(rec);
  const hubRel = pathFor('country', rec.country);
  const catRel = pathFor('category', null, catSlug);
  const modified = env.dates.dateFor(`/${rel}`, rec);
  const published = env.publishedAt.get(rec.id) || modified;
  const v = rec.variations;
  const meta = metaDescription(rec);
  const faq = rec.faqs.map(f => ({ q: f.question, a: f.answer }));
  const trail = [
    { name: 'Home', url: SITE.base },
    { name: 'Recipes', url: `${SITE.base}recipes/` },
    { name: `${country.name} recipes`, url: `${SITE.base}${hubRel}` },
    { name: rec.title }
  ];

  const sibling = related(rec, env.records);
  const body = `
${breadcrumbs(trail)}
<div class="wrap">
  <article class="country-recipe" data-recipe-id="${esc(rec.id)}" style="max-width:860px;margin:0 auto">
    <header class="recipe-head" style="padding-top:1rem">
      <span class="eyebrow">${esc(country.name)} &middot; ${esc(rec.category)}</span>
      <h1>${esc(rec.title)}</h1>
      <p class="lede">${esc(rec.description)}</p>
      <div class="action-bar">
        <a class="btn btn--primary jump-to-recipe-btn" href="#recipe-card">${ICONS.jump} Jump to Recipe</a>
        <button class="btn btn--ghost" type="button" data-print>${ICONS.print} Print</button>
      </div>
      <div class="panel" style="margin-top:1.25rem">
        <dl style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:.75rem 1rem;margin:0" aria-label="Recipe at a glance">
          ${stat('Prep Time', humanTime(isoMinutes(rec.prep_time)))}
          ${stat('Cook Time', humanTime(isoMinutes(rec.cook_time)))}
          ${stat('Total Time', humanTime(isoMinutes(rec.total_time)))}
          ${stat('Calories', rec.calories)}
          ${stat('Yield', rec.yield)}
          ${stat('Difficulty', rec.difficulty)}
          ${stat('Category', rec.category)}
        </dl>
      </div>
    </header>

    <div class="prose" style="margin-top:1.5rem">
      ${rec.intro.map(p => `<p>${esc(p)}</p>`).join('\n      ')}

      <h2 id="ingredients-guide">Key Ingredients &amp; Substitutions Guide</h2>
      <ul>${rec.key_ingredients.map(k => `<li><strong>${esc(k.name)}</strong> &mdash; ${esc(k.role)}</li>`).join('')}</ul>
      <h3>Common substitutions</h3>
      <ul>${rec.substitutions.map(s => `<li>${esc(s)}</li>`).join('')}</ul>

      <h2 id="technique">Step-by-Step Cooking Technique &amp; Pro Tips</h2>
      <p>The full method is in the <a href="#recipe-card">recipe card</a> below. These are the technique notes that decide whether it works: temperatures, timings and what to look for.</p>
      <ul>${rec.pro_tips.map(t => `<li>${esc(t)}</li>`).join('')}</ul>

      <h2 id="variations">Recipe Variations &amp; Alternative Cooking Methods</h2>
      <h3 id="air-fryer">Air Fryer Method</h3>
      <p>${esc(v.air_fryer)}</p>
      <h3 id="slow-cooker">Slow Cooker / Instant Pot Adaptation</h3>
      <p>${esc(v.slow_cooker)}</p>
      <h3 id="diet-substitutions">Diet Substitutions</h3>
      <ul>
        <li><strong>Low carb:</strong> ${esc(v.diet.low_carb)}</li>
        <li><strong>Gluten-free:</strong> ${esc(v.diet.gluten_free)}</li>
        <li><strong>Vegan:</strong> ${esc(v.diet.vegan)}</li>
      </ul>

      <h2 id="storage">Storage, Freezing &amp; Reheating Instructions</h2>
      <p>${esc(rec.storage_tips)}</p>

      <h2 id="faq">Frequently Asked Questions</h2>
      <div class="faq">${faq.map(({ q, a }) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('')}</div>
    </div>

    <section class="panel panel--accent" id="recipe-card" aria-labelledby="recipe-card-title" style="margin:2.5rem 0">
      <div style="display:flex;justify-content:space-between;align-items:center;gap:1rem;flex-wrap:wrap">
        <h2 id="recipe-card-title" style="margin:0">Recipe Card: ${esc(rec.title)}</h2>
        <button class="btn btn--ghost btn--sm" type="button" data-print>${ICONS.print} Print Recipe</button>
      </div>
      <p class="form-note" style="margin:.5rem 0 1rem">${esc(rec.yield)} &middot; prep ${esc(humanTime(isoMinutes(rec.prep_time)))} &middot; cook ${esc(humanTime(isoMinutes(rec.cook_time)))}${rec.rest_time ? ` &middot; rest ${esc(humanTime(isoMinutes(rec.rest_time)))}` : ''} &middot; total ${esc(humanTime(isoMinutes(rec.total_time)))}</p>
      <h3>Ingredients</h3>
      <ul class="ingredients">${rec.ingredients.map(line => `<li><label class="ing-check"><input type="checkbox"><span class="ing-text">${esc(line)}</span></label></li>`).join('\n')}</ul>
      <h3>Instructions</h3>
      <ol class="steps">${rec.instructions.map((s, i) => `<li id="step-${i + 1}"><p class="step-text">${esc(s)}</p></li>`).join('\n')}</ol>
      <h3>Nutrition per serving</h3>
      <p class="form-note">An estimate: brands, cuts and portion sizes vary.</p>
      ${nutritionGrid(rec.nutrition)}
    </section>

    <section aria-labelledby="more-title" style="margin:2rem 0">
      <h2 id="more-title">More recipes</h2>
      <ul>
        <li><a href="${SITE.base}${hubRel}">All ${esc(country.name)} recipes</a></li>
        <li><a href="${SITE.base}${catRel}">All ${esc(rec.category)} recipes</a></li>
        ${sibling.map(r => `<li><a href="${SITE.base}${pathFor('recipe', r)}">${esc(r.title)}</a></li>`).join('\n        ')}
      </ul>
    </section>
  </article>
</div>`;

  const html = layout({
    title: titleTag(rec),
    description: meta,
    keywords: [rec.primary_keyword, ...rec.secondary_keywords],
    path: rel,
    active: 'recipes',
    ogType: 'article',
    published,
    modified,
    section: rec.category,
    cardFacts: [['Time', humanTime(isoMinutes(rec.total_time))], ['Serves', String(servingsOf(rec))]],
    imageAlt: rec.title,
    image: rec.image,
    schema: [recipeSchema(rec, url, published, modified), faqSchema(faq), breadcrumbSchema(trail)],
    scripts: ['country-recipe.js'],
    criticalCss: env.ctx.criticalCss,
    categories: env.ctx.categoryCounts,
    cuisines: env.ctx.topCuisines,
    body
  });
  return { kind: 'recipe', cc: rec.country, file: `${rel}index.html`, path: rel, url, html, lastmod: modified, indexable: true, rec };
}

function listItem(rec) {
  return `<li style="margin:0 0 1rem"><a href="${SITE.base}${pathFor('recipe', rec)}"><strong>${esc(rec.title)}</strong></a>`
    + ` <span class="form-note">${esc(humanTime(isoMinutes(rec.total_time)))} &middot; ${esc(rec.calories)} &middot; ${esc(rec.difficulty)}</span>`
    + `<br>${esc(rec.description)}</li>`;
}

function renderHub(kind, key, list, env) {
  const isCountry = kind === 'country';
  const country = isCountry ? COUNTRIES[key] : null;
  const label = isCountry ? country.name : list[0].category;
  const rel = isCountry ? pathFor('country', key) : pathFor('category', null, key);
  const url = abs(rel);
  const indexable = list.length >= MIN_INDEXABLE_HUB;
  const modified = env.dates.dateFor(`/${rel}`, list.map(r => [r.id, r.slug, r.title, r.description]));
  const trail = [{ name: 'Home', url: SITE.base }, { name: 'Recipes', url: `${SITE.base}recipes/` }, { name: `${label} recipes` }];
  const groups = new Map();
  for (const r of list) {
    const g = isCountry ? r.category : COUNTRIES[r.country].name;
    if (!groups.has(g)) groups.set(g, []);
    groups.get(g).push(r);
  }
  const heading = `${label} recipes`;
  const intro = isCountry
    ? `${list.length} ${list.length === 1 ? 'recipe' : 'recipes'} for ${label}, grouped by category. Each has ingredients, a step-by-step method, air fryer and slow cooker notes, storage advice and answers to the questions people ask.`
    : `${list.length} ${list.length === 1 ? 'recipe' : 'recipes'} in the ${label} category across every country collection, each with a full method, nutrition and storage advice.`;
  const description = fitDescription(
    `Browse ${list.length} ${label} recipes on ${SITE.name}, each with ingredients, method and storage tips.`,
    ['Air fryer and slow cooker options included.', 'Step-by-step method and FAQs.', 'With nutrition per serving.',
      'Full method and FAQs.', 'With nutrition.', 'Easy recipes.'], 140, DESC_MAX);
  const body = `
${breadcrumbs(trail)}
<div class="wrap">
  <header class="recipe-head" style="padding-top:1rem;max-width:860px;margin:0 auto">
    <span class="eyebrow">${isCountry ? 'Country collection' : 'Category'}</span>
    <h1>${esc(heading)}</h1>
    <p class="lede">${esc(intro)}</p>
  </header>
  <div class="prose" style="max-width:860px;margin:1.5rem auto">
    ${[...groups.entries()].map(([g, items]) => `<h2>${esc(g)}</h2>\n    <ul style="list-style:none;padding:0">${items.map(listItem).join('\n')}</ul>`).join('\n    ')}
  </div>
</div>`;
  const html = layout({
    title: `${label} Recipes - ${list.length} Easy Recipes`,
    description,
    keywords: [`${label.toLowerCase()} recipes`, ...new Set(list.map(r => r.primary_keyword))].slice(0, 12),
    path: rel,
    active: 'recipes',
    noindex: !indexable,
    schema: [breadcrumbSchema(trail)],
    criticalCss: env.ctx.criticalCss,
    categories: env.ctx.categoryCounts,
    cuisines: env.ctx.topCuisines,
    body
  });
  return { kind, cc: isCountry ? key : null, file: `${rel}index.html`, path: rel, url, html, lastmod: modified, indexable, count: list.length };
}

/* --------------------------------------------------------------- sitemaps */

const urlEntry = (rel, lastmod, changefreq, priority) =>
  `  <url>\n    <loc>${abs(rel)}</loc>\n    <lastmod>${lastmod}</lastmod>\n`
  + `    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;

function regionalSitemap(pages) {
  const entries = pages.filter(p => p.indexable).map(p =>
    p.kind === 'recipe' ? urlEntry(p.path, p.lastmod, 'monthly', '0.8') : urlEntry(p.path, p.lastmod, 'weekly', '0.7'));
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join('\n')}\n</urlset>\n`;
}

function sitemapIndex(children) {
  const items = children.map(c => `  <sitemap>\n    <loc>${abs(c.file)}</loc>\n    <lastmod>${c.lastmod}</lastmod>\n  </sitemap>`);
  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items.join('\n')}\n</sitemapindex>\n`;
}

const maxDate = dates => dates.slice().sort().pop();

/* ---------------------------------------------------------- verification */

/**
 * Checks one finished page against what the spec promises of it, so a
 * template regression fails the build instead of shipping a hundred pages
 * with the same fault.
 */
function verifyPage(page) {
  const problems = [];
  const bad = msg => problems.push(`${page.path}: ${msg}`);
  const html = page.html;
  const canonical = /<link rel="canonical" href="([^"]*)"/.exec(html);
  if (!canonical) bad('no canonical link');
  else if (canonical[1] !== page.url) bad(`canonical ${canonical[1]} is not the published URL ${page.url}`);
  for (const tag of ['og:title', 'og:description', 'og:type', 'og:url', 'og:image']) {
    if (!new RegExp(`<meta property="${tag}" content="[^"]+"`).test(html)) bad(`missing ${tag}`);
  }
  for (const tag of ['twitter:card', 'twitter:title', 'twitter:description', 'twitter:image']) {
    if (!new RegExp(`<meta name="${tag}" content="[^"]+"`).test(html)) bad(`missing ${tag}`);
  }
  const robots = /<meta name="robots" content="([^"]*)"/.exec(html);
  const wanted = page.indexable ? 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' : 'noindex, follow';
  if (!robots || robots[1] !== wanted) bad(`robots meta is "${robots ? robots[1] : 'missing'}", expected "${wanted}"`);
  if ((html.match(/<h1[ >]/g) || []).length !== 1) bad('there must be exactly one h1');

  const types = [];
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { types.push(JSON.parse(m[1])); } catch (e) { bad(`a JSON-LD block does not parse: ${e.message}`); }
  }
  const byType = t => types.find(x => x['@type'] === t);
  if (page.kind === 'recipe') {
    const recipe = byType('Recipe'), faq = byType('FAQPage');
    if (!recipe) bad('no Recipe JSON-LD');
    else {
      for (const f of ['name', 'description', 'prepTime', 'cookTime', 'totalTime', 'recipeYield', 'recipeCategory', 'recipeCuisine', 'keywords', 'recipeIngredient', 'recipeInstructions', 'author', 'nutrition']) {
        if (recipe[f] === undefined || recipe[f] === '' || (Array.isArray(recipe[f]) && !recipe[f].length)) bad(`Recipe JSON-LD is missing ${f}`);
      }
      if (recipe.name !== page.rec.title) bad('Recipe name differs from the title');
      if ((recipe.recipeInstructions || []).some(s => s['@type'] !== 'HowToStep')) bad('a recipeInstruction is not a HowToStep');
    }
    if (!faq) bad('no FAQPage JSON-LD');
    else if ((faq.mainEntity || []).length !== page.rec.faqs.length) bad('FAQPage does not carry the same questions as the page');
    for (const id of ['recipe-card', 'air-fryer', 'slow-cooker', 'faq', 'storage']) if (!html.includes(`id="${id}"`)) bad(`no #${id} section`);
    if (!html.includes('class="btn btn--primary jump-to-recipe-btn" href="#recipe-card"')) bad('no Jump to Recipe button');
    if (!html.includes(`href="${SITE.base}${pathFor('country', page.cc)}"`)) bad('does not link to its country hub');
    if (!html.includes(`href="${SITE.base}${pathFor('category', null, categorySlugOf(page.rec))}"`)) bad('does not link to its category hub');
  }
  return problems;
}

/* ---------------------------------------------------------------- compile */

/**
 * Every page, sitemap and index file for a set of published records.
 * Nothing is written here; the caller decides where the result goes, which is
 * what lets a dry run exercise the whole pipeline and leave no trace.
 */
function compile(records, env) {
  const context = { ...env, records };
  const pages = [];
  records.forEach((rec, i) => {
    pages.push(renderRecipe(rec, context));
    if (env.onProgress) env.onProgress(i + 1, records.length);
  });

  const byCountry = new Map();
  const byCategory = new Map();
  for (const rec of records) {
    if (!byCountry.has(rec.country)) byCountry.set(rec.country, []);
    byCountry.get(rec.country).push(rec);
    const key = categorySlugOf(rec);
    if (!byCategory.has(key)) byCategory.set(key, []);
    byCategory.get(key).push(rec);
  }
  for (const [cc, list] of byCountry) pages.push(renderHub('country', cc, list, context));
  for (const [key, list] of byCategory) pages.push(renderHub('category', key, list, context));

  const problems = pages.flatMap(verifyPage);
  const seen = new Set();
  for (const p of pages) {
    if (seen.has(p.file)) problems.push(`${p.file} is generated twice`);
    seen.add(p.file);
  }

  const files = {};
  const regional = [];
  for (const cc of byCountry.keys()) {
    const own = pages.filter(p => p.indexable && (p.cc === cc));
    const file = `sitemap-${cc}.xml`;
    files[file] = regionalSitemap(own);
    regional.push({ file, lastmod: maxDate(own.map(p => p.lastmod)) });
  }
  /* The metadata index the spec asks for. It is a file of its own rather than
     more rows in search-index.json: assets/js/directory.js strips every
     character but [a-z0-9-] from a slug, so "us/marry-me-chicken" would become
     a broken "usmarry-me-chicken" link on the directory page, and that index is
     downloaded by every visitor, which 8,000 more rows would make heavy. */
  files['search_index.json'] = JSON.stringify(records.slice().sort((a, b) => a.id.localeCompare(b.id)).map(r => ({
    id: r.id, title: r.title, slug: r.slug, path: `/${pathFor('recipe', r)}`, url: abs(pathFor('recipe', r)),
    category: r.category, country: r.country, keywords: [r.primary_keyword, ...r.secondary_keywords]
  })), null, 1) + '\n';

  const coreEntries = pages.filter(p => p.kind === 'category' && p.indexable)
    .map(p => urlEntry(p.path, p.lastmod, 'weekly', '0.6'));
  return { pages, files, regional, coreEntries, problems, byCountry, byCategory };
}

/* ------------------------------------------------------------ write guard */

/**
 * Where country pages may go. The engine owns recipes/<country>/ and
 * recipes/category/ and nothing else; a target anywhere else, or one that
 * already exists, is an error rather than an overwrite.
 */
function assertWritable(root, file) {
  const normalised = path.posix.normalize(file.split(path.sep).join('/'));
  if (normalised.startsWith('..') || path.isAbsolute(normalised)) throw new Error(`refusing to write outside the site: ${file}`);
  const allowed = [...Object.keys(COUNTRIES).map(cc => `recipes/${cc}/`), 'recipes/category/'];
  if (!allowed.some(prefix => normalised.startsWith(prefix))) {
    throw new Error(`refusing to write ${file}: country pages may only be written under recipes/<country>/ or recipes/category/`);
  }
  const target = path.join(root, normalised);
  if (!target.startsWith(root + path.sep)) throw new Error(`refusing to write outside the site: ${file}`);
  if (fs.existsSync(target)) throw new Error(`refusing to overwrite an existing page: ${file}`);
  return target;
}

module.exports = {
  COUNTRIES, BATCH_NUMBERS, BATCH_SIZE, RESERVED_SLUGS, MIN_WORDS, MIN_INDEXABLE_HUB,
  validateRecord, validateBatch, overlapWarnings, crossCountryWarnings,
  readCountry, readManifest, dataPath, loadLive,
  metaDescription, titleTag, compile, verifyPage, sitemapIndex, assertWritable,
  visibleWords, isoMinutes, pathFor, maxDate
};
