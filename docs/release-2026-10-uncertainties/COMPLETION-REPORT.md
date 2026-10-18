# Recipe uncertainties, October 2026: completion report

Branch `claude/culinaryvault-corrective-release`. This release adds six commits on top of the corrective release, which ended at `d5689724`:

- `0261b636` Timing reader
- `0f8d674e` Untimed waits
- `7e0a23d7` Timing queue
- `65762cf0` Ingredient queue
- `6b6ee31f` Food handling
- the commit that carries this report

It is not merged and not deployed. Deployment was not authorised (section 8).

**Scope:** recipe accuracy, completeness, timing and food handling. Advertising, contact configuration, missing images, design and unrelated SEO were left alone. `node tools/ads-unchanged.js --against d5689724` reports the advertising code, configuration and page markup unchanged.

**Nobody cooked anything.** Every correction was made from the recipe's own text and, for food handling, from the published guidance named in `food-handling-review.md`. No page claims a recipe was tested.

## 1. The queue

The queue was the 832 review findings the consistency checker listed on 18 October, in 730 recipes. It is frozen in `baseline-queue-2026-10-18.json`. Every finding has a resolution in `resolutions.json`, which records the recipe URL and file, the exact item, what was wrong, what changed or why not, the source and any remaining limitation. `resolutions-summary.md` is the readable version.

| Status | Baseline findings | Recipes | Found while working | Recipes |
| --- | ---: | ---: | ---: | ---: |
| Corrected | 560 | 522 | 846 | 717 |
| Valid exception (recipe right, checker misread it, reason recorded) | 272 | 226 | 29 | 28 |
| Requires actual cooking | 0 | 0 | 1 | 1 |
| Requires specialist review | 0 | 0 | 9 | 9 |
| Duplicate | 0 | 0 | 0 | 0 |
| Not yet resolved | **0** | | | |
| Total | 832 | 730 | 885 | 743 |

The baseline findings, by kind:

| Kind | Findings | Recipes | Corrected | Exception |
| --- | ---: | ---: | ---: | ---: |
| Required wait not counted | 344 | 332 | 316 | 28 |
| Cooking stages exceed the cook time | 237 | 237 | 216 | 21 |
| Ingredient the method never names | 231 | 180 | 20 | 211 |
| Divided ingredient, split unclear | 12 | 12 | 0 | 12 |
| Whole-recipe time claim | 7 | 7 | 7 | 0 |
| Advance preparation in an ingredient line | 1 | 1 | 1 | 0 |

The findings made while working were mostly of three kinds:

- **Time claims (about 400).** The old checker read only claims written in minutes. Claims in hours ("ready in 1 hour 20 minutes"), and descriptions clamped mid-time at 158 characters, were missed.
- **Untimed stages (298).** The method needs time it does not give.
- **Food-handling defects (171).** These came from the scans in section 4 and from the new audit.

No warning was silenced to reach zero:

- **Exceptions.** Each sits in `src/data/consistency-reviewed.json` (40 entries in 39 recipes) or `src/data/food-handling-reviewed.json` (5 entries), with the recipe id, the reason and a fingerprint of the recipe. A verdict goes stale and the finding returns as soon as the recipe changes.
- **Checker changes.** Where the checker was improved (synonyms, cut forms, "while the dough proves" overlaps, food-handling limits that are not waits), `tools/consistency-corpus.js` pins down 6 gaps it must still report and 6 readings it must not.

## 2. Timing

The rules followed:

- Sequential stages are added, and overlapping ones are counted once.
- No overlap is assumed unless the method states it. Where a page relied on an overlap the method did not state, the method now says so ("While the beans simmer…").
- Required and optional waits are kept apart: an optional make-ahead step does not lengthen the total; a required one does.

Where the method does not time a stage ("cool completely", "the pasta, for the time on its packet"), the record lists it as untimed, and every place that shows a time follows:

- the page says "plus time for …, which the recipe does not time";
- the total reads "at least";
- cards show "+";
- the time filter leaves the recipe out rather than promise it fits.

No durations were invented. Headers, cards, filters, titles, descriptions, FAQs, the search index and the JSON-LD are checked against each other by `recipe-consistency.js --built` on every `npm run check`.

Before and after:

- **Shepherd's pie.** Cook 50 minutes against a method that browns in two batches, softens the vegetables, simmers 35 to 40 minutes and bakes 30 to 35. Now cook 90 to 105 minutes, with the potatoes boiling meanwhile as written.
- **Moussaka.** 147 minutes of sequential stages against a 75-minute cook. The method now says the potatoes roast beside the aubergine and the ragù is made while the aubergine salts and roasts. That gives a cook of 70 to 80 minutes plus 60 of salting and resting: 2 h 50 min to 3 h.
- **Pasta e fagioli.** Step 2 now starts "While the beans simmer", which the 80 to 95-minute cook assumed. The pasta's minutes are declared untimed, so the total of 9 h 35 min to 9 h 50 min is a minimum.
- **Dal makhani.** Step 4 now begins "While the lentils simmer"; the total is 11 h 30 min to 12 h.
- **Banoffee pie.** The sealed tin boiled for 3 hours, which the condensed-milk manufacturer advises against. It is replaced with the manufacturer's open-dish water-bath method (220 °C, 1 to 1½ hours); total 1 h 30 min to 2 h, plus the toffee's cooling.
- **Macarons.** The cooling and ganache firming are untimed stages with readiness cues, and the page states the total, now 25 h 44 min to 26 h 16 min, as a minimum. The row's cook time was 15 against a method of "14 to 16 minutes", so the header read "1 hr 15 min to 1 hr 16 min". It now follows the method: 1 hr 14 min to 1 hr 16 min.

## 3. Ingredients and methods

Each of the 243 ingredient findings was read in its recipe:

- **211 were the checker misreading a recipe that is right.** The method names the ingredient another way: "pepper" for peppercorns, "the greens" for turnip tops, "the chips" for potatoes cut into chips, "everything" or the group name. The checker now reads synonyms, stems, cut forms and group names. The corpus keeps it from going so permissive that a real gap passes ("an unused herb is still reported").
- **12 divided-ingredient findings were exceptions.** Each split is made in the method in words the checker did not read.
- **20 were real gaps, and the method was changed.** No ingredient was deleted and no use was invented. For example, s'mores listed peanut butter, fruit and flaky salt as variations the method never placed; one closing sentence now says where they go, using only the listed items.

## 4. Food handling

`food-handling-review.md` has the detail, the sources and the reversals of the October review. In summary, 155 recipes were corrected:

- Garlic, herbs or vegetables under oil, flavoured oils and pesto: 4 days in the fridge at most, then the freezer (NCHFP; Oregon State Extension SP 50-701, 2025).
- Cooked meat under fat: 4 days (USDA FSIS).
- Unprocessed jams, chutneys and pickles: moved from the cupboard to the fridge (Penn State Extension; NCHFP).
- Raw or lightly cooked egg: the ingredient line names pasteurised eggs, or British Lion-stamped in the UK (FDA, FSIS, UK FSA).
- Raw fish: bought previously frozen, or farmed. Boquerones freeze 7 days at −20 °C (FDA, UK FSA, AESAN).
- Marinades and perishable soaks: in the fridge.
- Egg custards and cheesecakes: cool for no more than 2 hours before the fridge.
- Large pots: refrigerated within 2 hours in shallow containers.
- Thawing: in the fridge.
- Cookie-dough flour: heat-treated to 74 °C.

The new `tools/food-handling-audit.js` (`npm run food`) has six rules, 19 self-test cases and its own fingerprinted ledger, and is part of `npm run check`. On the data as it stood before this pass it reports 89 confirmed findings in 87 recipes; now it reports 0.

## 5. Unresolved: exactly what is missing

| Recipe or scope | Status | Missing evidence |
| --- | --- | --- |
| [Macarons](https://weeklydelight.com/recipes/macarons/): shell cooling, ganache firming | Requires cooking | One real bake, timed: shells from oven to clean release, ganache from fridge to pipeable |
| [Aguachile](https://weeklydelight.com/recipes/aguachile/): raw prawns in lime | Specialist | Whether to keep the dish and what to tell vulnerable readers; no method makes raw prawns safe |
| [Steak tartare](https://weeklydelight.com/recipes/steak-tartare/), [carpaccio](https://weeklydelight.com/recipes/carpaccio/): raw beef | Specialist | The same; their yolks are now pasteurised |
| [Makdous](https://weeklydelight.com/recipes/makdous/), [betengan mekhalel](https://weeklydelight.com/recipes/betengan-mekhalel/), [giardiniera](https://weeklydelight.com/recipes/giardiniera/): vegetables cured under oil for weeks | Specialist | A tested process (pH and salt measured, or validated acidification); they are kept in the fridge with no keeping time until then |
| [Miso ramen](https://weeklydelight.com/recipes/miso-ramen/): tare with raw garlic kept 3 weeks | Specialist | Salt and water-activity figures, or specialist review |
| 717 recipes with fridge lives over 4 days ([list](food-long-fridge-lives.md)) | Specialist | A per-category shelf-life policy; one universal time would be wrong for pickles, cakes and cured foods |
| Runny yolks across the catalogue | Specialist and owner | An editorial decision; US and UK guidance differ |

Also recorded, with their limitations:

- **Lime and mango pickle** are exceptions to the oil rule. They are acidic fruit; the pH has not been measured.
- **Vinaigrettes and acid sauces** were left as written. No tested acidification exists for them.
- **Hot-filled jars** are the traditional British method, now kept in the fridge.

## 6. Files changed

Source and tooling, since `d5689724`:

- `src/lib/timing.js`: the reader. It counts short required waits, reads clauses and ingredient alternatives, does not count food-handling limits such as "within 2 hours", and builds the wait label from the counted clauses.
- `src/build.js`, `src/templates/recipe-page.js`, `src/lib/faq.js`, `src/lib/util.js`: the untimed stages are shown, and the content-date fingerprint includes them.
- `tools/recipe-consistency.js`: the consistency checker, rewritten for coverage, overlaps, time claims in hours and family-based untimed reading.
- `tools/consistency-ledger.js`: the ledger, with fingerprints and staleness.
- `tools/consistency-resolutions.js`: the resolution record and its Markdown report.
- `tools/consistency-corpus.js`, `tools/timing-corpus.js` (38 timing and 5 label cases) and `tools/food-handling-audit.js` (new).
- Smaller changes to `tools/check.js`, `tools/timing-audit.js` and `tools/site-browser-test.js`, plus `package.json` (`npm run food`), `CLAUDE.md` (the food-handling policy and the new audit) and `README.md`.

Data:

- 352 catalogue and detail files changed.
- `src/data/consistency-reviewed.json`, `src/data/food-handling-reviewed.json` (new) and `src/data/content-dates.json` changed.

Documentation:

- this report;
- `resolutions.json` and `resolutions-summary.md`;
- `baseline-queue-2026-10-18.json`;
- `food-handling-review.md` and `food-long-fridge-lives.md`.

Generated site: about 5,900 pages and feeds regenerated by `npm run build`.

**Data that did not change:**

- **URLs.** No recipe was removed, merged or set to noindex.
- **Publication dates.** `src/data/published-dates.json` is unchanged.
- **`dateModified`.** It moved only for recipes whose content changed. For the food-handling commit, the 153 recipes edited and the 153 the register moved are the same set.

## 7. Tests

All were run on the final build:

| Test | Result |
| --- | --- |
| `npm run build` | 5,878 HTML pages |
| `npm run check` (links, headings, JSON-LD, FAQ, README counts, timing, diet, keywords, nutrition, SEO, duplicates, health, images, voice, consistency, food handling) | All checks passed |
| `npm run selftest` (voice, layouts, overlay, validator, pipeline) | 64 passed, 0 failed |
| `node tools/timing-corpus.js` | 38 timing cases and 5 wait labels as expected |
| `node tools/consistency-corpus.js` | 12 cases as expected |
| `node tools/food-handling-audit.js --selftest` | 19 cases as expected |
| `node tools/recipe-consistency.js` | 0 confirmed, 0 open for review, 40 valid exceptions (39 recipes), 0 stale |
| `node tools/food-handling-audit.js` | 0 confirmed, 3 specialist, 2 exceptions, 0 stale |
| `node tools/seo-audit.js --all` | All 5,871 indexable pages pass |
| `node tools/ads-unchanged.js --against d5689724` | Advertising code, configuration and page markup unchanged |
| `node tools/site-browser-test.js` (Chromium, phone size, whole collection) | 24 of 24. One expectation was updated: the "under 30 minutes" filter now leaves out the 28 quick recipes with an untimed wait, as designed. The test had predated the untimed flag. |

**Rendered pages inspected in Chromium at 390 px and 1,280 px.** The named recipes were macarons, banoffee pie, pasta e fagioli, dal makhani, moussaka and lasagna Bolognese. One sample came from each category:

- Quick Meals: pesto alla Genovese
- Desserts: New York cheesecake
- Dinner: Jamaican curry goat
- Drinks: eggnog
- Baking: lemon bars
- Appetizers: aïoli
- Lunch: whitebait fritters
- Breakfast: strawberry jam
- Healthy: roasted tomatoes with herbs
- Holiday Specials: feijoada

Chilli oil, boquerones and pumpkin pie were also checked. On every page:

- it returned 200 with no script errors and no sideways scroll;
- the method heading carries the dish's name;
- the JSON-LD prep, cook and total times match the "start to finish" line;
- untimed stages are named under "Not timed";
- the pasteurised and freezing lines render in the ingredient list;
- the advertising script is present.

## 8. Implementation and deployment

**Implementation is complete on the branch and pushed.** Deployment is a separate step and was not authorised, so nothing here is live.

When the owner chooses to deploy:

1. Merge the branch into `main`. That triggers the Hostinger auto-deploy.
2. Clear the host's cache.
3. Spot-check a few pages listed in section 7 on weeklydelight.com.

Until then, every item above is "implemented and tested locally", not "verified live".
