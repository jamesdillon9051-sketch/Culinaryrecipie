# Independent review of Claude's 233-photo batch

Report generated 2026-10-22T08:31:02.323382+00:00. This is an evidence report for the ongoing photo branch, not the final publication tally.

## Scope and current-state limits

- Base commit: `29fc1cb15d721efdb1aaca734d57323f60969c30`; working branch: `images/extended-photo-search-2026-10-22`.
- The batch comprises 229 Flickr photos and 4 Wikimedia Commons photos. All 233 original 800×600 crops were independently reviewed against the saved recipe ingredients, instructions and diet labels. Source pages, licence links and creator identities were independently checked for all 233, exceeding the requested minimum sample of 20.
- The saved live checks on 22 October verify the previously published base, not the unpublished replacement images: 233/233 recipe responses HTTP 200; 233/233 WebP responses HTTP 200; 233/233 HTML and WebP files byte-equal to the base; 233/233 expected canonical URLs; 233/233 pages containing the photo reference and exactly one primary Recipe JSON-LD entity.
- These checks establish observed accessibility and deployment consistency only. They do not establish Google indexing, certify recipes, establish cooking temperatures, or certify hidden allergens. A source licence does not establish that an image is a real photograph.
- Working-tree corrective actions below have not been merged or deployed. The root handoff must refresh working-tree counts after photo selection finishes. `python3 /workspace/artifacts/photo-long-search-2026-10-22/write-claude-audit.py` refreshes this report and CSV without network or repository changes.

## Review outcomes

| Original review verdict | Recipes |
| --- | ---: |
| `no_confirmed_dish_or_diet_conflict` | 208 |
| `needs_source_or_closer_match_review` | 4 |
| `closer_match_or_source_review` | 13 |
| `process_stage_needs_finished_hero` | 2 |
| `confirmed_generated_image_replace_or_withdraw` | 1 |
| `recipe_diet_claim_for_claude` | 1 |
| `confirmed_meat_conflict_replace_or_withdraw` | 1 |
| `primary_source_or_closer_match_review` | 3 |

The 208 “no confirmed dish or diet conflict” verdicts are not 208 exact recipe reproductions. The notes retain serving, garnish and method differences, including weaker matches such as žlikrofi in meat sauce and yellow-lit witch-finger cookies. Twenty further records need source clarification or a closer match; one exposes an independent recipe diet-claim problem. Two confirmed invalid heroes were withdrawn and two preparation images were preserved as process photos. Do not call all 25 exceptions broken recipes.

## Confirmed hero corrections

| Recipe identifier | Exact evidence | Action already taken locally |
| --- | --- | --- |
| `huhnersuppe-mit-nudeln` | Original [Flickr photo 55553023791](https://www.flickr.com/photos/115225894@N07/55553023791) is the same image as the creator's [ccnull file 1135759](https://www.ccnull.de/foto/huhnersuppe-mit-nudeln/1135759/), which explicitly says “mit Hilfe von KI erstellt” (created with AI). Visual identity and HTTP 200 source evidence are saved. | Withdrawn from the real-photo hero register; replaced locally with a reviewed real-camera Pexels chicken-noodle-soup photo. Verified licence alone did not clear the real-photograph requirement. |
| `persian-lentil-rice` | [Flickr photo 2610270636](https://www.flickr.com/photos/58819758@N00/2610270636) caption: “A bed of crunchy rice from the bottom of the pot, topped with a beefy lentil stew.” Recipe tags are Vegetarian and Vegan. | Original hero withdrawn. Continue searching for a genuinely meat-free lentil-rice photo; do not infer vegan suitability from appearance. |
| `ham-and-cheese-sliders` | [Flickr photo 27964636171](https://www.flickr.com/photos/97651299@N00/27964636171), title “Ready to pop in the oven!” confirms assembled sliders before baking. | Original photo/credit preserved as `ham-and-cheese-sliders-process`; original hero cleared. Needs a completed-dish hero. |
| `instant-pot-beef-brisket` | [Flickr photo 6881392197](https://www.flickr.com/photos/58545726@N02/6881392197) caption: “Browning beef brisket. This will be used in the Classic Beef Brisket recipe…” | Original photo/credit preserved as `instant-pot-beef-brisket-process`; original hero cleared and a finished brisket photo staged locally. The new photo does not prove that the photographer used an Instant Pot. |

See the accompanying CSV for the registry snapshot's exact replacement URLs and remaining follow-up. Confirm process-file preservation and image/credit output after integration.

## Source checks that prevented mistaken withdrawals

- `savoury-french-toast`: the white topping is explicitly **truffle salt**, not sugar.
- `pear-and-parmesan-salad`: the photographer explicitly identifies greens, pear and parmesan; no evidence that pink-looking pieces are bacon.
- `pork-meatball-soup`: source caption explicitly includes pork meatballs, with prawns, rice noodles and chives as a serving variation.
- `vegan-carbonara`: original title explicitly identifies vegan carbonara. This does not identify every hidden ingredient.
- `sweet-and-sour-prawns`: original title identifies Sweet and Sour Black Tiger Prawns despite the battered pieces' obscured shape.
- `air-fryer-sausages`: source title says “(after)” cooking. Grey colour alone is not proof that food is raw.
- `tuscan-bean-soup`: small pinkish pieces remain unconfirmed. The original linked recipe at `https://leeksandbounds.org/wordpress/?p=19` could not be fetched because the network tunnel returned 403. Do not turn that missing evidence into a bacon finding.

## Recipe-content questions assigned to Claude

No ingredient, method, catalogue or rewrite file was edited for these findings. Review against the current content before integration; photographs are not culinary evidence.

1. **PHOTO-CONTENT-02 — `chocolate-pots`: raw-yolk specification remains unresolved.**
   - Record: `src/data/details56/01-ice-cream-fudge-and-no-bake-a.js:18`; ingredient at line 27 is **“3 egg yolks”**, without a pasteurised qualifier.
   - Method at lines 35–38 heats cream/milk until steaming, pours it onto chocolate, waits two minutes, then stirs in yolks and chills. It gives no subsequent custard temperature. The prose at line 22 says to add yolks while warm, **“but not hot”**.
   - `CLAUDE.md` requires pasteurised eggs/British Lion-stamped eggs for raw/lightly heated egg preparations, or an explicitly cooked custard temperature of 71°C/160°F. Claude should select a supported correction rather than inventing a safe time or temperature reached by the current method.

2. **PHOTO-CONTENT-03 — `panettone-bread-pudding`: unsupported Gluten-Free label.**
   - Tag: `src/data/catalog-50.js:81` includes **Gluten-Free**.
   - Record: `src/data/details50/03-british-bakes-portuguese-and-spanish.js:15`; ingredient at line 21 is **“500 g panettone, sliced 2 cm thick”**, with no gluten-free qualifier. The prose and instructions use ordinary panettone.
   - The saved loaded recipe incorrectly reports `dietStatus['Gluten-Free'].status == 'clean'`. Ordinary panettone is wheat bread; the current text does not support the label. Claude should remove the unsupported tag or make a substantiated gluten-free ingredient/method specification. The diet recognizer needs a separate targeted regression follow-up; this photo batch does not silently fix it.

3. **PHOTO-CONTENT-04 — `slow-cooker-beef-ragu`: unsupported Gluten-Free label.**
   - Tag: `src/data/catalog-50.js:116` includes **Gluten-Free**.
   - Record: `src/data/details50/04-spanish-french-and-sauces.js:350`; ingredient at line 368 is **“400 g pappardelle”**, without a gluten-free qualifier; line 376 instructs cooking and tossing that pasta into the ragu. The prose also suggests tagliatelle or rigatoni.
   - The saved loaded recipe also reports the Gluten-Free diet status as `clean`. Ordinary pappardelle is wheat pasta. Claude should resolve the diet claim in the source content; do not use a pasta photo as gluten-free evidence or change the recipe to suit a candidate image.

4. **PHOTO-CONTENT-05 — `nutella-cookies`: unsupported Dairy-Free label.**
   - Tag: `src/data/catalog-55.js:93` includes **Dairy-Free**.
   - Record: `src/data/details55/03-lemon-nutella-oat-and-peanut-butter.js:443`; ingredient at line 449 is **“200 g Nutella”**, without a plant-based/dairy-free qualifier. Method line 458 uses that Nutella directly.
   - The saved loaded recipe reports `dietStatus['Dairy-Free'].status == 'clean'`. The [manufacturer's UK ingredient list](https://www.nutella.com/uk/en/products/nutella), retrieved through web search on 22 October 2026, explicitly lists **“Skimmed MILK powder (8.7%)”** for ordinary Nutella. This is an ingredient-label finding, independent of the rejected sandwich-cookie photo.
   - Claude should remove the unsupported tag or explicitly specify a substantiated dairy-free product and suitable method. A separately branded plant-based variant does not make unqualified ordinary Nutella dairy-free. The recognizer needs a targeted brand/compound-ingredient regression follow-up. Evidence excerpt: `claude-review/nutella-manufacturer-evidence.json`.

## Pre-existing duplicate photographs

The baseline audit checks the complete registry, including hero and process slots, with canonical source identifiers. It covers 5,092 image records: 4,991 photographs and 101 legacy illustrations. It finds **15 pre-existing duplicate-source groups and 6 identical-JPEG SHA-256 groups**, with **0 missing registered JPEG files**. These are existing catalogue reuse patterns, not necessarily 15 broken recipes. Do not report global zero duplicates merely because a new batch has no duplicates.

- `affogato:process`, `biscotti:hero` — `commons:Affogato with Amarretti Biscotti - Tavola Di Famiglia 2026-02-27.jpg`.
- `baked-eggs-spinach-feta:process`, `eggs-florentine:hero` — `commons:Eggs Benedict Florentine - Pasadena, CA.jpg`.
- `cauliflower-chicken-fried-rice:hero`, `cauliflower-rice:hero` — `commons:Easy Fried Cauliflower Rice-1 (31717741910).jpg`.
- `chicken-katsu-curry:hero`, `katsu-curry:hero` — `commons:Chicken katsu curry.jpg`.
- `chicken-quesadilla:hero`, `quesadillas:process` — `commons:Chicken Quesadilla dish at Latin Bistro restaurant Summit NJ.JPG`.
- `garlic-naan:hero`, `naan:hero` — `commons:Bánh mì Naan tỏi ở Tân Phú (1).jpg`.
- `golabki:hero`, `malfouf-mahshi:process` — `commons:Cabbage rolls in oven pan.jpg`.
- `knafeh:hero`, `knafeh-nabulsi:hero` — `commons:Knafeh From Yaffa Knafeh.jpg`.
- `lamb-rogan-josh:hero`, `rogan-josh:hero` — `commons:Rogan Josh.JPG`.
- `paneer-butter-masala:process`, `paneer-tikka:hero` — `wordpress.org/photos/photo/3165c5006e`.
- `samosas:process`, `nigerian-meat-pie:hero` — `commons:Meat pie samosa and spring roll.jpg`.
- `tuna-salad:hero`, `tuna-salad-sandwich:process` — `commons:Tuna fish sandwiches for the National School Lunch Program (1).jpg`.
- `breakfast-casserole:hero`, `sausage-casserole:hero` — `commons:Finished sausage breakfast casserole.jpg`.
- `cornish-saffron-buns:process`, `lussekatter:hero` — `commons:Saffron bun 20051213 001.jpg`.
- `honey-soy-baked-chicken:process`, `honey-soy-chicken-wings:hero` — `flickr:4206872282`.

The six byte-identical pairs are cauliflower chicken fried rice/cauliflower rice; chicken katsu curry/katsu curry; garlic naan/naan; knafeh/knafeh nabulsi; lamb rogan josh/rogan josh; and breakfast casserole/sausage casserole. Keep historical reuse separate from the stricter new-photo no-duplicate gate and propose any future consolidation with content evidence.

## Evidence files and integration ownership

- `claude-review/review-order.json`, `visual-verdicts.json`, `source-review.json`, `live-review.json`: all 233 review rows and observed timestamps/statuses.
- `claude-review/confirmed-generated-image.json`, `source-probes/ccnull-soup-detail.json`: creator AI notice and exact-image evidence.
- `confirmed-withdrawals.json`, `process-reclassifications.json`: original metadata and reasons; do not copy embedded LQIP data into prose reports.
- `duplicate-audit-before.json`: catalogue-wide baseline duplicate groups.
- `recipes.json`: loaded recipe snapshot including ingredients, steps, tags and derived diet statuses.
- `claude-audit.csv`: one row per reviewed recipe with source/creator/licence results, primary source title/caption, visual observation, live base-page results, canonical/schema count, local action and unresolved item.

Claude owns recipe-content corrections and the final shared regeneration. Codex owns this independent technical/photo review. Before integrating, reconcile recipe fingerprints with Claude's current content, preserve existing process photographs, build/check the combined source, confirm meaningful date changes and unchanged advertising, review the remaining holds, and obtain the owner's approval for merge/deployment. None of these photo findings establish Search Console indexing or guarantee Google traffic.
