'use strict';
/**
 * Reader feedback pages: the problem report page, and the public review form
 * that recipe pages carry only when src/data/feedback.js turns reviews on.
 */
const { esc } = require('../lib/util');
const { SITE, layout, breadcrumbs, breadcrumbSchema } = require('./layout');
const FEEDBACK = require('../data/feedback');

const TYPES = [
  ['quantity', 'An ingredient quantity is wrong or missing'],
  ['instruction', 'An instruction is unclear or wrong'],
  ['timing', 'A time or temperature is wrong'],
  ['yield', 'It made more or less than it says'],
  ['substitution', 'A question about a substitution'],
  ['other', 'Something else']
];

function reportPage(ctx) {
  const trail = [{ name: 'Home', url: SITE.base }, { name: 'Report a problem' }];
  const body = `
${breadcrumbs(trail)}
<div class="wrap section" style="padding-top:1rem" data-report>
  <header class="section-head">
    <div>
      <span class="eyebrow">Corrections</span>
      <h1>Report a problem with a recipe</h1>
      <p class="lede">A wrong quantity, a step that does not make sense, a time that did not work for you: say what happened and the recipe will be checked.</p>
      <p>Reports are read, checked against the recipe and, where they are right, the recipe is corrected and its "last changed" date moves. <a href="${SITE.base}about/#corrections">How corrections are handled</a>.</p>
    </div>
  </header>

  <p class="notice" data-report-status role="status" hidden></p>

  <h2 class="sr-only">Your report</h2>
  <form class="panel report-form" action="${SITE.base}feedback/report.php" method="post" novalidate data-report-form>
    <div class="field">
      <label for="report-recipe">Recipe</label>
      <input id="report-recipe" name="recipe" type="text" required autocomplete="off" inputmode="url"
             aria-describedby="report-recipe-help report-recipe-error" spellcheck="false">
      <p class="form-note" id="report-recipe-help" data-recipe-help>Paste the recipe's address, or the part after /recipes/ (for example pad-thai).</p>
      <p class="field-error" id="report-recipe-error" hidden></p>
    </div>
    <input type="hidden" name="version" value="">
    <fieldset class="field">
      <legend>What kind of problem is it?</legend>
      ${TYPES.map(([v, label], i) => `<label class="check"><input type="radio" name="type" value="${v}"${i === 0 ? ' aria-describedby="report-type-error"' : ''} required> <span>${esc(label)}</span></label>`).join('\n      ')}
      <p class="field-error" id="report-type-error" hidden></p>
    </fieldset>
    <div class="field">
      <label for="report-description">What happened?</label>
      <textarea id="report-description" name="description" rows="6" maxlength="3000" required aria-describedby="report-description-help report-description-error"></textarea>
      <p class="form-note" id="report-description-help">Which ingredient or step, what you expected and what you got. At least 10 characters.</p>
      <p class="field-error" id="report-description-error" hidden></p>
    </div>
    <fieldset class="field">
      <legend>Did you change anything in the recipe?</legend>
      <label class="check"><input type="radio" name="changed" value="no"> <span>No, I followed it as written</span></label>
      <label class="check"><input type="radio" name="changed" value="yes"> <span>Yes</span></label>
      <label for="report-changes" class="sr-only">What you changed</label>
      <textarea id="report-changes" name="changes" rows="2" maxlength="1000" placeholder="What you changed (optional)"></textarea>
    </fieldset>
    <fieldset class="field">
      <legend>Contact details (optional)</legend>
      <p class="form-note">Only needed if you would like a reply. They are used for nothing else.</p>
      <label for="report-name">Name</label>
      <input id="report-name" name="name" type="text" maxlength="100" autocomplete="name">
      <label for="report-email">Email</label>
      <input id="report-email" name="email" type="email" maxlength="254" autocomplete="email" aria-describedby="report-email-error">
      <p class="field-error" id="report-email-error" hidden></p>
      <label class="check"><input type="checkbox" name="reply" value="yes"> <span>I would like a reply</span></label>
    </fieldset>
    <div class="hp" aria-hidden="true"><label for="report-website">Leave this empty</label><input id="report-website" name="website" type="text" tabindex="-1" autocomplete="off"></div>
    <input type="hidden" name="started" value="">
    <button class="btn btn--primary" type="submit" data-report-submit>Send report</button>
    <p class="form-status" data-report-result role="alert" hidden></p>
    <p class="form-note">What is stored: the recipe, your answers, the time, and a scrambled form of your connection's address used only to stop floods of reports. See the <a href="${SITE.base}privacy/#reports">privacy page</a>.</p>
  </form>
</div>`;
  return layout({
    title: 'Report a Problem with a Recipe',
    description: 'Report a wrong quantity, an unclear step or a time that did not work on a Weekly Delight recipe, so it can be checked against the recipe and corrected.',
    path: 'report/',
    active: 'recipes',
    noindex: true,
    criticalCss: ctx.criticalCss,
    categories: ctx.categoryCounts,
    cuisines: ctx.topCuisines,
    scripts: ['feedback.js'],
    schema: [breadcrumbSchema(trail)],
    body
  });
}

/** The public review form, only when reviews are switched on. */
function reviewFormHtml(recipe) {
  if (!FEEDBACK.reviews) return '';
  return `<div class="panel" style="margin-top:1.5rem" data-review>
            <h3>Write a public review</h3>
            <p class="form-note" data-review-status role="status" hidden></p>
            <form action="${SITE.base}feedback/review.php" method="post" novalidate data-review-form>
              <input type="hidden" name="recipe" value="${esc(recipe.slug)}">
              <div class="field"><label for="pub-name">Name to show</label><input id="pub-name" name="name" maxlength="40" required></div>
              <div class="field"><label for="pub-rating">Rating (optional)</label>
                <select id="pub-rating" name="rating"><option value="">No rating</option>${[5, 4, 3, 2, 1].map(n => `<option value="${n}">${n} out of 5</option>`).join('')}</select></div>
              <div class="field"><label for="pub-body">Your review</label><textarea id="pub-body" name="body" rows="4" maxlength="2000" required></textarea></div>
              <label class="check"><input type="checkbox" name="consent" value="yes" required> <span>Publish this with the name above. Reviews appear only after a person approves them.</span></label>
              <div class="hp" aria-hidden="true"><label for="pub-website">Leave this empty</label><input id="pub-website" name="website" tabindex="-1" autocomplete="off"></div>
              <input type="hidden" name="started" value="">
              <button class="btn btn--primary" type="submit">Send for review</button>
              <p class="form-status" data-review-result role="alert" hidden></p>
            </form>
          </div>`;
}

/** The newsletter sign-up, only when a sending service is set up and switched on. */
function newsletterSignupHtml(id) {
  if (!FEEDBACK.newsletter) return '';
  return `<form class="newsletter-signup" action="${SITE.base}feedback/subscribe.php" method="post" novalidate data-subscribe-form>
    <label for="${id}-email">Email address</label>
    <input id="${id}-email" name="email" type="email" autocomplete="email" required>
    <label class="check"><input type="checkbox" name="consent" value="yes" required> <span>Send me the weekly plan email. I can unsubscribe from any email with one click. <a href="${SITE.base}privacy/#newsletter">How the address is used</a>.</span></label>
    <div class="hp" aria-hidden="true"><input name="website" tabindex="-1" autocomplete="off" aria-label="Leave this empty"></div>
    <input type="hidden" name="started" value="">
    <button class="btn btn--primary" type="submit">Sign up</button>
    <p class="form-status" data-subscribe-result role="alert" hidden></p>
  </form>`;
}

module.exports = { reportPage, reviewFormHtml, newsletterSignupHtml, TYPES };
