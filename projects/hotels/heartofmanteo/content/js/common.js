$(function() {
  try{

    document.getElementById('phone').addEventListener('input', function (e) {

      var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
      e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
    });
    }catch(e){
         console.log(e);
    }
    $(window).scroll(function() {

        if ($(this).scrollTop() > 50) {

            $('.scrollTop').fadeIn();

                  $('body').addClass('isscrolled');   

           // $('.nav').addClass('fixed');

        } else {

            $('.scrollTop').fadeOut();

                  $('body').removeClass('isscrolled');

            //$('.nav').removeClass('fixed');

        }

    });

        if ($(this).scrollTop() > 50) {

            $('.scrollTop').fadeIn();

                  $('body').addClass('isscrolled');

           // $('.nav').addClass('fixed');

        } else {

            $('.scrollTop').fadeOut();

                $('body').removeClass('isscrolled');

            //$('.nav').removeClass('fixed');

        }

        

    $(document).on('click', '.scrollTop a', function() {

        $('body,html').animate({

            scrollTop: 0

        }, 800);

    });

        

    $('.toggle-btn').click(function() {

        if ($('.wrapper').hasClass('opened')) {

            $('.wrapper').removeClass('opened');

        } else {

            $('.wrapper').addClass('opened');

        }

    });

    $('.has-sub-menu').click(function() {

        var target = $(this).find('.sub-menu');

        var trigger = $(this);

        if (trigger.hasClass('opened')) {

            $('.has-sub-menu').removeClass('opened');

            trigger.removeClass('opened');

        } else {

            $('.has-sub-menu').removeClass('opened');

            trigger.addClass('opened');

        }

    }); 

    

    $('input, textarea, select').blur(function() {

      var $this = $(this);

      if ($this.val())

          $this.addClass('used');

      else

          $this.removeClass('used');

    });

    $('input, select, textarea').each(function () {

        if (this.value.length > 0) {

            $(this).addClass('used');

        }

    });

});





document.getElementById("year").innerHTML = new Date().getFullYear();

// setTimeout(function(){ 

//  $(".start-page").hide();

// }, 700);



// $(window).on('load', function() {

//     $(".start-page").hide();

// });

$(window).on('scroll',function(){

    var Position1 = Math.round($(window).scrollTop() / $(window).height() * 120); 

    $('#amenities1').css({"top": "" + Position1 + "px"});

    

    var Position2 = Math.round($(window).scrollTop() / $(window).height() * 50); 

    $('#amenities2').css({"top": "" + Position2 + "px"});

    

    var Position3 = Math.round($(window).scrollTop() / $(window).height() * -50); 

    $('#amenities3').css({"top": "" + Position3 + "px"});

    

    var Position4 = Math.round($(window).scrollTop() / $(window).height() * -100); 

    $('#amenitiescntr-parallax-bg').css({"top": "" + Position4 + "px"});

});


var dt = new Date();
var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();


  

$.ajax({

    dataType: "json",

    url: 'scripts/today.json?t='+time,

    success: function (data) {

        

        var html = "";

        if(data['status']=='Sunny'){

            html +='<span class="simple-weather__day">';

                html +='<span class="simple-weather__date">'+data['today']+'&nbsp;</span>';

                html +='<i class="fal fa-sun"></i> <em class="simple-weather__temp">'+data['temperature']+' F</em>';

            html +='</span>';

        }else if(data['status'] == 'Partly Cloudy'){

            html +='<span class="simple-weather__day">';

                html +='<span class="simple-weather__date">'+data['today']+'&nbsp;</span>';

                html +='<i class="fal fa-cloud-sun"></i> <em class="simple-weather__temp">'+data['temperature']+' F</em>';

            html +='</span>';

        }else if(data['status'] == 'PM Showers'){

            html +='<span class="simple-weather__day">';

                html +='<span class="simple-weather__date">'+data['today']+'&nbsp;</span>';

                html +='<i class="fal fa-cloud-rain"></i> <em class="simple-weather__temp">'+data['temperature']+' F</em>';

            html +='</span>';

        }else if(data['status'] == 'PM T-Storms'){

            html +='<span class="simple-weather__day">';

                html +='<span class="simple-weather__date">'+data['today']+'&nbsp;</span>';

                html +='<i class="fal fa-cloud-rain"></i> <em class="simple-weather__temp">'+data['temperature']+' F</em>';

            html +='</span>';

        }else{

            html +='<span class="simple-weather__day">';

                html +='<span class="simple-weather__date">'+data['today']+'&nbsp;</span>';

                html +='<i class="fal fa-cloud-rain"></i> <em class="simple-weather__temp">'+data['temperature']+' F</em>';

            html +='</span>';

        }



        $(".simple-weather").html(html);

    },




});

   function form_validate_jquery(container)
    {
        //alert("hello");
        var return_state = true;    
        $(container).find('label').removeAttr('class'); 
        $(container).find("input, select, textarea, checkbox,  .g-recaptcha " ).each(function(){
                
            var title = $(this).attr("title");      

            switch($(this).attr("validation"))
            {               
                case "text":
                    if($(this).val() == $(this).attr("placeholder") || $(this).val() == "")
                    {
                    
                        $(this).css("border-bottom","1px solid red");
                        
                        $(this).val('');
                        $(this).attr("placeholder", title+" cannot be blank!");
                        
                        return_state = false;                                                   
                    }
                    else
                    {
                         $(this).css("border-bottom","1px solid green");
                        
                        $(this).attr("placeholder", title+'*')
                    }
                break;

                case "string":
              
                    if ($(this).val() == "") {
                         $(this).css("border-bottom","1px solid red");
                        $(this).val("");
                        $(this).attr("placeholder", title+" cannot be blank!")
                        return_state = false;
                    } else if (!/^[a-zA-Z ]*$/g.test($(this).val())) {
                         $(this).css("border-bottom","1px solid red");
                        $(this).val("");
                        $(this).attr("placeholder", "Only Alphabets should allowed here.");
                        return_state = false;
                    } else {
                         $(this).css("border-bottom","1px solid green");
                         $(this).attr("placeholder", title+'*');
                    }
                break;
               


                case "textarea":
                    if($(this).val() == $(this).attr("placeholder") || $(this).val() == "")
                    {
                        $(this).css("border-color","red");
                        $(this).val('');
                        
                        $(this).attr("placeholder", "This cannot be blank!")
                        
                        return_state = false;                                                   
                    }
                    else
                    {
                        $(this).css("border-color","green");
                        $(this).attr("placeholder", title)
                    }
                break;

                case "email":
                    if($(this).val() == $(this).attr("placeholder") || $(this).val() == "")
                    {
                        $(this).css("border-bottom","1px solid red");
                        $(this).val('');
                        $(this).attr("placeholder", title+" cannot be blank!")                          
                        return_state = false;
                    }
                    else if($(this).val().indexOf('@') == -1 || $(this).val().indexOf('.') == -1)
                    {
                        $(this).css("border-bottom","1px solid red");
                        $(this).val('');
                        $(this).attr("placeholder", title+" is not valid email address!")                           
                        return_state = false;
                    }
                    
                    else
                    {
                        $(this).css("border-bottom","1px solid green");
                        $(this).attr("placeholder", title+'*');
                    }
                break;
                
                case "mobile":
                    if($(this).val() == $(this).attr("placeholder") || $(this).val() == "")
                    {
                        $(this).css("border-bottom","1px solid red");
                        $(this).val('');
                        $(this).attr("placeholder", title+" cannot be blank !")                         
                        return_state = false;
                    }
                    else if(isNaN($(this).val()))
                    {
                        $(this).css("border-bottom","1px solid red");
                        $(this).val('');
                        $(this).attr("placeholder", title+" should be numeric !")                           
                        return_state = false;
                    }
                    else if($(this).val().length < 10)
                    {
                        $(this).css("border-bottom","1px solid red");
                        $(this).val('');
                        $(this).attr("placeholder", title+" must be 10 digits !")                           
                        return_state = false;
                    }
                    else
                    {
                       $(this).css("border-bottom","1px solid green");
                         $(this).attr("placeholder", title+'*');
                    }               
                break;
                   case "mobile-mask":
                    if($(this).val() == $(this).attr("placeholder") || $(this).val() == "")
                    {
                        $(this).css("border-bottom","1px solid red");
                        $(this).val('');
                        $(this).attr("placeholder", title+" cannot be blank !")                         
                        return_state = false;
                    }
                    else if($(this).val().length < 14)
                    {
                        $(this).css("border-bottom","1px solid red");
                        $(this).val('');
                        $(this).attr("placeholder", title+" must be 10 digits  !")                           
                        return_state = false;
                    }
                    else
                    {
                       $(this).css("border-bottom","1px solid green");
                         $(this).attr("placeholder", title+'*');
                    }               
                break;
                case "number":
                    if($(this).val() == $(this).attr("placeholder") || $(this).val() == "")
                    {
                        $(this).prev().addClass('error');
                        $(this).val('');
                        $(this).attr("placeholder", "This cannot be blank!")                            
                        return_state = false;
                    }
                    else if(isNaN($(this).val()))
                    {
                        $(this).prev().addClass('error');
                        $(this).val('');
                        $(this).attr("placeholder", "This is not valid number!")                            
                        return_state = false;
                    }
                    else
                    {
                        $(this).prev().addClass('active');
                        $(this).attr("placeholder", "")
                    }               
                break;

                case "google-captcha":
                    if (grecaptcha.getResponse() == "") {
                        $(container).find(".g-recaptcha").next("span").remove();
                        $(container).find(".g-recaptcha").after('<span style="color: red;font-size:12px">Google captcha is not selected.</span>');
                        return_state = false;
                    } else {
                        $(container).find(".g-recaptcha").next("span").remove();
                    }
                    break;
            }
        })
        

        
        return return_state;
    }

    