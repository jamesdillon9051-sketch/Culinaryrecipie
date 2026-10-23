# Hosting investigation: intermittent self redirects
Prepared 23 October 2026. This is a support draft and owner checklist; no message was sent and no hosting setting changed.

## Evidence
On 22 October, an 80-observation probe of 61 unique URLs received 60 HTTP 200, 16 HTTP 307, two HTTP 301 and two HTTP 404 responses. All 16 temporary redirects, spanning ten URLs, pointed back to the same submitted URL. Some ordinary requests immediately alternated between 200 and 307. The 307 body was a plain 164-byte nginx redirect, with no JavaScript challenge, CAPTCHA, Set-Cookie, Retry-After or WWW-Authenticate header.

The repository's .htaccess declares 301 normalization; no 307 rule was found. Successful responses and redirects carried HCDN request IDs. This locates useful trace evidence, but does not prove which CDN/upstream/intermediary generated the redirect or whether Googlebot saw it.

| URL | UTC time on 2026-10-22 | HTTP | x-hcdn-request-id |
| --- | --- | --- | --- |
| https://weeklydelight.com/robots.txt |20:31:45.168909Z|200|7a1ae30de3514f3f38874f75d613acad-bos-edge8|
| https://weeklydelight.com/robots.txt |20:33:37.181260Z|307 self|d73ae4dde43612807e2d4293fc5a4d11-bos-edge14|
| https://weeklydelight.com/robots.txt |20:33:38.935221Z|307 self|0ad0eff7c2d93a41ea587c71b1aba276-bos-edge9|
| https://weeklydelight.com/sitemap-2.xml |20:33:42.986583Z|307 self|a63931169d7a583e782890fa0bcb46dd-bos-edge10|
| http://www.weeklydelight.com/recipes/baked-peaches-with-cinnamon/ |20:31:52.873986Z|307 self|ebe5c82a906c6a3dda046481dcaba3a9-bos-edge9|

A further HTTP-www category observation at 20:31:54.165951Z had ID 896780e2ccf4af5971be54e575aec7da-bos-edge14. The exact category path was not retained after the execution environment disconnected; do not invent it.

On 23 October all 356 intended nonrecipe pages and 860 recipes returned correct 200 HTML before the execution proxy failed. The proxy error said:

> upstream connect error or disconnect/reset before headers; remote connection failure; Invalid argument; remote address:envoy://cloudflare_https_tunnel/

The failing catalogue request was /recipes/canederli/. This was an execution-proxy 503, not evidence that Canederli's origin returned 503. One ordinary robots.txt recovery GET at 03:36:16 UTC reproduced the same proxy failure; no further website requests followed. The latest network-policy observation had said unrestricted/enforced, which did not establish that the proxy tunnel worked.

## Owner/Hostinger actions
1. Open Hostinger hPanel: Websites → Dashboard → Performance → CDN → Manage → Security. Record the existing level and any active traffic/country/IP/bot rules before changing anything.
2. If Under Attack mode is enabled and the attack has ended, return to the documented normal Medium/Low setting. Actual current settings are unknown. Do not disable all security or simply allow a caller because it claims the Googlebot user agent.
3. Review explicit bot blocks and traffic restrictions; ask Hostinger to correlate these request IDs with origin/CDN logs, Location generation and cache behavior. Check verified search crawler requests using proper IP/reverse-DNS verification.
4. Only after a relevant cause/rule is identified, purge the affected cached response if appropriate. Development mode bypasses caching, not security; it is not a demonstrated fix.
5. Recheck homepage, representative deep URLs, robots, sitemap index/all 12 children and proper missing-page 404s from an ordinary client and Search Console. Confirm HTTP/HTTPS and www/non-www redirects preserve paths and terminate at HTTPS non-www. Do not repeatedly resubmit/delete sitemaps.

No authenticated hPanel capability/session is available here. GitHub access does not grant hosting configuration or Googlebot-log access.

## Support draft (not sent)
Please investigate intermittent same-URL 307 redirects for weeklydelight.com using the UTC times and x-hcdn-request-id values above. The same ordinary URL alternated between 200 and 307; the307Location repeated the requested URL. The source repository config declares 301 normalization, not 307. Please identify the layer/rule generating each response, whether it is cached, and whether verified Googlebot requests to robots.txt, sitemaps or deep pages encountered the same issue. Confirm CDN security/Under Attack and explicit bot/traffic rules. Please preserve advertising and application paths. The later 23 October envoy tunnel 503 is our execution transport failure and should not be treated as proof of your origin failing.

## Official guidance
- [Hostinger crawler/SEO behavior](https://www.hostinger.com/support/hostinger-cdn-search-engine-crawlers-and-seo/)
- [CDN troubleshooting](https://www.hostinger.com/support/hostinger-cdn-troubleshooting-website-errors/)
- [Security levels](https://www.hostinger.com/support/10695636-hostinger-cdn-security-levels/)
- [Under Attack mode](https://www.hostinger.com/support/8512979-hostinger-cdn-the-under-attack-mode/)
- [Clear CDN cache](https://www.hostinger.com/support/hostinger-cdn-how-to-clear-the-cache/)
- [Google HTTP status handling](https://developers.google.com/crawling/docs/troubleshooting/http-status-codes)
- [Google robots redirect handling](https://developers.google.com/crawling/docs/robots-txt/robots-txt-spec)

Google treats 307 as temporary redirection. For robots.txt it follows at least five redirect hops, then treats a redirect failure as 404/no robots rules; this does not automatically mean whole-site Disallow. Availability of other URLs and sitemap discovery can still suffer. Only hosting/Google evidence can establish actual crawler impact.
