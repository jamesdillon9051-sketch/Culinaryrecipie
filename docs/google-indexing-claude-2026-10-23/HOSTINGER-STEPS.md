# Hostinger: what to click, and what to send support

Claude has no access to your Hostinger account (the Hostinger connector is not signed in, and sign-ins and passwords stay with you), so these steps are yours to do. Allow 15 minutes. Write down every setting before you change it.

## Part 1: look at the CDN security settings (hPanel)

1. Sign in to hPanel, choose **Websites**, then **Dashboard** for weeklydelight.com.
2. Open **Performance**, then **CDN**, then **Manage**, then **Security**.
3. Write down (or screenshot) the current **security level** and whether **Under Attack mode** is on, plus any listed **country, IP, bot or rate rules**.
4. If **Under Attack** is on and no attack is happening, switch it off and return to the normal level (**Medium** or **Low**). It makes the CDN challenge or limit unfamiliar visitors, and a search crawler counts as one.
5. Remove or relax any rule that blocks bots, countries or high request rates that you did not set on purpose. Do **not** switch security off entirely, and do not allow a visitor only because its user agent says "Googlebot".
6. Check **Hosting, Usage** (or the resource-usage page) for CPU, memory or process limits being hit.

## Part 2: send this to Hostinger support (live chat)

> Hello. Google has stopped indexing many weeklydelight.com pages. My site is served through your CDN (response header `server: hcdn`). I found two problems and would like your help tracing them.
>
> 1. **HTTP 429 with an empty body.** On 23 October 2026 at about 06:33 UTC, a single client requesting ordinary recipe pages about every 1.5 seconds got 429 on 102 of 103 requests (one 200). Examples, all `https://weeklydelight.com/...`: `/recipes/vinegar-cabbage/` 06:33:04Z, request ID `58f3883cc379c1853cffc8b5f8a44f40-bos-edge14`; `/recipes/pollo-al-limone/` 06:33:06Z, `114e755a4992d398b952458d4c8eed63-imm-edge8`; `/recipes/thukpa/` 06:33:07Z, `f6054989e0998e2479c0d74d087ef1a5-bos-edge14`; `/recipes/roast-cauliflower-with-garlic/` 06:33:09Z, `a0eedaf5dde73ffabb66123339717225-bos-edge12`. A later probe of 32 image files, one every 2.5 seconds, returned 200 every time.
> 2. **Same-URL 307 redirects.** On 22 October the same URL alternated between 200 and 307, with the 307 pointing back to the same URL (for example `/robots.txt` at 20:33:37Z, ID `d73ae4dde43612807e2d4293fc5a4d11-bos-edge14`, and `/sitemap-2.xml` at 20:33:42Z, ID `a63931169d7a583e782890fa0bcb46dd-bos-edge10`). My `.htaccess` only declares 301 redirects, so something else is generating the 307.
>
> Please tell me: (a) which rule or layer produced these 429s and 307s; (b) the current CDN security level and any rate-limit, bot or country rule on this site; (c) whether **verified Googlebot** requests (IP and reverse-DNS verified) have received 429, 307, 403 or 5xx from my site in the last 60 days, and how many; (d) whether you can raise or exempt crawler rate limits for verified search crawlers. Please keep my advertising and application paths as they are.

## Part 3: afterwards

- Wait a day, then open Search Console, **Settings, Crawl stats**: look at the response codes and the average response time. The share of 429/5xx should fall.
- Search Console, **Page indexing**: note which statuses hold the most pages. Do not delete and resubmit sitemaps repeatedly.
- Tell me the result of Part 1 (the level and any rules you saw) and I will update the handoff and the plan.

Source of the evidence and the earlier draft: [HOSTINGER-HANDOFF.md](../google-indexing-followup-2026-10-23/HOSTINGER-HANDOFF.md).
