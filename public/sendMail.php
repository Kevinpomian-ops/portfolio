<?php

header('Content-Type: application/json; charset=utf-8');

function respond(int $status, array $payload): never
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_INVALID_UTF8_SUBSTITUTE);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');
    respond(405, ['success' => false, 'error' => 'Method not allowed']);
}

$json = file_get_contents('php://input');
$params = json_decode($json);

if (json_last_error() !== JSON_ERROR_NONE || !is_object($params)) {
    respond(400, ['success' => false, 'error' => 'Invalid JSON']);
}

$email = $params->email ?? null;
$name = $params->name ?? null;
$message = $params->message ?? null;

if (!is_string($email) || !is_string($name) || !is_string($message)) {
    respond(400, ['success' => false, 'error' => 'Invalid input data']);
}

$email = trim($email);
$name = trim($name);
$message = trim($message);

if (
    !filter_var($email, FILTER_VALIDATE_EMAIL)
    || $name === ''
    || $message === ''
    || strlen($name) > 200
    || strlen($email) > 254
    || strlen($message) > 10000
) {
    respond(400, ['success' => false, 'error' => 'Invalid input data']);
}

$siteEmail = 'kevinpomian@icloud.com';
$safeName = htmlspecialchars($name, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
$safeEmail = htmlspecialchars($email, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
$safeMessage = nl2br(htmlspecialchars($message, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8'));
$mailBody = "
    <strong>Name:</strong> {$safeName}<br>
    <strong>Email:</strong> {$safeEmail}<br><br>
    <strong>Message:</strong><br>
    {$safeMessage}
";

$headers = [
    'MIME-Version: 1.0',
    'Content-type: text/html; charset=utf-8',
    'From: Website Kontakt <' . $siteEmail . '>',
    'Reply-To: ' . $email,
];

if (!mail($siteEmail, 'Website Contact Form', $mailBody, implode("\r\n", $headers))) {
    error_log('Contact form email could not be sent.');
    respond(500, ['success' => false, 'error' => 'Mail delivery failed']);
}

respond(200, ['success' => true]);
