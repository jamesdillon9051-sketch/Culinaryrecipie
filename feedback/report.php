<?php
/**
 * Weekly Delight: "Report a problem with this recipe".
 *
 * POST (JSON or form): recipe, version, type, description, changed, changes,
 * name, email, reply, website (trap), started (trap). Answers 201 with the
 * report's id only after it is written to disk; 422 with the fields to fix;
 * 503 when the settings are missing; 429 when rate-limited; 403 from another site.
 * GET ?status=1 answers {"ok":true,"configured":true|false} and nothing else.
 */
define('WD_FEEDBACK', 1);
require __DIR__ . '/_lib.php';

const WD_TYPES = ['quantity', 'instruction', 'timing', 'yield', 'substitution', 'other'];

$c = wd_config();
if (($_SERVER['REQUEST_METHOD'] ?? 'GET') === 'GET') {
    header('Content-Type: application/json; charset=utf-8');
    header('Cache-Control: no-store');
    header('X-Robots-Tag: noindex');
    echo json_encode(['ok' => true, 'configured' => $c !== null && $c['reports_enabled']]);
    exit;
}
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') { wd_respond(405, ['ok' => false, 'error' => 'method']); exit; }

$back = '/report/';
if ($c === null || !$c['reports_enabled']) {
    wd_respond(503, ['ok' => false, 'error' => 'not-configured', 'back' => $back,
        'message' => 'Problem reports are not switched on yet, so nothing was sent or stored.']);
    exit;
}
if (!wd_same_origin($c)) {
    wd_respond(403, ['ok' => false, 'error' => 'forbidden', 'back' => $back, 'message' => 'Reports can only be sent from a Weekly Delight page.']);
    exit;
}

$in = wd_input();
if (wd_looks_automated($in)) {
    wd_log('report: trap');
    wd_respond(422, ['ok' => false, 'error' => 'invalid', 'fields' => ['form'], 'back' => $back,
        'message' => 'The form could not be accepted. Please wait a few seconds and send it again.']);
    exit;
}

$errors = [];
/* A pasted address works as well as the bare name: ".../recipes/pad-thai/" is "pad-thai". */
$given = trim((string) ($in['recipe'] ?? ''));
if (preg_match('#/recipes/([a-z0-9-]+)#', $given, $m)) $given = $m[1];
$recipe = wd_recipe(strtolower($given));
if ($recipe === null) $errors['recipe'] = 'Choose the recipe the report is about.';
$version = (string) ($in['version'] ?? '');
if ($version !== '' && !preg_match('/^[0-9a-f]{6,40}$/', $version)) $version = '';
$type = (string) ($in['type'] ?? '');
if (!in_array($type, WD_TYPES, true)) $errors['type'] = 'Choose what kind of problem it is.';
$description = wd_clean((string) ($in['description'] ?? ''), 3000);
if (wd_len($description) < 10) $errors['description'] = 'Describe the problem in a few words (at least 10 characters).';
$changed = (string) ($in['changed'] ?? '');
if (!in_array($changed, ['', 'yes', 'no'], true)) $changed = '';
$changes = wd_clean((string) ($in['changes'] ?? ''), 1000);
$name = wd_clean((string) ($in['name'] ?? ''), 100);
$email = trim((string) ($in['email'] ?? ''));
$reply = !empty($in['reply']) && $in['reply'] !== 'no';
if ($email !== '' && !wd_valid_email($email)) $errors['email'] = 'That email address does not look complete.';
if ($reply && $email === '') $errors['email'] = 'Add an email address if you would like a reply.';

if ($errors) {
    wd_respond(422, ['ok' => false, 'error' => 'invalid', 'fields' => $errors, 'back' => $back,
        'message' => implode(' ', $errors)]);
    exit;
}

$rate = wd_rate($c, 'report', (int) ($c['report_rate_limit'] ?? 5), (int) ($c['report_daily_limit'] ?? 200));
if ($rate === 'limited') { wd_respond(429, ['ok' => false, 'error' => 'rate-limited', 'back' => $back, 'message' => 'Too many reports from this connection recently. Nothing was stored; please try again later.']); exit; }
if ($rate === 'error') { wd_log('report: rate file'); wd_respond(500, ['ok' => false, 'error' => 'error', 'back' => $back, 'message' => 'Something went wrong on the server, so the report was not stored.']); exit; }

$id = wd_store($c, 'reports', [
    'received' => gmdate('c'),
    'status' => 'new',
    'recipe' => $recipe['slug'],
    'title' => $recipe['title'],
    'url' => 'https://weeklydelight.com/recipes/' . $recipe['slug'] . '/',
    'version' => $version,
    'type' => $type,
    'description' => $description,
    'changed' => $changed,
    'changes' => $changes,
    'name' => $name,
    'email' => $email,
    'reply' => $reply,
    'ip_hash' => wd_ip_hash($c),
    'history' => [],
]);
if ($id === null) {
    wd_log('report: store failed');
    wd_respond(500, ['ok' => false, 'error' => 'error', 'back' => $back, 'message' => 'Something went wrong on the server, so the report was not stored.']);
    exit;
}
wd_log('report: stored ' . strlen($description) . ' chars');
wd_respond(201, ['ok' => true, 'id' => $id, 'back' => '/recipes/' . $recipe['slug'] . '/',
    'message' => 'Thank you. The report is stored and will be read; its reference is ' . $id . '.']);
