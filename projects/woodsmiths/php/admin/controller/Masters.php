<?php 
/**
 * 
 */
class Masters extends MysqliDb
{
	private $error = array();
	private $data = array();	  			
	

	

	public function getCategories($parent_id = 0){
		
        $category_data = array();
        $query = $this->query("SELECT * FROM " . PREFIX . "category c LEFT JOIN " . PREFIX . "category_description cd ON (c.category_id = cd.category_id) WHERE c.parent_id = '" . (int)$parent_id . "' ORDER BY  cd.name ASC ");

       
            foreach ($query as $result) {

                
                $category_data[] = array(
                    'category_id' => $result['category_id'],
                    'name'        => $this->getPath($result['category_id']),
                    'status'      => $result['status'],
                    'sort_order'  => $result['sort_order'],
                    'banner'      => $result['banner'],
                    'path'        => $result['dir_path'],
                    'product_count' => $this->productCount($result['category_id'])
                );
            
                $category_data = array_merge($category_data, $this->getCategories($result['category_id']));
            }
            $_SESSION['category_data'] = $category_data;
            return $category_data;
    }

    public function productCount($category_id){

    	$this->where('category_id',$category_id)->get('product_to_category');

    	return $this->count;

    }

    public function getPath($category_id) {
       
        $query = $this->rawQuery("SELECT name, parent_id FROM " . PREFIX . "category c LEFT JOIN " . PREFIX . "category_description cd ON (c.category_id = cd.category_id) WHERE c.category_id = '" . (int)$category_id . "'  ORDER BY c.sort_order, cd.name ASC");
        
    
        if ($query[0]['parent_id']) {
            //echo "Parent <br>";
            return $this->getPath($query[0]['parent_id']) .TEXT_SEPARATOR . $query[0]['name'];
        } else {
            //echo "No parent <br>";
            return $query[0]['name'];
        }
    }

   

    public function getKeywordPath($category_id) {
       
        $query = $this->rawQueryOne("SELECT name, parent_id, (select keyword from " . PREFIX . "url_alias where query=concat('category/index/',cd.category_id)) as keyword FROM " . PREFIX . "category c LEFT JOIN " . PREFIX . "category_description cd ON (c.category_id = cd.category_id) WHERE c.category_id = '" . (int)$category_id . "'  ORDER BY c.sort_order, cd.name ASC");
        
    
        if ($query['parent_id']) {
            //echo "Parent <br>";
            return $this->getKeywordPath($query['parent_id']) .'/'. $query['keyword'];
        }else{
            return  $query['keyword'];
        }
    }

   

    public function getProductImagePath($product_id){

        $cat = $this->where('product_id',$product_id)->getOne('product_to_category');

        return $this->getKeywordPath($cat['category_id']);

    }    

    public function sendMail($mail){

        $subject = $mail['subject']; 
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $headers .= 'From: info@intermind.in' . "\r\n";
        $to = $mail['to'];

        mail($to,$subject,$mail['message'],$headers);
        

    }

    public function format_uri( $string, $separator = '-' )
    {
        $string = str_replace('nbsp;', '', $string);
        $accents_regex = '~&([a-z]{1,2})(?:acute|cedil|circ|grave|lig|orn|ring|slash|th|tilde|uml);~i';
        $special_cases = array( '&' => 'and', "'" => '');
        $string = mb_strtolower( trim( $string ), 'UTF-8' );
        $string = str_replace( array_keys($special_cases), array_values( $special_cases), $string );
        $string = preg_replace( $accents_regex, '$1', htmlentities( $string, ENT_QUOTES, 'UTF-8' ) );
        $string = preg_replace("/[^a-z0-9]/u", "$separator", $string);
        $string = preg_replace("/[$separator]+/u", "$separator", $string);
        $string = trim($string,'-');
        return $string;
    }

	
		
}


 ?>
