$(document).ready(function() {

	
    $('.banner-slider').slick({
    	autoplay: false,
      dots: false,
      prevArrow: '<button class="slide-arrow prev-arrow"></button>',
      nextArrow: '<button class="slide-arrow next-arrow"></button>',
    });

    $('.unlimited-classes-slider').slick({
    autoplay:true,
    slidesToShow:3,
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

    $('.expert-trainers-slider').slick({
    autoplay:true,
    slidesToShow:3,
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
     $('.training-video-slider').slick({
        centerMode: true,
        centerPadding: '400px',
        slidesToShow: 1,
        responsive: [
          {
            breakpoint: 1367,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '200px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });

  $('.all-trainer-slider').slick({
    autoplay:true,
    slidesToShow:1,
    slidesToScroll:1,
    dots: true,
    prevArrow:".prev-btn",
    nextArrow:".next-btn"

  });
  $('.clients-say-slider').slick({
    autoplay:true,
    slidesToShow:1,
    slidesToScroll:1,
    dots: true,
    prevArrow:".prev-btn",
    nextArrow:".next-btn"

  });
  $('.belly-dancing-class-slider').slick({
    autoplay:true,
    slidesToShow:1,
    slidesToScroll:1,
    dots: true,
    prevArrow:".prev-btn",
    nextArrow:".next-btn"

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


