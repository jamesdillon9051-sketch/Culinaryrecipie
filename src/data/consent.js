'use strict';

/**
 * Cookie consent.
 *
 * The point of this file is that the banner is not decoration. Google Analytics
 * and the Adsterra units are not written into the page at all: they are held as
 * URLs on data attributes and injected by assets/js/consent.js only after
 * somebody has said yes. A banner that appears after the tags have already
 * fired asks permission for something that has happened, which is worse than no
 * banner, because it also misleads.
 *
 * Two categories, because there are only two honest ones here. Anything the
 * site stores for itself — the theme, saved recipes, reviews — never leaves the
 * device, is created only when the reader asks for it, and is not covered by
 * the consent requirement. Those keep working whatever is chosen.
 *
 * Set `enabled: false` and the tags go back to loading directly, which is the
 * right setting only if the site is certain it has no readers in the UK, the
 * EU or anywhere else with an equivalent rule.
 */
module.exports = {
  enabled: true,

  /* Bumped when the categories change: a stored choice from an older version
     is treated as unanswered, because it was consent to a different question. */
  version: 1,

  /* How long a stored answer stands before being asked again. Six months
     satisfies the common guidance without nagging people every visit. */
  rememberDays: 182
};
