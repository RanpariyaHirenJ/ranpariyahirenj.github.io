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
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout:3000,
    smartSpeed: 250,
    autoplayHoverPause: false,
    center: true,
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

if (!window.Cypress) AOS.init({
    useClassNames: true,
    initClassName: false,
    animatedClassName: 'animated',
    duration: 800, // values from 0 to 3000, with step 50ms
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
