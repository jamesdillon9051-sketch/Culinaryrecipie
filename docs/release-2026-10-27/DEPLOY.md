# Deploying the 2026-10-27 release

Hostinger deploys the `main` branch, so this release goes live only when `claude/culinaryvault-recipe-site-mk9w9b` is merged into `main`. That merge is the owner's decision. Nothing in this branch has been merged or deployed.

## Before merging

Run each check on the branch, in a fresh clone or after `git pull`:

- [ ] `npm run build`: the build must leave no diff (`git status` clean apart from ignored files). A diff means the committed output is stale; rebuild and commit it.
- [ ] `npm run check` passes.
- [ ] `npm run selftest` passes.
- [ ] `node tools/ads-unchanged.js --against origin/main`: advertising is unchanged and Grow is on every page.
- [ ] `node tools/release-browser-test.js` passes (needs Playwright with Chromium).
- [ ] `node tools/feedback-test.js` passes (needs PHP 8.1 or later).
- [ ] `npm run package` builds `dist-public/`, with nothing private in it and every sitemap URL present.
- [ ] Read the About page's AI-assistance sentence and keep or remove it (README.md section 5 of this folder). If removed, rebuild, check and commit.
- [ ] Glance at `/`, `/categories/dinner/`, `/collections/`, `/weekly-plan/`, `/guides/`, a recipe and `/report/` in a local server (`npx serve .` or `python3 -m http.server`).
- [ ] Note the current `main` SHA (`git rev-parse origin/main`). This is the rollback point.

## Merging

Merge with a merge commit, not a squash, so the rollback below is a single revert. Hostinger's Git deployment then pulls `main` into `public_html`. If auto-deploy is off, use hPanel → Websites → weeklydelight.com → Git → Deploy.

## After deploying: exact checks

Run these from any machine. They read only.

1. **Live sample against the build.** One request at a time:
   ```
   python3 tools/live-sample.py --per-type 3 --paths /collections/,/collections/one-pan-dinners/,/weekly-plan/,/guides/,/guides/choosing-rice/,/report/,/my-plan/ --json /tmp/live-after.json
   ```
   Expect:
   - every page 200 and `matches_build: true`;
   - `/report/` and `/my-plan/` noindex, and the curated pages indexable and self-canonical;
   - one Recipe entity per recipe;
   - the host redirects still 301, and a missing page 404.
2. **Private paths:**
   ```
   node tools/private-paths-check.js --url https://weeklydelight.com
   ```
   Expect `/feedback/_lib.php` to answer 404 and the new public paths to answer 200.
3. **Feedback endpoints, unconfigured:**
   - `curl -s https://weeklydelight.com/feedback/report.php?status=1` should answer `{"ok":true,"configured":false}` until ACTIVATION.md section 1 is done.
   - Do not POST to it.
4. **Sitemap.** `https://weeklydelight.com/sitemap-index.xml` lists the chunks. The 13 curated URLs (`/collections/…`, `/weekly-plan/`, `/guides/…`) appear in them. `/report/` and `/my-plan/` do not.
5. **In a phone-sized browser:**
   - Open `/categories/dinner/`. The first cards are main dishes.
   - Open `/recipes/?course=main&time=30`. It lists quick mains.
   - On `/weekly-plan/`, press + and watch the shopping list change.
   - Open a recipe, follow "Report a problem with this recipe", and confirm the form names the recipe and says reports are not switched on yet.
6. **Search Console**, owner only:
   - Submit `sitemap-index.xml` again.
   - URL-inspect `/collections/`, `/weekly-plan/` and one guide, and request indexing.
   - Do not report anything as indexed until URL Inspection says so.
7. **Rich Results Test** on one recipe (for example `/recipes/pad-thai/`). It should still show one valid Recipe, with no new warnings compared with before.

## Rollback

The release changes only files in the repository, so a revert restores the previous site completely.

1. `git checkout main && git pull`
2. `git revert -m 1 <merge-commit-sha>`, then `git push origin main`. Hostinger redeploys the previous state.
3. Folders the release added (`collections/`, `guides/`, `weekly-plan/`, `my-plan/`, `report/`, `feedback/`) are deleted from `public_html` by the Git deploy only if Hostinger's deploy removes untracked files. If they remain, delete them in File Manager, or leave them: nothing links to them after the revert. `feedback/_lib.php` stays refused only while the new `.htaccess` rule is live, so delete the `feedback/` folder if the revert restores the old `.htaccess`.
4. The content-date register reverts with the code. Dates go back to their previous values. No date is invented.
5. If the feedback settings file and `feedback-data/` were created, they live outside `public_html` and are unaffected. Delete them only if the feature is being abandoned.

A partial rollback (keeping everything but one feature) is a normal change on a branch: switch the feature off in `src/data/feedback.js`, or remove a collection from `src/data/collections.js`, then build, check and merge.
