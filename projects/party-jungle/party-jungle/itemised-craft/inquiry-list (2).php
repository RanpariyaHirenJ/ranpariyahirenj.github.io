<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<script src="//code.jquery.com/jquery-1.10.2.js"></script>
<script type="text/javascript" src="scripts/js_class.js"></script>
<script type="text/javascript" src="scripts/jquery.slimscroll.min.js"></script>
<script type="text/javascript">
	$(function(){		
		$('.scroll-container').slimScroll({
		  height:170,
		  position: 'right',			
		  railVisible: true,
		  wheelStep:1,
		  alwaysVisible: false,			
	  });
	  
	  $(".product-properties").find("select").prop("disabled",true);
	  
	  $("[name=place-inquiry]").click(function(){
		initialize_lightbox('.product-detail','fixed');	  
	  })
	  
	})
	
</script>
<title>Untitled Document</title>
<style>
* {
	font-family:Arial, Helvetica, sans-serif;
}
.main-container {
	width:1024px;
	margin:auto;
	overflow:auto;
	z-index:90;
}
.inquiry-list {
	padding:0px;
	overflow:auto;
	list-style:none;
	margin:0px;
}
.inquiry-list li {
	width:250px;
	height:400px;
	text-align:center;
	border:#0F3 solid 5px;
	border-radius:5px;
	float:left;
	margin:25px;
	position:relative;
	overflow:hidden;
}
.inquiry-list li .inquiry-product-img {
	width:100%;
	margin-bottom:0px;
}
.inquiry-list li .product-name {
	background-color:#666;
	color:#FFF;
	padding:5px 0 5px 0;
	margin:0;
}
.inquiry-list li .product-properties {
	color:#666;
	padding:5px;
	font-size:14px;
	text-align:left;
}
.inquiry-list li .product-properties label {
	display:inline-block;
	width:100%;
	margin-bottom:5px;
	font-weight:bold;
}
.inquiry-list li .product-properties select {
	width:100%;
	border:#CCC solid 1px;
	font-size:14px;
	color:#666;
	
}
.inquiry-list li .product-properties select:last-child {
	margin-bottom:10px;
}
.inquiry-delete-btn {
	position:absolute;
	top:0;
	right:0;
	cursor:pointer;
}
.scroll-container {
	overflow:hidden;
	border:#CCC solid 1px;
	padding:0px 10px 0px 5px;
}
.inquiry-btns{float:right;margin-top:30px;}
.inquiry-btns [type=button]{min-width:150px;padding:5px;color:#FFF;background-color:#333;cursor:pointer;border:#666 solid 1px;}
.inquiry-btns [type=button]:hover{color:#333;background-color:#FFF}

.product-detail{position:absolute;width:600px;height:505px;background-color:#FFF;z-index:100;border:#666 solid 5px;border-radius:10px 10px 0 0;overflow:hidden;display:none;}
.product-title-header{height:30px;width:100%;background-color:#333;margin-bottom:10px;color:#FFF;padding:5px;}
.product-container-image{width:210px;height:auto;margin:0 10px;float:left;}
.properties-btn{text-align:center;margin:5px 0 5px 0}
.properties-btn [type=submit],.properties-btn [type=button]{min-width:125px;padding:5px;color:#FFF;background-color:#333;cursor:pointer;border:#666 solid 1px;}
.properties-btn [type=submit]:hover,.properties-btn [type=button]:hover{color:#333;background-color:#FFF}
.form-element [type=text],.form-element textarea{width:95%;height:40px;margin:10px 5px 10px 5px;color:#333;font-size:16px;padding:5px;vertical-align:text-top;}
.form-element textarea{height:125px;}

</style>
</head>
<body>
<div class="product-detail">
	<div class="product-title-header">Kindly fill in your details</div>
    <div class="product-container">
	   <div class="form-element"><input name="" type="text" placeholder="Kindly enter your Name" /></div>
       <div class="form-element"><input name="" type="text" placeholder="Kindly enter your Email" /></div>        
       <div class="form-element"><input name="" type="text" placeholder="Kindly enter your Contact No" /></div>        
       <div class="form-element"><textarea name="" cols="" rows="" placeholder="Kindly type your message if Any"></textarea></div>                
       <div class="properties-btn">
       		<input name="add" type="submit" value="Place Inquiry"/>&nbsp;
            <input name="cancel" type="button" value="Cancel"/>
       </div>
    </div>
</div>
<div class="main-container">
  <div class="inquiry-btns">
  		<input name="place-inquiry" type="button" value="Place Inquiry" />&nbsp;
        <input name="add-items" type="button" value="Add More Items" />
  </div>
  <h1>Your Inquiry Cart</h1>
  <hr/>
  <ul class="inquiry-list">
    <li>
      <div class="inquiry-delete-btn"><img src="images/close-icon.png" width="43" height="43" /></div>
      <img src="images/IMG_0250.JPG" class="inquiry-product-img"/>
      <div class="product-name">Here goes the product name</div>
      <div class="product-properties">
        <div class="scroll-container">
          <label>Property One</label>
          <select name="">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
          <hr/>
          <label>Property Two</label>
          <select name="">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
          <hr/>
          <label>Property Three</label>         
          <select name="">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
          <hr/>
          <label>Property Four</label>
          <select name="">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>		  
        </div>
      </div>
    </li>
    <li>
      <div class="inquiry-delete-btn"><img src="images/close-icon.png" width="43" height="43" /></div>
      <img src="images/IMG_0250.JPG" class="inquiry-product-img"/>
      <div class="product-name">Here goes the product name</div>
      <div class="product-properties">
        <div class="scroll-container">
          <label>Property One</label>
          <select name="">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
          <hr/>
          <label>Property Two</label>
          <select name="">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
          <hr/>
          <label>Property Three</label>         
          <select name="">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
          <hr/>
          <label>Property Four</label>
          <select name="">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>		  
        </div>
      </div>
    </li>
    <li>
      <div class="inquiry-delete-btn"><img src="images/close-icon.png" width="43" height="43" /></div>
      <img src="images/IMG_0250.JPG" class="inquiry-product-img"/>
      <div class="product-name">Here goes the product name</div>
      <div class="product-properties">
        <div class="scroll-container">
          <label>Property One</label>
          <select name="">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
          <hr/>
          <label>Property Two</label>
          <select name="">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
          <hr/>
          <label>Property Three</label>         
          <select name="">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
          <hr/>
          <label>Property Four</label>
          <select name="">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>		  
        </div>
      </div>
    </li>
    <li>
      <div class="inquiry-delete-btn"><img src="images/close-icon.png" width="43" height="43" /></div>
      <img src="images/IMG_0250.JPG" class="inquiry-product-img"/>
      <div class="product-name">Here goes the product name</div>
      <div class="product-properties">
        <div class="scroll-container">
          <label>Property One</label>
          <select name="">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
          <hr/>
          <label>Property Two</label>
          <select name="">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
          <hr/>
          <label>Property Three</label>         
          <select name="">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
          <hr/>
          <label>Property Four</label>
          <select name="">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>		  
        </div>
      </div>
    </li>
  </ul> 
</div>
</body>
</html>
