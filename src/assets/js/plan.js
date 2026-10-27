/* ==========================================================================
   Weekly Delight — the weekly plan and the reader's own plan
   Rebuilds the shopping list when the number of people changes, keeps the
   ticked items and the reader's plan in this browser only, and prints.
   Needs shopping-core.js (window.WDShopping), loaded before it.
   ========================================================================== */
(function () {
  'use strict';
  var S = window.WDShopping;
  if (!S) return;
  function $(s, c) { return (c || document).querySelector(s); }
  function $$(s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); }
  function read(k, f) { try { var v = localStorage.getItem(k); return v === null ? f : JSON.parse(v); } catch (e) { return f; } }
  function write(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch (e) { return false; } }
  var esc = window.cvEscape || function (s) { return String(s); };
  var toast = window.cvToast || function () {};
  var BASE = document.body.dataset.base || '/';

  $$('[data-print]').forEach(function (b) { b.addEventListener('click', function () { window.print(); }); });

  function listHtml(lists, ticked) {
    function row(i) {
      var id = i.name;
      return '<li><label class="ing-check"><input type="checkbox" data-shop-item value="' + esc(id) + '"' +
        (ticked && ticked.indexOf(id) !== -1 ? ' checked' : '') + '>' +
        '<span class="shop-qty">' + esc(i.amount) + '</span> <span class="shop-name">' + esc(i.name) +
        (i.toServe ? ' <em>(to serve)</em>' : '') + '</span></label>' +
        '<span class="shop-from">' + esc(i.from.join(', ')) + '</span></li>';
    }
    return '<h3>To buy <span class="hub-group__count">' + lists.buy.length + '</span></h3>' +
      '<ul class="shop-list">' + lists.buy.map(row).join('') + '</ul>' +
      '<h3>Check the cupboard <span class="hub-group__count">' + lists.pantry.length + '</span></h3>' +
      '<p class="form-note">Seasonings, oils and dry goods most kitchens keep. Listed so you can check, not assumed.</p>' +
      '<ul class="shop-list shop-list--pantry">' + lists.pantry.map(row).join('') + '</ul>' +
      (lists.optional.length ? '<h3>Optional</h3><ul class="shop-list">' + lists.optional.map(row).join('') + '</ul>' : '');
  }

  function bindTicks(box, key) {
    box.addEventListener('change', function (e) {
      if (!e.target.matches('[data-shop-item]')) return;
      var ticked = $$('[data-shop-item]:checked', box).map(function (i) { return i.value; });
      write(key, ticked);
    });
  }

  /* ---------------------------------------------------------- weekly plan */
  var weekly = $('[data-weekly-plan]');
  if (weekly) {
    var data = [];
    try { data = JSON.parse($('#plan-data').textContent); } catch (e) { data = []; }
    var stamp = ($('time', weekly) || {}).getAttribute ? $('time', weekly).getAttribute('datetime') : '';
    var key = 'cv:plan:' + stamp;
    var state = read(key, { people: null, ticked: [] }) || {};
    var out = $('[data-plan-people]');
    var people = parseInt(state.people || out.textContent, 10) || 4;
    var box = $('[data-shop-lists]');
    var redraw = function () {
      out.textContent = people;
      $('[data-plan-dec]').disabled = people <= 1;
      $('[data-plan-inc]').disabled = people >= 16;
      $$('[data-plan-factor]').forEach(function (el) { el.textContent = 'scaled to ' + people; });
      var lists = S.build(data.map(function (r) { return { slug: r.slug, title: r.title, servings: r.servings, make: people, lines: r.lines }; }));
      box.innerHTML = listHtml(lists, state.ticked || []);
      state.people = people;
      write(key, state);
    };
    $('[data-plan-dec]').addEventListener('click', function () { people = Math.max(1, people - 1); redraw(); });
    $('[data-plan-inc]').addEventListener('click', function () { people = Math.min(16, people + 1); redraw(); });
    box.addEventListener('change', function (e) {
      if (!e.target.matches('[data-shop-item]')) return;
      state.ticked = $$('[data-shop-item]:checked', box).map(function (i) { return i.value; });
      write(key, state);
    });
    var save = $('[data-plan-save]');
    if (save) save.addEventListener('click', function () {
      if (!window.cvAddFavourites) return;
      window.cvAddFavourites(data.map(function (r) { return r.slug; }));
      toast('All five saved to your favourites');
    });
    if (data.length) redraw();
  }

  /* ------------------------------------------------------------- my plan */
  var mine = $('[data-my-plan]');
  if (!mine) return;
  var PLAN_KEY = 'cv:my-plan';
  var MAX = 7;
  var plan = read(PLAN_KEY, []);
  if (!Array.isArray(plan)) plan = [];
  plan = plan.filter(function (p) { return p && typeof p.slug === 'string'; }).slice(0, MAX);
  var index = {};
  var lines = {};       /* slug -> parsed ingredient lines, read from the recipe page */
  var savedBox = $('[data-my-saved]');
  var daysBox = $('[data-my-days]');
  var shopBox = $('[data-my-shopping]');
  bindTicks(shopBox, 'cv:my-plan:ticked');

  function save() { if (!write(PLAN_KEY, plan)) toast('This browser is not keeping data, so the plan will not be remembered'); }

  /* The ingredient list as the recipe page itself prints it: the measure from data-qty/data-unit, the food from the text. */
  function readRecipe(slug) {
    if (lines[slug]) return Promise.resolve(lines[slug]);
    return fetch(BASE + 'recipes/' + encodeURIComponent(slug) + '/').then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.text();
    }).then(function (html) {
      var doc = new DOMParser().parseFromString(html, 'text/html');
      var article = doc.querySelector('[data-recipe]');
      var out = $$('.ingredients > li', doc).map(function (li) {
        if (li.classList.contains('ing-group')) return { group: li.textContent.trim() };
        var q = li.querySelector('[data-qty]');
        var name = (li.querySelector('.ing-text') || li).textContent.trim();
        return q ? { qty: parseFloat(q.dataset.qty), unit: q.dataset.unit || '', name: name } : { qty: null, unit: '', name: name, raw: name };
      });
      lines[slug] = { servings: article ? parseInt(article.dataset.servings, 10) || 4 : 4, lines: out };
      return lines[slug];
    });
  }

  function drawSaved() {
    var favs = window.cvGetFavourites ? window.cvGetFavourites() : [];
    if (!favs.length) {
      savedBox.innerHTML = '<p>You have no saved recipes yet. Press the heart on any recipe, or start from <a href="' + BASE + 'weekly-plan/">this week\'s five dinners</a>.</p>';
      return;
    }
    savedBox.innerHTML = '<ul class="compact-list compact-list--actions">' + favs.map(function (slug) {
      var r = index[slug];
      var inPlan = plan.some(function (p) { return p.slug === slug; });
      return '<li><a href="' + BASE + 'recipes/' + esc(slug) + '/">' + esc(r ? r.t : slug) + '</a>' +
        '<button type="button" class="btn btn--ghost btn--sm" data-add="' + esc(slug) + '"' + (inPlan || plan.length >= MAX ? ' disabled' : '') + '>' +
        (inPlan ? 'In your plan' : 'Add to plan') + '</button></li>';
    }).join('') + '</ul>' + (plan.length >= MAX ? '<p class="form-note">A plan holds up to ' + MAX + ' recipes.</p>' : '');
  }

  var DAYS = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'];
  function drawDays() {
    if (!plan.length) { daysBox.innerHTML = '<li class="form-note">Nothing in your plan yet.</li>'; return; }
    daysBox.innerHTML = plan.map(function (p, i) {
      var r = index[p.slug];
      var info = lines[p.slug];
      return '<li class="pick"><div class="pick__body"><span class="pick__num">' + DAYS[i] + '</span>' +
        '<h3><a href="' + BASE + 'recipes/' + esc(p.slug) + '/">' + esc(r ? r.t : p.slug) + '</a></h3>' +
        (r ? '<p class="form-note">' + esc(r.m) + ' min start to finish' + (r.u ? ', plus untimed stages' : '') + '</p>' : '') +
        '<div class="servings-control"><span>People</span>' +
        '<button type="button" data-less="' + i + '" aria-label="Fewer people for ' + esc(r ? r.t : p.slug) + '">&minus;</button>' +
        '<output aria-live="polite">' + p.make + '</output>' +
        '<button type="button" data-more="' + i + '" aria-label="More people for ' + esc(r ? r.t : p.slug) + '">+</button></div>' +
        (info ? '<p class="form-note">Written for ' + info.servings + '.</p>' : '') +
        '<button type="button" class="btn btn--ghost btn--sm" data-remove="' + i + '">Remove</button>' +
        (i > 0 ? ' <button type="button" class="btn btn--ghost btn--sm" data-up="' + i + '">Move up</button>' : '') +
        '</div></li>';
    }).join('');
  }

  function drawShopping() {
    if (!plan.length) { shopBox.innerHTML = '<p class="form-note">Add recipes above to see the list.</p>'; return; }
    shopBox.innerHTML = '<p class="form-note">Reading the ingredient lists…</p>';
    Promise.all(plan.map(function (p) { return readRecipe(p.slug).then(function (info) { return { p: p, info: info }; }); }))
      .then(function (all) {
        var lists = S.build(all.map(function (x) {
          var r = index[x.p.slug];
          return { slug: x.p.slug, title: r ? r.t : x.p.slug, servings: x.info.servings, make: x.p.make, lines: x.info.lines };
        }));
        shopBox.innerHTML = listHtml(lists, read('cv:my-plan:ticked', []));
        drawDays();
      }, function () {
        shopBox.innerHTML = '<p>The ingredient lists could not be loaded, so the shopping list is not available right now. Check your connection and reload the page.</p>';
      });
  }

  function redrawAll() { drawSaved(); drawDays(); drawShopping(); }

  mine.addEventListener('click', function (e) {
    var t = e.target.closest('button');
    if (!t) return;
    if (t.dataset.add) {
      if (plan.length >= MAX) return;
      var r = index[t.dataset.add];
      plan.push({ slug: t.dataset.add, make: r ? r.v : 4 });
      save(); redrawAll(); toast('Added to your plan');
    } else if (t.dataset.remove != null) {
      plan.splice(+t.dataset.remove, 1); save(); redrawAll();
    } else if (t.dataset.less != null) {
      var a = plan[+t.dataset.less]; a.make = Math.max(1, a.make - 1); save(); drawShopping();
    } else if (t.dataset.more != null) {
      var b = plan[+t.dataset.more]; b.make = Math.min(24, b.make + 1); save(); drawShopping();
    } else if (t.dataset.up != null) {
      var i = +t.dataset.up; var x = plan[i]; plan[i] = plan[i - 1]; plan[i - 1] = x; save(); drawDays();
    } else if (t.hasAttribute('data-plan-clear')) {
      plan = []; save(); write('cv:my-plan:ticked', []); redrawAll();
    }
  });

  var start = function () { redrawAll(); };
  if (window.cvLoadIndex) {
    window.cvLoadIndex().then(function (json) {
      json.forEach(function (r) { index[r.g] = r; });
      start();
    }, function () {
      savedBox.innerHTML = '<p>The recipe list could not be loaded, so your saved recipes cannot be shown right now. Check your connection and reload.</p>';
    });
  } else start();
  document.addEventListener('cv:favourites-changed', drawSaved);
})();
