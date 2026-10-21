# Flickr photograph rounds (21 October 2026)

106 recipe photographs added from Flickr's public commercial-use CC and public-domain search, in two rounds. For every one, the per-photo page was fetched and its licence link and photographer name matched the search record (106 of 106), and the photograph was looked at at full size against the recipe and its diet labels. Not cooking evidence: these are other people's photographs of the dish. Licences accepted: CC0, public domain, CC BY, CC BY-SA. NonCommercial and NoDerivatives are not used.

## Round 1: 26 photographs

- Searches run: 512 of the 1,139 recipes then without a picture (alphabetical, to 'green'); the run stopped when Flickr's known-positive control returned an empty search model. It was not worked around.
- 316 recipes had candidates; the top two for each (573 downloads) were screened on contact sheets, 41 reviewed at full size, 26 adopted.

## Round 2: 80 photographs

- The search was resumed after the control passed again and reached 987 of the 1,139 recipes in all (475 more than round 1). 152 recipes were not searched on Flickr, and some searches were unverified. This is a bounded search: it shows what Flickr's index returned for the recipe name, not that no photograph exists.
- 611 of the 987 searched recipes had candidates; the top candidates were screened on contact sheets and 128 reviewed at full size with the recipe's diet labels beside them. 82 were accepted; 80 were adopted. Two passed review but were refused by the image gate in `tools/fetch_images.py` as monochrome (the peanut-butter-banana-shake and pounded-yam photographs are pale dishes); the gate was not bypassed and those two recipes stay without a picture.
- Rejected after full-size review, among others: a different topping (Swedish rhubarb pie with a dough lattice for an oat-crumble recipe), a different dish (oyster stuffing for sausage stuffing; osso buco on egg pasta for a gluten-free slow-cooker ragu; a vegetarian-ham gravy), meat on a Vegetarian recipe (sheet-pan nachos, slow-cooker mac and cheese), sour cream on a Dairy-Free recipe (black bean soup), a dish that could not be read (dark or blurred photographs, a drinker's face instead of the drink), and photographs of a restaurant palate cleanser or a plated sample rather than the dish.
- Selected photographs, licences and differences from the recipe: [selected.csv](selected.csv) (round 1 first, then round 2). Keep the credits in images-attribution.md.

## State after the rounds

1,033 recipes still have no picture (MISSING-IMAGES.txt).

Sources that could not be used from this environment (blocked): Pexels, Pixabay, StockSnap, Unsplash, Rawpixel, Kaboompics, Stockvault. PxHere and Foodiesfeed were reachable but their reuse terms for this site were not clear enough to adopt from. Openverse returned no results to this environment's queries. A Wikimedia Commons text search for the remaining recipes was still running when this round was committed; its results are not part of the 106.
