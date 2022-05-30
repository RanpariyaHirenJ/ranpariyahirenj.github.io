<?php 
		include("user_global.php");
		$data = "";
		$function = $_REQUEST["function"];
		
		$file_obj = new file_manup("./item-photos");
		$photo_obj = new img_manup("./item-photos");

		switch($function)
		{
			case"show_products":

				$item_id = $_REQUEST['item_id'];
				$sql = "SELECT * FROM  craft_items_master WHERE item_id = $item_id ";
				$result = $db_object->return_query($sql);
				
				if($result['item_photo'] != "")
				{
			  
              		$item_photo ="<img src=\"item-photos/".get_thumbnail($result['item_photo'])."\" height=\"175\" width=\"175\"/>";
               
				}
				else
				{
			  
              		$item_photo ="<img src=\"item-photos/no-photo.png\" height=\"175\" width=\"175\"/>";
               
				}
				//$photo_obj->imageResize(get_thumbnail($result['item_photo']),175)
				$data = "
					<form action=\"itemized-craft.php\" method=\"post\">
					<div class=\"product-title-header\">". ucwords($result['item_name']) ."</div>
					<div class=\"product-container\">
						<div class=\"product-container-image\">".$item_photo."</div>
						<div class=\"product-container-description\">".substr(ucfirst($result['item_desc']),0,100)."</div>
						<div class=\"product-container-message\"><textarea name=\"user_message\" cols=\"\" rows=\"\" placeholder=\"Enter your message if any here...\"></textarea></div>
						<div style=\"clear:both;margin-bottom:10px;\"></div>
						
						
						<div class=\"properties-container\">";
		
 				$sql = "SELECT * FROM craft_items_properties 
						WHERE item_id = ".$result['item_id'];
				$result = $db_object->execute_query($sql);
				while($value = mysqli_fetch_array($result))
				{
					if($value['property_photo'] != "")
					{
						$photo = $photo_obj->imageResize(get_thumbnail($value['property_photo']),75);
					}
					else
					{
						$photo = "<img src=\"item-photos/no-photo.png\" height=\"100\" width=\"100\">";
					}
					
							if($value['property_status']==0)
							{
							
							$data .= "
								<div class=\"product-properties\">
								<div class=\"property-list\">
								 <div class=\"property-name\" style=\"font-size:14px;\">".ucwords($value['property_name'])."</div>
								 <input type=\"hidden\" name=\"item_id\" value=\"".$item_id."\">
								<select name=\"".$value['property_id']."\" style=\"font-size:16px;width:100%;margin-top:10px;height:30px; padding:0px;;\">";
								$sql1 = "SELECT * FROM craft_items_properties_value WHERE property_id =".$value['property_id'];
								$result1 = $db_object->execute_query($sql1);
								while($value1 = mysqli_fetch_array($result1))
								{
									if($value1['property_value_status']==0)
									{
									 $data.= "<option value=\"".$value1['property_value_id']."\">".ucfirst($value1['property_value_name'])."</option>";
									}
								}
								
							$data .="</select>          
							  </div>
							 </div>";
							 
							}
					}
					
					 $data.="<div style=\"border: 1px solid;margin-top: 150px;\"></div>";
  					$data.="<div style=\"width:190px;float:right;margin-top:20px\"><span style=\"margin: 17px 12px 0px 0px;font-size: 14px;\"><strong>Quantity :</strong></span><select name=\"quantity\" style=\"width: 100px;border: 0px solid;height: 30px;font-size: 18px;padding: 0px;background: rgb(238, 238, 238) none repeat scroll 0% 0%;text-align:left;\">";
					
					for($i=1; $i<=20; $i++)
					{
								$data.="<option>".$i."</option>";
								
					}
					$data.="</select></div>";
				
				
				$data.="";
					
        			$data.="</div><div class=\"properties-btn\">";
            		$data .="<input name=\"add\" type=\"submit\" value=\"Add To Wishlist\" />";
					$data .= "&nbsp; <input name=\"cancel\" type=\"button\" value=\"Back To List\" onclick=\"close_overlay()\"/>
      				 </div></div></form>";
 			break;
			
 		}
	echo $data;
?>
