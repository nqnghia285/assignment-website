$(document).ready(function () {
  //initialize swiper when document ready
  var swiper = new Swiper('#swiper-header', {
    loop: true,
    // spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
});

setInterval(function() {
  $('#swiper-button-next').click();
 }, 3000);