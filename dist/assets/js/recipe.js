/* ==========================================================================
   CulinaryVault — recipe page behaviour
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

  function applyServings(servings) {
    var ratio = servings / BASE_SERVINGS;
    $$('[data-qty]').forEach(function (el) {
      var base = parseFloat(el.dataset.qty);
      var unit = el.dataset.unit || '';
      var text = formatQty(base * ratio, unit);
      el.textContent = text + (unit ? ' ' + unit : '');
    });
    $$('[data-servings-out]').forEach(function (el) { el.textContent = servings; });
    var yieldEl = $('[data-yield]');
    if (yieldEl) yieldEl.textContent = servings + (servings === 1 ? ' serving' : ' servings');
  }

  function initScaler() {
    var wrap = $('[data-scaler]');
    if (!wrap) return;
    var current = BASE_SERVINGS;
    var dec = $('[data-servings-dec]', wrap);
    var inc = $('[data-servings-inc]', wrap);
    var reset = $('[data-servings-reset]');

    function update(next) {
      current = Math.max(1, Math.min(48, next));
      dec.disabled = current <= 1;
      inc.disabled = current >= 48;
      applyServings(current);
      if (reset) reset.hidden = current === BASE_SERVINGS;
    }

    dec.addEventListener('click', function () { update(current - 1); });
    inc.addEventListener('click', function () { update(current + 1); });
    if (reset) reset.addEventListener('click', function () { update(BASE_SERVINGS); });
    update(BASE_SERVINGS);
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

  function initReviews() {
    var list = $('#review-list');
    var form = $('#review-form');
    if (!list || !form) return;
    var key = 'cv:reviews:' + SLUG;

    function render() {
      var reviews = read(key, []);
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
        var initial = escapeHtml((r.name || '?').charAt(0).toUpperCase());
        var stars = '★'.repeat(r.rating) + '☆'.repeat(5 - r.rating);
        return '<article class="review"><div class="review-head">' +
          '<span class="avatar" aria-hidden="true">' + initial + '</span>' +
          '<strong>' + escapeHtml(r.name) + '</strong>' +
          '<span class="stars" aria-label="' + r.rating + ' out of 5 stars">' +
          '<span style="color:var(--highlight)">' + stars + '</span></span>' +
          '<time datetime="' + new Date(r.at).toISOString() + '">' +
          new Date(r.at).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }) +
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
      var reviews = read(key, []);
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
  initIngredients();
  initSteps();
  initShare();
  initReviews();
  initProgress();
})();
