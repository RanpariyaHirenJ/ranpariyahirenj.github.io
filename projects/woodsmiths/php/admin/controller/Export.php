<?php 
/**
 * 
 */
class Export extends MysqliDb
{

	private $error = array();
	private $data = array();

	public function excelHeader($filename){
		header("Content-Type:   application/vnd.ms-excel; charset=utf-8");
		header("Content-Disposition: attachment; filename=".$filename);  //File name extension was wrong
		header("Expires: 0");
		header("Cache-Control: must-revalidate, post-check=0, pre-check=0");
		header("Cache-Control: private",false);
	}
		
	
	public function order()
	{	

		$orders = $this->rawQuery("SELECT o.order_no,o.order_id,o.order_type,o.status,o.grand_total,c.first_name, c.last_name, o.mobile, o.country, o.state,o.address,o.date_added, (select count(*) from ". PREFIX ."order_items where order_id=o.order_id) as items from ". PREFIX ."customer c inner join ". PREFIX ."orders o on c.customer_id=o.customer_id where 1=1 ".$_SESSION['search_cond_for_order_query']." order by o.date_added desc");

		$body = ' <table border=1>
		      <thead>
		        <tr>
		          <th>Order No.</th>
		          <th>Customer Name</th>
		          <th>Mobile No.</th>
		          <th>Item Products</th>
		          <th>Order Type</th>
		          <th>Total</th>
		          <th>Country</th>
		          <th>State</th>
		          <th>Order Status</th>
		          <th>Order Date</th>
		      
		        </tr>
		      </thead>
		      <tbody>';
		     
	        foreach ($orders as $value) {
		         
		    $body .= '<tr>
		          <td>#'. $value["order_no"].'</td>
		          <td>'. ($value["first_name"]." ".$value["last_name"]).'</td>
		          <td>'. $value["mobile"].'</td>
		          <td>'. $value["items"].'</td>
		          <td>'. ($value["order_type"]?"Cart":"Enquiry").'</td>
		          <td>'. ($value["grand_total"]>0?"$".$value["grand_total"]:"-NA-").'</td>
		          <td>'. $value["country"].'</td>
		          <td>'. $value["state"].'</td>
		          <td>'. $value["status"].'</td>
		          <td>'. date("d/m/Y",strtotime($value["date_added"])).'</td>
		         </tr>';
		    }
		    $body .= '</tbody>
		    </table>';

		    echo $body;

		    $this->excelHeader('order-export.xls');
		
	}

	public function enquiry()
	{	

		$enquiry = $this->rawQuery('SELECT pe.*,p.name as product_name, (select keyword from ' . PREFIX . 'url_alias where query=concat(\'product/index/\',pe.product_id)) as keyword  from ' . PREFIX . 'product_enquiry pe inner join ' . PREFIX . 'product p on p.product_id=pe.product_id where 1=1 '.$_SESSION['search_cond_for_enquiry_query'].' order by pe.enquiry_id desc ');

		

		$body = ' <table border=1>
		      <thead>
		        <tr>
		          <th>Enquiry No.</th>
		          <th>Product Name</th>
		          <th>Customer Name</th>
		          <th>Customer Email</th>
		          <th>Mobile No.</th>
		          <th>Message</th>
		          <th>Enquiry Date</th>
		        </tr>
		      </thead>
		      <tbody>';
		     
	        foreach ($enquiry as $value) {
		         
		    $body .= '<tr>
		          <td>#'. $value["enquiry_no"].'</td>
		          <td>'. $value["product_name"].'</td>
		          <td>'. $value["name"].'</td>
		          <td>'. $value["email"].'</td>
		          <td>'. $value["mobile"].'</td>
		          <td>'. $value["message"].'</td>
		          <td>'. date("d/m/Y",strtotime($value["date_added"])).'</td>
		         </tr>';
		    }
		    $body .= '</tbody>
		    </table>';

		    echo $body;

		    $this->excelHeader('enquiry-export.xls');
		
	}
	
}


 ?>
