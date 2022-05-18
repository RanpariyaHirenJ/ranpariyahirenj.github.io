<?php 
	include("user_global.php"); 
	
	if(isset($_POST["username"]))
	{
	    $cptcha = gcaptecha($_POST["g-recaptcha-response"]);
		if($cptcha != 1)
		{
			$error = "Code is invalid.";
			redirect("contact.html?error=$error");
			die();
		}
		else
		{
			$username 		= $db_object->sanatize_string($_POST["username"]);
			$useremail 		= $db_object->sanatize_string($_POST["useremail"]);
			$usermobile 	= $db_object->sanatize_string($_POST["usermobile"]);
			$useraddress	= $db_object->sanatize_string($_POST["useraddress"]);
			$product		= $db_object->sanatize_string($_POST["product"]);		
			$usercomments 	= $db_object->sanatize_string($_POST["usercomments"]);
			
			if($product != ""){
				switch($product){
					case "Retail & Enterprise Solutions":
						$uto = "pankaj.jain@cms.com";
					break;
					case "ATM Cash Management Solutions":
						$uto = "sagar.chemburkar@cms.com";
					break;
					case "Card Solutions":
						$uto = "mokam.singh@cms.com";
					break;
					case "ATM & Managed Services":
						$uto = "rakesh.takoo@cms.com";
					break;
					case "To rent out space for ATMs":
						$uto = "a.chandrasekaran@cms.com";
					break;
					case "Investor's Grievances":
						$uto = "cms.ipo@cms.com";
					break;
					case "Grievance Redressal / Vigilance Officer":
						$uto = "basant.jain2011@gmail.com";
					break;
				}
			}
			
			$subject 	= "Online Enquiry from $username";
			$body 		= "Name: $username<br/><br/>Email: $useremail<br/><br/>Mobile: $usermobile<br/><br/>Product: $product<br/><br/>Address: $useraddress<br/><br/>Comments: $usercomments<br>$uto";
			$to 		= "vighnesh@intermind.in,hiren@intemind.in";
			//$to 		= "contact@cms.com";	
			$from 		= "enquiry@cms.com";
			
			send_email($to,$from,$subject,$body);	
			
			$error = "Thank you for placing your enquiry.\\r\\nWe will contact you shortly.";
			
			redirect("contact.html?error=$error");
			die();
		}
	}
?><!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width">
<meta charset="utf-8">
<link rel="icon" type="image/png" href="images/favicon.png" />
<title>Contact | CMS Info Systems</title>
<link rel="stylesheet" href="css/grid.css">
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css">
<style>
p.large-font{font-weight: 400;font-size:28px;line-height: 45px;}
.card-name{border: 1px solid #eee;padding: 30px;position: relative;background:#fff;}
.layout-2 .btn.btn-border{margin-top:15px;position: absolute;bottom: 30px;left:30px;}
.layout-2 .col-3{margin-bottom:80px;}
.layout-2 .col-3:nth-last-child(1),
.layout-2 .col-3:nth-last-child(2),
.layout-2 .col-3:nth-last-child(3),
.layout-2 .col-3:nth-last-child(4){margin-bottom:0px;}
.card-name h3 {background:none;font-size: 18px;}
.large-font span{font-weight:600;display:block;font-size:14px;}
#slider2 .caption{background: none;}
.overlay-bg{position:relative;}
.overlay-bg:before {content: "";position: absolute;top: 0;left: 0;background: rgba(0, 0, 0, 0.5);width: 100%;height: 100%;}
.banner-height {min-height: 300px;}
#slider2 h1 {font-size: 32px;font-weight: 300;}
.card-name a{padding-left: 35px;margin-bottom: 10px;}
.layout-2 a.email-icon:hover {background: url(images/email-icon.png) 0 2px no-repeat;text-decoration: underline;background-size: 20px;}

.layout-2 a.phone-icon {background-size: 18px;color:#696969}
.layout-2 a.phone-icon:hover {background: url(images/phone-icon.png) 0 2px no-repeat;text-decoration: underline;background-size: 18px;}

.layout-2 a.phoneicon {background-size: 18px;color:#696969}
.layout-2 a.phoneicon:hover {background: url(images/tellicon.png) 0 2px no-repeat;text-decoration: underline;background-size: 18px;}

.layout-2 .addressPin {padding-left: 35px;}

#cash-management-solution h3 {font-weight: 400;margin: 0 0 10px;font-family: 'Rubik', sans-serif;font-size: 22px;position: relative;padding-bottom: 20px;}
#cash-management-solution p.sub-heading {color: #080808;font-size: 20px;margin-bottom: 0px;}
#cash-management-solution p.designation{font-size:14px;line-height:22px;}
.layout-2 .addressPin{margin-top:5px;}
.layout-2 a.phoneicon{margin-top:5px;}

#cash-management-solution h3:before {content: "";height: 1px;background: #eee;position: absolute;bottom: 0;left: -30px;right: -30px;}

#cash-management-solution a{display:none;}
</style>
<script src="admin/js/js_class.js" type="text/javascript"></script>
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
            <li><a href="javascript:void(0);">Newsroom</a>
              <ul>
                <li><a href="press-releases.html">Press Releases</a></li>
                <li><a href="media-coverage.html">Media Coverage</a></li>
              </ul>
            </li>
            <li><a href="careers.html">Careers</a></li>
            <li><a href="javascript:void(0);" class="active">Contact Us</a>
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
  <div style="background-image:url(images/contact-banner.jpg);background-position: center;background-repeat: no-repeat;background-size: cover;" class="align-v-center banner-height overlay-bg" data-aos="fade-up">
    <div class="wrapper">
      <div class="caption" data-aos="fade-right" data-aos-delay="300">
        <div class="breadcrumb"><a href="index.html">Home</a> > </div>
        <h1>Contact</h1>
      </div>
    </div>
  </div>
</section>
<section id="about" data-aos="fade-up">
  <div class="wrapper">
    <div class="row txt">
      <div class="col-12">
        <div class="contect-details wow animated fadeInLeft" data-wow-delay="0.2s" data-wow-offset="50">
          <div class="middle-div">
            <div class="address-cntr">
              <div class="">
                <h2>CMS Info Systems Limited</h2>
                <p class="addressPin">Silver Metropolis, 11th Floor, <br>
                  Jay Coach Compound, Off. <br>
                  Western Express Highway, <br>
                  Goregaon East, Mumbai - 400 063</p>
                <p class="phone-icon">022 48823100/ 101/ 102/ 103/ 104</p>
                <p>CIN: U45200MH2008PLC180479</p>
              </div>
            </div>
          </div>
        </div>
        <div class="enquiry-form wow animated fadeInRight" data-wow-delay="0.2s" data-wow-offset="50">
          <div class="form-fields">
            <h2 class="mb0">Make an enquiry</h2>
            <p>If you have a query, do fill out the form below.
You can also mail us directly at <a href="mailto:contact@cms.com" class="link-style">contact@cms.com</a>. Thank you for your interest in CMS Info Systems Ltd.</p>
            <form action="contact.html" name="send_email" id="send_email" method="post" enctype="application/x-www-form-urlencoded" onSubmit="return form_validate_jquery('#send_email')">
              <ul>
                <li>
                  <input type="text" name="username" title=" YOUR NAME" placeholder="NAME" validation="text">
                </li>
                <li>
                  <input type="text" name="useremail" title=" YOUR EMAIL" placeholder="EMAIL *" validation="email">
                </li>
                <li>
                  <input type="text" name="usermobile" title=" YOUR PHONE NO" placeholder="PHONE *" validation="text">
                </li>
                <li>
                  <select name="product" validation="text">
                    <option value=""> BUSINESS ENQUIRIES * </option>
                    <option value="Retail & Enterprise Solutions">Retail & Enterprise Solutions</option>
                    <option value="ATM Cash Management Solutions">ATM Cash Management Solutions</option>
                    <option value="Card Solutions">Card Solutions</option>
                    <option value="ATM & Managed Services">ATM & Managed Services</option>
                    <option value="To rent out space for ATMs">To rent out space for ATMs</option>
                    <option value="Investor's Grievances">Investor's Grievances</option>
                    <option value="Grievance Redressal / Vigilance Officer">Grievance Redressal / Vigilance Officer</option>
                  </select>
                </li>
                <li>
                  <input type="text"  name="useraddress" title=" YOUR ADDRESS" placeholder="ADDRESS *" validation="text">
                </li>
                <li>
                  <textarea  title=" DESCRIPTION" name="usercomments" placeholder="DESCRIPTION"></textarea>
                </li>
                <li>
                  <div class="g-recaptcha" data-sitekey="6LfmOqcUAAAAAKPxsRcMycHzeozLDxA4pueomZB8"></div>
                </li>
              </ul>
              <div class="clear"></div>
              <div class="contact-sub">
                <input class="btn btn-border" type="submit" name="action" value="Submit Now">
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</section>
<section id="cash-management-solution" class="layout-2" style="background:#f9f9f9;background: url(images/news-bg.jpg) 0 0 no-repeat;background-size: cover;">
  <div class="wrapper" style="position:relative;">
    <h2 style="margin-left:10px;">Business Enquiries</h2>
    <div class="row">
      <div class="col-3 level1" data-aos="fade-up">
        <div class="card-name">
          <h3>Retail & Enterprise Solutions</h3>
          <p class="sub-heading">Pankaj Jain</p>
          <p class="designation">Director</p>
          <a href="mailto:pankaj.jain@cms.com" class="email-icon link-style">pankaj.jain@cms.com</a>
        </div>
      </div>
      <div class="col-3 level1" data-aos="fade-up">
        <div class="card-name">
          <h3>ATM Cash Management Solutions</h3>
          <p class="sub-heading">Sagar Chemburkar</p>
          <p class="designation">Associate Director</p>
          <a href="mailto:sagar.chemburkar@cms.com" class="email-icon link-style">sagar.chemburkar@cms.com</a>
        </div>
      </div>
      <div class="col-3 level1" data-aos="fade-up">
        <div class="card-name">
          <h3>Card Solutions</h3>
          <p class="sub-heading">Mokam Singh</p>
          <p class="designation">Senior Director</p>
          <a href="mailto:mokam.singh@cms.com" class="email-icon link-style">mokam.singh@cms.com</a>
        </div>
      </div>
      <div class="col-3 level1" data-aos="fade-up">
        <div class="card-name">
          <h3>ATM & Managed Services</h3>
          <p class="sub-heading">Rakesh Takoo</p>
          <p class="designation">Associate Director</p>
          <a href="mailto:rakesh.takoo@cms.com" class="email-icon link-style">rakesh.takoo@cms.com</a>
        </div>
      </div>
      
      
      <div class="col-3 level2" data-aos="fade-up">
        <div class="card-name">
          <h3>To rent out space for ATMs</h3>
          <p class="sub-heading">A Chandrasekhar</p>
          <a href="mailto:a.chandrasekaran@cms.com" class="email-icon link-style">a.chandrasekaran@cms.com</a>
        </div>
      </div>
      <div class="col-3 level2" data-aos="fade-up">
        <div class="card-name">
          <h3>Grievance Redressal / Vigilance Officer</h3>
          <p class="sub-heading">Mr. Basant Jain</p>
          <p class="addressPin">Independent Chartered Accountant 601, Dalamal Chambers, New Marine Lines, Mumbai-20</p>
          <a href="mailto:basant.jain2011@gmail.com" class="email-icon link-style">basant.jain2011@gmail.com</a>
        </div>
      </div>
      <div class="col-3 level2" data-aos="fade-up">
        <div class="card-name">
          <h3>Investor's Grievances</h3>
          <p class="sub-heading">Praveen Soni</p>
          <p class="addressPin">Company Secretary and Compliance Officer</p>
          <a href="tel:022 48823100" class="phoneicon">022 48823100</a>
          <a href="mailto:cms.ipo@cms.com" class="email-icon link-style">cms.ipo@cms.com</a>
        </div>
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
          <ul>
            <li>&copy; 2010-2019 CMS.COM. All rights reserved.</li>
            <li>CIN: U45200MH2008PLC180479</li>
            <li><a href="#">Sitemap</a>&nbsp;<a href="#">Privacy</a></li>
          </ul>
          <ul id="social">
            <li><a href="#"><img src="images/fb.png"></a></li>
            <li><a href="#"><img src="images/linkdin.png"></a></li>
            <li><a href="#"><img src="images/twitter.png"></a></li>
            <li><a href="#"><img src="images/instagram.png"></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>
<script type="text/javascript" src="https://code.jquery.com/jquery-1.9.1.js"></script> 
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script> 
<script src="https://www.google.com/recaptcha/api.js" async defer></script>
<script>
AOS.init();
$(document).ready(function(){
    $('.menu-icon').click(function(){
        $(this).closest('nav').toggleClass('active');
    });
});


$(window).load(function () {
  var liMaxHeight = -1;
    var node;
    $("#cash-management-solution .level1 .card-name").each(function(index) {
        if ($(this).outerHeight() > liMaxHeight) {
            liMaxHeight = $(this).outerHeight();
            node = index;
        }
    });

    $('#cash-management-solution .level1 .card-name').css('height', liMaxHeight );
})

$(window).load(function () {
  var liMaxHeight = -1;
    var node;
    $("#cash-management-solution .level2 .card-name").each(function(index) {
        if ($(this).outerHeight() > liMaxHeight) {
            liMaxHeight = $(this).outerHeight();
            node = index;
        }
    });

    $('#cash-management-solution .level2 .card-name').css('height', liMaxHeight );
})

</script>
<?php 
  if(isset($_REQUEST["error"]))
  {
  ?>
	<script type="text/javascript">
		alert('<?php echo $_REQUEST["error"] ?>');   
    </script>
  <?php 
  }
  ?>
</body>
</html>