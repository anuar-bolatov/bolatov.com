<?php
$header = "From: bolatov.com <anuar@bolatov.com>";
$header .= "Reply-To: anuar@bolatov.com";
$header .= "MIME-Version: 1.0\r\n";
  $body = 'Name: ' .$_POST['name'] ."\n"
        .'Email: ' .$_POST['email'] ."\n"
        .'Phone: ' .$_POST['phone'] ."\n"
        .'Message: ' .$_POST['message'];

$message .= $body;
  
    $mail=mail('anuar@bolatov.com', 'New Form submission', $message, $header);
    if($mail)header('location: thanks.html');
  
?>