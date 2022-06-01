function form_validate_jquery(container)
{
	
	var return_state = true;	

	$(container).find("input, select, textarea, checkbox,  file " ).each(function(){
			
		var title = $(this).attr("title");		
		$(this).parent().addClass("used");
		switch($(this).attr("validation"))
		{				
			case "text":
				if($(this).val() == $(this).attr("placeholder") || $(this).val() == "")
				{
				
					$(this).css("border-color","red");
					

					$(this).val('');
					
					$(this).attr("placeholder", title+" cannot be blank!")
					
					return_state = false;													
				}
				else
				{
					$(this).css("border-color","green");
					
					$(this).attr("placeholder", title)
				}
			break;


            case "string":
          
                if ($(this).val() == "") {
                    $(this).css("border-color","red");
                    $(this).val("");
                    $(this).attr("placeholder", title+" cannot be blank!")
                    return_state = false;
                } else if (!/^[a-zA-Z ]*$/g.test($(this).val())) {
                    $(this).css("border-color","red");
                    $(this).val("");
                    $(this).attr("placeholder", "Only Alphabets should allowed here.");
                    return_state = false;
                } else {
                     $(this).css("border","1px solid green");
                     $(this).attr("placeholder", title+'*');
                }
            break;

			case "checkbox":
			
				if($(container).find('input:checkbox:checked').length == 0)
				{
					$(this).next().css({"color": "rgba(223, 15, 15, 0.6)"});
					$('.form_error').show();
					return_state = false;													
				}
				else
				{	
					$('.form_error').hide();
					$(this).next().css({"color": "rgb(132 131 131)"});
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
		
			case "password":

				if($(this).val() == "")
				{
					$(this).css("border-color","red");
					$(this).val('');
					
					$(this).attr("placeholder", title+" cannot be blank!")
					
					return_state = false;													
				}
				else if($(this).val().length < 6)
				{
					$(this).css("border-color","red");
					$(this).val('');					
					$(this).attr("placeholder", title + " should be min 6 char!")
					
					return_state = false;		
				}
				else if($(this).attr('match')!="" && $(this).attr('match')!=null && $(this).attr('match')!='undefined'){
					if($(this).closest(container).find('#'+$(this).attr('match')).val()!=$(this).val())
					{
						$(this).css("border-color","red");
						$(this).val('');					
						$(this).attr("placeholder", title+" does not match!")
						
						return_state = false;		
					}else{
						$(this).css("border-color","green");
						$(this).attr("placeholder", title)
					}
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
					$(this).css("border-color","red");
					$(this).val('');
					$(this).attr("placeholder", title+" cannot be blank!")							
					return_state = false;
				}
				else if($(this).val().indexOf('@') == -1 || $(this).val().indexOf('.') == -1)
				{
					$(this).css("border-color","red");
					$(this).val('');
					$(this).attr("placeholder", title+" is not valid email address!")							
					return_state = false;
				}
				
				else
				{
					$(this).css("border-color","green");
					$(this).attr("placeholder", title)
				}
			break;
			
			case "mobile":
				if($(this).val() == $(this).attr("placeholder") || $(this).val() == "")
				{
					$(this).css("border-color","red");
					$(this).val('');
					$(this).attr("placeholder", title+" cannot be blank !")							
					return_state = false;
				}
				else if(isNaN($(this).val()))
				{
					$(this).css("border-color","red");
					$(this).val('');
					$(this).attr("placeholder", title+" should be numeric !")							
					return_state = false;
				}
				else if($(this).val().length != 10 )
				{
					$(this).css("border-color","red");
					$(this).val('');
					$(this).attr("placeholder", title+" must be 10 digits !")							
					return_state = false;
				}
			
				
				else
				{
					$(this).css("border-color","green");
					$(this).attr("placeholder", title)
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

   return return_state;

}