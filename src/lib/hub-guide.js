'use strict';
/**
 * The paragraphs under a listing page's heading: what the collection on that page holds.
 *
 * Every category, cuisine and ingredient page carried one sentence of its own above the recipe
 * cards (11 to 19 words, October 2026). As a page it was the recipes' own card text repeated,
 * and Search Console filed most of them as "Crawled - currently not indexed". These paragraphs
 * say how the collection divides by course or cuisine, how much of it is quick, how much waits
 * on rising or chilling, and what suits which diet as written, so a reader can choose before
 * scrolling. Every figure is counted from the catalogue at build time and stays true as
 * recipes come and go. Nothing here says what readers like or cook most: the site keeps no
 * record of that, and saying so would be invented (CLAUDE.md, section 4.3).
 *
 * A hand-written paragraph for the larger pages lives in src/data/hub-intros.js and is shown
 * first; these follow it on every page.
 */
const { plural, humanTime } = require('./util');

const QUICK = 30;
const DIETS = ['Vegetarian', 'Vegan', 'Gluten-Free', 'Dairy-Free'];
/* A category as a plural noun in running text: "164 dinners, 98 bakes". */
const COURSE = {
  'Breakfast': ['breakfast', 'breakfasts'], 'Lunch': ['lunch', 'lunches'], 'Dinner': ['dinner', 'dinners'],
  'Desserts': ['dessert', 'desserts'], 'Appetizers': ['appetiser or small plate', 'appetisers and small plates'],
  'Drinks': ['drink', 'drinks'], 'Baking': ['bake', 'bakes'], 'Healthy': ['healthy dish', 'healthy dishes'],
  'Quick Meals': ['quick meal', 'quick meals'], 'Holiday Specials': ['holiday dish', 'holiday dishes']
};
const fmt = n => n.toLocaleString('en-GB');
const course = (name, n) => `${fmt(n)} ${(COURSE[name] || [name.toLowerCase(), name.toLowerCase()])[n === 1 ? 0 : 1]}`;

/** "a, b and c" */
function words(items) {
  if (items.length <= 1) return items.join('');
  return `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`;
}

/** [[key, count], …] largest first, ties alphabetically. */
function countBy(list, key) {
  const m = new Map();
  for (const r of list) m.set(r[key], (m.get(r[key]) || 0) + 1);
  return [...m.entries()].sort((a, b) => b[1] - a[1] || String(a[0]).localeCompare(String(b[0])));
}

const untimed = r => !!(r.untimed && (Array.isArray(r.untimed) ? r.untimed.length : true));
const quick = r => !untimed(r) && Number.isFinite(r.elapsedTime) && r.elapsedTime > 0 && r.elapsedTime <= QUICK;
/* As written means the label holds with no swap; the build's own reading (src/lib/diet-conditions.js). */
const asWritten = (r, tag) => r.tags.includes(tag) && (!r.dietStatus || !r.dietStatus[tag] || r.dietStatus[tag].status === 'clean');
const withSwap = (r, tag) => r.tags.includes(tag) && r.dietStatus && r.dietStatus[tag] && r.dietStatus[tag].status === 'conditional';

/** The opening sentence: how the page's recipes divide. */
function composition(list, opts) {
  const n = list.length;
  if (opts.kind === 'category') {
    const by = countBy(list, 'cuisine');
    if (by.length === 1) return `All ${fmt(n)} come from ${by[0][0]} cooking.`;
    return `The ${fmt(n)} recipes come from ${by.length} cuisines; the largest groups are `
      + `${words(by.slice(0, 5).map(([c, k]) => `${c} (${fmt(k)})`))}.`;
  }
  if (opts.kind === 'cuisine') {
    const by = countBy(list, 'category');
    if (by.length === 1) return `All ${fmt(n)} are ${(COURSE[by[0][0]] || [])[1] || by[0][0].toLowerCase()}.`;
    return `The ${fmt(n)} recipes cover ${by.length === 10 ? 'all ten' : by.length} of the site’s categories, among them `
      + `${words(by.slice(0, 6).map(([c, k]) => course(c, k)))}.`;
  }
  if (opts.kind === 'ingredient') {
    const cats = countBy(list, 'category'), cuis = countBy(list, 'cuisine');
    return `${opts.name} is in ${fmt(n)} ${n === 1 ? 'recipe' : 'recipes'} from ${plural(cuis.length, 'cuisine')}, among them `
      + `${words(cats.slice(0, 4).map(([c, k]) => course(c, k)))}.`
      + (cuis.length > 1 ? ` The cuisines that use it most here are ${words(cuis.slice(0, 4).map(([c, k]) => `${c} (${fmt(k)})`))}.` : '');
  }
  /* one cuisine within one category */
  return `These are the ${n === 1 ? `one ${opts.cuisine} recipe` : `${fmt(n)} ${opts.cuisine} recipes`} filed under ${opts.category.toLowerCase()}: `
    + `${fmt(n)} of the ${fmt(opts.categoryTotal)} ${(COURSE[opts.category] || [])[1] || opts.category.toLowerCase()} on the site, `
    + `and ${fmt(n)} of its ${fmt(opts.cuisineTotal)} ${opts.cuisine} recipes.`;
}

/** How long they take and how hard they are. */
function effort(list) {
  const n = list.length, out = [];
  const q = list.filter(quick);
  const fastest = q.slice().sort((a, b) => a.elapsedTime - b.elapsedTime || a.title.localeCompare(b.title)).slice(0, 3);
  if (q.length && n > 1) {
    out.push(`${q.length === n ? `All ${fmt(n)} are` : `Of these, ${q.length === 1 ? 'one is' : `${fmt(q.length)} are`}`} ready in ${QUICK} minutes or less, start to finish`
      + (fastest.length > 1 ? `; the quickest are ${words(fastest.map(r => `${r.title} (${humanTime(r.elapsedTime)})`))}.` : '.'));
  } else if (n > 1) {
    out.push(`None of them is ready in ${QUICK} minutes or less, start to finish.`);
  }
  const waits = list.filter(r => r.restTime > 0).length;
  if (waits) out.push(`For ${waits === n ? (n === 1 ? 'this one' : 'every one') : waits === 1 ? 'one of them' : fmt(waits)}, the method times a wait such as rising, chilling or marinating, and the time at the top of the recipe includes it.`);
  const d = countBy(list, 'difficulty');
  const order = ['Easy', 'Medium', 'Hard'].map(k => [k, (d.find(x => x[0] === k) || [k, 0])[1]]).filter(x => x[1]);
  if (order.length > 1) out.push(`By difficulty: ${words(order.map(([k, c]) => `${fmt(c)} ${k.toLowerCase()}`))}.`);
  else if (order.length === 1 && n > 1) out.push(`All of them are marked ${order[0][0].toLowerCase()}.`);
  return out.join(' ');
}

/** Which diets they suit as written, and how many only with a named swap. */
function diets(list) {
  const as = DIETS.map(t => [t, list.filter(r => asWritten(r, t)).length]).filter(x => x[1]);
  const swaps = new Set(list.filter(r => DIETS.some(t => withSwap(r, t))).map(r => r.slug)).size;
  if (!as.length && !swaps) return '';
  /* "As written, 120 are vegetarian, 35 vegan and 210 gluten-free." */
  const parts = as.map(([t, c], i) => (i === 0 ? `${fmt(c)} ${c === 1 ? 'is' : 'are'} ${t.toLowerCase()}` : `${fmt(c)} ${t.toLowerCase()}`));
  let s = as.length ? `As written, ${words(parts)}.` : '';
  if (swaps) s += `${s ? ' ' : ''}Another ${swaps === 1 ? 'recipe meets' : `${fmt(swaps)} meet`} a diet label only with a swap the recipe names, and the recipe says which.`;
  return s;
}

/**
 * @param {object[]} list   the recipes on the page, in page order
 * @param {object}   opts   { kind: 'category'|'cuisine'|'ingredient'|'combo', name, category, cuisine,
 *                            categoryTotal, cuisineTotal }
 * @returns {string[]} plain-text paragraphs, each to be escaped by the template
 */
function guide(list, opts) {
  if (!list.length) return [];
  const first = [composition(list, opts), effort(list)].filter(Boolean).join(' ');
  return [first, diets(list)].filter(Boolean);
}

module.exports = { guide };
