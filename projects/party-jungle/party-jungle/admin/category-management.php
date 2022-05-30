
<?php include("header.php"); ?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>Admin | party jungle</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<script src="js/jquery-1.8.2.min.js" type="text/javascript"></script>
<script src="js/common.js" type="text/javascript"></script>
<script src="js/js_class.js" type="text/javascript"></script>
<link rel="stylesheet" type="text/css" href="styles/style.css">
</head>
<body>
<div class="wraper">
	<div class="container order">
  <h1 class="pageName"><u>Category Management</u></h1>
  <table width="100%" border="0" cellpadding="0" cellspacing="0">
   <tr>
     <td>
     <div class="contents order-content"> 
         <table width="40%" cellpadding="0" cellspacing="0" align="center" class="category-management" style="">
         	<tr>
               <td>
                   <table>
                       <tr>
                            <td  width="15%">Category Name : </td>
                            <td  width="30%"><input type="text" value=""></td>
                       </tr>
                   </table>  
                 </td>          
            </tr>
            <tr>
            	<td>
                   <table>
                       <tr>
                          <td>Category Items : </td>
                          <td>
                              <table width="100%" style="border:1px solid #000000;">
                                  <tr>
                                      <td><input type="checkbox">&nbsp;<label>Here goes the name of the item</label></td>
                                  </tr>
                                  <tr>
                                      <td><input type="checkbox">&nbsp;<label>Here goes the name of the item</label></td>
                                  </tr>
                                  <tr>
                                      <td><input type="checkbox">&nbsp;<label>Here goes the name of the item</label></td>
                                  </tr>
                                  <tr>
                                      <td><input type="checkbox">&nbsp;<label>Here goes the name of the item</label></td>
                                  </tr>
                                  <tr>
                                      <td><input type="checkbox">&nbsp;<label>Here goes the name of the item</label></td>
                                  </tr>
                                  
                              </table>
                          </td>
                          
                         </tr>
                        </table>
                        </td>  
            </tr>
            <tr>
            	<td>
                	<div style="text-align:center;">
                        <input type="button" value="Save">
                    </div>
                	
                </td>
            </tr>
            
            
         </table>
     </div>
      <div class="footer-buttons select-contents">
      		<div class="buttons btn-confirm fl">
            	<input type="submit" value="Confirm Order">
                <input type="submit" value="Cancel Order">
                <input type="submit" value="Back" onClick="window.location='select-item-order.php';">
            </div>
            <div class="buttons fr total-order" >
            	<p>Total Order Value : $1200</p>
            </div>
            <div class="clear"></div>
            
      </div>
     
      </td>
      </tr>
   </table>
  </div> 
       
   </div>
 </div>
 <?php
  include("footer.php"); 
  ?>
</body>
</html>
