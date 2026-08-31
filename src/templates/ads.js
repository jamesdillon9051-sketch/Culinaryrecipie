'use strict';

/**
 * Ad markup. Every ad on the site is emitted through these functions, so
 * turning `enabled` off in ../data/ads.js removes all of it from the build and
 * there is exactly one place to look when a unit changes.
 */
const ADS = require('../data/ads');

/** The popunder loader, for <head>. */
function popunder() {
  if (!ADS.enabled || !ADS.popunder) return '';
  return `<script src="${ADS.popunder}"></script>`;
}

/** The social bar loader, for the end of <body>. */
function socialBar() {
  if (!ADS.enabled || !ADS.socialBar) return '';
  return `<script src="${ADS.socialBar}"></script>`;
}

/** Path to the single-slot document that repeat placements are framed from. */
const FRAME_PATH = 'assets/ads/native-banner.html';

/**
 * A complete HTML document holding one native banner and nothing else.
 *
 * This is what makes the same unit work in two places on one page. Adsterra's
 * invoke.js fills the element it finds at `container-<key>`, and
 * getElementById returns exactly one node — so two copies of the snippet in a
 * single document leave the second slot empty forever, quite apart from the
 * duplicate id being invalid HTML. Giving the repeat placement its own
 * document sidesteps that: each iframe has its own DOM, finds its own
 * container, and fills independently.
 */
function frameDocument(base = '/') {
  const unit = (ADS.nativeBanners || [])[0];
  if (!ADS.enabled || !unit) return '';
  return `<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Advertisement</title>
<style>
  html, body { margin: 0; padding: 0; background: transparent; }
  body { font: 14px/1.5 system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; }
  img, iframe { max-width: 100%; }
</style>
</head>
<body>
<script async="async" data-cfasync="false" src="${unit.invoke}"></script>
<div id="container-${unit.key}"></div>
</body>
</html>`;
}

/**
 * One native banner slot.
 *
 * Index 0 embeds the snippet directly, which is how Adsterra expects its
 * primary placement to run. Any later slot uses its own configured unit if
 * there is one, and otherwise reuses unit 0 through the iframe above — so a
 * single active unit still fills both the top and bottom of a page.
 *
 * @param {number} index  position in ads.nativeBanners
 * @param {string} label  screen-reader wording for the region
 * @param {string} base   site base path, for the iframe src
 */
function nativeBanner(index = 0, label = 'Advertisement', base = '/') {
  if (!ADS.enabled) return '';
  const units = ADS.nativeBanners || [];
  const own = units[index];

  if (own && own.invoke && own.key) {
    return wrap(label, `<script async="async" data-cfasync="false" src="${own.invoke}"></script>
  <div id="container-${own.key}"></div>`);
  }

  if (!units[0]) return '';
  const height = ADS.frameHeight || 300;
  return wrap(label, `<iframe src="${base}${FRAME_PATH}" title="${label}" loading="lazy"
          scrolling="no" frameborder="0"
          style="width:100%;height:${height}px;border:0;display:block"></iframe>`);
}

function wrap(label, inner) {
  return `<aside class="ad-slot ad-slot--native" aria-label="${label}">
  <span class="ad-slot__label">Advertisement</span>
  ${inner}
</aside>`;
}

/** Hosts the ad scripts may load from, for the CSP in netlify.toml/vercel.json. */
function cspHosts() {
  return ADS.enabled ? (ADS.cspHosts || []) : [];
}

module.exports = { popunder, socialBar, nativeBanner, frameDocument, cspHosts, FRAME_PATH, ADS };
