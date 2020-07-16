<?php
  // start a session
  session_start();
  
  // check info
  if (isset($_SESSION['username']) && isset($_SESSION['password'])) {
    // transfer to info.php
    header('location: home.php');
  }
?>
<!DOCTYPE html>
<html>
  <head>
    <title>Log in</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css">
    <link rel="stylesheet" href="css/login_signup.css">
  </head>
  <body>
    <div class="hero is-dark">
      <div class="hero-body">
        <h1 class="title has-text-centered is-size-2">Log in</h1>
        <div class="columns is-centered">
          <div class="column is-half">
            <div class="notification is-light">
              <form action="#" method="post">
                <figure class="image container is-64x64">
                  <a href="home.php">
                    <i id="logo" class="fas fa-4x fa-home"></i>
                  </a>
                </figure>
                <div class="field">
                  <label class="label">Username</label>
                  <div class="control has-icons-left has-icons-right">
                    <input id="username" name="username" class="input" autocomplete="username" type="email" placeholder="Username">
                    <span class="icon is-small is-left">
                      <i class="fas fa-user"></i>
                    </span>
                    <span class="icon is-small is-right">
                      <i id="username-icon-check" class="fas fa-check is-hidden"></i>
                      <i id="username-icon-exclamation-triangle" class="fas fa-exclamation-triangle"></i>
                    </span>
                  </div>
                  <p id="help-username" class="help"></p>
                </div>
                <div class="field">
                  <label class="label">Password:</label>
                  <div class="control has-icons-left has-icons-right">
                    <input id="password" name="password" class="input" autocomplete="curent-password" type="password" placeholder="Password">
                    <span class="icon is-small is-left">
                      <i class="fas fa-lock"></i>
                    </span>
                    <span class="icon is-small is-right">
                      <i id="password-icon-check" class="fas fa-check is-hidden"></i>
                      <i id="password-icon-exclamation-triangle" class="fas fa-exclamation-triangle"></i>
                    </span>
                  </div>
                  <p id="help-password" class="help"></p>
                </div>
                <div class="field">
                  <div class="control">
                    <label class="checkbox">
                      <input type="checkbox">
                      Remember me
                    </label>
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <a href="signup.php" id="signup-in-login" name="signup-in-login" class="link-success">
                      Sign up
                    </a>
                  </div>
                </div>
                <div class="field">
                  <p class="control">
                    <a id="login" name="login" class="button is-info is-rounded is-outlined is-medium">
                      Log in
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Script -->
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="script/login/check_login.js"></script>
  </body>
</html>