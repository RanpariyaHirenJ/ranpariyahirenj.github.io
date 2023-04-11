window.ityped.init(document.querySelector('.ityped'),{
    strings: ['Body & Soul', 'Body & Mind'],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})
$(function() {
    $('a[href*=#]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 80}, 2000, 'linear');
    });
  });

document.onkeydown = function(e) {
    if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)) {
        //Alt+c, Alt+v will also be disabled sadly.
        alert('not allowed');
    }
    return false;
};
// disable Ctrl+U using Javascript

$(document).keydown(function (event) {
    if (event.keyCode == 123) { // Prevent F12
        return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
        return false;
    }
});
// block F12 keyboard key in jquery for all my pages and elements

$(function() {
    $(this).bind("contextmenu", function(e) {
        e.preventDefault();
    });
}); 
// prevent Right Click option using jquery