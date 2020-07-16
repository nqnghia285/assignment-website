<?php
  // start a session
  session_start();

  $package = array();
  $message = array();
  $table = array();

  $message['success'] = 'False';
  $message['id'] = 'Valid';
  $message['username'] = 'Valid';
  $message['email'] = 'Valid';

  $id         = !empty($_POST['id'])?$_POST['id']:null;
  $username   = !empty($_POST['username'])?$_POST['username']:null;
  $email      = !empty($_POST['email'])?$_POST['email']:null;
  $firstName  = !empty($_POST['firstName'])?$_POST['firstName']:null;
  $lastName   = !empty($_POST['lastName'])?$_POST['lastName']:null;
  $phone      = !empty($_POST['phone'])?$_POST['phone']:null;
  $address    = !empty($_POST['address'])?$_POST['address']:null;
  $gender     = !empty($_POST['gender'])?$_POST['gender']:null;
  $role       = !empty($_POST['role'])?$_POST['role']:null;


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
        // Kiem tra username co ton tan trong csdl hay khong
        $sql = "SELECT `username` FROM `user` WHERE `username`='$username' AND `id`<>'$id'";
        if ($result = $mysqli->query($sql)) {
          if ($result->num_rows > 0) {
            $message['username'] = 'Invalid';
            $result->free_result();
          } else {
            // Kiem tra email co ton tan trong csdl hay khong
            $sql = "SELECT `email` FROM `user` WHERE `email`='$email' AND `id`<>'$id'";
            if ($result = $mysqli->query($sql)) {
              if ($result->num_rows > 0) {
                $message['email'] = 'Invalid';
                $result->free_result();
              } else {
                // Update
                $sql = "UPDATE `user` SET `username`='$username',`email`='$email',`lastName`='$lastName',`firstName`='$firstName',`address`='$address',`phone`='$phone',`gender`='$gender',`role`='$role' WHERE `id`='$id'";
                if ($mysqli->query($sql)) {
                  $message['success'] = 'True';
                  $sql = "SELECT * FROM `user`";
                  if ($result = $mysqli->query($sql)) {
                    if ($result->num_rows > 0) {
                      // Fetch the data from the database
                      while ($obj = $result->fetch_object()) {
                        $table[] = new User($obj->id, $obj->username, $obj->email, $obj->firstName, $obj->lastName, $obj->phone, $obj->address, $obj->gender, $obj->datejoin, $obj->role);
                      }
                    }
                    $result->free_result();
                  }
                }
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