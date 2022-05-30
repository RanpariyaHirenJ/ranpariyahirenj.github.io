// JavaScript Document
var timer;
//****************************************

//**********************Confirm Delete function*************************************************
function confirm_delete()
{
	if(document.getElementsByName("*")=="")
	{
		var val = confirm("Select Record");
		return false;
	}
	else
	{
	var val = confirm("Are you sure you want to perform this action?");
	return val;
	}
}

$(window).ready(function() {
    var parameter = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    var decodedparameter = decodeURIComponent(parameter)
    var param = decodedparameter.split('=');
    if (param[0] == "enquiry") {
        sessionStorage.removeItem('leadpage');
        alert("Your Enquiry has been Submitted Successfully. Our team will contact you shortly.");
    } else if (param[0] == "error") {
        alert("The code is invalid.");
    }
});
/*
Password CSS
#user_registration
{
	border:1px solid #cccccc;
	margin:auto auto;
	margin-top:100px;
	width:400px;
}
#user_registration label
{
        display: block;  /* block float the labels to left column, set a width 
	float: left; 
	width: 70px;
	margin: 0px 10px 0px 5px; 
	text-align: right; 
	line-height:1em;
	font-weight:bold;
}
#user_registration input
{
	width:250px;
}
#user_registration p
{
	clear:both;
}
#submit
{
	border:1px solid #cccccc;
	width:100px !important;
	margin:10px;
}
#passwordStrength
{
	height:10px;
	display:block;
	float:left;
}
.strength0
{
	width:100px;
	background:#FFF;
	border:#CCC 1px solid;
}
.strength1
{
	width:50px;
	background:#ff0000;
}
.strength2
{
	width:100px;	
	background:#ff5f5f;
}
.strength3
{
	width:150px;
	background:#56e500;
}
.strength4
{
	background:#4dcd00;
	width:200px;
}
.strength5
{
	background:#399800;
	width:250px;
}
*/

$("#overlayQuote select").change(function(){
	$(this).find("option:first").text('');
});

//*******Form Validation*********
function form_validate_jquery(container)
{
	//alert("hello");
	var return_state = true;	
	$(container).find('label').removeAttr('class');	
	$(container).find("input, select, textarea, checkbox,  file " ).each(function(){
			
		var title = $(this).attr("title");		

		switch($(this).attr("validation"))
		{				
			case "text":
				if($(this).val() == $(this).attr("placeholder") || $(this).val() == "")
				{
					if($(this).attr('name')=='interested_in'){
						$(this).prev().addClass('error');
						$(this).val('');
						$(this).find("option:first").text('This cannot be blank!');
						$(this).attr("placeholder", "This cannot be blank!")
					}else{
						$(this).prev().addClass('error');
						$(this).val('');
						
						$(this).attr("placeholder", "This cannot be blank!")
					}
					''
					
					return_state = false;													
				}
				else
				{
					$(this).prev().addClass('active');
					$(this).attr("placeholder", "")
				}
			break;
			case "checkbox":
			
				if(!$(this).prop('checked'))
				{
					$(this).css({"background-color": "rgb(225, 0, 0)","-webkit-box-shadow": "0px 0px 4px 1px rgba(255,0,0,1)","-moz-box-shadow": "0px 0px 4px 1px rgba(255,0,0,1)","box-shadow": "0px 0px 4px 1px rgba(255,0,0,1)"});
					return_state = false;													
				}
				else
				{
					$(this).removeAttr("style");
				}
			break;


			case "textarea":
				if($(this).val() == $(this).attr("placeholder") || $(this).val() == "")
				{
					$(this).css("border","1px solid red");
					$(this).val('');
					
					$(this).attr("placeholder", "This cannot be blank!")
					
					return_state = false;													
				}
				else
				{
					$(this).css("border","1px solid green");
					$(this).attr("placeholder", "")
				}
			break;
			case "file":
				if($(this).val() == "")
				{
					$(this).closest('.file-upload').css("border","1px solid red");
					$(this).val('');
					
					$(this).prev().text(title+" cannot be blank!")
					
					return_state = false;					
				}else if($(this).val()!=""){
					var ext = $(this).val().split('.').pop().toLowerCase();
					if($.inArray(ext, ['jpeg','jpg']) == -1) {
						$(this).val('');
						$(this).closest('.file-upload').css("border","1px solid red");
					    $(this).prev().text("Invalid file extension. please upload only .jpeg, .jpg format image file");
					    alert('Invalid file extension. please upload only .jpeg, .jpg format.');
					    return_state = false;		
					}
				}
				else
				{
					$(this).closest('.file-upload').css("border","1px solid green");
				}
			break;
			case "password":

				if($(this).val() == $(this).attr("placeholder") || $(this).val() == "")
				{
					$(this).css("border","1px solid red");
					$(this).val('');
					
					$(this).attr("placeholder", "This cannot be blank!")
					
					return_state = false;													
				}
				else if($(this).val().length < 6)
				{
					$(this).css("border","1px solid red");
					$(this).val('');					
					$(this).attr("placeholder", "This should be min 6 char!")
					
					return_state = false;		
				}
				else if($(this).attr('match')!="" && $(this).attr('match')!=null && $(this).attr('match')!='undefined'){
					if($(this).closest(container).find('#'+$(this).attr('match')).val()!=$(this).val())
					{
						$(this).css("border","1px solid red");
						$(this).val('');					
						$(this).attr("placeholder", title+" does not match!")
						
						return_state = false;		
					}else{
						$(this).css("border","1px solid green");
					}
				}
				else
				{
					$(this).css("border","1px solid green");
				}
			break;
			case "email":
				if($(this).val() == $(this).attr("placeholder") || $(this).val() == "")
				{
					$(this).prev().addClass('error');
					$(this).val('');
					$(this).attr("placeholder", "This cannot be blank!")							
					return_state = false;
				}
				else if($(this).val().indexOf('@') == -1 || $(this).val().indexOf('.') == -1)
				{
					$(this).prev().addClass('error');
					$(this).val('');
					$(this).attr("placeholder", "This is not valid email address!")							
					return_state = false;
				}
				else if($(this).attr('match')!="" && $(this).attr('match')!=null && $(this).attr('match')!='undefined'){
					if($(this).closest(container).find('#'+$(this).attr('match')).val()!=$(this).val())
					{
						$(this).prev().addClass('error');
						$(this).val('');					
						$(this).attr("placeholder", title+" does not match!")
						
						return_state = false;		
					}else{
						$(this).prev().addClass('active');
					}
				}
				else
				{
					$(this).prev().addClass('active');
					$(this).attr("placeholder", "")
				}
			break;
			
			case "mobile":
				if($(this).val() == $(this).attr("placeholder") || $(this).val() == "")
				{
					$(this).prev().addClass('error');
					$(this).val('');
					$(this).attr("placeholder", "This cannot be blank !")							
					return_state = false;
				}
				else if(isNaN($(this).val()))
				{
					$(this).prev().addClass('error');
					$(this).val('');
					$(this).attr("placeholder", "This should be numeric !")							
					return_state = false;
				}
				else if($(this).val().length < 10)
				{
					$(this).prev().addClass('error');
					$(this).val('');
					$(this).attr("placeholder", "This must be 10 digits !")							
					return_state = false;
				}
				else
				{
					$(this).prev().addClass('active');
					$(this).attr("placeholder", "")
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
		}
	})
	
	if(return_state==false){
		$(container).find('label').addClass('error');
		
	}


	if(return_state){
		$(container).find('label').addClass('active');
		  if(grecaptcha.getResponse() == "") {
			$(".g-recaptcha").next('span').remove();	
	   		 $(".g-recaptcha").after('<span style="color: red;font-size:12px">Google captcha is not selected.</span>');
		  } else {
                $(container).find("input[placeholder], textarea[placeholder]").focus().blur();
		    	var formData = $('form').serializeArray();
			    $.ajax({
		            url: 'inc/contact.php',
		            type : 'POST',
		            data : formData,
		            success: function(data) {
		            	console.log(data);
		               if(data=="200"){
			               $('form')[0].reset();
			  				$(container).find("input[placeholder], textarea[placeholder]").focus().blur();
			               	grecaptcha.reset();
			               	$(container).find('label').removeClass('active');
			               	$(container).find('.g-recaptcha').next('span').remove();	
			               	$("#overlayQuote").fadeOut();
			               	overlayBox('successfully');
		               }
		            }
		        });
		  }
	}

	

	


	 console.log(formData);

	return false;
}

