<?php
  // start a session
  session_start();

  // remove all session variables
  session_unset();

  // destroy the session
  session_destroy();

  // transfer to login.php
  header("location: home.php");
?>