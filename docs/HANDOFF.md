# Shared handoff: Claude (recipe content) and Codex (technical review)

Maintained by Claude. Codex: add your own section below, on your own branch, and tell Claude the branch and SHA so it can be reviewed before integration.

## Roles
- **Claude:** recipe content and food-safety corrections; integration owner for the final generated output (`npm run build`) once both sets of changes are reviewed.
- **Codex:** technical corrections and independent review.
- **Rules for both:** do not edit files assigned to the other; keep ads and monetization, recipe URLs and working features unchanged; no missing-image work; do not invent testing, cooking times or safety claims; do not merge or deploy until integration is reviewed. Generated files (root `*.html`, `recipes/`, sitemaps, `search-index.json`) are rebuilt only by the integration owner.

## State at 2026-10-21 (Claude)
- Production branch `main` is at `40a2386f` (PR #16, already merged and live before this handoff existed). It contains everything in `docs/release-2026-10-uncertainties/`.
- Claude's working branch for this round: `claude/recipe-content-handoff`, branched from `main` `40a2386f`. The previous branch `claude/culinaryvault-corrective-release` (`f55b6ddf`) is fully merged.
- **Codex's branch and notes: not available.** No Codex branch exists on origin and no Codex notes were found in the repository, so none of its work has been seen or reviewed.
- Review queue: 832 baseline findings all resolved (560 corrected, 272 valid exceptions). Nothing open that can be settled from text alone.

## Open items that need evidence (not to be settled by guesswork)
| Item | Evidence needed |
| --- | --- |
| Macarons shell cooling and ganache firming | One real, timed bake |
| Aguachile (raw prawns); steak tartare and carpaccio (raw beef) | Specialist decision on keeping and on wording for vulnerable readers |
| Makdous, betengan mekhalel, giardiniera | Tested process (pH, salt) or validated acidification |
| Miso ramen tare (raw garlic, 3 weeks) | Salt and water-activity figures, or specialist review |
| 717 recipes with fridge lives over 4 days (`docs/release-2026-10-uncertainties/food-long-fridge-lives.md`) | Per-category shelf-life policy |
| Runny yolks across the catalogue | Editorial and specialist decision |

## Not in this handoff
- Google Search Console domain verification (a DNS TXT record at the domain provider) is the owner's task; it is unrelated to recipe content and was not touched.

## Codex update — 21 October 2026 (after GitHub access was repaired)

This section supplements Claude's snapshot above. The owner installed ChatGPT Codex Connector; both review branches are now published. Nothing has been merged into main or deployed.

### Published branches and review order
- Production base remains `40a2386f0f0b75eeac0ec54570f619b07f1f2a66`.
- [Draft PR #17 — shared recipe schema and catalogue-wide crawl checks](https://github.com/jamesdillon9051-sketch/Culinaryrecipie/pull/17): branch `fix/sitewide-crawl-indexing-review`, tip `775470da2ce0e3cbf33b6f51cdd9c3bf982e43e9`; implementation `b7bd747db61ae7a7d2420a92c4b6a2bb16623d19`.
- [Draft PR #18 — 178 reviewed licensed photographs](https://github.com/jamesdillon9051-sketch/Culinaryrecipie/pull/18): branch `images/missing-recipe-photos`, photo implementation `23c54a1ec819f4ee274df1ff9a5049bc0fc35277`, based on `775470d`. This PR targets the crawl branch, keeping its diff separate. The subsequent documentation-only commit adds this handoff; its exact tip is visible in PR #18.
- Claude remains the final integration/regeneration owner. No additional generated output was rebuilt after reading Claude's new handoff. Reconcile both draft branches and Claude's current content before one combined regeneration; do not automatically merge or deploy the stack.

### Scope and checks
- Crawl changes remove the accidental incomplete microdata Recipe across 5,515 recipes while retaining complete JSON-LD, supply real step fragment targets, omit unsupported totalTime for 445 untimed methods, and track meaningful recipe/collection changes without rebuild-date churn. Slugs, canonical/sitemap membership, design, existing images and advertising are preserved.
- The owner's subsequent instruction to find missing recipe images explicitly authorized the photo work after the earlier image exclusion. The reviewed branch adds 178 real licensed photos (356 JPEG/WebP files and generated copies), credits and provenance. All 1,415 starting gaps were covered; 1,237 remain unresolved. No new AI images, fabricated reviews or cooking/testing claims were added.
- Build/check passed on the exact source/generated tree now published: 5,875 HTML pages, 5,871 sitemap URLs and 5,515 search records. Independent catalogue checks, 16 photo browser cases, 22 focused photo checks, source licence/hash checks, ad comparisons and an unchanged rebuild with zero date churn passed. This follow-up changes documentation only; it preserves all verified source/generated bytes.
- Local success is not production or Google validation. The crawl report records limited live coverage and environment transport failures; indexing status outside supplied Search Console evidence remains unknown.

### Claude actions and outstanding evidence
- Review [the crawl report and URL CSV](crawl-audit-2026-10-20/REPORT.md), [photo sources/previews and gap inventory](recipe-photos-2026-10-20/README.md), and [the detailed Codex/Claude handoff](release-2026-10-uncertainties/CODEX-CLAUDE-HANDOFF.md).
- Resolve IMAGE-CONTENT-01: `src/data/catalog-59.js:65` labels `trenette-al-pesto` Gluten-Free, but `src/data/details59/02-italian-c.js:303` lists ordinary `350 g trenette or linguine` without a gluten-free qualifier. The HTML prints the label. No wheat-pasta photo was selected and those content files were not edited.
- The separate, uncommitted `/workspace/Culinaryrecipie` validator worktree is not an ancestor of either published branch. Its stronger checks still identify 224 consistency review items (220 recipes), three confirmed raw-flour specification findings, four farmed-fish exemption questions and specialist cases. The detailed 236-record queue remains for evidence-based review. These are independent findings; do not treat the historical 832 as confirmed broken recipes or silently close the stronger findings because the base check passes.
- Preserve Claude's original handoff section and this Codex section together when integrating `claude/recipe-content-handoff`. Recipe catalogue/detail/rewrite and culinary-evidence ownership remain with Claude; none was changed by Codex.

## Codex merge completion and downloadable report — 21 October 2026

The owner has now approved the merges. [PR #17](https://github.com/jamesdillon9051-sketch/Culinaryrecipie/pull/17) merged as `b076ac8f03bbcad191a51ec6ea71522b26b3f3c8`; [PR #18](https://github.com/jamesdillon9051-sketch/Culinaryrecipie/pull/18) merged into main as `260ad311d43ed3833fd52384f3ae8af9f4e90d19`. Both are merged, superseding the earlier draft status. The implementation tree matches reviewed head `ab4c2107772e11ed733ddc36009ad3c031c2ddbd` exactly.

[Download the current PDF or text handoff](handoff-2026-10-21/README.md). It records changes, counts, checks, exact source paths and remaining actions. Fresh build/full check/ad comparison pass; the rebuild makes no tracked-file changes. This follow-up is documentation only; it changes no source, generated pages, dates or assets.

Claude still owns recipe content and subsequent integrated regeneration. The separate earlier validator/timing/neutral-ordering batch is not merged. The 236-record independent queue and IMAGE-CONTENT-01 remain open. No manual deployment was triggered; the 06:41 UTC Leche Flan sample still lacks the new image and its new JPG/WebP URLs return 404. Verify hosting rollout and live asset/markup consistency before claiming the photo changes are deployed. No Google indexing guarantee is made.


## Claude update, 2026-10-21 (after Codex PRs #17-#19)
Branch `claude/recipe-content-after-codex`, based on `origin/main` `c3bd2cbb`. Not merged, not deployed; generated output was rebuilt by Claude (integration owner) on this branch only.

- **Live deployment (checked 2026-10-21):** main's content is live. 81 of 81 sampled recipe pages (80 random plus leche-flan) match the merged build byte-for-byte; leche-flan and its .jpg/.webp return 200 (one transient 500 seen during rollout, 200 on three rechecks); 25 random new-photo .webp files return 200. Not a full-site verification.
- **IMAGE-CONTENT-01 fixed:** `trenette-al-pesto` lost its Gluten-Free tag (ingredient is ordinary wheat pasta; no ingredient change).
- **Flour fixed:** `edible-cookie-dough`, `cookie-dough-bites`, `cookie-dough-bars` no longer rely on a home 74 C oven treatment (no validated source). The unbaked dough now calls for flour sold as heat-treated and ready to eat raw; the bars' baked base keeps ordinary flour. Row cook times updated (0 and 3 min) because the flour step was removed; no new times invented. `tools/food-handling-audit.js` raw-flour rule updated to match. Whether a specific product is truly ready to eat is the label's claim; not verified.
- **Checks:** `npm run build`, `npm run check` (all passed), `selftest` 64/64, food-handling audit 0 confirmed, consistency audit 0 confirmed/0 open, ads unchanged vs 40a2386f.
- **Not done:** the 236-record queue in `docs/release-2026-10-uncertainties/codex-review-findings.json` (231 open, 5 specialist) has not been worked through; the unmerged validator batch (`fix/recipe-validation-review`, not seen) was not reconciled; photo sourcing for the 1,237 gaps is out of scope for this round.
