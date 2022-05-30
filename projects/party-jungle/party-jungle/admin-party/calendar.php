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
<link rel="stylesheet" href="styles/jquery-ui.css">
<script src="js/jquery-ui.js"></script>
<!--<script type="text/javascript" src="JSDatePick/jsDatePick.min.1.3.js"></script>
<link rel="stylesheet" type="text/css" media="all" href="JSDatePick/jsDatePick_ltr.min.css" />-->
<script language="javascript"> 
$(function() {
  $( "#expiry_date" ).datepicker({
	changeMonth: true,
	changeYear: true,
	yearRange: "c-50:c",	 
	dateFormat: "dd/mm/yy"
	
  });
});
/*window.onload = function(){
	new JsDatePick({
		useMode:2,
		target:"expiry_date",
		dateFormat:"%d/%m/%Y"						
	});						
};*/
 </script>
</head>
<body>

<div class="overlay"></div>
<div class="overlayBox" id="data-entry">
  <div class="formCntr">
    <h2 style="background:#a2a2a2; text-align:center;">New Order</h2>
    <div style="padding:5px 20px; ">
		 <div class="fldCntr" align="center" style="width:800px; margin-top:0px; border:none;">
		  <table width="70%" border="0" align="center" cellpadding="0" cellspacing="0" class="dvF1" style="border:1px solid #000000; padding:10px 5px;">
              <tr>
                	<td colspan="3" align="left"><h6 style="border-bottom:1px solid #000000; margin:0 10px; padding:10px 10px 10px 0;">New Order</h6></td>
              </tr>
              <tr>
                    <td width="17%" style="vertical-align:middle ; padding-left:8px;">Client Name &nbsp;:&nbsp;</td>
                    <td width="30%" >
                    <input name="item_name" required type="text" style="width:221px; margin-right:10px;" title="First Name" placeholder="First Name" value=""> 
                    </td>
                    <td width="" >
                    <input name="item_name" required type="text" style="width:221px" title="Last Name" placeholder="Last Name" value=""> 
                    </td>
                </tr>
                <tr>
                    <td width="13%" style="vertical-align:middle; padding-left:7px;">Contact No.&nbsp;:&nbsp;</td>
                    <td width="30%" colspan="2">
                    <input name="item_name" required type="text" style="width:450px " placeholder="Contact No." title="Item Name" value=""> 
                    </td>
                </tr>
                <tr>
                    <td width="13%" style="vertical-align:middle; padding-left:7px;">Email&nbsp;:&nbsp;</td>
                    <td width="30%" colspan="2">
                    <input name="item_name" required type="text" style="width:450px" placeholder="Email" title="Item Name" value=""> 
                    </td>
                </tr>
                <tr>
                    <td width="13%" style="vertical-align:middle; padding-left:7px;">Delivery Date&nbsp;:&nbsp;</td>
                    <td width="" >
                    <input type="text" title="" placeholder="Select Date" id="expiry_date" name="expiry" style="width:221px; margin-right:10px; background-image:url(images/calendar.gif); background-repeat:no-repeat; background-position:right; background-size:25px 25px;" value="">
                    <!--<input type="submit" value="Select Date">--> 
                    </td>
                </tr>
                
                <tr>
                <td colspan="3">
                	<div style="text-align:center;">
                	<a href="select-item-order.php"><input  type="button" value="Save"></a>
                    <input   type="button" name="Cancel" value="cancel" onClick="window.location='calendar.php';" />                        
                    </div>
                </td>
                </tr>
               
              
            </table>
          </div>
    </div>      
     </div>
</div>

<div class="overlayBox" id="order-list">
  <div class="formCntr">
  <h2 style="float:left;background:#FF6B01;">Sat - 25/07/2015</h2>
    <h2 style="background:#FF6B01;wi text-align:center;">SUPPLY ORDERED</h2>
    <div style="padding:5px 20px; ">
		 <div class="fldCntr order-confirm" style="border:none !important;" align="center">
		  
            <table width="100%" border="0" cellpadding="0" align="center" cellspacing="0" class="order-list">
           <tr>
           <td style="width:98%; border-bottom:1px solid #000;" colspan="2">
           <label><strong><u>Client Name</u></strong></label>
                  
           </td>
           </tr>
           <tr>
           
               <td width="20%" style="padding-top:10px !important; "><br><br>
                   <img src="images/prod-photo.jpg"><br><br><label><strong style="margin-left:55px;"><u>Item Name</u></strong></label>
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
                                    <td width="350px" align="left"></td>
                                    <td>
                                    <strong style=" margin:01px 0 0 -80px;">Select State</strong>
                                    <select>
                                          <option>Select</option>
                                          <option>Order Created</option>
                                          <option>Supply Ordered</option>
                                          <option>Supply Received</option>
                                          <option>Items Designed</option>
                                          <option>Order Ready</option>
                                          <option>Payment Pending</option>
                                          <option>Payment Received</option>
                                        </select>
                                    </td>
                                </tr>
                            </table>
                           </td>
                        </tr>
                       
                      
                 </table>      
            </td>
           <tr>
          
      </table>
            <table width="100%" border="0" cellpadding="0" align="center" cellspacing="0" class="order-list">
           <tr>
           <td style="width:98%; border-bottom:1px solid #000;" colspan="2">
           <label><strong><u>Client Name</u></strong></label>
                  
           </td>
           </tr>
           <tr>
           
               <td width="20%" style="padding-top:10px !important; "><br><br>
                   <img src="images/prod-photo.jpg"><br><br><label><strong style="margin-left:55px;"><u>Item Name</u></strong></label>
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
                                    <td width="350px" align="left">
                                    </td>
                                   
                                        <td><strong style=" margin:01px 0 0 -80px;">Select State</strong>
                                    <select>
                                          <option>Select</option>
                                          <option>Order Created</option>
                                          <option>Supply Ordered</option>
                                          <option>Supply Received</option>
                                          <option>Items Designed</option>
                                          <option>Order Ready</option>
                                          <option>Payment Pending</option>
                                          <option>Payment Received</option>
                                        </select>
                                    </td>
                                   
                                </tr>
                            </table>
                           </td>
                        </tr>
                       
                      
                 </table>      
            </td>
           <tr>
          
      </table>
            <table width="100%" border="0" cellpadding="0" align="center" cellspacing="0" class="order-list">
           <tr>
           <td style="width:98%; border-bottom:1px solid #000;" colspan="2">
           <label><strong><u>Client Name</u></strong></label>
                  
           </td>
           </tr>
           <tr>
           
               <td width="20%" style="padding-top:10px !important; "><br><br>
                   <img src="images/prod-photo.jpg"><br><br><label><strong style="margin-left:55px;"><u>Item Name</u></strong></label>
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
                                    <td width="350px" align="left">
                                    </td>
                                   
                                        <td><strong style=" margin:01px 0 0 -80px;">Select State</strong>
                                    <select>
                                          <option>Select</option>
                                          <option>Order Created</option>
                                          <option>Supply Ordered</option>
                                          <option>Supply Received</option>
                                          <option>Items Designed</option>
                                          <option>Order Ready</option>
                                          <option>Payment Pending</option>
                                          <option>Payment Received</option>
                                        </select>
                                    </td>
                                   
                                </tr>
                            </table>
                           </td>
                        </tr>
                       
                      
                 </table>      
            </td>
           <tr>
          
      </table>
      
          </div>
    </div>      
     </div><h2 style="background:#FF6B01;padding:6px 10px; text-align:center;"><input type="submit" name="action" value="Done" style="margin-right:10px;"> <input type="submit" name="action" value="Close" style="margin-right:10px;" onClick="window.location='calendar.php';"></h2>
</div>
<div class="wraper">
  <h1 class="pageName">Calendar</h1>
		<table width="100%" border="0" cellpadding="0" cellspacing="0">
        <tr>
          <td align="center">
            
              <div class="srchEngn1"> 
              <strong>
              <label>Month</label>
               <select class="left-select-M">
              	    <option>month</option>
                    <option>Jan</option>
                    <option>Feb</option>
                    <option>Mar</option>
                    <option>Apr</option>
                    <option>May</option>
                    <option>Jun</option>
                    <option>Jul</option>
                    <option>Aug</option>
                    <option>Sep</option>
                    <option>Oct</option>
                    <option>Nov</option>
                    <option>Dec</option>
                    </select>
                    
                    <label>Year</label>
                    <select class="left-select-M">
              	    <option>Year</option>
                    <option>2015</option>
                    <option>2016</option>
                    <option>2017</option>
                    <option>2018</option>
                    <option>2019</option>
                    <option>2020</option>
                    <option>2021</option>
                    <option>2022</option>
                    <option>2023</option>
                    <option>2024</option>
                    <option>2025</option>
                    </select>
                    
                    <label>Status</label>
                    <select class="left-select-M">
              	    <option>Status</option>
                    <option>yes</option>
                    <option>no</option>
                    </select>
                    <input name="action" type="button" value="Create A New Order" onClick="overlayBox('data-entry')">
               </strong>
                
              </div>
             
            <br>
            <form method="post" name="delete_form" onSubmit="return confirm_delete()">
              <div class="tblCntr" style="padding-top:0; background:none;text-transform:capitalize;">
                <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">

                  <tr bgcolor="#F5F5F5" style="text-transform:uppercase; font-size:16px; font-weight:bold;">
                  	<th width="4%">Sun</th>
                  	<th>Mon</th>
                  	<th>Tue</th>
                    <th>Wed</th>
                    <th>Thu</th>
                    <th>Fri</th>
                    <th>Sat</th>
                  </tr>
                  <tr style="height:120px; min-height:120px">
                  	<td width="5%" align="center" style="text-align:left">1
                    <ul>
                    <li class="td1" onClick="overlayBox('order-list')">5</li>
                    <li class="td3" onClick="overlayBox('order-list')">3</li>
                    <li class="td4" onClick="overlayBox('order-list')">2</li>
                    <li class="td2" onClick="overlayBox('order-list')">6</li>
                    <li class="td7" onClick="overlayBox('order-list')">9</li>
                    <li class="td5" onClick="overlayBox('order-list')">4</li>
                    <li class="td6" onClick="overlayBox('order-list')">7</li>
                    </ul>
                    </td>
                  	<td width="5%" height="1%" align="center" style="text-align:left">2</td>
                  	<td width="5%" align="center" style="text-align:left">3</td>
                    <td width="5%" align="center" style="text-align:left">4
                    <ul>
                    <li class="td5" onClick="overlayBox('order-list')" >9</li>
                    <li class="td6" onClick="overlayBox('order-list')">1</li>
                    </ul></td>
                    <td width="5%" align="center" style="text-align:left">5</td>
                    <td width="5%" align="center" style="text-align:left">6</td>
                    <td width="5%" align="center" style="text-align:left">7</td>
                  </tr>     
                  <tr  style="height:120px; min-height:120px">
                  	<td align="center" style="text-align:left">8</td>
                  	<td width="5%"  height="10%" align="center" style="text-align:left">9</td>
                  	<td width="5%" align="center" style="text-align:left">10</td>
                    <td width="5%" align="center" style="text-align:left">11</td>
                    <td width="5%" align="center" style="text-align:left">12</td>
                    <td width="5%" align="center" style="text-align:left">13</td>
                    <td width="5%" align="center" style="text-align:left">14</td>
                  </tr>
                 <tr style="height:120px; min-height:120px">
                  	<td align="center" style="text-align:left">15</td>
                  	<td width="5%" align="center" style="text-align:left">16</td>
                  	<td width="5%" align="center" style="text-align:left">17</td>
                    <td width="5%" align="center" style="text-align:left">18</td>
                    <td width="5%" align="center" style="text-align:left">19
                   <ul>
                    <li class="td2" onClick="overlayBox('order-list')">2</li>
                    <li class="td5" onClick="overlayBox('order-list')">6</li>
                    <li class="td7" onClick="overlayBox('order-list')">1</li>
                    </ul> </td>
                    <td width="5%" align="center" style="text-align:left">20</td>
                    <td width="5%" align="center" style="text-align:left">21</td>
                  </tr>
                  <tr style="height:120px; min-height:120px">
                  	<td align="center" style="text-align:left">22</td>
                  	<td width="5%" align="center" style="text-align:left">23</td>
                  	<td width="5%" align="center" style="text-align:left">24</td>
                    <td width="5%" align="center" style="text-align:left">25</td>
                    <td width="5%" align="center" style="text-align:left">26</td>
                    <td width="5%" align="center" style="text-align:left">27</td>
                    <td width="5%" align="center" style="text-align:left">28</td>
                  </tr>   
                  <tr style="height:120px; min-height:120px">
                  	<td text-align:leftstyle="text-align:left">29</td>
                  	<td width="5%" align="center" style="text-align:left">30</td>
                  	<td width="5%" align="center" style="text-align:left">31</td>
                    <td width="5%" align="center" style="vertical-align:middle"></td>
                    <td width="5%" align="center" style="vertical-align:middle"></td>
                    <td width="5%" align="center" style="vertical-align:middle"></td>
                    <td width="5%" align="center" style="vertical-align:middle"></td>
                  </tr>   
                  <tr>
                  	<th class="td1" >Order Created</th>
                  	<th class="td2" >Supply Ordered</th>
                  	<th class="td3" >Supply Received</th>
                    <th class="td4" >Items Designed</th>
                    <th class="td5" >Order Ready</th>
                    <th class="td6" >Payment Pending</th>
                    <th class="td7" >Payment Received</th>
                  </tr>
                </table>
              </div>
            </form>         
          </tr>
      </table>
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
	  			initialize_lightbox('.overlayBox','absolute')
			}
			else
			{
			  	alert('Notification not found');
			}
		});
	}
 
</script>
 <?php
  include("footer.php"); 
  ?>
</body>
</html>
