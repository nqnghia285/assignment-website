// Tabs bar
$(document).ready(function() {

  var $tabParent = $('#tabs');
  var $tabs = $tabParent.find('li');

  $tabs.click(function() {
    var curIndex = $(this).index();
    // toggle tabs
    $tabs.removeClass('is-active');
    $tabs.find('a').css('background-color', 'rgb(80, 71, 71)');
    $tabs.eq(curIndex).addClass('is-active');
    $tabs.eq(curIndex).find('a').css('color', 'white');
    $tabs.eq(curIndex).find('a').css('background-color', 'rgb(80, 71, 71)');
    $('#my-map').addClass('is-hidden');
    if($tabs.eq(curIndex).attr('id') == 'map') {
      $('#my-map').removeClass('is-hidden');
      $('#my-address').addClass('is-hidden');
    } else if($tabs.eq(curIndex).attr('id') == 'address') {
      $('#my-address').removeClass('is-hidden');
      $('#my-map').addClass('is-hidden');
    }
  });

  // set color and background-color of a in tabs
  $('#tabs ul li').find('a').css('color', 'white');
  $('#tabs ul li').find('a').css('background-color', 'rgb(80, 71, 71)');

  $('#tabs ul li').hover(function() {
    $(this).find('a').css('color', 'rgb(80, 71, 71)');
    $(this).find('a').css('background-color', '#00c4a7');
  }, function() {
    $(this).find('a').css('color', 'white');
    $(this).find('a').css('background-color', 'rgb(80, 71, 71)');
  });
});