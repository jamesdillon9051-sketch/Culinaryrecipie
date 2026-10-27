<?php
/**
 * Weekly Delight: a reader's public review, held for moderation.
 *
 * Off unless the settings say reviews_enabled => true, and the recipe page shows
 * no review form unless src/data/feedback.js says so too. A review is stored as
 * "pending"; nothing reaches a page until a moderator approves it in
 * moderate.php, exports the approved set and it is committed to
 * src/data/reviews.json and built. Ratings are optional and real: never filled
 * in from a reader's private notes.
 */
define('WD_FEEDBACK', 1);
require __DIR__ . '/_lib.php';

$c = wd_config();
if (($_SERVER['REQUEST_METHOD'] ?? 'GET') === 'GET') {
    header('Content-Type: application/json; charset=utf-8');
    header('Cache-Control: no-store');
    header('X-Robots-Tag: noindex');
    echo json_encode(['ok' => true, 'configured' => $c !== null && $c['reviews_enabled']]);
    exit;
}
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') { wd_respond(405, ['ok' => false, 'error' => 'method']); exit; }

if ($c === null || !$c['reviews_enabled']) {
    wd_respond(503, ['ok' => false, 'error' => 'not-configured', 'message' => 'Public reviews are not switched on, so nothing was sent or stored.']);
    exit;
}
if (!wd_same_origin($c)) { wd_respond(403, ['ok' => false, 'error' => 'forbidden', 'message' => 'Reviews can only be sent from a Weekly Delight page.']); exit; }

$in = wd_input();
if (wd_looks_automated($in)) { wd_respond(422, ['ok' => false, 'error' => 'invalid', 'fields' => ['form'], 'message' => 'The form could not be accepted. Please wait a few seconds and send it again.']); exit; }

$errors = [];
$recipe = wd_recipe((string) ($in['recipe'] ?? ''));
if ($recipe === null) $errors['recipe'] = 'The recipe could not be found.';
$name = wd_clean((string) ($in['name'] ?? ''), 40);
if (wd_len($name) < 2) $errors['name'] = 'Add the name to show with your review (2 to 40 characters).';
if (preg_match('#https?://|www\.#i', $name)) $errors['name'] = 'Names cannot contain web addresses.';
$body = wd_clean((string) ($in['body'] ?? ''), 2000);
if (wd_len($body) < 20) $errors['body'] = 'Write at least 20 characters.';
if (preg_match_all('#https?://#i', $body) > 1) $errors['body'] = 'Reviews can contain at most one web address.';
$rating = $in['rating'] ?? '';
$rating = ($rating === '' || $rating === null) ? null : (int) $rating;
if ($rating !== null && ($rating < 1 || $rating > 5)) $errors['rating'] = 'A rating is 1 to 5 stars, or none.';
if (empty($in['consent']) || $in['consent'] === 'no') $errors['consent'] = 'Tick the box to agree that the review may be published.';

if ($errors) { wd_respond(422, ['ok' => false, 'error' => 'invalid', 'fields' => $errors, 'message' => implode(' ', $errors)]); exit; }

$rate = wd_rate($c, 'review', (int) ($c['review_rate_limit'] ?? 3), (int) ($c['review_daily_limit'] ?? 100));
if ($rate !== 'ok') { wd_respond($rate === 'limited' ? 429 : 500, ['ok' => false, 'error' => $rate === 'limited' ? 'rate-limited' : 'error', 'message' => $rate === 'limited' ? 'Too many reviews from this connection recently. Nothing was stored.' : 'Something went wrong on the server, so the review was not stored.']); exit; }

$id = wd_store($c, 'reviews', [
    'received' => gmdate('c'),
    'status' => 'pending',
    'recipe' => $recipe['slug'],
    'title' => $recipe['title'],
    'name' => $name,
    'body' => $body,
    'rating' => $rating,
    'ip_hash' => wd_ip_hash($c),
    'moderated' => null,
    'moderator_note' => '',
]);
if ($id === null) { wd_log('review: store failed'); wd_respond(500, ['ok' => false, 'error' => 'error', 'message' => 'Something went wrong on the server, so the review was not stored.']); exit; }
wd_respond(201, ['ok' => true, 'id' => $id, 'back' => '/recipes/' . $recipe['slug'] . '/',
    'message' => 'Thank you. Your review is stored and waiting for moderation; it appears on the page only if it is approved.']);
