/**
 * Google Analytics 4 bootstrap.
 *
 * This is the block Google gives you as an inline <script>, moved into a file.
 * The site's own output carries no inline script — tools/check.js enforces it —
 * because the CSP only allows 'unsafe-inline' for the ad network's sake, and
 * nothing the generator writes should depend on a concession made for somebody
 * else. Pulling this out of the page means the strict policy could come back
 * tomorrow and analytics would keep working.
 *
 * The measurement ID arrives on the tag's own data-ga-id attribute rather than
 * being written in here, so src/data/analytics.js stays the single place it is
 * configured.
 *
 * `gtag` is a function declaration, not an assignment, so it is hoisted and
 * callable regardless of when gtag.js finishes loading — which is the whole
 * reason Google's version works with `async`.
 */
(function () {
  var tag = document.currentScript;
  var id = tag && tag.getAttribute('data-ga-id');
  if (!id) return;

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', id);
})();
