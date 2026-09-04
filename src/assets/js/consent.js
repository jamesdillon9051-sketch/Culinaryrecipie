/**
 * Cookie consent banner, and the loader for everything it gates.
 *
 * Nothing here is cosmetic. The analytics tag and the three advertising units
 * are absent from the page until this file puts them there, so a reader who
 * says no is not tracked and a reader who never answers is not tracked either.
 *
 * The choice lives in localStorage under cv:consent, alongside the version it
 * was given against and when. It never leaves the device.
 *
 * Written to run before the banner is visible and to fail silently: if
 * localStorage throws — private windows, blocked site data — the banner shows,
 * nothing is loaded, and the site still works.
 */
(function () {
  'use strict';

  var KEY = 'cv:consent';
  var root = document.currentScript;
  if (!root) return;

  var VERSION = Number(root.getAttribute('data-version') || 1);
  var DAYS = Number(root.getAttribute('data-days') || 182);
  var GA = root.getAttribute('data-ga') || '';
  var ADS = {
    popunder: root.getAttribute('data-ad-popunder') || '',
    social: root.getAttribute('data-ad-social') || ''
  };

  /* ------------------------------------------------------------ storage */
  function read() {
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return null;
      var v = JSON.parse(raw);
      if (v.version !== VERSION) return null;                 /* different question */
      if (Date.now() - v.at > DAYS * 864e5) return null;       /* expired */
      return v;
    } catch (e) { return null; }
  }

  function write(analytics, ads) {
    try {
      localStorage.setItem(KEY, JSON.stringify({
        version: VERSION, at: Date.now(), analytics: !!analytics, ads: !!ads
      }));
    } catch (e) { /* nothing to do; the banner will ask again next visit */ }
  }

  /* --------------------------------------------------------- the loaders */
  function addScript(src, attrs) {
    if (!src) return;
    var s = document.createElement('script');
    s.src = src;
    s.async = true;
    if (attrs) Object.keys(attrs).forEach(function (k) { s.setAttribute(k, attrs[k]); });
    document.head.appendChild(s);
  }

  function loadAnalytics() {
    if (!GA || window.__wdAnalytics) return;
    window.__wdAnalytics = true;
    addScript('https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA));
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA);
  }

  function loadAds() {
    if (window.__wdAds) return;
    window.__wdAds = true;
    addScript(ADS.popunder);
    addScript(ADS.social);

    /* The native banner slots. Each carries its own invoke URL and container id
       on the placeholder, so the markup can sit in the page inertly. */
    var slots = document.querySelectorAll('[data-ad-invoke]');
    Array.prototype.forEach.call(slots, function (slot) {
      var box = document.createElement('div');
      box.id = 'container-' + slot.getAttribute('data-ad-key');
      slot.appendChild(box);
      addScript(slot.getAttribute('data-ad-invoke'), { 'data-cfasync': 'false' });
    });

    /* And the iframed slot, which is a whole document of its own. */
    var frames = document.querySelectorAll('iframe[data-ad-src]');
    Array.prototype.forEach.call(frames, function (f) {
      f.src = f.getAttribute('data-ad-src');
    });
  }

  function apply(choice) {
    if (!choice) return;
    if (choice.analytics) loadAnalytics();
    if (choice.ads) loadAds();
  }

  /* ------------------------------------------------------------- banner */
  function dismiss(el) {
    el.setAttribute('hidden', '');
    if (el.parentNode) el.parentNode.removeChild(el);
  }

  function banner() {
    var el = document.createElement('div');
    el.className = 'consent';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-modal', 'false');
    el.setAttribute('aria-label', 'Cookies');
    el.innerHTML =
      '<div class="consent__inner">' +
        '<div class="consent__text">' +
          '<strong>Cookies</strong>' +
          '<p>This site would like to use cookies for analytics and advertising. ' +
          'Nothing is set unless you agree, and saying no costs you nothing on the site. ' +
          'The <a href="' + (root.getAttribute('data-base') || '/') + 'privacy/">privacy page</a> explains what each one does.</p>' +
        '</div>' +
        '<div class="consent__actions">' +
          '<button type="button" class="btn btn--ghost" data-consent="reject">Reject all</button>' +
          '<button type="button" class="btn btn--primary" data-consent="accept">Accept all</button>' +
        '</div>' +
      '</div>';

    el.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-consent]');
      if (!btn) return;
      var yes = btn.getAttribute('data-consent') === 'accept';
      write(yes, yes);
      if (yes) apply({ analytics: true, ads: true });
      dismiss(el);
    });

    document.body.appendChild(el);
    /* Move focus to the dialog so a keyboard or screen-reader user meets it
       rather than discovering it at the end of the page. */
    var first = el.querySelector('button');
    if (first) first.focus({ preventScroll: true });
  }

  /* --------------------------------------------------------------- start */
  var stored = read();
  if (stored) {
    apply(stored);
  } else if (document.body) {
    banner();
  } else {
    document.addEventListener('DOMContentLoaded', banner);
  }

  /* Any "Cookie settings" link on the page reopens the choice. Withdrawing
     consent has to be as easy as giving it, so this clears the stored answer
     and asks again. Already-loaded scripts cannot be unloaded, so the page is
     reloaded to a clean state. */
  document.addEventListener('click', function (e) {
    var link = e.target.closest('[data-consent-reopen]');
    if (!link) return;
    e.preventDefault();
    try { localStorage.removeItem(KEY); } catch (err) { /* ignore */ }
    location.reload();
  });
})();
