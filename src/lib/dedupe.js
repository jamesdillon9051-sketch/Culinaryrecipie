'use strict';
/**
 * Is this the same dish as one already on the site?
 *
 * A second page about the same food competes with the first rather than adding
 * anything: two pages chasing one query split the ranking between them, and a
 * reader lands on whichever Google preferred. So a candidate recipe is checked
 * against everything already published before it is written, and again as a
 * finished file, and the build refuses a catalogue in which two recipes are the
 * same dish.
 *
 * "Same dish" is judged on words, not on intent, so it is deliberately split
 * into two grades:
 *
 *   DUPLICATE   identical slug, identical folded title, identical core words
 *               (the title minus filler such as "classic" and "creamy"), or the
 *               candidate is exactly a search phrase an existing recipe already
 *               targets. These are not judgement calls.
 *   REVIEW      core words differing by a single word — "Pancakes" against
 *               "Buttermilk Pancakes". Sometimes a different dish (chicken
 *               katsu curry is not katsu curry) and sometimes not, so a person
 *               decides, with both names in front of them.
 *
 * Method words such as "air fryer", "slow cooker" and "baked" are deliberately
 * not filler. They are what separates one search query from another, so an air
 * fryer chicken breast is not a second baked chicken breast.
 */
const { fold } = require('./keywords');

const STOP = new Set(['a', 'an', 'the', 'of', 'and', 'or', 'for', 'with', 'in', 'on', 'to',
  'de', 'la', 'le', 'al', 'au', 'du', 'des']);

/* Words that describe how a dish is sold rather than what it is. */
const FILLER = new Set(['classic', 'easy', 'best', 'homemade', 'creamy', 'crispy', 'fluffy',
  'traditional', 'authentic', 'quick', 'simple', 'ultimate', 'perfect', 'recipe', 'style',
  'one', 'bowl']);

const stem = t => (t.length > 3 && t.endsWith('s') && !t.endsWith('ss') ? t.slice(0, -1) : t);

/* One dish, two spellings. Only words that are the same food in every place
   they are used: prawns and shrimp are both the crustacean in a cocktail;
   biscuits are not folded, because a British biscuit and an American one are
   different things. */
const SPELLING = new Map([
  ['chilli', 'chili'], ['chillies', 'chili'], ['chilies', 'chili'],
  ['courgette', 'zucchini'], ['courgettes', 'zucchini'],
  ['aubergine', 'eggplant'], ['aubergines', 'eggplant'],
  ['prawn', 'shrimp'], ['prawns', 'shrimp'],
  ['rocket', 'arugula'], ['aussie', 'australian'], ['yoghurt', 'yogurt'],
  ['flavour', 'flavor'], ['colour', 'color'], ['doughnut', 'donut'], ['doughnuts', 'donuts'],
  ['omelette', 'omelet'], ['moussaka', 'moussaka']
]);

const words = text => fold(String(text || '')).toLowerCase().replace(/&/g, ' and ')
  .split(/[^a-z0-9]+/).filter(Boolean).map(w => SPELLING.get(w) || w);

/** The title as written, folded for accents and case. "Aïoli" == "Aioli". */
const foldTitle = text => words(text).filter(w => w !== 'recipe').join(' ');

/** The title's core words, order-free: what is left once filler is dropped. */
const coreWords = text => words(text).filter(w => !STOP.has(w) && !FILLER.has(w)).map(stem);
const coreKey = text => coreWords(text).sort().join(' ');

/**
 * An index over recipes already published, built once and asked many times.
 * `recipes` need slug, title and curatedKeywords (the `kw` list the record
 * carries); a bare { slug, title } row is enough for a quick check.
 */
function buildIndex(recipes) {
  const index = { bySlug: new Map(), byFold: new Map(), byCore: new Map(), byPhrase: new Map(), rows: [] };
  const put = (map, key, recipe) => { if (key) { if (!map.has(key)) map.set(key, []); map.get(key).push(recipe); } };
  for (const recipe of recipes) {
    const keywords = recipe.curatedKeywords || recipe.kw || [];
    const row = { slug: recipe.slug, title: recipe.title, core: new Set(coreWords(recipe.title)), keywords };
    index.rows.push(row);
    index.bySlug.set(row.slug, row);
    put(index.byFold, foldTitle(row.title), row);
    put(index.byCore, coreKey(row.title), row);
    for (const phrase of keywords) put(index.byPhrase, coreKey(phrase), row);
  }
  return index;
}

/**
 * Grade a candidate against an index.
 *
 * @param {{slug?: string, title: string, keyword?: string}} candidate
 * @param {object} index          from buildIndex()
 * @param {string} [ignoreSlug]   a slug to leave out, so a recipe already in
 *                                the index is not reported as its own duplicate
 * @returns {{grade: 'new'|'duplicate'|'review', matches: Array<{slug, title, reason}>}}
 */
function classify(candidate, index, ignoreSlug) {
  const matches = [];
  const seen = new Set();
  const add = (row, reason) => {
    if (row.slug === ignoreSlug || seen.has(`${row.slug}|${reason}`)) return;
    seen.add(`${row.slug}|${reason}`);
    matches.push({ slug: row.slug, title: row.title, reason });
  };

  if (candidate.slug && index.bySlug.has(candidate.slug)) add(index.bySlug.get(candidate.slug), 'same slug');
  for (const row of index.byFold.get(foldTitle(candidate.title)) || []) add(row, 'same title');
  const key = coreKey(candidate.title);
  for (const row of index.byCore.get(key) || []) add(row, 'same core words');
  const targets = [candidate.title, candidate.keyword].filter(Boolean);
  for (const target of targets) {
    for (const row of index.byPhrase.get(coreKey(target)) || []) add(row, 'the search phrase it already targets');
  }
  if (matches.length) return { grade: 'duplicate', matches };

  const mine = new Set(coreWords(candidate.title));
  if (mine.size) {
    for (const row of index.rows) {
      if (row.slug === ignoreSlug || !row.core.size) continue;
      let shared = 0;
      for (const t of mine) if (row.core.has(t)) shared++;
      /* One word apart, in either direction. Sharing most of the words is not
         enough: chicken breast and chicken wings share three of four. */
      if (shared && mine.size + row.core.size - 2 * shared <= 1) add(row, 'one word from it');
    }
  }
  return { grade: matches.length ? 'review' : 'new', matches };
}

/**
 * The existing recipes a candidate resembles most, so a person can see a
 * duplicate the word rules cannot: "Potato Bake" against "Potatoes Dauphinoise".
 * Weighted by how rare each shared word is on the site, so sharing "chicken"
 * counts for little and sharing "kumara" counts for a lot.
 */
function related(candidate, index, limit = 3) {
  if (!index.idf) {
    const df = new Map();
    for (const row of index.rows) for (const t of row.core) df.set(t, (df.get(t) || 0) + 1);
    index.idf = new Map([...df].map(([t, n]) => [t, Math.log(index.rows.length / n)]));
    index.maxIdf = Math.log(index.rows.length);
  }
  const mine = coreWords(candidate.title);
  const scored = [];
  for (const row of index.rows) {
    const shared = mine.filter(t => row.core.has(t));
    if (!shared.length) continue;
    scored.push({ slug: row.slug, title: row.title, shared, score: shared.reduce((n, t) => n + (index.idf.get(t) || index.maxIdf), 0) });
  }
  return scored.sort((a, b) => b.score - a.score).slice(0, limit);
}

/**
 * Every pair of recipes in a catalogue that the exact rules call the same dish.
 * Used by the build-time audit, which tolerates only the pairs it is told
 * predate it.
 */
function catalogueDuplicates(recipes) {
  const groups = [];
  const keyed = (label, keyOf) => {
    const map = new Map();
    for (const recipe of recipes) {
      const key = keyOf(recipe);
      if (!key) continue;
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(recipe.slug);
    }
    for (const [key, slugs] of map) if (slugs.length > 1) groups.push({ rule: label, key, slugs: slugs.slice().sort() });
  };
  keyed('same title', r => foldTitle(r.title));
  keyed('same core words', r => coreKey(r.title));
  keyed('same primary search phrase', r => coreKey((r.curatedKeywords || r.kw || [])[0] || ''));
  return groups;
}

module.exports = { foldTitle, coreKey, coreWords, buildIndex, classify, related, catalogueDuplicates, FILLER, STOP };
