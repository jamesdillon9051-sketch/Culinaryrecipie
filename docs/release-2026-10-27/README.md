# Release 2026-10-27: discovery, collections, weekly plan, corrections, flagship programme

Branch `claude/culinaryvault-recipe-site-mk9w9b`, from `main` at `43be40ec`. **Not merged and not deployed.** Hostinger deploys `main` only, so pushing this branch publishes nothing. `DEPLOY.md` has the checklist, the rollback and the post-deploy checks. `ACTIVATION.md` covers switching on reports, reviews and the newsletter.

## 1. Summary

The site was a large catalogue sorted only by category. A side of buttered peas, a barbecue rub and a gravy sat among the "Dinner" recipes. This release does six things:

- **Sorts every recipe by its role in a meal.** The roles are main, light meal, side, sauce, condiment, starter, bread, breakfast, dessert, drink and kitchen basic. Each recipe also gets its cooking methods, equipment and the size of each pan.
- **Uses that sorting for discovery.**
  - Dinner and the other category pages lead with mains and list sides and sauces separately.
  - The directory gains Course and "How it is cooked" filters and a phone-friendly Filters button.
  - The homepage leads with eight decision routes.
- **Adds five curated collections and a five-dinner weekly plan.** Every inclusion is checked by the build against its collection's criteria. The plan comes with a consolidated, scalable shopping list and a "my plan" page that needs no account.
- **Adds a working correction workflow.** A "Report a problem" link on every recipe opens a form. Its PHP backend stores reports outside the web root and has a moderation page. Public reviews and the newsletter are built and tested, but switched off until the owner sets them up.
- **Starts a flagship programme of 20 recipes.** Its evidence model keeps automated, editorial and kitchen status apart. The page says nothing about cooking until a real, accepted record exists.
- **Adds five cooking guides** with checked sources, linked both ways with the recipes that use them, and clearer About and brand copy.

Data fixes found along the way:

- Two raw-egg recipes now name pasteurised eggs in the ingredient line. The audit now requires that, rather than accepting a tip.
- Pressing waits are now counted in the times of 11 recipes: 10 tofu dishes and poireaux vinaigrette. Their descriptions and keywords were corrected.
- The sheet-pan pizza's proving time is now counted.

## 2. Task ledger

Status vocabulary: **Completed and verified** · **Implemented; needs deployment verification** · **Implemented; awaiting external configuration** · **Requires genuine cooking or editorial evidence** · **Not completed**.

| § | Task | Status | Evidence / notes |
| --- | --- | --- | --- |
| A | Verify current state: hostname, redirects, canonicals, robots, sitemaps, links, schema, status codes | **Completed and verified** | `tools/live-sample.py` (new, sequential, backs off) found 25/25 sampled pages 200 and byte-identical to the build. It confirmed http→https, www→apex, no-slash and index.html redirects (all 301), a 404 for a missing page, and one Recipe JSON-LD per recipe with no microdata. Results: `live-baseline.json`. 255 recipes have no `image` in their schema because they have no photograph; that is left true rather than filled with a placeholder. |
| B | Meal classification: occasion, role, method, times, yield, equipment, plus a review queue | **Completed and verified** for all 5,455 recipes. The 117 that were queued on 27 October were settled on 28 October by an editorial reading of each recipe (no cooking); they remain open to an editor's second opinion. | `src/lib/classify.js` decides by title (2,282), category (2,105), ingredients (388), nutrition (318) or override (362). Overrides live in `src/data/dish-roles.json`, each with a reason. Outputs: `classification-summary.md`, `classification-review.csv` (queue), `classification-all.csv`. `tools/classify-test.js` pins 24 known roles. The 318 nutrition-basis decisions are the least certain; spot-check them first. |
| B | Dinner page leads with mains | **Completed and verified** | `tools/release-pages-test.js` checks it; the rub, peas and gravy are listed separately and still linked. |
| C | Discovery routes, filters, mobile filters, empty states, pagination | **Completed and verified** (locally) · **needs deployment verification** | Course and method filters. The browser test checks `course=main&time=30` (472) and `course=side` (318) against the index. The Filters button opens the panel and says so. Empty states suggest which filter to drop. The existing paging is kept. |
| D | Five collections, 8–15 recipes each, with criteria and a reason per recipe | **Completed and verified** against the stated criteria · **Requires genuine cooking evidence** for any claim beyond the recipe text | `src/data/collections.js`, validated by `src/lib/collections.js`; the build fails on a recipe that breaks its collection's criteria. See section 7. |
| D/I | Five dinners for this week, with shopping list, schedule, print and save | **Completed and verified** (locally) | `/weekly-plan/`: 4 people by default, adjustable from 1 to 16. The shopping list is split into buy, check the cupboard and optional. Compatible units are merged and different products are not (`tools/shopping-test.js`). Ticks are kept in the browser only, and the page says so. Leftovers are claimed only where a recipe's storage note supports it, with USDA FSIS cited. `/my-plan/` (noindex) builds a plan from saved recipes. |
| E | Recipe template sections and scaling safeguards | **Completed and verified** | "Before you begin" (waits, untimed stages, advance-cooked ingredients, equipment and sizes, and a note for support roles). Course in At a glance. A goes-with line. Bakes scale only from half to double, others from 1 to 48. The scale note says times are not scaled and how to handle part of an egg. Checked in the browser test. |
| E | Distinct sections for substitutions, troubleshooting and serving across all recipes | **Not completed** for the catalogue | The template carries them where the data has them. Writing new substitution or troubleshooting prose for 5,455 recipes needs the editorial pass (CLAUDE.md section 6), not generated text. |
| F | 20 flagship candidates, evidence model, workflow, conditional display | **Implemented**; candidates **Require genuine cooking or editorial evidence** | `src/data/flagship.json`, `src/lib/flagship.js`, `tools/flagship-check.js`, `docs/flagship/README.md` (workflow, record template, cook's checklist) and `docs/flagship/status.md`. All 20 pass automated checks; 0 are editorially approved and 0 are cooked. |
| G | Report a problem: link, form, backend, moderation, privacy | **Implemented; awaiting external configuration** | `/report/` and `src/server/feedback/`. `tools/feedback-test.js` passes 36/36 scenarios against PHP 8.4 locally. The form shows an honest "not switched on" state live until the settings file exists (ACTIVATION.md step 1). No external messages were sent. |
| H | Moderated public reviews, off by default | **Implemented; awaiting external configuration** | `review.php` and `moderate.php` (login, CSRF, lockout, pending/approved/rejected, export). No form is shown and no rating markup is generated while `reviews.json` is empty, which `npm run check` enforces. |
| J | Email readiness | **Implemented; awaiting external configuration** | `subscribe.php` (Buttondown, double opt-in, never sends a campaign). The sign-up form is not built until `newsletter: true`. The weekly plan works without email. The privacy page's `#newsletter` section is in place. |
| K | Brand promise, About, attribution, corrections | **Completed and verified** · one wording point for the **owner** | The promise: "World recipes with clear methods, start-to-finish times that include the waiting, and practical ingredient swaps." About now has `#three-checks` and `#corrections`, and distinguishes software checks from cooking. It states that the text was compiled with AI writing tools, as this brief asks. **That sentence reverses the owner's 26 October removal of the AI-assistance statement (CLAUDE.md section 8). Confirm or remove it before merging** (`src/templates/pages.js`, About section). No staff, credentials or test kitchen are claimed. |
| L | Five guides with sources, linked both ways | **Completed and verified** · experiments **Require genuine cooking evidence** | `/guides/` covers active vs total time, choosing rice, pan size, substitutions and split sauces. Every source URL was opened and its text checked; a fabricated citation and a 404 source were caught and removed. Recipes link back. Claims that need hands-on comparison are held in `docs/guides/experiment-plans.md`. |
| M | Images: validate declared URLs, do not fake | **Completed and verified** | `npm run check` now resolves every absolute image URL (og:image, twitter:image, JSON-LD image fields, srcset) to a built file: 55,743 URLs, 0 missing. Image coverage itself is a separate workstream: `npm run missing`. |
| N | Accessibility, performance, search eligibility | **Completed and verified** (locally) · **needs deployment verification** | See section 4. |
| O | Deliverables | This file, `DEPLOY.md`, `ACTIVATION.md` and `docs/flagship/` | |

## 3. Changed files

**New source:**
- `src/lib/classify.js`, `src/lib/collections.js`, `src/lib/flagship.js`
- `src/data/dish-roles.json`, `collections.js`, `guides.js`, `flagship.json`, `feedback.js`
- `src/templates/collections.js`, `guides.js`, `feedback.js`
- `src/assets/js/shopping-core.js`, `plan.js`, `feedback.js`
- `src/server/feedback/{_lib,report,review,subscribe,moderate}.php`

**New tools:**
- `tools/classify-audit.js`, `classify-test.js`, `shopping-test.js`, `flagship-check.js`
- `tools/feedback-test.js`, `release-pages-test.js`, `release-browser-test.js`
- `tools/live-sample.py`, `feedback-config.example.php`

**Changed:**
- `src/build.js`, `src/lib/{content-dates,linking,timing}.js`
- `src/templates/{layout,pages,recipe-page}.js`
- `src/assets/js/{app,directory,recipe}.js`, `src/assets/css/main.css`
- `tools/{check,food-handling-audit,private-paths-check,timing-corpus}.js`
- `.htaccess` (404 for `feedback/_*`), `package.json`, `README.md` (derived counts)

**Recipe data:**
- `details/american.js` (Caesar salad: pasteurised yolks)
- `details28/05a-snacks-and-drinks.js` (amaretto sour: pasteurised white)
- `details34/05-tofu.js` (time claims corrected now that pressing is counted)
- `details37/04-sheet-pan-and-grill.js` (sheet-pan pizza proving)

**Generated:** the regenerated site in the repository root. New pages:
- `collections/` and 5 collection pages
- `weekly-plan/`, `my-plan/`, `report/`, `feedback/*.php`
- `guides/` and 5 guide pages

Commits are listed in the final report and in `git log main..claude/culinaryvault-recipe-site-mk9w9b`.

## 4. Verification and its limits

| Check | Result |
| --- | --- |
| Content-date register against `main` | 13 new routes (the curated pages). `lastmod` moved for 14 recipes, all with a real content change: amaretto-sour, caesar-salad, sheet-pan-pizza, poireaux-vinaigrette, and baked-tofu-with-garlic-and-ginger, crispy-tofu-bites, dubu-jorim, home-style-tofu, sesame-greens-with-tofu, tofu-and-cabbage-stir-fry, tofu-edamame-stir-fry, tofu-katsu-curry, tofu-pineapple-stir-fry, tofu-rice-bowls. No other date moved: 341 entries changed only their derived hash, which does not move a date by design. |
| `npm run check` | Passes. It includes the new classification, shopping, flagship, feedback, release-pages and image-URL checks. |
| `npm run selftest` | 64 passed, 0 failed |
| `node tools/ads-unchanged.js --against origin/main` | Advertising code, configuration and markup unchanged. Grow is still on every page. |
| `node tools/release-browser-test.js` | 18/18 on 20 pages at 390 px. It covers horizontal overflow, script errors and layout shift under 0.1, plus the skip link first and visible focus. It also covers the Filters button and the course and time filters against the index, plan scaling and its limits, and touch targets of at least 24 px. Finally it covers the report form's unavailable state and prefill, and bake scaling limits. |
| `node tools/feedback-test.js` | 36/36 against PHP 8.4's built-in server, with a temporary settings file and storage outside the served folder. |

**Limits of this verification:**
- The PHP was run under PHP 8.4's built-in server, not Hostinger's LiteSpeed; `.htaccess` rules were checked by `tools/private-paths-check.js`, offline.
- Lighthouse was not run in this environment; layout shift was measured in Chromium.
- No screen-reader pass was done.
- Nothing here shows whether Google has crawled or indexed any page. That needs Search Console.

## 5. Unresolved dependencies

| Dependency | Who | What unblocks it |
| --- | --- | --- |
| Feedback settings file on Hostinger | Owner | ACTIVATION.md, section 1. About 10 minutes in hPanel. |
| Public reviews | Owner | A person to moderate weekly, then ACTIVATION.md section 2. |
| Newsletter | Owner | A Buttondown account, a real sending schedule and sender details (ACTIVATION.md section 3). |
| AI-assistance sentence on About | Owner | Keep (this brief) or remove (26 October decision). |
| Flagship editorial review and kitchen records | A named editor and cook | `docs/flagship/README.md`. |
| Second opinion on the 362 overrides (117 added 28 October) and a spot-check of the 318 nutrition-basis roles | Editor | `src/data/dish-roles.json` holds each reason; change an entry there and rebuild. `classification-review.csv` is now empty. |
| Guide experiments | A cook | `docs/guides/experiment-plans.md`. |
| Flagship selection and measurement | Owner | Search Console exports (Performance, Pages) and analytics access. |

## 6. Flagship candidates

The status of all 20 is in `docs/flagship/status.md`, regenerated on every check.

| Status | Count |
| --- | --- |
| Automated checks passed | 20 |
| Editorially approved | 0 |
| Kitchen preparation documented | 0 |

The candidates: chocolate-chip-cookies, buttermilk-pancakes, chicken-tikka-masala, banana-bread, spaghetti-carbonara, pad-thai, margherita-pizza, mac-and-cheese, shakshuka, egg-fried-rice, caesar-salad, thai-green-curry, beef-stroganoff, shepherds-pie, french-onion-soup, chicken-adobo, english-scones, pavlova, sticky-toffee-pudding and tortilla-espanola.

## 7. Collections and the weekly plan

Each page states its purpose, its criteria and a reason for every recipe. The build re-checks every inclusion against the criteria on each run.

| Collection | Recipes | Criteria the build enforces |
| --- | ---: | --- |
| [Complete Dinners in 30 Minutes](https://weeklydelight.com/collections/complete-dinners-in-30-minutes/) | 14 | Main course; 30 minutes or less start to finish, waiting included; no untimed stage; no ingredient cooked in advance. |
| [One-Pan Dinners](https://weeklydelight.com/collections/one-pan-dinners/) | 14 | Main course; the method uses one cooking vessel. |
| [Dinner for Two](https://weeklydelight.com/collections/dinner-for-two/) | 11 | Main course written for 2 servings, so nothing has to be halved. |
| [Cook Once, Eat Twice](https://weeklydelight.com/collections/cook-once-eat-twice/) | 8 pairs | The base serves 4 or more and its storage note allows refrigeration; the second recipe uses it, with USDA FSIS leftovers guidance cited. |
| [Beginner-Friendly Baking](https://weeklydelight.com/collections/beginner-baking/) | 10 | Easy; no stand mixer, food processor or thermometer; at most 13 ingredients; an observable doneness cue in the method. |

The weekly plan, [Five Dinners for This Week](https://weeklydelight.com/weekly-plan/), is for 4 people, adjustable from 1 to 16:

| Day | Recipe | Notes |
| --- | --- | --- |
| Monday | One-pot chicken and rice | One pot, a long simmer |
| Tuesday | Pasta ai broccoli | Meat-free, 25 minutes |
| Wednesday | Sheet-pan gnocchi | Oven |
| Thursday | Beef noodle stir-fry | About 10 minutes in the wok |
| Friday | Sheet-pan fish tacos | Oven |

The shopping overlaps across the week (peppers, broccoli, garlic, parmesan). The plan keeps one stable URL; to change it, edit `WEEKLY_PLAN` and its `updated` date rather than adding dated copies.

## 8. Measurement plan

Measure from the owner's own data only. Private notes and browser-only data are never collected.

| Question | Measure | Source | When |
| --- | --- | --- | --- |
| Do the new hubs get found? | Impressions and clicks for `/collections/*`, `/weekly-plan/`, `/guides/*` | Search Console, Performance, filtered by page | 4 and 8 weeks after deploy |
| Are they indexed? | URL Inspection on the 13 curated URLs, plus a sample of 20 recipes | Search Console | 2 and 6 weeks after deploy (never claimed without this) |
| Does Dinner work better leading with mains? | Clicks from `/categories/dinner/` to recipe pages; queries landing on it | Analytics (page path → next page); Search Console | Before and 4 weeks after |
| Is the plan used? | Views of `/weekly-plan/`; prints (`beforeprint` event, if the owner wants it added) | Analytics | Monthly |
| Do saves happen? | "Save" button events | Analytics event, if added; saves themselves stay in the browser | Monthly |
| Are corrections useful? | Reports received, and how many were right and fixed | `feedback-data/` via the moderation page | Monthly |
| Do readers come back? | Returning-user share | Analytics (Google Analytics is already on the site) | Monthly |
