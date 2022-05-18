<?php include("user_global.php"); ?><!DOCTYPE html>
<html>
<head>
<base href="<?php echo $base_url; ?>">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width">
<link rel="icon" type="image/png" href="images/favicon.png" />
<title>CMS Info Systems</title>
<link rel="stylesheet" href="css/grid.css">
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css">
<script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
<style>
.layout-2 .btn.btn-border{margin-top:15px;position: absolute;bottom: 30px;left:30px;}
.card-name{border: 1px solid #eee;padding: 30px;position: relative;}
#about-cms .wrapper {margin:0 auto;width:1000px;}
.parallax-countings .wrapper {margin:0 auto;width:1000px;}
.parallax-countings p {line-height: 32px;font-size: 20px;width: 100%;}
.caption {position: relative;transform: translate(0%,0%);}
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
                        <li><a href="index.html" class="active">Home</a></li>
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
                        <li><a href="javascript:void(0);">Newsroom</a>
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
<section id="slider">
    <div id="main-slider">
        <div style="background-image:url(images/slider-1.jpg);background-position: center;" class="slide-bg">
            <div class="caption">
                <h3>We aren't in the money moving business. <br>We are in the connecting business business.</h3>
                <p>Beyond managing 53,000 plus ATMs, beyond picking up cash from 42,200 plus retail points, beyond moving money in 98% plus districts and 12,000 plus pin codes, what we really do, is enable commerce. Connecting businesses and banks and people with money is what we do.</p>
                <a href="#" class="btn btn-border">EXPLORE</a>
            </div>
        </div>
        <div style="background-image:url(images/slider-2.jpg);background-position: center;" class="slide-bg">
            <div class="caption">
                <h3>We can tell you how Automated Teller Machine became Any Time Money.</h3>
                <p>We not only automate ATM and currency management in India, our network operations and support services ensure money is readily available across all the states that we service.</p>
                <a href="atm-management-solutions.html" class="btn btn-border">EXPLORE</a>
            </div>
        </div>
        <div style="background-image:url(images/slider-3.jpg);background-position: center;" class="slide-bg">
            <div class="caption">
                <h3>We like the sound of cash registers ringing, too.</h3>
                <p>From cashiering services for top retail chains, to picking up cash from more than 34,000 merchants and banking it, we seamlessly integrate our services with our customer's business needs.</p>
                <a href="#" class="btn btn-border">EXPLORE</a>
            </div>
        </div>
        <div style="background-image:url(images/slider-4.jpg);background-position: center;" class="slide-bg">
            <div class="caption">
                <h3>From currency chests to ATMs to vaults to stores to wallets. (And back.)</h3>
                <p>We provide a range of services across each stage of the cash cycle in India and even customize services & solutions according to specific business requirements.</p>
                <a href="#" class="btn btn-border">EXPLORE</a>
            </div>
        </div>
        <div style="background-image:url(images/slider-5.jpg);background-position: center;" class="slide-bg">
            <div class="caption">
                <h3>We don't bank like our parents did. Our children won't bank like we do.</h3>
                <p>From installing ATMs to expanding the Cash Deposit Machines &amp; Recyclers base in India, we've been helping change banking as we once knew it. One feature at a time.</p>
                <a href="#" class="btn btn-border">EXPLORE</a>
            </div>
        </div>
    </div>
</section>
<section id="what-we-do" class="layout-2">
    <div class="wrapper">
        <h2>What We Do?</h2>
        <div class="row">
            <div class="col-4" data-aos="fade-up" data-aos-delay="300">
                <a href="cash-management-system.html">
                    <img src="images/cash-management.jpg" alt="" title="">
                    <div class="card-name">
                        <h3>Cash Management</h3>
                    <span class="btn btn-border">Know More</span>
                    </div>
                </a>
            </div>
            <div class="col-4" data-aos="fade-up" data-aos-delay="600">
                <a href="managed-services.html">
                    <img src="images/managed-services.jpg" alt="" title="">
                    <div class="card-name">
                        <h3>Managed Services</h3>
                    <span class="btn btn-border">Know More</span>
                    </div>
                </a>
            </div>
            <div class="col-4" data-aos="fade-up" data-aos-delay="900">
                <a href="card-solutions.html">
                    <img src="images/card-solution.jpg" alt="" title="">
                    <div class="card-name">
                        <h3>Card Solutions</h3>
                    <span class="btn btn-border">Know More</span>
                    </div>
                </a>
            </div>
        </div>
    </div>
</section>
<section id="news">
    <div class="wrapper">
        <div class="row">
            <div class="col-4">
            	<?php
					$sql = "SELECT post_title, post_slug, DATE_FORMAT(post_date, '%d %b %Y') as  post_date, post_content, article_publication
					FROM `tbl_media_press_releases` WHERE `post_type` = 1 AND `post_status` = 1 AND `is_highlighted` = 1  
					ORDER BY STR_TO_DATE(`post_date`, '%Y-%m-%d %H:%i:%s') DESC LIMIT 0,1";
					
					$result = $db_object->execute_query($sql);
					$count = 1;
					while($value = mysqli_fetch_array($result))
					{
						$post_date = $value["post_date"];
						$post_title = strip_tags(stripslashes(utf8_decode($value["post_title"])));
						$article_publication = $value["article_publication"];																						
						$post_slug = $value["post_slug"];
						
						$post_content = utf8_decode($value["post_content"]);						
						$post_content = stripslashes($post_content);						
						$post_content = strip_tags(html_entity_decode($post_content));												
						$post_content = substr(str_replace("?","'",$post_content),0,75);
						
				?>
                <a href="./press-release-detail/<?php echo $post_slug ?>">
                <div class="card card-white" data-aos="fade-up" data-aos-delay="<?php echo((200 * $count)) ?>">
                    <div class="sub-text"><?php echo $post_date ?>  /  Source: <?php echo $article_publication == 0 ? "NA" : $article_publication ?></div>
                    <h4><?php echo $post_title ?></h4>
                    <p><?php echo $post_content ?>... <span class="link-style">More</span></p>
                </div>
                    </a>
                <?php 
						$count++;
					}
				?>  
                <div class="card card-without-pad border-none find-atm" data-aos="fade-up" data-aos-delay="200">
                    <a href="cms-cash-index.html"><img src="images/cms-cash-index.jpg" alt="" title=""></a>
                </div>                                  
            </div>
            <div class="col-4">
            	<?php
					$sql = "SELECT post_title, post_slug, DATE_FORMAT(post_date, '%d %b %Y') as  post_date, post_content, article_publication
					FROM `tbl_media_press_releases` WHERE `post_type` = 1 AND `post_status` = 1 AND `is_highlighted` = 1  
					ORDER BY STR_TO_DATE(`post_date`, '%Y-%m-%d %H:%i:%s') DESC LIMIT 2,1";
					$result = $db_object->execute_query($sql);
					$count = 1;
					while($value = mysqli_fetch_array($result))
					{
						$post_date = $value["post_date"];
						$post_title = strip_tags(stripslashes(utf8_decode($value["post_title"])));
						$article_publication = $value["article_publication"];									
						$post_slug = $value["post_slug"];
						$post_content = utf8_decode($value["post_content"]);						
						$post_content = stripslashes($post_content);						
						$post_content = strip_tags(html_entity_decode($post_content));												
						$post_content = substr(str_replace("?","'",$post_content),0,75);
				?>
                <a href="./press-release-detail/<?php echo $post_slug ?>">
                <div class="card card-white" data-aos="fade-up" data-aos-delay="200">
                    <div class="sub-text"><?php echo $post_date ?>  /  Source: <?php echo $article_publication == 0 ? "NA" : $article_publication ?></div>
                    <h4><?php echo $post_title ?></h4>
                    <p><?php echo $post_content ?>... <span class="link-style">More</span></p>
                </div>
                    </a>
                    <?php 
						$count++;
					}
				?>  
                <!--<a class="card card-pink btn-style" data-aos="fade-up" data-aos-delay="400" href="./press-releases/">
                    <h4>VIEW ALL NEWS</h4>
                    <img src="images/arrow.png" alt="" title="">
                </a>-->
                <div class="card card-without-pad border-none find-atm" data-aos="fade-up" data-aos-delay="200">
                    <a href="locations.html"><img src="images/find-atm.jpg" alt="" title=""></a>
                </div>
            </div>
            <div class="col-4" id="video-carousel">
                <?php
					$sql = "SELECT post_title, post_slug, DATE_FORMAT(post_date, '%d %b %Y') as  post_date, post_content, article_publication
					FROM `tbl_media_press_releases` WHERE `post_type` = 1 AND `post_status` = 1 AND `is_highlighted` = 1  
					ORDER BY STR_TO_DATE(`post_date`, '%Y-%m-%d %H:%i:%s') DESC LIMIT 1,1";
					
					$result = $db_object->execute_query($sql);
					$count = 1;
					while($value = mysqli_fetch_array($result))
					{
						$post_date = $value["post_date"];
						$post_title = strip_tags(stripslashes(utf8_decode($value["post_title"])));
						$article_publication = $value["article_publication"];																						
						$post_slug = $value["post_slug"];
						
						$post_content = utf8_decode($value["post_content"]);						
						$post_content = stripslashes($post_content);						
						$post_content = strip_tags(html_entity_decode($post_content));												
						$post_content = substr(str_replace("?","'",$post_content),0,75);
						
				?>
                <a href="./press-release-detail/<?php echo $post_slug ?>">
                <div class="card card-white" style="margin:0px;" data-aos="fade-up" data-aos-delay="<?php echo((200 * $count)) ?>">
                    <div class="sub-text"><?php echo $post_date ?>  /  Source: <?php echo $article_publication == 0 ? "NA" : $article_publication ?></div>
                    <h4><?php echo $post_title ?></h4>
                    <p><?php echo $post_content ?>... <span class="link-style">More</span></p>
                </div>
                    </a>
                <?php 
						$count++;
					}
				?>  
                <div class="card card-without-pad" data-aos="fade-up" data-aos-delay="400">
                    <img src="images/video.jpg" alt="" title="">
                    <div class="card-caption">
                        <div class="sub-text">CEO Speaks</div>
                        <h4><a href="http://www.btvi.in/videos/watch/19155/cms--4th-in-cash-handling-globally" target="_blank">CMS: 5th in cash handling globally <span class="link-style">More</span></a></h4>
                        <h4><a href="http://www.btvi.in/videos/watch/20040/tackling-cash-crunch-in-atms" target="_blank">Tackling cash crunch in ATMs <span class="link-style">More</span></a></h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section id="about-cms" class="parallax-countings">
    <div class="wrapper">
        <div class="row">
            <div class="col-4" data-aos="fade-up" data-aos-delay="300">
                <div class="number">5th</div>
                <h4>Largest ATM Cash Management<br> Company Globally </h4>
            </div>
            <div class="col-4" id="business-point" data-aos="fade-up" data-aos-delay="600">
                <div class="number">105000</div>
                <h4>Business Points We Service </h4>
            </div>
            <div class="col-4" data-aos="fade-up" data-aos-delay="900">
                <div class="number">98.3%</div>
                <h4>Districts in India<br> Covered</h4>
            </div>
        </div>
    </div>
    <h3 data-aos="fade-up"><a href="#">About CMS <img src="images/white-arrow.png" alt="" title=""></a></h3>
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
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/bxslider/4.2.12/jquery.bxslider.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
<script src="js/custom.js"></script> 
<script>
  AOS.init();
$(document).ready(function(){
    $('.menu-icon').click(function(){
        $(this).closest('nav').toggleClass('active');
    });
    $('#main-slider').bxSlider({
        auto: true,
        controls: false,
        autoHover: true,
		pause: 7000,
        //infiniteLoop: false,
        onSliderLoad:function(){
            $('#slider .caption').animate({right:0},500);
        },
        onSlideAfter:function(){
            $('#slider .caption').animate({right:0},500);
        },
        onSlideNext:function(){
            $('#slider .caption').animate({right:-760},200);
        },
        onSlidePrev:function(){
            $('#slider .caption').animate({right:-760},200);
        },
    }); 

    /*jQuery('.bx-pager-item a').on('click',function(){
        slider.speed = 500;
        slider.startShow();
        return false;
    });*/
    
});

$(window).load(function () {
  var liMaxHeight = -1;
    var node;
    $(".card-name").each(function(index) {
        if ($(this).outerHeight() > liMaxHeight) {
            liMaxHeight = $(this).outerHeight();
            node = index;
        }
    });

    $('.card-name').css('height', liMaxHeight + 50);
})
</script>
</body>
</html>