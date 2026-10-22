# Long photograph search (22 October 2026)

A second, deeper search for real photographs of the recipes that still had no picture after the Flickr rounds and the extended search. Branch `claude/long-photo-search`, stacked on `claude/integrate-extended-photos`; neither is merged. Not cooking evidence: these are other people's photographs of the dish, credited on each recipe page and in `images-attribution.md`.

Licences accepted: CC0, public domain, CC BY, CC BY-SA. NonCommercial and NoDerivatives are not used. A wrong or unlicensed picture is worse than none, so a recipe stays on its gradient card when no correct photograph was found. Selected photographs, their licences and how each differs from the recipe are in [selected.csv](selected.csv).

## How a photograph gets in

1. **Discovery** (below), per recipe, using the title and its variants (the title without a cooking-method prefix, the head of "X with Y", the dish's other name: courgette and zucchini, prawn and shrimp, biscuits and cookies).
2. **Download and rank.** Candidates are downloaded for review. A CLIP model orders them for the reviewer; it never approves one, and nothing is adopted without a person looking at the photograph at full size.
3. **Full-size review** against the recipe's ingredient list and diet labels. Refused: meat on a Vegetarian or Vegan recipe, dairy on a Dairy-Free or Vegan one, wheat pasta, bread or breading on a Gluten-Free one, raw ingredients, packaging, brands, watermarks, people, signs and landscapes, a half-eaten plate, a different dish under the same words.
4. **Page check.** The photograph's own page is fetched again and its licence link and the photographer's name must match the record (every adopted photograph passed).
5. **Adoption** through `tools/fetch_images.py` `process()`, so the repository's own image gates apply (size, monochrome and the rest). A photograph the gate refuses is not forced in. A page already used for another recipe, or already refused for that recipe in `src/data/image-rejects.json`, is skipped.
6. Regenerate, build twice (the second build must change nothing), `npm run check`, and `node tools/ads-unchanged.js --against ac8dbc13` before each commit.

## Sources searched

| Source | What was searched | Notes |
| --- | --- | --- |
| Flickr (commercial-use CC and public-domain search) | every title variant, result pages 1 to 3 | Flickr throttled the search repeatedly (an empty result list that cannot be told from "no results"); a known-positive control query ("Beef Ragu") is run first and a failed control is waited out, never recorded as "nothing found". |
| Wikimedia Commons | HTML text and phrase search over every variant, plus category pages, then batched file metadata | The API and `upload.wikimedia.org` rate-limit this network (HTTP 429); downloads go through `commons.wikimedia.org/w/thumb.php` and every 429 is waited out and retried. |
| Wikipedia and Wikibooks | article and Cookbook pages for the title variants, and the Commons files they show | |
| ISO Republic, NegativeSpace, Picography, Pixnio | site search for every variant (CC0) | Small catalogues. |

Sources that could not be used from this environment: Pexels, Pixabay, StockSnap, Unsplash, Rawpixel, Kaboompics, Stockvault, Pikwizard, Visualhunt and Freepik (HTTP 403 or a bot challenge); Openverse (blocked); the Smithsonian open-access site (verification page). PxHere shows "Public Domain" but not the photographer or where a photograph came from, so its licence cannot be verified here; Foodiesfeed and picjumbo have their own licences, not the ones listed above. Europeana's open API returned museum and street scenes, not photographs of dishes.

## Results

- **402 photographs added** in 13 commits (35, 14, 19, 11, 23, 12, 6, 45, 84, 20, 60, 47 and 26). 243 are from Flickr, 150 from Wikimedia Commons, 7 from ISO Republic and 2 from Pixnio. Licences: CC BY 2.0 (188), CC BY-SA 2.0 (95), CC BY-SA 4.0 (53), CC0 (30), CC BY-SA 3.0 (12), public domain (9), CC BY 4.0 (8), CC BY 3.0 (4), CC BY-SA 2.5 (2), CC BY 2.5 (1). Every photograph's own page was fetched and its licence link and photographer name matched the record (four author strings, "Photograph by Mike Peel (www.mikepeel.net)", "Photo and cooking: Badseed", "Çalak talk" and "chris 論", were read on the file page and recorded as the photographer's name). [selected.csv](selected.csv) lists each with the source page, photographer, licence and how it differs from the recipe.
- **Recipes without a picture: 690 at the start of this search, 288 now** (of 5,515). `MISSING-IMAGES.txt` lists them.
- **What was searched.** 690 recipes: every title variant on Flickr (pages 1 to 3), Commons text and category searches for all 690, a Wikipedia and Wikibooks lookup, ISO Republic, NegativeSpace, Picography and Pixnio. Then two rounds of alternative names for the dish (other languages, other spellings, a generic name for the dish) for 427 of the recipes still without a picture, on Flickr (page 1) and Commons. 4,804 candidates were downloaded (a few smaller than the 500 by 380 pixel minimum were not kept), ranked for review (a CLIP model orders the sheets; it approves nothing), about 4,100 were placed on contact sheets and about 530 of those were looked at again at larger size. Candidates the ranking put last were not put on a sheet, so no photograph was adopted that a person had not looked at.
- **Content found on the way.** `pull-apart-cheese-bread` (a white loaf) and `florida-grouper-sandwich` (a grouper fillet) carried Gluten-Free and Vegetarian tags their ingredients contradict; the tags are removed and the diet recognizer now reads loaf, bagel, bap and a list of fish and shellfish names it did not know (`tools/diet-conditions-test.js`, 19 cases). `npm run diet`: no contradictions across 5,515 recipes.
- **Checks on every commit:** build twice (the second changes nothing), `npm run check`, `npm run selftest`, and `node tools/ads-unchanged.js --against ac8dbc13` (advertising unchanged). Nothing in this branch is merged or deployed.

## What did not work, and why

- **Generic names.** Most of the recipes still without a picture are generic or regional names ("Turkey Casserole", "5 Ingredient Chicken Casserole", "Cumberland Sausage Hotpot") for which an archive holds no photograph of that dish under that name. A photograph of a different casserole is not substituted.
- **A different dish under the same words.** Search returns a pizza for "pizza dip", a sundae for "hot chocolate", a lemon cake for "yellow cake", a restaurant tasting plate for a home dish. These were refused.
- **Diet labels.** A photograph that shows the wrong ingredient for the recipe's label (dumplings on a Gluten-Free soup, a cream sauce on a Dairy-Free chicken) was refused even when the dish was otherwise right.
- **The image gate.** A pale dish (a white cake, an onion chutney) can fail the repository's monochrome gate; the gate was not bypassed.
- **Watermarks, brands and logos.** A photograph with the photographer's name across it, a recipe-blog overlay, a bottle label, a jar of Marmite or a Mars bar wrapper was refused even when the dish was right.
- **Photographs credited to nobody.** A public-domain photograph with no named author, or credited only to "The original uploader was …", was left out rather than credited to nobody.
- **A search that returns nothing** is not proof that no photograph exists. The 288 recipes still without a picture are mostly the generic ones ("5 Ingredient Soup", "Turkey Casserole", "Beef Meal Prep Bowls") and regional specialities for which none of the sources reachable from here holds a photograph of that dish under any name that was tried.
