<?php
include("user_global.php");
include("./securimage/securimage.php");

$year	= " ";
$msg_show = 0;
$slug	= $_REQUEST['slug'];
$sql 	= "SELECT * FROM tbl_blog_detaiils WHERE blog_slug = '$slug'";
$value 	= $db_object->return_query($sql);

$blog_id = $value['blog_id'];
$title = $value['blog_title'];
$intro = $value['blog_introduction'];
$desc  = $value['blog_description'];
$date  = date_format(date_create($value['blog_date']), 'm-d-Y');
$year  = date_format(date_create($value['blog_date']), 'Y');	
$img   = $value['blog_banner'];	
$page_title = $value['blog_title'];

if(isset($_REQUEST['action']))
{
	if(trim($_POST["code"]) != "" && isset($_POST["code"]))
	{
		$img = new Securimage();
		$valid = $img->check($_POST["code"]);
		if($valid != true) 
		{
			redirect("".$slug.".htm&error=The code is invalid&#msg");
			die("Code invalid");	
		} 
	}
	else
	{
		redirect("".$slug.".htm&error=The code is invalid&#msg");
		die("Code invalid");
	}
	
	$name 	= $db_object->sanatize_string($_REQUEST['name']);
	$email 	= $db_object->sanatize_string($_REQUEST['email']);
	$msg 	= $db_object->sanatize_string($_REQUEST['msg']);
	
	$sql = "INSERT INTO tbl_blog_comments (blog_id, blog_comment, blog_comment_user, blog_comment_email, blog_comment_date, blog_comment_status)
							VALUES ($blog_id, '$msg', '$name', '$email', CURDATE(), 0)";
	$url_name = stripslashes($slug).".htm&error=Thank you for comment. Your messsage will be published after moderation&#msg";
	$db_object->execute_query($sql);
	redirect($url_name);
	$msg_show = 1;
}
?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title><?php echo $page_title ?></title>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<link rel="stylesheet" type="text/css" href="styles/style.css">
<script src="js/jquery-1.8.2.min.js" type="text/javascript"></script>
<script src="js/js_class.js" type="text/javascript"></script>


</head>

<body>
<div class="box-pattern"> </div>
<div class="pageMenu">
  <div class="wraper">
    <div class="menuCntr">
      <ul>
        <li> <span> <?php echo $year; ?> </span> </li>
        <li> <a href="../blog"> Blog Home </a>
          <div class="droparrow"> <img src="images/menuhover.png"> </div>
        </li>
        <li> <a href="latest-posts.htm"> Latest Posts </a>
          <div class="droparrow"> <img src="images/menuhover.png"> </div>
        </li>
        <li class="submenuhover">
        	<a href="#">
          	Archives
          </a>
          <div class="submenucntr">
          	<ul>
            <?php
				$start = 2014;
				$current = date('Y');
				for($i=$current; $i>=$start; $i--)
				{
					?>
            	<li>
              	<a href="posts-year-<?php echo $i ?>.htm"><?php echo $i ?></a>
              </li>
			  <?php
				}
				?>
            </ul>
          </div>
        </li>
        <li>
          <form action="blog-home.htm" method="post">
            <div class="searchCntr">
              <input type="text" name="word" value="<?php echo $word ?>" placeholder="Search">
              <input name="action" type="submit" value="">
              <div class="clear"></div>
            </div>
          </form>
        </li>
      </ul>
      <div class="clear"></div>
    </div>
  </div>
</div>
<div class="inneradd">
  <div class="wraper">
    <div class="inneraddImg">
      <div class="blogLogo"> <a href="http://www.henricotaxi.com"> <img src="http://www.henricotaxi.com/images/logo.png" alt="logo"> </a> </div>
      <div class="mobilemenu">
        <div class="mobileicon"> <a href="#"> </a> </div>
        <div class="mobileMenuCntr">
          <ul>
            <li> <span>2014</span> </li>
            <li> <a href="blog-home.htm"> Blog Home </a> </li>
            <li> <a href="latest-posts.htm"> Latest Posts </a> </li>
            <li>
              <div class="mobileselect">
                <select>
                  <option>Archives</option>
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                </select>
              </div>
            </li>
            <li>
              <div class="searchCntr">
                <input type="text" placeholder="Search">
                <input name="" type="submit" value="">
                <div class="clear"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <?php /*?><div class="bloginerAdd"> 
        <!--<a href="#">
        	<img src="images/add2.jpg" alt="logo">
        </a>--> 
<!--  <script type="text/javascript">
    google_ad_client = "ca-pub-3054351218765190";
    google_ad_slot = "3586964260";
    google_ad_width = 728;
    google_ad_height = 90;
</script>-->
<!-- 728 x 90 Leader -->
<script type="text/javascript"
src="//pagead2.googlesyndication.com/pagead/show_ads.js">
</script>
      </div><?php */?>
      <div class="clear"></div>
    </div>
  </div>
</div>
<div class="hmblogList">
  <div class="wraper">
    <div class="WholeBlog">
      <div class="innerBlogLeft">
        <div class="fullblog">
          <h1><?php echo $title ?></h1>
          <span>Posted On: <?php echo $date ?></span>
          <div class="blogIMG"> <img src="../media/<?php echo $img ?>"> </div>
          <p> <?php echo html_entity_decode(stripslashes($desc)) ?> </p>
          <!--<p>
          	          </p>
          <div class="addRyt mobileAddbox">
            <a href="#">
              <img src="images/rytadd1.jpg">
            </a>
        	</div>
          <ul>
          	 </ul>
          <div class="addRyt mobileAddbox">
            <a href="#">
              <img src="images/rytadd2.jpg">
            </a>
        	</div>
          <p>
          	          </p>-->

          
          <h2> Comments: </h2>
          <div class="commentBox">
            <ul>
              <?php
				$sql = "SELECT * FROM tbl_blog_comments 
						WHERE blog_id = $blog_id
						AND blog_comment_status = 1
						ORDER BY blog_comment_date DESC 
						LIMIT 0,10";
				$result = $db_object->execute_query($sql);	
				while($value = mysql_fetch_array($result))
				{
					?>
              <li>
                <label><?php echo $value['blog_comment_user'] ?>:</label>
                <?php echo $value['blog_comment'] ?> </li>
              <?php
				}
				?>
              <!--<li>
              	<label>Kalpesh Singh:</label> 
              </li>-->
            </ul>
            <?php
			if($_REQUEST['error'] == "Thank you for comment. Your messsage will be published after moderation")
			{ 
			?>
            <div id="msg"> <span>Thank you for comment.</span> Your messsage will be published after moderation. </div>
            <?php } 
			if($_REQUEST['error'] == "The code is invalid")
			{ 
			?>
            <div id="msg"> <span><font color="#FF0000">Captcha code is invalid.</font></span> </div>
            <?php } ?>
            <script language="javascript" type="text/javascript">
			var abc="name[r|email[r,e|msg[r|code[r";
			</script>
            <form action="<?php echo stripslashes($slug) ?>.htm" method="post" id="myid" onSubmit="return validate_form(this.id,abc)" >
              <div class="commentFormcntr">
                <h3>Leave Message:</h3>
                <ul>
                  <li>
                    <label>Name</label>
                    <input name="name" title="User Name" type="text">
                    <div class="clear"></div>
                  </li>
                  <li>
                    <label>Email</label>
                    <input name="email" type="text" title="User Email">
                    <div class="clear"></div>
                  </li>
                  <li>
                    <label>Comment</label>
                    <textarea name="msg" title="Comment" cols="" rows=""></textarea>
                    <div class="clear"></div>
                  </li>
                  <li>
                    <label>Captcha</label>
                    <img src="./securimage/securimage_show.php?sid=<?php echo $sec_code ?>">
                    <div class="clear"></div>
                  </li>
                  <li>
                    <label>Code</label>
                    <input type="text" name="code" title="Captcha code">
                    <div class="clear"></div>
                  </li>
                  <li>
                    <label class="nomobile">&nbsp;</label>
                    <input name="action" type="submit" value="POST COMMENT">
                    <div class="clear"></div>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="innerBlogRyt">
        <div class="recentblogcntr">
          <h2>Recent Posts</h2>
          <ul>
            <?php
		$sql = "SELECT * FROM tbl_blog_detaiils 
				WHERE blog_status = 1 
				ORDER BY blog_date DESC 
				LIMIT 0,4";
		$result = $db_object->execute_query($sql);	
		while($value = mysql_fetch_array($result))
		{
	?>
            <li> <a href="<?php echo $value['blog_slug'] ?>.htm"> <?php echo $value['blog_title'] ?><span>Posted on: <?php echo date_format(date_create($value['blog_date']), 'm-d-Y'); ?></span> </a> </li>
            <?php
		}
		?>
            <!--<li>
            	<a href="#">
              	<span>Posted on:17th Oct</span>
              </a>
            </li>
            <li>
            	<a href="#">
              	<span>Posted on:17th Oct</span>
              </a>
            </li>
            <li>
            	<a href="#">
              	<span>Posted on:17th Oct</span>
              </a>
            </li>-->
          </ul>
        </div>
     <div class="addRyt"> 
	<script type="text/javascript">
    google_ad_client = "ca-pub-3054351218765190";
    google_ad_slot = "2110231066";
    google_ad_width = 300;
    google_ad_height = 250;
</script>
<!-- Image Ad 1 -->
<script type="text/javascript"
src="//pagead2.googlesyndication.com/pagead/show_ads.js">
</script></div>
        <div class="recentblogcntr">
          <h2>Popular Posts</h2>
          <ul>
            <?php
		$sql = "SELECT * FROM tbl_blog_detaiils bd
				WHERE bd.blog_status = 1 
				ORDER BY (SELECT COUNT(blog_comment_id) FROM tbl_blog_comments bc WHERE bc.blog_id = bd.blog_id) DESC
				LIMIT 0,4";
		$result = $db_object->execute_query($sql);	
		while($value = mysql_fetch_array($result))
		{
	?>
            <li>
            <li> <a href="<?php echo $value['blog_slug'] ?>.htm"> <?php echo $value['blog_title'] ?><span>Posted on: <?php echo date_format(date_create($value['blog_date']), 'm-d-Y'); ?></span> </a> </li>
            </li>
            <?php
		}
		?>
            <!--<li>
            	<a href="#">
              	<span>Posted on:17th Oct</span>
              </a>
            </li>
            <li>
            	<a href="#">
              	<span>Posted on:17th Oct</span>
              </a>
            </li>
            <li>
            
            
            	<a href="#">
              	<span>Posted on:17th Oct</span>
              </a>
            </li>-->
            
            
          </ul>
        </div>
        <div class="addRyt">
	<script type="text/javascript">
    google_ad_client = "ca-pub-3054351218765190";
    google_ad_slot = "2110231066";
    google_ad_width = 300;
    google_ad_height = 250;
</script>
<script type="text/javascript"
src="//pagead2.googlesyndication.com/pagead/show_ads.js">
</script> 
<!-- Image Ad 1 -->
 </div>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</div>
<div class="blogSlider">
  <div class="wraper">
    <div class="blogcorusel">
      <ul>
        <li>
          <?php
		$pre_sql = "SELECT * FROM tbl_blog_detaiils
				WHERE blog_id = (SELECT MAX(blog_id) FROM tbl_blog_detaiils WHERE blog_id < $blog_id)";
		$pre_result = $db_object->return_query($pre_sql);	
		?>
          <div class="item">
            <?php
			if($pre_result['blog_title'] != "")
			{
			?>
            <a href="<?php echo $pre_result['blog_slug'] ?>.htm">
            <h1> Previous Post </h1>
            <div class="blogInfoCntr">
              <div class="blogpic"> <img src="../media/<?php echo $pre_result['blog_banner'] ?>"> </div>
              <div class="bloginfo"> <?php echo $pre_result['blog_title'] ?> <span> Posted On: <?php echo date_format(date_create($pre_result['blog_date']), 'm-d-Y'); ?> </span> </div>
              <div class="clear"></div>
            </div>
            <p class="blogPrev"></p>
            </a>
            <?php
			}
			else
			{
				?>
            <div class="blogInfoCntr marT30">
              <div class="bloginfoblank"> Post Not Available </div>
            </div>
            <?php
			} 
			?>
          </div>
        </li>
        <li>
          <?php
		$next_sql = "SELECT * FROM tbl_blog_detaiils
				WHERE blog_id = (SELECT MIN(blog_id) FROM tbl_blog_detaiils WHERE blog_id > $blog_id)";
		$next_result = $db_object->return_query($next_sql);	
	
		?>
          <div class="item">
            <?php
			if($next_result['blog_title'] != "")
			{
			?>
            <a href="<?php echo $next_result['blog_slug'] ?>.htm">
            <h1> Next Post </h1>
            <div class="blogInfoCntr">
              <div class="blogpic"> <img src="../media/<?php echo $next_result['blog_banner'] ?>"> </div>
              <div class="bloginfo"> <?php echo $next_result['blog_title'] ?> <span> Posted On: <?php echo date_format(date_create($next_result['blog_date']), 'm-d-Y'); ?> </span> </div>
              <div class="clear"></div>
            </div>
            <p class="blogNext"></p>
            </a>
            <?php
			}
			else
			{
				?>
            <div class="blogInfoCntr marT30">
              <div class="bloginfoblank"> Post Not Available </div>
            </div>
            <?php
			} 
			?>
          </div>
        </li>
      </ul>
      <div class="clear"></div>
    </div>
  </div>
</div>
<div class="footerCntr">
  <div class="wraper">
    <p class="footerTxt">Henrico Taxi @ 2014.  All Rights Reserved</p>
  </div>
</div>
<script src="js/common.js" type="text/javascript"></script>
</body>
</html>
