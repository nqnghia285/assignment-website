<?php
  // start a session
  session_start();

  $message = array();
  $message['username'] = 'True';
  $message['login'] = 'Failure';

  $username = !empty($_POST['username'])?$_POST['username']:null;
  $pwd = !empty($_POST['password'])?md5($_POST['password']):null;

  if ($username != null && $pwd != null) {
    $servername = 'localhost';
    $user = 'root';
    $password = '';
    $db = 'app_database';

    // Connection to the database
    $mysqli = new mysqli($servername, $user, $password, $db);

    // Execute the SQL query and return records
    // Kiem tra username co ton tan trong csdl hay khong
    $sql = "SELECT * FROM `user` WHERE `username`='$username'";
    if ($result = $mysqli->query($sql)) {
      if ($result->num_rows > 0) {
        $obj = $result->fetch_object();
        if ($username == $obj->username && $pwd == $obj->password) {
          $message['login'] = 'Success';
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
        }
        $result->free_result();
      } else {
        $message['username'] = 'False';
      }
    }

    // Close the connection
    $mysqli->close();
  }

  // Truyen data jsonString den client
  $jsonString = json_encode($message);
  echo $jsonString;
?>