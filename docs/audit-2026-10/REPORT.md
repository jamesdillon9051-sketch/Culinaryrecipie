# Weekly Delight: search and content-quality audit, October 2026

Handoff for the owner. Everything below was done on the branch
`claude/culinaryvault-recipe-site-mk9w9b`; **nothing has been deployed**. The live
site is on Hostinger and is redeployed by the owner, so publishing is left to you
(section 8). The checkpoint before any change is commit `d39eb86b` (also tagged
locally as `checkpoint/pre-seo-audit-2026-10-17`).

The companion files in this folder:

- `human-review.md`: every diet label removed or made conditional, the method
  steps to reword, and the search descriptions that were rewritten.
- `photo-priorities.csv`: the 1,405 recipes that still have no picture.

This folder, like `src/` and `tools/`, is refused by the server (`.htaccess`).

---

## 1. What was wrong, and what was done

Each item is marked **confirmed** (seen in the code, the built pages or the live
site), **plausible** (a known risk, not measured) or **needs data** (cannot be
judged without Search Console or analytics).

| # | Finding | Status | What changed |
| --- | --- | --- | --- |
| 1 | The contact form lost every message. It posted to a static page that answers 200 to anything, and the script then said "Thank you — your message has been sent." | Confirmed (code, and reproduced with a static server) | New endpoint `contact/send.php` (`src/server/contact-send.php`). The page says a message was sent only when the endpoint answers `{"ok": true}` after PHP's mailer accepted it; otherwise it says it was not sent and keeps the text. Recipient lives in a config file outside `public_html` (none is in the repo; none was invented). Honeypot, server-side validation, 5 messages an hour per IP, header-injection safe. Privacy and contact pages now name Hostinger, not Netlify. |
| 2 | Project files are publicly downloadable: `/src/build.js`, `/CLAUDE.md`, `/package.json` all answer 200 on the live site today (`.git/config` is already 403). robots.txt listed `/src/` and `/tools/`, which protects nothing. | Confirmed (live HEAD requests, 17 Oct) | `.htaccess` answers 404 for `src/`, `tools/`, `docs/`, `.git/`, the notes, the CSV/JSON working files and the Netlify/Vercel configs. `tools/private-paths-check.js` tests the rules (and `--url` tests the live host after deploy). Those paths are no longer named in robots.txt. Better still: deploy only the built files (README, "Deploying"). |
| 3 | robots.txt gave `Googlebot` its own group with `Allow: /`. Google obeys only the most specific matching group, so every `Disallow` written for `*` (filtered views, favourites) did not apply to Google. Filters were only blocked as the first parameter (`?tag=`, not `&tag=`). | Confirmed (Google's robots.txt spec; `tools/robots-check.js` reproduces it on the old file) | One rule set for all crawlers, both parameter positions, contact endpoint blocked; noindex pages left crawlable so the noindex can be read. `tools/robots-check.js` (28 URLs × 6 crawlers) runs in `npm run check`. |
| 4 | Recipe times ignored waiting. The focaccia's title, keywords and snippet said "50 minutes" for a dough that rises and chills for 16 hours or more; 14 descriptions said "ready in 40 minutes" for brownies that cool for 3 hours, "takes 20 minutes" for a panna cotta that sets for 4, and similar. | Confirmed | `src/lib/timing.js` reads the waiting from the method itself, as a floor and a ceiling ("12 to 24 hours", "overnight"). Every time a reader or crawler sees (cards, filters, title hooks, snippets, keywords, FAQ, Recipe `totalTime`) is now elapsed time, waiting included; ranges are shown as ranges. 1,047 recipes have waiting. The 14 contradicted descriptions were rewritten; the audits now fail on any description, keyword or title that promises a time the recipe cannot keep. Two Quick Meals recipes that took hours were moved (bifana to Lunch, Swedish crayfish boil to Dinner). |
| 5 | Diet labels that only hold with a swap were published unconditionally (the focaccia, with "honey or sugar", was Vegan in the page and in the schema). The old audit let any line containing "or", "to taste" or "like …" pass, and missed rabbit, sea bream, bottarga, Worcestershire, dashi, brioche and sponge fingers. | Confirmed | Shared judge `src/lib/diet-conditions.js` used by build, page and audit. 36 labels on 29 recipes with no way out were removed (three rabbit stews and three sea-bream dishes tagged Vegetarian, four of them also Vegan; Welsh rarebit Vegetarian with Worcestershire; brioche French toast Gluten-Free; and others). 290 labels on 246 recipes are now shown as "Vegan option" etc. with the condition printed ("Vegan when made with sugar rather than honey."), and left out of the schema. The focaccia step now says "honey or sugar". |
| 6 | Disease-suitability labels: 300 recipes carried Diabetes-Friendly, Weight-Loss Friendly or Kidney-Friendly, in filters, page panels, keywords and (for diabetes) `DiabeticDiet` in the schema. No dietitian reviewed them; the kidney label rested on potassium and phosphorus estimates from the site's own food table. | Confirmed | All three withdrawn from rows, filters, page panels and schema. Their search phrases now state numbers the pages print ("… under 400 calories", "no added salt …"), checked by the keyword audit. `npm run health` fails if a label returns or any recipe promises an outcome. Limits kept in `src/lib/health.js` for a reviewer. No generic disclaimer was substituted. |
| 7 | Schema `suitableForDiet` also emitted `LowCalorieDiet` (2,982 recipes), `LowFatDiet` (1,472) and `LowSaltDiet` (2,118) from thresholds the site chose (under 400 kcal, 10 g fat, 400 mg sodium), which are not the regulated meanings of "low". | Confirmed | Removed. `suitableForDiet` now carries only Vegetarian, Vegan, GlutenFree and LowLactose, and only where the label holds without a swap. |
| 8 | Keyword stuffing: Recipe `keywords` carried 20 generated phrases ("is fried polenta no added sugar", "fried polenta with litre water", "how many calories in fried polenta"); the keywords meta tag up to 30. Google asks for descriptors here and not the cuisine or category. | Confirmed | Both now carry only the recipe's own 4 to 6 hand-picked phrases (3 to 5 after removing shelf names and conditional diet words). The generated long tail is still used by the site's own search box, which is where it helps. |
| 9 | Alt text appended a search phrase to every photo ("Spaghetti Carbonara, an Italian dinner recipe — carbonara without cream"). Google's image guidelines: "Avoid filling alt attributes with keywords." | Confirmed | Alt text is now the dish name (or "Illustration of …" for the labelled drawings). |
| 10 | FAQ filler: 5 to 6 generated questions on every recipe, each repeating a section of the same page (32,005 questions). Google's documentation now says FAQ rich results stopped appearing in Search in May 2026. | Confirmed | Questions only where they add something: the waiting (1,047 recipes) and the sauce questions on carbonara, alfredo and cacio e pepe. 1,056 questions in all; recipes with nothing to ask have no FAQ section. |
| 11 | Nutrition note said "calculated from the ingredient list" on every recipe. Only 2,970 of 5,515 reproduce from their ingredients within the calculator's tolerances. | Confirmed | Each page now says which: "worked out from the ingredient list…" or "an estimate made when the recipe was written…". The About page gives both counts. Potassium and phosphorus are marked "(est.)". |
| 12 | Synthetic `datePublished`: dates were counted back from 2026-07-01 across 2008 to 2026 (herb focaccia claimed 2008-09-13). The repository's history starts in September 2026. | Confirmed | `datePublished` now comes from `src/data/published-dates.json`, the day each page first appears in git history (2026-09-05 to 2026-10-16), built by `tools/published-dates.js`. New recipes get the date of their first build. `dateModified` stays content-based and moved only for the 579 recipes whose content really changed (all traced; section 3). |
| 13 | Identity and testing claims: About page said the author was a 21-year-old aviation student in Kazakhstan who cooks every recipe; titles said "Tested"; byline "Written and tested by"; Organization `foundingDate` 2019 and a Twitter `sameAs` with no evidence. | Confirmed | Byline and About now say the recipes are written with AI assistance from well-established methods and checked by script, not individually kitchen-tested. "Tested" removed from titles, descriptions and keywords; `foundingDate` and the social handle withheld until the owner supplies real ones. |
| 14 | Reviews: reader reviews stored in the browser looked like public reviews. | Confirmed | Shown as private notes ("saved in this browser only… other readers cannot see them"). No `aggregateRating` anywhere; `src/data/reviews.json` remains empty. |
| 15 | Hub pages weighed up to 4.4 MB of HTML (2,316 picture cards on the onions hub). The A–Z list repeated a 46-byte inline style 5,515 times. | Confirmed | Hubs show 48 picture cards, then every remaining recipe as a named link, A–Z, so internal links are kept. A–Z styles moved to CSS. See section 3. |
| 16 | 1,405 recipes have no picture, so they cannot get recipe rich results (`image` is required). | Confirmed | Not faked. `photo-priorities.csv` lists them. 111 recipes use labelled AI illustrations in the Recipe schema (an owner setting in `src/data/illustrations.js`); see the review list. |
| 17 | The traffic decline ("3,000 views" to fewer). | Needs data | Nothing in the repository measures traffic. No penalty, indexing failure or recovery is claimed. Section 9 lists the exports needed. |
| 18 | Thin, near-duplicate prose across thousands of AI-drafted recipes, and no first-hand experience. | Plausible | Not changed by script. The honest remedy is the 30-day plan in section 10: real cooking, real photographs and notes on a few high-intent recipes first. |

## 2. What was deliberately not done

- No recipes were deleted, redirected or noindexed. No URLs changed.
- No dates were set to today; only recipes whose content changed got a new `dateModified`.
- No images were generated, and no unlicensed images were used.
- No ratings, reviews, testing claims, credentials or publication history were added.
- The "Answers first" layout still exists; most of its pages now simply have no FAQ.
- The generated "Common substitutions" blocks were not touched.
- The rewrite pipeline (`tools/humanize.js`) was not run.

## 3. Before and after

| Measure | Before (`d39eb86b`) | After |
| --- | --- | --- |
| `/ingredients/onions/` HTML | 4,384,865 bytes (352,693 gzipped) | 270,482 (47,582) |
| `/categories/dinner/` | 4,019,184 (314,895) | 267,527 (46,522) |
| `/cuisines/american/` | 3,139,575 (242,126) | 235,984 (37,968) |
| `/recipes/` | 727,123 (89,073) | 460,202 (85,832) |
| `/categories/dinner/italian/` | 514,521 (45,322) | 135,211 (19,987) |
| Built output | 889.1 MB | 825.5 MB |
| Focaccia: title, snippet, totalTime | "Ready in 50 minutes", `PT13H20M` | no time claim in snippet, `PT16H50M`, page shows 16 h 50 min to 1 day 6 h |
| Focaccia: `suitableForDiet` | Vegan, LowLactose, Vegetarian, LowCalorie | LowLactose, Vegetarian; page: "Vegan option — Vegan when made with sugar rather than honey." |
| Recipe `keywords` per page | 20 generated phrases | 3 to 5 curated |
| FAQ questions on recipe pages | 32,005 | 1,056 |
| Diet labels with no way out | 36 published | 0 (check fails if one appears) |
| Health suitability labels | 300 recipes | 0 |
| `datePublished` range | 2008 to 2026-06 (synthetic) | 2026-09-05 to 2026-10-16 (git) |
| robots.txt, Googlebot on `/recipes/?tag=Vegan` | allowed | blocked |
| Contact form on a host without the endpoint | "Thank you — your message has been sent" | "Your message was not sent … still in the form" |

Pages whose content fingerprint changed in this work: 586 (579 recipes, 4
category pages, 3 ingredient hubs). Each recipe in that list was checked against
the lists of what changed (volumes 32 to 34, conditional label notes, removed
labels, rewritten descriptions, and the timing, wording and category fixes) and
none is unexplained. Template-wide changes (byline, alt text, FAQ trimming,
keywords) did not move any `lastmod`, because they are not changes to a
recipe's own content.

## 4. Files changed

**Shared code and templates** (most of the fixes live here, not in HTML):
`src/build.js`, `src/lib/timing.js` (new), `src/lib/diet-conditions.js` (new),
`src/lib/content-dates.js`, `src/lib/faq.js`, `src/lib/health.js`,
`src/lib/keywords.js`, `src/lib/layouts.js`, `src/lib/seo.js`, `src/lib/util.js`,
`src/templates/layout.js`, `src/templates/pages.js`, `src/templates/recipe-page.js`,
`src/assets/js/app.js`, `src/assets/js/directory.js`, `src/assets/js/recipe.js`,
`src/assets/css/main.css`, `src/server/contact-send.php` (new), `.htaccess`.

**Data:** `src/data/published-dates.json` (new, generated), `src/data/content-dates.json`
(generated), catalogue rows in `catalog-2, -3, -20, -32, -33, -34, -44, -50, -51,
-56, -58, -59, -61, -62` (diet tags, health tags, two categories), and detail files
for the rewritten descriptions, keywords, waiting times and three ingredient or
step clarifications (full list: `git diff --stat d39eb86b -- src/data`).

**Audits and tools:** `tools/check.js`, `tools/timing-audit.js`, `tools/diet-audit.js`,
`tools/health-audit.js`, `tools/keyword-audit.js`, `tools/seo-audit.js`,
`tools/sync-readme.js`, `tools/nutrition-calc.js`, `tools/humanize-selftest.js`,
`tools/published-dates.js` (new), `tools/robots-check.js` (new),
`tools/private-paths-check.js` (new), `tools/contact-config.example.php` (new),
`tools/keywords/KEYWORDS.csv` and `.md` (regenerated).

**Docs:** `CLAUDE.md` (sections 2, 3, 4.2, 4.3, 7, 8, 9), `README.md`, this folder.

**Generated output:** every page under `recipes/`, `categories/`, `cuisines/`,
`ingredients/`, plus `about/`, `contact/` (now with `send.php` and `not-sent/`),
`privacy/`, `search/`, `site-directory/`, `index.html`, `404.html`, `robots.txt`,
`manifest.json`, the sitemaps, feeds and `search-index.json`.

## 5. Validation

- `npm run build`: passes.
- `npm run check`: **All checks passed** (5,875 pages, 5,871 sitemap URLs), which
  now includes the timing, diet, keyword, SEO, health, robots and private-path
  checks.
- `npm run selftest`: 64 passed, 0 failed.
- Contact endpoint, run locally with PHP 8.4 and a log-only transport (nothing
  was emailed): GET 405; invalid fields 422; valid post 200 and logged; honeypot
  answers ok and sends nothing; CR/LF in name and subject neutralised; plain
  form post redirects to `/contact/success/` or `/contact/not-sent/`; sixth
  message in an hour 429.
- Contact page in Chromium against three servers: PHP with config shows
  "accepted for delivery"; PHP without config and a static 200 host both show
  "not sent" with the message still in the form.
- Google requirements were checked against the current Search Central pages
  (Recipe structured data, robots.txt, FAQ, Google Images) on 17 October 2026.

**Limitations.** The Rich Results Test and Search Console URL Inspection were not
run (they need the live site and your account). `.htaccess` rules were tested as
patterns, not on Apache: run `node tools/private-paths-check.js --url
https://weeklydelight.com` after deploying. `mail()` delivery depends on
Hostinger's mail setup; only a real test message proves it. The diet judge is a
pattern matcher: it is stricter than before but can still miss an ingredient it
has no word for, which is why the review list exists.

## 6. Human review, in priority order

1. **Diet labels** (`human-review.md` §1 and §3): the 29 recipes that lost a label
   and the 290 conditional notes. Wrong diet labels harm readers most.
2. **115 method steps** that name only the non-compliant ingredient
   (`human-review.md` §2), e.g. "stir in the butter" where the list offers oil.
3. **Byline and About wording**: it is your public identity; adjust, keeping it true.
4. **AI illustrations in Recipe schema** (`inRecipeSchema: true` in
   `src/data/illustrations.js`, 111 recipes). Google says images must represent
   the content, and you have said you want real photographs.
5. **"Low sodium" and "low calorie" keyword thresholds** (`tools/keyword-audit.js`:
   400 mg and 400 kcal a serving) are the site's own, not the regulated meanings.
   Consider rewording those phrases as numbers.
6. **The 14 rewritten descriptions** (`human-review.md` §4).
7. **Keto tag** (1,142 recipes) is a diet claim checked only by carbohydrate
   figures that are mostly estimates.

## 7. Facts only the owner can supply

- Who "Turab" is, as you want it published, and whether a fuller author page is
  wanted (only true facts).
- The year the site started, if before September 2026, and where it was live.
- Any real social profile for the site.
- The inbox for the contact form, and a sending address on the domain.
- Which host serves the site today (the code assumes Hostinger, per `.htaccess`).
- What "3,000 views" measured (Search Console impressions or clicks, GA4 views,
  Hostinger visitors?), over which dates, and when the drop began.

## 8. Deployment and rollback

**Before deploying**

1. Review and merge the branch (or deploy it directly) as you usually do.
2. On Hostinger, create `domains/weeklydelight.com/private/contact-config.php`
   from `tools/contact-config.example.php` (outside `public_html`).
3. Make sure PHP is enabled for the site (it is by default on Hostinger shared
   hosting).

**Deploy**, then immediately:

1. `node tools/private-paths-check.js --url https://weeklydelight.com`: every
   private path must answer 404 and every public path 200.
2. Open `/contact/`, send yourself a test message, confirm it arrives.
3. `https://weeklydelight.com/robots.txt` matches the repository's file.
4. Rich Results Test on `/recipes/focaccia/` and `/recipes/spaghetti-carbonara/`.
5. Search Console: resubmit `sitemap-index.xml`; URL-inspect the two recipes.

**Rollback.** Everything is in git. The work is two commits on the branch: the
source, data, tools and docs, then the regenerated site. To return the live
site to its state before this work, redeploy commit `d39eb86b` (in Hostinger's
Git deployment, point it at that commit or at a branch reset to it), or
`git revert` the two commits and deploy. The files this work added
(`contact/send.php`, `contact/not-sent/`) are harmless if they remain. The
private config file is outside the repository and can stay or go. To undo one
part only, revert the relevant change in `src/` and rebuild: every fix is in the
shared code listed in section 4, so the next build carries it through.

## 9. The traffic question

No traffic or indexing claim is made in this audit, because none can be made
from the repository. To diagnose the drop, export from Search Console for the
last 16 months, and for the four weeks before and after the drop:

- Performance: queries, pages, countries and devices (clicks, impressions, CTR,
  position), compared period over period.
- Pages (indexing): counts by status, and examples for "Crawled – currently not
  indexed", "Duplicate without user-selected canonical" and "Alternate page".
- Crawl stats: requests per day, response codes, average response time.
- Manual actions and Security issues (screenshots, even if empty).
- Enhancements: Recipes (valid, with warnings, invalid).
- GA4 (if installed): sessions by default channel group, landing pages.

Dates to lay the drop against: Google's core and spam update dates for 2026
(Search Status Dashboard), and this repository's history (volumes added,
the image rounds, the ad-network changes).

## 10. Thirty-day plan

Fifteen recipes, chosen as widely searched classic dishes the site already
carries. Replace any of them with the pages that have the most impressions in
Search Console once the exports are in hand.

`spaghetti-carbonara`, `focaccia`, `banana-bread`, `chocolate-chip-cookies`,
`chicken-tikka-masala`, `shepherds-pie`, `pad-thai`, `guacamole`,
`fudgy-brownies`, `cinnamon-rolls`, `pizza-napoletana`, `spaghetti-bolognese`,
`tiramisu`, `butter-chicken`, `mac-and-cheese`.

**Week 1.** Deploy and run the checks in section 8. Record the baseline for the
fifteen in Search Console (impressions, clicks, CTR, average position, indexed
or not) and whether each passes the Rich Results Test.

**Weeks 1 to 3.** For each recipe, cook it yourself. Then, and only then: take
your own photographs (finished dish, one or two steps); correct anything the
method got wrong; add a short note in your own words of what you saw and what
you changed; adjust the byline for that recipe to say it was cooked and
photographed by you on that date. Five a week. This is the one change that adds
real experience, which no script can.

**Week 4.** Request indexing for the changed pages; compare each against its
baseline (expect noise: a month is short, and a change of a few positions is
within normal movement).

**Measure, per recipe and for the site:** impressions, clicks, CTR and average
position (Search Console, 28-day windows, same weekdays); recipe rich result
status; indexed pages count; crawl response codes; contact messages received
(should be above zero once configured). Count conditional diet labels and
withdrawn health labels as fixed only when `npm run check` stays green.
