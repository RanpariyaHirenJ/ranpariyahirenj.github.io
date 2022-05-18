$(document).ready(function() {

	$('.cutting-edge-slider').slick({
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

   $('.advance-analytics-slider').slick({
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
       	}
        },
        {
         breakpoint:768,
         settings:{
          slidesToShow:1,
         }
  	   }
     ]

   })

  $('.awards-slider').slick({
    autoplay:true,
    slidesToShow:4,
    slidesToScroll:1,
    speed: 300,
    autoplaySpeed: 1000,
    prevArrow:".prev-btn",
    nextArrow:".next-btn",
     responsive:[
      {
      breakpoint:1366,
      settings:{
            slidesToShow:4,
        }
        },
        
      {
      breakpoint:992,
      settings:{
            slidesToShow:3,
        }
        },
        {
         breakpoint:768,
         settings:{
          slidesToShow:2,
         }
       }
     ]

   });

  $('.our-partners-slider').slick({
    autoplay:true,
    slidesToShow:5,
    slidesToScroll:1,
    speed: 300,
    autoplaySpeed: 1000,
    dots: true,
    prevArrow:".prev-btn",
    nextArrow:".next-btn",
     responsive:[
      {
      breakpoint:1366,
      settings:{
            slidesToShow:3,
        }
        },
        
      {
      breakpoint:992,
      settings:{
            slidesToShow:2,
        }
        },
        {
         breakpoint:768,
         settings:{
          slidesToShow:1,
         }
       }
     ]

   });

  $('.digital-transformation-slider').slick({
    autoplay:true,
    slidesToShow:5,
    slidesToScroll:1,
    prevArrow:".prev-btn",
    nextArrow:".next-btn",
     responsive:[
      {
      breakpoint:1366,
      settings:{
            slidesToShow:3,
        }
        },
        
      {
      breakpoint:992,
      settings:{
            slidesToShow:2,
        }
        },
        {
         breakpoint:768,
         settings:{
          slidesToShow:1,
         }
       }
     ]

   });
   $('.innovative-cloud-slider').slick({
     autoplay:true,
     slidesToShow:5,
     slidesToScroll:1,
     prevArrow:".prev-btn",
     nextArrow:".next-btn",
      responsive:[
       {
       breakpoint:1366,
       settings:{
             slidesToShow:3,
         }
         },
         
       {
       breakpoint:992,
       settings:{
             slidesToShow:2,
         }
         },
         {
          breakpoint:768,
          settings:{
           slidesToShow:1,
          }
        }
      ]
 
    });
  $('.testimonials-slider').slick({
    autoplay:true,
    slidesToShow:1,
    slidesToScroll:1,
    dots: true,
    prevArrow:".prev-btn",
    nextArrow:".next-btn"

   });
    
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

    
});


