var isMobileMenu = false;

$(window).on('load', function () {
    $('.loader-outer').fadeOut();
 });
$(document).ready(function () {
    $('.mobileClick').click(function () {
        if (!isMobileMenu) {
            $('.mobile-containerBx').addClass('active');
            isMobileMenu = true;
        } else {
            $('.mobile-containerBx').removeClass('active');
            isMobileMenu = false;
        }
    })
});