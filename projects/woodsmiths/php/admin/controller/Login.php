<?php 
/**
 * 
 */
class Login extends MysqliDb
{

	private $error = array();
	private $data = array();
		
	
	public function index()
	{		
		$this->data["message"] = "Kindly login using your username and password";	
		view('Login',$this->data);
	}
	
	public function PerformLogin(){
		
		if($_SERVER['REQUEST_METHOD'] == 'POST') {
		
			$form_data = $this->xss_clean($_POST);												
			$value = $this->where('admin_email',$form_data["userid"])->where('admin_password',$form_data["password"])->getOne('administrator');
			
			if(count($value))
			{	
				$_SESSION['logged_in'] = $value["admin_id"];
				$_SESSION["login_name"] = $value["admin_name"];
					// die('dd');
				$this->redirect('category');
				exit();
			}
			else{

				$this->data["message"] = "Invalid Login Credentials";	
				view('Login',$this->data);	
			}
						
		}else{
			$this->data["message"] = "Invalid Method";	
			view('Login',$this->data);
		}        		        			
	}

	public function PerformLogout(){
			$this->data["message"] = "You gave been successfully logged out";
			session_destroy();
            view('Login',$this->data);	
	}
}


 ?>
