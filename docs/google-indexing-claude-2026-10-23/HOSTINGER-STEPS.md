# weeklydelight.com: crawler errors at the Hostinger CDN (everything in one file)

Prepared 23 October 2026. Sections 1 to 6 are for Hostinger support: attach this file to a live-chat or ticket and paste the short message in section 0. Section 7 is the site owner's own checklist in hPanel. No other file is needed; this one includes all the evidence from the earlier notes (`HOSTINGER-HANDOFF.md`).

## 0. Message to paste into Hostinger live chat

> Hello. Google Search Console lists most of the pages on weeklydelight.com as "Discovered – currently not indexed": Google found them but never fetched them, which Google says happens when crawling is expected to overload the server. Requests to my site through your CDN (`server: hcdn`) have been answered with HTTP 429 and with 307 redirects to the same URL, which my site's own rules never send. The attached file has the times, URLs and `x-hcdn-request-id` values. Could you trace them and answer the questions in section 5? Please do not change my advertising or the site's files. Thank you.

## 1. The site

- **Domain:** `weeklydelight.com` (apex, HTTPS). `www` and `http` redirect to it with a 301.
- **What it is:** a static website of 5,499 recipe pages and 356 other pages (categories, cuisines, ingredients, home, about and so on): plain HTML, CSS, JavaScript and images, plus one PHP file for the contact form. Deployed from a GitHub repository into `public_html`.
- **The site's own redirect rules** (`.htaccess`) are all **301**: `www` to apex, `http` to `https`, `/index.html` to `/`, and 16 retired recipe addresses to their replacements. It also answers 404 for the project's private folders. It sends **no 307 and no 429**.
- **Cache headers the site sends:** pages, sitemaps and feeds `Cache-Control: public, max-age=0, s-maxage=3600, must-revalidate` (since 23 October, 11:54 UTC; before that `public, max-age=0, must-revalidate`); images 30 days; CSS, JS and fonts one year; `robots.txt` one hour.

## 2. Evidence A: HTTP 429 with an empty body (23 October 2026)

Between **06:33:04 and 06:35:33 UTC**, one client requested 103 ordinary URLs from `https://weeklydelight.com`, one about every 1.5 seconds. **102 were answered 429** with an empty body; one (`/robots.txt`) was answered 200. The 429s include the **home page** and **`/sitemap.xml`**, not only recipe pages.

| Time (UTC) | URL | HTTP | `x-hcdn-request-id` |
| --- | --- | --- | --- |
| 06:33:04 | `/recipes/vinegar-cabbage/` | 429 | `58f3883cc379c1853cffc8b5f8a44f40-bos-edge14` |
| 06:33:06 | `/recipes/pollo-al-limone/` | 429 | `114e755a4992d398b952458d4c8eed63-imm-edge8` |
| 06:33:07 | `/recipes/thukpa/` | 429 | `f6054989e0998e2479c0d74d087ef1a5-bos-edge14` |
| 06:33:09 | `/recipes/roast-cauliflower-with-garlic/` | 429 | `a0eedaf5dde73ffabb66123339717225-bos-edge12` |
| 06:34:02 | `/recipes/bombolone/` | 429 | `9a2e24566dc9b038387e174cde01d99d-bos-edge13` |
| 06:34:04 | `/recipes/slow-cooker-pea-and-ham-soup/` | 429 | `0683c1dc7569cbdabadde46ee34005e3-bos-edge12` |
| 06:34:05 | `/recipes/dairy-free-chocolate-chip-cookies/` | 429 | `3f439da25b72ed14df83692d60867f23-imm-edge9` |
| 06:35:30 | `/` (home page) | 429 | `a2b6ad110b037b157448bc86b9939a0c-bos-edge10` |
| 06:35:31 | `/robots.txt` | 200 | `d1ef7dd221d83bfb8e53ee1b483fab95-bos-edge12` |
| 06:35:33 | `/sitemap.xml` | 429 | `c7cd4bcae7d85896f6d2469049fc583b-bos-edge8` |

Later the same day the behaviour was different: 32 image files at one request every 2.5 seconds, and between 08:30 and 09:00 UTC 15 pages and 15 images at one a second, all answered 200 (origin time about 0.25 s). The 429s come and go.

## 3. Evidence B: 307 redirects to the same URL (22 October 2026)

An 80-request check of 61 URLs received 60 × 200, **16 × 307**, 2 × 301 and 2 × 404. **All 16 temporary redirects, on ten different URLs, pointed back to the URL that was requested**, and the same URL alternated between 200 and 307 within minutes. The 307 body was a plain 164-byte nginx redirect, with no JavaScript challenge, CAPTCHA, `Set-Cookie`, `Retry-After` or `WWW-Authenticate` header. The site has no 307 rule (section 1).

| Time (UTC) | URL | HTTP | `x-hcdn-request-id` |
| --- | --- | --- | --- |
| 20:31:45.168909 | `https://weeklydelight.com/robots.txt` | 200 | `7a1ae30de3514f3f38874f75d613acad-bos-edge8` |
| 20:31:52.873986 | `http://www.weeklydelight.com/recipes/baked-peaches-with-cinnamon/` | 307 to itself | `ebe5c82a906c6a3dda046481dcaba3a9-bos-edge9` |
| 20:31:54.165951 | a `http://www.` category page (exact path not kept) | 307 to itself | `896780e2ccf4af5971be54e575aec7da-bos-edge14` |
| 20:33:37.181260 | `https://weeklydelight.com/robots.txt` | 307 to itself | `d73ae4dde43612807e2d4293fc5a4d11-bos-edge14` |
| 20:33:38.935221 | `https://weeklydelight.com/robots.txt` | 307 to itself | `0ad0eff7c2d93a41ea587c71b1aba276-bos-edge9` |
| 20:33:42.986583 | `https://weeklydelight.com/sitemap-2.xml` | 307 to itself | `a63931169d7a583e782890fa0bcb46dd-bos-edge10` |

A redirect loop on `robots.txt` matters especially: Google reads `robots.txt` before crawling anything else on the site.

Around the 22 October deploy, JPG image files also intermittently answered 502 through the CDN while the WebP copies of the same images answered 200 (request IDs were not kept for those).

## 4. Evidence C: pages are rarely served from the CDN cache

- Until 23 October 11:54 UTC every page and sitemap was answered `x-hcdn-cache-status: DYNAMIC`, so every crawler request went through to the hosting server.
- The site now sends `s-maxage=3600` for pages, sitemaps and feeds. After that, some requests were answered `HIT` with an `age` (for example `/recipes/rogan-josh/`, ID `a5b28fc963b1558f49baedf52532aeec-imm-edge10`, `age: 76`), but most are still `DYNAMIC`, including the same page a few seconds later on another edge (`20896881bc25bdb2aa3d4abd2e1996c6-imm-edge8`).

## 5. Questions for Hostinger

1. Which layer or rule produced the **429s** in section 2 and the **same-URL 307s** in section 3: CDN security level, Under Attack mode, a bot or rate rule, or a limit on the hosting account? Please look up the request IDs.
2. What is the current **CDN security level** for weeklydelight.com, and which bot, country, IP or rate rules apply to it?
3. Have requests from **verified Googlebot** (IP and reverse-DNS verified) received 429, 307, 403 or 5xx from this site in the last 60 days? How many, and on which days?
4. Can crawler rate limits be raised for verified search engine crawlers, or the limit changed so that a crawler fetching a page every second or two is not refused?
5. Has the hosting account hit its **resource limits** (entry processes, CPU, memory, I/O) in the last 30 days?
6. Does the CDN honour `s-maxage` on HTML pages? What else is needed for a static site's pages to be served from the CDN cache (`HIT`) rather than `DYNAMIC`?
7. Why did JPG images answer **502** while their WebP copies answered 200 (section 3)?

Please do not change the site's files or its advertising; settings changes on the CDN or hosting side are welcome once you have told us what they are.

## 6. What has already been checked on the site itself

So that the cause is not looked for in the wrong place: every built page has a unique title and description and one canonical tag pointing at itself; no indexable page is `noindex`; the 12 sitemaps list each page exactly once (5,855 URLs) with a `lastmod` that matches the page; `robots.txt` blocks only search-filter parameters; missing pages answer a real 404; `www`, `http`, no-slash and `/index.html` variants reach the right page with 301s; a page rendered in a browser does not redirect or pop anything up; and the live pages are byte-identical to the build.

## 7. For the site owner only: what to check yourself in hPanel

Claude cannot sign in to Hostinger for you, and you should never share your password. Allow about 15 minutes, and write down or screenshot every setting before you change it.

1. Sign in to hPanel, choose **Websites**, then **Dashboard** for weeklydelight.com.
2. Open **Performance**, then **CDN**, then **Manage**, then **Security**. Note the **security level**, whether **Under Attack mode** is on, and any **country, IP, bot or rate rules**.
3. If **Under Attack** is on and nothing is attacking the site, switch it off and go back to the normal level (**Medium** or **Low**). It makes the CDN challenge or limit unfamiliar visitors, and a search crawler counts as one.
4. Remove or relax any rule that blocks bots, countries or high request rates that you did not set on purpose. Do **not** switch security off entirely, and do not allow a visitor only because its user agent says "Googlebot".
5. Check **Hosting, Usage** (or the resource-usage page) for CPU, memory or process limits being hit.
6. Send the message in section 0 to Hostinger live chat with this file attached.
7. A day later, open Search Console: **Settings, Crawl stats** (response codes and average response time; the share of 429, 307 and 5xx should fall) and **Page indexing**. Resubmit `sitemap-index.xml` once; do not delete and resubmit it repeatedly.
