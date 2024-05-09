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
