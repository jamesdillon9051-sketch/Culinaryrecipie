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
