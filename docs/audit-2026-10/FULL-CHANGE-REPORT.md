# Weekly Delight: full report of the changes made

**Covers:** from the rollback checkpoint taken at the start of the search and content-quality audit (commit `d39eb86b`) to the live deployment on Hostinger, 17 October 2026.
**Repository:** `jamesdillon9051-sketch/Culinaryrecipie`  **Site:** https://weeklydelight.com

---

## 1. What happened, in order

| # | What | Reference |
| --- | --- | --- |
| 1 | Rollback checkpoint recorded before any change | commit `d39eb86b`, local tag `checkpoint/pre-seo-audit-2026-10-17` |
| 2 | Baseline measured: live-site probes, sample pages, build and check logs | working notes; sample pages are compared before and after in section 3 |
| 3 | Fixes made in the shared code, templates and data (not in generated HTML) | commit `e19eef90`: 104 files, +13,267 / −4,321 lines |
| 4 | Whole site rebuilt from those changes | commit `bfd849a1`: 5,899 generated files |
| 5 | Branch pushed | `claude/culinaryvault-recipe-site-mk9w9b` |
| 6 | Pull request opened and merged into `main` | PR #14, merged 17:53 UTC, merge commit `91a2bf1336b1002881d76540bf723a30d9226020` |
| 7 | Hostinger deployed `main` automatically; CDN cache cleared; live site verified | section 5 |

PR #14 carried 35 commits. Two of them are the audit. The other 33 were earlier work on the same branch and went live with it: volumes 58 to 62 (500 recipes of the European Union) with archive photographs for 234 of them, a further photograph round for 228 recipes (three batches), the Pixabay photograph source and four Pixabay batches (214 recipes), and the keyword planning list. They are not described further here.

Every command listed below passed before the push: `npm run build`, `npm run check` (5,875 pages, 5,871 sitemap URLs) and `npm run selftest` (64 passed, 0 failed).

---

## 2. The result in numbers

| Measure | Before (`d39eb86b`) | After |
| --- | --- | --- |
| Onions list page, HTML | 4,384,865 bytes (352,693 gzipped) | 270,482 (47,582) |
| Dinner list page | 4,019,184 (314,895) | 267,527 (46,522) |
| American cuisine page | 3,139,575 (242,126) | 235,984 (37,968) |
| All-recipes page | 727,123 (89,073) | 460,202 (85,832) |
| Italian dinner page | 514,521 (45,322) | 135,211 (19,987) |
| Built output on disk | 889.1 MB | 825.5 MB |
| Focaccia as shown to readers and Google | "Ready in 50 minutes", total time 13 h 20 min | no time claim in the snippet; total time 16 h 50 min; page shows 16 h 50 min to 1 day 6 h |
| Focaccia diets in Google's data | Vegan, LowLactose, Vegetarian, LowCalorie | LowLactose, Vegetarian (page says: "Vegan option: Vegan when made with sugar rather than honey.") |
| Keywords sent to Google per recipe | 20 generated phrases | 3 to 5 hand-picked phrases |
| FAQ questions on recipe pages | 32,005 | 1,056 |
| Diet labels with no way out | 36 published | 0, and the check fails if one appears |
| Disease or outcome health labels | 300 recipes | 0 |
| Earliest `datePublished` | as early as 2008 (made up; herb focaccia said 2008-09-13) | 2026-09-05 (from git history) |
| Googlebot on `/recipes/?tag=Vegan` | allowed | blocked |
| Contact form on a host with no endpoint | "Thank you, your message has been sent" | "Your message was not sent … what you wrote is still in the form" |
| `/src/build.js`, `/CLAUDE.md`, `/package.json` | downloadable (200) | refused (404) |

---

## 3. The changes, area by area

Each entry gives the problem, what was changed, and where. The fixes are in shared code, so every future build keeps them.

### 3.1 Recipe times now include waiting

**Problem.** The focaccia rises and chills for 16 hours or more, but its title, snippet and keywords said "50 minutes". Cards, filters, titles, keywords and Google's `totalTime` used preparation plus cooking only.
**Change.**
- New module `src/lib/timing.js` reads the waiting from the method itself, as a floor and a ceiling ("12 to 24 hours", "overnight", "at least 4 hours").
- Everything a reader or crawler sees now uses elapsed time (preparation + cooking + waiting): recipe cards, the time filters, search results, title hooks, search snippets, keyword phrases, the FAQ answer, and the Recipe `totalTime`. Where the method gives a range the page shows a range.
- 1,047 recipes have waiting.
- The timing, keyword and SEO audits were changed to hold that: a description, keyword or title that promises a time must hold with the waiting included.
- Nine recipes had their waiting time corrected in the data: focaccia (750 to 960 min), garlic focaccia (870 to 960), croissants (645 to 690), cinnamon rolls (540 to 600), galbi (390 to 430), Danish pastry (165 to 210), pain au chocolat (210 to 240), mutton biryani (label corrected to 60 min marinating), shoyu ramen (a mis-read broth simmer removed).
- Two recipes that take hours were moved out of "Quick Meals", which must take 30 minutes or less: bifana to Lunch, Swedish crayfish boil to Dinner. The build now stops if a Quick Meal's waiting pushes it over 30.

### 3.2 Fourteen search descriptions that promised an impossible time

Brownies advertised "ready in 40 minutes" and cool for 3 hours; a panna cotta advertised "20 minutes" and sets for 4. Fourteen descriptions were rewritten to say what is true (appendix B). Examples of wording now used: "20 minutes of work and at least 4 hours in the fridge". The SEO audit now recognises "plus rising" style qualifiers and fails on any description that promises less than the recipe needs.

### 3.3 Diet labels

**Problem.** A line that offered a way out ("honey or sugar", "parmesan, to serve") made a label pass outright. The focaccia, brushed with honey, was published as Vegan in the page and in the data. The old check also missed whole classes of ingredient: rabbit, sea bream, mullet roe, Worcestershire sauce, dashi, brioche, sponge fingers.
**Change.**
- New shared judge `src/lib/diet-conditions.js`, used by the build, the recipe page and `npm run diet`. Each tag is **clean**, **conditional** or **contradicted**.
- **Contradicted** (a line with no way out, or every alternative breaks the tag, such as "smoked salmon or gravlax" on a vegetarian page): the label was removed and the build fails if it returns. 36 labels on 29 recipes (appendix A). Among them: three rabbit stews and three sea-bream dishes tagged Vegetarian (four of them Vegan too), spaghetti alla bottarga (mullet roe) tagged Vegetarian and Vegan, Welsh rarebit tagged Vegetarian with Worcestershire sauce, brioche French toast and sponge-finger trifles tagged Gluten-Free.
- **Conditional** (the recipe offers a swap): 290 labels on 246 recipes. The page shows the chip as "Vegan option" and prints the condition in plain words ("Vegan when made with sugar rather than honey."). Google's data leaves the diet out, because it cannot state a condition. Snippets and the keyword list no longer claim the diet either.
- Conditions also cover what an ingredient name hides: parmesan, pecorino, grana padano, gruyère and comté are made with animal rennet; ordinary oats are not gluten-free; a stock cube says nothing about its source; hoisin, gochujang, miso and oyster sauce are usually brewed with wheat. A swap only counts when one side of it is allowed.
- Wording fixes made in the data: the focaccia method now says "Stir the honey or sugar into the water". Moules marinière and perfect scrambled eggs now list the bread and toast "to serve", so they are Gluten-free when served without it. Lentil soup lost Vegan and Dairy-Free (butter or ghee) and keeps Vegetarian.
- 115 method steps name only the non-compliant ingredient; they were listed for a person to reword, not changed automatically (`node tools/diet-audit.js --conditional`).

### 3.4 Disease and outcome labels withdrawn

**Problem.** 300 recipes (volumes 32 to 34) carried Diabetes-Friendly, Weight-Loss Friendly or Kidney-Friendly in the filters, in on-page panels, in keywords and, for diabetes, as `DiabeticDiet` in Google's data. No dietitian has reviewed any of it, and the kidney label rested on potassium and phosphorus estimates from a food table written for this site. A disclaimer was not accepted as a substitute for that review.
**Change.**
- The three tags were removed from all 300 catalogue rows, from the filters (`DIET_TAGS`), from the recipe-page panels and from the structured data. The URLs are unchanged.
- Their search phrases now state numbers the pages print: "no added sugar …" (volume 32), "… under 400 calories" (volume 33), "no added salt …" or "high protein …" (volume 34). The keyword audit checks each against the recipe.
- `npm run health` now fails if a withdrawn label returns or if any recipe promises an outcome ("lowers blood sugar", "burns fat", "detox", and similar). The limits are kept in `src/lib/health.js`, unused, so a reviewer can see what the labels stood for.
- The nutrition for these 300 recipes is still computed from the ingredient list and still checked. Potassium and phosphorus are shown as "(est.)".

### 3.5 Structured data and image text

- `suitableForDiet` now carries only Vegetarian, Vegan, GlutenFree and LowLactose, and only where the label holds without a swap. `LowCalorieDiet` (2,982 recipes), `LowFatDiet` (1,472) and `LowSaltDiet` (2,118) were removed: they were thresholds the site chose (under 400 kcal, 10 g fat, 400 mg sodium), not the regulated meanings of "low".
- Recipe `keywords` are the recipe's own curated phrases only, with the cuisine and category names left out, as Google's guidance asks. The keywords meta tag carries at most eight. The generated long tail ("is fried polenta no added sugar", "fried polenta with litre water") still feeds the site's own search box.
- Alt text names the dish ("Spaghetti Carbonara") or says "Illustration of …" for a labelled drawing. It no longer appends a search phrase ("…, an Italian dinner recipe — carbonara without cream"). Google's image guidance says to avoid filling alt text with keywords.
- `image` is required for recipe rich results. 1,405 recipes still have no picture; nothing was faked. `photo-priorities.csv` lists them, oldest volume first. 111 recipes use labelled AI illustrations in their Recipe data; that is an owner setting (`inRecipeSchema` in `src/data/illustrations.js`) left unchanged and flagged for review.

### 3.6 FAQ filler removed

Every recipe carried five or six generated questions, each answered by repeating a section of the same page (32,005 questions). Google's documentation now says FAQ results stopped appearing in Search in May 2026. Questions are kept only where they add something: the time question on recipes with waiting, and the sauce questions on carbonara, alfredo and cacio e pepe. 1,056 questions remain, and a recipe with nothing to ask has no FAQ section. The carbonara tip used to say a scrambled sauce could be blitzed in a blender with pasta water and that this "rescues about eight times out of ten": an unsupported figure, and the opposite of the page's own FAQ answer. The tip and the lede now agree with the method and the FAQ: take the pan off the heat before the eggs go in, and if they start to scramble, add reserved pasta water off the heat, which limits the damage but will not fully smooth the sauce.

### 3.7 Nutrition: calculated or estimated, said honestly

Every page said the nutrition was "calculated from the ingredient list". Only 2,970 of the 5,515 recipes reproduce from their ingredients within the calculator's tolerances. Each page now says which: "worked out from the ingredient list with standard food-composition figures" or "an estimate made when the recipe was written". The About page states both counts (2,970 and 2,545).

### 3.8 Publication dates

**Problem.** `datePublished` was invented: counted back from 2026-07-01 across 2008 to 2026 (the herb focaccia claimed 2008). The repository's history starts in September 2026.
**Change.** `datePublished` now comes from `src/data/published-dates.json`, the day each page first appeared in git history (2026-09-05 to 2026-10-16), derived by the new `tools/published-dates.js`. A new recipe gets the date of the build that first publishes it, and the date never moves. `dateModified` is unchanged in method: it moves only when a recipe's content changes. The 586 pages whose content fingerprint changed in this work (579 recipes, 4 category pages, 3 ingredient pages) were each traced to a real content change. No date was set to today.

### 3.9 Identity, testing claims and reviews

- The About page was rewritten. It no longer says the author is a 21-year-old aviation student in Kazakhstan who cooks every recipe; it says how the recipes are made (written with AI assistance from well-established methods, then checked by script for timings, diet labels and nutrition arithmetic), what the checks are, and what they cannot prove.
- The recipe byline now reads "Compiled by …" and says the recipes are not individually kitchen-tested. "Tested" was removed from titles, descriptions, category intros and keywords.
- Organization `foundingDate` (2019) and the Twitter link were removed because nothing records them. They are left as `null` in `src/templates/layout.js` until the owner supplies real values.
- Reader reviews are shown as private notes ("saved in this browser only … other readers cannot see them"). No `aggregateRating` is published anywhere, and `src/data/reviews.json` stays empty.

### 3.10 Contact form

**Problem.** The form posted to `/contact/success/`, a static page that answers 200 to any request, and the script then said "Thank you, your message has been sent." Every message was lost. The privacy page also named Netlify, which does not host the site.
**Change.**
- New endpoint `contact/send.php` (source: `src/server/contact-send.php`, copied by the build). It validates every field, drops anything that fills a hidden honeypot field without sending, strips line breaks from header fields (header-injection safe), allows 5 messages an hour per connection (stored as a one-way hash for one hour), and sends with PHP's `mail()`.
- The page says "sent" only when the endpoint answers `{"ok": true}`. Any other answer, or a failed connection, shows a red "not sent" message and keeps what the reader typed. Without JavaScript, the form redirects to `/contact/success/` or the new `/contact/not-sent/`.
- The recipient and sender addresses live in a settings file outside the public web folder (`tools/contact-config.example.php` is the template). No address is in the repository, and none was invented.
- The privacy and contact pages now name Hostinger as the host and describe the hash kept for one hour.
- Tested locally with PHP 8.4 and a log-only transport (nothing was emailed): GET 405; invalid fields 422; valid post accepted and logged; honeypot accepted silently and nothing sent; CR/LF in name and subject neutralised; sixth message in an hour 429. In Chromium the page showed the right message on three servers: PHP with settings, PHP without settings, and a static host that answers 200 to everything.

### 3.11 Crawl rules and private files

- **`robots.txt`.** A separate `Googlebot` section with `Allow: /` meant Google ignored every rule written for other crawlers (Google obeys only the most specific matching group), so the filtered recipe views were open to Google and closed to everyone else. It is now one rule set for all crawlers, blocking the filter parameters in either position (`?tag=` and `&tag=`) and the contact endpoint. The old file allowed Googlebot and AhrefsBot into those views; the new one blocks them.
- **No more listing private folders.** `/src/` and `/tools/` were named in `robots.txt`, which protects nothing and tells everyone where to look.
- **`.htaccess`.** The server now answers 404 for `src/`, `tools/`, `docs/`, `backups/`, `.git/` and friends, the project notes (`CLAUDE.md`, `README.md`), `package.json`, the Netlify and Vercel configs, `_redirects`, and the CSV, JSON, Python and log working files. `images-attribution.md` stays public (it is the photo credits). The existing redirects (www to apex, http to https, `index.html` to `/`) are unchanged.
- **Regression checks added to `npm run check`.** `tools/robots-check.js` reads `robots.txt` the way Google documents it and holds 28 URLs to their intended outcome for six crawlers. `tools/private-paths-check.js` tests the `.htaccess` rules, and with `--url` tests a live host.

### 3.12 Page weight

The list pages built a full picture card for every recipe: the onions page held 2,316 cards and weighed 4.4 MB of HTML before any image loaded. Each list page now shows 48 picture cards, then every remaining recipe as a plain A–Z link, so no internal link was lost. The A–Z list on the recipes page repeated a 46-byte inline style 5,515 times; it is now one CSS class. See section 2 for the sizes.

### 3.13 Documentation, audits and tooling

- **`CLAUDE.md`** updated: new commands (section 2), diet conditions and timing rules (section 3), the FAQ rule (4.2), new honesty rules for health labels, conditional diets and time claims (4.3), the real source of `datePublished` (7), the open decisions for the owner (8), and the withdrawal of the health labels (9). The generated rule lists were re-synced.
- **`README.md`** updated: deployment (what should be public, the contact form, the private-path rules), crawl rules, structured data, security, the launch checklist, the health-label withdrawal, and the diet-tag section. The counts were re-derived (`tools/sync-readme.js`, which now counts FAQ pages correctly).
- **Audits changed or added:** timing (rewritten around the shared module), diet (rewritten), health (now a withdrawal guard), keyword (elapsed-time claims, numeric claims such as "under 400 calories" and "no added salt", curated-only schema keywords), SEO (time promises), plus the two new regression checks above. `tools/humanize-selftest.js` was adjusted for pages that now may have no FAQ.
- **Planning files regenerated:** `tools/keywords/KEYWORDS.csv` and `.md` (honest total minutes, conditional labels marked, no withdrawn labels), and `docs/audit-2026-10/photo-priorities.csv` (the 1,405 recipes with no picture).

---

## 4. Git and release record

| Item | Value |
| --- | --- |
| Base before the audit | `d39eb86b` ("Pixabay photographs, batch 4: 52 recipes …") |
| Audit source commit | `e19eef90`, 104 files, +13,267 / −4,321 |
| Regenerated site commit | `bfd849a1`, 5,899 files |
| Branch | `claude/culinaryvault-recipe-site-mk9w9b` |
| Pull request | #14, opened and merged 17 Oct 2026, 17:53 UTC (22:53 at +05:00) |
| Merge commit on `main` | `91a2bf1336b1002881d76540bf723a30d9226020` |
| Changed files in the audit range | generated recipe pages 5,516; list pages 349; sitemaps, feeds and indexes 19; other pages 11; recipe detail files 49; catalogue rows 14; audit and tool scripts 15 (4 new); shared libraries 9 (2 new); templates 3; build and server files 3 (1 new); generated CSS and scripts 4; date registers 2 (`content-dates.json` changed, `published-dates.json` new); docs 3 (new); README, CLAUDE.md and `.htaccess` 3 |

New files: `src/lib/timing.js`, `src/lib/diet-conditions.js`, `src/server/contact-send.php`, `src/data/published-dates.json`, `tools/published-dates.js`, `tools/robots-check.js`, `tools/private-paths-check.js`, `tools/contact-config.example.php`, and the three files in `docs/audit-2026-10/`.

---

## 5. Deployment record

**How the site is deployed.** Hostinger's Git auto-deployment for `weeklydelight.com` is enabled: GitHub account `jamesdillon9051-sketch`, repository `Culinaryrecipie`, branch `main`, deploying into the site's root folder. Merging to `main` therefore deployed the site. Nothing was uploaded by hand and no deployment setting was changed.

**What was seen.**
- `robots.txt` on the server was rewritten at 17:54:17 UTC, about a minute after the merge.
- Hostinger's CDN was still serving stale copies for a short time (including `/src/build.js` with a one-year cache lifetime and `/CLAUDE.md` with a one-hour one), while a cache-busted request already returned the new state.
- The site's cache and CDN cache were cleared once, for `weeklydelight.com` only ("Request accepted"). Nothing else on the hosting account was touched. A second site on the same account, `tools.weeklydelight.com`, was not changed.

**Live verification after the cache clear.**

| Check | Result |
| --- | --- |
| `node tools/private-paths-check.js --url https://weeklydelight.com` | passed: 20 private paths refused, 18 public paths served |
| 17 sampled files compared by checksum with the repository | all 17 identical (home, about, contact and its two result pages, privacy, focaccia, carbonara, herb focaccia, onions, dinner, recipes list, `robots.txt`, sitemap index, search index, main script, main stylesheet) |
| `/contact/send.php` | GET answers 405; an invalid post answers 422 with a clear message (no mail can be sent by it) |
| Redirects | `http`, `www` and `index.html` all answer 301 to the plain address |
| Sitemap index | lists 12 sitemaps |
| Focaccia recipe data (live) | total time `PT16H50M`; published `2026-09-05`; diets LowLactose and Vegetarian; four keywords; "Vegan option" chip and the condition note present |

---

## 6. Left alone on purpose

- No recipe was deleted, redirected or set to noindex, and no URL changed.
- No dates were set to today; only recipes whose content changed got a new modified date.
- No images were generated and no unlicensed images were used.
- No ratings, reviews, testing claims, credentials, medical endorsements or publication history were added.
- No email address was invented for the contact form.
- The rewrite pipeline (`tools/humanize.js`) was not run, and the generated "common substitutions" blocks were not touched.
- No traffic, penalty, indexing or recovery claim is made: nothing in the repository measures traffic.

---

## 7. Validation and limits

- **Run and passed before the push:** `npm run build`; `npm run check` ("All checks passed", now including the timing, diet, keyword, SEO, health, robots and private-path checks); `npm run selftest` (64 of 64).
- **Run after the deploy:** the live private-paths check, checksum comparison, contact endpoint probes and redirect checks in section 5.
- **Not run:** Google's Rich Results Test and Search Console URL Inspection (they need your Google account); a valid contact-form post on the live site (it could email you before you have set the form up).
- **Limits of the diet judge.** It is a pattern matcher, stricter than the old check, but it can still miss an ingredient it has no word for. That is why the review lists exist.
- **Contact delivery** depends on Hostinger's mail setup and on the settings file you create; only a real test message proves it.
- **A small wording nit on the privacy page.** It says the connection hash behind the five-an-hour limit is discarded after an hour. The script clears expired entries the next time the form is used, so on a quiet site a hash can outlast the hour. It holds only a one-way hash and a time; the wording can be softened on the next change.
- A read-only `git fetch` run after the merge was refused by the sandbox's permission classifier, so the merge was confirmed from GitHub's own record of PR #14, and the live site was then checked directly.

---

## 8. What still needs the owner

In priority order:

1. **Create the contact form's settings file** outside `public_html` from `tools/contact-config.example.php` (`to`, `from`, `salt`), then send yourself one test message from `/contact/`. Until then the form tells readers honestly that nothing was sent.
2. **Review the diet labels** in `docs/audit-2026-10/human-review.md`: the 29 recipes that lost a label, the 290 conditional notes, and the 115 method steps that name only the non-compliant ingredient.
3. **Approve or reword** the About page and byline text (it is your public identity), and supply the facts only you have: who "Turab" is as you want it published, the year the site started if before September 2026, any real social profile, and where the site lived before.
4. **Decide on the 111 AI illustrations** in Recipe data (`inRecipeSchema` in `src/data/illustrations.js`), and reword the site's own "low calorie" and "low sodium" keyword thresholds as plain numbers.
5. **Search Console:** resubmit `sitemap-index.xml`, run the Rich Results Test on `/recipes/focaccia/` and `/recipes/spaghetti-carbonara/`, and export Performance, Pages, Crawl stats and the Recipes enhancement report (plus what "3,000 views" measured, and when the drop began) so the traffic question can be answered from evidence.
6. **Photographs:** work through `photo-priorities.csv`. Real photographs are the one change that adds first-hand content and unlocks recipe rich results for the 1,405 recipes without a picture.
7. **Deploy only the built site** in future, not the whole repository (README, "Deploying"). `.htaccess` hides the private files, but not shipping them is the real fix.

## 9. Rollback

Everything is in git. To return the live site to its state before the audit, redeploy commit `d39eb86b` through Hostinger's Git deployment, or revert merge commit `91a2bf1` and let auto-deployment run. The new files (`contact/send.php`, `contact/not-sent/`) are harmless if left in place, and the contact settings file is outside the repository. To undo one fix only, revert the relevant change in `src/` and rebuild: each fix is in the shared code listed above, so the next build carries it through. After any rollback, clear the site cache so the CDN stops serving the other version.

---

## Appendix A. Diet labels removed (36 labels on 29 recipes)

| Recipe | Label removed | The line that breaks it |
| --- | --- | --- |
| zaru-soba | Vegan | for the tsuyu :: dashi |
| agedashi-tofu | Vegetarian | for the broth :: dashi |
| michelada | Vegan | for each drink :: worcestershire sauce |
| welsh-rarebit | Vegetarian | worcestershire sauce |
| olivier-salad | Vegetarian | cooked ham or bologna, diced |
| lentil-soup | Vegan, Dairy-Free | for the sizzling butter :: butter or ghee |
| bloody-mary | Vegan | for the drink :: worcestershire sauce |
| bratwurst | Gluten-Free | german lager or wheat beer |
| papa-a-la-huancaina | Gluten-Free | cream crackers |
| hiyayakko | Vegan, Vegetarian | bonito flakes |
| obatzda | Gluten-Free | wheat beer |
| sea-bream-with-fennel | Vegetarian, Vegan | whole sea bream, about 800 g, gutted and scaled |
| gefilte-fish | Gluten-Free | fish mixture :: matzo meal |
| skillet-gnocchi-with-spinach | Gluten-Free | shop-bought potato gnocchi |
| huevos-divorciados | Dairy-Free | crumbled queso fresco |
| no-bake-banana-pudding | Gluten-Free | vanilla wafers |
| no-bake-trifle | Gluten-Free | sponge fingers |
| nutella-french-toast | Gluten-Free | brioche, 2 cm thick, about 320 g |
| overnight-french-toast | Gluten-Free | day-old brioche, cut into 3 cm cubes |
| dorade-royale | Vegetarian, Vegan | whole sea bream, about 700 g, scaled and gutted |
| charlotte-aux-fraises | Gluten-Free | sponge fingers, about 24 |
| coniglio-alla-cacciatora | Vegetarian, Vegan | rabbit, jointed |
| spaghetti-alla-bottarga | Vegetarian, Vegan | bottarga di muggine, grated |
| tiramisu-alle-fragole | Gluten-Free | sponge fingers |
| montaditos | Dairy-Free | manchego, shaved |
| conejo-al-ajillo | Vegetarian | rabbit, jointed |
| dorada-a-la-sal | Vegetarian | whole sea bream, scaled and gutted |
| maltese-rabbit-stew | Vegetarian, Vegan | rabbit, jointed |
| hyderabadi-biryani | Gluten-Free | to finish :: plain flour and water, for the seal |

## Appendix B. Fourteen descriptions rewritten

**panna-cotta**  
Before: Silky vanilla panna cotta with the perfect wobble — a five-ingredient Italian dessert that takes 20 minutes to make.  
After: Silky vanilla panna cotta with the perfect wobble: a five-ingredient Italian dessert, 20 minutes of work and at least 4 hours in the fridge.

**fudgy-brownies**  
Before: Fudgy cocoa brownies with a shiny crackle top and dense centre. One bowl, no melted chocolate, ready in 40 minutes.  
After: Fudgy cocoa brownies with a shiny crackle top and dense centre. One bowl, no melted chocolate, 40 minutes of work, then 3 hours to cool.

**bulgogi**  
Before: Korean beef bulgogi with a soy, pear and sesame marinade, seared hard for caramelised edges. Ready in 30 minutes.  
After: Korean beef bulgogi with a soy, pear and sesame marinade, seared hard for caramelised edges. 30 minutes of cooking after freezing and marinating.

**chocolate-pudding**  
Before: Chocolate pudding: a smooth stovetop pudding made with cocoa, cornflour and milk, chilled until set. A very cheap dessert for four in 15 minutes.  
After: Chocolate pudding: a smooth stovetop pudding made with cocoa, cornflour and milk. A very cheap dessert for four, 15 minutes of work, then chilled for 2 hours.

**air-fryer-cinnamon-rolls**  
Before: Air fryer cinnamon rolls: soft swirls with cream cheese icing, cooked for 12 minutes. Six servings, ready in 32 minutes.  
After: Air fryer cinnamon rolls: soft swirls with cream cheese icing, cooked for 12 minutes. Six servings, 32 minutes of work plus an hour's rise.

**air-fryer-fried-chicken**  
Before: Air fryer fried chicken: buttermilk-marinated, crunchy and juicy, cooked for 25 minutes. Four servings, ready in 45 minutes.  
After: Air fryer fried chicken: buttermilk-marinated, crunchy and juicy, cooked for 25 minutes. Four servings, after at least 2 hours in the marinade.

**air-fryer-pork-belly**  
Before: Air fryer pork belly with shattering crackling and soft, rich meat, cooked for 40 minutes. Four servings, ready in 50 minutes.  
After: Air fryer pork belly with shattering crackling and soft, rich meat, cooked for 40 minutes after at least 2 hours drying uncovered in the fridge.

**jerk-chicken-wings**  
Before: Jerk chicken wings with scotch bonnet, allspice and thyme, baked for 40 minutes. Four servings, ready in 55 minutes.  
After: Jerk chicken wings with scotch bonnet, allspice and thyme, baked for 40 minutes. Four servings, marinated for at least 4 hours first.

**low-carb-brownies**  
Before: Low-carb brownies with almond flour and cocoa, baked for 22 minutes. 12 squares, ready in 40 minutes.  
After: Low-carb brownies with almond flour and cocoa, baked for 22 minutes, cooled and chilled for an hour before cutting. Makes 12 squares.

**freezer-dumplings**  
Before: Freezer dumplings with pork and cabbage, frozen and steamed from frozen in 10 minutes. 30 dumplings, six servings, ready in 55 minutes.  
After: Freezer dumplings with pork and cabbage: fold a batch of 30, freeze them on a tray for an hour, then steam from frozen in 10 minutes.

**heringssalat**  
Before: Heringssalat, German herring salad with pickled beetroot, apple and soured cream, ready in 20 minutes. Six servings, no cooking.  
After: Heringssalat, German herring salad with pickled beetroot, apple and soured cream: 20 minutes of work, no cooking, then 2 hours in the fridge.

**mojo-picon**  
Before: Mojo picón, spicy red Canary Islands sauce with garlic, cumin and paprika, ready in 10 minutes. Eight servings, no cooking.  
After: Mojo picón, spicy red Canary Islands sauce with garlic, cumin and paprika: soak the peppers, blend in 10 minutes, rest an hour. No cooking.

**kransekage**  
Before: Kransekage, Danish marzipan ring tower with white icing, baked for 25 minutes. Twelve servings, ready in 55 minutes.  
After: Kransekage, Danish marzipan ring tower with white icing: the dough is chilled for an hour, then the rings are baked for 25 minutes. Serves twelve.

**poronkaristys**  
Before: Poronkäristys, Finnish sautéed reindeer or venison with lingonberries and mash, cooked for 20 minutes. Four servings, ready in 30 minutes.  
After: Poronkäristys, Finnish sautéed reindeer or venison with lingonberries and mash: the meat is part-frozen to slice thinly, then cooked for 20 minutes.


## Appendix C. Other recipe-data fixes

| Recipe | Change |
| --- | --- |
| focaccia | waiting 750 to 960 min ("rising and chilling"); method "Stir the honey or sugar into the water" |
| garlic-focaccia | waiting 870 to 960 min |
| croissants | waiting 645 to 690 min ("chilling and proving") |
| cinnamon-rolls | waiting 540 to 600 min ("proving and chilling") |
| galbi | waiting 390 to 430 min ("soaking and marinating") |
| danish-pastry | waiting 165 to 210 min ("chilling and proving") |
| pain-au-chocolat | waiting 210 to 240 min |
| mutton-biryani | waiting label corrected to 60 min ("marinating") |
| shoyu-ramen | a broth simmer mis-read as waiting removed |
| bifana | category Quick Meals to Lunch (240 min of marinating) |
| swedish-crayfish-boil | category Quick Meals to Dinner (540 min of waiting) |
| spaghetti-carbonara | tip and lede reworded: take the pan off the heat before the eggs go in; no contradictory rescue |
| cacio-e-pepe, eggs-benedict, macarons | description wording corrected |
| moules-mariniere | "1 baguette, to serve" |
| scrambled-eggs | "2 slices buttered toast, to serve" |
| lentil-soup | Vegan and Dairy-Free removed; Vegetarian kept explicitly |

Plus the 300 recipes of volumes 32 to 34: the three health tags removed and their search phrases rewritten as numbers (and the "Kidney friendly." sentence dropped from volume 34's descriptions).
