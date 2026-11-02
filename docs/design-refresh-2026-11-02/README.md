# Weekly Delight design review — 2 November 2026

The owner paused the additional-recipe project and requested a redesign, concerned that the existing design might contribute to pages not being indexed. This branch contains a design and accessibility change; it does not establish the cause of Google's indexing decisions.

- Production base: `dc27769d48631029461174110cbadacf868d9d7e` (PR #40).
- Review branch: `design/discovery-refresh-2026-11-02`.
- No merge or deployment is authorized. The separate recipe-expansion branch and its saved drafts are untouched.

## Preview

[Phone homepage](home-phone.png) · [Desktop homepage](home-desktop.png) · [Phone recipe](recipe-phone.png) · [Dark theme](home-dark.png)

The preview uses the existing recipe photographs. It adds no new recipes or images.

## What changed

The homepage now has one clearly labelled recipe feature, direct links into useful collections, a visible all-recipes link and a prominent search field. Recipe choices appear before the weekly plan, which remains available with its shopping list. Compact two-column cards, category tiles and cuisine links shorten browsing on phones. The forest-green palette, plain background, typography and simpler borders apply across the site; the existing dark theme remains available.

The header includes a direct search link on smaller screens and keeps the menu within narrow phone widths. A plain navigation fallback appears when JavaScript is disabled. Recipe cards and other `.reveal` content are now visible by default: previously their CSS opacity stayed at zero until the scroll observer ran. This is a confirmed usability problem when scripts do not run, not proof that Google failed to render these pages.

Recipe controls, ingredient checklists, filters, saved recipes, cooking mode, printing, weekly plans, feedback and existing search remain in place. No backend service was activated.

## Indexing findings and limits

On 2 November, the live homepage, `robots.txt`, `sitemap-index.xml` and `/recipes/baked-peaches-with-cinnamon/` each returned HTTP 200. The example recipe's canonical is its existing HTTPS URL. Its original HTML contains one Recipe JSON-LD entity and no Recipe microdata or RDFa. The historical duplicate-Recipe observation does not describe this live sample.

The reviewed production build has 5,555 recipe pages and 5,915 intended sitemap URLs. The before/after comparison preserves every sitemap URL and every recipe's complete Recipe JSON-LD object, including identity, ingredients, instructions, timing, image, author and dates. All recipe source/settings files and publication-date records are unchanged. Only the homepage content-date record changes, for its changed content; recipe dates were not refreshed for a visual rebuild.

There is no current Search Console inspection/export establishing the affected URLs' present indexing status. Four successful live requests do not establish site-wide HTTP reliability or Googlebot access. No URL is labelled indexed here without Search Console evidence.

Google recommends useful content, good mobile presentation, accessible main content and an overall good page experience. A cosmetic redesign is not a guaranteed indexing fix. See [Google's page-experience guidance](https://developers.google.com/search/docs/appearance/page-experience) and [Page indexing report guidance](https://support.google.com/webmasters/answer/7440203?hl=en).

## Files and ownership

Codex owns this design branch and regeneration. Recipe content, images, source data and all URLs are preserved from the production base.

| Source | Purpose |
| --- | --- |
| `src/templates/pages.js` | Homepage feature, search/discovery links and presentation |
| `src/templates/layout.js` | Shared header search link and navigation fallback |
| `src/assets/css/critical.css` | Palette, header, typography and homepage feature |
| `src/assets/css/main.css` | Cards, mobile grids, visible static content and footer contrast |
| `tools/design-browser-test.js` | Responsive, no-JavaScript and control regressions |

Generated HTML/CSS, the homepage's content-date record and its sitemap lastmod are regenerated from source. The owner's current disabled-ad setting stays disabled; Grow by Mediavine, analytics, consent configuration and advertising code retain their production settings. No warning, validator or evidence ledger was relaxed.

## Verification

Final build/check passed for 5,932 HTML pages, 5,915 sitemap URLs and 5,555 search entries. All 47 focused browser checks and all 18 existing release-browser checks passed; the latter covered 20 pages. A repeat build changed zero of 17,479 generated files/date registers. Advertising checks passed against the production base. Results are recorded in [verification.json](verification.json). Baseline `npm run check` passed with six existing decorative empty-alt warnings. The first candidate's full check caught insufficient footer contrast and a menu-breakpoint rule-format mismatch; the text was lightened and the existing breakpoint declaration retained in the recognized form, without changing the validator.

Run the focused browser checks with Playwright installed as a development dependency:

```sh
node tools/design-browser-test.js
```

`DESIGN_TEST_OUT` selects the artifact directory. The checks cover 320, 390, 768 and 1440px widths, all six recipe-layout variants on phone/desktop, dark mode, menu/search/save/cooking controls, and browsing without JavaScript. Third-party requests are blocked in local browser checks. These tests do not represent live Core Web Vitals, actual Grow behaviour, Google's Rich Results Test or Google indexing.

## After approval

1. Review the phone/desktop previews and PR diff, then approve the design branch before merge. Hostinger's production branch is `main`.
2. After deployment, check homepage, dinner category, directory, a photographed recipe and a recipe without a photograph on phone and desktop. Check menu/search, filters, saved recipes and recipe controls.
3. Confirm successful HTTP responses, unchanged canonical URLs and robots directives, one primary Recipe per recipe page, and preserved sitemap coverage. Check Grow and consent on the real host.
4. Measure field page-experience data when available and compare dated Search Console indexing/crawl reports. Monitor important URLs individually; do not repeatedly resubmit sitemaps or assume a redesign forces indexing.
