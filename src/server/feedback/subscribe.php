<?php
/**
 * Weekly Delight: newsletter sign-up, passed to the sending service.
 *
 * Only Buttondown is wired, because its API is documented
 * (https://docs.buttondown.com/api-subscribers-create): POST /v1/subscribers with
 * "Authorization: Token <key>". New subscribers there are double opt-in by
 * default: they get a confirmation email and are not subscribed until they
 * confirm. This endpoint never sends "type": "regular", so that step is never
 * skipped. Unsubscribing is handled by the service's own link in every email.
 *
 * With no newsletter settings it answers 503 and stores nothing; the site shows
 * no sign-up form at all until src/data/feedback.js turns it on. The address is
 * not stored on this server.
 */
define('WD_FEEDBACK', 1);
require __DIR__ . '/_lib.php';

$c = wd_config();
$n = is_array($c['newsletter'] ?? null) ? $c['newsletter'] : null;
$ready = $c !== null && $n !== null && ($n['provider'] ?? '') === 'buttondown' && is_string($n['api_key'] ?? null) && strlen($n['api_key']) >= 20;

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') === 'GET') {
    header('Content-Type: application/json; charset=utf-8');
    header('Cache-Control: no-store');
    header('X-Robots-Tag: noindex');
    echo json_encode(['ok' => true, 'configured' => $ready]);
    exit;
}
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') { wd_respond(405, ['ok' => false, 'error' => 'method']); exit; }
if (!$ready) { wd_respond(503, ['ok' => false, 'error' => 'not-configured', 'message' => 'The newsletter is not set up, so your address was not sent anywhere.']); exit; }
if (!wd_same_origin($c)) { wd_respond(403, ['ok' => false, 'error' => 'forbidden', 'message' => 'Sign-ups can only come from a Weekly Delight page.']); exit; }

$in = wd_input();
if (wd_looks_automated($in)) { wd_respond(422, ['ok' => false, 'error' => 'invalid', 'message' => 'The form could not be accepted. Please wait a few seconds and try again.']); exit; }
$email = trim((string) ($in['email'] ?? ''));
if (!wd_valid_email($email)) { wd_respond(422, ['ok' => false, 'error' => 'invalid', 'fields' => ['email' => 'That email address does not look complete.'], 'message' => 'That email address does not look complete.']); exit; }
if (empty($in['consent']) || $in['consent'] === 'no') { wd_respond(422, ['ok' => false, 'error' => 'invalid', 'fields' => ['consent' => 'Tick the box to agree to receive the email.'], 'message' => 'Tick the box to agree to receive the email.']); exit; }

$rate = wd_rate($c, 'subscribe', 3, 300);
if ($rate !== 'ok') { wd_respond($rate === 'limited' ? 429 : 500, ['ok' => false, 'error' => $rate, 'message' => 'Too many sign-ups from this connection recently. Nothing was sent.']); exit; }

$payload = json_encode(['email_address' => $email, 'tags' => array_values(array_filter((array) ($n['tags'] ?? []), 'is_string'))]);
$ch = curl_init('https://api.buttondown.com/v1/subscribers');
curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => $payload,
    CURLOPT_HTTPHEADER => ['Authorization: Token ' . $n['api_key'], 'Content-Type: application/json'],
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT => 15,
]);
$res = curl_exec($ch);
$code = (int) curl_getinfo($ch, CURLINFO_RESPONSE_CODE);
curl_close($ch);

if ($code === 201) {
    wd_respond(201, ['ok' => true, 'message' => 'Check your inbox: the newsletter service has sent a confirmation email, and you are subscribed only once you confirm.']);
} elseif ($code === 400) {
    // Already on the list (or suppressed). Say the same either way, so the form does not reveal who subscribes.
    wd_respond(200, ['ok' => true, 'message' => 'If that address can be subscribed, a confirmation email is on its way.']);
} else {
    wd_log('subscribe: provider answered ' . $code);
    wd_respond(502, ['ok' => false, 'error' => 'provider', 'message' => 'The newsletter service did not accept the sign-up, so you are not subscribed. Please try again later.']);
}
