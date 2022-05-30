<?php
include("admin_global.php"); 
check_login();

$property_name	= "";
$whereclause	= "";
$heading		= "Add ";
$property_id	= "";
$file_obj = new file_manup($photos);
$photo_obj = new img_manup($photos);
if(isset($_SESSION['property_id']))
{
	unset($_SESSION['property_id']);
}

if(!isset($_SESSION['item_id']))
{
	if(isset($_REQUEST['item_id']))
	{
		$_SESSION['item_id'] = $_REQUEST['item_id'];
	}
	else
	{
		redirect("manage-items.php?error=invalid item");
	}
}


$sql_item = "SELECT item_name FROM craft_items_master WHERE item_id=".$_SESSION['item_id'];
$value_item = $db_object->return_query($sql_item);

if(isset($_REQUEST["action"]))
{
	
	$sqlhelper = new sqlhelper("craft_items_properties");
	$sqlhelper->db_connect($host,$username,$password,$database);
	
	switch($_REQUEST["action"])
	{
		case "Save":
		
			$property_name  = $db_object->sanatize_string($_REQUEST["property_name"]);
			$item_id 		= $_SESSION['item_id'];
		
			if(!isset($_REQUEST["property_id"]))
			{
				foreach(explode("|",$property_name) as $key => $val)
				{
					$sqlhelper->adddata("item_id, property_name","$item_id,'".trim(strtolower($val))."'"); 
				}
				
				redirect("manage-property.php?error=Data has been inserted"); 
			}
			else
			{
  				$desc	= $db_object->sanatize_string($_REQUEST["desc"]);
				
				if($_FILES["property_photo"]['name'] != "")
				{
					
				$sql_img = $db_object->return_query("SELECT property_photo FROM craft_items_properties WHERE property_id = ".$_REQUEST['property_id']."");
					
					if($sql_img['property_photo'] != "")
					{
  					unlink("../item-photos/".$sql_img['property_photo']);
					$thumbname = get_thumbnail($sql_img['property_photo']);
					unlink("../item-photos/".$thumbname);
					}
					
					$imagename = date("dmYHis").rand(0,50);
					$imgthumb  = $imagename."_thumb";
					$imagename = $file_obj->upload_file($_FILES["property_photo"]['name'],$_FILES["property_photo"]['tmp_name'],$imagename,"jpeg,jpg,png,gif",$_FILES["property_photo"]['type']);
					if(!$imagename && $_FILES["property_photo"]['type'] != "")
					{
 						redirect("manage-property.php?error=Image type is invalid");
						
						die("Invalid image type");
					}
					else
					{
						if($imagename)
						{
							$photo_obj->createThumbs("$imagename","$imgthumb",200);					
						}
					}
						 
				$sqlhelper->updatedata("property_name,property_photo,property_desc","'".trim(strtolower($property_name))."'  | '$imagename' | '$desc'","property_id=".$_REQUEST["property_id"]);
				redirect("manage-property.php?error=Data has been modified successfully");
				die();
				}
				else
					{
					$sqlhelper->updatedata("property_name,property_desc","'".trim(strtolower($property_name))."'| '$desc'","property_id=".$_REQUEST["property_id"]);
					redirect("manage-property.php?error=Data has been modified successfully");
					die();
					}
 				}
 		break;
		
		case "Modify":
			$sql		=	$db_object->return_query("SELECT * from craft_items_properties where property_id=".$_REQUEST["property_id"]);
			$property_name	=	$sql["property_name"];
			$property_id	  = 	"?property_id=".$_REQUEST["property_id"];
			$heading		  =	"Modify ";
		break;
		
		case "Delete":
			foreach($_POST as $key => $val)
			{
				if(is_numeric($val))
				{
					$sql_img = $db_object->return_query("SELECT property_photo FROM craft_items_properties WHERE property_id = $val");
				
						if($sql_img['property_photo'] != "")
						{
							unlink("../item-photos/".$sql_img['property_photo']);
							$thumbname = get_thumbnail($sql_img['property_photo']);
							unlink("../item-photos/".$thumbname);
						}
					
					$sql = "DELETE FROM craft_items_properties WHERE property_id = $val";	
					$db_object->execute_query($sql);
					redirect("manage-property.php?error=Data has been deleted successfully");
				die();
				}				
			}
		break;
		
		case"Toggle":
			
			$property_id 	= $db_object->sanatize_value($_REQUEST["property_id"]);
			$display_flag 	= $db_object->sanatize_value($_REQUEST["display_flag"]);
			if($display_flag == 1)
			{
				$sqlhelper->updatedata("property_status","0","property_id=$property_id");
			}
			else
			{
				$sqlhelper->updatedata("property_status","1","property_id=$property_id");
			}
			
			if(count($query_str)>1)
				{
					redirect($url_name[0]."&error=Flag is changed");
				}
				else
				{
					redirect($url_name[0]."?error=Flag is changed");
				}
		break;
	}
}
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>Admin | party jungle</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<script src="js/jquery-1.8.2.min.js" type="text/javascript"></script>
<script src="js/common.js" type="text/javascript"></script>
<script src="js/js_class.js" type="text/javascript"></script>
<link rel="stylesheet" type="text/css" href="styles/style.css">
<script type="text/javascript">
function pop_up_box()
{
	overlayBox('data-entry')
}
</script>
</head>
<body>
<?php include("header.php"); ?>
<div class="overlay"></div>
<div class="overlayBox" id="data-entry">
  <div class="formCntr">
    <h2 style="background:#a2a2a2"><?php echo $heading ?> Property</h2>
<form action="manage-property.php<?php echo $property_id ?>" method="post" enctype="multipart/form-data">
		 <div class="fldCntr" align="center" style="width:800px; margin-top:20px;">
              
            <table width="90%" border="0" align="center" cellpadding="0" cellspacing="0" class="dvF1">
                 <?php 
					if($property_id == "")
					{
				?>
                <tr>
                <td width="217" align="right" style="vertical-align:middle">Property Name&nbsp;:&nbsp;</td>
                <td width="469" align="left">
               <textarea name="property_name" cols="" required rows="" style="width:250px;height:120px;" title="Property Name"></textarea>
				</td>
                <tr>
              	<td>&nbsp;</td>
              	<td>Multiple property can be added seperated by a " | " <br>
					e.g. color | height | weight | brand</td>
              </tr>
                 <?php 
					}
					else
					{						
				?>
                <tr>
                <td width="217" align="right" style="vertical-align:middle">Property Name&nbsp;:&nbsp;</td>
                <td width="469" align="left">
               <input name="property_name" type="text" required style="width:250px" title="Property Name" value="<?php echo $property_name ?>"> 
                </td>
                </tr>
                <tr>
                <td width="217" align="right" style="vertical-align:middle">Property thumb&nbsp;:&nbsp;</td>
                <td width="469" align="left">
                <input name="property_photo" type="file">
                </td>
                </tr>
                <tr>
                <td width="217" align="right" style="vertical-align:middle">Property Description&nbsp;:&nbsp;</td>
                <td width="469" align="left">
                <textarea name="desc" cols="" rows=""><?php //echo $desc ?></textarea>
                </td>
                </tr>
                <?php 
					}
				?>
              
              <tr>
                <td align="left">&nbsp;</td>
                <td align="left"><input type="submit" name="action" value="Save" style="width:75PX;"></td>
              </tr>
            </table>
          </div>
          </form>
		
     </div>
</div>
<div class="wraper">
  <h1 class="pageName"><span style="text-transform:capitalize;">Manage Property For <?php echo $value_item['item_name'] ?></span></h1>
		<table width="100%" border="0" cellpadding="0" cellspacing="0">
        <tr>
          <td align="center">
            <form method="post" name="delete_form" onSubmit="return confirm_delete()">
              <div class="tblCntr" style="padding-top:0; background:none;text-transform:capitalize;">
                <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                  <tr bgcolor="#F5F5F5" >
                  	<th width="5%">No.</th>
                    <th width="20%">Thumb</th>
                  	<th width="25%">Property Name</th>
                  	<th width="20%">Values</th>
                    <th width="15%">Hide / Show</th>
                    <th width="10%">Action</th>
                    <th width="5%">Select</th>
                  </tr>
                  <?php
					$i = 1;
					$sql_select_cat = "SELECT * FROM craft_items_properties WHERE item_id =".$_SESSION['item_id'];
					$objpaging = initialize_paging($sql_select_cat);
					$objpaging->limit = 25;
					$result = $objpaging->ini_paging();	
					while($rows = mysqli_fetch_array($result))
				  	{
						$count_value = $db_object->return_query("SELECT COUNT(*) as total_value from craft_items_properties_value where property_id=".$rows["property_id"]);
				  ?>
                  <tr>
                  	<td align="center" style="vertical-align:middle"><?php echo $i ?></td>
                    <td align="center" style="vertical-align:middle">
                     <?php 
						if($rows['property_photo'] != "")
						{
							echo $photo_obj->imageResize(get_thumbnail($rows['property_photo']),100);
						}
						else
						{ 
					?>
                     	 <img src="../item-photos/no-photo.png" width="100" height="100" />
                    <?php 
						} ?>
                    </td>
                    
                  	<td align="center" style="vertical-align:middle"><?php echo $rows["property_name"] ?></td>
                  	<td align="center" style="vertical-align:middle"><a href="property-value.php?property_id=<?php echo $rows['property_id'] ?>">Assign</a> | <?php echo $count_value['total_value'] ?></td>
                    <td align="center" style="vertical-align:middle">
					<a href="manage-property.php?action=Toggle&property_id=<?php echo $rows['property_id'] ?>&display_flag=<?php echo $rows["property_status"] ?>" id="togglebutton"  style="padding:8px 12px; background-color:#CCC;border-radius:5px;color:<?php if($rows["property_status"] == 0){echo "#2C9D28"; } else { echo "#FC5F7A"; }?>">
                     <?php if($rows["property_status"] == 0){echo "Show"; } else { echo "Hide"; }?>
                    </a>
					</td>
                    <td align="center" style="vertical-align:middle"><a style="padding:8px 12px; background-color:#CCC;border-radius:5px;" href="manage-property.php?action=Modify&property_id=<?php echo $rows["property_id"] ?>">Modify</a></td>
                    <td align="center" style="vertical-align:middle">
                      <input type="checkbox" name="<?php echo $rows["property_id"] ?>" value="<?php echo $rows["property_id"] ?>"></td>
                  </tr>                       
                  <?php
				  $i++;
				  }				  
				  ?>
                  <tr>
                    <td colspan="7" align="center" style="vertical-align:middle">
                    	<input name="action" type="button" value="Back To Item" onClick="location.assign('manage-items.php')" class="action-button">
                		&nbsp;
                		<input name="action" type="button" value="Add Property" onClick="pop_up_box()" class="action-button">
                		&nbsp;
                		<input name="action" type="submit" value="Delete" class="action-button">
                    </td>
                  </tr>
                  <tr>
                    <td colspan="7" align="center" style="vertical-align:middle">
                    	<div class="pagerCnt"><?php echo($objpaging->display_paging()) ?></div>
                    </td>
                  </tr>
                </table>
              </div>
            </form>          
            </td>
          </tr>
      </table>
 </div>  
 
 <?php
if(isset($_REQUEST['error']))
{
	?>
	<script type="text/javascript">
		alert('<?php echo addslashes($_REQUEST['error']) ?>');
	</script>
	<?php
}
?>
 <?php
 if(isset($_REQUEST["action"]))		
	{	
		if($_REQUEST["action"] == "Modify" || $_REQUEST["action"] == "add")
		{
		?>
        	<script type="text/javascript">
				overlayBox('data-entry')
			</script>        
        <?php	
		}
	} 
  include("footer.php"); 
  ?>
</body>
</html>
