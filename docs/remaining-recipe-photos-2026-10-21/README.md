# Remaining recipe photos — 21 October 2026

Added **64 real, reviewed photographs** on a separate review branch. **1,173 recipes still have no picture**. A further 101 retain their earlier labelled AI illustrations; this batch does not add or replace illustrations.

Base: `c8d95127862832f6f58e3717934dba1631483cad` (`main`, checked again before publication). Branch: `images/remaining-recipe-photos-2026-10-21`. Implementation: `1cf3f5250b86fa0020bbecf50f1b794237aa0a93`. Generated public output is deliberately left to Claude, the integration owner. No merge or deployment is part of this branch.

## Coverage and limits

| Inventory | At base | After this branch is built |
| --- | ---: | ---: |
| Total recipes | 5,515 | 5,515 |
| Recipes with real photographs | 4,177 | 4,241 |
| Recipes with legacy illustrations only | 101 | 101 |
| Recipes with no picture | 1,237 | 1,173 |
| Photograph files, counting hero/process pairs once | 4,660 | 4,724 |

The [URL-level coverage CSV](coverage.csv) contains all 1,237 starting image gaps, including outcomes that remain unresolved. This is an **image inventory, not an indexing-status list**. The supplied historical export sample overlaps 31 selections; their present Google indexing status remains unknown.

This follow-up screened 484 downloaded candidates from public Flickr and Commons searches and inspected 111 candidates at the final 800 × 600 size, plus eight custom-crop alternatives. Sixty-four passed selection: 62 from Flickr and two from Commons. Fifteen targeted Commons recipe queries and seven continued Commons categories were investigated. Search output also includes 1,278 recipe/candidate assignments; 257 still-unresolved recipes have further leads, which require their own licence and full-size review. Downloading or appearing in a CSV is not approval.

The Flickr search initially returned 25 photos for the Beef Ragu control and three for Gooseberry Fool. Later it returned empty public photo/search model arrays for both controls while still returning sponsored Getty results. We stopped the search, reclassified 677 false-empty records as unverified, and marked 214 later recipes not attempted. Across all 1,237 Flickr inventory rows, **891 are unverified**, 317 have eligible candidate metadata, and 29 have no eligible candidate in the bounded response. These numbers do not prove that usable photos do not exist. Openverse returned an access challenge; it was left aside. No paid Getty/iStock advertisement, restricted library, or challenge bypass supplied a selected photo.

The earlier Commons work already covered the starting catalogue broadly. Those historical searches are not relabelled as successful fresh Flickr searches. See [source controls](source-controls.json) and [candidate leads](candidate-leads.csv).

## Selection, rights and quality

Every selected source page was checked individually for its current licence before adoption. Licences: **44 CC BY 2.0, 19 CC BY-SA 2.0, and one Public Domain Mark**. The Public Domain Mark is retained as such, not renamed CC0. Photographer names, original titles, source pages, licence links, source/download dimensions, hashes, review notes and crop coordinates are in [selected.json](selected.json); [selected.csv](selected.csv) is easier to open on a phone. Flickr dimensions describe a published download size, not a verified camera-original size.

Each selected photograph illustrates the named dish; none is represented as a cook or test of this exact recipe. Plating, pasta shape, garnish, cut or topping variations are disclosed in [the previews](PREVIEWS.md). Some older home photographs are softer than modern stock photography. Reject any selection the owner considers a poor fit; keep its placeholder instead. No photos were recoloured, synthetically altered, generated, or filled with unrelated placeholders.

Five approved custom crops focus on the food or remove unrelated wheat accompaniments. Three genuine low-saturation colour photos required individually recorded visual-review reasons for the existing archival-colour heuristic; the default guard remains active. ShareAlike notices remain visible, and these cropped/resized copies retain their source licence.

Two otherwise suitable candidates were excluded after exact JPEG and perceptual-hash comparisons showed they already appeared on `po-boy` and `chickpea-veggie-burgers`. Flickr source reuse now normalizes a trailing slash. The final 64 have no exact or near image matches at dHash distance ≤4 against the 4,761 existing image records or one another, and no repeated selected source page. This is a useful duplicate screen, not proof against every possible differently cropped duplicate.

## Changed source

- `src/data/images.json`: fill 64 empty hero slots; all previously populated image fields and assets are retained. Add 128 source JPEG/WebP files under `src/assets/img/recipes/`, each 800 × 600, approximately 6.28 MB combined.
- `src/lib/util.js`, `tools/make-attribution.js`: optional HTTPS photographer-credit links. Cranberry Meatballs credits **Michael Wurm Jr for Shari’s Berries**, linking to the destination requested by the source; Chocolate Chip Cookie Bars links to the creator’s requested website.
- `src/templates/recipe-page.js`: an explicitly credited organisation uses `ImageObject.creator` type `Organization`. This does not replace the recipe author with the photographer.
- `src/data/stats.js`, `src/lib/image-inventory.js`: build-time counts inspect source images before output is copied. The default inventory still audits generated files. This fixes the confirmed stale first-build About count.
- `tools/source-flickr-photos.py`: read-only, resumable public searches, two workers, under one request/second overall, bounded retries, licence/download-host gates, access-challenge stops and a positive control before each 50-query batch. Sponsored ads are excluded. It never publishes photos.
- Focused checks: `tools/flickr-sourcing-test.py`, `tools/photo-credit-test.js`, `tools/image-inventory-source-test.js`; the Node checks run under `npm run check`.
- `MISSING-IMAGES.txt`, `README.md`, `images-attribution.md`: derived inventories and credit register updated. Recipe catalogue/detail/rewrite and cooking-evidence files are untouched.

## Verification

`npm run build && npm run check` passed in an isolated checkout containing this branch’s source: **5,875 checked HTML pages, 5,871 sitemap URLs and 5,515 search records**. The three ad-frame documents account for the build’s larger 5,878 HTML total. A first-build regression deliberately removed the 64 cached output-photo pairs before building: About correctly printed **4,241 photographed and 1,173 without a picture** in that first build. The unchanged rebuild then changed **zero** content-date records. The initial image additions changed exactly 64 recipe date records and 36 collection/info records; no other recipe date changed.

All 128 new JPEG/WebP assets decode at 800 × 600 and match their recorded hashes and generated copies. All 64 built pages have a single primary Recipe with the correct image licence/creator, preferred canonical and no noindex. All previously populated image metadata and assets are preserved. The source advertising comparison passed against the base commit, and the ad markup on every one of the 64 new-photo pages matches its base HTML.

**16 desktop/mobile browser cases** passed: actual hero image load, visible credit and required credit link, licence, image creator identity, canonical, single Recipe, no horizontal overflow and no JavaScript page error. Third parties were blocked in that local browser harness only; the site’s advertising was retained. The Flickr guard, 16 existing Commons sourcing checks, six processing checks, credit/organisation checks and first-build inventory regression also passed. See the accompanying verification JSON and browser cases.

These checks are local build/browser and photo-source verification. They are not Google Rich Results Test validation, live deployment verification or evidence that Google indexed any recipe. Missing photos alone are not proof of an indexing block, and adding photos cannot force Google to index a URL.

## Exact Claude handoff

1. Review this branch’s 64 selections, particularly the serving variations in `PREVIEWS.md`; use the recorded source/credit/licence for each photo. Keep both new Node checks when combining `tools/check.js` with the separate Google-reach PR #21. That PR’s HowToStep change is not included here.
2. Claude remains responsible for recipe content and the final integrated regeneration. Reconcile newer content against each selection’s ingredient/method/diet fingerprint before retaining its photo. Preserve all ads, existing URLs, credits, licence links and ShareAlike notices.
3. **PHOTO-CONTENT-02: review `chocolate-pots`**, `src/data/details56/01-ice-cream-fudge-and-no-bake-a.js`, record starting at line 18. It lists `3 egg yolks` without a pasteurised qualifier; the method adds them to chocolate after hot cream has stood for two minutes and directs chilling, with no specified safe custard temperature. The prose explicitly says to add yolks while warm, not hot. This is a content review item against the repository’s egg-handling rule; the photo is not evidence that the method is safe. Codex has not edited Claude’s content file. Use substantiated cooking guidance rather than a fabricated temperature/time or a review suppression.
4. Once the combined source is reviewed, run `npm run build`, `npm run readme`, `npm run attribution`, `npm run missing`, then `npm run check`. Verify an unchanged rebuild does not advance dates. Generate the public asset copies, recipe HTML, collections, About page, sitemap files and `src/data/content-dates.json` together. Do not hand-edit dates. This photo branch intentionally does not commit those shared generated files.
5. Get owner approval for merge/deployment. After an approved deployment, sample both JPG/WebP responses, visible credits, mobile crops and image schema against the deployed commit. Recheck source licences if selections have changed or rights notices have been withdrawn. Do not relabel pending image URLs as already deployed or indexed.
6. Continue the 1,173-picture gap list with matching, commercially usable photographs. `candidate-leads.csv` provides a queue, not approved images. Check each source and diet presentation again. If a positive search control fails, stop and retain an unverified status instead of recording a false no-result. The 101 legacy illustration-only recipes are separately identifiable and still lack real photographs.
