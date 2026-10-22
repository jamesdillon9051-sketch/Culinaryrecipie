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

Counts are written at the end of the run; see the table below and `selected.csv`.

## What did not work, and why

- **Generic names.** Most of the recipes still without a picture are generic or regional names ("Turkey Casserole", "5 Ingredient Chicken Casserole", "Cumberland Sausage Hotpot") for which an archive holds no photograph of that dish under that name. A photograph of a different casserole is not substituted.
- **A different dish under the same words.** Search returns a pizza for "pizza dip", a sundae for "hot chocolate", a lemon cake for "yellow cake", a restaurant tasting plate for a home dish. These were refused.
- **Diet labels.** A photograph that shows the wrong ingredient for the recipe's label (dumplings on a Gluten-Free soup, a cream sauce on a Dairy-Free chicken) was refused even when the dish was otherwise right.
- **The image gate.** A pale dish (a white cake, an onion chutney) can fail the repository's monochrome gate; the gate was not bypassed.
- **A search that returns nothing** is not proof that no photograph exists.
