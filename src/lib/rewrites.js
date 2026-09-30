'use strict';

/**
 * Rewrites, kept apart from the recipes they rewrite.
 *
 * tools/humanize.js does not edit the detail files. It writes what the model
 * sends back into src/data/rewrites/*.json, one entry per recipe, and the
 * catalogue loader lays those entries over the originals when it builds the
 * list of details. The originals stay exactly as they were, so:
 *
 *   - undoing a rewrite is deleting its entry, and undoing all of them is
 *     deleting the directory (or `node tools/backup.js --restore --prune`);
 *   - a diff of a rewrite is a diff of one small JSON file, not of a 300 KB
 *     module that happens to hold forty recipes;
 *   - nothing a rewrite says can reach a field it was not allowed to touch.
 *
 * Every entry records a hash of the original text it replaced (`src`). If
 * somebody edits that recipe afterwards, the hash no longer matches, the entry
 * is ignored and the edit wins — a rewrite of words that no longer exist must
 * not quietly overwrite the new ones. Ignored entries are counted in the build
 * output so they are noticed, and tools/humanize.js redoes them.
 *
 * An entry is applied only if every field in it is well formed. A malformed
 * one stops the build with the recipe's name in the message, rather than
 * publishing whatever it happened to contain.
 *
 * Entry shape:
 *   {
 *     src:      hash of the original d, why, tips, pair and store
 *     at:       ISO time the rewrite was accepted
 *     model:    the model that wrote it
 *     hook:     which opening it was asked for (see voice.js)
 *     d, why, tips, pair, store    replacements (any subset)
 *     layout:   optional layout id
 *     headings: optional { why, method, tips, swaps, diet, serve, store, faq, nutrition }
 *   }
 */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const layouts = require('./layouts');
const voice = require('./voice');
const { spans } = require('./inline');

/* WD_REWRITES_DIR points the build somewhere else, to preview a set of
   rewrites (a mock run, say) without putting them in src/data. */
const DIR = process.env.WD_REWRITES_DIR
  ? path.resolve(process.env.WD_REWRITES_DIR)
  : path.join(__dirname, '..', 'data', 'rewrites');

/** Fields a rewrite replaces. The hash is taken over these, in this order. */
const REPLACES = ['d', 'why', 'tips', 'pair', 'store'];
/** Fields a rewrite may add. */
const ADDS = ['hook', 'layout', 'headings'];

/** A short fingerprint of the original text a rewrite is replacing. */
function sourceHash(detail) {
  return crypto.createHash('sha256')
    .update(JSON.stringify(REPLACES.map(k => (detail[k] === undefined ? null : detail[k]))))
    .digest('hex').slice(0, 16);
}

const isText = (v, min = 1, max = 4000) => typeof v === 'string' && v.trim().length >= min && v.length <= max;
const isList = (v, min, max, each) => Array.isArray(v) && v.length >= min && v.length <= max && v.every(each);

/** Throws, naming the recipe, unless the entry is something the page can render safely. */
function assertEntry(slug, e) {
  const fail = why => { throw new Error(`Rewrite for "${slug}": ${why}`); };
  if (typeof e !== 'object' || e === null || Array.isArray(e)) fail('is not an object');
  if (!/^[0-9a-f]{16}$/.test(e.src || '')) fail('has no valid "src" hash');
  if (e.d !== undefined && !isText(e.d, 40, 400)) fail('"d" must be 40-400 characters of text');
  if (e.why !== undefined) {
    if (!isText(e.why, 200, 3000)) fail('"why" must be 200-3000 characters of text');
    if (spans(e.why).length > 3) fail('"why" has more than three bold spans');
  }
  if (e.tips !== undefined) {
    if (!isList(e.tips, 2, 5, t => isText(t, 15, 500))) fail('"tips" must be 2-5 strings');
    if (e.tips.reduce((n, t) => n + spans(t).length, 0) > 2) fail('"tips" has more than two bold spans');
  }
  if (e.pair !== undefined && !isList(e.pair, 2, 6, t => isText(t, 2, 120))) fail('"pair" must be 2-6 short strings');
  if (e.store !== undefined && !isText(e.store, 15, 600)) fail('"store" must be 15-600 characters of text');
  if (e.layout !== undefined && !layouts.IDS.includes(e.layout)) fail(`"layout" must be one of ${layouts.IDS.join(', ')}`);
  if (e.hook !== undefined && !voice.HOOKS.some(h => h.id === e.hook)) fail('"hook" is not a known hook');
  if (e.headings !== undefined) {
    if (typeof e.headings !== 'object' || Array.isArray(e.headings) || e.headings === null) fail('"headings" must be an object');
    for (const [k, v] of Object.entries(e.headings)) {
      if (!layouts.SECTIONS.includes(k)) fail(`"headings.${k}" is not a section`);
      if (typeof v !== 'string' || /[<>]/.test(v) || v.length > 70) fail(`"headings.${k}" is not a safe heading`);
    }
  }
}

/** Every entry in rewrites/*.json, later files winning. */
function entries(dir = DIR) {
  const out = {};
  if (!fs.existsSync(dir)) return out;
  for (const file of fs.readdirSync(dir).filter(f => f.endsWith('.json')).sort()) {
    const parsed = JSON.parse(fs.readFileSync(path.join(dir, file), 'utf8'));
    for (const [slug, entry] of Object.entries(parsed)) out[slug] = entry;
  }
  return out;
}

/**
 * Lay the rewrites over `details` (slug -> record), in place on the map and
 * never on a record, which may be shared with another caller. The outcome is
 * attached as a non-enumerable `__rewrites`: { applied, stale, unknown }.
 */
function apply(details, dir = DIR) {
  const stats = { applied: 0, stale: [], unknown: [] };
  for (const [slug, entry] of Object.entries(entries(dir))) {
    const base = details[slug];
    if (!base) { stats.unknown.push(slug); continue; }
    assertEntry(slug, entry);
    if (entry.src !== sourceHash(base)) { stats.stale.push(slug); continue; }
    const merged = { ...base };
    for (const k of [...REPLACES, ...ADDS]) if (entry[k] !== undefined) merged[k] = entry[k];
    details[slug] = merged;
    stats.applied++;
  }
  Object.defineProperty(details, '__rewrites', { value: stats, enumerable: false, configurable: true });
  return details;
}

module.exports = { DIR, REPLACES, ADDS, sourceHash, assertEntry, entries, apply };
