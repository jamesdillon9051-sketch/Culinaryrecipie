# Weekly Delight: Claude handoff to Codex

21 October 2026. Written by Claude (recipe content and food-safety owner, integration owner for generated output).

## 1. State of main
- `main` is at merge commit `c8d95127862832f6f58e3717934dba1631483cad` (PR #20), on top of your PRs #17, #18 and #19.
- Live site checked after the deploy (Hostinger auto-deploys main, about 5 to 6 minutes): 6 of 6 sampled pages match the build byte for byte (edible-cookie-dough, cookie-dough-bites, cookie-dough-bars, trenette-al-pesto, leche-flan, aioli). Earlier on 21 October, 81 of 81 sampled pages matched and 25 random new photo files returned 200; one transient 500 on leche-flan during rollout cleared on recheck. These are samples, not a full-site verification.
- Your rollout concern (leche-flan photo 404) is resolved: page and both image files return 200.

## 2. What Claude did after your PRs (PR #20)
- IMAGE-CONTENT-01: `trenette-al-pesto` lost its Gluten-Free tag (`src/data/catalog-59.js:65`); the ingredient is ordinary wheat pasta. Ingredient line unchanged.
- Flour: `edible-cookie-dough` (details31), `cookie-dough-bites` (details41), `cookie-dough-bars` (details55). Removed the home 74 C oven step (no validated source). Unbaked dough now specifies flour sold as heat-treated and ready to eat raw; the bars' baked base keeps ordinary flour. Row cook times changed to 0 and 3 minutes because the flour step was removed (`catalog-31.js:115`, `catalog-41.js:113`); no times were invented. Whether any product is truly ready to eat is the label's claim and was not verified.
- `tools/food-handling-audit.js` raw-flour rule and its self-test cases updated to require ready-to-eat flour in the ingredients.
- Output rebuilt by Claude. Checks: `npm run build`, `npm run check` (all passed), `npm run selftest` 64/64, food audit 0 confirmed, consistency audit 0 open, `tools/ads-unchanged.js --against 40a2386f` unchanged.

## 3. Earlier Claude work already in main (PR #16)
Timing reader and untimed-wait disclosure, 832 baseline findings all resolved (560 corrected, 272 valid exceptions), and 155 food-handling corrections (oil preserves 4 days, unprocessed jars to the fridge, pasteurised eggs, fish parasite freezing, marinades, custard cooling). New `tools/food-handling-audit.js` (`npm run food`). Details: `docs/release-2026-10-uncertainties/COMPLETION-REPORT.md`, `food-handling-review.md`, `resolutions.json`.

## 4. Not done (open for Codex or the owner)
- Your 236-record queue (`docs/release-2026-10-uncertainties/codex-review-findings.json`: 231 open, 5 specialist). Claude has NOT worked through it; the flour and trenette items above are the only ones addressed.
- Your unmerged validator batch (`fix/recipe-validation-review`, and the UNMERGED-validator-source-review.patch). Claude has not seen it and has not reconciled overlaps. Claude changed `tools/food-handling-audit.js`, `tools/check.js`, `tools/recipe-consistency.js`, `tools/consistency-*.js`, `src/lib/timing.js` earlier in the project: expect conflicts there.
- `popularity = reviews * rating` in `src/build.js:421` is still an ordering weight (not printed as reviews).
- Photo sourcing for the 1,237 recipes with no picture (owner excluded this from Claude's scope).

## 5. Evidence still needed (do not guess)
| Item | Evidence needed |
| --- | --- |
| Macarons shell cooling and ganache firming | One real timed bake |
| Aguachile (raw prawns); steak tartare and carpaccio (raw beef) | Specialist decision on keeping and wording |
| Makdous, betengan mekhalel, giardiniera | Tested process (pH, salt) or validated acidification |
| Miso ramen tare (raw garlic, 3 weeks) | Salt and water-activity figures, or specialist review |
| 717 recipes with fridge lives over 4 days (`food-long-fridge-lives.md`) | Per-category shelf-life policy |
| Runny yolks catalogue-wide | Editorial and specialist decision |
| Flour products named as ready to eat raw | Manufacturer label evidence, if the owner wants a named product |

## 6. Rules both sides follow
Do not edit the other's files without telling them; keep ads, monetization, recipe URLs and working features unchanged; no invented testing, cooking times or safety claims; no bulk deletion, noindex or redirects; generated files are rebuilt only by the integration owner (Claude) after both sets of changes are reviewed; do not deploy without the owner.

## 7. Owner tasks outside the repository
- Google Search Console: add the TXT record `google-site-verification=iANfaIwBdtgnyiltf9BWYdlVx_8loC2ZpciV2W8Ct_s` for weeklydelight.com at the domain provider (Hostinger DNS), then press Verify. Not yet done as of this note. Claude cannot do it: the Hostinger connector is not signed in.
- Clear Hostinger's cache after deploys if stale pages appear (the CDN was passing pages through at last check).

## 8. Read first
`docs/HANDOFF.md` (shared state, maintained by both), this file, then `docs/release-2026-10-uncertainties/COMPLETION-REPORT.md`.
