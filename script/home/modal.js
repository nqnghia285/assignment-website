// Show/hide Modal
$(document).ready(function() {
  // Show
  $('.show-modal-townhouse').click(function() {
    console.log('Click modal-townhouse-' + $(this).attr('value'));
    showModal('modal-townhouse-' + $(this).attr('value'));
  });

  $('.show-modal-villa').click(function() {
    console.log('Click modal-villa-' + $(this).attr('value'));
    showModal('modal-villa-' + $(this).attr('value'));
  });

  $('.show-modal-furniture').click(function() {
    console.log('Click modal-furniture-' + $(this).attr('value'));
    showModal('modal-furniture-' + $(this).attr('value'));
  });

  $('.show-modal-news').click(function() {
    console.log('Click modal-news-' + $(this).attr('value'));
    showModal('modal-news-' + $(this).attr('value'));
  });

  // Hide Modal
  $('.modal-background-townhouse').click(function() {
    console.log('Click modal-background-townhouse-' + $(this).attr('value'));
    hideModal('modal-townhouse-' + $(this).attr('value'));
  });

  $('.modal-close-townhouse').click(function() {
    console.log('Click modal-close-townhouse-' + $(this).attr('value'));
    hideModal('modal-townhouse-' + $(this).attr('value'));
  });

  $('.modal-background-furniture').click(function() {
    console.log('Click modal-background-furniture-' + $(this).attr('value'));
    hideModal('modal-furniture-' + $(this).attr('value'));
  });

  $('.modal-close-furniture').click(function() {
    console.log('Click modal-close-furniture-' + $(this).attr('value'));
    hideModal('modal-furniture-' + $(this).attr('value'));
  });

  $('.modal-background-villa').click(function() {
    console.log('Click modal-background-villa-' + $(this).attr('value'));
    hideModal('modal-villa-' + $(this).attr('value'));
  });

  $('.modal-close-villa').click(function() {
    console.log('Click modal-close-villa-' + $(this).attr('value'));
    hideModal('modal-villa-' + $(this).attr('value'));
  });

  $('.modal-background-news').click(function() {
    console.log('Click modal-background-news-' + $(this).attr('value'));
    hideModal('modal-news-' + $(this).attr('value'));
  });

  $('.modal-close-news').click(function() {
    console.log('Click modal-close-news-' + $(this).attr('value'));
    hideModal('modal-news-' + $(this).attr('value'));
  });
});

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