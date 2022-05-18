<?php 
include('MysqliDb.php');

$db = new MysqliDb();


for ($i=1; $i <=24 ; $i++) { 
	$db->insert('rating',['rating_for'=>2,'cookie_id'=>'seahourse_custom','posted_on'=>date('Y-m-d h:i:s'),'stars'=>5]);
}

for ($i=1; $i <=34 ; $i++) { 
	$db->insert('rating',['rating_for'=>2,'cookie_id'=>'seahourse_custom','posted_on'=>date('Y-m-d h:i:s'),'stars'=>4]);
}

for ($i=1; $i <=22 ; $i++) { 
	$db->insert('rating',['rating_for'=>3,'cookie_id'=>'driftin_custom','posted_on'=>date('Y-m-d h:i:s'),'stars'=>4]);
}

for ($i=1; $i <=11 ; $i++) { 
	$db->insert('rating',['rating_for'=>3,'cookie_id'=>'driftin_custom','posted_on'=>date('Y-m-d h:i:s'),'stars'=>5]);
}

for ($i=1; $i <=105 ; $i++) { 
	$db->insert('rating',['rating_for'=>4,'cookie_id'=>'hatteras_custom','posted_on'=>date('Y-m-d h:i:s'),'stars'=>5]);
}

for ($i=1; $i <=60 ; $i++) { 
	$db->insert('rating',['rating_for'=>4,'cookie_id'=>'hatteras_custom','posted_on'=>date('Y-m-d h:i:s'),'stars'=>4]);
}

 ?>