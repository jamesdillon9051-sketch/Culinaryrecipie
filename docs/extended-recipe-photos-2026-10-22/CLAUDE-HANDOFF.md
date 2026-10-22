# Claude handoff: extended recipe-photo search, 22 October 2026

## Review reference and ownership

- Repository: `jamesdillon9051-sketch/Culinaryrecipie`.
- Base/main: `29fc1cb15d721efdb1aaca734d57323f60969c30`, rechecked against GitHub before completion. PR #25 is already merged; the historical handoff is not treated as the current branch state.
- Review branch: `images/extended-photo-search-2026-10-22`.
- **Photo implementation commit: `b5b9cb889bc4d103b8575a12e8cedcd2886ef7ef`.** The subsequent documentation commit adds this report and evidence. Review this branch against the base; do not assume the source changes are deployed.
- Codex: photo discovery, individual source/licence checks, independent Claude-photo review, safe asset/registry adoption and verification. Claude: recipe-content corrections and integration owner for the final shared regeneration.
- No merge, deployment or new PR. PR #23 was closed only after both of its commits (`265a694f01d5a9e780f8f14dc16005f45811093e`, `2dc6dc4291b2717feb9dab400e76814d18ed19d1`) were verified as ancestors of main, as Claude requested. Draft PR #21 (`audit/google-reach-2026-10-21`) remains open and unmerged; retain its separate review status.

## Changes

**226 individually reviewed real photos:** 220 fill the 906 starting gaps, and 6 replace existing heroes. Sources: 90 Wikimedia Commons, 83 Pexels, 26 Flickr, 25 Pixabay, 1 Stockvault and 1 StockSnap. Every selected source has saved individual licence/creator evidence and an actual 800×600 JPG/WebP crop review. No illustrations were generated and no recipe title, slug, ingredient, method, timing, diet tag, template, ad or monetization source was changed.

Two existing heroes were invalid for their assignments: the creator explicitly labels the original `huhnersuppe-mit-nudeln` image AI-created, and the `persian-lentil-rice` source explicitly describes beef despite the recipe's Vegetarian/Vegan labels. The soup has a real-photo replacement. Persian rice remains without a photo: two further native Commons candidates have unestablished meat-like toppings and were held, not declared vegan.

Two preparation images were preserved, with their original credits, as `ham-and-cheese-sliders-process` and `instant-pot-beef-brisket-process`. Sliders still needs a finished hero; brisket now has a finished hero plus its preserved preparation shot. All 483 pre-existing process records and all 966 associated JPG/WebP bytes are unchanged. Four closer replacements improve `churro-waffles`, `instant-pot-chicken-thighs`, `witch-finger-cookies`, and `egyptian-rice-with-vermicelli`. Original assets remain recoverable from the base commit, with verified external backups used during adoption.

The unsafe attached helper that overwrote whole registry entries was not used. Adoption used the existing merge-preserving review publisher, with explicit per-recipe replacement selections and assertions protecting all process metadata/assets.

Changed source: `src/data/images.json`, `src/data/image-rejects.json`, recipe JPG/WebP assets; derived `README.md`, `MISSING-IMAGES.txt`, `images-attribution.md`. The implementation commit changes 463 files, including asset additions, replacements, preparation-photo renames and the unsuitable Persian-photo withdrawal. Documentation is under this directory and appended to `docs/HANDOFF.md`. Public generated pages/assets, sitemaps and `src/data/content-dates.json` were deliberately left for Claude's reviewed integration build.

## Coverage and counts

| Repository hero-based inventory | Before | After |
| --- | ---: | ---: |
| Recipes with photographic heroes | 4,508 | 4,726 |
| Recipes with legacy illustration heroes | 101 | 101 |
| Recipes without a hero picture | 906 | 688 |
| Total recipes | 5,515 | 5,515 |

The 688 comprise 686 unfilled starting gaps plus the two cleared heroes. Sliders retains a preparation picture, so exactly 687 recipes have no picture in either slot. Counting a photograph in either hero/process gives 4,728 recipes; the remaining 100 have only a legacy illustration. These definitions are recorded separately in `summary.json`; do not add process photos to the hero count. The registry contains 5,211 real-photo records (4,726 hero and 485 process) and 101 illustrations. `selected.csv` has 228 credit rows: 226 selected heroes plus the 2 preserved preparation-photo assignments.

All 906 starting gaps have query plans and URL-level outcomes in [coverage.csv](coverage.csv). The plan has 1,109 query variants; the focused replacement/hard-dish pass adds 140 variants for 62 recipes across four libraries. Searches also reused Claude's 1,242 Commons leads for 407 recipes and the prior supplemental stock-library pool. **3,378 staged thumbnails and all 405 processable full-size candidates were reviewed**; 8 additional candidates failed the unchanged processing gate and were not forced through. Two further targeted Persian candidates were independently held after source/full-size review. The 52 full-size source-detail holds are not approved photos.

Four extended providers have all 1,109 planned rows recorded (Commons, Pexels, Pixabay and PxHere); recorded errors remain unverified. Flickr stopped after a known-positive control failed (659 rows recorded, 450 planned queries without a recorded result); StockSnap also stopped on its control limitation (722 rows, 387 outstanding). Never reinterpret failed controls, 403s or bounded empty searches as proof that no suitable photograph exists. Search controls and exact outstanding counts are in [search-summary.csv](search-summary.csv) and [search-query-outcomes.csv](search-query-outcomes.csv). Other library searches and individual checks included Rawpixel, Kaboompics and Stockvault; original-source chains were followed where needed, including Burst and ISO Republic. Unsplash required credentials; Openverse/PublicDomainPictures returned 403, and were not bypassed. The attempted public Flickr browser control failed certificate validation and was not counted as a successful search.

This is a substantial bounded search, not a claim that the internet is exhausted. No image was selected merely to fill a counter. Exact recipe reproduction, hidden ingredients, allergen cross-contamination, appliance use, cooking safety and personal testing are not established by a stock photograph. Disclosed cut/garnish/form differences remain reviewable in [selected.csv](selected.csv) and [all previews](PREVIEWS.md).

## Independent review of Claude's merged 233 photos

All 233 were reviewed at full size and their primary licences and creators checked (229 Flickr, 4 Commons). Original review classifications: 208 with no confirmed dish/diet conflict; 20 source/closer-match reviews; 1 recipe diet-label issue; 2 preparation-stage images; 2 confirmed unsuitable heroes. These are review categories, not 25 broken recipes. Source captions prevented false bacon/sugar/raw-food accusations; the exact observations are retained.

Saved live checks observed HTTP 200 for all 233 recipe pages and all 233 WebPs, matching base HTML/photo bytes, expected canonicals, photo references and one primary Recipe JSON-LD entity per page. This verifies the then-current published base, **not this unpublished photo branch**, and does not establish Google indexing. Read [the independent review](claude-audit-report.md) and [all 233 rows](claude-audit.csv).

Global canonical-source and byte-hash audits found 15 pre-existing duplicate-source groups and 6 byte-identical JPG groups before and after. No new source-ID or identical-byte duplicate was introduced. A perceptual-hash collision between mussels and steak was visually resolved as different food; a near-identical chocolate-drink shoot and an exact repeated meatball source were rejected. Do not report global zero duplicates. Historical sibling reuse remains documented for a separate content review.

## Verification

- Fresh base build/check passed; source counts and content dates matched main before comparison.
- Final isolated `npm run build` and `npm run check` passed: **5,875 HTML pages, 5,871 sitemap URLs, 5,515 search records**. Image inventory has no broken references, unused source/output files, shared filenames or unpublished-recipe records. Selected 452 JPG/WebP assets decode at 800×600 and match their reviewed processed bytes.
- Chromium: **32 desktop/mobile cases, 442 checks, zero failures**, including primary Recipe schema, canonical URLs, actual photo loads, JPG fallback, licence/creator/source links, required creator-site links, process-only sliders, brisket's two roles, and no overflow. External ad/analytics requests were aborted in the local browser; this is not an ad-delivery test. Advertising code/configuration and sampled generated ad markup were separately unchanged against both `29fc1cb` and `ac8dbc13`.
- Exactly **228 recipe** date/hash records and **106 collection/info** records change in the isolated integration build. Every changed recipe has an image-entry change; no unrelated recipe date moves. A second build changes zero generated files or date/hash records across 16,541 checked output files. Do not copy isolated generated dates blindly onto newer Claude content.
- All 226 selected recipe ingredient/method/tag fingerprints match the reviewed snapshot. Recheck them against Claude's future changes with [recipe-fingerprints.json](recipe-fingerprints.json).
- Local validation is distinct from Google's Rich Results Test and actual indexing. No Google validation or indexing result is claimed. Existing optional schema/content review warnings have not been silenced and no cooking evidence has been invented.

Machine-readable verification, build/check logs and independent asset audit accompany this report. The restricted shell initially refused Node audit subprocesses; the same unchanged checks passed with the managed environment's additional network execution permission. A baseline-copy setup containing unregistered new assets was corrected before taking the clean baseline. Neither setup failure was classified as a production defect.

## Exact content handoff to Claude

No recipe-content file was edited. Resolve against current source; [the detailed review](claude-audit-report.md) records quoted lines and evidence.

1. `chocolate-pots`: `src/data/details56/01-ice-cream-fudge-and-no-bake-a.js:18`, ingredient line 27: unqualified **3 egg yolks**. Method lines 35–38 mixes yolks after hot cream stands, then chills without a safe custard-temperature step; prose says warm, not hot. Resolve the existing pasteurised-egg/cooked-custard requirement using supported guidance.
2. `panettone-bread-pudding`: `src/data/catalog-50.js:81` says Gluten-Free; `src/data/details50/03-british-bakes-portuguese-and-spanish.js:21` uses ordinary **500 g panettone**. Derived GF status incorrectly says clean. Correct the unsupported claim/ingredient specification, then add a targeted diet-recognizer regression in a separate technical scope.
3. `slow-cooker-beef-ragu`: `src/data/catalog-50.js:116` says Gluten-Free; `src/data/details50/04-spanish-french-and-sauces.js:368` uses unqualified **400 g pappardelle**, cooked at line 376. Derived GF status incorrectly says clean. Ordinary wheat pasta does not support the label.
4. `nutella-cookies`: `src/data/catalog-55.js:93` says Dairy-Free; `src/data/details55/03-lemon-nutella-oat-and-peanut-butter.js:449` uses ordinary **200 g Nutella**, directly used at line 458. Derived DF status incorrectly says clean. Manufacturer's ordinary-product ingredients explicitly list skimmed milk powder; a separately branded plant-based product does not establish this recipe's claim.

Keep specialist food-handling questions and historical review findings open unless current cooking/source evidence resolves them. This photo batch is not a recipe-safety certification.

## Claude integration and deployment checklist

1. Review implementation commit `b5b9cb889bc4d103b8575a12e8cedcd2886ef7ef` and this branch's documentation. Review source matches/serving differences in `selected.csv`/`PREVIEWS.md`, then compare ingredient/method/tag fingerprints against Claude's current edits. Retain 483 original process records and both intentional reclassifications.
2. Integrate the approved source changes on a separate integration branch. Do not mix in draft PR #21 without its own review. Preserve main's corrected native-ad-slot counter and all monetization. No domain/slug changes.
3. As integration owner, run `npm run missing`, `npm run readme`, `npm run attribution`, `npm run build`, `npm run check`; build again and confirm stability. Review content-date changes for only genuinely changed recipes/listings. Re-run ad comparisons against the agreed base and `ac8dbc13`.
4. Confirm generated assets/credits/Recipe images, process-only sliders, soup real-photo replacement and Persian placeholder; check representative mobile pages. Commit the reviewed generated output, public asset copies, sitemaps and meaningful content-date register in the integration branch.
5. Obtain the owner's approval before merge/deployment. After approved deployment, check HTTP 200 images/pages, creator/licence links, one primary Recipe entity, canonical/robots directives, sitemap photo/date consistency and ad delivery on representative live URLs. Use Google's Rich Results Test where available, identify that result separately, then monitor Search Console over time. Do not repeatedly resubmit sitemaps or promise traffic/indexing.

## Files for review

- [Phone PDF](WeeklyDelight-Extended-Photo-Handoff.pdf), this full Markdown handoff, [previews](PREVIEWS.md).
- [226 selected sources/credits and variations](selected.csv), [230 changed registry slots](registry-changes.csv), [all 906 starting gaps](coverage.csv).
- [Per-selected-photo source evidence](source-evidence.json), [recipe fingerprints](recipe-fingerprints.json), [counts](summary.json).
- [233-photo Claude audit](claude-audit.csv), [source coverage/limits](search-summary.csv), [individual search outcomes](search-query-outcomes.csv).
- [Final build verification](verification-final.json), [browser checks](verification-browser.json), before/after duplicate audits, and saved build/check/ad logs.
