/* ==========================================================================
   Weekly Delight — recipe directory and search results
   Client-side filtering, sorting and rendering from search-index.json.
   ========================================================================== */
(function () {
  'use strict';

  var root = document.querySelector('[data-directory]');
  if (!root) return;

  function $(s, c) { return (c || document).querySelector(s); }
  function $$(s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); }
  var esc = window.cvEscape;   /* app.js always loads first */

  var grid = $('#results');
  var countEl = $('#result-count');
  var chipRow = $('#active-filters');
  var sortSelect = $('#sort');
  var queryInput = $('#directory-query');
  var BASE = document.body.dataset.base;

  var state = {
    q: '',
    category: [],
    cuisine: [],
    tag: [],
    difficulty: [],
    course: [],
    method: [],
    time: null,
    /* Diet filters match what qualifies as written; this adds the recipes that qualify only
       with a swap the recipe names ("Vegan option"). */
    swaps: false,
    favourites: root.dataset.directory === 'favourites',
    sort: 'popular'
  };

  /* Hydrate state from the URL so filtered views are shareable */
  var params = new URLSearchParams(location.search);
  if (params.get('q')) state.q = params.get('q');
  var LISTS = ['course', 'category', 'cuisine', 'tag', 'difficulty', 'method'];
  /* What the chips say for the coded filters; the checkbox labels hold the same words. */
  var LABELS = {};
  $$('[data-filter]').forEach(function (input) {
    var label = input.parentNode.querySelector('span');
    if (label) LABELS[input.dataset.filter + ':' + input.value] = label.textContent;
  });
  LISTS.forEach(function (k) {
    if (params.get(k)) state[k] = params.get(k).split(',').filter(Boolean);
  });
  if (params.get('time')) state.time = parseInt(params.get('time'), 10);
  if (params.get('swaps') === '1') state.swaps = true;
  if (params.get('sort')) state.sort = params.get('sort');

  if (queryInput && state.q) queryInput.value = state.q;
  if (sortSelect) sortSelect.value = state.sort;

  /* Stars only for a recipe with real reader reviews (src/data/reviews.json). There are none yet, and
     a line saying so on every card read as a public verdict the site has no grounds for, so a recipe
     without reviews shows nothing here at all. */
  function stars(rating) {
    var value = Math.max(0, Math.min(5, Number(rating) || 0));
    if (!value) return '';
    var pct = (value / 5) * 100;
    return '<span class="stars"><span class="stars-glyphs" aria-hidden="true">★★★★★' +
      '<span style="width:' + pct + '%">★★★★★</span></span>' +
      '<b>' + value.toFixed(1) + '</b><span class="sr-only"> out of 5 from reader reviews</span></span>';
  }

  /* Matches SUPPORT_LABELS in src/templates/layout.js: a side filed under Dinner says "Side dish". */
  var SUPPORT = { side: 'Side dish', sauce: 'Sauce', condiment: 'Condiment', basic: 'Kitchen basic', bread: 'Bread' };

  function cardHtml(r) {
    /* Slugs and colours come from our own build, but they are escaped and
       pattern-checked all the same: a hand-edited index must not be able to
       inject markup. */
    var slugSafe = String(r.g).replace(/[^a-z0-9-]/gi, '');
    var fileSafe = String(window.cvIndexImage(r)).replace(/[^a-z0-9-]/gi, '');
    var alt = r.a || r.t;
    var colour = /^#[0-9a-f]{6}$/i.test(r.k || '') ? r.k : '';
    var href = BASE + 'recipes/' + slugSafe + '/';

    var media = fileSafe
      ? '<picture>' +
          '<source srcset="' + esc(BASE + 'assets/img/recipes/' + fileSafe + '.webp') + '" type="image/webp">' +
          '<img src="' + esc(BASE + 'assets/img/recipes/' + fileSafe + '.jpg') + '" alt="' + esc(alt) + '" ' +
          'loading="lazy" decoding="async" width="800" height="600" data-fade ' +
          'data-title="' + esc(r.t) + '" data-ph-a="' + (colour || '#c8763f') + '" data-ph-b="#8c5a3c">' +
        '</picture>'
      : '<div class="img-fallback" role="img" aria-label="' + esc(alt) + '"><span>' + esc(r.t) + '</span></div>';

    return '<article class="card reveal is-visible">' +
      '<div class="card-media" style="background:' + (colour || 'var(--bg-sunken)') + '">' + media +
        '<div class="card-badges"><span class="badge badge--glass">' + esc(r.c) + '</span></div>' +
        '<button class="fav-btn" type="button" data-slug="' + esc(slugSafe) + '" data-title="' + esc(r.t) +
          '" aria-pressed="false" aria-label="Save ' + esc(r.t) + ' to favourites">' +
          '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1L12 21l7.7-7.6 1.1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>' +
        '</button>' +
        '<div class="quick-view"><dl>' +
          '<div><dt>Prep</dt><dd>' + esc(r.p) + 'm</dd></div>' +
          '<div><dt>Cook</dt><dd>' + esc(r.o) + 'm</dd></div>' +
          '<div><dt>Serves</dt><dd>' + esc(r.v) + '</dd></div>' +
        '</dl><a class="btn btn--light btn--sm" href="' + esc(href) + '">Quick view</a></div>' +
      '</div>' +
      '<div class="card-body">' +
        '<span class="card-kicker">' + esc(SUPPORT[r.j] || r.n) + '</span>' +
        '<h3><a href="' + esc(href) + '">' + esc(r.t) + '</a></h3>' +
        '<p>' + esc(r.e) + '</p>' +
        '<div class="card-foot">' + stars(r.r) +
          '<span class="card-meta"><svg viewBox="0 0 24 24" aria-hidden="true">' +
          '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>' +
          esc(cardTime(r.m, r.x) + (r.u ? '+' : '')) + ' <i>&middot;</i> ' + esc(r.d) + '</span>' +
        '</div>' +
      '</div></article>';
  }

  /* Start-to-finish time for a card, matching compactTime() in
     src/lib/util.js: minutes under two hours, half hours above, days above
     two days, and a range where the method gives one. */
  function cardTime(min, max) {
    min = Number(min) || 0;
    var top = max && Number(max) > min ? Number(max) : min;
    if (!min) return '0 min';
    if (top < 120) return top > min ? min + '–' + top + ' min' : min + ' min';
    if (min >= 2880) {
      var d = function (m) { return Math.round(m / 720) / 2; };
      return top > min && d(top) !== d(min) ? d(min) + '–' + d(top) + ' days' : d(min) + ' days';
    }
    var h = function (m) { return Math.round(m / 30) / 2; };
    if (min < 60) return min + ' min–' + h(top) + ' hr';
    return top > min && h(top) !== h(min) ? h(min) + '–' + h(top) + ' hr' : h(min) + ' hr';
  }

  function matches(r, favs) {
    if (state.favourites && favs.indexOf(r.g) === -1) return false;
    if (state.category.length && state.category.indexOf(r.n) === -1) return false;
    if (state.cuisine.length && state.cuisine.indexOf(r.c) === -1) return false;
    if (state.difficulty.length && state.difficulty.indexOf(r.d) === -1) return false;
    if (state.course.length && state.course.indexOf(r.j) === -1) return false;
    if (state.method.length) {
      for (var m = 0; m < state.method.length; m++) if (!r.y || r.y.indexOf(state.method[m]) === -1) return false;
    }
    /* A recipe whose method needs time it does not give cannot promise to fit under a limit. */
    if (state.time && (r.m > state.time || r.u)) return false;
    if (state.tag.length) {
      for (var i = 0; i < state.tag.length; i++) {
        if (r.f.indexOf(state.tag[i]) === -1 && !(state.swaps && r.h && r.h.indexOf(state.tag[i]) !== -1)) return false;
      }
    }
    return true;
  }

  function updateUrl() {
    var p = new URLSearchParams();
    if (state.q) p.set('q', state.q);
    LISTS.forEach(function (k) {
      if (state[k].length) p.set(k, state[k].join(','));
    });
    if (state.time) p.set('time', state.time);
    if (state.swaps) p.set('swaps', '1');
    if (state.sort !== 'popular') p.set('sort', state.sort);
    var qs = p.toString();
    history.replaceState(null, '', qs ? '?' + qs : location.pathname);
  }

  function renderChips() {
    if (!chipRow) return;
    var chips = [];
    LISTS.forEach(function (k) {
      state[k].forEach(function (v) {
        chips.push('<span class="chip is-active">' + esc(LABELS[k + ':' + v] || v) +
          '<button type="button" data-remove-filter data-key="' + esc(k) + '" data-value="' + esc(v) +
          '" aria-label="Remove filter ' + esc(v) + '">&times;</button></span>');
      });
    });
    if (state.swaps && state.tag.length) {
      chips.push('<span class="chip is-active">Including swaps' +
        '<button type="button" data-remove-filter data-key="swaps" aria-label="Stop including recipes that need a swap">&times;</button></span>');
    }
    if (state.time) {
      chips.push('<span class="chip is-active">Under ' + esc(state.time) + ' min' +
        '<button type="button" data-remove-filter data-key="time" aria-label="Remove time filter">&times;</button></span>');
    }
    if (chips.length) {
      chips.push('<button type="button" class="chip" id="clear-all">Clear all</button>');
    }
    chipRow.innerHTML = chips.join('');
    var active = chips.length ? chips.length - 1 : 0;
    $$('[data-filters-count]').forEach(function (el) { el.textContent = active ? ' (' + active + ' on)' : ''; });
  }

  var data = [];

  /* Painting every card at once made the recipes and search pages 2,400 articles and about 90,000 nodes, which a
     phone took ten seconds to lay out. Show a page at a time; the button below the grid brings in the next one. */
  var PAGE = 60;
  var current = [];
  var shown = 0;
  var moreBox = $('#load-more');
  var moreBtn = $('#show-more');

  function updateCount() {
    if (!countEl) return;
    var n = current.length;
    countEl.innerHTML = n
      ? '<strong>' + n + '</strong> recipe' + (n === 1 ? '' : 's') +
        (state.q ? ' for &ldquo;' + esc(state.q) + '&rdquo;' : '') +
        (shown < n ? ' &middot; showing ' + shown : '')
      : 'No recipes found';
  }

  function updateMore() {
    if (!moreBox) return;
    var left = current.length - shown;
    moreBox.hidden = left <= 0;
    if (left > 0) moreBtn.textContent = 'Show ' + Math.min(PAGE, left) + ' more recipes';
  }

  /* Say which filter is doing the excluding, rather than a generic "try again". */
  function emptyAdvice() {
    var tips = [];
    if (state.time && state.time <= 30) tips.push('a time limit of ' + state.time + ' minutes leaves out every recipe with a wait, such as marinating or chilling');
    if (state.course.length && state.category.length) tips.push('Course and Category overlap: a side filed under Dinner is a side, not a dinner');
    if (state.tag.length && !state.swaps) tips.push('ticking &ldquo;Include recipes that qualify only with a swap&rdquo; widens the diet filters');
    if (state.method.length > 1) tips.push('choosing two cooking methods asks for recipes that use both');
    return tips.length ? 'Nothing matches. ' + tips.map(function (t) { return t.charAt(0).toUpperCase() + t.slice(1); }).join('. ') + '.'
      : 'Try removing a filter, or search for an ingredient like &ldquo;chicken&rdquo; or &ldquo;chocolate&rdquo;.';
  }

  function render() {
    var favs = window.cvGetFavourites ? window.cvGetFavourites() : [];
    var results = data.filter(function (r) { return matches(r, favs); });

    if (state.q && state.q.trim().length > 1) {
      var terms = window.cvSearchTerms(state.q);
      results = results
        .map(function (r) { return { r: r, score: terms.length ? window.cvScore(r, terms) : 0 }; })
        .filter(function (x) { return x.score > 0; })
        .sort(function (a, b) { return b.score - a.score || a.r.t.localeCompare(b.r.t); })
        .map(function (x) { return x.r; });
    }

    var sorters = {
      popular: function (a, b) { return b.w - a.w; },
      rating: function (a, b) { return b.r - a.r || b.w - a.w; },
      quickest: function (a, b) { return a.m - b.m; },
      newest: function (a, b) { return b.z - a.z; },
      az: function (a, b) { return a.t.localeCompare(b.t); }
    };
    if (!(state.q && state.q.trim().length > 1) && sorters[state.sort]) {
      results = results.slice().sort(sorters[state.sort]);
    }

    current = results;
    shown = Math.min(PAGE, current.length);
    updateCount();
    updateMore();

    if (!results.length) {
      grid.className = '';
      var hasQuery = state.q && state.q.trim().length > 1;
      grid.innerHTML = '<div class="empty-state"><h3>' + (hasQuery
          ? 'No recipes match &ldquo;' + esc(state.q.trim()) + '&rdquo;' + (state.category.length || state.cuisine.length ||
            state.tag.length || state.difficulty.length || state.course.length || state.method.length || state.time ? ' with those filters' : '')
          : 'Nothing matches those filters') + '</h3>' +
        '<p>' + (state.favourites
          ? 'Tap the heart on any recipe to save it here.'
          : emptyAdvice()) +
        '</p>' + (chipRow && chipRow.innerHTML ? '<button type="button" class="btn btn--primary" data-clear-from-empty>Clear all filters</button> ' : '') +
        '<a class="btn btn--ghost" href="' + BASE + 'recipes/">Browse all ' + data.length + ' recipes</a></div>';
      var clear = grid.querySelector('[data-clear-from-empty]');
      if (clear) clear.addEventListener('click', function () { var all = $('#clear-all'); if (all) all.click(); });
      return;
    }

    grid.className = 'card-grid';
    grid.innerHTML = current.slice(0, shown).map(cardHtml).join('');
    document.dispatchEvent(new CustomEvent('cv:results-rendered'));
  }

  if (moreBtn) {
    moreBtn.addEventListener('click', function () {
      var from = shown;
      shown = Math.min(shown + PAGE, current.length);
      grid.insertAdjacentHTML('beforeend', current.slice(from, shown).map(cardHtml).join(''));
      updateCount();
      updateMore();
      document.dispatchEvent(new CustomEvent('cv:results-rendered'));
      /* Put keyboard focus on the first new card, not on a button that has just moved off the screen. */
      var first = grid.children[from];
      var link = first && first.querySelector('h3 a');
      if (link) link.focus();
    });
  }

  /* ------------------------------------------------------------- events */
  $$('[data-filter]').forEach(function (input) {
    var key = input.dataset.filter;
    var value = input.value;
    /* state.time is a number, not a list: a shared "?time=30" link used to throw here and leave
       the whole directory unpainted. */
    if (Array.isArray(state[key]) && state[key].indexOf(value) !== -1) input.checked = true;
    if (key === 'time' && state.time === parseInt(value, 10)) input.checked = true;

    input.addEventListener('change', function () {
      if (key === 'time') {
        state.time = input.checked ? parseInt(value, 10) : null;
      } else {
        var at = state[key].indexOf(value);
        if (input.checked && at === -1) state[key].push(value);
        if (!input.checked && at !== -1) state[key].splice(at, 1);
      }
      renderChips(); updateUrl(); render();
    });
  });

  var swapsBox = $('[data-filter-swaps]');
  if (swapsBox) {
    swapsBox.checked = state.swaps;
    swapsBox.addEventListener('change', function () {
      state.swaps = swapsBox.checked; renderChips(); updateUrl(); render();
    });
  }

  if (chipRow) {
    chipRow.addEventListener('click', function (e) {
      if (e.target.id === 'clear-all') {
        LISTS.forEach(function (k) { state[k] = []; }); state.time = null; state.swaps = false;
        if (swapsBox) swapsBox.checked = false;
        $$('[data-filter]').forEach(function (i) { i.checked = false; });
        renderChips(); updateUrl(); render();
        return;
      }
      var btn = e.target.closest('[data-remove-filter]');
      if (!btn) return;
      var k = btn.dataset.key;
      if (k === 'swaps') {
        state.swaps = false;
        if (swapsBox) swapsBox.checked = false;
      } else if (k === 'time') {
        state.time = null;
        $$('[data-filter="time"]').forEach(function (i) { i.checked = false; });
      } else {
        state[k] = state[k].filter(function (v) { return v !== btn.dataset.value; });
        $$('[data-filter="' + k + '"]').forEach(function (i) {
          if (i.value === btn.dataset.value) i.checked = false;
        });
      }
      renderChips(); updateUrl(); render();
    });
  }

  /* Phone layout: the filter panel opens from a button and says how many filters are on. */
  var toggle = $('[data-filters-toggle]');
  var panel = $('#recipe-filters');
  if (toggle && panel) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      panel.classList.toggle('is-open', open);
      if (open) { var first = panel.querySelector('input'); if (first) first.focus(); }
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', function () {
      state.sort = sortSelect.value; updateUrl(); render();
    });
  }

  if (queryInput) {
    var t;
    queryInput.addEventListener('input', function () {
      clearTimeout(t);
      t = setTimeout(function () { state.q = queryInput.value; updateUrl(); render(); }, 180);
    });
    var form = queryInput.closest('form');
    if (form) form.addEventListener('submit', function (e) { e.preventDefault(); state.q = queryInput.value; updateUrl(); render(); });
  }

  document.addEventListener('cv:favourites-changed', function () {
    if (state.favourites) render();
  });

  /* The server renders a first page of cards for crawlers and no-JS visitors.
     Only fall back to skeletons when there is nothing there to keep. */
  grid.className = 'card-grid';
  if (!grid.children.length) {
    grid.innerHTML = new Array(10).join('x').split('x').map(function () {
      return '<div class="card"><div class="card-media skeleton"></div>' +
        '<div class="card-body"><div class="skeleton" style="height:14px;width:40%;margin-bottom:.7rem"></div>' +
        '<div class="skeleton" style="height:22px;width:85%;margin-bottom:.7rem"></div>' +
        '<div class="skeleton" style="height:44px"></div></div></div>';
    }).join('');
  }

  /* Loading, failed and empty are three different things to a reader: the count line says which. A
     failed download keeps the cards the server already painted and offers to try again, instead of
     reporting that no recipes match. */
  var loaded = false;
  if (countEl) countEl.textContent = 'Loading recipes…';
  function showLoadError() {
    if (countEl) {
      countEl.innerHTML = 'The recipe list could not be loaded, so filters and search are not working right now. ' +
        '<button type="button" class="btn btn--ghost btn--sm" id="retry-index">Try again</button>';
      var retry = $('#retry-index');
      if (retry) retry.addEventListener('click', function () { countEl.textContent = 'Loading recipes…'; load(); });
    }
    if (!grid.querySelector('article')) {
      grid.className = '';
      grid.innerHTML = '<div class="empty-state"><h3>Recipes could not be loaded</h3>' +
        '<p>This is a connection or server problem, not an empty search. Check your connection and try again.</p></div>';
    }
  }
  function load() {
    window.cvLoadIndex().then(function (json) {
      loaded = true;
      data = json;
      renderChips();
      render();
    }, showLoadError);
  }
  var renderWhenLoaded = render;
  render = function () { if (loaded) renderWhenLoaded(); };
  load();
})();
