<?php 

include('controller/ManageCategory.php');

class ManageProduct extends Masters
{

	private $error = array();

	private $data = array();



	public function index(){
		
		
		if($_SERVER['REQUEST_METHOD'] == 'POST') {

			error_reporting(-1);
			$form_data = $_POST;
			$form_data['date_added'] = date('Y-m-d H:i:s');

			$filename = $this->format_uri($form_data['slug']);

			$path = $this->format_uri($form_data['path']);
			$path = str_replace('-gt-', '/', $path);


			if(!is_dir(IMAGE_ROOT.$path)) {
			  mkdir(IMAGE_ROOT.$path,0777);
			}


			$file_obj = new file_manup(IMAGE_ROOT.$path.'/');
			$photo_obj = new img_manup(IMAGE_ROOT.$path."/");

			if(isset($_FILES) && $_FILES['filename']['name']!=""){
               
                $large = $filename;
                $form_data['filename'] = $file_obj->upload_file($_FILES["filename"]['name'],$_FILES["filename"]['tmp_name'],$large,"jpeg,jpg",$_FILES["filename"]['type']);

	            $medium = 'medium-'.$filename;
	            $file_obj->resize_with_ratio($form_data['filename'], $medium,280, 336);

	            $small = 'small-'.$filename;
	            $photo_obj->createThumbs($form_data['filename'],$small,120,'height');
            }

            if(isset($_FILES) && $_FILES['pdf_file']['name']!=""){
            	$save = $filename.'-pdf';
                $form_data['pdf_file'] = $file_obj->upload_file($_FILES["pdf_file"]['name'],$_FILES["pdf_file"]['tmp_name'],$save,"pdf",$_FILES["pdf_file"]['type']);
            }

            if(isset($_FILES) && $_FILES['sketch_file']['name']!=""){
            	$save = $filename.'-sketch';
                $form_data['sketch_file'] = $file_obj->upload_file($_FILES["sketch_file"]['name'],$_FILES["sketch_file"]['tmp_name'],$save,"sketch",$_FILES["sketch_file"]['type']);
            }

            if(isset($_FILES) && $_FILES['revit_file']['name']!=""){
            	$save = $filename.'-revit';
                $form_data['revit_file'] = $file_obj->upload_file($_FILES["revit_file"]['name'],$_FILES["revit_file"]['tmp_name'],$save,"revit",$_FILES["revit_file"]['type']);
            }


    		
            $product_id = $this->insert('product', array('name'=>$form_data['name'],'price'=>$form_data['price'],'dimensions'=>$form_data['dimensions'],'description'=>$form_data['description'],'meta_title'=>$form_data['meta_title'],'short_description'=>$form_data['short_description'],'tag'=>$form_data['tag'],'meta_keyword'=>$form_data['meta_keyword'],'pdf_file'=>$form_data['pdf_file'],'sketch_file'=>$form_data['sketch_file'],'image'=>$form_data['filename'],'revit_file'=>$form_data['revit_file'],'status'=>1,'date_added'=>$form_data['date_added']));

            

            if($product_id > 0){

            	$this->insert('product_to_category', array('category_id'=>$form_data['parent_id'],'product_id'=>$product_id));

            	 // echo 'insert failed: ' . $this->getLastError();
            	if($form_data['slug']) {
		            $this->rawQuery("INSERT INTO " . PREFIX . "url_alias SET query = 'product/index/" . (int)$product_id . "', keyword = '" . $form_data['slug'] . "'");
		        }

		        $_SESSION['message'] = array(
									'type'  => 'success',
									'title' => 'Success',
									'msg'	=> 'Product has been added successful!'
									);
				$this->redirect('product');
				exit();
            
            }
     	
		}

		
		if(isset($_SESSION['message'])){
			$this->data['message'] = $_SESSION['message'];
			unset($_SESSION['message']);
		}

		$this->data['action'] = array('title'=>'Add','form-action'=>"add-product");


		view('ProductAddEdit',$this->data);

	}


	public function edit($product_id){
		
		$this->data['action'] = array('title'=>'Edit','form-action'=>"edit-product/".$product_id);

		if($_SERVER['REQUEST_METHOD'] == 'POST') {


			$form_data = $_POST;

			$form_data['date_modified'] = date('Y-m-d H:i:s');

			$filename = $this->format_uri($form_data['slug']);

			$path = $this->format_uri($form_data['path']);
			$path = str_replace('-gt-', '/', $path);

			if(!is_dir(IMAGE_ROOT.$path)) {
			  mkdir(IMAGE_ROOT.$path,0777);
			}
	
			$file_obj = new file_manup(IMAGE_ROOT.$path.'/');
			$photo_obj = new img_manup(IMAGE_ROOT.$path."/");


			if(isset($_FILES) && $_FILES['filename']['name']!=""){

				@unlink(IMAGE_ROOT.$path.'/'.$form_data['text_filename']);
				@unlink(IMAGE_ROOT.$path.'/medium-'.$form_data['text_filename']);
				@unlink(IMAGE_ROOT.$path.'/small-'.$form_data['text_filename']);
               
                $large = $filename;
                $form_data['filename'] = $file_obj->upload_file($_FILES["filename"]['name'],$_FILES["filename"]['tmp_name'],$large,"jpeg,jpg",$_FILES["filename"]['type']);

	            $medium = 'medium-'.$filename;
	            $file_obj->resize_with_ratio($form_data['filename'], $medium,280, 336);

	            $small = 'small-'.$filename;
	            $photo_obj->createThumbs($form_data['filename'],$small,120,'height');
            }else{
            	$form_data['filename'] = $form_data['text_filename'];
            }

            if(isset($_FILES) && $_FILES['pdf_file']['name']!=""){

            	@unlink(IMAGE_ROOT.$path.'/'.$form_data['text_pdf_file']);

            	$save = $filename.'-pdf';
                $form_data['pdf_file'] = $file_obj->upload_file($_FILES["pdf_file"]['name'],$_FILES["pdf_file"]['tmp_name'],$save,"pdf",$_FILES["pdf_file"]['type']);
            }else{
            	$form_data['pdf_file'] = $form_data['text_pdf_file'];
            }

            if(isset($_FILES) && $_FILES['sketch_file']['name']!=""){

            	@unlink(IMAGE_ROOT.$path.'/'.$form_data['text_sketch_file']);

            	$save = $filename.'-sketch';
                $form_data['sketch_file'] = $file_obj->upload_file($_FILES["sketch_file"]['name'],$_FILES["sketch_file"]['tmp_name'],$save,"sketch",$_FILES["sketch_file"]['type']);
            }else{
            	$form_data['sketch_file'] = $form_data['text_sketch_file'];
            }

            if(isset($_FILES) && $_FILES['revit_file']['name']!=""){

            	@unlink(IMAGE_ROOT.$path.'/'.$form_data['text_revit_file']);

            	$save = $filename.'-revit';
                $form_data['revit_file'] = $file_obj->upload_file($_FILES["revit_file"]['name'],$_FILES["revit_file"]['tmp_name'],$save,"revit",$_FILES["revit_file"]['type']);
            }else{
            	$form_data['revit_file'] = $form_data['text_revit_file'];
            }

            	


           
            $this->where('product_id',$product_id)->update('product', array('name'=>$form_data['name'],'price'=>$form_data['price'],'dimensions'=>$form_data['dimensions'],'description'=>$form_data['description'],'meta_title'=>$form_data['meta_title'],'short_description'=>$form_data['short_description'],'tag'=>$form_data['tag'],'meta_keyword'=>$form_data['meta_keyword'],'pdf_file'=>$form_data['pdf_file'],'image'=>$form_data['filename'],'sketch_file'=>$form_data['sketch_file'],'revit_file'=>$form_data['revit_file'],'date_modified'=>$form_data['date_modified']));

            $image_path = $this->rawQueryOne("SELECT dir_path from " . PREFIX . "product_to_category pc inner join " . PREFIX . "category c on pc.category_id=c.category_id where pc.product_id=".$product_id);
           

         
            if($this->count > 0 ){

	            $image = IMAGE_ROOT.$image_path['dir_path'].'/'.$form_data['filename'];
	            if(file_exists($image)){
	            	
	            	rename( IMAGE_ROOT.$image_path['dir_path'].'/'.$form_data['filename'] ,IMAGE_ROOT.$path.'/'.$form_data['filename'] );
	            	rename( IMAGE_ROOT.$image_path['dir_path'].'/medium-'.$form_data['filename'] ,IMAGE_ROOT.$path.'/medium-'.$form_data['filename'] );
	            	rename( IMAGE_ROOT.$image_path['dir_path'].'/small-'.$form_data['filename'] ,IMAGE_ROOT.$path.'/small-'.$form_data['filename'] );

	            	rename( IMAGE_ROOT.$image_path['dir_path'].'/'.$form_data['pdf_file'] ,IMAGE_ROOT.$path.'/'.$form_data['pdf_file'] );
	            	rename( IMAGE_ROOT.$image_path['dir_path'].'/'.$form_data['sketch_file'] ,IMAGE_ROOT.$path.'/'.$form_data['sketch_file'] );
	            	rename( IMAGE_ROOT.$image_path['dir_path'].'/'.$form_data['revit_file'] ,IMAGE_ROOT.$path.'/'.$form_data['revit_file'] );

	            }

	            $extra_image = $this->where('product_id',$product_id)->get('product_image');

	            if($this->count  > 0){
	            	foreach ($extra_image as  $img) {
	            		rename( IMAGE_ROOT.$image_path['dir_path'].'/'.$img['image'] ,IMAGE_ROOT.$path.'/'.$img['image']);
	            	}
	            }

        	}

     		$this->where('product_id',$product_id)->update('product_to_category', array('category_id'=>$form_data['parent_id']));

     		
        	
	        $this->where('query','product/index/' . (int)$product_id)->update('url_alias',array('keyword'=>$form_data['slug']));
	       
	        $_SESSION['message'] = array(
								'type'  => 'success',
								'title' => 'Success',
								'msg'	=> 'Product has been updated successful!'
								);

	        if($_SESSION['page'] > 1){
	        	$this->redirect('product'.'/'.$_SESSION['page']);
	        }else{
	        	$this->redirect('product');
	        }

			
			exit();
 
			
		}

		$result  = $this->rawQueryOne("SELECT p.*,pc.category_id,p.image, (SELECT keyword FROM " . PREFIX . "url_alias WHERE query = 'product/index/" . (int)$product_id . "') AS slug FROM " . PREFIX . "product p inner join " . PREFIX . "product_to_category pc on p.product_id=pc.product_id  where  p.product_id=".$product_id);

        
        $this->data['list'] = $result + array('path'=>$this->getPath($result['category_id']));

		if(isset($_SESSION['message'])){
			$this->data['message'] = $_SESSION['message'];
			unset($_SESSION['message']);
		}


		view('ProductAddEdit',$this->data);

	}

	public function getList($page= 1){

		$where_condition = "";
		if($_SERVER['REQUEST_METHOD'] == 'POST') {

			$form_data = $this->xss_clean($_POST);

			
			if($form_data['name']!=""){
				$where_condition .= " and p.name like('%".$form_data['name']."%')";
			}

			if($form_data['category_id']!="" && $form_data['category_id']!=0){
				$where_condition .= " and pc.category_id=".$form_data['category_id'];
			}

			if($form_data['status']!=2 && $form_data['status']!=""){
				$where_condition .= " and p.status=".$form_data['status'];
			}

			if($form_data['fromDate']!="" && $form_data['toDate']!=""){
				$where_condition .= " and DATE(p.date_added) between '".date('Y-m-d',strtotime($form_data['fromDate']))."' and '".date('Y-m-d',strtotime($form_data['toDate']))."'";
			}
			else if($form_data['fromDate']!=""){
				$where_condition .= " and DATE(p.date_added) >='".date('Y-m-d',strtotime($form_data['fromDate']))."'";
			}
			else if($form_data['toDate']!=""){
				$where_condition .= " and DATE(p.date_added) <='".date('Y-m-d',strtotime($form_data['toDate']))."'";
			}

			$_SESSION['search_cond_for_product'] = $form_data;
			$_SESSION['search_cond_for_product_query'] = $where_condition;
		}

	
		$_SESSION['pagination_sql'] = "";
		$this->rawQuery("SELECT p.product_id,p.name,pc.category_id,p.status,p.image,p.price, (SELECT count(*) from " . PREFIX . "product_image where product_id=p.product_id ) as image_count FROM " . PREFIX . "product p inner join " . PREFIX . "product_to_category pc on p.product_id=pc.product_id where 1=1 ".$_SESSION['search_cond_for_product_query'].$_SESSION['pagination_sql']);
	
		$pagConfig = array(
		    'baseURL'=>base_url.'product',
		    'totalRows'=>$this->count,
		    'perPage'=>PAGE_LIMIT,
		    'queryStringSegment' =>$page

		);
		$pagination =  new PaginationRendered($pagConfig);
		$this->data['pagination'] = $pagination->createLinks();

		$_SESSION['page'] = $page;
			
		$offset = ($page - 1) * PAGE_LIMIT;
		$sql = " LIMIT " . $offset . "," . PAGE_LIMIT;
		$_SESSION['pagination_sql'] = $sql;

		$this->data['products'] = $this->getProducts();


		if(isset($_SESSION['category_data'])){
			$this->data['categories'] = $_SESSION['category_data'];
		}

				



		if(isset($_SESSION['message'])){
			$this->data['message'] = $_SESSION['message'];
			unset($_SESSION['message']);
		}
		view('product',$this->data);	

	}

	public function sessionReset(){

		unset($_SESSION['search_cond_for_product']);
		unset($_SESSION['search_cond_for_product_query']);
		$this->redirect('product');
	}


	public function getProducts(){
		
        $products_data = array();
        $query = $this->rawQuery("SELECT p.product_id,p.name,pc.category_id,p.status,p.image,p.price, (SELECT count(*) from " . PREFIX . "product_image where product_id=p.product_id ) as image_count FROM " . PREFIX . "product p inner join " . PREFIX . "product_to_category pc on p.product_id=pc.product_id where 1=1 ".$_SESSION['search_cond_for_product_query'].$_SESSION['pagination_sql']);

        foreach ($query as $result) {
            $products_data[] = $result + array('category_name'=>$this->getPath($result['category_id']));
        }
        return $products_data;
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

    public function getParentPath($category_id) {
       
        $query = $this->rawQueryOne("SELECT name, parent_id,c.category_id FROM " . PREFIX . "category c LEFT JOIN " . PREFIX . "category_description cd ON (c.category_id = cd.category_id) WHERE c.category_id = '" . (int)$category_id . "'  ORDER BY c.sort_order, cd.name ASC");

        if ($query['parent_id']) {
            //echo "Parent <br>";
            return $this->getPath($query['parent_id']);
        } else {
            //echo "No parent <br>";
            return $query['name'];
        }
    }


	public function deleteProduct(){

		if($_SERVER['REQUEST_METHOD'] == 'POST') {

			$form_data = $this->xss_clean($_POST);
				
			foreach ($form_data['selected'] as  $value) {

                $main_image = $this->where('product_id',$value)->getOne("product",null,'image,');

                $extra_image = $this->where('product_id',$value)->get("product_image");

               $path = $this->getImagePath($value);
               	
                foreach ($extra_image as $extra_value) {
                	
                	@unlink(IMAGE_ROOT.$path['dir_path'].'/'.$extra_value['image']);
			        @unlink(IMAGE_ROOT.$path['dir_path'].'/medium-'.$extra_value['image']);
			        @unlink(IMAGE_ROOT.$path['dir_path'].'/small-'.$extra_value['image']);

                }
	      
		        @unlink(IMAGE_ROOT.$path['dir_path'].'/'.$main_image['image']);
		        @unlink(IMAGE_ROOT.$path['dir_path'].'/medium-'.$main_image['image']);
		        @unlink(IMAGE_ROOT.$path['dir_path'].'/small-'.$main_image['image']);
		        @unlink(IMAGE_ROOT.$path['dir_path'].'/'.$main_image['pdf_file']);
		        @unlink(IMAGE_ROOT.$path['dir_path'].'/'.$main_image['sketch_file']);
		        @unlink(IMAGE_ROOT.$path['dir_path'].'/'.$main_image['revit_file']);


				$this->where('product_id',$value)->delete("product");
				$this->where('query','product/index/'.$value)->delete("url_alias");
				$this->where('product_id',$value)->delete("product_to_category");
				$this->where('product_id',$value)->delete("product_image");


		        $files = glob(IMAGE_ROOT.$path['dir_path']."/*.{jpg,JPG,jpeg,JPEG}",GLOB_BRACE);
			
				if(count($files)==0){
					@rmdir(IMAGE_ROOT.$path['dir_path']);
				}

            }

			

			$_SESSION['message'] = array(
									'type' => 'success',
									'title' => 'Success',
									'msg'	=> 'product has been deleted successful!'
									);

			$this->redirect('product');
		}


	}

	public function productToggleStatus($product_id,$status){

		$product_id = $this->xss_clean($product_id);
		$status = $this->xss_clean($status);

		if($_SERVER['REQUEST_METHOD'] == 'GET' && $product_id > 0) {

			$this->where('product_id',$product_id)->update('product',array('status'=>($status?0:1)));

			$_SESSION['message'] = array(
									'type' => 'success',
									'title' => 'Success',
									'msg'	=> 'Product status has been updated successful!'
									);

			$this->redirect('product');
		}

	}

	public function deleteProductImage(){

		if($_SERVER['REQUEST_METHOD'] == 'POST') {

			$form_data = $this->xss_clean($_POST);

			$result = $this->where('product_image_id',$form_data['image_id'])->getOne('product_image');

			$image_path = $this->getImagePath($_SESSION['product_id']);

			@unlink(IMAGE_ROOT.$image_path['dir_path'].'/'.$result['image']);
		    @unlink(IMAGE_ROOT.$image_path['dir_path'].'/medium-'.$result['image']);
		    @unlink(IMAGE_ROOT.$image_path['dir_path'].'/small-'.$result['image']);

		    $this->where('product_image_id',$form_data['image_id'])->delete('product_image');
		}
	}

	public function getImageList(){
		
		
		if($_SERVER['REQUEST_METHOD'] == 'POST') {

			$product_id = $this->xss_clean($_POST['product_id']);

			$_SESSION['product_id'] = $product_id;
		}

		
		if(isset($_SESSION['message'])){
			$this->data['message'] = $_SESSION['message'];
			unset($_SESSION['message']);
		}

		$this->data['product-image'] = $this->rawQuery("SELECT * from " . PREFIX . "product_image where product_id=".$_SESSION['product_id']." order by sort_order asc");

		$result = $this->getImagePath($_SESSION['product_id']);

		$this->data['path'] = $result['dir_path'];

		view('ProductImageAddEdit',$this->data);

	}

	public function uploadProductImage(){

		if($_SERVER['REQUEST_METHOD'] == 'POST') {

			$form_data  = $this->xss_clean($_POST);

			$result = $this->getImagePath($_SESSION['product_id']);

			$filename = $this->where('query','product/index/'.$_SESSION['product_id'])->getOne('url_alias');

			$filename = $filename['keyword'];
			
			$path = $result['dir_path'];
			
			$file_obj = new file_manup(IMAGE_ROOT.$path.'/');
			$photo_obj = new img_manup(IMAGE_ROOT.$path."/");

			
		
			for ($i=0; $i <count($_FILES['product_image']['name']) ; $i++) {
				$random = rand(1, 10000);
				if($_FILES['product_image']['name'][$i]['image']!=""){

					if($form_data['product_image'][$i]['text_image']){
						@unlink(IMAGE_ROOT.$path.'/'.$form_data['product_image'][$i]['text_image']);
						@unlink(IMAGE_ROOT.$path.'/medium-'.$form_data['product_image'][$i]['text_image']);
						@unlink(IMAGE_ROOT.$path.'/small-'.$form_data['product_image'][$i]['text_image']);
					}

	                $large = $filename.'-'.$random;
	                $form_data['image'] = $file_obj->upload_file($_FILES["product_image"]['name'][$i]['image'],$_FILES["product_image"]['tmp_name'][$i]['image'],$large,"jpeg,jpg",$_FILES["product_image"]['type'][$i]['image']);

		           
	            }else{
	            	$form_data['image'] = $form_data['product_image'][$i]['text_image'];
	            }

	      
	            if($this->where('product_id',$_SESSION['product_id'])->where('sort_order',$form_data['product_image'][$i]['sort_order'])->get('product_image')){

	            	$this->where('product_id',$_SESSION['product_id'])->where('sort_order',$form_data['product_image'][$i]['sort_order'])->update('product_image',array('image'=>$form_data['image']));

	            }else if($this->where('product_id',$_SESSION['product_id'])->where('image',$form_data['image'])->get('product_image')){

	            	$this->where('product_id',$_SESSION['product_id'])->where('image',$form_data['image'])->update('product_image',array('sort_order'=>$form_data['product_image'][$i]['sort_order']));

	            }else{

	            	$this->insert('product_image',array('product_id'=>$_SESSION['product_id'],'image'=>$form_data['image'],'sort_order'=>$form_data['product_image'][$i]['sort_order']));

	            }
			}
			
	
		
			$_SESSION['message'] = array(
									'type' => 'success',
									'title' => 'Success',
									'msg'	=> 'Product image has been updated successful!'
									);

			$this->redirect('product');
			
		}

	}

	public function getImagePath($product_id){

		$result =  $this->rawQueryOne("SELECT dir_path from " . PREFIX . "product_to_category pc inner join " . PREFIX . "category c on pc.category_id=c.category_id where pc.product_id=".$product_id);

		return $result;

	}

	public function autocomplete($filter_name)
	{
	
		$json = array();
        $filter_name = $this->xss_clean($filter_name);
        if (isset($filter_name)) {
           

            $filter_data = array(
                'filter_name' => $filter_name,
            );

            $results = $this->autocompleteData($filter_data);

            foreach ($results as $result) {
                $json[] = array(
                    'category_id' => $result['category_id'],
                    'name'        => strip_tags(html_entity_decode($result['name'], ENT_QUOTES, 'UTF-8'))
                );
            }
        }

        $sort_order = array();

        foreach ($json as $key => $value) {
            $sort_order[$key] = $value['name'];
        }

        array_multisort($sort_order, SORT_ASC, $json);

        echo json_encode($json);

		
	}

	public function autocompleteData($data){


		if ($data) {
            
            $sql = " ";
            if(isset($data['filter_name'])){
                $sql    .= " and  `name` LIKE '".$data['filter_name']."%'";
            }

            $query = $this->rawQuery("SELECT c.parent_id,cd.category_id,cd.name FROM " . PREFIX . "category c left join " . PREFIX . "category_description cd on c.category_id=cd.category_id where 1=1  ".$sql."  ");
    
            $string = "";
            foreach ($query as $result) {

                $string .= $result['category_id'].",";
            }

            $filtered_string = rtrim($string,",");

            if($filtered_string){

                $filter_query  = " and (c.category_id in (".$filtered_string.") or c.parent_id in (".$filtered_string."))";

            }else{
                $filter_query = "";
            }

            $query1 = $this->query("SELECT * FROM " . PREFIX . "category c LEFT JOIN " . PREFIX . "category_description cd ON (c.category_id = cd.category_id) WHERE  1 = '1' ".$filter_query." ");

            foreach($query1 as $res)
            {
                $category_data[] = array(
                        'category_id' => $res['category_id'],
                        'name'        => $this->getPath($res['category_id']),
                        'status'      => $res['status'],
                        'sort_order'  => $res['sort_order']
                    );
            }

            return $category_data;
        }
	}

	public  function moveImage(){

		
		$image_path = $this->rawQuery("SELECT dir_path, p.image,p.pdf_file,p.sketch_file,p.revit_file,p.product_id from " . PREFIX . "product_to_category pc inner join " . PREFIX . "category c on pc.category_id=c.category_id inner join " . PREFIX . "product p on p.product_id=pc.product_id  where pc.category_id=34");
       	
	
        if($this->count > 0 ){

        	foreach ($image_path as $main) {

	            $image = IMAGE_ROOT.'collections/woodsmiths-x-denava/'.$main['image'];
	            if(file_exists($image)){
	            	rename( IMAGE_ROOT.'collections/woodsmiths-x-denava'.'/'.$main['image'] ,IMAGE_ROOT.$main['dir_path'].'/'.$main['image'] );
	            	rename( IMAGE_ROOT.'collections/woodsmiths-x-denava'.'/medium-'.$main['image'] ,IMAGE_ROOT.$main['dir_path'].'/medium-'.$main['image'] );
	            	rename( IMAGE_ROOT.'collections/woodsmiths-x-denava'.'/small-'.$main['image'] ,IMAGE_ROOT.$main['dir_path'].'/small-'.$main['image'] );

	            	rename( IMAGE_ROOT.'collections/woodsmiths-x-denava'.'/'.$main['pdf_file'] ,IMAGE_ROOT.$main['dir_path'].'/'.$main['pdf_file'] );
	            	rename( IMAGE_ROOT.'collections/woodsmiths-x-denava'.'/'.$main['sketch_file'] ,IMAGE_ROOT.$main['dir_path'].'/'.$main['sketch_file'] );
	            	rename( IMAGE_ROOT.'collections/woodsmiths-x-denava'.'/'.$main['revit_file'] ,IMAGE_ROOT.$main['dir_path'].'/'.$main['revit_file'] );
	            }

	             $extra_image = $this->where('product_id',$main['product_id'])->get('product_image');

	            if($this->count  > 0){
	            	foreach ($extra_image as  $img) {
	            		rename( IMAGE_ROOT.'collections/woodsmiths-x-denava'.'/'.$img['image'] ,IMAGE_ROOT.$main['dir_path'].'/'.$img['image']);
	            	}
	            }

        	}

    	}

	}



	// private function validateForm(){

		


	// 	if($this->count > 0){

	// 		$_SESSION['message'] = array(
	// 								'type'  => 'warning',
	// 								'title' => 'Warning',
	// 								'msg'	=> 'This License name already exits. please try again another license..'
	// 								);
	// 		return false;
	// 	}

	// 	return true;

	// }

	
}