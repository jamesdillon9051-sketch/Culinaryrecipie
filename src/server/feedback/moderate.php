<?php
/**
 * Weekly Delight: the moderation page for problem reports and reader reviews.
 *
 * Password-protected (admin_password_hash in the settings, made with
 * `php -r "echo password_hash('your passphrase', PASSWORD_DEFAULT), PHP_EOL;"`).
 * Sessions are HTTP-only, Secure, SameSite=Strict cookies; every change carries a
 * CSRF token; five failed logins from one connection in 15 minutes lock it out
 * for 15 minutes. Never indexed, never linked from the site.
 *
 * Reports: new -> triaged -> fixed | not-a-problem | duplicate, each with a note,
 * kept in the record's history. Reviews: pending -> approved | rejected. Approved
 * reviews are published by exporting them (the "Export" link writes the JSON that
 * src/data/reviews.json expects) and committing that file; the site is static,
 * so nothing a reader sends reaches a page without that step.
 */
define('WD_FEEDBACK', 1);
require __DIR__ . '/_lib.php';

header('X-Robots-Tag: noindex, nofollow');
header('Cache-Control: no-store');
header("Content-Security-Policy: default-src 'none'; style-src 'unsafe-inline'; form-action 'self'; frame-ancestors 'none'");
header('X-Frame-Options: DENY');

$c = wd_config();
if ($c === null || !is_string($c['admin_password_hash'] ?? null) || $c['admin_password_hash'] === '') {
    http_response_code(503);
    echo 'Moderation is not set up: see tools/feedback-config.example.php.';
    exit;
}

session_name('wdmod');
session_set_cookie_params(['lifetime' => 0, 'path' => '/feedback/', 'secure' => !empty($_SERVER['HTTPS']) || ($c['insecure_cookie_for_tests'] ?? false) !== true,
    'httponly' => true, 'samesite' => 'Strict']);
if (($c['insecure_cookie_for_tests'] ?? false) === true) ini_set('session.cookie_secure', '0');
session_save_path($c['storage_dir']);
session_start();
if (empty($_SESSION['csrf'])) $_SESSION['csrf'] = bin2hex(random_bytes(16));

$e = fn($v) => htmlspecialchars((string) $v, ENT_QUOTES, 'UTF-8');
$csrfOk = fn() => hash_equals($_SESSION['csrf'], (string) ($_POST['csrf'] ?? ''));

function wd_lockout(array $c, bool $fail): bool {
    $file = $c['storage_dir'] . '/login-failures.json';
    $data = is_file($file) ? (json_decode((string) file_get_contents($file), true) ?: []) : [];
    $me = wd_ip_hash($c);
    $now = time();
    $mine = array_values(array_filter($data[$me] ?? [], fn($t) => $now - $t < 900));
    if ($fail) { $mine[] = $now; $data[$me] = $mine; file_put_contents($file, json_encode($data), LOCK_EX); }
    return count($mine) >= 5;
}

$action = $_POST['action'] ?? '';
$message = '';

if ($action === 'logout' && $csrfOk()) { $_SESSION = []; session_destroy(); header('Location: moderate.php'); exit; }

if (empty($_SESSION['admin'])) {
    if ($action === 'login') {
        if (wd_lockout($c, false)) { $message = 'Too many failed attempts. Try again in 15 minutes.'; }
        elseif ($csrfOk() && password_verify((string) ($_POST['password'] ?? ''), $c['admin_password_hash'])) {
            session_regenerate_id(true);
            $_SESSION['admin'] = true;
            $_SESSION['csrf'] = bin2hex(random_bytes(16));
            header('Location: moderate.php'); exit;
        } else { wd_lockout($c, true); wd_log('moderate: failed login'); $message = 'That password is not right.'; }
    }
    echo "<!doctype html><html lang=\"en-GB\"><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><meta name=\"robots\" content=\"noindex\"><title>Moderation</title>"
        . "<style>body{font:16px/1.5 system-ui,sans-serif;max-width:28rem;margin:4rem auto;padding:0 1rem}input,button{font:inherit;padding:.6rem;min-height:44px}label{display:block;margin:.5rem 0}</style></head><body>"
        . "<h1>Weekly Delight moderation</h1>" . ($message ? "<p role=\"alert\">{$e($message)}</p>" : '')
        . "<form method=\"post\"><input type=\"hidden\" name=\"csrf\" value=\"{$e($_SESSION['csrf'])}\"><input type=\"hidden\" name=\"action\" value=\"login\">"
        . "<label for=\"pw\">Password</label><input id=\"pw\" type=\"password\" name=\"password\" autocomplete=\"current-password\" required>"
        . " <button type=\"submit\">Sign in</button></form></body></html>";
    exit;
}

/* ------------------------------------------------------------ signed in */
const REPORT_STATES = ['new', 'triaged', 'fixed', 'not-a-problem', 'duplicate'];
const REVIEW_STATES = ['pending', 'approved', 'rejected'];

if ($action !== '' && !$csrfOk()) { http_response_code(400); echo 'Form expired; reload the page.'; exit; }

/* The privacy page promises reports and reviews are deleted within a year: enforce it each time this page is opened. */
foreach (['reports', 'reviews'] as $kind) {
    foreach (glob($c['storage_dir'] . '/' . $kind . '/*.json') ?: [] as $f) {
        if (preg_match('/^(\d{8})-/', basename($f), $m) && strtotime($m[1]) < time() - 365 * 86400) @unlink($f);
    }
}
if ($action === 'report') {
    $id = (string) ($_POST['id'] ?? ''); $to = (string) ($_POST['status'] ?? ''); $note = wd_clean((string) ($_POST['note'] ?? ''), 1000);
    $current = null;
    foreach (wd_records($c, 'reports') as $r) if ($r['id'] === $id) $current = $r;
    if ($current && in_array($to, REPORT_STATES, true)) {
        $history = is_array($current['history'] ?? null) ? $current['history'] : [];
        $history[] = ['at' => gmdate('c'), 'from' => $current['status'], 'to' => $to, 'note' => $note];
        $message = wd_update($c, 'reports', $id, ['status' => $to, 'history' => $history]) ? "Report {$id} marked {$to}." : 'Could not save.';
    }
}
if ($action === 'review') {
    $id = (string) ($_POST['id'] ?? ''); $to = (string) ($_POST['status'] ?? ''); $note = wd_clean((string) ($_POST['note'] ?? ''), 500);
    if (in_array($to, REVIEW_STATES, true)) {
        $message = wd_update($c, 'reviews', $id, ['status' => $to, 'moderated' => gmdate('c'), 'moderator_note' => $note]) ? "Review {$id} {$to}." : 'Could not save.';
    }
}
if (($_GET['export'] ?? '') === 'reviews') {
    // The shape src/data/reviews.json takes: { slug: [ { author, rating, body, date, submitted, approved } ] }.
    $out = [];
    foreach (wd_records($c, 'reviews') as $r) {
        if (($r['status'] ?? '') !== 'approved') continue;
        $item = ['author' => $r['name'], 'body' => $r['body'], 'date' => substr((string) $r['moderated'], 0, 10),
                 'submitted' => $r['received'], 'approved' => $r['moderated']];
        if ($r['rating'] !== null) $item['rating'] = (int) $r['rating'];
        $out[$r['recipe']][] = $item;
    }
    ksort($out);
    header('Content-Type: application/json; charset=utf-8');
    header('Content-Disposition: attachment; filename="reviews.json"');
    echo json_encode($out, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE), "\n";
    exit;
}

$show = in_array($_GET['status'] ?? '', REPORT_STATES, true) ? $_GET['status'] : 'new';
$reports = array_values(array_filter(wd_records($c, 'reports'), fn($r) => ($r['status'] ?? 'new') === $show));
$pending = array_values(array_filter(wd_records($c, 'reviews'), fn($r) => ($r['status'] ?? '') === 'pending'));
$token = $e($_SESSION['csrf']);

echo "<!doctype html><html lang=\"en-GB\"><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><meta name=\"robots\" content=\"noindex\"><title>Moderation</title>"
    . "<style>body{font:15px/1.5 system-ui,sans-serif;max-width:60rem;margin:2rem auto;padding:0 1rem}article{border:1px solid #ccc;border-radius:8px;padding:1rem;margin:1rem 0}"
    . "pre{white-space:pre-wrap;background:#f6f2ea;padding:.6rem;border-radius:6px}select,input,button{font:inherit;padding:.4rem;min-height:40px}nav a{margin-right:1rem}</style></head><body>"
    . "<h1>Moderation</h1>" . ($message ? "<p role=\"status\">{$e($message)}</p>" : '')
    . "<form method=\"post\" style=\"float:right\"><input type=\"hidden\" name=\"csrf\" value=\"{$token}\"><button name=\"action\" value=\"logout\">Sign out</button></form>"
    . "<h2>Problem reports: " . $e($show) . " (" . count($reports) . ")</h2><nav>";
foreach (REPORT_STATES as $s) echo "<a href=\"?status={$s}\">{$s}</a>";
echo "</nav>";
foreach ($reports as $r) {
    echo "<article><h3>{$e($r['title'])} &middot; {$e($r['type'])}</h3>"
        . "<p><a href=\"{$e($r['url'])}\" rel=\"noopener\">{$e($r['url'])}</a> &middot; content version {$e($r['version'] ?: 'not given')} &middot; received {$e($r['received'])} &middot; ref {$e($r['id'])}</p>"
        . "<pre>{$e($r['description'])}</pre>"
        . ($r['changed'] === 'yes' ? "<p>Changed the recipe: <pre>{$e($r['changes'])}</pre></p>" : '')
        . ($r['email'] !== '' ? "<p>Contact: {$e($r['name'])} &lt;{$e($r['email'])}&gt;" . ($r['reply'] ? ' &middot; <strong>asked for a reply</strong>' : '') . "</p>" : '<p>No contact details.</p>');
    foreach (($r['history'] ?? []) as $h) echo "<p><small>{$e($h['at'])}: {$e($h['from'])} &rarr; {$e($h['to'])} {$e($h['note'])}</small></p>";
    echo "<form method=\"post\"><input type=\"hidden\" name=\"csrf\" value=\"{$token}\"><input type=\"hidden\" name=\"action\" value=\"report\"><input type=\"hidden\" name=\"id\" value=\"{$e($r['id'])}\">"
        . "<label>Mark as <select name=\"status\">";
    foreach (REPORT_STATES as $s) echo "<option" . ($s === $r['status'] ? ' selected' : '') . ">{$s}</option>";
    echo "</select></label> <label>Note <input name=\"note\" size=\"40\"></label> <button>Save</button></form></article>";
}
echo "<h2>Reviews waiting (" . count($pending) . ")</h2><p><a href=\"?export=reviews\">Export approved reviews as reviews.json</a></p>";
foreach ($pending as $r) {
    echo "<article><h3>{$e($r['title'])}</h3><p>{$e($r['name'])}" . ($r['rating'] !== null ? " &middot; {$e($r['rating'])}/5" : '') . " &middot; {$e($r['received'])}</p><pre>{$e($r['body'])}</pre>"
        . "<form method=\"post\"><input type=\"hidden\" name=\"csrf\" value=\"{$token}\"><input type=\"hidden\" name=\"action\" value=\"review\"><input type=\"hidden\" name=\"id\" value=\"{$e($r['id'])}\">"
        . "<label>Note <input name=\"note\" size=\"30\"></label> <button name=\"status\" value=\"approved\">Approve</button> <button name=\"status\" value=\"rejected\">Reject</button></form></article>";
}
echo "</body></html>";
