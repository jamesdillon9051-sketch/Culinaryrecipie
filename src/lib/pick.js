'use strict';

/**
 * Deterministic "random" choice.
 *
 * The build has to be reproducible — the same data must produce the same 2,400
 * pages on every machine — so anything that varies from recipe to recipe
 * (which layout a page uses, which wording a heading takes, which opening a
 * rewrite is asked for) is chosen from a hash of the recipe's slug instead of
 * from Math.random(). Across a few thousand slugs that is indistinguishable
 * from random; for any one slug it never changes.
 */

/** 32-bit FNV-1a followed by murmur3's finaliser, so near-identical slugs
    ("apple-pie", "apple-pies") do not land next to each other. */
function hash32(text) {
  let h = 0x811c9dc5;
  const s = String(text);
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  h ^= h >>> 16; h = Math.imul(h, 0x85ebca6b) >>> 0;
  h ^= h >>> 13; h = Math.imul(h, 0xc2b2ae35) >>> 0;
  h ^= h >>> 16;
  return h >>> 0;
}

/** One item of `list`, fixed by `key`. */
function pick(list, key) {
  return list[hash32(key) % list.length];
}

module.exports = { hash32, pick };
