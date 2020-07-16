<?php
  function connect_db() {
    $servername = 'localhost';
    $username = 'root';
    $password = '';

    // Connection to the database
    $mysqli = new mysqli($servername, $username, $password);

    // Check connection
    if ($mysqli->connect_errno) {
      $message['connect-to-MySQL'] = "Failure: " . $mysqli -> connect_error;
      exit();
    }

    return $mysqli;
  }
?>