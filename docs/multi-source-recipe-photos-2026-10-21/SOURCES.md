# Source coverage and limits

Checked on 21 October 2026. Accessibility is from this environment, not a judgement that a provider is unavailable to everyone. An HTTP block is not a finding that no photo exists. No access controls were bypassed.

| Source | Result |
|---|---|
| Unsplash | Public search and tested photo returned HTTP 401; no API key. No photos used. |
| Pexels | 1,173 recipe-title searches attempted; 26 photos selected. Individual records, licence links and camera/publication evidence checked. |
| Pixabay | 1,173 searches attempted; 6 photos selected. Nineteen ambiguous empty public models retained as unverified. Mixed AI library: no recent unproven AI-looking photo selected. |
| StockSnap | 459 recipe-title searches attempted, then HTTP 403 stopped this pass; 714 not attempted. CC0 also covers renders; rejected the 3D-render positive-control image. No photos used. |
| PxHere | 1,173 recipe-title searches attempted; 46 unverified results. CC0 needs per-photo checks; no suitable final photo selected. |
| Kaboompics | 136 food-family queries plus food gallery; 1 photo selected. Individual commercial permission and Standard License verified; editorial-only excluded. |
| Stockvault | 136 CC0-filtered food-family queries; 1 photo selected. Individual licence row is authoritative: the pancakes control was NonCommercial and excluded despite a CC0 search filter. A later recheck of a different cookie page returned 403. |
| Rawpixel | 136 food-family queries. Mixed premium/AI/public-domain library. Original-source/provenance questions and dish mismatches left all candidates unapproved. |
| Pikwizard | 136 food-family queries; mixed real and AI results. No images adopted; primary provenance and restrictive licence terms require further review. |
| Foodiesfeed | 136 food-family queries; mixed AI/photographic catalogue. Tested legacy image had no EXIF, so no real-photography provenance was established for selection. |
| Burst / Shopify | Correct public search endpoint and a CC0 photo licence verified; 2 food-family queries attempted before 403 stopped the pass. No photos used. |
| Picjumbo | A tested pancakes photo was explicitly tagged picjumbo AI and excluded. First food-family query returned 403; no photos used. |
| Openverse | API returned HTTP 403/challenge in the availability probe; no bypass. Earlier archive work is in the parent report. |
| FreeImages | Public fetch was blocked by a proxy tunnel 403; no photos used. |
| Library of Congress | Public query returned 403; no photos used. |
| Gratisography | Public food search accessible with a small collection; no suitable selection. |
| Wikimedia Commons / Flickr | Existing searches and 64 newly reviewed photos are in parent PR #22. This batch expands beyond those archives; it does not repeat or replace that report. |
| Paid stock and other recipe publishers | Public search may reveal relevant images, but no paid licence or publisher permission was supplied. No purchases, watermarked images or unlicensed recipe-blog photos were adopted. |

Primary and supplemental scopes differ: see [search summary](search-summary.json), [primary requests](primary-searches.csv), and [family requests](supplemental-searches.csv). The 667 staged candidates are leads, not 667 correct recipe photos. All 667 thumbnails were screened, 90 candidates received a full-size crop review, and 34 were selected. This is a bounded review, not proof that the other recipes have no image anywhere online.

Licences read: [Pexels](https://www.pexels.com/license/), [Pixabay](https://pixabay.com/service/license-summary/), [StockSnap](https://stocksnap.io/license/), [CC0](https://creativecommons.org/publicdomain/zero/1.0/), [Kaboompics](https://kaboompics.com/page/license-and-faq), [Burst CC0](https://www.shopify.com/stock-photos/licenses/creative-commons), and Pikwizard free/standard terms (no adoption). Kaboompics permits commercial website use/cropping but forbids standalone stock redistribution and AI training. Therefore this report links to website assets and does not create a downloadable stock-photo collection.
