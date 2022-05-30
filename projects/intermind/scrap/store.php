<?php 

$ff = fopen('data.txt', 'a');

$link = file_get_contents($_POST['link']);

$link = strip_tags($link);

fwrite($ff, trim($_POST['name']).trim($link)."----------------\n");

 ?>