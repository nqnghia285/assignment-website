<?php
  // start a session
  session_start();

  $message = array();
  $message['changePwd'] = 'Failure';
  $message['id'] = 'True';

  $id = !empty($_POST['id'])?$_POST['id']:null;
  $newPwd = !empty($_POST['new-password'])?$_POST['new-password']:null;


  if ($id != null && $newPwd != null) {
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
        // Update
        $sql = "UPDATE `user` SET `password`='$newPwd' WHERE `id`='$id'";
        if ($mysqli->query($sql)) {
          $message['changePwd'] = 'Success';
          $sql = "SELECT * FROM `user` WHERE `id`='$id'";
          if ($result = $mysqli->query($sql)) {
            if ($result->num_rows > 0) {
              $obj = $result->fetch_object();
              $_SESSION['password'] = $obj->password;
              $result->free_result();
            }
          }
        }
      } else {
        $message['id'] = 'False';
      }
    }

    // Close the connection
    $mysqli->close();
  }

  // Truyen data jsonString den client
  $jsonString = json_encode($message);
  echo $jsonString;
?>