# Claude to Codex handoff: photo rounds merged and live

22 October 2026. Written by Claude (recipe content, food safety, integration owner). Read `docs/HANDOFF.md` and `CLAUDE.md` first; this note adds what changed since.

## 1. State at a glance

| Item | Value |
| --- | --- |
| `main` | `29fc1cb1` (merge of PR #25, `claude/more-photos`) |
| Deployed | Yes. Hostinger deployed within about 5 minutes of the merge. No manual deploy. |
| Recipes | 5,515 |
| Photographed | 4,508 |
| Illustration only (legacy, labelled) | 101 |
| No picture | 906 (was 1,139 at the start of this work) |
| Photos added | 233: 229 Flickr (4 rounds), 4 Wikimedia Commons |
| Ads | `node tools/ads-unchanged.js --against ac8dbc13` reports advertising unchanged |

Counts are derived: 5,515 − 906 − 101 = 4,508. Codex's earlier figure was 4,275 photographed and 1,139 without a picture; this branch added 233 on top.

## 2. What was done and how

All rounds used only CC0, public domain, CC BY and CC BY-SA. NonCommercial and NoDerivatives were refused. No AI images. Each photo was reviewed by eye, in stages: contact sheet, then a full-size sheet with the recipe's diet tags beside the photo, then the recipe's ingredient list, then the photo's own page checked for the licence link and photographer name. The image gate in `tools/fetch_images.py` was never bypassed.

| Round | Method | Adopted |
| --- | --- | --- |
| 1 | Flickr search, recipes A to "green" (stopped when the known-positive control failed; not worked around) | 26 |
| 2 | Flickr resumed; 987 of 1,139 recipes searched | 80 |
| 3 | Flickr completed for all 1,139 (731 had candidates, 408 none) | 45 |
| 4 | Flickr again with simplified dish names ("Pot Roast" for "Slow Cooker Pot Roast") | 78 |
| Commons | Commons text search plus Wikipedia exact-title lookup; only 68 candidates could be downloaded | 4 |

Two photos passed review but the monochrome gate refused them (peanut-butter-banana-shake, pounded-yam). They were not forced in; those recipes stay without a picture.

Where one photograph fitted sibling recipes (instant-pot, slow-cooker, sheet-pan), it was given to one recipe only. No archive page is used for two recipes.

Provenance is in `docs/flickr-recipe-photos-2026-10-21/` (`README.md` with limits and rejection reasons, `selected.csv` with 233 rows: licence, photographer, page, and the difference from the recipe). Credits are in `images-attribution.md`.

## 3. Live verification (after the merge)

- 60 randomly chosen new-photo recipe pages: byte-for-byte equal to the built files.
- Homepage, `/recipes/`, `sitemap.xml`, `search-index.json`, `images-attribution.md`, `/categories/dinner/`, `/about/`: equal.
- All 233 new images, JPG and WebP: HTTP 200, correct content type, 800 by 600. WebP files are byte-equal to the repo.
- JPG note: the live JPG bytes are about 20% larger than the repo JPGs. This is Hostinger's CDN (`server: hcdn`) turning the repo's progressive JPGs into baseline JPGs. The same happens to older images (`adana-kebab`, `leche-flan`), so it is not caused by this merge.
- Credits render on the live pages (checked three: German meatballs, slow-cooker sticky ribs, egg and bacon tart).
- Not checked: all 233 pages individually; search-engine indexing.

## 4. What Codex should do, in order

1. **Independent photo review.** Open `selected.csv` and look at the 233 photos on the live pages. Withdraw any that is the wrong dish, or shows meat, dairy, gluten or egg against the recipe's diet tags. To withdraw, follow `CLAUDE.md` section 5 (copy the `images.json` entry to a temp file and pass it with `--pending` to `tools/review_images.py --reject`). Review first these, whose notes in `selected.csv` show the weakest matches:
    - `zlikrofi` (shown in a brown meat sauce; recipe is butter and sage)
    - `xinjiang-lamb-skewers` (plate printed with a cartoon character)
    - `sweet-and-sour-prawns` (prawns not clearly identifiable)
    - `witch-finger-cookies` (no jam; strong yellow cast)
    - `tortellini-salad`, `tuscan-bean-soup`, `zuppa-di-ceci` (named ingredient not visible)
    - `vegan-carbonara`, `instant-pot-bolognese`, `instant-pot-corned-beef-and-cabbage`, `instant-pot-shrimp-scampi`, `instant-pot-chicken-thighs` (different pasta, cut or serving)
    - `air-fryer-pierogies`, `air-fryer-zucchini-fries`, `egg-and-bacon-tart`, `french-lentils` (extra items in frame or a different sauce or topping)
2. **Diet cross-check by script or eye.** Every recipe in `selected.csv` carrying Vegetarian, Vegan, Dairy-Free or Gluten-Free: confirm the photo does not show a violating food. I did this by eye per photo; a second reading is the point.
3. **Duplicate and licence audit.** Confirm no source page or file hash is used for two recipes across the whole registry; spot-check licence links on 20 or more photo pages.
4. **Commons candidates not reviewed.** `commons-candidates-not-yet-reviewed.json` (in this folder) holds 1,242 candidates for 407 recipes still without a picture. Wikimedia rate-limits this network (HTTP 429), so only 106 of 721 planned downloads had been attempted. About 12 downloaded after my last review and are unreviewed. The scratch download directory is not persisted; re-stage from this file. Most Commons text matches are not food.
5. **Flickr "no result" recipes.** 408 recipes returned nothing in the bounded Flickr search before round 4 (the simplified-name pass then found candidates for 191 recipes, some of them among these). A different query might find more. `helpers/flickr_alt_title_search.py` shows the alternative-title method (edit `REPO_ROOT`).
6. **PR housekeeping.** See section 5.

## 5. Open PRs and branches

| Item | State | Note |
| --- | --- | --- |
| PR #21 `audit/google-reach-2026-10-21` (`21c77888`) | Open draft, base `main`, **not in main** | Generic HowToStep-name fix and Google-reach audit. Merging needs a deliberate resolve of `tools/check.js`: keep the corrected ad-slot counter that is already on main. |
| PR #23 `images/multi-source-recipe-photos-2026-10-21` (`2dc6dc42`) | Open draft, stacked on #22's branch | Both head commits are **already ancestors of `main`**, so their content landed through PR #24. The PR looks stale; confirm and close. |
| `fix/recipe-validation-review` | Not seen | The earlier validator, timing and ordering batch has never been reconciled. |
| `claude/photo-handoff-to-codex` | This note, pushed, no PR | Docs and helpers only. |

## 6. Still open on the recipe-content side (Claude's, not done)

- **PHOTO-CONTENT-02, `chocolate-pots`** (`src/data/details56/01-ice-cream-fudge-and-no-bake-a.js`): three raw egg yolks are stirred in after cream that has stood for 2 minutes, then the pots are chilled and served. The ingredient has no pasteurised-egg qualifier and the method has no temperature step. This conflicts with the repository egg rule in `CLAUDE.md` section 3. **I have not fixed it.** I intend to either require pasteurised egg yolks in the ingredient line or cook the custard to 71°C and say so; the photo is not evidence the method is safe.
- The 236-record independent queue, `docs/release-2026-10-uncertainties/codex-review-findings.json` (231 open, 5 specialist), has not been worked through.
- Specialist evidence still needed: macarons timing bake, raw prawns and raw beef, oil-cured vegetables, miso ramen tare, 717 long fridge lives, runny yolks.
- Anything about "tested" recipes: nothing on the site may claim cooking or testing unless `src/data/testing-notes.json` says so.

## 7. Limits to keep in mind

- A search that returns nothing is not proof that no photograph exists. The 906 placeholders are not proof either.
- Blocked from this environment (HTTP 403): Pexels, Pixabay, StockSnap, Rawpixel, Kaboompics, Stockvault. PxHere did not respond. Openverse refused queries. Unsplash and Foodiesfeed respond, but Unsplash has no per-photo licence check in our tooling and Foodiesfeed's reuse terms were unclear, so neither was used.
- Several photographs differ from the recipe's method or serving (restaurant plate, different garnish). That is recorded per photo in `selected.csv`. It does not show the recipe was cooked or tested.

## 8. Standing rules (unchanged)

- Preserve ads, publisher IDs, placements, consent and ad-loading behaviour. Run `node tools/ads-unchanged.js --against <ref>` before merging anything.
- Real photographs only. A wrong picture is worse than none.
- Do not edit `src/data/content-dates.json` or `published-dates.json` by hand.
- Do not invent testing, ratings, history, times or safety claims.
- Keep credentials out of the repository; the Search Console TXT record (`google-site-verification=…`) is the owner's DNS task at Hostinger and has not been confirmed done.
- Every commit from Claude ends with the Co-Authored-By and Claude-Session lines; no PR or merge without the owner asking.

## 9. Commands

```
npm run build && npm run check
node tools/ads-unchanged.js --against ac8dbc13
node tools/make-attribution.js
npm run missing      # rewrites MISSING-IMAGES.txt
npm run readme
python3 tools/source-flickr-photos.py --work DIR        # resumable Flickr search
python3 tools/source-missing-photos.py search|leads|stage|sheets --work DIR
python3 docs/photo-handoff-2026-10-22/helpers/adopt_reviewed_photos.py STAGED.json KEYS.txt "Flickr"
```

After adopting photos: build twice (the second build must change nothing), `npm run check`, the ads check, then update `selected.csv` and the notes.
