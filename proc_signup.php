<?php
  // start a session
  session_start();

  $message = array();
  $message['signup'] = 'Failure';
  $message['username'] = 'True';
  $message['email'] = 'True';

  $username = !empty($_POST['username'])?$_POST['username']:null;
  $email = !empty($_POST['email'])?$_POST['email']:null;
  $pwd = !empty($_POST['password'])?$_POST['password']:null;

  if ($username != null && 
      $email != null && 
      $pwd != null) {
    $servername = 'localhost';
    $user = 'root';
    $password = '';
    $db = 'app_database';

    // Connection to the database
    $mysqli = new mysqli($servername, $user, $password, $db);

    // Execute the SQL query and return records
    // Kiem tra username co ton tan trong csdl hay khong
    $sql = "SELECT `username` FROM `user` WHERE `username`='$username'";
    if ($result = $mysqli->query($sql)) {
      if ($result->num_rows > 0) {
        $message['username'] = 'False';
        $result->free_result();
      } else {
        // Kiem tra email co ton tan trong csdl hay khong
        $sql = "SELECT `email` FROM `user` WHERE `email`='$email'";
        if ($result = $mysqli->query($sql)) {
          if ($result->num_rows > 0) {
            $message['email'] = 'False';
            $result->free_result();
          } else {
            // Insert a row into table
            $datejoin = date('Y-m-d H:i:s');
            $sql = "INSERT INTO `user`(`id`, `username`, `password`, `email`, `lastName`, `firstName`, `address`, `phone`, `gender`, `datejoin`, `role`) VALUES ('','$username','$pwd','$email','','','','','1','$datejoin','0')";
            if ($mysqli->query($sql)) {
              $message['signup'] = 'Success';
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