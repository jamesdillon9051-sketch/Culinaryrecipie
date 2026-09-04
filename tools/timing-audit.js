#!/usr/bin/env node
'use strict';
/**
 * Audits the times a recipe advertises against the times its own method
 * describes, because a header that says "50 min" over a dough that proves
 * overnight is the one kind of error a reader cannot catch before starting.
 *
 * Two claims are checked:
 *
 *   1. A method that bakes, fries or boils cannot have a cook time of zero.
 *   2. Unattended waiting of an hour or more — proving, chilling, marinating,
 *      fermenting, cooling — must be declared in the detail record's `rest`
 *      field, and declared as the method actually describes it. Cooling counts:
 *      a pecan pie that needs four hours before it can be sliced is four hours
 *      away from the table, whatever the header says.
 *
 *   node tools/timing-audit.js
 */
const { loadRecipes } = require('../src/build');

/* Verbs that put food over heat. */
const COOKS = /\b(bake|bakes|baking|roast|roasts|roasting|fry|fries|frying|deep-fry|boil|boils|boiling|simmer|simmers|simmering|saut[eé]|saut[eé]s|grill|grills|grilling|griddle|toast|toasts|toasting|steam|steams|steaming|poach|poaches|poaching|sear|sears|searing|braise|braises|braising|heat the oven|preheat|blanch|blanches|blanching)\b/i;

/* Waiting the recipe requires, as opposed to working. */
const WAIT = /\b(chill|chilled|rest|rested|resting|refrigerate|refrigerated|marinate|marinating|prove|proof|rise|risen|ferment|fermenting|soak|soaking|steep|brine|cure|curing|macerate|freeze|frozen|leave|infuse|hang|sprout|drain|cool|cooled|cooling)\b/i;
/* Shelf life, optional extras and make-ahead notes are not part of making it. */
const STORAGE = /\b(keeps?|will keep|store[ds]?|storing|lasts?|up to|freezer|leftovers?|at this point|if you (?:can|have|want|like|prefer)|can (?:also|be)|no more than|within|serve|reheat)\b/i;
const HEATVERB = /\b(bake|roast|fry|simmer|boil|cook|grill|steam|poach|braise|toast|sear|smoke)\w*\b/i;
const COOKED = new RegExp(HEATVERB.source + String.raw`\s+(?:\w+\s+){0,14}$`, 'i');

const WORDS = { a: 1, an: 1, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, twelve: 12 };
const value = t => (/^\d+(\.\d+)?$/.test(t) ? parseFloat(t) : (WORDS[t.toLowerCase()] || null));
const UNITS = /(\d+(?:\.\d+)?|a|an|one|two|three|four|five|six|seven|eight|nine|ten|twelve)(?:\s*(?:to|–|-|and|or)\s*\d+(?:\.\d+)?)?\s*(minutes?|mins?|hours?|hrs?|days?|weeks?|nights?)\b/gi;

function toMinutes(n, unit) {
  const u = unit.toLowerCase();
  return n * (/^m/.test(u) ? 1 : /^h/.test(u) ? 60 : /^w/.test(u) ? 10080 : 1440);
}

/* The wait a single sentence asks for, in minutes. Ranges and "ideally" take
   the floor: the earliest the cook may move on is the honest promise. */
function waitIn(raw) {
  const sentence = raw.replace(/(\d+)\s+1\/2\b/g, (_, n) => `${n}.5`);
  const floor = /at least\s+(\d+(?:\.\d+)?|an?|one|two|three|four|five|six|seven|eight|nine|ten|twelve)\s*(minutes?|mins?|hours?|hrs?|days?|weeks?)\b/i.exec(sentence);
  if (floor) return toMinutes(value(floor[1]), floor[2]);
  let best = 0;
  let match;
  UNITS.lastIndex = 0;
  while ((match = UNITS.exec(sentence))) {
    const before = sentence.slice(0, match.index);
    if (COOKED.test(before)) continue;
    /* "Remove the brisket after 90 minutes" is time already spent. */
    if (/\bafter\s+$/i.test(before)) continue;
    /* "Cool completely, ideally overnight" promises the cooling, not the night. */
    if (/\bideally\s+$/i.test(before)) continue;
    /* "Prove 45 minutes, then bake for 50" — a cooking verb standing between
       the waiting verb and the number means the number belongs to the cooking. */
    const lastWait = Math.max(...[...before.matchAll(new RegExp(WAIT.source, 'gi'))].map(m => m.index), -1);
    if (lastWait >= 0 && HEATVERB.test(before.slice(lastWait))) continue;
    const n = value(match[1]);
    if (n === null) continue;
    best = Math.max(best, toMinutes(n, match[2]));
  }
  if (/(?<!ideally )\bovernight\b/i.test(sentence) && best < 480) best = 480;
  return best;
}

/* Waits the sentence cannot disambiguate on its own. */
const EXCEPT = {
  /* "Close the lid and leave it alone for 3 hours" is time on the smoker. */
  brisket: 120,
};

/** Total unattended waiting the method describes, in minutes. */
function detectRest(recipe) {
  if (EXCEPT[recipe.slug] !== undefined) return EXCEPT[recipe.slug];
  let total = 0;
  const sentences = recipe.steps.join(' ').split(/(?<=[.!?])\s+/);
  for (const raw of sentences) {
    /* "Leave 1 hour, or refrigerate up to 3 weeks" — the alternative is not
       part of the timing, so the clause after "or" is dropped. */
    const sentence = raw.split(/,\s*or\s+/i)[0];
    if (!WAIT.test(sentence) || STORAGE.test(sentence)) continue;
    /* A whole instruction offered as an ideal is an improvement, not a step. */
    if (/^\s*ideally\b/i.test(sentence)) continue;
    const mins = waitIn(sentence);
    /* Under half an hour is a pause, not a plan. */
    if (mins >= 30) total += mins;
  }
  return total >= 60 ? total : 0;
}

const recipes = loadRecipes();
const failures = [];

for (const recipe of recipes) {
  if (recipe.cook === 0 && COOKS.test(recipe.steps.join(' '))) {
    const verb = COOKS.exec(recipe.steps.join(' '))[0];
    failures.push(`${recipe.slug} — cook time is 0 but the method says "${verb}"`);
  }
  const detected = detectRest(recipe);
  if (detected !== recipe.restTime) {
    failures.push(detected
      ? `${recipe.slug} — method describes ${detected} min of waiting but the record `
        + `declares ${recipe.restTime || 'none'}; set rest to [${detected}, '…']`
      : `${recipe.slug} — declares ${recipe.restTime} min of rest the method does not describe`);
  }
}

for (const line of failures) console.log(`  ✗ ${line}`);
console.log(failures.length
  ? `\n${failures.length} timing problem${failures.length === 1 ? '' : 's'} in ${recipes.length} recipes.`
  : `All ${recipes.length} recipes state their cooking and resting times honestly.`);
process.exit(failures.length ? 1 : 0);
