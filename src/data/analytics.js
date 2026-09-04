'use strict';

/**
 * Google Analytics 4.
 *
 * One place for the measurement ID, in the same spirit as ./ads.js: set
 * `enabled` to false and the next build strips the tag from every page, which
 * is what you want for local work and Lighthouse runs, where a third-party
 * script skews the numbers you are trying to read.
 *
 * The tag goes in <head> rather than before </body>. Google's own snippet is
 * written for the head and loads gtag.js with `async`, so it does not block
 * rendering; placing it lower would cost measurement of anyone who leaves
 * before the page finishes.
 *
 * The site's CSP already permits it — script-src allows https:, and gtag needs
 * connect-src and img-src for its beacons, both of which are open to https:
 * for the ad network's sake. Nothing here needed widening.
 */
module.exports = {
  enabled: true,

  /** GA4 measurement ID. Empty string removes the tag as surely as enabled:false. */
  measurementId: 'G-X53KZJEZ6X'
};
