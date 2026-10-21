# Weekly Delight: further Google reach audit, 21 October 2026

The current catalogue is technically discoverable in the generated HTML, and the live sample confirms the latest deployment. The strongest remaining opportunities are relevant recipe photography, evidence-based recipe review and usefulness, and measurement through current Search Console data. There is also a small shared structured-data correction ready for review. None of these findings establishes why Google has excluded a particular URL, and none guarantees indexing or traffic.

## State and ownership

- Repository: `jamesdillon9051-sketch/Culinaryrecipie`.
- Audited main/base: `c8d95127862832f6f58e3717934dba1631483cad` (PR #20, merged 21 October at 07:52:43 UTC).
- Claude implementation already merged: `134d8177a3ca93aeb533dd07535f0e4772c86afe`. No open PRs existed when checked before publishing this review.
- New Codex branch: `audit/google-reach-2026-10-21`.
- New implementation: `7937897dd5d0a28154a19e37dd67079796973fc4`.
- Claude owns recipe-content corrections and regeneration of the shared output. Codex changed three technical files and added this audit/handoff. No catalogue/detail/rewrite/verdict file was edited. No new merge or deployment was performed.
- Main auto-deploys through Hostinger according to Claude's handoff; do not merge this review until integration and the owner’s approval.

The new Claude handoff was read before work. Its historical claims were independently checked against current source, generated output, live responses and GitHub metadata. Earlier “not merged” and Leche Flan 404 notes are superseded by the evidence below.

## Coverage and indexing limits

| Source | Exact current count |
| --- | ---: |
| Recipe catalogue / detail records | 5,515 / 5,515 |
| Catalogue / detail files | 62 / 388 |
| Intended indexable URLs | 5,871 |
| Recipes | 5,515 |
| Main categories / category-cuisine combinations | 10 / 193 |
| Cuisine / ingredient pages | 92 / 51 |
| Other intended pages | 10 |
| Generated HTML, including ad frames | 5,878 |
| Non-ad HTML | 5,875 |
| Helper/private/noindex HTML outside intended inventory | 4 |
| Child sitemaps / unique URL entries | 12 / 5,871 |
| Ordinary-anchor reachable URLs | 5,871 |
| Broken internal links / orphan URLs | 0 / 0 |
| Unique titles / H1 identities | 5,871 / 5,871 |

All intended URLs are reachable within two links of the homepage, using ordinary HTML anchors. There are 250,155 distinct followable edges. The sitemap index and `sitemap.xml` entry point, all 12 child files and robots.txt were checked live. All 14 XML files match the audited repository byte for byte; their children cover exactly the intended catalogue without duplicates.

The supplied Search Console CSV remains a **historical 1,000-URL subset**: 920 recipes, 41 categories/combinations, 19 cuisines, 17 ingredients and 3 other pages. It records “Discovered — currently not indexed” and Pending validation; `1970-01-01` supplies no useful last-crawl date. The identities of the remaining 1,982 URLs from the historical 2,982 total have not been supplied. No individual confirmed-indexed comparison URLs or current performance/query export were supplied. Current indexing status is unknown, including for technically accessible URLs. The old approximately 1,750 indexed count and October 12 aggregate update are screenshot history, not fresh measurements.

Live probing ran from 08:21:42 to 08:24:08 UTC with two workers, at most two request starts per second, bounded retries and backoff. Coverage was **277 targets**, including 63 intended pages: 32 recipes, 4 main categories, 6 category combinations, 6 cuisines, 5 ingredients and all 10 other intended pages. This is a stratified live sample, not a fresh HTTP crawl of all 5,871 URLs. An additional 39 HEAD checks covered public/private hosting paths and all passed their expected behavior.

## Confirmed findings and priorities

### 1. Missing images restrict recipe rich-result eligibility

**1,237 of 5,515 recipes (22.4%) lack a declared Recipe image.** Of the 920 recipes in the historical export, 181 have this gap. There are 4,177 photographed recipes and 101 with legacy illustrations; those illustration entries are counted separately and are not automatically certified as satisfying Google’s content requirements.

Google currently lists `image` and `name` as required Recipe properties. The image should depict the completed dish and must be accessible to Google. Missing images therefore prevent those pages from meeting the documented Recipe rich-result requirements. This does **not** establish an ordinary indexing block, and an image alone does not guarantee a rich result. Do not substitute a logo, unrelated stock photo, nonexistent file, invented step image or fabricated review.

The [1,237-row image list](missing-recipe-images.csv) supplies URLs and exact detail files. Prioritize genuinely matching, commercially usable photos and original photos from real cooks, using actual Search Console demand when available. Multiple aspect ratios are a Google recommendation, not a reason to invent additional images. Bulk sourcing was not performed in this audit.

### 2. Non-descriptive structured step names: source fix prepared

Current generated output contains **31,893 HowToStep objects across all 5,515 recipes**, each with `name: "Step N"`. Google’s Recipe guidance explicitly advises against such non-descriptive names. This is a guidance mismatch in an optional property, not evidence that the whole page cannot be indexed.

The template now omits the optional name while retaining the complete instruction `text`, numeric `position` and existing `#step-N` link. It does not manufacture step headings. Visible numbering and all unrelated schema remain unchanged.

Changed technical files:

- `src/templates/recipe-page.js`: remove the generic HowToStep name.
- `tools/recipe-step-schema-test.js`: new catalogue-wide serializer regression, verifying descriptive-or-omitted names, intact text, order and links.
- `tools/check.js`: run that regression in the normal check suite. Preserve this added entry when reconciling the older unmerged validator work.

The new test fails on the audited base at `margherita-pizza`, instruction 1, and passes after the correction for every instruction. An isolated verification build changes only the 5,515 recipe HTML files, and their exact byte differences are solely the removal of those names. Sitemaps and content-date records do not change. Shared generated output is deliberately left for Claude’s integration regeneration, so this correction is **not yet live**.

### 3. A recipe photo does not match its named dish

`https://weeklydelight.com/recipes/lasagna-bolognese/` uses a hero whose source is explicitly **“Aubergine Lasagne with salad - Jollof Café”**. The recipe instead specifies beef/pork Bolognese. The full-size served crop was visually inspected and shows the aubergine dish. This is a relevant-image problem even though both file URLs return successfully.

Exact ownership/evidence:

- Image metadata: `src/data/images.json`, key `lasagna-bolognese.hero`, source page `https://commons.wikimedia.org/wiki/File:Aubergine_Lasagne_with_salad_-_Jollof_Caf%C3%A9.jpg`.
- Served image: `/assets/img/recipes/lasagna-bolognese.jpg`; also used as Recipe.image and labelled as Lasagna Bolognese.
- Recipe: `src/data/details/italian.js`, identifier `lasagna-bolognese`, record beginning at line 97.
- `src/templates/pages.js`, About-page prose near line 947, claims every photograph is compared before publication. This example warrants a qualified statement based on actual review coverage, rather than a blanket assurance.

Replace the image only after a matching photo, licence and full-size crop are verified. The image metadata, source files and About prose were not changed. Six pairs of recipes also share identical hero-image bytes; these are [manual review leads](evidence/duplicate-photo-groups.json), not proof of duplicate recipes or a Google penalty.

### 4. Recipe accuracy and distinct usefulness need human evidence

The current normal check suite passes, including Claude’s food and consistency checks. That does not close the stronger unmerged review queue, certify food safety, or establish kitchen testing. All 26 provisional entries in `src/data/testing-notes.json` still say “not cooked”; the site already discloses that its recipes have not individually been tested.

Claude’s PR #20 fixes were independently confirmed in source and byte-matched live samples:

- `trenette-al-pesto`: ordinary wheat pasta is no longer labelled Gluten-Free (`src/data/catalog-59.js`, row near line 65).
- `edible-cookie-dough`: ready-to-eat treated flour is required (`src/data/details31/04b-desserts-and-holidays.js`, record near line 76).
- `cookie-dough-bites`: same specification (`src/data/details41/05-puddings-cakes-and-sweet-bakes.js`, record near line 495).
- `cookie-dough-bars`: raw topping flour is distinguished from the ordinary flour in the baked base (`src/data/details55/02-cookies-cakes-and-biscuits-b.js`, record near line 402).

Four old queue records are superseded: three raw-flour findings and edible-cookie-dough’s old 20-minute/cooling readiness claim. The [queue addendum](queue-addendum.json) records the evidence without altering Claude’s ledger. A manufacturer’s particular ready-to-eat product claim was not independently verified. The other **232 historical queue records are not newly confirmed defects** and were not fully reclassified in this pass. Reconcile the stronger `fix/recipe-validation-review` batch separately; it remains outside this branch.

For reach, prioritize actual cooks, corrected quantities and essential steps, clear timing allocations, relevant photographs and documented editorial review. Rotating headings or adding more generated recipes does not provide that evidence. Existing unresolved specialist questions include raw prawns/beef, acidification, long refrigerator storage and garlic-containing tare; do not invent safety evidence or cooking times.

### 5. Review small collections and overlapping recipes for real usefulness

There are **70 collections with fewer than six recipes**: 52 category combinations and 18 cuisines. The [collection list](small-collections.csv) records every URL and count. `/cuisines/bolivian/` and `/cuisines/uruguayan/` each contain one recipe; `/categories/lunch/scottish/` and `/categories/lunch/tunisian/` contain four. Ordinary navigation and substantive recipe cards are present. Size alone is not a defect or a reason to noindex.

The 15 existing alias/intent pairs in `tools/duplicates-audit.js` remain accepted exceptions. Examples are `moules-mariniere` / `moules-marinieres`, `rogan-josh` / `lamb-rogan-josh`, and `garlic-naan` / `naan`. They are candidates for side-by-side editorial and Search Console query review, not 15 newly confirmed duplicates. Distinct variants can be useful. The current detector finds no new exact-title, copied-method or placeholder failure. Do not bulk delete, redirect, canonicalize together or noindex these pages merely to lower the exclusion count.

### 6. The directory is a measured performance investigation target

At both 390 px and 1,280 px, `/recipes/` creates **13,746 DOM elements**. Its HTML is 457,983 bytes, or 86,536 bytes with the local server’s gzip; that compression figure describes the local test, not a production transfer measurement. The full A–Z links keep the whole catalogue discoverable, which is valuable.

Investigate ordinary, crawlable pagination or a smaller useful directory with equivalent HTML navigation if real mobile performance warrants it. Do not remove those links until replacement paths exist. This audit makes no claim that the DOM count itself causes a ranking penalty or that Core Web Vitals fail. Keep ads and consent intact, and measure the real consent/ad states before choosing a performance change.

The public PageSpeed API returned its own quota 429. Chromium’s live HTTPS navigation failed certificate trust in this environment; verification was not bypassed. Trusted Python HTTPS/source checks succeeded. Consequently there is no current Google field-performance score or completed live rendered-DOM audit here, and no Google Rich Results Test result is claimed.

## What now passes

- Current generated output: all 5,871 intended pages have the expected canonical, unique identity, usable HTML, compatible robots directives, source-matching ingredients/instructions/yield/author/timing, reachable step targets and no accidental duplicate primary Recipe declarations.
- The old incomplete microdata duplicate is absent throughout the generated catalogue. Live baked-peaches source has one JSON-LD Recipe, zero Recipe microdata and zero Recipe RDFa; the live browser’s possible third-party injection could not be fully retested because of the environment certificate limitation.
- All 63 intended live pages return 200, exactly match audited generated bytes, and expose no restrictive X-Robots-Tag. No site 403, 429, challenge or 5xx was seen in the sampled targets. This does not prove every unsampled production URL works.
- Both sitemap entry points and all 12 children return well-formed XML and match the repository. No artificial rebuild-only date update was made.
- HTTPS non-www is the established destination. Nine HTTP/www homepage and deep-route probes preserve paths with no loops. HTTP www takes two relevant permanent redirects; shortening this is a minor hosting improvement, not a present crawling blocker.
- All 178 newly added WebP photos return 200 with image content types. Three additional declared JPG checks pass, including Leche Flan. The old rollout concern is resolved in this sample.
- Four 404s are expected: two deliberate nonexistent pages, an unconfigured `/image-credits/` probe, and an unconfigured `trenette-al-pesto.jpg` probe. Neither unconfigured path is a declared catalogue link/image; the real credits link is `/images-attribution.md`. These probes are not reported as broken recipe assets.
- The new isolated build and complete check pass: 5,875 checked HTML pages, 5,871 sitemap URLs and 5,515 index records. Independent before/after catalogue checks each find zero checked static errors; the image/collection limitations remain visible.
- Browser coverage: 17 local template/crawl cases before and after, including all six layouts; 24 phone feature checks; 18 additional mobile/desktop cases. No unexpected overflow, missing loaded images, missing alt attributes or page JavaScript errors appeared in those cases. Local third-party ad/analytics requests were blocked by the test harness only. Production advertising was not changed, and the ad comparison passes.

## Search Console and DNS

A Google public DNS resolver returned two TXT records at 08:34:54 UTC, including one Google verification entry. It did **not** match the exact token in the attached Claude handoff. This can reflect a different property/account or cached/changed DNS; it does not establish the user’s current Search Console ownership state.

If verification is still pending, use the exact TXT value currently shown by the intended Search Console property, preserve other valid DNS records, confirm propagation and press Verify. DNS verification gives access to reports; it is not a prerequisite for Google to crawl the public site and does not force indexing. No DNS record or hosting setting was changed.

Once reports are accessible, export current Page indexing examples and Search results performance (pages and queries; recent 28 days compared with the preceding 28). Separate never-discovered, discovered-not-crawled, crawled-not-indexed, duplicate/canonical and indexed states. Prioritize accurate pages already earning relevant impressions and queries; use actual CTR, position and intent to choose titles, content and internal-link improvements. No keyword volume, traffic increase or current indexed count is invented here.

## Precise Claude handoff and release checklist

1. Review commit `7937897dd5d0a28154a19e37dd67079796973fc4` on `audit/google-reach-2026-10-21`, based on `c8d95127862832f6f58e3717934dba1631483cad`. Keep this schema change separate from the older unmerged validator batch unless deliberately reconciling it. Retain the new `tools/check.js` test entry during conflicts.
2. As integration owner, regenerate once on the review branch. An unchanged source build should change only 5,515 recipe HTML files, removing 31,893 generic names; the exact verification evidence is in `evidence/verification-build-diff.json`. Do not manually copy one example page or rewrite content dates.
3. Run `npm run build && npm run check`, the independent catalogue audit, the browser template/feature checks and `node tools/ads-unchanged.js --against c8d95127862832f6f58e3717934dba1631483cad`. Review any additional content changes independently before integration.
4. Reconcile the four queue addendum records with the original ledger. Review the remaining historical queue rather than reporting it completed because the base check passes. Claim shared source-file batches before recipe edits.
5. Review the Lasagna photo and About assurance. Plan real matching-photo work and evidence-based recipe testing; assess the small collections and alias pairs with exact page/query evidence before proposing consolidation.
6. Obtain the owner’s approval before merging into main; that merge may auto-deploy. No merge/deployment is authorized by this inspection report.
7. After approved deployment, check production recipe source and rendered DOM (one primary Recipe, supported step text/links, no generic names), image status/content, canonical/robots headers, both sitemap entry points, meaningful lastmod and all key mobile features. Run Google’s Rich Results Test where available and record its actual result separately from local checks.
8. In Search Console, inspect baked peaches, one new-photo recipe, one image-gap recipe and representative category/cuisine/ingredient pages. Record live-test access separately from indexed status and last crawl. Do not repeatedly delete/resubmit sitemaps or request inspection of thousands of URLs. Monitor recrawls, selected canonicals, rich-result reports, impressions and clicks over subsequent reporting updates; Google controls inclusion and ranking.

## Evidence and reproduction

- [URL-level CSV for all 5,871 intended URLs](url-audit.csv): supplied historical status, current static canonical/robots/schema/sitemap/graph results, explicit live sampling coverage, prepared action and remaining issue.
- [All 277 live probes](live-probes.csv) and [raw response metadata](evidence/live-responses.jsonl), including expected errors and retries.
- [Counts and reconciliation](evidence/summary.json); [exact isolated-build comparison](evidence/verification-build-diff.json); logs, browser observations and seven saved live page sources under `evidence/`.
- [Image gap list](missing-recipe-images.csv), [small collection list](small-collections.csv), [queue addendum](queue-addendum.json), [DNS observation](evidence/dns-verification.json).

For a fresh read-only static inventory, run `node tools/crawl-manifest.js > /tmp/reach-manifest.json`, then `python tools/crawl-audit.py --manifest /tmp/reach-manifest.json --out /tmp/reach-static.json --gsc-table docs/crawl-audit-2026-10-20/search-console/Table.csv --gsc-metadata docs/crawl-audit-2026-10-20/search-console/Metadata.csv`.

The optional `live-probe.py --out /tmp/reach-live` reruns the restrained live sample after `/tmp/reach-live/manifest.json` has been created with `node tools/crawl-manifest.js`. It sends read-only GET/HEAD requests and never submits forms. No browser dependency was added to production; optional browser tools require a separately installed Playwright/Chromium development environment with trusted HTTPS certificates.

Google guidance consulted on 21 October 2026:

- [Recipe structured data](https://developers.google.com/search/docs/appearance/structured-data/recipe): required image/name, representative images, optional descriptive HowToStep names.
- [Helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content): accuracy, real value, authorship and evidence of the work involved.
- [Core Web Vitals and Search](https://developers.google.com/search/docs/appearance/core-web-vitals): distinguish real-user measurements from local checks; good scores do not guarantee top rankings.

Technical accessibility, rich-result eligibility, quality and actual indexing are separate conclusions. This audit supplies evidence for the first two and review priorities for quality; only current Google reporting can establish Google’s current indexing and traffic outcomes.
