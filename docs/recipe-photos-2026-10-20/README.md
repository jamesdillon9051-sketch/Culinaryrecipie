# Missing recipe photographs — 20 October 2026

Merge update, 21 October: PRs #17 and #18 are merged into main. The implementation merge is `260ad311d43ed3833fd52384f3ae8af9f4e90d19`. See the [current PDF/text handoff](../handoff-2026-10-21/README.md). Earlier pre-merge wording below is historical. The new photos are present in GitHub; the sampled live Leche Flan photo URLs still returned 404 at 06:41 UTC, so production rollout remains unverified.

Publication update, 21 October: GitHub write access is restored. [Draft photo PR #18](https://github.com/jamesdillon9051-sketch/Culinaryrecipie/pull/18) targets [draft crawl PR #17](https://github.com/jamesdillon9051-sketch/Culinaryrecipie/pull/17). Photo implementation is `23c54a1ec819f4ee274df1ff9a5049bc0fc35277`. Claude owns final integration/regeneration; nothing is merged or deployed. See [the current shared handoff](../HANDOFF.md).

**178 licensed real photographs** are prepared on `images/missing-recipe-photos`, based on crawl-review tip `775470da2ce0e3cbf33b6f51cdd9c3bf982e43e9` (production/main base `40a2386f0f0b75eeac0ec54570f619b07f1f2a66`). This implements the owner's subsequent request to find missing recipe images. Nothing is merged or deployed. The delivery manifest records the final image commit and artifact hashes.

## Review the photographs

- [Photo previews, credits and recipe differences](selected-photos.md)
- [Selected sources and licences — 178 rows](selected.csv)
- [Full starting missing-picture catalogue — 1,415 rows](catalogue-coverage.csv)
- [Candidate decisions — 1,859 staging records](candidate-decisions.csv)
- [Selected provenance, original dimensions, file hashes and recipe-review fingerprints](selected.json)
- [Official source metadata re-fetched after selection](source-evidence.json)
- [Live archive positive controls for the corrected search](search-controls.json)
- [Local mobile/desktop rendered checks](browser-results.json)
- [Independent source/output preservation and schema checks](static-verification.json)
- [Repeated-build date stability](repeat-build-verification.json)

The downloadable review artifact contains an offline HTML gallery and all 356 JPEG/WebP files. Its gallery is a review document, not a new public site page.

## Coverage and result

| Inventory | Before | After |
| --- | ---: | ---: |
| Recipes | 5,515 | 5,515 |
| With a photograph | 3,999 | 4,177 |
| With an existing disclosed AI illustration only | 101 | 101 |
| With no picture | 1,415 | 1,237 |
| Photograph files, counting hero/process pictures once each | 4,482 | 4,660 |

Every initially missing recipe has a coverage row. Article/alias and category lookups covered all 1,415: 2,815 exact/alias Wikipedia names and redirects, Commons metadata for 126 article-image filenames, and 2,905 possible Commons category names. The first 30 files in each of 128 existing nonempty categories were checked; category pagination was not exhaustive. Bounded full-text Commons searches then covered all 1,368 recipes remaining after the first 47 selections, with zero outstanding query errors; 765 queries returned eligible candidates before visual review. Targeted dish lookups supplemented these passes.

Across both passes, 1,859 staging records contain 1,857 successful downloads, representing 1,820 distinct recipe/source-page pairs for 817 recipes. All downloaded contact sheets were screened; every selected photograph received individual full-size source/final-crop review against its recipe, diet labels and credit. An unused alternative is not necessarily wrong or approved: its recorded review level matters. Only the 178 explicit selections are approved for this branch.

An initial grouped Commons full-text query was confirmed to treat parentheses literally and gave false zero results, including a known Oatcakes control. Those results were discarded, the query generator was corrected, and every one of the 1,368 queries was rerun. Live positive controls now return 20 raw Oatcakes results and three Gooseberry Fool results, including an actual dessert. The offline regression pins the corrected query syntax; it is not a live search test. Earlier archive busy/rate-limit responses and an Openverse challenge are sourcing limitations, not findings that a dish has no photograph.

The remaining **1,237** are an explicit unresolved queue. This was a broad bounded search of reusable photographs, not an exhaustive search of every archive or paid library. No unrelated picture, AI replacement or nonexistent URL was inserted to reduce the count. The 207 starting gaps present in the supplied Search Console subset are queue metadata only: photo selection does not establish indexing status or guarantee indexing.

## Licensing and suitability

All 178 selected records were re-fetched from the official Commons API; their file SHA-1 values and licence names still match. Sixteen use CC0/public-domain terms, 65 CC BY, and 97 CC BY-SA. All permit commercial reuse and adaptation. Photographer credit, linked source and existing page licence notices accompany the images; public-domain entries display their status, and ShareAlike adaptations retain the same licence. The site normalizes older HTTP Creative Commons links to HTTPS. Images are hosted locally rather than hotlinked.

These photographs illustrate the named dishes; they do not claim that anyone cooked or tested this site's exact recipes. The ledger records meaningful garnish, form, filling and serving differences. Sources were rejected where the difference contradicted an essential ingredient or diet label, including a beef barley soup on a vegan page, egg/cheese in a vegan tian, and wheat wafers on a gluten-free sabayon page. Some selected photographs are modest home photographs; original dimensions and serving differences are disclosed for editorial review.

Seven genuine color photographs of pale or muted food triggered the existing monochrome heuristic. A narrow `color_review` argument allows a recorded full-size review reason to override that heuristic; automatic callers retain default rejection. Every exception is recorded in `selected.json`. This does not bypass licence, dish or dietary review. No image generation was used.

## Files and ownership

Codex owns the photo branch, 356 new source JPEG/WebP assets and corresponding generated copies, 178 new hero records in `src/data/images.json`, attribution/inventory documents, sourcing utility and focused regressions. All previously published hero/process records and existing image bytes are preserved. No recipe catalogue/detail/rewrite, culinary verdict, publication-date, CSS, ad or monetization source was edited. Claude retains ownership of recipe-content corrections and should reassess a selected photograph when changing its ingredients or labels.

Exactly 178 recipe image identities and 96 affected collection/About identities change in `content-dates.json`. Recipe calendar dates were already 20 October and remain unchanged; 96 meaningful non-recipe calendar lastmods change for thumbnails/counts. Publication dates and unrelated date records are preserved. A repeated unchanged build moved zero date records; the entire date register remained byte-identical. Generated output changes include 178 primary photo pages and 870 other recipe pages with updated related-recipe thumbnails; those 870 retain byte-identical JSON-LD. All 14 sitemap documents retain the same URL membership and order.

### Claude content action: IMAGE-CONTENT-01

`/recipes/trenette-al-pesto/`: `src/data/catalog-59.js:65` declares Gluten-Free, while `src/data/details59/02-italian-c.js:303` lists `350 g trenette or linguine` without a gluten-free qualifier. Generated HTML prints the label. No wheat-pasta photograph was selected. Claude should verify/correct the label or ingredient; the content files and aggregate validator were not changed to clear this finding. Prior food/timing/content findings in the shared handoff remain open.

## Reuse the sourcing utility

The utility never publishes. It honors previous rejects and used sources, gates licences/diet metadata, stores raw source records, and rate-limits requests with bounded retry/backoff. Use a fresh work directory for a later catalogue snapshot:

```sh
python3 tools/source-missing-photos.py leads --work /tmp/weeklydelight-photos
python3 tools/source-missing-photos.py categories --work /tmp/weeklydelight-photos
python3 tools/source-missing-photos.py search --work /tmp/weeklydelight-photos
python3 tools/source-missing-photos.py stage --work /tmp/weeklydelight-photos --candidates-per-recipe 2
python3 tools/source-missing-photos.py sheets --work /tmp/weeklydelight-photos
```

Keep candidate files outside published assets. Review the actual recipe, full-size photo, final crop, author and licence before explicitly adopting a candidate through `tools/review_images.py --pending <separate staging file> --keep <reviewed slugs>`. Do not infer a visual verdict from a search score.

## Verification and deployment checklist

- `npm run build` and `npm run check` pass; the latter audits the whole generated site and existing data checks.
- Image inventory: 4,177 photographed recipes, 483 process photos, zero unused/shared/broken files or unpublished-recipe records.
- Six image-processing checks and 16 sourcing checks pass; Python compilation passes.
- Independent checks cover all 178 selected pages, credits, one coherent Recipe entity, canonicals, indexability directives, JPEG/WebP hashes and generated copies; old assets, recipe content, publication dates and sitemap membership are preserved.
- Sixteen browser cases (eight dishes at 390/1280 px) pass image decoding, credit/licence, schema image, canonical, single Recipe entity and overflow checks.
- Ad comparison against `775470da2ce0e3cbf33b6f51cdd9c3bf982e43e9` passes: eight source/config files and eight representative pages retain their advertising markup.
- Choose one integration owner; reconcile the prior unmerged crawl branch and Claude's current content changes before a combined regeneration. Do not blindly overwrite other worktrees or date registers.
- Review the gallery, serving differences and remaining queue, then run the combined build/check. Merge/deploy only after owner approval.
- After deployment, verify representative JPG/WebP URLs return 200 with image content types, decode on mobile/desktop, and have correct visible credits and matching Recipe image URLs. Spot-check sitemap/canonical behavior. This branch's local checks do not verify production deployment or Google indexing. No sitemap resubmission was performed.
