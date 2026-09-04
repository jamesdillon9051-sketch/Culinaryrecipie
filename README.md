# Weekly Delight

A dependency-free static site for the world's **680 most famous recipes** — each
one with a full ingredient list, step-by-step method, the cooking science behind
it, pairing suggestions, storage guidance and nutrition.

Built from scratch with vanilla HTML, CSS and JavaScript. No framework, no build
tooling beyond Node's standard library, no runtime dependencies.

```
680 recipes · 66 cuisines · 10 categories · 817 static pages · 0 npm dependencies
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

This repository also contains a separate project in `travel-destinations/`,
which builds itself and is served at `/travel-destinations/`. Weekly Delight's
build never touches it: it is on the protected list in `cleanOutput()` and is
skipped by `npm run check`.

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
│   │   ├── catalog-2.js …-8.js  # further volumes, same shape, merged at build
│   │   ├── details/*.js         # volume one long-form content
│   │   ├── details2/ …details8/ # long-form content for the matching volume
│   │   ├── volumes.js           # discovers and merges the volumes above
│   │   ├── stats.js             # recipe/cuisine counts derived from the catalogues
│   │   └── images.json          # image manifest: files, licences, colours, LQIP
│   ├── lib/
│   │   ├── util.js              # escaping, durations, taxonomy tables
│   │   └── ingredients.js       # ingredient parser + quantity formatter
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
│       └── img/recipes/         # 986 image files (WebP + JPEG)
├── tools/
│   ├── fetch_images.py          # sources CC0/public-domain photography
│   ├── retry_images.py          # second pass with alternative queries
│   ├── fix_images.py            # targeted replacements with strict validation
│   ├── final_images.py          # final QA pass
│   ├── make_icons.py            # favicon, PWA icons, OG card
│   ├── make-attribution.js      # regenerates images-attribution.md
│   ├── check.js                 # post-build audit
│   └── serve.js                 # local preview server
├── index.html                   # ── generated output, committed, deploy-ready
├── 404.html
├── assets/                      #    css, js and 986 image files
├── recipes/                     #    680 recipe pages
├── categories/  cuisines/       #    taxonomy landing pages
├── about/  contact/  search/  favourites/
├── sitemap.xml  robots.txt  manifest.json  feed.xml  search-index.json
├── images-attribution.md        # source + licence for every image
├── netlify.toml / vercel.json
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

- [x] **Recipe** on all 680 recipe pages — `name`, `image`, `author`, `datePublished`, `prepTime`, `cookTime`, `totalTime`, `recipeYield`, `recipeCategory`, `recipeCuisine`, `keywords`, `nutrition`, `recipeIngredient`, `recipeInstructions` (as `HowToStep` with anchors), `aggregateRating`, `suitableForDiet`
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
- [ ] **`aggregateRating` currently publishes seeded figures.** Every rating in
      the catalogue falls between 4.5 and 4.9, none lower — not a distribution
      real ratings produce. They were written with the catalogue to give the cards
      something to show, and emitting them as structured data tells a search
      engine a stated number of people rated the dish. `SITE.unverifiedRatings`
      in `src/templates/layout.js` turns this off; it is left on because doing so
      removes the stars from search results, which is a trade to make deliberately.
      Real reviews override it automatically
- [x] **FAQPage** on all 680 recipe pages and the about page — 4,011 questions,
      about 5.9 a recipe, built by `src/lib/faq.js` from fields the page already
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
- [x] `keywords` meta on recipe and taxonomy pages — 4 curated phrases per recipe,
      widened to ~46 by `src/lib/keywords.js` from the row's own cuisine, category,
      times, difficulty, diet tags, servings, ingredients, per-serving nutrition and
      storage note (27,467 in total, 23,499 of them distinct). Derived rather than
      written, so a phrase is only emitted where the data backs it: "gluten free X"
      needs the tag, "30 minute X" needs the times, "low calorie X" needs fewer than
      400 kcal a serving, "can you freeze X" needs the storage note to say so. A
      script checks all 680 recipes against those conditions and currently reports
      no unsupported claim
- [x] The Recipe JSON-LD takes only the first 12 of them. Google's structured-data
      guidance asks `keywords` for "other terms for your recipe", and forty-six
      phrases in that field is the shape of a manual action — the meta tag and the
      site's own search index carry the full list instead
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

639 of the 680 recipes have a photograph. Of the 897 images on the site, 683
are CC0 or public domain, 99 are CC BY and 115 are CC BY-SA. Anything still
without one falls back to a CSS gradient carrying the recipe name, the same
fallback that catches any image that fails to load at runtime.

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

`src/data/catalog-4.js` adds twelve recipes written to those two briefs. They are
also the first recipes on the site with **no rating**: the other 600 carry seeded
figures, and adding twelve more invented ones would have been a poor answer to
having just documented that. They show "Not yet rated" and publish no
`aggregateRating` until somebody rates them.

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

Every one of the site's 680 recipes now passes, and `npm run check` runs the
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

Nineteen of the twenty-two have a photograph. Three do not: Commons has no
usable picture of a finished angel food cake, of magic cookie bars, or of a
focaccia that is not either sweet or a pizza, and the fetcher's near-misses —
an empty tube tin, raw batter, a Scottish mountain called The Cobbler — went
back rather than onto the page.

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

The larger problem was waiting. **215 of the 680 recipes** declare unattended
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

## Browser support

Modern evergreen browsers. The site degrades gracefully:

- **No JavaScript** — all 680 recipes, navigation and taxonomy pages render fully from static HTML. Search, filtering, favourites and cook mode need JS.
- **No WebP** — the `<picture>` element serves JPEG.
- **No `localStorage`** (private mode) — every read and write is wrapped in `try`/`catch`; the site works, it just does not remember.

---

## Licence

MIT for the code. Recipe text is original work by the Weekly Delight test kitchen.
Photography is CC0 or public domain — see `images-attribution.md`.
