# Food-handling review, second pass (18 October 2026)

This pass finishes the food-handling items that the October corrective release left open, in `docs/release-2026-10-corrective/food-handling-review.md`. That document is kept as written. Where this pass reverses one of its judgements, the reversal and the reason are set out below.

Two things are true of everything here:

- **Nobody cooked anything.** Every change was made from the recipe's text and the published guidance below.
- **No script certifies safety.** `npm run food` (`tools/food-handling-audit.js`) checks for six patterns a recipe's words can break. Passing it means only that none of those patterns appears. It cannot see a kitchen.

Each change is recorded in `docs/release-2026-10-uncertainties/resolutions.json` under an id of the form `new|<slug>|food: <topic>`. Each record holds the recipe URL, the detail file, the exact text before and after, the problem, the source and any remaining limitation.

## Counts

| | Records | Unique recipes |
| --- | ---: | ---: |
| Corrected | 160 | 155 |
| Specialist (left as written, evidence missing) | 9 | 6 recipes plus 2 catalogue-wide questions |
| Exception (rule judged not to apply, reason recorded) | 2 | 2 group records covering 12 recipes |
| Total recipes whose text changed in this pass | | 153 in this commit, plus doro wat and kapsalon (commit 7e0a23d7) |

The content-date register moved `dateModified` for exactly those 153 recipes and no others. No publication date changed, and `src/data/published-dates.json` is untouched.

Corrected recipes by rule:

| Topic | Recipes |
| --- | ---: |
| Marinade or soak out of the fridge | 35 |
| Egg custard cooling and storage (pies, cheesecakes, flans, panna cotta, crème brûlée, pastry cream) | 29 |
| Garlic, herbs or vegetables kept under oil | 27 |
| Raw or lightly cooked egg without pasteurised eggs | 26 |
| Jars kept in the cupboard without processing | 12, plus 2 oil pickles |
| Raw fish with no parasite freezing | 7 |
| Large pots and fillings cooled with no limit | 6, plus meal-prep rice |
| Cooked meat under fat | 3 |
| Egg foams with no temperature; raw flour | 2 and 2 |
| Thawing place; gravy storage; room-temperature holding | 2, 1 and 1 |

## Sources

Where a page refused automated fetching from the build environment, the table says how its wording was confirmed. Every point should be re-read at the source before it is relied on in public.

| Source | What it says | Used for | How it was read |
| --- | --- | --- | --- |
| USDA FSIS, [Leftovers and Food Safety](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/leftovers-and-food-safety) and Danger Zone | Perishable food out of the refrigerator no more than 2 hours (1 hour above 32 °C); refrigerate within 2 hours; divide large amounts into shallow containers; hot food may go straight into the fridge; cooked leftovers 3 to 4 days; reheat to 74 °C / 165 °F | Cooling, holding, large pots, cooked meat under fat | 403 to fetching; confirmed through search copies of the FSIS pages |
| USDA FSIS, marinating guidance | Marinate in the refrigerator, never on the counter | Marinades | As in the October review |
| Iowa State University Extension, AnswerLine | Egg-rich pies (pumpkin, custard, pecan) are refrigerated once cooled, within the 2 hours | Custard pies | Earlier in this release |
| NCHFP, [Freezing Garlic-in-Oil](https://nchfp.uga.edu/how/freeze/vegetable/freezing-garlic-in-oil/) | Garlic-in-oil made fresh and kept at 4 °C / 40 °F or lower for no more than 4 days, or frozen; mixtures at room temperature risk botulism | Oil preserves | Fetched |
| Oregon State University Extension, [SP 50-701, Herbs and vegetables in oil](https://extension.oregonstate.edu/catalog/pub/sp-50-701-herbs-vegetables-oil) (rev. January 2025) | Fresh or dried garlic and herbs in oil, pesto, and dried tomatoes seasoned with garlic or herbs must be refrigerated and used within 4 days, or frozen | Oil preserves, chilli oil | Fetched |
| OSU Extension, [SP 50-677, Guidelines for refrigeration of foods](https://extension.oregonstate.edu/food/preservation/guidelines-refrigeration-foods) (rev. July 2024) | Flavoured oils and pesto not more than 4 days | Oil preserves | Fetched |
| Penn State Extension, [Avoid Open Kettle Canning](https://extension.psu.edu/avoid-open-kettle-canning-always-process-canned-goods) | Pouring hot food into jars and letting them seal is not safe for pickles, jams or jellies, and sterilising the jars does not fix it | Jars | Search copy |
| NCHFP, [Jams and jellies, general information](https://nchfp.uga.edu/how/make-jam-jelly/jams-jellies-general-information/) | USDA has recommended only a boiling-water process for all jams and jellies since 1988; times depend on the tested recipe, jar size and altitude | Jars | Search copy |
| FDA and USDA FSIS, egg safety | Pasteurised eggs for dishes with raw or undercooked eggs (Caesar dressing, hollandaise, mayonnaise, eggnog, mousse); egg mixtures safe at 71 °C / 160 °F | Raw egg, egg foams | Earlier in this release |
| UK Food Standards Agency, 2017 advice on eggs | British Lion eggs can be eaten raw or lightly cooked by vulnerable groups, except the severely immunocompromised | The UK alternative named in each egg line | Earlier in this release |
| FDA, [Fish and Fishery Products Hazards and Controls Guidance, ch. 5](https://www.fda.gov/files/food/published/Fish-and-Fishery-Products-Hazards-and-Controls-Guidance-Chapter-5-Download.pdf) | Parasites in fish eaten raw are destroyed at −20 °C / −4 °F for 7 days, or −35 °C until solid and 15 hours | Raw fish | Search copy |
| UK FSA, [Freezing fish and fishery products and treatment for parasites](https://www.food.gov.uk/business-guidance/freezing-fish-fishery-products-and-treatment-for-parasites) | −20 °C for 24 hours, or −35 °C for 15 hours (business guidance) | Raw fish | Search copy |
| AESAN (Spain), anisakiasis guidance | At home, −20 °C for 5 days; vinegar, salt and marinades do not kill anisakis; boquerones en vinagre are named | Boquerones | Through Spanish press and consumer-site reports of the AESAN guidance; the AESAN PDF itself was not opened |
| FDA Food Code 3-402.11(B) | Yellowfin, bigeye and bluefin tuna, and farmed fish raised on pellet feed, are exempt from parasite freezing | Tuna dishes left as written | Through a state adoption of the Food Code ([Delaware, Cornell LII](https://www.law.cornell.edu/regulations/delaware/16-Del-Admin-Code-SS-3-402.11)); check the edition your jurisdiction uses |
| FDA, raw dough and raw flour | Raw flour can carry E. coli | Cookie dough | Raw-flour risk only. The home 74 °C oven method used earlier was withdrawn on 2026-10-21: no validated home process is cited. |
| CDC | Botulinum toxin cannot be seen, smelled or tasted | Wording of the oil-preserve notes | Earlier in this release |

## What changed, by rule

### 1. Garlic, herbs and vegetables under oil (27 recipes), cooked meat under fat (3)

**Rule:** at most 4 days in the fridge, then the freezer, and never at room temperature. This covers:

- pastes and sauces where oil is the main liquid or the storage seal (pesto, harissa, zhoug, tapenade, chimichurri, mojo picón, romesco, muhammara, hummus);
- flavoured oils (chilli oil, scallion oil, ginger scallion oil, salsa macha, XO sauce, shito, garlic confit);
- cooked vegetable spreads under an oil seal (ajvar, zacusca, lyutenitsa) and labneh balls in oil with dried herbs.

Before and after:

- **Chilli oil.** Before: *"In a sealed jar at room temperature for 3 months, or refrigerated for 6."* After: *"Keep it in the fridge in a sealed jar and use it within 4 days, or freeze small jars for longer keeping. Home-made flavoured oils, even those made with dried chillies and spices, can carry botulism, which cannot be seen, smelled or tasted."* The 24-hour rest before use moved to the fridge too.
- **XO sauce.** Before: *"Refrigerated under its oil for 3 months. Do not freeze."* After: 4 days, and the freezer for longer keeping. "Do not freeze" was dropped, because freezing is the only supported way to keep it longer.
- **Pesto.** 5 days became 4.

For cooked meat under fat (duck confit, carnitas and rillettes), FSIS's 3 to 4 days for cooked leftovers applies. Duck confit's "keeps for weeks" and "a month", and rillettes' "3 weeks while the fat seal is unbroken", now read 4 days, with the freezer for longer.

**The line drawn.** Vinaigrettes and acid sauces where vinegar or citrus is a large share of the liquid were left as written. These are French, Italian, balsamic and lemon dressings, peri-peri sauce and Japanese ginger dressing (record `new|french-dressing|food: acid dressings left as written`). The 4-day guidance is written for garlic and herbs in oil, and no tested acidification exists for these dressings either. Rendered or strained fat on its own (duck and goose fat) is outside the rule.

**Reversal.** The October review judged chilli oil acceptable at room temperature because the fresh aromatics are strained out. Oregon State's January 2025 revision says that oil seasoned with dried garlic or herbs must also be refrigerated and used within 4 days, so that judgement is withdrawn.

### 2. Jars kept in the cupboard without processing (12 recipes, plus 2 oil pickles)

The 12 recipes are strawberry jam, confiture de fraises, marmalade, apple butter, pepper jelly, pickled onions, pickled red cabbage, and apple, tamarillo, mango and onion chutney and Branston-style pickle. Each was hot-filled into sterilised jars or cold-packed under vinegar, then said to keep for months, up to a year, in a cupboard.

- **The change.** The jars now go in the fridge, with the recipe's own keeping times. Each storage note says why: moulds and yeasts get in while the jars are filled, and the seal is often weak. Cupboard jars need a tested recipe processed in a boiling-water canner.
- **No canning times invented.** The processing time depends on the tested recipe, jar size and altitude, so none was given for a recipe that has not been tested.
- **Low-acid recipes.** Onion chutney, Branston-style pickle and pepper jelly are mostly low-acid vegetables whose acidity has not been measured. They are held to the recipe's opened-jar time.
- **Indian oil pickles.** Lime and mango pickle keep their traditional cure; storage after the cure is in the fridge.

**Reversal.** The October review listed confiture de fraises and pickled red cabbage as acceptable sugar or vinegar preserves at room temperature. Under the USDA-family guidance the site follows, unprocessed jars are not, so both now go in the fridge.

**Limitation.** Hot-filling sterilised jars is the traditional British method and still common practice. The UK has no equivalent official statement either way.

### 3. Raw and lightly cooked egg (26 recipes), egg foams (2)

Egg served raw, or in a sauce or foam that is not taken to 71 °C / 160 °F, now names pasteurised eggs in the ingredient line, with British Lion-stamped eggs as the UK alternative. For example: `2 egg yolks, pasteurised (or British Lion-stamped in the UK)`. This covers:

- mayonnaise, aioli and rouille: aioli, oeufs mayonnaise, céleri rémoulade, Belgian frites, vitello tonnato, bouillabaisse, soupe de poisson and bourride;
- Caesar dressings: Caesar lettuce cups and kale Caesar;
- hollandaise and béarnaise: eggs Benedict, Florentine, Royale and Sardou, spargel and béarnaise sauce;
- carbonara (both recipes), chocolate mousse, semifreddo, the whites folded into eggnog, the yolks on steak tartare and carpaccio, and the egg-white sours.

This is an ingredient specification, not a disclaimer. Some tips and storage notes that hedged were corrected:

- Chocolate mousse said it contained "lightly cooked egg". The egg is raw.
- Kale Caesar told the cook to "use a good egg".

Zabaglione and sabayon are cooked dishes, so instead of a pasteurised line they gained a thermometer cue: *"reaches 71 °C / 160 °F on a thermometer"*. Tiramisu (75 °C), tiramisu gelato (82 °C), eggnog custard (77 °C), eggnog ice cream (80 °C) and île flottante (82 °C) already stated a temperature above 71 °C and were not changed.

**Reversal.** The October review left raw-egg dishes as an editorial decision, to avoid a repeated disclaimer. This pass treats the egg as an ingredient choice the guidance supports and states it once, where the egg is listed.

**Not changed:** runny yolks in poached, fried and soft-boiled eggs across the catalogue. FSIS advises firm yolks; the UK FSA allows runny Lion eggs for nearly everyone. That decision is the owner's (record `new|catalogue/runny-yolks`).

### 4. Raw fish (7 recipes)

- **Boquerones en vinagre** were frozen "for 48 hours", and the why text said this "makes it safe". Neither FDA (7 days at −20 °C) nor AESAN (5 days at −20 °C at home) supports 48 hours in a home freezer. The recipe now freezes for 7 days at −20 °C / −4 °F or colder and says a freezer that only reaches −18 °C is not enough. The 7 days is counted in the elapsed time, and the meta says "plus freezing and curing".
- **Gravlax** said the cure "makes it safe to eat raw". It does not kill parasites, so the claim was removed. The salmon is now farmed, or previously frozen to kill parasites.
- **Ceviche, kokoda, lomi lomi, salmon poke bowls and chirashi (salmon):** the fish line now says sold for eating raw and previously frozen to kill parasites, or farmed. Kokoda's tip now says lime juice does not kill parasites.
- **Tuna dishes were left as written**, as the FDA Food Code exempts yellowfin, bigeye and bluefin tuna (record `new|poke-bowl|food: tuna served raw`).

### 5. Marinades and soaks (35 recipes)

- **Marinades.** Every marinade of an hour or more, or overnight, now names the fridge. This covers 25 recipes from the earlier list, plus ramen eggs and Jamaican curry goat, which the new audit found. Wet marinades that said "room temperature" moved to the fridge.
- **Soaks.** The perishable ones moved to the fridge: the cheese for knafeh, the salt pork in feijoada and pote gallego, the dried seafood for XO sauce, and the grains and rice for sobia and horchata.
- **Unchanged.** Short dry-salt tempering of joints before roasting, under 2 hours, is left as written. That is within the 2-hour rule.

### 6. Cooling and holding

- **Egg custards (29 recipes).** Custard pies, cheesecakes, flans, panna cotta, crème brûlée, crema catalana, malabi, lemon bars, milk tart, clotted cream and pastry-cream cakes now cool for no more than 2 hours and then go in the fridge. Before, they cooled "completely" or "at least 3 or 4 hours".
- **Storage of four of them.** Galaktoboureko, pastiera, far Breton and gâteau Basque were kept at room temperature for days; they are now kept in the fridge.
- **Large pots (6 recipes).** Large pots and fillings are divided into shallow containers, or moved to the fridge, within 2 hours.
- **Timing.** Where a cooling time changed, the `rest` field, the page times and the timing reader agree. Pumpkin pie's rest went from 390 to 330 minutes, and boquerones' from 3,060 to 10,260.

### 7. Thawing and other items

- **Thawing.** Octopus and whitebait thaw in the fridge.
- **Gildas.** Held for 2 hours at room temperature, not 4.
- **Biscuits and gravy.** The gravy is kept in the fridge and reheated until piping hot.
- **Cookie dough (revised 2026-10-21).** The three recipes now call for flour sold as heat-treated and ready to eat raw, for the unbaked dough only. The home oven 74 °C step was removed because no validated home process is cited. The bars' base is baked and keeps ordinary flour. Whether a given product is truly ready to eat is the manufacturer's label claim; none was checked.

## Specialist list: what is missing

| Recipe | Item | Missing evidence |
| --- | --- | --- |
| [Aguachile](https://weeklydelight.com/recipes/aguachile/) | Raw prawns in lime juice | A specialist decision on keeping the dish and on what to tell pregnant, elderly, very young or immunocompromised readers |
| [Steak tartare](https://weeklydelight.com/recipes/steak-tartare/), [Carpaccio](https://weeklydelight.com/recipes/carpaccio/) | Raw beef | The same; the yolks are now pasteurised, the beef cannot be made safe by method |
| [Makdous](https://weeklydelight.com/recipes/makdous/), [Betengan mekhalel](https://weeklydelight.com/recipes/betengan-mekhalel/), [Giardiniera](https://weeklydelight.com/recipes/giardiniera/) | Vegetables cured under oil for weeks | A tested process (pH and salt measured, or a validated acidification); storage is already in the fridge with no keeping time |
| [Miso ramen](https://weeklydelight.com/recipes/miso-ramen/) | Tare with raw garlic and ginger kept 3 weeks | Salt and water-activity figures, or specialist review; no home guidance covers garlic in a miso paste |
| Catalogue | 717 recipes give fridge lives over 4 days ([list](food-long-fridge-lives.md)) | A per-category shelf-life policy from a specialist; FSIS's 3 to 4 days for leftovers does not cover pickles, cakes or cured foods, and one universal time would be wrong |
| Catalogue | Runny yolks | An editorial and specialist decision; US and UK guidance differ |

Lime pickle and mango pickle are recorded as exceptions to the oil rule in `src/data/food-handling-reviewed.json`. The 4-day limit is for low-acid foods, and lime and raw green mango are strongly acidic. Their pH has not been measured.

## The audit

`tools/food-handling-audit.js` is part of `npm run check`. It fails on confirmed findings, and its ledger, `src/data/food-handling-reviewed.json`, holds verdicts tied to a fingerprint of the ingredients, method, tips and storage note.

| Rule | Confirmed on the data before this pass (commit 65762cf0) | Now |
| --- | ---: | ---: |
| oil-preserve-life | 29 | 0 |
| raw-egg | 25 | 0 |
| marinade-out | 16 | 0 |
| unprocessed-jar | 12 | 0 |
| raw-fish | 5 | 0 |
| raw-flour | 2 | 0 |
| **Total** | **89 in 87 recipes** | **0**; 3 specialist, 2 exceptions |

Each rule is pinned down by 19 self-test cases (`node tools/food-handling-audit.js --selftest`, also run by `check`). They are built from the before and after texts:

- **Must report:** pesto kept 5 days, chilli oil at room temperature, a jam kept in the cupboard for a year, aioli with raw yolks, hollandaise "cooked" by hot butter, ceviche of "very fresh" fish, chicken marinated overnight with no fridge, and flour baked 5 minutes with no temperature check.
- **Must not report:** the same pesto at 4 days, an olive oil cake, a vinaigrette, jam kept in the fridge, tiramisu taken to 75 °C, tuna poke, a fridge marinade, a 20-minute marinade, and flour sold as ready to eat raw.

Rules the audit does not have: runny yolks, general leftover lives, and large-batch cooling worded in ways the scan does not recognise. Those still need a reader.
