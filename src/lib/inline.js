'use strict';

/**
 * The one piece of inline markup recipe prose may carry: **bold**.
 *
 * Emphasis is for the thing a hurried cook must not miss — a warning, a number,
 * a cue — and the prose that asks for it (the "why" text and the tips) marks it
 * with double asterisks. Nothing else is interpreted: no links, no italics, no
 * HTML. Everything outside a **span** is escaped text.
 *
 * The markers never leave the recipe page. loadRecipes() keeps two copies of
 * each field that can carry them: `recipe.why` and `recipe.tips` are plain, and
 * are what the structured data, the FAQ answers, the feeds, the search index
 * and the audits read; `recipe.whyRich` and `recipe.tipsRich` keep the markers
 * and are read only by the page template, which turns them into <strong>.
 * The words on the page and the words in the schema are therefore the same
 * words, which is the condition Google puts on FAQ and recipe markup.
 */
const { esc } = require('./util');

const SPAN = /\*\*([^*\n]+?)\*\*/;

/** The text as a reader hears it: markers removed, nothing else touched. */
const plain = text => String(text == null ? '' : text).replace(new RegExp(SPAN.source, 'g'), '$1');

/** Escaped HTML, with each **span** as <strong>. */
function html(text) {
  const src = String(text == null ? '' : text);
  const re = new RegExp(SPAN.source, 'g');
  let out = '';
  let last = 0;
  let m;
  while ((m = re.exec(src))) {
    out += esc(src.slice(last, m.index)) + `<strong>${esc(m[1])}</strong>`;
    last = m.index + m[0].length;
  }
  return out + esc(src.slice(last));
}

/** The bold spans in a text, in order. */
function spans(text) {
  const out = [];
  const re = new RegExp(SPAN.source, 'g');
  let m;
  while ((m = re.exec(String(text == null ? '' : text)))) out.push(m[1]);
  return out;
}

/** Paragraphs, split on blank lines. A text with none is one paragraph. */
const paragraphs = text => String(text == null ? '' : text).split(/\n\s*\n/).map(p => p.trim()).filter(Boolean);

module.exports = { plain, html, spans, paragraphs, SPAN };
