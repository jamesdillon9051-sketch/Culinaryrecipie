'use strict';

/**
 * The site's internal link graph: subcategory hubs and related recipes.
 *
 * Two jobs, both done once per build from the catalogue alone (no network, no
 * randomness, so a rebuild changes nothing unless the recipes did).
 *
 * 1. Subcategories. A category (Dinner) is split by cuisine (Italian) into
 *    /categories/dinner/italian/. A split with fewer than SUBCATEGORY_MIN
 *    recipes is too thin to deserve a page of its own, so those recipes point
 *    their breadcrumb at the cuisine hub instead.
 *
 * 2. Related recipes, 4 to 6 per recipe. Chosen by what the two dishes share
 *    (category, cuisine, main ingredients, diet tags, words in the title,
 *    total time), then nudged so that links are spread across the catalogue
 *    rather than all pointing at the same few popular dishes. Every recipe
 *    ends up with at least one inbound link from another recipe.
 */
const SUBCATEGORY_MIN = 4;
const RELATED_MIN = 4;
const RELATED_MAX = 6;
/* The fifth and sixth links must still share a category or a cuisine with the
   recipe, or the section stops being related and starts being filler. */
const EXTRA_MIN_SCORE = 3;
/* How much each inbound related link already received costs a candidate. */
const SPREAD_PENALTY = 0.35;
const SPREAD_CAP = 8;
const KEEP = 40;

const STOP = new Set(['with', 'and', 'the', 'for', 'from', 'style', 'easy', 'best', 'homemade',
  'recipe', 'recipes', 'classic', 'simple', 'quick', 'fresh', 'baked', 'roasted', 'grilled',
  'slow', 'cooker', 'one', 'pan', 'pot', 'sheet', 'air', 'fryer', 'cream', 'creamy', 'sauce']);

const words = title => new Set(String(title).toLowerCase().replace(/[^a-z0-9 ]+/g, ' ')
  .split(/\s+/).filter(w => w.length > 3 && !STOP.has(w)));

/** Category x cuisine hubs, and the breadcrumb target of every recipe. */
function subcategories(recipes, slug, categoryNoun) {
  const groups = new Map();
  for (const r of recipes) {
    const key = `${r.category}|${r.cuisine}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(r);
  }
  const hubs = [];
  for (const [key, list] of groups) {
    if (list.length < SUBCATEGORY_MIN) continue;
    const [category, cuisine] = key.split('|');
    list.sort((a, b) => b.popularity - a.popularity || a.slug.localeCompare(b.slug));
    hubs.push({
      category, cuisine, recipes: list,
      slug: slug(cuisine),
      path: `categories/${slug(category)}/${slug(cuisine)}/`,
      name: `${cuisine} ${categoryNoun(category)}`,
      anchor: `${cuisine} ${categoryNoun(category).toLowerCase()} recipes`
    });
  }
  hubs.sort((a, b) => a.category.localeCompare(b.category) || b.recipes.length - a.recipes.length ||
    a.cuisine.localeCompare(b.cuisine));

  const byKey = new Map(hubs.map(h => [`${h.category}|${h.cuisine}`, h]));
  for (const r of recipes) {
    const hub = byKey.get(`${r.category}|${r.cuisine}`);
    r.subcategory = hub
      ? { name: hub.name, path: hub.path, hub: true }
      : { name: `${r.cuisine} recipes`, path: `cuisines/${slug(r.cuisine)}/`, hub: false };
  }
  return hubs;
}

/** Sets recipe.related (4 to 6 recipes) on every recipe. */
function assignRelated(recipes, ingredientHubs) {
  /* Everything below works on positions in a slug-sorted list, so the scoring
     loop touches typed arrays instead of hashing strings 15 million times. */
  const list = recipes.slice().sort((a, b) => a.slug.localeCompare(b.slug));
  const n = list.length;
  const position = new Map(list.map((r, i) => [r.slug, i]));
  const popularity = Float64Array.from(list, r => r.popularity || 0);
  const totalTime = Float64Array.from(list, r => r.totalTime || 0);

  const index = (keyOf) => {
    const m = new Map();
    list.forEach((r, i) => { for (const k of [].concat(keyOf(r))) {
      if (!m.has(k)) m.set(k, []);
      m.get(k).push(i);
    } });
    return m;
  };

  const hubsOf = list.map(() => []);
  const byHub = new Map();
  for (const hub of ingredientHubs || []) {
    byHub.set(hub.name, []);
    for (const r of hub.recipes) { hubsOf[position.get(r.slug)].push(hub.name); byHub.get(hub.name).push(position.get(r.slug)); }
  }
  const wordsOf = list.map(r => [...words(r.title)]);
  const byWord = index(r => [...words(r.title)]);
  const byCategory = index(r => r.category);
  const byCuisine = index(r => r.cuisine);
  const DIET = ['Vegetarian', 'Vegan', 'Gluten-Free', 'Dairy-Free'];
  const byTag = new Map(DIET.map(t => [t, []]));
  list.forEach((r, i) => { for (const t of r.tags || []) if (byTag.has(t)) byTag.get(t).push(i); });

  const score = new Float64Array(n);
  const shared = new Uint8Array(n);
  const touched = [];

  /* Candidates for recipe i, best first: [position, score]. */
  const candidatesFor = (i) => {
    const r = list[i];
    touched.length = 0;
    const add = (j, v) => { if (score[j] === 0) touched.push(j); score[j] += v; };
    for (const j of byCategory.get(r.category)) add(j, 3);
    for (const j of byCuisine.get(r.cuisine)) add(j, 3);
    /* Shared ingredients, words and diet tags count per shared item, up to a cap. */
    const sharedGroup = (lists, per, cap) => {
      const seen = [];
      for (const l of lists) for (const j of l || []) {
        if (shared[j] === 0) seen.push(j);
        shared[j]++;
      }
      for (const j of seen) { add(j, Math.min(shared[j], cap) * per); shared[j] = 0; }
    };
    sharedGroup(hubsOf[i].map(h => byHub.get(h)), 1.5, 3);
    sharedGroup(wordsOf[i].map(w => byWord.get(w)), 1, 3);
    sharedGroup((r.tags || []).filter(t => byTag.has(t)).map(t => byTag.get(t)), 0.5, 2);
    score[i] = 0;
    const out = [];
    for (const j of touched) {
      if (j !== i) {
        let v = score[j];
        if (Math.abs(totalTime[j] - totalTime[i]) <= 15) v += 0.5;
        out.push([j, v]);
      }
      score[j] = 0;
    }
    return out.sort((a, b) => b[1] - a[1] || popularity[b[0]] - popularity[a[0]] || a[0] - b[0]);
  };

  const inbound = new Int32Array(n);
  const picks = new Array(n);
  const pool = new Array(n);

  /* A fixed order keeps the output stable. The penalty is what spreads links:
     a dish that already has several inbound links loses ground to one that
     has none, among candidates that are about equally related. */
  for (let i = 0; i < n; i++) {
    const ranked = candidatesFor(i).slice(0, 400);
    pool[i] = ranked.slice(0, KEEP);
    const adjusted = ranked.map(([j, v]) => [j, v, v - SPREAD_PENALTY * Math.min(inbound[j], SPREAD_CAP)])
      .sort((a, b) => b[2] - a[2] || b[1] - a[1] || a[0] - b[0]);
    const chosen = [];
    for (const [j, v] of adjusted) {
      if (chosen.length >= RELATED_MAX) break;
      if (chosen.length >= RELATED_MIN && v < EXTRA_MIN_SCORE) continue;
      chosen.push(j);
      inbound[j]++;
    }
    picks[i] = chosen;
  }

  /* Anything still without an inbound recipe link borrows a slot from a close
     neighbour: either a free slot, or the neighbour's weakest well-linked one. */
  const scoreOf = (a, b) => { const hit = pool[a].find(([j]) => j === b); return hit ? hit[1] : 0; };
  for (let i = 0; i < n; i++) {
    if (inbound[i] > 0) continue;
    for (const [nb] of pool[i]) {
      const mine = picks[nb];
      if (mine.length < RELATED_MAX) {
        mine.push(i); inbound[i] = 1; break;
      }
      let weakest = -1;
      for (const j of mine) {
        if (inbound[j] < 2) continue;
        if (weakest < 0 || scoreOf(nb, j) < scoreOf(nb, weakest)) weakest = j;
      }
      if (weakest >= 0) {
        mine[mine.indexOf(weakest)] = i;
        inbound[weakest]--; inbound[i] = 1; break;
      }
    }
  }

  list.forEach((r, i) => { r.related = picks[i].map(j => list[j]); });
}

module.exports = { subcategories, assignRelated, SUBCATEGORY_MIN, RELATED_MIN, RELATED_MAX };
