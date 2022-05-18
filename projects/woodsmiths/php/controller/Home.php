<?php 
/**
 * 
 */
class Home extends Masters
{

	private $error = array();
	// private $data = array();
		
	
	public function index()
	{		
		$this->data["message"] = "Home";

		$this->getCommonDetails();

		$this->data['banner'] = $this->get('banner');


		foreach ($this->data['banner'] as  $value) {
			
			$this->data['banner'][$value['module']]['banner_details'] = $value;
			$slider = $this->where('banner_id',$value['banner_id'])->orderBy('sort_order','asc')->get('banner_image');

			if($value['product_count_flag']){
				foreach ($slider as $value1) {
					
					$link = explode('/', $value1['link']);
					$link = end($link);

					$count = $this->rawQueryOne("SELECT count(pc.product_id) as product_count from " . PREFIX . "url_alias ua inner join " . PREFIX . "product_to_category pc on ua.query=concat('category/index/',pc.category_id) where ua.keyword='".$link."'");

					$this->data['banner'][$value['module']]['slider'][] = $value1 + array('product_count'=>$count['product_count']);
				}
			}else{
				$this->data['banner'][$value['module']]['slider'] = $slider;
			}

		}


		view('index',$this->data);
	}
	

}


 ?>
