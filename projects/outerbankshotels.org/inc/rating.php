<?php
include('MysqliDb.php');

$db = new MysqliDb();


if(isset($_POST['action'])){

	$action = $_POST['action'];

	switch ($action) {
		case 'get':

			$rating = $db->rawQuery("SELECT rating_for,sum(stars)/count(stars) as rating,count(stars) as stars FROM `tbl_rating` group by rating_for");

			foreach ($rating as $key => $value) {

				$float_value = explode('.', number_format($value['rating'],2));

				if(count($float_value)>1){
				
					$rating[$key]['rating'] = rating($float_value[0],$float_value[1]);
				}

			}

			echo json_encode($rating);
			break;
			
		case 'insert':

			$_POST = $db->xss_clean($_POST);
			$_POST['posted_on'] = date('Y-m-d h:i:s');
			
			unset($_POST['action']);
			if($db->insert('rating',$_POST)){
				echo "true";
			}

			break;
		default:
			# code...
			break;
	}
}



function rating($int,$float){
	if($float >= 0 && $float <= 10){
		return $int;
	}else if($float >= 10 && $float <= 25){
		return $int.".25";
	}else if($float >= 25 && $float <= 35){
		return $int.".25";
	}else if($float >= 35 && $float <= 50){
		return $int.".5";
	}else if($float >= 50 && $float <= 65){
		return $int.".5";
	}else if($float >= 65 && $float <= 75){
		return $int.".75";
	}else if($float >= 75 && $float <= 85){
		return $int.".75";
	}else if($float >= 85 && $float <= 100){
		return $int+1;
	}
}



 ?>