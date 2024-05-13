$(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
        $('.fix-items').fadeIn('slow');
    } else {
        $('.fix-items').fadeOut('slow');
    }
});

$('.scroll-top').click(function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, 600);
});


AOS.init({
    once: true,
    duration: 1000,
    disable: 'mobile',
    once: true,
    mirror: false,
});

var $animation_elements = $('.basic');
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

    if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {    
        $('.basic').trigger('click');
    } 
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

$('.basic').one("click", function () {
    confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#f8922a', '#023FBA'],
    });
});

