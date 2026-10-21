# Evidence notes

`summary.json` reconciles static and live coverage. `verification-build-diff.json` compares every tracked file after the isolated verification build. The captured live page sources are `live-*.html.txt.gz`: lossless gzip preserves every response byte, including whitespace. Decompress them with a gzip reader before comparison with the SHA-256 values in `live-responses.jsonl`.

The browser JSON's historical test label `live-before-deployment` comes from the existing tool. Its `unavailable` field records a Chromium certificate-trust failure; it is not a successful live DOM test or a website TLS diagnosis. There are 17 successful local template cases in each before/after run. Other browser cases and their scope are described in the report. PageSpeed's 429 is its API quota, not a weeklydelight.com response.

The public/private HEAD log records 39 additional checks. The 277-target live response log and CSV include four expected 404 probes; no declared recipe link or image is classified as broken on that basis. The 1,237 image gaps and 70 collection-review warnings remain open in the inventories.
