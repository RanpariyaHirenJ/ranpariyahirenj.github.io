<?php 
include("user_global.php"); 
$slug = $_REQUEST["slug"];

$sql = "SELECT mp_id , post_title, post_slug, DATE_FORMAT(post_date, '%d %b %Y') as  post_date, post_content, article_publication
		FROM `tbl_media_press_releases` WHERE `post_type` = 1 AND `post_status` = 1 AND post_slug LIKE '%$slug%'";
$value = $db_object->return_query($sql);
$cur_post = $value["mp_id"];
?><!DOCTYPE html>
<html>
<head>
<base href="<?php echo $base_url; ?>">
<meta name="viewport" content="width=device-width">
<link rel="icon" type="image/png" href="images/favicon.png" />
<title><?php echo strip_tags(stripslashes(utf8_decode($value["post_title"])));  ?> | CMS Info Systems</title>
<link rel="stylesheet" href="css/grid.css">
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css">
    
<style>
.txt p,
.layout-4 p {margin: 0 0 20px;font-size: 18px;line-height: 36px;color: #4d4d4d;}
.layout-4 p {margin:20px 0;}
.layout-4 .col-7{}
.layout-4 p strong{font-size:18px;}
.txt p {margin: 0 0 20px;font-size: 18px;line-height:36px;color:#4d4d4d}
p.large-font{font-weight: 400;font-size:28px;line-height: 45px;color: #4d4d4d;}
p.large-font .link-style{font-weight: 400;font-size:28px;line-height: 45px;}

.card-name{border: 1px solid #eee;padding: 30px;position: relative;background:#fff;}
.layout-2 .btn.btn-border{margin-top:15px;position: absolute;bottom: 30px;left:30px;}
.layout-2 .col-3{margin-bottom:80px;}
.layout-2 .col-3:nth-last-child(1),
.layout-2 .col-3:nth-last-child(2),
.layout-2 .col-3:nth-last-child(3),
.layout-2 .col-3:nth-last-child(4){margin-bottom:0px;}
.card-name h3 {background:none;}
.large-font span{font-weight:600;display:block;font-size:14px;}
.banner-height {min-height: 300px;}
#slider2 h1 {font-size: 32px;font-weight: 300;color:#fff;}
#slider2 .caption {left:0px;width: 100%;}
p.large-font.caption{margin: 0 0 50px 0 !important;left: 15px;width: 98%;padding: 40px !important;}
#slider2 p.sub-head{font-size: 14px;}
.overlay-bg:before {content: "";position: absolute;top: 0;left: 0;background: rgba(0, 0, 0, 0.5);width: 100%;height: 100%;}

.gradient-bg:before{content:"";
background: -moz-linear-gradient(top, rgba(223,48,100,.7) 0%, rgba(200,55,111,.7) 25%, rgba(147,72,133,.7) 51%, rgba(96,86,153,.7) 76%, rgba(61,99,169,.7) 100%);
background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(223,48,100,.7)), color-stop(25%, rgba(200,55,111,.7)), color-stop(51%, rgba(147,72,133,.7)), color-stop(76%, rgba(96,86,153,.7)), color-stop(100%, rgba(61,99,169,.7)));
background: -webkit-linear-gradient(top, rgba(223,48,100,.7) 0%, rgba(200,55,111,.7) 25%, rgba(147,72,133,.7) 51%, rgba(96,86,153,.7) 76%, rgba(61,99,169,.7) 100%);
background: -o-linear-gradient(top, rgba(223,48,100,.7) 0%, rgba(200,55,111,.7) 25%, rgba(147,72,133,.7) 51%, rgba(96,86,153,.7) 76%, rgba(61,99,169,.7) 100%);
background: -ms-linear-gradient(top, rgba(223,48,100,.7) 0%, rgba(200,55,111,.7) 25%, rgba(147,72,133,.7) 51%, rgba(96,86,153,.7) 76%, rgba(61,99,169,.7) 100%);
background: linear-gradient(to bottom, rgba(223,48,100,.7) 0%, rgba(200,55,111,.7) 25%, rgba(147,72,133,.7) 51%, rgba(96,86,153,.7) 76%, rgba(61,99,169,.7) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#df3064', endColorstr='#3d63a9', GradientType=0 );}
.caption h4{margin: 0 0 15px;font-size: 20px}
.p40{padding: 40px;}
</style>
</head>
<body>
<header>
  <div class="wrapper">
    <div class="row">
      <div class="col-4"> <a href="index.html"><img src="images/logo.jpg" alt="" title=""></a> </div>
      <div class="col-8">
        <nav>
          <div class="menu-icon"><span></span></div>
          <ul>
            <li class="mobile-only search-input">
              <input type="text">
            </li>
            <li><a href="index.html">Home</a></li>
            <li><a href="javascript:void(0);">About Us</a>
              <ul>
                <li><a href="about.html">Company Profile</a></li>
                <li><a href="leadership-team.html">Leadership Team</a></li>
                <li><a href="board-of-directors.html">Board of Directors</a></li>
              </ul>
            </li>
            <li class="active"><a href="javascript:void(0);">Business</a>
              <div class="submenu submenu-level2">
                <ul>
                  <li><a href="cash-management-system.html">Cash Management Solutions</a>
                    <ul class="dropdown-content">
                      <li><a href="atm-management-solutions.html">ATM Management Solutions</a></li>
                      <li><a href="retail-and-enterprise-solutions.html">Retail and Enterprise Solutions</a></li>
                      <li><a href="currency-management-services.html">Currency Management Solutions</a></li>
                    </ul>
                  </li>
                  <li><a href="managed-services.html">Managed Services</a>
                    <ul class="dropdown-content">
                      <li><a href="atm-product-solutions.html">ATM Product Solutions</a></li>
                      <li><a href="atm-site-infrastructure-solutions.html">ATM Site Infrastructure Solutions</a></li>
                      <li><a href="atm-complete-line-maintenance-solutions.html">ATM Complete Line Maintenance</a></li>
                    </ul>
                  </li>
                  <li><a href="card-solutions.html">Card Solutions</a>
                    <ul class="dropdown-content">
                      <li><a href="cms-card-solutions.html">CMS Card Solutions</a></li>
                      <li><a href="migrate-cards-to-emv-standards-in-india.html">Migrate cards to EMV Standards in India</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
            <li><a href="javascript:void(0);" class="active">Newsroom</a>
              <ul>
                <li><a href="press-releases.html">Press Releases</a></li>
                <li><a href="media-coverage.html">Media Coverage</a></li>
              </ul>
                        </li>
                        <li><a href="careers.html">Careers</a></li>
                        <li><a href="javascript:void(0);">Contact Us</a>
                          <ul>
                            <li><a href="contact.html">Office Locations</a></li>
                            <li><a href="locations.html">ATM Locations</a></li>
                          </ul>
                        </li>
            <li><a href="#" class="search-ico"><img src="images/search.png" alt="" title=""></a></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</header>

<section id="slider2" class="padT0">
    <div style="background-image:url(images/press-releases-detail-banner.jpg);background-position: center;background-repeat: no-repeat;background-size: cover;" class="align-v-center banner-height overlay-bg gradient-bg" data-aos="fade-up">
    <div class="wrapper p40">
        <div class="" data-aos="fade-right" data-aos-delay="300">
        	<div class="breadcrumb"><a href="index.html">Home</a> > <a>Press Releases</a> > </div>
            <h1><?php echo strip_tags(stripslashes(utf8_decode($value["post_title"])));  ?></h1>
            <p class="sub-head"><?php echo $value["post_date"]  ?></p>
        </div>
    </div>
    </div>
</section>
<section id="about">
  <div class="wrapper">
    <div class="container">
      <div class="col-7 press-cntr">
        <div class="press-info"> 
        	<?php 
				//echo $value["post_content"];
				$post_content = utf8_decode($value["post_content"]);						
				$post_content = stripslashes($post_content);						
				$post_content = strip_tags(html_entity_decode($post_content),"<I><i><ul><li><strong><bold><br><br/><p><h2><h3><a>");												
				$post_content = str_replace("?","'",$post_content);
				echo $post_content
				?>                                    
        </div>
      
    </div>
      <div class="col-5 press-section">
        <div class="more-press">
            <h3>Latest Press</h3>
              <ul class="list disc">
              	<?php 
				
			$sql = "SELECT post_title, post_slug, DATE_FORMAT(post_date, '%d %b %Y') as  post_date, post_content, article_publication
					FROM `tbl_media_press_releases` WHERE `post_type` = 1 AND `post_status` = 1
					ORDER BY STR_TO_DATE(`post_date`, '%Y-%m-%d %H:%i:%s') DESC LIMIT 0, 4";
				/*$sql = "SELECT post_title, post_slug, DATE_FORMAT(post_date, '%d %b %Y') as  post_date
					FROM `tbl_media_press_releases` WHERE `post_type` = 1 AND `post_status` = 1 AND mp_id != $cur_post
					ORDER BY RAND() DESC LIMIT 4";*/
					$result = $db_object->execute_query($sql);
					while($value = mysqli_fetch_array($result))
					{
						$post_date = $value["post_date"];
						$post_title = strip_tags(stripslashes(utf8_decode($value["post_title"])));
						$post_slug = $value["post_slug"];
				?>
                  <li><a href="./press-release-detail/<?php echo $post_slug ?>"><?php echo$post_title  ?><span class="press-date-title">Updated On : <?php echo $post_date ?></span></a></li>                  
                  <?php 
					}
				  ?>                  
              </ul>
          </div>
          <div class="cta"> <a href="press-releases.html" class="btn btn-border">View all</a> </div>
      </div>
    <div class="clear"></div>
  </div>
  </div>
</section>
    <div class="clear"></div>

<footer>
  <div class="wrapper">
    <div class="row">
      <div class="col-3">
        <ul>
          <li><a href="cash-management-system.html"><strong>Cash Management Solutions</strong></a></li>
          <li>&nbsp;</li>
          <li><a href="atm-management-solutions.html">ATM Management Solutions</a></li>
          <li><a href="retail-and-enterprise-solutions">Retail and Enterprise Solutions</a></li>
          <li><a href="currency-management-services.html">Currency Management Solutions</a></li>
        </ul>
      </div>
      <div class="col-3">
        <ul>
          <li><a href="managed-services.html"><strong>Managed Services</strong></a></li>
          <li>&nbsp;</li>
          <li><a href="atm-product-solutions.html">ATM Product Solutions</a></li>
          <li><a href="atm-site-infrastructure-solutions.html">ATM Site Infrastructure Solutions</a></li>
          <li><a href="atm-complete-line-maintenance-solutions.html">ATM Complete Line Maintenance Solutions</a></li>
        </ul>
      </div>
      <div class="col-3">
        <ul>
          <li><a href="card-solutions.html"><strong>Card Solutions</strong></a></li>
          <li>&nbsp;</li>
          <li><a href="cms-card-solutions.html">CMS Card Solutions</a></li>
          <li><a href="migrate-cards-emv-standards-in-india.html">Migrate cards to EMV Standards in India</a></li>
        </ul>
      </div>
      <div class="col-3">
        <div class="copyrights" style="">
          <ul><li>&copy; 2010-<script>document.write(new Date().getFullYear());</script> CMS.COM. All rights reserved.</li>
            <li>CIN: U45200MH2008PLC180479</li>
            <li><a href="#">Sitemap</a>&nbsp;<a href="#">Privacy</a></li>
          </ul>
          <ul id="social">
            <li><a href="#"><img src="images/fb.png"></a></li>
                <li><a href="#"><img src="images/linkdin.png"></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>
<script type="text/javascript" src="scripts/jquery-1.9.1.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>  
<script src="js/sticky-kit.js"></script>
<script>
AOS.init();
$(document).ready(function(){
    $('.menu-icon').click(function(){
        $(this).closest('nav').toggleClass('active');
    });
});


if ($(window).width() >= 1024) {
    $(".press-section").stick_in_parent()
    
}

</script>
</body>
</html>