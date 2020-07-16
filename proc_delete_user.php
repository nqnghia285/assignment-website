<?php
  // start a session
  session_start();

  $package = array();
  $message = array();
  $table = array();

  $message['success'] = 'False';
  $message['id'] = 'Valid';

  $id = !empty($_POST['id'])?$_POST['id']:null;

  if ($id != null) {
    require 'config_connection.php';
    require 'User.php';

    $dbname = 'app_database';

    // Connection to the database
    $mysqli = connect_db();

    // Select to the database
    $mysqli->select_db($dbname);

    // Execute the SQL query and return records
    // Kiem tra username co ton tan trong csdl hay khong
    $sql = "SELECT * FROM `user` WHERE `id`='$id'";
    if ($result = $mysqli->query($sql)) {
      if ($result->num_rows > 0) {
        //delete a row from table
        $sql = "DELETE FROM `user` WHERE `user`.`id` = '$id'";
        if ($mysqli->query($sql)) {
          $message['success'] = 'True';
          // Execute the SQL query and return records
          $sql = "SELECT * FROM `user`";
          if ($result = $mysqli->query($sql)) {
            if ($result->num_rows > 0) {
              // Fetch the data from the database
              while ($obj = $result->fetch_object()) {
                $table[] = new User($obj->id, $obj->username, $obj->email, $obj->firstName, $obj->lastName, $obj->phone, $obj->address, $obj->gender, $obj->datejoin, $obj->role);
              }
            }
          }
        }
      } else {
        $message['id'] = 'Invalid';
      }
    }

    // Close the connection
    $mysqli->close();
  }

  // Truyen data jsonString den client
  $package['rows'] = $table;
  $package['message'] = $message;
  $jsonString = json_encode($package);
  echo $jsonString;
?>