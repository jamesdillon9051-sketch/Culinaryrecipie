# Weekly Delight: Google indexing follow-up
23 October 2026 · Review only · No merge or deployment

## Result and current repository state
The shared technical defects that could be safely fixed in source are corrected and tested on `audit/google-indexing-followup-2026-10-22`. Source commit: [e822110d7075d4f2917559b465a1d15ac61f23c7](https://github.com/jamesdillon9051-sketch/Culinaryrecipie/commit/e822110d7075d4f2917559b465a1d15ac61f23c7).

Base/main: `9ebb8489fcd60909be13623c24b25a86b5dbd115`, rechecked through GitHub after the execution environment failed. PR #26 merged on 22 October at 20:14:52 UTC. Its photo work, eight diet-label removals and egg-yolk correction are already in main. The older “not merged” passages in docs/HANDOFF.md are dated history. PR #21 remains an open draft at `21c77888338d683e58ed5a998da6db76ca62e5c4`; its small optional step-name correction is included here without importing its old tools/check.js.

Claude owns recipe content, food-safety dispositions and final combined regeneration. Codex owns these technical sources/tests and independent review. No catalogue/detail file, photo, advertising configuration or generated production page was committed by this follow-up.

A local build cannot establish Google's indexing decision. No individual URL is labelled indexed in this report.

## Coverage and reconciliation
| Source / page type | Exact count |
| --- | ---: |
| Recipe source records and generated recipe pages | 5,515 |
| Categories | 10 |
| Category/cuisine combinations | 193 |
| Cuisines | 92 |
| Ingredient hubs | 51 |
| Other intended indexable routes | 10 |
| Intended indexable catalogue total | 5,871 |
| Unique URLs across all 12 child sitemaps | 5,871 |
| Ordinary followable HTML link edges | 250,155 |
| Orphan intended routes / broken internal links | 0 / 0 |
| Maximum shortest navigation depth from home | 2 |
| Fragment links / unique checked targets | 33,821 / 16,918 |
| Non-ad HTML files checked | 5,875 |
| Additional intentional noindex ad-frame files | 3 |
| Historical Search Console export rows | 1,000 |

The four non-ad utility/error pages outside the sitemap intentionally use noindex. All 5,871 intended routes have their expected preferred HTTPS non-www canonical, substantive initial HTML, unique identity and no accidental noindex/contradictory local robots directives. Declared local image files exist. Every intended route is reachable with normal anchor links, so client filtering, search actions and “Show more” are not the sole discovery path. No new giant link lists or artificial pagination were added.

All 1,000 supplied Search Console examples map to the intended catalogue: 920 recipes, 40 category combinations, 19 cuisines, 17 ingredients, one category and three other pages. Metadata calls the issue “Discovered - currently not indexed”; row “Pending” is validation state. “1970-01-01” is an unavailable/sentinel crawl value, not an actual 1970 crawl.

Historical screenshots described 2,982 excluded URLs; 1,982 of those historical affected identities were not supplied. Neither the rest of the catalogue nor the unlisted 1,982 are confirmed currently unindexed. No individual confirmed-indexed comparison URLs or fresh account-level reports were supplied; a recent decline/deindexing cannot be established from this evidence.

[URL-level CSV](url-audit.csv) covers all 5,871 intended URLs and now uses the recovered original live records: exactly 1,216 successful origin responses and 4,655 origin-unverified results. Exact recipe identities, timestamps, canonical/header observations and request IDs are retained in the evidence archive. The temporary execution disconnection did not lose the saved logs. These are dated crawl observations, not a new crawl or proof of current Google indexing.

## Confirmed source defects and fixes
| Defect | Scope and fix |
| --- | --- |
| Generated “in N minutes” / “Ready in” promises ignored an explicitly unquantified required stage | Gate generated title/description timing clauses on quantified complete elapsed time. All 443 untimed recipes are covered. Authored claims remain separately assigned to Claude. |
| Shared description padding promised nutrition where the page withheld figures | Split truthful general collection clauses from recipe-only nutrition clauses, used only for tiers that display calculated figures. All 1,051 withheld-nutrition recipes are guarded; 48 formerly emitted unsupported nutrition promises become zero. No figures invented. |
| Ingredient-hub minimum time used prep + cook, excluding waits | Use positive finite complete elapsedTime and exclude explicitly untimed recipes from the claimed minimum. An entirely untimed hub makes no numeric minimum promise. |
| Cuisine index claimed “Twenty-nine cuisines” while listing 92 | Derive the heading from the actual rendered cuisine list. |
| Category metadata/lede promised interactive filters on static hubs | Describe cuisine browsing and the real linked full recipe directory's filters. |
| HowToStep.name was “Step 1”, “Step 2”, etc. | Omit this optional field across all 31,893 instructions. Keep the complete visible text, order and fragment URL; do not invent action headings. |
| Duplicate audit success text implied there were no duplicate candidates despite 15 acknowledged exceptions | Report no new rule matches and explicitly state the 15 historical pairs still need editorial comparison. No rule, allowlist or warning was weakened. |

Changed source/test files:
- src/lib/seo.js
- src/build.js
- src/templates/pages.js
- src/templates/recipe-page.js
- tools/check.js
- tools/duplicates-audit.js
- tools/seo-claims-test.js (new)
- tools/taxonomy-metadata-test.js (new)
- tools/recipe-step-schema-test.js (new)

Google recommends short action summaries for optional step names, excluding numbered labels: [Recipe structured-data guidance](https://developers.google.com/search/docs/appearance/structured-data/recipe#how-to-step).

## Duplicate Recipe investigation
The historical baked-peaches screenshot appeared to show two Recipe entities. Current original HTML for that URL, byte-equal to main when fetched successfully, contains one Recipe JSON-LD and no Recipe microdata/RDFa. The accidental shared microdata entity was already removed in merged PR #17. Catalogue-wide source checks also find one primary Recipe on every recipe page. The six shared layouts and additional untimed/no-image/Organization-photo variants pass serialization checks; observed desktop Chromium cases also pass.

Breadcrumb and Organization information remains. Every Recipe schema property except the optional generic step names is unchanged across all 5,515 generated recipes, including author, image, ingredients, instructions, yield, timing and dateModified. No reviews, ratings, nutrition, videos, step images or cooking experience were fabricated.

Google's current required recipe-rich-result fields include a relevant image. There are 5,126 real-photo heroes, 101 disclosed legacy illustration heroes and 288 recipes without a hero. Missing image-required eligibility is reported honestly; it is not by itself proof that ordinary web indexing is blocked. No unrelated social card or nonexistent image URL was substituted.

## Live findings and unresolved hosting behavior
On 22 October, 61 unique URLs produced 80 observations: 60 HTTP 200, 16 HTTP 307, two HTTP 301 and two HTTP 404. The 16 temporary redirects spanned ten URLs and repeated the requested URL as Location, including robots, sitemap and deep-page observations. Some requests alternated between 200 and 307. These need hosting tracing; repository .htaccess uses 301 rules and does not explain a 307 loop. The generating CDN/upstream/intermediary and Googlebot impact are unverified.

All 12 child sitemaps eventually returned well-formed XML equal to main, with 5,871 unique preferred canonicals. A successful fetch does not erase the intermittent redirect evidence. Missing test routes returned proper 404/noindex. Ten declared images returned 200 and decoded; CDN WebP content negotiation was not treated as stale-byte evidence. No origin 403, 429, unexpected authentication/challenge or origin 5xx was confirmed in the initial probe.

The 23 October full-catalogue run used four workers, approximately 4.88 ordinary requests/second, no Googlebot spoofing and no bypasses. All 356 nonrecipe routes and 860 recipes returned correct 200 HTML: 1,216 successes, zero source/body differences or origin-confirmed issues. Then the execution proxy failed while requesting /recipes/canederli/, reporting an envoy cloudflare_https_tunnel transport error. This is not a confirmed website HTTP 503. The run stopped: 4,654 URLs were not requested and one origin response was unavailable, leaving 4,655 origin-unknown URLs. A single ordinary robots recovery control at 03:36:16 UTC reproduced the proxy failure; no more site requests followed.

The execution environment later disconnected entirely with HTTP 409 environment_offline. Authenticated hPanel access and Googlebot logs are unavailable. [Hostinger investigation and support draft](HOSTINGER-HANDOFF.md) includes retained times/request IDs and conditional settings instructions. No hosting setting was changed and no support message was sent.

## Verification: completed versus unavailable
The exact nine source files passed an isolated build, full check and repeat build before disconnection:
- Build passed (31.21 s); full check passed (313.11 s): 5,875 HTML, 5,871 sitemap URLs, 5,515 search records.
- Repeat build passed (29.97 s), changing zero of 17,341 files or date/hash records.
- Advertising comparison passed against both main base 9ebb8489 and ac8dbc13.
- Focused regressions passed: 5,515 recipes; 443 untimed and 1,051 withheld-nutrition recipes; 31,893 instructions; nine serialized variants; dynamic cuisine/category metadata and hub wait-time cases.
- git diff --check passed; independent code review found no blockers.
- Search records/real-review gating are already in merged main. The highest-rated option is hidden without actual published reviews; no seeded ratings are added by this branch.

Expected regenerated differences: 427 descriptions, 26 titles (444 URLs in their union), one H1 and 31,893 optional step names. Zero recipe content date/hash changes; 291 collection date/hash records change because their rendered metadata/navigation changed. Rebuilding again does not refresh dates. No recipeMarkup version bump or blanket lastmod update was introduced.

Fresh recipe-consistency tools report zero confirmed/open/cooking/specialist items in their current rules, 40 documented exceptions across 39 recipes and no duplicate/stale entries. Food-handling tools report zero confirmed/open items, three specialist dependencies, two documented exceptions and no duplicate/stale entries. Those results do not close the separate historical 236-item editorial queue or establish cooking/safety evidence.

The recovered Chromium report confirms all 42 desktop/mobile page cases and both search/filter control flows passed, with zero failures, zero runtime errors and unchanged source/output inputs. Cases cover all six layouts, untimed and withheld-nutrition recipes, missing images, Organization photo credits, home, cuisine/category indexes, category combinations, ingredient hubs and search. Controls cover filters, quickest sort, search results, absent unsupported rating options and mobile navigation. Third-party requests were blocked only in the local test; production ads were preserved and compared separately. Google's Rich Results Test was not run for this branch; local/browser validation is not Google validation.

During a temporary execution disconnection, source was safely reconstructed through GitHub: every file matched its previously tested SHA256 exactly, then was fetched back and checked again. After the environment recovered, the original logs, browser report and complete live CSV were retrieved and verified. [verification.json](verification.json) records the completed checks and hashes. [Evidence ZIP](WeeklyDelight-Indexing-Evidence.zip) contains raw reports/logs, exact live rows, original redirect evidence, static summaries and the complete browser report. The source worktree is synchronized with the published review branch; no source changed after its passing checks.

## Claude: exact remaining handoff
[CLAUDE-HANDOFF.md](CLAUDE-HANDOFF.md) assigns integration steps and content review. [Authored timing CSV](authored-time-claims.csv) gives every one of the 37 still-present original phrases across 35 recipes, exact source paths, current record lines, fields and untimed evidence. [Full historical timing reconciliation](authored-time-reconciliation.json) retains all 72 old rows; 35 changed phrases are not silently closed.

The separate 236-record queue remains stored as 231 open / five requires_specialist at its historical base. Current validators and historical editorial review measure different things. Review the 152 short-wait allocations, [15 acknowledged duplicate pairs](duplicate-review.csv), specialist/supplier/pH dependencies and [70 small collections](small-collections-review.csv) on their evidence. Do not mass delete, redirect or noindex pages to reduce Search Console counts.

## Deployment and follow-up checklist
1. Review this source commit and Claude's content dispositions. Claude integrates agreed changes on a separate review branch; do not import stale generated output or overwrite active content work.
2. Run npm run build, npm run check, npm run selftest, relevant focused regressions and ad comparisons; repeat build and confirm no second-build date/output churn. Review generated file/date differences.
3. Review the passing mobile/control report, run Google Rich Results Test on representative variants, and finish the incomplete live coverage when transport works. Hosting owner traces self307 evidence and verified crawler requests.
4. Obtain owner approval before merging/deploying. Deploy complete generated pages/assets/sitemaps together; preserve URLs, design, monetization and error statuses.
5. After deployment, verify correct production revision, robots and every sitemap, preferred-host deep redirects, representative schemas, missing-route 404s, and affected Search Console examples.
6. Use Search Console for current Page indexing, Crawl Stats, selected canonical, manual actions, security and removals. Inspect a small useful set and request recrawl after meaningful fixes; avoid repeated bulk resubmission.
7. Monitor subsequent Google crawl/indexing observations. Google controls discovery scheduling, canonical selection, inclusion and ranking; technical fixes cannot guarantee all pages or traffic.

[Official Google comparison matrix](GOOGLE-GUIDANCE.md) lists sources and distinguishes confirmed defects, already-fixed issues and remaining unknowns.

Downloads: [PDF handoff](WeeklyDelight-Indexing-Handoff.pdf), [full URL CSV](url-audit.csv), [before/after metadata](metadata-changes.csv), [evidence ZIP](WeeklyDelight-Indexing-Evidence.zip).
