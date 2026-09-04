#!/usr/bin/env node
'use strict';
/**
 * Regenerates images-attribution.md from src/data/images.json.
 * Images are CC0, public domain, or CC BY — the last of which is only usable
 * because the photographer is credited, so this file and the credit line on
 * each recipe page are part of meeting the licence, not a courtesy.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const images = JSON.parse(fs.readFileSync(path.join(ROOT, 'src/data/images.json'), 'utf8'));
/* Both volumes, so the credits cover every recipe on the site. */
const catalog = require(path.join(ROOT, 'src/data/volumes.js')).catalog();

const rows = [];
const counts = {};
let heroes = 0;
let process_ = 0;
const missing = [];

for (const recipe of catalog) {
  const entry = images[recipe.slug] || {};
  if (!entry.hero) missing.push(recipe);

  for (const [kind, data] of [['Hero', entry.hero], ['Process', entry.process]]) {
    if (!data) continue;
    kind === 'Hero' ? heroes++ : process_++;
    counts[data.licence] = (counts[data.licence] || 0) + 1;

    const author = (data.author || 'Unknown').replace(/\|/g, '/').trim() || 'Unknown';
    const title = (data.title || '').replace(/\|/g, '/').trim();
    rows.push(
      `| \`${data.file}.webp\` / \`.jpg\` | ${recipe.title} | ${kind} | ${title} | ${author} | ` +
      `${data.licence} | [${data.source}](${data.page}) |`
    );
  }
}

const NEEDS_CREDIT = /^(cc[-\s]?by|attribution)/i;
const SHARE_ALIKE = /(\bsa\b|share[-\s]?alike)/i;
const terms = name => SHARE_ALIKE.test(name)
  ? 'Free to use, adapt and use commercially **provided the photographer is credited** and adaptations carry the same licence'
  : NEEDS_CREDIT.test(name)
    ? 'Free to use, adapt and use commercially **provided the photographer is credited**'
    : 'No rights reserved — no attribution legally required';

const licenceRows = Object.entries(counts)
  .sort((a, b) => b[1] - a[1])
  .map(([name, n]) => `| ${name} | ${n} | ${terms(name)} |`)
  .join('\n');

const credited = Object.entries(counts)
  .filter(([name]) => NEEDS_CREDIT.test(name))
  .reduce((sum, [, n]) => sum + n, 0);
const free = (heroes + process_) - credited;

const doc = `# Image Attribution

Every photograph on Weekly Delight is freely licensed. Of ${heroes + process_}
images, **${free}** are CC0 or public domain and carry no conditions at all, and
**${credited}** are **Creative Commons Attribution (CC BY)** — free to use, adapt
and use commercially, on the single condition that the photographer is credited.

That condition is met in two places: underneath the photograph on the recipe
page itself, and in the table below. Both name the title, the photographer, the
licence and the source, which is what Creative Commons asks for.

Every image is resized and re-encoded to WebP and JPEG, which makes what this
site publishes an adaptation of the original. Where the licence is
Attribution-ShareAlike, that adaptation carries **the same licence as the
original**, and the credit beside the photograph on the recipe page says so.

No image here is NonCommercial — this site carries advertising — or
NoDerivatives, since resizing is precisely what that licence forbids
distributing. Both are filtered out at source rather than caught in review.

## How the images were sourced

Images were collected programmatically by \`tools/fetch_images.py\`, which:

1. Queries **Wikimedia Commons**, then re-checks the \`LicenseShortName\` field on
   every result and discards anything that is not CC0, public domain or CC BY.
   The search filter is treated as a hint; the licence field is the authority.
2. Rejects NonCommercial and NoDerivatives outright, including compound forms
   such as CC BY-NC-SA. The forbidden clause is looked for anywhere in the
   licence string rather than in a fixed position, so an unusual ordering like
   "CC BY-SA-NC" cannot slip past.
3. Scores each candidate for relevance against the dish name and rejects
   archival material, illustrations, packaging shots and portraits.
4. Downloads, centre-crops to 4:3, resizes, and writes both WebP and JPEG.

If no properly licensed photograph could be found for a dish, the site shows a
CSS gradient placeholder carrying the recipe name instead. We would rather show
nothing than use an image we do not have clear rights to.

## Summary

| | |
|---|---|
| Recipes | ${catalog.length} |
| Hero images | ${heroes} |
| Secondary "process" images | ${process_} |
| Total image files | ${(heroes + process_) * 2} (WebP + JPEG for each) |
| Recipes using a gradient placeholder | ${missing.length} |

### Licences used

| Licence | Images | Terms |
|---|---:|---|
${licenceRows}

Licence texts:

- **CC0 1.0 Universal** — <https://creativecommons.org/publicdomain/zero/1.0/>
- **Public Domain Mark 1.0** — <https://creativecommons.org/publicdomain/mark/1.0/>
- **CC BY 4.0** — <https://creativecommons.org/licenses/by/4.0/>
- **CC BY 3.0** — <https://creativecommons.org/licenses/by/3.0/>
- **CC BY 2.0** — <https://creativecommons.org/licenses/by/2.0/>
- **CC BY-SA 4.0** — <https://creativecommons.org/licenses/by-sa/4.0/>
- **CC BY-SA 3.0** — <https://creativecommons.org/licenses/by-sa/3.0/>
- **CC BY-SA 2.0** — <https://creativecommons.org/licenses/by-sa/2.0/>

${missing.length ? `### Recipes without a photograph

These use the built-in gradient placeholder because no CC0, public-domain,
CC BY or CC BY-SA image of sufficient quality and relevance could be found:

${missing.map(r => `- ${r.title} (\`${r.slug}\`)`).join('\n')}
` : ''}
## Brand assets

\`favicon.svg\`, \`icon-192.png\`, \`icon-512.png\` and \`og-default.jpg\` are original
work, generated by \`tools/make_icons.py\`, and are released under the same MIT
licence as the rest of this project.

## Full image index

| File | Recipe | Role | Original title | Photographer | Licence | Source |
|---|---|---|---|---|---|---|
${rows.join('\n')}

---

*Regenerate this file with \`npm run attribution\`.*
`;

fs.writeFileSync(path.join(ROOT, 'images-attribution.md'), doc);
console.log(`images-attribution.md written — ${rows.length} images, ${Object.keys(counts).length} licence types, ${missing.length} placeholder(s)`);
