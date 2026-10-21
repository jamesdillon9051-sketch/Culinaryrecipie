# Review, deployment and follow-up

No production merge or deployment is authorised yet. The owner must approve the reviewed change before either occurs.

Before approval/integration:

1. Review the implementation commit, URL CSV and shared Claude/Codex handoff. Confirm one integration/regeneration owner; isolated Codex regeneration is already included for review.
2. Have Claude claim content files and address the exact queue. Retain the raw-flour defects, raw-fish evidence questions, short-wait/readiness questions, specialist cases and challenged pickle exceptions. A green technical check is not culinary or food-safety certification.
3. Reconcile the earlier `fix/recipe-validation-review` source patch deliberately. It overlaps the schema, date register, check runner, consistency validator and browser tooling. Preserve the new one-Recipe guard and real instruction anchors. Retain the stronger review findings rather than restoring weaker validation to get green output.
4. Rebase onto current main without overwriting Claude's active files. Acknowledge ownership before regenerating the integrated branch. Run `npm run build && npm run check`, the Python catalogue audit, focused regressions, browser suites and `tools/ads-unchanged.js --against <reviewed-base>`.
5. From a working connection, rerun the restrained live audit for the 4,537 unverified catalogue URLs and all declared images. Use the image CSV to include srcset/process assets. Resolve actual origin errors separately from environment transport failures. Inspect server/CDN logs for Googlebot sitemap requests around the screenshot time if accessible.
6. Run Google's Rich Results Test on reviewed representative code (all six layout variants, image/no-image, timed/untimed). Optional recommendations require evidence, not fabricated fields. Record Google's results separately from local checks.

After explicit approval and deployment by the owner/integration owner:

1. Confirm deployed commit and inspect original production HTML for one Recipe entity, matching visible ingredients/instructions/yield, real step targets and supported times. Test rendered DOM with third parties enabled from a trusted browser.
2. Verify home, recipes, each collection type, search, and every unverified URL: 200, correct canonical, allowed robots, no restrictive X-Robots-Tag, substantive HTML and expected identity. Verify missing routes return 404 and hostname/slug redirects preserve paths.
3. Fetch both sitemap aliases and all children; compare membership and lastmod with the reviewed build. Check robots and declared image HTTP statuses/content types. Unchanged rebuilds must not refresh dates.
4. Run Google's live URL Inspection and Rich Results Test for baked peaches and representative variants. Eligibility is not indexing; keep Google's recorded and live results separate.
5. Leave the working sitemap submission in place. Do not repeatedly delete/resubmit it. If a new Google fetch fails, retain its exact time/status and inspect origin/CDN logs before changing otherwise valid XML.
6. Monitor crawl activity, sitemap last-read and Page indexing trends over subsequent report updates. Compare the same export cohort over time; obtain the remaining exclusions and individually confirmed indexed examples before making quality/consolidation decisions. No mass deletion/noindex based solely on the exclusion count.

Reproduction (no deployment):

```sh
npm run build
npm run check
node tools/crawl-guard-test.js
node tools/crawl-dates-test.js
python3 tools/crawl-audit-test.py
node tools/crawl-manifest.js > /tmp/crawl-manifest.json
python3 tools/crawl-audit.py --manifest /tmp/crawl-manifest.json --out /tmp/crawl-static.json --gsc-table docs/crawl-audit-2026-10-20/search-console/Table.csv --gsc-metadata docs/crawl-audit-2026-10-20/search-console/Metadata.csv --strict
node tools/ads-unchanged.js --against 40a2386f0f0b75eeac0ec54570f619b07f1f2a66
# With optional Playwright installed and the local preview server running:
NODE_PATH=/tmp/culinary-browser/node_modules node tools/crawl-browser-test.js /tmp/crawl-manifest.json /tmp/crawl-browser.json
NODE_PATH=/tmp/culinary-browser/node_modules node tools/site-browser-test.js
# Live read-only verification: fresh evidence file, rate limited, stops on transport failure.
python3 tools/crawl-live.py --out /tmp/crawl-live.jsonl --images-from docs/crawl-audit-2026-10-20/declared-images.csv
```
