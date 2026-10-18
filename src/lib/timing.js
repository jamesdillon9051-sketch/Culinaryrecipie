'use strict';
/**
 * How long a recipe takes from start to finish, read from its own method.
 *
 * A recipe has three kinds of time. Preparation and cooking are columns in the
 * catalogue. Waiting — proving, chilling, marinating, cooling before slicing —
 * is described in the method, and is what a header most often gets wrong: a
 * focaccia advertised as "ready in 50 minutes" over a dough that spends
 * twelve to twenty-four hours in the fridge.
 *
 * This module reads the waiting out of the method so that every place that
 * states a time — the recipe card, the directory cards, the filters, the
 * title, the description, the search phrases and the Recipe JSON-LD — works
 * from one figure. It returns a range, because methods do: "refrigerate for
 * 12 to 24 hours" is a floor of twelve and a ceiling of twenty-four, and the
 * page should say so rather than pick one.
 *
 * The model, stated so it can be argued with:
 *
 *   - Waits in the method happen one after another, so they add up.
 *   - A wait set going against an ingredient ("soaked overnight") happens
 *     before the cook starts, all at once, so the longest one counts.
 *   - A wait that happens *while* something else is done ("while the dough
 *     rests, make the filling") overlaps that work, so its time is not added
 *     on top of the preparation it hides.
 *   - Repeated intervals ("four sets of folds, 30 minutes apart") are the gaps
 *     between them: three gaps of thirty minutes.
 *   - Anything under half an hour is a pause rather than a plan and is left in
 *     the preparation time, where it already sits.
 *   - Storage notes, optional extras and "ideally" improvements are not part
 *     of making the dish.
 *
 * It is a reader of English, not a proof. tools/timing-audit.js prints what it
 * found for any recipe (--why) so a person can check it.
 */

const COOKS = /\b(bake|bakes|baking|roast|roasts|roasting|fry|fries|frying|deep-fry|boil|boils|boiling|simmer|simmers|simmering|saut[eé]|saut[eé]s|grill|grills|grilling|griddle|toast|toasts|toasting|steam|steams|steaming|poach|poaches|poaching|sear|sears|searing|braise|braises|braising|heat the oven|preheat|blanch|blanches|blanching)\b/i;

/* Waiting the recipe requires, as opposed to working. "Relax" and "come to
   room temperature" were missing, which is how a focaccia's two to three
   hours on the counter went uncounted. */
const WAIT = /\b(chill|chilled|chilling|rest|rested|resting|refrigerate|refrigerated|marinate|marinated|marinating|prove|proved|proving|proof|proofed|proofing|rise|risen|rising|ferment|fermented|fermenting|soak|soaked|soaking|steep|steeped|brine|brined|cure|cured|curing|macerate|macerated|freeze|frozen|thaw|thawed|defrost|defrosted|leave|infuse|infused|hang|sprout|sprouted|drain|drained|cool|cooled|cooling|relax|relaxed|relaxing|come to room temperature)\b/i;
/* Shelf life, optional extras and make-ahead notes are not part of making it. */
const STORAGE = /\b(keeps?|will keep|store[ds]?|storing|lasts?|up to|freezer|leftovers?|at this point|if you (?:can|have|want|like|prefer)|can (?:also|be)|no more than|within|serve|reheat)\b/i;
const HEATVERB = /\b(bake|roast|fry|simmer|boil|cook|grill|steam|poach|braise|toast|sear|smoke)\w*\b/i;
const COOKED = new RegExp(HEATVERB.source + String.raw`\s+(?:\w+\s+){0,14}$`, 'i');

const WORDS = { a: 1, an: 1, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, twelve: 12 };
const NUM = String.raw`(\d+(?:\.\d+)?|a|an|one|two|three|four|five|six|seven|eight|nine|ten|twelve)`;
const value = t => (/^\d+(\.\d+)?$/.test(t) ? parseFloat(t) : (WORDS[t.toLowerCase()] || null));
/* The number, an optional upper bound ("12 to 24"), and the unit. */
const UNITS = new RegExp(NUM + String.raw`(?:\s*(?:to|–|-|and|or)\s*(\d+(?:\.\d+)?))?\s*(?:full|good|whole|further|solid|clear)?\s*(minutes?|mins?|hours?|hrs?|days?|weeks?|nights?)\b`, 'gi');
const toMinutes = (n, unit) => {
  const u = unit.toLowerCase();
  return n * (/^m/.test(u) ? 1 : /^h/.test(u) ? 60 : /^w/.test(u) ? 10080 : 1440);
};

/** The wait one sentence asks for, as { min, max } minutes. */
function waitIn(raw) {
  const sentence = raw.replace(/(\d+)\s+1\/2\b/g, (_, n) => `${n}.5`);

  /* "Four sets of stretch-and-folds 30 minutes apart": the gaps between them. */
  const apart = new RegExp(NUM + String.raw`\s+(?:sets?|rounds?|times|turns|folds)\b[^.]*?` + NUM + String.raw`\s*(minutes?|mins?|hours?)\s+apart`, 'i').exec(sentence);
  const repeated = apart ? Math.max(0, value(apart[1]) - 1) * toMinutes(value(apart[2]), apart[3]) : 0;

  const floor = new RegExp(String.raw`at least\s+` + NUM + String.raw`\s*(minutes?|mins?|hours?|hrs?|days?|weeks?)\b`, 'i').exec(sentence);
  if (floor) {
    const m = toMinutes(value(floor[1]), floor[2]);
    return { min: m + repeated, max: m + repeated };
  }
  let best = { min: 0, max: 0 };
  let match;
  UNITS.lastIndex = 0;
  while ((match = UNITS.exec(sentence))) {
    const before = sentence.slice(0, match.index);
    if (COOKED.test(before)) continue;
    /* "Remove the brisket after 90 minutes" is time already spent. */
    if (/\bafter\s+$/i.test(before)) continue;
    /* "Cool completely, ideally overnight" promises the cooling, not the night. */
    if (/\bideally\s+$/i.test(before)) continue;
    /* The interval of a repeated action is counted above, not here. */
    if (apart && /^\s*apart/i.test(sentence.slice(match.index + match[0].length))) continue;
    /* "Prove 45 minutes, then bake for 50" — a cooking verb standing between
       the waiting verb and the number means the number belongs to the cooking. */
    const lastWait = Math.max(...[...before.matchAll(new RegExp(WAIT.source, 'gi'))].map(m => m.index), -1);
    if (lastWait >= 0 && HEATVERB.test(before.slice(lastWait))) continue;
    const n = value(match[1]);
    if (n === null) continue;
    const lo = toMinutes(n, match[3]);
    const hi = match[2] ? toMinutes(parseFloat(match[2]), match[3]) : lo;
    if (lo > best.min) best = { min: lo, max: Math.max(lo, hi) };
  }
  if (/(?<!ideally )\bovernight\b/i.test(sentence) && best.min < 480) best = { min: 480, max: Math.max(best.max, 480) };
  return { min: best.min + repeated, max: best.max + repeated };
}

/* Waits the sentence cannot disambiguate on its own, reviewed by a person and recorded with the
   reason in src/data/timing-overrides.json. */
const EXCEPT = Object.fromEntries(Object.entries(require('../data/timing-overrides.json').recipes)
  .map(([slug, o]) => [slug, { min: o.min, max: o.max }]));

/* "Every 30 minutes for 2 hours, stretch and fold": the span is unattended between the turns. */
const SPAN = new RegExp(String.raw`\bevery\s+` + NUM + String.raw`\s*(?:minutes?|mins?|hours?)\s+for\s+(?:about\s+)?` + NUM + String.raw`(?:\s*(?:to|–|-)\s*(\d+(?:\.\d+)?))?\s*(minutes?|mins?|hours?)`, 'i');

/* The waiting verbs a sentence uses, reduced to a stem so that "soaked",
   "soaking" and "soak" are recognised as the same wait. */
function waitVerbs(sentence) {
  const found = new Set();
  for (const [word] of sentence.matchAll(new RegExp(WAIT.source, 'gi'))) {
    found.add(word.toLowerCase().replace(/(?:ed|ing|s|d)$/, ''));
  }
  return found;
}

/* A sentence that is not asking the cook to wait at all. */
function notAWait(sentence) {
  if (!WAIT.test(sentence) || STORAGE.test(sentence)) return true;
  /* A whole instruction offered as an ideal is an improvement, not a step. */
  return /^\s*ideally\b/i.test(sentence);
}

/* A wait the cook spends doing something else: "While the dough rests, make
   the filling." The preparation time already holds that work. */
const overlaps = sentence => /^\s*(?:while|meanwhile|in the meantime)\b/i.test(sentence);

/* "Leave 1 hour, or refrigerate up to 3 weeks" — the alternative is not part
   of the timing, so the clause after "or" is dropped. */
const clause = raw => raw.split(/,\s*or\s+/i)[0];

/** Unattended waiting the recipe describes, as { min, max, trace }. */
function detectWait(recipe) {
  const trace = [];
  if (EXCEPT[recipe.slug]) return { ...EXCEPT[recipe.slug], trace: ['fixed exception'] };

  let min = 0;
  let max = 0;
  const waited = new Set();
  for (const raw of (recipe.steps || recipe.st || []).join(' ').split(/(?<=[.!?])\s+/)) {
    const sentence = clause(raw);
    const span = !overlaps(sentence) && SPAN.exec(sentence);
    if (span) {
      const lo = toMinutes(value(span[2]), span[4]);
      const hi = span[3] ? toMinutes(parseFloat(span[3]), span[4]) : lo;
      if (lo >= 30) {
        min += lo; max += hi;
        trace.push(`span ${lo}${hi > lo ? '–' + hi : ''} — ${sentence}`);
        continue;
      }
    }
    if (notAWait(sentence) || overlaps(sentence)) continue;
    const w = waitIn(sentence);
    /* Under half an hour is a pause, not a plan. */
    if (w.min < 30) continue;
    min += w.min;
    max += w.max;
    for (const verb of waitVerbs(sentence)) waited.add(verb);
    trace.push(`step ${w.min}${w.max > w.min ? '–' + w.max : ''} — ${sentence}`);
  }

  /* Waits stated against an ingredient are prep the cook sets going before
     starting, all at once, so the longest one governs rather than the sum —
     and one that repeats a wait the method already describes is restating it. */
  let ing = { min: 0, max: 0 };
  for (const item of recipe.ingredients || recipe.ing || []) {
    const sentence = clause(String((item && (item.raw || item.name)) || item));
    if (notAWait(sentence)) continue;
    if ([...waitVerbs(sentence)].some(verb => waited.has(verb))) continue;
    const w = waitIn(sentence);
    if (w.min < 30 || w.min <= ing.min) continue;
    ing = w;
    trace.push(`prep ${w.min}${w.max > w.min ? '–' + w.max : ''} — ${sentence}`);
  }

  min += ing.min;
  max += ing.max;
  return min >= 60 ? { min, max, trace } : { min: 0, max: 0, trace };
}

/* A label for the wait when the record does not name one. */
function waitLabel(recipe) {
  const text = (recipe.steps || recipe.st || []).join(' ').toLowerCase();
  for (const [re, label] of [[/\b(prove|proof|rise|risen)/, 'rising'], [/\bmarinat/, 'marinating'],
    [/\b(chill|refrigerat|fridge)/, 'chilling'], [/\b(soak)/, 'soaking'], [/\b(cool)/, 'cooling'],
    [/\b(ferment)/, 'fermenting'], [/\b(set)\b/, 'setting']]) {
    if (re.test(text)) return label;
  }
  return 'waiting';
}

module.exports = { detectWait, waitLabel, waitIn, COOKS };
