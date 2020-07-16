$(document).ready(() => {
  $(window).on('scroll', () => {
    var top_of_element = $("#footer").offset().top;
    var bottom_of_element = $("#footer").offset().top + $("#footer").outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    var top_of_screen = $(window).scrollTop();
  
    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
      $('#wrapper').css('display' = 'none');
    } else {
      $('#wrapper').css('display' = 'block');
    }
  });
});