<?php
/**
 * Weekly Delight: the contact form's endpoint.
 *
 * Copied by src/build.js to /contact/send.php. The site is static and is served
 * by Hostinger, which runs PHP, so this is the one dynamic file on it. Before it
 * existed the form posted to /contact/success/, a static page that answers any
 * request with 200, and the page then told the reader the message had been sent.
 * Nothing was: every message was lost.
 *
 * It reports success only when PHP's mailer has accepted the message. It cannot
 * see past that (whether the receiving server files it as spam is beyond it), so
 * the page says "accepted for delivery" and no more.
 *
 * Nothing private is in this file or anywhere in the public directory. The
 * recipient address and the sender address live in a PHP file outside the web
 * root (see tools/contact-config.example.php):
 *
 *   1. the path in the WD_CONTACT_CONFIG environment variable, if set, else
 *   2. ../../private/contact-config.php relative to this file, which on
 *      Hostinger is domains/<site>/private/, beside public_html rather than in it.
 *
 * With no config the endpoint answers 503 and the form says the message was not
 * sent. It never pretends.
 */

declare(strict_types=1);

const MAX = ['name' => 100, 'email' => 254, 'subject' => 150, 'message' => 5000];
const MIN = ['name' => 2, 'subject' => 3, 'message' => 20];
const RATE_LIMIT = 5;          // messages
const RATE_WINDOW = 3600;      // per this many seconds, per address

function wants_json(): bool {
    return stripos($_SERVER['HTTP_ACCEPT'] ?? '', 'application/json') !== false;
}

/** Answer the browser: JSON for the script, a redirect for a plain form post. */
function finish(int $status, bool $ok, string $code, string $message): void {
    if (wants_json()) {
        http_response_code($status);
        header('Content-Type: application/json; charset=utf-8');
        header('Cache-Control: no-store');
        echo json_encode(['ok' => $ok, 'code' => $code, 'message' => $message]);
    } else {
        header('Cache-Control: no-store');
        header('Location: ' . ($ok ? '/contact/success/' : '/contact/not-sent/?reason=' . rawurlencode($code)), true, 303);
    }
    exit;
}

function config(): ?array {
    $path = getenv('WD_CONTACT_CONFIG') ?: dirname(__DIR__, 2) . '/private/contact-config.php';
    if (!is_file($path) || !is_readable($path)) return null;
    $config = require $path;
    if (!is_array($config) || empty($config['to']) || empty($config['from'])) return null;
    if (!filter_var($config['to'], FILTER_VALIDATE_EMAIL) || !filter_var($config['from'], FILTER_VALIDATE_EMAIL)) return null;
    return $config;
}

/** No line breaks in anything that reaches a mail header. */
function header_safe(string $value): string {
    return trim(preg_replace('/[\r\n\t]+/', ' ', $value));
}

function length(string $value): int {
    return function_exists('mb_strlen') ? mb_strlen($value, 'UTF-8') : strlen($value);
}

/** True while this address is under the limit; records the attempt. Fails open if storage is unavailable. */
function under_rate_limit(array $config): bool {
    $dir = $config['state_dir'] ?? sys_get_temp_dir();
    $file = rtrim($dir, '/') . '/wd-contact-rate.json';
    $key = hash('sha256', ($_SERVER['REMOTE_ADDR'] ?? 'unknown') . '|' . ($config['salt'] ?? 'weeklydelight'));
    $now = time();
    $handle = @fopen($file, 'c+');
    if (!$handle) return true;
    flock($handle, LOCK_EX);
    $data = json_decode(stream_get_contents($handle) ?: '{}', true) ?: [];
    foreach ($data as $k => $times) {
        $data[$k] = array_values(array_filter((array) $times, fn($t) => $t > $now - RATE_WINDOW));
        if (!$data[$k]) unset($data[$k]);
    }
    $allowed = count($data[$key] ?? []) < RATE_LIMIT;
    if ($allowed) $data[$key][] = $now;
    ftruncate($handle, 0);
    rewind($handle);
    fwrite($handle, json_encode($data));
    flock($handle, LOCK_UN);
    fclose($handle);
    return $allowed;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    http_response_code(405);
    header('Allow: POST');
    header('Content-Type: text/plain; charset=utf-8');
    echo "This address only accepts the contact form.\n";
    exit;
}

$field = fn(string $name): string => trim((string) ($_POST[$name] ?? ''));

/* The honeypot. People never see this field; a bot fills in everything it finds.
   Answer as if it worked, so the bot learns nothing, and send nothing. */
if ($field('website') !== '') finish(200, true, 'ok', 'Accepted.');

$values = ['name' => $field('name'), 'email' => $field('email'), 'subject' => $field('subject'), 'message' => $field('message')];
foreach ($values as $name => $value) {
    if ($value === '' || length($value) > MAX[$name] || (isset(MIN[$name]) && length($value) < MIN[$name])) {
        finish(422, false, 'invalid', "Please check the {$name} field.");
    }
}
if (!filter_var($values['email'], FILTER_VALIDATE_EMAIL)) finish(422, false, 'invalid', 'Please check the email field.');

$config = config();
if (!$config) finish(503, false, 'not-configured', 'The contact form is not set up on this server yet, so nothing was sent.');

if (!under_rate_limit($config)) finish(429, false, 'rate-limited', 'Too many messages from this connection in the last hour. Nothing was sent; please try again later.');

$subject = '[Weekly Delight] ' . header_safe($values['subject']);
$body = "Name: " . header_safe($values['name']) . "\n"
      . "Email: " . header_safe($values['email']) . "\n"
      . "Sent: " . gmdate('Y-m-d H:i') . " UTC\n\n"
      . $values['message'] . "\n";
$headers = [
    'From' => 'Weekly Delight <' . header_safe($config['from']) . '>',
    'Reply-To' => '"' . str_replace(['"', '\\'], '', header_safe($values['name'])) . '" <' . header_safe($values['email']) . '>',
    'Content-Type' => 'text/plain; charset=UTF-8',
    'X-Mailer' => 'weeklydelight-contact',
];

/* "log" writes the message to a file instead of sending it: for testing on a
   local or staging server without mailing anyone. */
if (($config['transport'] ?? 'mail') === 'log') {
    $line = json_encode(['to' => $config['to'], 'subject' => $subject, 'headers' => $headers, 'body' => $body]) . "\n";
    $ok = (bool) @file_put_contents($config['log_file'] ?? sys_get_temp_dir() . '/wd-contact-log.jsonl', $line, FILE_APPEND | LOCK_EX);
} else {
    $ok = mail($config['to'], '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, $headers, '-f' . header_safe($config['from']));
}

if (!$ok) finish(502, false, 'send-failed', 'The server could not hand the message to its mailer, so it was not sent.');
finish(200, true, 'ok', 'Your message was accepted for delivery.');
