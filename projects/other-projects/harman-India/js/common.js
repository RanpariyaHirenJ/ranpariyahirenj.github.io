$(document).ready(function() {

	$('.highlights-slider').slick({
		autoplay:true,
		slidesToShow:4,
		slidesToScroll:1,
		prevArrow:".prev-btn",
		nextArrow:".next-btn",
     responsive:[
      {
  		breakpoint:992,
  		settings:{
            slidesToShow:2,
            dots: true,
       	}
        },
        {
         breakpoint:768,
         settings:{
          slidesToShow:1,
          dots: true,
         }
  	   }
     ]

   })
  $('.event-slider').slick({
    autoplay:true,
    slidesToShow:2,
    slidesToScroll:1,
    prevArrow: '<button class="slide-arrow prev-arrow"></button>',
      nextArrow: '<button class="slide-arrow next-arrow"></button>',
     responsive:[
      {
      breakpoint:992,
      settings:{
            slidesToShow:2,
            dots: false,
        }
        },
        {
         breakpoint:768,
         settings:{
          slidesToShow:1,
          dots: false,
         }
       }
     ]

   })
  $('.nail-polish-bottles-slider').slick({
    autoplay:false,
    slidesToShow:5,
    slidesToScroll:1,
    prevArrow: '<button class="slide-arrow prev-arrow"></button>',
      nextArrow: '<button class="slide-arrow next-arrow"></button>',
     responsive:[
      {
      breakpoint:992,
      settings:{
            slidesToShow:3,
            dots: false,
        }
        },
        /*{
         breakpoint:768,
         settings:{
          slidesToShow:1,
          dots: false,
         }
       }*/
       {
          breakpoint: 600,
          settings: "unslick"
        }
     ]

   })
    
    $('.banner-slider').slick({
    	autoplay: false,
      dots: false,
      prevArrow: '<button class="slide-arrow prev-arrow"></button>',
      nextArrow: '<button class="slide-arrow next-arrow"></button>',
    });

    var headerH = $(".header").height();
    $(".banner-top-navigation").css('margin-top', headerH);
    /***********Menu*************/   

    (() =>{
     
      const openNavMenu = document.querySelector(".open-nav-menu"),
      closeNavMenu = document.querySelector(".close-nav-menu"),
      navMenu = document.querySelector(".nav-menu"),
      menuOverlay = document.querySelector(".menu-overlay"),
      mediaSize = 991;

      openNavMenu.addEventListener("click", toggleNav);
      closeNavMenu.addEventListener("click", toggleNav);
      // close the navMenu by clicking outside
      menuOverlay.addEventListener("click", toggleNav);

      function toggleNav() {
        navMenu.classList.toggle("open");
        menuOverlay.classList.toggle("active");
        document.body.classList.toggle("hidden-scrolling");
      }

      navMenu.addEventListener("click", (event) =>{
          if(event.target.hasAttribute("data-toggle") && 
            window.innerWidth <= mediaSize){
            // prevent default anchor click behavior
            event.preventDefault();
            const menuItemHasChildren = event.target.parentElement;
            // if menuItemHasChildren is already expanded, collapse it
            if(menuItemHasChildren.classList.contains("active")){
              collapseSubMenu();
            }
            else{
              // collapse existing expanded menuItemHasChildren
              if(navMenu.querySelector(".menu-item-has-children.active")){
              collapseSubMenu();
              }
              // expand new menuItemHasChildren
              menuItemHasChildren.classList.add("active");
              const subMenu = menuItemHasChildren.querySelector(".sub-menu");
              subMenu.style.maxHeight = subMenu.scrollHeight + "px";
            }
          }
      });
      function collapseSubMenu(){
        navMenu.querySelector(".menu-item-has-children.active .sub-menu")
        .removeAttribute("style");
        navMenu.querySelector(".menu-item-has-children.active")
        .classList.remove("active");
      }
      function resizeFix(){
         // if navMenu is open ,close it
         if(navMenu.classList.contains("open")){
          toggleNav();
         }
         // if menuItemHasChildren is expanded , collapse it
         if(navMenu.querySelector(".menu-item-has-children.active")){
              collapseSubMenu();
         }
      }

      window.addEventListener("resize", function(){
         if(this.innerWidth > mediaSize){
          resizeFix();
         }
      });

    })();


    /***********Menu*************/
//     $(window).scroll(function(){
//   var sticky = $('.product-banner'),
//       scroll = $(window).scrollTop();

//   if (scroll >= 100) {
//     sticky.addClass('fixed');
//   }
//   else {
//     sticky.removeClass('fixed');
//   }
// });
var productH = $('.product-banner').height();
$(".margin-top").css("margin-top",productH);
$(window).scroll(function(){
  if ($(window).scrollTop() >= 10) {
    $('.product-banner').addClass('fixed');
    $(".margin-top").css("margin-top",productH);
   }
   else {
    $('.product-banner').removeClass('fixed');
   }
});


    
});


