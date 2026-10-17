<?php
/**
 * Example settings for the contact form endpoint (src/server/contact-send.php,
 * published as /contact/send.php).
 *
 * Copy this file OUTSIDE the public web directory and fill it in. On Hostinger that
 * is domains/weeklydelight.com/private/contact-config.php, which sits beside
 * public_html rather than inside it, so no browser can request it. Never commit the
 * filled-in copy. Set the WD_CONTACT_CONFIG environment variable to use another path.
 *
 * Check it afterwards, without sending anything and without printing a value:
 *
 *     php tools/contact-doctor.php --config /path/to/contact-config.php [--probe]
 *
 * or open https://weeklydelight.com/contact/send.php?status=1 , which answers
 * {"ok":true,"configured":true} once the settings are valid.
 *
 *   to          the inbox you read. Supplied by the site owner; nothing guesses it.
 *   from        the address messages are sent from. Use a real mailbox on the site's
 *               own domain (see below). It is also the SMTP envelope sender.
 *   salt        a long random string (at least 16 characters). It keys the hashes of
 *               IP addresses and signs the "message sent" redirect.
 *   transport   'mail'  PHP's mail(): no login, the simplest, and the least reliable
 *                       about where mail lands.
 *               'smtp'  authenticated SMTP with the mailbox's own login (recommended,
 *                       once a mailbox exists on the domain).
 *               'log'   testing only: writes each message to log_file and sends nothing.
 *   state_dir   a writable folder outside public_html for the rate-limit file.
 *               Defaults to the folder this settings file is in.
 *
 * Why a mailbox on the domain matters: DNS for weeklydelight.com (checked 17 October
 * 2026) has no MX, SPF, DKIM or DMARC records, so there is no mail service on the
 * domain yet. Mail sent "from" an address on it, by either transport, carries no
 * proof that the site may send for the domain, and many receivers will file it as spam
 * or refuse it. Creating a mailbox in Hostinger's email service is what normally adds
 * those records; follow Hostinger's instructions for the exact values, and re-run
 * the doctor script, which reports whether they are present.
 */
return [
    'to'        => 'inbox-you-read@example.org',
    'from'      => 'contact@weeklydelight.com',
    'salt'      => 'replace-with-a-long-random-string-of-your-own',
    'transport' => 'smtp',

    // Only for transport 'smtp'. Hostinger's mail servers are listed in its email
    // setup instructions; use the host, port and encryption they give for your mailbox.
    'smtp' => [
        'host'       => 'smtp.example.org',
        'port'       => 465,
        'encryption' => 'ssl',            // 'ssl' (implicit TLS) or 'tls' (STARTTLS); never plain text
        'username'   => 'contact@weeklydelight.com',
        'password'   => 'the-mailbox-password',
        // 'cafile'  => '/path/to/ca-bundle.crt',   // only for a private server
    ],

    // Optional.
    // 'state_dir'        => __DIR__,
    // 'rate_limit'       => 5,       // messages per connection per window
    // 'rate_window'      => 3600,    // seconds
    // 'daily_limit'      => 100,     // messages in total per 24 hours
    // 'client_ip_header' => 'HTTP_X_FORWARDED_FOR',  // only if Hostinger's proxy sets it and REMOTE_ADDR is the proxy
    // 'log_file'         => __DIR__ . '/contact-log.jsonl',   // transport 'log' only
];
