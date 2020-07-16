$(document).ready(function() {
  // Show modal
  $('#change-password').click(function() {
    console.log('Show modal');
    showModal('change-password-modal');
  });

  // Hide Modal
  $('#change-password-modal .delete').click(function() {
    console.log('Hide modal');
    hideModal('change-password-modal');
  });

  // Send data
  $('#change-modal').click(function() {
    var id = $('#id-save').val();
    var pwd = $('#password-save').val();
    var curPwd = md5($('#current-password-modal').val());
    var newPwd = md5($('#new-password-modal').val());
    var reNewPwd = md5($('#re-new-password-modal').val());

    console.log('id: ' + id);
    console.log('password: ' + pwd);
    console.log('current password: ' + curPwd);
    console.log('new password: ' + newPwd);
    console.log('new password repeat: ' + reNewPwd);

    if (checkChangePwd('all')) {
      if (pwd == curPwd) {
        if (newPwd == reNewPwd) {
          var url = "proc_change_password.php?t=" + Math.random();
          var package = { 'id': id,
                          'new-password': newPwd
                        };
          $.post(url, package, function(data, status, jqXHR) {
            console.log(package);
            console.log(data);
            var message = $.parseJSON(data);
            console.log(message.changePwd);
            console.log(message.id);
            if (message.changePwd == 'Success') {
              hideModal('change-password-modal');
              alert('Change password is successful');
              // Reload
              window.location = window.location;
            } else {
              var ms = 'Change password is failed\n';
              if (message.id == 'False') {
                ms += 'Id is not exist in database\n';
              }
              alert(ms);
            }
          });
        } else {
          alert('New password is invalid!');
        }
      } else {
        alert('Current password is invalid!');
      }
    }
  });

  // Check field
  $('#current-password-modal').blur(function () {
    checkChangePwd('current-password-modal');
  });

  $('#new-password-modal').blur(function () {
    checkChangePwd('new-password-modal');
  });

  $('#re-new-password-modal').blur(function () {
    checkChangePwd('re-new-password-modal');
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

function checkChangePwd(id) {
  var regPwd = /^[\w\.@]{6,16}$/; // regex kiem tra text
  if (id == "all") {
    console.log("ALL");
    var flag =  checkPasswordChangePwd("current-password-modal", regPwd) &
                checkPasswordChangePwd("new-password-modal", regPwd) &
                checkPasswordChangePwd("re-new-password-modal", regPwd);
    return flag;
  } else  {
    return checkPasswordChangePwd(id, regPwd);
  }
}

function checkPasswordChangePwd(id, regPwd) {
  console.log(id);
  if(checkValue(id, regPwd)) {
    console.log('Check ' + id + ': TRUE');
    $('#' + id + '-icon-check').removeClass("is-hidden");
    $('#' + id + '-icon-exclamation-triangle').addClass("is-hidden");
    $('#help-' + id + '').addClass("is-success");
    $('#help-' + id + '').removeClass("is-danger");
    $('#help-' + id + '').html('This your ' + id + ' is valid.');
    return true;
  } else {
    console.log('Check ' + id + ': FALSE');
    $('#' + id + '-icon-check').addClass("is-hidden");
    $('#' + id + '-icon-exclamation-triangle').removeClass("is-hidden");
    $('#help-' + id + '').addClass("is-danger");
    $('#help-' + id + '').removeClass("is-success");
    $('#help-' + id + '').html('This your ' + id + ' is invalid.');
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