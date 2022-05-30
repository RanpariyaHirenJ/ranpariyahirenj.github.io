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

<div class="overlay"></div>

<div class="overlayBox" id="data-entry" style="display:none;">
  <div class="formCntr" id="library-history">
    <h2 style="background:#a2a2a2; text-align:center;">Confirm Order</h2>
    <div style="padding:5px 20px; ">
		 <div class="fldCntr order-confirm" style="border:none !important;" align="center">
		  
            <table width="70%" border="0" cellpadding="0" align="center" cellspacing="0" class="product-edit">
           <tr style="border-bottom:1px solid #000000;">
               <td width="20%"><label><strong><u>Product Name</u></strong></label><br><br>
                   <img src="images/prod-photo.jpg">
               </td>
               
               
               <td width="80%">
               		<table>
                    	<tr>
                           <td>
                              <table width="100%">
                                 <tr>
                                    <td width="30%"><label>Our Cost</label><br>
                                    <input name="item_name" required type="text"> 
                                    </td>
                                    <td width="30%"><label>Customers Cost</label>
                                    <input name="item_name" required type="text"> 
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
                                    <textarea cols="48" rows="5" placeholder="Enter the customer products notes here"></textarea>
                                    </td>
                               </tr>
                            </table>
                          </td>
                        </tr>
                    </table>
               </td>
           </tr>
           
           <tr>
           	<td width="20%">&nbsp;</td>
            <td width="80%" style="border-top:1px solid #000000; padding-top:10px;">
            	<table>
                    	<tr>
                           <td>
                              <table width="100%">
                                 <tr>
                                    <td align="left" style="float:right;">
                                    </td>
                                    <td><input type="button" value="Save"></td>
                                     <td><input type="button" value="Cancel" onClick="window.location='order-confirmation.php';"></td>
                                </tr>
                            </table>
                           </td>
                        </tr>
                        
                       
                 </table>       
            </td>
           </tr>
           
           
           
      </table>
          </div>
    </div>      
     </div>
</div>
<div class="wraper">
	<div class="container order">
  <h1 class="pageName"><u>Order Confirmation + Email</u></h1>
  <table width="100%" border="0" cellpadding="0" cellspacing="0">
   <tr>
     <td>
      <table width="100%" border="0" cellpadding="0" cellspacing="0" class="select-order">
        <tr>
               <td width="33%" align="left">
                  <strong>
                  <label>Customer Name :</label></strong>&nbsp;&nbsp;
                  <span>Here Goes The Name Of Client</span>&nbsp;&nbsp;
               </td>
               <td width="33%" align="center">
                    <!--<strong><label>Contact No.</label></strong>&nbsp;&nbsp;
                    <span>9821752456</span>&nbsp;&nbsp;-->
               </td>
              <td width="33%" align="right">
                  <strong><label>Contact No.</label></strong>&nbsp;&nbsp;
                  <span>26/07/2015</span>&nbsp;&nbsp;
              </td>
              
             </tr> 
      </table>
      
      <table width="100%" border="0" cellpadding="0" cellspacing="0" class="select-order">
        <tr>
           <td width="33%" align="left">
              <p><strong><span>Ordered On :<span></strong> 25/07/2015</p>
           </td>
           <td width="33%" align="right">
              <p><strong><span>Delivery Date :</span></strong> 31/07/2015</p>
              
           </td>
        </tr> 
      </table>
      
      <table width="100%" border="0" cellpadding="0" cellspacing="0" class="select-order">
        <tr>
           <td width="33%" align="center">
              <p><strong><h3>Product Details</h3></strong></p>
           </td>
        </tr> 
      </table>
      
     <div class="contents order-content"> 
      <table width="70%" border="0" cellpadding="0" align="center" cellspacing="0" class="order-product-list">
           <tr>
               <td width="20%" style="padding-top:10px !important;"><label><strong><u>Product Name</u></strong></label><br><br>
                   <img src="images/prod-photo.jpg">
               </td>
              
               
               <td width="80%" >
               		<table>
                    	<!--<tr>
                           <td>
                              <table width="100%">-->
                                 <tr>
                                    <td width="30%">&nbsp; 
                                    </td>
                                </tr>
                            <!--</table>
                           </td>
                        </tr>-->
                        <!--<tr>
                          <td>
                              <table width="100%">-->
                                 <tr>
                                    <td><strong>Parameter 1 :</strong> Here goes parameter value
                                    </td>
                                   <td><strong>Parameter 2 :</strong> Here goes parameter value
                                    </td>
                                <!--</tr>
                            </table>
                           </td>-->
                       </tr>
                        <tr>
                           <!--<td>
                             <table width="100%">
                                <tr>-->
                                    <td><strong>Parameter 3 :</strong> Here goes parameter value
                                    </td>
                                   <td><strong>Parameter 4 :</strong> Here goes parameter value
                                    </td>
                               <!--</tr>
                            </table>
                          </td>-->
                        </tr>
                        
                        <tr>
                           <td>
                             <table width="100%" >
                                <tr>
                                    <td>
                                    Here goes any custom message note entered for this product
                                    </td>
                               </tr>
                            </table>
                          </td>
                        </tr>
                    </table>
               </td>
               
           </tr>
           <tr>
           	<td width="20%">&nbsp;</td>
            <td width="80%" style="border-top:1px solid #000000; padding-top:10px;">
            	<table>
                    	<tr>
                           <!--<td>
                              <table width="100%">
                                 <tr>-->
                                    <td align="left" style="float:right;"><strong>Cost&nbsp;</strong>  $750
                                    </td>
                                    <td><input type="button" value="Remove"></td>
                                     <td><input type="button" value="Edit" onClick="overlayBox('data-entry')"></td>
                                <!--</tr>
                            </table>
                           </td>-->
                        </tr>
                        
                       
                 </table>       
            </td>
           </tr>
           
      </table>
      
    <table width="70%" border="0" cellpadding="0" align="center" cellspacing="0" class="order-product-list">
           <tr>
               <td width="20%" style="padding-top:10px !important;"><label><strong><u>Product Name</u></strong></label><br><br>
                   <img src="images/prod-photo.jpg">
               </td>
              
               
               <td width="80%" >
               		<table>
                    	<tr>
                           <td>
                              <table width="100%">
                                 <tr>
                                    <td width="30%">&nbsp; 
                                    </td>
                                </tr>
                            </table>
                           </td>
                        </tr>
                        <tr>
                          <td>
                              <table width="100%">
                                 <tr>
                                    <td><strong>Parameter 1 :</strong> Here goes parameter value
                                    </td>
                                   <td><strong>Parameter 2 :</strong> Here goes parameter value
                                    </td>
                                </tr>
                            </table>
                           </td>
                       </tr>
                        <tr>
                           <td>
                             <table width="100%">
                                <tr>
                                    <td><strong>Parameter 3 :</strong> Here goes parameter value
                                    </td>
                                   <td><strong>Parameter 4 :</strong> Here goes parameter value
                                    </td>
                               </tr>
                            </table>
                          </td>
                        </tr>
                        
                        <tr>
                           <td>
                             <table width="100%" >
                                <tr>
                                    <td>
                                    Here goes any custom message note entered for this product
                                    </td>
                               </tr>
                            </table>
                          </td>
                        </tr>
                    </table>
               </td>
               
           </tr>
           <tr>
           	<td width="20%">&nbsp;</td>
            <td width="80%" style="border-top:1px solid #000000; padding-top:10px;">
            	<table>
                    	<tr>
                           <td>
                              <table width="100%">
                                 <tr>
                                    <td align="left" style="float:right;"><strong>Cost&nbsp;</strong>  $750 
                                    </td>
                                    <td><input type="button" value="Remove"></td>
                                     <td><input type="button" value="Edit" onClick="overlayBox('data-entry')"></td>
                                </tr>
                            </table>
                           </td>
                        </tr>
                        
                       
                 </table>       
            </td>
           <tr>
           
      </table>
      <table width="70%" border="0" cellpadding="0" align="center" cellspacing="0" class="order-product-list">
           <tr>
               <td width="20%" style="padding-top:10px !important;"><label><strong><u>Product Name</u></strong></label><br><br>
                   <img src="images/prod-photo.jpg">
               </td>
               
               <td width="80%" >
               		<table>
                    	<tr>
                           <td>
                              <table width="100%">
                                 <tr>
                                    <td width="30%">&nbsp; 
                                    </td>
                                </tr>
                            </table>
                           </td>
                        </tr>
                        <tr>
                          <td>
                              <table width="100%">
                                 <tr>
                                    <td><strong>Parameter 1 :</strong> Here goes parameter value
                                    </td>
                                   <td><strong>Parameter 2 :</strong> Here goes parameter value
                                    </td>
                                </tr>
                            </table>
                           </td>
                       </tr>
                        <tr>
                           <td>
                             <table width="100%">
                                <tr>
                                    <td><strong>Parameter 3 :</strong> Here goes parameter value
                                    </td>
                                   <td><strong>Parameter 4 :</strong> Here goes parameter value
                                    </td>
                               </tr>
                            </table>
                          </td>
                        </tr>
                        
                        <tr>
                           <td>
                             <table width="100%" >
                                <tr>
                                    <td>
                                    Here goes any custom message note entered for this product
                                    </td>
                               </tr>
                            </table>
                          </td>
                        </tr>
                    </table>
               </td>
               
           </tr>
           <tr>
           	<td width="20%">&nbsp;</td>
            <td width="80%" style="border-top:1px solid #000000; padding-top:10px;">
            	<table>
                    	<tr>
                           <td>
                              <table width="100%">
                                 <tr>
                                    <td align="left" style="float:right;"><strong>Cost&nbsp;</strong>  $750 
                                    </td>
                                    <td><input type="button" value="Remove"></td>
                                     <td><input type="button" value="Edit" onClick="overlayBox('data-entry')"></td>
                                </tr>
                            </table>
                           </td>
                        </tr>
                        
                       
                 </table>       
            </td>
           <tr>
           
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
            <?php
  include("footer.php"); 
  ?>
      </div>
     
      </td>
      </tr>
   </table>
  </div> 
       
   </div>
 </div>
 
 <script>
 	function library_history(getcase,album_id)
	{ 	
	
		$.post("ajax_functions.php",
		{	
			"function": getcase,
			"album_id": album_id
		},
		function(data,status){
			
			if(status == "success")
			{
			  	$("#library-history").html(data);
	  			initialize_lightbox('.overlayBox','relative')
				
				
			}
			else
			{
			  	alert('Notification not found');
			}
		});
	}
 
</script>
 
 <?php /*?><?php
  include("footer.php"); 
  ?><?php */?>
</body>
</html>
