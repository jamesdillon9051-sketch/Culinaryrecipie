// Candidate generation + strict agreement rule. node match2.js -> match2.json, prints counts
const fs = require('fs');
const D = (process.env.WD_SR_WORK || require('path').join(__dirname, '..', '..', '.nutrition-work')) + '/';
process.env.WD_NUTRITION_LEGACY = '1';
const { BASE, MORE, KP, ALIAS } = require('../nutrition-foods');
const FOODS = { ...BASE, ...MORE };
const SR = JSON.parse(fs.readFileSync(D + 'sr.json', 'utf8'));
const byNdb = Object.fromEntries(SR.map(f => [f.ndb, f]));
const MAP = JSON.parse(fs.readFileSync(require('path').join(__dirname, 'decisions.json'), 'utf8'));   // manual: key -> ndb | status word | '?query'
const RESOLVED = [];
for (const [k, v] of Object.entries(MAP)) {
  if (typeof v === 'string' && v[0] === '?') {
    const words = v.slice(1).toLowerCase().split(/\s+/);
    const hit = SR.filter(x => words.every(w => x.desc.toLowerCase().includes(w))).sort((a, b) => a.desc.length - b.desc.length)[0];
    MAP[k] = hit ? hit.ndb : 'unverified';
    RESOLVED.push(k + ' <- ' + v + ' => ' + (hit ? hit.ndb + ' ' + hit.desc.slice(0, 70) : 'NO HIT'));
  }
}
if (process.env.SHOWRES) console.log(RESOLVED.join('\n'));
const src = fs.readFileSync(require('path').join(__dirname, 'match.js'), 'utf8');
// reuse candidates() from match.js by evaluating its helper section
const helpers = src.slice(src.indexOf('const sing'), src.indexOf('const result = {}'));
const { candidates } = new Function('SR', 'ALIAS', helpers + '\nreturn { candidates };')(SR, ALIAS);
const dist = (o, n) => Math.abs(o[0] - n.p) + Math.abs(o[1] - n.c) + Math.abs(o[2] - n.f);
const BRANDISH = d => /\b[A-Z]{4,}\b/.test(d.replace(/\b(USDA|NFS|DRY|FAT|RAW|PUDDING|WITH|AND|MIX|FREE|RTE)\b/g, '')) || /juice drink|V8|raccoon|hibiscus|Nabisco|Mezzetta|AMBER|babyfood|imitation|fast foods|restaurant/i.test(d);
const agree = (o, n) => dist(o, n) <= 5 && Math.abs(o[3] - (n.fibre || 0)) <= 3 && Math.abs(o[5] - (n.na || 0)) <= Math.max(30, 0.3 * (n.na || 0));
const out = {};
for (const [key, o] of Object.entries(FOODS)) {
  if (MAP[key] !== undefined) { out[key] = { how: 'manual', ndb: MAP[key] }; continue; }
  const cands = candidates(key).slice(0, 8);
  if (!cands.length) { out[key] = { how: 'none', cands: [] }; continue; }
  const top = cands[0].score;
  const near = cands.filter(c => c.score >= top - 12).sort((a, b) => dist(o, a.n) - dist(o, b.n));
  const clean = near.filter(c => !BRANDISH(c.desc));
  const best = clean[0] || near[0];
  const branded = !clean.length;
  out[key] = { how: (!branded && agree(o, best.n)) ? 'auto' : 'review', ndb: best.ndb, desc: best.desc, d: Math.round(dist(o, best.n) * 10) / 10,
    cands: cands.slice(0, 5).map(c => ({ ndb: c.ndb, desc: c.desc, n: c.n, s: c.score })) };
}
fs.writeFileSync(D + 'match2.json', JSON.stringify(out));
const c = { auto: 0, review: 0, none: 0, manual: 0 };
Object.values(out).forEach(x => c[x.how]++);
console.log(c);
