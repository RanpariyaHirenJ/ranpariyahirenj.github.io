/*Doucment resize Function*/
$(window).resize(function () {
	//location.reload();
  fixedFooter();
})
/*Docuemnt load function*/
$(window).load(function () {
  fixedFooter()
  $('.loader').fadeOut();
})
/*Ready Funtion*/
$(function () {
  fixedFooter()
  $('.input-type-select span').click(function () {
    $(this).parents('.input-type-select').find('select').trigger('click');
  })
  /*Back to top Function start*/
  $('body').append('<div class="scrollTop"><a href="javascript:void(0)"></a></div>');
//  $('body').append('<div id="empDtlError" class="overlay-box"><div class="seisson-message error"><span></span> Overlay id is not defined </div></div>');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scrollTop').fadeIn();
    } else {
      $('.scrollTop').fadeOut();
    }
  });
  $(document).on('click', '.scrollTop a', function () {
    $('body,html').animate({scrollTop: 0}, 800);
  });
  /*Back to top Function End*/
  
  /*Header footer loading*/
  /*accordion start*/
  $('.accordion dl dt').click(function () {
    var trigger = $(this);
    var target = trigger.next('dd');
    if (target.css('display') == 'none')
    {
      $('.accordion dl').removeClass('active')
      $('.accordion dl dd').slideUp();
      target.slideDown();
      trigger.parents('dl').addClass('active');
    }
    else
    {
      $('.accordion dl').removeClass('active')
      $('.accordion dl dd').slideUp();
    }
  });
  /*accordion start*/
		
	/*Animate label form*/
		$('.animate-label .input-group').click(function(){
		 if ($(this).find('select').size() > 0) {
        // $(this).find('label').addClass('active');
         
        // var id = $(this).find('select').attr('id');
        // console.log(id);
          
         
        }  else {
                $(this).find('input').focus();
                $(this).find('label').addClass('active');
          
        }     
        if ($(this).find('.custom-select-options,.custom-selct-bg').size() > 0) {
				$(this).find('.custom-select-options,.custom-selct-bg').fadeIn();
		}
       
	});
	$('.animate-label .input-group input,.animate-label .input-group textarea').blur(function(){
		if (this.value.length > 0) {
			return false;
		}
		else
		{
			$(this).prev('label').removeClass('active');
		}
		});
  
    $('.input-group').on('focus', 'input, select, textarea', function () {
        $(this).prev('label').addClass('active');
    });
	
  $('.input-group textarea, .input-group input,.input-group select').each(function () {
        if (this.value.length > 0) {
            var div = $(this).prev('label').addClass('active');
        }
    });
		$('.input-group').click(function(){
			$(this).find('input').focus();
			$(this).find('label').addClass('active');
    });
	/*Animate label form*/

});


$(document).ready(function(){
  // Add smooth scrolling to all links
  //sessionStorage.removeItem('finlinea_product');
  //sessionStorage.removeItem('karela_total_price');
  //sessionStorage.removeItem('aloevera_total_price');
  //sessionStorage.removeItem('jamun_total_price');
  if (sessionStorage.getItem('finlinea_product') != null) {
	    var productarray = JSON.parse(sessionStorage.getItem('finlinea_product'));
		var product_array = productarray;
  }
  else
  {
		var product_array = new Array();  
  }
  
  $(".benefits-aloe-vera-info li p sup a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  if (sessionStorage.getItem('finlinea_product') != null) {
	  var product_item = JSON.parse(sessionStorage.getItem("finlinea_product"));
	  //alert(product_item);
	  var i;
	  var a;
	  
	  //if(product_item.length > 1){ $('.discount-cntr').show(); } else { $('.discount-cntr').hide(); }
	
	  var total_price = 0;  
	  for (i = 0; i < product_item.length; i++) {
		    if (product_item[i] == "Aloe Vera Juice"){
				  if (sessionStorage.getItem('aloevera_total_price') != null) {
					  aloevera_total_price = sessionStorage.getItem('aloevera_total_price');
				  }
				  else {
					  aloevera_total_price = 275;
				  }
				  total_price = total_price + parseInt(aloevera_total_price);	
				  
				  var page_link = "products/aloe-vera-juice.html";
				  var img_name = "healthwits-aloe-vera-juice.png";
				  var prod_price = "Rs.275/-";
				  $('.cartproduct-cntr').find('.aloevara').parent().css("opacity", "0.4");
              	  $('.cartproduct-cntr').find('.aloevara').parent().css("cursor", "pointer");
				  var productname = "<input type='hidden' name='aloe_vera_name' value='Aloe Vera Juice'>";
				  var productprice = "<input type='hidden' name='aloe_vera_price' value='275'>";
				  var producttotalprice = "<input type='hidden' name='aloe_vera_totalprice' class='aloevera_totalprice' value='"+aloevera_total_price+"'>";
				  var prod_qty = "<select name='aloe_vera_qty' class='aloe_vera_qty' id='aloe_vera_qty'>";
				  for (a = 1; a < 51; a++) {
				   prod_qty = prod_qty.concat("<option>"+a+"</option>");
				  }
				  prod_qty = prod_qty.concat("</select>");
				  
				  var prod_qty1 = "<select name='aloe_vera_qty' class='aloe_vera_qty'>";
				  for (a = 1; a < 51; a++) {
				   prod_qty1 = prod_qty1.concat("<option>"+a+"</option>");
				  }
				  prod_qty1 = prod_qty1.concat("</select>");
				  
				  product_class = 'aloevera';
				  product_totalprice = aloevera_total_price;
			}
			else if (product_item[i] == "Karela Juice"){
				  var karela_total_price = 255;
				  if (sessionStorage.getItem('karela_total_price') != null) {
					  karela_total_price = sessionStorage.getItem('karela_total_price');
				  }
				  else
				  {
					  karela_total_price = 255;
				  }
				  total_price = total_price + parseInt(karela_total_price);
				  
				  var page_link = "products/karela-juice.html";
				  var img_name = "healthwits-karela-juice.png";
				  var prod_price = "Rs.255/-";
				  $('.cartproduct-cntr').find('.karela').parent().css("opacity", "0.4");
              	  $('.cartproduct-cntr').find('.karela').parent().css("opacity", "0.4");
				  var productname = "<input type='hidden' name='karela_name' value='Karela Juice'>";
				  var productprice = "<input type='hidden' name='karela_price' value='255'>";
				  var producttotalprice = "<input type='hidden' name='karela_totalprice' class='karela_totalprice' value='"+karela_total_price+"'>";
				  var prod_qty = "<select name='karela_qty' class='karela_qty' id='karela_qty'>";
				  for (a = 1; a < 51; a++) {
				   prod_qty = prod_qty.concat("<option>"+a+"</option>");
				  }
				  prod_qty = prod_qty.concat("</select>");
				  
				  var prod_qty1 = "<select name='karela_qty' class='karela_qty'>";
				  for (a = 1; a < 51; a++) {
				   prod_qty1 = prod_qty1.concat("<option>"+a+"</option>");
				  }
				  prod_qty1 = prod_qty1.concat("</select>");
				  
				  product_class = 'karela';
				  product_totalprice = karela_total_price;
			}
			else {
				  if (sessionStorage.getItem('jamun_total_price') != null) {
					  jamun_total_price = sessionStorage.getItem('jamun_total_price');
				  }
				  else
				  {
					  jamun_total_price = 255;
				  }
				  total_price = total_price + parseInt(jamun_total_price);
				  
				  var page_link = "products/jamun-juice.html";
				  var img_name = "healthwits-jamun-juice.png";
				  var prod_price = "Rs.255/-";
				  $('.cartproduct-cntr').find('.jamun').parent().css("opacity", "0.4");
                  $('.cartproduct-cntr').find('.jamun').parent().css("opacity", "0.4");
				  var productname = "<input type='hidden' name='jamun_name' value='Jamun Juice'>";
				  var productprice = "<input type='hidden' name='jamun_price' value='255'>";
				  var producttotalprice = "<input type='hidden' name='jamun_totalprice' class='jamun_totalprice' value='"+jamun_total_price+"'>";
				  var prod_qty = "<select name='jamun_qty' class='jamun_qty' id='jamun_qty'>";
				  for (a = 1; a < 51; a++) {
				   prod_qty = prod_qty.concat("<option>"+a+"</option>");
				  }
				  prod_qty = prod_qty.concat("</select>");
				  
				  var prod_qty1 = "<select name='jamun_qty' class='jamun_qty'>";
				  for (a = 1; a < 51; a++) {
				   prod_qty1 = prod_qty1.concat("<option>"+a+"</option>");
				  }
				  prod_qty1 = prod_qty1.concat("</select>");
				  
				  product_class = 'jamun';
				  product_totalprice = jamun_total_price;
			}
			
			/*if (product_item[i] == "Aloe Vera Juice"){
				$('.cartproduct-cntr').find('.aloevara').parent().css("opacity", "0.4");
              	$('.cartproduct-cntr').find('.aloevara').parent().css("cursor", "pointer");
			}
			else if (product_item[i] == "Karela Juice"){
				
				$('.cartproduct-cntr').find('.karela').parent().css("opacity", "0.4");
              	$('.cartproduct-cntr').find('.karela').parent().css("opacity", "0.4");
			}
			else {
				$('.cartproduct-cntr').find('.jamun').parent().css("opacity", "0.4");
                $('.cartproduct-cntr').find('.jamun').parent().css("opacity", "0.4");
			}*/
			  
			$('.product-description-healthwits-cntr').show();
			$('.personal-information').show();

			var add_row = $('<li><div class="grid-4 text-center"><i><a href='+page_link+' target="_blank"><img src="images/'+img_name+'"></i></a></div>' +
								'<div class="grid-4">' + product_item[i] + '</div>' +
								'<div class="grid-4 ' + product_class + '_unit_price">' + prod_price + '</div>' +
								'<div class="grid-4">' + productname + productprice + producttotalprice + prod_qty + '</div>' +
								'<div class="grid-4 ' + product_class + '_total_price">Rs.' + product_totalprice + '/-</div>' +
								'<div class="grid-4"><a href="javascript:void(0)" class="delete-link"><i class="delete-icon"></i><p>Remove</p></a></div></li>')
	
			$('.shopping-cart-cntr .product-description-healthwits-info').find('ul').append(add_row);
			
			if (sessionStorage.getItem('aloevera_quantity') != null) {
				$('.aloe_vera_qty option').filter(function () { return $(this).val() == sessionStorage.getItem('aloevera_quantity') }).prop('selected', true);
			}
			if (sessionStorage.getItem('karela_quantity') != null) {
				$('.karela_qty option').filter(function () { return $(this).val() == sessionStorage.getItem('karela_quantity') }).prop('selected', true);
			}
			if (sessionStorage.getItem('jamun_quantity') != null) {
				$('.jamun_qty option').filter(function () { return $(this).val() == sessionStorage.getItem('jamun_quantity') }).prop('selected', true);
			}
			
			if(product_item.length > 1){ 
				$('.discount-cntr').show();
				var discount_value = parseFloat((total_price/100)*10).toFixed(2); 
		    } 
		    else {
				 if (sessionStorage.getItem('aloevera_quantity') != null && sessionStorage.getItem('aloevera_quantity') > 1){
					 $('.discount-cntr').show();
					 var discount_value = parseFloat((total_price/100)*10).toFixed(2); 
				 }
				 else if (sessionStorage.getItem('karela_quantity') != null && sessionStorage.getItem('karela_quantity') > 1){
					 $('.discount-cntr').show();
					 var discount_value = parseFloat((total_price/100)*10).toFixed(2); 
				 }
				 else if (sessionStorage.getItem('jamun_quantity') != null && sessionStorage.getItem('jamun_quantity') > 1){
					 $('.discount-cntr').show();
					 var discount_value = parseFloat((total_price/100)*10).toFixed(2); 
				 }
				 else
				 {
					 $('.discount-cntr').hide();
					 var discount_value = 0; 
				 }
			}
			
		    var payment_value = parseFloat(total_price - discount_value).toFixed(2);
		  
		    $('.totalprice-price').html('Rs.'+total_price+'/-');
		    $('.discount-price').html('Rs.'+discount_value+'/-');
		    $('.grand-price').html('Rs.'+payment_value+'/-');
			
			$('.grand_total_val').val(total_price);
	  		$('.discount_val').val(discount_value);
      		$('.payable_amount').val(payment_value);
				   
			if ($(window).width() < 1024)
          	{
				var add_prod_row = $('<li><div class="productimg"><a href='+page_link+' target="_blank"><img src="images/'+img_name+'" alt="Aloe Vera Juice"></a></div>'+
            	                   '<div class="productdetails">'+
                                   '<p>' + product_item[i] + '</p>' +
                                   '<p class= '+ product_class +'_unit_price>Unit Price '+ prod_price +'</p>' +
                                   '<p>Qty '+ productname + productprice + producttotalprice + prod_qty1 +'</p>'+
                                   '<p class='+ product_class +'_total_price>Total Price Rs.'+ product_totalprice +'/-</p>' +
                                   '</div>'+
            	                   '<div class="productremove"><a href="javascript:void(0)" class="delete-link"><i class="delete-icon"></i><p>Remove</p></a></div>' + '</li>')
                 
				 $('.product-description-mob-cntr').find('ul').append(add_prod_row)
				 $('.product-description-mob-cntr').show();
				 
				 if (sessionStorage.getItem('aloevera_quantity') != null) {
					$('.aloe_vera_qty option').filter(function () { return $(this).val() == sessionStorage.getItem('aloevera_quantity') }).prop('selected', true);
				 }
				 if (sessionStorage.getItem('karela_quantity') != null) {
					$('.karela_qty option').filter(function () { return $(this).val() == sessionStorage.getItem('karela_quantity') }).prop('selected', true);
				 }
				 if (sessionStorage.getItem('jamun_quantity') != null) {
					$('.jamun_qty option').filter(function () { return $(this).val() == sessionStorage.getItem('jamun_quantity') }).prop('selected', true);
				 }
				 
				 if(product_item.length > 1){
					$('.discount-cntr').show();
					var discount_value = parseFloat((total_price/100)*10).toFixed(2); 
				 } 
				 else {
					 if (sessionStorage.getItem('aloevera_quantity') != null && sessionStorage.getItem('aloevera_quantity') > 1){
						 $('.discount-cntr').show();
						 var discount_value = parseFloat((total_price/100)*10).toFixed(2); 
					 }
					 else if (sessionStorage.getItem('karela_quantity') != null && sessionStorage.getItem('karela_quantity') > 1){
						 $('.discount-cntr').show();
						 var discount_value = parseFloat((total_price/100)*10).toFixed(2); 
					 }
					 else if (sessionStorage.getItem('jamun_quantity') != null && sessionStorage.getItem('jamun_quantity') > 1){
						 $('.discount-cntr').show();
						 var discount_value = parseFloat((total_price/100)*10).toFixed(2); 
					 }
					 else
					 {
						 $('.discount-cntr').hide();
						 var discount_value = 0; 
					 }
				 }
			}
		}
  }
  
  //$('.product-description-mob-cntr').hide()
  if ($('.product-description-healthwits-cntr').find('.product-description-healthwits-info ul').find('li').length == 1) {
      $('.product-description-healthwits-cntr').hide();
      $('.personal-information').hide();
	  if ($(window).width() < 1024){
		  $('.product-description-mob-cntr').hide();
	  }
  }

  $(document).on('click', '.delete-link', function () {

          if ($(this).parents('li').find('div:eq(1)').html() == "Aloe Vera Juice")
          {
              $('.cartproduct-cntr').find('.aloevara').parent().css("opacity", "")
              $('.cartproduct-cntr').find('.aloevara').parent().css("cursor", "pointer")
			  if(jQuery.inArray("Aloe Vera Juice", product_array) > -1) {
				  var index = product_array.indexOf('Aloe Vera Juice');
 				  if (index > -1) { 
				  	product_array.splice(index, 1);
					 if (sessionStorage.getItem('aloevera_total_price') != null) {
					 	 sessionStorage.removeItem('aloevera_total_price');
					 }
					 if (sessionStorage.getItem('aloevera_quantity') != null) {
					 	 sessionStorage.removeItem('aloevera_quantity');
					 }
				  }
			  }
          }

          if ($(this).parents('li').find('div:eq(1)').html() == "Karela Juice") {
              $('.cartproduct-cntr').find('.karela').parent().css("opacity", "")
              $('.cartproduct-cntr').find('.karela').parent().css("cursor", "pointer")
			  if(jQuery.inArray("Karela Juice", product_array) > -1) {
				  var index = product_array.indexOf('Karela Juice');
				  if (index > -1) {
					   product_array.splice(index, 1);
					   if (sessionStorage.getItem('karela_total_price') != null) {
					  		sessionStorage.removeItem('karela_total_price');
					   }
					   if (sessionStorage.getItem('karela_quantity') != null) {
					  		sessionStorage.removeItem('karela_quantity');
					   }
				  }
			  }
          }

          if ($(this).parents('li').find('div:eq(1)').html() == "Jamun Juice") {
              $('.cartproduct-cntr').find('.jamun').parent().css("opacity", "")
              $('.cartproduct-cntr').find('.jamun').parent().css("cursor", "pointer")
			  if(jQuery.inArray("Jamun Juice", product_array) > -1) {
				  var index = product_array.indexOf('Jamun Juice');
 				  if (index > -1) {
					  product_array.splice(index, 1);
					  if (sessionStorage.getItem('jamun_total_price') != null) {
					  		sessionStorage.removeItem('jamun_total_price');
					  }
					  if (sessionStorage.getItem('jamun_quantity') != null) {
					  		sessionStorage.removeItem('jamun_quantity');
					  }
				  }
			  }
          }
		
		  if(product_array.length > 0){   
			   sessionStorage.setItem("finlinea_product", JSON.stringify(product_array));
			   var product_item = JSON.parse(sessionStorage.getItem("finlinea_product"));
			   aloevera_total_price = 0;
			   karela_total_price = 0;
			   jamun_total_price = 0;
			   for (i = 0; i < product_item.length; i++) {
				   if (product_item[i] == "Aloe Vera Juice"){
					   aloevera_total_price = $('.aloevera_totalprice').val();
				   }
				   else if (product_item[i] == "Karela Juice"){
					   karela_total_price = $('.karela_totalprice').val();
				   }
				   else if (product_item[i] == "Jamun Juice"){
					   jamun_total_price = $('.jamun_totalprice').val();
				   }
				   var total_price = parseInt(aloevera_total_price) + parseInt(karela_total_price) + parseInt(jamun_total_price);
				   
				   if(product_item.length > 1){ 
						$('.discount-cntr').show();
						var discount_value = parseFloat((total_price/100)*10).toFixed(2); 
				   } 
				   else { 
						$('.discount-cntr').hide();
						var discount_value = 0;
				   }
				   
				   if(product_array.length > 1){ 
					$('.discount-cntr').show();
					var discount_value = parseFloat((total_price/100)*10).toFixed(2); 
				   } 
				   else {
						if (sessionStorage.getItem('aloevera_quantity') != null && sessionStorage.getItem('aloevera_quantity') > 1 ){
							$('.discount-cntr').show();
							var discount_value = parseFloat((total_price/100)*10).toFixed(2); 
						}
						else if (sessionStorage.getItem('karela_quantity') != null && sessionStorage.getItem('karela_quantity') > 1){
							 $('.discount-cntr').show();
							 var discount_value = parseFloat((total_price/100)*10).toFixed(2); 
						}
						else if (sessionStorage.getItem('jamun_quantity') != null && sessionStorage.getItem('jamun_quantity') > 1){
							 $('.discount-cntr').show();
							 var discount_value = parseFloat((total_price/100)*10).toFixed(2); 
						}
						else
						{
							$('.discount-cntr').hide();
							var discount_value = 0; 
						}
				   }
					
				   var payment_value = parseFloat(total_price - discount_value).toFixed(2);
				  
				   $('.totalprice-price').html('Rs.'+total_price+'/-');
				   $('.discount-price').html('Rs.'+discount_value+'/-');
				   $('.grand-price').html('Rs.'+payment_value+'/-');
				   
				   $('.grand_total_val').val(total_price);
				   $('.discount_val').val(discount_value);
				   $('.payable_amount').val(payment_value);
			   }
			   
			   //alert(sessionStorage.getItem('finlinea_product'));
		  }else{
			   //alert("Array Empty");
    	 	   sessionStorage.removeItem('finlinea_product');
		  }
		  
		  $(this).parents('li').remove();

          if ($(window).width() < 1024) {
              if ($('.product-description-healthwits-cntr').find('.product-description-healthwits-info li').length == "2") {
                  $('.product-description-healthwits-info').css("width", "100%")
              }
              else if ($('.product-description-healthwits-cntr').find('.product-description-healthwits-info li').length == "3") {
                  $('.product-description-healthwits-info').css("width", "150%")
              }
              else if ($('.product-description-healthwits-cntr').find('.product-description-healthwits-info li').length == "4") {
                  $('.product-description-healthwits-info').css("width", "200%")
              }

              if ($(this).parents('li').find('div:eq(1) p').html() == "Aloe Vera Juice") {
				  $('.product-description-healthwits-info li').find('.aloevera_unit_price').parents('li').remove();
                  $('.cartproduct-cntr').find('.aloevara').parent().css("opacity", "")
                  $('.cartproduct-cntr').find('.aloevara').parent().css("cursor", "pointer")
				  if(jQuery.inArray("Aloe Vera Juice", product_array) > -1) {
					  var index = product_array.indexOf('Aloe Vera Juice');
					  if (index > -1) { 
					  	 product_array.splice(index, 1);
						 if (sessionStorage.getItem('aloevera_total_price') != null) {
					 	     sessionStorage.removeItem('aloevera_total_price');
						 }
						 if (sessionStorage.getItem('aloevera_quantity') != null) {
							 sessionStorage.removeItem('aloevera_quantity');
						 }
					  }
				  }
              }

              if ($(this).parents('li').find('div:eq(1) p').html() == "Karela Juice") {
				  $('.product-description-healthwits-info li').find('.karela_unit_price').parents('li').remove();
                  $('.cartproduct-cntr').find('.karela').parent().css("opacity", "")
                  $('.cartproduct-cntr').find('.karela').parent().css("cursor", "pointer")
				  if(jQuery.inArray("Karela Juice", product_array) > -1) {
					  var index = product_array.indexOf('Karela Juice');
					  if (index > -1) { 
					  	product_array.splice(index, 1); 
						if (sessionStorage.getItem('karela_total_price') != null) {
					  		sessionStorage.removeItem('karela_total_price');
					    }
					    if (sessionStorage.getItem('karela_quantity') != null) {
					  		sessionStorage.removeItem('karela_quantity');
					    }
					  }
				  }
              }

              if ($(this).parents('li').find('div:eq(1) p').html() == "Jamun Juice") {
				  $('.product-description-healthwits-info li').find('.jamun_unit_price').parents('li').remove();
                  $('.cartproduct-cntr').find('.jamun').parent().css("opacity", "")
                  $('.cartproduct-cntr').find('.jamun').parent().css("cursor", "pointer")
				  if(jQuery.inArray("Jamun Juice", product_array) > -1) {
					  var index = product_array.indexOf('Jamun Juice');
					  if (index > -1) { 
					  	 product_array.splice(index, 1); 
						 if (sessionStorage.getItem('jamun_total_price') != null) {
					  		 sessionStorage.removeItem('jamun_total_price');
					     }
					     if (sessionStorage.getItem('jamun_quantity') != null) {
					  		 sessionStorage.removeItem('jamun_quantity');
					     }
					  }
				  }
              }

              if ($('.product-description-mob-cntr').find('ul li').length == 0) {
                  $('.product-description-mob-cntr').hide();
                  $('.personal-information').hide();
              }
			  
			  if(product_array.length > 0){   
				 sessionStorage.setItem("finlinea_product", JSON.stringify(product_array));
				 var product_item = JSON.parse(sessionStorage.getItem("finlinea_product"));
				 aloevera_total_price = 0;
				 karela_total_price = 0;
				 jamun_total_price = 0;
				 for (i = 0; i < product_item.length; i++) {
					   if (product_item[i] == "Aloe Vera Juice"){
						   aloevera_total_price = $('.aloevera_totalprice').val();
					   }
					   else if (product_item[i] == "Karela Juice"){
						   karela_total_price = $('.karela_totalprice').val();
					   }
					   else if (product_item[i] == "Jamun Juice"){
						   jamun_total_price = $('.jamun_totalprice').val();
					   }
					   var total_price = parseInt(aloevera_total_price) + parseInt(karela_total_price) + parseInt(jamun_total_price);
					   if(product_item.length > 1){ 
							$('.discount-cntr').show();
							var discount_value = parseFloat((total_price/100)*10).toFixed(2); 
					   } 
					   else { 
							$('.discount-cntr').hide();
							var discount_value = 0;
					   }
					   
					   if(product_array.length > 1){ 
						$('.discount-cntr').show();
						var discount_value = parseFloat((total_price/100)*10).toFixed(2); 
						} 
						else {
							if (sessionStorage.getItem('aloevera_quantity') != null && sessionStorage.getItem('aloevera_quantity') > 1 ){
								$('.discount-cntr').show();
								var discount_value = parseFloat((total_price/100)*10).toFixed(2); 
							}
							else if (sessionStorage.getItem('karela_quantity') != null && sessionStorage.getItem('karela_quantity') > 1){
								 $('.discount-cntr').show();
								 var discount_value = parseFloat((total_price/100)*10).toFixed(2); 
							}
							else if (sessionStorage.getItem('jamun_quantity') != null && sessionStorage.getItem('jamun_quantity') > 1){
								 $('.discount-cntr').show();
								 var discount_value = parseFloat((total_price/100)*10).toFixed(2); 
							}
							else
							{
								$('.discount-cntr').hide();
								var discount_value = 0; 
							}
						}
					
					   var payment_value = parseFloat(total_price - discount_value).toFixed(2);
					   $('.totalprice-price').html('Rs.'+total_price+'/-');
					   $('.discount-price').html('Rs.'+discount_value+'/-');
					   $('.grand-price').html('Rs.'+payment_value+'/-');
					   
					   $('.grand_total_val').val(total_price);
				   	   $('.discount_val').val(discount_value);
				       $('.payable_amount').val(payment_value);
				 }
			  	 //alert(sessionStorage.getItem('finlinea_product'));
			  }else{
				 //alert("Array Empty");
    			 sessionStorage.removeItem('finlinea_product');
			  }
			}

          if ($('.product-description-healthwits-cntr').find('.product-description-healthwits-info ul').find('li').length == 1)
          {
              $('.product-description-healthwits-cntr').hide();
     	      $('.personal-information').hide();
          }
  })

  $('.cartproduct-cntr').find('li').click(function () {
      
	  if ($(this).css('opacity') != '0.4')
      {
		  var prod_name = $(this).find('p').html()
		  if (prod_name == "Aloe Vera Juice")
          {
			  var page_link = "products/aloe-vera-juice.html";
              var img_name = "healthwits-aloe-vera-juice.png"
			  var prod_price = "Rs.275/-"
			  product_array.push("Aloe Vera Juice");
			  var productname = "<input type='hidden' name='aloe_vera_name' value='Aloe Vera Juice'>";
			  var productprice = "<input type='hidden' name='aloe_vera_price' value='275'>";
			  var producttotalprice = "<input type='hidden' name='aloe_vera_totalprice' class='aloevera_totalprice' value='275'>";
			  var prod_qty = "<select name='aloe_vera_qty' class='aloe_vera_qty' id='aloe_vera_qty'>";
			  for (var a = 1; a < 51; a++) {
			   prod_qty = prod_qty.concat("<option>"+a+"</option>");
			  }
			  prod_qty = prod_qty.concat("</select>");
			  
			  var prod_qty1 = "<select name='aloe_vera_qty' class='aloe_vera_qty'>";
			  for (var a = 1; a < 51; a++) {
			   prod_qty1 = prod_qty1.concat("<option>"+a+"</option>");
			  }
			  prod_qty1 = prod_qty1.concat("</select>");
			  
			  product_class = 'aloevera';
			  aloevera_total_price = 275;
			  sessionStorage.setItem('aloevera_quantity', 1);
			  sessionStorage.setItem("aloevera_total_price", aloevera_total_price);
		  }
          else if (prod_name == "Karela Juice")
          {
			  var page_link = "products/karela-juice.html";
              var img_name = "healthwits-karela-juice.png"
			  var prod_price = "Rs.255/-"
			  product_array.push("Karela Juice");
			  var productname = "<input type='hidden' name='karela_name' value='Karela Juice'>";
			  var productprice = "<input type='hidden' name='karela_price' value='255'>";
			  var producttotalprice = "<input type='hidden' name='karela_totalprice' class='karela_totalprice' value='255'>";
			  var prod_qty = "<select name='karela_qty' class='karela_qty' id='karela_qty'>";
			  for (var a = 1; a < 51; a++) {
			   prod_qty = prod_qty.concat("<option>"+a+"</option>");
			  }
			  prod_qty = prod_qty.concat("</select>");
			  
			  var prod_qty1 = "<select name='karela_qty' class='karela_qty'>";
			  for (var a = 1; a < 51; a++) {
			   prod_qty1 = prod_qty1.concat("<option>"+a+"</option>");
			  }
			  prod_qty1 = prod_qty1.concat("</select>");
			  
			  product_class = 'karela';
			  karela_total_price = 255;
			  sessionStorage.setItem('karela_quantity', 1);
			  sessionStorage.setItem("karela_total_price", karela_total_price);
		  }
          else
          {
			  var page_link = "products/jamun-juice.html";
              var img_name = "healthwits-jamun-juice.png"
			  var prod_price = "Rs.255/-"
			  product_array.push("Jamun Juice");
			  var productname = "<input type='hidden' name='jamun_name' value='Jamun Juice'>";
			  var productprice = "<input type='hidden' name='jamun_price' value='255'>";
			  var producttotalprice = "<input type='hidden' name='jamun_totalprice' class='jamun_totalprice' value='255'>";
			  var prod_qty = "<select name='jamun_qty' class='jamun_qty' id='jamun_qty'>";
			  for (var a = 1; a < 51; a++) {
			   prod_qty = prod_qty.concat("<option>"+a+"</option>");
			  }
			  prod_qty = prod_qty.concat("</select>");
			  
			  var prod_qty1 = "<select name='jamun_qty' class='jamun_qty'>";
			  for (var a = 1; a < 51; a++) {
			   prod_qty1 = prod_qty1.concat("<option>"+a+"</option>");
			  }
			  prod_qty1 = prod_qty1.concat("</select>");
			  product_class = 'jamun';
			  jamun_total_price = 255;
			  sessionStorage.setItem('jamun_quantity', 1);
			  sessionStorage.setItem("jamun_total_price", jamun_total_price);
		  }
		  
		  sessionStorage.setItem("finlinea_product", JSON.stringify(product_array));
		  //alert(sessionStorage.getItem('finlinea_product'));
		  
		  var productitems = JSON.parse(sessionStorage.getItem("finlinea_product"));
	  	  
          $(this).css("opacity", "0.4")
          $(this).css("cursor", "pointer")

          $('.product-description-healthwits-cntr').show();
     	  $('.personal-information').show();

          var add_row = $('<li><div class="grid-4 text-center"><i><a href='+page_link+' target="_blank"><img src="images/'+img_name+'"></a></i></div>' +
                            '<div class="grid-4">' + prod_name + '</div>' +
                            '<div class="grid-4 ' + product_class + '_unit_price">' + prod_price + '</div>' +
                            '<div class="grid-4">' + productname + productprice + producttotalprice + prod_qty + '</div>' +
                            '<div class="grid-4 ' + product_class + '_total_price">' + prod_price + '</div>' +
                            '<div class="grid-4"><a href="javascript:void(0)" class="delete-link"><i class="delete-icon"></i><p>Remove</p></a></div></li>')

          $('.shopping-cart-cntr .product-description-healthwits-info').find('ul').append(add_row)
		
		  if (sessionStorage.getItem('aloevera_total_price') != null) { aloevera_total_price = sessionStorage.getItem('aloevera_total_price'); } else { aloevera_total_price = 0; }
		  if (sessionStorage.getItem('karela_total_price') != null) { karela_total_price = sessionStorage.getItem('karela_total_price'); } else { karela_total_price = 0; }
		  if (sessionStorage.getItem('jamun_total_price') != null) { jamun_total_price = sessionStorage.getItem('jamun_total_price'); } else { jamun_total_price = 0; }
		 
		  var total_price = parseInt(aloevera_total_price) + parseInt(karela_total_price) + parseInt(jamun_total_price);
		  if(productitems.length > 1){ 
		  		$('.discount-cntr').show();
				var discount_value = parseFloat((total_price/100)*10).toFixed(2); 
		  } 
		  else { 
		  		$('.discount-cntr').hide();
				var discount_value = 0;
		  }
		  
		  var payment_value = parseFloat(total_price - discount_value).toFixed(2);
	  
	  	  $('.totalprice-price').html('Rs.'+total_price+'/-');
	  	  $('.discount-price').html('Rs.'+discount_value+'/-');
	  	  $('.grand-price').html('Rs.'+payment_value+'/-');
	  
	  	  $('.grand_total_val').val(total_price);
		  $('.discount_val').val(discount_value);
		  $('.payable_amount').val(payment_value);
					   
          if ($(window).width() < 1024)
          {
              $('.product-description-mob-cntr').show()
              
			 //$('.product-description-mob-cntr').show();
			  var add_prod_row = $('<li><div class="productimg"><a href='+page_link+' target="_blank"><img src="images/'+img_name+'" alt="Aloe Vera Juice"></a></div>'+
            	                   '<div class="productdetails">'+
                                   '<p>' + prod_name + '</p>' +
                                   '<p class= '+ product_class +'_unit_price>Unit Price '+prod_price+'</p>' +
                                   '<p>Qty '+ productname + productprice + producttotalprice + prod_qty1 +'</p>'+
                                   '<p class='+ product_class +'_total_price>Total Price '+prod_price+'</p>' +
                                   '</div>'+
            	                   '<div class="productremove"><a href="javascript:void(0)" class="delete-link"><i class="delete-icon"></i><p>Remove</p></a></div>' + '</li>')
                                

              $('.product-description-mob-cntr').find('ul').append(add_prod_row)
			  
			  $('.totalprice-price').html('Rs.'+total_price+'/-');
	  	  	  $('.discount-price').html('Rs.'+discount_value+'/-');
	  	      $('.grand-price').html('Rs.'+payment_value+'/-');
			  
			  $('.grand_total_val').val(total_price);
		      $('.discount_val').val(discount_value);
		      $('.payable_amount').val(payment_value);
		  
              if ($('.product-description-mob-cntr').find('ul li').length == 0) {
                  $('.product-description-mob-cntr').hide();
                  $('.personal-information').hide();
              }
              //if ($('.product-description-healthwits-cntr').find('.product-description-healthwits-info li').length == "2")
              //{
              //    $('.product-description-healthwits-info').css("width", "100%")
              //}
              //else if ($('.product-description-healthwits-cntr').find('.product-description-healthwits-info li').length == "3")
              //{
              //    $('.product-description-healthwits-info').css("width", "150%")
              //}
              //else if ($('.product-description-healthwits-cntr').find('.product-description-healthwits-info li').length == "4")
              //{
              //    $('.product-description-healthwits-info').css("width", "200%")
              //}
          }
      }
  });
  
  $('#buy_aloe_vera_juice').click(function(){
	  if(jQuery.inArray("Aloe Vera Juice", product_array) === -1) {
		 product_array.push("Aloe Vera Juice");
		 aloevera_total_price = 275;
	     sessionStorage.setItem('aloevera_quantity', 1);
		 sessionStorage.setItem("aloevera_total_price", aloevera_total_price);
		 sessionStorage.setItem("finlinea_product", JSON.stringify(product_array));
	  }
  });
  
  $('#buy_karela_juice').click(function(){
	  if(jQuery.inArray("Karela Juice", product_array) === -1) {
	  	 product_array.push("Karela Juice");
		 karela_total_price = 255;
	     sessionStorage.setItem('karela_quantity', 1);
		 sessionStorage.setItem("karela_total_price", karela_total_price);
		 sessionStorage.setItem("finlinea_product", JSON.stringify(product_array));
	  }
  });
  
  $('#buy_jamun_juice').click(function(){
	  if(jQuery.inArray("Jamun Juice", product_array) === -1) {
	  	 product_array.push("Jamun Juice");
		 jamun_total_price = 255;
		 sessionStorage.setItem('jamun_quantity', 1);
		 sessionStorage.setItem("jamun_total_price", jamun_total_price);
		 sessionStorage.setItem("finlinea_product", JSON.stringify(product_array));
	  }
  });
  
  aloevera_total_price = 0;
  karela_total_price = 0;
  jamun_total_price = 0;
  //$('#aloe_vera_qty').change(function(){
  $(document).on('change','.aloe_vera_qty',function(){
	  
	  var aloe_qty = $('.aloe_vera_qty').val();
	  $('#aloe_vera_qty').val(aloe_qty);
	  var unit_price = $('[name="aloe_vera_price"]').val();
	  aloevera_total_price = unit_price * aloe_qty;
	  $('.aloevera_totalprice').val(aloevera_total_price);
	  $('.aloevera_total_price').html('Rs.'+aloevera_total_price+'/-');
	  if ($(window).width() < 1024) {
		$('.aloevera_total_price').html('Total Price Rs.'+aloevera_total_price+'/-');
	  }
	  sessionStorage.setItem("aloevera_quantity", aloe_qty);
	  sessionStorage.setItem("aloevera_total_price", aloevera_total_price);
	  
	  if (sessionStorage.getItem('aloevera_total_price') != null) { aloevera_total_price = sessionStorage.getItem('aloevera_total_price'); } else { aloevera_total_price = 0; } 
	  if (sessionStorage.getItem('karela_total_price') != null) { karela_total_price = sessionStorage.getItem('karela_total_price'); } else { karela_total_price = 0; }
	  if (sessionStorage.getItem('jamun_total_price') != null) { jamun_total_price = sessionStorage.getItem('jamun_total_price'); } else { jamun_total_price = 0; }
	  
	  var total_price = parseInt(aloevera_total_price) + parseInt(karela_total_price) + parseInt(jamun_total_price);
	  if(aloe_qty > 1){ 
	  		$('.discount-cntr').show();
			var discount_value = parseFloat((total_price/100)*10).toFixed(2); 
	  } 
	  else {
		  	var productitems = JSON.parse(sessionStorage.getItem("finlinea_product"));
			if(productitems.length > 1){
				$('.discount-cntr').show(); 
				var discount_value = parseFloat((total_price/100)*10).toFixed(2);
			}
			else {
				$('.discount-cntr').hide(); 
				var discount_value = 0;	 
			}
	  }
	  
	  var payment_value = parseFloat(total_price - discount_value).toFixed(2);
	  $('.totalprice-price').html('Rs.'+total_price+'/-');
	  $('.discount-price').html('Rs.'+discount_value+'/-');
	  $('.grand-price').html('Rs.'+payment_value+'/-');
	  
	  $('.grand_total_val').val(total_price);
	  $('.discount_val').val(discount_value);
      $('.payable_amount').val(payment_value);
	  
  });
  
  //$('#karela_qty').change(function(){
  $(document).on('change','.karela_qty',function(){
	  
	  var karela_qty = $('.karela_qty').val();
	  $('#karela_qty').val(karela_qty);
	  
	  if(karela_qty > 1){ $('.discount-cntr').show(); } else { $('.discount-cntr').hide(); }
	  
	  var unit_price = $('[name="karela_price"]').val();
	  karela_total_price = unit_price * karela_qty;
	  $('.karela_totalprice').val(karela_total_price);
	  $('.karela_total_price').html('Rs.'+karela_total_price+'/-');
	  if ($(window).width() < 1024) {
		$('.karela_total_price').html('Total Price Rs.'+karela_total_price+'/-');
	  }
	  sessionStorage.setItem("karela_quantity", karela_qty);
	  sessionStorage.setItem("karela_total_price", karela_total_price);
	  
	  if (sessionStorage.getItem('aloevera_total_price') != null) { aloevera_total_price = sessionStorage.getItem('aloevera_total_price'); } else { aloevera_total_price = 0; } 
	  if (sessionStorage.getItem('karela_total_price') != null) { karela_total_price = sessionStorage.getItem('karela_total_price'); } else { karela_total_price = 0; }
	  if (sessionStorage.getItem('jamun_total_price') != null) { jamun_total_price = sessionStorage.getItem('jamun_total_price'); } else { jamun_total_price = 0; }
	  
	  var total_price = parseInt(aloevera_total_price) + parseInt(karela_total_price) + parseInt(jamun_total_price);
	  if(karela_qty > 1){
		   	$('.discount-cntr').show();
			var discount_value = parseFloat((total_price/100)*10).toFixed(2); 
	  } 
	  else {
		  	var productitems = JSON.parse(sessionStorage.getItem("finlinea_product"));
			if(productitems.length > 1){
				$('.discount-cntr').show(); 
				var discount_value = parseFloat((total_price/100)*10).toFixed(2);
			}
			else {
	  			$('.discount-cntr').hide();
				var discount_value = 0;
			}
	  }
	  
  	  var payment_value = parseFloat(total_price - discount_value).toFixed(2);
	  
	  $('.totalprice-price').html('Rs.'+total_price+'/-');
	  $('.discount-price').html('Rs.'+discount_value+'/-');
	  $('.grand-price').html('Rs.'+payment_value+'/-');
	  
	  $('.grand_total_val').val(total_price);
	  $('.discount_val').val(discount_value);
      $('.payable_amount').val(payment_value);
  });
  
  //$('#jamun_qty').change(function(){
  $(document).on('change','.jamun_qty',function(){
	  
	  var jamun_qty = $('.jamun_qty').val();
	  $('#jamun_qty').val(jamun_qty);
	  var unit_price = $('[name="jamun_price"]').val();
	  jamun_total_price = unit_price * jamun_qty;
	  $('.jamun_totalprice').val(jamun_total_price);
	  $('.jamun_total_price').html('Rs.'+jamun_total_price+'/-');
	  if ($(window).width() < 1024) {
		$('.jamun_total_price').html('Total Price Rs.'+jamun_total_price+'/-');
	  }
	  sessionStorage.setItem("jamun_quantity", jamun_qty);
	  sessionStorage.setItem("jamun_total_price", jamun_total_price);
	  
	  if (sessionStorage.getItem('aloevera_total_price') != null) { aloevera_total_price = sessionStorage.getItem('aloevera_total_price'); } else { aloevera_total_price = 0; } 
	  if (sessionStorage.getItem('karela_total_price') != null) { karela_total_price = sessionStorage.getItem('karela_total_price'); } else { karela_total_price = 0; }
	  if (sessionStorage.getItem('jamun_total_price') != null) { jamun_total_price = sessionStorage.getItem('jamun_total_price'); } else { jamun_total_price = 0; }
	  
	  var total_price = parseInt(aloevera_total_price) + parseInt(karela_total_price) + parseInt(jamun_total_price);
	  
	  if(jamun_qty > 1){ 
	  		$('.discount-cntr').show();
			var discount_value = parseFloat((total_price/100)*10).toFixed(2);
	  } 
	  else { 
	  		var productitems = JSON.parse(sessionStorage.getItem("finlinea_product"));
			if(productitems.length > 1){
				$('.discount-cntr').show(); 
				var discount_value = parseFloat((total_price/100)*10).toFixed(2);
			}
			else {
	  			$('.discount-cntr').hide();
				var discount_value = 0;
			} 
	  }
	  
  	  var payment_value = parseFloat(total_price - discount_value).toFixed(2);
	  
	  $('.totalprice-price').html('Rs.'+total_price+'/-');
	  $('.discount-price').html('Rs.'+discount_value+'/-');
	  $('.grand-price').html('Rs.'+payment_value+'/-');
	  
	  $('.grand_total_val').val(total_price);
	  $('.discount_val').val(discount_value);
      $('.payable_amount').val(payment_value);
  });
});


function fixedFooter()
{
  $('body').css('min-height', $(window).height());
}


/*Overlay function*/
var animationIn, target, animationOut;
function overlayBox(popupID)
{
  target = $('#' + popupID)
  animationIn = target.attr('data-animation-in');
  animationOut = target.attr('data-animation-out');
  if (typeof (animationIn) == 'undefined' || animationIn === '(an empty string)' || animationIn === null || animationIn === '')
  {    
    animationIn = 'zoomIn';
  }
  if (typeof (animationOut) == 'undefined' || animationOut === '(an empty string)' || animationOut === null || animationOut === '')
  {
    animationOut = 'zoomOut';
  }
  $('body').append('<div class="overlay-bg"></div>')
  target.find('.overlay-header').append('<div class="closeBtn">X</div>');
  target.css('visibility', 'visible').css('display', 'block').find('.overlay-box').addClass('animated').addClass(animationIn);
  $(document).on('click', '.closeBtn', function () {
		
    $('.overlay').find('.overlay-box').removeClass('animated').removeClass(animationIn).addClass('animated ' + animationOut);
    $('body .overlay-bg').fadeOut(1000, function () {
      $(this).remove();
      $('.overlay').css('visibility', 'hidden').css('display', 'none').find('.overlay-box').removeClass('animated').removeClass(animationIn).removeClass(animationOut);
    });
		$(this).remove();
  });
 // $(document).on('click', '.overlay-box', function () {return false;});
  $(document).on('click', '.overlay', function () {
    $('.overlay').find('.overlay-box').removeClass('animated').removeClass(animationIn).addClass('animated ' + animationOut);
    $('body .overlay-bg').fadeOut(1000, function () {
		$('.overlay-box').find('.overlay-content').hide();
      $('.overlay').css('visibility', 'hidden').find('.overlay-box').removeClass('animated').removeClass(animationIn).removeClass(animationOut);
    });
  });
}
/*Overlay function end*/

$(function(){
	/*jQuery tabs */
/*script for append usefull element*/
$('.tabNav li').each(function(){
  var tabContent = $(this).html();
  var relation = $(this).find('a').attr('rel')
  var resultCnt =  $(this).parents('.tabNav').next('.tabResult');
  resultCnt.children('div#'+relation).prepend('<div class="mobile-menu">'+ tabContent +'</div>')
})

/*script for desktop navigation */
$('.tabNav li a').click(function(){
  var relation = $(this).attr('rel')
  var tabNavigation = $(this).parents('.tabNav')
  var resultCnt =  $(this).parents('.tabNav').next('.tabResult');
  
  tabNavigation.children().find('a').removeClass('active')
  $(this).addClass('active')
  
  if(resultCnt.children('div#'+relation).css('display') == 'none')
  {
    resultCnt.children('div').slideUp();
    resultCnt.children('div#'+relation).slideDown();
  }
  else
  {
  	resultCnt.children('div#'+relation).slideUp();
  }
})
/*jQuery tabs end */
})

function tabnextclick(relation) {
	var resultCnt = $('.tabResult');

	tab = $('.tabResult').prev('.tabNav').find('a');

	for (var i = 0; i < tab.length; i++) {
		var target = tab.eq(i);
		
		var tab_relation = target.attr('rel');
		if (tab_relation === relation) {
			tab.eq(i).parents('li').removeClass('disabled');
		}
	}
	if (resultCnt.children('div#' + relation).css('display') === 'none') {
		resultCnt.children('div').slideUp();
		$('.tabNav li a').removeClass('active');
		$('.tabNav ').find('a[rel='+relation+']').parents('li').children('a').addClass('active');
		resultCnt.children('div#' + relation).slideDown();
	}
	var ofsetd=$('.tabNav').offset().top;
	$('body,html').animate({scrollTop: ofsetd}, 800);
}
(function() {
  "use strict";

  var toggles = document.querySelectorAll(".menu-icon");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
			
    });
  }
  
$(document).ready(function(){
	var wind_height = $(window).height();
	if($(window).width() < 1024){
		$(".nav-menu").css("height", wind_height);
	}
});
	$('.mobil-icon-toggle').click(function(){
		if($(this).hasClass('active'))
		{
			$('.nav-menu').addClass('open-navigation');
			$("html").css("overflow-y", "hidden");
			$(".nav-menu ul li:nth-child(1) .sub-menu").css("min-height", "136px");
			$(".nav-menu ul li:nth-child(2) .sub-menu").css("min-height", "136px");
			$(".nav-menu ul li:nth-child(3) .sub-menu").css("min-height", "136px");
			$(".nav-menu ul li:nth-child(5) .sub-menu").css("min-height", "91px");
			$(".nav-menu ul li:nth-child(7) .sub-menu").css("min-height", "91px");
			$(".nav-menu ul li.dropdown.active-li a.plus-minus-icon .fa-plus").addClass('fa-minus');
			$(".nav-menu ul li.dropdown.active-li .sub-menu").css("display", "block");
			$(".nav-menu ul li.dropdown.active-li .sub-menu .dropdown-content").css("display", "block");
			$('body').append('<div class="overlaybg"></div>')
		}
		else
		{
			$('.nav-menu').removeClass('open-navigation');
			$("html").css("overflow-y", "visible");
			$('body .overlaybg').fadeOut(500, function () {
				$(this).remove();
			  
			});
		}
	});
	
	$('.nav-menu ul li .dvrit a:first-child').click(function(){
		if($(".mobil-icon-toggle").hasClass('active'))
		{
			$('.nav-menu').removeClass('open-navigation');
			$('.menu-icon').removeClass('active');
			$("html").css("overflow-y", "hidden");
			$('body .overlaybg').fadeOut(500, function () {
				$(this).remove();
			  
			});
		}
		else
		{
			$('.nav-menu').addClass('open-navigation');
			$("html").css("overflow-y", "visible");
			
		}
	});
	
  $(window).scroll(function () {
	if($(window).width() < 1024){
		if ($(this).scrollTop() > 35) {
		  $('.navigation').addClass('navigation-open'); 
		  $('.navigation').css("position", "fixed"); 
		  $('.navigation').css("top", "0px"); 
		} 
		else 
		{
		  $('.navigation').removeClass('navigation-open'); 
		  $('.navigation').css("position", "relative");
		  $('.navigation').css("top", "0px");
		}
		
		
	}
  }); 
  
  
	if($(window).width() < 1024){
		$(".nav-menu ul li:nth-child(1) a").click(function(){
			$(".nav-menu ul li:nth-child(1) .sub-menu").toggle();
			if ($(".nav-menu ul li:nth-child(1) .sub-menu").css('display') == 'block') {
				$(".nav-menu ul li:nth-child(1) a i").addClass('fa-minus');
			$(".nav-menu ul li:nth-child(1) .sub-menu").css("min-height", "136px");
			$(".nav-menu ul li:nth-child(1) .sub-menu").css("display", "block");
			$(".nav-menu ul li:nth-child(1) .sub-menu .dropdown-content").css("display", "block");
			$(".nav-menu ul li:nth-child(1) a.plus-minus-icon .fa-plus").addClass('fa-minus');
			$(".nav-menu ul li:nth-child(2) .sub-menu").css("min-height", "0px");
			$(".nav-menu ul li:nth-child(2) .sub-menu").css("display", "none");
			$(".nav-menu ul li:nth-child(2) .sub-menu .dropdown-content").css("display", "none");
			$(".nav-menu ul li:nth-child(2) a.plus-minus-icon .fa-plus").removeClass('fa-minus');
			$(".nav-menu ul li:nth-child(3) .sub-menu").css("min-height", "0px");
			$(".nav-menu ul li:nth-child(3) .sub-menu").css("display", "none");
			$(".nav-menu ul li:nth-child(3) .sub-menu .dropdown-content").css("display", "none");
			$(".nav-menu ul li:nth-child(3) a.plus-minus-icon .fa-plus").removeClass('fa-minus');
			$(".nav-menu ul li:nth-child(5) .sub-menu").css("min-height", "0px");
			$(".nav-menu ul li:nth-child(5) .sub-menu").css("display", "none");
			$(".nav-menu ul li:nth-child(5) .sub-menu .dropdown-content").css("display", "none");
			$(".nav-menu ul li:nth-child(5) a.plus-minus-icon .fa-plus").removeClass('fa-minus');
			$(".nav-menu ul li:nth-child(7) .sub-menu").css("min-height", "0px");
			$(".nav-menu ul li:nth-child(7) .sub-menu").css("display", "none");
			$(".nav-menu ul li:nth-child(7) .sub-menu .dropdown-content").css("display", "none");
			$(".nav-menu ul li:nth-child(7) a.plus-minus-icon .fa-plus").removeClass('fa-minus');
			}
			else {
				$(".nav-menu ul li:nth-child(1) a i").removeClass('fa-minus'); 
			}
		});
		
		$(".nav-menu ul li:nth-child(2) a").click(function(){
			$(".nav-menu ul li:nth-child(2) .sub-menu").toggle();
			if ($(".nav-menu ul li:nth-child(2) .sub-menu").css('display') == 'block') {
				$(".nav-menu ul li:nth-child(2) a i").addClass('fa-minus'); 
			$(".nav-menu ul li:nth-child(2) .sub-menu").css("min-height", "136px");
			$(".nav-menu ul li:nth-child(2) .sub-menu").css("display", "block");
			$(".nav-menu ul li:nth-child(2) .sub-menu .dropdown-content").css("display", "block");
			$(".nav-menu ul li:nth-child(2) a.plus-minus-icon .fa-plus").addClass('fa-minus');
			$(".nav-menu ul li:nth-child(1) .sub-menu").css("min-height", "0px");
			$(".nav-menu ul li:nth-child(1) .sub-menu").css("display", "none");
			$(".nav-menu ul li:nth-child(1) .sub-menu .dropdown-content").css("display", "none");
			$(".nav-menu ul li:nth-child(1) a.plus-minus-icon .fa-plus").removeClass('fa-minus');
			$(".nav-menu ul li:nth-child(3) .sub-menu").css("min-height", "0px");
			$(".nav-menu ul li:nth-child(3) .sub-menu").css("display", "none");
			$(".nav-menu ul li:nth-child(3) .sub-menu .dropdown-content").css("display", "none");
			$(".nav-menu ul li:nth-child(3) a.plus-minus-icon .fa-plus").removeClass('fa-minus');
			$(".nav-menu ul li:nth-child(5) .sub-menu").css("min-height", "0px");
			$(".nav-menu ul li:nth-child(5) .sub-menu").css("display", "none");
			$(".nav-menu ul li:nth-child(5) .sub-menu .dropdown-content").css("display", "none");
			$(".nav-menu ul li:nth-child(5) a.plus-minus-icon .fa-plus").removeClass('fa-minus');
			$(".nav-menu ul li:nth-child(7) .sub-menu").css("min-height", "0px");
			$(".nav-menu ul li:nth-child(7) .sub-menu").css("display", "none");
			$(".nav-menu ul li:nth-child(7) .sub-menu .dropdown-content").css("display", "none");
			$(".nav-menu ul li:nth-child(7) a.plus-minus-icon .fa-plus").removeClass('fa-minus');
			}
			else {
				$(".nav-menu ul li:nth-child(2) a i").removeClass('fa-minus'); 
			}
		});
		
		$(".nav-menu ul li:nth-child(3) a").click(function(){
			$(".nav-menu ul li:nth-child(3) .sub-menu").toggle();
			if ($(".nav-menu ul li:nth-child(3) .sub-menu").css('display') == 'block') {
				$(".nav-menu ul li:nth-child(3) a i").addClass('fa-minus'); 
			$(".nav-menu ul li:nth-child(3) .sub-menu").css("min-height", "136px");
			$(".nav-menu ul li:nth-child(3) .sub-menu").css("display", "block");
			$(".nav-menu ul li:nth-child(3) .sub-menu .dropdown-content").css("display", "block");
			$(".nav-menu ul li:nth-child(3) a.plus-minus-icon .fa-plus").addClass('fa-minus');
			$(".nav-menu ul li:nth-child(2) .sub-menu").css("min-height", "0px");
			$(".nav-menu ul li:nth-child(2) .sub-menu").css("display", "none");
			$(".nav-menu ul li:nth-child(2) .sub-menu .dropdown-content").css("display", "none");
			$(".nav-menu ul li:nth-child(2) a.plus-minus-icon .fa-plus").removeClass('fa-minus');
			$(".nav-menu ul li:nth-child(1) .sub-menu").css("min-height", "0px");
			$(".nav-menu ul li:nth-child(1) .sub-menu").css("display", "none");
			$(".nav-menu ul li:nth-child(1) .sub-menu .dropdown-content").css("display", "none");
			$(".nav-menu ul li:nth-child(1) a.plus-minus-icon .fa-plus").removeClass('fa-minus');
			$(".nav-menu ul li:nth-child(5) .sub-menu").css("min-height", "0px");
			$(".nav-menu ul li:nth-child(5) .sub-menu").css("display", "none");
			$(".nav-menu ul li:nth-child(5) .sub-menu .dropdown-content").css("display", "none");
			$(".nav-menu ul li:nth-child(5) a.plus-minus-icon .fa-plus").removeClass('fa-minus');
			$(".nav-menu ul li:nth-child(7) .sub-menu").css("min-height", "0px");
			$(".nav-menu ul li:nth-child(7) .sub-menu").css("display", "none");
			$(".nav-menu ul li:nth-child(7) .sub-menu .dropdown-content").css("display", "none");
			$(".nav-menu ul li:nth-child(7) a.plus-minus-icon .fa-plus").removeClass('fa-minus');
			}
			else {
				$(".nav-menu ul li:nth-child(3) a i").removeClass('fa-minus'); 
			}
		});
		
		$(".nav-menu ul li:nth-child(5) a").click(function(){
			$(".nav-menu ul li:nth-child(5) .sub-menu").toggle();
			if ($(".nav-menu ul li:nth-child(5) .sub-menu").css('display') == 'block') {
				$(".nav-menu ul li:nth-child(5) a i").addClass('fa-minus'); 
			$(".nav-menu ul li:nth-child(5) .sub-menu").css("min-height", "91px");
			$(".nav-menu ul li:nth-child(5) .sub-menu").css("display", "block");
			$(".nav-menu ul li:nth-child(5) .sub-menu .dropdown-content").css("display", "block");
			$(".nav-menu ul li:nth-child(5) a.plus-minus-icon .fa-plus").addClass('fa-minus');
			$(".nav-menu ul li:nth-child(2) .sub-menu").css("min-height", "0px");
			$(".nav-menu ul li:nth-child(2) .sub-menu").css("display", "none");
			$(".nav-menu ul li:nth-child(2) .sub-menu .dropdown-content").css("display", "none");
			$(".nav-menu ul li:nth-child(2) a.plus-minus-icon .fa-plus").removeClass('fa-minus');
			$(".nav-menu ul li:nth-child(3) .sub-menu").css("min-height", "0px");
			$(".nav-menu ul li:nth-child(3) .sub-menu").css("display", "none");
			$(".nav-menu ul li:nth-child(3) .sub-menu .dropdown-content").css("display", "none");
			$(".nav-menu ul li:nth-child(3) a.plus-minus-icon .fa-plus").removeClass('fa-minus');
			$(".nav-menu ul li:nth-child(1) .sub-menu").css("min-height", "0px");
			$(".nav-menu ul li:nth-child(1) .sub-menu").css("display", "none");
			$(".nav-menu ul li:nth-child(1) .sub-menu .dropdown-content").css("display", "none");
			$(".nav-menu ul li:nth-child(1) a.plus-minus-icon .fa-plus").removeClass('fa-minus');
			$(".nav-menu ul li:nth-child(7) .sub-menu").css("min-height", "0px");
			$(".nav-menu ul li:nth-child(7) .sub-menu").css("display", "none");
			$(".nav-menu ul li:nth-child(7) .sub-menu .dropdown-content").css("display", "none");
			$(".nav-menu ul li:nth-child(7) a.plus-minus-icon .fa-plus").removeClass('fa-minus');
			}
			else {
				$(".nav-menu ul li:nth-child(5) a i").removeClass('fa-minus'); 
			}
		});
		
		$(".nav-menu ul li:nth-child(7) a").click(function(){
			$(".nav-menu ul li:nth-child(7) .sub-menu").toggle();
			if ($(".nav-menu ul li:nth-child(7) .sub-menu").css('display') == 'block') {
				$(".nav-menu ul li:nth-child(7) a i").addClass('fa-minus');
			$(".nav-menu ul li:nth-child(7) .sub-menu").css("min-height", "91px");
			$(".nav-menu ul li:nth-child(7) .sub-menu").css("display", "block");
			$(".nav-menu ul li:nth-child(7) .sub-menu .dropdown-content").css("display", "block");
			$(".nav-menu ul li:nth-child(7) a.plus-minus-icon .fa-plus").addClass('fa-minus');
			$(".nav-menu ul li:nth-child(2) .sub-menu").css("min-height", "0px");
			$(".nav-menu ul li:nth-child(2) .sub-menu").css("display", "none");
			$(".nav-menu ul li:nth-child(2) .sub-menu .dropdown-content").css("display", "none");
			$(".nav-menu ul li:nth-child(2) a.plus-minus-icon .fa-plus").removeClass('fa-minus');
			$(".nav-menu ul li:nth-child(3) .sub-menu").css("min-height", "0px");
			$(".nav-menu ul li:nth-child(3) .sub-menu").css("display", "none");
			$(".nav-menu ul li:nth-child(3) .sub-menu .dropdown-content").css("display", "none");
			$(".nav-menu ul li:nth-child(3) a.plus-minus-icon .fa-plus").removeClass('fa-minus');
			$(".nav-menu ul li:nth-child(5) .sub-menu").css("min-height", "0px");
			$(".nav-menu ul li:nth-child(5) .sub-menu").css("display", "none");
			$(".nav-menu ul li:nth-child(5) .sub-menu .dropdown-content").css("display", "none");
			$(".nav-menu ul li:nth-child(5) a.plus-minus-icon .fa-plus").removeClass('fa-minus');
			$(".nav-menu ul li:nth-child(1) .sub-menu").css("min-height", "0px");
			$(".nav-menu ul li:nth-child(1) .sub-menu").css("display", "none");
			$(".nav-menu ul li:nth-child(1) .sub-menu .dropdown-content").css("display", "none");
			$(".nav-menu ul li:nth-child(1) a.plus-minus-icon .fa-plus").removeClass('fa-minus');
			}
			else {
				$(".nav-menu ul li:nth-child(7) a i").removeClass('fa-minus'); 
			}
		});
	}
		
	$('.closebtncom').click(function(){
		$(this).parents('.community-updates').addClass('smallupdatebx');
		$('.slider-udpdates').animate({opacity:0})
	})
	$('.communityblockbx dl dt').click(function(){
		$(this).parents('.community-updates').removeClass('smallupdatebx');
		$('.slider-udpdates').animate({opacity:1})
	});
	})();
