$(document).ready(function () {
            // Smooth scrolling when click to nav
            $('#top-nav > ul > li > a').click(function (e) {
                e.preventDefault();
                var curLink = $(this);
                var scrollPoint = $(curLink.attr('href')).position().top;
                $('body,html').animate({
                    scrollTop: scrollPoint
                }, 500);
            })



            $(window).scroll(function () {
                onScrollHandle();
            });

            function onScrollHandle() {
                //Navbar shrink when scroll down
                // $(".navbar-default").toggleClass("navbar-shrink", $(this).scrollTop() > 50);

                //Get current scroll position
                var currentScrollPos = $(document).scrollTop() - 341;

                //Iterate through all node
                $('#top-nav > ul > li > a').each(function () {
                    var curLink = $(this);
                    var refElem = $(curLink.attr('href'));
                    //Compare the value of current position and the every section position in each scroll
                    if (refElem.position().top <= currentScrollPos && refElem.position().top + refElem.height() > currentScrollPos) {
                        //Remove class active in all nav
                        $('#top-nav > ul > li').removeClass("active");
                     
                        //Add class active
                        curLink.parent().addClass("active");
                      
                    }
                    else {
                        // curLink.parent().removeClass("active");
                         // $(".right-side-content .list-of-content").removeClass("add-box");

                    }
                });



            }





            $(".navbar-toggler .navbar-toggler-icon .bar-icon").click(function(){
            	$(this).css("display","none");
            	$(".navbar-toggler .navbar-toggler-icon .close-icon").css("display","block");
            	$("header .navigation-bar ").slideDown();
            });
            $(".navbar-toggler .navbar-toggler-icon .close-icon").click(function(){
            	$(this).css("display","none");
            	$(".navbar-toggler .navbar-toggler-icon .bar-icon").css("display","block");
            	$("header .navigation-bar ").slideUp();
            });
         
             
});