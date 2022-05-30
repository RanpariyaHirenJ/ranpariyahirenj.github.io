<?php
include("user_global.php");
$whereclause 	= "";
$word			= "";
$title 			= "Blogs";
$year			= " ";
if(isset($_REQUEST['action']))
{
	switch($_REQUEST['action'])
	{
		case"year":
			$year  	= $_REQUEST['value'];

			$from  	= $year."-01-01";
			$to		= $year."-31-12";
			
			$whereclause = "AND blog_date >= '$from' AND blog_date <= '$to'";
			$title = "Blogs of ".date("F-Y",strtotime($year." ".$_REQUEST['value']));
		break;
		
		case"latest":
			$whereclause = "ORDER BY blog_date DESC";
			$title = "Latest Posts";
		break;
		
	}
		if($_REQUEST['word'] != "")
		{
			$word = $_REQUEST['word'];
			$whereclause = "AND blog_title LIKE '%$word%'";
			$title = "Showing blogs for ".$word;
		}
}
?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<title>Henrico Taxi - Blog</title>
<meta name="description" content="">
<meta name="keywords" content="taxi blog, Henrico taxi blog, Richmond taxi travel">
<meta name="author" content="Pradip Chawla" />
<link rel="stylesheet" type="text/css" href="styles/style.css">
<script src="js/jquery-1.8.2.min.js" type="text/javascript"></script>

</head>

<body>
<div class="box-pattern">
</div>
<div class="homeBanner">
	<div class="wraper hmpaddngbotm">
  	
    <div class="hmlogonTXt">
    	<div class="hmlogo">
      	<a href="http://www.henricotaxi.com">
        	<img src="http://www.henricotaxi.com/images/logo.png">
        </a>
      </div>
     
  
    
     <!-- <div class="hmTxtcntr">
      	<h1>Call : 804-517-4000</h1>
        <h2>
        	// BLOG
        </h2>
      </div>-->
      <div class="clear"></div>
    </div>
  </div>
</div>
<div class="mobilemenu">
	<div class="mobileicon">
  	<a href="javascript:void(0);">
    
    </a>
  </div>
  <div class="mobileMenuCntr">
  	<ul>
    	<li>
      	<span>2014</span>
      </li>
      <li>
      	<a href="blog-home.htm">
        	Blog Home
        </a>
      </li>
      <li>
      	<a href="latest-posts.htm">
        	Latest Posts
        </a>
      </li>
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
<div class="pageMenu">
	<div class="wraper">
  	<div class="menuCntr">
    	<ul>
      	<li>
        	<span>
          	<?php if($year != " "){ echo $year; } else { echo date('Y'); } ?>
          </span>
        </li>
        <?php
		$pagename = explode("/",$_SERVER['REQUEST_URI']);
		$pagename = $pagename[count($pagename)-1];
		?>
        <li <?php if($pagename == "blog-home.htm" || $pagename == ""){ echo "class=\"active\""; } ?>><a href="../blog">Blog Home
          </a>
            <div class="droparrow">
          	<img src="images/menuhover.png">
          </div>
        </li>
        <li <?php if($pagename == "latest-posts.htm"){ echo "class=\"active\""; } ?>>
        	<a href="latest-posts.htm">
          	Latest Posts
          </a>
          <div class="droparrow">
          	<img src="images/menuhover.png">
          </div>
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
        	<form action="blog-home.htm" method="post"><div class="searchCntr">
          	<input type="text" name="word" value="<?php echo $word ?>" placeholder="Search">
            <input name="action" type="submit" value="">
          	<div class="clear"></div>
          </div></form>
        </li>
      </ul>
      <div class="clear"></div>
    </div>
  </div>
</div>
<div class="hmblogList">
	<div class="wraper">
  	<!--<div class="hmblogCntr">
    	<div class="hmblogImg">
      	<img src="images/blog1.jpg">
      </div>
      <div class="hmblogDesc">
      	<h1>
        	        </h1>
        <span>Posted On:10th October  2014</span>
        <p>
        	        </p>
        <div class="readPostcntr"><a href="all-blocks.html">Read Post</a></div>
      </div>
      <div class="clear"></div>
    </div>-->
    <?php
		$ad_status = 0;
		$sql = "SELECT * FROM tbl_blog_detaiils WHERE blog_status = 1 $whereclause";
		$objpaging = initialize_paging($sql);
		$result = $objpaging->ini_paging();	
		if(mysql_num_rows($result) != 0)
		{
		while($value = mysql_fetch_array($result))
		{
			if($ad_status == 0)
			{
	?>
    
      <?php /*?><div class="HMaddbannerntr">
            <!--<a href="#"><img src="images/homeaddbaner.jpg"></a>-->
   <!-- <script type="text/javascript">
    google_ad_client = "ca-pub-3054351218765190";
    google_ad_slot = "3586964260";
    google_ad_width = 728;
    google_ad_height = 90;
</script>-->
<!-- 728 x 90 Leader -->
<script type="text/javascript" src="//pagead2.googlesyndication.com/pagead/show_ads.js">
</script>
            
                  </div><?php */?>
      <?php } ?>
    <div class="hmblogCntr">
    	<a href="<?php echo $value['blog_slug'] ?>.htm">
    	<div class="hmblogImg">
      	<img src="../media/<?php echo $value['blog_banner'] ?>">
      </div>
      <div class="hmblogDesc">
      	<h1>
        	<?php echo stripslashes($value['blog_title']) ?>
        </h1>
        <span>Posted On: <?php echo date_format(date_create($value['blog_date']), 'm-d-Y'); ?> </span>
        <p>
        	<?php echo stripslashes($value['blog_introduction']) ?>  ..
        </p>
        <div class="readpost-cntr"><div class="readPostcntr">Read Post</div></div>
      </div>
      <div class="clear"></div>
      </a>
    </div>
    <?php
		$ad_status = 1;
		}
	}
	else
	{ ?>
		<div class="hmblogDesc w100">
		<h1 class="Noblog">
        	Aww ! No Posts Found....
        </h1>
        
		</div>
		<?php
		}
		?>
   <!-- <div class="hmaddCntr">
    	<a href="#">
      	<img src="images/add.jpg">
      </a>
    </div>-->
    
    <!--<div class="hmblogCntr">
    	<div class="hmblogImg">
      	<img src="images/blog1.jpg">
      </div>
      <div class="hmblogDesc">
      	<h1>
        	
        </h1>
        <span></span>
        <p>
        	
        </p>
        <div class="readPostcntr"><a href="all-blocks.html">Read Post</a></div>
      </div>
      <div class="clear"></div>
    </div>-->
     
    <div class="pagerCntr">
    
    
   <?php /*?> <?php echo($objpaging->display_paging()) ?><?php */?>
    
    
    
    	<!--<ul>
      	<li>
        	<a href="javascript:void(0);">
          	<img src="images/prev-pager.jpg">
          </a>
        </li>
        <li>
        	<a href="javascript:void(0);" class="active">
          	<span>
            	1
            </span>
          </a>
        </li>
        <li>
        	<a href="javascript:void(0);">
          	<span>
            	2
            </span>
          </a>
        </li>
        <li>
        	<a href="javascript:void(0);">
          	<span>
            	3
            </span>
          </a>
        </li>
        <li>
        	<a href="javascript:void(0);">
          	<img src="images/nxt-pager.jpg">
          </a>
        </li>
      </ul>-->
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
<!-- Start of StatCounter Code for Default Guide --> 
<script type="text/javascript">
var sc_project=9732182; 
var sc_invisible=1; 
var sc_security="9df8a2b1"; 
var scJsHost = (("https:" == document.location.protocol) ?
"https://secure." : "http://www.");
document.write("<sc"+"ript type='text/javascript' src='" +
scJsHost+
"statcounter.com/counter/counter.js'></"+"script>");
</script>
<noscript>
<div class="statcounter"><a title="site stats"
href="http://statcounter.com/" target="_blank"><img
class="statcounter"
src="http://c.statcounter.com/9732182/0/9df8a2b1/1/"
alt="site stats" rel="nofollow"></a></div>
</noscript>
<!-- End of StatCounter Code for Default Guide --> 
</body>
</html>
