<?php 

/**
 * 
 */
class Information extends Masters
{
	
	public function index(){
		
		
		if($_SERVER['REQUEST_METHOD'] == 'POST') {
			
			$form_data = $_POST;
			$form_data['date_added'] = date('Y-m-d H:i:s');
		
            $information_id = $this->insert('information', array('title'=>$form_data['title'],'description'=>$form_data['description'],'sort_order'=>$form_data['sort_order'],'link_type'=>$form_data['link_type'],'status'=>1,'date_added'=>$form_data['date_added']));

             if($information_id > 0){

            	if($form_data['seo']) {
		            $this->rawQuery("INSERT INTO " . PREFIX . "url_alias SET query = 'information/index/" . (int)$information_id . "', keyword = '" . $form_data['seo'] . "'");
		        }

		        $_SESSION['message'] = array(
									'type'  => 'success',
									'title' => 'Success',
									'msg'	=> 'Information has been added successful!'
									);
				$this->redirect('information');
				exit();
			}
            
         
		}

		
		if(isset($_SESSION['message'])){
			$this->data['message'] = $_SESSION['message'];
			unset($_SESSION['message']);
		}

		$this->data['action'] = array('title'=>'Add','form-action'=>"add-information");


		view('informationAddEdit',$this->data);

	}


	public function edit($information_id){
		
		$this->data['action'] = array('title'=>'Edit','form-action'=>"edit-information/".$information_id);
		
		if($_SERVER['REQUEST_METHOD'] == 'POST') {


			$form_data = $_POST;

			$form_data['date_modified'] = date('Y-m-d H:i:s');
		
            $this->where('information_id',$information_id)->update('information', array('title'=>$form_data['title'],'description'=>$form_data['description'],'sort_order'=>$form_data['sort_order'],'link_type'=>$form_data['link_type'],'date_modified'=>$form_data['date_modified']));

        
	        $this->where('query','information/index/' . (int)$information_id)->update('url_alias',array('keyword'=>$form_data['seo']));
	       
	        $_SESSION['message'] = array(
								'type'  => 'success',
								'title' => 'Success',
								'msg'	=> 'Information has been updated successful!'
								);

	        if($_SESSION['page'] > 1){
	        	$this->redirect('information'.'/'.$_SESSION['page']);
	        }else{
	        	$this->redirect('information');
	        }

			
			exit();
 
			
		}

		

		$this->data['list'] =  $this->rawQueryOne("SELECT  *, (SELECT keyword FROM " . PREFIX . "url_alias WHERE query = 'information/index/" . (int)$information_id . "') AS keyword   FROM " . PREFIX . "information   WHERE information_id = '" . (int)$information_id . "'");


	
		if(isset($_SESSION['message'])){
			$this->data['message'] = $_SESSION['message'];
			unset($_SESSION['message']);
		}


		view('informationAddEdit',$this->data);

	}

	public function viewInformation($page= 1){




		$information = $this->get('information');
		
	
		$this->data['informations'] =  $information;

		if(isset($_SESSION['message'])){
			$this->data['message'] = $_SESSION['message'];
			unset($_SESSION['message']);
		}
		view('information',$this->data);	

	}

	public function informationToggleStatus($information_id,$status){

		$information_id = $this->xss_clean($information_id);
		$status = $this->xss_clean($status);

		if($_SERVER['REQUEST_METHOD'] == 'GET' && $information_id > 0) {

			$this->where('information_id',$information_id)->update('information',array('status'=>($status?0:1)));

			$_SESSION['message'] = array(
									'type' => 'success',
									'title' => 'Success',
									'msg'	=> 'Information status has been updated successful!'
									);

			$this->redirect('information');
		}

	}

	public function addSocial(){
		
		
		if($_SERVER['REQUEST_METHOD'] == 'POST') {
			
			$form_data = $this->xss_clean($_POST);
			$form_data['date_added'] = date('Y-m-d H:i:s');

            $information_id = $this->insert('social', array('social_name'=>$form_data['social'],'url'=>$form_data['url'],'icon'=>$form_data['icon'],'date_added'=>$form_data['date_added']));

	        $_SESSION['message'] = array(
								'type'  => 'success',
								'title' => 'Success',
								'msg'	=> 'Social link has been added successful!'
								);
			$this->redirect('social');
			exit();
		
		}

		
		if(isset($_SESSION['message'])){
			$this->data['message'] = $_SESSION['message'];
			unset($_SESSION['message']);
		}

		$this->data['action'] = array('title'=>'Add','form-action'=>"add-social");


		view('socialAddEdit',$this->data);

	}


	public function editSocial($social_id){
		
		$this->data['action'] = array('title'=>'Edit','form-action'=>"edit-social/".$social_id);
		
		if($_SERVER['REQUEST_METHOD'] == 'POST') {


			$form_data = $this->xss_clean($_POST);

			$form_data['date_modified'] = date('Y-m-d H:i:s');

            $this->where('social_id',$social_id)->update('social', array('social_name'=>$form_data['social'],'url'=>$form_data['url'],'icon'=>$form_data['icon'],'date_modified'=>$form_data['date_modified']));
	       
	        $_SESSION['message'] = array(
								'type'  => 'success',
								'title' => 'Success',
								'msg'	=> 'Social link has been updated successful!'
								);

	        if($_SESSION['page'] > 1){
	        	$this->redirect('social'.'/'.$_SESSION['page']);
	        }else{
	        	$this->redirect('social');
	        }

			exit();
			
		}

		

		$this->data['list'] =  $this->where('social_id',$social_id)->getOne('social');


	
		if(isset($_SESSION['message'])){
			$this->data['message'] = $_SESSION['message'];
			unset($_SESSION['message']);
		}


		view('socialAddEdit',$this->data);

	}

	public function viewSocial($page= 1){

		$social = $this->get('social');
		
		$this->data['socials'] =  $social;

		if(isset($_SESSION['message'])){
			$this->data['message'] = $_SESSION['message'];
			unset($_SESSION['message']);
		}
		view('social',$this->data);	

	}

	public function socialToggleStatus($social_id,$status){

		$social_id = $this->xss_clean($social_id);
		$status = $this->xss_clean($status);

		if($_SERVER['REQUEST_METHOD'] == 'GET' && $social_id > 0) {

			$this->where('social_id',$social_id)->update('social',array('status'=>($status?0:1)));

			$_SESSION['message'] = array(
									'type' => 'success',
									'title' => 'Success',
									'msg'	=> 'Social status has been updated successful!'
									);

			$this->redirect('social');
		}

	}




}

 ?>