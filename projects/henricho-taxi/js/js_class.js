var timer;function increaseopacity(divname,opfactor)

{if(opfactor<=10)

{opfactor++;document.getElementById(divname).style.opacity=(opfactor/10);document.getElementById(divname).style.filter="alpha(opacity="+(opfactor*6)+")";var funcname="increaseopacity('"+divname+"',"+opfactor+")";timer=setTimeout(funcname,50);}

else

{document.getElementById(divname).style.filter="alpha(opacity="+(100)+")";clearTimeout(timer);}}

function decreaseopacity(divname,opfactor,startpg,pagerefresh)

{if(opfactor>=0)

{opfactor--;document.getElementById(divname).style.opacity=(opfactor/10);document.getElementById(divname).style.filter="alpha(opacity="+(opfactor*6)+")";var funcname="decreaseopacity('"+divname+"',"+opfactor+",'"+startpg+"',"+pagerefresh+")";timer=setTimeout(funcname,100);}

else

{clearTimeout(timer);document.getElementById(divname).style.display="none";if(pagerefresh==true)

{var url=window.location.href.split('?',2);if(url.length>1)

{window.location.assign(url[0]+'?'+url[1]);}

else

{window.location.assign(url[0]);}}}}

function xDocSize()

{var b=document.body,e=document.documentElement;var esw=0,eow=0,bsw=0,bow=0,esh=0,eoh=0,bsh=0,boh=0;if(e){esw=e.scrollWidth;eow=e.offsetWidth;esh=e.scrollHeight;eoh=e.offsetHeight;}

if(b){bsw=b.scrollWidth;bow=b.offsetWidth;bsh=b.scrollHeight;boh=b.offsetHeight;}

return{w:Math.max(esw,eow,bsw,bow),h:Math.max(esh,eoh,bsh,boh)};}

function clsDivEffect(divname,tablename)

{this.divname=divname;this.tablename=tablename;this.diff_x=0;this.diff_y=0;this.mse_down=new Boolean(false);this.opfactor="";this.startpg="";this.pagerefresh=new Boolean(true);this.show_div=function()

{if(document.getElementById(this.divname).style.display=="none"||document.getElementById(this.divname).style.display=="")

{document.getElementById(this.divname).style.display="block";var win_size=xDocSize();document.getElementById(this.divname).style.width=(win_size.w)+"px";document.getElementById(this.divname).style.height=(win_size.h+150)+"px";document.getElementById(this.divname).style.opacity=0.0;document.getElementById(this.divname).style.filter="alpha(opacity=0)";this.opfactor=0;increaseopacity(this.divname,this.opfactor);this.center_table();}

else

{document.getElementById(this.divname).style.opacity=1.0;document.getElementById(this.divname).style.filter="alpha(opacity=100)";this.opfactor=10;decreaseopacity(this.divname,this.opfactor,this.startpg,this.pagerefresh);}}

this.center_table=function()

{var win_size=xDocSize();document.getElementById(this.tablename).style.top=((win_size.h/2)-(document.getElementById(this.tablename).offsetHeight/2))+"px";document.getElementById(this.tablename).style.left=((win_size.w/2)-(document.getElementById(this.tablename).offsetWidth/2))+"px";}

this.mouse_down=function(event)

{var old_x=document.getElementById(this.tablename).offsetLeft;var old_y=document.getElementById(this.tablename).offsetTop;this.diff_x=event.clientX-old_x;this.diff_y=event.clientY-old_y;this.mse_down=true;}

this.mouse_move=function(event)

{if(this.mse_down==true)

{var new_x=event.clientX-this.diff_x;var new_y=event.clientY-this.diff_y;document.getElementById(this.tablename).style.left=new_x+"px";document.getElementById(this.tablename).style.top=new_y+"px";}}

this.mouse_up=function()

{this.mse_down=false;}

this.mouse_out=function()

{this.mse_down=false;}}

function confirm_delete()

{if(document.getElementsByName("*")=="")

{var val=confirm("Select Record");return false;}

else

{var val=confirm("Are you sure you want to perform this action?");return val;}}

function change_image(cont_id,imgsrc)

{document.getElementById(cont_id).src=imgsrc;}

function ajax_call()

{var query_string=null;var target_page=null;var element_prop=null;var element_name=null;var xmlHttp=null;this.GetXmlHttpObject=function()

{try

{xmlHttp=new XMLHttpRequest();}

catch(e)

{try

{xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");}

catch(e)

{xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");}}

return xmlHttp;}

this.submit_query=function()

{xmlHttp=this.GetXmlHttpObject();if(xmlHttp==null)

{alert("Browser does not support HTTP Request");return;}

var url=this.target_page+"?"+this.query_string;url=url+"&sid="+Math.random();var elm_name=this.element_name;var elm_prop=this.element_prop;xmlHttp.onreadystatechange=function()

{if(xmlHttp.readyState==4)

{if(elm_prop=='innerHTML')

{document.getElementById(elm_name).innerHTML=xmlHttp.responseText;}

else

{document.getElementById(elm_name).value=xmlHttp.responseText;}}

else

{if(elm_prop=='innerHTML')

{document.getElementById(elm_name).innerHTML="Loading...";}

else

{document.getElementById(elm_name).value="Loading...";}}}

xmlHttp.open("GET",url,true);xmlHttp.send(null);}}

function hide_mylabel(lblValue,staticValue,elemId)

{x=document.getElementById(elemId);if(lblValue==staticValue)

{x.value="";}

else if(lblValue=="")

{x.value=staticValue;}}

function hide_show(para1,para2,para3)

{$(document).ready(function(){$("para1").click(function(){$("para2").hide(1000);});$("para3").click(function(){$("para2").show(1000);});});}

var myborder="#79FF9B solid 1px";function validate_form1(formid,formvar)

{var formarray=formvar.split('|');var msg="";var return_type=true;for(v=0;v<formarray.length;v++)

{var new_array=formarray[v].split('[');msg=check_element(new_array[0],formid,new_array[1]);document.getElementById(formid).elements[new_array[0]].style.border=myborder;if(msg!="")

{alert(msg);document.getElementById(formid).elements[new_array[0]].style.border="#F00 solid 1px";document.getElementById(formid).elements[new_array[0]].focus();return_type=false;break;}}

return return_type;}

function validate_form(formid,formvar)

{var formarray=formvar.split('|');var msg="";var return_type=true;for(v=0;v<formarray.length;v++)

{var new_array=formarray[v].split('[');msg=check_element(new_array[0],formid,new_array[1]);document.getElementById(formid).elements[new_array[0]].style.border=myborder;if(msg!="")

{alert(msg);document.getElementById(formid).elements[new_array[0]].style.border="#F00 solid 1px";document.getElementById(formid).elements[new_array[0]].focus();return_type=false;break;}}

return return_type;}

function check_element(elm_name,formid,vld_type)

{var msg="";var x=document.getElementById(formid);var vld_type=vld_type.split(',')

element_type=x.elements[elm_name].type;var data=x.elements[elm_name].value;switch(element_type)

{case"text":for(i=0;i<vld_type.length;i++)

{switch(vld_type[i])

{case'r':if((data==""))

{if(x.elements[elm_name].title=="")

{msg=msg+x.elements[elm_name].name+" cannot be blank.";}

else

{msg=msg+x.elements[elm_name].title+" cannot be blank.";}}

break;case'n':if(isNaN(x.elements[elm_name].value))

{if(x.elements[elm_name].title=="")

{msg=msg+x.elements[elm_name].name+" should be a number.";}

else

{msg=msg+x.elements[elm_name].title+" should be a number.";}}

break;case'e':if((data!=""))

{if((x.elements[elm_name].value.indexOf('@',0)==-1))

{if(x.elements[elm_name].title=="")

{msg=msg+x.elements[elm_name].name+" should contain a valid email id.";}

else

{msg=msg+x.elements[elm_name].title+" should contain a valid email id.";}}}

break;}}

break;case"select-one":for(i=0;i<vld_type.length;i++)

{switch(vld_type[i])

{case'r':if(x.elements[elm_name].value=="")

{if(x.elements[elm_name].title=="")

{msg=msg+" Please select atleast one option from "+x.elements[elm_name].name+".";}

else

{msg=msg+" Please select atleast one option from "+x.elements[elm_name].title+".";}}

break;}}

break;case"textarea":for(i=0;i<vld_type.length;i++)

{switch(vld_type[i])

{case'r':if((data=="")||(data.length<12))

{if(x.elements[elm_name].title=="")

{msg=msg+x.elements[elm_name].name+" cannot be blank and should be a minimum of 15 characters..";}

else

{msg=msg+x.elements[elm_name].title+" cannot be blank and should be a minimum of 15 characters..";}}

break;}}

break;case"checkbox":for(i=0;i<vld_type.length;i++)

{switch(vld_type[i])

{case'r':if(x.elements[elm_name].checked==false)

{if(x.elements[elm_name].title=="")

{msg=msg+x.elements[elm_name].name+" should be selected.";}

else

{msg=msg+x.elements[elm_name].title+" should be selected.";}}

break;}}

break;case"password":for(i=0;i<vld_type.length;i++)

{switch(vld_type[i])

{case'r':if((data=="")||(data.length<5))

{if(x.elements[elm_name].title=="")

{msg=msg+x.elements[elm_name].name+" cannot be blank and should be a minimum of 5 characters.";}

else

{msg=msg+x.elements[elm_name].title+" cannot be blank and should be a minimum of 5 characters.";}}

break;case'n':if(isNaN(x.elements[elm_name].value)&&(data!=""))

{if(x.elements[elm_name].title=="")

{msg=msg+x.elements[elm_name].name+" can be a number only.";}

else

{msg=msg+x.elements[elm_name].title+" can be a number only.";}}

break;}}

break;}

return msg;}

function autoResize(id)

{var newheight;var newwidth;if(document.getElementById)

{newheight=document.getElementById(id).contentWindow.document.body.scrollHeight;newwidth=document.getElementById(id).contentWindow.document.body.scrollWidth;}

if(newheight<=0)

{newheight=300;}

document.getElementById(id).height=(newheight)+100+"px";document.getElementById(id).width=(newwidth)+"px";}

function passwordStrength(password)

{var desc=new Array();desc[0]="Very Weak";desc[1]="Weak";desc[2]="Better";desc[3]="Medium";desc[4]="Strong";desc[5]="Strongest";var score=0;if(password.length>6)score++;if((password.match(/[a-z]/))&&(password.match(/[A-Z]/)))score++;if(password.match(/\d+/))score++;if(password.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/))score++;if(password.length>12)score++;document.getElementById("passwordDescription").innerHTML=desc[score];document.getElementById("passwordStrength").className="strength"+score;}

function RestrictChar(id,evt)

{var theEvent=evt||window.event;var key=theEvent.keyCode||theEvent.which;if(key!=16&&key!=17&&key!=8&&key!=37&&key!=39&&key!=32&&key!=27)

{var re5digit=/[@#!^&*-]/;if(document.getElementById(id).value.search(re5digit)!=-1)

{document.getElementById(id).value=document.getElementById(id).value.substring(0,document.getElementById(id).value.length-1);}}}

function ok(id,maxchars,minchars)

{var maxchars=typeof(maxchars)!='undefined'?maxchars:300;var minchars=typeof(minchars)!='undefined'?minchars:5;var x=document.getElementById(id);if(x.value.length>maxchars)

{alert('Maximum characters allowed is '+maxchars);x.focus();return false;}

else if(x.value.length<minchars)

{alert('Minimum characters allowed is '+minchars);x.focus();return false;}

else

{return true;}}

function isAlphabet(id)

{var alphaExp=/^[a-zA-Z ]+$/;var x=document.getElementById(id);if(!x.value.match(alphaExp))

{myborder=x.style.border;alert("No Numeric and Special Characters allowed in "+x.title);x.style.border="#F00 solid 1px";x.focus();return false;}

else

{x.style.border=myborder;}

return true;}



//*******Form Validation to enter only alphabets *********

function onlyAlphabets(e, t) {

            try {

                if (window.event) {

                    var charCode = window.event.keyCode;

                }

                else if (e) {

                    var charCode = e.which;

                }

                else { return true; }

                if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || (charCode == 32) || (charCode == 8) || (charCode == 46))

                    return true;

                else

                    return false;

            }

            catch (err) {

                alert(err.Description);

            }

        }

 

//*******Form Validation to enter only number *********

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

//*******Form Validation*********

function form_validate_jquery(container)

{

	$('textarea.ckeditor').each(function () {

   		var $textarea = $(this);

   		$textarea.val(CKEDITOR.instances[$textarea.attr('name')].getData());

	});

	

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

	

	if($('input[name=rating]:checked').length<=0 && return_state)

		{

 			alert("Apply Review");

			return false;

		}



	if(!return_state)

	{

		alert("Information entered is not correct!\r\n\r\nPlease reconfirm the entered information.");

	}

	return return_state;

}



function login_form_validate_jquery(container)

{

	$('textarea.ckeditor').each(function () {

   		var $textarea = $(this);

   		$textarea.val(CKEDITOR.instances[$textarea.attr('name')].getData());

	});

	

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

		}

	})

	if(!return_state)

	{

		alert("Information entered is not correct!\r\n\r\nPlease reconfirm the entered information.");

	}

	return return_state;

}