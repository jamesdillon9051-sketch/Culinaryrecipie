/* ==========================================================================
   Weekly Delight — reader feedback forms
   The problem report page, and the review and newsletter forms when they are
   switched on. A form says "received" only when the server answers that it
   stored the submission (201 with ok: true); anything else says nothing was
   sent, and the reader's text stays in the form.
   ========================================================================== */
(function () {
  'use strict';
  function $(s, c) { return (c || document).querySelector(s); }
  function $$(s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); }
  var BASE = document.body.dataset.base || '/';

  /* The time the form was opened, for the server's too-fast check. */
  $$('input[name="started"]').forEach(function (i) { i.value = String(Date.now()); });

  function show(el, text) { if (!el) return; el.textContent = text; el.hidden = !text; }

  function fieldErrors(form, fields) {
    $$('.field-error', form).forEach(function (p) { show(p, ''); });
    $$('[aria-invalid]', form).forEach(function (i) { i.removeAttribute('aria-invalid'); });
    var first = null;
    Object.keys(fields || {}).forEach(function (name) {
      var input = form.querySelector('[name="' + name + '"]');
      var box = form.querySelector('#report-' + name + '-error');
      if (input) { input.setAttribute('aria-invalid', 'true'); if (!first) first = input; }
      if (box) show(box, fields[name]);
    });
    if (first) first.focus();
  }

  function send(form, url, result, onDone) {
    var data = {};
    new FormData(form).forEach(function (v, k) { data[k] = v; });
    var button = form.querySelector('[type="submit"]');
    if (button) button.disabled = true;
    show(result, 'Sending…');
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(data),
      credentials: 'same-origin'
    }).then(function (res) {
      return res.json().catch(function () { return {}; }).then(function (body) { return { status: res.status, body: body }; });
    }).then(function (r) {
      if (button) button.disabled = false;
      if (r.status === 201 && r.body.ok) { onDone(r.body); return; }
      if (r.body && r.body.fields && typeof r.body.fields === 'object' && !Array.isArray(r.body.fields)) fieldErrors(form, r.body.fields);
      show(result, (r.body && r.body.message) || 'The server did not accept it, so nothing was sent. Please try again.');
    }, function () {
      if (button) button.disabled = false;
      show(result, 'Nothing was sent: the connection failed. Your text is still in the form; try again when you are online.');
    });
  }

  /* -------------------------------------------------------------- report */
  var report = $('[data-report]');
  if (report) {
    var form = $('[data-report-form]', report);
    var status = $('[data-report-status]', report);
    var result = $('[data-report-result]', report);
    var params = new URLSearchParams(location.search);
    var slug = (params.get('recipe') || '').replace(/[^a-z0-9-]/g, '');
    var version = (params.get('v') || '').replace(/[^0-9a-f]/g, '');
    if (slug) form.elements.recipe.value = slug;
    if (version) form.elements.version.value = version;
    if (slug && window.cvLoadIndex) {
      window.cvLoadIndex().then(function (list) {
        var hit = list.filter(function (r) { return r.g === slug; })[0];
        var help = $('[data-recipe-help]', report);
        if (hit && help) help.textContent = 'Reporting: ' + hit.t + '. Change this if you meant another recipe.';
      }, function () {});
    }
    /* Ask before anyone types whether reports are switched on. */
    fetch(BASE + 'feedback/report.php?status=1', { headers: { Accept: 'application/json' }, cache: 'no-store' })
      .then(function (r) { return r.ok ? r.json() : { configured: false }; })
      .then(function (s) {
        if (!s.configured) {
          show(status, 'Problem reports are not switched on yet, so this form cannot send anything at the moment. Nothing you type here is stored.');
          status.hidden = false;
          $('[data-report-submit]', report).disabled = true;
        }
      }, function () {
        show(status, 'The report service could not be reached, so this form may not be able to send. Check your connection.');
      });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      send(form, form.getAttribute('action'), result, function (body) {
        form.reset();
        $$('input[name="started"]', form).forEach(function (i) { i.value = String(Date.now()); });
        show(result, 'Received. Your report is stored and will be read; its reference is ' + body.id + '.');
      });
    });
  }

  /* -------------------------------------------------------------- review */
  var review = $('[data-review-form]');
  if (review) {
    review.addEventListener('submit', function (e) {
      e.preventDefault();
      var result = $('[data-review-result]');
      send(review, review.getAttribute('action'), result, function () {
        review.reset();
        show(result, 'Received. Your review is waiting for moderation and appears only if it is approved.');
      });
    });
  }

  /* ---------------------------------------------------------- newsletter */
  $$('[data-subscribe-form]').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var result = f.querySelector('[data-subscribe-result]');
      send(f, f.getAttribute('action'), result, function (body) { f.reset(); show(result, body.message); });
    });
  });
})();
