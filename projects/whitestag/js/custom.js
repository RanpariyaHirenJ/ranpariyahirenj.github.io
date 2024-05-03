$(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
        $('.fix-items').fadeIn('slow');
    } else {
        $('.fix-items').fadeOut('slow');
    }

    
    if ($(this).scrollTop() > 0) {
        $('.navbar').addClass('moved');
    } else {
        $('.navbar').removeClass('moved');
    }
});
$('.scroll-top').click(function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, 600);
});


/* Whatsapp Chat Widget by www.bloggermix.com */
$(document).on("click", "#send-it", function() {
    var a = document.getElementById("chat-input");
    if ("" != a.value) {
      var b = $("#get-number").text(),
        c = document.getElementById("chat-input").value,
        d = "https://web.whatsapp.com/send",
        e = b,
        f = "&text=" + c;
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      )
        var d = "whatsapp://send";
      var g = d + "?phone=9029043966" + e + f;
      window.open(g, "_blank");
    }
  }),
    $(document).on("click", ".informasi", function() {
      (document.getElementById("get-number").innerHTML = $(this)
        .children(".my-number")
        .text()),
        $(".start-chat,.get-new")
          .addClass("show")
          .removeClass("hide"),
        $(".home-chat,.head-home")
          .addClass("hide")
          .removeClass("show"),
        (document.getElementById("get-nama").innerHTML = $(this)
          .children(".info-chat")
          .children(".chat-nama")
          .text()),
        (document.getElementById("get-label").innerHTML = $(this)
          .children(".info-chat")
          .children(".chat-label")
          .text());
    }),
    $(document).on("click", ".close-chat", function() {
      $("#whatsapp-chat")
        .addClass("hide")
        .removeClass("show");
    }),
    $(document).on("click", ".blantershow-chat", function() {
      $("#whatsapp-chat")
        .addClass("show")
        .removeClass("hide");
    });

    AOS.init({
      once: true,
      duration: 1000,
      disable: 'mobile',
      once: true,
      mirror: false,
  });

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout:1000,
		smartSpeed: 250,
    autoplayHoverPause: true,
		center: true,
		autoWidth: false,
    responsive: {
      0: {
        items: 2,
        center: false,
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  })