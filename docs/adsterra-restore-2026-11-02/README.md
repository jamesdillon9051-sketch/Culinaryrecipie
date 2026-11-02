# Adsterra restoration — 2 November 2026

The owner requested the existing Adsterra links on all pages again, after approving and deploying the redesign. This restores the saved advertising configuration on the redesigned site; the paused recipe expansion is not included.

Base: `7d65b8339af7c42d8c9a217a1d72c2f86c4e367d`. Branch: `fix/restore-adsterra-2026-11-02`.

## Change

`src/data/ads.js` now has `enabled: true`. All other configuration values, publisher keys and URLs are identical to the base: social bar, native banner, 300×250 banner and 320×50 banner. The existing deferred loader, reserved dimensions, separate framed documents and placements are reused. The popunder remains unconfigured. Grow, analytics, consent settings, `ads.txt`, design, recipes and their URLs are unchanged. The privacy generator now describes the active advertising.

The first build exposed a modification-date bug: advertisement labels inside the main element were counted as editorial updates on 360 collection/information pages. `src/lib/content-dates.js` now excludes only the generator's non-nesting `aside.ad-slot` wrappers from content fingerprints. Ordinary asides and real privacy-policy changes still count. Four regression cases were added to `tools/crawl-dates-test.js` (14 total). The temporary generated date register was restored from the branch base before regeneration; no dates were edited by hand. The corrected build changes only `/privacy/` in the register.

## Coverage and verification

Results are recorded in the accompanying JSON reports. Coverage is checked against every generated content page, not just representative recipes. Each of 5,932 pages has two native placements, one social-bar loader, one 300×250 frame, one 320×50 frame and the deferred loader. The three ad-only frame documents are noindex/nofollow and are not sitemap pages.

The 12 ad integration browser cases cover home, category, recipe and privacy pages at 320, 390 and 1440px. Ad-network scripts are fulfilled with local no-op responses, so the checks verify loading, isolation and idempotence without executing creatives or generating advertising impressions. Actual advertiser selection, fill and revenue are not established by these tests.

A complete before/after comparison confirms all 5,555 Recipe JSON-LD objects, recipe data, sitemap URL membership and publication dates are unchanged. Only the advertising configuration source changes among data/settings files. The only changed content-date record is the privacy page, for its real policy-text change.

After deployment, check fresh HTML for the social-bar/native loader markers, both framed banners and the local loader on representative page types; check all three frame URLs return 200 and carry the original unit URLs and noindex directives. Cached responses may lag the Git deployment. Do not click ads as a test. No Google indexing outcome is claimed.

Final `npm run build && npm run check` passed: 5,932 content pages, 5,915 sitemap URLs and 5,555 search entries. Six existing decorative-image empty-alt warnings remain unchanged. All 47 existing design/feature browser checks and 12 advertising integration cases passed, with no browser failures. The 14 modification-date regression cases passed. See `verification.json` and `final-check.log`.
