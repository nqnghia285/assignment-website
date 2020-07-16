$(document).ready(function() {
  // Insert image slide show
  var numberArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nice'];
  for (var i = 1; i < 9; i++) {
    $('#swiper-header .swiper-wrapper').append('<div>');
    $('#swiper-header .swiper-wrapper div:last-child').attr('class', 'swiper-slide')
                                                     .append('<div>')
                                                     .append('<img>');
    $('#swiper-header .swiper-wrapper div:last-child > div').attr('class', 'text')
                                                           .append('Caption for picture ' + numberArray[i]);
    $('#swiper-header .swiper-wrapper div:last-child > img').attr({'src': 'image/image_slide/img' + i + '.jpg',
                                                                  'alt': 'Picture ' + numberArray[i],
                                                                  'class': 'style-img'});
  }

  // Insert card into show-modal-townhouse
  renderCardView('swiper-content-1', 'show-modal-townhouse', 'image/nha-pho-dep.jpg', 'Townhouse', '44999', 4);
  
  // Insert card into show-modal-villa
  renderCardView('swiper-content-2', 'show-modal-villa', 'image/biet-thu-dep.jpg', 'Villa', '50000', 4);

  // Insert card into show-modal-furniture
  renderCardView('swiper-content-3', 'show-modal-furniture', 'image/noi-that.jpg', 'Furniture', '10000', 4);

  // Insert card into show-modal-news
  for (var i = 1; i < 5; i++) {
    $('#swiper-content-4 .swiper-wrapper').append('<div>');
    $('#swiper-content-4 .swiper-wrapper > div:last-child').attr('class', 'swiper-slide')
                                                         .append('<div>');
    $('#swiper-content-4 .swiper-wrapper > div:last-child > div:first-child').attr('class', 'card')
                                                               .append('<div>');
    $('#swiper-content-4 .swiper-wrapper > div:last-child > div:first-child > div:last-child').attr('class', 'card-image')
                                                                              .append('<img>');
    $('#swiper-content-4 .swiper-wrapper > div:last-child > div:first-child > div:last-child img').attr({ 'value': i,
                                                                                          'class': 'show-modal-news',
                                                                                          'src': 'image/sample-1.jpg',
                                                                                          'alt': 'News' });
    $('#swiper-content-4 .swiper-wrapper > div:last-child > div:first-child').append('<div>');
    $('#swiper-content-4 .swiper-wrapper > div:last-child > div:first-child > div:last-child').attr('class', 'card-content')
                                                                              .append('<span>')
                                                                              .append('<p>');
    $('#swiper-content-4 .swiper-wrapper > div:last-child > div:first-child > div:last-child span').attr('class', 'card-title')
                                                                                   .append('Card Title');
    $('#swiper-content-4 .swiper-wrapper > div:last-child > div:first-child > div:last-child p').append('I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.');                                                                          
    $('#swiper-content-4 .swiper-wrapper > div:last-child > div:first-child').append('<div>');
    $('#swiper-content-4 .swiper-wrapper > div:last-child > div:first-child > div:last-child').attr('class', 'card-action')
                                                                              .append('<a>');
    $('#swiper-content-4 .swiper-wrapper > div:last-child > div:first-child > div:last-child a').attr('href', '#')
                                                                                .append('This is a link');
  }

  // Insert modal-townhouse
  renderModal('modal-townhouse', 'modal-background-townhouse', 'image/nha-pho-dep.jpg', 'Beautiful Townhouse', 'modal-close-townhouse', 4);

  // Insert modal-villa
  renderModal('modal-villa', 'modal-background-villa', 'image/biet-thu-dep.jpg', 'Beautiful Villa', 'modal-close-villa', 4);

  // Insert modal-furniture
  renderModal('modal-furniture', 'modal-background-furniture', 'image/noi-that.jpg', 'Beautiful Furniture', 'modal-close-furniture', 4);

  // Insert modal-news
  for (var i = 1; i < 5; i++) {
    $('#modal-news').append('<div>');
    $('#modal-news > div:last-child').attr({ 'id': 'modal-news-' + i,
                                                  'class': 'modal' })
                                          .append('<div>');
    $('#modal-news > div:last-child > div:last-child').attr({ 'value': i,
                                                                   'class': 'modal-background modal-background-news' });
    $('#modal-news > div:last-child').append('<div>');
    $('#modal-news > div:last-child > div:last-child').attr('class', 'modal-content w3-animate-zoom')
                                                           .append('<div>');
    $('#modal-news > div:last-child > div:last-child > div:last-child').attr('class', 'card')
                                                                       .append('<div>');
    $('#modal-news > div:last-child > div:last-child > div:last-child > div:last-child').attr('class', 'card-image')
                                                                                        .append('<img>');
    $('#modal-news > div:last-child > div:last-child > div:last-child > div:last-child img').attr({ 'src': 'image/sample-1.jpg',
                                                                                                    'alt': 'News' });
    $('#modal-news > div:last-child > div:last-child > div:last-child > div:last-child').append('<div>');
    $('#modal-news > div:last-child > div:last-child > div:last-child > div:last-child > div:last-child').attr('class', 'card-content')
                                                                                                         .append('<span>')
                                                                                                         .append('<p>');
    $('#modal-news > div:last-child > div:last-child > div:last-child > div:last-child > div:last-child span').attr('class', 'card-title')
                                                                                                              .append('Card Title');                                                                                                     
    $('#modal-news > div:last-child > div:last-child > div:last-child > div:last-child > div:last-child p').append('Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ad asperiores nobis culpa ipsam provident, aspernatur distinctio odit explicabo sit sint repudiandae, quia commodi nisi suscipit eos similique eius neque.');
    $('#modal-news > div:last-child > div:last-child > div:last-child > div:last-child').append('<div>');
    $('#modal-news > div:last-child > div:last-child > div:last-child > div:last-child > div:last-child').attr('class', 'card-action')
                                                                                                         .append('<a>');
    $('#modal-news > div:last-child > div:last-child > div:last-child > div:last-child > div:last-child a').attr('href', '#')
                                                                                                           .append('This is a link');
    $('#modal-news > div:last-child').append('<button>');
    $('#modal-news > div:last-child button').attr({ 'value': i,
                                                         'class': 'modal-close is-large modal-close-news' })
  }
});

function renderCardView(id, className, srcImg, alt, price, size) {
  console.log('Render CardView');
  for (var i = 1; i <= size; i++) {
    $('#' + id + ' .swiper-wrapper').append('<div>');
    $('#' + id + ' .swiper-wrapper > div:last-child').attr('class', 'swiper-slide')
                                                          .append('<div>');
    var card = $('#' + id + ' .swiper-wrapper > div:last-child > div:first-child');                                                     
    $(card).attr('class', 'card')
            .append('<div>');
    var cardImage = $('#' + id + ' .swiper-wrapper > div:last-child > div:first-child > div:last-child');
    $(cardImage).attr('class', 'card-image')
                .append('<img>')
                .append('<div>')
                .append('<div>');
    $(cardImage).find('img').attr({ 'value': i,
                                    'class': className,
                                    'src': srcImg,
                                    'alt': alt });
    $(cardImage).find('div').first().attr('class', 'item-rating')
                    .append(['<i>', '<i>', '<i>', '<i>', '<i>']);
    $(cardImage).find('div').first().find('i').each(function() {
      $(this).attr('class', 'fa fa-star');
    });
    $(cardImage).find('div').last().attr('class', 'item-price')
                                    .append('<span>');         
    $(cardImage).find('div').last().find('span').attr('class', 'amount')
                                                .append('$' + price);                                                                                                                                                                                                                            
    
    $(card).append('<div>');
    var cardContent = $('#' + id + ' .swiper-wrapper > div:last-child > div:first-child > div:last-child');
    $(cardContent).attr('class', 'card-content')
                  .append('<span>')
                  .append('<p>');
    $(cardContent).find('span').attr('class', 'card-title')
                                .append('Card Title');
    $(cardContent).find('p').append('I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.');                                                                          
    $(card).append('<div>');
    var cardAction = $('#' + id + ' .swiper-wrapper > div:last-child > div:first-child > div:last-child');
    $(cardAction).attr('class', 'card-action')
                  .append('<a>');
    $(cardAction).find('a').attr('href', '#')
                            .append('This is a link');
  }
}

function renderModal(id, backgroundImg, srcImg, alt, backgroundClose, size) {
  console.log('Render Modal');
  for (var i = 1; i <= size; i++) {
    $('#' + id).append('<div>');
    $('#' + id + ' > div:last-child').attr({ 'id': id + '-' + i,
                                             'class': 'modal' })
                                     .append('<div>');
    $('#' + id + ' > div:last-child > div:last-child').attr({ 'value': i,
                                                              'class': 'modal-background ' + backgroundImg });
    $('#' + id + ' > div:last-child').append('<div>');
    $('#' + id + ' > div:last-child > div:last-child').attr('class', 'modal-content w3-animate-zoom')
                                                           .append('<img>');
    $('#' + id + ' > div:last-child > div:last-child img').attr({ 'src': srcImg,
                                                                  'alt': alt });
    $('#' + id + ' > div:last-child').append('<button>');
    $('#' + id + ' > div:last-child button').attr({ 'value': i,
                                                    'class': 'modal-close is-large ' + backgroundClose })
  }
}