<?php include("user_global.php"); ?><!DOCTYPE html>
<html>
<head>
<base href="<?php echo $base_url; ?>">
<meta name="viewport" content="width=device-width">
<meta charset="utf-8">
<link rel="icon" type="image/png" href="images/favicon.png" />
<meta charset="UTF-8">
<title>Media Coverage | CMS Info Systems</title>
    <link rel="stylesheet" href="css/grid.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css">
    
<style>
p.large-font{font-weight: 400;font-size:28px;line-height: 45px;}
.card-name{border: 1px solid #eee;padding: 30px;position: relative;background:#fff;}
.layout-2 .btn.btn-border{margin-top:0px;position: absolute;bottom: 30px;left:30px;}
.layout-2 .col-4{margin-bottom:80px;}
.layout-2 .col-4:nth-last-child(1),
.layout-2 .col-4:nth-last-child(2),
.layout-2 .col-4:nth-last-child(3){margin-bottom:0px;}
.card-name h3 {background:none;font-size: 18px;line-height:28px;}
.large-font span{font-weight:600;display:block;font-size:14px;}
#cash-management-solution .caption{background: none;}
#cash-management-solution h1 {font-size: 32px;font-weight: 300;}
#cash-management-solution .caption {padding-left:0px;left:20px;padding:120px 0 80px;}
p.large-font.caption{margin: 0 0 50px 0 !important;left: 15px;width: 98%;padding: 40px !important;}
.overlap-wrapper{position: absolute;top: -250px;}
.overlap-wrapper + .row{margin-top:100px;}
.layout-2 a:hover {background: transparent;}
.layout-2 p.sub-head{margin-bottom:0px;color: #a8a5a5;font-size:12px;}
#cash-management-solution {padding:0px;}
#cash-management-solution .wrapper{padding-bottom:140px;}
.overlay-bg:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
}
</style>
</head>
<body>
<header>
    <div class="wrapper">
        <div class="row">
            <div class="col-4">
                <a href="index.html"><img src="images/logo.jpg" alt="" title=""></a>
            </div>
            <div class="col-8">
                <nav>
                    <div class="menu-icon"><span></span></div>
                    <ul>
                        <li class="mobile-only search-input"><input type="text"></li>
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
<section id="cash-management-solution" class="layout-2" style="background: url(images/media-coverage-banner.jpg) no-repeat 0px 0px fixed;background-size: cover;">
    <div class="align-v-center banner-height overlay-bg" data-aos="fade-up">
    <div class="wrapper" style="position:relative;">
        <div class="caption" data-aos="fade-right" data-aos-delay="300">
        	<div class="breadcrumb"><a href="index.html">Home</a> > <a>Newsroom</a> > </div>
            <h1>Media Coverage</h1>
        </div>
        <div class="row">
        <?php 
			$sql = "SELECT post_title, post_slug, DATE_FORMAT(post_date, '%d %b %Y') as  post_date, post_content, article_publication
					FROM `tbl_media_press_releases` WHERE `post_type` = 0 AND `post_status` = 1
					ORDER BY STR_TO_DATE(`post_date`, '%Y-%m-%d %H:%i:%s') DESC LIMIT 0,100";
					$result = $db_object->execute_query($sql);
					$count = 1;
					while($value = mysqli_fetch_array($result))
					{
						$post_date = $value["post_date"];
						$post_title = strip_tags(stripslashes(utf8_decode($value["post_title"])));
						$article_publication = $value["article_publication"];
						$post_content = strip_tags(utf8_decode(stripcslashes($value["post_content"])));										
		?>
            <div class="col-4" data-aos="fade-up">
                <a href="<?php echo $post_content ?>" target="_blank">
                    <div class="card-name">
                        <h3><?php echo $post_title ?></h3>
                        <p class="sub-head">Date: <?php echo $post_date ?> | Publication:<?php echo $article_publication == 0 ? "NA" : $article_publication ?></p>
                        <span class="btn btn-border">
                        	<?php 
								if(strstr($post_content,".pdf"))
								{
									echo "Download PDF";	
								}else{
									echo "View Article";		
								}
							?>
                        </span>
                    </div>
                </a>
            </div>            
       <?php 
					}
	   ?>
            <!--<div class="col-4" data-aos="fade-up">
                <a href="">
                    <div class="card-name">
                        <h3>RamkumarSundaram</h3>
                        <p class="sub-head">ViceSolutions</p>
                        <span class="btn btn-border">Know More</span>
                    </div>
                </a>
            </div>-->
        </div>
    </div>
    </div>
</section>
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
<script>
AOS.init();
$(document).ready(function(){
    $('.menu-icon').click(function(){
        $(this).closest('nav').toggleClass('active');
    });
});

$(window).load(function () {if ($(window).width() > 1024) {
  var liMaxHeight = -1;
    var node;
    $("#cash-management-solution .card-name").each(function(index) {
        if ($(this).outerHeight() > liMaxHeight) {
            liMaxHeight = $(this).outerHeight();
            node = index;
        }
    });

    $('#cash-management-solution .card-name').css('height', liMaxHeight + 50 );
}
})
</script>
</body>
</html>