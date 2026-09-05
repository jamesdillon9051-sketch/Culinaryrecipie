'use strict';

/**
 * When each page's content last actually changed.
 *
 * The sitemap used to carry two dates. Every one of the 809 recipes claimed
 * the same `lastmod`, a constant in build.js, which tells a crawler nothing
 * about which of them moved; and every taxonomy page claimed the day of the
 * build, which moved on every deploy whether or not a word had changed.
 *
 * A `lastmod` that changes when nothing did is worse than none at all: Google
 * has said it ignores the field on sites where it proves unreliable, so a
 * build-stamped date spends the one signal the sitemap exists to carry.
 *
 * So each route is fingerprinted from the source it is rendered out of — the
 * catalogue row and detail record for a recipe, the list of slugs for a
 * taxonomy page — and the date only moves when the fingerprint does. The
 * fingerprints live in src/data/content-dates.json and are committed, which is
 * what makes the answer stable across machines and across rebuilds.
 *
 * Deliberately hashed from the source rather than the rendered HTML: the
 * output carries the site-wide recipe count, ad markup and a footer that
 * changes when any other page is added, none of which is a change to this
 * page's content.
 */
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const STORE = path.join(__dirname, '..', 'data', 'content-dates.json');

function load() {
  try {
    return JSON.parse(fs.readFileSync(STORE, 'utf8'));
  } catch {
    return {};
  }
}

/** Short, stable digest of anything JSON-serialisable. */
function digest(payload) {
  return crypto.createHash('sha1')
    .update(JSON.stringify(payload))
    .digest('hex')
    .slice(0, 12);
}

/**
 * A register of content dates for one build.
 *
 * `dateFor(route, payload)` returns the day that route's content last changed,
 * recording today's date the first time a fingerprint is seen or when it
 * differs from the stored one. `save()` writes the register back, and reports
 * whether anything moved so the build can say so.
 */
function register(today = new Date().toISOString().slice(0, 10)) {
  const stored = load();
  const next = {};
  let changed = 0;
  let added = 0;

  return {
    dateFor(route, payload) {
      const hash = digest(payload);
      const previous = stored[route];
      if (previous && previous.hash === hash) {
        next[route] = previous;
      } else {
        if (previous) changed++; else added++;
        next[route] = { hash, lastmod: today };
      }
      return next[route].lastmod;
    },

    /**
     * Persist the register. Routes absent from this build are dropped, so a
     * deleted page does not leave its date behind for a future page that
     * happens to reuse the URL.
     */
    save() {
      const ordered = {};
      for (const key of Object.keys(next).sort()) ordered[key] = next[key];
      const before = JSON.stringify(load());
      const after = JSON.stringify(ordered);
      if (before !== after) fs.writeFileSync(STORE, JSON.stringify(ordered, null, 1) + '\n');
      return { changed, added, removed: Object.keys(stored).filter(k => !(k in next)).length };
    }
  };
}

module.exports = { register, digest };
