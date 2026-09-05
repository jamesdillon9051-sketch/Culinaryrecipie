'use strict';

/**
 * Adsterra ad units.
 *
 * Everything about the site's advertising lives here. Set `enabled` to false
 * and the next build strips every ad script and slot from every page — useful
 * for local work, Lighthouse runs, or pulling the ads entirely. tools/check.js
 * verifies the coverage on every build, so a template edit cannot quietly drop
 * a unit from the whole site.
 *
 * A note on the native banner. Adsterra's invoke.js fills one element, found
 * by `document.getElementById('container-<key>')`, and that returns a single
 * node — so two copies of the snippet in one document leave the second slot
 * empty, quite apart from the duplicate id being invalid HTML.
 *
 * The build works around it: the first slot on a page embeds the snippet
 * directly, and any further slot is an iframe onto a one-slot document, which
 * has its own DOM and so fills independently. One active unit therefore
 * covers both the top and the bottom of every page. Adding a second unit
 * below makes the lower slot a direct embed instead, which is marginally
 * lighter — but nothing breaks if you never do.
 */
module.exports = {
  enabled: true,

  /* Loaded in <head>. Opens a background tab on the visitor's first click. */
  popunder: 'https://pl31083097.profitableratecpmnetwork.com/c9/51/15/c95115ef478957b26e6e3b38d22f9853.js',

  /* Loaded last, before </body>, so it never delays first paint. */
  socialBar: 'https://pl31083098.profitableratecpmnetwork.com/bf/a6/76/bfa676ffa93febb261c12a1f71055429.js',

  /**
   * Native banner units, in placement order. The first is used for the slot
   * below a recipe's intro and the first slot on the home page; the second,
   * once you add one, for the slot below the method and the second home-page
   * slot. Each entry needs the unit's invoke.js URL and its key.
   */
  nativeBanners: [
    {
      invoke: 'https://pl31090612.profitableratecpmnetwork.com/f30ffc4b87049d66ff2e2bd03e77caf9/invoke.js',
      key: 'f30ffc4b87049d66ff2e2bd03e77caf9'
    }
    /* Second unit goes here:
    {
      invoke: 'https://plXXXXXXXX.profitableratecpmnetwork.com/<key>/invoke.js',
      key: '<key>'
    }
    */
  ],

  /**
   * Height in pixels of a framed native banner. An iframe cannot size itself
   * to its content across documents, so this is reserved up front. Raise it
   * if your unit renders taller than the space allowed; the wrapper scrolls
   * nothing, so anything past this height would be clipped.
   */
  frameHeight: 300,

  /**
   * There is deliberately no host allow-list here.
   *
   * There used to be one, naming four wildcarded ad domains and feeding the
   * Content-Security-Policy — but the policy in netlify.toml and vercel.json
   * has long since moved to a blanket `https:` for script-src, frame-src,
   * connect-src and img-src, and the list was left behind, exported and never
   * called. A config field nobody reads is worse than none, because the next
   * person to edit it believes it does something.
   *
   * The blanket policy is the honest position while these ads run: an ad
   * network resolves creatives across hosts it does not publish and changes
   * them without notice, so a four-entry allow-list would break delivery the
   * first time one moved. What the CSP does still hold, and what check.js
   * enforces, is everything that costs the ads nothing — object-src 'none',
   * base-uri, frame-ancestors, form-action, no unsafe-eval, and 'self' on
   * script-src.
   */
};
