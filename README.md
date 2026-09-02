# CulinaryVault

A dependency-free static site for the world's **600 most famous recipes** — each
one with a full ingredient list, step-by-step method, the cooking science behind
it, pairing suggestions, storage guidance and nutrition.

Built from scratch with vanilla HTML, CSS and JavaScript. No framework, no build
tooling beyond Node's standard library, no runtime dependencies.

```
600 recipes · 66 cuisines · 10 categories · 686 static pages · 0 npm dependencies
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
which builds itself and is served at `/travel-destinations/`. CulinaryVault's
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
│   │   ├── catalog-2.js         # volume two, same shape; all three are merged at build
│   │   ├── catalog-3.js         # volume three, same shape
│   │   ├── details/*.js         # volume one long-form content
│   │   ├── details2/*.js        # volume two long-form content
│   │   ├── details3/*.js        # volume three long-form content
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
├── recipes/                     #    600 recipe pages
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

Adding a recipe means adding one `c(...)` row to `catalog.js` and one keyed
object to a file in `details/`, then running `npm run build`.

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

- Real-time search with autocomplete over titles, cuisines, keywords and every ingredient
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

- [x] **Recipe** on all 600 recipe pages — `name`, `image`, `author`, `datePublished`, `prepTime`, `cookTime`, `totalTime`, `recipeYield`, `recipeCategory`, `recipeCuisine`, `keywords`, `nutrition`, `recipeIngredient`, `recipeInstructions` (as `HowToStep` with anchors), `aggregateRating`, `suitableForDiet`
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
- [x] `keywords` meta on recipe and taxonomy pages
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

478 of the 600 recipes have a photograph. Of the 672 images on the site, 601
are CC0 or public domain, 44 are CC BY and 27 are CC BY-SA. Anything still without one falls back
to a CSS gradient carrying the recipe name, the same fallback that catches any
image that fails to load at runtime.

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
starts returning things that are not the dish at all — a cargo ship for sangria,
a toad for toad-in-the-hole. Those are pinned with `"skip": true` in
`src/data/images.json` so the pipeline leaves them alone. A wrong photograph is
worse than an honest placeholder.

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

## Browser support

Modern evergreen browsers. The site degrades gracefully:

- **No JavaScript** — all 600 recipes, navigation and taxonomy pages render fully from static HTML. Search, filtering, favourites and cook mode need JS.
- **No WebP** — the `<picture>` element serves JPEG.
- **No `localStorage`** (private mode) — every read and write is wrapped in `try`/`catch`; the site works, it just does not remember.

---

## Licence

MIT for the code. Recipe text is original work by the CulinaryVault test kitchen.
Photography is CC0 or public domain — see `images-attribution.md`.
