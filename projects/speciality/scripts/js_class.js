function confirm_delete(){if(document.getElementsByName("*")==""){var val=confirm("Select Record");return false;}else{var val=confirm("Are you sure you want to perform this action?");return val;}}$(document).ready(function(){var func="get_capcha_images";$.ajax({method:"POST",url:"user_ajax_functions.php",data:{"function":func}}).done(function(msg){if(msg){$(".captcha_image").empty();$(".captcha_image").append(msg);}});});

function change_image(cont_id,imgsrc){
	document.getElementById(cont_id).src=imgsrc;
}

function jquery_ajax(func,url,params,element,loader){if(typeof($(loader))!="undefined"){$(loader).css({"top":(window.innerHeight-$(loader).outerHeight())/2,"left":((window.innerWidth-$(loader).outerWidth())/2)})
$(".loader").fadeIn();}$.post(url,{"function":func,"params":params},function(data,status){$(element).html(data);if(typeof($(loader))!="undefined"){$(loader).fadeOut();}});}function passwordStrength(password){var desc=new Array();desc[0]="Very Weak";desc[1]="Weak";desc[2]="Better";desc[3]="Medium";desc[4]="Strong";desc[5]="Strongest";var score=0;if(password.length>6)score++;if((password.match(/[a-z]/))&&(password.match(/[A-Z]/)))score++;if(password.match(/\d+/))score++;if(password.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/))score++;if(password.length>12)score++;params[0]=desc[score];params[1]=score;return params}function RestrictChar(id,evt){var theEvent=evt||window.event;var key=theEvent.keyCode||theEvent.which;if(key!=16&&key!=17&&key!=8&&key!=37&&key!=39&&key!=32&&key!=27){var re5digit=/[@#!^&*-]/;if(document.getElementById(id).value.search(re5digit)!=-1){document.getElementById(id).value=document.getElementById(id).value.substring(0,document.getElementById(id).value.length-1);}}}function charconstraint(id,maxchars,minchars){var maxchars=typeof(maxchars)!='undefined'?maxchars:300;var minchars=typeof(minchars)!='undefined'?minchars:5;var x=document.getElementById(id);if(x.value.length>maxchars){$("#"+id).val("");$("#"+id).css("border-color","red");alert('Maximum characters allowed is '+maxchars);x.focus();return false;}else if(x.value.length<minchars){$("#"+id).val("");$("#"+id).css("border-color","red");alert('Minimum characters allowed is '+minchars);x.focus();return false;}else{return true;}}var myborder;function isAlphabet(id){var alphaExp=/^[a-zA-Z ]+$/;var x=document.getElementById(id);if(!x.value.match(alphaExp)){myborder=x.style.border;alert("No Numeric and Special Characters allowed in "+x.title);x.style.border="#F00 solid 1px";x.focus();return false;}else{x.style.border=myborder;return true;}}$("input[type='text']").keypress(function(){$(this).css("border-bottom","");});

function onlyNos(e,t){
	try{
		if(window.event){
			var charCode=window.event.keyCode;
		}else if(e){
			var charCode=e.which;
		}else{
			return true;
		}
		if(charCode>31&&(charCode<48||charCode>57)){
			if(charCode==45||charCode==32){
				return true;
			}
			return false;
		}
		return true;
	}
	catch(err){
		alert(err.Description);
	}
}

/*$(document).on('keypress',"input[type='text']", function() {
	$(this).css("border","");
	$(this).next().html("");
});

$(document).on('change',"select", function() {
	$(this).css("border","");
	$(this).parent().next().html("");
});

$(document).on('click',"input[type='radio']", function() {
	$(this).css("border","");
	$(this).parent().parent().parent().next().html("");
});*/

function validate_form(form_name){
	var return_state=true;
	$('#'+form_name).find("input, select, textarea, checkbox").each(function(){
		var title=$(this).attr("title");
		switch($(this).attr("validation")){
			case"text":
				if($(this).val()==$(this).attr("placeholder")||$(this).val()==""){
					//$(this).attr("style","background-image: linear-gradient(#ed1a3d, #ed1a3d), linear-gradient(#ed1a3d, #ed1a3d) !important;");
					$(this).val('');
					$(this).prev().addClass('active');
					$(this).next().html(""+title+" cannot be blank!");
					return_state=false;
				}
				else{
					//$(this).css("border-bottom","1px solid green");
				}
			break;
			
			case"email":
				var re=new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
				if($(this).val()==$(this).attr("placeholder")||$(this).val()==""){
					//$(this).attr("style","background-image: linear-gradient(#ed1a3d, #ed1a3d), linear-gradient(#ed1a3d, #ed1a3d) !important;");
					$(this).val('');
					$(this).prev().addClass('active');
					$(this).next().html(""+title+" cannot be blank!")
					return_state=false;
				}
				else if(!re.test($(this).val())){
					//$(this).attr("style","background-image: linear-gradient(#ed1a3d, #ed1a3d), linear-gradient(#ed1a3d, #ed1a3d) !important;");
					$(this).val('');
					$(this).prev().addClass('active');
					$(this).next().html(""+title+" is not valid email address!")
					return_state=false;
				}else{
					//$(this).css("border-bottom","1px solid green");
				}
			break;
			case"number":
				if($(this).val()==$(this).attr("placeholder")||$(this).val()==""){
					//$(this).attr("style","background-image: linear-gradient(#ed1a3d, #ed1a3d), linear-gradient(#ed1a3d, #ed1a3d) !important;");
					$(this).val('');
					$(this).prev().addClass('active');
					$(this).next().html(""+title+" cannot be blank!")
					return_state=false;
				}else if($(this).val().length<10){
					//$(this).attr("style","background-image: linear-gradient(#ed1a3d, #ed1a3d), linear-gradient(#ed1a3d, #ed1a3d) !important;");
					$(this).val('');$(this).prev().addClass('active');
					$(this).next().html("Enter 10 Digit Mobile Number!")
					return_state=false;
				}else if(isNaN($(this).val())){
					//$(this).attr("style","background-image: linear-gradient(#ed1a3d, #ed1a3d), linear-gradient(#ed1a3d, #ed1a3d) !important;");
					$(this).val('');
					$(this).prev().addClass('active');
					$(this).next().html(""+title+" is not valid number!")
					return_state=false;
				}else{
					//$(this).css("border-bottom","1px solid green");
				}
			break;
		}
	});
}

function form_validate_jquery(container){
	var return_state=true;
	$(container).find("input, select, textarea, checkbox").each(function(){
		var title=$(this).attr("title");
		switch($(this).attr("validation")){
			case"text":
				if($(this).val()==$(this).attr("placeholder")||$(this).val()==""){
					//$(this).attr("style","background-image: linear-gradient(#ed1a3d, #ed1a3d), linear-gradient(#ed1a3d, #ed1a3d) !important;");
					$(this).val('');
					$(this).prev().addClass('active');
					$(this).next().html(""+title+" cannot be blank!")
					return_state=false;
				}
				else{
					//$(this).css("border-bottom","1px solid green");
				}
			break;
			
			case"select":
				if($(this).val()==$(this).attr("placeholder")||$(this).val()==""){
					//$(this).attr("style","background-image: linear-gradient(#ed1a3d, #ed1a3d), linear-gradient(#ed1a3d, #ed1a3d) !important;");
					$(this).val('');
					$(this).prev().addClass('active');
					$(this).parent().next().html(""+title+" cannot be blank!")
					return_state=false;
				}
				else{
					//$(this).css("border-bottom","1px solid green");
				}
			break;
			
			case"file":
				if($(this).val()==$(this).attr("placeholder")||$(this).val()==""){
					//$(this).attr("style","background-image: linear-gradient(#ed1a3d, #ed1a3d), linear-gradient(#ed1a3d, #ed1a3d) !important;");
					$(this).val('');
					$(this).prev().addClass('active');
					$(this).next().html(""+title+" cannot be blank!")
					return_state=false;
				}
				else{
					var extension = $(this).val().split('.').pop().toLowerCase();
					if($.inArray(extension, ['jpeg','jpg','ppt','pptx','pdf','xls','xlsx','doc','docx']) == -1) {
						//$(this).prev().css("border","2px solid red");
						$(this).val('');
						$(this).prev().addClass('active');
						$(this).next().html('Please upload valid file format');
						return_state = false;	
					}
					else {
						//$(this).prev().css("border","2px solid green");
					}
					//$(this).prev().css("border-bottom","1px solid green");
				}
			break;
			
			case "doc":
				if($(this).val()==$(this).attr("placeholder")||$(this).val()==""){
					//return_state=true;
				}
				else{
					var extension = $(this).val().split('.').pop().toLowerCase();
					if($.inArray(extension, ['pdf']) == -1) {
						$(this).val('');
						$(this).prev().addClass('active');
						$(this).next().html('Please upload valid file format (e.g. PDF)');
						return_state = false;	
					}
					else {
						//$(this).prev().css("border","2px solid green");
					}
					//$(this).prev().css("border-bottom","1px solid green");
				}
			break;
			
			case "radio":
					var radio_button_name = $(this).attr('name')
					if ($('[name='+radio_button_name+']').is(':checked')){
						
					}
					else {
						$(this).prev().addClass('active');
						$(this).parent().parent().parent().next().html("Please select "+title+"")
						return_state=false;
					}
			break;
			
			case"password":
				if($(this).val()==$(this).attr("placeholder")||$(this).val()==""){
					//$(this).attr("style","background-image: linear-gradient(#ed1a3d, #ed1a3d), linear-gradient(#ed1a3d, #ed1a3d) !important;");
					$(this).val('');
					$(this).prev().addClass('active');
					$(this).next().html(""+title+" cannot be blank!")
					return_state=false;
				}else if($(this).val().length<6){
					//$(this).attr("style","background-image: linear-gradient(#ed1a3d, #ed1a3d), linear-gradient(#ed1a3d, #ed1a3d) !important;");
					$(this).val('');
					$(this).next().html(""+title+" should be min 6 char!")
					$(this).prev().addClass('active');
					return_state=false;
				}else{
					//$(this).css("border-bottom","1px solid green");
				}
			break;
			case"email":
				var re=new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
				if($(this).val()==$(this).attr("placeholder")||$(this).val()==""){
					//$(this).attr("style","background-image: linear-gradient(#ed1a3d, #ed1a3d), linear-gradient(#ed1a3d, #ed1a3d) !important;");
					$(this).val('');
					$(this).prev().addClass('active');
					$(this).next().html(""+title+" cannot be blank!")
					return_state=false;
				}
				else if(!re.test($(this).val())){
					//$(this).attr("style","background-image: linear-gradient(#ed1a3d, #ed1a3d), linear-gradient(#ed1a3d, #ed1a3d) !important;");
					//$(this).val('');
					$(this).prev().addClass('active');
					$(this).next().html(""+title+" is not valid email address!")
					return_state=false;
				}else{
					//$(this).css("border-bottom","1px solid green");
				}
			break;
			
			case "validemail":
				if($(this).val()!=""){
					var re=new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
					if(!re.test($(this).val())){
						//$(this).attr("style","background-image: linear-gradient(#ed1a3d, #ed1a3d), linear-gradient(#ed1a3d, #ed1a3d) !important;");
						//$(this).val('');
						$(this).prev().addClass('active');
						$(this).next().html(""+title+" is not valid email address!")
						return_state=false;
					}else{
						//$(this).css("border-bottom","1px solid green");
					}
				}else{
					//$(this).css("border-bottom","1px solid green");
				}
			break;
			
			case"number":
				if($(this).val()==$(this).attr("placeholder")||$(this).val()==""){
					//$(this).attr("style","background-image: linear-gradient(#ed1a3d, #ed1a3d), linear-gradient(#ed1a3d, #ed1a3d) !important;");
					$(this).val('');
					$(this).prev().addClass('active');
					$(this).next().html(""+title+" cannot be blank!")
					return_state=false;
				}else if($(this).val().length<10){
					//$(this).attr("style","background-image: linear-gradient(#ed1a3d, #ed1a3d), linear-gradient(#ed1a3d, #ed1a3d) !important;");
					$(this).val('');
					$(this).prev().addClass('active');
					$(this).next().html("Enter Valid Mobile Number!")
					return_state=false;
				}else if(isNaN($(this).val())){
					//$(this).attr("style","background-image: linear-gradient(#ed1a3d, #ed1a3d), linear-gradient(#ed1a3d, #ed1a3d) !important;");
					$(this).val('');
					$(this).prev().addClass('active');
					$(this).next().html(""+title+" is not valid number!")
					return_state=false;
				}else{
					//$(this).css("border-bottom","1px solid green");
				}
			break;
		}
	});
	if(return_state == true){
		if(container == '#gift_voucher_form'){
			if($('.agree_checkbox').prop("checked") == true){
				var response = grecaptcha.getResponse();
				if(response.length == 0) {
					if($(".g-recaptcha").html() != "" && $(".g-recaptcha").html() != undefined){
						$(".g-recaptcha").css("border","1px solid #ff0000");
						return false; 
					}
				}
				else { 
					return true;
				}
			}
			else {
				alertval("Alert", "Kindly agree to terms and conditions.");
				return false;
            }
		}
		else {
			var response = grecaptcha.getResponse();
			if(response.length == 0) {
				if($(".g-recaptcha").html() != "" && $(".g-recaptcha").html() != undefined){
					$(".g-recaptcha").css("border","1px solid #ff0000");
					return false; 
				}
			}
			else { 
				return true;
			}
		}
}
return false;}

function resizeImage_jquery(imgcontainer,reqwidth,reqheight){var tempimg2=new Image();var newwidth,newheight;tempimg2.src=$(imgcontainer).attr("src");var imgname=$(imgcontainer);tempimg2.onload=function(){if(tempimg2.height>tempimg2.width){newwidth=reqwidth;newheight=tempimg2.height*(newwidth/tempimg2.width)}else{newheight=reqheight;newwidth=tempimg2.width*(newheight/tempimg2.height)}$(imgname).css({"height":newheight,"width":newwidth})}}function lazyloader(defaultimg){$(document).find("img.lazyload").each(function(){if(($(this).offset().top-100)<$(window).height()+$(document).scrollTop()&&($(this).offset().left)<$(window).width()+$(document).scrollLeft()){if($(this).attr("lazysrc")!=""){$(this).attr("src",$(this).attr("lazysrc"));$(this).attr("lazysrc","")
$(this).css({opacity:0})
$(this).load(function(){var img=$(this)
setTimeout(function(){resizeImage_jquery($(img),$(img).outerWidth(),$(img).outerHeight())
$(img).animate({opacity:1},500);},500)})}}else{if(typeof(defaultimg)!='undefined'){$(this).attr("src",defaultimg)}}$(this).load(function(){resizeImage_jquery($(this),$(this).outerWidth(),$(this).outerHeight())})})
$(window).scroll(function(){$(document).find("img.lazyload").each(function(){if(($(this).offset().top-100)<$(window).height()+$(document).scrollTop()&&($(this).offset().left)<$(window).width()+$(document).scrollLeft()){if($(this).attr("lazysrc")!=""){$(this).attr("src",$(this).attr("lazysrc"));$(this).attr("lazysrc","")
$(this).css({opacity:0})
$(this).load(function(){var img=$(this)
setTimeout(function(){resizeImage_jquery($(img),$(img).outerWidth(),$(img).outerHeight())
$(img).animate({opacity:1},500);},500)})}}});})}function initialize_lightbox(container,float){var bg_element=$("<div class=\"overlay-background\"></div>")
$(bg_element).css({"position":"fixed",top:0,left:0,"background-color":"#000","opacity":0.4,"z-index":499,"display":"none",height:$(window).innerHeight(),width:$(window).innerWidth(),})
$(container).data("position",$(container).css("position"))
$(container).hide();var closebtn=$("<img style=\"position:absolute;top:0;right:0;width:50px;height:50px;cursor:pointer;\" src=\"./images/close-icon.png\" />");$(closebtn).click(function(){$(this).parent().fadeOut("slow",function(){$(this).parent().css("position",$(this).parent().data("position"))});$(bg_element).fadeOut("slow",function(){$(this).remove();})})
$(container).append(closebtn)
if(float=="fixed"){$(container).css("position",float);$(container).css({"top":50,"left":((window.innerWidth-$(container).outerWidth())/2)})}else{$(container).css("position",float);$(container).css({"top":(window.innerHeight-$(container).outerHeight())/2,"left":((window.innerWidth-$(container).outerWidth())/2)})}$("html,body").prepend(bg_element)
$(container).css("z-index",500);$(container).fadeIn("slow");$(bg_element).fadeIn("slow");$('html,body').animate({scrollTop:$(container).offset().top},500);}function apply_pagination(container,itemelement,itemsperpage){var pageitems=$(container).children(itemelement).length
var totalpages=Math.ceil(pageitems/itemsperpage);var isClicked=false;if(pageitems<=itemsperpage){return;}var bulletcontainer=$("<div class=\"bulletcontainer\"></div>")
for(var i=0;i<totalpages;i++){if(i==0){var bulleticons=$("<a href=\"javascript:void(0)\" class=\"bulleticon\" position=\""+(i)+"\" itemsperpage=\""+itemsperpage+"\">&nbsp;</a>")}else{var bulleticons=$("<a href=\"javascript:void(0)\" class=\"bulleticon bulletinactive\" position=\""+(i)+"\" itemsperpage=\""+itemsperpage+"\">&nbsp;</a>")}$(bulleticons).click(function(){if(isClicked){return;}isClicked=true;$(this).parent().find(".bulleticon").addClass("bulletinactive");var position=$(this).attr("position");var itemsperpage=$(this).attr("itemsperpage");var currposition=(position*itemsperpage);$(this).closest(container).children(itemelement).hide();for(var i=0;i<itemsperpage;i++){$(this).closest(container).children(itemelement+":nth-child("+(parseInt(currposition)+parseInt(i)+1)+")").fadeIn("slow",function(){isClicked=false;})}$(this).removeClass("bulletinactive");$(bulletcontainer).show();})
$(bulletcontainer).append(bulleticons);}$(container).append(bulletcontainer)
$(container).children(itemelement).hide();for(var i=0;i<itemsperpage;i++){$(container).children(itemelement+":nth-child("+(parseInt(0)+parseInt(i)+1)+")").fadeIn("slow")}$(bulletcontainer).show();}function apply_accordian(){$(document).find(".myaccordian").each(function(){var initialdirection=$(this).attr("initialdirection");if(initialdirection=="up"){var arrow=$("<div class=\"myaccordianarr accordian-arrow-down\" direction=\"down\">&nbsp;</div>")}else{var arrow=$("<div class=\"myaccordianarr accordian-arrow-down\" direction=\"up\">&nbsp;</div>")}$(this).append(arrow);$(this).click(function(){var target=$(this).attr("targetaccordian");if($(this).find(".myaccordianarr").attr("direction")=="down"){$(target).slideUp();$(this).find(".myaccordianarr").removeClass("accordian-arrow-down");$(this).find(".myaccordianarr").addClass("accordian-arrow-up");$(this).find(".myaccordianarr").attr("direction","up")}else{$(target).slideDown();$(this).find(".myaccordianarr").addClass("accordian-arrow-down");$(this).find(".myaccordianarr").removeClass("accordian-arrow-up");$(this).find(".myaccordianarr").attr("direction","down")}})
$(this).trigger("click");})}function apply_tabination(container,element){var totalitems=$(container).children(element).length
var tabcontainer=$("<div class=\"tabcontainer\"></div>")
var isClicked=false;var tabinationtabs="<ul>"
var count=0;$(container).children(element).each(function(){var tabtitle=$(this).attr("tabtitle")
if(count==0){tabinationtabs+="<li class=\"tabinationtabs active\" show=\""+count+"\" >"+tabtitle+"</li>"}else{tabinationtabs+="<li class=\"tabinationtabs\" show=\""+count+"\">"+tabtitle+"</li>"}count++;})
tabinationtabs+="</ul> <div class='clear'></div>"
$(tabcontainer).html(tabinationtabs);$('.custom-pager .container').append(tabcontainer);$(tabcontainer).find("li").click(function(){isClicked=true;$('.tabination').find(element).hide();$(this).parents('ul').find("li").removeClass("active");$(this).addClass("active");$('.tabination').find(element+":eq("+$(this).attr("show")+")").fadeIn("slow",function(){isClicked=false;});})
$(container).children(element).hide();$(container).children(element+":lt(1)").show();}function apply_carousel(container,timing){var count=0;var currentitem=0;var t;var clickenable=true;var leftbtn=$("<div class=\"carousel-leftbtn\"></div>")
var rightbtn=$("<div class=\"carousel-rightbtn\"></div>")
$(container).find(".caritem").each(function(){var img=$(this).find("img");})
$(container).find(".caritem").hide();var moveforeward=function(){clickenable=false;$(container).children(".caritem:eq("+currentitem+")").css("left",0)
$(container).children(".caritem:eq("+currentitem+")").css("z-index",90);$(container).children(".caritem:eq("+currentitem+")")
$(container).children(".caritem:eq("+currentitem+")").animate({left:-$(container).outerWidth()},timing/4,function(){$(this).hide();clickenable=true;if(typeof($(this).attr("postslide"))!="undefined"){$(this).removeClass($(this).attr("postslide"))}})
if(currentitem>=($(container).find(".caritem").length-1)){currentitem=0;}else{currentitem++;}$(container).children(".caritem:eq("+(currentitem)+")").css("left",$(container).outerWidth())
$(container).children(".caritem:eq("+(currentitem)+")").show()
$(container).children(".caritem:eq("+currentitem+")").css("z-index",100);$(container).children(".caritem:eq("+(currentitem)+")").animate({left:0},timing/4,function(){if(typeof($(this).attr("postslide"))!="undefined"){$(this).addClass($(this).attr("postslide"))}})}
var movebackward=function(){clickenable=false;$(container).children(".caritem:eq("+currentitem+")").css("left",0)
$(container).children(".caritem:eq("+currentitem+")").css("z-index",100);$(container).children(".caritem:eq("+currentitem+")").animate({left:$(container).outerWidth()},timing/4,function(){$(this).hide();clickenable=true;if(typeof($(this).attr("postslide"))!="undefined"){$(this).removeClass($(this).attr("postslide"))}})
if(currentitem<1){currentitem=($(container).find(".caritem").length-1);}else{currentitem--;}$(container).children(".caritem:eq("+(currentitem)+")").css("left",-$(container).outerWidth())
$(container).children(".caritem:eq("+(currentitem)+")").show()
$(container).children(".caritem:eq("+currentitem+")").css("z-index",90);$(container).children(".caritem:eq("+(currentitem)+")").animate({left:0},timing/4,function(){if(typeof($(this).attr("postslide"))!="undefined"){$(this).addClass($(this).attr("postslide"))}})}
$(container).mouseenter(function(){clearInterval(t)
$(rightbtn).addClass("showbtn");$(leftbtn).addClass("showbtn");})
$(container).mouseout(function(){clearInterval(t)
t=setInterval(moveforeward,timing);$(rightbtn).removeClass("showbtn");$(leftbtn).removeClass("showbtn");})
$(leftbtn).mouseenter(function(){clearInterval(t)})
$(rightbtn).mouseenter(function(){clearInterval(t)})
$(container).mouseover(function(){$(rightbtn).addClass("showbtn");$(leftbtn).addClass("showbtn");})
$(leftbtn).click(function(){if(clickenable){movebackward()}})
$(rightbtn).click(function(){if(clickenable){moveforeward()}})
$(leftbtn).css("z-index",110);$(rightbtn).css("z-index",110);$(container).append(leftbtn)
$(container).append(rightbtn)
var leftmargin=($(leftbtn).outerWidth()/2)+"px"
$(leftbtn).css({top:(($(container).outerHeight()-$(leftbtn).outerHeight())/2)+"px",left:leftmargin})
var rightmargin=(($(container).outerWidth()-$(rightbtn).outerWidth())-($(rightbtn).outerWidth()/2))+"px"
$(rightbtn).css({top:(($(container).outerHeight()-$(rightbtn).outerHeight())/2)+"px",left:rightmargin})
$(container).children(".caritem:eq("+currentitem+")").show()
t=setInterval(moveforeward,timing);}function apply_hideshow(element){var show=$(element).attr("show");var hide=$(element).attr("hide")
var show=show.split("|");var hide=hide.split("|")
for(var i=0;i<show.length;i++){$(show[i]).fadeIn("slow",function(){if(typeof($(this).attr("postshow"))!="undefined"){$(this).addClass($(this).attr("postshow"))}});}for(var i=0;i<hide.length;i++){$(hide[i]).fadeOut("slow",function(){if(typeof($(this).attr("postshow"))!="undefined"){$(this).removeClass($(this).attr("postshow"))}});}}function apply_lazyappear(){$(document).find(".lazyappear").each(function(){var appear=$(this).attr("appear");$(this).data("appear","no")
$(this).addClass($(this).attr("preappear"))})
$(window).scroll(function(){$(document).find(".lazyappear").each(function(){if(($(this).offset().top-50)<$(window).height()+$(document).scrollTop()&&($(this).offset().left)<$(window).width()+$(document).scrollLeft()){if($(this).data("appear")=="no"){$(this).data("appear","yes")
$(this).addClass($(this).attr("postappear"))}}})})}

function alertval(title, desc){
	var randval=Math.floor((Math.random()*100)+1);
	$("body").append("<div id='dialoconfirm"+randval+"' title='"+title+"' style='display:none;'><p><span class='ui-icon ui-icon-alert' style='float:left; margin:12px 12px 20px 0;'></span>"+desc+"</p></div>").css("overflow","hidden");
	$("#dialoconfirm"+randval).dialog({
      resizable: false,
      height: "auto",
      width: 400,
      modal: true,
      buttons: {
        "OK": function() {
	 	 $("body").css("overflow","auto");
          $( this ).dialog( "close" );
        }
      }
    });	
}
	
$(window).load(function(){
	var parameter=window.location.href.slice(window.location.href.indexOf('?')+1).split('&');
	var decodedparameter=decodeURIComponent(parameter)
	var param=decodedparameter.split('=');
	if(param[0]=="enquiry"){
		alertval("Alert","Your Enquiry has been submitted successfully. Our team will contact you shortly.");
	}
	else if(param[0]=="franchise"){
		alertval("Alert","Your franchise enquiry has been submitted successfully. Our team will contact you shortly.");
	}
	else if(param[0]=="feedback"){
		alertval("Alert","Your feedback has been submitted successfully. Our team will contact you shortly.");
	}
	else if(param[0]=="event"){
		alertval("Alert","Your Enquiry has been submitted successfully. Our team will contact you shortly.");
	}
	else if(param[0]=="career"){
		alertval("Alert","Your Job application has been submitted successfully. Our team will contact you shortly.");
	}
	else if(param[0]=="vendor"){
		alertval("Alert","Your vendor registration details submitted successfully. Our team will contact you shortly.");
	}
	else if(param[0]=="gift_voucher"){
		alertval("Alert","Your Gift voucher details submitted successfully. Our team will contact you shortly.");
	}
});