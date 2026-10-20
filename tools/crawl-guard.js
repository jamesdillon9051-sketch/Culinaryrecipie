'use strict';
/* Guards on our generated HTML. The independent Python catalogue audit and
   rendered-browser tests also cover these rules using different readers. */
const attrs = tag => Object.fromEntries([...tag.matchAll(/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g)]
  .map(m => [m[1].toLowerCase(), m[2] === undefined ? m[3] : m[2]]));
const recipeType = t => [].concat(t || []).some(x => /^(?:https?:\/\/schema\.org\/|schema:)?Recipe$/.test(x));
function recipeDeclarations(html) {
  let jsonld = 0, microdata = 0, rdfa = 0;
  const walk = v => {
    if (Array.isArray(v)) v.forEach(walk);
    else if (v && typeof v === 'object') {
      if (recipeType(v['@type'])) jsonld++;
      Object.values(v).forEach(walk);
    }
  };
  for (const match of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
    if (attrs(match[1]).type === 'application/ld+json') {
      try { walk(JSON.parse(match[2])); } catch { /* check.js reports malformed JSON separately */ }
    }
  }
  const markup = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '').replace(/<!--[\s\S]*?-->/g, '');
  for (const match of markup.matchAll(/<[a-z][^>]*>/gi)) {
    const a = attrs(match[0]);
    if ((a.itemtype || '').split(/\s+/).some(recipeType)) microdata++;
    if ((a.typeof || '').split(/\s+/).some(recipeType)) rdfa++;
  }
  return { jsonld, microdata, rdfa };
}
function indexability(html, canonical) {
  const errors = [], canonicals = [];
  for (const match of html.matchAll(/<(?:meta|link)\b[^>]*>/gi)) {
    const a = attrs(match[0]);
    if ((a.rel || '').split(/\s+/).includes('canonical')) canonicals.push(a.href);
    if (/^(robots|googlebot|googlebot-news)$/i.test(a.name || '') || /^x-robots-tag$/i.test(a['http-equiv'] || '')) {
      if (/\b(noindex|nofollow|none)\b/i.test(a.content || '')) errors.push('restrictive robots directive on intended indexable page');
    }
  }
  if (canonicals.length !== 1 || canonicals[0] !== canonical) errors.push('missing, multiple or incorrect canonical URL');
  return errors;
}
module.exports = { recipeDeclarations, indexability };
