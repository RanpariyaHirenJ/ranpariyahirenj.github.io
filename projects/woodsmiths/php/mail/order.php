

<div style="font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#000000">
  <div style="width:680px"><a href="<?php echo base_url; ?>" title="Woodsmiths" target="_blank"  alt="Woodsmiths" style="margin-bottom:20px;border:none" class="CToWUd"><img src="<?php echo base_url; ?>images/logo.png" style="width: 20%"></a>

  <p>Dear <?php echo $data['order']['order_details']['first_name'].' '.$data['order']['order_details']['last_name']; ?>,</p>  
  <p>Thank you for placing an <?php echo $data['order']['order_details']['order_type']?'Order':'Enquiry'; ?> on Woodsmiths.</p>
  <p>Our team is looking into your <?php echo $data['order']['order_details']['order_type']?'Order':'Enquiry'; ?> and will get back to you at the earliest</p>

  <p><b>Following is your order summary</b></p>

  
  <table style="border-collapse:collapse;width:100%;border-top:1px solid #dddddd;border-left:1px solid #dddddd;margin-bottom:20px">
    <thead>
      <tr>
        <td style="font-size:12px;border-right:1px solid #dddddd;border-bottom:1px solid #dddddd;background-color:#efefef;font-weight:bold;text-align:left;padding:7px;color:#222222" colspan="2">Order Details</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="font-size:12px;border-right:1px solid #dddddd;border-bottom:1px solid #dddddd;text-align:left;padding:7px"><b>Order ID:</b> #<?php echo $data['order']['order_details']['order_no'] ?><br>
          <b>Date Added:</b> <?php echo date('F, d Y',strtotime($data['order']['order_details']['date_added'])); ?><br>
          <b>Order Type:</b> <?php echo $data['order']['order_details']['order_type']?'Cart':'Enquiry'; ?><br>
          
         
        </td>
        <td style="font-size:12px;border-right:1px solid #dddddd;border-bottom:1px solid #dddddd;text-align:left;padding:7px"><b>Email:</b> <a href="mailto:sushilergode2016@gmail.com" target="_blank"><?php echo $data['order']['order_details']['email']; ?></a><br>
        <b>Mobile No:</b> <?php echo $data['order']['order_details']['mobile']; ?><br>
      <b>Order Status:</b> <?php echo $data['order']['order_details']['status']; ?><br>
    </tr>
  </tbody>
</table>

<table style="border-collapse:collapse;width:100%;border-top:1px solid #dddddd;border-left:1px solid #dddddd;margin-bottom:20px">
  <thead>
    <tr>
      <td style="font-size:12px;border-right:1px solid #dddddd;border-bottom:1px solid #dddddd;background-color:#efefef;font-weight:bold;text-align:left;padding:7px;color:#222222">Communication Address</td>
    
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="font-size:12px;border-right:1px solid #dddddd;border-bottom:1px solid #dddddd;text-align:left;padding:7px"><?php echo $data['order']['order_details']['first_name'].' '.$data['order']['order_details']['last_name']; ?>,<br><?php echo $data['order']['order_details']['address'] ?><br><?php echo $data['order']['order_details']['state'] ?>,<br><?php echo $data['order']['order_details']['country'] ?></td>
      
      
      
    </tr>
  </tbody>
</table>
<table style="border-collapse:collapse;width:100%;border-top:1px solid #dddddd;border-left:1px solid #dddddd;margin-bottom:20px">
  <thead>
    <tr>
      <td style="font-size:12px;border-right:1px solid #dddddd;border-bottom:1px solid #dddddd;background-color:#efefef;font-weight:bold;text-align:left;padding:7px;color:#222222">Product</td>
      <td style="font-size:12px;border-right:1px solid #dddddd;border-bottom:1px solid #dddddd;background-color:#efefef;font-weight:bold;text-align:center;padding:7px;color:#222222">Image</td>
     
      <td style="font-size:12px;border-right:1px solid #dddddd;border-bottom:1px solid #dddddd;background-color:#efefef;font-weight:bold;text-align:right;padding:7px;color:#222222">Quantity</td>
      <td style="font-size:12px;border-right:1px solid #dddddd;border-bottom:1px solid #dddddd;background-color:#efefef;font-weight:bold;text-align:right;padding:7px;color:#222222">Price</td>
      <td style="font-size:12px;border-right:1px solid #dddddd;border-bottom:1px solid #dddddd;background-color:#efefef;font-weight:bold;text-align:right;padding:7px;color:#222222">Total</td>
    </tr>
  </thead>
  <tbody>
      <?php 
      foreach ($data['order']['order_items'] as  $value) {
        
       ?>
    <tr>
      <td style="font-size:12px;border-right:1px solid #dddddd;border-bottom:1px solid #dddddd;text-align:left;padding:7px"><?php echo $value['name']; ?>
      </td>
      <td style="font-size:12px;border-right:1px solid #dddddd;border-bottom:1px solid #dddddd;text-align:center;padding:7px"><img style="width: 30%;" src="<?php echo IMAGE_PATH.'uploads/'.$value['image_path'].'/small-'.$value['image']; ?>"></td>
      <td style="font-size:12px;border-right:1px solid #dddddd;border-bottom:1px solid #dddddd;text-align:right;padding:7px"><?php echo $value['quantity']; ?></td>
      <td style="font-size:12px;border-right:1px solid #dddddd;border-bottom:1px solid #dddddd;text-align:right;padding:7px"><?php echo $value['price']>0?'$'.$value['price']:'-NA-'; ?></td>
      <td style="font-size:12px;border-right:1px solid #dddddd;border-bottom:1px solid #dddddd;text-align:right;padding:7px"><?php echo $value['price']>0?'$'.$value['price']*$value['quantity']:'-NA-'; ?></td>
    </tr>
    <?php } ?>
    
  </tbody>
   <?php if($data['order']['order_details']['order_type']){ ?>
  <tfoot>
  
  
  <tr>
    <td style="font-size:12px;border-right:1px solid #dddddd;border-bottom:1px solid #dddddd;text-align:right;padding:7px" colspan="4"><b>Total:</b></td>
    <td style="font-size:12px;border-right:1px solid #dddddd;border-bottom:1px solid #dddddd;text-align:right;padding:7px">$<?php echo $data['order']['order_details']['grand_total'] ?></td>
  </tr>
  
  </tfoot>
    <?php } ?>
</table>


<p><span style="margin:px 20px 18px 20px;width:640px"><a href="<?php echo base_url.'order-details/'.$data['order']['order_details']['order_id']; ?>">Click Here</a> to view your order summary on the Woodsmiths website</span></p>
<p><span style="margin:px 20px 18px 20px;width:640px">For any further queries feel free to get in touch with us at <a href="mailto:customersupport@woodsmiths.com">customersupport@woodsmiths.com</a></span></p><br>

<p>Thanks</p>
<p>The Woodsmiths Web Team</p>
</div></div><div class="adL">
</div></div>