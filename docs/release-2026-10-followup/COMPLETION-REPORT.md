# Weekly Delight: follow-up release, completion report

Date: 18 October 2026. Branch: `claude/culinaryvault-followup-release`, from `main` at `91a2bf13` (the merge of PR #14, the first audit). 17 commits; every source commit is followed by a separate "Regenerate the site" commit with only the generated output. **Not merged and not deployed.** This round had no authorisation to merge or deploy, so the release is pushed and waiting for review. The live site is unchanged.

Five kinds of claim are kept apart throughout, because they are proved in different ways:

- **Code correctness:** proved here, by tests and audits.
- **Recipe accuracy:** needs cooking. Nothing here was cooked.
- **Email delivery:** needs the owner's mailbox and one real test message.
- **Google eligibility:** needs Google's own tools on the deployed pages.
- **Search performance:** needs Search Console data, which was not available.

---

## 1. Fixed and independently verified

Every item below passes `npm run build && npm run check`. That check now also runs the timing corpus, the image inventory and the illustration-metadata check. Other evidence: `npm run selftest` 64/64, `npm run contact-test` 48/48, `npm run contact-browser-test` 14/14, `node tools/site-browser-test.js` 24/24, and `node tools/package-public.js`, which reports nothing private.

### Contact form (code)
- **Files:** `src/server/contact-send.php` (rewritten), `src/templates/pages.js`, `src/assets/js/app.js`, `src/build.js`, `.htaccess`, `tools/contact-config.example.php`, `tools/contact-doctor.php`, `tools/contact-test.js`, `tools/contact-browser-test.js`.
- **Before:** the form posted to the endpoint, and any answer that looked like success was shown as "sent". Static `/contact/success/` and `/contact/not-sent/` pages existed, so visiting one directly claimed a message had been sent. The privacy page promised a one-hour limit that nothing enforced.
- **After:**
  - `?status=1` reports whether the form is switched on, and the contact page says so before anyone types.
  - A "sent" page is shown only at a signed address that expires after 15 minutes; a forged or old address returns to the form.
  - The success wording says the message was "handed to the mail server", not that it was read.
  - A failed send keeps the typed text, with JavaScript on and off.
  - Fixed public messages; details go to the server error log only.
  - Origin check, string-only fields, length limits, header-injection stripping, honeypot.
  - Rate limit per salted hash of the connection plus a daily cap. Its state file is mode 0600, uses file locking, expires old entries and is cleaned on use. If the state can't be used, the form refuses to send rather than running unlimited.
  - Optional authenticated SMTP with verified TLS.
  - The privacy page describes exactly what is stored.
- **Evidence:** 48 server checks, including 14 simultaneous posts against a limit of 5 (exactly 5 sent), a fake SMTP server (plain, implicit TLS, STARTTLS, untrusted certificate refused, wrong password, refused recipient), and a scan showing no secret or address ever leaks. 14 browser checks with JavaScript on and off.

### Nutrition provenance
- **Files:** `tools/nutrition-calc.js`, `tools/nutrition-foods.js`, `tools/nutrition-sources.json` (new), `tools/nutrition-sources/` (matching scripts and every decision made by hand), `tools/nutrition-audit.js`, `tools/keyword-audit.js`, `tools/health-audit.js`, `src/build.js`, `src/lib/diet-derived.js`, `src/lib/keywords.js`, `src/lib/seo.js`, `src/templates/recipe-page.js`, `src/templates/pages.js`, CLAUDE.md §3 and §9, README "Nutrition provenance".
- **The recheck of 2,970 / 2,545:** 2,970 recipes printed figures the old calculator reproduced. Of the other 2,545, 1,040 were readable but disagreed (median 15% on calories, calculator higher in 70%) and 1,505 had unreadable lines.
- **Sources:** each of the 714 foods now has a recorded status:
  - 483 use a named USDA FoodData Central SR Legacy entry (April 2018, public domain), by NDB number;
  - 6 use the nearest named entry ("proxy", for example dry breadcrumbs for panko);
  - 4 are zero (water and the like);
  - 8 are generic stand-ins;
  - 213 keep the old figure and count as unsourced.
  - `tools/nutrition-sources/` rebuilds the file byte-for-byte from the SR CSV release, and that was verified.
- **Calculator:**
  - Alcohol energy is counted (7 kcal/g).
  - Tins with a stated size are read, as is citrus juice using SR yields (lemon 48 g, lime 44 g, orange 86 g).
  - Egg yolks are read as yolks (17 g, not 50 g), and bread flour as flour rather than a loaf. That bug affected 138 recipes.
  - Whole spices and non-food lines are left out.
  - Per-item weights count as sourced only when an SR portion agrees with them: 60 foods do. Weights for handfuls and bunches no longer take a whole-head weight; one recipe had 1.25 kg of salad leaves.
  - Recorded flags: marinade counted in full, bone-in weight, drained tin at full weight, salt in cooking water, salt to taste, unquantified line, alternative of different energy, optional, alcohol in a cooked dish, deep-frying.
- **Tiers:**
  - 3,224 calculated: printed, in the schema, allowed to drive tags.
  - 1,239 approximate: printed, with the assumptions named on the page.
  - 1,052 with no figures: no table and no schema nutrition, with the reason given.
- **Before / after, focaccia:** before, "an estimate made when the recipe was written", 312 kcal. After, "calculated from the ingredient list with USDA FoodData Central figures (SR Legacy)", 310 kcal / 8 g protein / 47 g carbohydrate.
- **Before / after, chicken Caesar lettuce cups:** before, a hand estimate of 486 kcal with "52 g protein, 7 g carbohydrate" in the description. After, 845 kcal / 60 g / 23 g, because the recipe's 82 g of olive oil for two servings is now counted, and the description quotes the calculated numbers.
- **Claims:**
  - The "good to about ten per cent" claim is gone from the About page, the code comments, README and CLAUDE.md.
  - High-Protein, Low-Carb and Keto are derived only from tier-1 figures, and tags typed by hand are ignored. Before → after: High-Protein 1,485 → 671, Low-Carb 1,783 → 1,011, Keto 1,142 → 625.
  - "No Added Sugar" now also refuses compound sugared ingredients such as ketchup, biscuits and mirin: 3,235 → 2,912.
  - Search phrases may state numbers only for tier-1 recipes. Regulated wording ("low fat", "light", "no added salt", "no added sugar", "high fibre", "low sodium") is refused outright; 234 + 5 recipes' phrase lists were corrected.
  - Prose that quoted nutrition numbers was corrected to the calculated values on tier-1 recipes, or the numbers were removed: 26 recipes, now checked by `npm run nutrition`.

### Conditional diet labels
- **Files:** `src/lib/diet-conditions.js`, `src/build.js`, `src/assets/js/directory.js`, `src/templates/pages.js`, `src/lib/keywords.js`, 102 method steps in `src/data/details*/`.
- All 115 method steps that named only the ingredient the label depends on now name the recipe's own alternative. Examples: "Heat the ghee (or neutral oil)", "with bread (optional) for scooping", "add the katsuobushi (if using)". No new substitute was introduced. `diet-audit --conditional` now reports 0.
- The cheese condition now says what it means: "a hard cheese made without animal rennet in place of the parmigiano-reggiano".
- **Filters:**
  - The search index separates diets that hold as written (`f`) from those that need a swap (`h`).
  - Directory counts are as written (for example Vegan 722).
  - A checkbox adds the swap-dependent ones: Vegan +46, Vegetarian +119, Gluten-Free +78, Dairy-Free +47.
  - The filter panel says the check matches ingredient names and certifies nothing about allergens, and the About page says the same.
- Swap-dependent diets are excluded from the generated search phrases. They were already excluded from the schema.
- The labels are 290 on 246 recipes, unchanged in number. They hold only with the swap each page names.

### Images
- **Files:** `src/lib/image-inventory.js`, `tools/image-inventory.js` (`npm run images`), `src/data/stats.js`, `src/templates/pages.js`, `tools/mark-illustrations.js`, `src/data/images.json`, `src/data/image-rejects.json`, `src/build.js`.
- **Recipes:** 3,999 photograph + 101 AI illustration only + 1,415 no picture = 5,515.
- **Files:** 4,482 photographs (3,999 main, 483 in-progress), 101 illustrations. None unused, shared or broken.
- **Checked for every file:** the .jpg and .webp both exist, the JPEG's real size equals the recorded size, and every photograph has a licence, a source page and, for CC BY, an author.
- The About page reads these figures from the same inventory. It now says "recipes" and "files" separately: the old "4,482 photographs" counted files. It describes the NonCommercial, NoDerivatives and ShareAlike handling as site policy, not as what every licence forbids.
- **AI illustrations:**
  - Google's Recipe documentation (updated 2026-09-08) requires images that "represent the marked up content". Its image-metadata page (updated 2025-12-10) reads IPTC Digital Source Type, with `trainedAlgorithmicMedia` for model-generated images.
  - All 202 illustration files now carry that value as XMP, written without re-encoding and checked by `check`.
  - The alt text says "AI-generated illustration of …", alongside the visible "generated by AI · not a photograph of this dish" credit that was already there.
  - All 111 were viewed. Ten did not show the dish and were withdrawn through `review_images.py`, then recorded so they won't be redrawn: Cumberland Sauce, Kousa bil Laban, Paletas, Vinegar Cabbage, Pickled Eggs, Garlic Butter Crayfish, Martini, Maple Glazed Salmon, Honey Garlic Glazed Salmon and Gooseberry Fool.
  - The Recipe markup on the rest was kept.

### Substitutions
- **File:** `src/lib/substitutions.js`.
- A note that says a swap makes the dish suit a diet now fires only when the swapped line is the only thing in the list that diet forbids. Before, "vegetable stock makes this meat-free" appeared on dishes containing chicken, and "tamari … gluten-free" on dishes with pasta.
- Tamari and Worcestershire tips ask for a bottle labelled gluten-free or vegetarian, because not every tamari is wheat-free.
- Cream and coconut swaps are no longer offered for bakes and desserts.
- The fresh-to-dried chilli ratio, which had no basis, is gone. The buttermilk, self-raising flour, ginger and garlic stand-ins say they are the usual ones and say what changes.

### Timing
- **Files:** `src/lib/timing.js`, `src/data/timing-overrides.json`, `tools/timing-corpus.js`, `src/templates/recipe-page.js`.
- "Every 30 minutes for 2 hours, stretch and fold" now counts two hours unattended; before, it counted none.
- The one exception that was hard-coded (brisket) is now a reviewed override with its reason.
- 15 corpus cases pass, covering several waits, parallel prep, folds as a count or a span, overnight, ranges, cooling before assembly, optional make-ahead, time already spent, and ingredient soaks.
- Pages with waiting show hands-on time, the waiting and start to finish. Cards, filters and `totalTime` already used elapsed time.

### Directory, performance, usability
- **Files:** `src/assets/js/directory.js`, `src/assets/css/main.css`, `tools/site-browser-test.js`, `tools/lab-measure.js`.
- **Bug fixed:** a shared link with a time filter (`/recipes/?time=30`) threw an error and left the directory blank.
- **Verified over the whole collection** in a phone-sized browser:
  - the count of 5,515;
  - every diet filter, as written and with swaps, against `search-index.json`;
  - the time filter (1,679 under 30 minutes);
  - "show more" through all 5,515, in 91 presses;
  - sorting and search;
  - mobile menu (opens, says so, closes with Escape);
  - servings scaling, the unit switch, print hiding the chrome, saving a favourite, a private note kept only in the browser, and the skip link on the first Tab.
- **Lab measurements:** phone viewport, 4× CPU, about 1.6 Mbps / 150 ms, third-party requests blocked, median of 3. Before = `main`, after = this branch, both served locally.

  | Page | LCP before → after (ms) | Blocking before → after (ms) | CLS | DOM nodes |
  | --- | --- | --- | --- | --- |
  | Home | 1516 → 1560 | 432 → 434 | 0 | 1,210 |
  | /recipes/ | 924 → 960 | 238 → 257 | 0 | 12,651 |
  | /categories/dinner/ | 1364 → 920 | 1251 → 164 | 0 | 6,331 |
  | /ingredients/tomatoes/ | 1096 → 964 | 631 → 190 | 0 | 3,702 |
  | Focaccia (photo) | 1140 → 1136 | 464 → 441 | 0 | 735 |
  | Creamy Tuscan salmon (no image) | 1100 → 1088 | 505 → 472 | 0 | 734 |

  The change that matters is the A–Z lists: they now render when scrolled near. The other differences are run-to-run noise. These are lab numbers on this machine. Field data (Chrome UX Report, Search Console Core Web Vitals) was not available.

### Dates
- **Files:** `src/templates/recipe-page.js`.
- `datePublished` comes from the git first-seen register, and `dateModified` from the content-date register.
  - Across all 5,871 pages, none has a published date after its modified date, and none lacks one.
  - Recipe pages now show both dates in `<time>` elements matching the structured data. Before, they appeared only in the markup.
- **Proxies, not independently verified:**
  - "First seen in this repository" is a reasonable proxy for publication, not an independently verified one.
  - For volumes 58 to 62 it is the commit date (2026-10-16). Those recipes went live with the PR #14 merge.
- This release moves `dateModified` for 5,175 of 5,871 pages, all to 2026-10-18. Their nutrition section, figures or schema genuinely changed, which is what the register exists to record.

### Release accounting
- **The 500 EU recipes** (volumes 58 to 62: France, Italy, Germany, Benelux, Iberia, Greece, central and eastern Europe, the Nordics and Ireland) were added on 2026-10-16 and merged in PR #14 together with the first audit. They are a content addition, not part of either audit.
- **This release adds no recipes.** No catalogue row changed. The recipe-data edits are only:
  - 102 method steps naming a swap;
  - 235 search-phrase lines;
  - 20 descriptions, 19 snippets and 7 explanation passages that quoted unsupported nutrition numbers.

### Deployment package
- **Files:** `tools/package-public.js` (`npm run package`), `docs/release-2026-10-followup/DEPLOYING.md`, `docs/release-2026-10-followup/deploy-public-site.example.yml` (inactive).
- **Result:** 15,084 files, about 828 MB, all 5,871 sitemap URLs present, nothing private. A planted README was caught. The packaged contact endpoint answers its status check under PHP.

---

## 2. Implemented, awaiting external verification

- **Deployment:** nothing is merged or deployed.
  - After merging, Hostinger will deploy `main` as it does today.
  - Then run `node tools/private-paths-check.js --url https://weeklydelight.com` and `curl https://weeklydelight.com/contact/send.php?status=1`, and clear the CDN cache.
  - Today, live: private paths refused (22 refused, 18 public served), and the old contact endpoint still answers "This address only accepts the contact form."
- **Rich Results Test:** the public tool could not be run from this environment. The bundled Chromium does not trust the sandbox's TLS-inspecting proxy certificate (`net::ERR_CERT_AUTHORITY_INVALID` on `search.google.com`), and the only workaround is turning certificate checks off, which was not done.
  - **URLs to test after deployment:** `https://weeklydelight.com/`, `https://weeklydelight.com/recipes/`, `https://weeklydelight.com/recipes/focaccia/` (conditional Vegan), `https://weeklydelight.com/recipes/spaghetti-carbonara/` (approximate nutrition, so no nutrition in the markup), `https://weeklydelight.com/recipes/golonka/` (volume 62, no image), `https://weeklydelight.com/recipes/creamy-tuscan-salmon/` (no image) and `https://weeklydelight.com/recipes/balila/` (AI illustration).
  - **Local check of the same pages:**
    - Recipe, BreadcrumbList and FAQPage appear where expected, with no required field missing where there is a picture.
    - Diet labels appear only where they hold as written.
    - Nutrition appears only for tier 1.
  - **Expected Google result:** the 1,415 recipes with no picture will show "Missing field 'image'". The only real fix is a real photograph; a placeholder, logo or gradient would break Google's image guidelines.
- **Illustration metadata:** whether Google surfaces the IPTC Digital Source Type for these images can only be seen in Google's own surfaces after crawling.

## 3. Needs owner information or access

1. **Contact form:**
   - Create a mailbox on the domain. DNS showed no MX, SPF, DKIM or DMARC records when checked, so mail on the domain needs setting up first.
   - Put the settings file outside `public_html`, following `tools/contact-config.example.php`.
   - Run `php tools/contact-doctor.php --config <file> --probe --dns`, then `--send-test`. Add `--yes` to send the single test message and confirm it reached the inbox. Until then, delivery is not verified.
   - Confirm which header Hostinger's CDN uses for the visitor's address. If it is not `REMOTE_ADDR`, set `client_ip_header`; otherwise the rate limit applies to the proxy.
2. **Deploy-only-public:** decide whether to switch hPanel's Git deployment to a package branch (`DEPLOYING.md`). It needs a backup first, and the example workflow copied into `.github/workflows/`.
3. **Merge and deploy authorisation** for this branch.
4. **Traffic and search data**, as exports or screenshots:
   - Search Console Performance (pages and queries, last 3 months);
   - Pages indexing report;
   - Core Web Vitals report;
   - Crawl stats;
   - Google Analytics pages report for the same period.
5. **"3,000 views":** was that page views, users or sessions? Over what period? From which tool (GA4, Search Console impressions, or Hostinger's own statistics)? And for the whole site or certain pages? No cause can be attributed to any change until that is known.
6. **"No Added Sugar":** the derived tag and filter keep this name, which resembles a regulated labelling claim in the UK, EU and Australia. Rename, keep or drop it.
7. **Byline and About wording,** and any health labels: both still the owner's decision (CLAUDE.md §8).

## 4. Needs cooking, photography or specialist review

- **Cooking:** nothing has been cooked. Times, yields, doneness cues and the diet swaps each page names (for example "neutral oil instead of ghee") are unverified in a kitchen. `photo-priorities.md` lists, for 16 recipes, the observations a test cook should record.
- **Photography:**
  - 1,415 recipes have no picture, and 101 have only an AI illustration.
  - `docs/release-2026-10-followup/photo-priorities.md` is a provisional list of 16, not ranked by traffic.
  - Eight more illustrations are doubtful and should be looked at by a person: Grilled Moreton Bay Bugs, Hot Buttered Rum, Bullet Soup, Cream Buns, Renga, Potted Cheese, Cheese Rakakat (`rakakat-jibneh`) and Lotte à l'Armoricaine.
  - Illustrations were generated with prompts asking for a photographic style. They are labelled, but they look like photographs at a glance.
- **Nutrition:**
  - 213 foods have no recorded source.
  - Some USDA (American) products differ from UK and Australian ones: puff pastry, back bacon, digestives, golden syrup and stock cubes.
  - With USDA figures, three protein-volume recipes fall under that volume's brief: flatfish is 12.4 g protein per 100 g in SR Legacy.
  - A dietitian or nutritionist should review the method before any figure is used for a medical purpose.
- **Allergens:** diet labels match ingredient names. They certify nothing about allergens or cross-contamination.

## 5. Remaining known limitations

- **Food-matching accuracy:** a calculated figure depends on how well each ingredient line is matched. A mismatch scan found and fixed "bread flour" read as bread, and salad leaves read as whole lettuces. Rarer mismatches remain possible.
- **Unreadable recipes:** 1,052 recipes print no nutrition, mostly deep-fried dishes, lines without weights, and foods the table lacks.
- **Volume conversions:** tablespoon and cup weights for most foods are the site's own, not checked against SR. Per-item weights are checked against SR where they exist.
- **Date proxies:**
  - `datePublished` is the repository's first-seen date, not a verified first-live date.
  - `dateModified` for this release is 2026-10-18 (the build date). If the deploy happens days later, the date will predate the change going live.
- **Lab numbers:** measured locally with third-party scripts blocked. Ads add weight and work on the live site that these numbers don't include.
- **Public-only deploy:** prepared but not enacted, so the live site still relies on `.htaccess` to hide the private paths.
- **Contradiction checks:** the cross-section check compares times, diets, keywords, nutrition numbers in prose, storage and freezing claims, and substitutions. It does not judge whether a method step works.

## Rollback

- **Before merging:** nothing to roll back. `main` is untouched.
- **After merging:** run `git revert -m 1 <merge commit>` on `main`, and Hostinger redeploys the previous build. The local tag `checkpoint/pre-followup-2026-10-17` marks the starting point.
- **If the deployment arrangement was switched:** point hPanel's Git deployment back to `main` (`DEPLOYING.md`), and restore the pre-switch file backup if anything was removed by hand.
