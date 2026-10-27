<?php
/**
 * Weekly Delight: shared code for the reader feedback endpoints
 * (report.php, review.php, subscribe.php, moderate.php in /feedback/).
 *
 * Copied by src/build.js to /feedback/. Not a page: requested directly it answers
 * 404 (see the guard below), and .htaccess refuses it as well.
 *
 * Where things live
 * -----------------
 * Settings and submissions never sit in the public directory. The settings file is
 *   1. the path in WD_FEEDBACK_CONFIG, if set, else
 *   2. ../../private/feedback-config.php relative to this file, which on Hostinger is
 *      domains/<site>/private/, beside public_html, the same place as the contact
 *      form's settings. See tools/feedback-config.example.php.
 * Submissions are JSON files in the settings' storage_dir, one file per submission,
 * written atomically (temporary file, then rename), so a crash never leaves half a
 * record and nothing is lost when two arrive at once.
 *
 * What the endpoints promise
 * --------------------------
 * They answer 201 only after the submission is on disk. Without valid settings
 * they answer 503 "not-configured" and store nothing, and the page says so before
 * anyone types. Nothing is emailed by these endpoints.
 */

declare(strict_types=1);

if (!defined('WD_FEEDBACK')) { http_response_code(404); exit; }

ini_set('display_errors', '0');
error_reporting(E_ALL);

const WD_ALLOWED_ORIGINS = ['https://weeklydelight.com', 'https://www.weeklydelight.com'];

function wd_log(string $what): void {
    // Codes and sizes only: never a name, an address or a message.
    error_log('weeklydelight-feedback: ' . $what);
}

function wd_wants_json(): bool {
    return stripos($_SERVER['HTTP_ACCEPT'] ?? '', 'application/json') !== false;
}

function wd_len(string $v): int {
    return function_exists('mb_strlen') ? mb_strlen($v, 'UTF-8') : strlen($v);
}

function wd_clean(string $v, int $max): string {
    // Strip control characters except newlines and tabs, normalise line ends, trim, cap.
    $v = str_replace(["\r\n", "\r"], "\n", $v);
    $v = (string) preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $v);
    $v = trim($v);
    return function_exists('mb_substr') ? mb_substr($v, 0, $max, 'UTF-8') : substr($v, 0, $max);
}

function wd_config_path(): string {
    $env = getenv('WD_FEEDBACK_CONFIG');
    if (is_string($env) && $env !== '') return $env;
    return dirname(__DIR__, 2) . '/private/feedback-config.php';
}

/** The settings, or null when absent or unusable. Never echoes a value. */
function wd_config(): ?array {
    static $cached = false;
    if ($cached !== false) return $cached;
    $path = wd_config_path();
    $cached = null;
    if (!is_file($path) || !is_readable($path)) return null;
    try { $c = include $path; } catch (Throwable $e) { wd_log('config unreadable'); return null; }
    if (!is_array($c)) return null;
    if (!is_string($c['salt'] ?? null) || strlen($c['salt']) < 16) { wd_log('config: salt missing or short'); return null; }
    $dir = $c['storage_dir'] ?? '';
    if (!is_string($dir) || $dir === '' || !is_dir($dir) || !is_writable($dir)) { wd_log('config: storage_dir not writable'); return null; }
    // The storage folder must not be inside the public web directory.
    $public = realpath(dirname(__DIR__));
    $real = realpath($dir);
    if ($public !== false && $real !== false && strpos($real . '/', $public . '/') === 0) { wd_log('config: storage_dir is public'); return null; }
    $c['storage_dir'] = $real;
    $c['reports_enabled'] = ($c['reports_enabled'] ?? true) === true;
    $c['reviews_enabled'] = ($c['reviews_enabled'] ?? false) === true;
    $c['allowed_origins'] = is_array($c['allowed_origins'] ?? null) ? $c['allowed_origins'] : WD_ALLOWED_ORIGINS;
    $cached = $c;
    return $c;
}

function wd_respond(int $status, array $body, string $htmlMessage = ''): void {
    http_response_code($status);
    header('Cache-Control: no-store');
    header('X-Robots-Tag: noindex');
    if (wd_wants_json()) {
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode($body, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
        return;
    }
    // A plain form post (no JavaScript): a minimal page in the site's words.
    header('Content-Type: text/html; charset=utf-8');
    $msg = htmlspecialchars($htmlMessage !== '' ? $htmlMessage : ($body['message'] ?? ''), ENT_QUOTES, 'UTF-8');
    $back = htmlspecialchars($body['back'] ?? '/', ENT_QUOTES, 'UTF-8');
    echo "<!doctype html><html lang=\"en-GB\"><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">"
        . "<meta name=\"robots\" content=\"noindex\"><title>Weekly Delight</title>"
        . "<style>body{font:17px/1.6 system-ui,sans-serif;max-width:40rem;margin:3rem auto;padding:0 1rem;color:#2a1d14;background:#fbf7f0}a{color:#9c4a1a}</style></head>"
        . "<body><h1>" . ($status < 300 ? 'Received' : 'Not sent') . "</h1><p>{$msg}</p><p><a href=\"{$back}\">Go back</a></p></body></html>";
}

/** The request came from a page on this site (Origin, or Referer when Origin is absent). */
function wd_same_origin(array $c): bool {
    foreach (['HTTP_ORIGIN', 'HTTP_REFERER'] as $h) {
        $v = $_SERVER[$h] ?? '';
        if ($v === '') continue;
        $p = parse_url($v);
        $origin = ($p['scheme'] ?? '') . '://' . ($p['host'] ?? '') . (isset($p['port']) ? ':' . $p['port'] : '');
        return in_array($origin, $c['allowed_origins'], true);
    }
    return false;
}

function wd_ip_hash(array $c): string {
    return substr(hash_hmac('sha256', (string) ($_SERVER['REMOTE_ADDR'] ?? 'unknown'), $c['salt']), 0, 24);
}

/**
 * A per-connection and a site-wide limit, kept in one small file under a lock.
 * Returns 'ok', 'limited' or 'error'. Only the HMAC of the address is stored.
 */
function wd_rate(array $c, string $bucket, int $perHour, int $perDay): string {
    $file = $c['storage_dir'] . '/rate-' . preg_replace('/[^a-z]/', '', $bucket) . '.json';
    $h = @fopen($file, 'c+');
    if (!$h) return 'error';
    try {
        if (!flock($h, LOCK_EX)) return 'error';
        $data = json_decode((string) stream_get_contents($h), true);
        if (!is_array($data)) $data = ['hits' => []];
        $now = time();
        $data['hits'] = array_values(array_filter($data['hits'], fn($x) => is_array($x) && ($now - (int) $x[1]) < 86400));
        $mine = wd_ip_hash($c);
        $hour = count(array_filter($data['hits'], fn($x) => $x[0] === $mine && ($now - (int) $x[1]) < 3600));
        if ($hour >= $perHour || count($data['hits']) >= $perDay) return 'limited';
        $data['hits'][] = [$mine, $now];
        ftruncate($h, 0); rewind($h);
        fwrite($h, json_encode($data));
        fflush($h);
        return 'ok';
    } finally {
        flock($h, LOCK_UN);
        fclose($h);
    }
}

/** Write one record as its own file, atomically. Returns the id, or null on failure. */
function wd_store(array $c, string $kind, array $record): ?string {
    $dir = $c['storage_dir'] . '/' . $kind;
    if (!is_dir($dir) && !@mkdir($dir, 0700, true)) return null;
    $id = gmdate('Ymd-His') . '-' . bin2hex(random_bytes(4));
    $record = ['id' => $id] + $record;
    $tmp = $dir . '/.' . $id . '.tmp';
    $json = json_encode($record, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    if ($json === false || @file_put_contents($tmp, $json, LOCK_EX) === false) return null;
    if (!@rename($tmp, $dir . '/' . $id . '.json')) { @unlink($tmp); return null; }
    return $id;
}

/** Every record of a kind, newest first. */
function wd_records(array $c, string $kind): array {
    $out = [];
    foreach (glob($c['storage_dir'] . '/' . $kind . '/*.json') ?: [] as $f) {
        $r = json_decode((string) file_get_contents($f), true);
        if (is_array($r) && isset($r['id'])) $out[] = $r;
    }
    usort($out, fn($a, $b) => strcmp($b['id'], $a['id']));
    return $out;
}

/** Replace one record (moderation), atomically. */
function wd_update(array $c, string $kind, string $id, array $changes): bool {
    if (!preg_match('/^\d{8}-\d{6}-[0-9a-f]{8}$/', $id)) return false;
    $file = $c['storage_dir'] . '/' . $kind . '/' . $id . '.json';
    $r = is_file($file) ? json_decode((string) file_get_contents($file), true) : null;
    if (!is_array($r)) return false;
    $r = array_merge($r, $changes);
    $tmp = $file . '.tmp';
    if (@file_put_contents($tmp, json_encode($r, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE), LOCK_EX) === false) return false;
    return @rename($tmp, $file);
}

/** The recipe a submission is about, checked against the published search index. */
function wd_recipe(string $slug): ?array {
    if (!preg_match('/^[a-z0-9-]{2,90}$/', $slug)) return null;
    $index = dirname(__DIR__) . '/search-index.json';
    $list = is_file($index) ? json_decode((string) file_get_contents($index), true) : null;
    if (!is_array($list)) return null;
    foreach ($list as $r) {
        if (($r['g'] ?? '') === $slug) return ['slug' => $slug, 'title' => (string) ($r['t'] ?? $slug)];
    }
    return null;
}

/** Spam traps shared by the public forms: a hidden field a person leaves empty, and a form sent impossibly fast. */
function wd_looks_automated(array $in): bool {
    if (trim((string) ($in['website'] ?? '')) !== '') return true;
    $started = (int) ($in['started'] ?? 0);
    if ($started > 0) {
        $age = (int) round(microtime(true)) - (int) floor($started / 1000);
        if ($age < 3 || $age > 86400 * 2) return true;
    }
    return false;
}

/** Reads a JSON body or form fields, whichever the request carries. */
function wd_input(): array {
    $type = $_SERVER['CONTENT_TYPE'] ?? '';
    if (stripos($type, 'application/json') !== false) {
        $raw = file_get_contents('php://input', false, null, 0, 20000);
        $d = json_decode((string) $raw, true);
        return is_array($d) ? $d : [];
    }
    return $_POST;
}

function wd_valid_email(string $v): bool {
    return strlen($v) <= 254 && filter_var($v, FILTER_VALIDATE_EMAIL) !== false;
}
