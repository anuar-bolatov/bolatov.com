$('.smooth-scroll').on('click', function(event) {
  event.preventDefault();
  var target = $(this).data('scrollTo');
  $('html, body').animate({
    scrollTop: $(target).offset().top
  }, 650);
});