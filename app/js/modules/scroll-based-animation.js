var $animation_elements = $('.animation-element');
var $quote_mark = $('.quote-icon');
var $hello_animate = $('.hello-animation');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&

    (element_top_position <= window_bottom_position)) {

    $element.addClass('in-view');

    }

  });

  $.each($quote_mark, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&

    (element_top_position <= window_bottom_position)) {

    $element.addClass('jiggle');

    }

  });


  $.each($hello_animate, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&

    (element_top_position <= window_bottom_position)) {

    $element.addClass('jiggle');

    }

  });

}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');