# First five of the requested 500recipes

This is an incomplete expansion: five complete review drafts, 495recipes remaining; no merge or deployment. The500-lead file is research, not 500finished recipes. Canadian recipe drafting is still pending.

## Source and originality review
Exact source URLs and numeric fields are in FIRST-BATCH.json. New recipe prose and methods were independently written; sources supply ingredient/method facts. No cooking/testing experience or reader ratings were invented. Metric cup conversions are rounded adaptations, not laboratory measurements. The bread's fine-salt quantity is half the source kosher-salt quantity, as its source specifies; milk is rounded to 190 ml.

- Cowboy pie differs from sausage-casserole (a stock/tomato stew) and cottage-pie (minced beef gravy): baked beans/barbecue sausage filling with a potato and cheese cap.
- Chicken cobbler uses pre-cooked chicken, broccoli, condensed sauce and a loose biscuit batter; existing chicken-pot-pie uses browned raw thighs, flour-thickened cream sauce and pastry.
- Cheese/herb quick bread is chemically leavened yoghurt batter; garlic-bread starts with a finished baguette and cheddar-jalapeno-bread is a kneaded yeast dough.
- Chocolate concrete is a firm cocoa biscuit slab, not a moist brownie or sponge.
- Hundreds/thousands biscuits use a wheat/rice-flour crumb and white-chocolate icing, unlike existing cut-out sugar cookies and royal icing.

Automated volume dedupe also passes, and none of the five slugs is in the retired-recipes register. A source review is not kitchen validation.

## Timing and indexing safeguards
The parser ignores waits below 15 minutes. Three new explicit timing records count source-stated waits: bread 5 + 10 = 15 minutes, cobbler 10 minutes, concrete 5 minutes before cutting. Existing seven overrides and all existing recipe source remain unchanged. These records correct elapsed totals; they are not invented cooking evidence or waived warnings. Bread is 80 minutes; cobbler 63–68 minutes. Concrete 45–50 minutes remains a floor because further cooling is untimed. The other explicitly untimed recipes also omit Recipe.totalTime and generated complete-time promises. Visible wait labels name cooling/resting, not unrelated ingredient draining.

A separate content-date regression fixes a confirmed shared-directory-counter issue: the numeric count in the generic All N recipes directory link no longer changes another collection's fingerprint. Actual collection counts, text and navigation targets remain meaningful. Thirteen date-regression fixtures pass. On this base all 353 affected collection records already had 25 October dates; no existing page's lastmod date was refreshed, and all 5,455 existing recipe date/hash records are unchanged. The normalized fingerprints are persisted for stable future builds.

All 5,815 intended URLs are reachable through ordinary anchors. Each new recipe occurs in the sitemap once, has one primary Recipe, a self-canonical, indexable directives, full initial HTML and working step anchors. New pages have 17–20 incoming linked pages and shortest depth 1–2. Ten rendered desktop/mobile cases pass, including exact 63/80 minute totalTime checks and omission for untimed recipes.

All five lack real photographs. No nonexistent or unrelated Recipe.image is inserted; this limits recipe rich-result eligibility. Nutrition is calculated/withheld by the existing tier rules; no estimates, ratings, videos, medical promises or cooking evidence were fabricated. Ads and design are preserved. No Google Rich Results Test or live production/indexing confirmation is claimed for these unpublished pages.

## Verification
Full build/check pass: 5,819 HTML pages, 5,815 sitemap URLs, 5,460 search records. Advertising comparison passes against 373f10a67f. A repeated build changes no compared generated file or date register; exact file count is in release-first5-rebuild.json. Source and generated evidence are retained alongside this report.

Initial draft checks caught stale README/social-card counts and a negated testing phrase; all were corrected, the derived assets regenerated, and full checks rerun. Manual timing/visual review caught skipped short waits and a wrong inferred wait label; both were corrected before final verification. No existing audit rule or food-handling/consistency verdict was relaxed.

Generated HTML retains the existing templates' indentation on empty lines. Git reports whitespace-only warnings on those lines; source/document whitespace checks pass. No recipe audit warning was disabled, and HTML/indexability checks pass.
