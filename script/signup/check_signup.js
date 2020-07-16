$(document).ready(function () {
  // Check login/signup
  $('#username').blur(function () {
    checkSignup('username');
  });

  $('#email').blur(function () {
    checkSignup('email');
  });

  $('#password').blur(function () {
    console.log('blur password');
    checkSignup('password');
  });

  $('#re-password').blur(function () {
    console.log('blur re-password');
    checkSignup('re-password');
  });

  $('#login-in-signup').click(function () {
    // TODO
  });

  $('#signup').click(function () {
    if (checkSignup('all')) {
      var username = $('#username').val();
      var email = $('#email').val();
      var pwd = md5($('#password').val());

      var url = "proc_signup.php";
      var package = { 'username': username,
                      'email': email,
                      'password': pwd };
      $.post(url, package, function(data, status, jqXHR) {
        console.log(package);
        console.log(data);
        var message = $.parseJSON(data);
        console.log(message.signup);
        console.log(message.username);
        console.log(message.email);
        if (message.signup == 'Success') {
          alert('Sign up is successful');
        } else {
          var ms = 'Sign up is failed\n';
          if (message.username == 'False') {
            ms += 'Username is exist in database\n';
          }
          if (message.email == 'False') {
            ms += 'Email is exist in database\n';
          }
          alert(ms);
        }
      });
    }
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

function checkSignup(id) {
  var regText = /^[\w\.@]{5,30}$/; // regex kiem tra text
  var regPwd = /^[\w\.@]{6,16}$/; // regex kiem tra text
  var regEmail = /^[\w\.]+\@\w+\.\w+$/i; // regex kiem tra email
  console.log('checkSignup: ' + id);
  if (id.includes("username")) {
    return checkUsername(id, regText);
  } else if (id == "email") {
    return checkEmail(id, regEmail);
  } else if (id  == "password") {
    return checkPassword(id, regPwd);
  } else if (id == "re-password") {
    return checkRePassword(id, regPwd);
  } else if (id == "all") {
    console.log("ALL");
    var flag = checkUsername("username", regText) &
               checkEmail("email", regEmail) &
               checkPassword("password", regPwd) &
               checkRePassword("re-password", regPwd);
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

function checkEmail(id, regEmail) {
  if(checkValue(id, regEmail)) {
    console.log('Check email: TRUE');
    $('#email-icon-check').removeClass("is-hidden");
    $('#email-icon-exclamation-triangle').addClass("is-hidden");
    $('#help-email').addClass("is-success");
    $('#help-email').removeClass("is-danger");
    $('#help-email').html("This your email is valid.");
    return true;
  } else {
    console.log('Check email: FALSE');
    $('#email-icon-check').addClass("is-hidden");
    $('#email-icon-exclamation-triangle').removeClass("is-hidden");
    $('#help-email').addClass("is-danger");
    $('#help-email').removeClass("is-success");
    $('#help-email').html("This your email is invalid.");
    return false;
  }
}

function checkPassword(id, regPwd) {
  console.log(id);
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

function checkRePassword(id, regPwd) {
  console.log(id);
  console.log('password: ' + $('#password').val());
  console.log(id + ': ' + $('#' + id).val());
  if(checkValue(id, regPwd)) {
    var pwd = $('#' + id).val();
    var repwd = $('#password').val();
    if (pwd == repwd) {
      console.log('Check re-password: TRUE');
      $('#re-password-icon-check').removeClass("is-hidden");
      $('#re-password-icon-exclamation-triangle').addClass("is-hidden");
      $('#help-re-password').addClass("is-success");
      $('#help-re-password').removeClass("is-danger");
      $('#help-re-password').html("This your re-password is valid.");
      return true;
    } else {
      console.log('Check re-password: FALSE');
      $('#re-password-icon-check').addClass("is-hidden");
      $('#re-password-icon-exclamation-triangle').removeClass("is-hidden");
      $('#help-re-password').addClass("is-danger");
      $('#help-re-password').removeClass("is-success");
      $('#help-re-password').html("This your re-password is invalid.");
      return false;
    }
  } else {
    console.log('Check repassword: FALSE');
    $('#re-password-icon-check').addClass("is-hidden");
    $('#re-password-icon-exclamation-triangle').removeClass("is-hidden");
    $('#help-re-password').addClass("is-danger");
    $('#help-re-password').removeClass("is-success");
    $('#help-re-password').html("This your re-password is invalid.");
    return false;
  }
}