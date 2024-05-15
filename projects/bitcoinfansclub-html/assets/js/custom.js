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
$('.owl-carousel').owlCarousel({
    loop: false,
    margin: 20,
    autoplay: true,
    autoplayTimeout:3000,
    smartSpeed: 250,
    autoplayHoverPause: false,
    center: false,
    autoWidth: false,
    navigation:false,
    nav:true,
    responsive: {
    0: {
        items: 1,
        center: false,
    },
    600: {
        items: 1
    },
    1000: {
        items: 3
    }
    }
})



let valueDisplays = document.querySelectorAll(".num");
let interval = 5000;

valueDisplays.forEach((valueDisplay) => {
let startValue = 0;
let endValue = parseInt(valueDisplay.getAttribute("data-val"));
let duration = Math.floor(interval / endValue);
let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});

AOS.init({
    once: true,
    duration: 1000,
    disable: 'mobile',
    once: true,
    mirror: false,
});



window.MotiongerInitd9c9073 = function () {
    let motiongerIndex = 1;
    const wrapper = document.querySelector('.bitcoinism-wrapper');
    animationHeader(motiongerIndex);
    function nextMotionger() {
        animationHeader(motiongerIndex += 1);
    }
    function animationHeader(n) {
        let items = wrapper.querySelectorAll('.bitcoinism-drop-in-active-header');
        let itemsLength = items.length;
        if (n > itemsLength) {
            motiongerIndex = 1
        }
        if (n < 1) {
            motiongerIndex = itemsLength;
        }
        for (let i = 0; i < itemsLength; i++) {
            if (items[i].classList.contains('bitcoinism-drop-in-inactive')) {
                items[i].classList.add('bitcoinism-hide');
            }
            if (items[i].classList.contains('bitcoinism-drop-in-active')) {
                items[i].classList.remove('bitcoinism-drop-in-active');
                items[i].classList.add('bitcoinism-drop-in-inactive');
                setTimeout(function () {
                    items[i].classList.add('bitcoinism-hide');
                }, 500);
            }
        }
        setTimeout(function () {
            items[motiongerIndex - 1].classList.remove('bitcoinism-hide');
            items[motiongerIndex - 1].classList.remove('bitcoinism-drop-in-inactive');
            items[motiongerIndex - 1].classList.add('bitcoinism-drop-in-active');
        }, 500);
    }
    setInterval(nextMotionger, 8000);
}
document.addEventListener("DOMContentLoaded", window.MotiongerInitd9c9073);


gsap.registerPlugin(ScrollTrigger);
        
gsap.to(".Roadmapimg", {
  scale: 1.5,
  scrollTrigger: {
    trigger: ".Roadmapimg",
    start: "top center",
    end: "bottom top",
    scrub: 1
  }
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

