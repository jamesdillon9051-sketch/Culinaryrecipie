# Claude handoff: 34 further real recipe photographs

21 October 2026 — review branch only; not merged or deployed.

## Exact references and ownership

- New branch: `images/multi-source-recipe-photos-2026-10-21`.
- Implementation commit: `265a694f01d5a9e780f8f14dc16005f45811093e`.
- Exact parent: `ee17093739845ae86a831be8347cfec9e2283092`, branch `images/remaining-recipe-photos-2026-10-21`, draft PR #22 (64 photos). This batch is stacked on that branch, not directly on main.
- Main rechecked during this work: `c8d95127862832f6f58e3717934dba1631483cad`.
- Claude owns recipe content and integrated output regeneration. Codex changed photo metadata/assets, sourcing and audit tools. The owner's newer photo requests authorise this work despite the older handoff's no-image-work rule.

## What changed

34 newly reviewed missing photos: **26 Pexels, 6 Pixabay, 1 Kaboompics, 1 Stockvault**. Each was checked against current recipe ingredients/diet presentation and reviewed at 800×600; each has source, credit, licence and hash records. No AI illustrations were generated.

On the combined photo source, 5,515 recipes comprise **4,275 photographed, 101 legacy illustration-only and 1,139 with no picture**. Before this batch the no-picture count was 1,173. These are post-regeneration source counts, not a claim that the live site has already changed.

Files changed: `src/data/images.json`, 68 new `src/assets/img/recipes/*` JPG/WebP files; `tools/source-online-photos.py` and its regression; an exact Kaboompics Standard License entry in `tools/fetch_images.py`; truthful stock-library explanations in `tools/make-attribution.js` and `images-attribution.md`; derived README and missing-image register; `tools/native-ad-slot-count.js`, its regression and `tools/check.js`; this report and shared handoff. All previously populated image fields are retained. No ingredient/method/timing/diet/recipe-author/slug/design/ad source was changed.

The confirmed audit defect: the old ad counter searched the whole HTML for “container-”. A Pexels photo URL contained that text twice, so the checker reported four slots on Air Fryer Banana Bread. Actual native embeds remained two. The corrected checker counts ad elements; eight regression cases still catch missing/extra real slots. No ad tag, unit or configuration was removed.

## Coverage and remaining limitations

3,978 recipe-title searches were recorded: 1,173 each at Pexels, Pixabay and PxHere; 459 at StockSnap before a 403 left 714 unattempted. Seven additional libraries received 683 food-family queries in total. These are different scopes, not eleven full catalogue passes. StockSnap, Burst and Picjumbo access stops are recorded. Unsplash, Openverse, FreeImages and Library of Congress were blocked in probes. No access bypass was attempted.

667 staged thumbnails were screened and 90 candidates reviewed at full size; 34 were selected. Unselected leads are unapproved. Nineteen ambiguous empty Pixabay models were retained as unverified, not proof of zero available photos. Mixed AI libraries, paid results, unclear original-source rights, wrong dishes, uncooked assemblies and diet conflicts were excluded.

Stock photos are illustrations of dishes, not evidence of cooking these exact recipes. Read every serving/method variation in `PREVIEWS.md` and `selected.csv`, especially appliance-specific recipes. The new Kaboompics Standard License permits commercial website use and cropping, but not standalone stock redistribution or AI training. Stockvault's actual photographer was not named: credit uses Unknown and schema omits an invented creator. The remaining 1,139 gaps still need verified matches or original photography.

## Completed verification

- Isolated build and full check passed: **5,875 HTML pages, 5,871 sitemap URLs, 5,515 search records**.
- All 68 new JPG/WebP files decode at 800×600 and match source hashes/generated copies. All 34 pages retain one primary Recipe, accurate image licence/creator, preferred canonical and no accidental noindex.
- Normalised source IDs, exact hashes and 64-bit visual hashes found no reuse or near-duplicate matches against 4,825 existing image records, including 101 illustrations (4,724 photographic records). This is a duplicate screen, not an exhaustive similarity guarantee.
- Six photo-processing checks, public-source/licence-gate regressions, and eight ad-counter regressions passed.
- 16 desktop/mobile browser cases passed: image loading, credit/licence/source links, schema, canonical, overflow and JavaScript-error checks. Third parties were blocked in the local harness only.
- Advertising source comparisons and ad markup on all 34 affected pages match the reviewed base.
- Versus the freshly built parent: exactly 34 recipe hashes and 21 collection/info hashes changed. An unchanged rebuild changed zero date/hash records across all 5,871 URLs.

## Required Claude handoff

1. Review parent PR #22, then this stacked branch and the 34 previews. Keep provenance/credit/licence details. Recompare recipe fingerprints against any newer content before keeping photos. Do not introduce cooking-test claims. The previous raw-yolk Chocolate Pots content question from the parent handoff remains separate and unresolved by this work.
2. Keep the new ad counter and its regression when combining `tools/check.js` with separate Google-reach PR #21. Neither photo branch contains that PR's generic HowToStep-name correction.
3. Regenerate once from approved combined source: `npm run build && npm run check`. Run photo source/processing regressions and `node tools/ads-unchanged.js --against <reviewed-base>`. Public recipe HTML, public image copies, search index, sitemaps and `src/data/content-dates.json` were deliberately not committed here.
4. Check first-build About counts and image sitemap entries, then rebuild unchanged to prove stable dates. Do not blanket-refresh lastmod values.
5. Obtain owner approval before merge/deployment. After deployment verify representative live JPG/WebP HTTP 200/content types, visible credits, image schema, canonicals and sitemap membership. This work contains local and public-source verification, not a production deployment check.
6. Continue from `coverage.csv` (all 1,173 starting gaps), `screened-candidates.csv`, `SOURCES.md`, `selected-provenance.json` and `search-summary.json`. A blocked or bounded search does not establish that an image does not exist.

No Search Console indexing status was established by this photo work, and technical/image improvements cannot force Google to crawl, index or rank pages.
