<?php
include("user_global.php");
$photo_obj = new img_manup($photos);

if(isset($_REQUEST['action']))
{
	switch($_REQUEST['action'])
	{
		case"delete":
			
			if (isset($_REQUEST['item'])) 
			{
				foreach($_SESSION['wishlist'] as $key => $val)
				{
					if($val[0] == $_REQUEST['item'])
					{
						unset($_SESSION['wishlist'][$key]);
					}
				}
			}
				
			if(empty($_SESSION['wishlist']))
			{ 
				unset($_SESSION['wishlist']);
			}
			header('Location: inquiry-list.php?msg=Product has been removed from cart');
			
		break;
		
		
		case"Place Inquiry":
			
			$data = "";
		
			$name = $db_object->sanatize_string($_REQUEST['name']);
			$email = $db_object->sanatize_string($_REQUEST['email']);
			$phone = $db_object->sanatize_string($_REQUEST['phone']);
			$msg = $db_object->sanatize_string($_REQUEST['msg']);
			
			$data .= "<table width=\"600\" border=\"0\" cellspacing=\"0\" style=\"font-family:Arial, Helvetica, sans-serif;font-size:14px;color:#666;border:#333 solid 1px;\">
					  <tr>
						<td colspan=\"4\"><img src=\"http://www.kalptech.com/clients/party-jungle/images/logo.png\" width=\"142\" height=\"82\"></td>
					  </tr>
					  <tr>
						<td colspan=\"4\" align=\"center\" style=\"border:#999 solid 1px;\"><strong>WEB INQUIRY</strong></td>
					  </tr>
					  <tr>
						<td colspan=\"4\" align=\"left\" style=\"border:#999 solid 1px;\"><strong>User Detail</strong></td>
					  </tr>
					  <tr>
						<td width=\"119\" align=\"right\" style=\"height:30px;\">Name :</td>
						<td width=\"172\">".$name."</td>
						<td width=\"106\" align=\"right\"><span style=\"height:30px;\">Contact:</span></td>
						<td width=\"193\">".$phone."</td>
					  </tr>
					  <tr>
						<td align=\"right\" style=\"height:30px;\">Email :</td>
						<td colspan=\"3\">".$email."</td>
					  </tr>
					  <tr>
						<td align=\"right\" style=\"height:30px;\">Message :</td>
						<td colspan=\"3\">".$msg."</td>
					  </tr>
					  <tr>
						<td colspan=\"4\" align=\"left\" style=\"height:30px;\">&nbsp;</td>
					  </tr>
					  <tr>
						<td colspan=\"4\" align=\"left\" style=\"height:30px;\"><strong>Product Detail</strong></td>
					  </tr>";
					  
					  $item_id = "";
					$i = 1;
					foreach($_SESSION['wishlist'] as $key => $val)
					{
						if($item_id == "")
						{
							$item_id = $val[0];
						}
						$sql = "SELECT * FROM craft_items_master WHERE item_id=$val[0]";
						$result = $db_object->return_query($sql);
						
						if($item_id != $val[0] || $i == 1)
						{
							$item_id = $val[0];
				$data .= "<tr>
						<td align=\"left\" valign=\"top\" style=\"height:30px;\">". $result['item_name']." :</td>
						<td colspan=\"3\" align=\"left\" style=\"height:30px;\">";
						foreach($_SESSION['wishlist'] as $keys => $vals)
						{
							if($val[0] == $vals[0])
							{
							$sql1 = "SELECT * FROM craft_items_properties WHERE property_id=".$vals[1];
							$result1 = $db_object->return_query($sql1);
							
							$sql2 = "SELECT * FROM craft_items_properties_value WHERE property_value_id=".$vals[2];
							$result2 = $db_object->return_query($sql2);
							
						  $data .= $result1['property_name']." : ".$result2['property_value_name']."<br>";
							}
						 
						  
							}
						}
				$data .= "</td>
					  </tr>";
					  $i++;
						}
				$data .="</table>";
			
			$from = $email;
			$to = "om.maurya0207@gmail.com";
			send_email($to,$from,"Product inquiry",$data);
			unset($_SESSION['wishlist']);
			redirect("thank-you.htm");
		break;
	}
}
?>
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
		  height:210,
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
	height:140px;
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
    <form action="inquiry-list.php" method="post" onSubmit="return form_validate_jquery('.product-container')">
    <div class="product-container">
	   <div class="form-element"><input name="name" type="text" placeholder="Kindly enter your Name" validation="text" title="User Name" /></div>
       <div class="form-element"><input name="email" type="text" placeholder="Kindly enter your Email" validation="email" title="User Email" /></div>        
       <div class="form-element"><input name="phone" type="text" placeholder="Kindly enter your Contact No" validation="number" title="User Contact" /></div>        
       <div class="form-element"><textarea name="msg" cols="" rows="" placeholder="Kindly type your message if Any"></textarea></div>                
       <div class="properties-btn">
       		<input name="action" type="submit" value="Place Inquiry"/>&nbsp;
            <input name="cancel" type="button" value="Cancel"/>
       </div>
    </div>
    </form>
</div>
<div class="main-container">

<div class="inquiry-btns">
<?php
if(isset($_SESSION['wishlist']))
  {
	  ?>
  		<input name="place-inquiry" type="button" value="Place Inquiry" />&nbsp;
         <?php
  }
  ?>
        <input name="add-items" type="button" value="Add More Items" onclick="location.assign('itemized-craft.php');" />
  </div>
 
  <h1>Your Inquiry Cart</h1>
  <hr/>
  <ul class="inquiry-list">
  <?php
  
  if(isset($_SESSION['wishlist']))
  {
  	$item_id = "";
	$i = 1;
	foreach($_SESSION['wishlist'] as $key => $val)
	{
		if($item_id == "")
		{
			$item_id = $val[0];
		}
		$sql = "SELECT * FROM craft_items_master WHERE item_id=$val[0]";
		$result = $db_object->return_query($sql);
		
		if($item_id != $val[0] || $i == 1)
		{
			$item_id = $val[0];
  ?>
    <li>
      <div class="inquiry-delete-btn"><a href="inquiry-list.php?action=delete&item=<?php echo $item_id ?>"><img src="images/close-icon.png" width="43" height="43" /></a></div>
      <?php 
		if($result['item_photo'] != "")
		{
			?>
            <img src="item-photos/<?php echo get_thumbnail($result['item_photo']) ?>" class="inquiry-product-img"/>
            <?php
			//echo $photo_obj->imageResize(get_thumbnail($result['item_photo']),100);
		}
		else
		{ 
	?>
		 <img src="./item-photos/no-photo.png" class="inquiry-product-img" />
	<?php 
		} ?>
      <!--<img src="images/IMG_0250.JPG" class="inquiry-product-img"/>-->
      <div class="product-name"><?php echo $result['item_name'] ?></div>
      <div class="product-properties">
        <div class="scroll-container">
        <?php
        foreach($_SESSION['wishlist'] as $keys => $vals)
		{
			if($val[0] == $vals[0])
			{
			$sql1 = "SELECT * FROM craft_items_properties WHERE property_id=".$vals[1];
			$result1 = $db_object->return_query($sql1);
			
			$sql2 = "SELECT * FROM craft_items_properties_value WHERE property_value_id=".$vals[2];
			$result2 = $db_object->return_query($sql2);
			?>
          <label><?php echo $result1['property_name'] ?></label>
          <select name="">
            <option><?php echo $result2['property_value_name'] ?></option>
          </select>
          <hr/>
          <?php
			}
		}
		  ?>
        </div>
      </div>
    </li>
    <?php
		}
		$i++;
	}
  }
  else
  {
	  ?>
      <h1 align="center" style="color:#999; margin-top:100px;">Empty Wish List</h1>
      <?php
  }
	?>
  </ul>
</div>
</body>
</html>
