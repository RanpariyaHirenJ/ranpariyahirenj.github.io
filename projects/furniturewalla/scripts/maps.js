function init_map(){ var myOptions={zoom:17,scrollwheel: false, center: new google.maps.LatLng (18.995872,72.819038), 
mapTypeId: google.maps.MapTypeId.ROADMAP}; map = new google.maps.Map (document.getElementById("gmap_canvas"), myOptions);
marker = new google.maps.Marker({map: map, position: new google.maps.LatLng (18.995872,72.819038)}); 
infowindow = new google.maps.InfoWindow({content:"<span style='height:auto !important; display:block; white-space:nowrap; overflow:hidden !important;'><strong style='font-weight:400; font-size:20px; margin-bottom:10px; text-align:left; display:block'>Furniturewalla</strong> 55, Dr. E Moses Road, Near<br> Four Seasons Hotel, Worli,<br> Mumbai-400 018.</span>" }); 
google.maps.event.addListener (marker, "click", function(){ infowindow.open(map,marker);});} 
google.maps.event.addDomListener (window, "load", init_map);

function init_map2(){ var myOptions={zoom:17,scrollwheel: false, center: new google.maps.LatLng (28.491981,77.142308), 
mapTypeId: google.maps.MapTypeId.ROADMAP}; map1 = new google.maps.Map (document.getElementById("gmap_canvas2"), myOptions);
marker1 = new google.maps.Marker({map: map1, position: new google.maps.LatLng (28.491981,77.142308)}); 
infowindow1 = new google.maps.InfoWindow({content:"<span style='height:auto !important; display:block; white-space:nowrap; overflow:hidden !important;'><strong style='font-weight:400; font-size:20px; margin-bottom:10px; text-align:left; display:block'>Furniturewalla</strong> 416, Mehrauli-Gurgaon Road,<br> Ghitorni (Next to Hotel Fortune Park),<br> New Delhi-110030</span>" }); 
google.maps.event.addListener (marker1, "click", function(){ infowindow1.open(map1,marker1);}); } 
google.maps.event.addDomListener (window, "load", init_map2);

function init_map3(){ var myOptions={zoom:17,scrollwheel: false, center: new google.maps.LatLng (12.975630,77.647003), 
mapTypeId: google.maps.MapTypeId.ROADMAP}; map2 = new google.maps.Map (document.getElementById("gmap_canvas3"), myOptions);
marker2 = new google.maps.Marker({map: map2, position: new google.maps.LatLng (12.975630,77.647003)}); 
infowindow2 = new google.maps.InfoWindow({content:"<span style='height:auto !important; display:block; white-space:nowrap; overflow:hidden !important;'><strong style='font-weight:400; font-size:20px; margin-bottom:10px; text-align:left; display:block'>Furniturewalla</strong> No.2, Invenger Towers,<br> 80 Feet Road, <br>Indira Nagar opp Amway, <br>Bengaluru - 560038</span>" }); 
google.maps.event.addListener (marker2, "click", function(){ infowindow2.open(map2,marker2);}); } 
google.maps.event.addDomListener (window, "load", init_map3);

function init_map4(){ var myOptions={zoom:16,scrollwheel: false, center: new google.maps.LatLng (19.227394,72.850320), 
mapTypeId: google.maps.MapTypeId.ROADMAP}; map3 = new google.maps.Map (document.getElementById("gmap_canvas4"), myOptions);
marker3 = new google.maps.Marker({map: map3, position: new google.maps.LatLng (19.227394,72.850320)}); 
infowindow3 = new google.maps.InfoWindow({content:"<span style='height:auto !important; display:block; white-space:nowrap; overflow:hidden !important;'><strong style='font-weight:400; font-size:20px; margin-bottom:10px; text-align:left; display:block'>Furniturewalla</strong> 55, Dr. E Moses Road, Near<br> Four Seasons Hotel, Worli,<br> Mumbai-400 018.</span>" }); 
google.maps.event.addListener (marker3, "click", function(){ infowindow3.open(map3,marker3);}); } 
google.maps.event.addDomListener (window, "load", init_map4);

function init_map5(){ var myOptions={zoom:17,scrollwheel: false, center: new google.maps.LatLng (17.407602,78.440166), 
mapTypeId: google.maps.MapTypeId.ROADMAP}; map4 = new google.maps.Map (document.getElementById("gmap_canvas5"), myOptions);
marker4 = new google.maps.Marker({map: map4, position: new google.maps.LatLng (17.407602,78.440166)}); 
infowindow4 = new google.maps.InfoWindow({content:"<span style='height:auto !important; display:block; white-space:nowrap; overflow:hidden !important;'><strong style='font-weight:400; font-size:20px; margin-bottom:10px; text-align:left; display:block'>Furniturewalla</strong> LAXMI CYBER CENTRE, <br>ROAD NO 12, <br>BANJARA HILLS, <br>HYDERABAD-500034</span>" }); 
google.maps.event.addListener (marker4, "click", function(){ infowindow4.open(map4,marker4);}); } 
google.maps.event.addDomListener (window, "load", init_map5);