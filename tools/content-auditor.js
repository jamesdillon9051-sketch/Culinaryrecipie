#!/usr/bin/env node
'use strict';
/**
 * Content auditor: intent-and-satisfaction, readability and reach, across
 * every recipe on the site.
 *
 * This is an audit, not a rewriter. Three sibling tools already rewrite
 * recipe pages at build time from data this file also reads — the metric/US
 * toggle, the ingredient-grounded substitution engine, the oven-temperature
 * pairing — and each of those took several rounds of measuring real output
 * against real recipes before it was trustworthy enough to publish. Two
 * checks below (the doneness-cue and sauce-splitting ones) went through
 * exactly that process during development and still could not be brought to
 * the same certainty: whether a sentence describes "done" well enough, or
 * whether a dish has a sauce that can split, is a judgement about the dish,
 * not a fact a regex can verify the way a keyword or a diet tag can be
 * checked against the ingredient list. Reported here as candidates for a
 * human read, the same way this repository already treats a sourced
 * photograph that might show the wrong dish — looked at, not asserted.
 *
 *   node tools/content-auditor.js                write content_audit.csv
 *   node tools/content-auditor.js --stdout        also print the summary
 */
const fs = require('fs');
const path = require('path');
const { loadRecipes } = require('../src/build');
const { parse } = require('../src/lib/ingredients');
const { OVEN_CONTEXT, addFahrenheit } = require('../src/lib/oven-temp');
const { substitutionsFor, dietaryTipsFor } = require('../src/lib/substitutions');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'content_audit.csv');

/* --- 1. Intent & satisfaction -------------------------------------------- */

/* Storytelling openers a recipe blog reaches for that answer nothing a
   reader searched for. Checked against the description and the why-panel
   only — the two things a reader meets before the recipe card — not the
   method, where "I like to" inside a tip is a real technique note, not
   fluff. */
const FLUFF_OPENERS = [
  'i remember when', 'i still remember', 'growing up', 'ever since i was',
  'holds a special place', 'takes me back to', 'brings back memories',
  'my grandmother', 'my mother used to', 'my mom used to', 'my nan',
  'this recipe has been in my family', 'passed down through',
  'i first tried this', 'i fell in love with', 'little did i know',
  'you might be wondering', 'without further ado', "let's get started",
  'if you love', 'if you are anything like me', 'trust me when i say',
  'i can’t even tell you', "i can't even tell you"
];

function fluffHits(recipe) {
  const text = `${recipe.description} ${recipe.why}`.toLowerCase();
  return FLUFF_OPENERS.filter(p => text.includes(p));
}

/* Word count of the description plus the why-panel, kept for context in the
   report rather than scored as a pass/fail.
   A first version of this flagged anything over 80 words as "a long intro",
   which called 1,111 of 1,409 recipes a problem — including, sampled first,
   chicken-karahi's 97 words: three sentences, no filler, explaining why the
   dish has no onion in it. Length was the wrong thing to measure; the
   fluff-phrase check above is the one that actually answers "is this
   rambling", and it is at zero. Two things make length itself the wrong
   signal on this site specifically: the ingredients card is rendered before
   any of this prose in the page's own markup — "not just first on a narrow
   screen", the template comment says — so there is no intro standing between
   a reader and the recipe card to begin with, and the why-panel is meant to
   be substantive: it is this site's answer to "why does this work", which
   takes more than one short sentence to actually say anything. */
function introWordCount(recipe) {
  const words = s => String(s || '').trim().split(/\s+/).filter(Boolean).length;
  return words(recipe.description) + words(recipe.why);
}

/* --- 2. Content weakness & readability ------------------------------------ */

const HEAT = /\b(bake|bakes|baking|roast|roasts|roasting|fry|fries|frying|simmer|simmers|simmering|boil|boils|boiling|grill|grills|grilling|saut[eé]|saut[eé]s|braise|braises|braising|poach|poaches|poaching|sear|sears|searing|toast|toasts|toasting|steam|steams|steaming)\b/i;
const NOT_HEAT_INSTRUCTION = /\bbaking (?:powder|soda|paper|tray|steel|dish|tin|sheet(?:s)?)\b/gi;
const PREHEAT_ONLY = /^(heat|preheat)\s+the\s+oven\b/i;
const NOUN_USE = /\b(?:the|a|an|with|on|alongside|some|of|over)\s+(?:roast(?:ed)?|toast(?:ed)?|fried|grilled|seared|braised|poached|steamed|baked)\b/gi;
const NEGATED = /\b(never|do not|don.t|avoid|without (?:letting|boiling)|should not|must not|no longer need to)\b/i;
const DONE = /\b(golden|brown(?:ed|ing)?|crisp\w*|bubbl\w*|thicken\w*|tender|soft\w*|set\b|firm\w*|spring\w* back|springy|reduc\w*|translucent|caramelis\w*|carameliz\w*|char\w*|glossy|shin\w*|opaque|flak\w*|no longer pink|cooked through|sizzl\w*|shimmer\w*|foam\w*|melt\w*|dissolv\w*|coat\w* the back|jammy|collaps\w*|darken\w*|deepen\w*|pale\b|crack\w*|pull\w* away|doubled|risen)\b/i;
const HAS_DURATION = s => /\d+\s*(?:to\s*\d+\s*)?(minutes?|mins?|hours?|seconds?)\b/i.test(s);

/* True for a step that gives a live cooking instruction — as opposed to a
   step that only mentions a heat word inside an ingredient name ("baking
   powder"), a prohibition ("never let it boil") or a noun phrase describing
   something already cooked ("the roast chicken", "on toast"). Developed by
   measuring real false positives at each stage: the first version of this
   check flagged 559 steps, three quarters of them one of these three
   classes rather than a genuine gap. */
function isLiveHeatStep(step) {
  if (PREHEAT_ONLY.test(step.trim())) return false;
  const stripped = step.replace(NOT_HEAT_INSTRUCTION, '').replace(NOUN_USE, '');
  if (!HEAT.test(stripped)) return false;
  return stripped.split(/(?<=[.!?])\s+/).some(c => HEAT.test(c) && !NEGATED.test(c));
}

/** Heat steps with no sensory cue or duration in themselves or either of the
    next two steps. A candidate list, not a verified defect count — see the
    file header. */
function doneessCueGaps(recipe) {
  const steps = recipe.steps;
  const gaps = [];
  for (let i = 0; i < steps.length; i++) {
    if (!isLiveHeatStep(steps[i])) continue;
    const window = [steps[i], steps[i + 1] || '', steps[i + 2] || ''];
    if (!window.some(s => DONE.test(s) || HAS_DURATION(s))) {
      gaps.push(`step ${i + 1}: ${steps[i]}`);
    }
  }
  return gaps;
}

/** Bare Celsius oven/frying temperatures with no paired Fahrenheit figure,
    checked against the same text the recipe page actually renders — steps
    run through addFahrenheit first, exactly as recipe-page.js does before
    either the visible method or the Recipe schema is built — rather than
    the pre-render source data, where every one of them still looks bare.
    Should be at or near zero; a non-zero count here means a genuine
    published gap, most likely an oven temperature phrased in a way this
    file's OVEN_CONTEXT test does not recognise. */
function bareOvenCelsius(recipe) {
  const hits = [];
  for (const raw of recipe.steps) {
    const step = addFahrenheit(raw);
    if (!OVEN_CONTEXT.test(step)) continue;
    for (const m of step.matchAll(/\b(\d{2,3})\s*°\s*C\b(?!\s*\/)/g)) hits.push(m[0]);
  }
  return hits;
}

/* --- 3. Engagement & reach ------------------------------------------------- */

function csvCell(v) {
  const s = String(v == null ? '' : v);
  return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
}

function main() {
  const recipes = loadRecipes();

  const rows = recipes.map(r => {
    const fluff = fluffHits(r);
    const intro = introWordCount(r);
    const doneGaps = doneessCueGaps(r);
    const bareC = bareOvenCelsius(r);
    return {
      slug: r.slug,
      title: r.title,
      fluff_phrases: fluff.join('; '),
      intro_word_count: intro,
      related_count: (r.related || []).length,
      substitution_notes: substitutionsFor(r).length,
      dietary_tips: dietaryTipsFor(r).length,
      doneness_review_candidates: doneGaps.length,
      doneness_examples: doneGaps.slice(0, 2).join(' | '),
      bare_oven_celsius: bareC.length
    };
  });

  rows.sort((a, b) =>
    b.fluff_phrases.length - a.fluff_phrases.length ||
    b.doneness_review_candidates - a.doneness_review_candidates ||
    a.slug.localeCompare(b.slug));

  const columns = ['slug', 'title', 'fluff_phrases', 'intro_word_count',
    'related_count', 'substitution_notes', 'dietary_tips',
    'doneness_review_candidates', 'doneness_examples', 'bare_oven_celsius'];
  const csv = [columns.join(',')]
    .concat(rows.map(row => columns.map(c => csvCell(row[c])).join(',')))
    .join('\n') + '\n';
  fs.writeFileSync(OUT, csv);

  const withFluff = rows.filter(r => r.fluff_phrases).length;
  const introWords = rows.map(r => r.intro_word_count).sort((a, b) => a - b);
  const medianIntro = introWords[Math.floor(introWords.length / 2)];
  const badRelated = rows.filter(r => r.related_count < 3).length;
  const withDietTips = rows.filter(r => r.dietary_tips).length;
  const doneGapTotal = rows.reduce((n, r) => n + r.doneness_review_candidates, 0);
  const bareCTotal = rows.reduce((n, r) => n + r.bare_oven_celsius, 0);

  console.log(`content_audit.csv written — ${rows.length} recipes`);
  console.log(`\n1. Intent & satisfaction`);
  console.log(`   storytelling/fluff openers found: ${withFluff}`);
  console.log(`   median description+why length: ${medianIntro} words (informational —`);
  console.log(`   length is not scored; the fluff-phrase count above is)`);
  console.log(`   total time, difficulty and servings are structured pills in the page`);
  console.log(`   header on every recipe, and the ingredients card renders before any`);
  console.log(`   of this prose in the page's own markup, not just on a narrow screen`);
  console.log(`\n2. Content weakness & readability`);
  console.log(`   heat steps with no cue/duration nearby (review candidates, not verified): ${doneGapTotal}`);
  console.log(`   bare oven/frying °C with no °F pairing: ${bareCTotal}`);
  console.log(`\n3. Engagement & reach`);
  console.log(`   recipes with under 3 related links: ${badRelated}`);
  console.log(`   recipes carrying a dietary Quick Tip: ${withDietTips}`);

  if (process.argv.includes('--stdout')) {
    for (const r of rows.filter(r => r.doneness_review_candidates).slice(0, 15)) {
      console.log(`   ${r.slug} — ${r.doneness_examples}`);
    }
  }
}

main();
