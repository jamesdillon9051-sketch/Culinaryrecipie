/* ==========================================================================
   CulinaryVault — recipe directory and search results
   Client-side filtering, sorting and rendering from search-index.json.
   ========================================================================== */
(function () {
  'use strict';

  var root = document.querySelector('[data-directory]');
  if (!root) return;

  function $(s, c) { return (c || document).querySelector(s); }
  function $$(s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); }

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
    time: null,
    favourites: root.dataset.directory === 'favourites',
    sort: 'popular'
  };

  /* Hydrate state from the URL so filtered views are shareable */
  var params = new URLSearchParams(location.search);
  if (params.get('q')) state.q = params.get('q');
  ['category', 'cuisine', 'tag', 'difficulty'].forEach(function (k) {
    if (params.get(k)) state[k] = params.get(k).split(',').filter(Boolean);
  });
  if (params.get('time')) state.time = parseInt(params.get('time'), 10);
  if (params.get('sort')) state.sort = params.get('sort');

  if (queryInput && state.q) queryInput.value = state.q;
  if (sortSelect) sortSelect.value = state.sort;

  function stars(rating) {
    var pct = (rating / 5) * 100;
    return '<span class="stars"><span class="stars-glyphs" aria-hidden="true">★★★★★' +
      '<span style="width:' + pct + '%">★★★★★</span></span>' +
      '<b>' + rating.toFixed(1) + '</b></span>';
  }

  function cardHtml(r) {
    var href = BASE + 'recipes/' + r.g + '/';
    var media = r.i
      ? '<picture>' +
          '<source srcset="' + BASE + 'assets/img/recipes/' + r.i + '.webp" type="image/webp">' +
          '<img src="' + BASE + 'assets/img/recipes/' + r.i + '.jpg" alt="' + r.a + '" ' +
          'loading="lazy" decoding="async" width="800" height="600" data-fade ' +
          'data-title="' + r.t + '" data-ph-a="' + (r.k || '#c8763f') + '" data-ph-b="#8c5a3c">' +
        '</picture>'
      : '<div class="img-fallback" role="img" aria-label="' + r.a + '"><span>' + r.t + '</span></div>';

    return '<article class="card reveal is-visible">' +
      '<div class="card-media" style="background:' + (r.k || 'var(--bg-sunken)') + '">' + media +
        '<div class="card-badges"><span class="badge badge--glass">' + r.c + '</span></div>' +
        '<button class="fav-btn" type="button" data-slug="' + r.g + '" data-title="' + r.t + '" aria-pressed="false" aria-label="Save ' + r.t + ' to favourites">' +
          '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1L12 21l7.7-7.6 1.1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>' +
        '</button>' +
        '<span class="card-time"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>' + r.m + ' min</span>' +
        '<div class="quick-view"><dl>' +
          '<div><dt>Prep</dt><dd>' + r.p + 'm</dd></div>' +
          '<div><dt>Cook</dt><dd>' + r.o + 'm</dd></div>' +
          '<div><dt>Serves</dt><dd>' + r.v + '</dd></div>' +
        '</dl><a class="btn btn--light btn--sm" href="' + href + '">Quick view</a></div>' +
      '</div>' +
      '<div class="card-body">' +
        '<span class="card-kicker">' + r.n + '</span>' +
        '<h3><a href="' + href + '">' + r.t + '</a></h3>' +
        '<p>' + r.e + '</p>' +
        '<div class="card-foot">' + stars(r.r) + '<span>' + r.d + '</span></div>' +
      '</div></article>';
  }

  function matches(r, favs) {
    if (state.favourites && favs.indexOf(r.g) === -1) return false;
    if (state.category.length && state.category.indexOf(r.n) === -1) return false;
    if (state.cuisine.length && state.cuisine.indexOf(r.c) === -1) return false;
    if (state.difficulty.length && state.difficulty.indexOf(r.d) === -1) return false;
    if (state.time && r.m > state.time) return false;
    if (state.tag.length) {
      for (var i = 0; i < state.tag.length; i++) {
        if (r.f.indexOf(state.tag[i]) === -1) return false;
      }
    }
    return true;
  }

  function updateUrl() {
    var p = new URLSearchParams();
    if (state.q) p.set('q', state.q);
    ['category', 'cuisine', 'tag', 'difficulty'].forEach(function (k) {
      if (state[k].length) p.set(k, state[k].join(','));
    });
    if (state.time) p.set('time', state.time);
    if (state.sort !== 'popular') p.set('sort', state.sort);
    var qs = p.toString();
    history.replaceState(null, '', qs ? '?' + qs : location.pathname);
  }

  function renderChips() {
    if (!chipRow) return;
    var chips = [];
    ['category', 'cuisine', 'tag', 'difficulty'].forEach(function (k) {
      state[k].forEach(function (v) {
        chips.push('<span class="chip is-active">' + v +
          '<button type="button" data-remove-filter data-key="' + k + '" data-value="' + v +
          '" aria-label="Remove filter ' + v + '">&times;</button></span>');
      });
    });
    if (state.time) {
      chips.push('<span class="chip is-active">Under ' + state.time + ' min' +
        '<button type="button" data-remove-filter data-key="time" aria-label="Remove time filter">&times;</button></span>');
    }
    if (chips.length) {
      chips.push('<button type="button" class="chip" id="clear-all">Clear all</button>');
    }
    chipRow.innerHTML = chips.join('');
  }

  var data = [];

  function render() {
    var favs = window.cvGetFavourites ? window.cvGetFavourites() : [];
    var results = data.filter(function (r) { return matches(r, favs); });

    if (state.q && state.q.trim().length > 1) {
      var terms = state.q.toLowerCase().trim().split(/\s+/);
      results = results
        .map(function (r) { return { r: r, score: window.cvScore(r, terms) }; })
        .filter(function (x) { return x.score > 0; })
        .sort(function (a, b) { return b.score - a.score; })
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

    if (countEl) {
      countEl.innerHTML = results.length
        ? '<strong>' + results.length + '</strong> recipe' + (results.length === 1 ? '' : 's') +
          (state.q ? ' for &ldquo;' + state.q.replace(/[<>&]/g, '') + '&rdquo;' : '')
        : 'No recipes found';
    }

    if (!results.length) {
      grid.className = '';
      grid.innerHTML = '<div class="empty-state"><h3>Nothing matches those filters</h3>' +
        '<p>' + (state.favourites
          ? 'Tap the heart on any recipe to save it here.'
          : 'Try removing a filter, or search for an ingredient like &ldquo;chicken&rdquo; or &ldquo;chocolate&rdquo;.') +
        '</p><a class="btn btn--primary" href="' + BASE + 'recipes/">Browse all 200 recipes</a></div>';
      return;
    }

    grid.className = 'card-grid';
    grid.innerHTML = results.map(cardHtml).join('');
    document.dispatchEvent(new CustomEvent('cv:results-rendered'));
  }

  /* ------------------------------------------------------------- events */
  $$('[data-filter]').forEach(function (input) {
    var key = input.dataset.filter;
    var value = input.value;
    if (state[key] && state[key].indexOf(value) !== -1) input.checked = true;
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

  if (chipRow) {
    chipRow.addEventListener('click', function (e) {
      if (e.target.id === 'clear-all') {
        state.category = []; state.cuisine = []; state.tag = []; state.difficulty = []; state.time = null;
        $$('[data-filter]').forEach(function (i) { i.checked = false; });
        renderChips(); updateUrl(); render();
        return;
      }
      var btn = e.target.closest('[data-remove-filter]');
      if (!btn) return;
      var k = btn.dataset.key;
      if (k === 'time') {
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

  window.cvLoadIndex().then(function (json) {
    data = json;
    renderChips();
    render();
  });
})();
