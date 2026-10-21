# Content review for Claude — source remains unchanged

Base `40a2386f0f0b75eeac0ec54570f619b07f1f2a66`; technical review branch `fix/sitewide-crawl-indexing-review`. Codex changed generators, tooling and meaningful date records, not recipe content. No direct Claude session or acknowledgement is available. Claim source files in the [shared handoff](../release-2026-10-uncertainties/CODEX-CLAUDE-HANDOFF.md) before concurrent edits.

The supplied exclusion export covers 1,000 URLs. No individually confirmed indexed comparison pages were supplied. The sample below compares the affected example with other source recipes of **unknown indexing status**, not an invented indexed control group.

| Recipe / exact source | Evidence / required action |
| --- | --- |
| `baked-peaches-with-cinnamon`, `src/data/details33/05-snacks-and-desserts.js:369` | Ingredient quantities, four steps, four servings, prep 5 + bake 25 = 30 minutes agree. Almonds are added for the last five minutes of the bake, not another sequential bake. No missing essential step confirmed in this sample. Template duplication was technical and is fixed. No cooking claim made. |
| `pasta-e-fagioli`, `src/data/details3/italian.js:49`, step 8 | “Rest 10 minutes off the heat so it thickens properly.” The short rest is below the parser cutoff. Explicitly allocate it to preparation/overlap or revise the elapsed model; do not silently assume overlap. Pasta's package/readiness stage remains untimed. |
| `lasagna-bolognese`, `src/data/details/italian.js:97`, steps 5–7; `src/data/timing-overrides.json` | Default timed cooking sums to 241–271 minutes; prep 45 + rest 20 gives 306–336 elapsed minutes. The override assumes besciamella/preheating happen during the ragù simmer, but the method does not explicitly state that parallel allocation. Clarify the sequence and equipment assumption, or correct the model based on evidence. |
| `banoffee-pie`, `src/data/details17/puddings.js:472`, steps 1–5 | Prepared-caramel route skips heating steps, but the next instruction still says “While the toffee bakes.” Clarify the biscuit-base/chill route. Cooling is untimed. Retain the safer open-dish method; do not return to heating sealed cans. |
| `macarons`, `src/data/details/french.js:525` | Explicit 55 + 55 g whites and parallel ganache work are present. 1,544–1,576 timed minutes remain a lower bound because cooling/firming are untimed. Add complete timing only with evidence from the intended method. |
| `dal-makhani`, `src/data/details3/indian.js:48`; `moussaka`, `src/data/details/mediterranean.js:42` | Existing textual overlaps are present; source arithmetic is coherent under the recorded multi-pan/tray assumptions. These are conditional textual checks, not measured cooking verification. |
| `edible-cookie-dough`, `src/data/details31/04b-desserts-and-holidays.js:76`; `cookie-dough-bites`, `src/data/details41/05-puddings-cakes-and-sweet-bakes.js:495`; `cookie-dough-bars`, `src/data/details55/02-cookies-cakes-and-biscuits-b.js:402` | Unbaked dough relies on ordinary/home-treated flour and/or 74°C/165°F. FDA explicitly advises against home flour heat treatment. Specify commercially treated flour labelled ready to eat, a validated process, or a cooked alternative, then reconcile quantities, steps and claims. Keep the bars' baked base distinct from its unbaked topping. These remain confirmed findings in the stronger earlier review. |

The [236-record queue](../release-2026-10-uncertainties/codex-review-findings.json) contains stable IDs, URL, file, line, source commit/fingerprint, evidence, owner and required decisions for all 231 affected recipe identifiers. It retains 152 short-wait questions, 72 unqualified readiness claims, three flour issues, four farmed-fish exemption questions, three specialist cases and two challenged pickle exceptions. Rechecking all 139 named source files found no content difference between this branch and the earlier review worktree. Do not close these records just because the older main-branch validator does not report them.

Raw-fish cases are `gravlax` (`src/data/details2/europe.js`), `lomi-lomi-salmon` (`src/data/details31/01b-dinners.js`), `chirashi-bowl` (`src/data/details39/01-japanese-asian-and-curries.js`) and `salmon-poke-bowls` (`src/data/details44/03-lamb-and-fish.js`). “Farmed” alone does not demonstrate a supplier-backed parasite-freezing exemption. Exact ingredient text is in the queue. Existing specialist cases are aguachile, steak tartare and carpaccio. Lime/mango pickle pH and long storage conclusions have no measured evidence; accepted-ledger status is not proof of a safe finished product.

Sources for the evidence questions, retained from the earlier independent review:

* [FDA: Handling Flour Safely](https://www.fda.gov/food/buy-store-serve-safe-food/handling-flour-safely-what-you-need-know).
* [FSA: freezing fish and parasite treatment](https://www.gov.uk/government/publications/freezing-fish-fishery-products-and-treatment-for-parasites/freezing-fish-fishery-products-and-treatment-for-parasites).
* [Carnation: open-dish caramelized milk](https://www.verybestbaking.com/carnation/recipes/caramelized-milk-dulce-de-leche/).

## Duplicate and collection review, without automatic consolidation

`tools/duplicates-audit.js` exempts 15 historical pairs. Its passing output does not prove those pairs have independent search intent. All are retained; no redirect or deletion is proposed without individual source/traffic review.

Two independently examined candidates:

* `https://weeklydelight.com/recipes/classic-potato-salad/` — `src/data/details2/american-sides.js:206` — versus `https://weeklydelight.com/recipes/potato-salad/` — `src/data/details19/americas.js:430`. Both are American potato/mayonnaise/mustard/egg/pickle salads. There are real method and proportion differences: whole potatoes 18–22 minutes versus chunks 12 minutes, 250 g versus 180 g mayonnaise, and different herb/allium choices. Review whether titles, descriptions and navigation communicate a useful variant. Shared subject is evidence for review, not a confirmed duplicate-method finding.
* `https://weeklydelight.com/recipes/aubergine-parmigiana/` — `src/data/details11/vegan.js:110` — versus `https://weeklydelight.com/recipes/melanzane-alla-parmigiana/` — `src/data/details2/italian.js:109`. Both layer aubergine, tomato, mozzarella and Parmigiano. The former uses 1.5 kg aubergine and a lower-oil preparation; the latter specifies 250 ml frying oil and 400 g mozzarella. Verify the distinction readers should see and avoid unsupported diet expectations from a source filename. No page consolidation implemented.

The complete known-pair list remains in `tools/duplicates-audit.js` with exact slugs. The ordinary duplicate detector found no new exact-title/core/phrase/method/shell failure; its exceptions remain visible here.

The URL CSV flags all collections with fewer than six source recipes for manual usefulness review. Export examples include `/categories/lunch/scottish/` and `/categories/lunch/tunisian/` (four recipes each), `/categories/appetizers/peruvian/` (five), and `/cuisines/burmese/` (three). These pages contain ordinary recipe and parent/sibling navigation. Small size alone does not establish uselessness or justify noindex. Review the actual selection and navigational value; keep useful categories and propose any consolidation with exact URL-level evidence.
