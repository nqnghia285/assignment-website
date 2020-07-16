$(document).ready(function() {
  // Load user table
  var url = 'proc_load_user.php';
  console.log(url);
  getData(url);

  $('#load-button').click(function() {
    var url = 'proc_load_user.php';
    console.log(url);
    $('#icon-loading').css('display', 'block');
    getData(url);
  });

  // Show add-modal
  $('#add-button').click(function() {
    showModal('add-modal');
  });

  $('#send-add-modal').click(function() {
    $('#icon-loading').css('display', 'block');
    if (checkAdd('all')) {
      // POST data
      var username = $('#username-add-modal').val();
      var password = md5($('#password-add-modal').val());
      var email = $('#email-add-modal').val();
      var firstName = $('#firstname-add-modal').val();
      var lastName = $('#lastname-add-modal').val();
      var phone = $('#phone-add-modal').val();
      var address = $('#address-add-modal').val();
      var gender = $('#add-modal :input[name="gender-add-modal"]:checked').val();
      var role = $('#add-modal :input[name="role-add-modal"]:checked').val();

      var url = "proc_add_user.php";
      var packages = { 'username': username,
                       'password': password,
                       'email': email,
                       'firstName': firstName,
                       'lastName': lastName,
                       'phone': phone,
                       'address': address,
                       'gender': gender,
                       'role':  role };
      postData(url, packages);
    }
  });

  $('#send-edit-modal').click(function() {
    $('#icon-loading').css('display', 'block');
    if (checkEdit('all')) {
      // POST data
      var id = $('#id-edit-modal').val();
      var username = $('#username-edit-modal').val();
      var email = $('#email-edit-modal').val();
      var firstName =$('#firstname-edit-modal').val();
      var lastName = $('#lastname-edit-modal').val();
      var phone = $('#phone-edit-modal').val();
      var address = $('#address-edit-modal').val();
      var gender = $('#edit-modal :input[name="gender-edit-modal"]:checked').val();
      var role = $('#edit-modal :input[name="role-edit-modal"]:checked').val();

      var url = "proc_edit_user.php";
      var packages = { 'id': id,
                       'username': username,
                       'email': email,
                       'firstName': firstName,
                       'lastName': lastName,
                       'phone': phone,
                       'address': address,
                       'gender': gender,
                       'role':  role };
      postData(url, packages);
    }
  });

  // Hide Modal
  $('.delete').click(function() {
    console.log('Hide modal');
    hideModal('add-modal');
    hideModal('edit-modal');
    hideModal('delete-modal');
  });

  // 
  $('#send-delete-modal').click(function() {
    $('#icon-loading').css('display', 'block');
    // POST data
    var id = $('#id-delete-modal').val();
    
    var url = "proc_delete_user.php";
    var packages = { 'id': id };
    postData(url, packages);
  });

  // Check field edit
  $('#username-edit-modal').blur(function () {
    checkEdit('username-edit-modal');
  });

  $('#email-edit-modal').blur(function () {
    checkEdit('email-edit-modal');
  });

  $('#firstname-edit-modal').blur(function () {
    checkEdit('firstname-edit-modal');
  });

  $('#lastname-edit-modal').blur(function () {
    checkEdit('lastname-edit-modal');
  });

  $('#phone-edit-modal').blur(function () {
    checkEdit('phone-edit-modal');
  });

  $('#address-edit-modal').blur(function () {
    checkEdit('address-edit-modal');
  });

  // Check field add
  $('#username-add-modal').blur(function () {
    checkAdd('username-add-modal');
  });

  $('#password-add-modal').blur(function () {
    checkAdd('password-add-modal');
  });

  $('#email-add-modal').blur(function () {
    checkAdd('email-add-modal');
  });

  $('#firstname-add-modal').blur(function () {
    checkAdd('firstname-add-modal');
  });

  $('#lastname-add-modal').blur(function () {
    checkAdd('lastname-add-modal');
  });

  $('#phone-add-modal').blur(function () {
    checkAdd('phone-add-modal');
  });

  $('#address-add-modal').blur(function () {
    checkAdd('address-add-modal');
  });
});

function getDeleteData(id) {
  console.log('Show edit modal');
  $('#id-delete-modal').val(id);
  showModal('delete-modal');
}

function getEditData(id, username, email, firstName, lastName, phone, address, gender, role) {
  console.log('Show edit modal');
  $('#id-edit-modal').val(id);
  $('#username-edit-modal').val(username);
  $('#email-edit-modal').val(email);
  $('#firstname-edit-modal').val(firstName);
  $('#lastname-edit-modal').val(lastName);
  $('#phone-edit-modal').val(phone);
  $('#address-edit-modal').val(address);
  if (gender == 1) {
    $('#male-edit-modal').prop('checked', true);
  } else {
    $('#female-edit-modal').prop('checked', true);
  }

  if (role == 1) {
    $('#admin-edit-modal').prop('checked', true);
  } else {
    $('#user-edit-modal').prop('checked', true);
  }

  showModal('edit-modal');
}

function getData(url) {
  $.get({
    url: url,
    dataType: "json",
    success: function(response) {
      console.log(response);
      printTr(response);
    }
  });
}

function postData(url, packages) {
  $.post({
    url: url,
    data: packages,
    dataType: "json",
    success: function(response) {
      console.log(response);
      printTr(response);
    }
  });
}

// Function print table row
function printTr(response) {
  if (response.message.success == 'True') {
    var tbody = $('table > tbody');
    $(tbody).find('tr').remove();
    // Cap nhat cac tr trong tbody
    $.each(response.rows, function(i, val) {
      // append <tr>
      $(tbody).append('<tr>');
      // append <th> into <tr>
      var tr = $(tbody).find('tr:last-child');
      $(tr).append('<th>');
      // set attribute for <th> and append value
      $(tr).find('th').append(val.id);
      // append <td> into <tr>
      $(tr).append('<td>');
      // append value into <td>
      var td = $(tr).find('td:last-child');
      $(td).append(val.username);
      // append <td> into <tr>
      $(tr).append('<td>');
      // append value into <td>
      td = $(tr).find('td:last-child');
      $(td).append(val.email);
      // append <td> into <tr>
      $(tr).append('<td>');
      // append value into <td>
      td = $(tr).find('td:last-child');
      $(td).append(val.firstName);
      // append <td> into <tr>
      $(tr).append('<td>');
      // append value into <td>
      td = $(tr).find('td:last-child');
      $(td).append(val.lastName);
      // append <td> into <tr>
      $(tr).append('<td>');
      // append value into <td>
      td = $(tr).find('td:last-child');
      $(td).append(val.address);
      // append <td> into <tr>
      $(tr).append('<td>');
      // append value into <td>
      td = $(tr).find('td:last-child');
      $(td).append(val.phone);
      // append <td> into <tr>
      $(tr).append('<td>');
      // append value into <td>
      td = $(tr).find('td:last-child');
      $(td).append(checkGender(val.gender));
      // append <td> into <tr>
      $(tr).append('<td>');
      // append value into <td>
      td = $(tr).find('td:last-child');
      $(td).append(val.dateJoin);
      // append <td> into <tr>
      $(tr).append('<td>');
      // append value into <td>
      td = $(tr).find('td:last-child');
      $(td).append(checkUserType(val.role));
      // append <td> into <tr>
      $(tr).append('<td>');
      // append <p> into <td>
      td = $(tr).find('td:last-child');
      $(td).append('<div>');
      // append <button>[Delete] into <p>
      var div = $(td).find('div');
      $(div).attr('class', 'buttons')
            .append('<button>');
      // set attribute for <button>[Delete] and append value
      var button = $(div).find('button:last-child');
      $(button).attr({ 'class': 'button is-danger modal-button delete-button',
                       'onClick': "getDeleteData('" +
                                  val.id + "')" })
               .append('Delete');
      // append <button>[Edit] into <p>
      $(div).append('<button>');
      // set attribute for <button>[Edit] and append value
      button = $(div).find('button:last-child');
      $(button).attr({ 'class': 'button is-success modal-button edit-button',
                       'onClick': "getEditData('" +
                                  val.id + "','" +
                                  val.username + "','" +
                                  val.email + "','" +
                                  val.firstName + "','" +
                                  val.lastName + "','" +
                                  val.phone + "','" +
                                  val.address + "','" +
                                  val.gender + "','" +
                                  val.role + "')" })
               .append('Edit');
    });

    hideModal('add-modal');
    hideModal('edit-modal');
    hideModal('delete-modal');
  } else {
    var ms = '';
    $.each(response.message, function(i, val) {
      ms += i + ': ' + val + '\n';
    });

    alert(ms);
  }
  $('#icon-loading').css('display', 'none');
}

// Check gender
function checkGender(gender) {
  if (gender == 1) {
    return 'Male';
  } else {
    return 'Female';
  }
}

// Check user type
function checkUserType(role) {
  if (role == 1) {
    return 'Admin';
  } else {
    return 'User';
  }
}

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

// Check edit user
function checkEdit(id) {
  var regText = /^[\w\. ]{0,30}$/; // regex kiem tra text
  var regAddress = /^[\w\. \d@\\\,\?\#\$\!]{0,255}$/; // regex kiem tra text
  var regUser = /^[\w\.@]{5,30}$/; // regex kiem tra user
  var regEmail = /^[\w\.]+\@\w+\.\w+$/i; // regex kiem tra email
  var regPhone = /^\d{10,}$/i; // regex kiem tra so dien thoai
  if (id == "username-edit-modal") {
    return checkElement(id, regUser);
  } else if (id == "email-edit-modal") {
    return checkElement(id, regEmail);
  } else if (id == "phone-edit-modal") {
    return checkElement(id, regPhone);
  } else if (id == "firstname-edit-modal") {
    return checkElement(id, regText);
  } else if (id == "lastname-edit-modal") {
    return checkElement(id, regText);
  } else if (id == "address-edit-modal") {
    return checkElement(id, regAddress);
  } else if (id == "all") {
    console.log("ALL");
    var flag =  checkElement("username-edit-modal", regUser) &
                checkElement("email-edit-modal", regEmail) &
                checkElement("phone-edit-modal", regPhone) &
                checkElement("firstname-edit-modal", regText) &
                checkElement("lastname-edit-modal", regText) &
                checkElement("address-edit-modal", regAddress);
    return flag;
  }
  return false;
}

function checkElement(id, regex) {
  if(checkValue(id, regex)) {
    console.log('Check ' + id + ': TRUE');
    $('#' + id + '-icon-check').removeClass("is-hidden");
    $('#' + id + '-icon-exclamation-triangle').addClass("is-hidden");
    $('#help-' + id).addClass("is-success");
    $('#help-' + id).removeClass("is-danger");
    $('#help-' + id).html('This your ' + id + ' is valid.');
    return true;
  } else {
    console.log('Check ' + id + ': FALSE');
    $('#' + id + '-icon-check').addClass("is-hidden");
    $('#' + id + '-icon-exclamation-triangle').removeClass("is-hidden");
    $('#help-' + id).addClass("is-danger");
    $('#help-' + id).removeClass("is-success");
    $('#help-' + id).html('This your ' + id + ' is invalid.');
    return false;
  }
}

// Check add user
function checkAdd(id) {
  var regText = /^[\w\. ]{0,30}$/; // regex kiem tra text
  var regAddress = /^[\w\. \d@\\\,\?\#\$\!]{0,255}$/; // regex kiem tra text
  var regUser = /^[\w\.@]{5,30}$/; // regex kiem tra user
  var regPwd = /^[\w\.@]{6,30}$/; // regex kiem tra password
  var regEmail = /^[\w\.]+\@\w+\.\w+$/i; // regex kiem tra email
  var regPhone = /^\d{10,}$/i; // regex kiem tra so dien thoai
  if (id == "username-add-modal") {
    return checkElement(id, regUser);
  } else if (id == "password-add-modal") {
    return checkElement(id, regPwd);
  } else if (id == "email-add-modal") {
    return checkElement(id, regEmail);
  } else if (id == "phone-add-modal") {
    return checkElement(id, regPhone);
  } else if (id == "firstname-add-modal") {
    return checkElement(id, regText);
  } else if (id == "lastname-add-modal") {
    return checkElement(id, regText);
  } else if (id == "address-add-modal") {
    return checkElement(id, regAddress);
  } else if (id == "all") {
    console.log("ALL");
    var flag =  checkElement("username-add-modal", regUser) &
                checkElement("password-add-modal", regPwd) &
                checkElement("email-add-modal", regEmail) &
                checkElement("phone-add-modal", regPhone) &
                checkElement("firstname-add-modal", regText) &
                checkElement("lastname-add-modal", regText) &
                checkElement("address-add-modal", regAddress);
    return flag;
  }
  return false;
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