<?php
$message = $_POST['messageToSend'];
$username = $_POST['user'];
$vendor = $_POST['vendor'];
$to_from = "to";
$mysqli = new mysqli("localhost", "elementm", "Qazplm10!", "elementm_wp5");

/* check connection */
if ($mysqli->connect_errno) {
    printf("Connect failed: %s\n", $mysqli->connect_error);
    exit();
}

/* Create table doesn't return a resultset */

/* Select queries return a resultset */
if ($result = $mysqli->query("INSERT INTO vawe_messages (vendor, client, message, to_from) VALUES ($vendor, $username, $message, $to_from)")) {
    echo "Success";

    /* free result set */
    $result->close();
}

/* If we have to retrieve large amount of data we use MYSQLI_USE_RESULT */

$mysqli->close();
?>