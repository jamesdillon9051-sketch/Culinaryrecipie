'use strict';

/**
 * Adsterra ad units.
 *
 * Everything about the site's advertising lives here. Set `enabled` to false
 * and the next build strips every ad script and slot from all 458 pages —
 * useful for local work, Lighthouse runs, or pulling the ads entirely.
 *
 * A note on the native banner. Adsterra's invoke.js fills one element, found
 * by `document.getElementById('container-<key>')`. Two slots on the same page
 * therefore need two *units*, each with its own key from the Adsterra
 * dashboard — reusing one key twice would put a duplicate id in the HTML and
 * only the first slot would ever fill. Add the second unit's key to
 * `nativeBanners` below and the in-article slot lights up on the next build.
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
   * Every host the ad scripts are allowed to load from, used to build the
   * Content-Security-Policy. Ad networks resolve creatives across a lot of
   * hosts, so the delivery domain is wildcarded.
   */
  cspHosts: [
    'https://*.profitableratecpmnetwork.com',
    'https://*.highperformanceformat.com',
    'https://*.effectivecpmrate.com',
    'https://*.adsterra.com'
  ]
};
