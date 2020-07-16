$(document).ready(function () {
  // Check send form
  $('#name').blur(function () {
    checkText('name');
  });

  $('#email').blur(function () {
    checkText('email');
  });

  $('#phone').blur(function () {
    checkText('phone');
  });

  $('#send').blur(function () {
    checkText('all');
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

//////////////////////////////////////////////////////////////////////

function checkText(id) {
  var regText = /^[\w ]{2,30}$/; // regex kiem tra text
  var regEmail = /^[\w\.]+\@\w+\.\w+$/i; // regex kiem tra email
  var regPhone = /^\d{10,}$/i; // regex kiem tra so dien thoai
  if (id.includes("name")) {
    checkName(id, regText);
  } else if (id.includes("email")) {
    checkEmail(id, regEmail)
  } else if (id.includes("phone")) {
    checkPhone(id, regPhone);
  } else if (id.includes("all")) {
    console.log("ALL");
    var flag = checkName("name", regText) &
                checkEmail("email", regEmail) &
                checkPhone("phone", regPhone);
    if (flag) {
      alert("Sent!");
    }
  }
}

function checkName(id, regText) {
  if(checkValue(id, regText)) {
    console.log('Check name: TRUE');
    $('#name-icon-check').removeClass("is-hidden");
    $('#name-icon-exclamation-triangle').addClass("is-hidden");
    $('#help-name').addClass("is-success");
    $('#help-name').removeClass("is-danger");
    $('#help-name').html("This your name is valid.");
    return true;
  } else {
    console.log('Check name: FALSE');
    $('#name-icon-check').addClass("is-hidden");
    $('#name-icon-exclamation-triangle').removeClass("is-hidden");
    $('#help-name').addClass("is-danger");
    $('#help-name').removeClass("is-success");
    $('#help-name').html("This your name is invalid.");
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

function checkPhone(id, regPhone) {
  if(checkValue(id, regPhone)) {
    console.log('Check phone: TRUE');
    $('#phone-icon-check').removeClass("is-hidden");
    $('#phone-icon-exclamation-triangle').addClass("is-hidden");
    $('#help-phone').addClass("is-success");
    $('#help-phone').removeClass("is-danger");
    $('#help-phone').html("This your phone is valid.");
    return true;
  } else {
    console.log('Check phone: FALSE');
    $('#phone-icon-check').addClass("is-hidden");
    $('#phone-icon-exclamation-triangle').removeClass("is-hidden");
    $('#help-phone').addClass("is-danger");
    $('#help-phone').removeClass("is-success");
    $('#help-phone').html("This your phone is invalid.");
    return false;
  }
}