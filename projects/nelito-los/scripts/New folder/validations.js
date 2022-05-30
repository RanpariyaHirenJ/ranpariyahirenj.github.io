// JavaScript Document
//validation types empty = tocheck for blank entry, special = to check for special characters, number =  to check for numeric character only, float = to check for floating integers only, replace = will change & to AND , numcount = Validates for the no of digits, email = validates email address, alert = to check for the values of the checkboxes and prompt confirmation alert ,comand =Comandatory fields ,
$(function(){
	$(document).find(".validate").each(function(){		
		var tagtype = $(this).prop('tagName');			
		switch(tagtype.toLowerCase())
		{
			case"input":
				switch($(this).attr('type'))
				{
					case "text":
						$(this).blur(function(){
							var validations = $(this).attr("validation").split('|');							
							for(var i = 0; i < validations.length; i++)
							{
								if(!validate_element($(this),validations[i]))
								{																		
									$(this).val("");
									$(this).addClass("validationerror");
									break;	
								}
								else{
									$(this).removeClass("validationerror");	
								}
							}								
						})
					break;
					
					case"checkbox":
						$(this).change(function(){
							var validations = $(this).attr("validation").split('|');
							for(var i = 0; i < validations.length; i++)
							{
								if(!validate_element($(this),validations[i]))
								{																		
									$(this).val("");
									$(this).addClass("validationerror");
									break;	
								}
								else{
									$(this).removeClass("validationerror");	
								}
							}		
						})
					break;							
				}
			break;
			
			case"select":
				$(this).blur(function(){
					var validations = $(this).attr("validation").split('|');
					for(var i = 0; i < validations.length; i++)
					{
						if(!validate_element($(this),validations[i]))
						{																											
							$(this).addClass("validationerror");
							break;	
						}
						else{
							$(this).removeClass("validationerror");	
						}
					}								
				})
			
			break;
			
			case"textarea":
				$(this).blur(function(){
					var validations = $(this).attr("validation").split('|');
					for(var i = 0; i < validations.length; i++)
					{
						if(!validate_element($(this),validations[i]))
						{																											
							$(this).addClass("validationerror");
							break;	
						}
						else{
							$(this).removeClass("validationerror");	
						}
					}								
				})
			
			break;	
		}
	})		
})


function validate_element(element, validationtype)
{
	$(element).val(String($(element).val()).trim())
	var val = $(element).val();
	var retval = true;
	var placeholder = "";
	if(typeof($(element).attr("placeholder")) != "undefined")
	{
		placeholder = $(element).attr("placeholder");
	}
	
	switch(validationtype)
	{
		case "empty":
			if(val == "" || val == placeholder)
			{
				if(typeof($(element).attr("title"))!= "undefined")
				{
					alert($(element).attr("title") +" cannot be blank!");	
				}
				retval = false
				$(element).focus;
			}
		break;
		
		case"special":
			var re5digit=/[^a-zA-Z0-9]/;
			if(val.search(re5digit) != -1)
			{
				if(typeof($(element).attr("title"))!= "undefined")
				{
					alert($(element).attr("title") +" cannot contain special characters!");	
				}
				retval = false
				$(element).focus;
			}
		break;
		
		case"number":
			var re5digit=/[^0-9]/;
			if(val.search(re5digit) != -1)
			{
				if(typeof($(element).attr("title"))!= "undefined")
				{
					alert($(element).attr("title") +" should contain only numbers!");	
				}
				retval = false
				$(element).focus;
			}
		break;
		
		case"float":
			var re5digit=/[^0-9.]/;
			if(val.search(re5digit) != -1)
			{
				if(typeof($(element).attr("title"))!= "undefined")
				{
					alert($(element).attr("title") +" should contain only floating point numbers!");	
				}
				retval = false
				$(element).focus;
			}		
		break;
		
		case"replace":
			$(element).val($(element).val().replace("&", "AND"));		
		break;
		
		case"numcount":
			if(val.length != $(element).attr('numcount') && val != "")
			{
				if(typeof($(element).attr("title"))!= "undefined")
				{
					alert($(element).attr("title") +" should contain exactly "+$(element).attr('numcount')+" numbers!");	
				}
				retval = false
				$(element).focus;
			}
		break;
		
		case"email":
			if(val.length > 0)
			{
				if(val.indexOf('@') < 0 || val.indexOf('.') < 0)
				{
					if(typeof($(element).attr("title"))!= "undefined")
					{
						alert($(element).attr("title") +" should be a valid email address!");	
					}
					retval = false
					$(element).focus;
				}		
			}
		break;
		
		case"comand":			
			if(val.length <= 0)
			{
				var reffield = $(element).attr("reffield");	
				var tagtype = $(reffield).prop('tagName');			
				switch(tagtype.toLowerCase())
				{
					case"input":						
						switch($(reffield).attr('type'))
						{
							case "text":								
								if($(element).attr("reffieldvalue") == '*')
								{
									if($(reffield).val().length > 0 )
									{
										if(typeof($(element).attr("title"))!= "undefined")
										{
											alert($(element).attr("title") +" cannot be blank!");	
										}
										retval = false
										$(element).focus;
									}							
								}
								else
								{
									alert($(element).attr("reffieldvalue"));
									if($(reffield).val() == $(element).attr("reffieldvalue"))
									{
										if(typeof($(element).attr("title"))!= "undefined")
										{
											alert($(element).attr("title") +" cannot be blank!");	
										}
										retval = false
										$(element).focus;
									}	
								}						
							break;
							
							case"checkbox":
								if($(reffield).prop("checked"))
								{
									if(typeof($(element).attr("title"))!= "undefined")
									{
										alert($(element).attr("title") +" cannot be blank!");	
									}
									retval = false
									$(element).focus;
								}
							break;							
						}	
					break;
					
					case"select":
						if($(element).attr("reffieldvalue") == '*')
						{
							if($(reffield).val().length > 0 )
							{
								if(typeof($(element).attr("title"))!= "undefined")
								{
									alert($(element).attr("title") +" cannot be blank!");	
								}
								retval = false
								$(element).focus;
							}							
						}
						else
						{
							if($(reffield).val() == $(element).attr("reffieldvalue"))
							{
								if(typeof($(element).attr("title"))!= "undefined")
								{
									alert($(element).attr("title") +" cannot be blank!");	
								}
								retval = false
								$(element).focus;
							}	
						}	
					break;
				}
			}			
		break;
		
		case"alert":
			if(typeof($(element).attr("title"))!= "undefined")
			{
				if($(element).prop("checked") == true)
				{
					if(!confirm("Are you sure you want to check "+$(element).attr("title")+"?"))
					{
						$(element).prop("checked",false);
					}										
				}
				else
				{
					if($(element).prop("checked") == false)
					{
						if(!confirm("Are you sure you want to uncheck "+$(element).attr("title")+"?"))
						{
							$(element).prop("checked",true);
						}										
					}
	
				}
			}
			retval = false
			$(element).focus;
		break;
	}
	return retval;
}

function assign_validation(element)
{
	$(element).find(".validate").each(function(){
		var tagtype = $(this).prop('tagName');			
		switch(tagtype.toLowerCase())
		{
			case"input":
				switch($(this).attr('type'))
				{
					case "text":
						$(this).blur(function(){
							var validations = $(this).attr("validation").split('|');							
							for(var i = 0; i < validations.length; i++)
							{
								if(!validate_element($(this),validations[i]))
								{																		
									$(this).val("");
									$(this).addClass("validationerror");
									break;	
								}
								else{
									$(this).removeClass("validationerror");	
								}
							}								
						})
					break;	
					
				}
			break;
			
			case"select":
				$(this).blur(function(){
					var validations = $(this).attr("validation").split('|');
					for(var i = 0; i < validations.length; i++)
					{
						if(!validate_element($(this),validations[i]))
						{																											
							$(this).addClass("validationerror");
							break;	
						}
						else{
							$(this).removeClass("validationerror");	
						}
					}								
				})
			
			break;			
		}
	})
}

function form_validate_jquery(container)
{
	var return_state = true;		
	$(container).find("input, select, textarea" ).each(function(){
			
		var title = $(this).attr("title");			
		switch($(this).attr("validation"))
		{				
			case "text":
				if($(this).val() == $(this).attr("placeholder") || $(this).val() == "")
				{
					$(this).css("border","1px solid red");
					$(this).val('');
					
					$(this).attr("placeholder", ""+title+" cannot be blank!")
					
					return_state = false;													
				}
				else
				{
					$(this).css("border","1px solid green");
				}
			break;
			case "password":
				if($(this).val() == $(this).attr("placeholder") || $(this).val() == "")
				{
					$(this).css("border","1px solid red");
					$(this).val('');
					
					$(this).attr("placeholder", ""+title+" cannot be blank!")
					
					return_state = false;													
				}
				else if($(this).val().length < 6)
				{
					$(this).css("border","1px solid red");
					$(this).val('');					
					$(this).attr("placeholder", ""+title+" should be min 6 char!")
					
					return_state = false;		
				}
				else
				{
					$(this).css("border","1px solid green");
				}
			break;
			case "email":
				if($(this).val() == $(this).attr("placeholder") || $(this).val() == "")
				{
					$(this).css("border","1px solid red");
					$(this).val('');
					$(this).attr("placeholder", ""+title+" cannot be blank!")							
					return_state = false;
				}
				else if($(this).val().indexOf('@') == -1 || $(this).val().indexOf('.') == -1)
				{
					$(this).css("border","1px solid red");
					$(this).val('');
					$(this).attr("placeholder", ""+title+" is not valid email address!")							
					return_state = false;
				}
				else
				{
					$(this).css("border","1px solid green");
				}
			break;
			case "number":
				if($(this).val() == $(this).attr("placeholder") || $(this).val() == "")
				{
					$(this).css("border","1px solid red");
					$(this).val('');
					$(this).attr("placeholder", ""+title+" cannot be blank!")							
					return_state = false;
				}
				else if(isNaN($(this).val()))
				{
					$(this).css("border","1px solid red");
					$(this).val('');
					$(this).attr("placeholder", ""+title+" is not valid number!")							
					return_state = false;
				}
				else
				{
					$(this).css("border","1px solid green");
				}				
			break;	
		}
	})
	
	if(!return_state)
	{
		alert("Information entered is not correct!\r\n\r\nKindly reconfirm the entered information.")	
	}
	return return_state;
}