/* ==========================================================================
   CulinaryVault — pre-paint bootstrap
   Loaded synchronously in <head>, after the stylesheet links.

   This exists as a separate file rather than an inline <script> so the
   Content-Security-Policy can be `script-src 'self'` with no 'unsafe-inline'.
   It is deliberately tiny: two jobs, no dependencies.
   ========================================================================== */
(function () {
  'use strict';

  /* 1. Apply the stored theme before the first paint, so a dark-mode visitor
        never sees a flash of the light palette. */
  try {
    var stored = JSON.parse(localStorage.getItem('cv:theme'));
    if (stored !== 'dark' && stored !== 'light') stored = null;
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored || (prefersDark ? 'dark' : 'light');

    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      var meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute('content', '#17130f');
    }
  } catch (e) {
    /* Storage disabled (private mode) — fall through on the light default. */
  }

  /* 2. Promote the non-blocking stylesheets. They are parked at media="print"
        so they do not delay the first paint; each is switched to media="all"
        as soon as it has finished loading. This replaces the inline
        onload="this.media='all'" handlers, which a strict CSP forbids. */
  var links = document.querySelectorAll('link[data-async-style]');
  for (var i = 0; i < links.length; i++) {
    activate(links[i]);
  }

  /* Backstop: a sheet that finished (or failed) in the gap between the <link>
     being parsed and this script running would never fire an event we could
     hear. By window load, nothing is still in flight, so promote whatever is
     left rather than stranding it in print-only. */
  window.addEventListener('load', function () {
    for (var j = 0; j < links.length; j++) links[j].media = 'all';
  }, { once: true });

  function activate(link) {
    if (link.sheet) { link.media = 'all'; return; }        // already cached
    link.addEventListener('load', function () { link.media = 'all'; }, { once: true });
    link.addEventListener('error', function () { link.media = 'all'; }, { once: true });
  }
})();
