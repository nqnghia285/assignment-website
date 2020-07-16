$(document).ready(() => {
  // Event of scroll body
  // An navbar khi cuon xuong vao hien ra khi cuon len
  var lastScrollTop = 0;
  $(window).on('scroll', () => {
    var st = window.pageYOffset || window.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (st > lastScrollTop){
        // downscroll code
        $('#navbar-id').addClass('is-hidden');
        console.log("Down-scroll");
    } else {
      $('#navbar-id').removeClass('is-hidden');
        console.log("Up-scroll");
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  });
});