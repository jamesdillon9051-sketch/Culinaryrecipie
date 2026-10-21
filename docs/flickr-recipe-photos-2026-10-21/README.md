# Flickr photograph rounds (21 October 2026)

229 recipe photographs added from Flickr's public commercial-use CC and public-domain search, in four rounds. For every one, the per-photo page was fetched and its licence link and photographer name matched the search record (229 of 229), and the photograph was looked at at full size against the recipe and its diet labels. Not cooking evidence: these are other people's photographs of the dish. Licences accepted: CC0, public domain, CC BY, CC BY-SA. NonCommercial and NoDerivatives are not used.

## Round 1: 26 photographs

- Searches run: 512 of the 1,139 recipes then without a picture (alphabetical, to 'green'); the run stopped when Flickr's known-positive control returned an empty search model. It was not worked around.
- 316 recipes had candidates; the top two for each (573 downloads) were screened on contact sheets, 41 reviewed at full size, 26 adopted.

## Round 2: 80 photographs

- The search was resumed after the control passed again and reached 987 of the 1,139 recipes in all (475 more than round 1). 152 recipes were not searched on Flickr, and some searches were unverified. This is a bounded search: it shows what Flickr's index returned for the recipe name, not that no photograph exists.
- 611 of the 987 searched recipes had candidates; the top candidates were screened on contact sheets and 128 reviewed at full size with the recipe's diet labels beside them. 82 were accepted; 80 were adopted. Two passed review but were refused by the image gate in `tools/fetch_images.py` as monochrome (the peanut-butter-banana-shake and pounded-yam photographs are pale dishes); the gate was not bypassed and those two recipes stay without a picture.
- Rejected after full-size review, among others: a different topping (Swedish rhubarb pie with a dough lattice for an oat-crumble recipe), a different dish (oyster stuffing for sausage stuffing; osso buco on egg pasta for a gluten-free slow-cooker ragu; a vegetarian-ham gravy), meat on a Vegetarian recipe (sheet-pan nachos, slow-cooker mac and cheese), sour cream on a Dairy-Free recipe (black bean soup), a dish that could not be read (dark or blurred photographs, a drinker's face instead of the drink), and photographs of a restaurant palate cleanser or a plated sample rather than the dish.
- Selected photographs, licences and differences from the recipe: [selected.csv](selected.csv) (rounds in order). Keep the credits in images-attribution.md.

## Round 3: 45 photographs

- The Flickr search was run for the 169 recipes still pending (the 152 not searched in round 2 and 17 that were unverified), so all 1,139 recipes without a picture at the start of round 1 have now been searched on Flickr: 731 returned candidates and 408 returned none in the bounded search. A search that returns nothing is not proof that no photograph exists.
- 211 new candidates (the top two for each new recipe) were screened on contact sheets, 66 reviewed at full size against the recipe's ingredient list and diet labels, 45 accepted and adopted. Most of the Flickr results for the later-alphabet recipes were unrelated to food (people, signs, plants, documents), which is why the yield is lower.
- Rejected after full-size review, among others: a different dish under the same title (cauliflower bites for zucchini pizza bites, pizza for the Zanzibar street pancake, a lemon cake for a chocolate-frosted yellow cake), different ingredients from the recipe (beetroot and ricotta for goat-cheese lentils, a tomato chili for a pale white-bean chili, seitan for a butter-bean vegan stew), meat on a Vegetarian recipe, dairy on a Dairy-Free one, visible copyright watermarks (a photographer's name across the image), a blog logo, a heavily filtered phone photograph, and a plated restaurant scene where the dish was a small part of the frame.

## Round 4: 78 photographs (simplified dish names)

- A second Flickr search used the dish name without a cooking-method or style prefix ("Pot Roast" for "Slow Cooker Pot Roast", "Fish Tacos" for "Air Fryer Fish Tacos"), and the head of a "X with Y" title ("Turkey Stir-Fry" for "Turkey Stir-Fry with Peppers"), for the 229 titles where this gave a different query. Results already seen in rounds 1 to 3 were excluded. 215 of the 229 searches returned candidates.
- Two candidates per recipe (380 downloads for 191 recipes) were screened on contact sheets, 134 reviewed at full size against the recipe's ingredients and diet labels, 78 accepted and adopted. A broader query finds the dish, not necessarily the method, so several photographs differ from the recipe's method or serving (a pan-fried photograph for an air-fryer recipe, a restaurant plate); each difference is noted in selected.csv.
- Where one photograph matched several sibling recipes (instant-pot, slow-cooker and sheet-pan versions of one dish), it was given to one recipe only. No archive page is used for two recipes.
- Rejected after full-size review, among others: uncooked dough or raw ingredients (gnocchi), a photograph with a visible watermark or logo (a sous-vide blog, a recipe blog), a different dish under the same words (cabbage-roll soup shown as cabbage rolls; butter chicken shown as tandoori skewers; sticky toffee pudding shown as a chocolate pudding), cornbread croutons on a Gluten-Free split-pea soup, mashed potato on a Dairy-Free pot roast, eggs on a Vegan potato salad, marshmallow pieces in a Vegetarian fudge, a seafood risotto for a parmesan one, and photographs that were advertising, signs or people.

## State after the rounds

910 recipes still have no picture (MISSING-IMAGES.txt).

Sources that could not be used from this environment (blocked): Pexels, Pixabay, StockSnap, Unsplash, Rawpixel, Kaboompics, Stockvault. PxHere and Foodiesfeed were reachable but their reuse terms for this site were not clear enough to adopt from. Openverse returned no results to this environment's queries. A Wikimedia Commons text search for the remaining recipes was still running when this round was committed; its results are not part of the 229.
