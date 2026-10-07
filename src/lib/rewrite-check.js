'use strict';

/**
 * Is this rewrite allowed to replace the recipe's own words?
 *
 * A language model asked to "make it sound more human" will, given the chance,
 * make it sound more confident: a temperature it was not given, a year the dish
 * was invented, a chef who supposedly made it famous, a shelf life the cook
 * never tested. Those are the things a reader acts on and cannot check, so
 * this file is what stands between a model's output and a published page.
 *
 * It answers one question — does the rewrite change how the recipe is written
 * without changing what the recipe says? — with three kinds of rule:
 *
 *   facts      every quantity, year and proper noun in the new text already
 *              appears in the recipe; no diet claim or storage method is added
 *   voice      the rules in ./voice.js: no banned phrases, no first-person or
 *              testing claims, varied rhythm, honest bold
 *   variety    an opening no other recipe has, headings not already worn out
 *              across the site, no sentence lifted from another recipe
 *
 * It returns a list of plain-English problems. An empty list means accept. The
 * same list is sent back to the model on a retry, which is why each one says
 * what to do and not only what is wrong.
 *
 * It is deliberately conservative about what it lets through and deliberately
 * blunt about why, because the cost of a rejected rewrite is one more API call
 * and the cost of an accepted wrong one is a page that says something false.
 */

const voice = require('./voice');
const inline = require('./inline');
const layouts = require('./layouts');

/* ------------------------------------------------------------ quantities */

const NUMBER_WORDS = {
  one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10,
  eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15, sixteen: 16, seventeen: 17,
  eighteen: 18, nineteen: 19, twenty: 20, thirty: 30, forty: 40, fifty: 50, sixty: 60,
  seventy: 70, eighty: 80, ninety: 90
};
const NW = Object.keys(NUMBER_WORDS).join('|');
/* "forty-five", "twenty one", "a", "an", "half an" */
const WORD_QTY = `(?:(?:${NW})(?:[- ](?:one|two|three|four|five|six|seven|eight|nine))?|an?|half an?)`;

const TIME_UNIT = 'seconds?|secs?|minutes?|mins?|hours?|hrs?|days?|weeks?|months?';
const OTHER_UNIT = [
  '°\\s?[CF]', 'degrees?(?:\\s+[CF])?', '%', 'kg|kilograms?', 'g|grams?', 'oz|ounces?', 'lbs?|pounds?',
  'ml|millilitres?|milliliters?', 'l|litres?|liters?', 'tbsp|tablespoons?', 'tsp|teaspoons?', 'cups?',
  'fl\\.? ?oz', 'pints?', 'quarts?', 'cm|centimetres?|centimeters?', 'mm|millimetres?|millimeters?',
  'inch(?:es)?'
].join('|');
const ANY_UNIT = `${TIME_UNIT}|${OTHER_UNIT}`;

const PER_MIN = { sec: 1 / 60, min: 1, hr: 60, day: 1440, week: 10080, month: 43200 };

function timeUnit(u) {
  u = u.toLowerCase();
  if (u.startsWith('sec')) return 'sec';
  if (u.startsWith('min')) return 'min';
  if (u.startsWith('h')) return 'hr';
  if (u.startsWith('d')) return 'day';
  if (u.startsWith('w')) return 'week';
  return 'month';
}

function wordValue(w) {
  w = w.toLowerCase();
  if (/^half/.test(w)) return 0.5;
  if (w === 'a' || w === 'an') return 1;
  return w.split(/[- ]/).reduce((n, part) => n + (NUMBER_WORDS[part] || 0), 0);
}

/** One normalised key per quantity, so "1 hour" and "60 minutes" compare equal. */
function keyFor(value, unitText) {
  const u = unitText.toLowerCase().replace(/\s+/g, '');
  const round = n => Number(n.toFixed(2));
  if (new RegExp(`^(?:${TIME_UNIT})$`).test(u)) {
    const unit = timeUnit(u);
    return { family: 'time', unit, minutes: round(value * PER_MIN[unit]), key: `time:${round(value * PER_MIN[unit])}` };
  }
  if (u.startsWith('°') || u.startsWith('degree')) {
    const scale = /f$/i.test(u) ? 'F' : 'C';
    return { family: 'temp', key: `temp:${scale}:${round(value)}` };
  }
  if (u === '%') return { family: 'pct', key: `pct:${round(value)}` };
  if (/^(kg|kilogram)/.test(u)) return { family: 'mass', key: `mass:g:${round(value * 1000)}` };
  if (/^(g|gram)/.test(u)) return { family: 'mass', key: `mass:g:${round(value)}` };
  if (/^(lb|pound)/.test(u)) return { family: 'mass', key: `mass:oz:${round(value * 16)}` };
  if (/^(oz|ounce)/.test(u)) return { family: 'mass', key: `mass:oz:${round(value)}` };
  if (/^(l|litre|liter)/.test(u) && !/^(lb)/.test(u)) return { family: 'vol', key: `vol:ml:${round(value * 1000)}` };
  if (/^(ml|millilit)/.test(u)) return { family: 'vol', key: `vol:ml:${round(value)}` };
  if (/^(tbsp|tablespoon)/.test(u)) return { family: 'vol', key: `vol:tbsp:${round(value)}` };
  if (/^(tsp|teaspoon)/.test(u)) return { family: 'vol', key: `vol:tsp:${round(value)}` };
  if (/^cup/.test(u)) return { family: 'vol', key: `vol:cup:${round(value)}` };
  if (/^(fl|pint|quart)/.test(u)) return { family: 'vol', key: `vol:${u.replace(/s$/, '')}:${round(value)}` };
  if (/^(cm|centimet)/.test(u)) return { family: 'len', key: `len:cm:${round(value)}` };
  if (/^(mm|millimet)/.test(u)) return { family: 'len', key: `len:mm:${round(value)}` };
  return { family: 'len', key: `len:in:${round(value)}` };
}

const FRACTIONS = { '½': 0.5, '¼': 0.25, '¾': 0.75, '⅓': 1 / 3, '⅔': 2 / 3 };

/**
 * Every quantity with a unit in a text, as { text, key, family, minutes? }.
 * Ranges ("10 to 12 minutes") give both ends. Bare counts ("3 eggs") are not
 * quantities here: nobody is harmed by an extra egg in a sentence, and nobody
 * is helped by a validator that rejects it.
 */
function quantities(text) {
  const t = inline.plain(text).replace(/(\d),(\d{3})\b/g, '$1$2');
  const out = [];

  const numeral = new RegExp(
    `(\\d+(?:[.,]\\d+)?|\\d+\\/\\d+|[½¼¾⅓⅔])\\s*(?:(?:to|or|-|–)\\s*(\\d+(?:[.,]\\d+)?)\\s*)?(${ANY_UNIT})(?![\\p{L}])`, 'giu');
  let m;
  while ((m = numeral.exec(t))) {
    const parse = s => FRACTIONS[s] !== undefined ? FRACTIONS[s]
      : /\//.test(s) ? Number(s.split('/')[0]) / Number(s.split('/')[1]) : Number(s.replace(',', '.'));
    const unit = m[3];
    for (const raw of [m[1], m[2]].filter(Boolean)) out.push({ text: m[0].trim(), ...keyFor(parse(raw), unit) });
  }

  const wordedFull = new RegExp(`\\b(${WORD_QTY})\\s+(${TIME_UNIT}|kg|g|oz|lbs?|ml|litres?|liters?|cups?|tbsp|tsp|tablespoons?|teaspoons?|pints?)(?![\\p{L}])`, 'giu');
  while ((m = wordedFull.exec(t))) {
    const v = wordValue(m[1]);
    /* "a g" is not a quantity, and "a cup" on its own is a measure the recipe
       would have to give, so only a time can be spelled "a" or "an". */
    if (/^(?:an?|half an?)$/i.test(m[1]) && !new RegExp(`^(?:${TIME_UNIT})$`, 'i').test(m[2])) continue;
    if (v) out.push({ text: m[0].trim(), ...keyFor(v, m[2]) });
  }

  const serves = /\b(?:serves|feeds|makes|yields)\s+(\d+|one|two|three|four|five|six|seven|eight|nine|ten|twelve)\b/gi;
  while ((m = serves.exec(t))) {
    const n = /^\d+$/.test(m[1]) ? Number(m[1]) : NUMBER_WORDS[m[1].toLowerCase()];
    out.push({ text: m[0], family: 'serve', key: `serve:${n}` });
  }
  return out;
}

const YEAR = /\b(1[0-9]{3}|20[0-9]{2})s?\b/g;
const CENTURY = /\b([a-z]+(?:th|st|nd|rd))[- ]century\b/gi;
const WEEKDAYS = new Set(['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']);

const fold = s => String(s).normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[’‘]/g, "'").toLowerCase();

/** Capitalised words in the middle of a sentence: names, places, brands. */
function properNouns(text) {
  const t = inline.plain(text);
  const out = new Set();
  const re = /(?<=[\p{L}\p{N},;)]\s)([A-ZÀ-Ý][\p{L}'’-]{2,})/gu;
  let m;
  while ((m = re.exec(t))) out.add(m[1]);
  return [...out];
}

const DIET_WORDS = /\b(vegan|vegetarian|gluten[- ]free|dairy[- ]free|nut[- ]free|egg[- ]free|halal|kosher|keto|low[- ]carb|sugar[- ]free|low[- ]fat|low[- ]calorie|healthy|healthier|diabetic|allergen[- ]free)\b/gi;

const STORE_FACTS = {
  fridge: /fridge|refrigerat/i,
  freezer: /freez|frozen/i,
  reheat: /reheat/i,
  fresh: /best (?:eaten|served|made|drunk|enjoyed|fresh)|at once|straight away/i,
  no: /\b(?:not|never|cannot|can't|doesn't|don't|won't|avoid)\b[^.]{0,40}\b(?:freeze|keep|store|reheat)/i
};

/* ------------------------------------------------------------- the check */

const STOP = new Set('the and for with that this from into over when then than they them their have has had are was were been being will would could should your you not but can all any out off per each just also very more most some such only onto upon while which what where there here about after before because until once'.split(' '));
const contentWords = text => new Set(fold(inline.plain(text)).split(/[^a-z0-9]+/).filter(w => w.length > 3 && !STOP.has(w)));

function jaccard(a, b) {
  if (!a.size || !b.size) return 0;
  let shared = 0;
  for (const x of a) if (b.has(x)) shared++;
  return shared / (a.size + b.size - shared);
}

/** The whole original recipe as one string to search, and the set of facts in it. */
function facts(row, orig) {
  const pieces = [row.title, row.cuisine, row.category, ...(row.tags || []), orig.d, orig.meta, orig.why,
    ...(orig.tips || []), ...(orig.pair || []), orig.store, ...(orig.ing || []), ...(orig.st || []), ...(orig.kw || [])];
  const corpus = pieces.filter(Boolean).join('\n');
  const allowed = new Set();
  let maxMinutes = 0;
  for (const q of quantities(corpus)) {
    allowed.add(q.key);
    if (q.family === 'time' && q.minutes > maxMinutes) maxMinutes = q.minutes;
  }
  for (const n of [row.prep, row.cook, orig.rest && orig.rest[0]]) {
    if (n) { allowed.add(`time:${n}`); if (n > maxMinutes) maxMinutes = n; }
  }
  if (row.servings) allowed.add(`serve:${row.servings}`);
  return {
    corpus,
    foldedCorpus: fold(corpus),
    allowed,
    maxMinutes,
    years: new Set((corpus.match(YEAR) || []).map(y => y.replace(/s$/, ''))),
    centuries: new Set([...corpus.matchAll(CENTURY)].map(m => m[1].toLowerCase())),
    dietWords: new Set([...corpus.matchAll(DIET_WORDS)].map(m => m[1].toLowerCase().replace(/[- ]/g, ' '))),
    store: Object.fromEntries(Object.entries(STORE_FACTS).map(([k, re]) => [k, re.test(orig.store || '')])),
    ingredientWords: contentWords((orig.ing || []).join(' '))
  };
}

/** A heading's identity across recipes: folded, with the recipe's own name standing for itself. */
const headingKey = (text, title) => fold(text).split(fold(title)).join('{title}');

const sentenceKey = (s, title) => inline.plain(s).toLowerCase().split(String(title).toLowerCase()).join('{title}')
  .replace(/\d+/g, '#').replace(/\s+/g, ' ').trim();

/**
 * What the rest of the catalogue already says, so a rewrite can be held to
 * "an opening nobody else has" and "headings that are not already everywhere".
 * Built once per run from the originals; `claim` adds each rewrite as it is
 * accepted, so the tenth recipe of a batch is checked against the first nine.
 */
class Registry {
  constructor() {
    this.openers = new Map();    // four-word opening -> Set(slug)
    this.sentences = new Map();  // normalised sentence -> Set(slug)
    this.headings = new Map();   // folded heading text -> count
    this.claimed = new Map();    // slug -> what it added, so a redo can take it back
  }

  static seed(entries, poolHeadings = []) {
    const r = new Registry();
    for (const e of entries) r._add(e.slug, e.title, e.why, e.tips, null);
    /* The wordings in the layout pools are already on hundreds of pages each. */
    for (const h of poolHeadings) r.headings.set(fold(h), 1000);  // pool wordings keep their {title} placeholder
    return r;
  }

  _add(slug, title, why, tips, headings) {
    const first = inline.paragraphs(why)[0] || why;
    const op = voice.opener(first, 4);
    if (op) { (this.openers.get(op) || this.openers.set(op, new Set()).get(op)).add(slug); }
    for (const s of [...voice.sentences(why), ...(tips || []).flatMap(t => voice.sentences(t))]) {
      if (voice.words(s).length < 6) continue;
      const k = sentenceKey(s, title);
      (this.sentences.get(k) || this.sentences.set(k, new Set()).get(k)).add(slug);
    }
    const hs = headings ? Object.values(headings).map(h => headingKey(h, title)) : [];
    for (const h of hs) this.headings.set(h, (this.headings.get(h) || 0) + 1);
    return { op, hs };
  }

  /** The most worn headings, most used first: [[key, count], …]. */
  topHeadings(n) {
    return [...this.headings.entries()].sort((a, b) => b[1] - a[1]).slice(0, n);
  }

  /** Record an accepted rewrite. */
  claim(slug, title, entry) {
    this.release(slug);
    const added = this._add(slug, title, entry.why, entry.tips, entry.headings);
    this.claimed.set(slug, added);
  }

  /** Take a rewrite's headings back out, for a redo. */
  release(slug) {
    const prev = this.claimed.get(slug);
    if (!prev) return;
    for (const h of prev.hs) this.headings.set(h, Math.max(0, (this.headings.get(h) || 1) - 1));
    this.claimed.delete(slug);
  }
}

/** How many recipes may share one heading wording. Five in 2,400 is a coincidence; twenty is a template. */
const HEADING_REUSE = 5;

/**
 * @param {object} entry   what the model produced, already shaped as an overlay
 *                         entry: { d, why (paragraphs joined by a blank line), tips, store, headings, hook }
 * @param {object} ctx     { row, orig, hook, layout } for this recipe
 * @param {Registry} registry
 * @returns {string[]} problems; empty means accept
 */
function validate(entry, ctx, registry) {
  const { row, orig, hook } = ctx;
  const f = ctx.facts || (ctx.facts = facts(row, orig));
  const problems = [];
  const add = msg => problems.push(msg);

  /* ---- shape -------------------------------------------------------- */
  if (typeof entry.d !== 'string' || typeof entry.why !== 'string' || !Array.isArray(entry.tips) || typeof entry.store !== 'string') {
    return ['The answer is missing one of d, why, tips or store, or one has the wrong type.'];
  }
  const paragraphs = inline.paragraphs(entry.why);
  const whyWords = voice.words(entry.why).length;
  const origWhyWords = voice.words(orig.why).length;

  if (entry.d.length < 60 || entry.d.length > 260) add(`d is ${entry.d.length} characters; it must be 60 to 260 (one or two sentences).`);
  const minWhy = Math.max(45, Math.round(origWhyWords * 0.7));
  const maxWhy = Math.min(300, Math.round(origWhyWords * 1.8) + 40);
  if (whyWords < minWhy || whyWords > maxWhy) add(`why is ${whyWords} words; for this recipe it must be ${minWhy} to ${maxWhy}.`);
  if (whyWords >= 110 ? (paragraphs.length < 2 || paragraphs.length > 4) : paragraphs.length > 2) {
    add(`why has ${paragraphs.length} paragraph(s); use 2 to 4 (separated by a blank line) when it runs to 110 words or more, otherwise 1 or 2.`);
  }
  if (entry.tips.length < 2 || entry.tips.length > 5) add(`tips has ${entry.tips.length} items; it must have 2 to 5.`);
  for (const [i, t] of entry.tips.entries()) {
    const w = voice.words(t).length;
    if (typeof t !== 'string' || w < 6 || w > 60) add(`tip ${i + 1} is ${w} words; each tip must be 6 to 60.`);
  }
  const storeWords = voice.words(entry.store).length;
  if (storeWords < 4 || storeWords > 80) add(`store is ${storeWords} words; it must be 4 to 80.`);
  if (/[<>]|\]\(|^#|^\s*[-*] |`/m.test([entry.d, entry.why, ...entry.tips, entry.store].join('\n'))) {
    add('The text contains markup (HTML, links, headings, bullets or backticks). Plain sentences only; the one allowed mark is **bold**.');
  }

  /* ---- voice -------------------------------------------------------- */
  const fields = { d: entry.d, why: entry.why, store: entry.store };
  entry.tips.forEach((t, i) => { fields[`tip ${i + 1}`] = t; });
  for (const [name, text] of Object.entries(fields)) {
    for (const finding of voice.lint(String(text), { title: row.title })) {
      if (finding.level === 'error') {
        add(`${name}: ${finding.id} — "${finding.match}". ${voiceAdvice(finding.id)}`);
      } else if (finding.id === 'em-dashes' || finding.id === 'not-just') {
        add(`${name}: ${finding.id === 'em-dashes' ? 'too many em dashes (' + finding.match + '); use commas, colons or full stops' : 'avoid "not just … but" / "more than just" constructions'}.`);
      }
    }
  }
  const rhythm = voice.rhythm(entry.why);
  if (whyWords >= 60 && rhythm.short === 0) add('why has no sentence of eight words or fewer. Add at least one short one; vary the rhythm.');
  if (rhythm.count >= 4 && rhythm.sd < 4) add(`why reads in a monotone (sentence-length spread ${rhythm.sd}). Mix very short sentences with long ones.`);

  const bold = [...inline.spans(entry.why), ...entry.tips.flatMap(t => inline.spans(t))];
  const whyBold = inline.spans(entry.why).length;
  const tipBold = entry.tips.reduce((n, t) => n + inline.spans(t).length, 0);
  if (whyBold > 3) add(`why has ${whyBold} bold spans; at most 3.`);
  if (tipBold > 2) add(`tips have ${tipBold} bold spans in all; at most 2.`);
  const titleWords = new Set(fold(row.title).split(/[^a-z0-9]+/).filter(w => w.length > 2));
  const keywordPhrases = (orig.kw || []).map(k => fold(k));
  for (const span of bold) {
    const w = span.trim().split(/\s+/);
    if (w.length > 6) add(`Bold span "${span}" is ${w.length} words; keep bold to 1–6 words.`);
    const folded = fold(span);
    if (w.every(x => titleWords.has(fold(x).replace(/[^a-z0-9]/g, ''))) || keywordPhrases.some(k => k === folded)) {
      add(`Bold span "${span}" is the recipe's name or a search keyword. Bold what a hurried cook must not miss: a warning, a number, a cue.`);
    }
  }
  if ([entry.d, entry.store].some(t => /\*\*/.test(t))) add('Bold is allowed only in why and tips.');
  if (/\*/.test(inline.plain([entry.d, entry.why, ...entry.tips, entry.store].join(' ')))) add('A stray * remains after the bold spans are read; every ** must be paired.');

  /* ---- the opening --------------------------------------------------- */
  const firstPara = paragraphs[0] || '';
  const firstSentence = voice.sentences(firstPara)[0] || '';
  if (hook) {
    if (hook.id === 'question' && !/\?\s*$/.test(firstSentence)) add('The assigned opening is a question: the first sentence of why must be a question.');
    if (hook.id === 'short-sharp' && voice.words(firstSentence).length > 8) add('The assigned opening is short and sharp: the first sentence of why must be eight words or fewer.');
    if (hook.id === 'ingredient-first') {
      const hit = [...contentWords(firstSentence)].filter(w => f.ingredientWords.has(w));
      if (hit.length < 2) add('The assigned opening starts on the ingredients: the first sentence of why must name at least two of them.');
    }
  }
  const op = voice.opener(firstPara, 4);
  const others = [...(registry.openers.get(op) || [])].filter(s => s !== row.slug);
  if (others.length) add(`The first four words of why ("${op}") already open the recipe "${others[0]}". Open differently.`);

  /* ---- facts -------------------------------------------------------- */
  const textFields = { d: entry.d, why: entry.why, store: entry.store };
  entry.tips.forEach((t, i) => { textFields[`tip ${i + 1}`] = t; });
  for (const [name, text] of Object.entries(textFields)) {
    const early = name === 'why' || name.startsWith('tip');
    for (const q of quantities(text)) {
      if (f.allowed.has(q.key)) continue;
      if (early && q.family === 'time' && ['sec', 'min', 'hr'].includes(q.unit) && q.minutes <= Math.min(f.maxMinutes, 240)) continue;
      add(`${name}: "${q.text}" is not a quantity that appears in the original recipe. Use only the recipe's own numbers (a "check early" time may be any time shorter than one the recipe states).`);
    }
    for (const y of (String(text).match(YEAR) || [])) {
      if (!f.years.has(y.replace(/s$/, ''))) add(`${name}: the year "${y}" is not in the original recipe. Do not add dates.`);
    }
    for (const m of String(text).matchAll(CENTURY)) {
      if (!f.centuries.has(m[1].toLowerCase())) add(`${name}: "${m[0]}" is not in the original recipe. Do not add history.`);
    }
    for (const word of properNouns(text)) {
      const w = fold(word);
      if (WEEKDAYS.has(w)) continue;
      if (!f.foldedCorpus.includes(w)) add(`${name}: the name "${word}" does not appear anywhere in the original recipe. Remove it; do not add people, places or brands.`);
    }
    for (const m of String(text).matchAll(DIET_WORDS)) {
      const k = m[1].toLowerCase().replace(/[- ]/g, ' ');
      if (!f.dietWords.has(k)) add(`${name}: "${m[1]}" is a diet or health claim the original recipe does not make. Remove it.`);
    }
  }
  const storeNow = Object.fromEntries(Object.entries(STORE_FACTS).map(([k, re]) => [k, re.test(entry.store)]));
  for (const k of Object.keys(STORE_FACTS)) {
    if (storeNow[k] !== f.store[k]) {
      add(`store: the original ${f.store[k] ? 'says' : 'does not say'} something about "${k}" and the rewrite ${storeNow[k] ? 'does' : 'does not'}. Keep storage advice exactly as stated; do not add or drop a method.`);
    }
  }
  if (jaccard(contentWords(entry.d), contentWords(orig.d)) < 0.2) add('d has drifted from the original description of the dish; keep what the dish is, change how it is said.');
  /* A rewrite of the same facts shares plenty of words with the original, so
     "changed" cannot mean "different words". It means the sentences are new. */
  const before = new Set(voice.sentences(orig.why).map(s => sentenceKey(s, row.title)));
  const now = voice.sentences(entry.why).map(s => sentenceKey(s, row.title));
  const carried = now.filter(s => before.has(s)).length;
  if (now.length && carried / now.length > 0.6) {
    add(`why carries ${carried} of its ${now.length} sentences over word for word from the original. Write new sentences that say the same things.`);
  }

  /* ---- variety ------------------------------------------------------ */
  const lifted = [];
  for (const s of [...voice.sentences(entry.why), ...entry.tips.flatMap(t => voice.sentences(t))]) {
    if (voice.words(s).length < 6) continue;
    const who = [...(registry.sentences.get(sentenceKey(s, row.title)) || [])].filter(x => x !== row.slug);
    if (who.length) lifted.push(`"${s.slice(0, 60)}…" (also in ${who[0]})`);
  }
  if (lifted.length) add(`These sentences are already on another recipe; write your own: ${lifted.slice(0, 3).join('; ')}.`);

  const hs = entry.headings || {};
  const seenHeading = new Set();
  for (const [section, text] of Object.entries(hs)) {
    if (!layouts.SECTIONS.includes(section)) { add(`headings.${section} is not a section of the page.`); continue; }
    if (!layouts.usableHeading(text, section, row)) {
      add(`headings.${section} ("${text}") is not usable: 2 to 8 words, no markup${section === 'method' ? `, and it must contain "${row.title}"` : ''}.`);
      continue;
    }
    const key = headingKey(text, row.title);
    if (seenHeading.has(key)) add(`headings.${section} repeats another heading on this page.`);
    seenHeading.add(key);
    /* The method heading has to carry the dish's name, so its wording is a
       pattern by nature ("Making X"); the layout pool varies it. Only the
       headings that can be specific to a dish are held to being specific. */
    const used = section === 'method' ? 0 : (registry.headings.get(key) || 0);
    if (used >= HEADING_REUSE) add(`headings.${section} ("${text}") is already used on ${used} other recipes. Write one specific to this dish.`);
    for (const lintFinding of voice.lint(text, { title: row.title })) {
      if (lintFinding.level === 'error') add(`headings.${section}: ${lintFinding.id} — "${lintFinding.match}".`);
    }
  }

  return problems;
}

function voiceAdvice(id) {
  if (voice.FIRST_PERSON.some(f => f.id === id)) return 'No first-person or testing claims; write to the cook in the second person.';
  if (id === 'exclamation') return 'No exclamation marks.';
  return 'Say the plain thing instead.';
}

module.exports = { validate, facts, quantities, properNouns, Registry, HEADING_REUSE, fold };
