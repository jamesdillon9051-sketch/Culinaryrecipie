'use strict';
/**
 * The URLs a site's sitemap lists, whether sitemap.xml is a plain urlset or an
 * index over several sitemaps.
 *
 * It is an index once a country recipe batch is published (see
 * src/lib/country-recipes.js). check.js and seo-audit.js used to read
 * sitemap.xml directly, which would have taken an index's child sitemaps for
 * pages. Both read it here instead, so a child that does not exist, or a URL
 * listed in two children, is reported rather than skipped.
 */
const fs = require('fs');
const path = require('path');

function read(root) {
  const problems = [];
  const top = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
  const files = ['sitemap.xml'];
  let xml = top;
  if (/<sitemapindex[\s>]/.test(top)) {
    xml = '';
    for (const m of top.matchAll(/<sitemap>[\s\S]*?<loc>https?:\/\/[^/]+\/([^<]+)<\/loc>/g)) {
      const file = m[1];
      const target = path.join(root, file);
      if (!fs.existsSync(target)) { problems.push(`sitemap.xml lists ${file}, which does not exist`); continue; }
      files.push(file);
      xml += fs.readFileSync(target, 'utf8');
    }
  }
  const urls = [...xml.matchAll(/<url>[\s\S]*?<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
  return { xml, urls, files, isIndex: files.length > 1 || /<sitemapindex[\s>]/.test(top), problems };
}

module.exports = { read };
