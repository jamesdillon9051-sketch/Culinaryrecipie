// Pair each food in tools/nutrition-foods.js with a USDA SR Legacy entry by name; report deviations.
const fs = require('fs');
const D = (process.env.WD_SR_WORK || require('path').join(__dirname, '..', '..', '.nutrition-work')) + '/';
process.env.WD_NUTRITION_LEGACY = '1';
const { BASE, MORE, KP, ALIAS, PORTION } = require('../nutrition-foods');
const FOODS = { ...BASE, ...MORE };
const SR = JSON.parse(fs.readFileSync(D + 'sr.json', 'utf8'));
const OVERRIDE = fs.existsSync(D + 'overrides.json') ? JSON.parse(fs.readFileSync(D + 'overrides.json', 'utf8')) : {};

const sing = w => (w.length > 4 && w.endsWith('ies')) ? w.slice(0, -3) + 'y' : (w.length > 4 && w.endsWith('oes')) ? w.slice(0, -2) : (w.length > 3 && w.endsWith('s') && !/(ss|us|is)$/.test(w)) ? w.slice(0, -1) : w;
const toks = s => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9% ]+/g, ' ').split(/\s+/).filter(Boolean).map(sing);
const SYN = {
  mince: ['ground'], courgette: ['zucchini', 'squash'], aubergine: ['eggplant'], coriander: ['cilantro', 'coriander'], capsicum: ['pepper'],
  rocket: ['arugula'], swede: ['rutabaga'], prawn: ['shrimp'], cornflour: ['cornstarch'], icing: ['powdered'], caster: ['granulated'],
  plain: ['all-purpose', 'all', 'purpose'], double: ['heavy', 'whipping'], single: ['light'], soured: ['sour'], tin: ['canned'], tinned: ['canned'],
  beetroot: ['beet'], chickpea: ['chickpea', 'garbanzo'], mangetout: ['edible-podded'], biscuit: ['cookie', 'cracker'], crisp: ['chip'], chip: ['french', 'fried'],
  treacle: ['molasses'], sultana: ['raisin'], jam: ['jam', 'preserve'], yoghurt: ['yogurt'], yogurt: ['yogurt'], marrow: ['squash'], spring: ['spring'], scallion: ['spring'],
  sweetcorn: ['corn', 'sweet'], wholemeal: ['whole-wheat', 'whole', 'wheat'], bicarbonate: ['baking'], gherkin: ['pickle', 'cucumber'], cos: ['romaine'], pak: ['pak-choi', 'pak', 'choi'],
  fillet: ['fillet'], chilli: ['chili', 'pepper'], chili: ['chili', 'pepper'], shallot: ['shallot'], vermicelli: ['vermicelli', 'noodle'], stock: ['broth', 'stock'], oil: ['oil'],
  squash: ['squash'], pepper: ['pepper']
};
const NEEDS_NOT_RAW = /\b(cooked|tin|canned|dried|dry|roast|roasted|boiled|fried|smoked|pickled|frozen|toasted|baked|steamed|stewed|paste|powder|sauce|juice|jam|flour|oil|butter|cream|milk|cheese|bread|pasta|rice|noodle|cereal|sugar|syrup|vinegar|wine|beer|spirit|liqueur|biscuit|cracker|crisp|chocolate|mix|stock|cube|extract|seasoning|spice|salt)\b/;
const BAD = /\b(babyfood|baby food|restaurant|fast foods?|school lunch|commodity|imitation|dietetic|low[- ]sodium|reduced[- ]fat|fat[- ]free|nonfat|lowfat|low fat|light|diet|infant|formula|usda|campbell|kraft|pillsbury|kellogg|general mills|quaker|nabisco|mcdonald|burger king|wendy|taco bell|ruby tuesday|applebee|pizza hut|domino|subway|kfc|popeye)\b/i;

function candidates(key) {
  const alias = ALIAS[key] || [];
  const phrases = [key.replace(/_/g, ' '), ...alias];
  const phrase = phrases[0];
  const ours = toks(phrase);
  const need = ours.filter(t => !['tin', 'cooked', 'raw', 'fresh', 'whole', 'dried', 'dry'].includes(t) || ['dried', 'dry'].includes(t));
  const wantsCooked = /\b(cooked|boiled|roasted|steamed|fried)\b/.test(phrase);
  const wantsRaw = !NEEDS_NOT_RAW.test(phrase);
  const out = [];
  for (const f of SR) {
    const d = toks(f.desc);
    const set = new Set(d);
    let ok = true;
    for (const t of ours) {
      if (['tin', 'tinned'].includes(t)) { if (!set.has('canned')) { ok = false; break; } continue; }
      const alts = [t, ...(SYN[t] || [])].flatMap(a => toks(a));
      if (!alts.some(a => set.has(a))) { ok = false; break; }
    }
    if (!ok) continue;
    let score = 100 - 2 * Math.max(0, d.length - ours.length);
    if (wantsRaw) score += set.has('raw') ? 10 : -4; else if (wantsCooked && set.has('cooked')) score += 8;
    if (BAD.test(f.desc) && !BAD.test(phrase)) score -= 25;
    if (/\bw\//i.test(f.desc) || /\bwith\b/.test(f.desc)) score -= 3;
    out.push({ id: f.id, ndb: f.ndb, desc: f.desc, n: f.n, portions: f.portions, score });
  }
  out.sort((a, b) => b.score - a.score);
  return out;
}
const result = {};
for (const key of Object.keys(FOODS)) {
  let c;
  if (OVERRIDE[key] !== undefined) {
    if (OVERRIDE[key] === null) { result[key] = { status: 'none' }; continue; }
    const f = SR.find(x => x.ndb === OVERRIDE[key]);
    c = f ? [{ id: f.id, ndb: f.ndb, desc: f.desc, n: f.n, portions: f.portions, score: 999 }] : [];
  } else c = candidates(key);
  if (!c.length) { result[key] = { status: 'none' }; continue; }
  result[key] = { status: 'match', best: c[0], alts: c.slice(1, 3).map(x => ({ ndb: x.ndb, desc: x.desc, score: x.score })) };
}
const [pi, ci, fi, fibi, si, nai] = [0, 1, 2, 3, 4, 5];
const rows = [];
for (const [key, r] of Object.entries(result)) {
  const o = FOODS[key];
  const row = { key, status: r.status, ours: o };
  if (r.status === 'match') {
    const n = r.best.n;
    const ourKcal = 4 * o[pi] + 4 * o[ci] + 9 * o[fi];
    row.sr = { ndb: r.best.ndb, desc: r.best.desc, kcal: n.kcal, p: n.p, c: n.c, f: n.f, fibre: n.fibre || 0, sugar: n.sugar || 0, na: n.na || 0, k: n.k, ph: n.ph };
    row.ourKcal = Math.round(ourKcal);
    row.kcalDev = n.kcal > 5 ? (ourKcal - n.kcal) / n.kcal : (ourKcal - n.kcal) / 5;
    row.score = r.best.score;
    row.alts = r.alts;
  }
  rows.push(row);
}
fs.writeFileSync(D + 'match-result.json', JSON.stringify(rows));
const m = rows.filter(r => r.status === 'match');
console.log('foods', rows.length, 'matched', m.length, 'no candidate', rows.length - m.length);
console.log('matched with |kcal dev| <= 10%', m.filter(r => Math.abs(r.kcalDev) <= .10).length, ' <= 20%', m.filter(r => Math.abs(r.kcalDev) <= .20).length, ' > 20%', m.filter(r => Math.abs(r.kcalDev) > .20).length);
