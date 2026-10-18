<?php
/**
 * Weekly Delight: the contact form's endpoint.
 *
 * Copied by src/build.js to /contact/send.php. The site is static and is served
 * by Hostinger, which runs PHP, so this is the one dynamic file on it.
 *
 * What it promises, and no more
 * -----------------------------
 * It says "sent" only when the mail transport accepted the message: PHP's mail()
 * returning true, or the SMTP server answering 250 to the end of DATA. That means
 * the message left this site. It does not mean it reached an inbox: the receiving
 * server may still delay it, reject it later or file it as spam, and this script
 * cannot see that. The wording on the page says the same.
 *
 * Where the settings live
 * -----------------------
 * Nothing private is in this file or anywhere in the public directory. Settings
 * (where messages go, where they come from, SMTP login, a secret) live in a PHP
 * file outside the web root. See tools/contact-config.example.php, and:
 *
 *   1. the path in the WD_CONTACT_CONFIG environment variable, if set, else
 *   2. ../../private/contact-config.php relative to this file, which on Hostinger
 *      is domains/<site>/private/, beside public_html rather than in it.
 *
 * With no valid settings every submission answers 503 and the page says nothing
 * was sent. `GET send.php?status=1` answers {"ok":true,"configured":true|false}
 * and nothing else, so the contact page can say so before anyone types a message.
 *
 * Results
 * -------
 * A script (Accept: application/json) gets JSON. A plain form post gets a page:
 * a failure is rendered in place, and a success redirects to
 * send.php?sent=<signed token> so that the "message sent" page cannot be reached
 * by typing a URL. The pages are templates written by the build into _pages/.
 */

declare(strict_types=1);

ini_set('display_errors', '0');
error_reporting(E_ALL);

const WD_LIMITS = ['name' => 100, 'email' => 254, 'subject' => 150, 'message' => 5000];
const WD_MINIMUMS = ['name' => 2, 'subject' => 3, 'message' => 20];
const WD_TOKEN_SECONDS = 900;

/** Fixed public wording per outcome. Internal detail goes to error_log, never to the reader. */
const WD_MESSAGES = [
    'ok'             => 'Your message was handed to the mail server. That means it left this site, not that it has been read.',
    'invalid'        => 'Please check the form fields.',
    'not-configured' => 'The contact form is not switched on yet, so nothing was sent.',
    'unavailable'    => 'The contact form is not working at the moment, so nothing was sent.',
    'rate-limited'   => 'Too many messages have been sent from this connection recently. Nothing was sent; please try again later.',
    'send-failed'    => 'The mail server did not accept the message, so it was not sent.',
    'forbidden'      => 'This form can only be sent from the Weekly Delight contact page.',
    'error'          => 'Something went wrong on the server, so nothing was sent.',
];

function wd_wants_json(): bool {
    return stripos($_SERVER['HTTP_ACCEPT'] ?? '', 'application/json') !== false;
}

function wd_log(string $what): void {
    // Codes and sizes only. Never the message, the name, the address or any setting.
    error_log('weeklydelight-contact: ' . $what);
}

function wd_len(string $value): int {
    return function_exists('mb_strlen') ? mb_strlen($value, 'UTF-8') : strlen($value);
}

/** No line breaks in anything that reaches a mail header. */
function wd_header_safe(string $value): string {
    return trim((string) preg_replace('/[\r\n\t\0]+/', ' ', $value));
}

function wd_valid_email(string $value): bool {
    return strlen($value) <= 254
        && preg_match('/^[^\s<>"\',;:\\\\@]+@[^\s<>"\',;:\\\\@]+\.[^\s<>"\',;:\\\\@]{2,}$/', $value) === 1
        && filter_var($value, FILTER_VALIDATE_EMAIL) !== false;
}

/** A display name that is safe in a header: ASCII quoted, anything else as an encoded word. */
function wd_display_name(string $name): string {
    $name = str_replace(['"', '\\'], '', wd_header_safe($name));
    return preg_match('/^[\x20-\x7e]*$/', $name) === 1 ? '"' . $name . '"' : '=?UTF-8?B?' . base64_encode($name) . '?=';
}

function wd_encoded_word(string $text): string {
    return preg_match('/^[\x20-\x7e]*$/', $text) === 1 ? $text : '=?UTF-8?B?' . base64_encode($text) . '?=';
}

/* ------------------------------------------------------------------ settings */

function wd_config_path(): string {
    $env = getenv('WD_CONTACT_CONFIG');
    return is_string($env) && $env !== '' ? $env : dirname(__DIR__, 2) . '/private/contact-config.php';
}

/**
 * The settings, checked. Returns [config|null, problem]. The problem is for the
 * log and for tools/contact-doctor.php; it is never shown to a reader.
 */
function wd_config(): array {
    $path = wd_config_path();
    if (!is_file($path) || !is_readable($path)) return [null, 'no settings file'];
    $config = @include $path;
    if (!is_array($config)) return [null, 'settings file does not return an array'];

    foreach (['to', 'from'] as $key) {
        if (!isset($config[$key]) || !is_string($config[$key]) || !wd_valid_email($config[$key])) {
            return [null, "'$key' is missing or not an email address"];
        }
    }
    if (!isset($config['salt']) || !is_string($config['salt']) || strlen($config['salt']) < 16) {
        return [null, "'salt' must be a string of at least 16 characters"];
    }
    $config['transport'] = $config['transport'] ?? 'mail';
    if (!in_array($config['transport'], ['mail', 'smtp', 'log'], true)) return [null, "unknown 'transport'"];

    if ($config['transport'] === 'smtp') {
        $smtp = $config['smtp'] ?? null;
        if (!is_array($smtp)) return [null, "'smtp' settings are missing"];
        foreach (['host', 'username', 'password'] as $key) {
            if (!isset($smtp[$key]) || !is_string($smtp[$key]) || $smtp[$key] === '') return [null, "'smtp.$key' is missing"];
        }
        if (!isset($smtp['port']) || !is_int($smtp['port']) || $smtp['port'] < 1 || $smtp['port'] > 65535) return [null, "'smtp.port' must be a number"];
        $enc = $smtp['encryption'] ?? 'ssl';
        if (!in_array($enc, ['ssl', 'tls', 'none'], true)) return [null, "'smtp.encryption' must be ssl, tls or none"];
        if ($enc === 'none' && !in_array($smtp['host'], ['127.0.0.1', 'localhost', '::1'], true)) {
            return [null, "'smtp.encryption' none is only allowed for localhost"];
        }
        $config['smtp']['encryption'] = $enc;
    }
    if ($config['transport'] === 'log' && !isset($config['log_file'])) return [null, "'log_file' is missing"];

    $dir = isset($config['state_dir']) && is_string($config['state_dir']) ? $config['state_dir'] : dirname($path);
    if (!is_dir($dir) || !is_writable($dir)) return [null, 'state_dir is not a writable directory'];
    $config['state_dir'] = rtrim($dir, '/');
    $config['rate_limit'] = max(1, (int) ($config['rate_limit'] ?? 5));
    $config['rate_window'] = max(60, (int) ($config['rate_window'] ?? 3600));
    $config['daily_limit'] = max(1, (int) ($config['daily_limit'] ?? 100));
    return [$config, ''];
}

/* --------------------------------------------------------------- rate limits */

function wd_client_ip(array $config): string {
    $header = $config['client_ip_header'] ?? null;     // e.g. 'HTTP_X_FORWARDED_FOR', only if the host's proxy sets it
    if (is_string($header) && isset($_SERVER[$header]) && is_string($_SERVER[$header])) {
        $first = trim(explode(',', $_SERVER[$header])[0]);
        if (filter_var($first, FILTER_VALIDATE_IP) !== false) return $first;
    }
    return (string) ($_SERVER['REMOTE_ADDR'] ?? 'unknown');
}

/**
 * Applies the per-connection and per-day limits. The state file holds salted
 * hashes and timestamps; entries older than the window are dropped every time
 * this runs (a submission or a status check), and the file is mode 0600.
 *
 * Returns 'ok', 'limited' or 'error'. 'error' means the state could not be read
 * or written, and the caller refuses to send: with no limiter a mail form is an
 * open relay for whoever finds it.
 */
function wd_rate(array $config, bool $record): string {
    $file = $config['state_dir'] . '/wd-contact-rate.json';
    $now = time();
    $oldMask = umask(0077);
    $handle = @fopen($file, 'c+');
    umask($oldMask);
    if (!$handle) return 'error';
    if (!flock($handle, LOCK_EX)) { fclose($handle); return 'error'; }
    try {
        $raw = stream_get_contents($handle);
        $data = is_string($raw) && $raw !== '' ? json_decode($raw, true) : [];
        if (!is_array($data)) $data = [];
        $ips = isset($data['ips']) && is_array($data['ips']) ? $data['ips'] : [];
        $days = isset($data['day']) && is_array($data['day']) ? $data['day'] : [];

        $cutoff = $now - $config['rate_window'];
        foreach ($ips as $key => $times) {
            $kept = array_values(array_filter((array) $times, static fn($t) => is_int($t) && $t > $cutoff));
            if ($kept) $ips[$key] = $kept; else unset($ips[$key]);
        }
        $days = array_values(array_filter($days, static fn($t) => is_int($t) && $t > $now - 86400));

        $result = 'ok';
        if ($record) {
            $key = substr(hash_hmac('sha256', wd_client_ip($config), $config['salt']), 0, 24);
            if (count($ips[$key] ?? []) >= $config['rate_limit'] || count($days) >= $config['daily_limit']) {
                $result = 'limited';
            } else {
                $ips[$key][] = $now;
                $days[] = $now;
            }
        }
        ftruncate($handle, 0);
        rewind($handle);
        fwrite($handle, (string) json_encode(['v' => 1, 'ips' => $ips, 'day' => $days]));
        fflush($handle);
        return $result;
    } finally {
        flock($handle, LOCK_UN);
        fclose($handle);
    }
}

/* ------------------------------------------------------------------ transport */

function wd_build_message(array $config, array $values): array {
    $from = $config['from'];
    $subject = '[Weekly Delight] ' . wd_header_safe($values['subject']);
    $bodyText = "Name: " . wd_header_safe($values['name']) . "\r\n"
        . "Email: " . $values['email'] . "\r\n"
        . "Sent: " . gmdate('Y-m-d H:i') . " UTC\r\n\r\n"
        . str_replace(["\r\n", "\r", "\n"], "\r\n", str_replace("\0", '', $values['message'])) . "\r\n";
    $domain = substr(strrchr($from, '@'), 1);
    $headers = [
        'From' => 'Weekly Delight <' . $from . '>',
        'Reply-To' => wd_display_name($values['name']) . ' <' . $values['email'] . '>',
        'MIME-Version' => '1.0',
        'Content-Type' => 'text/plain; charset=UTF-8',
        'Content-Transfer-Encoding' => 'base64',
        'Message-ID' => '<' . bin2hex(random_bytes(12)) . '@' . $domain . '>',
        'X-Mailer' => 'weeklydelight-contact',
    ];
    return [$subject, $bodyText, $headers];
}

/** Reads one SMTP reply (possibly several lines). Returns [code, text]. */
function wd_smtp_read($socket): array {
    $text = '';
    $code = 0;
    while (($line = fgets($socket, 1024)) !== false) {
        $text .= $line;
        $code = (int) substr($line, 0, 3);
        if (strlen($line) < 4 || $line[3] !== '-') break;
    }
    return [$code, $text];
}

function wd_smtp_command($socket, string $command, array $expect): bool {
    if ($command !== '') fwrite($socket, $command . "\r\n");
    [$code] = wd_smtp_read($socket);
    return in_array($code, $expect, true);
}

/**
 * A small authenticated SMTP client (AUTH LOGIN over TLS). The server's
 * certificate is verified; 'cafile' may name a CA bundle for a private server.
 * Returns '' on success, or a short reason for the log.
 */
function wd_smtp_send(array $smtp, string $from, string $to, string $data, bool $probeOnly = false): string {
    $enc = $smtp['encryption'];
    $context = stream_context_create(['ssl' => array_filter([
        'verify_peer' => true,
        'verify_peer_name' => true,
        'cafile' => $smtp['cafile'] ?? null,
        'peer_name' => $smtp['host'],
    ], static fn($v) => $v !== null)]);
    $remote = ($enc === 'ssl' ? 'ssl://' : 'tcp://') . $smtp['host'] . ':' . $smtp['port'];
    $errno = 0;
    $errstr = '';
    $socket = @stream_socket_client($remote, $errno, $errstr, 12, STREAM_CLIENT_CONNECT, $context);
    if (!$socket) return "connect failed ($errno)";
    stream_set_timeout($socket, 15);
    try {
        [$code] = wd_smtp_read($socket);
        if ($code !== 220) return "greeting $code";
        $helo = $smtp['helo'] ?? substr(strrchr($from, '@'), 1);
        if (!wd_smtp_command($socket, 'EHLO ' . $helo, [250])) return 'EHLO refused';
        if ($enc === 'tls') {
            if (!wd_smtp_command($socket, 'STARTTLS', [220])) return 'STARTTLS refused';
            if (!@stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) return 'TLS handshake failed';
            if (!wd_smtp_command($socket, 'EHLO ' . $helo, [250])) return 'EHLO after STARTTLS refused';
        }
        if (!wd_smtp_command($socket, 'AUTH LOGIN', [334])) return 'AUTH LOGIN not accepted';
        if (!wd_smtp_command($socket, base64_encode($smtp['username']), [334])) return 'username rejected';
        if (!wd_smtp_command($socket, base64_encode($smtp['password']), [235])) return 'login failed';
        if ($probeOnly) { wd_smtp_command($socket, 'QUIT', [221]); return ''; }
        if (!wd_smtp_command($socket, 'MAIL FROM:<' . $from . '>', [250])) return 'sender refused';
        if (!wd_smtp_command($socket, 'RCPT TO:<' . $to . '>', [250, 251])) return 'recipient refused';
        if (!wd_smtp_command($socket, 'DATA', [354])) return 'DATA refused';
        // Dot-stuff, then end with CRLF.CRLF.
        $stuffed = preg_replace('/^\./m', '..', $data);
        fwrite($socket, $stuffed . "\r\n.\r\n");
        [$code] = wd_smtp_read($socket);
        if ($code !== 250) return "message refused ($code)";
        wd_smtp_command($socket, 'QUIT', [221]);
        return '';
    } finally {
        fclose($socket);
    }
}

/** Sends with the configured transport. Returns '' on success or a short reason for the log. */
function wd_deliver(array $config, array $values): string {
    [$subject, $bodyText, $headers] = wd_build_message($config, $values);
    $encodedSubject = wd_encoded_word($subject);
    $body = rtrim(chunk_split(base64_encode($bodyText), 76, "\r\n"));

    switch ($config['transport']) {
        case 'log':   // testing only: writes the message to a file and sends nothing
            $line = json_encode(['to' => $config['to'], 'subject' => $subject, 'headers' => $headers, 'body' => $bodyText]) . "\n";
            return @file_put_contents($config['log_file'], $line, FILE_APPEND | LOCK_EX) === false ? 'log file not writable' : '';

        case 'smtp':
            $lines = ['Date: ' . gmdate('D, d M Y H:i:s') . ' +0000', 'To: <' . $config['to'] . '>', 'Subject: ' . $encodedSubject];
            foreach ($headers as $name => $value) $lines[] = $name . ': ' . $value;
            return wd_smtp_send($config['smtp'], $config['from'], $config['to'], implode("\r\n", $lines) . "\r\n\r\n" . $body);

        default:      // PHP's own mailer
            $headerBlock = [];
            foreach ($headers as $name => $value) $headerBlock[] = $name . ': ' . $value;
            return @mail($config['to'], $encodedSubject, $body, implode("\r\n", $headerBlock), '-f' . $config['from']) ? '' : 'mail() returned false';
    }
}

/* ---------------------------------------------------------------------- output */

function wd_token(string $salt, ?int $time = null): string {
    $time = $time ?? time();
    return $time . '.' . substr(hash_hmac('sha256', 'sent|' . $time, $salt), 0, 32);
}

function wd_token_valid(string $salt, string $token): bool {
    if (preg_match('/^(\d{9,11})\.([0-9a-f]{32})$/', $token, $m) !== 1) return false;
    $time = (int) $m[1];
    return $time <= time() + 5 && time() - $time <= WD_TOKEN_SECONDS && hash_equals(wd_token($salt, $time), $token);
}

function wd_page(string $template, string $message, int $status): void {
    $file = __DIR__ . '/_pages/' . $template . '.html';
    $html = is_file($file) ? (string) file_get_contents($file) : '';
    http_response_code($status);
    header('Content-Type: text/html; charset=utf-8');
    header('Cache-Control: no-store');
    header('X-Robots-Tag: noindex');
    $safe = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');
    echo $html !== '' ? str_replace('{{WD_MESSAGE}}', $safe, $html)
        : '<!doctype html><meta charset="utf-8"><title>Contact</title><p>' . $safe . '</p><p><a href="/contact/">Back to the contact form</a></p>';
    exit;
}

/** Ends the request. $config may be null when settings are missing. */
function wd_finish(?array $config, int $status, string $code, ?string $field = null): void {
    $ok = $code === 'ok';
    $message = WD_MESSAGES[$code] ?? WD_MESSAGES['error'];
    if ($code === 'invalid' && $field !== null) $message = 'Please check the ' . $field . ' field.';
    if (wd_wants_json()) {
        http_response_code($status);
        header('Content-Type: application/json; charset=utf-8');
        header('Cache-Control: no-store');
        echo json_encode(['ok' => $ok, 'code' => $code, 'message' => $message]);
        exit;
    }
    header('Cache-Control: no-store');
    if ($ok) {
        if ($config !== null) {
            header('Location: /contact/send.php?sent=' . rawurlencode(wd_token($config['salt'])), true, 303);
            exit;
        }
        wd_page('sent', $message, 200);   // only the honeypot reaches here without settings
    }
    wd_page('not-sent', $message, $status);
}

/* --------------------------------------------------------------------- routes */

// tools/contact-doctor.php defines WD_CONTACT_LIBRARY to use the functions above without handling a request.
if (defined('WD_CONTACT_LIBRARY')) return;

try {
    $method = $_SERVER['REQUEST_METHOD'] ?? '';

    if ($method === 'GET' || $method === 'HEAD') {
        if (isset($_GET['status'])) {
            [$config, $problem] = wd_config();
            if ($config === null && $problem !== 'no settings file') wd_log('settings problem: ' . $problem);
            if ($config !== null) wd_rate($config, false);   // also clears expired entries
            header('Content-Type: application/json; charset=utf-8');
            header('Cache-Control: no-store');
            echo json_encode(['ok' => true, 'configured' => $config !== null]);
            exit;
        }
        if (isset($_GET['sent']) && is_string($_GET['sent'])) {
            [$config] = wd_config();
            if ($config !== null && wd_token_valid($config['salt'], $_GET['sent'])) wd_page('sent', WD_MESSAGES['ok'], 200);
            header('Location: /contact/', true, 303);
            exit;
        }
        http_response_code(405);
        header('Allow: POST');
        header('Content-Type: text/plain; charset=utf-8');
        echo "This address only accepts the contact form.\n";
        exit;
    }

    if ($method !== 'POST') {
        http_response_code(405);
        header('Allow: GET, HEAD, POST');
        exit;
    }

    // Only from this site's own pages, when the browser says where the post came from.
    foreach (['HTTP_ORIGIN', 'HTTP_REFERER'] as $header) {
        if (!empty($_SERVER[$header]) && is_string($_SERVER[$header])) {
            $host = parse_url($_SERVER[$header], PHP_URL_HOST);
            $self = $_SERVER['HTTP_HOST'] ?? '';
            $self = preg_replace('/:\d+$/', '', is_string($self) ? $self : '');
            if (!is_string($host) || strcasecmp($host, (string) $self) !== 0) wd_finish(null, 403, 'forbidden');
            break;
        }
    }

    // Fields must be plain strings: a posted array (name[]=x) is invalid, not "Array".
    $values = [];
    foreach (['name', 'email', 'subject', 'message', 'website'] as $field) {
        $raw = $_POST[$field] ?? '';
        if (!is_string($raw)) wd_finish(null, 422, 'invalid', $field === 'website' ? 'form' : $field);
        $values[$field] = trim($raw);
    }

    // The honeypot: people never see this field. Answer as if it worked, so a bot learns nothing, and send nothing.
    if ($values['website'] !== '') {
        [$config] = wd_config();
        wd_finish($config, 200, 'ok');
    }

    foreach (WD_LIMITS as $field => $max) {
        $value = $values[$field];
        if ($value === '' || wd_len($value) > $max || (isset(WD_MINIMUMS[$field]) && wd_len($value) < WD_MINIMUMS[$field])) {
            wd_finish(null, 422, 'invalid', $field);
        }
    }
    if (!wd_valid_email($values['email'])) wd_finish(null, 422, 'invalid', 'email');

    [$config, $problem] = wd_config();
    if ($config === null) {
        if ($problem !== 'no settings file') wd_log('settings problem: ' . $problem);
        wd_finish(null, 503, 'not-configured');
    }

    $rate = wd_rate($config, true);
    if ($rate === 'error') { wd_log('rate-limit state could not be read or written'); wd_finish($config, 503, 'unavailable'); }
    if ($rate === 'limited') wd_finish($config, 429, 'rate-limited');

    $failure = wd_deliver($config, $values);
    if ($failure !== '') { wd_log('delivery failed: ' . $failure); wd_finish($config, 502, 'send-failed'); }
    wd_finish($config, 200, 'ok');
} catch (Throwable $e) {
    wd_log('unexpected ' . get_class($e));
    wd_finish(null, 500, 'error');
}
