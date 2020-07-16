$(document).ready(function () {
  // Check login/signup
  $('#username').blur(function () {
    checkLogin('username');
  });

  $('#password').blur(function () {
    checkLogin('password');
  });

  $('#login').click(function () {
    if (checkLogin('all')) {
      var username = $('#username').val();
      var pwd = $('#password').val();

      var url = "proc_login.php";
      var package = { 'username': username,
                      'password': pwd };
      $.post(url, package, function(data, status, jqXHR) {
        console.log(package);
        console.log(data);
        var message = $.parseJSON(data);
        console.log(message.login);
        console.log(message.username);
        if (message.login == 'Success') {
          window.location = 'home.php';
        } else {
          var ms = 'Log in is failed\n';
          if (message.username == 'False') {
            ms += 'Username is not exist in database\n';
          }
          alert(ms);
        }
      });
    }
  });

  $('#signup-in-login').click(function () {
    // TODO
  });
});

// Check text
function checkValue(id, regex) {
  var value = $('#' + id).val();
  if (regex.test(value)) {
    $('#' + id).addClass('is-success');
    $('#' + id).removeClass('is-danger');
      return true;
  } else {
    $('#' + id).addClass("is-danger");
    $('#' + id).removeClass("is-success");
    return false;
  }
}

function checkLogin(id) {
  var regText = /^[\w\.@]{5,30}$/; // regex kiem tra text
  var regPwd = /^[\w\.@]{6,16}$/; // regex kiem tra text

  if (id =="username") {
    return checkUsername(id, regText);
  } else if (id == "password") {
    return checkPassword(id, regPwd);
  } else if (id == "all") {
    console.log("ALL");
    var flag = checkUsername("username", regText) &
               checkPassword("password", regPwd);
    return flag;
  }
  return false;
}

function checkUsername(id, regText) {
  if(checkValue(id, regText)) {
    console.log('Check username: TRUE');
    $('#username-icon-check').removeClass("is-hidden");
    $('#username-icon-exclamation-triangle').addClass("is-hidden");
    $('#help-username').addClass("is-success");
    $('#help-username').removeClass("is-danger");
    $('#help-username').html("This your username is valid.");
    return true;
  } else {
    console.log('Check username: FALSE');
    $('#username-icon-check').addClass("is-hidden");
    $('#username-icon-exclamation-triangle').removeClass("is-hidden");
    $('#help-username').addClass("is-danger");
    $('#help-username').removeClass("is-success");
    $('#help-username').html("This your username is invalid.");
    return false;
  }
}

function checkPassword(id, regPwd) {
  if(checkValue(id, regPwd)) {
    console.log('Check password: TRUE');
    $('#password-icon-check').removeClass("is-hidden");
    $('#password-icon-exclamation-triangle').addClass("is-hidden");
    $('#help-password').addClass("is-success");
    $('#help-password').removeClass("is-danger");
    $('#help-password').html("This your password is valid.");
    return true;
  } else {
    console.log('Check password: FALSE');
    $('#password-icon-check').addClass("is-hidden");
    $('#password-icon-exclamation-triangle').removeClass("is-hidden");
    $('#help-password').addClass("is-danger");
    $('#help-password').removeClass("is-success");
    $('#help-password').html("This your password is invalid.");
    return false;
  }
}