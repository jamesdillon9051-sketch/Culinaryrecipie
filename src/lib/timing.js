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
 *   - A wait of a quarter of an hour or more that the method asks for ("rest
 *     20 minutes before slicing", "marinate 15 minutes") is waiting, not
 *     preparation, and counts. Until October 2026 anything under half an hour,
 *     and any total under an hour, was left out on the theory that the
 *     preparation time held it; nothing showed it did, and the 20-minute rest a
 *     lasagne cannot be cut without was missing from its total. Under 15
 *     minutes is a pause and stays in the preparation time.
 *   - A wait set going while the cook does something else ("chill 15 minutes
 *     while you make the filling") hides behind that work and is not added.
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
const WAIT = /\b(chill|chilled|chilling|rest|rested|resting|refrigerate|refrigerated|marinate|marinated|marinating|prove|proved|proving|proof|proofed|proofing|rise|risen|rising|ferment|fermented|fermenting|soak|soaked|soaking|steep|steeped|brine|brined|cure|cured|curing|macerate|macerated|freeze|frozen|thaw|thawed|defrost|defrosted|leave|infuse|infused|hang|sprout|sprouted|mature|matured|maturing|stand|stands|standing|drain|drained|cool|cooled|cooling|relax|relaxed|relaxing|come to room temperature)\b/i;
/* Shelf life, optional extras and make-ahead notes are not part of making it. */
/* "Serve" and "freezer" alone used to mark a storage note, which dropped "rest 15 minutes, then
   serve" and "transfer to the freezer for 90 minutes until slushy"; they count as storage only
   with a shelf-life word. */
const STORAGE = /\b(keeps?|will keep|store[ds]?|storing|lasts?|up to|leftovers?|at this point|if you (?:can|have|want|like|prefer)|can (?:also|be)|no more than|within|serve (?:within|for up to)|in the freezer for up to|freezes? (?:well|for up to)|reheat)\b/i;
/* "Cookies" and "slow cooker" are not cooking verbs. */
const HEATVERB = /\b(bake|roast|fry|simmer|boil|cook(?!ies?\b|ers?\b)|grill|steam|poach|braise|toast|sear|smoke)\w*\b/i;
/* "Cook it in 600 ml of water with a pinch of salt, covered, for 15 minutes": commas between the
   cooking verb and the number do not hand the number to a wait. */
const COOKED = new RegExp(HEATVERB.source + String.raw`\s+(?:[\w'’-]+[,;]?\s+){0,14}$`, 'i');

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
    /* "At least 30 minutes and up to 24 hours": the floor, and the ceiling the cook may choose. */
    const ceiling = new RegExp(String.raw`\bup to\s+` + NUM + String.raw`(?:\s*(minutes?|mins?|hours?|hrs?|days?|weeks?))?\b`, 'i').exec(sentence.slice(floor.index));
    const top = ceiling && value(ceiling[1]) ? toMinutes(value(ceiling[1]), ceiling[2] || floor[2]) : m;
    return { min: m + repeated, max: Math.max(m, top) + repeated };
  }
  let best = { min: 0, max: 0 };
  let match;
  UNITS.lastIndex = 0;
  while ((match = UNITS.exec(sentence))) {
    const before = sentence.slice(0, match.index);
    /* The verb nearest the number owns it: "dust with smoked paprika and chill 30 minutes" is a
       chill, though a cooking word comes earlier in the sentence. */
    const heatAt = Math.max(-1, ...[...before.matchAll(new RegExp(HEATVERB.source, 'gi'))].map(m => m.index));
    /* …but only a waiting verb in use: "the soaked chickpeas" and "the cool side of the grill"
       describe something; they do not ask the cook to wait. */
    const waitAt = Math.max(-1, ...[...before.matchAll(new RegExp(WAIT.source, 'gi'))]
      .filter(m => !/ed$|^frozen$|^risen$/i.test(m[0]) && !/^\s*(?:side|part|zone|end|spot|place|area)\b/i.test(before.slice(m.index + m[0].length)))
      .map(m => m.index));
    if (COOKED.test(before) && !(waitAt > heatAt)) continue;
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
function waitVerbs(sentence, { adjectives = true } = {}) {
  const found = new Set();
  for (const [word] of sentence.matchAll(new RegExp(WAIT.source, 'gi'))) {
    /* In a method step, "the soaked chickpeas" names what was done, not a wait the step asks for. */
    if (!adjectives && /ed$/i.test(word)) continue;
    found.add(word.toLowerCase().replace(/(?:ed|ing|s|d)$/, ''));
  }
  return found;
}

/* A sentence that is not asking the cook to wait at all. */
function notAWait(sentence) {
  /* "Four sets of folds 30 minutes apart" waits between the folds, though no waiting verb says so. */
  if (/\b(?:sets?|rounds?|times|turns|folds)\b[^.]*\bapart\b/i.test(sentence)) return false;
  if (!WAIT.test(sentence)) return true;
  /* "Rest it for at least 30 minutes and up to 24 hours" is a wait with a ceiling, not a storage
     note, although it says "up to". */
  if (STORAGE.test(sentence) && !/\bat least\b[^.]*\bup to\b/i.test(sentence)) return true;
  /* "Skim the scum for the first 20 minutes, until it stops rising" is simmering. */
  if (/\b(?:skim|scum)\b/i.test(sentence)) return true;
  /* Chilling the glasses or bowls it is served in runs alongside the rest of the work. */
  if (/\b(?:chill|freeze)\w*\s+(?:\w+\s+){0,3}(?:glasses|bowls|cups|mugs|coupes|plates)\b/i.test(sentence)
    && !/\b(?:mixture|dough|beef|meat|fish|filling|batter)\b/i.test(sentence)) return true;
  /* "Serve warm, or chill for 1 hour": the wait is one of two ways to serve it. */
  if (/^\s*(?:serve|eat)\b[^.]*\bor\b/i.test(sentence)) return true;
  /* A whole instruction offered as an ideal is an improvement, not a step. */
  return /^\s*ideally\b/i.test(sentence);
}

/* A wait the cook spends doing something else: "While the dough rests, make
   the filling." The preparation time already holds that work. */
const overlaps = sentence => /^\s*(?:while|meanwhile|in the meantime)\b/i.test(sentence)
  || /\bwhile (?:you\b|the (?:oven|grill|pan|water|oil|filling|sauce|dough|rice|pasta|meat|stock|syrup|custard|cream|batter|base)\b|it (?:heats|preheats))/i.test(sentence);

/* "Leave 1 hour, or refrigerate up to 3 weeks" — the alternative is not part
   of the timing, so the clause after "or" is dropped. */
const clause = raw => raw.split(/,\s*or\s+|\s+(?:—|–|-)\s+or\b|\bor,? (?:better|ideally),?/i)[0];

/** Unattended waiting the recipe describes, as { min, max, trace }. */
function detectWait(recipe) {
  const trace = [];
  if (EXCEPT[recipe.slug]) return { ...EXCEPT[recipe.slug], trace: ['fixed exception'] };

  let min = 0;
  let max = 0;
  const waited = new Set();
  /* "Prove 1 hour, then refrigerate at least 8 hours" is two waits, one after the other. */
  const sentences = (recipe.steps || recipe.st || []).join(' ').split(/(?<=[.!?])\s+/)
    .flatMap(raw => {
      if (/^\s*(?:while|meanwhile|in the meantime)\b/i.test(raw)) return [raw];
      /* Split only where every clause has a waiting verb of its own: "…then on a rack for 20
         minutes" and "over the next 150 minutes give it four folds, then leave it to rise" are one
         wait each, read whole. */
      const parts = raw.split(/,?\s+then\s+/i);
      return parts.every(part => WAIT.test(part) || /\bapart\b/i.test(part)) ? parts : [raw];
    });
  for (const raw of sentences) {
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
    /* Under a quarter of an hour is a pause, not a plan. */
    if (w.min < 15) continue;
    /* "If the rice cakes are frozen, soak them for 20 minutes": a wait that only some cooks need
       widens the range and leaves the floor alone. */
    if (/^\s*if\b/i.test(sentence)) {
      max += w.max;
      trace.push(`conditional ${w.min}${w.max > w.min ? '–' + w.max : ''} — ${sentence}`);
      continue;
    }
    min += w.min;
    max += w.max;
    for (const verb of waitVerbs(sentence, { adjectives: false })) waited.add(verb);
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
    if (w.min < 15 || w.min <= ing.min) continue;
    ing = w;
    trace.push(`prep ${w.min}${w.max > w.min ? '–' + w.max : ''} — ${sentence}`);
  }

  min += ing.min;
  max += ing.max;
  return { min, max, trace };
}

/* A label for the wait when the record does not name one: the waits the reader counted, each
   named by its own clause ("leave 20 minutes at room temperature" is standing, "refrigerate for
   24 to 72 hours" is chilling), not the first waiting word anywhere in the method, which named a
   cake's cooling "rising" because the sponge had risen in the oven. */
const LABELS = [
  [/\bmarinat/, 'marinating'], [/\bbrin(?:e|ing)\b/, 'brining'], [/\bsoak/, 'soaking'],
  [/\b(?:prove|proof|rise|rising|risen|doubled?)\b/, 'rising'], [/\bpickl/, 'pickling'], [/\bferment/, 'fermenting'],
  [/\b(?:bring|come|comes|coming|back) (?:\w+ ){0,2}to (?:cool )?room temperature\b|\bout of the fridge\b/, 'coming to room temperature'],
  [/\b(?:chill|refrigerat|fridge)/, 'chilling'], [/\bfreez/, 'freezing'], [/\b(?:infus|steep)/, 'infusing'],
  [/\b(?:drain|hang|press)/, 'draining'], [/\bsalt\w*\b[^.]*\b(?:leave|stand)/, 'salting'], [/\bcool/, 'cooling'],
  [/\bmatur/, 'maturing'], [/\brest/, 'resting'], [/\b(?:set|sets|setting)\b/, 'setting'], [/\b(?:stand|leave|left)\b/, 'standing'],
];
function waitLabel(recipe, wait) {
  const counted = ((wait && wait.trace) || []).filter(t => t !== 'fixed exception').map(t => t.replace(/^[^—]*—\s*/, ''));
  const lines = counted.length ? counted : [(recipe.steps || recipe.st || []).join(' ')];
  const names = [];
  for (const line of lines) {
    const hit = LABELS.find(([re]) => re.test(line.toLowerCase()));
    const name = hit ? hit[1] : 'waiting';
    if (!names.includes(name)) names.push(name);
  }
  return names.length > 1 ? `${names.slice(0, -1).join(', ')} and ${names[names.length - 1]}` : names[0];
}

module.exports = { detectWait, waitLabel, waitIn, COOKS };
