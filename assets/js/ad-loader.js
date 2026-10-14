/**
 * Starts the ad network's scripts once the page is ready, not during first paint.
 *
 * The markup carries the network's URLs on data attributes
 * (data-ad-defer on a slot, data-ad-defer-social for the social bar) and this
 * turns them into script tags. It runs on the first sign of reading (scroll,
 * touch, key, click) or two seconds after the load event, whichever is first.
 * Each slot has a fixed height, so the ads arriving moves nothing.
 */
(function () {
  'use strict';
  var started = false;

  function add(src, before) {
    var s = document.createElement('script');
    s.src = src;
    s.async = true;
    s.setAttribute('data-cfasync', 'false');
    if (before && before.parentNode) before.parentNode.insertBefore(s, before);
    else document.body.appendChild(s);
  }

  function start() {
    if (started) return;
    started = true;
    ['scroll', 'pointerdown', 'keydown', 'touchstart'].forEach(function (t) {
      window.removeEventListener(t, start);
    });
    var slots = document.querySelectorAll('[data-ad-defer]');
    for (var i = 0; i < slots.length; i++) add(slots[i].getAttribute('data-ad-defer'), slots[i]);
    var social = document.querySelector('[data-ad-defer-social]');
    if (social) add(social.getAttribute('data-ad-defer-social'));
  }

  ['scroll', 'pointerdown', 'keydown', 'touchstart'].forEach(function (t) {
    window.addEventListener(t, start, { passive: true, once: true });
  });
  function afterLoad() { setTimeout(start, 2000); }
  if (document.readyState === 'complete') afterLoad();
  else window.addEventListener('load', afterLoad, { once: true });
})();
