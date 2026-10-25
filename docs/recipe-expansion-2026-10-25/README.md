# Five-country expansion: first five recipes and research queue
25 October 2026. Separate branch: content/popular-five-countries-500-2026-10-25. Base: 373f10a67f (latest main, PR33). Nothing merged or deployed.

## Status: the 500-recipe addition is NOT complete
The first five complete recipe drafts are implemented in volume 63, taking the review catalogue from 5,455 to 5,460 recipes. The 500-recipe request remains unfinished: 495 additional recipes still need authoring and review. The research CSV contains 500 unapproved leads, not 500 completed recipes. No empty recipe shell or copied publisher method was created to meet a count.

The base main catalogue contained 5,455 recipes after recent duplicate retirements. The existing 5,455 recipe source records and modification dates remain unchanged. Generated listings, global counts, sitemap membership, source date registers and the social card reflect the five additions. Advertising, design, existing URLs and photo files are preserved. A focused fingerprint fix ignores the shared directory counter so adding a recipe will not refresh unrelated collection dates merely through that counter. The owner authorizes new recipe work; existing Claude content corrections remain separately owned. Claude retains combined integration/regeneration ownership.

## Evidence and limitations
Research fetched 119 collection requests in two batches (99 HTTP 200 responses), yielding 1,674 recipe-link references and 1,520 unique recipe references after initial navigation filtering. HTTP success is not a guarantee that collection pagination worked: Canadian Living's query pages repeatedly exposed the same first-page names, so those were deduplicated, not counted as different results.

Sources include BBCGoodFood, RecipeTinEats, ChelseaSugar, CanadianLiving and SpendWithPennies. Allrecipes' index returned 460 from this environment; one Canadian Living individual recipe returned a 307 loop. These source-access failures do not establish a problem with weeklydelight.com.

Publisher popularity labels are evidence of that publisher's audience only. Appearance in a recipe index does not establish popularity. No paid keyword/search-volume data was available, and these leads are not claimed to be the 500 most-searched dishes in the five countries. Target-market labels are proposed research buckets, not measured national demand, publisher nationality or cuisine/origin claims. SpendWithPennies is by Canadian author Holly Nilsson; its American-style leads need USA demand verification. Her publisher confirms the Canadian location: https://www.penguinrandomhouse.com/books/734106/spend-with-pennies-everyday-comfort-by-holly-nilsson/.

The stricter screen found 548 existing dishes/aliases, 442 requiring same-dish review and 529 unapproved leads; one additional navigation item was excluded. 500 leads were selected from that final group. They may still contain aliases or insufficiently distinct variants; no automated name screen can approve ingredients/method differences. The remaining 29 are not in this checkpoint's selected list.

## Files
- research-leads.csv / .json: 500 source-linked, explicitly unapproved leads.
- excluded-and-review.csv: exact existing recipe paths and reasons to avoid reintroducing duplicate pages.
- summary.json: exact progress and country-market counts.
- collection-fetches*.json: successful/failed requests, including repeated pagination; no failed request is treated as an empty result.
- tools/review-recipe-expansion.js: read-only screening that catches parenthetical aliases and existing dish names hidden in longer titles. Seven regression fixtures pass. It never writes or approves recipe pages and changes no existing audit rules.

## Required publication gates
1. Review each candidate against the active catalogue AND retired-recipes register. Compare ingredients and method, not just spelling. Reject renamed copies and decorative variants without useful distinct recipes.
2. Confirm individual source recipe and audience evidence. Record source URL and access date. Write original prose; do not copy publisher text, reviews or photos. Do not claim national search rankings without data.
3. Write complete metric-first ingredients with quantities, instructions, yield, specific explanatory advice, tips, serving suggestions and grounded storage guidance. Source schemas already showed joined ingredient lines and misencoded temperatures: do not bulk-import them unchanged.
4. Account for sequential/parallel cooking and required cooling/chilling/proving. Include every wait or explicitly mark it untimed. Keep titles, snippets, visible times, filters and JSON-LD consistent. Never invent nutrition or testing evidence.
5. Use existing normal recipe templates and crawlable categories/related links. Preserve one primary Recipe entity, preferred HTTPS non-www canonicals, honest dates and sitemap inclusion. No keyword-stuffed per-country landing pages.
6. Use only reviewed real photographs with commercial-use provenance. Leave image fields empty when no correct photograph exists; report rich-result eligibility limits. Never add unrelated placeholders or reuse a retired slug.
7. Run dedupe on names and finished volumes, all existing audits, build/check, stable repeat build, ad comparison and rendered desktop/mobile checks. Inspect new pages and ensure no regressions to existing recipe content/dates/URLs.
8. Keep the addition on a review branch; Claude integrates agreed work. Obtain owner approval before production merge/deployment. Google indexing is not guaranteed.

## Verification at this checkpoint
Baseline build and full check passed against current main (logs retained in /workspace/artifacts/five-countries-500-2026-10-25). The expansion-screen fixtures and modification-date regressions pass. Current first-batch checks and limitations are recorded in FIRST-BATCH.md and FIRST-BATCH.json. The earlier CHECKS.md concerns the research-only commit d5460f59; it is historical, not the status of the completed five drafts.

## First five review pages
- Cowboy Pie — British Dinner.
- Chocolate Concrete — British Baking.
- Cheese and Herb Quick Bread — Australian Baking.
- Chicken Cobbler — American Dinner.
- Hundreds and Thousands Biscuits — New Zealand Baking.

Canadian recipe authoring remains pending. These cuisines describe the draft style, not measured national search demand. All five have full ingredients/methods and original explanatory text, not placeholder recipe pages. There are no new photographs; Recipe.image remains absent and recipe rich-result eligibility is limited until correct licensed photographs are reviewed. Ordinary web indexability is a separate question.
