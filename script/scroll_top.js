$(document).ready(function() {
  // Scroll to top
  $('#arrowup').click(function() {
    console.log('ScrollTop');
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  });
});