<?php 

/**

 * 

 */

class Banner extends MysqliDb

{

	private $error = array();

	private $data = array();

	public function index($page= 1)
	{		
		
		$this->get('banner');

		$pagConfig = array(
		    'baseURL'=>base_url.'banner',
		    'totalRows'=>$this->count,
		    'perPage'=>PAGE_LIMIT,
		    'queryStringSegment' =>$page

		);
		$pagination =  new PaginationRendered($pagConfig);
		$this->data['pagination'] = $pagination->createLinks();

		$_SESSION['page'] = $page;
			
		$offset = ($page - 1) * PAGE_LIMIT;

		$this->data['banner_list'] = $this->get('banner', Array ($offset, PAGE_LIMIT)); 

		if(isset($_SESSION['message'])){

			$this->data['message'] = $_SESSION['message'];

			unset($_SESSION['message']);

		}

		view('banner-list',$this->data);

	}

	public function addBanner()

	{		

		if($_SERVER['REQUEST_METHOD'] == 'POST') {

			$form_data = $_POST;

			$file_obj = new file_manup(IMAGE_ROOT.'banner/');

			$photo_obj = new img_manup(IMAGE_ROOT.'banner/');

			for ($i=0; $i <count($form_data['banner_image']) ; $i++) {

				$random = rand(1, 10000);

				if($_FILES['banner_image']['name'][$i]['image']!=""){

					$filename = str_replace(' ', '-', strtolower($form_data['banner_image'][$i]['title']));

	                $large = $filename.'-'.$random;

	                $form_data['banner_image'][$i]['image'] = $file_obj->upload_file($_FILES["banner_image"]['name'][$i]['image'],$_FILES["banner_image"]['tmp_name'][$i]['image'],$large,$form_data['file_extension'],$_FILES["banner_image"]['type'][$i]['image']);

	                $small = 'small-'.$large;

	            	$photo_obj->createThumbs($form_data['banner_image'][$i]['image'],$small,100,'height');

	            }else{

	            	$form_data['banner_image'][$i]['image'] = $form_data['banner_image'][$i]['image_text'];

	            }

	        }

            $banner_id = $this->insert('banner',array('module'=>$form_data['module'],'name'=>$form_data['name'],'height'=>$form_data['height'],'width'=>$form_data['width'],'file_extension'=>$form_data['file_extension'],'description'=>$form_data['description'],'status'=>$form_data['status'],'product_count_flag'=>$form_data['product_count_flag']));

            if($banner_id > 0){

            	$banner_images = $form_data['banner_image'];

            	for ($i=0; $i < count($banner_images) ; $i++) { 

            		$this->insert('banner_image',array('banner_id'=>$banner_id,'title'=>$banner_images[$i]['title'],'link'=>$banner_images[$i]['link'],'description'=>$banner_images[$i]['description'],'image'=>$banner_images[$i]['image'],'sort_order'=>$banner_images[$i]['sort_order']));

            	}

            	$_SESSION['message'] = array(

									'type'  => 'success',

									'title' => 'Success',

									'msg'	=> 'Banners has been added successful!'

									);

				$this->redirect('banner');

				exit();

            }else{

            	$_SESSION['message'] = array(

									'type'  => 'warning',

									'title' => 'Warning',

									'msg'	=> 'Something went wrong!'

									);

            }

		}

		if(isset($_SESSION['message'])){

			$this->data['message'] = $_SESSION['message'];

			unset($_SESSION['message']);

		}

		$this->data['action'] = array('title'=>'Add','form-action'=>"add-banner");

		view('banner',$this->data);

	}

	public function editBanner($banner_id)

	{		

		if($_SERVER['REQUEST_METHOD'] == 'POST') {

			$banner_id = $this->xss_clean($banner_id);

			$form_data = $_POST;

			$file_obj = new file_manup(IMAGE_ROOT.'banner/');

			$photo_obj = new img_manup(IMAGE_ROOT.'banner/');

			for ($i=0; $i <count($form_data['banner_image']) ; $i++) {

				$random = rand(1, 10000);

				if($_FILES['banner_image']['name'][$i]['image']!=""){

					if($form_data['banner_image'][$i]['image_text']){

						@unlink(IMAGE_ROOT.'banner/'.$form_data['banner_image'][$i]['image_text']);

						@unlink(IMAGE_ROOT.'banner/small-'.$form_data['banner_image'][$i]['image_text']);

					}

					$filename = str_replace(' ', '-', strtolower($form_data['banner_image'][$i]['title']));

	                $large = $filename.'-'.$random;

	                $form_data['banner_image'][$i]['image'] = $file_obj->upload_file($_FILES["banner_image"]['name'][$i]['image'],$_FILES["banner_image"]['tmp_name'][$i]['image'],$large,$form_data['file_extension'],$_FILES["banner_image"]['type'][$i]['image']);

	                $small = 'small-'.$large;

	            	$photo_obj->createThumbs($form_data['banner_image'][$i]['image'],$small,100,'height');

	            }else{

	            	$form_data['banner_image'][$i]['image'] = $form_data['banner_image'][$i]['image_text'];

	            }

	        }

            $this->where('banner_id',$banner_id)->update('banner',array('module'=>$form_data['module'],'name'=>$form_data['name'],'height'=>$form_data['height'],'width'=>$form_data['width'],'file_extension'=>$form_data['file_extension'],'description'=>$form_data['description'],'status'=>$form_data['status'],'product_count_flag'=>$form_data['product_count_flag']));

            $this->where('banner_id',$banner_id)->delete('banner_image');

        	$banner_images = $form_data['banner_image'];

        	for ($i=0; $i < count($banner_images) ; $i++) {

        		$this->insert('banner_image',array('banner_id'=>$banner_id,'title'=>$banner_images[$i]['title'],'link'=>$banner_images[$i]['link'],'description'=>$banner_images[$i]['description'],'image'=>$banner_images[$i]['image'],'sort_order'=>$banner_images[$i]['sort_order']));

        	}

        	$_SESSION['message'] = array(

								'type'  => 'success',

								'title' => 'Success',

								'msg'	=> 'Banners has been updated successful!'

								);

			$this->redirect('banner');

			exit();

		}

		if(isset($_SESSION['message'])){

			$this->data['message'] = $_SESSION['message'];

			unset($_SESSION['message']);

		}

		$this->data['action'] = array('title'=>'Edit','form-action'=>"edit-banner/".$banner_id);

		$this->data['banner_details'] = $this->where('banner_id',$banner_id)->getOne('banner');

		$this->data['banner_images'] = $this->where('banner_id',$banner_id)->orderBy('sort_order','asc')->get('banner_image');

		view('banner',$this->data);

	}

	public function updateBannerStatus($banner_id,$status){

		$banner_id = $this->xss_clean($banner_id);

		$status = $this->xss_clean($status);

		if($_SERVER['REQUEST_METHOD'] == 'GET' && $banner_id > 0) {

			$this->where('banner_id',$banner_id)->update('banner',array('status'=>($status?0:1)));

			$_SESSION['message'] = array(

									'type' => 'success',

									'title' => 'Success',

									'msg'	=> 'Banner status has been updated successful!'

									);

			$this->redirect('banner');

		}

	}

	public function deleteBannerImage(){

		$banner_image_id = $this->xss_clean($_POST['banner_image_id']);

		if($_SERVER['REQUEST_METHOD'] == 'POST' && $banner_image_id > 0) {

			$banner = $this->where('banner_image_id',$banner_image_id)->getOne('banner_image');

			@unlink(IMAGE_ROOT.'banner/'.$banner['image']);
			@unlink(IMAGE_ROOT.'banner/small-'.$banner['image']);

			$this->where('banner_image_id',$banner_image_id)->delete('banner_image');
		}

	}

}

 ?>
