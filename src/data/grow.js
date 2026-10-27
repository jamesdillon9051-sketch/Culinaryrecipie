'use strict';

/**
 * Grow by Mediavine.
 *
 * Mediavine's engagement script (saving recipes, recommendations, sign-ups),
 * installed at the owner's request on 27 October 2026. It is not an ad unit,
 * so it lives here rather than in ./ads.js: the ads are switched off and Grow
 * stays on, and either can change without touching the other.
 *
 * ../templates/layout.js writes Mediavine's installation snippet, unaltered
 * except that the site ID comes from here, into the <head> of every page. Set
 * `enabled` to false, or empty the ID, and the next build takes it off every
 * page. While it is on, tools/check.js fails any page that lacks it, so a
 * template edit cannot quietly drop it.
 */
module.exports = {
  enabled: true,

  /** The site ID from the Grow publisher dashboard's installation script. */
  siteId: 'U2l0ZTo1MWQzMzRhNC05ZmQxLTQxMjQtYmEyOC01M2MzN2UzYWIyM2I='
};
