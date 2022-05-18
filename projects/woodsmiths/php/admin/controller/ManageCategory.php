<?php 

class ManageCategory extends Masters
{

	private $error = array();

	private $data = array();



	public function index(){
		
		
		if($_SERVER['REQUEST_METHOD'] == 'POST') {

			$form_data = $this->xss_clean($_POST);
			$form_data['date_added'] = date('Y-m-d H:i:s');

			$filename = $this->format_uri($form_data['name']);
		
			if(!isset($form_data['top'])){
				$path = $this->format_uri($form_data['path']).'/'.$filename;
				$path = str_replace('-gt-', '/', $path);
				$form_data['top'] = 0;
			}else{
				$form_data['parent_id'] = 0;
				$path = $filename;
			}
			

			if(!is_dir(IMAGE_ROOT.$path)) {
			  mkdir(IMAGE_ROOT.$path,0777);
			}

			$file_obj = new file_manup(IMAGE_ROOT.$path.'/');

			if(isset($_FILES) && $_FILES['filename']['name']!=""){
               
                $large = $filename;
                $form_data['filename'] = $file_obj->upload_file($_FILES["filename"]['name'],$_FILES["filename"]['tmp_name'],$large,"jpeg,jpg",$_FILES["filename"]['type']);

	            $medium = 'medium-'.$filename;
	            $file_obj->resize_with_ratio($form_data['filename'], $medium,397, 476);

	            $small = 'small-'.$filename;
	            $file_obj->resize_with_ratio($form_data['filename'], $small,50, 50);
            }

            // echo "<pre>";
            // print_r($form_data);
            // echo "</pre>";
            $category_id = $this->insert('category', array('parent_id'=>$form_data['parent_id'],'top'=>$form_data['top'],'banner'=>$form_data['filename'],'dir_path'=>$path,'cart_type'=>$form_data['cart_type'],'status'=>1,'date_added'=>$form_data['date_added']));

             // echo 'insert failed: ' . $this->getLastError();

             // exit();
            if($category_id > 0){

            	$this->insert('category_description', array('category_id'=>$category_id,'name'=>$form_data['name'],'description'=>$form_data['description'],'meta_title'=>$form_data['meta_title'],'meta_keyword'=>$form_data['meta_keyword']));
            	
            	if($form_data['seo']) {
		            $this->rawQuery("INSERT INTO " . PREFIX . "url_alias SET query = 'category/index/" . (int)$category_id . "', keyword = '" . $form_data['seo'] . "'");
		        }

		        $_SESSION['message'] = array(
									'type'  => 'success',
									'title' => 'Success',
									'msg'	=> 'Category has been added successful!'
									);
				$this->redirect('category');
				exit();
            
            }
     	
			
		}

		
		if(isset($_SESSION['message'])){
			$this->data['message'] = $_SESSION['message'];
			unset($_SESSION['message']);
		}

		$this->data['action'] = array('title'=>'Add','form-action'=>"add-category");


		view('CategoryAddEdit',$this->data);

	}


	public function edit($category_id){
		
		$this->data['action'] = array('title'=>'Edit','form-action'=>"edit-category/".$category_id);

		if($_SERVER['REQUEST_METHOD'] == 'POST') {


			$form_data = $this->xss_clean($_POST);

			$form_data['date_modified'] = date('Y-m-d H:i:s');

			
			$filename = $this->format_uri($form_data['name']);

			if(!isset($form_data['top'])){
				$path = $this->format_uri($form_data['path']).'/'.$filename;
				$path = str_replace('-gt-', '/', $path);
				$form_data['top'] = 0;
			}else{
				$path = $filename;
			}


			if(!is_dir(IMAGE_ROOT.$path)) {
			  mkdir(IMAGE_ROOT.$path,0777);
			}

			
			$file_obj = new file_manup(IMAGE_ROOT.$path.'/');



			if(isset($_FILES) && $_FILES['filename']['name']!=""){

				@unlink(IMAGE_ROOT.$path.'/'.$form_data['text_banner']);
				@unlink(IMAGE_ROOT.$path.'/medium-'.$form_data['text_banner']);
				@unlink(IMAGE_ROOT.$path.'/small-'.$form_data['text_banner']);
               
                $large = $filename;
                $form_data['filename'] = $file_obj->upload_file($_FILES["filename"]['name'],$_FILES["filename"]['tmp_name'],$large,"jpeg,jpg",$_FILES["filename"]['type']);

	            $medium = 'medium-'.$filename;
	            $file_obj->resize_with_ratio($form_data['filename'], $medium,397, 476);

	            $small = 'small-'.$filename;
	            $file_obj->resize_with_ratio($form_data['filename'], $small,50, 50);
            }else{
            	$form_data['filename'] = $form_data['text_banner'];
            }


			
            $this->where('category_id',$category_id)->update('category', array('parent_id'=>$form_data['parent_id'],'top'=>$form_data['top'],'banner'=>$form_data['filename'],'dir_path'=>$path,'cart_type'=>$form_data['cart_type'],'date_modified'=>$form_data['date_modified']));

          

        	$this->where('category_id',$category_id)->update('category_description', array('name'=>$form_data['name'],'description'=>$form_data['description'],'meta_title'=>$form_data['meta_title'],'meta_keyword'=>$form_data['meta_keyword']));
        	 // echo 'insert failed: ' . $this->getLastError();
        	
	        $this->where('query','category/index/' . (int)$category_id)->update('url_alias',array('keyword'=>$form_data['seo']));
	       
	        $_SESSION['message'] = array(
								'type'  => 'success',
								'title' => 'Success',
								'msg'	=> 'Category has been updated successful!'
								);

	        if($_SESSION['page'] > 1){
	        	$this->redirect('category'.'/'.$_SESSION['page']);
	        }else{
	        	$this->redirect('category');
	        }

			
			exit();
 
			
		}

		

		$this->data['list'] =  $this->rawQueryOne("SELECT DISTINCT *, (SELECT keyword FROM " . PREFIX . "url_alias WHERE query = 'category/index/" . (int)$category_id . "') AS keyword , '".$this->getParentPath($category_id)."' as path FROM " . PREFIX . "category c INNER JOIN " . PREFIX . "category_description cd ON (c.category_id = cd.category_id)  WHERE c.category_id = '" . (int)$category_id . "' ORDER BY c.sort_order, cd.name ASC");


	
		if(isset($_SESSION['message'])){
			$this->data['message'] = $_SESSION['message'];
			unset($_SESSION['message']);
		}


		view('CategoryAddEdit',$this->data);

	}

	public function viewCategories($page= 1){




		$categories = $this->getCategories();
		
		$pagConfig = array(
		    'baseURL'=>base_url.'category',
		    'totalRows'=>count($categories),
		    'perPage'=>PAGE_LIMIT,
		    'queryStringSegment' =>$page

		);
		$pagination =  new PaginationRendered($pagConfig);
		$this->data['pagination'] = $pagination->createLinks();
			
		$offset = ($page - 1) * PAGE_LIMIT;
		$sql = " LIMIT " . $offset . "," . PAGE_LIMIT;

		$_SESSION['page'] = $page;
	
		$this->data['categories'] =  array_slice($categories, $offset, PAGE_LIMIT);

		if(isset($_SESSION['message'])){
			$this->data['message'] = $_SESSION['message'];
			unset($_SESSION['message']);
		}
		view('Category',$this->data);	

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


	public function deleteCategory(){



		if($_SERVER['REQUEST_METHOD'] == 'POST') {

			$form_data = $this->xss_clean($_POST);
				
			foreach ($form_data['selected'] as  $value) {

				
                $result = $this->where('category_id',$value)->getOne("category",null,'banner,dir_path');
                	
				$this->where('category_id',$value)->delete("category_description");
				$this->where('query','category/index/'.$value)->delete("url_alias");
				$this->where('category_id',$value)->delete("category");
	      
		        @unlink(IMAGE_ROOT.$result['dir_path'].'/'.$result['banner']);
		        @unlink(IMAGE_ROOT.$result['dir_path'].'/medium-'.$result['banner']);
		        @unlink(IMAGE_ROOT.$result['dir_path'].'/small-'.$result['banner']);


		        $files = glob(IMAGE_ROOT.$result['dir_path']."/*.{jpg,JPG,jpeg,JPEG}",GLOB_BRACE);
			
				if(count($files)==0){
					@rmdir(IMAGE_ROOT.$result['dir_path']);
				}

            }

			

			$_SESSION['message'] = array(
									'type' => 'success',
									'title' => 'Success',
									'msg'	=> 'Category has been deleted successful!'
									);

			$this->redirect('category');
		}


	}

	public function categoryToggleStatus($category_id,$status){

		$category_id = $this->xss_clean($category_id);
		$status = $this->xss_clean($status);

		if($_SERVER['REQUEST_METHOD'] == 'GET' && $category_id > 0) {

			$this->where('category_id',$category_id)->update('category',array('status'=>($status?0:1)));

			$_SESSION['message'] = array(
									'type' => 'success',
									'title' => 'Success',
									'msg'	=> 'Category status has been updated successful!'
									);

			$this->redirect('category');
		}

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