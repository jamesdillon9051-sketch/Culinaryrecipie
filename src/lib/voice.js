'use strict';

/**
 * The house voice, as data.
 *
 * Everything that decides whether a piece of recipe prose sounds like a person
 * wrote it lives here, once: the phrases that mark text as written by nobody in
 * particular, the openings a recipe may use, and the checks that measure a
 * paragraph. tools/voice-audit.js reads it to report on the catalogue,
 * tools/humanize.js builds its prompt from it and uses the same checks to
 * accept or reject what the model sends back, and CLAUDE.md's rule lists are
 * generated from it (`node tools/voice-audit.js --sync-claude-md`), so the
 * rules a writer is shown and the rules a rewrite is held to cannot drift.
 *
 * What this file will not do is make prose sound experienced. A rule here can
 * remove "a symphony of flavors"; it cannot supply the thing a person who had
 * cooked the dish would know. That is why the first-person detector below is an
 * error and not a style note: the site says, truthfully, that most of its
 * recipes have not been cooked by the person who publishes them, and a rewrite
 * must not quietly say otherwise in the first person.
 */

const { pick } = require('./pick');
const { plain, spans } = require('./inline');

/* ------------------------------------------------------------ boundaries */

/* \b is ASCII-only in JavaScript. "crème" contains the word "me" as far as \b
   is concerned, which read thirty-four pages of French dessert as first-person
   narration the first time this was measured. Letters and digits are matched
   as Unicode properties instead. */
const BEFORE = '(?<![\\p{L}\\p{N}\'’-])';
const AFTER = '(?![\\p{L}\\p{N}-])';
/* The pronoun "I" is also an initial: "M.I.A." is a singer, not a narrator. */
const BEFORE_I = '(?<![\\p{L}\\p{N}\'’.-])';
const AFTER_I = '(?![\\p{L}\\p{N}.-])';
const phrase = (src, flags = 'iu') => new RegExp(`${BEFORE}(?:${src})${AFTER}`, flags);
const APOS = '[\'’]';

/* --------------------------------------------------------- banned phrases */

/**
 * Phrases that never appear in a recipe here. Each is the stock language of
 * templated recipe copy: it says nothing about this dish and could be pasted
 * onto any other. `say` is what the rule looks like to a writer.
 *
 * The first seven are the owner's own list; the rest are the same family.
 */
const BANNED = [
  ['elevate', 'elevat(?:e|es|ed|ing)', 'elevate / elevated (as in "elevate your dish")'],
  ['symphony', 'symphony|symphonies', '"symphony of flavors"'],
  ['delve', 'delv(?:e|es|ed|ing)', '"delve into"'],
  ['game-changer', 'game[- ]chang(?:er|ers|ing)', '"game-changer"'],
  ['testament', 'testament', '"a testament to"'],
  ['culinary-cliche', 'culinary (?:journey|adventure|odyssey|masterpiece|tapestry|symphony|magic|delight|artistry)', '"culinary journey" and its cousins'],
  ['nestled', 'nestled|nestles|nestling', '"nestled" (the instruction "nestle the fish in" is fine)'],
  ['tapestry', 'tapestry|tapestries|kaleidoscope', '"tapestry", "kaleidoscope"'],
  ['unlock', `unlock(?:s|ed|ing)?\\s+(?:the|your|a|an|that|new|hidden|all)`, '"unlock the flavour"'],
  ['embark', 'embark(?:s|ed|ing)?', '"embark on"'],
  ['dive-in', `let${APOS}s dive|dive (?:right )?in(?:to)?`, '"let\'s dive in", "dive into"'],
  ['look-no-further', 'look no further', '"look no further"'],
  ['whether-youre', `whether you${APOS}re|whether you are`, '"whether you\'re a beginner or…"'],
  ['todays-world', `in today${APOS}s|in the modern (?:world|age)|fast-paced world`, '"in today\'s fast-paced world"'],
  ['no-secret', `it${APOS}s no secret|it is no secret`, '"it\'s no secret that"'],
  ['say-goodbye', 'say goodbye to', '"say goodbye to"'],
  ['next-level', 'to the next level|next[- ]level', '"next level"'],
  /* Hyphenated only: "the filling must have cooled" is an instruction. */
  ['must-try', 'must-try|must-make|must-have', '"a must-try"'],
  ['mouthwatering', 'mouth-?watering|drool[- ]worthy|lip-?smacking|finger[- ]licking', '"mouthwatering"'],
  ['melt-in-mouth', 'melt[- ]in[- ](?:your|the)[- ]mouth', '"melt in your mouth"'],
  ['burst-of-flavour', 'burst(?:s|ing)? (?:of|with) flavou?rs?|explosions? of flavou?rs?|flavou?r explosions?', '"burst of flavour", "explosion of flavour"'],
  ['flavours-dance', 'flavou?rs? (?:dance|sing|pop)|dance(?:s)? on your (?:tongue|taste ?buds|palate)|taste ?buds? (?:dance|tingle|sing)', '"flavours dance on your tongue"'],
  ['feast-senses', 'feast for the (?:senses|eyes|soul)', '"a feast for the senses"'],
  ['labour-of-love', 'labou?r of love', '"a labour of love"'],
  ['hug-in-bowl', 'hug in a (?:bowl|mug|cup)|comfort in a (?:bowl|mug)', '"a hug in a bowl"'],
  ['to-die-for', 'to die for', '"to die for"'],
  ['crowd-pleaser', 'crowd[- ]pleaser', '"crowd-pleaser"'],
  ['perfect-occasion', 'perfect for any occasion|the perfect combination|perfect balance of', '"perfect for any occasion", "the perfect combination"'],
  ['secret-ingredient', 'secret ingredient', '"the secret ingredient"'],
  ['sure-to-impress', `is sure to (?:impress|please|delight|become)|will not disappoint|won${APOS}t disappoint|you${APOS}ll love`, '"is sure to impress", "you\'ll love"'],
  ['wont-believe', `you won${APOS}t believe|you will not believe`, '"you won\'t believe"'],
  ['whole-family', 'the whole family will love|kids will love|everyone will love', '"the whole family will love"'],
  ['taste-buds-journey', 'take your taste ?buds|taste ?buds on a journey|unleash your inner', '"take your taste buds on a journey"'],
  ['tantalising', 'tantali[sz](?:e|es|ed|ing)', '"tantalising"'],
  ['filler-closers', 'in conclusion|without further ado|at the end of the day|needless to say|it goes without saying|trust me on this|step-by-step guide|in this (?:blog )?post', 'blog-post filler: "in conclusion", "without further ado"'],
  ['slang-filler', 'foodie|foodies|yummy|delish|scrumptious', '"foodie", "yummy", "delish"']
].map(([id, src, say]) => ({ id, re: phrase(src), say }));

/**
 * Words that are not wrong but are the first to show up when nobody is
 * choosing them. Reported, never failed on.
 */
const DISCOURAGED = [
  ['ultimate', 'ultimate|the best ever|best-ever', '"the ultimate", "best ever"'],
  ['effortless', 'effortless(?:ly)?|seamless(?:ly)?', '"effortlessly", "seamlessly"'],
  ['superlatives', 'heavenly|divine|irresistible|decadent|sinful(?:ly)?|luscious|indulgent', '"heavenly", "irresistible", "decadent"'],
  ['foolproof', 'foolproof|fail-?proof|never-fail', '"foolproof" (promises what it cannot check)'],
  ['intensifiers', 'incredibly|absolutely|truly|perfectly (?:balanced|crisp|tender|golden)', '"incredibly", "absolutely", "truly"']
].map(([id, src, say]) => ({ id, re: phrase(src), say }));

/* ------------------------------------------------ first-person experience */

/**
 * The site's recipes are published under a name, but most have not been cooked
 * by that person, and the README and the recipes' own notes say so plainly.
 * First-person experience ("I've made this a dozen times", "in my kitchen")
 * would be an invented claim, so none of it may appear in recipe prose.
 *
 * Second-person advice is the honest version of the same thing: "if your oven
 * runs hot, check at 12 minutes" is a true statement about ovens and needs no
 * one to have stood at this one.
 */
const FIRST_PERSON = [
  /* Capital I only, and case-sensitive, so the pronoun is not confused with a
     roman numeral or the letter in a list. */
  ['i', new RegExp(`${BEFORE_I}I(?:${APOS}(?:m|ve|d|ll))?${AFTER_I}`, 'u'), '"I", "I\'ve", "I\'d"'],
  /* Not "mine": it is a noun as often as a pronoun ("an iron mine"). */
  ['my', phrase('my|myself'), '"my", "myself"'],
  ['me', phrase('me'), '"me" ("let me", "trust me")'],
  ['we', phrase(`we(?:${APOS}(?:ve|re|d|ll))?|our|ours|ourselves`), '"we", "our"'],
  ['tested-claim', phrase('kitchen[- ]tested|test[- ]kitchen|triple[- ]tested|tested (?:and|&) approved|tried[- ]and[- ]tested|tested (?:this|it|the recipe)'), '"kitchen-tested", "tested and approved"']
].map(([id, re, say]) => ({ id, re, say }));

/* -------------------------------------------------------------- the hooks */

/**
 * How a recipe may open. One is assigned to each recipe from its slug
 * (hookFor), so the variety is built in rather than left to a writer — or a
 * model — to remember what the other two thousand recipes started with.
 *
 * The first four are the owner's. "origin-fact" is only ever used when the
 * fact is already in the recipe's own text: see tools/humanize.js.
 */
const HOOKS = [
  { id: 'sensory', label: 'Sensory',
    brief: 'Open on something the cook will see, hear, smell or feel: one concrete detail, not a pile of adjectives.',
    example: 'The first sign it is ready is the smell: butter turning from yellow to nut brown.' },
  { id: 'quick-tip', label: 'Quick tip',
    brief: 'Open with the single most useful instruction for this dish, stated plainly as advice to the cook.',
    example: 'Salt the aubergine first and leave it for half an hour; everything else in the recipe depends on that.' },
  { id: 'seasonal', label: 'Seasonal',
    brief: 'Open with the time of year, the weather or the occasion the dish belongs to. Only when it genuinely does.',
    example: 'This is what to make in the first cold week, when turning the oven on starts to feel like a treat.' },
  { id: 'ingredient-first', label: 'Straight to the ingredients',
    brief: 'Skip the preamble. Open on the few ingredients and what they become.',
    example: 'Flour, butter, sugar, an egg: four things you already own, and about forty minutes.' },
  { id: 'problem-first', label: 'The usual problem',
    brief: 'Open with the common way this dish goes wrong and the one change that stops it.',
    example: 'Most home versions come out watery, and the fix is to cook the onions for longer than feels reasonable.' },
  { id: 'origin-fact', label: 'Name or origin',
    brief: 'Open with one well-established fact about the name or origin that is already stated in the recipe. Never add one.',
    example: 'Biscotti means "twice cooked", and that is the whole method.' },
  { id: 'occasion', label: 'When and for whom',
    brief: 'Open with when this gets made and who it feeds.',
    example: 'A Sunday dish for a table of six, and better on Monday.' },
  { id: 'comparison', label: 'Next to its relative',
    brief: 'Open by setting it beside its nearest relative and saying what is different.',
    example: 'It looks like a pancake and cooks like an omelette, which is why the pan has to be hotter than you expect.' },
  { id: 'short-sharp', label: 'Short and sharp',
    brief: 'Open with a declarative sentence of eight words or fewer, then let the next one run longer.',
    example: 'Keep the heat low. That is most of the recipe, and the part people skip.' },
  { id: 'question', label: 'The cook\'s question',
    brief: 'Open with the question a cook would actually ask about this dish, then answer it.',
    example: 'Why does bread dough have to rest before it goes in the oven?' }
];

/** The opening assigned to a recipe. Stable for a given slug. */
const hookFor = slug => pick(HOOKS, `hook:${slug}`);

/* ----------------------------------------------------------- style rules */

/** What the writer is told, in order of importance. Also printed in CLAUDE.md. */
const STYLE_RULES = [
  'Write to the cook in the second person, in British English (flavour, colour, aubergine, hob) with metric measures first.',
  'Give practical, specific advice a cook can act on: what it should look, sound or smell like at each stage, how to tell it is going wrong, and what to do then. Advice is about the dish and the equipment, never about the writer.',
  'Never claim personal experience or testing. No "I", "my", "we", "our", no "kitchen-tested", no "the first time I made this". The honest form of the same idea is second person: "If your oven runs hot, check at 12 minutes."',
  'Use only numbers that are already in the recipe (times, temperatures, weights, servings). A "check early" time may be any number lower than the stated time.',
  'Add no new claims about history, origin, dates or named people. A fact already in the recipe may be kept, reworded or softened, never sharpened.',
  'Vary sentence length on purpose: at least one sentence of eight words or fewer in every paragraph, and some of twenty or more. Do not open two sentences in a row with the same word.',
  'Split the long "why" text into two or three paragraphs of different lengths. One paragraph of 200 words is a wall.',
  'Bold only what a hurried cook must not miss: a warning, a number, a cue. At most three bold spans in the "why" text and two across the tips, each one to six words. Never bold the recipe name or its search keywords.',
  'No more than two em dashes per hundred words, and fewer is better. No exclamation marks. No "not just X but Y" constructions.',
  'Tips may number two to five. Start each one differently: a verb, a condition ("If…"), a consequence, a number. Not three "Do not"s.',
  'Headings are optional and conversational, two to eight words ("A quick note on the butter", "Don\'t make this mistake"). Keep the recipe name in the method heading.'
];

/* ----------------------------------------------------------- text checks */

const words = text => plain(text).split(/\s+/).filter(Boolean);

/** Sentences, never crossing a paragraph break. */
function sentences(text) {
  return plain(text).split(/\n\s*\n/).flatMap(par =>
    par.split(/(?<=[.!?])\s+(?=[A-Z0-9“"‘'(])/).map(s => s.trim()).filter(Boolean));
}

/** The first `n` words, lower-cased and stripped of punctuation: a fingerprint of how a text opens. */
function opener(text, n = 4) {
  return plain(text).toLowerCase().replace(/[^\p{L}\p{N}'’ -]+/gu, ' ').split(/\s+/).filter(Boolean).slice(0, n).join(' ');
}

/** How a passage moves: how many sentences, and how different their lengths are. */
function rhythm(text) {
  const lengths = sentences(text).map(s => words(s).length);
  if (!lengths.length) return { count: 0, mean: 0, sd: 0, short: 0, long: 0 };
  const mean = lengths.reduce((a, b) => a + b, 0) / lengths.length;
  const sd = Math.sqrt(lengths.reduce((a, b) => a + (b - mean) ** 2, 0) / lengths.length);
  return {
    count: lengths.length,
    mean: Number(mean.toFixed(1)),
    sd: Number(sd.toFixed(1)),
    short: lengths.filter(n => n <= 8).length,
    long: lengths.filter(n => n >= 20).length
  };
}

/** em dashes per hundred words */
function emDashDensity(text) {
  const w = words(text).length;
  return w ? ((String(text).match(/—/g) || []).length / w) * 100 : 0;
}

const snippet = (text, at, len) =>
  text.slice(Math.max(0, at - 30), at + len + 30).replace(/\s+/g, ' ').trim();

function scan(text, list, level) {
  const found = [];
  for (const rule of list) {
    const m = rule.re.exec(text);
    if (m) found.push({ level, id: rule.id, match: m[0], context: snippet(text, m.index, m[0].length) });
  }
  return found;
}

/* Per hundred words. The catalogue's 90th percentile is 1.7, so this flags the
   heaviest few percent rather than the style of half the site. */
const EM_DASH_LIMIT = 2;

const NOT_JUST = phrase(`not (?:just|only|merely)|more than (?:just|only|merely)|isn${APOS}t just|is not just`);

/**
 * Everything wrong with one piece of prose, as { level, id, match, context }.
 *
 * Errors are things that must not ship (banned phrases, first-person claims,
 * exclamation marks). Warnings are things worth a second look.
 *
 *   text  the prose, with or without **bold** markers
 *   opts.title        the recipe's own name, which is left out before scanning:
 *                     "Marry Me Chicken" is a dish, not a narrator
 *   opts.firstPerson  false to skip the first-person rules (for text that is
 *                     not recipe prose, such as a quotation)
 */
function lint(text, opts = {}) {
  let t = plain(text);
  if (opts.title) t = t.replace(new RegExp(String(opts.title).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'giu'), ' ');
  const out = [
    ...scan(t, BANNED, 'error'),
    ...(opts.firstPerson === false ? [] : scan(t, FIRST_PERSON, 'error')),
    ...scan(t, DISCOURAGED, 'warn')
  ];
  if (/!/.test(t)) out.push({ level: 'error', id: 'exclamation', match: '!', context: snippet(t, t.indexOf('!'), 1) });
  const nj = NOT_JUST.exec(t);
  if (nj) out.push({ level: 'warn', id: 'not-just', match: nj[0], context: snippet(t, nj.index, nj[0].length) });
  if (words(t).length >= 40 && emDashDensity(t) > EM_DASH_LIMIT) {
    out.push({ level: 'warn', id: 'em-dashes', match: `${emDashDensity(t).toFixed(1)} per 100 words`, context: '' });
  }
  return out;
}

/* --------------------------------------------------------- documentation */

/** The rule lists as Markdown, for the generated part of CLAUDE.md. */
function markdown() {
  const lines = [];
  lines.push('#### Banned phrases (errors)', '');
  lines.push('Never use these, or their inflections, anywhere in recipe prose:', '');
  for (const b of BANNED) lines.push(`- ${b.say}`);
  lines.push('', '#### Discouraged words (warnings)', '');
  lines.push('Allowed, but the first to appear when nobody is choosing:', '');
  for (const d of DISCOURAGED) lines.push(`- ${d.say}`);
  lines.push('', '#### First-person and testing claims (errors)', '');
  lines.push('Not allowed in recipe prose:', '');
  for (const f of FIRST_PERSON) lines.push(`- ${f.say}`);
  lines.push('', '#### Hooks: how a recipe may open', '');
  lines.push('Each recipe is assigned one from its slug (`hookFor(slug)` in `src/lib/voice.js`). No two recipes may share the same first four words.', '');
  lines.push('| id | opening | example |', '| --- | --- | --- |');
  for (const h of HOOKS) lines.push(`| \`${h.id}\` | ${h.brief} | "${h.example}" |`);
  lines.push('', '#### Writing rules', '');
  STYLE_RULES.forEach((rule, i) => lines.push(`${i + 1}. ${rule}`));
  return lines.join('\n');
}

module.exports = {
  BANNED, DISCOURAGED, FIRST_PERSON, HOOKS, STYLE_RULES,
  hookFor, lint, plain, spans, words, sentences, opener, rhythm, emDashDensity, markdown
};
