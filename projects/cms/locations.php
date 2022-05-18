<?php include("user_global.php"); 

$sql = "SELECT * FROM `tbl_locations`";
$result = $db_object->execute_query($sql);
$count = 1;
$locdata = "";

$branch_icon = "'".$base_url."images/location_icon.png'";			
$office_icon = "'".$base_url."images/branchoffice_icon.png'";

while($value = mysqli_fetch_array($result))			
{								
	if($value["location_type"] == 0)
	{
		$locdata .= "['".str_replace("?"," - ",$value["location_title"])."',".$value["location_lat"].",".$value["location_lon"].",".$branch_icon."]".($count < mysqli_num_rows($result)? ",":"")."\n";	
	}else{
		$locdata .= "['".str_replace("?"," - ",$value["location_title"])."',".$value["location_lat"].",".$value["location_lon"].",".$office_icon."]".($count < mysqli_num_rows($result)? ",":"")."\n";
	}															
	$count++;	
}					
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width">
<meta charset="utf-8">
<link rel="icon" type="image/png" href="images/favicon.png" />
<title>Custom Google Maps Marker</title>

<link rel="stylesheet" href="css/grid.css">
<link rel="stylesheet" href="css/style.css">
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
.card-name a.email-icon{position: absolute;bottom: 30px;left: 30px;}
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
</style>
<style>
#map 
{
    width:100%;
    height: 1000px;
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
<section id="slider2" class="padT0">
  <div style="background-image:url(images/location-banner.jpg);background-position: center;background-repeat: no-repeat;background-size: cover;" class="align-v-center banner-height overlay-bg" data-aos="fade-up">
    <div class="wrapper">
      <div class="caption" data-aos="fade-right" data-aos-delay="300">
        <div class="breadcrumb"><a href="index.html">Home</a> > </div>
        <h1>Location</h1>
      </div>
    </div>
  </div>
</section>
<div class="location-icons">
<ul>
    <li><img class="size-full wp-image-1545" src="images/branchoffice_icon.png" alt="" width="40" height="32"> Regional Offices: CMS/ Securitrans</li>
    <li><img class="size-full wp-image-1545" src="images/location_icon.png" alt="" width="40" height="32"> CMS/ Securitrans/ Managed Services Branches</li>
    <li style="padding-left: 20px">* March 2019</li>
</ul>
</div>
<div id="map"></div>
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
                <li>&copy; 2010-<script>document.write(new Date().getFullYear());</script> CMS.COM. All rights reserved.</li>
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
<script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
<script type="text/javascript" src="scripts/jquery-1.9.1.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAtWRcbyppFVytWCRwoTf2dzrEFfsCKQsg&sensor=false"></script>
<!--<script src="https://maps.googleapis.com/maps/api/js?&sensor=false"></script>-->

<!--<script type="text/javascript" src="http://code.jquery.com/jquery-1.9.1.js"></script>-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> 
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script> 
<script>
AOS.init();
$(document).ready(function(){
    $('.menu-icon').click(function(){
        $(this).closest('nav').toggleClass('active');
    });
});

</script>
<script type="text/javascript">
function initialize() {
    
    //map options
    var mapOptions = {   
        zoom: 5,
        center: new google.maps.LatLng(21.7040592,77.1024902), 
        disableDefaultUI: true
    };

    // Get the HTML DOM element that will contain the map  
    var mapElement = document.getElementById('map');

    // create map using element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    setMarkers(map, officeLocations);

}

var officeLocations = [
	<?php echo trim($locdata)  ?>
];

//set and place the markers
function setMarkers(map, locations)
{
    //set global pin image    		
	
    for (var i = 0; i < locations.length; i++) {
       
        var office = locations[i];        
		var myLatLng = new google.maps.LatLng(office[1], office[2]);        
         
        var contentString = 
            '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h3 id="firstHeading" class="firstHeading">'+ office[0] + '</h3>'+			
            '<div id="bodyContent">'+ 
			'<a href="http://www.google.com/maps/?saddr=&daddr='+office[1]+','+office[2]+'" target="_blank">View Directions</a>'+
            '</div>'+
            '</div>';
		
		
		var infowindow = new google.maps.InfoWindow({content: contentString});
		
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: office[0],
			icon: office[3]			
        });
						
        google.maps.event.addListener(marker, 'click', getInfoCallback(map, contentString));
    }
}

function getInfoCallback(map, content) {
    var infowindow = new google.maps.InfoWindow({content: content});
    return function() {
            infowindow.setContent(content); 
            infowindow.open(map, this);
        };
}

$().ready(function () {
	initialize()
});

</script>
</body>
</html>