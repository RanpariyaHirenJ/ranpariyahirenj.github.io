<?php
include("user_global.php");

$file_obj = new file_manup("./item-photos");
$photo_obj = new img_manup("./item-photos");

if(isset($_REQUEST['add']))
{
	switch($_REQUEST['add'])
	{
		case"Add To Wishlist":
		
			$item_id = $db_object->sanatize_value($_REQUEST['item_id']);
			$quantity = $db_object->sanatize_value($_REQUEST['quantity']);
			
			$items[0] = $item_id;						
			$count = 0;
			foreach($_POST as $key => $val)
			{
				if(is_numeric($key))
				{
					$properties[$count++] = array($key,$val);					
				}
			}
			$items[1] = $properties;
			$items[2] = $_REQUEST["user_message"];
			$items[3] = $_REQUEST["quantity"] ;
			
			
			if(isset($_SESSION['wishlist']))
			{
				$_SESSION['wishlist'] = array_merge($_SESSION['wishlist'],array($items));
			}
			else
			{
				$_SESSION['wishlist'] = array($items);
			}
			/*echo"<pre></pr>";
			print_r($_SESSION['wishlist']);
			die();*/
	
			//redirect("itemized-craft.php");
			echo "<script type='text/javascript'>window.location.href = 'itemized-craft.php';</script>";
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
<script src="scripts/jquery-min.js" type="text/javascript"></script>

<script src="//code.jquery.com/jquery-1.10.2.js"></script>
<script type="text/javascript" src="scripts/js_class.js"></script>
<script type="text/javascript" src="scripts/jquery.slimscroll.min.js"></script>
<script type="text/javascript">
<!--use ajax function-->
 function show_product_detail(getcase,item_id)
	{
		//alert(item_id);
		$.post("ajax_functions.php",
		{		
			"function": getcase,
			"item_id": item_id
		},
		function(data,status){
			//alert(data);k
			if(status == "success")
			{
			  $("#data-history").html(data);
			  initialize_lightbox('.product-detail','absolute');
			}
			else
			{
			  alert('Notification not found');
			}
			
			if(window.innerWidth > 760)
			{
				$('.properties-container').slimScroll({
				  height:220,
				  position: 'right',			
				  railVisible: true,
				  wheelStep:1,
				  alwaysVisible: false,			
			  });
			}
			
		});
}
<!--use ajax function-->

function close_overlay()
{
	$(".product-detail").find(".btn-close").trigger("click");
}

$(function(){
	/*$(".product-list li").mouseenter(function(){
		$(this).find(".product-description").animate({
			top:0,
			opacity:9,
		},250)
	})
	
	$(".product-list li").mouseleave(function(){
		$(this).find(".product-description").animate({
			top:300,
			opacity:0,
		},250)
	})*/
	
	/*$(".prod-img").each(function(){
		resizeImage_jquery(this,300,300);
		
		var lft = -(300/4);
		$(this).css({
			left:lft,
			top:0,	
		})		
	});
	*/
	if(window.innerWidth > 760)
	{
		$('.properties-container').slimScroll({
			  height:220,
			  position: 'right',			
			  railVisible: true,
			  wheelStep:1,
			  alwaysVisible: false,			
		  });	  
	}
})

</script>

<!--style>
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
	border:#0F3 solid 4px;
	border-radius:5px;
	float:left;
	margin:25px;
	position:relative;
	overflow:hidden;
}
.product-name {
	position:absolute;
	width:100%;
	min-height:40px;
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
	height:258px;
	overflow:hidden;
	text-align:left;
	top:300px;
	color:#FFF;
	font-size:14px;
	padding-top:10px;
	background:url(images/transparent-green.png) repeat;
	font-weight:normal;
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
	-webkit-transition: transform 2s, -webkit-transform 2s; 
    transition: transform 2s, -webkit-transform 2s;
	
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
.product-detail{position:absolute;width:700px;height:550px;background-color:#FFF;border:#666 solid 5px;border-radius:10px 10px 0 0;overflow:hidden;display:none;}
.product-title-header{height:38px;width:100%;background-color:#333;margin-bottom:10px;color:#FFF;padding:5px;font-size:18px;}
.product-container-image{width:auto;height:auto;margin:0 10px;float:left;border:#CCC solid 2px; border-radius:5px;}
.product-properties{border:#999 solid 2px;width:47%;margin:5px;float:left;padding:5px;}
.property-list{overflow:auto;width:100%;}
.property-list img{float:left;/*width:100px;*/margin:0 5px 0 0;}
.property-value{list-style:none;border:#F00 solid 1px;padding:0;margin0;}
.product-container-description{top:20px;font-size:16px;font-weight:normal !important;}
.product-container-message{width:65%;float:left;margin:10px 15px 0 0;overflow:auto;}
.product-container-message textarea{width:99%;height:99px;border:#CCC solid 1px;font-size:14px;color:#666;padding:5px;}
.properties-container{height:220px;overflow-X:auto;}
.properties-btn{text-align:center;margin: 0px 0 5px 0}
.properties-btn [type=submit],.properties-btn [type=button]{min-width:125px;padding:5px;color:#FFF;background-color:#333;cursor:pointer;border:#666 solid 1px;}
.wishlist-btn{position:fixed;top:140px;right:10px;z-index:1111;}
.properties-btn [type=submit]:hover,.properties-btn [type=button]:hover{color:#333;background-color:#FFF}

 @media screen and (min-width: 0) and (max-width:360px) {
	.product-detail{
		width:95%;
		margin:auto;
		position:absolute !important;
		overflow:auto;
		height:auto;		
	}
	.product-detail * {
		float:none;	
		display:block;
	}
	
	.product-container-image{
		text-align:center !important;
		float:none;			
	}
	
	.product-container-image img{
		margin:auto;	
	}
	
	.product-container-description{
		margin-left:10px;
	}
	
	.product-container-message{
		width:90%;
		margin:5px auto 5px auto;	
	}
	
	.product-properties{
		width:95%;
		float:none;	
	}
	
	.product-list li{
		float:none;	
		/*margin-left:auto;		*/
		margin-left:40px !important;
	}
	.wishlist-btn{
		top:auto;
		bottom:20px !important;
		left:5px !important;
		right:auto;
	}
	.main-container{
		width:auto;	
	}
	.properties-container{
		height:175;
		overflow-y:scroll;
	}
}

@media screen and (min-width: 0) and (max-width:760px){
	
	.product-detail{
		width:95%;
		margin:auto;
		position:absolute !important;
		overflow:auto;
		height:auto;		
	}
	.product-detail * {
		float:none;	
	}
	
	.product-container-image{
		text-align:center;
		float:none;			
	}
	
	.product-container-image img{
		margin:auto;	
	}
	
	.product-container-description{
		margin-left:10px;	
	}
	
	.product-container-message{
		width:90%;
		margin:5px auto 5px auto;	
	}
	
	.product-properties{
		width:95%;
		float:none;	
	}
	
	.product-list li{
		float:none;	
		/*margin-left:auto;		*/
		margin-left:40px !important;
	}
	
	.product-list li:nth-child(odd){		
		clear:left;
		margin-left:80px;	
	}
	
	.wishlist-btn{
		top:auto;
		bottom:15px !important;
		left:5px !important;
		right:auto;
	}
	.main-container{
		width:auto;	
	}
	
	.properties-container{
		height:175;
		overflow-y:scroll;
	}	
}

</style-->
</head>
<body>
<div class="product-detail" id="data-history"></div>	
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
  <section class="banner created-for-banner">
  	<div class="container">
	    <h3>Mementos of your memories, and with customized graphics too!</h3>
  	</div>
  </section>
  <section class="content-area">
    <section class="block select-an-item">
      <div class="container">    
      	<div class="heading-with-band">
          <h2>Select a Item</h2>
  <?php if(isset($_SESSION['wishlist']))
  { 
  ?>
  <!--style="width:175px;padding:15px;color:#FFF;position:fixed;top:140px;right:10px;background:#666;border-radius:5px;text-align:center;font-size:14px;font-weight:bold;"         Wishlist:&nbsp;<span style="text-decoration:underline;"><?php echo $no_of_item ?>&nbsp;item(s)</span>
    <a href="inquiry-list.php"><div> -->
     <div  class="properties-btn wishlist-btn">
        <input name="wishlist" type="button" value="Wishlist: <?php echo count($_SESSION['wishlist']) ?>&nbsp;item(s)" style="padding:5px;margin:40px 0px -40px 0px;" onClick="location.assign('inquiry-list.php')"/>
      </div>
      <div class="clear"></div>
       <!--</div></a>-->
	  <?php } ?>
      <div class="clear"></div>
      
      <?php
		$sql ="SELECT * FROM  manage_category ORDER BY category_id DESC";
		$result = $db_object->execute_query($sql);
		if(mysqli_num_rows($result) > 0)
		{
		?>
      
      <div class="nav-menu">
        <ul>
          <div class="menu"> 
          <?php
		 	 if(isset($_REQUEST['category_id']))
		  	{
			 	 $sql1 ="SELECT * FROM  manage_category WHERE category_id = ".$_REQUEST['category_id'];
			 	 $result1 = $db_object->return_query($sql1);
			 ?>
             	 <a href="#"><?php echo $result1['category_name']?></a> 
          <?php
 		 	}
		 	 else
		 	{
			 ?>
             	 <a href="#">--Select Category--</a> 
              <?php
		  	 }
		  	?>
			
            
           <img src="images/dropdown-arrow-blck.png" width="40" height="300" />
            <div class="sub-dropdown">
                <ul>
                <?php
				if(isset($_REQUEST['category_id']))
		  		{
					?>
                    <li><a href="itemized-craft.php">All</a></li>
                    <?php
				}
                while($value = mysqli_fetch_array($result))
                {
                     if($value['display_flag'] == 0)
					{
					?>
                <li><a href="itemized-craft.php?category_id=<?php echo $value['category_id'];?>"><?php echo $value['category_name'];?></a></li>
					<?php
                    }
                    ?>
                    <?php
                    }
                ?>
              </ul>
            </div>
          <div class="clear"></div>
        </div>
        </ul>
       	 </div>
		<?php
		}
		?>
        </div>	
        <div class="list-cnt">
        	<ul class="select-item-list">          
               <?php
					if(isset($_REQUEST['category_id']))
					{
						$sql = "SELECT * FROM craft_items_master cim
						INNER JOIN craft_mapping cm ON cm.item_id = cim.item_id
						WHERE cm.category_id = ".$_REQUEST['category_id']." ORDER BY cim.item_id DESC";
					}
					else
					{
						$sql = "SELECT * FROM craft_items_master ORDER BY item_id DESC";
					}
					
            $result = $db_object->execute_query($sql);
			if(mysqli_num_rows($result) > 0)
			{
					while($value = mysqli_fetch_array($result))
					{
						if($value['item_status'] == "0")
						{
							?>
							 <li onClick="show_product_detail('show_products','<?php echo $value['item_id'];?>')">
							 <div class="product-name"><?php echo ucwords($value['item_name']);?></div>
 					 	 <?php 
						if($value['item_photo'] != "")
						{
					  ?> 
						<img src="item-photos/<?php echo $value['item_photo'] ?>" class="prod-img"/>
					  <?php 
						}
						else
						{
					  ?>
						<img src="item-photos/no-photo.png" class="prod-img" style="width:100%;"/>
					  <?php 
						}
					  ?>
					  <div class="product-description">
						<div><?php echo ucfirst(substr($value['item_desc'],0,200));?></div>
					  </div>
					</li> 
					<?php
						}
				?>
				
				<?php 
				}
			}
			else
			{
			?>
                <h2>Currently products not available in this category.</h2>
            <?php
			}
            ?>
               
          </ul>
          <div class="clear"></div>
        </div>
      </div>
    </section>
    <!--section class="block info-band">
      <div class="container">
        <h4>Merchandise that saves your child's memories forever!</h4>

        <p>At The Party Jungle, we are well equipped to create merchandize that can be customized for your child.
        
        Some of the items in the merchandize that we offer are water bottles, pencil boxes, lunch boxes, bags etc. </p>
      </div>
    </section-->
  </section>
  <?php if(isset($_SESSION['wishlist']))
  { 
  ?>
  <!--style="width:175px;padding:15px;color:#FFF;position:fixed;top:140px;right:10px;background:#666;border-radius:5px;text-align:center;font-size:14px;font-weight:bold;"         Wishlist:&nbsp;<span style="text-decoration:underline;"><?php echo $no_of_item ?>&nbsp;item(s)</span>
    <a href="inquiry-list.php"><div> -->
<!--      <div  class="properties-btn wishlist-btn">
        <input name="wishlist" type="button" value="Wishlist: <?php echo count($_SESSION['wishlist']) ?>&nbsp;item(s)" style="padding:5px;" onClick="location.assign('inquiry-list.php')"/>
      </div>-->
      <div class="clear"></div>
       <!--</div></a>-->
	  <?php } ?>
      
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
  <div class="send-inquire">
  	<a href="contact.html#inquire">Send Inquiry</a>
  </div>
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