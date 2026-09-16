/* ==========================================================================
   Weekly Delight — recipe page behaviour
   Serving scaler, cook mode, step tracking with timers, reviews and sharing.
   ========================================================================== */
(function () {
  'use strict';

  var root = document.querySelector('[data-recipe]');
  if (!root) return;

  var SLUG = root.dataset.recipe;
  var BASE_SERVINGS = parseInt(root.dataset.servings, 10) || 4;

  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }
  function read(k, f) { try { var v = localStorage.getItem(k); return v === null ? f : JSON.parse(v); } catch (e) { return f; } }
  function write(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  function toast(m) { if (window.cvToast) window.cvToast(m); }

  /* ------------------------------------------------------ serving scaler */

  var VULGAR = { 0.125: '⅛', 0.25: '¼', 0.333: '⅓', 0.375: '⅜',
                 0.5: '½', 0.625: '⅝', 0.667: '⅔', 0.75: '¾', 0.875: '⅞' };

  /* Round sensibly for the unit, then render fractions where they read better. */
  function formatQty(value, unit) {
    if (!isFinite(value) || value <= 0) return '';
    var metric = /^(g|kg|ml|l)$/.test(unit || '');

    if (metric) {
      if (value >= 1000) return String(Math.round(value / 50) * 50);
      if (value >= 100) return String(Math.round(value / 5) * 5);
      if (value >= 20) return String(Math.round(value));
      return String(Math.round(value * 10) / 10);
    }

    if (value >= 10) return String(Math.round(value));

    var whole = Math.floor(value);
    var frac = value - whole;
    /* Snap to the nearest common kitchen fraction within a tolerance. */
    var best = null, bestDiff = 0.07;
    Object.keys(VULGAR).forEach(function (k) {
      var d = Math.abs(frac - parseFloat(k));
      if (d < bestDiff) { bestDiff = d; best = k; }
    });
    if (frac < 0.06) return String(whole || 0);
    if (best) return (whole ? whole + ' ' : '') + VULGAR[best];
    return String(Math.round(value * 4) / 4);
  }

  /* -------------------------------------------------- metric / US toggle
     Mirror of src/lib/units.js — see that file for why this only ever
     converts mass to mass (g/kg to oz/lb) or volume to volume (ml/l to cup,
     tbsp, tsp), never mass to volume. A build-time module cannot run in a
     browser with no bundler, so the same short table is kept here, the same
     way src/lib/ingredients.js's formatQty is mirrored in this file already. */
  var G_PER_OZ = 28.3495, G_PER_LB = 453.592;
  var ML_PER_TSP = 4.92892, ML_PER_TBSP = 14.7868, ML_PER_CUP = 236.588;

  function isConvertible(unit) { return unit === 'g' || unit === 'kg' || unit === 'ml' || unit === 'l'; }

  function toUS(qty, unit) {
    if (unit === 'g' || unit === 'kg') {
      var grams = unit === 'kg' ? qty * 1000 : qty;
      if (grams >= G_PER_LB * 0.75) return { qty: grams / G_PER_LB, unit: 'lb' };
      return { qty: grams / G_PER_OZ, unit: 'oz' };
    }
    var ml = unit === 'l' ? qty * 1000 : qty;
    if (ml >= ML_PER_CUP * 0.4) return { qty: ml / ML_PER_CUP, unit: 'cup' };
    if (ml >= ML_PER_TBSP * 0.75) return { qty: ml / ML_PER_TBSP, unit: 'tbsp' };
    return { qty: ml / ML_PER_TSP, unit: 'tsp' };
  }

  /* Servings and unit system both change the same numbers, so one render
     pass reads both rather than the two features stepping on each other's
     output — toggling units used to discard whatever serving size was set,
     because applyServings and a first draft of this both wrote data-qty's
     base value straight to the page instead of going through one function. */
  var currentServings = BASE_SERVINGS;
  var currentUnits = /^(metric|us)$/.test(read('cv:units', 'metric')) ? read('cv:units', 'metric') : 'metric';

  function renderQuantities() {
    var ratio = currentServings / BASE_SERVINGS;
    $$('[data-qty]').forEach(function (el) {
      var base = parseFloat(el.dataset.qty);
      var unit = el.dataset.unit || '';
      var qty = base * ratio;
      if (currentUnits === 'us' && isConvertible(unit)) {
        var converted = toUS(qty, unit);
        qty = converted.qty;
        unit = converted.unit;
      }
      el.textContent = formatQty(qty, unit) + (unit ? ' ' + unit : '');
    });
    $$('[data-servings-out]').forEach(function (el) { el.textContent = currentServings; });
    var yieldEl = $('[data-yield]');
    if (yieldEl) yieldEl.textContent = currentServings + (currentServings === 1 ? ' serving' : ' servings');
  }

  function applyServings(servings) {
    currentServings = servings;
    renderQuantities();
  }

  function initScaler() {
    var wrap = $('[data-scaler]');
    if (!wrap) return;
    var dec = $('[data-servings-dec]', wrap);
    var inc = $('[data-servings-inc]', wrap);
    var reset = $('[data-servings-reset]');

    function update(next) {
      currentServings = Math.max(1, Math.min(48, next));
      dec.disabled = currentServings <= 1;
      inc.disabled = currentServings >= 48;
      renderQuantities();
      if (reset) reset.hidden = currentServings === BASE_SERVINGS;
    }

    dec.addEventListener('click', function () { update(currentServings - 1); });
    inc.addEventListener('click', function () { update(currentServings + 1); });
    if (reset) reset.addEventListener('click', function () { update(BASE_SERVINGS); });
    update(BASE_SERVINGS);
  }

  function initUnitToggle() {
    var toggle = $('[data-unit-toggle]');
    if (!toggle) return;
    var buttons = $$('button', toggle);

    function paint() {
      buttons.forEach(function (btn) {
        var active = btn.dataset.units === currentUnits;
        btn.setAttribute('aria-pressed', active ? 'true' : 'false');
      });
    }

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (btn.dataset.units === currentUnits) return;
        currentUnits = btn.dataset.units;
        write('cv:units', currentUnits);
        paint();
        renderQuantities();
      });
    });
    paint();
  }

  /* -------------------------------------------------- ingredient ticking */
  function initIngredients() {
    var key = 'cv:ing:' + SLUG;
    var checked = read(key, []);
    $$('.ing-check input').forEach(function (input, i) {
      input.checked = checked.indexOf(i) !== -1;
      input.addEventListener('change', function () {
        var list = read(key, []);
        var at = list.indexOf(i);
        if (input.checked && at === -1) list.push(i);
        if (!input.checked && at !== -1) list.splice(at, 1);
        write(key, list);
      });
    });
    var clear = $('[data-clear-ingredients]');
    if (clear) {
      clear.addEventListener('click', function () {
        $$('.ing-check input').forEach(function (i) { i.checked = false; });
        write(key, []);
        toast('Checklist cleared');
      });
    }
  }

  /* ---------------------------------------------------- steps + cook mode */
  function initSteps() {
    var steps = $$('.steps li');
    if (!steps.length) return;
    var activeIndex = 0;

    function setActive(i) {
      activeIndex = Math.max(0, Math.min(steps.length - 1, i));
      steps.forEach(function (li, n) { li.classList.toggle('is-active', n === activeIndex); });
      if (document.body.classList.contains('cook-mode')) {
        steps[activeIndex].scrollIntoView({ block: 'center', behavior: 'smooth' });
      }
    }

    steps.forEach(function (li, i) {
      li.addEventListener('click', function (e) {
        if (e.target.closest('.step-btn')) return;
        setActive(i);
      });

      var done = li.querySelector('[data-step-done]');
      if (done) {
        done.addEventListener('click', function () {
          var isDone = li.classList.toggle('is-done');
          done.textContent = isDone ? 'Undo' : 'Mark done';
          if (isDone && i < steps.length - 1) setActive(i + 1);
        });
      }

      var timerBtn = li.querySelector('[data-timer]');
      if (timerBtn) {
        var seconds = parseInt(timerBtn.dataset.timer, 10);
        var label = timerBtn.textContent;
        var handle = null;

        timerBtn.addEventListener('click', function () {
          if (handle) {
            clearInterval(handle); handle = null;
            timerBtn.classList.remove('is-running');
            timerBtn.textContent = label;
            return;
          }
          var left = seconds;
          timerBtn.classList.add('is-running');
          var tick = function () {
            var m = Math.floor(left / 60), s = left % 60;
            timerBtn.textContent = m + ':' + (s < 10 ? '0' : '') + s;
            if (left <= 0) {
              clearInterval(handle); handle = null;
              timerBtn.classList.remove('is-running');
              timerBtn.textContent = label;
              toast('Timer finished for step ' + (i + 1));
              try {
                var ctx = new (window.AudioContext || window.webkitAudioContext)();
                var osc = ctx.createOscillator(), gain = ctx.createGain();
                osc.connect(gain); gain.connect(ctx.destination);
                osc.frequency.value = 880; gain.gain.value = 0.08;
                osc.start(); setTimeout(function () { osc.stop(); ctx.close(); }, 550);
              } catch (e) { /* audio blocked */ }
              if ('vibrate' in navigator) navigator.vibrate([200, 100, 200]);
            }
            left--;
          };
          tick();
          handle = setInterval(tick, 1000);
        });
      }
    });

    setActive(0);

    /* Cook mode ------------------------------------------------------- */
    var wakeLock = null;
    function enterCook() {
      document.body.classList.add('cook-mode');
      $$('[data-cook-toggle]').forEach(function (b) { b.setAttribute('aria-pressed', 'true'); });
      if (navigator.wakeLock && navigator.wakeLock.request) {
        navigator.wakeLock.request('screen').then(function (l) { wakeLock = l; }).catch(function () {});
      }
      setActive(activeIndex);
      toast('Cook Mode on. Your screen will stay awake.');
    }
    function exitCook() {
      document.body.classList.remove('cook-mode');
      $$('[data-cook-toggle]').forEach(function (b) { b.setAttribute('aria-pressed', 'false'); });
      if (wakeLock) { wakeLock.release().catch(function () {}); wakeLock = null; }
    }

    $$('[data-cook-toggle]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        document.body.classList.contains('cook-mode') ? exitCook() : enterCook();
      });
    });
    var exitBtn = $('[data-cook-exit]');
    if (exitBtn) exitBtn.addEventListener('click', exitCook);

    document.addEventListener('keydown', function (e) {
      if (!document.body.classList.contains('cook-mode')) return;
      if (e.key === 'Escape') exitCook();
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') { e.preventDefault(); setActive(activeIndex + 1); }
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') { e.preventDefault(); setActive(activeIndex - 1); }
    });
  }

  /* --------------------------------------------------------------- share */
  function initShare() {
    var url = window.location.href;
    var title = document.title;

    $$('[data-share]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var kind = btn.dataset.share;
        var img = root.dataset.image || '';
        var targets = {
          pinterest: 'https://pinterest.com/pin/create/button/?url=' + encodeURIComponent(url) +
                     '&media=' + encodeURIComponent(img) + '&description=' + encodeURIComponent(title),
          facebook: 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url),
          x: 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(title),
          whatsapp: 'https://wa.me/?text=' + encodeURIComponent(title + ' ' + url),
          email: 'mailto:?subject=' + encodeURIComponent(title) + '&body=' + encodeURIComponent('Thought you would like this: ' + url)
        };
        if (kind === 'copy') {
          (navigator.clipboard ? navigator.clipboard.writeText(url) : Promise.reject())
            .then(function () { toast('Link copied to clipboard'); })
            .catch(function () { toast('Press Ctrl+C to copy: ' + url); });
          return;
        }
        if (kind === 'native' && navigator.share) {
          navigator.share({ title: title, url: url }).catch(function () {});
          return;
        }
        if (targets[kind]) window.open(targets[kind], '_blank', 'noopener,width=620,height=560');
      });
    });

    var printBtn = $('[data-print]');
    if (printBtn) printBtn.addEventListener('click', function () { window.print(); });
  }

  /* ------------------------------------------------------------- reviews */
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  /* Reviews live in localStorage, which the user (or another script on the
     origin) can edit freely. Normalise every field on read so a malformed
     entry cannot crash the render — `'*'.repeat(-1)` and `new Date(NaN)
     .toISOString()` both throw, which previously took out the whole list. */
  function sanitiseReviews(raw) {
    if (!Array.isArray(raw)) return [];
    return raw.map(function (r) {
      if (!r || typeof r !== 'object') return null;
      var rating = Math.round(Number(r.rating));
      if (!isFinite(rating)) rating = 0;
      rating = Math.max(1, Math.min(5, rating));
      var at = Number(r.at);
      if (!isFinite(at) || at <= 0) at = Date.now();
      var name = String(r.name == null ? '' : r.name).slice(0, 80).trim();
      var body = String(r.body == null ? '' : r.body).slice(0, 4000).trim();
      if (!name || !body) return null;
      return { name: name, body: body, rating: rating, at: at };
    }).filter(Boolean);
  }

  function initReviews() {
    var list = $('#review-list');
    var form = $('#review-form');
    if (!list || !form) return;
    var key = 'cv:reviews:' + SLUG;

    function render() {
      var reviews = sanitiseReviews(read(key, []));
      var summary = $('#review-summary');
      if (!reviews.length) {
        list.innerHTML = '<p class="form-note">No reader reviews yet. Cooked it? You could be the first.</p>';
        if (summary) summary.textContent = '';
        return;
      }
      var avg = reviews.reduce(function (a, r) { return a + r.rating; }, 0) / reviews.length;
      if (summary) {
        summary.textContent = reviews.length + ' reader review' + (reviews.length === 1 ? '' : 's') +
          ' · average ' + avg.toFixed(1) + ' out of 5';
      }
      list.innerHTML = reviews.slice().reverse().map(function (r) {
        var initial = escapeHtml(r.name.charAt(0).toUpperCase());
        var stars = '★'.repeat(r.rating) + '☆'.repeat(5 - r.rating);
        var date = new Date(r.at);
        return '<article class="review"><div class="review-head">' +
          '<span class="avatar" aria-hidden="true">' + initial + '</span>' +
          '<strong>' + escapeHtml(r.name) + '</strong>' +
          '<span class="stars" aria-label="' + r.rating + ' out of 5 stars">' +
          '<span style="color:var(--highlight)">' + stars + '</span></span>' +
          '<time datetime="' + escapeHtml(date.toISOString()) + '">' +
          escapeHtml(date.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })) +
          '</time></div><p>' + escapeHtml(r.body) + '</p></article>';
      }).join('');
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = $('#review-name').value.trim();
      var body = $('#review-body').value.trim();
      var ratingInput = form.querySelector('input[name="rating"]:checked');
      var status = $('#review-status');

      if (!name || !body || !ratingInput) {
        if (status) { status.hidden = false; status.textContent = 'Please add a name, a rating and a few words.'; }
        return;
      }
      var reviews = sanitiseReviews(read(key, []));
      reviews.push({ name: name, body: body, rating: parseInt(ratingInput.value, 10), at: Date.now() });
      write(key, reviews);
      form.reset();
      render();
      if (status) {
        status.hidden = false;
        status.textContent = 'Thank you. Your review is saved on this device.';
      }
      toast('Review posted');
    });

    render();
  }

  /* ------------------------------------------------------- reading state */
  function initProgress() {
    var bar = $('#read-progress');
    if (!bar) return;
    var onScroll = function () {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (h > 0 ? Math.min(100, (window.scrollY / h) * 100) : 0) + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  initScaler();
  initUnitToggle();
  initIngredients();
  initSteps();
  initShare();
  initReviews();
  initProgress();
})();
