# Weekly Delight crawl and indexing technical review — 20 October 2026

The review output fixes confirmed shared markup defects across the catalogue. It is **not deployed**, and this report does not label any URL indexed. Google decides whether and when to crawl or index technically eligible pages.

Base: `40a2386f0f0b75eeac0ec54570f619b07f1f2a66`. Local branch: `fix/sitewide-crawl-indexing-review`, worktree `/workspace/Culinaryrecipie-crawl`. Implementation commit: `b7bd747db61ae7a7d2420a92c4b6a2bb16623d19`. See the shared [Claude/Codex handoff](../release-2026-10-uncertainties/CODEX-CLAUDE-HANDOFF.md) for ownership and integration conflicts. The delivery manifest records the final documentation commit and artifact hashes.

## Evidence and coverage

Repository instructions (`CLAUDE.md`) and the existing shared handoff were read. GitHub main was rechecked during this audit and still points at the base. PRs #15 and #16 are already merged; the corrective source branch `f55b6ddf700b456f3ce202addeaba3910e52c769` has the same tree as main. No open PRs were returned. Historical reports claiming those changes remain unmerged are superseded. A merge is not evidence of deployment: sampled production markup still contains the old template defects.

| Source / page type | Exact count |
| --- | ---: |
| Source recipe catalogue rows and unique detail records | 5,515 each |
| Catalogue modules / detail modules | 62 / 388 |
| Intended recipe URLs | 5,515 |
| Category / category-and-cuisine URLs | 10 / 193 |
| Cuisine / ingredient URLs | 92 / 51 |
| Other intended URLs, including indexes, search and informational pages | 10 |
| Total intended indexable catalogue | **5,871** |
| Generated HTML files | 5,878 |
| Generated non-ad HTML | 5,875 |
| Ad iframe documents, excluded from ordinary page identity requirements | 3 |
| Noncatalogue HTML: favourites, 404 document, two protected contact helpers | 4 |
| Sitemap child files / entries / unique entries | 12 / 5,871 / 5,871 |
| Reachable intended URLs by ordinary HTML anchors | **5,871** |
| Distinct directed page-to-page anchor edges | 250,154 |
| Intended URLs absent from sitemap / orphaned / broken page links | **0 / 0 / 0** |
| Unique page titles / H1 identities | 5,871 / 5,871 |

Every intended URL agrees between the independent source manifest, generated output, child sitemaps and homepage-reachable HTML graph. The four extra non-ad HTML files are deliberately not in the indexable catalogue; they are not missing sitemap entries. The two sitemap index addresses are aliases for the same index, not duplicate page entries. Child files 1–11 contain 490 URLs each; child 12 contains 481.

The ordinary-link graph reaches one URL at depth 0, 66 at depth 1 and 5,804 at depth 2. `/recipes/` already contains all 5,515 recipe anchors in its server-rendered A–Z section. Large taxonomy pages retain HTML links beyond the initial card grid. Client “show more” is therefore not the only discovery path. Existing related links remain relevant and unchanged. No mass link insertion, new pagination or artificial directory pages were needed.

Ten linked filter/sort URLs are intentional working views of `/recipes/`, blocked by existing parameter robots rules and canonicalized to the base listing. They are separately identified in the CSV; they are not orphan recipes. No ordinary page links through hostname or index.html redirects were found.

### Supplied Search Console evidence

The supplied [Metadata.csv](search-console/Metadata.csv) identifies “Discovered - currently not indexed,” sitemap “All known pages.” [Table.csv](search-console/Table.csv) contains exactly **1,000 rows and 1,000 unique URLs**, all in the intended catalogue:

| Type | Export URLs |
| --- | ---: |
| Recipes | 920 |
| Categories, including 40 category/cuisine combinations | 41 |
| Cuisines | 19 |
| Ingredients | 17 |
| Other pages (recipe directory, about, contact) | 3 |

Every validation status is `Pending`. Every last-crawled value is `1970-01-01`; it is treated as an unavailable/sentinel value, **not a crawl in 1970**. These are recorded exclusion observations, not a fresh inspection of each URL. This export identifies only 1,000 of the screenshot's approximately 2,982 exclusions: **1,982 URL identities are not supplied**. No individually confirmed indexed examples were provided, so no affected-versus-confirmed-indexed quality comparison can be made. URLs outside the export have unknown indexing status; the whole catalogue is not assumed unindexed.

The screenshots' approximately 1,750 indexed pages, pending validation, October 12 report update, low crawl activity, and “No problems” host status remain historical observations. The baked-peaches live inspection's “Page can be indexed” is user-supplied eligibility evidence, not an indexing confirmation.

## Confirmed defects and fixes

| Defect in baseline output | Scope | Reviewed source fix / after result |
| --- | ---: | --- |
| Incomplete microdata Recipe on `<article>`, with only name/description, alongside complete JSON-LD | All 5,515 recipes | Remove `itemscope`, Recipe `itemtype`, and associated `itemprop` attributes in `src/templates/recipe-page.js`. One JSON-LD Recipe, zero microdata/RDFa Recipe entities per recipe. |
| HowToStep URLs point to nonexistent `#step-n` targets | All 5,515 recipes | Add stable IDs to the corresponding method list items. Every declared instruction target exists and its text agrees. |
| Complete `totalTime` asserted despite required untimed stages disclosed visibly | 445 recipes | Omit unsupported totalTime, retain supported prepTime/cookTime and visible lower-bound explanation. No minutes invented. |
| Search declares an ItemList of recipes not present in original HTML | `/search/` | Directory template emits that CollectionPage list only when the server-rendered index exists. Preserve breadcrumbs and search behavior. |
| Modification fingerprints miss computed recipe facts and changed collection/prose content | Shared date registration | Track meaningful timing/nutrition/image/review facts; track main content, links, images, JSON-LD and descriptions on other intended pages. Seed additional collection fingerprints without refreshing unchanged dates. |
| Child audit crash can be swallowed if it lacks a `✗` diagnostic | Shared check runner | Preserve a nonzero result for crashes, spawn failures and output overflows; regression checked. |

The baked-peaches source proves the duplicate cause: the old shared article declares `itemtype="https://schema.org/Recipe"`, while its separate JSON-LD contains the ingredients, instructions, yield, author and timing. Production HTTP responses followed from the hostname probes independently show one JSON-LD and one microdata Recipe there. Source and generated pages have no RDFa Recipe. No first-party JavaScript Recipe injection was found. The browser-rendered local output was checked across every recipe layout; production rendered DOM with third-party scripts could not be verified because Chromium rejected the environment's certificate chain. This is a verification limit, not proof of a production certificate defect.

Existing breadcrumbs, publisher/organization, FAQ and honest media/review declarations are preserved. Author name/profile, yield, ingredients, steps, supported times and dates were compared with source and visible HTML for every recipe. No reviews, ratings, nutrition, author identities, videos, cooking experience or step images were added.

Recipe markup corrections genuinely change all 5,515 recipe pages, so their modification dates move once to October 20. The search schema correction moves only `/search/` among the other pages. **355 other page dates remain unchanged.** Rebuilds do not refresh dates just because the clock changes. Publication dates are unchanged. Sitemap-index child dates reflect their entries, and feed update dates follow actual changed recipe dates.

## Live HTTP, host and sitemap findings

Initial live records span approximately **15:14–15:22 UTC**. Four workers were globally limited to five new requests per second, with bounded retries and pauses on throttling/server failures. The later retry trips a circuit breaker immediately on the environment proxy's transport failure.

* **1,334 distinct intended catalogue destinations returned HTTP 200**, including 116 export URLs. This includes one recipe verified as the final destination of hostname probes. Their canonicals match, robots permit crawling, and no restrictive meta or X-Robots-Tag header was returned. This proves accessibility at the recorded time, not indexing.
* **4,537 catalogue destinations remain unverified live.** Ten initial records received the same 215-byte Envoy transport-failure response, identifying `envoy://cloudflare_https_tunnel/`; others were not reached. Later retries failed even for previously successful pages and Google’s test tool. These proxy responses are not counted as confirmed origin 503 errors.
* Both `/sitemap.xml` and `/sitemap-index.xml`, all 12 child XML files, and `robots.txt` returned 200 before transport failed. XML is well formed; all entries use the preferred absolute canonical origin, are unique and correspond to intended output. The old sitemap “Couldn't fetch” screenshot is not reproducible in these successful requests. A transient Google fetch or a server/CDN event remains possible; no Google-side diagnosis is inferred.
* Established preferred hostname remains **https://weeklydelight.com**. HTTP and www probes for home, baked peaches and a category preserve paths and resolve there. HTTP+www currently takes two 301 hops; HTTPS+www and HTTP apex take one. There are no observed loops or irrelevant destinations. No hostname configuration change was needed.
* Missing slash and explicit index.html probes redirect to the preferred recipe URL. Two nonexistent page/recipe probes return 404. Protected contact helper returns 404; obsolete contact result routes 302 to contact. The direct 404 document is 200 with noindex, while actual missing routes correctly return 404.
* The sitemap is unchanged in membership. No sitemap was deleted, resubmitted or repeatedly refreshed. No canonical recipe slugs were changed, redirected or removed.

The [URL CSV](url-audit.csv) has **5,915 unique URL rows**: 5,871 intended pages, 13 redirect sources, 10 filter alternatives, 4 utility/helper documents, 2 missing-page probes and 15 sitemap/robots endpoints. It distinguishes reviewed output from live observations and includes the requested status, canonical, indexability, sitemap, reachability, structured-data, action and remaining-issue fields.

### Images

All declared image paths in original HTML/srcset and Recipe/sitemap markup resolve to files in the generated build. [declared-images.csv](declared-images.csv) records **9,168 local image URLs**, including JPEG/WebP variants, process/shared images and the two explicit shared-image probes. Live image validity could not be completed: proxy failure occurred before the HEAD phase. These URLs are explicitly unverified live, not reported as HTTP passes.

The catalogue has 3,999 photographed recipes, 101 disclosed illustrations and **1,415 recipes with no image**. [missing-images.csv](missing-images.csv) lists those recipes separately. Missing images remain a rich-result limitation; no nonexistent URL or unrelated social-card placeholder was inserted into Recipe.image. Bulk image creation stays outside this task.

## Content and Claude ownership

No recipe catalogue, detail, rewrite or content-verdict ledger was edited. The [content review handoff](CLAUDE-REVIEW.md) and existing [236-record queue](../release-2026-10-uncertainties/codex-review-findings.json) retain exact identifiers, source paths, lines, evidence and required decisions for Claude.

The base tools currently report 0 confirmed consistency findings, 0 open review, 40 accepted exceptions in 39 recipes; food audit reports 3 specialist findings and 2 accepted pickle exceptions. The stronger earlier, still-unmerged technical review was independently rerun read-only against identical content sources: **224 open consistency review items in 220 recipes**, **3 confirmed raw-flour specification defects**, **4 raw-fish exemption review items**, and the existing specialist/exception items remain. Its 236-record queue covers 231 unique recipes. All 139 source files named by that queue are byte-identical between the two worktrees. Passing the current branch's build check does not resolve or invalidate those content concerns.

Historical resolution reporting reproduces 832 findings in 730 recipes: 560 recorded corrected, 272 exceptions, no missing disposition, plus 885 later records. These are review records, not 832 confirmed broken recipes or 832 independently revalidated corrections. Cooking and safety evidence has not been invented. Known duplicate exceptions and small collections remain review candidates; no bulk consolidation, deletion or noindex was performed.

## Verification and release limits

* `npm run build` and `npm run check`: pass; 5,875 non-ad HTML pages, 5,871 sitemap entries, 5,515 search records. The check runner now preserves child failures.
* Full independent static audit: pass, zero intended-page failures, broken links, missing canonical pages or nonexistent declared local images.
* Focused checks: 19 HTML/audit regressions, 14 crawl guards and 10 modification-date cases pass. They cover duplicate Recipe syntaxes, contradictory directives, canonical identity, untimed totals, invisible collection items, instruction targets and date stability.
* Rendered template coverage: 17 local cases across six recipe layouts, timed/untimed/no-image recipes, home, directory, category, combination, cuisine, ingredient, search and saved pages pass. The separate live-browser attempt is unavailable; it is not counted as a pass.
* Existing mobile/feature browser suite: 24 checks pass. Existing humanizer/self-tests: 64 pass. Local functional browser tests block third parties; they are not measurements of advertising field performance.
* Advertising comparison: source, configuration, ads.txt and sampled page advertising tags unchanged. CSS/design, recipe URLs and image assets unchanged.
* Google's Rich Results Test landing page was available through the web reader, but its interactive test could not run through the execution environment's failing transport/certificate path. **No Google Rich Results Test pass is claimed.** Perform the checks in [DEPLOYMENT-CHECKLIST.md](DEPLOYMENT-CHECKLIST.md) after review and approval.

Remote GitHub branch creation was attempted and rejected with **403 “Resource not accessible by integration”**. The exact blocked operation is creating `refs/heads/fix/sitewide-crawl-indexing-review` through the connected GitHub integration. Read access works. The reviewed local commits, bundle, patches, CSVs and evidence are the delivery; no remote PR, production merge or deployment is claimed.

Canonical/indexable output, rich-result validation and actual indexing are three separate outcomes. Remaining unknowns include Google crawl scheduling, canonical selection, content-quality evaluation, sitemap fetch history and the 1,982 exclusion URLs absent from the export. Aggregate report/validation updates may lag. Technical fixes cannot force Google to index every eligible URL.
