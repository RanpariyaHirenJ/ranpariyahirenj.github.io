<?php 

class Category extends Masters
{

	private $error = array();


	public function index($category_id){

		$category_id = $this->xss_clean($category_id); 

		if($category_id > 0){

			$this->getCommonDetails();

			$this->data['getPath'] = $this->getPath($category_id);

			

			$cat_path = explode('/', $this->data['getPath']);
	        $cat_path = array_filter($cat_path);
	        $this->data['breadcrumbs'] = array();
	        $i = 0;	
	        foreach ($cat_path as $value) {
	            $this->data['breadcrumbs'][] = $this->getCategoryBreadcrumbs($value);
	            $i++;
	        }
	        	
	        $this->data['heading'] = array_pop($this->data['breadcrumbs']);
	      	
	    
			
			$this->data['category_products'] = $this->rawQuery("SELECT p.product_id,p.name,p.price,p.image,(select keyword from " . PREFIX . "url_alias where query=concat('product/index/',p.product_id)) as keyword, (select product_id from " . PREFIX . "wishlist where product_id=p.product_id and customer_id=".(int)$_SESSION['customer_id'].") as wishlist, c.dir_path,c.cart_type,c.enquiry_type from " . PREFIX . "product p inner join " . PREFIX . "product_to_category pc on p.product_id=pc.product_id inner join " . PREFIX . "category c on c.category_id=pc.category_id where pc.category_id=".$category_id."  order by p.date_added desc");

			if(!$this->data['category_products']){

				$category = $this->where('parent_id',$category_id)->get('category',null,'category_id');

				$products = array();
				
				foreach ($category as  $value) {
			
					$products = $this->rawQuery("SELECT p.product_id,p.name,p.price,p.image,(select keyword from " . PREFIX . "url_alias where query=concat('product/index/',p.product_id)) as keyword, (select product_id from " . PREFIX . "wishlist where product_id=p.product_id and customer_id=".(int)$_SESSION['customer_id'].") as wishlist, c.dir_path,c.cart_type,c.enquiry_type from " . PREFIX . "product p inner join " . PREFIX . "product_to_category pc on p.product_id=pc.product_id inner join " . PREFIX . "category c on c.category_id=pc.category_id where pc.category_id=".$value['category_id']."  order by p.date_added desc limit 5");

					$this->data['category_products'] = array_merge($this->data['category_products'],$products);
					
					
				}

			}

			
			view('category',$this->data);

		}
		
		
	}



}