<?php
$message = $_POST['messageToSend'];
$user = $_POST['user'];
$vendor = $_POST['vendor'];
$to_from = "to";
header("Content-Type: text/html; charset=ISO-8859-1");
$user = "elementm";
$pass = "Qazplm10!";
$dbname = "elementm_wp5";
$query = "INSERT INTO vawe_messages (vendor, client, message, to_from) VALUES ($vendor, $user, $message, $to_from)";
try {
    $dbh = new PDO('mysql:host=localhost;dbname=elementm_wp5', $user, $pass);
	$dbh -> query($query);
	echo "Success";
} catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}
?>