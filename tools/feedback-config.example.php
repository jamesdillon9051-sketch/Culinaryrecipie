<?php
/**
 * Example settings for the reader feedback endpoints (/feedback/report.php,
 * review.php, subscribe.php, moderate.php; sources in src/server/feedback/).
 *
 * Copy this file OUTSIDE the public web directory and fill it in. On Hostinger:
 * domains/weeklydelight.com/private/feedback-config.php (beside public_html, where
 * the contact form's settings also go). Never commit the filled-in copy. Set the
 * WD_FEEDBACK_CONFIG environment variable to use another path.
 *
 * Steps (docs/release-2026-10-27/ACTIVATION.md has them in full):
 *   1. In hPanel's File Manager, create domains/weeklydelight.com/private/feedback-data/
 *      (outside public_html). Permissions 700.
 *   2. Copy this file to domains/weeklydelight.com/private/feedback-config.php and set
 *      salt, storage_dir and admin_password_hash below.
 *   3. Open https://weeklydelight.com/feedback/report.php?status=1 ; it answers
 *      {"ok":true,"configured":true} once the settings are valid. The report page then
 *      switches itself on.
 *   4. Sign in at https://weeklydelight.com/feedback/moderate.php to read reports.
 *
 *   salt                 a long random string (32+ characters). Keys the IP hashes.
 *   storage_dir          absolute path of the folder from step 1. Must be writable and
 *                        must not be inside public_html (the endpoints refuse it).
 *   admin_password_hash  from: php -r "echo password_hash('a long passphrase', PASSWORD_DEFAULT), PHP_EOL;"
 *   reports_enabled      true (default) to accept problem reports.
 *   reviews_enabled      false (default). Public reviews also need
 *                        src/data/feedback.js reviews: true and a rebuild, so the form appears.
 *   newsletter           only once a Buttondown account exists: provider and API key
 *                        (Settings -> API in Buttondown). Also needs src/data/feedback.js
 *                        newsletter: true and a rebuild. Leave it out otherwise.
 */
return [
    'salt'                => 'replace-with-a-long-random-string-of-your-own',
    'storage_dir'         => '/home/USERNAME/domains/weeklydelight.com/private/feedback-data',
    'admin_password_hash' => '$2y$10$replace-with-the-output-of-password_hash',
    'reports_enabled'     => true,
    'reviews_enabled'     => false,

    // Optional limits (per connection per hour, and in total per day).
    // 'report_rate_limit' => 5, 'report_daily_limit' => 200,
    // 'review_rate_limit' => 3, 'review_daily_limit' => 100,

    // Optional, only with a real Buttondown account:
    // 'newsletter' => ['provider' => 'buttondown', 'api_key' => 'your-api-key', 'tags' => ['weekly-plan']],
];
