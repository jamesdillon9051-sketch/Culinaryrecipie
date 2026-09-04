/* ==========================================================================
   Weekly Delight — global behaviour
   Vanilla JS, no dependencies, loaded with `defer`.
   Handles: theme, navigation, search + autocomplete, favourites, scroll
   reveal, image fallbacks, newsletter, toasts and back-to-top.
   ========================================================================== */
(function () {
  'use strict';

  var STORE = {
    theme: 'cv:theme',
    favs: 'cv:favourites',
    reviews: 'cv:reviews:',
    news: 'cv:newsletter'
  };

  /* --------------------------------------------------------------- utils */
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

  /* Escape before interpolating into any HTML string. Everything rendered
     client-side goes through this — recipe titles legitimately contain "&"
     ("Fish & Chips") and quotes, which would otherwise corrupt attributes or,
     with markup in the data, execute. */
  var ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
  function escapeHtml(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, function (c) { return ESCAPES[c]; });
  }
  window.cvEscape = escapeHtml;

  function read(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      return raw === null ? fallback : JSON.parse(raw);
    } catch (e) { return fallback; }
  }
  function write(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* private mode */ }
  }

  var toastTimer;
  function toast(message) {
    var el = $('#toast');
    if (!el) return;
    el.textContent = message;
    el.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.classList.remove('is-visible'); }, 2600);
  }
  window.cvToast = toast;

  function debounce(fn, wait) {
    var t;
    return function () {
      var args = arguments, ctx = this;
      clearTimeout(t);
      t = setTimeout(function () { fn.apply(ctx, args); }, wait);
    };
  }

  /* --------------------------------------------------------------- theme */
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    var meta = $('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#17130f' : '#fbf7f0');
    $$('[data-theme-toggle]').forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(theme === 'dark'));
      btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    });
  }

  function initTheme() {
    var stored = read(STORE.theme, null);
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(stored || (prefersDark ? 'dark' : 'light'));

    $$('[data-theme-toggle]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        applyTheme(next);
        write(STORE.theme, next);
      });
    });
  }

  /* ---------------------------------------------------------- navigation */
  function initNav() {
    var header = $('.site-header');
    var nav = $('#main-nav');
    var toggle = $('#nav-toggle');

    if (toggle && nav) {
      toggle.addEventListener('click', function () {
        var open = nav.getAttribute('data-open') === 'true';
        nav.setAttribute('data-open', String(!open));
        toggle.setAttribute('aria-expanded', String(!open));
      });
    }

    $$('.nav-item').forEach(function (item) {
      var trigger = $('.nav-trigger', item);
      if (!trigger) return;
      var close = function () { item.setAttribute('data-open', 'false'); trigger.setAttribute('aria-expanded', 'false'); };
      var open = function () { item.setAttribute('data-open', 'true'); trigger.setAttribute('aria-expanded', 'true'); };

      trigger.addEventListener('click', function (e) {
        e.stopPropagation();
        item.getAttribute('data-open') === 'true' ? close() : open();
      });
      item.addEventListener('mouseenter', function () { if (window.innerWidth > 860) open(); });
      item.addEventListener('mouseleave', function () { if (window.innerWidth > 860) close(); });
      item.addEventListener('keydown', function (e) { if (e.key === 'Escape') { close(); trigger.focus(); } });
      document.addEventListener('click', function (e) { if (!item.contains(e.target)) close(); });
    });

    if (header) {
      var onScroll = function () { header.classList.toggle('is-stuck', window.scrollY > 8); };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }
  }

  /* ----------------------------------------------------------- favourites */
  /* Also read from localStorage, so verify the shape before using array methods. */
  function getFavs() {
    var raw = read(STORE.favs, []);
    if (!Array.isArray(raw)) return [];
    return raw.filter(function (s) { return typeof s === 'string'; });
  }

  function syncFavButtons() {
    var favs = getFavs();
    $$('.fav-btn').forEach(function (btn) {
      var on = favs.indexOf(btn.dataset.slug) !== -1;
      btn.setAttribute('aria-pressed', String(on));
      btn.setAttribute('aria-label', (on ? 'Remove ' : 'Save ') + (btn.dataset.title || 'recipe') + (on ? ' from' : ' to') + ' favourites');
    });
    $$('[data-fav-count]').forEach(function (el) { el.textContent = favs.length ? '(' + favs.length + ')' : ''; });
  }

  function initFavourites() {
    document.addEventListener('click', function (e) {
      var btn = e.target.closest ? e.target.closest('.fav-btn') : null;
      if (!btn) return;
      e.preventDefault();
      e.stopPropagation();
      var favs = getFavs();
      var slug = btn.dataset.slug;
      var i = favs.indexOf(slug);
      if (i === -1) { favs.push(slug); toast('Saved to your favourites'); }
      else { favs.splice(i, 1); toast('Removed from favourites'); }
      write(STORE.favs, favs);
      syncFavButtons();
      document.dispatchEvent(new CustomEvent('cv:favourites-changed', { detail: favs }));
    });
    syncFavButtons();
  }
  window.cvGetFavourites = getFavs;

  /* ------------------------------------------------------- search index */
  var indexPromise = null;
  function loadIndex() {
    if (!indexPromise) {
      indexPromise = fetch(document.body.dataset.base + 'search-index.json')
        .then(function (r) { return r.json(); })
        .catch(function () { return []; });
    }
    return indexPromise;
  }
  window.cvLoadIndex = loadIndex;

  function scoreRecipe(recipe, terms) {
    var haystack = recipe.s;      // pre-lowered searchable blob
    var score = 0;
    for (var i = 0; i < terms.length; i++) {
      var t = terms[i];
      if (haystack.indexOf(t) === -1) return 0;
      if (recipe.t.toLowerCase().indexOf(t) === 0) score += 12;
      else if (recipe.t.toLowerCase().indexOf(t) !== -1) score += 7;
      else score += 2;
    }
    return score + recipe.r;      // nudge by rating
  }
  window.cvScore = scoreRecipe;

  function initAutocomplete() {
    $$('[data-search]').forEach(function (input) {
      var panel = document.getElementById(input.getAttribute('aria-controls'));
      if (!panel) return;
      var active = -1;

      var render = function (matches, query) {
        if (!query) { panel.hidden = true; panel.innerHTML = ''; return; }
        if (!matches.length) {
          panel.hidden = false;
          panel.innerHTML = '<p class="ac-empty">No recipes match &ldquo;' +
            escapeHtml(query) + '&rdquo;. Try an ingredient or cuisine.</p>';
          return;
        }
        panel.hidden = false;
        panel.innerHTML = matches.map(function (m, i) {
          var thumb = m.i
            ? '<img src="' + escapeHtml(document.body.dataset.base + 'assets/img/recipes/' + m.i + '.jpg') +
              '" alt="" loading="lazy" width="44" height="44">'
            : '<span class="ac-ph" aria-hidden="true"></span>';
          return '<a class="ac-item" role="option" id="ac-' + i + '" aria-selected="false" href="' +
            escapeHtml(document.body.dataset.base + 'recipes/' + m.g + '/') + '">' + thumb +
            '<span><strong>' + escapeHtml(m.t) + '</strong><span>' + escapeHtml(m.c) +
            ' &middot; ' + escapeHtml(m.m) + ' min &middot; ' + escapeHtml(m.d) + '</span></span></a>';
        }).join('');
        active = -1;
      };

      var run = debounce(function () {
        var query = input.value.trim().toLowerCase();
        if (query.length < 2) { render([], ''); return; }
        var terms = query.split(/\s+/);
        loadIndex().then(function (data) {
          var matches = data
            .map(function (r) { return { r: r, score: scoreRecipe(r, terms) }; })
            .filter(function (x) { return x.score > 0; })
            .sort(function (a, b) { return b.score - a.score; })
            .slice(0, 7)
            .map(function (x) { return x.r; });
          render(matches, query);
        });
      }, 130);

      input.addEventListener('input', run);
      input.addEventListener('focus', function () { if (input.value.trim().length >= 2) run(); });

      input.addEventListener('keydown', function (e) {
        var items = $$('.ac-item', panel);
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
          if (!items.length) return;
          e.preventDefault();
          if (active > -1) items[active].setAttribute('aria-selected', 'false');
          active = e.key === 'ArrowDown'
            ? (active + 1) % items.length
            : (active <= 0 ? items.length - 1 : active - 1);
          items[active].setAttribute('aria-selected', 'true');
          items[active].scrollIntoView({ block: 'nearest' });
          input.setAttribute('aria-activedescendant', items[active].id);
        } else if (e.key === 'Enter') {
          if (active > -1 && items[active]) { e.preventDefault(); items[active].click(); }
        } else if (e.key === 'Escape') {
          panel.hidden = true; active = -1;
        }
      });

      document.addEventListener('click', function (e) {
        if (!panel.contains(e.target) && e.target !== input) panel.hidden = true;
      });
    });

    /* Keyboard shortcut: "/" focuses search */
    document.addEventListener('keydown', function (e) {
      if (e.key === '/' && !/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName)) {
        var first = $('[data-search]');
        if (first) { e.preventDefault(); first.focus(); }
      }
    });
  }

  /* --------------------------------------------------------- scroll reveal */
  function initReveal() {
    var targets = $$('.reveal');
    if (!targets.length) return;
    if (!('IntersectionObserver' in window)) {
      targets.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = (entry.target.dataset.delay || 0) + 'ms';
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    targets.forEach(function (el) { io.observe(el); });
  }

  /* ------------------------------------------------------------ parallax */
  function initParallax() {
    var layer = $('.hero-bg');
    if (!layer || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        var y = Math.min(window.scrollY, 900);
        layer.style.transform = 'translate3d(0,' + (y * 0.28) + 'px,0)';
        ticking = false;
      });
    }, { passive: true });
  }

  /* ------------------------------------------------- image fallback + fade */
  function initImages() {
    /* Blur-up: fade the image in once decoded. */
    $$('img[data-fade]').forEach(function (img) {
      if (img.complete && img.naturalWidth) { img.style.opacity = 1; return; }
      img.style.opacity = 0;
      img.addEventListener('load', function () { img.style.opacity = 1; }, { once: true });
    });

    /* If a file 404s or fails to decode, swap in the CSS gradient placeholder. */
    document.addEventListener('error', function (e) {
      var img = e.target;
      if (!img || img.tagName !== 'IMG' || img.dataset.failed) return;
      img.dataset.failed = '1';
      var host = img.closest('picture') || img;
      var wrap = host.parentElement;
      if (!wrap) return;
      var title = img.getAttribute('data-title') || img.getAttribute('alt') || 'Recipe';
      var ph = document.createElement('div');
      ph.className = 'img-fallback';
      ph.setAttribute('role', 'img');
      ph.setAttribute('aria-label', title);
      var label = document.createElement('span');
      label.textContent = title;          /* no escaping needed, and no mangling */
      ph.appendChild(label);
      if (img.dataset.phA) { ph.style.setProperty('--ph-a', img.dataset.phA); }
      if (img.dataset.phB) { ph.style.setProperty('--ph-b', img.dataset.phB); }
      host.replaceWith(ph);
    }, true);
  }

  /* ---------------------------------------------------------- newsletter */
  function initForms() {
    $$('form[data-newsletter]').forEach(function (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var input = $('input[type="email"]', form);
        var status = $('.form-status', form.parentElement) || $('.form-status', form);
        var value = (input.value || '').trim();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
          if (status) { status.hidden = false; status.textContent = 'Please enter a valid email address.'; }
          input.setAttribute('aria-invalid', 'true');
          input.focus();
          return;
        }
        input.removeAttribute('aria-invalid');
        write(STORE.news, { email: value, at: Date.now() });
        form.reset();
        if (status) {
          status.hidden = false;
          /* Truthful, because nothing is sent anywhere: the address goes into
             this browser's own storage and no further. Saying "you are on the
             list" when there is no list is a promise the site cannot keep, and
             the privacy page says as much. */
          status.textContent = 'Saved in this browser. The letter is not running yet, so nothing was sent anywhere.';
        }
        toast('Saved on this device.');
      });
    });

    /* Contact form with inline validation */
    var contact = $('form[data-contact]');
    if (contact) {
      var validators = {
        name: function (v) { return v.trim().length >= 2 || 'Please tell us your name.'; },
        email: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) || 'Please enter a valid email address.'; },
        subject: function (v) { return v.trim().length >= 3 || 'Please add a subject.'; },
        message: function (v) { return v.trim().length >= 20 || 'Please write at least 20 characters.'; }
      };
      var validateField = function (field) {
        var fn = validators[field.name];
        if (!fn) return true;
        var result = fn(field.value);
        var errEl = document.getElementById(field.name + '-error');
        if (result === true) {
          field.removeAttribute('aria-invalid');
          if (errEl) errEl.textContent = '';
          return true;
        }
        field.setAttribute('aria-invalid', 'true');
        if (errEl) errEl.textContent = result;
        return false;
      };

      $$('input, textarea', contact).forEach(function (field) {
        field.addEventListener('blur', function () { validateField(field); });
        field.addEventListener('input', function () {
          if (field.getAttribute('aria-invalid') === 'true') validateField(field);
        });
      });

      contact.addEventListener('submit', function (e) {
        e.preventDefault();
        var fields = $$('input[name], textarea[name]', contact);
        var firstBad = null;
        fields.forEach(function (f) { if (!validateField(f) && !firstBad) firstBad = f; });
        if (firstBad) { firstBad.focus(); return; }
        var status = $('#contact-status');
        contact.reset();
        if (status) {
          status.hidden = false;
          /* The form validates and stops. There is no server to post to, so a
             promise of a reply within two working days was untrue, and from
             somebody who might be writing about a recipe that made them ill. */
          status.textContent = 'This form is not connected to email yet, so your message was not sent. '
            + 'Please leave a comment on the recipe instead — I read those.';
          status.focus();
        }
      });
    }
  }

  /* -------------------------------------------------------- back to top */
  function initBackToTop() {
    var btn = $('#back-to-top');
    if (!btn) return;
    var onScroll = function () { btn.classList.toggle('is-visible', window.scrollY > 700); };
    window.addEventListener('scroll', onScroll, { passive: true });
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    });
    onScroll();
  }

  /* ------------------------------------------------------------- modals */
  function initModals() {
    var lastFocus = null;

    function openModal(modal) {
      lastFocus = document.activeElement;
      modal.setAttribute('data-open', 'true');
      modal.removeAttribute('aria-hidden');
      document.body.style.overflow = 'hidden';
      var focusable = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (focusable.length) focusable[0].focus();
    }
    function closeModal(modal) {
      modal.setAttribute('data-open', 'false');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (lastFocus) lastFocus.focus();
    }
    window.cvOpenModal = openModal;
    window.cvCloseModal = closeModal;

    document.addEventListener('click', function (e) {
      var opener = e.target.closest && e.target.closest('[data-modal-open]');
      if (opener) {
        var target = document.getElementById(opener.dataset.modalOpen);
        if (target) { e.preventDefault(); openModal(target); }
        return;
      }
      var closer = e.target.closest && e.target.closest('[data-modal-close]');
      if (closer) { closeModal(closer.closest('.modal')); return; }
      if (e.target.classList && e.target.classList.contains('modal')) closeModal(e.target);
    });

    /* Focus trap + escape */
    document.addEventListener('keydown', function (e) {
      var modal = $('.modal[data-open="true"]');
      if (!modal) return;
      if (e.key === 'Escape') { closeModal(modal); return; }
      if (e.key !== 'Tab') return;
      var f = Array.prototype.slice.call(
        modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
      ).filter(function (el) { return el.offsetParent !== null; });
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });
  }

  /* ---------------------------------------------------------------- boot */
  function boot() {
    initTheme();
    initNav();
    initFavourites();
    initAutocomplete();
    initReveal();
    initParallax();
    initImages();
    initForms();
    initBackToTop();
    initModals();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();

  /* Theme must apply before paint to avoid a flash — this runs from the head. */
})();
