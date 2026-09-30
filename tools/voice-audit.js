#!/usr/bin/env node
'use strict';
/**
 * Does the prose sound like nobody in particular wrote it?
 *
 * tools/quality-audit.js asks whether a recipe is thin. This asks the narrower
 * question the AdSense review and a reader both ask: is the writing the same
 * sentence over and over, in the same shape, with the same words? It measures
 * the catalogue rather than guessing at it, using the rules in src/lib/voice.js.
 *
 * Two kinds of finding:
 *
 *   errors    a banned phrase, a first-person or testing claim, an exclamation
 *             mark. These fail `--strict`, and `npm run check` runs `--strict`,
 *             so a new volume cannot ship with them.
 *   warnings  things worth a second look — a borrowed opening, a heavy use of
 *             em dashes, two tips that start with the same word. Never a
 *             failure. A recipe with an error or a warning is "flagged", and
 *             `tools/humanize.js --select flagged` rewrites only those. (A
 *             storage note that repeats another's word for word is counted
 *             and reported, but does not flag a recipe: "keeps in the fridge
 *             for up to 3 days" is a fact, and facts repeat.)
 *
 * The thresholds are measured, not chosen. When this was first run on 2,415
 * recipes there were no banned phrases and no first-person claims; 70% of the
 * "why" paragraphs had no sentence of eight words or fewer, every one was a
 * single paragraph, and 48% used an em dash. So rhythm and paragraphing are
 * reported as statistics, because a rule that flags most of the catalogue is
 * a description of the catalogue and not a way to pick what to fix.
 *
 *   node tools/voice-audit.js                 summary
 *   node tools/voice-audit.js --flagged       one line per flagged recipe, with reasons
 *   node tools/voice-audit.js --slug a,b      every finding for those recipes
 *   node tools/voice-audit.js --json FILE     per-recipe findings as JSON
 *   node tools/voice-audit.js --strict        exit 1 on any error (run by npm run check)
 *   node tools/voice-audit.js --sync-claude-md   rewrite the generated rule lists in CLAUDE.md
 *   node tools/voice-audit.js --check-docs    exit 1 if CLAUDE.md's rule lists are out of date
 */
const fs = require('fs');
const path = require('path');
const voice = require('../src/lib/voice');

const ROOT = path.join(__dirname, '..');
const CLAUDE_MD = path.join(ROOT, 'CLAUDE.md');

/* An opening of three words is "shared" when this many recipes start the same
   way. "the filling is" is natural at 10 of 1,748; it stops being natural when
   it is a house style. */
const SHARED_OPENER = 8;
/* A storage sentence is boilerplate when this many recipes carry it word for
   word, numbers aside. */
const BOILERPLATE_SENTENCE = 25;
/* Warnings that mark a recipe for rewriting. The storage one is left out on
   purpose, for the reason in the header. */
const FLAGGING = new Set(['em-dashes', 'not-just', 'tips-same-start', 'shared-why-opener',
  'shared-lede-opener', 'ultimate', 'effortless', 'superlatives', 'intensifiers']);

const norm = (text, title) => voice.plain(text).toLowerCase()
  .split(String(title).toLowerCase()).join('{title}').replace(/\d+/g, '#').replace(/\s+/g, ' ').trim();

/** Every prose field a reader meets, by name. Ingredient lines are not prose. */
function fieldsOf(r) {
  return {
    description: r.description,
    /* What a search result shows, so what a reader meets first. */
    meta: r.meta,
    why: r.why,
    tips: r.tips.join('\n'),
    storage: r.storage,
    pairings: r.pairings.join('; '),
    steps: r.steps.join('\n')
  };
}

function assess(recipes) {
  const count = (fn) => {
    const m = new Map();
    for (const r of recipes) { const k = fn(r); if (k) m.set(k, (m.get(k) || 0) + 1); }
    return m;
  };
  const whyOpeners = count(r => voice.opener(r.why, 3));
  const descOpeners = count(r => voice.opener(r.description, 3));
  const storageSentences = new Map();
  for (const r of recipes) {
    for (const s of new Set(voice.sentences(r.storage).map(x => norm(x, r.title)))) {
      storageSentences.set(s, (storageSentences.get(s) || 0) + 1);
    }
  }

  const out = new Map();
  for (const r of recipes) {
    const errors = [];
    const warnings = [];
    for (const [field, text] of Object.entries(fieldsOf(r))) {
      for (const f of voice.lint(text, { title: r.title })) {
        (f.level === 'error' ? errors : warnings).push({ ...f, field });
      }
    }

    const tipStarts = r.tips.map(t => voice.opener(t, 1));
    if (new Set(tipStarts).size < tipStarts.length) {
      warnings.push({ level: 'warn', id: 'tips-same-start', field: 'tips', match: tipStarts.find((w, i) => tipStarts.indexOf(w) !== i), context: '' });
    }
    if (whyOpeners.get(voice.opener(r.why, 3)) >= SHARED_OPENER) {
      warnings.push({ level: 'warn', id: 'shared-why-opener', field: 'why', match: voice.opener(r.why, 3), context: '' });
    }
    if (descOpeners.get(voice.opener(r.description, 3)) >= SHARED_OPENER) {
      warnings.push({ level: 'warn', id: 'shared-lede-opener', field: 'description', match: voice.opener(r.description, 3), context: '' });
    }
    const boiler = voice.sentences(r.storage).map(x => norm(x, r.title)).find(s => storageSentences.get(s) >= BOILERPLATE_SENTENCE);
    if (boiler) warnings.push({ level: 'warn', id: 'boilerplate-storage', field: 'storage', match: boiler, context: '' });

    /* Reported as statistics only — see the header. */
    const why = voice.rhythm(r.why);
    const info = {
      whyWords: voice.words(r.why).length,
      whyParagraphs: voice.plain(r.why).split(/\n\s*\n/).filter(Boolean).length,
      whyShortSentences: why.short,
      whySentenceSd: why.sd,
      tips: r.tips.length
    };

    out.set(r.slug, {
      slug: r.slug, title: r.title, errors, warnings, info,
      flagged: errors.length > 0 || warnings.some(w => FLAGGING.has(w.id))
    });
  }
  return out;
}

/* ---------------------------------------------------- generated CLAUDE.md */

const BLOCKS = [
  ['voice-rules', () => voice.markdown()]
];
/* The layout library is optional until it exists, so this file works on a
   checkout that has the voice rules and not yet the layouts. */
try {
  const layouts = require('../src/lib/layouts');
  if (typeof layouts.markdown === 'function') BLOCKS.push(['layouts', () => layouts.markdown()]);
} catch (e) { if (e.code !== 'MODULE_NOT_FOUND') throw e; }

function renderDocs(current) {
  let next = current;
  for (const [name, render] of BLOCKS) {
    const re = new RegExp(`(<!-- ${name}:begin[^>]*-->)[\\s\\S]*?(<!-- ${name}:end -->)`);
    if (!re.test(next)) throw new Error(`CLAUDE.md has no <!-- ${name}:begin --> … <!-- ${name}:end --> block`);
    next = next.replace(re, (_, a, b) => `${a}\n\n${render()}\n\n${b}`);
  }
  return next;
}

/* ------------------------------------------------------------------- cli */

function main(argv) {
  const has = flag => argv.includes(flag);
  const valueOf = flag => { const i = argv.indexOf(flag); return i >= 0 ? argv[i + 1] : null; };

  if (has('--sync-claude-md') || has('--check-docs')) {
    if (!fs.existsSync(CLAUDE_MD)) {
      if (has('--check-docs')) return; // nothing to keep in step yet
      throw new Error('There is no CLAUDE.md to update');
    }
    const current = fs.readFileSync(CLAUDE_MD, 'utf8');
    const next = renderDocs(current);
    if (has('--check-docs')) {
      if (next !== current) {
        console.log('✗ CLAUDE.md: the generated rule lists are out of date with src/lib/voice.js / layouts.js — run: node tools/voice-audit.js --sync-claude-md');
        process.exitCode = 1;
      } else {
        console.log('✓ CLAUDE.md rule lists match src/lib/voice.js');
      }
    } else if (next !== current) {
      fs.writeFileSync(CLAUDE_MD, next);
      console.log('CLAUDE.md: generated rule lists updated.');
    } else {
      console.log('CLAUDE.md: generated rule lists already current.');
    }
    return;
  }

  const { loadRecipes } = require('../src/build');
  const recipes = loadRecipes();
  const results = assess(recipes);
  const all = [...results.values()];
  const withErrors = all.filter(r => r.errors.length);
  const flagged = all.filter(r => r.flagged);

  if (has('--strict')) {
    for (const r of withErrors) {
      for (const e of r.errors) console.log(`  ✗ ${r.slug}: ${e.field} — ${e.id} "${e.match}"${e.context ? ` (…${e.context}…)` : ''}`);
    }
    if (withErrors.length) { process.exitCode = 1; return; }
    console.log(`  ✓ voice: no banned phrases, first-person claims or exclamation marks in ${recipes.length} recipes`);
    return;
  }

  if (valueOf('--json')) {
    fs.mkdirSync(path.dirname(path.resolve(valueOf('--json'))), { recursive: true });
    fs.writeFileSync(valueOf('--json'), JSON.stringify(all, null, 2));
    console.log(`Wrote ${valueOf('--json')} (${all.length} recipes)`);
  }

  if (valueOf('--slug')) {
    for (const slug of valueOf('--slug').split(',')) {
      const r = results.get(slug.trim());
      if (!r) { console.log(`${slug}: not found`); continue; }
      console.log(`${r.slug}  flagged=${r.flagged}  ${JSON.stringify(r.info)}`);
      for (const f of [...r.errors, ...r.warnings]) console.log(`  ${f.level.padEnd(5)} ${f.field.padEnd(11)} ${f.id}: "${f.match}"${f.context ? `  …${f.context}…` : ''}`);
    }
    return;
  }

  if (has('--flagged')) {
    for (const r of flagged) {
      const why = [...r.errors, ...r.warnings].map(f => f.id);
      console.log(`${r.slug}\t${[...new Set(why)].join(',')}`);
    }
    return;
  }

  /* ------------------------------------------------------------ summary */
  const pct = (n, of = all.length) => `${n} (${(100 * n / of).toFixed(1)}%)`;
  const tally = id => all.filter(r => [...r.errors, ...r.warnings].some(f => f.id === id)).length;
  const errorIds = ['elevate', 'symphony', 'delve', 'game-changer', 'testament', 'culinary-cliche', 'nestled'];
  const listed = voice.BANNED.map(b => b.id);

  console.log(`Voice audit of ${recipes.length} recipes\n`);
  console.log('Errors (fail --strict and npm run check)');
  console.log(`  banned phrases (${listed.length} rules, incl. ${errorIds.join(', ')}): ${all.filter(r => r.errors.some(e => listed.includes(e.id))).length} recipes`);
  console.log(`  first-person or testing claims:  ${all.filter(r => r.errors.some(e => voice.FIRST_PERSON.some(f => f.id === e.id))).length} recipes`);
  console.log(`  exclamation marks:               ${tally('exclamation')} recipes`);
  console.log('\nWarnings');
  for (const [id, label] of [
    ['em-dashes', 'more than 2 em dashes per 100 words'],
    ['not-just', '"not just … but" construction'],
    ['tips-same-start', 'two tips start with the same word'],
    ['shared-why-opener', `"why" opening shared with ${SHARED_OPENER - 1}+ other recipes`],
    ['shared-lede-opener', `lede opening shared with ${SHARED_OPENER - 1}+ other recipes`],
    ['boilerplate-storage', `storage sentence carried word for word by ${BOILERPLATE_SENTENCE}+ recipes`],
    ['ultimate', 'discouraged: "ultimate" / "best ever"'],
    ['effortless', 'discouraged: "effortless(ly)" / "seamless(ly)"'],
    ['superlatives', 'discouraged: "heavenly", "irresistible", "decadent"…'],
    ['intensifiers', 'discouraged: "incredibly", "absolutely", "truly"']
  ]) console.log(`  ${label.padEnd(62)} ${pct(tally(id))}`);

  const withWhy = all.filter(r => r.info.whyWords);
  console.log('\nShape of the "why" paragraph (statistics, not flags)');
  console.log(`  a single paragraph:                      ${pct(withWhy.filter(r => r.info.whyParagraphs === 1).length)}`);
  console.log(`  no sentence of 8 words or fewer:         ${pct(withWhy.filter(r => r.info.whyShortSentences === 0).length)}`);
  console.log(`  exactly three tips:                      ${pct(all.filter(r => r.info.tips === 3).length)}`);
  const sorted = withWhy.map(r => r.info.whyWords).sort((a, b) => a - b);
  console.log(`  length, words (10th / median / 90th):    ${sorted[Math.floor(sorted.length * .1)]} / ${sorted[Math.floor(sorted.length * .5)]} / ${sorted[Math.floor(sorted.length * .9)]}`);

  const topOf = (fn, n = 5) => [...recipes.reduce((m, r) => { const k = fn(r); m.set(k, (m.get(k) || 0) + 1); return m; }, new Map()).entries()]
    .sort((a, b) => b[1] - a[1]).slice(0, n).map(([k, c]) => `${c}× "${k}"`).join(', ');
  console.log('\nMost repeated openings');
  console.log(`  lede:   ${topOf(r => voice.opener(r.description, 3))}`);
  console.log(`  why:    ${topOf(r => voice.opener(r.why, 3))}`);
  console.log(`  tips:   ${topOf(r => voice.opener(r.tips[0], 2))}`);

  console.log(`\nFlagged for rewrite (an error, or any warning except the storage note): ${pct(flagged.length)}`);
  console.log('  node tools/voice-audit.js --flagged      lists them');
  console.log('  node tools/humanize.js --select flagged  rewrites only those');
}

if (require.main === module) {
  try {
    main(process.argv.slice(2));
  } catch (e) {
    /* tools/check.js reads failures from stdout lines that start with ✗. */
    if (process.argv.includes('--strict') || process.argv.includes('--check-docs')) console.log(`  ✗ voice-audit: ${e.message}`);
    console.error(e.message);
    process.exit(1);
  }
}

module.exports = { assess, renderDocs, SHARED_OPENER, BOILERPLATE_SENTENCE, FLAGGING };
