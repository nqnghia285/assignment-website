<?php
  // start a session
  session_start();

  $package = array();
  $message = array();
  $table = array();

  $message['success'] = 'True';

  require 'config_connection.php';
  require 'User.php';

  $dbname = 'app_database';

  // Connection to the database
  $mysqli = connect_db();

  // Select to the database
  $mysqli->select_db($dbname);

  // Execute the SQL query and return records
  $sql = "SELECT * FROM `user` WHERE 1";
  if ($result = $mysqli->query($sql)) {
    if ($result->num_rows > 0) {
      $message['success'] = 'True';
      // Fetch the data from the database
      while ($obj = $result->fetch_object()) {
        $table[] = new User($obj->id, $obj->username, $obj->email, $obj->firstName, $obj->lastName, $obj->phone, $obj->address, $obj->gender, $obj->datejoin, $obj->role);
      }
    }
  }

  // Close the connection
  $mysqli->close();

  // Truyen data jsonString den client
  $package['rows'] = $table;
  $package['message'] = $message;
  $jsonString = json_encode($package);
  echo $jsonString;
?>