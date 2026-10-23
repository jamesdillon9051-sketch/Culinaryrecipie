# Official Google guidance compared with Weekly Delight
Reviewed 22-23 October 2026. Observations refer to base `9ebb8489` and the exact tested source snapshot in verification.json. None is proof of current Google indexing.

| Google-listed concern | Website evidence and action | Remaining limit |
| --- | --- | --- |
| Crawling/indexing can take time; a sitemap does not guarantee inclusion | Historical export has 1,000 examples, not the full historical 2,982. Full intended catalogue audited separately. | No fresh Search Console export or confirmed-indexed comparison set. |
| Server/network unavailability | 1,216 catalogue URLs returned correct origin 200 in the final run. Earlier 16 self-307 observations across ten URLs warrant host tracing. | Final run stopped on an execution-proxy tunnel failure; 4,655 origin responses unknown. |
| Redirect errors | Repository uses preferred HTTPS non-www and 301 rules; no 307 rule found. Preserve paths and slugs. | Trace the supplied HCDN request IDs to identify the actual generating layer. No authenticated hosting access. |
| Robots/noindex | All 5,871 intended generated pages pass local directives checks; four utility pages and three ad frames intentionally noindex. Robots eventually 200 with the expected body in earlier live tests. | Intermittent robots self-307 seen earlier; Googlebot experience needs host logs. |
| Canonical selection | 5,871 unique preferred canonicals, matching sitemap. | Google-selected canonical is unknown without URL Inspection. |
| Soft404/error templates | Substantive source HTML and identity checks pass catalogue-wide; representative missing URLs returned 404/noindex. | Remaining live coverage incomplete. |
| Links/JavaScript discovery | 250,155 ordinary followable HTML edges; all intended pages reachable within two links, no orphans. Content is server-generated HTML. | Backlink strength, demand and crawl scheduling remain unknown. |
| Sitemap coverage and lastmod | 12 children, 5,871 unique canonical URLs. No fabricated date refresh. Second build leaves 17,341 files/date hashes unchanged. | A successful local sitemap does not prove every future production fetch succeeds. |
| Structured data must match visible content | One primary Recipe per recipe, no Recipe microdata/RDFa. Optional numbered step names removed; text/order/anchors and every other Recipe property identical. | Local checks are not Google's Rich Results Test. |
| Required relevant Recipe image | Declared files exist; ten live images decoded successfully.288 recipes have no hero/image; no fake placeholder added. | These pages lack image-required recipe-rich-result eligibility, not necessarily ordinary web indexing. |
| Helpful, reliable, original content | Generated timing/nutrition promises corrected; authorship/testing disclosures preserved.37 authored claims across 35 recipes and 15 known duplicate pairs assigned toClaude. | No invented kitchen testing, measured pH, supplier evidence or reviews. |
| Scaled low-value pages | 70 collections with 1-5 recipes flagged for usefulness review; recipe source issues remain editorial tasks. | Scale or AI assistance alone does not establish a spam violation; no automatic mass noindex/deletion. |
| Mobile rendering/page experience | Representative HTML variants pass, desktop Chromium cases observed through category. All ads preserved. | Final mobile/control report inaccessible after workspace loss; no new field-performance data. |
| Manual actions, removals, security | No challenge/authentication observed in successful initial samples. | Search Console reports require owner access; cannot rule out manual actions/removals/hacking from local build. |

Sources:
- [Page indexing report](https://support.google.com/webmasters/answer/7440203?hl=en)
- [Google crawling/indexing FAQ](https://developers.google.com/search/help/crawling-index-faq)
- [Troubleshoot crawling](https://developers.google.com/search/docs/crawling-indexing/troubleshoot-crawling-errors)
- [Crawl budget](https://developers.google.com/crawling/docs/crawl-budget)
- [Technical requirements](https://developers.google.com/search/docs/essentials/technical)
- [HTTP status/network errors](https://developers.google.com/crawling/docs/troubleshooting/http-status-codes)
- [Robots specification](https://developers.google.com/crawling/docs/robots-txt/robots-txt-spec)
- [Canonical URLs](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- [Build a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Sitemap lastmod guidance](https://developers.google.com/search/blog/2023/06/sitemaps-lastmod-ping)
- [Crawlable links](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)
- [JavaScript SEO](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)
- [Recipe structured data, including optional HowToStep.name](https://developers.google.com/search/docs/appearance/structured-data/recipe#how-to-step)
- [Structured-data policies](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)
- [Helpful, reliable content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Scaled content abuse](https://developers.google.com/search/docs/essentials/spam-policies#scaled-content)
- [Mobile-first indexing](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing)
- [Page experience](https://developers.google.com/search/docs/appearance/page-experience)
- [Manual actions](https://support.google.com/webmasters/answer/9044175?hl=en)
- [Security issues](https://support.google.com/webmasters/answer/9044101?hl=en)
- [Temporary removals](https://support.google.com/webmasters/answer/9689846?hl=en)
- [Ask Google to recrawl](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl)

The repository's 140-160 character description band is an editorial/build rule, not a Google indexing requirement. A missing ownership TXT record affects Search Console verification/access; it is not itself proof of an indexing block.
