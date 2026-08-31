'use strict';

/**
 * Ad markup. Every ad on the site is emitted through these four functions, so
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

/**
 * One native banner slot.
 *
 * `index` selects which configured unit to use, so a page can carry more than
 * one slot without repeating a container id. Asking for a unit that has not
 * been configured yet returns an empty string rather than an empty div: a slot
 * that can never fill should not take up space or leave a hole in the page.
 *
 * @param {number} index  position in ads.nativeBanners
 * @param {string} label  screen-reader wording for the region
 */
function nativeBanner(index = 0, label = 'Advertisement') {
  if (!ADS.enabled) return '';
  const unit = (ADS.nativeBanners || [])[index];
  if (!unit || !unit.invoke || !unit.key) return '';

  return `<aside class="ad-slot ad-slot--native" aria-label="${label}">
  <span class="ad-slot__label">Advertisement</span>
  <script async="async" data-cfasync="false" src="${unit.invoke}"></script>
  <div id="container-${unit.key}"></div>
</aside>`;
}

/** Hosts the ad scripts may load from, for the CSP in netlify.toml/vercel.json. */
function cspHosts() {
  return ADS.enabled ? (ADS.cspHosts || []) : [];
}

module.exports = { popunder, socialBar, nativeBanner, cspHosts, ADS };
