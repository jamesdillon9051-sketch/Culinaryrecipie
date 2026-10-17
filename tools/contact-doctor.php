<?php
/**
 * Checks the contact form's settings without sending a message and without printing
 * any value: only which settings are present and whether each works.
 *
 *   php tools/contact-doctor.php --config /path/to/contact-config.php [--probe] [--dns]
 *
 *   --probe       connect to the SMTP server and log in, then quit. No message is sent.
 *   --dns         look up the sender domain's MX, SPF and DMARC records (needs network).
 *   --send-test   show the one test message it would send to the configured inbox.
 *                 It sends nothing unless --yes is also given, and then exactly one.
 *
 * Exit status 0 when the settings are valid and every requested check passed.
 */

declare(strict_types=1);

define('WD_CONTACT_LIBRARY', true);
require __DIR__ . '/../src/server/contact-send.php';

$args = array_slice($argv, 1);
$at = array_search('--config', $args, true);
if ($at !== false && isset($args[$at + 1])) putenv('WD_CONTACT_CONFIG=' . $args[$at + 1]);
$probe = in_array('--probe', $args, true);
$sendTest = in_array('--send-test', $args, true);
$confirmed = in_array('--yes', $args, true);
$dns = in_array('--dns', $args, true);

$failed = false;
$line = static function (bool $ok, string $text) use (&$failed): void {
    if (!$ok) $failed = true;
    echo ($ok ? '  ok    ' : '  FAIL  ') . $text . "\n";
};
$note = static function (string $text): void { echo '  note  ' . $text . "\n"; };

echo "Contact form settings: " . (is_file(wd_config_path()) ? 'file found' : 'no file at the expected path') . "\n";
[$config, $problem] = wd_config();
$line($config !== null, $config !== null ? 'settings are complete and valid' : 'settings problem: ' . $problem);
if ($config === null) exit(1);

$line(true, "transport: {$config['transport']}");
$line(strlen($config['salt']) >= 16, 'salt has at least 16 characters');
$line(is_writable($config['state_dir']), 'state_dir is writable');
$file = $config['state_dir'] . '/wd-contact-rate.json';
if (is_file($file)) {
    $perm = substr(sprintf('%o', fileperms($file)), -4);
    $line(($perm & 0007) === 0, "rate-limit file is not world-accessible (mode $perm)");
}
$publicRoot = realpath(dirname(__DIR__));
$settingsPath = realpath(wd_config_path());
if ($publicRoot !== false && $settingsPath !== false && strpos($settingsPath, $publicRoot . DIRECTORY_SEPARATOR) === 0) {
    $note('this settings file is inside the repository folder; on the server it must live outside public_html');
}
$domain = substr(strrchr($config['from'], '@'), 1);

if ($config['transport'] === 'mail') {
    $note('mail() accepts a message without proving it will arrive; authenticated SMTP from a mailbox on the domain is more reliable');
}
if ($config['transport'] === 'log') $note("transport 'log' sends nothing; it is for testing");

if ($config['transport'] === 'smtp') {
    if ($probe) {
        $failure = wd_smtp_send($config['smtp'], $config['from'], $config['to'], '', true);
        $line($failure === '', $failure === '' ? 'SMTP connection, TLS and login all worked (no message was sent)' : 'SMTP probe failed: ' . $failure);
    } else {
        $note('run with --probe to test the SMTP login (it sends nothing)');
    }
}

if ($dns) {
    if (!function_exists('dns_get_record')) {
        $note('dns_get_record is not available here');
    } else {
        $mx = @dns_get_record($domain, DNS_MX) ?: [];
        $txt = array_map(static fn($r) => $r['txt'] ?? '', @dns_get_record($domain, DNS_TXT) ?: []);
        $spf = array_values(array_filter($txt, static fn($t) => stripos($t, 'v=spf1') === 0));
        $dmarc = array_map(static fn($r) => $r['txt'] ?? '', @dns_get_record('_dmarc.' . $domain, DNS_TXT) ?: []);
        $line(count($mx) > 0, "$domain has MX records");
        $line(count($spf) > 0, "$domain has an SPF record");
        $line(count($dmarc) > 0, "$domain has a DMARC record");
        $note('DKIM is published under a selector name that depends on the mail provider, so it is not checked here');
    }
}

if ($sendTest) {
    $values = [
        'name' => 'Weekly Delight setup test',
        'email' => $config['from'],
        'subject' => 'Contact form test message',
        'message' => "This is the single test message sent by tools/contact-doctor.php on " . gmdate('Y-m-d H:i') . " UTC.\nIf you can read it in your inbox, the form can reach you. If it is in a spam folder, mark it as not spam.",
    ];
    echo "\nTest message (to the configured inbox, from the configured sender):\n    subject: {$values['subject']}\n    text:    " . str_replace("\n", "\n             ", $values['message']) . "\n";
    if (!$confirmed) {
        $note('nothing was sent: add --yes to send exactly this one message');
    } else {
        $failure = wd_deliver($config, $values);
        $line($failure === '', $failure === '' ? 'the mail transport accepted the test message; confirm it arrived in the inbox' : 'sending failed: ' . $failure);
    }
}

echo $failed ? "\nProblems found.\n" : "\nAll requested checks passed. A real test message from the site is still the only proof of delivery.\n";
exit($failed ? 1 : 0);
