# Deploying only the public site, and how to go back

## Where things stand

Hostinger deploys this repository's `main` branch by Git into `public_html`. The whole repository is therefore in the web root: the source (`src/`), the tooling (`tools/`), the audit files, the README and CLAUDE.md. `.htaccess` answers 404 for those paths (`node tools/private-paths-check.js --url https://weeklydelight.com` checks it against the live host), but anything `.htaccess` forgets is public.

Nothing in this release changes the hosting. The owner decides whether and when to switch.

## The package

```bash
npm run build
node tools/package-public.js            # writes dist-public/ and checks it
node tools/package-public.js --zip      # also dist-public.zip, for an upload by hand
```

`dist-public/` holds an allow-list: the generated pages and assets, the sitemaps and feeds, `robots.txt`, `ads.txt`, `manifest.json`, `search-index.json`, `.htaccess`, `images-attribution.md` (the About page links to it), and `contact/` with `send.php` and its result templates. The check fails if anything outside that list or anything private (`src`, `tools`, `docs`, `backups`, logs, CSVs, Python, `package.json`, `README.md`, `CLAUDE.md`, a contact config file) is inside, if a sitemap URL has no file, or if a sample of pages links to a local file that is missing.

Measured on 2026-10-18: 15,084 files, 827.5 MB, all 5,871 sitemap URLs present, nothing private. Served with `php -S`, the package answers pages, and `/contact/send.php?status=1` answers `{"ok":true,"configured":false}` (no settings file on this machine). That is the expected answer until the owner adds the settings file described in `tools/contact-config.example.php`.

The contact settings file stays outside `public_html` (`private/contact-config.php` beside it, or wherever `WD_CONTACT_CONFIG` points). Switching what is deployed does not touch it.

## Two ways to deploy it

**A. A branch that holds only the package (recommended).** A workflow builds the site, runs `npm run check`, packages it, and pushes the contents of `dist-public/` to a branch such as `public-site` that has no other history. In hPanel, Git deployment is then pointed at `public-site` instead of `main`. An example workflow is in `deploy-public-site.example.yml` beside this file. It is not active: it has to be copied to `.github/workflows/`, and it needs the repository's permission to push. Both of those are the owner's decision.

**B. By hand.** Run the commands above, download `dist-public.zip`, and upload it with hPanel's File Manager into an emptied `public_html`. Simple, but every change needs repeating by hand, and Git deployment has to be switched off first or it will overwrite the upload.

Either way, `.htaccess` stays in the package. It still sets the caching, redirects, canonical host and 404s, and its private-path rules cost nothing.

## Before switching

1. In hPanel, take a backup of the website files (Files, Backups), or download `public_html` as it is.
2. Note the current Git deployment settings: repository, branch (`main`), install path (`public_html`).
3. Confirm the contact settings file is outside `public_html`.

## Rollback

- **To the current arrangement:** in hPanel's Git settings, point the deployment back at `main` with the same install path and deploy. That reproduces today's site exactly, private-path rules included. Restore the backup from step 1 if any files were removed by hand.
- **To an earlier package (option A):** the example workflow replaces `public-site` with a single fresh commit on each run, so the branch keeps no history of its own. To go back, run the workflow by hand (`workflow_dispatch`) on the earlier `main` commit you want, or revert the change on `main`, then deploy again in hPanel.
- **To before this release:** this release lives on `claude/culinaryvault-followup-release`. Until it is merged, `main` is unchanged. After a merge, `git revert -m 1 <merge commit>` on `main` and a redeploy return the site to the previous build. The tag `checkpoint/pre-followup-2026-10-17` marks the starting point (local to the working copy that made it).

## After any deploy

```bash
node tools/private-paths-check.js --url https://weeklydelight.com
curl -s https://weeklydelight.com/contact/send.php?status=1
```

Then clear Hostinger's CDN cache (hPanel, or the cache-clear call) and open a recipe page, a category page and `/recipes/` with a filter.
