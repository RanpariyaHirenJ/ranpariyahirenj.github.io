<?php 
/**
 * 
 */
class Dashboard extends MysqliDb
{

	private $error = array();
	private $data = array();
		
	
	public function index()
	{		
		$this->data["message"] = "Kindly login using your username and password";	

		$this->data['orders'] = $this->rawQuery("SELECT o.order_id,o.order_type,o.status,c.first_name, c.last_name, o.mobile, o.country, o.state,o.address,o.date_added, (select count(*) from ". PREFIX ."order_items where order_id=o.order_id) as items from ". PREFIX ."customer c inner join ". PREFIX ."orders o on c.customer_id=o.customer_id order by o.date_added desc");


		view('Dashboard',$this->data);
	}
	
}


 ?>
