# Multi-source recipe-photo review — 21 October 2026

34 further missing recipe photographs are prepared on `images/multi-source-recipe-photos-2026-10-21`: **26 Pexels, 6 Pixabay, 1 Kaboompics, 1 Stockvault**. These are additional to the 64 photos in unmerged draft PR #22. Nothing in this batch is merged or deployed.

## Base, ownership and counts

- Exact base: `ee17093739845ae86a831be8347cfec9e2283092`, tip of `images/remaining-recipe-photos-2026-10-21` / PR #22. Production main was independently rechecked as `c8d95127862832f6f58e3717934dba1631483cad`.
- Codex owns this photo-source review, metadata, assets and the confirmed validator correction. Claude owns recipe content and the final integrated regeneration. No recipe ingredients, methods, author claims, dietary tags, slugs, ads or design source were changed.
- Before this batch: 5,515 recipes; 4,241 photographed; 101 legacy illustration-only; 1,173 without a picture. After regeneration with both photo branches: **4,275 photographed, 101 illustration-only, 1,139 without a picture**. All 34 new JPEG/WebP pairs are 800×600, about 3.14 MB combined.
- Source work only is committed. Root recipe HTML, public asset copies, search index, sitemaps and `src/data/content-dates.json` are reserved for Claude's combined build. The existing source records and image files are preserved.

## Search and review

See [source coverage](SOURCES.md). The exact-title pass attempted 1,173 recipes at each of Pexels, Pixabay and PxHere and 459 at StockSnap before a 403. Seven further libraries received food-family searches, with access stops recorded. The search tools record unverified/blocked outcomes separately from a bounded search with no eligible result. Nineteen ambiguous Pixabay zero-result models were reclassified as unverified rather than treated as proof of no photographs.

All 667 staged thumbnails were screened; 90 candidates were reviewed at full-size, including the final crops for selected photos. Wrong dishes, raw ingredients, uncooked assemblies, wildlife/name homonyms, renderings, AI images and unclear licences were excluded. Examples include shrimp/beef advertised as chicken fajitas, meat in a vegan lentil-soup photo, uncooked pizza bagels, and a CC0 search result whose individual licence was NonCommercial. The [667-candidate register](screened-candidates.csv) records publication status; unselected leads are not approved.

The source descriptions and visible images were checked against current ingredient lists and dietary labels. Stock photos can show a serving variation, and do not demonstrate use of an air fryer or slow cooker. Differences and limits are explicit in [all 34 previews](PREVIEWS.md), [source/credit CSV](selected.csv) and [provenance](selected-provenance.json). No reviews, cooking tests, recipe authors, nutrition or step images were invented. No new illustrations were generated.

## Changes

- `src/data/images.json` and 68 new files under `src/assets/img/recipes/`: reviewed photos and creator/licence records. Stockvault names an archive uploader rather than a known photographer; the credit uses `Unknown` and image schema omits an invented creator.
- `tools/source-online-photos.py`, `tools/online-photo-sourcing-test.py`: resumable public searches with positive controls, finite response budgets, rate limits/backoff, paid-widget exclusions, provenance/visual-review warnings and separate unverified outcomes. No publication happens from a search.
- `tools/fetch_images.py`: accepts only the newly reviewed exact `Kaboompics Standard License` name. Editorial-only, unknown stock licences, NC and ND remain rejected.
- `tools/make-attribution.js` and derived `images-attribution.md`: name the actual stock licences and restrictions instead of describing all stock assets as Pixabay. Missing-photo wording describes a current review gap, not an exhaustive absence of photos.
- `tools/native-ad-slot-count.js`, its eight-case regression, and `tools/check.js`: correct a confirmed audit false positive. The old whole-document substring counter counted “container-” twice in a photo's Pexels URL as two extra ads. The new check counts native embed elements; missing or extra real slots still fail. Advertising templates/configuration are unchanged.
- `MISSING-IMAGES.txt`, `README.md`, this review directory and `docs/HANDOFF.md`: current counts and coordination.

## Verification

`npm run build && npm run check` **passed** in the isolated verification copy: **5,875 HTML pages, 5,871 sitemap URLs and 5,515 search records**. All 68 new JPG/WebP assets decode at 800×600 and match their recorded SHA-256 hashes and generated copies. All 34 affected generated pages have a single primary Recipe, the expected image licence and creator (omitted for Unknown), the preferred canonical and no accidental noindex.

**16 desktop/mobile browser cases passed:** actual hero-image loading, visible credits and source/licence links, image schema, canonical identity, no horizontal overflow and no page JavaScript errors. Third parties were blocked only in this local preview harness; production advertising code was unchanged. Source ads comparisons passed against the base commit; ad markup on all 34 affected generated pages matches the base pages.

The public-source/strict licence-gate regressions, six photo-processing checks and eight native-ad counter regressions passed. The initial full check's one false positive was investigated and fixed at its cause; missing real ad slots still fail the regression suite. An unchanged rebuild changed **zero date or content-hash records across all 5,871 sitemap URLs**. See [verification summary](verification-summary.json), [selected-page checks](selected-verification.json), [date review](date-change-review.json) and [browser evidence](browser-review.json).

A clean verification build is in `/tmp/remaining-photo-verification`; the source worktree's old generated output is intentionally not replaced. Compared with the freshly built parent photo branch, meaningful content hashes change for exactly these 34 recipes and 21 collection/other pages. An unchanged rebuild must have zero date/hash churn; no all-site lastmod refresh is used. These local checks are not proof of live deployment or Google indexing. No Search Console property was accessed and no URL was labelled indexed from this work.

## Claude integration and deployment checklist

1. Review PR #22 first; then review this stacked branch. Preserve both sets of source and test changes. Separate Google-reach PR #21 is still independent and needs its own review/integration.
2. Recompare each selection's recorded ingredient/method/diet fingerprint with any newer Claude content. Keep all photo provenance and credits; retain noted archive/serving differences only when appropriate. Do not turn an image match into a claim that the recipe was cooked or tested.
3. Regenerate once from the combined source: `npm run build && npm run check`, then `python tools/online-photo-sourcing-test.py`, image processing tests and `node tools/ads-unchanged.js --against <reviewed-base>`. Inspect the About and image-register counts in that first build.
4. Review generated recipe HTML, public image copies, sitemap/image entries and meaningful content dates. Rebuild unchanged and verify zero date/hash churn. No recipe slug, hostname or ads changes are needed.
5. Obtain the owner's approval before merge or deployment. After deployment, check representative JPG/WebP HTTP 200 responses/content types, dimensions, visible credits, one primary Recipe entity, canonical URLs and image sitemap entries. Confirm hosting has published the binary assets as well as HTML.
6. Resume from [all 1,173 starting gaps](coverage.csv), which distinguishes the 34 selected rows from 1,139 unresolved rows. Expand dish aliases/native names or commission real photography where suitable licensed matches cannot be established. Do not turn a blocked, ambiguous or bounded search into a global claim of no photo.

Technical accessibility and relevant pictures cannot force Google to crawl, index or rank a page. Current Google indexing statuses remain unknown; earlier screenshots/exports are historical evidence.
