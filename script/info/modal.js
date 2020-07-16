$(document).ready(function() {
  // Show modal
  $('#edit').click(function() {
    console.log('Show modal');
    var username = $('#username-save').val();
    var email = $('#email-save').val();
    var firstName = $('#firstName-save').val();
    var lastName = $('#lastName-save').val();
    var phone = $('#phone-save').val();
    var address = $('#address-save').val();
    var gender = $('#gender-save').val();

    $('#username-modal').val(username);
    $('#email-modal').val(email);
    $('#first-name-modal').val(firstName);
    $('#last-name-modal').val(lastName);
    $('#phone-modal').val(phone);
    $('#address-modal').val(address);
    if (gender == 1) {
      $('#male-modal').attr('checked', 'checked');
      $('#female-modal').removeAttr('checked');
    } else {
      $('#female-modal').attr('checked', 'checked');
      $('#male-modal').removeAttr('checked');
    }

    showModal('modal');
  });

  // Hide Modal
  $('.delete').click(function() {
    console.log('Hide modal');
    hideModal('modal');
  });

  // Send data
  $('#edit-modal').click(function() {
    var id = $('#id-save').val();
    var username = $('#username-modal').val();
    var email = $('#email-modal').val();
    var firstName = $('#first-name-modal').val();
    var lastName = $('#last-name-modal').val();
    var phone = $('#phone-modal').val();
    var address = $('#address-modal').val();
    var gender = $('.modal-card-body :input[name="gender"]:checked').val();

    console.log('id: ' + id);
    console.log('username: ' + username);
    console.log('email: ' + email);
    console.log('firstName: ' + firstName);
    console.log('lastName: ' + lastName);
    console.log('phone: ' + phone);
    console.log('address: ' + address);
    console.log('gender: ' + gender);

    if (checkEdit('all')) {
      var url = "proc_edit_info.php?t=" + Math.random();
      var package = { 'id': id,
                      'username': username,
                      'email': email,
                      'firstName': firstName,
                      'lastName': lastName,
                      'phone': phone,
                      'address': address,
                      'gender': gender
                    };
      $.post(url, package, function(data, status, jqXHR) {
        console.log(package);
        console.log(data);
        var message = $.parseJSON(data);
        console.log(message.edit);
        console.log(message.username);
        console.log(message.email);
        if (message.edit == 'Success') {
          hideModal('modal');
          alert('Edit info is successful');
          // Reload
          window.location = 'info.php';
        } else {
          var ms = 'Edit info is failed\n';
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

  // Check field
  $('#username-modal').blur(function () {
    checkEdit('username-modal');
  });

  $('#email-modal').blur(function () {
    checkEdit('email-modal');
  });

  $('#first-name-modal').blur(function () {
    checkEdit('first-name-modal');
  });

  $('#last-name-modal').blur(function () {
    checkEdit('last-name-modal');
  });

  $('#phone-modal').blur(function () {
    checkEdit('phone-modal');
  });

  $('#address-modal').blur(function () {
    checkEdit('address-modal');
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

function checkEdit(id) {
  var regText = /^[\w\. ]{0,30}$/; // regex kiem tra text
  var regAddress = /^[\w\. \d@\\\,\?\#\$\!]{0,255}$/; // regex kiem tra text
  var regUser = /^[\w\.@]{5,30}$/; // regex kiem tra user
  var regEmail = /^[\w\.]+\@\w+\.\w+$/i; // regex kiem tra email
  var regPhone = /^\d{10,}$/i; // regex kiem tra so dien thoai
  if (id == "username-modal") {
    return checkUsernameEdit(id, regUser);
  } else if (id == "email-modal") {
    return checkEmailEdit(id, regEmail)
  } else if (id == "phone-modal") {
    return checkPhoneEdit(id, regPhone);
  } else if (id == "first-name-modal") {
    return checkFirstNameEdit(id, regText);
  } else if (id == "last-name-modal") {
    return checkLastNameEdit(id, regText);
  } else if (id == "address-modal") {
    return checkAddressEdit(id, regAddress);
  } else if (id == "all") {
    console.log("ALL");
    var flag =  checkUsernameEdit("username-modal", regUser) &
                checkEmailEdit("email-modal", regEmail) &
                checkPhoneEdit("phone-modal", regPhone) &
                checkFirstNameEdit("first-name-modal", regText) &
                checkLastNameEdit("last-name-modal", regText) &
                checkAddressEdit("address-modal", regAddress);
    return flag;
  }
  return false;
}

function checkUsernameEdit(id, regUser) {
  if(checkValue(id, regUser)) {
    console.log('Check username-modal: TRUE');
    $('#username-modal-icon-check').removeClass("is-hidden");
    $('#username-modal-icon-exclamation-triangle').addClass("is-hidden");
    $('#help-username-modal').addClass("is-success");
    $('#help-username-modal').removeClass("is-danger");
    $('#help-username-modal').html("This your username-modal is valid.");
    return true;
  } else {
    console.log('Check username-modal: FALSE');
    $('#username-modal-icon-check').addClass("is-hidden");
    $('#username-modal-icon-exclamation-triangle').removeClass("is-hidden");
    $('#help-username-modal').addClass("is-danger");
    $('#help-username-modal').removeClass("is-success");
    $('#help-username-modal').html("This your username-modal is invalid.");
    return false;
  }
}

function checkEmailEdit(id, regEmail) {
  if(checkValue(id, regEmail)) {
    console.log('Check email-modal: TRUE');
    $('#email-modal-icon-check').removeClass("is-hidden");
    $('#email-modal-icon-exclamation-triangle').addClass("is-hidden");
    $('#help-email-modal').addClass("is-success");
    $('#help-email-modal').removeClass("is-danger");
    $('#help-email-modal').html("This your email-modal is valid.");
    return true;
  } else {
    console.log('Check email-modal: FALSE');
    $('#email-modal-icon-check').addClass("is-hidden");
    $('#email-modal-icon-exclamation-triangle').removeClass("is-hidden");
    $('#help-email-modal').addClass("is-danger");
    $('#help-email-modal').removeClass("is-success");
    $('#help-email-modal').html("This your email-modal is invalid.");
    return false;
  }
}

function checkPhoneEdit(id, regPhone) {
  if(checkValue(id, regPhone)) {
    console.log('Check phone-modal: TRUE');
    $('#phone-modal-icon-check').removeClass("is-hidden");
    $('#phone-modal-icon-exclamation-triangle').addClass("is-hidden");
    $('#help-phone-modal').addClass("is-success");
    $('#help-phone-modal').removeClass("is-danger");
    $('#help-phone-modal').html("This your phone-modal is valid.");
    return true;
  } else {
    console.log('Check phone-modal: FALSE');
    $('#phone-modal-icon-check').addClass("is-hidden");
    $('#phone-modal-icon-exclamation-triangle').removeClass("is-hidden");
    $('#help-phone-modal').addClass("is-danger");
    $('#help-phone-modal').removeClass("is-success");
    $('#help-phone-modal').html("This your phone-modal is invalid.");
    return false;
  }
}

function checkFirstNameEdit(id, regText) {
  if(checkValue(id, regText)) {
    console.log('Check first-name-modal: TRUE');
    $('#first-name-modal-icon-check').removeClass("is-hidden");
    $('#first-name-modal-icon-exclamation-triangle').addClass("is-hidden");
    $('#help-first-name-modal').addClass("is-success");
    $('#help-first-name-modal').removeClass("is-danger");
    $('#help-first-name-modal').html("This your first-name-modal is valid.");
    return true;
  } else {
    console.log('Check first-name-modal: FALSE');
    $('#first-name-modal-icon-check').addClass("is-hidden");
    $('#first-name-modal-icon-exclamation-triangle').removeClass("is-hidden");
    $('#help-first-name-modal').addClass("is-danger");
    $('#help-first-name-modal').removeClass("is-success");
    $('#help-first-name-modal').html("This your first-name-modal is invalid.");
    return false;
  }
}

function checkLastNameEdit(id, regText) {
  if(checkValue(id, regText)) {
    console.log('Check last-name-modal: TRUE');
    $('#last-name-modal-icon-check').removeClass("is-hidden");
    $('#last-name-modal-icon-exclamation-triangle').addClass("is-hidden");
    $('#help-last-name-modal').addClass("is-success");
    $('#help-last-name-modal').removeClass("is-danger");
    $('#help-last-name-modal').html("This your last-name-modal is valid.");
    return true;
  } else {
    console.log('Check last-name-modal: FALSE');
    $('#last-name-modal-icon-check').addClass("is-hidden");
    $('#last-name-modal-icon-exclamation-triangle').removeClass("is-hidden");
    $('#help-last-name-modal').addClass("is-danger");
    $('#help-last-name-modal').removeClass("is-success");
    $('#help-last-name-modal').html("This your last-name-modal is invalid.");
    return false;
  }
}

function checkAddressEdit(id, regAddress) {
  if(checkValue(id, regAddress)) {
    console.log('Check address-modal: TRUE');
    $('#address-modal-icon-check').removeClass("is-hidden");
    $('#address-modal-icon-exclamation-triangle').addClass("is-hidden");
    $('#help-address-modal').addClass("is-success");
    $('#help-address-modal').removeClass("is-danger");
    $('#help-address-modal').html("This your address-modal is valid.");
    return true;
  } else {
    console.log('Check address-modal: FALSE');
    $('#address-modal-icon-check').addClass("is-hidden");
    $('#address-modal-icon-exclamation-triangle').removeClass("is-hidden");
    $('#help-address-modal').addClass("is-danger");
    $('#help-address-modal').removeClass("is-success");
    $('#help-address-modal').html("This your address-modal is invalid.");
    return false;
  }
}

///////////////////////////////////////////////////

function showModal(id) {
  var element = $('#' + id);
  if (element != null) {
    $(element).addClass('is-active');
  }
}

function hideModal(id) {
  var element = $('#' + id);
  if (element != null) {
    $(element).removeClass('is-active');
  }
}