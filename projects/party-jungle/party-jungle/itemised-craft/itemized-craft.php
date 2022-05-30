<?php
 //include("../admin/admin_global.php");
  ?>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"><head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Party-Jungle</title>
<script src="//code.jquery.com/jquery-1.10.2.js"></script>
<script type="text/javascript" src="scripts/js_class.js"></script>
<script type="text/javascript" src="scripts/jquery.slimscroll.min.js"></script>
<script type="text/javascript">
$(function(){
	$(".product-list li").mouseenter(function(){
		$(this).find(".product-description").animate({
			top:0,
			opacity:9,
		},500)
	})
	
	$(".product-list li").mouseleave(function(){
		$(this).find(".product-description").animate({
			top:300,
			opacity:0,
		},500)
	})
	
	$(".prod-img").load(function(){
		resizeImage_jquery(this,300,300);
		$(this).css({
			left:(-$(this).outerWidth()/4),
			top:0,	
		})		
	});
	
	$('.properties-container').slimScroll({
		  height:240,
		  position: 'right',			
		  railVisible: true,
		  wheelStep:1,
		  alwaysVisible: false,			
	  });
	  $(".product-description").find("img").click(function(){
		initialize_lightbox('.product-detail','fixed');	  
	  })
})


</script>
<style>
*{
	font-family:Arial, Helvetica, sans-serif;		
}
.main-container {
	width:915px;
	margin:auto;
	overflow:auto;
	z-index:90;
}
.product-list {
	padding:0px;
	overflow:auto;
	list-style:none;
	margin:0px;
}
.product-list li {
	width:250px;
	height:300px;
	text-align:center;
	border:#0F3 solid 2px;
	border-radius:5px;
	float:left;
	margin:25px;
	position:relative;
	overflow:hidden;
}
.product-name {
	position:absolute;
	width:100%;
	min-height:30px;
	overflow:hidden;
	text-align:center;
	bottom:0;
	color:#FFF;
	font-size:14px;
	padding-top:10px;
	background:url(images/transparent.png) repeat;
	font-weight:bold;
	z-index:95;
}
.product-description {
	position:absolute;
	width:250px;
	height:250px;
	overflow:hidden;
	text-align:left;
	top:300px;
	color:#FFF;
	font-size:14px;
	padding-top:10px;
	background:url(images/transparent-green.png) repeat;
	font-weight:bold;
	z-index:90;
}
/* @keyframes example {
 0% {
transform: scale(1, 1);
-ms-transform: scale(1, 1);
-webkit-transform: scale(1, 1);
}
 50% {
transform: scale(1.5, 1.5);
-ms-transform: scale(1.5, 1.5);
-webkit-transform: scale(1.5, 1.5);
}
 100% {
transform: scale(1, 1);
-ms-transform: scale(1, 1);
-webkit-transform: scale(1, 1);
}
}*/
.product-description * img {
	cursor:pointer;
}
/*.product-description:hover * img {
	-webkit-animation: example 2s infinite;
	animation: example 2s infinite;
}*/

.product-list li .prod-img{
	/*-webkit-animation: example 15s 1;
	animation: example 15s 1;*/
	position:absolute;
	-webkit-transition: transform 3s, -webkit-transform 3s; 
    transition: transform 3s, -webkit-transform 3s;
	
	transform: scale(1, 1);
	-ms-transform: scale(1, 1);
	-webkit-transform: scale(1, 1);
}

.product-list li:hover .prod-img{
	/*-webkit-animation: example 15s 1;
	animation: example 15s 1;*/
	transform: scale(1.5, 1.5);
	-ms-transform: scale(1.5, 1.5);
	-webkit-transform: scale(1.5, 1.5);
}
.product-detail{position:absolute;width:600px;height:505px;background-color:#FFF;z-index:100;border:#666 solid 5px;border-radius:10px 10px 0 0;overflow:hidden;display:none;}
.product-title-header{height:30px;width:100%;background-color:#333;margin-bottom:10px;color:#FFF;padding:5px;}
.product-container-image{width:210px;height:auto;margin:0 10px;float:left;}
.product-properties{border:#999 solid 2px;width:45%;margin:5px;float:left;padding:5px;}
.property-list{overflow:auto;width:100%;}
.property-list img{float:left;width:100px;margin:0 5px 0 0;}
.property-value{list-style:none;border:#F00 solid 1px;padding:0;margin0;}
.properties-container{height:240px;overflow-X:auto;}
.properties-btn{text-align:center;margin:5px 0 5px 0}
.properties-btn [type=submit],.properties-btn [type=button]{min-width:125px;padding:5px;color:#FFF;background-color:#333;cursor:pointer;border:#666 solid 1px;}
.properties-btn [type=submit]:hover,.properties-btn [type=button]:hover{color:#333;background-color:#FFF}
</style>
</head>
<body>
<div class="product-detail">
	<div class="product-title-header">Here goes the product name</div>
    <div class="product-container">
    	<div class="product-container-image"><img src="images/IMG_0250.JPG" style="width:100%;" /></div>
        <div class="product-container-description">Here goes the description of the product in max 300 characters...Here goes the description of the product in max 300 characters...</div>
        <div style="clear:both;margin-bottom:10px;"></div>
        <hr/>
        <div class="properties-container">
            <div class="product-properties">
                <div class="property-list">
                    <img src="images/IMG_0252.JPG"/>
                    <div class="property-name" style="font-size:12px;">This is the property name</div>
                    <select name="" style="font-size:12px;width:45%;margin-top:10px;">
                        <option>Value 1</option>
                        <option>Value 2</option>
                        <option>Value 3</option>
                        <option>Value 4</option>
                        <option>Value 5</option>
                    </select>                	                                                                
              </div>
          </div>
          <div class="product-properties">
                <div class="property-list">
                    <img src="images/IMG_0252.JPG"/>
                    <div class="property-name" style="font-size:12px;">This is the property name</div>
                    <select name="" style="font-size:12px;width:45%;margin-top:10px;">
                        <option>Value 1</option>
                        <option>Value 2</option>
                        <option>Value 3</option>
                        <option>Value 4</option>
                        <option>Value 5</option>
                    </select>                	                                                                
              </div>
          </div>
          <div class="product-properties">
                <div class="property-list">
                    <img src="images/IMG_0252.JPG"/>
                    <div class="property-name" style="font-size:12px;">This is the property name</div>
                    <select name="" style="font-size:12px;width:45%;margin-top:10px;">
                        <option>Value 1</option>
                        <option>Value 2</option>
                        <option>Value 3</option>
                        <option>Value 4</option>
                        <option>Value 5</option>
                    </select>                	                                                                
              </div>
          </div>
          <div class="product-properties">
                <div class="property-list">
                    <img src="images/IMG_0252.JPG"/>
                    <div class="property-name" style="font-size:12px;">This is the property name</div>
                    <select name="" style="font-size:12px;width:45%;margin-top:10px;">
                        <option>Value 1</option>
                        <option>Value 2</option>
                        <option>Value 3</option>
                        <option>Value 4</option>
                        <option>Value 5</option>
                    </select>                	                                                                
              </div>
          </div>
          <div class="product-properties">
                <div class="property-list">
                    <img src="images/IMG_0252.JPG"/>
                    <div class="property-name" style="font-size:12px;">This is the property name</div>
                    <select name="" style="font-size:12px;width:45%;margin-top:10px;">
                        <option>Value 1</option>
                        <option>Value 2</option>
                        <option>Value 3</option>
                        <option>Value 4</option>
                        <option>Value 5</option>
                    </select>                	                                                                
              </div>
          </div>
          <div class="product-properties">
                <div class="property-list">
                    <img src="images/IMG_0252.JPG"/>
                    <div class="property-name" style="font-size:12px;">This is the property name</div>
                    <select name="" style="font-size:12px;width:45%;margin-top:10px;">
                        <option>Value 1</option>
                        <option>Value 2</option>
                        <option>Value 3</option>
                        <option>Value 4</option>
                        <option>Value 5</option>
                    </select>                	                                                                
              </div>
          </div>
       </div>
       <div class="properties-btn">
       		<input name="add" type="submit" value="Add To Inquiry"/>&nbsp;
            <input name="cancel" type="button" value="Back To List"/>
       </div>
    </div>
</div>




<div class="main-container">
  <ul class="product-list">
   <li>
      <div class="product-name">Here goes the product name</div>
      <img src="images/IMG_0250.JPG" style="width:100%;" class="prod-img"/>
      <div class="product-description">
        <div style="margin-top:100px;position:absolute;width:100%;text-align:center;"><img src="images/magnifying-glass-icon.png" width="40" height="40" /></div>
        <div style="padding:5px;">Here goes the description of the product in max 300 characters...Here goes the description of the product in max 300 characters...</div>
      </div>
    </li>
      <li>
      <div class="product-name">Here goes the product name</div>
      <img src="images/IMG_0252.JPG" style="width:100%;" class="prod-img"/>
      <div class="product-description">
        <div style="margin-top:100px;position:absolute;width:100%;text-align:center;"><img src="images/magnifying-glass-icon.png" width="40" height="40" /></div>
        <div style="padding:5px;">Here goes the description of the product in max 300 characters...Here goes the description of the product in max 300 characters...</div>
      </div>
    </li>
    
     
  
     <li>
      <div class="product-name">Here goes the product name</div>
      <img src="images/IMG_0252.JPG" style="width:100%;" class="prod-img"/>
      <div class="product-description">
        <div style="margin-top:100px;position:absolute;width:100%;text-align:center;"><img src="images/magnifying-glass-icon.png" width="40" height="40" /></div>
        <div style="padding:5px;">Here goes the description of the product in max 300 characters...Here goes the description of the product in max 300 characters...</div>
      </div>
    </li> 
   
       
  </ul>
</div>
</body>
</html>