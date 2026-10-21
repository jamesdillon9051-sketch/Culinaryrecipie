# Codex–Claude technical review

## Merge completion — 21 October 2026

The owner approved both merges. PR #17 merged into `main` as `b076ac8f03bbcad191a51ec6ea71522b26b3f3c8`; PR #18 was retargeted to `main` and merged as `260ad311d43ed3833fd52384f3ae8af9f4e90d19`. The resulting implementation file tree exactly matches the reviewed `ab4c2107772e11ed733ddc36009ad3c031c2ddbd` tree. Earlier draft/no-merge/no-access statements below are dated history, not current status.

Read the [downloadable PDF and text handoff](../handoff-2026-10-21/README.md) for current changes, exact commit references, fresh checks, remaining content/ordering work and production limits. A validation-only rebuild on 21 October made no tracked-file changes; the full check and ad comparison passed. No new recipe content or verdict was edited. Claude retains ownership of future recipe corrections and combined regeneration.

No manual hosting deployment was performed. The 06:41 UTC live sample still had no new photo on Leche Flan and returned 404 for its new JPG/WebP URLs, although those files exist in merged main. Confirm the hosting revision/asset rollout before treating the photo work as live. A few successful markup/sitemap samples do not verify the complete production deployment or Google indexing.

## Access and review update — 21 October 2026

GitHub installation now permits writing review branches. The previous 403 is resolved: [draft crawl PR #17](https://github.com/jamesdillon9051-sketch/Culinaryrecipie/pull/17) publishes `775470da2ce0e3cbf33b6f51cdd9c3bf982e43e9`; [draft photo PR #18](https://github.com/jamesdillon9051-sketch/Culinaryrecipie/pull/18) publishes photo implementation `23c54a1ec819f4ee274df1ff9a5049bc0fc35277`, stacked on the crawl branch. Older blocked-access statements below are historical. Neither PR is merged or deployed.

Claude's newly published `claude/recipe-content-handoff` (`54a3185e0969c92198a16ab0207b06200596be87`) names Claude as final integration/regeneration owner and asks Codex to append its own section. See [docs/HANDOFF.md](../HANDOFF.md) for that preserved Claude snapshot plus Codex's published branch references, check results and exact remaining actions. This follow-up changes documentation only; no source, generated output or date register was rebuilt or changed after that ownership assignment. The owner's later image request authorizes the photo work despite the older image exclusion.

## Latest handoff — missing recipe photos, 20 October 2026

The owner's subsequent image request authorizes this workstream. Neither review branch is merged or deployed.

- Branch/worktree: `images/missing-recipe-photos`, `/workspace/Culinaryrecipie-images`; base crawl-review tip `775470da2ce0e3cbf33b6f51cdd9c3bf982e43e9`, production/main base `40a2386f0f0b75eeac0ec54570f619b07f1f2a66`. Main was rechecked and remains unchanged. The delivery manifest records the final image commit.
- Codex adds **178 reviewed licensed photographs**, 356 source JPEG/WebP assets and generated copies, hero metadata, attribution/inventory documents, a resumable sourcing utility and focused processing/search regressions. Existing photographs/process shots/illustrations, recipe URLs, ad sources and Claude-owned content remain preserved. Claude owns recipe corrections and must recheck image fit if ingredients/labels change.
- Inventory: **4,177 recipes with photographs, 101 with existing illustrations only, 1,237 without pictures**, of 5,515. All 1,415 starting gaps have coverage rows. Article/category lookup covered those gaps; corrected full-text searches covered all 1,368 remaining after the first batch. All 1,857 successful candidate downloads were screened (1,820 distinct recipe/source pairs); every selection was reviewed at full size and final crop. Search was bounded, not exhaustive. An invalid grouped query was discarded and fully rerun; the regression and live positive controls record the correction.
- Review sources, licences, serving differences and remaining gaps in [the photo report](../recipe-photos-2026-10-20/README.md), `selected.csv`, `selected.json`, `source-evidence.json` and `catalogue-coverage.csv`. All 178 sources were freshly reverified: 16 CC0/public domain, 65 CC BY, 97 CC BY-SA. Credit and ShareAlike notices remain. No new generated images, testing claims or indexing claims are introduced.
- Verification: build/check pass; 16 mobile/desktop browser cases, 22 focused processing/search checks and independent checks of every selected page pass. Zero broken/unused/shared assets. Ad/config/page comparison passes. Exactly 178 recipe image identities and 96 affected collection/About identities change; recipe calendar dates and all publication dates are preserved. The 870 additional recipe HTML changes only update related thumbnails and retain their JSON-LD. All sitemap membership/order is unchanged. See the delivery evidence for repeated-build date stability.
- **Claude action — IMAGE-CONTENT-01:** `src/data/catalog-59.js:65`, recipe `trenette-al-pesto`, declares Gluten-Free; `src/data/details59/02-italian-c.js:303` specifies `350 g trenette or linguine` without a gluten-free qualifier. Generated HTML prints the tag. No wheat-pasta photo was selected. Verify/correct the label or ingredient; this review did not edit those files or weaken the passing aggregate audit.
- Integration owner still requires acknowledgement; no external Claude session is controlled here. Reconcile Claude's current changes and the prior unmerged crawl branch before one owner regenerates combined output. Review the photos/source differences and rerun combined checks. Only deploy after owner approval, then verify live image responses, credits and schema. Local checks are not production or Google verification. Earlier content/crawl findings below remain separate and open.

## Latest handoff — site-wide crawling/indexing audit, 20 October 2026

This section supersedes the branch/delivery status below for the **crawl audit only**. The earlier technical/content review remains a separate preserved workstream, not silently merged or closed.

- Base: `40a2386f0f0b75eeac0ec54570f619b07f1f2a66`; GitHub main rechecked and unchanged. PRs #15/#16 are merged; no open PRs were returned.
- Review branch/worktree: `fix/sitewide-crawl-indexing-review`, `/workspace/Culinaryrecipie-crawl`.
- **Implementation commit: `b7bd747db61ae7a7d2420a92c4b6a2bb16623d19`**. Documentation/evidence is added by the next commit on this branch; its exact tip and artifact hashes are in the delivered `REVIEW-MANIFEST.json`.
- Codex owns generators, validators, this audit and isolated review regeneration. Claude owns recipe catalogue/detail/rewrite files, verdicts and culinary/safety evidence. No such content file was edited. Claude's external active edits/acknowledgement are not visible here. Agree one integration owner before integrating/regenerating the combined work; this local build does not claim that coordination has happened.
- Remote branch creation through the connected integration was attempted and returned **403 “Resource not accessible by integration.”** Exact blocked operation: create `refs/heads/fix/sitewide-crawl-indexing-review`. Local commits and a Git bundle/patch are provided. No remote PR, production merge or deployment occurred.

**Coverage:** 5,515 source recipes; 5,871 intended indexable pages; all 12 sitemap children cover exactly those pages, without duplicates. All intended pages are reachable within two ordinary HTML anchor links from home, with zero orphans/broken page links and unique titles/H1s. Generated non-ad HTML is 5,875: four intentional helper/utility documents account for the difference. The supplied export identifies 1,000 exclusions (920 recipes, 41 categories/combinations, 19 cuisines, 17 ingredient hubs, 3 other pages), all Pending with unavailable/sentinel last-crawl dates. It does not identify the remaining 1,982 reported exclusions or any individually confirmed indexed pages.

**Changes:** `src/templates/recipe-page.js` removes the incomplete microdata Recipe across all 5,515 recipes, retains the complete JSON-LD, supplies real instruction fragment targets and omits unsupported totalTime on 445 untimed methods. `src/templates/pages.js` removes the invisible search-results ItemList. `src/build.js`, `src/lib/content-dates.js` and its data register track meaningful recipe and collection/prose changes without rebuild churn. All recipe dates move for the actual markup correction; `/search/` moves for its schema correction; 355 other dates are preserved. Publication dates are unchanged. `tools/check.js`, `tools/audit-failure.js`, the consistency check and new crawl tools pin the defects and fail on child-audit crashes. Optional browser tooling now finds local/system Chromium and does not falsely pass when Playwright is absent.

**Changed generated files:** 5,515 recipe pages, `/search/index.html`, the 14 sitemap/index/alias XML files and two feeds. Membership, URLs, design, CSS, image assets and ad/monetization code/configuration are preserved. The complete source/generated file list is in the implementation commit (5,551 files; 5,532 generated and 19 source/tool files).

**Verification:** build/check pass across 5,875 HTML pages/5,871 sitemap entries/5,515 search records; independent full static audit has zero failures. 19 audit regressions, 14 crawl guards, 10 modification-date cases, 17 local template render cases, the existing 24 mobile/feature checks and 64 self-tests pass. Ad comparison is unchanged. Google Rich Results Test execution and production rendered DOM remain unverified because of environment transport/certificate failures; neither is claimed as a pass.

**Live boundary:** 1,334 intended destinations returned 200 with matching canonicals and permissive directives at the recorded time; 4,537 remain unverified. All 14 sitemap XML addresses and robots returned 200 before the transport failed. HTTP/www/deep-path probes preserve paths to `https://weeklydelight.com`; missing routes return 404. Later Envoy tunnel failures are environment errors, not confirmed origin 503s. All 9,168 declared/probed image paths exist locally, but live image verification is blocked. The 1,415 missing recipe images remain outside scope. No sitemap was resubmitted.

**Claude actions:** see [CLAUDE-REVIEW.md](../crawl-audit-2026-10-20/CLAUDE-REVIEW.md) for named manual comparisons, duplicate/collection candidates and exact source paths. The [236-record queue](codex-review-findings.json) remains open; all 139 named source files are unchanged. The stronger earlier validators were rerun read-only and still report 224 consistency review items (220 recipes), three confirmed raw-flour specification defects, four farmed-fish exemption questions and the existing specialist cases. Do not close these merely because the base validators are less strict. No cooking, pH or supplier evidence was invented.

**Integration overlap:** `/workspace/Culinaryrecipie` still contains the separate staged `fix/recipe-validation-review` batch based on the same base. Its patch includes neutral recipe ordering, additional timing/structured-data regressions, timing-override snapshots and stronger content validators. It is not an ancestor of this new branch. Reconcile overlapping `src/build.js`, `src/lib/content-dates.js`, recipe schema, `tools/check.js`, `tools/recipe-consistency.js`, browser tooling and date data deliberately. Keep the new single-Recipe guard/step targets and the stronger earlier evidence requirements. Do not blindly apply both regenerated outputs or weaken safety checks to obtain a green release. Integration/content ownership still needs acknowledgement by Claude/the owner.

Review deliverables: [report](../crawl-audit-2026-10-20/REPORT.md), [5,915-row URL CSV](../crawl-audit-2026-10-20/url-audit.csv), image inventories, raw export copies, [deployment checklist](../crawl-audit-2026-10-20/DEPLOYMENT-CHECKLIST.md), and the delivered bundle/patch/evidence package. URL indexing statuses outside supplied evidence remain unknown. No technical fix guarantees Google indexing.

---

## Earlier technical review — retained history and unresolved content evidence

Status: technical implementation and verification complete on local `fix/recipe-validation-review`. Source changes are staged for review, not committed or published; the full audit deliberately remains blocked by three content findings. Nothing merged or deployed.
Base: `40a2386f0f0b75eeac0ec54570f619b07f1f2a66` (`main`, inspected 2026-10-19 UTC).

## Repository state and ownership

- PR #15 (follow-up) merged at `375249b15a4375194a65855d57f8104df8854e2e`.
- PR #16 (corrective release and uncertainties) merged at the base above. Its source branch ends at `f55b6ddf700b456f3ce202addeaba3910e52c769`; its tree equals main's tree. No open PRs were returned at inspection.
- The historical completion reports' unmerged status is superseded by those GitHub records. Deployment is separate; a merge record alone does not verify live output.
- Codex owns technical code, validator regressions and this document on the review branch. Claude owns recipe catalogue/detail files, content verdicts and culinary/safety evidence. No recipe-content file will be edited in this pass. Claude's uncommitted work in a separate session is not visible here.
- No direct Claude communication channel is available. This document and the accompanying patch are the exchange mechanism. Integration ownership remains to be acknowledged by Claude/the owner; only that owner should commit regenerated bulk output after integrating source changes.
- No production merge, deployment, email, account-permission change or image acquisition is authorised by this task.

## Claimed technical batch

| ID | Owner | Files | Work | Status |
| --- | --- | --- | --- | --- |
| TECH-01 | Codex | `src/build.js`, `src/lib/{recipe-order,linking,ingredient-hubs}.js`, `src/templates/pages.js`, `src/assets/js/directory.js` | Replace seeded rating/review weights with documented deterministic slug ordering, retaining relevance for search and related recipes | implemented; browser verified |
| TECH-02 | Codex | `src/lib/{content-dates,recipe-fingerprint}.js`, build fingerprint, migration, date corpus | Track meaningful computed timing/nutrition changes without refreshing unrelated dates | implemented; migration and rebuild verified |
| TECH-03 | Codex | recipe schema, consistency validator/corpora, timing override snapshots | Validate missing/malformed structured data, all timing/index fields, and avoid publishing an incomplete lower bound as totalTime | implemented; corpora/rendered checks pass |
| TECH-04 | Codex | `tools/food-handling-audit.js`, `tools/{check,audit-failure}.js` | Recheck validator assumptions against primary guidance; keep newly exposed content failures visible; stop swallowing audit crashes | implemented; content blockers retained |
| CONTENT-REVIEW | Claude; Codex reviewer | Recipe source files, existing review ledgers | Address exact content findings recorded below; no concurrent Codex content edits | open |

## Baseline reproduced

Across 5,515 recipes, `recipe-consistency.js --json` reports 0 confirmed, 0 open review, 40 accepted exceptions in 39 recipes, 0 stale reviews/orphans. `food-handling-audit.js --list` reports 0 confirmed, 3 specialist findings in 3 recipes, 2 exceptions in 2 recipes, 0 stale reviews. These counts are parser outputs, not independent recipe/safety certification.

`consistency-resolutions.js report` reproduces 832 historical findings in 730 recipes: 560 recorded corrected, 272 recorded exceptions, none without a disposition. Another 885 records were added while Claude worked. Their existence does not itself verify each verdict. Existing cooking/specialist dependencies in the completion report remain open.

## Access limitation

GitHub connector `create_branch` for `fix/recipe-validation-review` at the base returned **403 Resource not accessible by integration**. Earlier CLI authentication also fails. Local read access and builds are available. Remote publication will be attempted only through authorised working credentials; otherwise deliver the local commits and a Git patch/bundle with exact application instructions.

## Current findings, not a claim of recipe completion

- Historical baseline: **832 findings / 730 recipes**, still recorded as 560 corrected and 272 exceptions. No historical resolution record or Claude-owned exception ledger was edited.
- Current consistency tool: **0 confirmed, 224 open review items in 220 unique recipes**, plus the same 40 accepted exceptions in 39 recipes and 0 stale/orphan verdicts.
  - 152 short-wait allocation questions in 151 recipes: rests under the parser's 15-minute cutoff need an explicit preparation/overlap allocation or revised totals. These are not automatically 152 defects, and no minutes were blindly added.
  - 72 readiness claims in 70 recipes with untimed required stages: a lower-bound total cannot establish the unqualified claim. These are left for content review, not automatically rewritten.
- Current food tool: **3 confirmed flour-specification defects**, **4 raw-fish exemption review items**, **3 existing specialist findings**, **2 existing accepted pickle exceptions**, 0 stale reviews.
- Codex challenges the two pickle exceptions separately (below). This does not silently change their classification in Claude's original ledger.
- `codex-review-findings.json`: **236 currently open/reopened records across 231 unique recipe slugs**, with stable IDs, exact source files/lines/text, source fingerprints, base commit, owner, status and the evidence required. It is an automatically mapped queue, **not** 231 completed manual reviews. `codex-consistency-review.md` is its readable consistency portion.
- Manual review coverage in this pass: the full methods of the six named recipes below; targeted ingredient/method/safety text on the three flour recipes, four raw-fish recipes, two oil pickles and miso ramen. No cooking, measured pH, supplier certification or independent review of all 832 historical dispositions is claimed.

## Independent recipe review: exact action for Claude

### CONTENT-01 — three unbaked cookie-dough recipes: correction required

Files/identifiers:

- `src/data/details31/04b-desserts-and-holidays.js`, `edible-cookie-dough` (record starts at line 76; method step 1).
- `src/data/details41/05-puddings-cakes-and-sweet-bakes.js`, `cookie-dough-bites` (line 495; method step 1).
- `src/data/details55/02-cookies-cakes-and-biscuits-b.js`, `cookie-dough-bars` (line 402; unbaked topping ingredient, method step 1, and why/meta claims).

All use ordinary or home-treated flour in dough that is not subsequently cooked, relying on a home oven/microwave or a 74°C / 165°F reading. The FDA's [Handling Flour Safely](https://www.fda.gov/food/buy-store-serve-safe-food/handling-flour-safely-what-you-need-know), opened during this review, specifically advises against home heat treatment. Claude's previous source was another recipe in this same repository, not validated flour-safety evidence. The old audit incorrectly accepted a temperature substring anywhere in the steps.

**Required action:** specify flour commercially treated and explicitly labelled by the manufacturer for ready-to-eat use, with no ordinary-flour alternative, or use a supported cooked approach. Reconcile the method, ingredient list, why text, descriptions/keywords, times, dietary tags and nutrition. Keep normal flour for the bars' cooked base distinct from the raw topping. The new regression covers this distinction. Do not retain a claim that the home heat treatment establishes safety. Cooking evidence has not been invented; a supplier product specification or an authoritative validated process is the missing evidence.

### CONTENT-02 — short waits, including pasta e fagioli

`src/data/details3/italian.js`, `pasta-e-fagioli` (record starts line 49), step 8: **Rest 10 minutes off the heat so it thickens properly.** Current default times are prep 15, cook 80–95, soak 480, yielding 575–590 minutes, plus untimed pasta cooking. The parser does not count the final 10 minutes because they fall below its cutoff. Nothing in the source explicitly allocates this final rest inside preparation.

**Required action:** show the actual allocation or add the sequential rest, coordinating the catalogue row, declared rest and metadata. Do not assume it overlaps earlier work. The pasta is now explicitly added in step 6 and cooked in the soup to package timing/readiness in step 7; that correction is present. The liquid is brought to 1.5 litres, and the text warns that the soup thickens, but confirm whether extra hot liquid should be specified for package-dependent absorption. Do not invent an amount.

The other 151 short-wait findings are in the queue with exact steps. Claim batches by shared source file before editing.

### CONTENT-03 — lasagna Bolognese: make the assumed overlap explicit

`src/data/details/italian.js`, `lasagna-bolognese` (record starts line 97), steps 5–7; `src/data/timing-overrides.json`, `lasagna-bolognese`.

The arithmetic **4 + 12 + 10 + 5 + 20 + 150–180 + 40 = 241–271 minutes cooking** is correct for the default track. Adding prep 45 and rest 20 gives **306–336 minutes (5h06–5h36)**. The 2 + 5 minutes of besciamella, milk warming and oven preheating have been excluded on the assumption they happen during the long ragù simmer. The override says so, but the actual method currently introduces step 6 sequentially, without saying to do it while the ragù simmers.

**Required action:** explicitly place besciamella and preheating in the simmer, name the separate saucepan/burner assumption and keep assembly within the 45-minute prep allocation; otherwise correct the elapsed model. This is a source-intent question, not an instruction to add 7 minutes automatically. The newly fingerprinted override will stop the build after a method/rationale edit until its snapshot is reviewed; update it deliberately alongside the correction.

### CONTENT-04 — banoffee pie: safe route preserved; variant and source-duration questions

`src/data/details17/puddings.js`, `banoffee-pie` (record starts line 472), steps 1–5.

The sealed-tin heating instruction has been removed. A foil-covered **dish** in a water bath is consistent with the manufacturer's [Caramelized Milk](https://www.verybestbaking.com/carnation/recipes/caramelized-milk-dulce-de-leche/) method, which was opened directly and warns against heating in the can. That current source gives 425°F and **50–60 minutes**, rather than this recipe's **60–90 minutes**. This does not establish a universal new timing for a darker toffee; it does mean the historical claim that the exact interval came from that manufacturer is not independently confirmed.

**Required action:** document the actual source/readiness basis for the chosen interval, and clarify step 5 for prepared caramel. Step 4 skips steps 1–3, but step 5 still starts "While the toffee bakes"; the prepared-caramel route still needs its biscuit base and 30-minute chill. Cooling the toffee remains untimed with readiness cues; its duration still requires practical evidence. The incomplete schema total is now omitted by the technical fix.

### Named reviews retained as conditional conclusions

- **Macarons:** `src/data/details/french.js`, `macarons` (line 525). No unused water remains; the 110 g whites are explicitly split 55 + 55 g, meringue is whisked without a hot syrup, refrigerated handling is retained, and ganache work is explicitly parallel. The default floor is prep 60 + bake 14 + rest/maturation 1470 = **1544 minutes (25h44)**; upper stated timed components give **1576 minutes (26h16)**. Both remain lower bounds because shell cooling and extra ganache firming are untimed. Resolve those durations only with a timed bake; no new arbitrary minutes or culinary-test claim was added.
- **Dal makhani:** `src/data/details3/indian.js`, `dal-makhani` (line 48). The normal track is 90-minute lentil simmer + 90–120-minute combined simmer + 10-minute finish = **190–220 cooking minutes**; with prep 20 and soak 480, **690–720 elapsed minutes**. The separate-pan base is explicitly made during the lentil simmer. This needs at least two cooking vessels/burners; the pressure-cooker alternative is not added as another sequential stage. These are textual arithmetic checks, not measured cooking durations.
- **Moussaka:** `src/data/details/mediterranean.js`, `moussaka` (line 42). The method explicitly puts potatoes on a second tray beside aubergine, ragù during salting/roasting, and béchamel during the ragù. Default total **170–180 minutes** follows prep 40 + cook 70–80 + waits 60. The overlap requires an oven that accommodates both trays and separate pans/burners. Wine reduction and readiness still vary; the numerical ceiling has not been confirmed by cooking. The historical accepted stage-sum exception was not independently promoted to cooking verification.

### CONTENT-05 — farmed raw fish: verify the actual exemption

`gravlax` (`src/data/details2/europe.js`), `lomi-lomi-salmon` (`src/data/details31/01b-dinners.js`), `chirashi-bowl` (`src/data/details39/01-japanese-asian-and-curries.js`) and `salmon-poke-bowls` (`src/data/details44/03-lamb-and-fish.js`). Exact lines/ingredients are in the JSON queue.

The [FSA guidance, sections 5–8](https://www.gov.uk/government/publications/freezing-fish-fishery-products-and-treatment-for-parasites/freezing-fish-fishery-products-and-treatment-for-parasites) describes rearing/feed conditions and supplier evidence for freezing exemptions, including qualifying Atlantic salmon. A generic "farmed" alternative does not establish them. These remain **review** items, since an appropriate supplier may qualify. Specify the qualifying conditions/supplier confirmation or suitable previously frozen fish, and do not imply freezing addresses every raw-fish hazard.

### CONTENT-06 — two accepted oil-pickle exceptions need reassessment

`src/data/details48/03-south-indian-sweets-drinks-and-pressure-cooker.js`, `lime-pickle` (line 667) and `mango-pickle` (line 700); their verdicts in `src/data/food-handling-reviewed.json`.

The accepted reasons assert a finished pH below 4.6, then acknowledge that the pickle pH was not measured. The recipe gives a room-temperature cure followed by weeks/months in oil. Natural fruit acidity alone is not a measured finished-mixture process. **Claude/specialist action:** reassess the exception against an authoritative recipe-specific validated process, acidification/pH and salt evidence. The new handoff marks these as requiring specialist evidence without rewriting Claude's ledger or inventing a universal storage life.

### Existing dependencies carried forward

Keep the specialist cases for raw prawns/beef, oil-cured vegetables, miso ramen's raw-garlic tare, category-specific fridge lives and runny yolks. In particular `src/data/details3/japanese.js`, `miso-ramen`, still states a 3-week refrigerated tare life; its garlic/ginger mixture has no measured salt/water-activity evidence here. The original macarons cooking dependency remains open. Contact configuration, traffic diagnosis and missing photographs remain separate tasks.

## Technical implementation and date migration

- Seeded rating/review weights no longer order directory, homepage quick picks, taxonomy/ingredient hubs or related-recipe ties. The legacy `popular` URL parameter and index `w` field remain compatible, now carrying a deterministic slug hash; actual published reviews alone may drive the optional real-rating sort.
- The index remains relevance-ranked for text queries. Browser checks cover accent/punctuation/hyphen folding, zero results, pending loads, failed downloads, preserved server cards and retry.
- Structured data validation now parses JSON-LD and checks page/Recipe existence, duplicate/malformed schema, prep/cook/total, publication/modification dates, nutrition-tier omissions and nutrient values, and index floor/range/untimed/prep/cook fields. Zero-minute prep uses `PT0M` correctly.
- `tools/check.js` now fails on an audit process crash or output overflow even if the child never printed a cross-prefixed failure. No warning was suppressed to obtain success.
- Seven historical timing overrides are frozen against ingredients, method, durations and rationale in `src/data/timing-override-snapshots.json`. Changed source invalidates an override. These snapshots prevent silent reuse; they do not approve unresolved historical overlap assumptions.
- The migration was run against **pristine source from the base** (`git archive <base> src tools` into a temporary checkout). It seeded 5,515 extra fingerprints with **0 dates or old hashes changed**. The subsequent build intentionally moved **exactly the 445 recipes with untimed stages**, whose schema total was removed. **0 unrelated recipe dates, 0 non-recipe dates and 0 publication dates changed.** A further unchanged build moved 0 dates.
- The full site was regenerated **locally for verification only**. Keep bulk generated HTML/assets/sitemaps out of the source review patch; the integration owner regenerates them after reviewing/integrating the sources and date register. No recipe-content source or Claude-owned verdict/override rationale was edited.

## Checks and remaining release gate

| Check | Result |
| --- | --- |
| `npm run build` | Pass: 5,515 recipes, 5,878 HTML pages; unchanged second build moves 0 dates |
| `node tools/technical-corpus.js` | 43 passed, 0 failed |
| `node tools/consistency-corpus.js` | 16 cases pass |
| `node tools/timing-corpus.js` | 38 timing cases + 5 wait labels pass |
| `node tools/food-handling-audit.js --selftest` | 24 cases pass |
| `npm run selftest` | 64 passed, 0 failed |
| `NODE_PATH=/tmp/culinary-browser/node_modules node tools/site-browser-test.js` | 51 browser checks pass; named pages at 390 and 1280 px, plus directory/search/tools |
| `node tools/ads-unchanged.js --against <base>` | Pass: eight source/config files and eight pages' 11 advertising tags identical |
| Current consistency audit | 0 confirmed; 224 review items in 220 recipes; no stale/orphan exceptions |
| Full `npm run check` | **Fails only the three CONTENT-01 flour findings**; checked 5,875 HTML pages, 5,871 sitemap URLs, 5,515 index entries; no other audit failures |

The browser dependency was installed under `/tmp`, not added to site dependencies. Browser tests block third-party requests as the existing suite does: these are local functional/layout checks, not monetized live-page or field Core Web Vitals measurements.

Local `search-index.json`: 3,012,408 bytes raw, 726,657 gzip, 530,183 Brotli (local encodings, not transferred bytes observed on a deployed new release).

Read-only live checks: macarons, lasagna Bolognese and carbonara each returned HTTP 200 and matched the base commit's generated HTML **byte for byte**. This confirms those samples already contain the merged release. It does not verify the entire deployment or Hostinger's current account settings. No new source in this branch is deployed.

## Precise next handoff

1. Claude acknowledges content/integration ownership and claims batches by source file in this table or the JSON ledger. Do not merge the old audit-document branch `claude/culinaryvault-recipe-site-mk9w9b`; its sole unmerged commit is `db942c74b` and is unrelated to these fixes.
2. Resolve CONTENT-01 first and retain the stronger flour test. Reconcile prose as well as the method; do not use a same-repository recipe as safety evidence.
3. Address CONTENT-02/03/04, the raw-fish and pickle evidence questions, then claim the remaining 224 parser-review items. Provide an allocation/source/test or retain the explicit uncertainty for each.
4. Apply the source review patch to a separate branch from the exact base, review the date-register migration and the seven override snapshots, then regenerate output once as integration owner.
5. Run the build, complete audit, corpora, browser checks, advertising comparison and URL/date invariants again after content integration. Commit/push only after the repository's required checks pass. No production merge or deployment is authorised here.

## Delivery references and commit gate

Base commit: `40a2386f0f0b75eeac0ec54570f619b07f1f2a66`. Local branch: `fix/recipe-validation-review`. **There is no new change commit or remote PR.** The repository's `CLAUDE.md` section 2 says the post-build audit "Must pass before any commit" and requires `npm run build && npm run check`. The three real content findings are retained rather than bypassed. Independently, GitHub denied remote branch creation with 403; the account-level repository permissions reported earlier do not establish the integration's write permission.

The delivery is a source-only Git patch, this handoff, the two review queues and validation logs. The external `REVIEW-MANIFEST.json` records the exact staged review-tree hash and patch SHA-256 without inventing a commit reference. Apply the patch to a fresh branch from the base using `git apply --index`; then the integration owner can address the documented content blockers, regenerate output and satisfy the commit gate. Source date-register changes are included; locally generated public output is excluded from the patch. Publication dates, all catalogue/detail files, both Claude-owned review ledgers, timing override content, ad/consent/analytics files and image sources are unchanged.
