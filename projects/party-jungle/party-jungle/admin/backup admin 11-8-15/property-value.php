<?php
include("admin_global.php"); 
check_login();

$property_value_name	= "";
$desc			= "";
$whereclause	= "";
$heading		= "Add ";
$property_value_id = "";

$file_obj = new file_manup($photos);
$photo_obj = new img_manup($photos);

if(!isset($_SESSION['property_id']))
{
	if(isset($_REQUEST['property_id']))
	{
		$_SESSION['property_id'] = $_REQUEST['property_id'];
	}
	else
	{
		redirect("manage-property.php?error=invalid property");
	}
}

$sql_item = "SELECT property_name FROM craft_items_properties WHERE property_id=".$_SESSION['property_id'];
$value_item = $db_object->return_query($sql_item);

if(isset($_REQUEST["action"]))
{
	$sqlhelper = new sqlhelper("craft_items_properties_value");
	$sqlhelper->db_connect($host,$username,$password,$database);
	
	switch($_REQUEST["action"])
	{
		
		case "Save":
		
			$property_value_name  = $db_object->sanatize_string($_REQUEST["property_value_name"]);
			$property_id 		= $_SESSION['property_id'];
		
			if(!isset($_REQUEST["property_value_id"]))
			{
				foreach(explode("|",$property_value_name) as $key => $val)
				{
					$sqlhelper->adddata("property_id, property_value_name","$property_id,'".trim(strtolower($val))."'"); 
				}
				
				redirect("property-value.php?error=Data has been inserted"); 
			}
			else
			{
				
				
				$desc	= $db_object->sanatize_string($_REQUEST["desc"]);
				
				if($_FILES["valuephoto"]['name'] != "")
				{
					//die("aaaaaa");
					
					$sql_img = $db_object->return_query("SELECT property_value_photo FROM craft_items_properties_value WHERE property_value_id = ".$_REQUEST['property_value_id']."");
					
					if($sql_img['property_value_photo'] != "")
					{
						unlink("../item-photos/".$sql_img['property_value_photo']);
						$thumbname = get_thumbnail($sql_img['property_value_photo']);
						unlink("../item-photos/".$thumbname);
					}
					
					$imagename = date("dmYHis").rand(0,50);
					$imgthumb  = $imagename."_thumb";
					$imagename = $file_obj->upload_file($_FILES["valuephoto"]['name'],$_FILES["valuephoto"]['tmp_name'],$imagename,"jpeg,jpg,png,gif",$_FILES["valuephoto"]['type']);
					if(!$imagename && $_FILES["valuephoto"]['type'] != "")
					{
						redirect("property-value.php?error=Image type is invalid");
						die("Invalid image type");
					}
					else
					{
						if($imagename)
						{
							$photo_obj->createThumbs("$imagename","$imgthumb",200);					
						}
					}
					$sqlhelper->updatedata("property_value_name,property_value_photo,property_value_desc","'".trim(strtolower($property_value_name))."'  | '$imagename' | '$desc'","property_value_id=".$_REQUEST["property_value_id"]);
					
					
				}
				else
				{
					$sqlhelper->updatedata("property_value_name,property_value_desc","'".trim(strtolower($property_value_name))."'|'$desc'","property_value_id=".$_REQUEST["property_value_id"]);
				}
				
				
				redirect("property-value.php?error=Data has been modified successfully");
			}
		break;
		
		case "Modify":
			$sql		=	$db_object->return_query("SELECT * from craft_items_properties_value where property_value_id=".$_REQUEST["property_value_id"]);
			$property_value_name	= $sql["property_value_name"];
			$desc					= $sql['property_value_desc'];
			$property_value_id	 	= "?property_value_id=".$_REQUEST["property_value_id"];
			$heading		  =	"Modify ";
		break;
		
		case "Delete":
			foreach($_POST as $key => $val)
			{
				if(is_numeric($val))
				{
					
					$sql_img = $db_object->return_query("SELECT property_value_photo FROM craft_items_properties_value WHERE property_value_id = $val");
				
						if($sql_img['property_value_photo'] != "")
						{
							unlink("../item-photos/".$sql_img['property_value_photo']);
							$thumbname = get_thumbnail($sql_img['property_value_photo']);
							unlink("../item-photos/".$thumbname);
						}
						
					$sql = "DELETE FROM craft_items_properties_value WHERE property_value_id = $val";	
					$db_object->execute_query($sql);
				}				
			}
		break;
		
		case"Toggle":
			
			$property_value_id 	= $db_object->sanatize_value($_REQUEST["property_value_id"]);
			$display_flag 	= $db_object->sanatize_value($_REQUEST["display_flag"]);
			if($display_flag == 1)
			{
				$sqlhelper->updatedata("property_value_status","0","property_value_id=$property_value_id");
			}
			else
			{
				$sqlhelper->updatedata("property_value_status","1","property_value_id=$property_value_id");
			}
			
			redirect($url_name[0]."?error=Status is changed");
		break;
	}
}
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>Welcome</title>
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


/*
function form_validate_jquery(container)
	{
		var return_state = true;		
		$(container).find("input, select, textarea" ).each(function(){
			
			if($(this).val() == "")
			{
				$(this).css("border","3px solid red");
				$(this).val('');
				return_state = false;													
			}
			else
			{
				$(this).css("border","3px solid green");
			}
				
		});
		return return_state;
	}*/

</script>
</head>
<body>
<?php include("header.php"); ?>
<div class="overlay"></div>
<div class="overlayBox" id="data-entry">
  <div class="formCntr">
    <h2 style="background:#a2a2a2"><?php echo $heading ?> Value of <?php echo $value_item['property_name'] ?></h2>
<form action="property-value.php<?php echo $property_value_id ?>" method="post" enctype="multipart/form-data"  onSubmit="return form_validate_jquery('.fldCntr')">
		 <div class="fldCntr" align="center" style="width:800px; margin-top:20px;">
		  <table width="90%" border="0" align="center" cellpadding="0" cellspacing="0" class="dvF1">
			<?php 
                if($property_value_id == "")
                {
                    ?>
                    <tr>
                    <td width="217" align="right" style="vertical-align:middle">Value  Name&nbsp;:&nbsp;</td>
                    <td width="469" align="left">
                    <textarea name="property_value_name" required cols="" rows="" style="width:250px;height:120px;" title="Property Name"></textarea>
                    </td>
              </tr>
                    <?php 
                }
                else
                {						
                    ?>
                    <tr>
                        <td width="217" align="right" style="vertical-align:middle">Value Name&nbsp;:&nbsp;</td>
                        <td width="469" align="left">
                        <input name="property_value_name" required type="text" style="width:250px" title="Property Name" value="<?php echo $property_value_name ?>"> 
                        </td>
              		</tr>
                    <tr>
                        <td width="217" align="right" style="vertical-align:middle">Value Thumbnail&nbsp;:&nbsp;</td>
                        <td width="469" align="left">
                        <input name="valuephoto" type="file">
                        </td>
                    </tr>
                    <tr>
                        <td width="217" align="right" style="vertical-align:middle">Value Description&nbsp;:&nbsp;</td>
                        <td width="469" align="left">
                        <textarea name="desc" cols="" rows=""><?php echo $desc ?></textarea>
                        </td>
                    </tr>
                    <?php 
                }
            ?>
				
               <?php 
					if($property_value_id == "")
					{
				?>
              <tr>
              	<td>&nbsp;</td>
              	<td>Multiple Value  can be added seperated by a " | " <br>
					e.g. color | height | weight | brand</td>
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
  <h1 class="pageName"><span style="color:#999">Manage Values For </span><?php echo $value_item['property_name'] ?></h1>
		<table width="100%" border="0" cellpadding="0" cellspacing="0">
        <tr>
          <td align="center">
            <form method="post" name="delete_form" onSubmit="return confirm_delete()">
              <div class="tblCntr" style="padding-top:0; background:none;text-transform:capitalize;">
                <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                  <tr bgcolor="#F5F5F5" >
                  	<th width="6%">No.</th>
                  	<th width="34%">Value Thumb</th>
                  	<th width="30%">Value Title</th>
                  	<th width="10%">Hide / Show</th>
                    <th width="12%">Action</th>
                    <th width="8%">Select</th>
                  </tr>
                  <?php
					$i = 1;
					$sql_select_cat = "SELECT * FROM craft_items_properties_value WHERE property_id =".$_SESSION['property_id'];
					$objpaging = initialize_paging($sql_select_cat);
					$objpaging->limit = 25;
					$result = $objpaging->ini_paging();	
					while($rows = mysqli_fetch_array($result))
				  	{
				  ?>
                  <tr>
                  	<td align="center" style="vertical-align:middle"><?php echo $i ?></td>
                  	<td align="center" style="vertical-align:middle">
                    <?php 
						if($rows['property_value_photo'] != "")
						{
							echo $photo_obj->imageResize(get_thumbnail($rows['property_value_photo']),100);
						}
						else
						{ 
					?>
                     	 <img src="../item-photos/no-photo.png" width="100" height="100" />
                    <?php 
						} ?>
                    </td>
                  	<td align="center" style="vertical-align:middle"><?php echo $rows["property_value_name"] ?></td>
                  	<td align="center" style="vertical-align:middle">
                     <a   href="property-value.php?action=Toggle&property_value_id=<?php echo $rows['property_value_id'] ?>&display_flag=<?php echo $rows["property_value_status"] ?>" id="togglebutton"  style="padding:8px 12px; background-color:#CCC;border-radius:5px;color:<?php if($rows["property_value_status"] == 0){echo "#2C9D28"; } else { echo "#FC5F7A"; }?>">
                     <?php if($rows["property_value_status"] == 0){echo "Show"; } else { echo "Hide"; }?>
                    </a>
  					</td>
                    <td align="center" style="vertical-align:middle"><a style="padding:8px 12px; background-color:#CCC;border-radius:5px;"  href="property-value.php?action=Modify&property_value_id=<?php echo $rows["property_value_id"] ?>">Modify</a></td>
                    <td align="center" style="vertical-align:middle">
                      <input type="checkbox" name="<?php echo $rows["property_value_id"] ?>" value="<?php echo $rows["property_value_id"] ?>"></td>
                  </tr>     
                  <?php
				  $i++;
				  }
				  ?>
                </table>
              </div>
              <br class="clear">
              <div class="pagerCnt"><?php echo($objpaging->display_paging()) ?></div>
              <p class="sbtBtn">
              <input name="action" type="button" value="Back To Property" onClick="location.assign('manage-property.php')">
                &nbsp;
                <input name="action" type="button" value="Add Value" onClick="pop_up_box()">
                &nbsp;
                <input name="action" type="submit" value="Delete" >
          
            </form>          </td>
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
