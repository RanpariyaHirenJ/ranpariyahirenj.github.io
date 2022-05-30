<?php
include("user_global.php");
$photo_obj = new img_manup($photos);
//echo "<pre>";
//print_r($_SESSION['wishlist']);
//die();

if(isset($_REQUEST['action']))
{
	switch($_REQUEST['action'])
	{
		case"delete":
			
			if (isset($_REQUEST['item'])) 
			{
				unset($_SESSION['wishlist'][$_REQUEST['item']]);
			}
			
			$count = count($_SESSION['wishlist']);
			if($count == 0 || $count == "")
			{ 
				unset($_SESSION['wishlist']);
				echo "<script type='text/javascript'>window.location.href = 'itemized-craft.php?error=Empty wishlist!!';</script>";
				//header('Location: itemized-craft.php?error=Empty wishlist!!');
				die();
			}
			
			echo "<script type='text/javascript'>window.location.href = 'inquiry-list.php?error=Product has been removed from cart';</script>";
			//header('Location: inquiry-list.php?error=Product has been removed from cart');
			
		break;
		
		
		case"Place Inquiry":
			
			$data = "";
		
			$name = $db_object->sanatize_string($_REQUEST['name']);
			$email = $db_object->sanatize_string($_REQUEST['email']);
			$phone = $db_object->sanatize_string($_REQUEST['phone']);
			$msg = $db_object->sanatize_string($_REQUEST['msg']);
			$order_date = date('Y-m-d');
			
			$db_object->execute_query("INSERT INTO enquiry_master(client_name, client_contact, client_email, order_date, enquiry_note, enquiry_status) VALUES('$name',$phone,'$email','$order_date','$msg',1)");
			
			$enquiry_id = mysqli_insert_id($db_object->conn);
			
			$data .= "<table width=\"600\" border=\"0\" cellspacing=\"0\" cellpadding=\"10;\" style=\"font-family:Arial, Helvetica, sans-serif;font-size:14px;color:#666;border:#333 solid 1px;\">
					  <tr>
						<td colspan=\"4\"><img src=\"http://www.kalptech.com/clients/party-jungle/images/logo.png\" width=\"142\" height=\"82\"></td>
					  </tr>
					  <tr>
						<td colspan=\"4\" align=\"center\" style=\"background-color:#999;font-size:18px;color:#FFF\"><strong>WEB INQUIRY</strong></td>
					  </tr>
					  <tr>
						<td colspan=\"4\" align=\"left\" style=\"border-bottom:#666 solid 1px;height:30px;\"><strong>User Detail</strong></td>
					  </tr>
					  <tr>
						<td align=\"right\"  width=\"20%\">Name :</td>
						<td colspan=\"3\">".ucwords($name)."</td>
					  </tr>
                       <tr>
						<td align=\"right\" >Contact :</td>
						<td colspan=\"3\">".$phone."</td>
					  </tr>
					  <tr>
						<td align=\"right\" >Email :</td>
						<td colspan=\"3\">".$email."</td>
					  </tr>
					  <tr>
						<td align=\"right\" valign=\"top\">Message :</td>
						<td colspan=\"3\" valign=\"top\">".ucfirst($msg)."</td>
					  </tr>					  
					  <tr>
						<td colspan=\"4\" align=\"left\" style=\"border-bottom:#666 solid 1px;height:30px;\"><strong>Product Detail</strong></td>
					  </tr>";
					  					 
					  
			foreach($_SESSION['wishlist'] as $key => $val)
			{
				$sql = "SELECT * FROM craft_items_master WHERE item_id=$val[0]";
				$result = $db_object->return_query($sql);
							
				$data .= "<tr>
						<td align=\"left\" valign=\"top\"><strong>".ucfirst($result['item_name'])."</strong></td>
						<td colspan=\"3\" align=\"left\" valign=\"top\">";
				
				$db_object->execute_query("INSERT INTO enquiry_detail(enquiry_id, item_id, product_note, quantity) VALUES($enquiry_id,$val[0],'$val[2]',$val[3])");
				$enquiry_detail_id = mysqli_insert_id($db_object->conn);
				
				foreach($val[1] as $keys => $vals)
				{
					
					$sql1 = "SELECT * FROM craft_items_properties WHERE property_id=".$vals[0];
					$result1 = $db_object->return_query($sql1);
					
					$sql2 = "SELECT * FROM craft_items_properties_value WHERE property_value_id=".$vals[1];
					$result2 = $db_object->return_query($sql2);
							
					$data .= ucfirst($result1['property_name'])." :  <strong>".ucfirst($result2['property_value_name'])."</strong><br>";
					
					$db_object->execute_query("INSERT INTO enquiry_property(enquiry_detail_id, property_id, property_value_id) VALUES($enquiry_detail_id,$vals[0],$vals[1])");
				}
				
				
				$data.="Quantity:<strong>".$val[3]."</strong>";
				
				if($val[2] != "")
				{		 
					$data .= "<br><strong>Message :</strong> ".ucfirst($val[2])."<br>";	
				}
						
				$data .= "</td>
					 </tr>";
			}
			$data .="</table>";
			
			$from = "webinquiry@thepartyjungle.com";
			$reply = $email;
			$to = "funkylinda@verizon.net,kevin.borgersen@gmail.com";
			//$to = "om.maurya0207@gmail.com,rajendra@kalptech.com";
			
			send_email($to,$from,$reply,"Product inquiry from party jungle",$data);
		
			unset($_SESSION['wishlist']);
			
			echo "<script type='text/javascript'>window.location.href = 'thank-you.htm';</script>";
       		exit();
		break;
	}
}
?>
<!doctype html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta charset="utf-8">
<title>Party-Jungle</title>
<link rel="stylesheet" type="text/css" href="styles/style.css">
<link rel="stylesheet" type="text/css" href="styles/animate.css">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<script src="//code.jquery.com/jquery-1.10.2.js"></script>
<script type="text/javascript" src="scripts/js_class.js"></script>
<script type="text/javascript" src="scripts/jquery.slimscroll.min.js"></script>
<script type="text/javascript">
	$(function(){
		if(window.innerWidth > 760)
		{		
			$('.scroll-container').slimScroll({
			  height:175,
			  position: 'right',			
			  railVisible: true,
			  wheelStep:1,
			  alwaysVisible: false,			
		  });
		}
		
	  $(".product-properties").find("select").prop("disabled",true);
	  $(".product-properties").find("textarea").prop("disabled",true);
	  
	  $("[name=place-inquiry]").click(function(){
		initialize_lightbox('.product-detail','fixed');	  
	  })
	  
	})
	
function close_overlay()
{
	$(".product-detail").find(".btn-close").trigger("click");
}	
</script>
<title>Untitled Document</title>
<style>
.main-container {
	width:1050px;
	margin:auto;
	z-index:90;
}
.inquiry-list {
	padding:0px;
	overflow:auto;
	list-style:none;
	margin-top:25px;
}
.inquiry-list li {
	width:260px;
	height:450px;
	text-align:center;
	border:#0F3 solid 5px;
	border-radius:5px;
	float:left;
	margin:25px;
	position:relative;
	overflow:hidden;
	font-family: Arial, Helvetica, sans-serif;
}
.inquiry-list li .inquiry-product-img {
	width:100%;
	margin-bottom:0px;
	height:140px;
}
.inquiry-list li .product-name {
	background-color:#666;
	color:#FFF;
	padding:5px 0 5px 0 !important;
	margin:0;
	font-size: 16px;
	font-weight:bold;
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
.inquiry-list li .product-properties select, textarea {
	width:100%;
	border:#CCC solid 1px;
	font-size:14px;
	color:#666;
}
.inquiry-list li .product-properties select:last-child {
	margin-bottom:50px;
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

.inquiry-btns {
    /* float: right; */
    margin-top: 20px;
}
.select-an-item {
  background: rgba(0, 0, 0, 0) url("images/select-item-bg.jpg") repeat fixed 0 0;
  padding: 20px 0;
}
.created-for-banner.wishlist-banner {
  background-color: #ebee5a;
  height: auto;
  padding: 110px 0 50px;
}
.inquiry-btns [type=button] {
	min-width:150px;
	padding:15px;
	color:#FFF;
	background-color:#333;
	cursor:pointer;
}
.inquiry-btns [type=button]:hover {
	color:#333;
	background-color:#FFF
}
.product-detail {
	position:absolute;
	width:360px;
	height:525px;
	background-color:#FFF;
	z-index:100;
	
	border-radius:10px 10px 0 0;
	display:none;
}
.product-title-header {
	height:38px;
	width:100%;
	background-color:#333;
	margin-bottom:10px;
	color:#FFF;
	padding:5px;
	font-size:16px
}
.product-container-image {
	width:210px;
	height:auto;
	margin:0 10px;
	float:left;
}
.properties-btn {
	text-align:center;
	margin:5px 0 5px 0
}
.properties-btn [type=submit], .properties-btn [type=button] {
	min-width:125px;
	padding:5px;
	color:#FFF;
	background-color:#333;
	cursor:pointer;
	border:#666 solid 1px;
}
.properties-btn [type=submit]:hover, .properties-btn [type=button]:hover {
	color:#333;
	background-color:#FFF
}
.form-element [type=text], .form-element textarea {
	width:95%;
	height:40px;
	margin:10px 5px 10px 5px;
	color:#333;
	font-size:16px;
	padding:5px;
	vertical-align:text-top;
	  background: #eee;
	  font: 18px ArialRoundedMTBold, Arial;
  font-weight: 600;
  border: 0px solid #000;
}
.form-element textarea {
	height:125px;
}
 @media screen and (min-width: 0) and (max-width:360px) {
 .product-detail {
 width:95%;
 margin:auto;
 position:absolute !important;
 overflow:auto;
 height:auto;
}
 .inquiry-list * {
 float:none;
}
 .inquiry-list li {
 float:none;
	/*margin-left:auto;		*/
	margin-left:auto !important;
}
.main-container {
 width:auto;
 margin-top:20px;
}
 .scroll-container {
 height:175;
 overflow-y:scroll;
}
}
 @media screen and (min-width: 0) and (max-width:760px) {
 .inquiry-list li:nth-child(odd) {
 clear:left;
 margin-left:auto;
}

 .main-container {
 width:auto;
 margin-top:20px;
}
 .scroll-container {
 height:175;
 overflow-y:scroll;
}
.inquiry-btns [type=button] {
    min-width: 150px;
    padding: 15px;
    color: #FFF;
    background-color: #333;
    cursor: pointer;
    border: #666 solid 1px;
    float: none;
    display: inline-block;
}
}
</style>
</head>
<body>
<div class="wrapper">
  <header class="header">
    <div class="container">
      <div class="logo"> <a href="index.html"><img src="images/logo.png" alt="Company Name" title="Company Name"></a> </div>
      <div class="nav">
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="packages.html">Packages & Prices </a></li>
          <li><a href="itemized-craft.php" class="active">Created For You</a></li>
          <li><a href="catering.html">Catering</a></li>
          <li><a href="cakes.html">Cakes</a></li>
          <li><a href="mom-n-me.html">Mommy & Me</a></li>
          <li><a href="parties.html">Parties at home</a></li>
          <li><a href="gallery.html">Gallery </a></li>
        </ul>
      </div>
      <strong></strong>
      <div class="clear"></div>
    </div>
    <div class="toggle-btn"> <span></span> <span></span> <span></span> </div>
  </header>
  <section class="banner created-for-banner wishlist-banner">
  	<div class="container">
	    <h3>Your Inquiry Cart</h3>
        <div class="clear"></div>
        <div class="inquiry-btns">
              <?php
			if(isset($_SESSION['wishlist']))
			  {
				  ?>
              <input name="place-inquiry" type="button" value="Place Inquiry" />
              &nbsp;
              <input name="add-items" type="button" value="Add More Items" onClick="location.assign('itemized-craft.php');" />
              <?php
			  }
			  else
			  {
					?>
              <input name="add-items" type="button" value="Add Items" onClick="location.assign('itemized-craft.php');" />
              <?php
			  }
					?>
            </div>
  	</div>
  </section>
  <section class="content-area">
    <section class="block select-an-item">
      <div class="container">
        <div class="main-container">
          <div class="product-detail">
            <div class="product-title-header">Kindly fill in your details</div>
            <form action="inquiry-list.php" method="post" onSubmit="return form_validate_jquery('.product-container')">
              <div class="product-container">
                <div class="form-element">
                  <input name="name" type="text" placeholder="Kindly enter your Name" validation="text" title="User Name" />
                </div>
                <div class="form-element">
                  <input name="email" type="text" placeholder="Kindly enter your Email" validation="email" title="User Email" />
                </div>
                <div class="form-element">
                  <input name="phone" type="text" placeholder="Kindly enter your Contact No" validation="number" title="User Contact" />
                </div>
                <div class="form-element">
                  <textarea name="msg" cols="" rows="" placeholder="Kindly type your message if Any"></textarea>
                </div>
                <div class="properties-btn">
                  <input name="action" type="submit" value="Place Inquiry"/>
                  &nbsp;
                  <input name="cancel" type="button" value="Cancel" onClick="close_overlay()"/>
                </div>
              </div>
            </form>
          </div>
          <div class="list-cnt">
          
          
          
          
          
          
             <ul class="select-item-list">
 <?php
  if(isset($_SESSION['wishlist']))
  {
		foreach($_SESSION['wishlist'] as $key => $val)
		{
			$sql = "SELECT * FROM craft_items_master WHERE item_id=$val[0]";
			$result = $db_object->return_query($sql);
			
			
			
			?>
              <li>
                <div class="product-name"><?php echo ucwords($result['item_name']);?></div>
                <?php /*?><?php if($value['item_photo'] != ""){ echo $photo_obj->imageResize(get_thumbnail($value['item_photo']),250); }?><?php */?>		
                <?php
				if($result['item_photo'] != "")
				{
					?>
                    <img src="item-photos/<?php echo $result['item_photo'] ?>" class="prod-img"/>
                    <?php
				}
				else
				{
					?>
                    <img src="item-photos/no-photo.png" class="prod-img" style="width:100%;"/>
                    <?php
				}
				?>
                
                <div class="product-description-inquiry-list">
                  <a href="inquiry-list.php?action=delete&item=<?php echo $key ?>" onClick="return confirm_delete();" style="position:absolute;display:block;right:0;top:0;">		
                  	<img src="images/close-icon.png" class="remove-item">
                  </a>
                  <div>
                  
                    <?php
             foreach($val[1] as $keys => $vals)
			{
				$sql1 = "SELECT * FROM craft_items_properties WHERE property_id=".$vals[0];
				$result1 = $db_object->return_query($sql1);
				
				$sql2 = "SELECT * FROM craft_items_properties_value WHERE property_value_id=".$vals[1];
				$result2 = $db_object->return_query($sql2);
			
             	echo ucwords($result1['property_name']) ?>
                    : <?php echo ucwords($result2['property_value_name']) ?><br>
                    <?php
          }
			?>
                    <br><div class="borderb"></div>
                    
                    <p>Quantity: <?php echo $val[3];?></p>
                    <?php
					if($val[2] != "")
					{
					?>
						<?php echo "Message"; ?> : <?php echo substr(ucfirst($val[2]),0,90);if(strlen($val[2])>90){ echo "..."; } ?>
						<?php
					}
				?>
                  </div>
                </div>
              </li>
              <?php
			  
		}
		?>
		 </ul>
		<?php 
  }
  
  else
  {
	  ?>
              <h1 align="center" style="color:#999; margin-top:100px;">Empty Wish List</h1>
              <?php
  }
	?>
           
            <div class="clear"></div>
          </div>
        </div>
      </div>
    </section>
    <!--<section class="block info-band">
      <div class="container">
        <h4>Merchandise that saves your child's memories forever!</h4>
        <p>At The Party Jungle, we are well equipped to create merchandize that can be customized for your child.
          
          Some of the items in the merchandize that we offer are water bottles, pencil boxes, lunch boxes, bags etc. </p>
      </div>
    </section>--> 
  </section>
  <footer class="footer">
    <div class="container">
      <div class="grid-layout">
        <div class="grid-3"> The Party Jungle<br>
          630 Sharrotts Road<br>
          Staten Island, NY 10309 </div>
        <div class="grid-3">
          <ul class="contact-dtls">
            <li class="phone-no">(718) 605-0000</li>
            <li class="email"><a href="mailto:info@thepartyjungle.com">info@thepartyjungle.com</a></li>
          </ul>
        </div>
        <div class="grid-3 fr">
          <p class="copy-write">&copy; 2015 - Party Jungle</p>
          <div class="social-media">
            <ul>
              <li><a href="#" class="icon facebook"></a></li>
              <li><a href="#" class="icon pintrest"></a></li>
              <li><a href="#" class="icon twitter"></a></li>
            </ul>
          </div>
          <div class="site-by">Site by <a href="http://www.kalptech.com/" target="_blank">Kalptech Systems</a></div>
        </div>
        <div class="clear"></div>
      </div>
    </div>
  </footer>
  <div class="send-inquire"> <a href="contact.html#inquire">Send Inquiry</a> </div>
</div>
<?php

if(isset($_REQUEST['error']))
{
	?>
<script type="text/javascript">
		alert("<?php echo $_REQUEST['error']; ?>");
	</script>
<?php
}
?>
<script src="scripts/common.js" type="text/javascript"></script>
</body>
</html>