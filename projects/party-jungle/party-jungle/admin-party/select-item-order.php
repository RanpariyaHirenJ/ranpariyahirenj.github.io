<?php
include("admin_global.php"); 
check_login();
?>
<?php include("header.php"); ?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>Welcome</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<script src="js/jquery-1.8.2.min.js" type="text/javascript"></script>
<script src="js/common.js" type="text/javascript"></script>
<script src="js/js_class.js" type="text/javascript"></script>
<link rel="stylesheet" type="text/css" href="styles/style.css">
</head>
<body>


<div class="wraper">
	<div class="container" style="border:none;">
  <h1 class="pageName" style="border-bottom:1px solid #000000; padding:10px;"><u>Select Items For Order</u></h1>
		<table width="100%" border="0" cellpadding="0" cellspacing="0" class="select-order">
        <tr>
               <td width="33%" align="left">
                  <strong>
                  <label>Client Name :</label></strong>&nbsp;&nbsp;
                  <span>Ajit Phadtare</span>&nbsp;&nbsp;
               </td>
               <td width="33%" align="center">
                    <strong><label>Contact No.</label></strong>&nbsp;&nbsp;
                    <span>9821752456</span>&nbsp;&nbsp;
               </td>
              <td width="33%" align="right">
                  <strong><label>Delivery Date</label></strong>&nbsp;&nbsp;
                  <span>26/07/2015</span>&nbsp;&nbsp;
              </td>
              
             </tr> 
      </table>
     <div class="contents"> 
      <table width="70%" border="0" cellpadding="0" align="center" cellspacing="0" class="product-list">
           <tr>
               <td width="20%"><label><strong><u>Product Name</u></strong></label><br><br>
                   <img src="images/prod-photo.jpg">
               </td>
               
               
               <td width="80%">
               		<table>
                    	<tr>
                           <td>
                              <table width="100%">
                                 <tr>
                                    <td width="30%"><label>Our Cost</label>
                                    <input name="item_name" required type="text" > 
                                    </td>
                                    <td width="30%"><label>Customers Cost</label>
                                    <input name="item_name" required type="text" > 
                                    </td>
                                    <td>
                                    <input type="checkbox"> 
                                    <label>Select This Product</label>
                                    </td>
                                </tr>
                            </table>
                           </td>
                        </tr>
                        <tr>
                          <td>
                              <table width="100%">
                                 <tr>
                                    <td><label>Parameter 1</label><br>
                                        <select>
                                            <option>Select</option>
                                        </select> 
                                    </td>
                                    <td><label>Parameter 3</label><br>
                                        <select>
                                            <option>Select</option>
                                        </select> 
                                    </td>
                                </tr>
                            </table>
                           </td>
                       </tr>
                        <tr>
                           <td>
                             <table width="100%">
                                <tr>
                                    <td><label>Parameter 2</label><br>
                                        <select>
                                            <option>Select</option>
                                        </select> 
                                    </td>
                                    <td><label>Parameter 4</label><br>
                                        <select>
                                            <option>Select</option>
                                        </select> 
                                    </td>
                               </tr>
                            </table>
                          </td>
                        </tr>
                        
                        <tr>
                           <td>
                             <table width="100%">
                                <tr>
                                    <td>
                                    <textarea cols="60" rows="5" placeholder="Enter the customer products notes here"></textarea>
                                    </td>
                               </tr>
                            </table>
                          </td>
                        </tr>
                    </table>
               </td>
           </tr>
      </table>
      
      <table width="70%" border="0" cellpadding="0" align="center" cellspacing="0" class="product-list">
           <tr>
               <td width="20%"><label><strong><u>Product Name</u></strong></label><br><br>
                   <img src="images/prod-photo.jpg">
               </td>
               
               
               <td width="80%">
               		<table>
                    	<tr>
                           <td>
                              <table width="100%">
                                 <tr>
                                    <td width="30%"><label>Our Cost</label>
                                    <input name="item_name" required type="text" > 
                                    </td>
                                    <td width="30%"><label>Customers Cost</label>
                                    <input name="item_name" required type="text" > 
                                    </td>
                                    <td>
                                    <input type="checkbox"> 
                                    <label>Select This Product</label>
                                    </td>
                                </tr>
                            </table>
                           </td>
                        </tr>
                        <tr>
                          <td>
                              <table width="100%">
                                 <tr>
                                    <td><label>Parameter 1</label><br>
                                        <select>
                                            <option>Select</option>
                                        </select> 
                                    </td>
                                    <td><label>Parameter 3</label><br>
                                        <select>
                                            <option>Select</option>
                                        </select> 
                                    </td>
                                </tr>
                            </table>
                           </td>
                       </tr>
                        <tr>
                           <td>
                             <table width="100%">
                                <tr>
                                    <td><label>Parameter 2</label><br>
                                        <select>
                                            <option>Select</option>
                                        </select> 
                                    </td>
                                    <td><label>Parameter 4</label><br>
                                        <select>
                                            <option>Select</option>
                                        </select> 
                                    </td>
                               </tr>
                            </table>
                          </td>
                        </tr>
                        
                        <tr>
                           <td>
                             <table width="100%">
                                <tr>
                                    <td>
                                    <textarea cols="60" rows="5" placeholder="Enter the customer products notes here"></textarea>
                                    </td>
                               </tr>
                            </table>
                          </td>
                        </tr>
                    </table>
               </td>
           </tr>
      </table>
      
      <table width="70%" border="0" cellpadding="0" align="center" cellspacing="0" class="product-list">
           <tr>
               <td width="20%"><label><strong><u>Product Name</u></strong></label><br><br>
                   <img src="images/prod-photo.jpg">
               </td>
               
               
               <td width="80%">
               		<table>
                    	<tr>
                           <td>
                              <table width="100%">
                                 <tr>
                                    <td width="30%"><label>Our Cost</label>
                                    <input name="item_name" required type="text" > 
                                    </td>
                                    <td width="30%"><label>Customers Cost</label>
                                    <input name="item_name" required type="text" > 
                                    </td>
                                    <td>
                                    <input type="checkbox"> 
                                    <label>Select This Product</label>
                                    </td>
                                </tr>
                            </table>
                           </td>
                        </tr>
                        <tr>
                          <td>
                              <table width="100%">
                                 <tr>
                                    <td><label>Parameter 1</label><br>
                                        <select>
                                            <option>Select</option>
                                        </select> 
                                    </td>
                                    <td><label>Parameter 3</label><br>
                                        <select>
                                            <option>Select</option>
                                        </select> 
                                    </td>
                                </tr>
                            </table>
                           </td>
                       </tr>
                        <tr>
                           <td>
                             <table width="100%">
                                <tr>
                                    <td><label>Parameter 2</label><br>
                                        <select>
                                            <option>Select</option>
                                        </select> 
                                    </td>
                                    <td><label>Parameter 4</label><br>
                                        <select>
                                            <option>Select</option>
                                        </select> 
                                    </td>
                               </tr>
                            </table>
                          </td>
                        </tr>
                        
                        <tr>
                           <td>
                             <table width="100%">
                                <tr>
                                    <td>
                                    <textarea cols="60" rows="5" placeholder="Enter the customer products notes here"></textarea>
                                    </td>
                               </tr>
                            </table>
                          </td>
                        </tr>
                    </table>
               </td>
           </tr>
      </table>
      
      
      
      <div class="footer-buttons select-contents">
      		<div class="buttons1" style="text-align:center;">
            	<a href="order-confirmation.php"><input type="submit" value="Continue"></a>
                <input type="submit" value="Back" onClick="window.location='calendar.php';">
            </div>
           <?php
  include("footer.php"); 
  ?>
      </div>
      
       
      
     </div> 
     
    
 </div>  
 </div>
 <?php /*?><?php
  include("footer.php"); 
  ?><?php */?>
</body>
</html>
