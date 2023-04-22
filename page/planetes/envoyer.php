<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
	$destinataire = "martiniclement07@gmail.com";
	$sujet = "Nouveau message depuis le formulaire de contact";
	$message = "Nom: " . $_POST['nom'] . "\n\n";
	$message .= "Email: " . $_POST['email'] . "\n\n";
	$message .= "Message:\n" . $_POST['message'];
	mail($destinataire, $sujet, $message);
}
?>
