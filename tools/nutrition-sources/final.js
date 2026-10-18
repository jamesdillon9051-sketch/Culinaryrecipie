// Build tools/nutrition-sources.json from decisions.json and the strict automatic matches (match2.js).
//
// How to regenerate, from the public-domain SR Legacy CSV release
// (https://fdc.nal.usda.gov/download-datasets, "SR Legacy", April 2018, CSV):
//
//   python3 -I tools/nutrition-sources/build_sr.py <unzipped csv folder> .nutrition-work/sr.json
//   node tools/nutrition-sources/match2.js     candidates for every food; strict agreement is accepted
//   node tools/nutrition-sources/final.js      applies decisions.json and writes tools/nutrition-sources.json
//
// decisions.json is the record of every match made by hand: an NDB number, "proxy:<NDB>", or a status
// word (zero, generic, unverified); "?words" picks the shortest SR description containing all words.
// .nutrition-work/ (or WD_SR_WORK) holds the downloaded data and is not committed.
const fs = require('fs');
const D = (process.env.WD_SR_WORK || require('path').join(__dirname, '..', '..', '.nutrition-work')) + '/';
const SR = JSON.parse(fs.readFileSync(D + 'sr.json'));
const byNdb = Object.fromEntries(SR.map(f => [f.ndb, f]));
const m2 = JSON.parse(fs.readFileSync(D + 'match2.json'));
process.env.WD_NUTRITION_LEGACY='1';const { BASE, MORE, PORTION } = require('../nutrition-foods');
const UNIT_RE = /^(medium|large|small|whole|fruit|clove|head|stalk|item|piece|slice|link|fillet|breast|thigh|leg|wing|drumstick|bulb|ear|sprig|leaf|egg|pepper|tomato|onion|potato|carrot|apple|banana|lemon|lime|orange|avocado|cucumber|tortilla|pita|bagel|muffin|roll|bun|sausage|patty|cake|cookie|cracker|biscuit|bar|pod|stick)/i;
const FOODS = { ...BASE, ...MORE };
const r1 = x => Math.round(x * 10) / 10;
const EACH = { egg_yolk: 'large', bacon_streaky: 'slice raw', anchovies: 'anchovy', cherry: 'cherry', stock_cube: 'cube', wonton_wrappers: 'wrapper, wonton (3-1/2" square)', turnip: 'medium', swede: 'medium', marshmallows: 'regular', prunes: 'prune, pitted', kiwi: 'fruit (2" dia)', globe_artichoke: 'artichoke, medium', passionfruit: 'fruit without refuse', daikon: 'radish (7" long)', chicory: 'head', sandwich_rolls: 'roll 1 serving', graham_crackers: 'cracker', clams: 'medium', lobster: 'lobster' };
const out = {};
const count = {};
for (const key of Object.keys(FOODS).sort()) {
  const r = m2[key];
  let ndb = null, status = 'unverified';
  if (r.how === 'auto') { ndb = r.ndb; status = 'usda'; }
  else if (r.how === 'manual') {
    if (typeof r.ndb === 'number') { ndb = r.ndb; status = 'usda'; }
    else if (/^proxy:/.test(r.ndb)) { ndb = Number(r.ndb.slice(6)); status = 'proxy'; }
    else status = r.ndb;
  }
  const e = { s: status };
  if (ndb) {
    const f = byNdb[ndb]; const n = f.n;
    e.ndb = ndb; e.d = f.desc;
    const legacy = FOODS[key];
    const pick = (k, i) => (n[k] === undefined ? null : (k === 'na' ? Math.round(n[k]) : r1(n[k])));
    e.v = [pick('p'), pick('c'), pick('f'), pick('fibre'), pick('sugar'), pick('na')];
    const gaps = [];
    e.v = e.v.map((x, i) => { if (x === null) { gaps.push(['protein','carbohydrate','fat','fibre','sugars','sodium'][i]); return legacy[i]; } return x; });
    if (gaps.length) e.gaps = gaps;
    if (n.k !== undefined && n.ph !== undefined) e.kp = [Math.round(n.k), Math.round(n.ph)];
    if (n.alc) e.alc = r1(n.alc);
    e.dev = r1(Math.abs(legacy[0] - e.v[0]) + Math.abs(legacy[1] - e.v[1]) + Math.abs(legacy[2] - e.v[2]));
  }
  /* A per-item weight written for the site is kept, and recorded as sourced, only where an SR
     Legacy portion for the same food agrees with it within a fifth; the SR weight is then used. */
  if (!EACH[key] && e.ndb && PORTION[key] && PORTION[key].each !== undefined) {
    const legacyEach = PORTION[key].each;
    const best = byNdb[e.ndb].portions.filter(x => UNIT_RE.test(x.desc.replace(/^\d+\s*/, '')))
      .map(x => ({ portion: x.amt + ' ' + x.desc, g: Math.round(x.g / x.amt * 10) / 10 }))
      .sort((a, b) => Math.abs(a.g - legacyEach) - Math.abs(b.g - legacyEach))[0];
    if (best && Math.abs(best.g - legacyEach) / legacyEach <= 0.2) e.each = best;
  }
  if (EACH[key] && e.ndb) { const pr = byNdb[e.ndb].portions.find(x => x.desc === EACH[key]); if (!pr) throw new Error('no portion ' + key); e.each = { g: Math.round(pr.g / pr.amt * 10) / 10, portion: pr.amt + ' ' + pr.desc }; }
  out[key] = e; count[status] = (count[status] || 0) + 1;
}
const doc = {
  source: 'USDA Agricultural Research Service, FoodData Central: SR Legacy (April 2018 release), public domain. Values per 100 g of the food as described.',
  url: 'https://fdc.nal.usda.gov/download-datasets',
  statuses: {
    usda: 'Values taken from the SR Legacy food named by its NDB number. Where SR Legacy has no figure for a nutrient (listed in gaps), the legacy figure is kept for that nutrient.',
    proxy: 'No SR Legacy entry is the same food, so the nearest one is used and named (dry breadcrumbs for panko, a pie crust made from flour and fat for shortcrust pastry, cured pork belly for pancetta, cured ham for gammon, light corn syrup for golden syrup, kidney beans for unnamed dried beans). Counted as sourced, with that caveat.',
    zero: 'Counted as nothing: water, colouring, flavourless or non-absorbed sweeteners, and bones used for stock and discarded.',
    generic: 'A deliberate stand-in for an unspecified ingredient (an unnamed spice, mixed herbs, a stock of unstated kind). The figure is a rough average with no single source.',
    unverified: 'No SR Legacy counterpart was matched. The figure is the hand-written legacy value, which has no recorded source.'
  },
  counts: count,
  foods: out
};
fs.writeFileSync(require('path').join(__dirname, '..', 'nutrition-sources.json'), JSON.stringify(doc, null, 1).replace(/\n\s+(-?[\d.]+|"[^"]*"|null)(,?)(?=\n\s+[-\d.]|\n\s+\])/g, '$1$2').replace(/\[\n\s+/g, '[').replace(/\n\s+\]/g, ']'));
console.log(count);
