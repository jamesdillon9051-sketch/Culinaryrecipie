# Codex to Claude: indexing follow-up
23 October 2026. Review branch only; no merge or deployment.

## References and ownership
- Base/main: `9ebb8489fcd60909be13623c24b25a86b5dbd115`.
- Branch: `audit/google-indexing-followup-2026-10-22`.
- Exact tested source commit: `e822110d7075d4f2917559b465a1d15ac61f23c7`.
- PR #26 is already merged; its older “not merged” handoff passages are historical. PR #21 remains an open draft. This branch includes its optional numbered step-name fix without copying its old check.js.
- Codex owns technical sources/tests and independent review. Claude owns recipe content, food-safety evidence/dispositions and combined regeneration.
- No recipe catalogue/details, photos, ad code or generated output changed in this follow-up.

## Safe implementation ready for review
Review all nine paths in verification.json: SEO snippet time/nutrition guards; ingredient-hub elapsed-time minimum; dynamic 92-cuisine heading; truthful category navigation/filter destination; omission of optional generic HowToStep.name; focused regressions wired into existing checks; honest wording for 15 existing duplicate exceptions.

The exact source passed build/check/rebuild/ad comparisons before environment loss and matches recorded SHA256 after publication. Full report is README.md. Raw verification logs were inaccessible after environment_offline; verification.json records completed summaries and exact source hashes. Browser desktop cases through category passed; final mobile/controls and Google's Rich Results Test remain unverified.

On isolated regeneration: 427 descriptions and 26 titles change across 444 URLs, one H1 changes, and 31,893 optional names disappear. Other Recipe properties remain unchanged on all 5,515 pages; zero recipe date/hash changes and 291 collection date/hash changes. Second build changes nothing. Keep recipeMarkup version unchanged for this correction and do not force date refreshes.

## Recipe content: exact actionable evidence
authored-time-claims.csv contains all 37 still-present original authored claims across 35 recipes, recovered independently from the 72 historical rows and current source. Do not assume generated guards also edit authored fields.

| Recipe | Current source record | Authored claim and conflicting requirement |
| --- | --- | --- |
| apple-turnovers | src/data/details22/puddings.js:161 | Meta says “Ready in 45 minutes”; cooling completely is untimed. |
| banana-cupcakes | src/data/details55/01-cookies-cakes-and-biscuits-a.js:329 | Meta says “ready in 45 minutes”; cooling completely is untimed (loaded prep + cook is 42). |
| mazurek | src/data/details62/01-polish-czech-a.js:84 | Meta says “ready in 55 minutes”; cooling the base and setting the topping for a few hours are untimed. |
| poire-belle-helene | src/data/details58/01-french-classics-a.js:769 | Description and meta say “ready in 35 minutes”; served cold with untimed cooling. |
| ovos-moles | src/data/details61/03-portuguese-greek.js:214 | Description and meta say “ready in 45 minutes”; cooling completely is untimed. |

Substantiate complete elapsed allocation/overlap or qualify/remove unsupported ready-in wording. Do not invent wait durations or cooking results. These are review items, not 37 confirmed broken recipes.

Historical docs/release-2026-10-uncertainties/codex-review-findings.json has 236 records at 40a2386f: 231 open / five specialist. All 152 short-wait texts remain; 37 of 72 old time-claim phrases remain and 35 have changed. Changed text does not automatically close the historical entry. Keep dispositions explicit with evidence.

Eight previously reported diet labels are already removed in PR #26: Gluten-Free from panettone-bread-pudding, slow-cooker-beef-ragu, tortellini-panna-e-prosciutto, cannelloni-ricotta-e-spinaci and pull-apart-cheese-bread; Dairy-Free from nutella-cookies and nutella-brownies; Vegetarian from florida-grouper-sandwich. chocolate-pots now specifies pasteurised/British Lion yolks. Three raw-flour source specifications were corrected; no kitchen/supplier proof is claimed. Do not reopen these as unchanged old findings.

Supplier/exemption questions remain for raw salmon in:
- gravlax — src/data/details2/europe.js:298.
- lomi-lomi-salmon — src/data/details31/01b-dinners.js:210.
- chirashi-bowl — src/data/details39/01-japanese-asian-and-curries.js:189.
- salmon-poke-bowls — src/data/details44/03-lamb-and-fish.js:242.

A “farmed or previously frozen” statement is not independently verified supplier evidence.

Five historical specialist rows remain:
- aguachile: raw prawns, src/data/details3/mexican.js:54.
- steak-tartare: raw beef, src/data/details15/mains.js:492.
- carpaccio: raw beef, src/data/details16/antipasti.js:56.
- lime-pickle: under oil up to two months, src/data/details48/03-south-indian-sweets-drinks-and-pressure-cooker.js:695.
- mango-pickle: up to three months, same file:730.

The pickle ledger cites a pH threshold while admitting unmeasured pH. Do not fabricate a finished-mixture measurement from ingredient acidity. All 26 testing-register entries remain “not cooked”; preserve the honest disclosure.

tools/duplicates-audit.js retains 15 KNOWN pairs. Compare exact ingredients/methods and user purpose before proposing any consolidation, with exact URLs/redirect plan for approval. No pair was deleted or redirected. Seventy collections with one to five recipes merit usefulness review; seven are in the historical export. No automatic noindex or deletion.

## Hosting and Google evidence
Read HOSTINGER-HANDOFF.md before any config proposal. Earlier self-307 redirects on robots/sitemap/deep routes need host tracing; exact origin/CDN/intermediary is unverified. No authenticated hPanel access is available here. The later Canederli request failed in our envoy tunnel, not a confirmed site-origin 503.

Coverage: 5,871 intended pages checked locally; 1,216 origin 200s confirmed (all 356 nonrecipes plus 860 recipes). 4,655 origin responses remain unknown because the proxy run stopped. The conservative recovered CSV does not guess the 860 recipe HTTP identities from missing row logs.

Historical Search Console export has 1,000 examples, not all 2,982 screenshot exclusions. “Pending” is validation status; 1970-01-01 is sentinel/unavailable. No individual URLs were confirmed indexed; current Google statuses remain unknown. Manual actions/removals/security and crawl scheduling require fresh account evidence.

## Integration sequence
1. Review e822110 and current main. Integrate source only on Claude's review branch, preserving concurrent catalogue edits.
2. Resolve/record content dispositions supported by evidence; do not clear warnings to obtain green output.
3. Regenerate once as integration owner; run build/check/selftest and focused tests/ad comparisons. Review the 291 collection date/hash changes and confirm recipe dates were not mass-refreshed; repeat build must be stable.
4. Complete mobile/control tests and Google's Rich Results Test. Finish restrained live coverage after transport recovery, and host-log investigation.
5. Present review result to owner; do not merge/deploy until approval. After approved deployment, verify actual live revision, redirects/headers/robots/all 12 sitemaps/schema/error statuses and fresh Search Console observations.
