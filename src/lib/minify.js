'use strict';

/**
 * A deliberately small CSS minifier.
 *
 * The site has no build tooling beyond Node's standard library and no runtime
 * dependencies, which rules out pulling in a real minifier — so this does only
 * the transformations that can be proved safe by inspection, and stops.
 *
 * It is worth doing at all because critical.css is inlined into the <head> of
 * every one of the 946 pages, so its size is paid 946 times over rather than
 * once from a cache.
 *
 * What it does NOT do, on purpose:
 *
 *   - Shorten colours, merge rules, or reorder anything. Those need a parser
 *     that understands the cascade, and getting one of them wrong changes how
 *     the page looks rather than how big it is.
 *   - Remove the space before a colon. `a :hover` and `a:hover` select
 *     different elements, and the difference is exactly that space.
 *   - Collapse whitespace to nothing. `calc(100% - 2rem)` needs the spaces
 *     around the operator, so runs collapse to one space rather than none.
 *
 * The caller is expected to check the result — tools/check.js compares brace
 * counts before and after, which catches a comment strip that ate a rule.
 */

/**
 * Strip comments without touching the inside of a string.
 *
 * `content: "/* not a comment *\/"` is legal CSS and a naive regex eats the
 * rest of the file from there. This walks the source instead, tracking whether
 * it is inside a quoted string, and only removes a comment found outside one.
 */
function stripComments(css) {
  let out = '';
  let quote = null;
  for (let i = 0; i < css.length; i++) {
    const ch = css[i];
    if (quote) {
      out += ch;
      if (ch === '\\') { out += css[++i] || ''; continue; }
      if (ch === quote) quote = null;
      continue;
    }
    if (ch === '"' || ch === "'") { quote = ch; out += ch; continue; }
    if (ch === '/' && css[i + 1] === '*') {
      const end = css.indexOf('*/', i + 2);
      if (end === -1) break;
      i = end + 1;
      /* A comment between two tokens becomes nothing, so leave a space behind
         it: a comment sitting between two type selectors is a descendant
         combinator, and closing the gap would make them one element. */
      out += ' ';
      continue;
    }
    out += ch;
  }
  return out;
}

/** Minify a stylesheet. Returns the source unchanged if anything looks off. */
function css(source) {
  const before = source;
  let out = stripComments(source);

  /* Whitespace runs, including newlines, become a single space. */
  out = out.replace(/\s+/g, ' ');

  /* A space is never meaningful on the inside of these, and never meaningful
     before an opening brace or a comma. */
  out = out.replace(/\s*([{};,])\s*/g, '$1');

  /* A space after a colon is never meaningful: in a declaration the colon is
     always followed by a value, and in a selector nothing follows it. The
     space *before* one is left alone, because that is the whole difference
     between a pseudo-class and a descendant combinator. */
  out = out.replace(/:\s+/g, ':');

  /* The last declaration in a block does not need its semicolon. */
  out = out.replace(/;}/g, '}');

  out = out.trim();

  /* Structure has to survive. A mismatch means the comment strip ate a rule,
     and returning the original is better than shipping a broken stylesheet. */
  const count = (text, ch) => text.split(ch).length - 1;
  if (count(out, '{') !== count(before, '{') || count(out, '}') !== count(before, '}')) {
    return before;
  }
  return out;
}

module.exports = { css, stripComments };
