<?php
include("admin_global.php"); 
check_login();

$item_name	  	= "";
$desc			= "";
$whereclause	= "";
$heading		= "Add ";
$item_id		= "";

$file_obj = new file_manup($photos);
$photo_obj = new img_manup($photos);

if(isset($_SESSION['item_id']))
{
	unset($_SESSION['item_id']);
}

if(isset($_REQUEST['start']))
	{
		$start = $_REQUEST['start'];
	}
	else
	{
		$start = 1;
	}
	$category_id = "";
	

function create_slug($slug,$item_id)
{
	global $db_object;	
	
	$slug = str_replace(array(' ','.','$','#','/','"','*',"?","&"),"-",$slug);
	
	$sql = "SELECT item_slug FROM craft_items_master WHERE item_slug = '$slug' AND item_id <> $item_id";
	$result = $db_object->return_query($sql);
	if(isset($result['item_slug']))
	{
		$slug = $slug.chr(rand(97,122));
		return create_slug($slug,$item_id);
	}
	else
	{
		return $slug;
	}
}

if(isset($_REQUEST["action"]))
{
	
	$sqlhelper = new sqlhelper("craft_items_master");
	$sqlhelper->db_connect($host,$username,$password,$database);
	
	switch($_REQUEST["action"])
	{
		case "Save":
		$item_name		=	$db_object->sanatize_string($_REQUEST["item_name"]);
		
		if(!isset($_REQUEST["item_id"]))
			{
				foreach(explode("|",$item_name) as $key => $val)
				{
					$item_slug = trim(strtolower($val));
					$item_slug = create_slug($item_slug,0);
					
					$sqlhelper->adddata("item_name, item_slug","'".trim(strtolower($val))."','$item_slug'");
				}
				redirect("manage-items.php?error=Data has been inserted"); 
				
			}
			else
			{
				$item_slug = trim(strtolower($item_name));
				$item_slug = create_slug($item_slug,$_REQUEST["item_id"]);
				$desc	= $db_object->sanatize_string($_REQUEST["desc"]);
				
				if($_FILES["itemphoto"]['name'] != "")
				{
					
					$sql_img = $db_object->return_query("SELECT item_photo FROM craft_items_master WHERE item_id = ".$_REQUEST['item_id']."");
					
					if($sql_img['item_photo'] != "")
					{
						unlink("../item-photos/".$sql_img['item_photo']);
						$thumbname = get_thumbnail($sql_img['item_photo']);
						unlink("../item-photos/".$thumbname);
					}
					
					$imagename = date("dmYHis").rand(0,50);
					$imgthumb  = $imagename."_thumb";
					$imagename = $file_obj->upload_file($_FILES["itemphoto"]['name'],$_FILES["itemphoto"]['tmp_name'],$imagename,"jpeg,jpg,png,gif",$_FILES["itemphoto"]['type']);
					if(!$imagename && $_FILES["itemphoto"]['type'] != "")
					{
						redirect("manage-items.php?error=Image type is invalid");
						die("Invalid image type");
					}
					else
					{
						if($imagename)
						{
							$photo_obj->createThumbs("$imagename","$imgthumb",300);					
						}
					}
					$sqlhelper->updatedata("item_name,item_slug,item_photo,item_desc","'".trim(strtolower($item_name))."' | '$item_slug' | '$imagename' | '$desc'","item_id=".$_REQUEST["item_id"]);
				}
				else
				{
				
					
					$sqlhelper->updatedata("item_name,item_slug,item_desc","'".trim(strtolower($item_name))."' | '$item_slug' | '$desc'","item_id=".$_REQUEST["item_id"]);
						
				redirect("manage-items.php?error=Data has been modified successfully");
				die();	
  				}
  			}
		break;
		
		
		
		case "Filter":
			$item_name		= $_REQUEST["item_name"];
			$whereclause	= " and item_name LIKE '%".$item_name."%'";
		break;
		
		case "Modify":
			$sql		=	$db_object->return_query("SELECT * from craft_items_master where item_id=".$_REQUEST["item_id"]);
			$item_name	=	$sql["item_name"];
			$desc		=   $sql['item_desc'];
			$item_id 	= 	"?item_id=".$_REQUEST["item_id"];
			$id 		= $_REQUEST["item_id"];
			$heading	=	"Modify ";
		break;
		
		case "Delete":
			foreach($_POST as $key => $val)
				{
					if(is_numeric($val))
					{
						$sql_img = $db_object->return_query("SELECT item_photo FROM craft_items_master WHERE item_id = $val");
				
						if($sql_img['item_photo'] != "")
						{
							unlink("../item-photos/".$sql_img['item_photo']);
							$thumbname = get_thumbnail($sql_img['item_photo']);
							unlink("../item-photos/".$thumbname);
						}


						$sql = "DELETE FROM craft_items_master WHERE item_id = $val";	
						$db_object->execute_query($sql);
					}				
				}
		break;
		
		case"Toggle":
			$item_id 		= $db_object->sanatize_value($_REQUEST["item_id"]);
			$display_flag 	= $db_object->sanatize_value($_REQUEST["display_flag"]);
			if($display_flag == 1)
			{
				$sqlhelper->updatedata("item_status","0","item_id=$item_id");
			}
			else
			{
				$sqlhelper->updatedata("item_status","1","item_id=$item_id");
			}
			
			redirect($url_name[0]."?error=Status is changed");
		break;
		
		case"Reset":
		redirect("manage-items.php");
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
 

/*function check_category_selected()
{
	
	var count = 0
	$("#cat_selected_list").find("[type=checkbox]").each(function(){
		if($(this).is(":checked"))
		{
			count++;
		}
	})	
	if(count <= 0)
	{
		alert("You have not selected any category, kindly select atleast one category.")
		return false;	
	}
	else
	{
		return true;	
	}
}*/
    </script>
 
</head>
<body>
<?php include("header.php"); ?>
<div class="overlay"></div>
<div class="overlayBox" id="data-entry">
  <div class="formCntr">
    <h2 style="background:#a2a2a2"><?php echo $heading ?> Item</h2>
	<form action="manage-items.php<?php echo $item_id ?>" method="post" enctype="multipart/form-data"  onSubmit="return form_validate_jquery('.fldCntr')">
		 <div class="fldCntr" align="center" style="width:800px; margin-top:20px;">
		  <table width="90%" border="0" align="center" cellpadding="0" cellspacing="0" class="dvF1">
              
                <?php 
					if($item_id == "")
					{
				?>
                <tr>
                <td width="217" align="right" style="vertical-align:middle">Product Name&nbsp;:&nbsp;</td>
                <td width="469" align="left">
                <textarea name="item_name" required cols="" rows="" style="width:250px;height:120px;" title="Item Name"></textarea>
				</td>
                <tr>
              	<td>&nbsp;</td>
              	<td>Multiple Product can be added seperated by a " | " <br>
					e.g. romance|drama|horror|science</td>
              </tr>
                 <?php 
					}
					else
					{						
				?>
                <tr>
                <td width="217" align="right" style="vertical-align:middle">Product Name&nbsp;:&nbsp;</td>
                <td width="469" align="left">
                <input name="item_name" required type="text" style="width:250px" title="Item Name" value="<?php echo ucwords($item_name); ?>"> 
                </td>
                </tr>
                <tr>
                <td width="217" align="right" style="vertical-align:middle">Product Thumbnail&nbsp;:&nbsp;</td>
                <td width="469" align="left">
                <input name="itemphoto" type="file">
                </td>
                </tr>
                <tr>
                <td width="217" align="right" style="vertical-align:middle">Product Description&nbsp;:&nbsp;</td>
                <td width="469" align="left">
                <textarea name="desc" cols="" rows=""><?php echo $desc; ?></textarea>
                </td>
                </tr>
                
                 
                <?php 
					}
				?>
              
             <?php 
              if($_REQUEST["item_id"] !="")
			  {
				  ?>
				  <tr>
                <td align="left">&nbsp;</td>
                <td align="left"><input type="submit" name="action" value="Save" style="width:75PX;"  onClick="return check_category_selected()"></td>
              </tr>
			<?php
			  }
			  else
			  {
				  ?>
				<tr>
                <td align="left">&nbsp;</td>
                <td align="left"><input type="submit" name="action" value="Save" style="width:75PX;" ></td>
              </tr>
                <?php
				 }
              ?>
              
            </table>
          </div>
          </form>
		
     </div>
</div>
<div class="wraper">
  <h1 class="pageName">Manage Product</h1>
		<table width="100%" border="0" cellpadding="0" cellspacing="0">
        <tr>
          <td align="center">
            
              <div class="srchEngn"> <strong>
               <h2>Filter Data</h2>
               </strong>
                <form method="post">
                <div class="frm">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td width="52%" align="center">Product Name : 
                        <input  name="item_name" type="text" id="item_name" value="<?php echo $item_name; ?>"></td>
                      <td align="left"><input type="submit" name="action" id="action" value="Filter" style="width:100px;">
                      
                      </td>
                     </tr>
                  </table>
                </div>
                </form>
              </div>
             
            <br>
            <form method="post" name="delete_form" onSubmit="return confirm_delete()">
              <div class="tblCntr" style="padding-top:0; background:none;text-transform:capitalize;">
                <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                  <tr bgcolor="#F5F5F5" >
                  	<th width="4%">No.</th>
                  	<th>Thumb</th>
                  	<th>Product Name</th>
                   <!-- <th>Category</th>-->
                    
                    <th>Add Property</th>
                    <th>Toggle</th>
                    <th>Action</th>
                    <th>Select</th>
                  </tr>
                  <?php	
				  $n = 1;			
				    $sql = "SELECT * from craft_items_master WHERE 1=1 $whereclause ORDER BY item_id ASC" ;
 					$i = 1;
					$objpaging = initialize_paging($sql);
					$objpaging->limit = 25;
					$result = $objpaging->ini_paging();	
					while($rows = mysqli_fetch_array($result))
				    {
						$count_value = $db_object->return_query("SELECT COUNT(*) as total_value from craft_items_properties where item_id=".$rows["item_id"]);
						
 					$category_name = "";
					$j=1;
					$sql_cat = "SELECT * FROM manage_category mc
								INNER JOIN craft_mapping cm ON cm.category_id = mc.category_id
								WHERE cm.item_id =".$rows['item_id'];
					$result_cat = $db_object->execute_query($sql_cat);
					while($rows1 = mysqli_fetch_array($result_cat))
					{
						if($j == 1)
						{
							$category_name = $rows1['category_name'];
						}
						else
						{
							$category_name = $category_name.", ".$rows1['category_name'];
						}
						$j++;
					}
 				  ?>
                  <tr>
                  	<td align="center" style="vertical-align:middle"><?php  echo ((($start * 10) - 10) + $n); $n++; ?></td>
                  	<td width="12%" align="center" style="vertical-align:middle">
                    <?php 
						if($rows['item_photo'] != "")
						{
							echo $photo_obj->imageResize(get_thumbnail($rows['item_photo']),100);
						}
						else
						{ 
					?>
                     	 <img src="../item-photos/no-photo.png" width="100" height="100" />
                    <?php 
						} ?>
                    </td>
                  	<td width="12%" align="center" style="vertical-align:middle"><?php echo ucwords($rows["item_name"]) ?></td>
                   <!-- <td width="12%" align="center" style="vertical-align:middle"><?php ///echo ucwords($category_name); ?></td>-->
                    
                    <td width="7%" align="center" style="vertical-align:middle"><a href="manage-property.php?item_id=<?php echo $rows["item_id"] ?>">Add</a> | <?php echo $count_value['total_value'] ?></td>
                    <td width="12%" align="center" style="vertical-align:middle">
                    <a href="manage-items.php?action=Toggle&item_id=<?php echo $rows['item_id'] ?>&display_flag=<?php echo $rows["item_status"] ?>" id="togglebutton"  style="padding:8px 12px; background-color:#CCC;border-radius:5px;color:<?php if($rows["item_status"] == 0){echo "#2C9D28"; } else { echo "#FC5F7A"; }?>">
                     <?php if($rows["item_status"] == 0){echo "Show"; } else { echo "Hide"; }?>
                    </a>
                    </td>  
                    <td width="12%" align="center" style="vertical-align:middle; "><a style="padding:8px 12px; background-color:#CCC;border-radius:5px;" href="manage-items.php?action=Modify&item_id=<?php echo $rows["item_id"] ?>" >Modify</a></td>
                    <td width="6%" align="center" style="vertical-align:middle">
                      <input type="checkbox" name="<?php echo $rows["item_id"] ?>" value="<?php echo $rows["item_id"] ?>"></td>
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
                <input name="action" type="button" value="Add Item" onClick="pop_up_box()">
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
