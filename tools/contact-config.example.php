<?php
/**
 * Example configuration for the contact form endpoint (src/server/contact-send.php,
 * published as /contact/send.php).
 *
 * Copy this file OUTSIDE the public web directory and fill it in. On Hostinger
 * that is domains/weeklydelight.com/private/contact-config.php, which sits beside
 * public_html rather than inside it, so no browser can request it. Never commit
 * the filled-in copy. Set WD_CONTACT_CONFIG to use a different path.
 *
 *   to         where messages go: an inbox you read
 *   from       an address on the site's own domain, created in Hostinger's email
 *              panel, so the receiving server accepts mail from this host
 *   transport  'mail' to send with PHP mail(); 'log' to write messages to
 *              log_file instead, for testing without emailing anyone
 *   state_dir  a writable directory outside public_html for the rate-limit file
 *   salt       any random string; it keeps the stored hashes of IP addresses
 *              from being reversed by a lookup table
 */
return [
    'to'        => 'you@example.org',
    'from'      => 'noreply@weeklydelight.com',
    'transport' => 'mail',
    'state_dir' => __DIR__,
    'salt'      => 'replace-with-a-long-random-string',
    // 'log_file' => __DIR__ . '/contact-log.jsonl',
];
