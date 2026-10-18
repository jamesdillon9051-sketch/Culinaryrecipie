# Corrective release, October 2026: completion report

Branch `claude/culinaryvault-corrective-release`, four commits on top of `main` at `375249b1` (PR #15). Starting point tagged `checkpoint/pre-corrective-2026-10-18`. Not merged and not deployed: this release had no deployment authorisation of its own (section 9 below).

Status words used throughout:

- **Implemented**: in the source and the generated site on the branch.
- **Tested locally**: checked by a script or a browser in the build environment.
- **Verified live**: checked on weeklydelight.com.
- **Awaiting external confirmation**: needs the owner, a specialist or a real cook.

Nothing in this release is verified live yet, because nothing has been deployed.

## 1. Verified fixes

| Area | What was wrong | What changed | Status |
| --- | --- | --- | --- |
| Macarons | 75 minutes total, with 30–60 min shell rest, cooling, ganache chilling and 24 h mandatory maturing left out. 50 ml water left over from the Italian-meringue method; the method is French meringue, so the water had no use. Egg whites aged at room temperature. | Water removed, with the reason recorded. Whites refrigerated, used within 2 days, out no more than 2 hours (USDA FSIS). Ganache made while the shells rest. The total counts rest and maturing: about 25 h 45 min to 26 h 15 min. | Implemented, tested locally |
| Lasagna Bolognese | 3 h 15 min total and 2 h 30 min cook, against a method of 4 + 12 + 10 + 5 + 20 min, a 2½–3 h simmer, 40 min baking and a required 20 min rest | Cook 241–271 min (new optional `cookMax`), plus the rest: 5 h 6 min to 5 h 36 min start to finish. Masthead, FAQ, description, meta and JSON-LD agree. Besciamella and oven heating overlap the simmer, a reviewed override records why. | Implemented, tested locally |
| Recipe consistency | No check that the method, the times and the claims agree | `tools/recipe-consistency.js`, part of `npm run check`. Reports confirmed / review / accepted exception, and fails on confirmed only. | Implemented, tested locally |
| Recipe times | 23 confirmed defects at first, more on reading the review list | 35 recipes corrected (cook times, ranges, waits, time claims). 4 reviewed exceptions recorded with reasons. 0 confirmed findings remain. | Implemented, tested locally |
| Food handling | Marinating on the counter, raw meat and egg-rich bakes out for over 2 hours, slow cooling of joints | 13 recipes corrected, plus macarons. Raw-egg dishes listed for a specialist (`food-handling-review.md`). | Implemented; specialist list awaiting external confirmation |
| Search index | 5.83 MB; carried the generated long tail and every quantity | 2.97 MB raw, 496 KB brotli. Accent, punctuation and hyphen folding. Relevance-only ranking. Loading, failed and empty states kept apart. | Implemented, tested locally |
| Ratings | "Not yet rated" printed on every card, header and painted card | Removed; stars appear only from real reviews. Private notes stay labelled as the visitor's own. Search ranking no longer adds the rating field. | Implemented, tested locally |
| Homepage | "Twenty-nine kitchens" (92 cuisines listed), "The most recent recipes to come out of testing", "New this week", "What we have been cooking", "the world's most famous recipes" | Replaced with true statements. Each recipe appears once on the homepage; the gallery shows photographs only. | Implemented, tested locally |
| "Newest first" | The newsletter block said the recipe index is sorted newest first; it opens in "Suggested order" | Block replaced with Saved recipes, the index with the newest first, and the ingredient pages | Implemented, tested locally |
| Sodium | Carbonara 2,710 mg, from counting all the pasta-water salt. 28 tier-1 recipes published such figures in JSON-LD. | "Sodium: not given" with the reason; dropped from JSON-LD. Unmeasured salt is labelled as a floor. Two tips quoting unsourced sodium figures reworded. | Implemented, tested locally |
| Testing register | Nothing to record a real cook | `src/data/testing-notes.json`: 26 recipes, empty fields, not published | Implemented; awaiting a cook |
| Tap targets | Footer links 17 px tall | 24 px (WCAG 2.2, 2.5.8) | Implemented, tested locally |

## 2. Files changed

- **Source:**
  - `src/build.js`: `cookMax`, search words, index fields, `sodiumStatus`.
  - `src/lib/timing.js`: "mature" is now read as a wait.
  - `src/lib/util.js` and `src/lib/faq.js`: ranges, plurals, no unrated label.
  - `src/templates/recipe-page.js`, `layout.js`, `pages.js`.
  - `src/assets/js/app.js` and `directory.js`.
  - `src/assets/css/main.css`.
- **Data:**
  - `src/data/catalog*.js`: the cook times of 26 recipes.
  - `src/data/details*/…`: 49 recipes.
  - `src/data/timing-overrides.json`: 5 reviewed overrides.
  - New: `src/data/consistency-reviewed.json` and `src/data/testing-notes.json`.
- **Tools:**
  - New: `tools/recipe-consistency.js` and `tools/ads-unchanged.js`.
  - `tools/check.js`: new regressions.
  - `tools/nutrition-audit.js`: sodium in prose.
- **Docs:**
  - `CLAUDE.md`: new field, tools, testing register, food handling.
  - `README.md`: counts.
  - This folder: the report, `consistency-review.md` and `food-handling-review.md`.
- **Generated:** the site at the repository root, rebuilt.

## 3. Before and after

| Page | Before (main) | After |
| --- | --- | --- |
| Macarons JSON-LD | `PT1H` / `PT15M` / `PT1H15M` | `PT1H` / `PT15M` / `PT25H45M` |
| Macarons header | "1 hr 15 min total" | "1 hr 15 min prep and cooking · plus 24 hr 30 min to 25 hr resting and maturing · 25 hr 45 min to 26 hr 15 min start to finish" |
| Lasagna JSON-LD | `PT45M` / `PT2H30M` / `PT3H15M` | `PT45M` / `PT4H1M` / `PT5H6M` |
| Lasagna header | "3 hr 15 min total" | "4 hr 46 min to 5 hr 16 min prep and cooking · plus 20 min resting · 5 hr 6 min to 5 hr 36 min start to finish" |
| Carbonara nutrition | "2710mg Sodium" | "– Sodium: not given", with the reason in the note |
| Cacio e pepe JSON-LD | `"sodiumContent":"3190 mg"` | no sodiumContent |
| Hachis parmentier | cook 45 min against 8 + 10 + 3 + 150 + 45 min of stages | cook 216 min |
| Chili con carne | 8 h "chilling" counted from "or better, … refrigerate overnight" | 20 min required rest; cook 181 min |
| Every card and recipe header | "Not yet rated" | nothing until a real review exists |
| Homepage | "Twenty-nine kitchens, one kitchen table" | "92 cuisines, one table" |

## 4. Search measurements (tested locally)

| | Before | After |
| --- | --- | --- |
| `search-index.json` raw | 5,826,920 B | 2,965,810 B |
| gzip (level 6) | 1,026,326 B | 678,634 B |
| brotli (quality 11) | 719,315 B | 496,004 B |
| JSON.parse in Node, best of 5 | 29.2 ms | 16.6 ms |
| Loaded on page load | no (on first search) | no (on first search) |
| Network failure shown as | "No recipes match" | "Search could not load the recipe list…", with a retry; the directory keeps its server-rendered cards |

Live (from the baseline, before this release): brotli is served, `Cache-Control: max-age=3600`, and an ETag is present. The client now fetches with `cache: 'no-cache'`, so the browser revalidates against the ETag and sees a new build at once.

Queries, in Chromium against the built site:

- **chicken biryani:** Hyderabadi Chicken Biryani first.
- **focaccia:** four focaccias.
- **macarons:** French and Chocolate Macarons.
- **chickpeas** (an ingredient): Air Fryer Chickpeas, Pasta with Chickpeas, …
- **Korean** (a cuisine): Korean dishes.
- **crème brûlée** and **creme brulee** (accents): both find Crème Brûlée.
- **fish & chips** (punctuation): four fish-and-chips recipes.
- **mac-and-cheese** (hyphens): Mac and Cheese recipes first.
- **zzqxv** (no match): "No recipes match".
- **Filters and sort:** Vegan + Desserts + quickest gives 56 recipes. The full-collection filter suite also passes (24 site checks, below).
- **Keyboard:** ArrowDown sets `aria-activedescendant`.

No Core Web Vitals claim is made.

## 5. Mobile and desktop checks (tested locally, Chromium)

- **Pages:** homepage, `/recipes/`, `/search/?q=chicken`, carbonara, macarons, lasagna, contact.
- **Widths:** 360, 390, 414, 768 and 1366 px.
- **Horizontal overflow:** 0 everywhere. The homepage rail scrolls sideways by design.
- **`#method` under the sticky header:** the heading lands below the 75 px header on every page and width.
- **Tap targets:** the footer links were 17 px tall and are now 24 px. The filter checkboxes are 16 px, but they sit inside full-size labels.
- **Recipe tools:** cook mode turns on; step timers are present (3 on macarons, 6 on lasagna, 3 on carbonara); servings, units, print, favourites and notes pass `tools/site-browser-test.js` (24 of 24); focus shows a 3 px outline.
- **Environment block (ads):** ads were left enabled, but their scripts could not load here. The sandbox's HTTPS proxy fails TLS for the ad and analytics hosts (`net::ERR_CERT_AUTHORITY_INVALID`). These are browser observations from a lab environment with no third-party ads loaded. They are not field data and say nothing about layout shift caused by ads.

## 6. Contact status

- **Live:** `{"ok":true,"configured":false}` (verified live). The form says, before anyone types, that it is not switched on, and nothing is sent.
- **DNS:** the domain still has no MX, SPF or DMARC records (checked 18 October 2026), so there is no mailbox to send from.
- **Tests:** endpoint tests 48 of 48; browser tests 14 of 14. The browser suite's first run timed out while a button was still moving; the rerun passed in full. Covered:
  - a network failure says "not sent" and keeps the typed text;
  - a 200 HTML page is not mistaken for success;
  - the no-JavaScript paths work;
  - no secret ever appears in a response.
- **Owner settings needed:** one file outside `public_html` and Git, at `domains/weeklydelight.com/private/contact-config.php`, copied from `tools/contact-config.example.php`:
  - `to`: the inbox you read;
  - `from`: a mailbox on weeklydelight.com, created in Hostinger Email, which also adds the MX, SPF and DKIM records;
  - `salt`: 16 or more random characters;
  - `transport`: `'smtp'`;
  - `smtp.host`, `smtp.port` and `smtp.encryption`, as Hostinger gives them for the mailbox;
  - `smtp.username` and `smtp.password`: the mailbox login, typed into the file on the server and never into chat.
- **Then:** `php tools/contact-doctor.php --config <path> --probe` logs in without sending, and `/contact/send.php?status=1` should answer `configured: true`.
- **Prepared test message, not sent:** `php tools/contact-doctor.php --config <path> --send-test` shows the single message, with the subject "Contact form test message". It goes only with `--yes`, and only after you authorise it. "Accepted for sending" will mean the mail server took it, not that it arrived; confirm by finding it in the inbox.

## 7. Recipes still needing review

- `consistency-review.md` lists 832 review items, each naming the exact line or step, out of 5,515 recipes:
  - 344 required waits that are untimed or too short to count;
  - 237 stage sums above the cook time, mostly overlaps or alternatives (the largest are at the top);
  - 231 ingredients the method never names;
  - 12 divided ingredients;
  - 7 time claims;
  - 1 advance preparation written into an ingredient line.
- `food-handling-review.md` lists the raw-egg dishes and three specialist cases (horchata, banoffee pie, cooling large pots).
- `src/data/testing-notes.json` lists the 26 recipes to cook first.
- Uncertainty that remains in the corrected recipes:
  - **Macarons:** the shell cooling and ganache chilling have no stated time and are not counted.
  - **Banoffee pie:** the tin's cooling time is not stated.
  - **Pasta e fagioli:** the pasta's cooking time is untimed.
  - **Dal makhani and moussaka:** the totals assume the parallel stages overlap.
- **Dates:** 49 recipes' `dateModified` moved, each one a recipe whose data changed here. `published-dates.json` is untouched. Carbonara and the other recipes that now withhold sodium changed on the page without their date moving, because the register fingerprints recipe data, not computed nutrition.

## 8. Owner inputs needed

1. **Contact settings** (section 6), and authorising the single test message.
2. **Raw-egg dishes:** whether to add a one-line pasteurised-egg note to the dishes listed in `food-handling-review.md`.
3. **The "Suggested order" sort:** it still uses the catalogue's typed rating × review weight. Nothing calls it popularity, and the search ranking no longer uses any rating. Replacing it with a curated order is the owner's choice.
4. **A cook for the testing register.**
5. **Exports for any traffic or indexing question.** Still none available, so no traffic or ranking claim is made.

## 9. Deployment and rollback

- **Not deployed.** The earlier "Deploy it on hostinger" covered the follow-up release. This release had no deployment step authorised.
- **The remaining step:**
  1. Merge the branch into `main` (a PR).
  2. Hostinger's Git auto-deploy publishes `main` into `public_html`.
  3. Clear the Hostinger CDN cache.
  4. Run `node tools/private-paths-check.js --url https://weeklydelight.com` and `curl -s https://weeklydelight.com/contact/send.php?status=1`.
  5. Open macarons, lasagna, carbonara and `/recipes/?q=creme%20brulee`.
- **Rollback:** `git revert -m 1 <merge commit>` on `main`, then the same redeploy and cache clear. The tag `checkpoint/pre-corrective-2026-10-18` marks the starting point.
- **The designated branch:** `claude/culinaryvault-recipe-site-mk9w9b` holds one unmerged commit from an earlier round, an audit report. It was not touched.

## 10. Advertising preserved

`node tools/ads-unchanged.js` reports the following unchanged from `origin/main`:

- the ad and consent source files: `src/templates/ads.js`, `src/data/ads.js`, `src/data/consent.js`, `src/data/analytics.js`, `src/assets/js/ad-loader.js`, `src/assets/js/consent.js` and `src/assets/js/analytics.js`;
- `ads.txt`;
- the ad markup on eight sample pages: 11 advertising tags each, identical.

No ad network, publisher ID, placement, social-bar script, consent or targeting setting was changed. Because advertising is unchanged, no ad-related concern (page weight, layout shift, third-party requests) is claimed as resolved. Those were outside this task.
