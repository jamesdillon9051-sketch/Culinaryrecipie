# Weekly Delight

A dependency-free static site for the world's **2415 most famous recipes** — each
one with a full ingredient list, step-by-step method, the cooking science behind
it, pairing suggestions, storage guidance and nutrition.

Built from scratch with vanilla HTML, CSS and JavaScript. No framework, no build
tooling beyond Node's standard library, no runtime dependencies.

```
2415 recipes · 78 cuisines · 10 categories · 2568 static pages · 0 npm dependencies
```

---

## Quick start

```bash
git clone <this-repo> culinaryvault
cd culinaryvault

npm run build      # generates the site into the repo root (about 300ms)
npm run serve      # builds, then previews at http://localhost:4173
npm run check      # audits the build: links, alt text, headings, schema, meta
```

Node 18 or newer. Nothing to install — `package.json` has no dependencies.

### Deploying

The site is a plain folder of static files. Both major hosts are pre-configured:

| Host | Config | Build command | Publish directory |
|---|---|---|---|
| Netlify | `netlify.toml` | `npm run build` | `.` |
| Vercel | `vercel.json` | `npm run build` | `.` |
| GitHub Pages | — | — | `main` branch, `/ (root)` |

The generated site lives in the **repository root**, so the repo can be served
as-is with no build step: point GitHub Pages at the root of `main` and it
works. `.nojekyll` stops Pages running the output through Jekyll.

Because the output directory is also the project directory, the build never
wipes it wholesale. `cleanOutput()` in `src/build.js` removes only the paths
it generated, guarded by an allow-list that refuses to touch `src/`, `tools/`,
`.git` or any config file. Anything else in the root is left alone.

**Set your real domain before going live.** The canonical URLs, sitemap, RSS
feed and Open Graph tags are all derived from one environment variable:

```bash
SITE_URL=https://yourdomain.com npm run build
```

Deploying under a sub-path (GitHub Pages project sites, for instance)? Set
`BASE_PATH` as well:

```bash
SITE_URL=https://you.github.io BASE_PATH=/culinaryvault/ npm run build
```

---

## Project structure

```
.
├── src/
│   ├── build.js                 # the static site generator (entry point)
│   ├── data/
│   │   ├── catalog.js           # volume one: slug, title, cuisine, timings, ratings
│   │   ├── catalog-2.js …-31.js  # further volumes, same shape, merged at build
│   │   ├── details/*.js         # volume one long-form content
│   │   ├── details2/ …details31/ # long-form content for the matching volume
│   │   ├── volumes.js           # discovers and merges the volumes above
│   │   ├── rewrites/*.json      # rewrites laid over the recipes by tools/humanize.js
│   │   ├── stats.js             # recipe/cuisine counts derived from the catalogues
│   │   └── images.json          # image manifest: files, licences, colours, LQIP
│   ├── lib/
│   │   ├── util.js              # escaping, durations, taxonomy tables
│   │   ├── ingredients.js       # ingredient parser + quantity formatter
│   │   ├── voice.js             # banned phrases, openings, first-person rules, text checks
│   │   ├── layouts.js           # the recipe-page layouts and their heading wordings
│   │   ├── inline.js            # the one mark-up allowed in prose: **bold**
│   │   ├── rewrites.js          # lays src/data/rewrites over the recipes
│   │   ├── rewrite-check.js     # decides whether a rewrite may replace a recipe's words
│   │   └── pick.js              # deterministic choice from a slug hash
│   ├── templates/
│   │   ├── layout.js            # HTML shell, head/SEO, header, footer, card
│   │   ├── pages.js             # home, directory, taxonomy, about, contact, 404
│   │   └── recipe-page.js       # the recipe detail page + Recipe schema
│   └── assets/
│       ├── css/critical.css     # design tokens + above-the-fold (inlined)
│       ├── css/main.css         # everything else (deferred)
│       ├── js/theme.js          # pre-paint theme + async stylesheet promotion
│       ├── js/app.js            # theme, nav, search, favourites, reveal, forms
│       ├── js/recipe.js         # scaler, cook mode, timers, reviews, sharing
│       ├── js/directory.js      # client-side filtering and sorting
│       └── img/recipes/         # 5320 image files (WebP + JPEG)
├── tools/
│   ├── fetch_images.py          # sources CC0/public-domain photography
│   ├── retry_images.py          # second pass with alternative queries
│   ├── fix_images.py            # targeted replacements with strict validation
│   ├── final_images.py          # final QA pass
│   ├── make_icons.py            # favicon, PWA icons, OG card
│   ├── make-attribution.js      # regenerates images-attribution.md
│   ├── check.js                 # post-build audit
│   ├── voice-audit.js           # measures repetition in the prose; fails on banned phrases
│   ├── backup.js                # snapshot, verify and restore src/data
│   ├── humanize.js              # batch rewrite through the Anthropic API, safely
│   ├── humanize-selftest.js     # tests for the four above, against a fake API
│   └── serve.js                 # local preview server
├── index.html                   # ── generated output, committed, deploy-ready
├── 404.html
├── assets/                      #    css, js and 5320 image files
├── recipes/                     #    2415 recipe pages
├── categories/  cuisines/       #    taxonomy landing pages
├── about/  contact/  search/  favourites/
├── sitemap.xml  robots.txt  manifest.json  feed.xml  search-index.json
├── images-attribution.md        # source + licence for every image
├── netlify.toml / vercel.json
├── CLAUDE.md                    # working instructions for Claude Code sessions
└── package.json
```

### How the data fits together

`catalog.js` holds one row per recipe (identity, timings, rating, badges).
`details/*.js` holds the long-form content keyed by the same slug. The build
merges them and **fails loudly** if a slug is missing content or a nutrition
array has the wrong shape — so a half-written recipe can never be published.

Adding a recipe means adding one `c(...)` row to a `catalog*.js` volume and one
keyed object to a file in the matching `details*/` directory, then running
`npm run build`.

Adding a whole volume means creating the two and nothing else. `volumes.js`
finds them by name and orders them numerically, because five separate files
used to list the volumes by hand — the build, the stats, the diet audit, the
attribution table and the image fetcher — and adding an eighth to four of them
would have left the fifth quietly working from a stale list.

### Ingredient parsing

Ingredients are authored as natural strings:

```js
'700 g boneless chicken thighs, cut into 3 cm cubes'
```

`lib/ingredients.js` splits off the **leading** quantity and unit only, so
measurements inside the description ("3 cm cubes") are left alone. That leading
quantity is what the serving scaler recalculates, rounding sensibly per unit —
grams to the nearest 5, small counts to kitchen fractions (`¾ tsp`, not
`0.75 tsp`). A line beginning `# ` starts a new sub-group heading.

---

## Features

**Reading and cooking**

- **Adjustable servings** — every quantity recalculates live, with unit-aware rounding
- **Cook Mode** — large type, dimmed inactive steps, screen wake-lock, arrow-key navigation
- **Inline step timers** — durations are detected from the method text automatically
- **Ingredient checklist** — ticks persist per recipe in `localStorage`
- **Print stylesheet** — clean recipe card, no navigation, no images bleeding ink
- **Dark mode** — a warm, food-friendly palette, not an inverted grey

**Discovery**

- Real-time search with autocomplete over titles, cuisines, keywords and every ingredient.
  The derived keywords go into the index too, so plain-language queries work — "can you
  freeze" reaches 496 recipes, "meal prep" 454, "high protein" 239, "low calorie" 187,
  "for beginners" 335. The dish name is stripped from each phrase before indexing, since
  substring search only needs it once; that keeps the index at 173 KB gzipped rather than
  the 245 KB it would be with every repeat left in
- Faceted filtering by category, cuisine, dietary tag, difficulty and total time
- Filter state is reflected in the URL, so filtered views are shareable
- Favourites, stored locally with no account
- `/` keyboard shortcut jumps to search

**Everything is client-side.** There is no back end. Favourites, checklists and
reviews live in the visitor's browser and never reach a server.

---

## SEO checklist

Everything below is implemented and verified by `npm run check` on every build.

### Crawlability & indexing

- [x] `sitemap.xml` with per-page `lastmod`, `changefreq` and `priority`, plus image entries
- [x] `robots.txt` allowing the site, disallowing filtered query-string views and the device-local `/favourites/`
- [x] Canonical URL on every page
- [x] `noindex, follow` on the 404 page, search page results and favourites
- [x] Clean, keyword-rich URLs — `/recipes/chicken-tikka-masala/`, never `?id=123`
- [x] Trailing-slash directory structure so URLs work on every static host
- [x] RSS feed at `/feed.xml`

### Structured data (JSON-LD)

- [x] **Recipe** on all 2415 recipe pages — `name`, `image`, `author`, `datePublished`, `prepTime`, `cookTime`, `totalTime`, `recipeYield`, `recipeCategory`, `recipeCuisine`, `keywords`, `nutrition`, `recipeIngredient`, `recipeInstructions` (as `HowToStep` with anchors), `suitableForDiet`
- [x] **BreadcrumbList** on every page below the root
- [x] **WebSite** with `SearchAction` (sitelinks search box)
- [x] **Organization** with logo
- [x] **ItemList** for the homepage editor's picks
- [x] **CollectionPage** on category and cuisine landing pages
- [x] **FAQPage** on the about page
- [x] **AboutPage** / **ContactPage**

### Metadata

- [x] Unique `<title>` under 70 characters on every page
- [x] Unique meta description under 160 characters on every page
- [x] Open Graph: `type`, `site_name`, `locale`, `title`, `description`, `url`, `image`, `image:alt`, `image:width`, `image:height`
- [x] Twitter Card: `summary_large_image` with `site`, `title`, `description`, `image`, `image:alt`
- [x] **VideoObject** and **Review**, wired but silent — `src/lib/media.js` emits
      them only from real assets. Add a `video` block to a recipe's detail record
      and the VideoObject appears alongside a rendered player; put reviews in
      `src/data/reviews.json` and the Review objects appear alongside the rendered
      reviews, with `aggregateRating` recomputed as their actual average. Neither
      is present today, because the site has no videos and reader reviews live in
      the reader's own browser and never reach a server. `npm run check` verifies
      review text is on the page and that a VideoObject is accompanied by an
      actual player
- [x] **`aggregateRating` comes from readers or from nowhere.** It used to
      publish the catalogue's seeded figures: every value between 4.5 and 4.9,
      the highest claiming 4,966 reviews, on 600 recipes nobody had rated. That
      is a statement to a reader and to Google that a stated number of people
      scored the dish, and Google's price for rating markup that is not from
      genuine reviews is every rich result on the domain. The fallback is gone
      and `src/data/reviews.json` is the only source, so all 809 read "Not yet
      rated" until somebody rates one
- [x] **FAQPage** on all 2415 recipe pages and the about page — 14,031 questions,
      about 5.8 a recipe, built by `src/lib/faq.js` from fields the page already
      prints: the times, the tips, the pairings, the storage note, the diet tags
      and the nutrition figures. A question whose source field is missing is not
      asked. `npm run check` reads every answer out of the schema and looks for
      it in the rendered text, so markup cannot describe Q&A a reader cannot see
      — which is the condition Google puts on FAQ markup, and the one that earns
      a manual action when it is broken.

      Worth knowing: since August 2023 Google shows FAQ rich results only for
      well-known, authoritative government and health sites. This markup is
      correct and it will not put an accordion under the search result. The gain
      is a page that answers what people actually ask
- [x] Keywords — 4 curated phrases per recipe, widened to a median of 87 by
      `src/lib/keywords.js` from the row's own cuisine, category, times,
      difficulty, diet tags, servings, ingredients, cooking method, pairings,
      per-serving nutrition and storage note. Derived rather than written, so a
      phrase is only emitted where the data backs it: "gluten free X" needs the
      tag, "30 minute X" needs the times, "low calorie X" needs fewer than 400
      kcal a serving, "can you freeze X" needs the storage note to say so,
      "baked X" needs the method to use an oven
- [x] `node tools/keyword-audit.js` checks all 213,603 of them back against the
      records, one rule per claim a phrase can make. It fails the build, and
      `npm run check` runs it
- [x] The three places the list goes are sized separately, because the safe
      length is different in each. The Recipe JSON-LD takes 12: Google's
      guidance asks `keywords` for "other terms for your recipe", and ninety
      phrases there is the shape of a manual action. The `keywords` meta tag
      takes 25 — Google has ignored it since 2009 so length buys no ranking,
      and Bing has said a stuffed one reads as spam, which makes a
      four-kilobyte tag all downside. The site's own search index takes
      everything, because that is the one consumer that gains from volume
- [ ] **Cookie consent — built, and currently switched off.** `src/data/consent.js`
      has `enabled: false`, so analytics and advertising load with the page as they
      always did and ad revenue is unaffected. Setting it to `true` restores real
      gating: `assets/js/consent.js` holds the banner and the loader, Google
      Analytics and all three Adsterra units leave the markup entirely (their URLs
      travel inertly on data attributes) and are injected only after somebody
      accepts, Reject and Accept carry equal weight, and a "Cookie settings" link
      appears in the footer. It was verified in Chromium at the time: zero requests
      to Google or the ad network before a choice, zero after refusing, zero on a
      reload after refusing. The privacy page follows the flag in both directions,
      so it never describes a banner that is not there.

      Off is a decision with consequences, not a default: loading analytics and
      advertising cookies without asking is not lawful for readers in the UK or the
      EU under GDPR and the ePrivacy rules. The middle path, if the revenue matters
      more than the simplicity, is to show the banner only where it is required —
      Netlify Edge Functions can make that call from the request's country
- [x] Google Analytics 4 on all 792 pages, configured in `src/data/analytics.js`
      — set `enabled: false` and the next build strips it, which is what you want
      before a Lighthouse run. Google supplies the tag as an inline `<script>`;
      the bootstrap lives in `assets/js/analytics.js` instead, because the
      generator's own output carries no inline script and `npm run check`
      enforces that. The measurement ID reaches it on a `data-ga-id` attribute,
      so it stays configured in one place
- [x] `theme-color`, `color-scheme`, `manifest`, favicon and Apple touch icon

### Semantics & accessibility (WCAG 2.1 AA)

- [x] Semantic HTML5 — `header`, `nav`, `main`, `article`, `section`, `aside`, `footer`, `figure`
- [x] Exactly one `<h1>` per page, no skipped heading levels (enforced by `check.js`)
- [x] Skip-to-content link
- [x] Descriptive, keyword-rich alt text on every image
- [x] `aria-label` / `aria-labelledby` on every icon-only control (enforced by `check.js`)
- [x] `role="combobox"` + `aria-activedescendant` on search, arrow-key navigable
- [x] Focus trap and Escape handling on modals; focus restored on close
- [x] Visible 3px focus ring on all interactive elements
- [x] Body text meets 4.5:1 contrast in both themes
- [x] `prefers-reduced-motion` disables parallax, reveals and smooth scrolling

### Performance & Core Web Vitals

- [x] **LCP** — critical CSS inlined, hero image `fetchpriority="high"`, `main.css` preloaded then applied off the critical path, Google Fonts non-blocking with a system fallback stack
- [x] **CLS** — explicit `width`/`height` on every image, `aspect-ratio` on media containers, dominant-colour backgrounds behind lazy images, theme applied before first paint
- [x] **INP** — all JavaScript deferred; debounced search input; `IntersectionObserver` for reveals; `requestAnimationFrame`-throttled parallax
- [x] WebP served via `<picture>` with a JPEG fallback for every image
- [x] Lazy loading below the fold, eager above it
- [x] Blur-up LQIP on recipe hero images; dominant-colour placeholders on cards
- [x] Long-cache headers for assets, revalidate for HTML
- [x] Zero third-party JavaScript, zero trackers

### Security

- [x] **Strict CSP** — `script-src 'self'` with no `'unsafe-inline'` or `'unsafe-eval'`. There are no inline scripts and no inline event handlers anywhere in the output; `check.js` fails the build if one reappears
- [x] `object-src 'none'`, `base-uri 'self'`, `frame-ancestors 'self'`, `form-action 'self'`, `upgrade-insecure-requests`
- [x] Identical policy on Netlify and Vercel — `check.js` fails if the two configs drift apart
- [x] `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`
- [x] Every value rendered into HTML client-side is escaped; slugs and image filenames are pattern-restricted, and colours must match `#rrggbb`
- [x] The image manifest is validated at the build boundary, so a malformed entry fails the build rather than reaching a `style` or `src` attribute
- [x] `localStorage` is treated as untrusted input: reviews and favourites are shape-checked and normalised on read
- [x] The image pipeline follows `http(s)` URLs only, never `file://`
- [x] Zero dependencies, so no supply chain and no install hooks

Serving from the repository root means `src/` and `tools/` are published
alongside the site and are publicly fetchable. There are no secrets in either
— the recipe data and build scripts are the whole project — but they are
excluded in `robots.txt` since there is nothing there to index. If you would
rather they were not served at all, set the publish directory back to a
subfolder and revert `OUT` in `src/build.js`.

`style-src` deliberately keeps `'unsafe-inline'`. Cards carry a per-recipe
background colour, hero images carry a blur-up data URI, and star ratings carry
a computed width — all as inline `style` attributes. Inline styles cannot
execute script, so this is a much weaker concession than an inline `script-src`
would be.

### Content quality

- [x] Original 2–3 sentence description on every recipe, primary keyword used naturally
- [x] "Why This Recipe Works" — the actual cooking science — on all 600
- [x] Chef's tips, pairing suggestions and storage & reheating on all 600
- [x] Nutrition per serving on all 600
- [x] Internal linking: related recipes, cuisine pages, category pages, dietary tags

### Before you launch

1. Run the build with your real `SITE_URL`.
2. Replace the placeholder Twitter handle in `src/templates/layout.js`.
3. Wire the contact and newsletter forms to a real endpoint (Netlify Forms, Formspree, or your own). They currently validate and confirm client-side only — this is called out on the page itself.
4. Submit `sitemap.xml` in Google Search Console.
5. Validate a recipe page with the [Rich Results Test](https://search.google.com/test/rich-results).

---

## Images and licensing

Every photograph is **CC0, public domain, CC BY, or CC BY-SA** — everything that
asks only for a credit.

The site gives that credit underneath the photograph on the recipe page itself:
title, photographer, licence and a link to the original, plus
[`images-attribution.md`](images-attribution.md). Because that credit line *is*
the licence, it is not hidden behind a hover, not collapsed into a modal, and it
prints with the page.

Every image is resized and re-encoded to WebP, which makes what this site
publishes an adaptation. For a **ShareAlike** photograph that means our resized
copy carries the same licence as the original, and the credit beside it says so
in as many words.

**NonCommercial and NoDerivatives are excluded**, and not out of caution. This
site carries advertising, which NonCommercial forbids outright; and resizing is
precisely what NoDerivatives prohibits distributing. Neither can be satisfied by
crediting harder.

Images are sourced programmatically by `tools/fetch_images.py`, which searches
Wikimedia Commons in three tiers: `haslicense:unrestricted` (CC0 and public
domain) first, then `haslicense:attribution` (CC BY), and only then an
unfiltered search that leans on licence re-validation — CirrusSearch has no
bucket for ShareAlike at all. Asking in that order means a dish the free
archives cover well never takes on a crediting obligation. Every result has its
`LicenseShortName` **re-validated** rather than the search filter being trusted,
and the NonCommercial/NoDerivatives check reads the whole licence string rather
than a fixed position, so an odd ordering like `CC BY-SA-NC` cannot slip past.
Candidates are scored for relevance against the dish name, and archival
material, illustrations, packaging shots, venue photographs and images where the
dish is only a flavour are rejected.

1674 of the 2415 recipes have a photograph. Of the 2158 images on the site,
1050 are CC0 or public domain, 551 are CC BY and 557 are CC BY-SA. Anything
still without one falls back to a CSS gradient carrying the recipe name, the
same fallback that catches any image that fails to load at runtime.

Every candidate is opened and looked at before it ships. That is not belt and
braces — it is the only check that has ever worked. Every wrong photograph found
in this project scored a perfect 1.00 on relevance: a hot chocolate photographed
inside a shop called Cornish Pasty, a doughnut flavoured with horchata, a rock
band called Psychedelic Porn Crumpets, a Karelian Bear Dog, and a Rijksmuseum
drawing of a lion for lion's head meatballs. The filters in
`tools/fetch_images.py` each encode one of those mistakes and stop it recurring;
none of them would have caught the next one.

Where a dish is named after a place, a band or an animal, the durable fix is the
query rather than a filter. Sloppy joes asks for the sandwich, because the bare
name returns a bar in Key West; lion's head meatballs asks for shizitou, because
the English name returns lions.

A later pass re-ran the pipeline — by then carrying the curated Wikidata
sources, the `shares_dish_word` gate and the native-script fallbacks this
README describes elsewhere — against all 77 recipes still on the gradient,
including the 33 already marked `skip: true`, on the reasoning that a verdict
reached before those sources existed deserved a second look rather than a
permanent one. It found 21 candidates that passed the relevance filters.
Opened and checked against the recipe each was for, 19 were wrong: a fire
engine for green goddess salad, a Japanese tatami room for shiro wat, a pile of
cut firewood for Black Forest gateau, a shell-decorated church for conchas
(conchas means shells), a watermarked advertising flyer for paletas, chicken
for a recipe that specifically calls for prawns in pad woon sen, beef for an
explicitly meatless mushroom sauce in stroganoff sauce, and — the exact mistake
its own `skipReason` already named — gumbo again for bamia masreya. Two were
right: a whole sea bass in its salt crust for bar-en-croûte-de-sel, the dish
twelve earlier passes had only ever returned filleted and sauced; and mandazi,
found through its own Wikidata item. The 19 wrong pages are now recorded in
`src/data/image-rejects.json` so the same search cannot return them twice.
Seventeen of the original 33 skip verdicts stand re-confirmed rather than
merely assumed; ten more recipes, never previously marked, turned up nothing
usable under native-script and transliterated queries and are marked
`skip: true` for the first time. The remaining 48 found a candidate that
failed to download rather than a wrong one — read as "try again", not as a
verdict, and left for the next run to pick up on its own.

The rest of the gaps are dishes where a search loose enough to find something
starts returning things that are not the dish at all. Bořek is a village in
Czechia, and the archive holds it from the air. Toad-in-the-hole is a Gillray
cartoon of Napoleon from 1808. Cawl is a Somali surname. Doubles is a row of
storefronts in Trinidad, each billing itself an empire or a boss. Those are
pinned with `"skip": true` in `src/data/images.json`, alongside a `skipReason`
saying what the search returns instead, so the pipeline leaves them alone and
the next person does not have to rediscover why. A wrong photograph is worse
than an honest placeholder.

Dishes whose own name differs from the English one carry fallback queries in
`src/data/image-queries.json` — a native-script spelling, another
romanisation, or the name the dish goes by elsewhere. Those are alternate names
only, never categories: "Georgian dumplings" would match any dumpling.

To fill in the rest, re-run `npm run images`. It is resumable and it only ever
looks at recipes whose hero is still missing, so it can be run as often as the
archives will tolerate.

Full per-image credits, with photographer, licence and source link, are in
[`images-attribution.md`](images-attribution.md). Regenerate it with
`npm run attribution`.

Re-running the image pipeline is safe and resumable — it skips anything already
in the manifest:

```bash
pip install Pillow
npm run images
```

---

### Photographs of the wrong dish

The fetcher scores a candidate on how well its title matches the query, which
lets a near-miss through: every one of these shares the dish word with the
recipe it was illustrating.

| recipe | photograph it carried |
| --- | --- |
| Rosemary Focaccia | Almond & jam focaccia |
| Pork Gyros | Cheese burger — Archipelagos Gyros |
| Goan Lamb Vindaloo | Chicken Vindaloo |
| Larb Gai (minced chicken) | Duck larb |
| Hyderabadi Biryani (lamb) | Chicken Dum Biryani |
| Baked Kibbeh | Fried lamb kibbeh |
| Pecan Pie | Apple pecan pie |
| Snickerdoodles | Snickerdoodles with gochujang inside |
| Fasolada (white bean soup) | green bean soup |

`tools/replace_images.py` takes the obvious next step: each target names not
only what a candidate's title must contain but what it must not — the wrong
protein, the wrong flavour, the wrong preparation — so a candidate is rejected
however well it scores. Nineteen heroes were replaced this way.

Titles are not enough on their own, and every replacement was looked at before
it was kept. The first pass produced a chaffinch photographed in Spandauer
Forst for the Danish pastries, an airline meal tray for beef and broccoli, and
a shop packet of plantain crisps; those were reverted, not shipped.

Three recipes ended with no photograph rather than the wrong one — beef and
broccoli, the three-egg omelette and fried sweet plantain. Commons has nothing
of those dishes under a licence the site can use, and a gradient carrying the
recipe name is honest where a picture of something else is not.

---

## High-protein and no-added-sugar

Two of the diet tags are computed rather than typed. `src/lib/diet-derived.js`
reads each recipe's own protein figure and ingredient list and applies:

- **High-Protein** at 30 g a serving or more — 245 recipes. The threshold is the
  one `src/lib/keywords.js` was already using for its "high protein X" keyword,
  because one number used twice beats two that disagree.
- **Low-Carb** at 20 g of carbohydrate a serving or less — 114 recipes. This tag
  used to be applied by hand to sixteen, one of which (ceviche, at 24 g) sat above
  any reasonable line while a hundred others sat below it unmarked.
- **No Added Sugar** when nothing in the ingredient list is sugar, honey, syrup,
  jaggery or condensed milk — 324 recipes. `sugar snap peas` and `caramelised
  onions` are excluded by name; neither sweetens anything.

43 recipes carry all three.

The tag is deliberately **not** called Sugar-Free. Milk contains lactose, an
onion contains sugar, and a pancake made with a banana is not sugar-free by any
reading — the banana pancakes here list 14 g of sugar a serving and say where it
came from. What a reader avoiding sugar can act on is whether the cook adds any,
so that is what the tag reports.

Being derived is the point. The six hand-written tags took three passes to bring
into line with their ingredients; these two are recomputed from the data on every
build and cannot drift.

`src/data/catalog-4.js` adds twelve recipes written to those two briefs. They
were also the first recipes on the site with **no rating**, because adding
twelve more invented figures would have been a poor answer to having just
documented the problem. Every recipe reads that way now — see below.

### On diabetes

There is no tag for it and there will not be one. Whether a meal suits someone
managing diabetes depends on their medication, their carbohydrate ratios, the
portion they eat and the rest of that day — it is a property of a person's
circumstances, not of a recipe, and Diabetes UK is explicit that there is no such
thing as a diabetic food. A site that labelled recipes "diabetes-safe" would be
making a clinical judgement it is in no position to make, about a reader it has
never met.

What the site can honestly provide is the number carbohydrate counting actually
uses. Every recipe prints carbohydrate per serving in its nutrition table and in
its FAQ, `src/data/catalog-5.js` adds ten recipes at 14 g a serving or less, and
the Low-Carb filter now covers 114 recipes instead of 16. The grams are the
useful part; the label was never going to be.

## Diet tags

`npm run diet` checks every recipe's diet tags against its own ingredient list —
a stricter test than the ingredient hubs apply, because a risotto made with
chicken stock is not a chicken *recipe* but is emphatically not vegetarian. A
line that offers a way out ("chicken or vegetable stock", "parmesan, to serve")
passes; a line that does not is a false claim.

This matters more than anything else the site asserts. Someone coeliac cooking
from a Gluten-Free page is trusting a claim they cannot check from the
photograph.

Every one of the site's 2415 recipes now passes, and `npm run check` runs the
audit, so a contradicted tag fails the build rather than shipping.

Getting there took 43 corrections in three passes. Eleven came out of the
ingredient hubs — arancini was tagged Vegetarian and filled with beef ragù,
Belgian frites was tagged Vegan and its mayonnaise takes egg yolks. Twenty were
Gluten-Free: seventeen lost the tag, because sole meunière is named for the
flouring and seven dishes are built on soy sauce, which is made with wheat.
Three kept it — gambas al ajillo, borscht and menemen are gluten-free dishes
served *with* bread, which their methods already said and their ingredient lists
now say too. The last twelve were the rest: panna cotta set with gelatine and
called Vegetarian, kimchi called Vegan with fish sauce and salted shrimp in the
paste, carnitas called Dairy-Free and simmered in milk, four dishes cooked in
ghee and called Dairy-Free.

A false tag was always removed, never argued with. It was replaced only where
the ingredients verify the weaker claim — samosas use ghee but no meat, so they
are Vegetarian rather than Vegan. Nothing was added on the strength of a dish's
reputation.

Chapati is the exception, and it went the other way. Its dough already read
"neutral oil or ghee"; only a separate "Ghee, for brushing" line kept it off the
vegan list. Offering the same choice on that line — and in the step that uses it
— makes the recipe say what it already meant, and the tag is honest again. That
is a change to the recipe rather than to the label, so it was made deliberately
and not as a way of keeping a tag.

The rule that decided the hard cases: read the method, not the ingredient list.
Bread reads the same either way, and only the steps say whether it thickens the
gazpacho or gets handed round with the prawns.

## One pop, not two

The Adsterra popunder is off. It was switched off while a second network ran a
tag that also opened a background window on a click, so between them a single
click could produce two — which reads as a broken site rather than an advert.

That network has since come out (see "The second ad network came out" below),
so the conflict is gone and the switch stays off on its own merits: a popunder
is the most intrusive format on offer, and on a site people reach from search
it tends to cost more in sessions than it makes. The switch is `popunder: ''`
in `src/data/ads.js`, with the URL kept in the comment above it: putting it
back is one edit, and `npm run check` starts counting it on every page again
the moment it is non-empty.

Confirmed in Chromium — the external hosts a page now requests are the social
bar, the banner, Google's tag manager and the font CDN. The popunder's host is
not among them.

## A second ad network

*Superseded — this network was removed. See "The second ad network came out"
below. Kept because the next two sections were written around it.*

Monetag's multi-format tag ran alongside the Adsterra units for a while. It
went into `src/data/ads.js` beside them rather than into the template, because
that file is where every ad on the site is configured and where the off switch
lives: emptying `monetag.src` took the tag off all 946 pages at the next build,
and `enabled: false` still takes everything off at once.

Placement was the one exception to the rule the rest of them follow — see
"Monetag went back to the head" below.

It was wired through the consent path as well. Gating is switched off today,
but if it were ever switched on, the tag had to leave the markup with the
others and come back only after somebody agreed — so its URL and zone travelled
inertly on data attributes and `assets/js/consent.js` injected it with the
rest. A unit that only half-respects the banner is worse than no banner.

`npm run check` counted it on every page the way it counts the others, and
verified it was absent from the framed one-slot document, where a second copy
would have fired it twice per page. Removing it from the layout produced 946
failures.

Measured in Chromium at the time: the tag was requested, CLS stayed at 0, and
the page's own JavaScript still worked — the servings scaler still stepped.

## Two hostnames, one site

Search Console was reporting "Page with redirect" and "Alternate page with
proper canonical tag". Neither turned out to be a fault in what this repository
generates, and the second is worth spelling out because the markup was already
right.

Probed against the live site:

| URL | Result |
| --- | --- |
| `https://weeklydelight.com/recipes/pad-thai/` | 200 |
| `https://weeklydelight.com/recipes/pad-thai` | 301 to the slash form |
| `http://weeklydelight.com/recipes/pad-thai/` | 301 to https |
| `https://www.weeklydelight.com/recipes/pad-thai/` | **200** |

The first three are correct, and the two redirects are what "Page with
redirect" is reporting — Search Console describing a 301 it followed, not an
error to fix.

The fourth is the problem. Every page answered on both hostnames with the same
content, and the www copy carried a canonical pointing at the apex. Google
honoured it and filed all 943 as alternates, which is the second flag: a
duplicate it resolved correctly, at the cost of spending half of what it
fetched on a second copy of a page it already had.

The fix is a host rule, not a template change. The live site runs on Hostinger,
which reads `.htaccess`; `netlify.toml` and `vercel.json` in this repository
are for two hosts it is not on, and neither had a rule for this. All three
carry the www-to-apex 301 now, and so does the generated `_redirects`, so
moving between hosts cannot drop the one rule that stops every page existing
twice.

What the repository itself controls is checked by `tools/seo-audit.js`: every
canonical absolute, self-referencing and trailing-slash; every internal link
and every sitemap entry in the same form. Nothing the site publishes sends a
crawler through a redirect of its own making. All three checks were confirmed
by breaking them — a relative canonical, a sitemap entry with the slash
removed, and one internal link shortened.

## The ad scripts left the head

They were already `async`, so they were not blocking the parser. But a
third-party script in `<head>` is still fetched and run while the document a
crawler came for is being assembled, and it is the first thing that crawler
meets. Nothing either Adsterra unit does needs to happen before the content
exists, so both now load immediately before `</body>`, alongside the native
banner that was already there.

`npm run check` fails on any third-party script in the head. One is exempt:
Google's own gtag, because its measurement is time-sensitive. A second
exemption existed for a while and is gone with the network that had it — the
two sections below say why it was granted and why it was withdrawn.

The same pass found a real layout shift waiting to happen. Each page carries
two banner slots. The framed one has always reserved its full height on the
iframe; the direct embed is a bare div that the network fills, and it was
holding only the stylesheet's 140px against a unit that paints nearer three
hundred — so the article below it would move once the ad arrived. Both reserve
the same height now, from the one number in `src/data/ads.js`, and the check
fails if they disagree. Measured in Chromium at 390px: CLS 0, no shift events.

## Monetag went back to the head

*Superseded — the tag has since been removed altogether. See the next section.*

The section above moved every third-party script out of `<head>`, and Monetag
went back into it, first thing in the document. That was a reversal, so it is
worth writing down why rather than leaving the two sections to contradict each
other.

The general rule still holds: a script in the head is fetched and run while the
document a crawler came for is being assembled, and nothing the Adsterra units
do needs to happen before the content exists. What is different about this one
is that its own network documents it as a head placement and asks for it as the
first script on the page — and a tag run outside the placement its network
supports is a tag whose behaviour nobody can predict or support. The cost is
bounded and measured: it is `async`, so the parser never waits on it, and
Chromium at 390px still reports CLS 0 with no shift events.

Two things make the exception narrow rather than a hole in the rule:

- The allow-list in `tools/check.js` is read out of `src/data/ads.js`, not
  written down as a hostname. It exempts the URL that is configured and no
  other, so changing the unit moves the exemption with it and adding a second
  network inherits nothing.
- Being in the head is not enough. The check also fails if the tag is not the
  *first* script in the document, if it drifts back into the body, or if it
  appears twice — because "first script on the page" is the whole content of
  the placement, and counting the tag on the page would not notice it moving.

One thing had to be checked rather than assumed. The HTML parser only honours
`<meta charset>` if the whole element is serialized inside the first 1024
bytes; past that it sniffs, and a page that names UTF-8 too late renders its
accented ingredients as mojibake. Nothing had ever sat above the declaration
before, so the budget had never been spent. It ended at byte 277 with the tag
in place, and `npm run check` still fails the build if it ever ends past 1024.

All five failures were confirmed by causing them: another third-party script in
the head, the charset pushed past the budget, the tag moved to the body, the
tag emitted twice, and an exempt gtag placed ahead of it.

## The second ad network came out

Adsterra is the only network on the site again. Monetag is gone: the tag, the
head placement it was granted, its consent wiring, its exemption in
`tools/check.js`, and the two push service workers it had left at the site
root. Adsterra's social bar and its two native-banner slots are untouched and
still on every page.

It came out of five places, which is the useful part of the note — a tag
removed from the template alone would have left four of them behind:

| File | What went |
| --- | --- |
| `src/data/ads.js` | the `monetag` block |
| `src/templates/ads.js` | the `monetag()` emitter and its export |
| `src/templates/layout.js` | the call at the top of `<head>`, and the two `data-ad-monetag*` attributes on the consent tag |
| `src/assets/js/consent.js` | the branch that injected the tag with its zone |
| `sw.js`, `sw_2.js` | the push service workers, deleted from the repository root |

The service workers are worth a line of their own, because deleting a file is
not usually how you remove code that is already running on other people's
machines. A registered service worker outlives the page that registered it and
keeps its own update schedule; what ends it is the browser's update check
receiving a 404 for the script, which unregisters the registration. So removing
the two files from the server is not merely tidying the repository — it is the
mechanism that retires them from the browsers that already have them.

The check tightened rather than loosened. `HEAD_SCRIPTS_ALLOWED` read its
exemption out of `src/data/ads.js`, and with nothing left to read it is gone:
`npm run check` now fails **any** third-party script in `<head>` except
Google's gtag, which is a hostname test again. The three placement guards that
existed only for this tag — first script in the document, never in the body,
never twice — went with it, and so did the assertion that the framed one-slot
document does not carry it. The ad-coverage check still counts the social bar
and exactly two banner slots on every page, and the charset-budget check stays
even though nothing sits above the declaration any more, because the next thing
put there would spend that budget silently.

Verified on the built output rather than the templates: across all 1,347 HTML
pages, zero carry the tag, the zone attribute, or either service-worker host;
1,346 carry the social bar and 1,346 carry exactly two banner slots. The odd
one out of those two counts is `assets/ads/native-banner.html`, the framed
one-slot document, which is *required* not to carry the social bar and holds a
single slot by design. The only third-party script left in any head is gtag.

## The keywords that named the shelf, not the dish

The structured-data keyword list was capped at twelve and taken off the front
of the expanded list. Raising that cap looked like a one-line change and was
not, because `expand()` orders phrases by how it builds them rather than by how
much they say. Positions thirteen to twenty are the generic tier: "italian
recipes", "italian food", "italian cooking", "italian food at home". True of
the dish, and identical on all 130 Italian recipes.

Twenty slots of that on 1,209 pages is the shape a manual action looks for, so
the fix was the ordering rather than the number. `forSchema` now scores each
phrase for how much it says about *this* dish — words from the title count
most, a qualifier the dish actually has counts next, and filler and the words
of its own cuisine and category count nothing — then takes the most specific.
The hand-picked phrases are placed first and keep their order, because
specificity alone drops them: "cold skin noodles" is what liangpi is called in
English and shares no word with its title, so it scored below a generated
"dairy free liangpi".

The cap is twenty now and every one of them names the dish. `npm run keywords`
fails a recipe whose shipped keywords are less than two thirds dish-specific.
Confirmed by putting the old first-twenty behaviour back: **726 of 1,209
recipes** fail it, which is what raising the cap without reordering would have
shipped.

### A word split that erased the accents

Writing that guard found a bug in the code it was guarding. Splitting a title
on `/[^a-z0-9']+/` treats every accented letter as a separator, so "Crème
Brûlée" became `cr, me, br, l, e`, all of it dropped by the three-letter floor,
leaving a title with no words in it — and the empty-set fallback quietly handed
back the unranked order. The ranking was silently off for every French,
Vietnamese, Turkish, Czech and Nordic title on the site.

Folding first fixes it, using the same `fold()` the search index already uses so
both agree on what a word is. Two smaller holes came out with it: Turkish
dotless ı is a letter in its own right and NFKD leaves it alone, so "Kısır"
folded to `k, s, r`; and a three-letter floor drops every word of "La Zi Ji".
`fold()` now maps ı, İ, đ, Đ, ð, þ and œ alongside the ø, æ, ß and ł it already
had, and title words are kept from two letters up.

## Every page carries its own keywords

The `<meta name="keywords">` tag is capped at thirty rather than twenty-five,
which is worth stating plainly: Google has ignored that tag since 2009, so the
extra five buy no ranking anywhere. The reach comes from the schema list and
from the site's own search index, which has always taken the full ninety.

What did matter was the floor. Five pages carried fewer than fifteen keywords —
privacy had five — and those are now between twenty-two and twenty-four
apiece, written for what each page is actually about. No page carries fewer
than fifteen; the average is 29.6.

Two of them were also still selling the old name. The about and contact pages
had `about culinaryvault` and `contact culinaryvault` in their keyword lists,
which the site stopped being some time ago. Those were the last two occurrences
of the old brand anywhere in the output.

## What a browser found that the audits could not

The checks in this repository read the HTML the build writes. They cannot see a
script that throws once it runs, so every page type was opened in Chromium and
watched: seventeen routes covering the home page, a listing, four recipes, the
cuisine, category and ingredient hubs, search, about, contact, privacy,
favourites and the 404. No console errors, no uncaught exceptions, and no
failed request for a file the site serves itself.

Then the four things a reader actually presses. The servings scaler steps
500 g to 625 g to 750 g across four, five and six servings and back again;
search returns results as you type; the heart writes to `localStorage`; the
theme toggle moves the document from light to dark. The scaler failed the first
run against a selector I had guessed rather than read, which is worth writing
down: the tool was wrong, not the site.

## A hundred more, and what the shortlist ran into

Volume nineteen adds a hundred recipes and takes the site to 1,309. Choosing
them was mostly a process of elimination, and the elimination is the
interesting part: almost every European and American classic on the shortlist
was already published. One batch of fifty-eight candidates came back with
forty-eight duplicates — beef wellington, coq au vin, quiche lorraine, borscht,
goulash, pierogi, schnitzel, ceviche, feijoada, key lime pie, pavlova. That is
what a catalogue of twelve hundred does to a list of famous dishes.

What survived shows where the site was actually thin against demand rather than
against reputation:

- **India, thirty-four.** Forty-three entries for the largest recipe-searching
  population on earth, and none of the paneer gravies people actually cook,
  none of the breakfast canon — poha, upma, medu vada, uttapam — and none of
  Indo-Chinese, which is a cuisine of its own in Indian cities.
- **Korea, eight.** Sixteen entries and no jjajangmyeon, kimchi fried rice or
  budae jjigae, three of the most-searched Korean dishes there are.
- **The unglamorous American staples, fifteen.** Potato salad, coleslaw, egg
  salad, scrambled eggs, a grilled cheese sandwich. These carry the highest
  search volume of anything in the volume and were missing precisely because
  nobody writes them first.

Two candidates were dropped after they passed the duplicate check: a shawarma
plate and a falafel wrap, both near-duplicates of dishes already here. A second
page about the same food competes with the first rather than adding anything.

### Writing the catalogue by hand was the mistake

The duplicate check ran against every existing slug and title, folded for
accents, and it worked. Then the catalogue was typed out from the results
rather than generated from them, and nine rows went in that the check had
already flagged — chicken pot pie, buffalo wings, cornbread, pulled pork and
five others. The verification was sound and the transcription was not.

It surfaced immediately, because the same check run against the finished file
names them, and they were swapped for nine verified replacements. The lesson is
narrow and worth keeping: a list that has been checked should be used, not
retyped.

### What the audits caught

The guards did their job on new data, which is the only real test of them.
Twenty-three timing failures, four contradicted diet tags and three unsupported
keywords, every one a genuine error in what had just been written:

- `egg-salad` tagged Gluten-Free with bread in the ingredients; `albondigas`
  tagged Dairy-Free with milk in it; `ras-malai` and `dhokla` tagged
  Gluten-Free over semolina. Three lost the tag. Dhokla lost the semolina
  instead, because dhokla is gram flour by tradition and the tag was the true
  half.
- Fourteen recipes declared a `rest` for time that is active cooking — a
  covered simmer, an oven braise — which the audit refuses because a reader
  planning an evening needs to know which hours they can leave the kitchen.
- Eight declared less waiting than their own method described, including
  `uttapam` at ten hours of fermentation against six declared.
- `gyeranjjim` published "korean steamed eggs" as a keyword while its method
  never said the word steam. The method says it now; the claim came first and
  that is the wrong way round.

Every one of the hundred pages carries thirty meta keywords, twenty
dish-specific schema keywords, a title inside sixty characters, a description
between 140 and 160, a self-referencing canonical and a sitemap entry.

## Volume twenty, and a guard that under-counted

A hundred more, taking the site to 1,409. Of 226 famous dishes run against the
catalogue, 123 were already published — a shade over half. At this size the
catalogue returns most of any list of famous dishes, so the useful question is
no longer "what is famous" but "which cuisines does the catalogue treat as
small".

What survived went to the countries sitting on three to eight entries apiece —
Pakistan, Sri Lanka, the Philippines, Malaysia, Peru, Ethiopia, Jamaica,
Georgia, the Nordics — plus the two Indian gaps seventy-six Indian entries had
skipped entirely: the sweets and street chaat, and the drinks. There was no
thandai, no aam panna, no jaljeera and no filter coffee on a site with more
Indian recipes than French ones.

### The catalogue was generated this time

Volume nineteen's duplicate check was sound and its transcription was not: nine
rows went in that the check had already flagged, because the file was typed out
from the results instead of built from them. This volume writes `catalog-20.js`
from the verified-available list directly. No duplicate rows, and nothing to
find afterwards.

### What the audits caught

Forty-two failures in a hundred fresh recipes, which is the point of having
them. Eight of those never reached an audit — the build itself refused to
finish:

- `stamppot` and `raggmunk` tagged Vegetarian while carrying beef gravy and
  streaky bacon. Both lost the tag: raggmunk is served with fried pork and the
  recipe says so in its own tips, so the tag was the false half.
- Six dishes tagged Dairy-Free with butter in them, and they split two ways.
  Where the butter was mine rather than the dish's, the ingredient changed:
  inasal and sisig are basted and sizzled with margarine in the Philippines, a
  Jamaican patty's pastry is shortening, and diner hash is fried in dripping.
  Where it was only a flourish — a knob dotted over coddle, butter swirled into
  a chilli sauce — it came out.

Then twenty-seven timing failures, six diet contradictions and one keyword:

- Six recipes declared a `rest` for time that is active cooking — kare-kare's
  oxtail, a tafelspitz, two braises. Volume nineteen made the same error
  fourteen times, which stops it being a slip: writing a two-and-a-half-hour
  simmer into a field meant for unattended waiting is something I do reliably,
  and only the audit catches it.
- Seven more declared a pause of twenty or thirty minutes. The site does not
  advertise those as rest, and the threshold is deliberate: an hour is where a
  wait starts changing what a reader can do with their evening.
- Three Gluten-Free claims rested on soy sauce, which is a wheat product. The
  lines name tamari now, which is the escape the audit is built to accept: a
  claim the cook can actually take.
- `rasgulla` was tagged Gluten-Free over the semolina its chhena is kneaded
  with, exactly as `ras-malai` was one volume ago. Same dish family, same
  ingredient, same fix.
- `jaljeera` declared a cook time of zero while its method toasts cumin seeds
  for ninety seconds. Two minutes is not a rounding error when the field is a
  promise that nothing goes on the hob.
- `khai-jiao` published "thai fried omelette" while its method never said fry.
  It deep-fries, at 190C, which is the entire difference between khai jiao and
  a folded omelette — so the keyword was both unsupported and less accurate
  than the truth.

### A wait the audit could not see

`sernik` insisted it was thirty minutes short however the number was set, and
the reason was in the audit rather than the record. One step read *turn the
oven off, prop the door ajar and leave the cake inside for 1 hour, then chill
4 hours before slicing* — two consecutive waits in one sentence. The audit
sums waits across sentences but takes the largest within one, so the hour in
the cooling oven was invisible and only the four hours counted.

Splitting it into two sentences made both count, and the honest total came to
330 minutes against the 300 the record had claimed. Worth naming because the
guard reported the right kind of failure for the wrong reason: it was not
detecting a wait the record understated, it was failing to detect a wait at
all, and the record happened to be wrong too.

`syrniki` was the mirror image. A step beginning *if the curd cheese is wet,
hang it in muslin overnight* turned a branch most cooks never take into an
eight-hour claim on a twenty-minute breakfast. It belongs with the tips, and
the audit already exempts a line that says "if you have" — the conditional was
real, it was just written as an instruction.

### One thing no guard found

`stamppot` also claimed Gluten-Free, and nothing in the repository objected.
The diet audit reads a list of forbidden words and neither "smoked sausage"
nor "beef gravy" is on it — but Dutch rookworst is bound with rusk and a jus
is thickened with flour, so the claim was false. It came out by reading the
ingredients, not by running anything. A guard that reads a word list will
always be a floor rather than a ceiling.

Every one of the hundred pages carries thirty meta keywords, twenty
dish-specific schema keywords, a title inside sixty characters, a description
between 140 and 160, a self-referencing canonical and a sitemap entry.

## Volume twenty-one, and a check that runs on every build

A hundred more, taking the site to 1,509, and the first volume written after
being told, plainly, not to publish anything twice.

The request was to publish "all the new 8000 recipes" from an uploaded index,
without repeating anything already on the site. The index is headed *8000 Top
Searched Global Recipes*. It names 156 titles, 140 of them distinct. The rest
of its eight thousand is a generator: a script that stamps out 1,600 rows for
each of five countries, titled "Top Searched US Comfort Mains #37" and so on,
every one with the same five placeholder ingredients ("Key regional protein or
base ingredient"), the same four placeholder steps and a random calorie count.
That is not a recipe, and it is not something this site publishes, so the
volume is the dishes the index actually names plus the gaps it pointed at, not
eight thousand pages.

### Deciding what is new, by machine first

`tools/dedupe-candidates.js` grades a list of dishes against every recipe on the
site: its slug, its title with accents and filler words ("classic", "creamy",
"easy") taken out, and the search phrases each existing recipe already targets.
A candidate is a **duplicate** if any of those match exactly, **review** if it
is one word from an existing dish, and **new** otherwise. `--related` lists the
closest existing recipes under each new one, weighted by how rare the shared
words are, which is how "Potato Bake" is shown sitting next to the gratin
dauphinois.

Method words are deliberately not filler. An air fryer chicken breast is not a
second baked chicken breast, and a page for one does not compete with a page
for the other.

Run over the index: 52 of the 140 distinct titles were already on the site,
under the same or a near-identical name; 12 repeated another title in the list;
9 were one word from a published dish; 67 passed. The word rules cannot see a
dish under another name, so those 67 were read by hand, and 33 came out: 28 were
a dish already published (potato bake is the gratin dauphinois, scones with
clotted cream are the English scones, spinach and feta triangles are the
spanakopita, chicken and chorizo jambalaya is the jambalaya) or a flavour or
appliance variant of one, and 5 were a second listing of a dish already
counted. That leaves 34 from the index.

The other 66 come from running the same test over 803 more dishes the index did
not name. 246 of those were published already, which is the number that says
how far a list of famous dishes overlaps a catalogue this size.

### Every recipe is checked again when the build runs

A checked list is only as good as the person who keeps to it, so
`tools/duplicates-audit.js` runs in `npm run check` and refuses a catalogue
in which:

- two recipes share a folded title, the same core words, or the same first
  search phrase;
- two recipes share half or more of their method, word for word;
- any recipe contains placeholder text of the kind a bulk generator writes.

Fifteen pairs already on the site trip the first rule, and they are named in
the audit as a fixed list rather than waved through: `coleslaw` and
`creamy-coleslaw`, `naan` and `garlic-naan`, `rogan-josh` and `lamb-rogan-josh`,
`schnitzel` and `pork-schnitzel`, `kibbeh` and `kibbeh-mekliyeh`, and ten more.
Each is a candidate for merging into one page with a redirect, and none was
touched here. The list may not grow: a new pair that trips a rule is a
duplicate and gets fixed.

Proved on the way in. A temporary volume holding a second banana bread, a
recipe with copied method steps and one with a placeholder shell failed the
audit on all three counts, and was removed.

### What went in

One hundred recipes, all of them ordinary catalogue recipes on ordinary
`/recipes/<slug>/` pages, through the same templates, taxonomy hubs, search
index and sitemap as the other 1,409. The two new cuisine pages, Canadian and
New Zealand, are the site's normal cuisine pages and not a separate section.

- **The index's own dishes (34).** Marry me chicken, white chicken chili,
  lasagna soup, the air fryer chicken breast and pork chops, breakfast
  casserole, garlic knots, poutine, butter tarts, Nanaimo bars, tourtière,
  damper, Southland cheese rolls, afghan biscuits, hokey pokey ice cream,
  whitebait fritters, kumara soup and the rest.
- **The gaps (66).** The American weeknight dinner and the air fryer, which
  the catalogue had one recipe of, and the Canadian, Australian and New Zealand
  kitchens, which had five recipes between them: no poutine, no cheese roll,
  no pork chop, no boiled egg.

Spread: American 71, New Zealand 10, Canadian 6, Australian 4, Chinese 4, and
one each of British, French, International, Italian and Mexican.

The catalogue rows and the detail records are generated from one authored
source, so the two cannot disagree, and calories are computed from the macros
the way the nutrition audit reads them.

### What the audits caught

Fewer than in volume twenty, mostly because the claims each audit rejects were
written down first and checked while writing. Five things still got through:

- `lasagna-soup` published "one pot lasagna soup" while its method never said
  one pot. The generator's own keyword, not mine, and the claim came first.
- `air-fryer-hard-boiled-eggs` failed thirty-eight keywords at once over a
  hyphen: the title said "Hard-Boiled" and the audit reads one word as a claim
  that the eggs are boiled. Without the hyphen the title is the dish's name,
  which is what it was meant to be.
- `nanaimo-bars` advertised "no bake" while the method lined the tin with
  "baking paper". The audit reads the word. The tin is lined with parchment.
- `hokey-pokey-ice-cream` declared six and a half hours of waiting and the
  audit found six. A cooling step ended "keep them dry", and the audit reads
  the word *keep* as a storage note and drops the sentence. The wait is a
  separate sentence now.
- Three descriptions advertised a time that was the cooking and not the
  recipe: "baked in about 15 minutes" over a fillet that also takes ten minutes
  to prepare.

The social card had to be redrawn (`npm run icons`) because it prints the
recipe count, and it read 1,409.

### What is still missing

Photographs. None of the hundred has one yet, so they carry the same gradient
card as the other seventy-five, and they will go through the image pipeline
under the licensing rules below as every volume has. The recipes are
published; the pictures are not.

## Volume twenty-two, the British Isles

A hundred more, taking the site to 1,609, from the same process as volume
twenty-one and with the check that came out of it already in the build.

331 British, Irish, Scottish and Welsh dishes were tried against the catalogue
before anything was written: the Sunday roast and the pub menu, the curry house,
the tea table, the biscuit tin, and the drinks. 78 were published already,
nearly a quarter of the list — Beef Wellington, treacle tart, spotted dick,
mulligatawny, Cornish pasty, piccalilli. Of the 253 that were not, the hundred
here are the most searched for and the clearest about what they are.

The word rules leave a number of near-repeats that only reading catches, and
those were left out: potato farls are the tattie scones already here, wassail
is mulled cider, a Bakewell slice is the Bakewell tart, Empire biscuits are
Jammie Dodgers with icing, Scottish tiffin is the chocolate biscuit cake in this
volume, and a roast chicken dinner is a roast chicken. The bacon and cabbage
went too, being gammon with parsley sauce, which the site has.

What is in it: the curry-house menu that the catalogue skipped after its tikka
masala and korma (jalfrezi, madras, balti, dhansak, bhuna, pathia, saag aloo,
Bombay potatoes, onion bhajis, peshwari naan, chip shop curry sauce, pilau rice),
the roasts and pub plates (lamb shoulder, roast duck, turkey crown, gammon egg
and chips, scampi, pie and mash), the puddings and the custard they go with,
the biscuit tin, the sweets, Scotland's bakery (Scotch pie, Forfar bridie, Lorne
sausage, black bun, clootie dumpling, Selkirk bannock), the Ulster fry, and the
sauces, preserves and drinks that sit beside the roast. The curry-house dishes
carry the Indian cuisine label, to match the chicken tikka masala and korma
already published under it.

Spread: British 75, Indian 11, Scottish 10, Irish 3, American 1.

### What the audits caught

Fewer than usual again, and one of them a repeat:

- `lemon-barley-water` declared two hours of chilling and the audit found none.
  The sentence read *chill for at least 2 hours and serve over ice*, and the
  audit reads the word *serve* as a serving note and drops the whole sentence.
  Same mechanism as `keep` in the hokey pokey last volume; the wait and the
  serving are separate sentences now.
- Two drinks came in under the 400-word floor, a shandy at 353 and a Pimm's cup
  at 384. Drinks with three ingredients have less to say than a pie, and they
  were lengthened with what is true and useful about them — why the lager goes
  in first, what the ratio does — and not with filler. An unverifiable figure
  about Wimbledon that I wrote into the Pimm's page came out on the reread.
- One meta description ran to 165 characters against the 158 the site allows.

And one thing no guard found: `knickerbocker-glory` was tagged Vegetarian over
a packet of raspberry jelly, which is set with gelatin. The diet audit forbids
the word *gelatin* and the ingredient line says *jelly*, so it passed. It lost
the tag on the reread, as `stamppot` did in volume twenty. A guard that reads a
list of words is a floor, not a ceiling.

### What is still missing

Photographs, again. The hundred are published and carry the gradient card until
the image pipeline has been through them; there are now 275 recipes on it.

## Volume twenty-three, Canada, Australia, New Zealand and the American regions

A hundred more, taking the site to 1,709, from the same process as the last two
volumes and with the duplicate check already in the build.

437 dishes were tried against the 1,609 already published: the delicatessen and
sugar shack of Canada, the Australian and New Zealand biscuit tin and pie shop,
and the dishes that belong to a single American city or state. 78 were published
already — Boston cream pie, poutine, lamingtons, key lime pie, the Reuben, the
tuna melt, chicken fried steak, shrimp and grits, eggs Benedict. The familiar
American list was the thinnest: of 42 diner and supper favourites tried in one
go, 19 were here already. Of the 359 titles that were not, the hundred in this
volume are the most searched for and the clearest about what they are.

The word rules leave near-repeats that only reading catches, and these were
left out: vanilla slice is the custard slice already here, caramel slice is
millionaire's shortbread, pikelets are drop scones, kūmara chips are sweet
potato fries, an apple slice is an apple crumble bar, and sugar cream pie and
buttermilk pie are cousins of the sugar pie and chess pie that are in. Rainbow
cake is not Australian, and a lamb shank in New Zealand is still a lamb shank.
A draft that had the Kiwi onion dip as the French onion dip already published
was wrong on the facts, because the site has no French onion dip at all; both
are still to do.

What is in it: Canada's delicatessen (Montreal smoked meat, peameal bacon), the
sugar shack (pouding chômeur, tarte au sucre, maple taffy), Newfoundland's
toutons, the Halifax donair, the Prairie table (flapper pie, Ukrainian cabbage
rolls, bannock, wild rice soup) and the Caesar, the Hawaiian pizza and Calgary
ginger beef, which are Canadian inventions that other countries assume are their
own. Australia's fairy bread, Vegemite toast and cheesymite scrolls, the sausage
sizzle, the steak sandwich and the burger with the lot, tuna mornay, zucchini
slice, rissoles, dim sims, potato scallops, the pie floater, and the sweet
table: Tim Tam cheesecake, jam drops, golden syrup dumplings, hedgehog and lemon
slice, neenish tarts, lemon delicious and the self-saucing chocolate pudding,
honey joys, chocolate crackles, the ripple cake and melting moments. New
Zealand's lolly cake, Louise cake, ginger crunch, boil-up, mussel fritters and
feijoa cake. And the American regions: Cincinnati chili, Chicago deep dish and
the Chicago hot dog, Detroit pizza, the Juicy Lucy, the Hot Brown, Frito pie,
the muffuletta, red beans and rice, the shrimp boil, Hoppin' John, spoonbread,
pimento cheese, toasted ravioli, Oysters Rockefeller, beignets, Indian pudding,
shoofly pie, sweet potato pie, chess pie, hummingbird cake, Bananas Foster,
gooey butter cake, pralines, the banana split, the root beer float and the
mint julep. Peach Melba carries the French label, since a French chef made it,
and only the name is Australian.

Spread: American 35, Australian 34, Canadian 20, New Zealand 10, French 1.

### What the audits caught

Very little, and all of it minor:

- Ten meta descriptions ran over the 158 characters the site allows, by one to
  four characters each.
- `bananas-foster` advertised "in 8 minutes" and the recipe needs 18: ten to
  prepare and eight to cook. It is the same mistake the description check has
  been catching since volume twenty, a time taken from the cooking alone.
- The social card still said 1,609 recipes until the icons were regenerated.

Timing, nutrition, diet, keyword, substitution and duplicate audits passed on
all seven source files the first time they were run.

### Judgement calls

Some pairs are neighbours and were kept because they differ in method and not
just in flavour. Louise cake and coconut slice both have jam and coconut, but
one is a whisked coconut meringue over a cake base and the other a baked
coconut topping over shortbread with pink icing. Lemon delicious, the
self-saucing chocolate pudding and pouding chômeur all make their own sauce, by
three different mechanisms: whisked whites floating the sponge, boiling water
poured over sugar and cocoa, and hot maple sauce under a stiff batter. The
hedgehog slice is bound with a cooked egg and cocoa mixture and the lemon slice
with condensed milk. If the site is thought to have too many of any of these,
they are the ones to merge.

### What has not been done

No recipe here has been cooked. The audits check a page against itself — its
times against its method, its calories against its macros, its tags against its
ingredients, its keywords against its record — and against the rest of the
catalogue, and none of that is a stove. The two to test first are the Montreal
smoked meat and the peameal bacon, the only recipes on the site that use curing
salt. Both brines work out at about 150 mg of nitrite per litre, from the 6.25%
strength printed on Prague powder no. 1, which is in the range that curing
guides give, but that is arithmetic and not an experiment, and it should be
checked against a curing source you trust before anyone cooks from it. Nutrition
figures are estimates in every volume, as the section on times and nutrition
says.

Photographs, again: the hundred carry the gradient card until the image
pipeline has been through them, and 375 recipes are now on it.

## Volume twenty-four, the parts of the world the catalogue reached least

A hundred more, taking the site to 1,809, from the same process as volumes
twenty-one to twenty-three and with the duplicate check already in the build.
It is the last volume of this run. The rest of the 8,000-title upload is for
the owner to take later, a volume at a time, with the same tool.

The English-speaking kitchens were largely used up by volume twenty-three, so
this one went the other way. 613 dishes were listed by region and tried against
the 1,709 already published, and only 10 were there already: leche de tigre is
in the ceviche, niter kibbeh is in the doro wat, payasam is the kheer, nước
chấm is in the bún chả, and vol-au-vent is the bouchée à la reine. In volume
twenty-three it was nearly a fifth. Eleven more were one word from a published
recipe and were read by hand; arepa de choclo, a sweet-corn griddle cake, is
not the arepas already here and is in. Of the 592 that were new, the hundred in
this volume are the ones searched for most and clearest about what they are.

One dish was written up and then dropped. Chai tow kway, Singapore's fried
radish cake, is the steamed, chilled and fried cake the site already has as lo
bak go, made the same way and finished with egg and sweet soy sauce. The word
rules did not see it, and reading the published page did. Bak kut teh took its
place.

What is in it. South America: Peru's pollo a la brasa, tallarines verdes, tacu
tacu and chicha morada, Brazil's picanha, farofa, bolo de cenoura and quindim,
Argentina's choripán and medialunas, Colombia's arepa de choclo and sancocho,
and Chile's empanadas de pino. The Caribbean and Mexico: Cuban picadillo and
moros y cristianos, Puerto Rico's pernil, mofongo, arroz con gandules, tostones
and coquito, Jamaican oxtail stew and escovitch fish, chiles en nogada and pan
de muerto. Africa: Nigeria's akara, efo riro, chin chin and meat pie, Ghana's
red red and shito, Ethiopian tibs, South Africa's sosaties and koeksisters,
Morocco's bastilla and baghrir, Senegal's thieboudienne, poulet yassa and mafé,
and Kenya's githeri. Persia, the Caucasus and Central Asia: zereshk polo,
khoresh gheimeh, Persian love cake and faloodeh, Georgian satsivi and
badrijani, Turkish simit and çılbır, and Afghanistan's kabuli pulao, bolani and
borani banjan. South Asia: the kathi roll, dum aloo, sarson da saag, dal baati
churma, kadhi pakora, lemon rice and mishti doi, Pakistan's halwa puri,
Bangladesh's shorshe ilish, chotpoti and bhapa pitha, Nepal's dal bhat, sel
roti and thukpa, and Sri Lanka's watalappan. Southeast Asia: mie goreng, bakso,
opor ayam, teh tarik, assam laksa, bak kut teh, tinola, kaldereta, bistek
Tagalog, gai yang, bò lúc lắc, Myanmar's mohinga, laphet thoke and ohn no khao
swè, and Cambodia's fish amok, kuy teav and nom banh chok. East Asia: jeyuk
bokkeum, yukgaejang, oden, chicken nanban and the Taiwanese oyster omelette.
And Europe: rosół, kapuśniak, rakott krumpli, bacalhau com natas, ajvar,
štrukli, prebranac, kjötsúpa, plokkfiskur, kleinur, cepelinai, šaltibarščiai
and kugelis.

Nine cuisines are new to the site and have their own pages, none with fewer
than three recipes: Afghan, Balkan, Bangladeshi, Burmese, Cambodian, Icelandic,
Lithuanian, Puerto Rican and Senegalese. Ajvar, štrukli and prebranac sit under
one Balkan label and not three cuisine pages of a single dish each.

Spread: Indian 7, Puerto Rican 5, Brazilian, Nigerian, Persian and Peruvian 4
each, eleven cuisines with three, fourteen with two and eleven with one.

### What the audits caught

Almost nothing. Six meta descriptions ran over the 158 characters the site
allows: arroz con gandules, bastilla, kabuli pulao, fish amok, nom banh chok
and chicken nanban. The social card still said 1,709 recipes until the icons
were regenerated. The timing, nutrition, diet, keyword, substitution and
duplicate audits passed on all ten source files without a single failure, which
is not the same as the recipes being right.

### What reading caught that the audits could not

The audits check a page against itself. These were wrong in ways that only show
when the ingredients, the method and the numbers are read side by side, and 21
of the hundred were corrected before the build:

- Quantities that did not fit the method. Moros y cristianos had roughly 700 ml
  of liquid for 300 g of rice, and now has roughly 570. The Nigerian meat pie
  made more filling than eight pies could hold, so the beef, potato, carrot and
  water were cut and each pie takes four tablespoons in a 16 cm round. The
  empanadas de pino made more pino than three tablespoons a piece could use.
  The koeksister strips were 2 cm wide, which gives about a dozen plaits from
  the dough while the recipe claimed twenty servings, and they are now 1 cm,
  for about two dozen.

- Cooking times shorter than the method. Efo riro, mafé and kabuli pulao each
  described 10 to 15 minutes more cooking than they declared.

- Ingredients the method never used. Chotpoti listed "boiled" potatoes and no
  step boiled them, and the assam laksa listed toasted shrimp paste with no
  step for toasting it.

- Claims stated as fact that are legend or wrong. The origin of the name tacu
  tacu, the convent origin of quindim, the desert warriors who are said to have
  invented dal baati and the "nearly twice as much onion" in prebranac are now
  hedged or corrected. Shito said it was made without black pepper, and the
  recipe has a teaspoon of it, so the description now says only that the name
  is the Ga word for pepper. It also said a jar keeps for months in the
  cupboard, and a low-acid sauce of onion, tomato and dried shrimp belongs in
  the fridge under its oil, for four weeks at most. Its tip that oil is "the
  preservative" is gone.

- Small mistakes. Baghrir told the cook to lay the pancakes "cooked side up",
  and the holes are on the side the pan did not touch. Githeri promised "less
  than an hour" and its times add up to 65 minutes.

- Diet and safety notes. The asafoetida in kadhi pakora is often cut with wheat
  flour, so the recipe now asks for a gluten-free one. Shorshe ilish uses raw
  mustard oil, which some countries sell only for external use, and the
  ingredient line now says what to use where it is not sold as food. Tallarines
  verdes offers a vegetarian hard cheese in place of the Parmesan, which is
  made with animal rennet.

### Judgement calls

Ohn no khao swè shares a word with the khao soi already published, and the two
are related, but one is a mild Burmese soup thickened with chickpea flour and
the other a Thai curry soup built on a curry paste. Mie goreng is fried noodles
and not a second nasi goreng, and the assam laksa is a sour fish soup, nothing
like the coconut curry laksa. Persian love cake is a modern dish, not an old
Iranian one, and its page says so. The bak kut teh is the clear, peppery
Singapore version and not the darker Malaysian one.

Some of the ingredients cannot be had at a supermarket, and the pages say so
and, where there is one, give what to use: purple corn for chicha morada,
candlenuts, calamansi, hilsa and salt cod among them. The one with no
substitute is laphet, the fermented tea leaves in the Burmese tea leaf salad,
and the page says that too.

### What has not been done

No recipe here has been cooked, as in every volume, and the audits are not a
stove. Where a number is arithmetic and not experience, the recipe is the one
to try first: the bakso meatball paste, whose ice and starch are measured by
weight; the cepelinai, whose dough has to hold together in the water; the
koeksister plaits, whose count comes from the dough weight; and the štrukli,
whose dough is stretched by hand. Nutrition figures are estimates, as the
section on times and nutrition says.

Photographs, again: the hundred carry the gradient card until the image
pipeline has been through them, and 475 recipes are now on it.

## Volume twenty-five, a list of 394 names

Seventy-four more, taking the site to 1,883. The owner sent a list of 394 dish
names, mostly the most searched dishes in the United States, Britain, Canada,
Australia and New Zealand, and asked for all of them to be added, skipping the
ones that match a recipe already published. The list was tried against the
1,809 already on the site with the same tool as volumes twenty-one to twenty-four.

Where the 394 went. 208 were already recipes on the site, under the same name
or another: banana bread, meatloaf, chili, lasagna, beef stew, chicken parmesan,
butter chicken, poutine, Nanaimo bars, pavlova, lamingtons, Anzac biscuits and
the rest of the obvious ones. Seven names appear twice in the list. The other
179 were read by hand, because the word rules cannot tell a new dish from a
published one with a word added, and 74 were new.

The other 105 were the same dish or a variant of one. Roasted turkey is the
roast turkey, fried fish tacos are the fish tacos, Southern baked macaroni and
cheese is the mac and cheese, French Canadian pea soup is the split pea soup,
peameal bacon strata is the breakfast casserole, sticky date pudding is the
sticky toffee pudding, damper bread is the damper, louise cake, ginger crunch
and boil up are on the site under their own names, and Yo-Yo biscuits are the
melting moments. Others are a protein or an appliance away from a page that
exists: slow-cooker beef stew, slow-roasted leg of lamb, garlic butter prawn
skewers next to the new grilled shrimp skewers, and a run of salmon, lamb and
pork dishes. Teriyaki sauce, beef gravy, Yorkshire puddings and donair sauce are
already the target of pages that carry them.

The word rules missed four of these and reading caught them: beef and broccoli
stir-fry is the beef and broccoli, damper bread (bush bread) is the damper,
louise cake with its raspberry jam and coconut meringue is the louise cake, and
boil up with its pork, potatoes and doughboys is the boil-up. A dish with an
extra word in its name is not always a new dish.

What is in it. Sauces and American cooking: Alfredo sauce, marinara, buffalo
wing sauce, chimichurri and turkey gravy; ribeye, pork chops, bacon-wrapped
pork tenderloin, chicken tenders, chicken casserole, seared ahi tuna and grilled
shrimp skewers; chicken tetrazzini, manicotti, stuffed peppers, queso dip and
chicken enchilada soup; bagel and lox, sourdough and ricotta pancakes and a hash
brown bake; apple fritters, Brussels sprouts with bacon, cornbread dressing and
Parker House rolls. Canada: saskatoon berry pie, bullet soup, three sisters
stew, Maritime blueberry grunt, garlic fingers, Newfoundland snowballs, cod
cakes, pâté chinois, salmon chowder, puffed wheat squares, schmoo torte, maple
walnut cake, maple fudge, maple glazed donuts and butter tart bars. Britain and
Australia: chicken and chorizo pasta, cheese and onion quiche, one-pot lasagna,
three honey soy chicken dishes, san choy bow, Moreton Bay bugs, the Tim Tam
cake, honeycomb, a blueberry loaf, raspberry and white chocolate muffins and a
banana cake. New Zealand: an oven hāngī, pāua fritters, smoked eel pâté, garlic
butter crayfish, lamb shanks in red wine, crispy pork belly on kūmara mash,
venison stew and creamed mushrooms on toast; the potato top pie, the mince and
cheese pie and the lamb and rosemary pie; Marmite and cheese pinwheels and
savoury corn muffins; and rēwena parāoa, tan square, peppermint slice, squiggle
slice, condensed milk biscuits, the Boston bun, date scones and peanut brownies.

Spread: American 22, New Zealand 20, Canadian 15, Australian 9, Italian 3,
British 2, and one each Argentinian, Chinese and Mexican. No cuisine is new to
the site, so no new hub pages.

### What the audits caught

Little. Three meta descriptions ran over the 158 characters the site allows: the
honey soy chicken stir-fry, the chicken enchilada soup and the squiggle slice.
The chimichurri, which has a cook time of zero, mentioned "roast chicken" in one
step and a roasted pepper in a tip, and the timing audit would not let a
recipe that does no cooking use the word. The social card still said 1,809
recipes until the icons were regenerated. The timing, nutrition, diet,
keyword, substitution and duplicate audits then passed on all seven source
files, which is not the same as the recipes being right.

### What reading caught that the audits could not

The audits check a page against itself. These were wrong in ways that only show
when the ingredients, the method and the numbers are read side by side, and
36 of the 74 were corrected before the build:

- Quantities that did not fit the method. The shrimp skewers said to soak 8
  skewers and then threaded shrimp onto 4. The apple fritters gave a litre of
  oil for a frying depth of 6 cm, which needs a pot only 15 cm across, and the
  maple donuts 1.5 litres for the same depth in a pot 18 cm across, too small
  for either; they now say 1.5 litres at 5 cm in a 20 cm pot and 2 litres at
  5 cm in a wide one. A 2 cm meatball weighs about 4 g, so the bullet soup's
  500 g of mince made well over the 40 it promised, and the balls are now 2.5 cm
  for about 60. The Parker House rolls, cut with a 7 cm cutter, made nearly two
  dozen and not the 18 they claimed, and use an 8 cm cutter. The mince and
  cheese pies were filled with 100 g each and left a quarter of the filling
  over.

- Times shorter than the method. The stuffed peppers said 55 minutes and their
  steps add to 65. The chicken tenders fried for 3 to 4 minutes a side, which
  would dry 2 cm strips, and now fry for 2 to 3. The maple donuts said they
  fried in two minutes when the method takes three. The honey soy baked chicken
  said it cooked in an hour and takes 45 minutes.

- Nutrition figures that did not survive adding the ingredient list up again.
  Nineteen were changed, most by 10 to 30 per cent. The sourdough pancakes had
  42 g of carbohydrate a serving and the ingredients give 55. The maple donuts
  had 42 g, and with the glaze it is 54. The stuffed peppers had 20 g of fat and
  the mince, cheese and sauce give 28. The buffalo sauce gave 330 mg of sodium
  from a hot sauce that carries about 190 mg a teaspoon, and now gives 600. The
  maple fudge had 10 g of carbohydrate a piece, and 500 ml of maple syrup, which
  is two thirds sugar, gives 12.

- Claims stated as fact that were superlative, borrowed or not supported. The
  saskatoon was said to belong to the apple family and to set its own filling
  with pectin, and now it is only related to apples and pears. The Tim Tam was
  Australia's favourite biscuit and is now one of its best known. Raspberry and
  white chocolate was a pairing "the Australian cafe has made its own", honey
  soy chicken was "one of the most cooked chicken dishes in Australian homes",
  the puffed wheat squares turned up at "every potluck" and the corn muffins in
  "every New Zealand café". A tip that shell-on shrimp are less likely to be
  soaked in preservative had no source and is gone, and so is the claim that
  condensed milk biscuits are sold as Kiwi crunch. Maple syrup was said to foam
  up "to three times its volume", and the fudge now asks for a 3 litre pan. The
  maple walnut cake described the grades of maple syrup wrongly.

- Small mistakes. The chicken and chorizo pasta was described as one-pan and
  boils its pasta in a second. San choy bow does not mean "vegetable wrap"; it
  means lettuce wrap. The Alfredo sauce makes 400 ml and not 350, and the gravy
  800 ml and not 900.

### Judgement calls

The Marmite and cheese pinwheels sit next to the Cheesymite scrolls already
published. They share a flavour and nothing else: one is a yeast dough that
proves for an hour, the other is puff pastry that goes from packet to oven in
20 minutes. They are kept, and are the first to remove if the site should have
only one. The peanut brownies are a flavour variant of the two brownie recipes
on the site, and are in because the peanut butter swirl and the peanuts folded
through are a different batter and not a topping; they are labelled American,
because that is where brownies are from, and not New Zealand, where the list
had them.

The hāngī is an oven method and says so. A real hāngī is cooked in the ground
on heated stones, and its page says the flavour of the earth oven cannot be
copied in a kitchen. The rēwena parāoa uses a potato starter and no commercial
yeast, does not salt the potato water and takes three days, and its page says
that the bug depends on a warm kitchen. The Boston bun has two kinds: a
cake-like bun raised with baking powder, and a yeast bun, and this is the
yeast one with mashed potato, which is what the list's "coconut brioche"
described. The squiggle slice is named for a New Zealand biscuit, and the page
says which one.

### What has not been done

No recipe here has been cooked, as in every volume, and the audits are not a
stove. The ones to try first are those where a number is arithmetic and not
experience: the pie pastry sizes, the Boston bun and rēwena doughs, whose water
was worked out and not tested, the maple fudge temperature, the crispy pork
belly's time in the oven, and the oven hāngī, which has more in one tin than
most kitchens have tried. Nutrition figures are estimates, as the section on
times and nutrition says.

The variants left out are not lost. Any of them, a slow-cooker beef stew, an
air-fryer version or a protein swap, can be a page of its own if it is wanted,
in a volume of its own.

Photographs, again: the seventy-four carry the gradient card until the image
pipeline has been through them, and 549 recipes are now on it.

## Volume twenty-six, the most searched names

Thirty-two more, taking the site to 1,915. The owner sent a list of 252 names,
the most searched recipe names, and asked for them to be compared with the
recipes already published: skip the ones that match, keep the previous recipes
as they are, and add only the new ones. The list was tried against the 1,883
already on the site with the same tool as volumes twenty-one to twenty-five.

Where the 252 went. 182 were already recipes on the site, under the same name or
another: chocolate chip cookies, mac and cheese, banana bread, meatloaf,
lasagna, beef stew, pot roast, brownies and the rest of the obvious ones. Five
names appear twice in the list (huevos rancheros, clam chowder, churros,
cornbread and pancakes). The other 65 were read by hand, because the word rules
cannot tell a new dish from a published one with a word added or a letter
dropped. 44 of them had passed the word rules and 21 shared one word with a
published recipe, and 30 were new.

The other 35 were the same dish or a variant of one. Chicken Karage and
Emptanadas are typing slips for the karaage and the three empanada recipes. Pork
carnitas is the slow-braised carnitas, birria de res is the birria tacos,
shortbread cookies are the Scottish shortbread, brisket is the Texas smoked
brisket and the braised brisket, lamb chops are the lamb cutlets, pita bread is
the khubz arabi, and cold brew, chia seed pudding, tres leches, Victoria sponge
cake, stuffed pasta shells, flan, quiche, General Tso chicken, tikka masala,
butter naan and fried rice are on the site under a name with a word more or
less. Oatmeal is the porridge, tostadas are the tinga tostadas and flank steak
marinade is the flank steak. Others are a cut, a sauce or an appliance away from
a page that exists: slow-cooker baby back ribs, pork ribs, chicken breast,
chicken stir fry, enchiladas suizas next to the enchiladas verdes, and turkey
breast next to the roast turkey and the roast turkey crown. Pork loin is the
roast pork with crackling, whose page already targets "roast pork loin".

The word rules had passed 18 of these as new, and reading caught them.
Cheesecake is one of five cheesecakes already here, and carnitas, birria,
karaage, empanadas, shortbread, brisket and lamb chops each had a page under a
longer or differently spelt name. A dish with an extra word in its name is not
always a new dish, and neither is a dish with one letter wrong.

The tool went wrong in the other direction twice. Chicken curry was matched to
the butter chicken, which is a creamy tomato curry and not the everyday onion
and tomato curry of an Indian home, and chocolate muffins to the chocolate chip
muffins, which are a vanilla batter with chips in it. Both were added, under the
more specific names of an Indian chicken curry and double chocolate muffins,
which brings the total to 32.

What is in it. Mexico and Latin America: chilaquiles rojos, to go with the
chilaquiles verdes, pozole verde, to go with the pozole rojo, pork chile verde,
chicken flautas, chimichangas, beef fajitas, caldo de res and an arroz con
pollo. American mains: Mississippi pot roast, cheeseburger macaroni, crispy
baked chicken thighs, braised beef short ribs, roast beef tenderloin and a
hashbrown casserole; honey garlic glazed salmon, pan-seared tilapia and a shrimp
stir-fry; and an Indian chicken curry. Sides and bakes: garlic mashed potatoes,
sweet potato fries, a fruit salad and double chocolate muffins. Drinks: fruit,
green and protein smoothies, iced tea, and the whiskey sour, Moscow mule,
cosmopolitan, daiquiri, manhattan and martini.

Spread: American 17, Mexican 7, International 4, Cuban 2, and one each Chinese
and Indian. No cuisine is new to the site, so no new hub pages.

### What the audits caught

Little. Six meta descriptions ran over the 158 characters the site allows: the
chilaquiles rojos, the chicken flautas, the caldo de res, the Indian chicken
curry, the garlic mashed potatoes, and the fruit smoothie, when its wording was
changed. The timing audit refused the hashbrown casserole once, when an
ingredient line said the potatoes should be thawed "overnight in the fridge": it
counted 480 minutes of waiting that the record did not declare. The line went
back to saying only "thawed", and the thawing is not in the recipe's times,
which is noted below. The social card still said 1,883 recipes and the README
counts were out of step until the icons were regenerated and the README synced.
The timing, nutrition, diet, keyword, substitution and duplicate audits then
passed on all four source files, which is not the same as the recipes being
right.

### What reading caught that the audits could not

25 of the 32 were corrected after being read with the ingredients, the method
and the numbers side by side:

- Quantities that did not fit the method. The chilaquiles gave 300 ml of oil for
  a frying depth of 1 cm, which takes about 550 ml in a 26 cm pan, and it now
  says 5 mm and fries 6 batches of about 12. Its salsa, from 500 g of tomatoes
  and 250 ml of stock, was given 200 ml more water and 8 minutes to reach a
  coating consistency, and now has 100 ml and 10 minutes. The short ribs had the
  liquid two thirds of the way up the meat, which 875 ml of wine and stock will
  not reach around 1.6 kg of ribs, and it now says halfway. The roast beef
  tenderloin was a centre cut in the ingredients and had a thin tail to fold
  under in the method, and a centre cut has no tail; it is now a tenderloin with
  any tail folded under, seared in a roasting tin over two burners, because a
  1.5 kg roast does not fit in many frying pans. The chimichangas put 165 g of
  filling in each parcel from a filling that weighs about 1,050 g for six, and
  now say 175 g. The flautas asked for 500 g of cooked chicken without saying
  how much chicken that is, and now say about 700 g of raw breast; the method
  also fried them without the seam side down that the tip insists on.

- Times shorter than the method. The pan-seared tilapia said 10 minutes and
  cooks its fillets in two batches of 4 to 5 minutes before the sauce, and is
  now 14. The sweet potato fries soaked for 30 minutes and gave a prep time of
  15; they now soak for 20 minutes while the oven heats, and give 35. The white
  sauce of the hashbrown casserole said 5 minutes and takes 8. The chilaquiles
  said 45 minutes in total and are now 50.

- Claims stated as fact that were not supported. Sweet potatoes were said to
  have more moisture than white potatoes, which the composition tables do not
  show. The whiskey sour was said to appear first in print in 1862 and now says
  only that a recipe was printed then; the iced tea's "printed recipes go back
  to the 1870s" no longer says when; the martini's history of vermouth ratios
  now says "roughly", and the "most common reason" a martini tastes wrong is "a
  common reason". The daiquiri was compared with a margarita for sharpness,
  which nothing supports. The fruit smoothie said "no added sugar" and has an
  optional spoonful of honey. The hashbrown casserole was said not to freeze,
  which was a guess, and many cooks do freeze it. Chicken thighs were said to
  "taste better" at 80°C, which is an opinion, and are now "more tender".

- Small mistakes. The short ribs were described as "the ends of the rib bones",
  and they are a short length of bone from the lower rib cage under a thick
  layer of meat. The shrimp stir-fry listed its steamed rice under the sauce.
  The double chocolate muffins said the cases are filled "to the top" in one
  place, "almost to the top" in another and "right to the top" in a third. The
  arroz con pollo was labelled Mexican and is now Cuban: the pot of chicken,
  rice, sofrito, olives, peas and peppers written here is the Caribbean version,
  and the site has a Cuban hub and no Latin American one.

One correction was for safety and not accuracy. The Moscow mule is served in a
copper mug, and lime juice and ginger beer are acidic enough to pull copper from
an unlined one, so the page now says to choose a mug lined with stainless steel
or nickel.

### Judgement calls

The beef fajitas sit next to the chicken fajitas and the carne asada. Skirt
steak marinated in lime and seared hard is the carne asada with peppers and
onions and a tortilla, and the page is a different dish only by that much; it is
the first of these to remove if the site should have only one. The honey garlic
glazed salmon spoons a glaze over the same skin-on sear as the pan-seared
salmon, and sits next to a maple glazed salmon that is baked. The shrimp
stir-fry is on the site beside the garlic butter shrimp and the scampi, and is
not on it as a stir-fry. The cheeseburger macaroni, the boxed dinner made at
home, sits next to the one-pot chili mac, and has a ketchup, mustard and cheddar
sauce and no beans or chilli. The list called it Hamburger Helper, which is a
brand's name; the page is titled Cheeseburger Macaroni and uses the brand in its
meta description, its search phrases and its first sentence, to say what it is a
homemade version of.

The Mississippi pot roast is a different dish from the pot roast: it has no
vegetables and no added water or stock, it goes in the slow cooker for 8 hours,
and it is finished with butter and pepperoncini, where the pot roast is a braise
in the oven with carrots and potatoes. The garlic mashed potatoes cook the
garlic in the potato water and are mashed by hand, and the creamy mashed
potatoes use a ricer and butter before milk. The crispy baked chicken thighs and
the sweet potato fries are the oven versions of dishes that the site had only as
air-fryer pages, and the methods differ: a dry brine with baking powder on a
rack, and trays heated before the fries go on.

Left out, and arguable: the loaded baked potato soup, because the slow-cooker
potato soup already targets "loaded potato soup"; the roasted Brussels sprouts,
because the ones with bacon are oven-roasted at 220°C; the carrot and lentil
soup, because of the spiced red lentil soup; corn muffins, which are the skillet
cornbread and the savoury corn muffins; and the Tuscan chicken pasta next to the
creamy Tuscan pasta. Any of them can be a page of its own if it is wanted.

### What has not been done

No recipe here has been cooked, as in every volume, and the audits are not a
stove. The ones to try first are those where a number is arithmetic and not
experience: the tenderloin's time in the oven, which a thermometer should
overrule; the chilaquiles salsa, reduced by the clock and not by sight; the
sweet potato fries, whose crisp depends on a very hot tray; the muffin batter,
which is thinner than most once the coffee is in; and the 8 hours of the pot
roast.

The nutrition was worked out this time from a weight for each ingredient and a
table of values per 100 g, and not estimated by hand as most earlier volumes
were, which is why so many figures were changed when they were checked. It is
still an estimate. The table was written from memory of standard composition
data and not taken from a database, the yields are guesses, such as how much
frying oil stays on the chips or how much fat runs off a rack, and the script
that did the sums is not in the repository. The thawing of the hash browns is
also not in the recipe's times.

The variants left out are not lost. Any of them, a slow-cooker rib, an air-fryer
version or a protein swap, can be a page of its own if it is wanted, in a volume
of its own.

Photographs, again: the thirty-two carry the gradient card until the image
pipeline has been through them, and 581 recipes are now on it.

## Where the photographs ran out

Six passes through the archives left 174 recipes without a picture. That number
stopped moving for a reason worth writing down: the last pass, which took the
lead image of a dish's Wikipedia article, returned 43 candidates and 37 of them
were wrong. Not marginal — a portrait medal of Mehmed II for Bellini, mountains
for Mont-Blanc and Three Cup Chicken, cyclists for Paris-Brest, the Hong Kong
skyline for spicy wontons. What was left after six passes was not a gap that a
seventh would close. It was the set of dishes nobody has photographed under a
licence this site can publish.

So those recipes carry an illustration drawn by an AI image model instead of a
blank gradient card, generated by `tools/generate_images.py`.

### Keeping a drawing and a photograph apart

The site tells readers, in its own words, that every photograph on it is freely
licensed and that its photographers are credited. Adding pictures that are
neither would have made that false in a way nobody could see, because a drawing
and a photograph sit in exactly the same frame on the page. Everything below
exists to stop that.

- **The caption says so.** Every illustration renders "Illustration, generated
  by AI — not a photograph of this dish" in the place a photographer's credit
  would go. `src/lib/util.js` decides this from the manifest record, not from
  the file, because nothing about a JPEG says how it was made.
- **The counts keep them apart.** `src/data/stats.js` returns `photoCount` and
  `illustrationCount` separately, and the licence figures are computed over
  photographs only. So does the build's own summary line, which is the first
  number anyone reads after a build and which reported "1,069 with photography"
  on 1,035 photographs until it was split. Left alone, 174 generated pictures would have walked into
  those figures as "CC0 or public domain, no conditions at all" — true of the
  files and a lie about the site.
- **The attribution file lists them apart.** `images-attribution.md` has its
  own illustrations table, outside the photograph index and outside the licence
  summary, because these have no photographer, no source archive and no licence
  to meet.
- **The prompt comes from the recipe.** It is built out of the dish's own
  description and ingredient list, so it cannot describe a dish different from
  the one on the page. Changing the recipe changes the prompt.

`npm run check` fails the build if an illustration publishes without its notice,
if a photograph carries the notice instead of its photographer's credit, if an
illustration is listed in the photograph index, or if the attribution file has
no illustrations section while the manifest holds some. All four were confirmed
by causing them.

The fourth of those found a real bug in this check rather than confirming it.
The first version looked for a licence column reading CC or "Public domain" on
the leaked row — which can never match, because an illustration that leaks into
the index carries its own licence string, "AI illustration". The guard passed on
precisely the file it was written to catch. It asks which section the filename
appears in now.

### The retry, and what it recovered

Running every remaining dish again with a moved-on seed drew 116 and kept 40.
21 of those were dishes whose earlier drawing had been refused; the other 19
had never been drawn at all.

So retrying recovered about a quarter of the rejects, and the pattern in which
ones is the useful part. Dishes refused because the generator produced
something unrelated came back usable — `mantou` went from a kiln to a plain
steamed bun, `moules-frites` finally arrived with the mussels, `di-san-xian`
from a rock formation to peppers, potato and aubergine on a plate,
`strozzapreti` from choux buns to twisted pasta. Dishes refused because the
model has the wrong idea of what the food looks like came back wrong in the
same way: `mont-blanc` drew a white dome for the third time, `malfouf-mahshi`
laid its cabbage leaves out flat again, `scallion-oil-noodles` sat in broth
again, `dukkah` and `assidat-zgougou` produced people at a table again. A new
seed reshuffles the roll; it does not change what the model thinks the dish is.

### The refusal that deleted a photograph

Refusing 42 of the first 76 drawings destroyed a published photograph, and
nothing said so.

`tools/review_images.py` cleared the whole manifest entry on a refusal and
deleted both `<slug>.jpg/.webp` and `<slug>-process.jpg/.webp`, whatever the
entry under review actually held. Almost always that is right, because a
refused candidate is the only thing the recipe has. `tofu-edamame-stir-fry` was
the exception: it had a CC BY-SA process photograph on the site and no hero, so
a drawn hero went to review, was refused for having no tofu in it, and took the
photograph and its two files with it.

It needs a recipe with a published shot of one kind and a candidate of the
other, which is why it survived six fetch runs. What made it invisible is that
a missing image looks exactly like a recipe that never had one — the site
renders a gradient card either way, and nothing counts what should be there.
The only reason it surfaced at all is that the photograph total moved by one in
the wrong direction between two runs of `npm run attribution`.

The refusal now clears only the kinds present in the entry being reviewed and
deletes only their files. Confirmed by staging a hero candidate against that
same recipe and refusing it: the hero record clears, the hero file goes, the
process record and both process files stay.

And then it happened again, on the other branch. Publishing did
`manifest[slug] = entry`, and a pending record always carries both keys with
the one it is not reviewing set to None — so publishing a hero deleted the same
photograph a second time, for the same reason in the branch the first fix had
not touched. It publishes by merge now: a candidate can only ever overwrite the
kind it actually carries.

Reasoning branch by branch is what failed twice, so the tool no longer relies on
it. It records what was published before the review, and refuses to write
anything at all if the result would drop a published image that nobody refused —
naming what would have gone. Proved by putting the publish bug back: the guard
stops the write and the manifest on disk is untouched.

### The run that redrew its own rejects

A third pass drew 46 pictures and 42 of them were byte-identical to ones
already refused.

Three things lined up. `generate_images.py` selects any recipe without a hero.
Refusing a candidate sets the recipe back to exactly that. And `review_images.py`
recorded a refusal only when the entry carried a source page — which a drawing
never does — so nothing remembered that the dish had been drawn and rejected.
The same prompt and the same seed then returned the same file, and the pipeline
went round.

The refusal record now takes a drawing too, keyed by the prompt rather than a
page, and the generator skips a dish whose drawing has already been refused.
`--retry` overrides that and moves the seed on, because a refusal is not
permanent — the dish is still undrawn, and a different seed is a real second
attempt rather than the same request asked twice. The 77 refusals from the two
reviews that ran before the record existed were backfilled: `prompt_for` is a
pure function of the recipe, so each prompt could be recovered exactly.

Confirmed by asking the generator what it would draw. With 116 recipes still
without a picture it offers 35, which is the 116 less the 81 refusals now on
record; with `--retry` it offers all 116.

### The one judgement rather than fact

Whether an illustration may be the `image` of a page's Recipe schema is a real
trade, so it is a switch in `src/data/illustrations.js` with both sides written
out, not a hardcoded choice. It is on: those recipes are eligible for the
photo-led rich result again, and what Google is handed is a picture of the dish
that nobody photographed.

The counter-argument is in this repository already. Twenty-three recipes once
gave up rich-result eligibility rather than pass the site's social card off as a
photograph of bread sauce, and that was the right call. The two cases are not
the same — that was one card with no food on it standing in for twenty-three
different dishes, and these are one picture per dish, of that dish, each checked
by eye — which is why the switch defaults on rather than off. Setting it to
`false` needs no other change.

### What it actually produces

Not photographs, and not close to them. The only model reachable without an API
key is a fast one, and it is poor at dishes whose names describe something else.
Measured before the run: naming the dish first gave one usable picture in five —
"Bread Sauce" drew a bread roll, "Mont-Blanc" a meringue mountain. Describing the
plate first and letting the name follow moved that to about one in two, which is
why `prompt_for` is built the way it is.

That is still a large fraction wrong, so every illustration goes through
`tools/review_images.py` and the same contact-sheet check as an archive
photograph. A generator draws a confident picture of the wrong dish as readily
as a right one, and nothing in the file says which it did.

### Two hundred more drawings, and what half of them got wrong

Volumes nineteen and twenty left 276 recipes on gradient cards. 200 of those had
never been drawn — the rest carried a refusal already — and a three-worker run
produced 199, losing only `anticuchos` to the rate limit. Reviewed by eye on
contact sheets, **93 were published and 106 refused**: forty-seven per cent, near
enough exactly the one-in-two the earlier measurement predicted.

The refusals sort into four kinds, and only the first is the one people expect:

- **A different object altogether.** `pkhali` drew a houseplant in a pot.
  `salsa-verde-mexican` drew a bowl of green peas. `chicken-lollipop` drew a jar
  with sticks in it. `black-forest-gateau` drew a window and a cup of coffee with
  no cake in the frame. Nothing recovers these; a second seed draws a different
  wrong thing.
- **The right food in the wrong form**, which is subtler and more common. Satay
  with no skewer. A medu vada with no hole. Flapjacks as round biscuits rather
  than squares cut from a tray. Conchas without the scored shell that gives them
  the name. Mysore pak as loose paste instead of set fudge. The form is what
  names these dishes and the generator has no grip on it at all.
- **A picture that contradicts the recipe's own sentence.** `hakka-noodles` came
  back bare when the description it was built from says "tossed with shredded
  vegetables". `hokkien-mee` came back pale where the recipe says dark thick
  noodles. `veg-biryani` had no vegetables in it, `goi-ga` no chicken,
  `shiro-wat` whole chickpeas where shiro is a flour. This class is the
  interesting one, because the contradiction is between the picture and a
  sentence the prompt already contained — which is the same shape as every
  audit in this repository, and nothing checks it.
- **One tic, five times.** Whole raw egg yolks floating in broth, on
  `shoyu-ramen`, `katsudon`, `bun-rieu`, `pad-woon-sen` and `egg-curry`. Five
  unrelated dishes, one wrong answer, which is a property of the model rather
  than of any prompt.

Illustrations on the site go from 98 to 191 and gradient cards from 276 to 183.
Every refusal is recorded in `image-rejects.json` with its prompt and the reason,
so the next run declines to redraw it rather than reproducing it byte for byte.

### The merge that restaged its own rejects

Reviewing in batches while the workers were still running meant merging their
staging files into `images-pending.json` more than once, and the second merge
skipped anything already published and nothing else. It restaged all 83 slugs
refused in the first batch — whose image files `review_images.py` had just
deleted — so the staging manifest pointed at eighty-three files that were not
there.

It was caught by counting: the merge reported 123 new entries where 40 were
expected. The fix is the guard `generate_images.py` already has and the merge
did not, reading the same file: a slug with an illustration refusal recorded
against it is not a candidate. Worth writing down because the tool had solved
this exact problem once already, in the selection step, and the lesson did not
travel to the second place that needed it.

## Asking the archives in a language other than English

183 recipes were still on gradient cards after six passes, and the reading of
that had been "the archives hold nothing for these dishes". It was wrong. The
archives were only ever asked in English.

Every source in `fetch_images.py` matched strings: a Commons text search, an
Openverse caption search, an English Wikipedia article title. None of them can
reach a file called `كبة لبنية.jpg`, which is the photograph of kibbeh
labaniyeh, and no number of retries of the same search in the same language
will find it.

Wikidata can, because it matches the dish as a concept rather than as a string.
An entity search hits a label or an alias in any language, and the item then
carries P18 — an image an editor chose to represent that concept. Sampled
across 30 of the 183, **12 had one**. Two sources are built on it: the P18
image itself, and the lead image of the dish's article on its own language's
Wikipedia, reached through the item's sitelinks, for dishes written up where
they are eaten and nowhere else.

Both hand their filename to one `commons_file_candidate()` that reads the
licence from the file's own metadata. Where the filename came from never
implies anything about what may be published.

### The source was not the whole problem

The first run with Wikidata wired in produced a photograph of injera for bread
sauce. The word "bread" matched, and `Bread sauce.jpg` sat unread on the dish's
own Wikidata item. Scallion oil noodles came back as a plate of foie gras.

Two mistakes, and neither was the new source:

- **`gather()` stops as soon as it holds two candidates**, and the chain opened
  with two Openverse searches. On any dish the archives caption loosely, those
  two filled the pool and every curated source after them was never called at
  all. The new source had been added third and was reached for almost nothing.
- **Score cannot separate the two kinds of evidence.** "injera bread" scores a
  clean 1.00 against "bread sauce". A curated claim cannot beat a good string
  match on relevance, because relevance is measuring the wrong thing: a caption
  sharing words with a dish and a person deciding a picture *is* that dish are
  different in kind, not different in degree.

So the curated lookups now run first, and `rank()` sorts them into their own
tier ahead of the score rather than competing inside it. A third fix was needed
before either worked: the lookup was being handed the catalogue's `imageQuery`,
which is a description — "Bread sauce onion clove milk" — and no item is
labelled that. It tries the dish name first now.

### What asking in another language actually recovered

The full run over the 183: 128 heroes found, 123 reviewed on contact sheets
(five had been decided in an earlier batch), **77 published and 46 refused**.
Photographed goes from 1,035 to 1,114 and gradient cards from 183 to 104.

Fifty-four of the 128 came from the dish's Wikidata item, a source that did not
exist in this file that morning. The rest came from the text searches that had
already failed six times — they succeeded now because the retry queries reach
further than they used to, not because anything about them changed.

The refusals are the same homonym failures this file has always produced, and
they are worth listing because they are so consistent: `manti` returned a
praying mantis, `conchas` a beach covered in seashells, `pico-de-gallo` a
mountain, `black-forest-gateau` a photograph of a Black Forest village,
`pithiviers` a sepia postcard of a railway depot. A caption search cannot tell
a dish from the thing it is named after, and no scoring change fixes that,
because in each case the caption is a perfectly accurate description of the
wrong subject.

Two refusals were subtler and are the ones worth guarding against later. The
photograph offered for `rasgulla` was balls in creamy milk, which is ras malai;
the one for `knedliky` was a crusty rye loaf, where the dumpling has no crust.
Both are the right cuisine, the right family, and the wrong dish.

At 63 per cent kept this is a much better hit rate than the illustrations
managed at 47, which is the expected direction: a photograph that exists is a
photograph of something real, and the failure mode is misidentification rather
than invention.

### Where it stopped, and what stopped it

Four passes over the recipes on gradient cards, each reviewed by eye:

| pass | tried | found | kept | rate |
|---|---|---|---|---|
| 1 | 183 | 128 | 77 | 42% |
| 2 | 104 | 42 | 11 | 11% |
| 3 | 93 | 32 | 8 | 9% |
| 4 | 53 | 13 | 8 | 15% |

Photographed goes from 1,035 to 1,141 and gradient cards from 276 to 77.

The fourth pass rose against the trend because of one change: the search budget
was made overridable and set to 400 seconds instead of 60. Anelletti al forno,
saucisson en brioche, stovies, bubble and squeak and hot dry noodles had all
returned *nothing at all* in three previous passes, not even a wrong candidate.
They were not absent from the archives. The chain was being cut off before it
reached them.

Thirty-three recipes are now marked `skip` in images.json with a reason, which
means the fetcher will not spend time on them again. They divide cleanly:

- **The archive answers the name.** `manti` returns a praying mantis and a
  mantis shrimp. `conchas` returns seashells. `mont-blanc` returns the
  mountain, `black-forest-gateau` the forest, `pithiviers` the town,
  `green-goddess-salad` a steam locomotive and two films. These are not close
  calls and no further pass will change them.
- **The archive holds the neighbouring dish.** Steak and kidney *pie* for the
  pudding, ten times. Chicken tikka for fish tikka. Gumbo for bamia masreya.
  Boeuf stroganoff plated for the sauce alone. Avgolemono for a Greek chicken
  traybake. In each case the photograph is real, correctly licensed and of
  something a cook would recognise — just not this recipe.

`bar-en-croute-de-sel` is the clearest case of the second kind: twelve refusals,
every one a plated sea bass fillet. The salt crust is the entire dish and no
archive photographs it.

The reason is written into each entry rather than left implicit, because the
next person to look at a gradient card will otherwise ask the question this
already answered.

### A gate loosened, and the sentence that gate was holding up

`fetch_images.py` can also be given a Pexels or Unsplash key. Both licences
permit the two things this site does, commercial use beside advertising and
resizing, and neither asks for credit; both are named in the licence gate in
full rather than by pattern, so a third stock library cannot arrive through the
same clause without someone reading its terms first. Without a key the two
sources return nothing and the pipeline runs one source short.

That loosening created a trap. The gallery page says "Every photograph is
freely licensed", which was true of every source this site had, because
Commons and Openverse hand back Creative Commons and public domain and nothing
else. Neither stock licence is a free licence, and the first stock photograph
to publish would have made that sentence false with nothing anywhere saying so.
`tools/check.js` now fails the build on any published photograph whose licence
is not a free one, naming the licence and the file. It was proved by injecting
`Pexels License` onto a published photograph and watching the build refuse it.

## Five hundred and eighty-one gradient cards

Volume twenty-six left the site with 581 recipes on a gradient card: the 549
that were already there and its own 32. The owner asked for a picture for every
one of them, and for the pages around the pictures to carry proper keywords and
headings. What follows is what that took, in the order it happened, including a
fault older than the request.

The result: 1,409 recipes have a photograph, up from 1,143. 505 have an AI
illustration, up from 191, and each says so under the picture. One recipe, the
Mont-Blanc, is still on a gradient card.

### A query that could never have matched

The fetcher asks the archives for each recipe's `imageQuery`. From volume
twenty-one onwards that field is a string of descriptive words, "Montreal smoked
meat sandwich hand sliced brisket rye bread yellow mustard dill pickle deli",
and from volume twenty-four it is a whole sentence written as alt text: "Golden
chicken flautas on a plate, long crisp rolled corn tortillas topped with
shredded lettuce, crema, crumbled queso fresco...". No caption on Wikimedia
Commons reads like either, so the first search returned nothing and used most of
a 45 to 60 second budget finding out. Only then did the fetcher fall back to the
dish's title. Tried by hand on six of volume twenty-six's dishes before the
change, five were found, every one of them after that dead first search.

`fetch_images.py` now asks for the title first when the query runs past eight
words, and keeps the sentence as the last fallback. That is a guess at a fix and
not a measured one: there is no run of the old query against the same 554 dishes
to compare with, and the search was not re-run the old way to make one.

### What the archives returned, and what was refused

554 recipes were searched. The other 27 carried a `skip: true` from earlier
passes and went straight to the drawings. 435 turned up a candidate, and every
candidate was looked at on a contact sheet before it was published: 266 were
kept and 169 refused, which is 39 per cent. Each of the 169 had matched its
query. They sort into the usual kinds:

- **A place, a person or a plant with the dish's name.** `manti` returned a
  Forest Service photograph from the Manti-La Sal National Forest,
  `three-sisters-stew` returned three mountains, `garlic-fingers` returned okra,
  which is called lady's fingers, and `akara` returned a herbarium sheet of a
  tropical shrub.
- **A product, a brand or a joke.** `peanut-brittle` returned a picture titled
  "Peanut Brittle Discovered On Jupiter", `peanut-brownies` a Snickers wrapper,
  and `aioli` a supermarket tub.
- **A drink named for something else.** `manhattan` returned the skyline,
  `cosmopolitan` a fashion advertisement, and `martini` a news photograph from a
  hospital ward.
- **The right words on the wrong thing.** `sheet-pan-chicken-and-vegetables`
  returned tilapia with asparagus, `egg-rolls` the White House Easter Egg Roll,
  `sweet-potato-fries` an emoji, and `double-chocolate-muffins` a red rose
  called Hot Chocolate. `banana-muffins` returned a good photograph with the
  recipe's title printed across it.

The pictures that passed are mostly a home cook's or a restaurant's, credited on
the page under the same rules as before. Photographs on the site went from 1,143
to 1,409, and the licence split across the 1,894 photographs on it (1,409 heroes
and 485 second shots) is now 956 CC0 or public domain, 453 CC BY and 485 CC
BY-SA.

The second shot has a quirk worth writing down. `fetch_images.py` wants one for
every recipe at an even position in the catalogue, and the sharding gave one
worker the even positions and the other the odd, so one worker fetched second
shots and the other never wanted one. About half the new heroes have no second
image. Nothing is broken by that, since the page shows one only if it exists.

### The stamp on every drawing

The drawings were the next problem, and looking at them turned up something
nobody had checked. The endpoint had begun answering some requests with HTTP 402
and 500, and to see whether that was the service or the tool, two test images
were fetched by hand and opened. Both carried the service's own logo,
"pollinations.ai", stamped in the bottom-right corner. `generate_images.py` has
always asked for `nologo=true`; the endpoint does not honour it.

That meant the 191 illustrations already on the site carried it too. One of
them, `albondigas`, was pulled out of the last commit and looked at, and the
logo is there, in the corner over the wooden table. It survived because the
picture is 800 pixels wide and the stamp is under 20 pixels tall, and because
every check that exists asks whether a picture is of the right dish and none
asks whether something has been written on it.

The fix is `strip_logo` in `generate_images.py`, which crops the bottom 7.5 per
cent off every drawing before it is framed. The 191 published drawings and the
27 then waiting for review were cut in place. They had already been through JPEG
once, so those 218 are re-encoded and enlarged by about 8 per cent to refill the
frame and are a little softer than the newer ones, which were cropped from the
full 1,024 pixel original. One old and one new file were opened afterwards and
are clean.

### Drawing the rest, and what took how many tries

581 recipes less the 266 photographs left 315. The 27 that earlier passes had
marked as having nothing in the archives were drawn first, and 13 were kept,
which left 302. The rounds, in the order they ran, with the drawings staged and
looked at each time:

| round | drawn | kept | refused |
| --- | --- | --- | --- |
| the 27 the archives had been marked empty for | 27 | 13 | 14 |
| everything still without a picture | 294 | 172 | 122 |
| again, with the seed moved on | 129 | 45 | 84 |
| again | 83 | 44 | 39 |
| hand-written descriptions of the plate | 40 | 26 | 14 |
| the same, reworded | 15 | 6 | 9 |
| the same, reworded | 8 | 6 | 2 |
| the same, for the last three | 3 | 2 | 1 |

That is 314 kept, and 505 in all with the 191 already there. Eight drawings in
the second row failed with a server error and came back in the next round.

Two things in the table are not what the earlier section of this README
predicted. It said a new seed only reshuffles the roll and recovered about a
quarter. Here a moved-on seed kept 35 per cent the first time and 52 per cent
the second, so the roll was worth taking twice. Some of that rise is probably
me. By the third look at the same dishes I was passing drawings I would have
refused on the first: a bastilla with a basket handle of pastry, a gammon with
parsley sauce that shows no sauce, a bowl of chips for the chicken salt that is
meant to season them. They are on the list of judgement calls below.

### The descriptions that stood in for the recipe

`prompt_for` builds a prompt from the recipe's own description and ingredients,
so that it cannot draw a dish other than the one on the page. For 41 dishes it
kept drawing something else. The Mont-Blanc came back as a cupcake and as a bowl
of whipped cream, and never once with chestnut vermicelli on it. Courgette
flowers came back as a vase of tulips. Lotus root came back as cubes of orange.

For those, `src/data/image-prompts.json` now holds a hand-written description of
what the finished plate looks like, taken from the recipe's own description and
ingredients and containing nothing else. `prompt_for` uses one in place of the
derived prompt when the slug has an entry. It is a departure from the rule that
the prompt comes from the recipe, though only in who wrote it, and the file is
the record of every case where that rule was not enough. It kept 26 of the first
40, then 6 of 15 on the reworded versions, and it did not save the Mont-Blanc,
which stays on its gradient card. That card is honest and a wrong picture is
not.

### Alt text, headings and structured data

The alt text on every recipe image read "Title, a Cuisine category recipe,
served and ready to eat" and said the same thing on all 1,915 pages. It now
names the dish and its cuisine and category, with the article right ("an
American breakfast recipe", "an Ethiopian dinner recipe"), and adds the first of
the recipe's own search phrases that the title does not already contain, so that
the alt text of the Chilaquiles Rojos ends "chilaquiles with red salsa". A
generated picture begins "Illustration of", because alt text is what a screen
reader announces and a listener should not be told a drawing is the dish. The
second shot reads "Preparing Chilaquiles Rojos: ingredients and method" and the
same phrase.

The section headings on a recipe page now carry the dish's name: "Chilaquiles
Rojos Ingredients", "Why This Chilaquiles Rojos Recipe Works", "How to Make
Chilaquiles Rojos", "Tips for Making", "What to Serve with", "Storing &
Reheating", "Chilaquiles Rojos FAQ: Common Questions" and "Chilaquiles Rojos
Nutrition". They were "Ingredients", "Method", "Chef's Tips" and so on, which
said nothing about which dish the page was. No script reads those headings, and
the check and the SEO audit still pass.

`Recipe.image` in the structured data was a bare URL. It is now an `ImageObject`
with the URL, size and caption, and for a photograph its creator, the credit
line, the licence URL and the page the file came from, which is what Google
reads for the licensable badge in image results. A drawing gets the caption and
size only, since it has no photographer or licence to declare.
`src/data/illustrations.js` still decides whether a drawing goes into the recipe
schema at all. The page's `og:image:alt` and `twitter:image:alt` already used
the alt text, so they carry the new wording too.

Keywords were not added to. Every recipe already carried between four and six of
its own, checked against the record by `tools/keyword-audit.js`, and the change
here is that one of them now appears in the alt text of each image.

### What has not been done

Most of the 505 drawings, and every one of the 266 new photographs, were judged
on a contact sheet whose thumbnails are 320 pixels wide. That is enough to tell
a cupcake from a mountain of chestnut cream and not enough to see everything.
The likeliest faults are ones a thumbnail hides: a garnish that is wrong, a
photograph of a slightly different regional version, a drawing whose dish is
right and whose details are not. The drawings I passed on a later look are the
ones to check first, and the marginal accepts were `bastilla`,
`gammon-parsley-sauce`, `chicken-salt`, `chip-shop-curry-sauce`,
`lotus-root-stir-fry`, `kartoffelsalat`, `chocolate-crackles`, `hangi` and
`roast-duck`. Among the photographs, `chicken-flautas` is a close-up of a
taquito from a shop, which is the flauta's near relation and not the same thing.
Any of them can be refused with `tools/review_images.py`, which puts the recipe
back on its gradient card.

About a quarter of the pictures on the site are now drawings, and a page's
caption is the only thing that says which is which. Whether that ratio is the
one the owner wants is a decision the tooling cannot make.
`src/data/illustrations.js` holds the schema switch, and removing the drawings
from the pages altogether is a change nobody has asked for.

The Mont-Blanc is still without a picture. Six more drawings of it were refused
in this pass, on top of the white domes of the earlier ones: a white dome, a
swirl of cream, three cupcakes and a bowl of whipped cream. A photograph of the
dish, from anyone who has one under a licence the site can use, is the way out,
and `tools/adopt_images.py` takes it.

## Volumes twenty-seven to thirty-one, five hundred famous names

Five hundred more, in five volumes of a hundred, taking the site from 1,915 to
2,415. The owner asked for "500 more most famous search recipes in the UK,
Canada, USA, New Zealand and Australia", under the standing rules: a new dish is
added as an ordinary recipe page, the same dish is never published twice, and
everything already on the site stays as it is. About 3,300 candidate names were
brainstormed for the five markets and graded against the catalogue with
`tools/dedupe-candidates.js`, which says whether a name is new, worth a second
look or already published. Roughly a third of those 3,300 were already on the
site under the same or a near-identical name, and the later brainstorms did
worse: by the fourth and fifth volumes most of the mainstream names that came to
mind were dishes the site had.

### Where the five hundred went

American 261, British 65, Canadian 32, Australian 21, Italian 16, Chinese 15,
French 14, International 13, New Zealand 10 and Mexican 9. Irish, Ukrainian,
Indian and Greek have 4 each, Scottish and Thai 3, Korean, Turkish, Japanese,
Hawaiian, German, Welsh and Austrian 2, and Singaporean, Moroccan, Swedish,
Finnish, Cuban, Norwegian, Middle Eastern and Spanish one each. No cuisine is
new to the site, so there are no new hub pages. By category: dinner 117, baking
97, drinks 61, appetizers 52, lunch 50, desserts 48, quick meals 24, holiday
specials 21, healthy 16 and breakfast 14.

That is not an even spread, and it is not what was asked for. The United States
is where most of the searching is, and the United Kingdom, Canada, Australia and
New Zealand were already the best covered of the site's markets, because volumes
twenty-two and twenty-three were written for them. What was left that was famous
and not yet published was mostly American: the regional suppers that have a city
or a state attached to them, the church-supper and potluck dishes, the things
people make from scratch that are also sold in a bottle or a jar (the dressings,
ketchup, gravy, spice blends, jams, jellies and pickles of volume thirty-one),
the dishes that spread on video, and the classic cocktails. New Zealand has ten
of the five hundred because nearly every New Zealand dish in a top-fifty list was
already here. The British, Canadian and Australian dishes that are in are the
ones that had been missed.

### What is in it

Volume twenty-seven, 2,015: 43 American, 12 British, 10 Canadian, 5 Australian
and 3 New Zealand dishes, and a few from other kitchens that are searched for in
these markets: Chinese takeaway soups and crispy seaweed, a doner kebab,
Mongolian lamb, Ukrainian nalysnyky and pyrizhky, Hawaiian malasadas.

Volume twenty-eight, 2,115: beef and noodles, blackened salmon, shrimp
étouffée, steak Diane, Swiss steak, crispy aromatic duck, scouse, boiled lobster
and Dungeness crab, honey prawns, apricot chicken, the Chiko Roll, the Monte
Cristo, coney dogs, Texas sheet cake, pineapple upside-down cake, fondant
fancies, Aberdeen butteries, paska, Beaver Tails, gypsy tart, mango cheesecake,
and cocktails from the amaretto sour to the painkiller.

Volume twenty-nine, 2,215: chicken à la king, chicken divan, Cornish game hens,
prawn cutlets, pheasant casserole, herb-crusted rack of lamb, the Newfoundland
fish and brewis, Manhattan clam chowder, cheeseburger soup, the peanut butter
and jelly sandwich, kolaches, Bath buns, cream horns, funnel cake, chocolate
babka, black and white cookies, banana cream pie, pumpkin cheesecake, Sussex pond
pudding, baked Brie, and cocktails from the mimosa to the Mai Tai.

Volume thirty, 2,315: Brunswick stew, carne guisada, seafood gumbo, Santa Maria
tri-tip, steak Oscar, chicken Marbella, lobster thermidor, salmon en croûte, the
Acadian chicken fricot, Nova Scotia hodge podge, stifado, New Zealand devilled
sausages and savoury mince, baked feta pasta, Italian beef and beef on weck,
tartar sauce and cocktail sauce, all-butter pie crust, flour tortillas, rugelach,
Boston brown bread, pampushky, zwieback, brandy snaps, apple dumplings, baked
Alaska, clotted cream, and cocktails from the sidecar to the pornstar martini.

Volume thirty-one, 2,415: American regional suppers (stromboli, oyster stew,
carne adovada, country captain, chicken riggies, the Rochester garbage plate,
the Nebraska runza, charro beans, pineapple casserole), the Québec ragoût de
boulettes, chicken scarpariello, a Hawaiian lomi lomi salmon and mushroom barley
and matzo ball soups; the things people make from a bottle or a packet (French
and Italian dressing, béarnaise, peppercorn sauce, sweet chilli sauce, ketchup,
brown gravy, royal icing and the Italian, Cajun and ranch blends); kūmara and
zucchini fritters, ramen eggs, a charcuterie board, cowboy caviar, cauliflower
wings, corn ribs and a blooming onion; baking from pizza dough and moon pies to
Linzer cookies, a Linzer torte, fortune cookies, Devon splits, a Jamaican ginger
cake, peach pie, blueberry buckle, Kentucky butter cake, Coca-Cola cake, caramel
cake, lefse and ladyfingers; strawberry pretzel salad, dirt cake, White
Christmas, peppermint patties, pecan turtles, sopapilla cheesecake, the Dubai
chocolate bar and tanghulu; jams, apple butter, pepper jelly and pickles; pub and
fair snacks (fried cheese curds, boudin balls, pizza rolls, pork scratchings);
and nineteen drinks from the egg cream, flat white and dalgona coffee to the
Aviation, the Last Word, the Paper Plane, the Penicillin and the mudslide.

### How a name was vetted

The tool's word rules cannot tell a new dish from a published one with a
different name, a different spelling or a synonym, so each shortlist was read by
hand as well. The names that were dropped are recorded in the commit message of
each volume and, for the last two, in the header of its catalogue file: nineteen
in volume twenty-eight, twenty-nine in volume twenty-nine and more than fifty in
volume thirty. They are mostly the same dish under another name (the kiwi burger
is the Aussie burger, pikelets are drop scones, tea buns are scones, mee goreng
is the mie goreng, sweet tea is iced tea, a chicken parma is the chicken
parmigiana) or a cut, a cooking method or a flavour of a dish that is already
here (prawn tempura, lobster mac and cheese, salmon cakes, teriyaki salmon,
bourbon balls).

Volume thirty-one showed that one reading by hand is not enough. Four of its
names were dishes the site had. Two were caught just before they were written,
when a search for a word of the title turned up the page: a cowboy casserole is
the tater tot casserole with beans, and baked oats are the baked oatmeal. Two
were caught after the recipes had been written and had passed every audit, by a
pass that listed, for each of the hundred titles, every published title that
shares a word with it: a seafood boil is the site's shrimp boil with crab and a
garlic butter, with the same pot, the same order of ingredients and the same
sausage and corn, and wassail is hot spiced cider with apple, orange, cloves,
cinnamon and brandy, which is the mulled cider under an older name. They were
replaced by an oyster stew, Buck's fizz, a country captain and a Kentucky butter
cake. A fifth was close. The caribou, the Québec carnival drink, had been
written as red wine, port and vodka heated with orange peel and cinnamon, which
is a mulled wine with spirit in it, and the drink itself is served cold; it was
rewritten as that. That pass is the one to run first.

### What the audits caught

Across the five volumes the audits refused little, and what they refused was
narrow:

- In volume thirty the keyword audit refused "slow cooked green beans", because
  the method is not slow cooking, and the title became "old-fashioned Southern
  green beans"; the generator refused a record with `rest: null`; and the
  nutrition script put the steak Oscar at 1,044 kcal a serving, which cut its
  hollandaise to two yolks and 80 g of butter and brought it to 878.
- In volume thirty-one the keyword audit refused "no bake White Christmas",
  because the method lined the tin with "baking parchment" for a slice that never
  sees an oven, and the lining is now greaseproof paper.
- The same volume's homemade ketchup passed all six audits and failed
  `npm run check`: its description said "20 minutes" and its prep and cook make
  25. The six audits read the keywords and the method, and none reads the
  description against the clock. The check does.
- The volume's own lint, which is stricter than the site's, flagged seven meta
  descriptions a character or two over 150 (French dressing, sweet chilli sauce,
  creamed chipped beef, the Linzer torte, caramel cake, White Christmas and boudin
  balls), thirteen recipes that were shorter than the minimum prose, mostly
  drinks, dressings and spice blends, and a flat white with two ingredient lines
  where three are the minimum. The garbage plate came out at 1,164 kcal a serving
  and was cut to 953 with less potato, macaroni and mayonnaise.

### What reading caught that the audits could not

- Volume twenty-seven, after the audits: the pecan sandies now toast the nuts in
  the method, the empire biscuits use a cutter that matches the quantity of dough,
  the marshmallow hot chocolate lost its vegetarian tag because marshmallows
  contain gelatine, and the kettle corn headline states prep plus cook.
- Volume thirty: the tri-tip tip had a broken sentence, a claim about poutines à
  trou that nothing supported was removed, the clotted cream's fan temperature
  was worded wrongly, the sidecar's origin was corrected and the history of fried
  green tomatoes was softened.
- Volume thirty-one. The charcuterie board told the cook to slice the baguette
  half an hour before serving while its own tip warned that bread sliced early
  dries out. The jello shots' text described "half vodka and half hot water" for a
  recipe of two parts hot water to one of vodka, and called each shot "a third of
  a standard drink"; it now says about 10 ml of vodka, roughly a third of a single
  measure. The sea breeze had a sentence about crushed ice attached to the tip
  about pouring, and a tip that said plenty of ice dilutes a drink more slowly
  than a few large cubes, which is the wrong way round. The flat white gave the
  steam wand and the hand frother as one instruction. The mudslide's tip said to
  chill the glass after the syrup went in and the method never did.
- Claims stated further than the evidence: steak and eggs as the launch-day meal
  "for astronauts ever since" is now "for decades afterwards"; the sea breeze's
  first appearance "in the 1920s" is "by 1930"; the caribou's place in the
  carnival "since the nineteenth century" is "long".

### Judgement calls

The Black Russian sits beside the White Russian, which is the same drink with
cream; the Black Russian has its own name and its own searches, and is the first
of these to remove if the site should have only one. The mudslide sits beside the
White Russian and the Irish cream for the same reason, and the boulevardier beside
the Negroni, with bourbon for the gin.

The sopapilla cheesecake is one word from the sopapillas, and the duplicate tool
says so; they share a name and not a dish, one a fried pastry and the other a
cream cheese bar in crescent dough. The blueberry buckle sits beside the
streusel coffee cake, the blueberry grunt and the blueberry bread, and is a cake
with the fruit on top and a crumb over it. The Linzer cookies and the Linzer
torte are the same flavours as a biscuit and as a tart. The tanghulu is a hard
sugar shell on fruit, like the toffee apples, on small fruit and a skewer. The
bread and butter pickles sit beside the quick refrigerator pickles and are a
sweet, salted, cooked brine; the pickled red cabbage sits beside the braised red
cabbage and is cold and raw. The Kentucky butter cake sits beside the gooey
butter cake, the peach pie beside the peach cobbler, the carne adovada beside
the pork chile verde, the stromboli beside the calzone, and the runza beside the
pasties and empanadas. The zucchini fritters are grated raw and squeezed, and the
kūmara fritters are boiled and mashed, which is why both are here.

Left out, and arguable: a burgoo, because it is the Brunswick stew of volume
thirty with beef and cabbage; a steak and cheese pie, next to the steak and ale
pie and the Australian meat pie; a Kiwi onion dip, next to the French onion dip;
a Vegemite scroll, which is the Cheesymite scrolls; and a potatoes au gratin
next to the gratin dauphinois. Any of them can be a page of its own if it is
wanted.

### What has not been done

No recipe here has been cooked, as in every volume, and the audits are not a
stove. The ones to try first are those where the method depends on a number and
not on experience: the fortune cookies, which must be shaped in seconds and whose
batter is a tuile batter with water in it; the tanghulu and the pecan turtles,
which are a thermometer's work; the pork scratchings, which dry for three hours
at 100°C and then puff in oil at 200°C; the pepper jelly, whose set depends on
the pectin; the matzo balls, whose lightness depends on the hour in the fridge;
and the apple butter, which is ready when a spoon leaves a line and not when the
clock says.

The nutrition was worked out from a weight for each ingredient and a table of
values per 100 g, as in volume twenty-six, and it is an estimate. The table was
written from memory of standard composition data, the yields are guesses, such as
how much frying oil the blooming onion keeps or how much fat a braise leaves
behind, and the script that did the sums is not in the repository. The drinks
carry the calories of the alcohol that is in the glass, worked out from the
volume and the strength of each spirit, wine and liqueur, which is also an
estimate; the cooked dishes that use wine, cider or brandy carry none. The times do not
include thawing the kataifi or the frozen berries, sterilising the jars that the
jam, apple butter, pepper jelly and pickles go into, or folding the paper
fortunes.

The preserves have not been tested for shelf life. The jam, the apple butter and
the pepper jelly are potted hot into sterilised jars and given a storage time for
a cool cupboard, and the pickles are kept in the fridge. None goes through a
boiling-water bath, and a cook who wants a long shelf life should follow a tested
preserving method. A few recipes carry a safety warning, for raw salmon, raw egg
white in icing, raw flour in the edible cookie dough, boiling sugar and hot oil,
and a recipe is not a food-safety course.

Photographs: the five hundred were published on the gradient card. The image
pass that followed fetched archive photographs for the ones where a correct one
exists and drew nothing; it is described in the section after this one.

## A sweep for broken links, and real photographs for the five hundred

The owner asked for two things in one sentence: look for broken links and errors
and fix them, and find pictures for the 500 recipes of volumes twenty-seven to
thirty-one. After volume thirty-one 501 recipes were on a gradient card, the 500
new ones and the Mont-Blanc. The two jobs were done together, because the crawl
that looks for a dead link also finds a credit line that is wrong.

The pictures first, because the brief changed halfway through. The first plan
copied the earlier pass: archive photographs where there were any, and a
labelled AI illustration for the rest. About 250 illustrations were drawn,
looked at and published before the owner said they wanted real images, not AI
generated ones. All of them were taken out again: nothing generated in this
pass is on the site, the hand-written prompts that were written for the
generator were not kept, and `src/data/image-prompts.json` is as it was. What
follows is photographs only.

The result: 262 of the 501 recipes now have a photograph from an
archive, and 239 are still on a gradient card. Across the site
that is 1,674 photographs, 502 illustrations
(all of them from the earlier pass, see the end) and 239
gradient cards on 2,415 recipes.

### What was looked at

The repository's own check had already passed, and it reads what the build
writes, so none of this was it.

- **A crawl of the built files** the way a browser would follow them: all
  2,568 pages, every `href`, `src`, `srcset` and form action resolved to a
  file with the case it was written in, every `#fragment` to an id on its page,
  every `aria-controls`, `aria-labelledby` and `for` to an element, ids unique,
  every `target="_blank"` carrying `noopener`, nothing served over `http`, and
  the JSON-LD, sitemap, both feeds, search index, manifest and `robots.txt`
  parsing. Internally it found nothing broken. Everything below came from
  looking at what the links and the data said, not from a link that failed.
- **The credit links**: 2,076 unique external URLs. Wikimedia Commons pages were
  asked through its API, fifty titles at a time, which is how it asks to be
  used; every other host with a polite HEAD. One Commons file had been deleted
  since it was fetched. None of the others was dead.
- **Chromium** over a sample of recipe pages from every layout and every kind
  of picture, and the hub, listing and utility pages, at 390 and 1,280 px:
  console errors, uncaught exceptions, 4xx and 5xx responses, images that
  loaded as nothing, horizontal overflow. Then the things a reader presses: the
  servings scaler, the metric toggle, Cook Mode and its step buttons, a timer,
  the heart, the review form, search. The run also logged 339 "failed
  requests", every one `net::ERR_ABORTED`: a lazy image cancelled when the
  script moved on to the next page, which is the script and not the site. The
  heart and search are where the two last findings below came from.
- **axe-core**, in both themes at both widths, on nineteen pages, and
  **html-validate** over the page types. After the fixes below axe reports one
  thing: a contrast of 1.01 on the first related-recipe card of one page at
  phone width, read while the card was half-way through fading in, which is the
  measurement and not the page.
- **The data under the pages**: every published image file against the colour
  and thumbnail the manifest records for it, and every credit line read.

### What it found

1. **Licence links over `http`.** 436 pages linked the Creative Commons deed
   as `http://creativecommons.org/…` (547 links, and 387 more in the structured
   data). A visitor on `https` is redirected through each, and a crawler reports
   them as insecure. `secureUrl` in `src/lib/util.js` upgrades a known host at
   render time, in the page, the schema and `images-attribution.md`, and
   `npm run check` fails on any `http://` link in a built page.
2. **Credit lines that were not names.** Archive author fields are whatever the
   uploader typed. Twelve had been published as typed: three Flickr and
   Unsplash profile URLs, a Rezeptewiki profile URL, an author field that was a
   request to be mailed at an address and another that carried the address, one
   that was the unfilled template `{{{photographer}}} from…`, an `&amp;` shown
   as written, two that ran on into a sentence about the photographer's
   hometown or a link to their site, and two titles with a trailing space.
   `clean_author` in `tools/fetch_images.py` cleans them as an image is
   fetched; the page omits a byline that would read "Unknown"; and the build
   refuses a credit that carries template braces, markup, an entity, an email
   address or an author of more than 100 characters.
3. **Fifteen CC BY and CC BY-SA photographs that credited nobody.** The
   archive's machine-readable author field was empty on each, which the
   pipeline stored as "Unknown" and the page printed as "by Unknown". The
   file's own description page named the photographer on every one: Stu Spivack
   on four, Justinc, Neitram, the uploader of the self-made ones, and for the
   tapioca pudding the person who reworked it and the person who first uploaded
   it. All fifteen are entered now, and `npm run check` fails on any CC BY or
   CC BY-SA image without an author, because the credit is the licence.
4. **A rating nobody gave.** The home page's hero printed "4.8 Average rating"
   from a number typed into the template, weeks after the catalogue's invented
   ratings were removed. `tools/seo-audit.js` reads structured data, not visible
   text, so it never saw it. The third hero figure is now the count of meal
   types, and `npm run check` fails on any page that claims an average rating
   while `src/data/reviews.json` holds no review.
5. **The About page said every photograph came from Wikimedia Commons.** Some
   came from Openverse (Flickr, Rawpixel and the WordPress photo directory), and
   `images-attribution.md` said the same. Both sentences now come from counts
   (`commonsImageCount` and `otherArchiveImageCount` in `src/data/stats.js`), so
   they cannot drift again.
6. **A photograph whose source file no longer exists.** The seekh kebab's
   Commons file had been deleted. A deleted file's licence cannot be checked, so
   its entry and files were removed; the recipe was searched again.
7. **Three pages built with `<style>undefined</style>`.** The privacy page, the
   ingredients index and the contact confirmation never passed the inline
   critical CSS to `layout()`, so the header and first screen painted unstyled
   until the full stylesheet arrived. axe reported it as touch targets that
   overlapped on `/privacy/`, which was the clue. `layout()` now throws without
   it, and `npm run check` fails on a built page that prints `undefined`, `null`,
   `NaN` or `[object Object]` where a value should be.
8. **Contrast.** axe-core found 624 nodes on 80 page views below 4.5:1: the
   "Advertisement" label at 2.98, the terracotta used as text on the sunken and
   tinted bands at 3.9 to 4.2, the footer's small print at 4.39, and, in the dark
   theme only, white text on the lighter accent at 2.69. The terracotta went
   from `#c1502e` to `#b24626`, the label lost the opacity that was greying it,
   the footer greys moved up a step, and text on an accent fill now takes
   `--on-accent` (white on the light theme, the dark ink on the dark one).
   `npm run check` now measures the text and background token pairs in both
   themes, and the footer's three greys, and fails any below 4.5.
9. **The phone menu was still in the tab order while closed.** It was slid off
   the screen and nothing more, so a keyboard user tabbed into seven links they
   could not see. It is `visibility: hidden` once the slide has finished, and
   Escape closes it and returns focus to the button.
10. **Obsolete markup.** html-validate found `scrolling` and `frameborder` on
    the advertisement iframes (the frames now say `overflow: hidden` themselves,
    and the border was already in the style), an `aria-label` on a plain `div`
    (it is a `role="group"` now) and an `input` with no `type`.
11. **Four stale placeholders.** `prime-rib`, `chicken-piccata`, `chicken-marsala`
    and `chicken-alfredo` had their photograph replaced at some point without the
    blur-up thumbnail and average colour being redone, so they faded in from
    another dish's picture. Found by comparing every published image with its
    recorded colour: those four disagreed and nothing else did.
12. **`MISSING-IMAGES.txt` said "199 of 400".** It had been written by hand once
    and was never updated. `npm run missing` now writes it from the data.
13. **The recipes and search pages painted all 2,415 cards at once.**
    `directory.js` put every recipe into the page, about 90,000 nodes and a page
    well over a million pixels tall on a phone. With the processor slowed to a
    quarter of this machine's, the recipes page took 14.6 seconds to settle and
    the search page 12.4, and the axe run stalled on both, which is how it was
    noticed. Each page now shows sixty cards and a button brings in the next
    sixty, moving keyboard focus to the first new card; the same two pages settle
    in 4.3 and 3.7 seconds, with 7,700 and 2,900 nodes (the first still carries
    the 2,415-link A to Z index in its closed `<details>`). `npm run check` fails
    on a directory page without the button. The category and cuisine pages are
    written out in full and were left alone; the largest, dinner, has 801 cards
    and settles in 7.4 seconds at the same slowdown, and is the next candidate
    for the same treatment.
14. **Saved recipes did not show as saved on the pages that list them.** The
    hearts on cards painted by `directory.js` were written unpressed and nothing
    synced them afterwards, so on `/favourites/` every saved recipe offered
    "Save … to favourites", and pressing it removed the recipe. The cards now
    sync their hearts each time they are painted.

Every recipe `<img>` has alt text and dimensions, and no id is duplicated or
dangling; that was checked and needed nothing.

### Finding photographs

The first search covered all 500 with a 45-second budget per recipe, which is
what cut off the slow part of the chain (the text searches, the article lead
image, the Commons categories) for most of them. It turned up a candidate for
442 recipes, and every candidate was looked at on a contact
sheet before it went anywhere. The second search ran the whole chain again on
the 316 still without one, for as long as it needed, with alternative names
written for each recipe in `src/data/image-queries.json` (the cocktail with
"(cocktail)" after it, the dish under the other name it goes by, the title in
the singular) and with every archive page already refused left out. Over the two
searches 262 photographs were kept and 466 refused, which is
64 per cent. They were wrong in the same ways as before:

- **A place, an animal or an object with the dish's name.** `mushroom-barley-soup`
  returned a snake, `caribou` a mountain, an animal and later a coin, `sea-breeze`
  warships, `last-word` a cat, `ranch-water` a river valley and then a ruined
  water tank, `hodge-podge` the fittings of an irrigation system, `cuba-libre`
  a rusted car and then a word scratched in concrete, `kumara-fritters` and
  `portzelky` the same Californian licence plate, `coca-cola-cake` a man on a
  news channel and then the company's tower, `king-ranch-chicken-casserole` a
  wildfire, `baked-spaghetti` a tangle of cables, `stromboli` a volcano, `mimosa`
  a tree, `southern-green-beans` a stink bug and `penicillin` a vial of the
  antibiotic.
- **A person.** `white-russian` returned two heads of government shaking hands,
  `brandy-alexander` a portrait and `mai-tai` a party.
- **A product or an advertisement.** `kentucky-butter-cake` returned a fried
  chicken advertisement, `jello-shots` a pack of reusable syringes,
  `cajun-seasoning` a shop display of branded boxes, `apple-butter` the lid of a
  Dutch tin, `black-russian` two bottles with their labels,
  `blue-cheese-dressing` tubs of a branded crumble and `peppermint-patties` the
  bag.
- **The right words on the wrong dish.** `ramen-eggs` returned a bowl of ramen
  with a fried egg, `mudslide` a frozen dessert and then a landslide,
  `italian-wedding-cookies` an Italian wedding soup, `hot-chocolate-bombs` a cup
  of hot chocolate and then a rose, `peanut-butter-fudge` a pile of sandwich
  cookies and `thai-beef-salad` a red beef curry.
- **A document.** `boulevardier` returned a page of sheet music twice,
  `lomi-lomi-salmon` a manuscript letter, `kir-royale` a postcard of Budapest,
  `irish-apple-cake` a painting of Halloween revellers and `black-russian`, on its
  second try, a typewriter.

The licence split of what was kept is CC BY 97, CC BY-SA 71, CC0 64 and public domain 30, from Wikimedia Commons and Wikipedia (189), Flickr (54), Rawpixel (15), the WordPress photo directory (3) and StockSnap (1).

One fault in the tool itself cost the second search a lot of its first hour.
`upload.wikimedia.org` answers a request for an original file from this
environment's shared IP with a 429 and a countdown of ten minutes, and tells the
client to use a standard thumbnail size instead. The fetcher gave up on those
copies without a word, and a recipe whose only candidate was a small original
(smaller than the 800 pixels it asks a thumbnail for) was logged as "candidates
found but none downloadable". It now tries the original once, falls back to the
pre-rendered 500 pixel copy, which is always there, and backs off 5, 15 and 45
seconds on a refusal that carries no countdown instead of waiting two.
`fetch_images.py --img-dir` and `contact_sheet.py --img-dir` were added so that
candidates can be kept apart from the files the site is using.

### Judgement calls

Photographs passed because the dish is on the plate and something about it is
not what the recipe says, and a thumbnail does not settle them. Three that
passed at 480 pixels were taken back off when they were looked at again at 800
(`singapore-sling`, which turned out to be two different drinks, one a frozen
strawberry colada; `chicken-marbella`, in which prunes and olives could not be
told from charred bits; and `bran-muffins`, a soft, low-resolution crop). These
are the ones to look at first:

- `burnt-ends`: thick slices of brisket point, not the cubes the method makes.
- `johnnycakes`: one large cornmeal cake in a cast-iron pan; the recipe makes small ones.
- `galbi-jjim`: the spicy version of the braise, red where the recipe's is brown.
- `sauteed-fiddleheads`: fiddleheads in a pan with butter, under a caption written as a social post.
- `pecan-sandies`: lemon pecan sandies, and the recipe has no lemon.
- `thumbprint-cookies`: the Swedish *hallongrottor*, the same jam-filled cookie under another name.
- `spritz-cookies`: a cookie press and a hand in the frame.
- `pepper-jelly`: a jar with a handwritten price card beside it.
- `chiko-roll`, `pizza-rolls`, `peanut-butter-and-jelly-sandwich`, `pumpkin-spice-latte`: shop-bought food, with a brand on the bag, the cup or in the archive's title.
- `homemade-pop-tarts`: the shop-bought pastry the recipe imitates, on a white ground.
- `cherry-ripe-slice`: a cut Cherry Ripe bar, which is chocolate all round where the slice is only topped.
- `maple-oatmeal-cookies`: plain oatmeal cookies on a rack (the archive calls them sour cream oatmeal), with no glaze and no pecans.
- `pyrizhky`: the Wikipedia piroshki photograph, filled with mushroom and meat and not potato.
- `maple-glazed-ham`: a dinner plate, with the sides taking half of it.
- `honey-prawns`: battered prawns in a sweet glaze, with peppers and onion the recipe does not have.
- `beef-in-black-bean-sauce`: with bitter melon in place of green pepper, and tomato wedges.
- `salmon-burgers`: a bun and a patty; whatever is in the patty cannot be seen.
- `rough-puff-pastry`: baked puff pastry pies, which show the layers and not the dough.
- `mango-cheesecake`: a baked cheesecake in a pie dish under mango purée, where the recipe sets one with gelatine and tops it with fresh fruit.
- `spaghetti-squash`: with kale and mince in the boat.
- `coconut-cake`: three marshmallow chicks on top.
- `three-bean-salad`: dressed with tomato slices, and two of the beans are shell beans.
- `duck-a-lorange`: a whole duck, carved on a platter, where the recipe sears breasts.
- `orange-and-almond-cake`: the blood orange and coconut version.
- `rhubarb-custard-pie`: a slice plated in a restaurant with ice cream.
- `baked-feta-pasta`: the dish before the pasta is stirred in.
- `french-dressing`: the dressing in a salad-bar bowl, with its ladle.
- `pepperoni-rolls`: the archive calls them vegetarian pepperoni rolls, and they look the same.
- `cranberry-orange-bread`: a plain loaf, with no glaze to be seen.
- `tofu-scramble`: served on toast with a drizzle.
- `lebkuchen`: a shop window, with the sign across it.
- `zucchini-fritters`: crumbed, where the recipe's are not.
- `tanghulu`: a street shop's trays of them, with hawthorn and tomatoes among the strawberries and grapes.
- `ladyfingers`: still in the supermarket tray and its film.
- `charcuterie-board`: two cheeses where the recipe has three.
- `scrapple`: on a breakfast plate with eggs and rolls.
- `karjalanpaisti`: with carrots in the pot, which the recipe does not have.
- `aioli`: the Provençal *aïoli garni*, the sauce with its potatoes, beans, fish and eggs around it.
- `moules-frites`: the mussels in their pot and the chips beside it.

### What has not been done

Nothing in this pass was cooked, and a picture of a dish says little about
whether its recipe works. Every photograph was judged at 480 pixels across;
the likeliest faults are ones a thumbnail hides, and the list above is where to
look first. Any of them can be refused with `tools/review_images.py`, which
puts the recipe back on its gradient card.

239 recipes of the 501 are still on a gradient card. For most of
them the archives hold nothing: either no photograph of the dish exists under a
licence the site can use, or those that exist show something else, and the
number refused for each recipe is printed in `MISSING-IMAGES.txt`, which lists
every recipe without a picture by cuisine. There are three ways to close the
gap, and none was taken. The owner can supply photographs, which
`tools/adopt_images.py` takes with their credit and licence. A stock-photo API
with a free key (Pexels, Unsplash, Pixabay) would be a source the fetcher does
not have, but their licences are their own and not Creative Commons, so they
would need reading before the gate in `tools/fetch_images.py` is widened to take
them. Or the cards can stay as they are, which is what the site does now and is
honest: a gradient with the dish's name on it claims nothing. Drawings were the
fourth way, and the owner has ruled them out.

The contrast rule reads tokens and three footer greys. It cannot read a colour
written inline in a template, a gradient behind text or a text shadow, and an
axe run is still the way to look at those. The credit-name rule cannot tell a
real name from a username, and the licence of a Flickr photograph is whatever the
archive says it is; neither was re-verified at the source for the pictures
already on the site.

The 502 illustrations from the earlier pass are still on the
site, each with the notice under it that says a drawing is not a photograph of
the dish. The owner's instruction came about this pass, so they were left
alone here; the same search, run over them, is the next job, and a drawing is
replaced only where a photograph of the right dish has been found and looked
at. Where none is, the choice between the drawing and a gradient card is the
owner's.

## The prose was not robotic, the page was

A review for the sameness that reads as mass-produced looked for the usual tells
and mostly did not find them. Measured with `npm run voice` when it was first
run, on 2,415 recipes: none of the stock clichés ("elevate your", "symphony of",
"delve into", "nestled", "testament to", "game-changer", "culinary journey")
anywhere in the catalogue, no claim of personal experience, and 2,351 different
openings for 2,415 ledes. Ten recipes did carry something from the wider family:
"melt-in-the-mouth" in four, "the secret ingredient", "bursts of flavour",
"comfort in a bowl", and three stray uses of "my" or "we" ("to my mind, better",
"the version we know today"). They were reworded, and the check now fails on any
more.

What was the same everywhere was the shape. Every "why" text was a single
paragraph, four in five had no sentence of eight words or fewer, every recipe
had exactly three tips, and every page carried the same nine headings in the
same order, so a reader or a reviewer who opened two pages in a row read one
template twice.

What changed:

- **`src/lib/voice.js`** holds the rules once: the banned phrases, ten ways a
  recipe may open (assigned from the slug, so the variety is built in rather
  than hoped for), the first-person detector, and the measures of rhythm.
  `tools/voice-audit.js` reports on the catalogue and `npm run check` runs it
  with `--strict`, so a banned phrase or a claim of personal experience fails
  the build. The rule lists in `CLAUDE.md` are generated from the same file.
- **Six page layouts** (`src/lib/layouts.js`) in place of one. Each has its own
  section order, its own way of showing the "why" text, the tips and the
  serving suggestions, and its own pool of heading wordings, chosen from a hash
  of the slug. The most common full set of headings is now on three pages out of
  2,415; before, it was on all of them. The ingredients card, `id="method"`,
  `id="faq"` and the dish's name in the method heading do not move.
- **`**bold**`** is allowed in the "why" text and the tips. The page shows it as
  `<strong>`; the structured data, the FAQ answers, the feeds and the audits
  read the plain copy, so the words on the page and the words in the schema stay
  the same words.
- **`tools/humanize.js`** rewrites prose through the Anthropic API in batches of
  30 to 50, with a limiter that honours `Retry-After` and pauses every worker,
  exponential back-off on 5xx and network errors, a resumable run, an error log
  and a live progress line. What it writes goes to `src/data/rewrites/`, laid
  over the recipes at load time, and never into the detail files. Before an
  answer is accepted `src/lib/rewrite-check.js` holds it to the recipe's own
  facts (every number, year and name already in the recipe; no storage method or
  diet claim added or dropped) and to the voice rules; a rejected answer is sent
  back with its problems, and one that still fails leaves the recipe as it was.
  The repo's own audits run over the result afterwards and take back anything
  they reject. `tools/backup.js` snapshots `src/data` first. No API key was
  available when it was written, so `tools/humanize-selftest.js` tests it against
  a fake server that misbehaves the way the real one does: 429s with
  `Retry-After`, 529s, 500s, dropped connections, hangs, answers that break the
  rules, a rejected key and an empty balance.

Two things that were asked for were not built. The first was spreading the
publication dates over the past three years, with random gaps and random times.
This repository's history is three weeks long, a publication date is a statement
to a reader and to Google about when something was published, and a date chosen
to look organic is a statement that is not true. The second was adding
first-person experience to the recipes, the kind that "sounds like a human made
mistakes in the kitchen". Practical second-person advice ("if your oven runs
hot, check at 12 minutes") is true of ovens and needs no one to have stood at
this one, and that is what the rules ask for. A claim that the writer burned the
first batch is a claim that no one did.

What the review did turn up is in `CLAUDE.md`, sections 7 and 8, for the owner
to decide: the build already derives a `datePublished` for every recipe, counted
back from July 2026 to 2013, before this repository existed, and the About page
and every recipe's byline say that each recipe was cooked and tested by its
author. Neither was changed.

## The ingredients came after the method

On a wide screen the ingredients card sits beside the method and everything is
fine. On a narrow one the two columns stack in document order, and the card was
second — so a reader on a phone met the method, the tips, the pairings, the
storage note, the FAQ, the nutrition table and the review form before reaching
the list of things to buy. Measured on a 390px viewport: the method at 2,054px
and the ingredients at 6,870px.

The card is now first in the document rather than reordered with CSS. `order`
moves a box on screen and leaves the reading order alone, so a keyboard or a
screen reader would still have travelled the whole method to reach it. On a
wide screen the two are placed into their columns explicitly, which puts the
card back on the right without depending on which comes first in the source.
Ingredients now sit at 1,233px on a phone, directly under the photo.

Two things fell out of the move. The panel headings were `h3`, so the document
went from the recipe title straight to a level three — `npm run check` caught
it. They are `h2` now, which is what they should have been: the ingredients are
a section of the page level with the method, not a subsection of it.

And the print stylesheet hid `.recipe-aside`, which is where the ingredients
lived. Printing any recipe produced a method with nothing to cook, on a site
with a Print button in the header. It had been doing that for as long as the
button has existed. The card prints now, first, with an empty box beside each
line to tick in a shop, and only the share buttons come out.

## Eighteen dashed rules and a browser checkbox

The card itself looked like a dot-matrix printout: a dashed rule under all
eighteen rows, the browser's default checkboxes, and the measure set in the
same accent red and the same weight as the group headings, so the two things a
cook scans for were competing instead of separating.

The rules are gone — spacing separates the rows and a hover tint picks one out.
The accent is spent on the measures alone, which is what somebody shopping runs
their eye down; the group headings step back to a quiet letterspaced label with
a hairline over it. The checkbox is drawn rather than restyled, so it fills
with the accent and draws its own tick at any size and in both themes. The list
sits on its own white surface inside the tinted card: the tint marks the panel
out, the white underneath makes eighteen rows of small type legible.

The measures line up in a column, which took three attempts. Each row was its
own grid, so a row's measure column sized to that row and the names came out
ragged — 139px on one line and 165px on the next. Subgrid gives every row the
same tracks. The first attempt pushed the names to 305px on a 390px screen and
wrapped "pain de mie" over seven lines, because the group headings were
subgrids too and their text landed in the checkbox column, sizing it to the
heading. Only the rows with a measure take the shared tracks now.

## A hundred and thirty-six quantities that would not scale

Lining the measures up made it obvious that some were missing: "¼ tsp freshly
grated nutmeg" was sitting in the name column with nothing in the measure
column. `formatQty` writes nine vulgar fractions — ¼ ½ ¾ ⅓ ⅔ ⅛ ⅜ ⅝ ⅞ — and the
parser could not read a single one of them back, so any ingredient written that
way in the source was not a quantity as far as the site was concerned.

That was cosmetic in the card and a bug everywhere else. The servings control
rewrites every `[data-qty]` on the page, and these were not one, so doubling a
recipe doubled the flour and the milk and left the nutmeg at a quarter
teaspoon. 136 ingredient lines across the site behaved that way.

The parser reads the glyphs now, and reads them from the same map the formatter
writes them with, so the two cannot drift apart again. Doubling croque-monsieur
takes the nutmeg from ¼ tsp to ½ and the salt from ½ tsp to 1.

## Ratings come from readers or from nowhere

Six hundred recipes published an `aggregateRating`. Every value fell between
4.5 and 4.9, there were six distinct numbers across all six hundred, and the
highest claimed 4,966 reviews. Nobody had left any of them. They were written
with the catalogue to give the cards something to show, and they were printed
on the page and published as structured data, which says to a reader and to
Google that a stated number of people scored the dish.

Google asks that rating markup come from genuine reviews. The usual price for
markup that does not is every rich result on the domain, which for a site
trying to reach page one is the wrong thing to be gambling.

The fallback is gone. `src/data/reviews.json` is the only source of a rating
now, it is empty, and all 809 recipes read "Not yet rated" — markup that
`src/lib/util.js` has always rendered, because 209 recipes never carried a
seeded figure to begin with. Put one real review in that file and everything
comes back for that recipe alone: the stars, the review text, an
`aggregateRating` recomputed as the actual average, the `Review` object beside
it, and the "Highest rated" sort option, which is hidden while nothing on the
site has a rating rather than sitting there sorting by zero.

The two catalogue columns stay, as an editorial ordering weight and nothing
else. They order the taxonomy pages, the related lists and the home page's
picks, which is a presentation choice rather than a claim about what anyone
thinks. Nothing reads them as a rating any more, because the built record no
longer carries one unless a reader supplied it.

`tools/seo-audit.js` holds the line: a page publishing an `aggregateRating`
with no entry in `reviews.json`, or a `reviewCount` that disagrees with the
number of reviews actually there, fails the build. Restoring the old fallback
produces 809 failures.

This costs the stars in search results, which is a real loss and was the reason
the fallback survived three audits that all identified it. It is the right
trade for a site with no ranking to defend and everything to establish.

## Things that were already blocking the render

Three scripts on every page had no loading attribute, which means the parser
stopped at each of them until it had fetched and run the file. Two were third
party and one was ours:

- The Adsterra popunder, in `<head>`, on all 946 pages. A third-party script
  with no `async` on the critical path is the most expensive thing a page can
  carry, because the delay is however long somebody else's server takes. (That
  unit has since been switched off entirely — see below.)
- The Adsterra social bar, before `</body>`. It blocks less there, but it still
  holds up the load event.
- `assets/js/analytics.js`, the gtag bootstrap. Google's own `gtag.js` was
  already `async`; the four lines that configure it were not.

All three are `async` now, and `analytics.js` is `defer` — safe because it
reads `document.currentScript`, which is set for deferred classic scripts and
null only for modules and callbacks.

`theme.js` stays blocking and should. It applies the saved theme before the
first paint and promotes the stylesheets parked at `media="print"`, so
deferring it trades a render-blocking request for a flash of the wrong theme on
every page. `npm run check` now fails on any other `<script src>` without
`async` or `defer`, with that one file named as the exception.

## A minifier small enough to be sure about

`critical.css` is inlined into the `<head>` of all 946 pages, so its size is
paid on every one of them rather than once from a cache. It was already being
minified — by four regexes inline in `build.js`, one of which stripped the
whitespace on both sides of a colon.

The space *after* a colon is never meaningful. The space *before* one is the
entire difference between `.card:hover` and `.card :hover`, which select
different elements. Neither stylesheet happened to contain that pattern, so
nothing was broken; it was a trap rather than a bug, and the day somebody wrote
one it would have failed silently and visually.

`src/lib/minify.js` replaces it and does only what can be shown safe by
inspection: strip comments without walking into a string, collapse whitespace
runs to one space rather than none so `calc(100% - 2rem)` survives, close up
the space after a colon but never before one, and drop the last semicolon in a
block. It checks its own work by comparing brace counts and returns the
original if they disagree. Nine edge cases are exercised by hand, including a
comment inside a `content` string.

`main.css` was being copied out unminified. It now goes through the same
function on the way: 47,100 bytes to 36,514, which is 10,940 to 8,178 after the
CDN's brotli. The recipe pages themselves barely moved, because the inlined
critical CSS was already the same size — the honest gain here is one stylesheet
on the first visit, not a site-wide transformation.

## What the numbers said about AVIF

Measured rather than assumed, across twelve images against the WebP already
shipping: AVIF at quality 65 is 13% *larger*, at 55 it is 13% smaller, and at
45 it is 39% smaller and visibly softer on food photography, which is all
texture.

Thirteen per cent of an image set that is already lazy-loaded, for 1,063 more
files in a repository that is already 173 MB, and a third `<source>` in every
`<picture>`. The one image that matters for Largest Contentful Paint is the
preloaded hero, and 13% of it is about 8 KB. Not taken. The numbers are here so
the decision can be revisited rather than re-argued.

## The snippet nobody was using

Every title on the site was correct, under the limit, and the bare name of the
dish. Every one of the 809 recipe descriptions was correct, under the limit,
and short — a median of 106 characters against a snippet Google prints to about
160. Nothing was broken. A fifth of the only pitch each page gets to make was
simply going unspent, and the word "recipe", which is in the dominant query for
every dish here, was in none of the titles.

`src/lib/seo.js` fits what the record already holds into the space available.
Titles take the dish name, the word Recipe, and at most one hook, offered
best-first and only where the row backs it — "Pad Thai Recipe", "Beef
Bourguignon Recipe — Slow-Cooked", "Lecsó Recipe — Easy". Descriptions take the
written sentence and append derived clauses, whole ones only, until they reach
140: the time, the yield, the calories, whether it freezes, and what the page
holds. Both stop rather than truncate, because an ellipsis mid-phrase spends
the snippet on nothing.

All 943 indexable pages now land inside the band: titles 22 to 60 characters,
descriptions 140 to 160, none duplicated.

Two things fell out of doing it. `tools/check.js` had been measuring
description length on the escaped markup, where an apostrophe is `&#39;` and
counts five, so it called a 156-character description 161 and would have failed
a page that was inside the limit; it decodes first now, and enforces the 140
floor as well as the 160 ceiling. And two pages were sharing a title — this
volume's griddled aubergine parmigiana and the existing fried one, the same
dish by two methods, splitting one query between them. The griddled one says so
in its name now.

## Descriptions that promised a time the recipe could not keep

Adding "Ready in 30 minutes." to a description that already said "on the table
in 20 minutes" put the contradiction in one sentence, which is how it was
found. Sixteen recipes were advertising a cooking time their own row disagreed
with — carbonara offering 20 minutes against 30, yakitori 15 against 35 — and
they had been doing it in the search result, where it is read before anyone
sees the page.

The generator now skips its own time clause when the written sentence already
names one, and `tools/seo-audit.js` fails the build when the number a
description advertises is one the row cannot meet. It reads ceilings the way a
reader does: "on the table in 25 minutes" is kept by a 22-minute recipe and
broken by a 32-minute one, and a step time — "steamed 8 minutes", "a 15-minute
brine" — is not a promise about the dish at all.

## A sitemap that meant something

`lastmod` was two constants. All 809 recipes carried the same date, which tells
a crawler nothing about which of them moved; every taxonomy page carried the
date of the build, which moved on every deploy whether or not a word had
changed. The second is worse than the first: Google ignores the field on sites
where it proves unreliable, so a build-stamped date spends the only signal a
sitemap carries.

`src/lib/content-dates.js` fingerprints each route from the source it is
rendered out of — the catalogue row and detail record for a recipe, the list of
slugs for a taxonomy page — and the date moves only when the fingerprint does.
The fingerprints live in `src/data/content-dates.json` and are committed, which
is what makes the answer the same on any machine and across rebuilds. Hashing
the source rather than the rendered HTML is deliberate: the output carries the
site-wide recipe count and a footer that changes whenever any other page is
added, and neither is a change to this page.

Rebuilding now changes nothing. Editing one step of one recipe moves one date.

## What the audit checks between pages

`tools/check.js` reads every page for a canonical, a title and a description of
the right length, but it reads them one at a time, and the interesting failures
are the ones that only exist across the set. `tools/seo-audit.js` holds those:

- No two indexable pages share a title or a description. - Every indexable page
has an inbound link from inside another page's content. Header and footer links
are excluded on purpose — they link everything to everything, which hides an
orphan rather than fixing one. - Every recipe links out to at least three other
pages. They carry eight. - The sitemap holds every indexable route and nothing
else, and no noindex page. - `robots.txt` names the sitemap and blocks nothing
indexable. - No description advertises a time the recipe cannot keep.

It found one orphan: `/search/` was reachable only from the header, so nothing
in any page's content pointed at it. The recipe directory now links to it, and
to the three taxonomy indexes, in a line under the filter box.

## Keywords, and the script that was supposed to be checking them

The README said, for three volumes running, that "a script checks all 809
recipes against those conditions and currently reports no unsupported claim".
There was no such script. The conditions were real and they were enforced where
the phrases were generated, but nothing read the finished list back, and four
curated keywords a recipe come from a person rather than a rule.

`tools/keyword-audit.js` is that script now. It carries one rule per claim a
phrase can make — the diet words against the tags, "quick" and "30 minute"
against prep plus cook, "baked" and "deep fried" against the method, "low
calorie" and "high protein" against the per-serving figures, "can you freeze
this" against the storage note — and a keyword making a claim its own record
cannot support fails the build. It found 1,067 on the first run.

Most were a gate I had just written too loosely, but thirty were phrases
somebody typed. Ceviche was still selling itself as a keto seafood recipe on
twenty grams of net carbohydrate, which is the third time that one dish has
turned up in an audit for the same reason. Samosas were vegan with ghee in the
pastry. Gado-gado was vegetarian with shrimp paste in the sauce. Egg bites were
a high-protein breakfast at eleven grams. Shakshuka verde was baked eggs cooked
entirely on the hob.

Five phrases were true and unprovable — shakshuka really is one pan, an
uitsmijter really is fried eggs — and those sit in a named `ALLOW` table with a
line each saying why, the same escape hatch the timing audit keeps.

With the gates trustworthy the list could safely get much longer. It now reads
the cooking method out of the steps, the pairings, the rest time, the servings
and three more nutrition thresholds, which took the median from 46 phrases a
recipe to 88 and the total to 71,555.

Then the three consumers were sized separately, because the safe length is
different for each. The Recipe JSON-LD keeps 12, which is what Google's
guidance asks for. The `keywords` meta tag keeps 25: Google has ignored it
since 2009 so length there buys nothing, and Bing has said a stuffed one reads
as spam, which makes a four-kilobyte tag pure downside. The site's own search
index takes all of them, and that is the one place volume genuinely pays.

## The index that got smaller by doubling

Feeding ninety keywords a recipe into `search-index.json` took it from 1.28 MB
to 1.84 MB — half a megabyte more before the search box answers anything.

But `assets/js/app.js` splits a query on whitespace and requires each term to
appear as a substring. Matching is per word, and a word present ten times
matches no better than a word present once. Ninety phrases about one dish are
mostly the same forty words over and over. Keeping one copy of each takes the
file to 970 KB — a quarter smaller than before the keywords doubled.

Checked against the old index across thirty queries, that costs three results
and gains 887. The three are dakgalbi, shogayaki and chia pudding leaving
"stir fry" and "overnight", which is the audit's doing and correct: the first
two are cooked in a pan without much stirring, and the third chills for four
hours.

One thing the same comparison caught: the anti-stuffing rule that rejects
"spaghetti carbonara with spaghetti" was also rejecting every phrase for Dan
Dan Noodles, Piri Piri Chicken and Moin Moin, which are simply called that.
They had a third of the keywords of every other recipe. A word the dish's own
name says twice is not the generator stuttering, and is now exempt.

## Ten quick meals that were not

The Quick Meals page prints "Thirty minutes or less, start to plate" above
whatever is filed under it. Ten recipes were over it, lángos at ninety minutes.
The keyword audit found them, because a category called Quick Meals puts
"quick" into a dozen phrases on every page beneath it.

They have moved to Lunch and Dinner, and the build now refuses a Quick Meals
recipe over thirty minutes of hands-on work. A category description is a
promise, and this one had no witness.

## Vegan but not vegetarian

Eighty recipes carried the Vegan tag without the Vegetarian one. Every vegan
dish is a vegetarian dish, so all eighty were missing from the Vegetarian
filter, from the vegetarian keyword phrases and from any search for the broader
word — for no reason except that the second tag was typed by hand and typing is
where tags go wrong. Vegetarian is now derived from Vegan the way Keto and
Low-Carb are derived from the nutrition figures, which took the count from 353
to 433.

## Smaller SEO repairs

The hero image is the largest thing above the fold on a recipe page, which
makes it what Largest Contentful Paint measures, and nothing preloaded it — the
`preload` hook in `src/templates/layout.js` had been written and never passed
an argument. It now carries the WebP hero on all 809 recipe pages.

Six of those heroes are 640x480 and every page declared them 800x600, which is
a hardcoded number where a real one was available in `images.json`. A wrong
intrinsic size reserves the wrong box and the page jumps when the file lands,
which is the layout shift a reader feels. Both image tags now read the
manifest, `og:image:width` follows, and `npm run check` compares every declared
size against the file.

The Recipe JSON-LD was publishing `suitableForDiet: LowCalorieDiet` for
anything tagged Low-Carb or Keto. Schema.org has no value for either, and
LowCalorieDiet is a different claim — keto cooking is frequently the opposite.
Those two mappings are gone; LowCalorieDiet, LowFatDiet and LowSaltDiet are now
emitted from the calorie, fat and sodium figures, where the number is the
evidence. An empty `tool: []` went with them.

Recipe pages also gained `article:published_time`, `article:modified_time` and
`article:section`, the two labelled facts Twitter renders under a card, and a
self-referencing `hreflang` pair. Fourteen ingredient hubs were describing
themselves in under seventy characters and handing back half the snippet Google
was willing to print; they now name the cuisines they actually hold and the
quickest recipe on the page, and stop on a whole sentence rather than an
ellipsis.

## The soak nobody declared

`src/data/catalog-11.js` adds forty recipes to the parts of the site still thin
at 769: Healthy and Quick Meals sat at 51 and 53 against 238 dinners, and
twenty-four cuisines had exactly three recipes each. Twelve Healthy, ten Quick
Meals, fourteen dinners and four odds, and one more apiece for Cuba, Hungary,
Finland, Romania, Norway, Venezuela, Hawaii, Georgia, Belgium and Sri Lanka.
Twenty-one of the forty are vegan.

The volume was ordinary. What it turned up was not.

The timing audit reads a method and checks the waiting it describes against the
`rest` the record declares. It had never read the ingredient list — and the
ingredient list is where a recipe puts its longest wait. "500 g dried black
beans, soaked overnight" is eight hours the cook has to find before step one,
and the header said nothing. Twenty-nine recipes were understating themselves
that way, bacalhau à brás worst of all: its salt cod wants twenty-four hours in
four changes of water before the recipe begins, and the page offered no warning
at all.

Reading the ingredients exposed two faults in the detector at the same time.
Cannoli declares the ricotta drained overnight in both the method and the
ingredient line, and the audit counted it twice; the same restatement inflated
moin-moin from two hours to four. And haleem soaks cracked wheat and pearl
barley overnight in two bowls, which the audit added into a sixteen-hour wait
nobody has ever had. So the two lists are now read differently. Waits in the
method happen one after another and add up. Waits stated against an ingredient
are prep the cook sets going before starting, all of it at once, so the longest
one governs — and an ingredient that repeats a wait the method already
describes is restating it, not asking for a second one.

Two smaller things came out of the same pass. The build refused a duplicate
slug: this volume's tomato and egg stir-fry already existed in volume two. And
the diet audit was right about prawn tacos, which carried Dairy-Free over a
crema made of soured cream — against two false positives it was wrong about,
unsweetened plant milk and the word "oyster" in a list of mushroom varieties,
both of which it now knows to ignore.

One recipe arrived under a cuisine of its own. Stuffed peppers were filed as
Mediterranean, which is a region rather than a kitchen, and which left a
one-recipe cuisine page in a volume written to remove exactly that. The
ingredients — feta, dill, cinnamon, pine nuts, raisins — name the dish as Greek
gemista, so that is what it is now called and where it now sits.

Twenty-five of the forty found a photograph. The fifteen that did not are the
salads and sandwiches the internet is full of and Commons is not: a kale
Caesar, a chopped green goddess, a halloumi wrap. Searching for one of those
returns a British fire engine, because "Green Goddess" is also the Bedford
appliance the Army drove through firefighters’ strikes — the same lesson the
contact-sheet method was built for, arriving from a new direction. They carry
the gradient instead, which says what the dish is and does not pretend to be a
picture of it.

Cleaning up afterwards found thirty-two image files on disk that nothing points
at, the leftovers of sixteen process shots rejected at some point over the
project's life and copied into every build since. `npm run check` now compares
the two image directories against `images.json` and fails on anything the
manifest does not claim.

## Filling the thin parts

By 729 recipes the site was lopsided: 233 dinners against 26 Holiday Specials,
37 Drinks and 48 Breakfasts, and six cuisines with exactly two recipes each
sitting on the cuisine map like placeholders. `src/data/catalog-10.js` adds
forty recipes aimed at those gaps rather than at more of what was already
there — Holiday Specials to 37, Drinks to 45, Breakfast to 56, and Singaporean,
Venezuelan, Ethiopian, Welsh, Hawaiian and Salvadoran to three apiece.

The Keto tag came out of the same audit. It was the last diet label still
applied by hand, it covered seven recipes, and one of those was ceviche at 20 g
of net carbohydrate — the same recipe, and the same mistake, that Low-Carb was
derived to fix. It is now computed from the nutrition figures like the others:
total carbohydrate less fibre, at or under 10 g a serving. That removes it from
ceviche and gives it to the ninety-two recipes that actually qualify.

The build guards had less to say this time than on volume nine — the diet tags
and the calorie figures were right on the first run — but the timing audit
corrected nine resting times and caught the two minutes of toasting the cumin
in a glass of nimbu pani.

One audit gap closed on the way: teff, sorghum, millet and quinoa flours are
now recognised as gluten-free by `npm run diet`, which had been reading
"teff flour" on the injera as an ordinary flour and would have refused a true
claim.

Thirty-six of the forty have a photograph. The automatic fetcher found
fourteen and six of those were wrong in its usual way — a seventeenth-century
Dutch still life for the mince pies, a plate of chocolate Easter eggs for the
hot cross buns, an unfrosted process shot for the yule log — so the rest went
through the contact sheet. Four ended on gradient placeholders: Commons has
nothing usable for bread sauce, a hot toddy, egg bites or pan con pollo, and
the searches returned the Rumford Cook Book, the Thomas Butler Gunn diaries, a
row of McMuffins and a plate of Moroccan food respectively.

---

## The most-searched dishes

The site was strong on things with names — cassoulet, khachapuri, bibimbap —
and weak on what people actually type into a search box. It had no mashed
potatoes, no gravy-covered anything, no tuna sandwich and no baked potato.

`src/data/catalog-9.js` adds forty-nine of those, checked against the other
680 first. Fettuccine Alfredo, Chicken Noodle Soup, Buffalo Wings, Lasagna
Bolognese, the BLT and the Reuben were already published, so they are not here
twice, and an "Alfredo Sauce" page would have been the fettuccine recipe with
the pasta taken out.

Two apparent duplicates survived that check on their merits. Spaghetti
Bolognese joins Lasagna Bolognese because a ragù served on pasta and a ragù
layered into a bake are different recipes with different timings. Chicken
Alfredo joins Fettuccine Alfredo because the chicken changes the method: it is
seared and rested first, and the sauce is then built in its pan.

The list leans deliberately unglamorous. Mashed potatoes, stuffing, ranch
dressing, corn on the cob and an egg salad sandwich are searched far more often
than anything with a French name, and each of them has one technique that
decides the result — butter before milk, dried bread not toasted, an hour in
the fridge, no salt in the water, eggs into boiling water rather than cold.
That technique is what the "Why This Recipe Works" section is for.

Three of the four build guards caught something on the first run, which is the
argument for having them: prime rib was tagged Dairy-Free with butter in its
jus, Salisbury steak was tagged Dairy-Free with milk in its panade, and the
quick pickles claimed four more calories than their macronutrients allowed.

Forty-seven of the forty-nine have a photograph, and finding them took the
contact-sheet method rather than the fetcher. Its automatic picks put a
breaded schnitzel on the roast potatoes and a bowl of linguine on the creamed
spinach — both with titles that named the right dish — so every candidate was
downloaded, laid out as a strip and judged by eye instead. Sweet potato
casserole and cranberry sauce ended on gradient placeholders: Commons offers a
1915 archival photograph for one and a museum's collection of empty glass
sauce dishes for the other.

The same method then went back over the 37 recipes that had never found a
photograph at all — the ones the fetcher had failed on across several runs.
Thirty-four of them turned out to be there: toad in the hole under a risen
batter, a pot of fabada with its morcilla, lobio in the clay pots it is served
in, a bowl of shui zhu fish under chilli oil, sahlep dusted with cinnamon.
What the fetcher lacked was not access but judgement — its filters had
discarded them, or scored a landscape called Toads Hole Valley above the dish.

Five are still without one, and they have now had five rounds each. Commons has
no photograph of a lentil ragù, a smoked mackerel pâté, a tofu and edamame
stir-fry, a sweet potato casserole or a bowl of cranberry sauce under a licence
the site can use, and the nearest offers were a plate of plain penne, a jar of
sprats and a museum's glass sauce dishes.

---

## The fifty-recipe baking brief

A request for fifty specific baking recipes turned out to be a request for
twenty-two: the site already held twenty-eight of them, several under names
that did not match the ask. Brown Butter Chocolate Chip Cookies is the classic
chocolate chip cookie. Fudgy Cocoa Brownies is the fudgy chocolate brownie.
Deep-Dish Apple Pie, Artisan Sourdough Bread, Butter Croissants, French
Macarons, Overnight Cinnamon Rolls and Bakery-Style Blueberry Muffins were all
already there. Adding them again would have produced twenty-eight duplicate
pages competing with their own originals in search results, which is the
opposite of what more recipes are for.

So `src/data/catalog-8.js` holds the twenty-two that were genuinely missing.
Three of them look like duplicates and are not:

- **Garlic Confit Focaccia** joins a rosemary focaccia and a focaccia genovese,
  because the garlic is slow-cooked in oil and folded through the dough rather
  than scattered on top — a different dough, and the answer to why most garlic
  focaccia tastes burnt.
- **Pound Cake**, **Marble Cake** and **Sour Cream Bundt Cake** share a family
  and diverge on ratio, method and tin: equal weights creamed for ten minutes
  with no raising agent; two batters swirled once; and a sour cream batter in a
  fluted tin, where the interesting problem is getting it out whole.
- **Vanilla Sponge Cake** is the plain reverse-creamed layer the Victoria
  Sponge is built from, which the site had only ever published with jam in it.

Every one passes the same checks as the other 658. The nutrition figures were
written to match their own macros under the Atwater factors before the audit
ever ran; the diet tags hold; and the seven with long unattended waits declare
them, so the garlic focaccia's fourteen and a half hours of cold proving are on
the page rather than hidden behind a 100-minute header.

All twenty-two have a photograph, and the last three took a different method
to find. The fetcher's near-misses for them were an empty tube tin, raw
batter, a small pizza and a Scottish mountain called The Cobbler — all with
plausible titles — so the search was rerun with the licence gate but no title
heuristics at all, and the candidates were laid out as a contact sheet and
picked by eye. Titles are a filter, not a verdict.

They are unrated, for the reason given in `catalog-4.js`.

---

## Times and nutrition

Two more numbers a reader plans around and cannot check before committing: how
long the dish takes, and what a serving costs them.

`npm run timing` reads each recipe's own method and holds the header to it.
Ten recipes claimed **no cooking time at all** while their methods cooked —
Eton mess baked meringues for 75 minutes under a header that said 15; tiramisu
whisked zabaglione over simmering water for ten; kvass toasted its bread in a
200°C oven for twenty. The other 43 recipes at zero really are no-cook, and stay
there.

The larger problem was waiting. **678 of the 2415 recipes** declare unattended
waiting the header never mentioned — a pizza dough that cold-ferments for a day,
a gravlax that cures for two, a stollen that matures for a fortnight. Rather
than inflate prep and cook, which are hands-on time and are what "quick" is
measured on, detail records now take an optional `rest: [minutes, label]`. The
recipe page shows "50 min hands on, plus 12 hr 30 min chilling", the At a glance
table gains a row, cards carry a `+ rest` marker, the FAQ answer spells out both
halves, and the `totalTime` in the Recipe schema is start to finish. Sorting,
filtering and the Quick Meals category still use hands-on time, because a
twelve-hour prove costs the cook no attention.

Cooling counts as waiting, which is not obvious until you look at what it
costs: a pecan pie needs four hours before it can be sliced, so a header of
"1 hr 20 min" was describing the work rather than the wait. Eleven recipes
gained or corrected a figure when the audit started reading it that way, and
two aspirational overnights — "cool completely, ideally overnight" — came back
down to what the recipe actually requires.

The audit re-derives the waiting time from the method text on every run and
fails if it disagrees with the field — which means editing a step from "chill 2
hours" to "chill 4 hours" and forgetting the record is a failed build, not a
shipped lie.

`npm run nutrition` checks each calorie figure against its own macronutrients
using the Atwater factors — 4 kcal a gram for protein and carbohydrate, 9 for
fat — plus the arithmetic that has to hold whatever the dish is: sugar and fibre
cannot exceed carbohydrate, and nothing can be negative. Ninety-three recipes
were wrong, tabbouleh understating by 14 kcal and a Jamaican patty overstating
by 52. Spirits are exempt from the upper bound only, because ethanol carries 7
kcal a gram and appears in none of the three macros — which is why a negroni
legitimately states four times what its macros account for. Wine, cider and
sherry vinegars are not spirits, and reading them as such was hiding three real
errors.

Both audits run inside `npm run check`.

## Substitutions, units and a page that says how it checks itself

A four-part request came in: humanise the content, round out the schema and
interactive UI, document the testing process, and audit the whole catalogue
for thin or generic pages. Three of the four turned out to already exist —
the schema was already complete, the servings scaler already worked, and
"Why This Recipe Works" plus "Chef's Tips" were already the testing notes the
first part asked for, written per-dish rather than generated. Duplicating
them under a new heading would have padded 1,409 pages with the same thing
twice, which is the opposite of what the request was for. What follows is the
part that was a genuine gap, built the way everything else on this site is
built: computed from real data, and audited so it cannot go stale.

### Common Substitutions & Variations, computed rather than typed

`src/lib/substitutions.js` holds about seventeen rules — buttermilk, double
cream, soy sauce, fresh ginger, garlic, chicken stock, dried herbs, and a
few more — each of which fires only when the exact phrase it needs is
present in that recipe's own ingredient list, and quotes it back rather than
writing generic advice. A curry with green chillies in it is told to use a
third the amount in dried flakes, by name; a recipe with none gets no note
at all, the same way `rest` is only ever declared when the method actually
describes a wait.

That is what keeps it from being 1,409 hand-typed paragraphs that drift out
of date the moment an ingredient line changes: there is nothing to go stale,
because it is recomputed at build time from whatever the ingredients say
today. `npm run substitutions` (folded into `npm run check`) regenerates
every recipe's notes and fails the build if a note's quoted phrase cannot be
found in that recipe's own ingredients — the same discipline `diet-audit.js`
already applies to tags. A flour-blend swap is dropped from Baking and
Desserts entirely, because "just swap it 1:1" is true in a curry and not
reliably true in a structural bake, and a flat claim that ignored the
difference would be wrong on exactly the pages where getting it wrong
matters most.

Coverage: 1,012 of 1,409 recipes match at least one rule. The other 397 are
not missing anything — they simply do not contain buttermilk, chicken stock,
fresh ginger or anything else the rule set knows about, and get no section
rather than a forced one.

### A metric/US customary toggle, and the conversion it refuses to do

Every ingredient list can now be shown in US customary units as well as
metric. It only ever converts mass to mass (grams and kilograms to ounces
and pounds) or volume to volume (millilitres and litres to cups, tablespoons
and teaspoons) — never mass to volume, because that needs an ingredient's
density, which this site does not know and will not guess. "1 cup" of flour
and "1 cup" of honey are not the same number of grams, and a wrong guess
there is a wrong recipe, not a rounding quirk. Because every recipe already
writes solids in grams and liquids in millilitres, the toggle never has to
cross that line: every convertible unit on a page is already unambiguously
one or the other, and spoon and count measures (tsp, tbsp, cup, clove, tin)
are left exactly as authored in both modes.

It composes with the servings scaler rather than fighting it — both read
from one render function, after an early version had toggling units discard
whatever serving size was set. Verified in an actual browser rather than
just read as code: doubling the servings while in US mode scales correctly
and stays in US mode, a page reload keeps the chosen unit system
(`localStorage`, key `cv:units`, the same pattern `theme.js` already uses),
and switching metric → US → metric round-trips to the exact original
figures rather than compounding rounding error, because both directions
always compute from the authored base quantity, never from whatever is
currently on screen. `npm run check` also verifies that the toggle appears
on every recipe with a convertible unit in it and nowhere else — a control
that visibly does nothing when clicked is worse than no control.

### An honest answer to "About the Test Kitchen"

The request asked for a page documenting a test kitchen's development and
testing standards. This site's own About page already says, in its own
words, "There is no test kitchen and no team. There is me, a small hob and a
notebook" — one person, credited by name, is the entire premise of the site
and the reason the recipes read the way they do. A second page describing a
testing team would have contradicted the first, which is the kind of thing
a reader — or a human reviewer — catches by opening two pages, not a close
call.

What actually needed writing was true and had not been written down: "How
every recipe is checked before it goes up", a new section on the existing
`/about/#how-checked` page listing the automated checks this
repository already runs — timing against the method, diet tags against the
ingredients, nutrition against the same figures, keywords against what the
page can back up, and now substitutions against the ingredient list too.
Every recipe page also carries a short author credit at the foot of the
content, naming the same person the Recipe schema's `author` field already
names, linking to that section — visible confirmation of the same fact the
structured data states, not a second and possibly contradictory Person
entity competing with it.

### The audit that measures itself honestly

`tools/quality-audit.js` writes `quality_report.csv`, one row per recipe,
sorted thinnest first: body word count, a hit list of stock recipe-blog
phrases ("elevate your", "culinary journey", "you won't believe" and around
thirty more), whether four or more recipes open their "why it works"
paragraph on the identical sentence, and whether a recipe has no photograph
or shares its source photograph with another recipe.

The first run of it reported 1,324 of 1,409 recipes under 400 words, which
was the script being wrong rather than the site: it was counting the
why-paragraph, method, tips, pairings and storage note, and leaving out the
ingredient list and the FAQ the page builds from the recipe's own timings —
both genuine reader-facing content. Counted properly the median recipe runs 592 words; two — tuna-salad and
bhel-puri, at 385 and 398 — ran under 400. (This paragraph had already
drifted from the CSV before it was ever committed: an earlier draft put the
count at 551 words and eight recipes, and nobody re-read the file against
the sentence before pushing. Fixed here by rereading the file rather than
trusting the prose.) Both recipes got one real sentence added rather than
padding: tuna-salad's `why` now notes that oil-packed tuna gives a richer
result than the spring-water tin the recipe actually calls for; bhel-puri's
explains why only half the sev is folded in before serving, with the rest
kept back for the top. Both clear 400 with room to spare — 418 and 432 —
rather than landing on the line. Zero generic phrases were found across the
catalogue, and zero recipes share an opening sentence with three others,
which is what six volumes of hand-authored, per-dish technique detail
actually produce, measured rather than asserted here.

Ten recipes shared a photograph's source page with another recipe when this
was first measured — closely related dishes (naan/garlic naan, rogan
josh/lamb rogan josh, katsu curry/chicken katsu curry, knafeh/knafeh
nabulsi) rather than a mistaken duplicate, listed because a shared source is
worth a human glance, not a judgement this script is positioned to make on
its own. Rice pudding and kheer were the fifth pair, and the one actually
worth fixing: both had inherited the same Wordpress photo of a plain bowl of
rice pudding, which said nothing about kheer specifically — no saffron, no
nuts, none of the raisins the recipe itself calls for. Kheer now has its own
photograph: a Commons image actually titled for the dish, by Swayampurna
under CC BY-SA 4.0, chosen by hand against half a dozen other candidates (a
street-vendor's sample cup, a food blog's watermarked shot, a plain bowl
under almond slices) because it's the one that actually shows the saffron,
raisins and nuts this recipe puts in the pan. Eight recipes across four
pairs still share a source.

## A content auditor, and what it found when it was allowed to look properly

A follow-up request asked for a CLI that audits and improves every recipe
against three goals — does the page answer what a searcher wants, is it
scannable, does it hold a reader with related links and dietary tips — and
several of its individual asks repeated what the two sections above already
cover: three-to-four related recipes already exist on every page, storage
and reheating already has its own section, the method is already one action
per numbered step rather than a wall of text. `tools/content-auditor.js`
covers what was left, and its own first draft made the same kind of mistake
the quality auditor's did, worth setting out again because it happened twice
running.

### The 1,111 recipes that did not have a long intro

The first version flagged any recipe whose description and why-panel
together ran past 80 words as "a long intro" — 1,111 of 1,409 recipes.
Sampled first: chicken-karahi's 97 words, which read as three sentences
explaining why the dish has no onion in it, not padding. Length was the
wrong thing to measure. A separate check for the actual complaint — sentence
that reads "I remember when...", "growing up...", "my grandmother's..." and
a dozen more stock recipe-blog openers — found zero across the catalogue,
which is the true answer, and word count was reported only as background
after that: median 90 words, unscored.

Two structural facts made the length check the wrong one from the start
rather than merely miscalibrated. The ingredients card renders before any of
this prose in the page's own markup — not just on a narrow screen, the
template comment already says so — so there is no intro standing between a
reader and the recipe to begin with. And the why-panel is supposed to be
substantive: it is this site's answer to "why does this work", and a real
answer to that takes more than one short sentence.

### Two safe, mechanical fixes

**The leading action verb in every method step is now bold** — Heat, Add,
Whisk, Simmer — read straight off the step's own first word against a list
of about seventy cooking verbs, so nothing is invented and a step that opens
on something else ("Meanwhile, ...") is left alone.

**Oven and frying temperatures written only in Celsius now show their
Fahrenheit pairing too** — `src/lib/oven-temp.js`, mined from the 377 pairs
the site already publishes rather than computed independently, since the
established figures round to the nearest 5°F rather than the rounder
textbook numbers a conversion chart would give (160°C prints 320°F here, not
325°F). Scoped to oven and frying-oil mentions only: a thermometer or
proving-temperature reading — "the custard reaches 75°C", "prove at 24°C" —
keeps its precise figure rather than being rounded to an oven dial's
nearest-5 the way a bake setting is, because the precision is doing real
work on exactly those readings. 41 bare mentions found this way, all now
paired; the 80 more precise ones were left as they were.

### "Why did my sauce split?", narrowed from 370 recipes to 4

The most literal item in the request — a troubleshooting FAQ for a broken
sauce — went through three trigger designs before shipping, each measured
against real recipes rather than trusted on the regex alone:

- Ingredient co-occurrence (butter or cream alongside egg, wine or lemon):
  370 recipes, including arancini — fried rice balls with no sauce in them.
- Emulsifying language in the method ("whisk in", "off the heat", "do not
  let it boil"): 261 recipes, including salade niçoise and ratatouille,
  neither of which has an emulsion to break.
- The dish's own name, against a handful of classics where a broken sauce is
  the single most common way to ruin them: 4 recipes.

Carbonara, Fettuccine Alfredo, Cacio e Pepe and Chicken Alfredo now carry the
question, each with a mechanism-correct answer rather than one generic
answer stretched over both — carbonara's failure is the egg scrambling from
too much heat, alfredo and cacio e pepe's is the cheese seizing rather than
melting, and the fix for each is different.

### Quick Tips & Variations, and the two diets it does not cover

The dietary-adaptation box reuses the ingredient-grounded substitution
engine from the previous section rather than a new one: the several rules
already framed as reaching a diet — swap fish sauce for a vegetarian
version, soy sauce for tamari if it needs to be gluten-free — now render in
their own labelled box, only on a recipe that does not already carry that
tag, checked by the same `substitutions-audit.js` that already checks the
general list. 381 recipes carry one.

Keto and Low-Carb are deliberately not offered here. Whether a dish
qualifies for either is a question about the whole recipe's carbohydrate
total — checked, on this site, against the actual nutrition figures before
either tag is ever applied — not about any single ingredient, and naming one
swap as a keto tip on a dish whose sauce alone carries forty grams of sugar
would be false on exactly the claim someone managing a medical diet is
trusting the page for. A quick tip that is sometimes wrong is not a quick
tip.

### What the doneness-cue check could not be made certain of

One check remains a list for a human to read rather than a verified count.
Whether a step describing frying, baking or simmering also tells the cook
what "done" looks like went through several rounds of measurement — 559
flagged steps fell to 196 once ingredient names ("baking powder" is not an
instruction to bake anything) and negated instructions ("never let it boil")
stopped being counted as live cooking steps, then to 81 once a step that
only preheats the oven stopped being expected to describe doneness in the
same sentence, then to 54 once "roast" and "toast" used as a noun — "the
roast chicken", "served on toast" — stopped being read as a verb. Each round
found a real class of false positive, and each fix was a genuine narrowing
rather than a cosmetic one, which is exactly why the last round still found
some: a regex cannot reliably tell a live instruction from a reference to
something already cooked in every case, the way it can check whether a
keyword's claim is true or a substitution's ingredient is really there. The
54 remaining are listed in `content_audit.csv` as candidates for a read,
the same way a sourced photograph that might show the wrong dish is looked
at rather than asserted.

## A second feed, for Pinterest

`pinterest-feed.xml` was asked for as `feed.php`, pulling from a database
with `ORDER BY created_at DESC`. Neither exists here: there is no PHP
runtime anywhere in this deployment (see the file header on `src/build.js` —
"No dependencies — Node 18+ only" is not a stale comment) and no database,
just the recipe objects `src/data/*` already builds into. A `.php` file
would not have run; the request's own last requirement — match the existing
code structure — pointed at building this the way `feed.xml`, `sitemap.xml`
and `search-index.json` already are, at build time, in JavaScript.

It is a second file rather than a change to `feed.xml`, because the two are
for different jobs. `feed.xml` is a subscription feed and stays capped at
the 25 most recent recipes, the normal shape for something a reader follows.
Pinterest's RSS auto-publish walks a backlog and pins whatever it has not
seen before, and the brief was explicit that it should cover every published
recipe rather than only what is new, so `pinterest-feed.xml` carries the
whole catalogue, oldest and newest alike, with the `content` and `media`
namespaces Pinterest's importer reads: `<media:content>` for the image a pin
is actually built from, `<content:encoded>` carrying the why-it-works
paragraph and the chef's tips as simple HTML in a CDATA block, built from
fields the recipe page already publishes rather than written fresh for this
file.

One filter: a recipe with no real photograph or illustration is left out of
it entirely. Pinterest pins an image — there is no version of this feed
where that is optional — and a `<media:content>` pointing at a file that was
never built would not quietly do nothing, it would be a broken pin. 77 of
1,409 recipes have no photograph yet ("Where the photographs ran out",
above), so the feed carries 1,332 items. `npm run check` verifies the count
against the same recipes the feed was generated from rather than a fixed
number, checks both namespaces are declared, and checks every item actually
carries a `media:content` and a CDATA-wrapped `content:encoded` — and that
the image URL each one names is a file the build actually wrote, not merely
a URL that is shaped correctly. Fault-injected by stripping one item's
`media:content` and confirming the build failed before restoring it.

## Ads

`npm run check` verifies that every page carries every unit that is switched
on in `src/data/ads.js`: today the Adsterra social bar, exactly two native
banner slots, and one 300x250 banner. Two native, not one or three — the first
embeds Adsterra's snippet and the second is an iframe onto a one-slot document,
because `getElementById` returns a single node and two copies of the snippet
in one page leave the second slot empty forever. All of them load before the
closing body tag; a third-party script in `<head>` fails the check.

### The 300x250 banner is framed too, for two different reasons

It is a different format from the native banners and it cannot be pasted
straight into a page, which is worth writing down because the snippet looks
like it can.

Adsterra's iframe loader reads its settings from `atOptions`, a global the
snippet assigns immediately above the script tag. One global per document, so
a second placement overwrites the first's settings rather than getting its
own. And the loader finishes by calling `document.write` — which, once the
parser has closed, does not append to the page but replaces it, advert
instead of recipe.

Its own document solves both at once: one unit, one global, and a
`document.write` that can only reach the page it is on. The iframe is given
the unit's own 300 by 250, so the space is held before the network answers and
nothing moves when it fills — the same CLS discipline the native slots follow
from `frameHeight`.

`check.js` counts it on every page and reads the document itself, including
that `atOptions` is still assigned *before* the loader. Reversed, the unit
serves nothing and the page looks fine, which is the kind of silence this
repository writes guards for. All four branches were proved by breaking them:
stripping the slot from one page, swapping the two script tags, and deleting
the document each produce the failure they should.

The count follows the config rather than a fixed list, so switching a unit off
is a one-line edit and switching it back on restores the check with it.

The framed document is checked in the opposite direction: it must hold the
banner and must *not* hold any of the page-level loaders, which would fire
them a second time on every page of the site.

This was the last claim on the site with no witness. Everything else here —
times, calories, diet tags, README counts — already failed the build when it
drifted, while the part that earns the money could have been dropped by one
template edit and shipped silently across nine hundred pages.

## Browser support

Modern evergreen browsers. The site degrades gracefully:

- **No JavaScript** — all 2415 recipes, navigation and taxonomy pages render fully from static HTML. Search, filtering, favourites and cook mode need JS.
- **No WebP** — the `<picture>` element serves JPEG.
- **No `localStorage`** (private mode) — every read and write is wrapped in `try`/`catch`; the site works, it just does not remember.

---

## Licence

MIT for the code. Recipe text is original work by the Weekly Delight test kitchen.
Photography is CC0, public domain, CC BY or CC BY-SA — see `images-attribution.md`.
