<?php
  // start a session
  session_start();

  $message = array();
  $message['edit'] = 'Failure';
  $message['username'] = 'True';
  $message['email'] = 'True';

  $id = !empty($_POST['id'])?$_POST['id']:null;
  $username = !empty($_POST['username'])?$_POST['username']:null;
  $email = !empty($_POST['email'])?$_POST['email']:null;
  $firstName = !empty($_POST['firstName'])?$_POST['firstName']:null;
  $lastName = !empty($_POST['lastName'])?$_POST['lastName']:null;
  $phone = !empty($_POST['phone'])?$_POST['phone']:null;
  $address = !empty($_POST['address'])?$_POST['address']:null;
  $gender = !empty($_POST['gender'])?$_POST['gender']:null;


  if ($id != null && $username != null && $email != null) {
    $servername = 'localhost';
    $user = 'root';
    $pwd = '';
    $db = 'app_database';

    // Connection to the database
    $mysqli = new mysqli($servername, $user, $pwd, $db);

    // Execute the SQL query and return records
    // Kiem tra username co ton tan trong csdl hay khong
    $sql = "SELECT * FROM `user` WHERE `id`='$id'";
    if ($result = $mysqli->query($sql)) {
      if ($result->num_rows > 0) {
        // Kiem tra username co ton tan trong csdl hay khong
        $sql = "SELECT `username` FROM `user` WHERE `username`='$username' AND `id`<>'$id'";
        if ($result = $mysqli->query($sql)) {
          if ($result->num_rows > 0) {
            $message['username'] = 'False';
            $result->free_result();
          } else {
            // Kiem tra email co ton tan trong csdl hay khong
            $sql = "SELECT `email` FROM `user` WHERE `email`='$email' AND `id`<>'$id'";
            if ($result = $mysqli->query($sql)) {
              if ($result->num_rows > 0) {
                $message['email'] = 'False';
                $result->free_result();
              } else {
                // Update
                $sql = "UPDATE `user` SET `username`='$username',`email`='$email',`lastName`='$lastName',`firstName`='$firstName',`address`='$address',`phone`='$phone',`gender`='$gender' WHERE `id`='$id'";
                if ($mysqli->query($sql)) {
                  $message['edit'] = 'Success';
                  $sql = "SELECT * FROM `user` WHERE `id`='$id'";
                  if ($result = $mysqli->query($sql)) {
                    if ($result->num_rows > 0) {
                      $obj = $result->fetch_object();
                      $_SESSION['id'] = $obj->id;
                      $_SESSION['username'] = $obj->username;
                      $_SESSION['password'] = $obj->password;
                      $_SESSION['email'] = $obj->email;
                      $_SESSION['lastName'] = $obj->lastName;
                      $_SESSION['firstName'] = $obj->firstName;
                      $_SESSION['address'] = $obj->address;
                      $_SESSION['phone'] = $obj->phone;
                      $_SESSION['gender'] = $obj->gender;
                      $_SESSION['datejoin'] = $obj->datejoin;
                      $_SESSION['role'] = $obj->role;
                      $result->free_result();
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    // Close the connection
    $mysqli->close();
  }

  // Truyen data jsonString den client
  $jsonString = json_encode($message);
  echo $jsonString;
?>