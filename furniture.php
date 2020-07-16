<?php
  // start a session
  session_start();

  $login = false;

  $id = '';
  $username = '';
  $password = '';
  $email = '';
  $lastName = '';
  $firstName = '';
  $address = '';
  $phone = '';
  $gender = '';
  $datejoin = '';
  $role = '';

  // check info
  if (isset($_SESSION['username'])) {
    // transfer to info.php
    $login = true;

    $id = $_SESSION['id'];
    $username = $_SESSION['username'];
    $password = $_SESSION['password'];
    $email = $_SESSION['email'];
    $lastName = $_SESSION['lastName'];
    $firstName = $_SESSION['firstName'];
    $address = $_SESSION['address'];
    $phone = $_SESSION['phone'];
    $gender = $_SESSION['gender'];
    $datejoin = $_SESSION['datejoin'];
    $role = $_SESSION['role'];
  }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home Page</title>
    <!-- CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.2/css/bulma.min.css">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="css/animo_slide_up.css">
    <link rel="stylesheet" href="css/phone_ringing.css">
    <link rel="stylesheet" href="css/card_view.css">
    <link rel="stylesheet" href="css/container.css">
    <link rel="stylesheet" href="css/animo_swing_horizontal.css">
    <link rel="stylesheet" href="css/icon_search.css">
    <link rel="stylesheet" href="css/villa/villa.css">
    <link rel="stylesheet" href="css/villa/jquery.css">
</head>
<body>
  <!-- info -->
  <input id="id-save" type="text" class="is-hidden" value="<?php echo $id; ?>">
  <input id="username-save" type="text" class="is-hidden" value="<?php echo $username; ?>">
  <input id="password-save" type="text" class="is-hidden" value="<?php echo $password; ?>">
  <input id="email-save" type="text" class="is-hidden" value="<?php echo $email; ?>">
  <input id="lastName-save" type="text" class="is-hidden" value="<?php echo $lastName; ?>">
  <input id="firstName-save" type="text" class="is-hidden" value="<?php echo $firstName; ?>">
  <input id="address-save" type="text" class="is-hidden" value="<?php echo $address; ?>">
  <input id="phone-save" type="text" class="is-hidden" value="<?php echo $phone; ?>">
  <input id="gender-save" type="text" class="is-hidden" value="<?php echo $gender; ?>">
  <input id="datejoin-save" type="text" class="is-hidden" value="<?php echo $datejoin; ?>">
  <input id="role-save" type="text" class="is-hidden" value="<?php echo $role; ?>">
  <!-- Container -->
  <div id="container" class="columns is-mobile is-multiline">
    <!-- Header -->
    <div id="header" class="column is-full">
      <!-- Navbar -->
      <nav id="navbar-id" class="navbar w3-animate-top is-fixed-top is-dark is-active" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <!-- Icon brand -->
          <a class="navbar-item" href="home.php">
            <i id="logo" class="fas fa-2x fa-home"></i>
          </a>
          <!-- Button menu -->
          <a id="navbar-burger-id" role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbar-menu-id">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <!-- navbar menu -->
        <div id="navbar-menu-id" class="navbar-menu is-dark">
          <div class="navbar-start">
            <a class="navbar-item animo-slide-up" href="home.php">
              Home
            </a>
            <!-- Item dropdown -->
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-item animo-slide-up">
                About &nbsp; <i class="fas fa-caret-down"></i>
              </a>
              <!-- List item dropdown -->
              <div class="navbar-dropdown is-dark">
                <a class="navbar-item animo-slide-up" href="company.php">
                  Company
                </a>
                <a class="navbar-item animo-slide-up" href="human_resources.php">
                  Human Resources
                </a>
              </div>
            </div>
            <!-- Item dropdown -->
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-item active-item">
                Architectural Design & Price List &nbsp; <i class="fas fa-caret-down"></i>
              </a>
              <!-- List item dropdown -->
              <div class="navbar-dropdown is-dark">
                <a class="navbar-item animo-slide-up" href="townhouse.php">
                  Townhouse
                </a>
                <a class="navbar-item animo-slide-up" href="villa.php">
                  Villa
                </a>
                <a class="navbar-item active-item" href="furniture.php">
                  Furniture
                </a>
              </div>
            </div>
            <a class="navbar-item animo-slide-up" href="contact.php">
              Contact
            </a>
          </div>
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="navbar-item">
                <div class="field">
                  <p class="control has-icons-right">
                    <input class="input is-rounded" type="text" placeholder="Search">
                    <span class="icon is-small is-right">
                      <i class="fas fa-search"></i>
                    </span>
                  </p>
                </div>
              </div>
              <div class="buttons">
                <a href="signup.php" id="signup" name="signup" class="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a href="login.php" id="login" name="login" class="button is-light">
                  Log in
                </a>
              </div>
            </div>
            <!-- User -->
            <!-- Item dropdown -->
            <div class="navbar-item has-dropdown user is-hoverable <?php if (!$login) { echo 'is-hidden'; } ?>">
              <a class="navbar-item animo-slide-up">
                <i id="avatar" class="fas fa-2x fa-user-circle"></i>&nbsp;
                <span id="username"><?php echo strtoupper($username); ?></span>
              </a>
              <!-- List item dropdown -->
              <div class="navbar-dropdown is-dark">
                <a id="info" class="navbar-item animo-slide-up" href="info.php">
                  Info
                </a>
                <a id="manage" class="navbar-item animo-slide-up <?php if ($role != 1) { echo 'is-hidden'; } ?>" href="manage_user.php">
                  Manage
                </a>
                <a id="change-password" class="navbar-item animo-slide-up">
                  Change password
                </a>
                <a id="logout" class="navbar-item animo-slide-up" href="logout.php">
                  Log out
                </a>
              </div>
            </div>
            <div class="nbsp <?php if (!$login) { echo 'is-hidden'; } ?>">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
          </div>
        </div>
      </nav>
    </div>
    <div class="column is-full">
      <!-- Modal change password -->
      <div id="change-password-modal" class="modal">
        <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Change password</p>
            <button class="delete" aria-label="close"></button>
          </header>
          <section class="modal-card-body">
            <!-- Content ... -->
            <form>
              <div class="field">
                <label class="label is-black">Current password</label>
                <div class="control has-icons-left has-icons-right">
                  <input id="current-password-modal" name="current-password-modal" autocomplete="cur-pwd" class="input" type="password" placeholder="Enter your current password">
                  <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                  </span>
                  <span class="icon is-small is-right">
                    <i id="current-password-modal-icon-check" class="fas fa-check is-hidden"></i>
                    <i id="current-password-modal-icon-exclamation-triangle" class="fas fa-exclamation-triangle"></i>
                  </span>
                </div>
                <p id="help-current-password-modal" class="help"></p>
              </div>
              
              <div class="field">
                <label class="label is-black">New password</label>
                <div class="control has-icons-left has-icons-right">
                  <input id="new-password-modal" name="new-password-modal" autocomplete="new-pwd" class="input" type="password" placeholder="Enter your new password">
                  <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <span class="icon is-small is-right">
                    <i id="new-password-modal-icon-check" class="fas fa-check is-hidden"></i>
                    <i id="new-password-modal-icon-exclamation-triangle" class="fas fa-exclamation-triangle"></i>
                  </span>
                </div>
                <p id="help-new-password-modal" class="help"></p>
              </div>

              <div class="field">
                <label class="label is-black">New password repeat</label>
                <div class="control has-icons-left has-icons-right">
                  <input id="re-new-password-modal" name="re-new-password-modal" autocomplete="new-pwd" class="input" type="password" placeholder="Enter your new password repeat">
                  <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                  </span>
                  <span class="icon is-small is-right">
                    <i id="re-new-password-modal-icon-check" class="fas fa-check is-hidden"></i>
                    <i id="re-new-password-modal-icon-exclamation-triangle" class="fas fa-exclamation-triangle"></i>
                  </span>
                </div>
                <p id="help-re-new-password-modal" class="help"></p>
              </div>
            </form>
          </section>
          <footer class="modal-card-foot">
            <button id="change-modal" class="button is-success">Send</button>
          </footer>
        </div>
      </div>
    </div>
    <div class="column is-full">
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <div class="columns is-gapless is-multiline is-mobile">
              <div class="column is-full-mobile is-half-tablet is-half-desktop is-half-widescreen is-half-fullhd">
                <h1 class="title animoSwingHorizontal">
                  Furniture
                </h1>
                <img src="image/noi-that.jpg" width="500" alt="Photo">
                <br>
                <span><b>Photo 1:</b><i> Beautiful furniture</i></span>
                <br><br>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque 
                  consequatur eum deserunt illo a nam sunt est reiciendis expedita 
                  labore praesentium soluta, in culpa aliquam molestias corporis, 
                  dolorum vel architecto.</p>
                <br>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque 
                  consequatur eum deserunt illo a nam sunt est reiciendis expedita 
                  labore praesentium soluta, in culpa aliquam molestias corporis, 
                  dolorum vel architecto.</p>
                <br>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque 
                  consequatur eum deserunt illo a nam sunt est reiciendis expedita 
                  labore praesentium soluta, in culpa aliquam molestias corporis, 
                  dolorum vel architecto.</p>
              </div>
              <div class="column is-full-mobile is-half-tablet is-half-desktop is-half-widescreen is-half-fullhd">
                <h4>Price list of furniture designs</h4>
                <table class="table is-bordered is-striped is-narrow is-hoverable">
                  <thead>
                    <tr>
                      <th>Group</th>
                      <th>Type</th>
                      <th>Area</th>
                      <th>Price</th>
                      <th>Note</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td rowspan="3">1</td>
                      <td rowspan="3">Furniture</td>
                      <td>200-300(m<span style="vertical-align: super;">2</span>)</td>
                      <td>&#36;7/m<span style="vertical-align: super;">2</span></td>
                      <td rowspan="3">No 3D furniture yet</td>
                      <td rowspan="3">Lorem ipsum dolor sit amet, consectetur 
                        adipisicing elit. Quasi molestias obcaecati cumque sequi 
                        assumenda distinctio rem praesentium.</td>
                    </tr>
                    <tr>
                      <td>301-400(m<span style="vertical-align: super;">2</span>)</td>
                      <td>&#36;6.49/m<span style="vertical-align: super;">2</span></td>
                    </tr>
                    <tr>
                      <td>401-1000(m<span style="vertical-align: super;">2</span>)</td>
                      <td>&#36;5.69/m<span style="vertical-align: super;">2</span></td>
                    </tr>
                    <tr>
                      <td rowspan="3">2</td>
                      <td rowspan="3">Furniture</td>
                      <td>200-300(m<span style="vertical-align: super;">2</span>)</td>
                      <td>&#36;8.49/m<span style="vertical-align: super;">2</span></td>
                      <td rowspan="3">Had 3D furniture</td>
                      <td rowspan="3">Lorem ipsum dolor sit amet, consectetur 
                        adipisicing elit. Quasi molestias obcaecati cumque sequi 
                        assumenda distinctio rem praesentium.</td>
                    </tr>
                    <tr>
                      <td>301-400(m<span style="vertical-align: super;">2</span>)</td>
                      <td>&#36;7.49/m<span style="vertical-align: super;">2</span></td>
                    </tr>
                    <tr>
                      <td>401-1000(m<span style="vertical-align: super;">2</span>)</td>
                      <td>&#36;6.59/m<span style="vertical-align: super;">2</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="column is-full">
      <div class="container">
        <i id="arrowup" class="far fa-arrow-alt-circle-up fa-3x arrowup"></i>
      </div>
      <div id="wrapper" class="hotline-phone-ring-wrap">
        <div class="hotline-phone-ring">
          <div class="hotline-phone-ring-circle"></div>
          <div class="hotline-phone-ring-circle-fill"></div>
          <div class="hotline-phone-ring-img-circle">
            <a href="#" class="pps-btn-img">
              <i class="fas fa-phone-alt phone-icon"></i>
            </a>
          </div>
          <div class="hotline-bar">
            <a href="#">
              <span class="text-hotline">0123.456.789</span>
            </a>
          </div>
      </div>
    </div>
    <div id="footer" class="column is-full background-footer">
      <div class="columns is-desktop is-multiline background-footer">
        <div class="column is-half-desktop is-full-tablet is-full-mobile">
          <div id="tabs" class="tabs is-toggle">
            <ul>
              <li id="address" class="is-active">
                <a class="tab-content">
                  <span class="icon is-small"><i class="fas fa-map-marker-alt" aria-hidden="true"></i></span>
                  <span>Address</span>
                </a>
              </li>
              <li id="map" class="">
                <a class="tab-content">
                  <span class="icon is-small"><i class="fas fa-map-marked-alt" aria-hidden="true"></i></span>
                  <span>Map</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="container footer-wrapper">
            <div id="my-address" class="container w3-animate-top">
              <div class="notification">
                <span><i class="fas fa-map-marker-alt"></i>&nbsp;&nbsp;<b>Address:</b>&nbsp;<a href="#"><i>123/4/5 Thu Duc, Tp.HCM.</i></a></span>
                <br>
                <span><i class="fas fa-phone-alt"></i>&nbsp;<b>Tel:</b>&nbsp;<a href="#"><i>0123456789</i></a></span>
                <br>
                <span><i class="far fa-envelope"></i>&nbsp;<b>Email:</b>&nbsp;<a href="#"><i>company.gmail.com</i></a></span>
                <br>
                <span><i class="fab fa-facebook-f"></i>&nbsp;&nbsp;<b>Facebook:</b>&nbsp;<a href="#"><i>https://www.facebook.com/company</i></a></span>
                <br>
                <span><i class="fab fa-twitter"></i>&nbsp;<b>Twitter:</b>&nbsp;<a href="#"><i>https://twitter.com/company</i></a></span>
              </div>
            </div>
            <div id="my-map" class="w3-container w3-center w3-animate-zoom is-hidden" style="width:100%;height:400px;"></div>
          </div>
        </div>
        <div class="column is-half-desktop is-full-tablet is-full-mobile">
          <div id="contact" class="content">
            <h1>Contact</h1>
          </div>
          <div class="field">
            <label class="label">Name</label>
            <div class="control has-icons-left has-icons-right">
              <input id="name" name="name" class="input" type="text" placeholder="Your name">
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
              <span class="icon is-small is-right">
                <i id="name-icon-check" class="fas fa-check is-hidden"></i>
                <i id="name-icon-exclamation-triangle" class="fas fa-exclamation-triangle"></i>
              </span>
            </div>
            <p id="help-name" class="help"></p>
          </div>
          
          <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left has-icons-right">
              <input id="email" name="email" class="input" type="email" placeholder="Enter email">
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="icon is-small is-right">
                <i id="email-icon-check" class="fas fa-check is-hidden"></i>
                <i id="email-icon-exclamation-triangle" class="fas fa-exclamation-triangle"></i>
              </span>
            </div>
            <p id="help-email" class="help"></p>
          </div>

          <div class="field">
            <label class="label">Phone number</label>
            <div class="control has-icons-left has-icons-right">
              <input id="phone" name="phone" class="input" type="text" placeholder="Enter your phone number">
              <span class="icon is-small is-left">
                <i class="fas fa-phone-square-alt"></i>
              </span>
              <span class="icon is-small is-right">
                <i id="phone-icon-check" class="fas fa-check is-hidden"></i>
                <i id="phone-icon-exclamation-triangle" class="fas fa-exclamation-triangle"></i>
              </span>
            </div>
            <p id="help-phone" class="help"></p>
          </div>
          
          <div class="field">
            <label class="label">Request</label>
            <div class="control">
              <textarea class="textarea" placeholder="Textarea"></textarea>
            </div>
          </div>
          
          <div class="field">
            <div class="control">
              <label class="checkbox" style="color: white;">
                <input type="checkbox">
                I agree to the <a href="#">terms and conditions</a>. We can send beautiful home designs to you in the future.
              </label>
            </div>
          </div>
          <div class="control">
            <input id="send" type="button" class="button is-link" value="Send">
          </div>         
        </div>
      </div>
    </div>
  </div>
  <!-- Script -->
  <script src="https://use.fontawesome.com/releases/v5.13.0/js/all.js" data-auto-replace-svg="nest"></script>
  <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
  <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCeqJCIDq6dD8ymk1DH_z33SX_GnMXVYyc&callback=initMap">
  </script>
  <script src="script/toggle_navbar_burger.js"></script>
  <script src="script/scroll_top.js"></script>
  <script src="script/hidden_navbar.js"></script>
  <script src="script/modal.js"></script>
  <script src="script/tabsbar.js"></script>
  <script src="script/load_map.js"></script>
  <script src="script/check_text.js"></script>
  <script src="script/md5.js"></script>
  <script src="script/change_password.js"></script>
</body>
</html>