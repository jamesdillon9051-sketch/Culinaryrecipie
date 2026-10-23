# Why pages stop being indexed: Google's reasons, compared with weeklydelight.com (23 October 2026)

Integration of Codex's `audit/google-indexing-followup-2026-10-22` (source `e822110d`, report in [../google-indexing-followup-2026-10-23/](../google-indexing-followup-2026-10-23/README.md)) on branch `claude/indexing-fixes`, plus the authored-timing corrections Codex assigned to Claude, plus a reason-by-reason comparison with Google's documentation. Not merged, not deployed: the owner has not yet approved either.

Nothing here can promise indexing or traffic. Google decides what to index. What follows separates what the repository can fix (and now does) from what only the host or Search Console can show.

## What was changed on this branch

1. **Codex's technical fixes, regenerated once** (Claude is the regeneration owner): generated "ready in N minutes" and nutrition promises in titles and descriptions no longer appear where the recipe has an untimed wait or no calculated nutrition; ingredient hubs use supported elapsed times; the cuisine index counts the cuisines it lists; category descriptions say what the page does; the optional numbered `HowToStep` names are gone. Three regression tools (`seo-claims-test`, `taxonomy-metadata-test`, `recipe-step-schema-test`) run inside `npm run check`.
2. **The 37 authored timing claims in 35 recipes** from [authored-time-claims.csv](../google-indexing-followup-2026-10-23/authored-time-claims.csv). Each said "ready in N minutes" or "N servings in N minutes" while the method has a wait that is not in N (cooling completely, cooling the rice, setting the topping for a few hours). Each now ends "plus cooling" (or names the wait the recipe itself names). No duration was invented. Three metas were shortened so the added words are not cut off at 158 characters (`apple-turnovers`, `spicy-tuna-roll`, `mazurek`). `apple-turnovers`' lede ("Forty-five minutes.") got the same qualifier.
3. Generated output regenerated. Build twice: the second changes nothing. `npm run check`, `npm run selftest` (64 passed), the three new tests and `diet-conditions-test` pass. `node tools/ads-unchanged.js` reports advertising unchanged against `ac8dbc13` and `29fc1cb1`.
4. **Date register:** 35 recipe pages (the edited ones) and 291 category and cuisine pages move their `lastmod`/hash; no other recipe does. This is the register working as intended (a real content change moves the date).

## Google's documented reasons, one by one

| Google status or cause | What the site shows | Result |
| --- | --- | --- |
| **Server error (5xx)** and **Discovered – currently not indexed** (Google holds back so as not to overload the site; Google slows crawling when it sees 5xx/429 and drops URLs that keep failing) | The origin behind Hostinger's CDN (`server: hcdn`) answered a gentle probe of 103 sitemap URLs with HTTP 429 and an empty body on almost every request at one per second, and still intermittently at 3 to 5 second spacing. Earlier, the same URLs gave 307s to themselves and 502s on JPG files. A later probe of 16 WebP and 16 JPG files at 2.5 second spacing gave 32 of 32 HTTP 200. The failures come and go. | **Host-level, cannot be fixed in the repository.** Most plausible single cause of "not indexing anymore". Owner and Hostinger actions below. |
| **Redirect error** | Repository redirects (`.htaccess`) are one hop for `www` and for `index.html`; `http://www…` without a trailing slash is three hops (CDN to https, www to apex, directory slash), well inside Google's limit of ten. The intermittent 307s are on the host side. | Repository fine; 307s are host-level. |
| **Blocked by robots.txt** | `robots.txt` disallows only query-string filter URLs and the contact endpoint; sitemaps are listed; nothing in the sitemap is blocked. | Clear. |
| **noindex / meta robots / X-Robots-Tag** | Only `favourites/` (a personal page) and `404.html` carry `noindex`; neither is in a sitemap. Checked by `npm run check` and Codex's audit. | Clear. |
| **404 / other 4xx, soft 404** | All 5,871 sitemap URLs map to a built page; every page has distinct, substantial content. A page that returns 429 to a crawler is a 4xx to that crawler (host item above). | Clear in the repository. |
| **Duplicate without user-selected canonical; Duplicate, Google chose different canonical; Alternate page with proper canonical** | Every page has a self-referencing canonical. `www` and `/index.html` duplicates were removed earlier (`.htaccess`). 15 near-duplicate recipe pairs are acknowledged; none is an exact copy (below). | Mechanically clear. Pair decisions are the owner's. |
| **Crawled – currently not indexed** (Google fetched it and chose not to index: usually quality or uniqueness) | Plausibly the largest group for a site of 5,515 AI-assisted, template-built pages published in weeks. The repository's own audits find no banned phrases, no invented experience, ratings or popularity claims. Unsupported time and nutrition promises and the numbered step names (Codex) and the 37 authored time claims (this branch) were the concrete defects found. The site discloses AI assistance and claims no cooking or testing; the 26 entries in the testing register remain "not cooked". | Defects fixed. **The remainder is a judgement about value that code cannot change**; see "What only evidence can improve". |
| **Spam policies: scaled content abuse (AI "no matter how it is created"), doorway pages, misleading functionality, sneaky redirects/back-button hijacking** | Google ran spam updates in June, on 18 August and on 24 September 2026 (the last for about 13.7 days). Whether any of them affected this site cannot be read from here: that needs the dates in the Search Console Page indexing chart. Advertising code is unchanged against `ac8dbc13` and `29fc1cb1`; whether the ads themselves raise a policy concern is for Search Console's Security issues and Manual actions to say. | **Check Search Console: Manual actions and Security issues.** If neither lists anything, there is no manual penalty; algorithmic demotion is not shown there. |
| **Structured-data errors** (affects rich results, not indexing) | One Recipe JSON-LD per page, no microdata duplicate. Numbered `HowToStep` names removed. 288 recipes have no image, and Google requires an image for Recipe rich results. | Fixed or reported; the 288 stay on the gradient card until a correct real photograph is found (no AI images). |
| **Mobile usability / Core Web Vitals / HTTPS** (page experience, not an indexing gate) | Measured earlier in this project; HTTPS and mobile layout are in place. | Not an indexing cause. |
| **Sitemap problems** | 12 child sitemaps and an index; 5,871 URLs, canonical, absolute, `lastmod` from the content register, no invented dates. | Clear. |
| **Orphan pages / weak internal links** | 250,155 internal link edges, every page within two links of the home page, no orphans. | Clear. |

## The 15 acknowledged near-duplicate pairs

Ingredient-word overlap, computed from the recipe data (1.0 would be identical): coleslaw / creamy-coleslaw 0.81; grilled-cheese / grilled-cheese-sandwich 0.78; soft pretzels pair 0.71; garlic-naan / naan 0.69; classic-potato-salad / potato-salad 0.66; sloppy-joe-mix / sloppy-joes 0.65; lamb-rogan-josh / rogan-josh 0.63; the two moules marinière 0.63; kibbeh pair 0.59; pulled-pork pair 0.58; aubergine / melanzane parmigiana 0.57; german-potato-salad / kartoffelsalat 0.54; chicken-tagine-olives / moroccan-chicken-tagine 0.47; pork-schnitzel / schnitzel 0.46; sfiha pair 0.45. Step counts and some cuisines/categories differ; no pair is a copy. **Proposal only, no URL changed:** if the owner wants fewer overlapping pages, the highest-overlap pairs (the first four) are the first candidates for merging into one stronger page, with a 301 from the retired URL. That is a content and URL decision for the owner; it was not done.

## What was examined and deliberately not changed

- **Cache headers for pages and sitemaps** (`max-age=0, must-revalidate`): the CDN does cache `robots.txt` for an hour. A crawler visiting each of 5,871 URLs roughly once would not be helped by edge caching, so the change is unlikely to reduce load, and its effect cannot be tested from here.
- **Re-encoding the 5,712 JPEG files from progressive to baseline:** all sampled files are progressive, but a 32-file probe later returned 200 for every JPG, so there is no evidence the format causes the 502s. A change of about 5,700 files for an unproven cause was not made.
- **`og:image` and JSON-LD point at the `.jpg`, while pages use the `.webp`:** if the host sometimes fails on JPG, structured-data images could be missed. Switching them would change every recipe page and may affect social previews; left for a decision once the host's behaviour is understood.
- **Noindex, redirects or deletion for the 15 duplicate pairs, the 70 collections with one to five recipes, or the 288 recipes without an image:** none done, as agreed (no bulk noindex, deletion or redirect without evidence). The small collections listing is in [small-collections-review.csv](../google-indexing-followup-2026-10-23/small-collections-review.csv).

## What only evidence can improve

- **Real cooking.** The strongest honest signal for a recipe site is a recipe someone cooked and photographed. Starting with the recipes that get impressions in Search Console, cook and photograph them and record it in `src/data/testing-notes.json` (`status: "cooked"`, `cookedBy`, `date`). Nothing on the site may say a recipe was tested before that.
- **Fewer, stronger pages in thin areas** (the overlapping pairs; one-to-five-recipe collections), decided from Search Console data.
- **Real photographs for the 288 recipes with none.**

## For the owner (cannot be done from the repository)

1. **Hostinger, hPanel:** Websites, Dashboard, Performance, CDN, Manage, Security. Check the security level and "Under Attack" mode, bot protection and country or rate rules. A mode that challenges or rate-limits unknown clients will answer Googlebot with 429/403/5xx. Ask Hostinger support to trace the request IDs in [HOSTINGER-HANDOFF.md](../google-indexing-followup-2026-10-23/HOSTINGER-HANDOFF.md), to confirm verified Googlebot is not being limited, and to explain the self-redirecting 307s and intermittent 502s. Also check hPanel resource usage for limit hits. Turning the CDN off for a few days is a test you can choose to run; it can change what Google sees.
2. **Search Console** (after the TXT record is added at Hostinger DNS and verified): Manual actions; Security issues; Page indexing (which statuses, and for which URL groups); Settings, Crawl stats (response codes and average response time, and the host status); URL Inspection, Live test on a handful of recipe URLs; Sitemaps (12 child sitemaps, "Success"). Run the Rich Results Test on two or three recipe pages.
3. **Approve or decline** merging and deploying this branch. Once deployed, resubmit the sitemap index and request indexing for a few representative pages; do not expect an immediate effect.


## Second audit, 23 October (after the merge)

**What Google actually reported.** The Search Console export saved on 20 October (`docs/crawl-audit-2026-10-20/search-console/`) lists 1,000 URLs, every one "Discovered - currently not indexed" with "Last crawled 1970-01-01". Google found them (through the sitemaps) and never fetched them. Google's description of that status: it wanted to crawl the URL, but expected doing so to overload the site, so it rescheduled. Low crawl demand for a new, very large site also produces it. Neither is a page defect, and the audit below confirms there are none.

**Every built page, checked by script (5,878 pages, 5,871 in the sitemaps).**

| Check | Result |
| --- | --- |
| Titles and meta descriptions | All present; no two pages share either (the three ad frames aside, which are `noindex`) |
| Canonical | Exactly one per page, pointing at itself, `https://weeklydelight.com/…/` |
| Robots meta | `noindex` only on `404.html`, `favourites/`, the contact result templates and the ad frames; none of them is in a sitemap |
| `<head>` | No element that would make Google stop reading the head before the canonical |
| JSON-LD | Every block parses; Recipe step anchors and breadcrumb targets exist; no future dates; durations valid |
| Internal links | None broken, none to a redirecting URL, none to `www`, `http` or `index.html`; every recipe has 5 to 29 linking pages (median 15) |
| Sitemaps | Every indexable page exactly once; nothing non-canonical, `noindex` or missing; `lastmod` equals the page's `dateModified` |
| Thin pages | Recipes: 795 to 1,449 words. Five collection pages list one or two recipes (Bolivian, Uruguayan, Cypriot, Ecuadorian, Slovak); 90 collection pages are under 300 words |
| Repeated template text | A median 36% of a recipe page's words are sentences that appear on 20 or more pages (navigation, the notes and save panels, the nutrition note, the AI disclosure). Ordinary for a recipe site. |

**Live checks (about 08:30 to 09:00 UTC, gentle rates).** A missing page answers a real 404, not a soft 404. `http://`, `www.`, a missing trailing slash and `/index.html` each reach the canonical page in one 301. No `X-Robots-Tag` header. A Googlebot user agent gets 200. Fifteen pages and fifteen images at one request a second all answered 200 (origin time about 0.25 s); the 429s seen at 06:33 did not recur. `robots.txt` blocks only the filter parameters and lets every crawler fetch CSS, scripts and images. A recipe page rendered in Chromium as a phone, with no clicks or scrolling for 12 seconds, stayed on its URL, opened no window and had no element covering the content; the three ad frames loaded. The Search Console verification TXT record is now in the domain's DNS.

**Fixed: pages could not be cached by the CDN.** Every page and sitemap was sent with `Cache-Control: public, max-age=0, must-revalidate`, and Hostinger's CDN answered every one `x-hcdn-cache-status: DYNAMIC`, meaning it passed each request to the shared-hosting server ([How Hostinger CDN caching works](https://www.hostinger.com/support/?p=18721)). That server is where the 429s came from. `.htaccess` now sends `public, max-age=0, s-maxage=3600, must-revalidate` for `.html` and `.xml`: browsers still revalidate on every visit, and the CDN may serve a copy up to an hour old. The cost is that a deploy can take up to an hour to reach every CDN edge, unless the CDN cache is cleared in hPanel (Performance, CDN, Clear cache). Error pages are not affected (`Header set` applies to successful responses only). This lowers the load that makes Google hold back; it cannot make Google crawl faster than it chooses to.

**Not fixed: same dish under two names.** Thirty-six pairs share 80% or more of their ingredient words; read by eye, 32 are real variants (a different appliance, protein or form) and four are the same dish twice, none of them among the 15 already acknowledged: `vegemite-scrolls` and `australian-cheese-and-vegemite-scrolls`, `buttermilk-pancakes` and `fluffy-pancakes`, `sticky-date-pudding` and `sticky-date-cake`, `slow-cooker-pea-and-ham-soup` and `slow-cooker-split-pea-soup`. List: [duplicate-candidates.csv](duplicate-candidates.csv). **Removed on the owner's instruction (23 October):** in each pair the page published first stays and the other address answers a permanent redirect to it (table below).

**Not changed:** the five one-or-two-recipe collections, and `/search/` (a filter page whose HTML holds no results). Each is one URL among 5,871 and none of them explains thousands of pages never being fetched.


## Duplicates removed (23 October, owner's instruction)

| Removed address | Now redirects (301) to | Why that one stays |
| --- | --- | --- |
| `/recipes/australian-cheese-and-vegemite-scrolls/` | `/recipes/vegemite-scrolls/` | published first (8 Oct) |
| `/recipes/fluffy-pancakes/` | `/recipes/buttermilk-pancakes/` ("Fluffy Buttermilk Pancakes") | published first (5 Sep) |
| `/recipes/sticky-date-cake/` | `/recipes/sticky-date-pudding/` | the dish's usual name; same method and tin |
| `/recipes/slow-cooker-split-pea-soup/` | `/recipes/slow-cooker-pea-and-ham-soup/` | published first (8 Oct) |

- The register is `src/data/retired-recipes.json`, with the reason for each. The build refuses a retired slug that comes back into the catalogue, or a redirect to a page that does not exist.
- Redirects on all three host configurations: `.htaccess` (live; also catches the address without its trailing slash, with `index.html`, and from `www` or `http`, in one hop), `_redirects` (written by the build) and `vercel.json`. `tools/retired-recipes-check.js`, now part of `npm run check`, fails if any of them is missing, if an old page is still built, linked or in a sitemap, or if a target page is not built.
- Removed with each recipe: its catalogue row, its detail record, its `images.json` entry and its two photo files; `images-attribution.md` regenerated. Kept on purpose: its `published-dates.json` entry (a published date is never reused) and its photo-refusal history in `image-rejects.json`.
- Recipes: 5,515 → 5,511. 354 other pages changed (the recipes whose "You might also like" links, and the collections and hubs whose lists, included a removed page) and move their `lastmod`, which is the register working as intended.
- The 15 pairs acknowledged earlier (`tools/duplicates-audit.js`) were not touched. Their ingredient overlap runs from 0.45 to 0.81 and each was kept on purpose when it was published; some are one dish under two names (`moules-mariniere` and `moules-marinieres`, `lamb-rogan-josh` and `rogan-josh`), and merging them is still open.
