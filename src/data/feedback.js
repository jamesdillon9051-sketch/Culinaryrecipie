'use strict';
/**
 * Which reader-feedback features the pages offer. The endpoints in
 * src/server/feedback/ also check their own settings on the server, so a
 * feature needs both: switched on here (the form is on the page) and set up on
 * the server (it accepts and stores). See docs/release-2026-10-27/ACTIVATION.md.
 *
 * reports     The "Report a problem with this recipe" page. On: the page always
 *             exists and asks the server whether reports are set up before
 *             anyone types; until they are, it says so and sends nothing.
 * reviews     Public reviews on recipe pages, held for moderation. Off: no form
 *             is shown. Turn on only after the server settings say
 *             reviews_enabled => true, the moderation page works, and someone is
 *             going to read the queue.
 * newsletter  The sign-up box. Off: there is no sending service yet. Turn on only
 *             once a Buttondown account and API key are in the server settings,
 *             the privacy page has been checked, and there is a schedule to promise.
 */
module.exports = {
  reports: true,
  reviews: false,
  newsletter: false
};
