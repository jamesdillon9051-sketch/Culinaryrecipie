# Food-handling review (October 2026)

What was checked, what was changed and what is left for a person to decide. Nothing here, and no script in the repository, certifies that a recipe is safe. The scan reads the wording of 5,515 methods, tips and storage notes. It cannot see what happens in a kitchen.

## The guidance used

All of it is from the USDA Food Safety and Inspection Service (FSIS). The FSIS pages answered 403 to automated fetching from the build environment, so each point below was confirmed through the search engine's copy of the page and should be re-read at the source:

- Perishable food should not be left out of the refrigerator for more than 2 hours, or 1 hour above 32 °C (90 °F). This covers raw meat, poultry and fish, cooked dishes, and egg- or dairy-rich dishes such as custards, cheesecakes and cream pies. ("Danger Zone (40 °F – 140 °F)", "Leftovers and Food Safety".)
- Marinate food in the refrigerator, not on the counter.
- Separated raw egg whites keep 2 to 4 days refrigerated. Eggs should not be out of the refrigerator for more than 2 hours. ("Shell Eggs from Farm to Table".)
- Hot food should be refrigerated within 2 hours. A large pot or joint cools faster divided, or in shallow containers. ("Leftovers and Food Safety".)

Quality advice and safety advice are kept apart. A note such as "eat within 3 days for the best texture" is the recipe's own and was not changed. No universal storage durations were added.

## Changed (13 recipes, plus macarons)

| Recipe | Before | After | Why |
| --- | --- | --- | --- |
| Macarons | Egg whites aged at room temperature | Covered in the fridge, used within 2 days, out no more than 2 hours before whisking | Raw egg out of the fridge |
| Chicken 65 | Marinate 30 minutes at room temperature | In the fridge | Marinate in the refrigerator |
| Carne asada | Marinate 1 hour at room temperature | In the fridge | Same |
| Lamb cutlets | Marinate 30 minutes at room temperature | In the fridge | Same |
| Kangaroo steak | Marinate at room temperature | In the fridge | Same |
| Lemon herb chicken thighs | 30 minutes at room temperature or up to 4 hours in the fridge | In the fridge, 30 minutes to 4 hours | Same |
| Chicken tagine with olives | Raw chicken "Leave 1 hour, or overnight" (no place given) | Covered in the fridge | Overnight implies outside the fridge |
| Beef vindaloo | Raw beef in paste "leave for 1 hour"; the tip said "leave the curry overnight" | Refrigerate for both | Same |
| Prime rib | Joint out of the fridge 3 hours before roasting | 2 hours, with the reason | Raw meat out longer than 2 hours |
| Burnt Basque cheesecake | Cool at room temperature at least 4 hours, and a tip saying not to refrigerate | Cool 2 hours and serve; refrigerate what is left | Baked egg-and-cream dish out longer than 2 hours |
| Lemon meringue pie | Cool at room temperature 3 hours | 2 hours, then chill | Egg-yolk filling out longer than 2 hours |
| Ribollita | Stand "ideally overnight in a cool place" | Stand an hour; to keep it overnight, refrigerate within 2 hours | Cooked bean and vegetable soup left out overnight |
| Vitello tonnato | Veal cools completely in its broth, then fridge overnight | Refrigerate within 2 hours, then chill overnight | Large joint in liquid cools slowly |
| Buta no kakuni | Cools completely in the liquid, then fridge overnight | Same correction | Same |

Where a change moved a time (Basque cheesecake, lemon meringue pie, prime rib), the rest field and every displayed time follow it.

## Flagged for a person, not changed

**Raw or lightly cooked egg, as the dish is traditionally made.** These recipes serve egg that is not cooked through. The guidance differs by country. The UK Food Standards Agency treats British Lion eggs as safe to eat raw, including for pregnant women. The US FDA recommends pasteurised eggs for raw-egg dishes. Five recipes already mention pasteurised egg (Caesar salad, sukiyaki, gyudon, royal icing, sugar cookies). Whether to add the same line to the rest is an editorial and specialist decision. It was not added in bulk here, because a repeated disclaimer on every page is noise.

- Classic tiramisu, tiramisu gelato, chocolate mousse, semifreddo, charlotte aux fraises
- Aioli, egg mayonnaise, oeufs mayonnaise, vitello tonnato (sauce), chicken Caesar lettuce cups
- Steak tartare (raw beef and raw yolk)
- Eggnog, eggnog ice cream (check whether the base is cooked)
- Pisco sour, whiskey sour, amaretto sour (raw egg white)

**Room-temperature steps judged acceptable and left as written:**

- Fermentation, curing or sugar-preserved steps: curtido, pickled red cabbage, chilli oil (aromatics strained out; only dry flakes remain), mincemeat for mince pies, marrons glacés, confiture.
- Doughs, batters and soaks without meat: focaccia, baguette poolish, brioche, panettone, hoppers, farinata, socca, maamoul, bara brith, barmbrack.
- Under 2 hours: BBQ ribs (dry rub, 30 minutes), chicken and waffles batter (90 minutes).

**For a specialist:**

- Horchata: raw rice soaked overnight at room temperature, as the drink is traditionally made. A refrigerated soak is the cautious option.
- Banoffee pie: the condensed-milk tin is boiled sealed for 3 hours. The method says to keep it covered with water and not to open it hot, which is the safety-critical part. The cooling time is not stated.
- Large stocks and braises that say "cool completely" before refrigerating: the method gives no time. For a big pot this can exceed 2 hours. A general note in the storage section would cover all of them better than editing each method.

## How to repeat the scan

The scan used throughout is in the session notes, not the repository, because a keyword match is evidence for a reader rather than a check that can pass or fail. `node tools/recipe-consistency.js --list review` covers the timing side.
