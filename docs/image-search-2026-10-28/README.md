# Remaining-image search, 28 October 2026

Brief: look for a real, correctly licensed photograph for every recipe still on a
gradient card or a drawing (`MISSING-IMAGES.txt`, 255 recipes), from every source
reachable, skipping none.

## Sources tried

| Source | Result |
| --- | --- |
| Wikipedia article photographs + Commons category (`tools/wide_search.py`) | All 255 searched; 45 recipes had candidates (238 files). |
| Openverse, restricted to the `wikimedia` and `wordpress` providers | All 255 searched with one new query each; about 99 recipes had candidates. Anonymous limit is 200 requests a day, so the run needed several rounds. |
| WordPress Photo Directory (CC0) | All 255 searched; 17 candidates, none right. |
| Europeana (open reuse) | Sampled; no usable dish photographs. |
| Flickr (image host `live.staticflickr.com`), Pexels, Pixabay, Rawpixel, Unsplash, Kaboompics, Library of Congress, DPLA | Not reachable from this environment (the proxy refuses the host, or Cloudflare returns 403). Not worked around. |
| Wikimedia API and `upload.wikimedia.org` | Throttled for this shared address (429/503) for most of the session, so many title-screened candidates could not be downloaded. Retried one at a time with an honest user agent. |

## Rules applied to every candidate

Looked at by eye at full size; refused when it showed raw ingredients, a packaged or
branded product, the wrong dish, or meat, dairy, egg, shellfish, wheat or breadcrumbs
against the recipe's own diet label. Licence must be in `OK_LICENCE`, and CC BY or
CC BY-SA must name the author (read from the file page). Every refusal is in
`src/data/image-rejects.json` with its reason so a later run does not look again.

## Result

Three photographs published: `pounded-yam` (CC BY-SA 4.0, Justdifference), `rizek-cesky`
(CC BY 3.0, Dezidor) and `veggie-chilli` (CC BY 2.0, Thriving Vegetarian), each with its
credit line in `src/data/images.json`. About 80 candidates were looked at and refused
(wrong dish, raw ingredients, packaged or branded product, live animals, a
restaurant plate, or meat, dairy or crab against a Vegetarian, Dairy-Free or
Gluten-Free label); each refusal and its reason is in `src/data/image-rejects.json`.
Another few hundred candidates were refused by file name alone and not downloaded.
252 recipes are still without a picture (`MISSING-IMAGES.txt`).

## Changes to the fetcher

`tools/fetch_images.py` now identifies itself as `WeeklyDelightBot/1.0
(https://weeklydelight.com/contact/; static recipe site image pipeline)` and
no longer sends a browser `Accept` header or a browser user agent: Wikimedia
answers 429 to a bot that dresses as a browser.

## To find more

Run `python3 tools/wide_search.py search --files` and `--openverse` from a network
that can reach Flickr's image host and Wikimedia without throttling; the `seen`
list in `.wide/state.json` and `image-rejects.json` stop it repeating work.
