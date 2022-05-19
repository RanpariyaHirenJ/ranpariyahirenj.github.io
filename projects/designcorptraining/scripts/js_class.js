// JavaScript Document

var timer;

//****************************************
function increaseopacity(divname,opfactor)
{
	if(opfactor <= 10)
		{
			opfactor++;			
			document.getElementById(divname).style.opacity = (opfactor / 10);
			document.getElementById(divname).style.filter  = "alpha(opacity="+(opfactor * 6)+")";
			var funcname = "increaseopacity('"+divname+"',"+opfactor+")";
			timer = setTimeout (funcname,50);
		}
		else
		{
			document.getElementById(divname).style.filter  = "alpha(opacity="+(100)+")";
			clearTimeout(timer);
		}
}

function decreaseopacity(divname,opfactor,startpg,pagerefresh)
{	
		if(opfactor >= 0)
		{
			
			opfactor--; 			
			document.getElementById(divname).style.opacity = (opfactor / 10);
			document.getElementById(divname).style.filter  = "alpha(opacity="+(opfactor * 6)+")";
			var funcname = "decreaseopacity('"+divname+"',"+opfactor+",'"+startpg+"',"+pagerefresh+")";
			timer = setTimeout(funcname,100);		
		}
		else
		{
			
			clearTimeout(timer);
			document.getElementById(divname).style.display = "none";			
			
			if(pagerefresh == true)
			{	
				
				var url = window.location.href.split('?',2);
				
				if(url.length > 1)
				{
					window.location.assign(url[0]+'?'+url[1]);
				}
				else
				{
					window.location.assign(url[0]);				
				}
			}
		}			
}

function xDocSize()
{
  var b=document.body, e=document.documentElement;
  var esw=0, eow=0, bsw=0, bow=0, esh=0, eoh=0, bsh=0, boh=0;
  if (e) {
    esw = e.scrollWidth;
    eow = e.offsetWidth;
    esh = e.scrollHeight;
    eoh = e.offsetHeight;
  }
  if (b) {
    bsw = b.scrollWidth;
    bow = b.offsetWidth;
    bsh = b.scrollHeight;
    boh = b.offsetHeight;
  }
  //alert('compatMode: ' + document.compatMode + '\n\ndocumentElement.scrollHeight: ' + esh + '\ndocumentElement.offsetHeight: ' + eoh + '\nbody.scrollHeight: ' + bsh + '\nbody.offsetHeight: ' + boh + '\n\ndocumentElement.scrollWidth: ' + esw + '\ndocumentElement.offsetWidth: ' + eow + '\nbody.scrollWidth: ' + bsw + '\nbody.offsetWidth: ' + bow);
  return {w:Math.max(esw,eow,bsw,bow),h:Math.max(esh,eoh,bsh,boh)};
}


function clsDivEffect(divname,tablename) //***
{
	this.divname 	= divname;
	this.tablename	= tablename;
	this.diff_x = 0;
	this.diff_y = 0; 
	this.mse_down = new Boolean(false);
	this.opfactor = "";
	this.startpg = "";
	this.pagerefresh = new Boolean(true);
		
	this.show_div 	= function() // This method is used to show and hide the transperent div
	{
		if(document.getElementById(this.divname).style.display == "none" || document.getElementById(this.divname).style.display == "")
		{	
			document.getElementById(this.divname).style.display = "block";			
			var win_size = xDocSize();
			
			document.getElementById(this.divname).style.width = (win_size.w) + "px";			
			document.getElementById(this.divname).style.height = (win_size.h + 150)+ "px";
			document.getElementById(this.divname).style.opacity = 0.0;
			document.getElementById(this.divname).style.filter  = "alpha(opacity=0)";			
			this.opfactor = 0;
			increaseopacity(this.divname,this.opfactor);
			this.center_table();
			
		}
		else
		{
			document.getElementById(this.divname).style.opacity = 1.0;
			document.getElementById(this.divname).style.filter  = "alpha(opacity=100)";
			this.opfactor = 10;		

			decreaseopacity(this.divname,this.opfactor,this.startpg,this.pagerefresh);	
		}	
	}
		
	this.center_table = function()//This method is used to center screen the display table
	{
		var win_size = xDocSize();		
		document.getElementById(this.tablename).style.top = ((win_size.h/2) - (document.getElementById(this.tablename).offsetHeight/2)) + "px";
		document.getElementById(this.tablename).style.left = ((win_size.w/2) - (document.getElementById(this.tablename).offsetWidth/2)) + "px";		
	}

	//*** These set of three methods are used to moved the dataentry table***
	this.mouse_down = function (event)
	{
		var old_x 		= document.getElementById(this.tablename).offsetLeft;
		var old_y 		= document.getElementById(this.tablename).offsetTop;
		this.diff_x 	= event.clientX - old_x;
		this.diff_y 	= event.clientY - old_y;	
		this.mse_down 	= true;
	}
	
	this.mouse_move = function (event)
	{
		if(this.mse_down == true)
		{
			var new_x = event.clientX - this.diff_x;
			var new_y = event.clientY - this.diff_y;		
					
			document.getElementById(this.tablename).style.left = new_x + "px";
			document.getElementById(this.tablename).style.top = new_y + "px";				
		}
	}
	
	this.mouse_up = function ()
	{		
		this.mse_down = false;
	}
	
	this.mouse_out = function ()
	{	
		this.mse_down = false;
	}
	//-------------------Moving the div ends here---------------------------
}

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

//*********************Mouse over image changer********************************************
function change_image(cont_id,imgsrc)
{
	document.getElementById(cont_id).src = imgsrc;		
}

//********************************This is the ajax helper class***********************************
function ajax_call()
{
	var query_string 	= null;
	var target_page 	= null;
	var element_prop	= null; 
	var element_name 	= null;
	var xmlHttp			= null;
	
	this.GetXmlHttpObject = function() // To get the xmlHTTP object for making ajax call
	{		
		try
		 {
			// Firefox, Opera 8.0+, Safari
			xmlHttp = new XMLHttpRequest();
		 }
		catch (e)
		 {
			// Internet Explorer
			  try
			  {
				xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
			  }
			 catch (e)
			  {
				xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
			  }
		 }
		 return xmlHttp;
	}

		
	this.submit_query = function()
	{
		xmlHttp = this.GetXmlHttpObject();
		
		if (xmlHttp==null)
	 	{
		 	alert ("Browser does not support HTTP Request");
		 	return;
	 	} 	
		var url = this.target_page+"?"+this.query_string;
			url	= url+"&sid="+Math.random();		
		
		var elm_name = this.element_name;
		var elm_prop = this.element_prop;

		xmlHttp.onreadystatechange = function()
		{
			if(xmlHttp.readyState==4)
			{					
				if(elm_prop == 'innerHTML')
				{
					document.getElementById(elm_name).innerHTML = xmlHttp.responseText;
				}
				else
				{
					document.getElementById(elm_name).value = xmlHttp.responseText;	
				}
			}
			else
			{
				if(elm_prop == 'innerHTML')
				{

					document.getElementById(elm_name).innerHTML = "Loading...";
				}
				else
				{					
					document.getElementById(elm_name).value = "Loading...";		
				}
			}
		}
		xmlHttp.open("GET",url,true);
		xmlHttp.send(null);					
	}
	
}

function hide_mylabel(lblValue,staticValue,elemId)
{
	x = document.getElementById(elemId);
	if(lblValue == staticValue)
	{
		x.value = "";
	}
	else if(lblValue == "")
	{
		x.value = staticValue;
	}
} 

//hide and show animation effect
function hide_show(para1, para2, para3)
{
	
	//jquery starts
	$(document).ready(function(){
  	$("para1").click(function(){
    $("para2").hide(1000);
  	});

	$("para3").click(function(){
	$("para2").show(1000);
	});
	});
	//jquery end
	
	
}
// function end


function onlyNos(e, t) {
	try {
			if (window.event) {
				var charCode = window.event.keyCode;
  	        }
            else if (e) {
                var charCode = e.which;
            }
			else { return true; }
                if (charCode > 31 && (charCode < 48 || charCode > 57)) {
					if (charCode == 45 ) {
						return true;
					}
                    return false;
                }
                return true;
       }
       catch (err) {
            alert(err.Description);
       }
}

var myborder = "#79FF9B solid 1px";
//**************************Form Validation Function*******************************
function validate_form(formid, formvar)
{
	var formarray = formvar.split('|');	
	var msg = "";
	var return_type = true;		
	for(v=0; v < formarray.length; v++)
	{		
		var new_array = formarray[v].split('[');
		msg = check_element(new_array[0],formid,new_array[1]);
		document.getElementById(formid).elements[new_array[0]].style.border = myborder;
		
		if(msg != "")
		{
			if(new_array[0] =='content')
			{
				alert(msg);
			}
			document.getElementById(formid).elements[new_array[0]].style.border = "#F00 solid 2px";						
			document.getElementById(formid).elements[new_array[0]].focus();
			
			//var att = document.createAttribute("onblur");
			//att.value="change_border(this.id)";
			//document.getElementById(formid).elements[new_array[0]].setAttributeNode(att);
			
			return_type = false;
			break;				
		}
	}	
	return return_type;						
}

function check_element (elm_name,formid,vld_type)
{
	var msg = "";
	var x = document.getElementById(formid);
	var vld_type = vld_type.split(',')	
	element_type = x.elements[elm_name].type;				
	var data = x.elements[elm_name].value;
	switch(element_type)
	{
		case "text":
		  for(i=0; i < vld_type.length; i++)
		  {
			switch(vld_type[i])
			{
				case 'r':
				if(( data == ""))
				{
					if(x.elements[elm_name].title == "")
					{
						msg = msg + x.elements[elm_name].name + " cannot be blank.";
					}
					else
					{
						msg = msg + x.elements[elm_name].title + " cannot be blank.";
					}
				}
				break;
				
				case 'n':
				if(isNaN(x.elements[elm_name].value) && (data != ""))
				{
					if(x.elements[elm_name].title == "")
					{
						msg = msg + x.elements[elm_name].name + " should be a number.";
					}
					else
					{
						msg = msg + x.elements[elm_name].title + " should be a number.";
					}					
				}
				break;
				
				case 'e':
				if((x.elements[elm_name].value.indexOf('@',0) == -1) && (data != ""))
				{
					if(x.elements[elm_name].title == "")
					{
						msg = msg + x.elements[elm_name].name + " should contain a valid email id.";
					}
					else
					{
						msg = msg + x.elements[elm_name].title + " should contain a valid email id.";
					}					
				}
				break;
			}		  
		  }
		break;  
		
		case "select-one":
		  for(i=0; i < vld_type.length; i++)
		  {
			switch(vld_type[i])
			{
				case 'r':
				if(x.elements[elm_name].value == "")
				{
					if(x.elements[elm_name].title == "")
					{
						msg = msg + " Please select atleast one option from "+ x.elements[elm_name].name + ".";
					}
					else
					{
						msg = msg + " Please select atleast one option from "+ x.elements[elm_name].title + ".";
					}					
				}
				break;					
			}		  
		  }
		break;
		
		case "textarea":
		for(i=0; i < vld_type.length; i++)
		{
			switch(vld_type[i])
			{
				case 'r':
				if(( data == "") || (data.length < 12))
				{
					if(x.elements[elm_name].title == "")
					{
						msg = msg + x.elements[elm_name].name + " cannot be blank and should be a minimum of 15 characters..";
					}
					else
					{
						msg = msg + x.elements[elm_name].title + " cannot be blank and should be a minimum of 15 characters..";
					}					
				}
				break;					
			}
		}		
		break;
		case "checkbox":
		for(i=0; i < vld_type.length; i++)
		{
			switch(vld_type[i])
			{
				case 'r':

				if(x.elements[elm_name].checked == false)
				{
					if(x.elements[elm_name].title == "")
					{
						msg = msg + x.elements[elm_name].name + " should be selected.";
					}
					else
					{
						msg = msg + x.elements[elm_name].title + " should be selected.";
					}					
				}
				break;					
			}
		}		
		break;
		case "password":
		
		  for(i=0; i < vld_type.length; i++)
		  {
			switch(vld_type[i])
			{
				case 'r':
					if((data == "") || (data.length < 5))
					{
						if(x.elements[elm_name].title == "")
						{
							msg = msg + x.elements[elm_name].name + " cannot be blank and should be a minimum of 5 characters.";
						}
						else
						{
							msg = msg + x.elements[elm_name].title + " cannot be blank and should be a minimum of 5 characters.";
						}
					}
				break;								
				
				case 'n':
					if(isNaN(x.elements[elm_name].value) && (data != ""))
					{
						if(x.elements[elm_name].title == "")
						{
							msg = msg + x.elements[elm_name].name + " can be a number only.";
						}
						else
						{
							msg = msg + x.elements[elm_name].title + " can be a number only.";
						}					
					}
				break;								
			}		  
		  }
		break; 		
	}
	return msg;
}



/* To check Password Strength */
function passwordStrength(password)
{
	var desc = new Array();
	desc[0] = "Very Weak";
	desc[1] = "Weak";
	desc[2] = "Better";
	desc[3] = "Medium";
	desc[4] = "Strong";
	desc[5] = "Strongest";

	var score   = 0;

	//if password bigger than 6 give 1 point
	if (password.length > 6) score++;

	//if password has both lower and uppercase characters give 1 point	
	if ( ( password.match(/[a-z]/) ) && ( password.match(/[A-Z]/) ) ) score++;

	//if password has at least one number give 1 point
	if (password.match(/\d+/)) score++;

	//if password has at least one special caracther give 1 point
	if ( password.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/) )	score++;

	//if password bigger than 12 give another 1 point
	if (password.length > 12) score++;

	 document.getElementById("passwordDescription").innerHTML = desc[score];
	 document.getElementById("passwordStrength").className = "strength" + score;
}
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

/* RESTRICT special Chars  */

function RestrictChar(id,evt) 
{
	var theEvent = evt || window.event;
    var key      = theEvent.keyCode || theEvent.which;
	//alert(key);
	if(key!=16 && key!=17 && key!=8 && key!=37 && key!=39 && key!=32 && key!=27)
	{
	//@#!^&*- 
	var re5digit=/[@#!^&*-]/;
	/*	var re5digit=/[/+chrs+/]/;
		var re5digit = "/[";
		re5digit += chrs;
		re5digit += "]/"; 
		alert(re5digit);
		*/
		//alert(document.getElementById(id).value.search(re5digit));
		if (document.getElementById(id).value.search(re5digit)!=-1) 
		{
		
		document.getElementById(id).value=document.getElementById(id).value.substring(0,document.getElementById(id).value.length-1);
		//alert("Please enter Only alphanumeric value");
		}
	}

}

 function ok(id,maxchars,minchars) 
 {
	 var maxchars = typeof(maxchars) != 'undefined' ? maxchars : 300;
	 var minchars = typeof(minchars) != 'undefined' ? minchars : 5;
	 var x = document.getElementById(id);
	if(x.value.length > maxchars) 
	{
		alert('Maximum characters allowed is '+maxchars);
		x.focus();
		return false; 
	}
	else if(x.value.length < minchars)
	{
		alert('Minimum characters allowed is '+minchars);
		x.focus();
		return false; 
	}
	else
	{
		return true; 
	}
 }
 
 /*Added by jitu*/


function isAlphabet(id)
{
	var alphaExp = /^[a-zA-Z ]+$/;
	
	var x = document.getElementById(id);	
	if(!x.value.match(alphaExp))
	{
		myborder = x.style.border;	
		alert("No Numeric and Special Characters allowed in " + x.title);		
		x.style.border = "#F00 solid 1px";
		x.focus();	

		return false;
	}
	else
	{
		x.style.border = myborder;	
	}
	return true;
}

//*******Form Validation*********

function form_validate_jquery(container)

{

	var return_state = true;		

	$(container).find("input, select, textarea, checkbox" ).each(function(){
		var title = $(this).attr("title");			
		switch($(this).attr("validation"))
		{				
			case "text":
				if($(this).val() == $(this).attr("placeholder") || $(this).val() == "")
				{
					//$(this).css("border-bottom","1px solid red");
					$(this).prev().addClass('active');
					$(this).css("background-image","linear-gradient(red, red), linear-gradient(red, red)");
					$(".input-type-select").css("background-image","linear-gradient(red, red), linear-gradient(red, red)");
					$(this).val('');
					$(this).attr("placeholder", ""+title+" cannot be blank!")
					return_state = false;													
				}
				else
				{
					//$(this).css("border-bottom","1px solid green");
					$(this).css("background-image","linear-gradient(green, green), linear-gradient(green, green)");
					$(".input-type-select").css("background-image","linear-gradient(green, green), linear-gradient(green, green)");
				}
			break;

			case "password":
				if($(this).val() == $(this).attr("placeholder") || $(this).val() == "")
				{
					//$(this).css("border-bottom","1px solid red");
					$(this).css("background-image","linear-gradient(red, red), linear-gradient(red, red)");
					$(this).val('');
					$(this).attr("placeholder", ""+title+" cannot be blank!")
					return_state = false;													
				}
				else if($(this).val().length < 6)
				{
					//$(this).css("border-bottom","1px solid red");
					$(this).css("background-image","linear-gradient(red, red), linear-gradient(red, red)");
					$(this).val('');					
					$(this).attr("placeholder", ""+title+" should be min 6 char!")
					return_state = false;		
				}
				else
				{
					//$(this).css("border-bottom","1px solid green");
					$(this).css("background-image","linear-gradient(green, green), linear-gradient(green, green)");
				}
			break;

			case "email":
				if($(this).val() == $(this).attr("placeholder") || $(this).val() == "")
				{
					$(this).prev().addClass('active');
					$(this).css("background-image","linear-gradient(red, red), linear-gradient(red, red)");
					$(this).val('');
					$(this).attr("placeholder", ""+title+" cannot be blank!")							
					return_state = false;
				}
				else if($(this).val().indexOf('@') == -1 || $(this).val().indexOf('.') == -1)
				{
					$(this).prev().addClass('active');
					$(this).css("background-image","linear-gradient(red, red), linear-gradient(red, red)");
					$(this).val('');
					$(this).attr("placeholder", ""+title+" is not valid email address!")							
					return_state = false;
				}
				else
				{
					//$(this).css("border-bottom","1px solid green");
					$(this).css("background-image","linear-gradient(green, green), linear-gradient(green, green)");
				}
			break;
			
			case "mobile":
			if($(this).val() == $(this).attr("placeholder") || $(this).val() == "")
			{
				//$(this).css("border","1px solid red");
				$(this).css("background-image","linear-gradient(red, red), linear-gradient(red, red)");
				$(this).val('');
				$(this).attr("placeholder", ""+title+" cannot be blank !")							
				return_state = false;
			}
			else if(isNaN($(this).val()))
			{
				//$(this).css("border","1px solid red");
				$(this).css("background-image","linear-gradient(red, red), linear-gradient(red, red)");
				$(this).val('');
				$(this).attr("placeholder", ""+title+" should be numeric !")							
				return_state = false;
			}
			else if($(this).val().length < 10)
			{
				//$(this).css("border","1px solid red");
				$(this).css("background-image","linear-gradient(red, red), linear-gradient(red, red)");
				$(this).val('');
				$(this).attr("placeholder", ""+title+" must be 10 digits !")							
				return_state = false;
			}
			else
			{
				//$(this).css("border","1px solid green");
				$(this).css("background-image","linear-gradient(green, green), linear-gradient(green, green)");
			}				
			break;

			case "number":

				if($(this).val() == $(this).attr("placeholder") || $(this).val() == "")
				{
					$(this).prev().addClass('active');
					$(this).css("background-image","linear-gradient(red, red), linear-gradient(red, red)");
					$(this).val('');
					$(this).attr("placeholder", ""+title+" cannot be blank!")							
					return_state = false;
				}
				else if(isNaN($(this).val()))
				{
					$(this).prev().addClass('active');
					$(this).css("background-image","linear-gradient(red, red), linear-gradient(red, red)");
					$(this).val('');
					$(this).attr("placeholder", ""+title+" is not valid number!")							
					return_state = false;
				}
				else
				{
					//$(this).css("border-bottom","1px solid green");
					$(this).css("background-image","linear-gradient(green, green), linear-gradient(green, green)");
				}				
			break;
		}
	})
	return return_state;
}

$(window).load(function(){
	var parameter = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
	var decodedparameter = decodeURIComponent(parameter)
	var param = decodedparameter.split('=');
	if(param[0] == "enquiry")
	{
		alert("Your Enquiry has been Submitted Successfully. Our team will contact you shortly.");
	}
});