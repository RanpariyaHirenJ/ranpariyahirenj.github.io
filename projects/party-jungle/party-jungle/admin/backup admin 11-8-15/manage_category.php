<?php
	include("admin_global.php");
	check_login();
 	if(isset($_REQUEST['start']))
	{
		$start = $_REQUEST['start'];
	}
	else
	{
		$start = 1;
	}
	$category_id = "";
	
 	if(isset($_REQUEST["action"]))
	{
		$sqlhelper = new sqlhelper("manage_category");
		$sqlhelper->db_connect($host,$username,$password,$database);
		
		switch($_REQUEST["action"])
		{
			case "Save":

				$category_name 	= $db_object->sanatize_string(ucfirst($_REQUEST["category_name"]));
				
				if(!isset($_REQUEST["category_id"]))
				{	
 					$url_name = $_SERVER['HTTP_REFERER'];
					$query_str = explode("?",$url_name);
					$url_name = explode("error",$url_name);
					$url_name[0] = str_replace("&&","",$url_name[0]);
					
 					$sqlhelper->adddata("category_name","'$category_name'");
  					$category_id = mysqli_insert_id($sqlhelper->conn);
					
						 foreach($_POST as $key => $val)
						 {
   							$first  = $key[0];
							$second = $key[1];
							$third  = $key[2];
							$fourth = $key[3];
							
							if($first == "i" && $second == "t" && $third == "e" && $fourth == "m")
							{
								$sql = "INSERT INTO craft_mapping (item_id, category_id) VALUES('$val','$category_id')";
							//die($sql);
								$db_object->execute_query($sql);
							 
							}
						 }
					
							if(count($query_str)>1)
							{
								redirect($url_name[0]."&error=Item has been added successfully");
							}
							else
							{
								redirect($url_name[0]."?error=Item has been added successfully");
							}
						
							redirect("manage_category.php?error=Category has been added successfully");
							die();
  				}
				else
				{
					$sqlhelper->updatedata("category_name","'$category_name'","category_id=".$_REQUEST["category_id"]);
					
 					$sql = "DELETE FROM craft_mapping WHERE category_id =".$_REQUEST["category_id"];
					//die($sql);
 					$db_object->execute_query($sql);
  					foreach($_POST as $key => $val)
					{
						//die("asdfasdfas");
						$first = $key[0];
						$second = $key[1];
						$third = $key[2];
						$fourth = $key[3];
						
						if($first == "i" && $second == "t" && $third == "e" && $fourth == "m")
						{
							
							$category_id = $_REQUEST["category_id"];
							$sql = "INSERT INTO craft_mapping (item_id, category_id) VALUES('$val', '$category_id')";
						//die($sql);
  							$db_object->execute_query($sql);
							
						}
					}
					
					if(count($query_str)>1)
					{
						$url_name = $url_name[0]."&error=Category has been updated successfully.";
					}
					else
					{
						$url_name = $url_name[0]."?error=Category has been updated successfully.";
					}
					redirect($url_name);
 					redirect("manage_category.php?error=Category has been added successfully");
					die();
				}
			break;
			
			case "Modify":
				$sql = "SELECT * FROM  manage_category WHERE category_id = ".$_REQUEST["category_id"];
			
				$value			= $db_object->return_query($sql);
				$category_name	= $value["category_name"];
 				$category_id 	= "?category_id=".$_REQUEST["category_id"];
 				$id 			= $_REQUEST["category_id"];
				
				$pop_up_box_status = 1;
				
				if(!isset($_SESSION['url_name']))
				{
					$_SESSION['url_name'] = $_SERVER['HTTP_REFERER'];
				}
			
			
			break;
			
			case "Delete":
					foreach($_POST as $key => $val)
					{						
 						if(is_numeric($val))
						{
							
							$sql = "DELETE FROM  manage_category WHERE category_id = $val";	
  							$db_object->execute_query($sql);
						}				
					}			break;
			
			case"Toggle":
				$category_id 	= $db_object->sanatize_value($_REQUEST["category_id"]);
				$display_flag 	= $db_object->sanatize_value($_REQUEST["display_flag"]);
				if($display_flag == 1)
				{
					$sqlhelper->updatedata("display_flag","0","category_id=$category_id");
				}
				else
				{
					$sqlhelper->updatedata("display_flag","1","category_id=$category_id");
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
			
			case"Filter":
 				$category_name 	= $db_object->sanatize_string($_REQUEST["category_name"]);
				$item_name 	= $db_object->sanatize_string($_REQUEST["item_name"]);
				
 				if($category_name != "")
				{
					$whereclause = " WHERE category_name LIKE '%$category_name%'";
				}
				
				if($item_name != "")
				{
					$whereclause = " WHERE item_name LIKE '%$item_name%'";
				}
				
				
			break;		
		}
	}	
?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>Party Jungle - Administrative Suite</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<link href="styles/style.css" rel="stylesheet" type="text/css">
<script src="js/jquery-1.8.2.min.js" type="text/javascript"></script>
<script language="javascript" src="./js/js_class.js"></script>
<script src="./js/common.js" type="text/javascript"></script>
<script language="javascript">
function Data() 
{
	var x=document.getElementById("myFrm");
	var cont = 0;
	for (var i=0;i<x.length;i++)
  	{
		var j = x.elements[i];
  		if(j.type =="checkbox")
		{
			if(j.checked==true)
			{
				cont++;
			}
		}
  	}
	if(cont > 0)
	{
		//alert("Are you sure want to delete selected record");
		return confirm("Are you sure want to delete selected record");
	}
	else
	{
		alert("Check any one box to delete record");
		return false;
	}
return true;
}

function pop_up_box()
{
	overlayBox('data-entry')
}


function check_category_selected()
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
}



</script>
 <script language="JavaScript" type="text/javascript">
       var frmuser_element = "category_name[r";
 </script>
</head>
<body>
<?php include("header.php"); ?>		
<div class="overlay"></div>
    <div class="overlayBox" id="data-entry">
      <div class="formCntr">
        <h2 style="background:#a2a2a2"> Add / Modify Category</h2>
        
       
          
		  <form action="manage_category.php<?php echo $category_id ?>" method="post" enctype="multipart/form-data" id="frmuser" onSubmit="return validate_form(this.id,frmuser_element)">
		  <div class="fldCntr" align="center" style="width:600px; margin-top:0px;">
              <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0" class="dvF1">
              <tr>
                <td width="217" align="left">Category Name</td>
                <td width="469" align="left">
					<input type="text" title="Category name" name="category_name" style="width:250px;" value="<?php echo $category_name ?>">
				</td>
              </tr>
              
              
              <tr>
                <td width="217" align="left">Select Product</td>
                <td width="469" align="left">
                
                
                 <div style="height:110px; width:248px; border:1px solid #666; border-radius:5px; overflow-y:scroll" id="cat_selected_list">
                <?php
				$a = 1;
				$checked = "";
				$sql_item = "SELECT * FROM craft_items_master";
				$result_item = $db_object->execute_query($sql_item);
				while($rows = mysqli_fetch_array($result_item))
				{
					if(isset($id))
					{
						$check_sql = "SELECT * FROM  craft_mapping WHERE category_id = $id AND item_id =".$rows['item_id'];
						$check_value = $db_object->return_query($check_sql);
						
						if(isset($check_value['craft_map_id']))
						{
							$checked = "checked";
						}
						else
						{
							$checked = "";
						}
					}
					?>
					<div style="padding:5px 10px;">
                    
				
                    <input type="checkbox" <?php echo $checked; ?> name="item<?php echo $a ?>" value="<?php echo $rows['item_id'] ?>" > &nbsp;<?php echo $rows['item_name'] ?>
					</div>
					<?php
					$a++;
				}
	
				?>
                </div>    
				</td>
              </tr>
              
              
              <tr>
                <td align="left">&nbsp;</td>
                <td align="left">
                    <input type="submit" name="action" value="Save" onClick="return check_category_selected()">
                </td>
              </tr>
            </table>
              </div>
             </form>
          </div>
       </div>
        <div class="wraper">
  		<h1 class="pageName">Manage Category</h1>
        
       <div class="srchEngn"> <strong>
               <h2>Filter Data</h2>
               </strong>
                <form method="get">
                <div class="frm">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td width="52%" align="center">Category Name : 
                        <input  name="category_name" type="text" id="item_name" value="<?php echo $category_name; ?>"></td>
                        
                         <td width="52%" align="center">Product Name : 
                        <input  name="item_name" type="text" id="item_name" value="<?php echo $item_name; ?>"></td>
                      <td align="left"><input type="submit" name="action" id="action" value="Filter" style="width:100px;">
                      
                     
                      
                      
                      </td>
                     </tr>
                  </table>
                </div>
                </form>
              </div>
          </br>
        
       <form method="post" name="myform" id="myFrm" onSubmit="return Data()" target="_self"> 
      	 <div class="tblCntr" style="padding-top:0; background:none;">
			<table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
              <tr>
                <th align="left"><strong>Sr</strong></th>
                <th align="left">Category Name</th>
                <th align="left">Product Name</th>
            
                <th align="left">Toggle</th>
                <th align="center"><strong>Modify</strong></th>
                <th align="center"><strong>Select</strong></th>
              </tr>
			
              <?php 
			  $n = 1;
			
		//$sql  = "SELECT * FROM  manage_category $whereclause  ORDER BY category_id DESC";
			
			$sql  = "SELECT * FROM  manage_category mc
					INNER JOIN  craft_mapping cm ON cm.category_id = mc.category_id
					INNER JOIN  craft_items_master cim ON cim.item_id = cm.item_id
  					 $whereclause
					 GROUP BY cm.category_id
					   ORDER BY cm.category_id DESC";
			
			
			  $objpaging = initialize_paging($sql);
			  $objpaging->limit = 10;
			  $result = $objpaging->ini_paging();
			  while($value = mysqli_fetch_array($result))
			  {	
			  		$item_name = "";
					$j=1;
					$sql_cat = "SELECT * FROM craft_items_master cim
								INNER JOIN craft_mapping cm ON cm.item_id = cim.item_id 
								WHERE cm.category_id =".$value['category_id'];
					$result_cat = $db_object->execute_query($sql_cat);
					while($rows = mysqli_fetch_array($result_cat))
					{
						if($j == 1)
						{
							$item_name = $rows['item_name'];
						}
						else
						{
							$item_name = $item_name.", ".$rows['item_name'];
						}
						$j++;
					}
 			  ?>
              <tr>
                <td width="4%" align="center" style="vertical-align:middle"><?php  echo ((($start * 10) - 10) + $n); $n++; ?></td>
                <td width="20%" align="center" style="vertical-align:middle"><?php echo $value["category_name"] ?></td>
                <td width="35%" align="center" style="vertical-align:middle"><?php echo $item_name; ?></td>
                
                
                <td width="19%" align="center" style="vertical-align:middle"><a href="manage_category.php?action=Toggle&category_id=<?php echo $value['category_id'] ?>&display_flag=<?php echo $value["display_flag"] ?>" id="togglebutton"  style="padding:8px 12px; background-color:#CCC;border-radius:5px;color:<?php if($value["display_flag"] == 0){echo "#2C9D28"; } else { echo "#FC5F7A"; }?>">
                    
                     <?php if($value["display_flag"] == 0){echo "Show"; } else { echo "&nbsp;Hide&nbsp;"; }?>
                    </a></td>
                    
                
                <td width="9%" align="center" style="vertical-align:middle">
					<a href="manage_category.php?action=Modify&category_id=<?php echo $value["category_id"] ?>" target="_self"  id="modifybutton" style="padding:8px 12px; background-color:#CCC;border-radius:5px;color" >Modify</a>				</td>
                <td width="13%" align="center" style="vertical-align:middle">
                  <input type="checkbox" name="<?php echo $value["category_id"]?>" value="<?php echo $value["category_id"] ?>">
                </td>
              </tr>
              
              <?php 
			  	}
			  ?>
			 
			  <tr>
			  	<td colspan="6" align="center">
					<!--<input name="action" type="submit" value="Delete">-->
                    <input name="action2" type="button" value="Add Category" onClick="pop_up_box()"> &nbsp;
                <input type="submit" name="action" id="Delete" value="Delete">&nbsp;&nbsp;</td>
			  </tr>              
              <tr align="right">
                <td colspan="6">
	   				<div class="pagerCnt"> <?php echo($objpaging->display_paging()) ?> </div>
	   			</td>
              </tr>
            </table>
</div>
            </form>
            </div>
       <?php include("footer.php"); 
	  	if($pop_up_box_status == 1)		
		{	
			?>
				<script type="text/javascript">
					overlayBox('data-entry')
				</script>        
			<?php	
		}
	  ?>
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
</body>
</html>
