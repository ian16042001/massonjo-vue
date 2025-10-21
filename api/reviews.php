<?php
// /www/api/reviews.php  — Email submission only, no auto publish
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['error' => 'Method not allowed']);
  exit;
}

// Read JSON
$input = json_decode(file_get_contents('php://input'), true);
if (!is_array($input)) {
  http_response_code(400);
  echo json_encode(['error' => 'Invalid JSON']);
  exit;
}

// Basic honeypot (optional but useful)
$honeypot = trim((string)($input['website'] ?? ''));
if ($honeypot !== '') {
  // Bot: pretend success
  echo json_encode(['ok' => true]);
  exit;
}

// Fields
$name    = trim(mb_substr((string)($input['name'] ?? 'Client'), 0, 80));
$email   = trim((string)($input['email'] ?? ''));
$message = trim(strip_tags((string)($input['message'] ?? '')));
$rating  = (int)round((float)($input['rating'] ?? 5));
$rating  = max(1, min(5, $rating));

if ($message === '') {
  http_response_code(400);
  echo json_encode(['error' => 'Message manquant']);
  exit;
}

// Compose mail
$to = 'ian.ngoune@gmail.com'; // <- where you want to receive reviews
$subject = 'NOUVEL AVIS (site) — ' . $rating . '/5 — ' . ($name !== '' ? $name : 'Client');
$ip = $_SERVER['REMOTE_ADDR'] ?? '';
$ua = $_SERVER['HTTP_USER_AGENT'] ?? '';
$when = gmdate('Y-m-d H:i:s') . ' UTC';

$body = "Nouvelle soumission d'avis depuis le site :\n\n".
        "Nom      : " . ($name !== '' ? $name : 'Client') . "\n" .
        "Email    : " . ($email !== '' ? $email : '—') . "\n" .
        "Note     : " . $rating . "/5\n" .
        "Message  :\n" . $message . "\n\n" .
        "Infos techniques :\n" .
        "IP       : " . $ip . "\n" .
        "Agent    : " . $ua . "\n" .
        "Horodatage : " . $when . "\n";

// Headers (use a domain mailbox to improve deliverability)
$from = 'ian.ngoune@yahoo.com'; // create this mailbox at OVH or use an existing one
$headers  = "From: Massonjo Chauffage Sanitaire <{$from}>\r\n";
if ($email !== '') {
  // so you can reply directly to the customer if needed
  $headers .= "Reply-To: {$name} <{$email}>\r\n";
}
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Send
$sent = @mail($to, '=?UTF-8?B?'.base64_encode($subject).'?=', $body, $headers, "-f {$from}");
if (!$sent) {
  http_response_code(500);
  echo json_encode(['error' => 'Envoi email impossible (mail)']);
  exit;
}

// Success (do NOT publish)
echo json_encode(['ok' => true, 'status' => 'queued_for_moderation']);
