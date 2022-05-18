<?php 

/**
 * 
 */
class Search extends Masters
{
	
	public function index(){	

		$keyword = $this->xss_clean($_GET['keyword']);

       	$query = $this->rawQuery("SELECT * FROM " . PREFIX . "product WHERE MATCH(name) AGAINST('".$keyword."')");
        $search = array();

        foreach ($query as $result) {

            $this->data['search'][] = array('product_id'=>$result['product_id'],'name'=>$result['name'],'image'=>$result['image'],'price'=>$result['price'],'keyword'=>$this->getNewsSeoUrl($result['product_id']),'dir_path'=>$this->getProductImagePath($result['product_id']),'cart_type'=>$this->getProductCartType($result['product_id']),'wishlist'=>$this->getWishlistFlag($result['product_id']));
        }

         $this->data['keyword'] = $keyword;

       	$this->getCommonDetails();
      	view('search',$this->data);

	}

}

 ?>