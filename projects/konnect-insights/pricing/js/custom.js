var scroll_start = 0;
   var startchange = $('#startchange');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".top-bar").hide('slow');
         
       } 

       else {
         $(".top-bar").show('slow');
         
       }
   });
    }

    $(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 6,
      itemsDesktop : [1199,6],
      itemsDesktopSmall : [979,4],
      itemsMobile :[500,2]
 
  });
 
});


