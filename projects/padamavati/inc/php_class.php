<?php
//**************This class is used to perform various database related functions*****************
class db_connect
{
	var $conn;
	//This function is used t0 establish a database connection
	function db_connect($dbhost,$dbuser,$dbpass,$dbname)
	{				
		$this->conn = mysqli_connect($dbhost, $dbuser, $dbpass) or die ('Error connecting to mysql');
		mysqli_select_db($this->conn,$dbname);
	}
	
	// This function returns a resultset
	function execute_query($query)
	{
		//die($query);
		$result = mysqli_query($this->conn,$query);
	  	echo mysqli_error($this->conn);  
	  	return $result;			
	}
	
	//This function returns each rows value arraylist from a resultset
	function return_query($query)
	{
		$result = mysqli_query($this->conn,$query);
	  	echo mysqli_error($this->conn);
	  	$value = mysqli_fetch_array($result, MYSQLI_ASSOC);
	  	return $value;	
	}
	
	function return_value($result)
	{
		$retval = false;
		if($value = mysqli_fetch_array($result, MYSQLI_ASSOC))
		{		
			foreach($value as $key => $val)
			{
				$retval["".$key.""] = html_entity_decode(stripslashes($val));
				//$retval["".$key.""] = stripslashes($val);	
			}
		}
	  	return $retval;			
	}
	
	//This method is used to remove slashes added using the addslash function
	function strip_slashes($value)
	{		
		reset($value);
		while (list($key, $val) = each($value))
		{
		  $value[$key] = (stripslashes($val));
		}
		return $value;
	}
	
	//This method is used to snatize a string for safe database entry
	function sanatize_string($value)
	{		
		$value = htmlentities(addslashes(trim($value)));		
		return $value;
	}
	
	//This method checks if a variable has been set in an array if yes the returns value else returns blank
	function check_value($array,$variable,$return)
	{
		if(isset($array[$variable]))
		{
			return($array[$variable]);
		}
		else
		{
			return($return);
		}	
	}
	
	// This method compares a variable1 with variable 2 and if same returns variable 3 else returns variable 1 itself
	function sring_compare($compare,$with,$return)
	{
		if($compare != $with)
		{
			return($compare);
		}
		else
		{
			return($return);
		}	
	}
	
	// This method compares a variable1 with variable 2 and if same returns [return1] else returns [return2]
	function return_compare($compare,$with,$return1,$return2)
	{
		if($compare == $with)
		{
			return($return1);
		}
		else
		{
			return($return2);
		}	
	}
	
	//This method combines 2 arrays to create a new array taking array 1 for keys and array 2 for values
	function combine_array($array_1,$array_2)
	{
		$new_array = array();		
		$i = 0;	
		while($i < count($array_1))
		{	
			$key = $array_1[$i];		
			$new_array = array_merge($new_array,array("'".$key."'"=>$array_2[$i]));
			$i++;			
		}		
		return $new_array;
	}
	
	//This function checks for the specified variables to see if they are numbers only
	function sanatize_query()
	{
		$array = $_GET;
		$count = count($_GET);
		$permitted = " 1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ*#_.";
		$querystring = "?";
		$isOk = true;
		
		foreach($array as $key => $val)
		{				
				if(strlen($val) <= 0)
				{					
					$val = "0";
					$isOk = false;
				}
				
				$fdata = "";
				for($i=0;$i<strlen($val);$i++)
				{
					$char = substr($val,$i,1);
					
					if($char == ' ')
					{
						$fdata .= ' ';
						continue;
					}
										
					if(strpos($permitted,$char))
					{									
						$fdata .= $char; 						
					}
					else
					{
						$isOk = false;
					}
				}
				$querystring .= $key."=".$fdata."&";								
		}		
		$querystring = substr($querystring,0,strlen($querystring)-1);
		if(!$isOk)
		{
		
			header("location:".$_SERVER['PHP_SELF']."$querystring");
			die("Not OK");
		}		
		return true;
	}
	
	function sanatize_value($value)
	{
		$permitted = " 1234567890";				
		
		$fdata = "";				
		for($i=0; $i < strlen($value);$i++)
		{			
			$char = substr($value,$i,1);						
			if(strpos($permitted,$char))
			{
				$fdata .= $char;												
			}						
		}
		
		if(strlen(trim($fdata)) <= 0)
		{					
			$fdata = "0";
		}
				
		return $fdata;
	}
					 
	//This function us used to close a database connection
	function con_close()
	{
		mysqli_close($this->conn);
	}
}
//**********This is the sql helper class for adding updating and deleting records**********
class sqlhelper extends db_connect
{
	var $table;
	var $query;
	
	function sqlhelper($table)
	{
		$this->table = $table;
		$this->query = "";
	}
	
	function adddata($columns, $values)
	{
		$this->query = "INSERT INTO ".$this->table." ($columns) VALUES ($values)";		
		$this->execute_query($this->query);
	}
	
	function updatedata($columns, $values, $where, $callback="")
	{
		$this->query = "UPDATE ".$this->table." SET ";
		
		$columns 	= explode(",",$columns);
		$values		= explode("|",$values);				
		reset($columns);
		reset($values);
		foreach($columns as $col)
		{
			$this->query = $this->query.$col."=". current($values).", ";			
			next($values);
		}
		
		if($callback != "")
		{
			$valid = explode("=",$where);
			$callback($valid[1]);
		}
		
		$this->query = rtrim($this->query,", ");
		$this->query = $this->query." WHERE  $where";
		$this->execute_query($this->query);				
	}
	
	function add_data_new($keyvalue)
	{					
		$cols = "";
		$vals = "";
		
		foreach($keyvalue as $key => $val)
		{
			$cols .= $key.", ";
			
			if($val != "NOW()")
			{
				$vals .= "'".$this->sanatize_string($val)."', ";
				//$vals .= "'".addslashes($val)."', ";
			}
			else
			{
				$vals .= "".$val.", ";
			}
		}
		
		$cols = rtrim($cols,", ");
		$vals = rtrim($vals,", ");
		
		$this->query = "INSERT INTO ".$this->table." ($cols) VALUES ($vals)";	
		$this->execute_query($this->query);
	}
	
	function update_data_new($keyvalue, $where, $callback="")
	{
		$this->query = "UPDATE ".$this->table." SET ";
					
		foreach($keyvalue as $key => $val)
		{
			if($val != "NOW()")
			{
				$this->query .= $key."='".$this->sanatize_string($val)."', ";
				//$this->query .= $key."='".addslashes($val)."', ";
			}
			else
			{
				$this->query .= $key."=".$val.", ";
			}
		}
		
		if($callback != "")
		{
			$valid = explode("=",$where);
			$callback($valid[1]);
		}
		
		$this->query = rtrim($this->query,", ");
		$this->query = $this->query." WHERE  $where";
		$this->execute_query($this->query);				
	}
	
	function deletedata($where,$lessvar=1,$callback="")
	{
		$cnt = 1;		
		$a = array_flip($_POST);
		$total_cnt = count($a) - $lessvar;		
		if ($total_cnt > 0)
		{
			while ($cnt <=  $total_cnt) 
			{
				$val = key($a);	
				
				if($callback != "")
				{
					$callback($val);
				}
				
				$this->query = "DELETE FROM ".$this->table." WHERE $where=$val";
				$this->execute_query($this->query);				
				next($a);
				$cnt++;
			}
		}
	}
}
//*********This class is used to provide pagination property to a recordset****************
class pagination extends db_connect
{
	var $query, $limit, $params, $page, $start;	
	var $pgback, $pgnext, $reccount;
	
	function pagination() // Pagination constructor
	{
		$this->start 	= 1;
		$this->limit 	= "10";
		
		
		if(strlen($_SERVER['QUERY_STRING']) > 0)
		{
			if(!isset($_REQUEST["start"]))
			{
				$this->params = $_SERVER['QUERY_STRING'];	
			}
			else
			{
				$inipos = strpos($_SERVER['QUERY_STRING'],"&")+1;
				$this->params	= substr($_SERVER['QUERY_STRING'],$inipos);
			}
		}
		
		/*******************************************************************						
		if(strpos($_SERVER['QUERY_STRING'],"&") > 0)
		{
			$inipos = strpos($_SERVER['QUERY_STRING'],"&")+1;			
		}
		else
		{
			$inipos = strpos($_SERVER['QUERY_STRING'],"&");
		}		
		$this->params	= substr($_SERVER['QUERY_STRING'],$inipos);	
		********************************************************************/
			
		//$this->page 	= substr($_SERVER['SCRIPT_FILENAME'],strrpos($_SERVER['SCRIPT_FILENAME'],"/")+1);
		$query_str = explode("?",$_SERVER['REQUEST_URI']);
		$this->page = $query_str[0];
	}
	
	//This function initializes the pagination sequence and returns the executed query
	function ini_paging()
	{
	 	$this->reccount = mysqli_num_rows($this->execute_query($this->query));
		$this->pgback 	= $this->start - 1;
		$this->pgnext	= $this->start + 1;
		$from = (($this->start - 1) * $this->limit);
		$to = $this->limit;
		return($this->execute_query($this->query." limit ".$from.",".$to));
	}
	
	//This function displays the bottom pagination
	function display_paging()
	{
		$prev 	= "";
		$paging = "";
		$next	= "";
		
		if($this->pgback > 0)
		{				
				$prev = "<li><a href=".$this->page."?start=".$this->pgback."&".$this->params."><img src=\"images/pagination-prev.png\"></a><li>";				
		}						 		 
								 
		 for($i=($this->start - 5); $i < ($this->start + 5);$i++)
		 {
				if($i <> $this->start)
				{
					if($i > 0 && $i <= ceil($this->reccount/$this->limit))
					{					
						$paging = $paging."<li><a href=".$this->page."?start=".$i."&".$this->params.">".$i."</a></li>";
					}
				}	
				else 
				{ 
					$paging = $paging. "<li><a class=\"active\" href=\"#\">".$this->start."</a></li>";
				} 
		 }
		 		 
		 if($this->pgnext <=  ceil($this->reccount/$this->limit))
		 {		 		
				$next = "<li><a href=".$this->page."?start=".$this->pgnext."&".$this->params."><img src=\"images/pagination-next.png\"></a></li>";				
		 }
		 
		 return($prev."&nbsp;&nbsp;".$paging."&nbsp;&nbsp;".$next);
	}
	function display_paging_dir()
	{
		$prev 	= "";
		$paging = "";
		$next	= "";
		
		if($this->pgback > 0)
		{				
				$prev = "<li><a href=".$this->page."?start=".$this->pgback."&".$this->params."><img src=\"images/left-arrow.png\"></a></li>";				
		}						 		 
								 
		 for($i=($this->start - 5); $i < ($this->start + 5);$i++)
		 {
				if($i <> $this->start)
				{
					if($i > 0 && $i <= ceil($this->reccount/$this->limit))
					{					
						$paging = $paging."<li><a href=".$this->page."?start=".$i."&".$this->params.">".$i."</a></li>";
					}
				}	
				else 
				{ 
					$paging = $paging. "<li><span class=\"current\">".$this->start."</span></li>";
				} 
		 }
		 		 
		 if($this->pgnext <=  ceil($this->reccount/$this->limit))
		 {		 		
				$next = "<li><a href=".$this->page."?start=".$this->pgnext."&".$this->params."><img src=\"images/right-arrow.png\"></a></li>";				
		 }
		 
		 return($prev."&nbsp;&nbsp;".$paging."&nbsp;&nbsp;".$next);
	}
}
//************This class is used to perform image manupulation functions**************
class img_manup
{
	
	var $folderpath;
	
	//This function initializes the path to the folder conatining the image or where the image needs to be uploaded
	function img_manup($folderpath)
	{
		$this->folderpath = $folderpath;
	}
	
	//This function checks if an image exists or else returns default image
	function get_image($file_name) 
	{
		if(!empty($file_name))
		{
			return $file_name; 	
		}
		else
		{
			return $this->folderpath."/no_image.jpg";
		}
	}
	
	// This function returns the height and width of the image as an array
	function get_size($filename)
	{
		$imagepath = $this->folderpath ."/".$filename;
		$imagesize = getimagesize($imagepath);
		
		return $imagesize;
	}	
		
	// This function returns the img tag with proportionate height and width of an image as per specified in the target variable
	function imageResize($filename, $area, $titletext="", $atltext="",$classtext="") 
	{
		$imagepath = $this->folderpath ."/".$filename;
		$imagesize = getimagesize($imagepath); 
		
		$width 	= $imagesize[0];
		$height = $imagesize[1];
		
		if ($width > $height) 
		{ 
			$percentage = ($area / $width); 
		} 
		else 
		{ 
			$percentage = ($area / $height); 
		} 
			
		$width = round($width * $percentage); 
		$height = round($height * $percentage); 
	
		return "<img src='$imagepath' width=\"".$width."\" height=\"".$height."\" border=\"0\" title=\"".$titletext."\" alt=\"".$atltext."\" class=\"".$classtext."\"/>"; 
	} 
	
	// This function validates if a file is a gif or jpg file
	function validate_image($filename)
	{
		$image_ext = explode(".",$filename);
		
		//print_r($image_ext);
		$image_ext = ".".$image_ext[count($image_ext)-1];					
		
		if($image_ext != ".gif" && $image_ext != ".jpg" && $image_ext != ".png" && $image_ext != ".jpeg")
		{
			$image_result[0] = "False";
			$image_result[1] = "";
		}
		else
		{
			$image_result[0] = "True";		
			$image_result[1] = $image_ext;
		}			
		return $image_result;
	}
	
	// This function is used to resize an uploaded image
	
	/*function createThumbs($filename, $imgratio, $text) 
	{
		$image_result = $this->validate_image(strtolower($filename));
		
		if($image_result[0] == "True")
		{
			$pathToImages = $this->folderpath ."/".$filename;;
			$pathToThumbs = $this->folderpath ."/".$filename;;
			
			// load image and get image size
			switch($image_result[1])
			{
				case ".jpg":
					$img = imagecreatefromjpeg("$pathToImages");
				break;
				
				case ".jpeg":
					$img = imagecreatefromjpeg("$pathToImages");
				break;
				
				case ".gif":
					$img = imagecreatefromgif("$pathToImages");
				break;
				
				case ".png":
					$img = imagecreatefrompng("$pathToImages");
				break;			
			}
						
			$width = imagesx( $img );
			$height = imagesy( $img );
				
			// calculate thumbnail size
			if($width > $height)
			{
				$new_width = $imgratio;
				$new_height = floor( $height * ( $imgratio/ $width ) );
				}
			else
			{
				$new_height = $imgratio;
				$new_width = floor( $width * ( $imgratio/ $height ) );
			}
			
			// create a new temporary image and maintain its transperancy
			$tmp_img = imagecreatetruecolor( $new_width, $new_height );
			imagealphablending($tmp_img, false);
			imagesavealpha($tmp_img,true);
			$transparent = imagecolorallocatealpha($tmp_img, 255, 255, 255,127);
			imagefilledrectangle($tmp_img, 0, 0, $new_width, $new_height, $transparent);
			
			// copy and resize old image into new image
			imagecopyresized($tmp_img, $img, 0, 0, 0, 0, $new_width, $new_height, $width, $height );
			
			//font color 
			$white = imagecolorallocate($tmp_img, 0xFF, 0xFF, 0xFF);
			// Path to our ttf font file
			//$font_file = $this->folderpath.'verdana.ttf';
			 
			//Write text on image
			//imagefttext($tmp_img, 10, 0, 12, $new_height - 8, $white, $font_file, $text);			
			 
			// save thumbnail into a file
			switch($image_result[1])
			{
				case ".jpg":
					imagejpeg($tmp_img, "$pathToThumbs");
				break;
				
				case ".jpeg":
					imagejpeg($tmp_img, "$pathToThumbs");
				break;
				
				case ".gif":
					imagegif($tmp_img, "$pathToThumbs");
				break;
				
				case ".png":
					imagepng($tmp_img, "$pathToThumbs");
				break;			
			}
			imagedestroy($img);			
		}
		else
		{
			exit();
		}											  	  
	}*/
	
	function createThumbs($filename, $thumbnailname, $imgratio, $text="") 
	{
		$image_result = $this->validate_image(strtolower($filename));
		
		if($image_result[0] == "True")
		{
			$pathToImages = $this->folderpath ."/".$filename;;
			$pathToThumbs = $this->folderpath ."/".$thumbnailname;
			
			// load image and get image size
			switch($image_result[1])
			{
				case ".jpg":
					$img = imagecreatefromjpeg("$pathToImages");
				break;
				
				case ".jpeg":
					$img = imagecreatefromjpeg("$pathToImages");
				break;
				
				case ".gif":
					$img = imagecreatefromgif("$pathToImages");
				break;
				
				case ".png":
					$img = imagecreatefrompng("$pathToImages");
				break;			
			}
						
			$width = imagesx( $img );
			$height = imagesy( $img );
				
			// calculate thumbnail size
			if($width > $height)
			{
				$new_width = $imgratio;
				$new_height = floor( $height * ( $imgratio/ $width ) );
				}
			else
			{
				$new_height = $imgratio;
				$new_width = floor( $width * ( $imgratio/ $height ) );
			}
			
			// create a new temporary image and maintain its transperancy
			$tmp_img = imagecreatetruecolor( $new_width, $new_height );
			imagealphablending($tmp_img, false);
			imagesavealpha($tmp_img,true);
			$transparent = imagecolorallocatealpha($tmp_img, 255, 255, 255,127);
			imagefilledrectangle($tmp_img, 0, 0, $new_width, $new_height, $transparent);
			
			// copy and resize old image into new image
			imagecopyresized($tmp_img, $img, 0, 0, 0, 0, $new_width, $new_height, $width, $height );
			
			//font color 
			$white = imagecolorallocate($tmp_img, 0xFF, 0xFF, 0xFF);
			// Path to our ttf font file
			//$font_file = $this->folderpath.'verdana.ttf';
			 
			//Write text on image
			//imagefttext($tmp_img, 10, 0, 12, $new_height - 8, $white, $font_file, $text);			
			 
			// save thumbnail into a file
			switch($image_result[1])
			{
				case ".jpg":
					imagejpeg($tmp_img, "$pathToThumbs".$image_result[1],60);
				break;
				
				case ".jpeg":
					imagejpeg($tmp_img, "$pathToThumbs".$image_result[1],60);
				break;
				
				case ".gif":
					imagegif($tmp_img, "$pathToThumbs".$image_result[1]);
				break;
				
				case ".png":
					imagepng($tmp_img, "$pathToThumbs".$image_result[1],60);
				break;			
			}
			imagedestroy($img);	
			imagedestroy($tmp_img);		
		}
		else
		{
			exit();
		}											  	  
	}
	
	function createThumbs_box($filename, $thumbnailname, $reqWidth=150, $reqHeight=225) 
	{
		
		$image_result = $this->validate_image(strtolower($filename));
		
		
		if($image_result[0] == "True")
		{
			$reqwidth = $reqWidth;
			$reqheight = $reqHeight;
		
			$baseimage = imagecreatetruecolor($reqwidth,$reqheight);	
			list($r,$g,$b) = array_map('hexdec',str_split("ffffff",2));
			$bgcolor = imagecolorallocate($baseimage,$r,$g,$b);	
						
			
			$pathToImages = $this->folderpath ."/".$filename;
			$pathToThumbs = $this->folderpath ."/".$thumbnailname;			
			
			// load image and get image size
			switch($image_result[1])
			{
				case ".jpg":
					$img = imagecreatefromjpeg("$pathToImages");
				break;
				
				case ".jpeg":
					$img = imagecreatefromjpeg("$pathToImages");
				break;
				
				case ".gif":
					$img = imagecreatefromgif("$pathToImages");
				break;
				
				case ".png":
					$img = imagecreatefrompng("$pathToImages");
				break;			
			}
						
			$width = imagesx( $img );
			$height = imagesy( $img );
				
			// calculate thumbnail size
			if($reqwidth > $reqheight)
			{	
				$new_width = $reqwidth;
				$new_height = floor( $height * ( $reqwidth / $width ));								
			}
			else
			{
				$new_height = $reqheight;
				$new_width = floor( $width * ( $new_height / $height ) );								
			}
			
			$newtop = 0;
			$newleft = 0;
			
			// create a new temporary image and maintain its transperancy
			$tmp_img = imagecreatetruecolor($new_width,$new_height);
			imagealphablending($tmp_img, false);
			imagesavealpha($tmp_img,true);
			$transparent = imagecolorallocatealpha($tmp_img, 255, 255, 255, 255);
			imagefilledrectangle($tmp_img, 0, 0, $new_width, $new_height, $transparent);
			
			// copy and resize old image into new image
			imagecopyresized($tmp_img, $img, 0, 0, 0, 0, $new_width, $new_height, $width, $height );	
		
			imagecopyresampled($baseimage,$tmp_img,($reqwidth - $new_width)/2,($reqheight - $new_height)/2,0,0,$new_width,$new_height,$new_width,$new_height);
			// save thumbnail into a file
			switch($image_result[1])
			{
				case ".jpg":
					imagejpeg($baseimage, "$pathToThumbs".$image_result[1],80);
				break;
				
				case ".jpeg":
					imagejpeg($baseimage, "$pathToThumbs".$image_result[1],80);
				break;
				
				case ".gif":
					imagegif($baseimage, "$pathToThumbs".$image_result[1]);
				break;
				
				case ".png":
					imagepng($baseimage, "$pathToThumbs".$image_result[1]);
				break;			
			}
			imagedestroy($img);	
			imagedestroy($baseimage);
			imagedestroy($tmp_img);		
		}
		else
		{
			exit();
		}											  	  
	}
}
//**************This class is used for performing file manupulation******************
class file_manup
{
	var $folderpath;
	var $content;
	var $mime_type = array('pdf' => 'application/pdf', 'doc' => 'application/msword', 'png' => 'image/png','jpg' => 'image/jpeg', 
					       'jpeg' => 'image/jpeg','gif' => 'image/gif', 'swf' => 'application/x-shockwave-flash', 'flv' => 'video/x-flv');
	
	//This function initializes the path to the folder conatining the image or where the image needs to be uploaded
	function file_manup($folderpath)
	{
		$this->folderpath = $folderpath;
	}
	
	//This function validates a file against the array of extensions and if the file being uploaded is ok then uploads it
	function upload_file($sourcename, $tmpname, $dstnname, $ext_array, $mime="")
	{
		$file_ext  = explode(".",$sourcename);
		$file_ext = ".".$file_ext[count($file_ext)-1];		
		
		$ext_array = explode(",",$ext_array);
		$file_ok   = false;
		
		if($mime != "")
		{				
			foreach($ext_array as $key => $val)
			{				
				for($i=0; $i<count($this->mime_type); $i++)
				{					
					if($mime == $this->mime_type[$val])					{
						$file_ok = true;
						break;
					}
				}
			}
		}
		else
		{
			if($sourcename!="")
			{
				$file_ok	= true;
			}
			else
			{
				$file_ok	= false;
			}
			
		}
		
		if($file_ok == true)
		{
			$uploaddir = $this->folderpath;
			$uploadfile = $uploaddir.$dstnname.$file_ext;
			move_uploaded_file($tmpname, $uploadfile);
			return($dstnname.$file_ext);
		}
		else
		{
			return false;
		}					
	}
	
	//This function will be used to delete files passed as an array from a folder, returns count of total files and deleted files  
	function delete_file($file_list)
	{
		$file_list 	= explode(",",$file_list);
		reset($file_list);
		$int[0] = count($file_list);
		$int[1] = 0;
		while (list($key, $val) = each($file_list))
		{
			$file = $this->folderpath.$val;
			if(file_exists($file))
			{
				if(unlink($file))
				{
					$int[1]++;
				}
			}		  
		}
		return $int;
	}
	//This function is used to extract html from a different URL and update the $content property of the class with 
	//the extracted content
	function extract_html($filename)
	{
		$filename = $this->folderpath.$filename;
		if($file = fopen($filename,"r"))
		{
			$content = "";
		   	while(!feof($file))
		  	{
		  		$this->content = $this->content.fgets($file);
		 	}
			fclose($file);
			return($this->content);			
		}
		else
		{
			echo("File is not readable!");
			die();
		} 
	}
	
	//This function is used to replace specified tags within a {} with a list of words specified in an array
	function replace_tags($tags,$values) 
	{
		$tags 	= explode("|", $tags);
		$values = explode("|",$values);
		reset($tags);
		reset($values);
		for($i=0;$i<count($tags);$i++)
		{			
			$this->content = str_replace($tags[$i],$values[$i],$this->content);
		}
		return($this->content);
	}	 
}
//*************This class is used to perform various email related functions********************************
class smtp_mailer
{			
	var $smtphost, $smtpuser, $smtppass;
	
	function smtp_mailer($smtphost, $smtpuser, $smtppass)
	{
		$this->smtphost = $smtphost;							// specify main and backup server [mail.kalptech.com]
		$this->smtpuser = $smtpuser;							// SMTP username [support@kalptech.com]
		$this->smtppass = $smtppass;							// SMTP password [ks0679*]
	}
	// This function is used for sending emails with attachments, it utilizes the PHP mailer base class functionality	
	function send_mail($from,$to,$attachments,$subject,$body)
	{
		if (!class_exists("phpmailer")) 
		{
			require("phpmailer/class.phpmailer.php");
		}
		
		$smtphost = $this->smtphost;
		$smtpuser = $this->smtpuser;
		$smtppass = $this->smtppass;
				
		$mail = new PHPMailer();	
		if(!empty($smtphost))
		{
			$mail->IsSMTP();                                   	// set mailer to use SMTP
			$mail->Host 	= $smtphost;  					
			$mail->SMTPAuth = true;     						// turn on SMTP authentication
			$mail->Username = $smtpuser;  				
			$mail->Password = $smtppass; 					
		}
		
		$from = explode(",",$from);								//Name,Email
		
		//$mail->From = $from[0];
		$mail->From = $from[0];
		
		if(isset($from[1]))
		{
			$mail->FromName = $from[1];
			$mail->AddReplyTo($from[0],$from[1]);
			
		}
		else
		{
			$mail->AddReplyTo($from[0]);			
		}
				
		
		$to	= explode(",",$to);								//Name,Email		
		$mail->AddAddress($to[0]);
		
		if(isset($to[1]))
		{
			$mail->AddCC($to[1]);					
		}
		
		if(isset($to[2]))
		{
			$mail->AddCC($to[2]);
		}
		
		if(isset($to[3]))
		{
			$mail->AddCC($to[3]);
		}
		
		if(isset($to[4]))
		{
			$mail->AddCC($to[4]);
		}
		$mail->WordWrap = 125;									// set word wrap to 50 characters
		
		if(!empty($attachments))
		{
			$attachments	= explode(",",$attachments);
			reset($attachments);
			for($i=0;$i<count($attachments);$i++)
			{		                                 					   	
				$mail->AddAttachment($attachments[$i]);         // add attachments
			}
		}
				
		$mail->IsHTML(true);                                  	// set email format to HTML
		
		$mail->Subject = strip_tags($subject);
		$mail->Body    = $body;
		$mail->AltBody = strip_tags($body);
		
		if(!$mail->Send())
		{		   
		   $error = "Message could not be sent. <br/>";
		   $error .= "MailTo: ".$to[0]."<br/>Subject: ".$subject."<br/>Body: ".$body."<br/>";
		   $error .= $mail->ErrorInfo." ".date("d/m/Y h:i")."<br/>";
		   
		   $file = fopen("mailer_error_log.txt","a");
		   fwrite($file,$error);
		   fclose($file);
		   
		   //echo "Message could not be sent. <br/>";
		   //echo "Mailer Error: " . $mail->ErrorInfo;
		   //exit;
		}
		//else
		//{
			//echo"Message has been sent successfully";
			
			$error = "Message successfully sent. <br/>";
		   	$error .= $to[0]." ".$subject."<br/>";
		   	$error .= date("d/m/Y h:i")."<br/>";
			
			$file = fopen("mailer_error_log.txt","a");		   	
			fwrite($file,$error);
		   	fclose($file);
			
			return true;
		//}		
	}
}
//This Class will be utilized to access a mailbox using PHP IMAP class library	
class imap_access
{	
	var $imapserver, $imapuser, $imappass, $imapconn;
	var $folders, $emailcount, $headers;
	
	//This is the constructor of the class
	function imap_access($imapserver, $imapuser, $imappass)
	{
		$this->imapserver 	= $imapserver; 	//{mail.kalptech.com:110/pop3}INBOX
		$this->imapuser 	= $imapuser;	//kalpesh@kalptech.com
		$this->imappass 	= $imappass;	//kalpum
	}
	
	function access_mail()
	{
		$this->imapconn		= @imap_open($this->imapserver, $this->imapuser, $this->imappass) or die(imap_last_error());		
		$this->folders 	= imap_listmailbox($this->imapconn, $this->imapserver, "*"); // This property returns the list of mail folders
		
		if ($this->folders == false) 
		{
			echo "Call to the folders failed!";
		} 
		
		$this->headers = imap_headers($this->imapconn);	//This property returns total messages in the form of an array	
		$this->emailcount = sizeof($this->headers); // This property returns the count of total messages				
	}
	
	//This function will close the connection to the opened imap mail box
	function close_conn()
	{
		imap_close($this->imapconn);	
	}
	
	//This function returns the headers of an email
	function msg_headers($msg_no)
	{
		$mailHeader = imap_headerinfo($this->imapconn, $msg_no);
		
		$msg_headers["recent"] 	= $mailHeader->Recent;
		$msg_headers["from"] 	= $mailHeader->fromaddress;
		$msg_headers["replyto"] = $mailHeader->reply_toaddress;
		$msg_headers["subject"] = strip_tags($mailHeader->subject);
		$msg_headers["date"] 	= $mailHeader->date;
		$msg_headers["Size"] 	= $mailHeader->Size;						
		
		return($msg_headers);
	}
	
	//This function returns the body of an email ***** Still there is some work to be done on this *****
	function msg_body($msg_no)
	{
		return imap_fetchbody($this->imapconn,$msg_no,1);
	}
}
?>