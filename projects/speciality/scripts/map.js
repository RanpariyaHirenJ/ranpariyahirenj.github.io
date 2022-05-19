
$(function () {
	function init_map() {
    var locations = [
      ['<div class="marker-info-win">' + '<div class="marker-inner-win"><span class="info-content">' + 
	  //'<h2 class="marker-heading"></h2>' + '<span>' +
	  'B/25, 4th Floor, Morya Landmark I, <br>Veera Industrial Estate, Off New Link Road, <br>Andheri West, Mumbai 400 053.' + '</span>' + 
	  '</div></div>', 19.1405479,72.8327269]
    ]; 
	
    var map = new google.maps.Map(document.getElementById('map'), {		
      zoom: 15,
	 //styles: [{"stylers":[{"hue":"#1d2c4d"},{"invert_lightness":true},{"saturation":-100},{"lightness":33},{"gamma":0.5}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#2D333C"}]}],
	  styles:[
    			{"featureType": "administrative","elementType": "geometry.fill","stylers": [{"hue": "#5500ff"}]},
   				{"featureType": "administrative","elementType": "geometry.stroke","stylers": [{"hue": "#00ff1c"}]},
				{"featureType": "administrative","elementType": "labels.text.fill","stylers": [{"color": "#6195a0"}]},
				{"featureType": "administrative.province","elementType": "geometry.stroke","stylers": [{"visibility": "off"}]},
				{"featureType": "landscape","elementType": "geometry","stylers": [{"lightness": "0"},{"saturation": "0"},{"color": "#f5f5f2"},{"gamma": "1"}]},
				{"featureType": "landscape.man_made","elementType": "all","stylers": [{"lightness": "-3"},{"gamma": "1.00"}]},
				{"featureType": "landscape.natural.landcover","elementType": "geometry.stroke","stylers": [{"weight": "3.83"}]},
				{"featureType": "landscape.natural.landcover","elementType": "labels.text.fill","stylers": [{"hue": "#07ff00"}]},
				{"featureType": "landscape.natural.terrain","elementType": "all","stylers": [{"visibility": "off"}]},
				{"featureType": "poi","elementType": "all","stylers": [{"visibility": "off"}]},
				{"featureType": "poi.park","elementType": "geometry.fill","stylers": [{"color": "#bae5ce"},{"visibility": "on"}]},
				{"featureType": "road","elementType": "all","stylers": [{"saturation": -100},{"lightness": 45},{"visibility": "simplified"}]},
				{"featureType": "road.highway","elementType": "all","stylers": [{"visibility": "simplified"}]},
				{"featureType": "road.highway","elementType": "geometry.fill","stylers": [{"color": "#dbdbdb"},{"visibility": "simplified"}]},
				{"featureType": "road.highway","elementType": "labels.text","stylers": [{"color": "#4e4e4e"}]},
				{"featureType": "road.arterial","elementType": "labels.text.fill","stylers": [{"color": "#787878"}]},
				{"featureType": "road.arterial","elementType": "labels.icon","stylers": [{"visibility": "off"}]},
				{"featureType": "transit","elementType": "all","stylers": [{"visibility": "simplified"}]},
				{"featureType": "transit.station.airport","elementType": "labels.icon","stylers": [{"hue": "#0a00ff"},{"saturation": "-77"},{"gamma": "0.57"},{"lightness": "0"}]},
				{"featureType": "transit.station.rail","elementType": "labels.text.fill","stylers": [{"color": "#43321e"}]},
				{"featureType": "transit.station.rail","elementType": "labels.icon","stylers": [{"hue": "#ff6c00"},{"lightness": "4"},{"gamma": "0.75"},{"saturation": "-68"}]},
				{"featureType": "water","elementType": "all","stylers": [{"color": "#eaf6f8"},{"visibility": "on"}]},
				{"featureType": "water","elementType": "geometry.fill","stylers": [{"color": "#c7eced"}]},
				{"featureType": "water","elementType": "labels.text.fill","stylers": [{"lightness": "-49"},{"saturation": "-53"},{"gamma": "0.79"}]}
			],
	  
	   /*[
				  {"elementType": "geometry","stylers": [{"color": "#1d2c4d"}]},
				  {"elementType": "labels.text.fill","stylers": [{"color": "#8ec3b9"}]},
				  {"elementType": "labels.text.stroke","stylers": [{"color": "#1a3646"}]},
				  {"featureType": "administrative.country","elementType": "geometry.stroke","stylers": [{"color": "#4b6878"}]},
				  //{"featureType": "administrative.land_parcel","elementType": "labels","stylers": [{"visibility": "off"}]},				  
				  {"featureType": "administrative.land_parcel","elementType": "labels.text.fill","stylers": [{"color": "#64779e"}]},
				  {"featureType": "administrative.province","elementType": "geometry.stroke","stylers": [{"color": "#4b6878"}]},
				  {"featureType": "landscape.man_made","elementType": "geometry.stroke","stylers": [{"color": "#334e87"}]},
				  {"featureType": "landscape.natural","elementType": "geometry","stylers": [{"color": "#023e58"}]},
				  {"featureType": "poi","elementType": "geometry","stylers": [{"color": "#283d6a"}]},
				 // {"featureType": "poi","elementType": "labels.text","stylers": [{"visibility": "off"}]},
				  {"featureType": "poi","elementType": "labels.text.fill","stylers": [{"color": "#6f9ba5"}]},
				  {"featureType": "poi","elementType": "labels.text.stroke","stylers": [{"color": "#1d2c4d"}]},
				  //{"featureType": "poi.business","stylers": [{"visibility": "off"}]},
				  {"featureType": "poi.park","elementType": "geometry.fill","stylers": [{"color": "#023e58"}]},
				 // {"featureType": "poi.park","elementType": "labels.text","stylers": [{"visibility": "off"}]},
				  {"featureType": "poi.park","elementType": "labels.text.fill","stylers": [{"color": "#3C7680"}]},
				  {"featureType": "road","elementType": "geometry","stylers": [{"color": "#304a7d"}]},
				  {"featureType": "road","elementType": "labels.text.fill","stylers": [{"color": "#98a5be"}]},
				  {"featureType": "road","elementType": "labels.text.stroke","stylers": [{"color": "#1d2c4d"}]},
				 // {"featureType": "road.arterial","elementType": "labels","stylers": [{"visibility": "off"}]},
				  {"featureType": "road.highway","elementType": "geometry","stylers": [{"color": "#2c6675"}]},
				  {"featureType": "road.highway","elementType": "geometry.stroke","stylers": [{"color": "#255763"}]},
				  ///{"featureType": "road.highway","elementType": "labels","stylers": [{"visibility": "off"}]},
				  {"featureType": "road.highway","elementType": "labels.text.fill","stylers": [{"color": "#b0d5ce"}]},
				  {"featureType": "road.highway","elementType": "labels.text.stroke","stylers": [{"color": "#023e58"}]},
				  //{"featureType": "road.local","stylers": [{"visibility": "off"}]},
				  //{"featureType": "road.local","elementType": "labels","stylers": [{"visibility": "off"}]},
				  {"featureType": "transit","elementType": "labels.text.fill","stylers": [{"color": "#98a5be"}]},
				  {"featureType": "transit","elementType": "labels.text.stroke","stylers": [{"color": "#1d2c4d"}]},
				  {"featureType": "transit.line","elementType": "geometry.fill","stylers": [{"color": "#283d6a"}]},
				  {"featureType": "transit.station","elementType": "geometry","stylers": [{"color": "#3a4762"}]},
				  {"featureType": "water","elementType": "geometry","stylers": [{"color": "#0e1626"}]},
				  {"featureType": "water","elementType": "labels.text.fill","stylers": [{"color": "#4e6d70"}]},
			],*/
      center: new google.maps.LatLng(19.1405479,72.8327269),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++){
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        icon: 'images/map-pin.png',
      });
	  infowindow.setContent(locations[i][0]);
	  infowindow.open(map, marker);
	   marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
    }
	
}
google.maps.event.addDomListener(window, "load", init_map);
google.maps.event.addDomListener(window, "resize", init_map);

});

$(function () {
function init_map() {
    var locations = [
      ['<div class="marker-info-win">' + '<div class="marker-inner-win"><span class="info-content">' + 
	  '<h2 class="marker-heading">Registered Office</h2>' + '<span>' +
	  'Uniworth House, <br>3A Gurusaday Road, <br>Kolkata 700 019' + '</span>' + 
	  '</div></div>', 22.5370179,88.3594414]
    ]; 
	
    var map = new google.maps.Map(document.getElementById('map-registered-office'), {		
      zoom: 15,
	  styles:[
    			{"featureType": "administrative","elementType": "geometry.fill","stylers": [{"hue": "#5500ff"}]},
   				{"featureType": "administrative","elementType": "geometry.stroke","stylers": [{"hue": "#00ff1c"}]},
				{"featureType": "administrative","elementType": "labels.text.fill","stylers": [{"color": "#6195a0"}]},
				{"featureType": "administrative.province","elementType": "geometry.stroke","stylers": [{"visibility": "off"}]},
				{"featureType": "landscape","elementType": "geometry","stylers": [{"lightness": "0"},{"saturation": "0"},{"color": "#f5f5f2"},{"gamma": "1"}]},
				{"featureType": "landscape.man_made","elementType": "all","stylers": [{"lightness": "-3"},{"gamma": "1.00"}]},
				{"featureType": "landscape.natural.landcover","elementType": "geometry.stroke","stylers": [{"weight": "3.83"}]},
				{"featureType": "landscape.natural.landcover","elementType": "labels.text.fill","stylers": [{"hue": "#07ff00"}]},
				{"featureType": "landscape.natural.terrain","elementType": "all","stylers": [{"visibility": "off"}]},
				{"featureType": "poi","elementType": "all","stylers": [{"visibility": "off"}]},
				{"featureType": "poi.park","elementType": "geometry.fill","stylers": [{"color": "#bae5ce"},{"visibility": "on"}]},
				{"featureType": "road","elementType": "all","stylers": [{"saturation": -100},{"lightness": 45},{"visibility": "simplified"}]},
				{"featureType": "road.highway","elementType": "all","stylers": [{"visibility": "simplified"}]},
				{"featureType": "road.highway","elementType": "geometry.fill","stylers": [{"color": "#dbdbdb"},{"visibility": "simplified"}]},
				{"featureType": "road.highway","elementType": "labels.text","stylers": [{"color": "#4e4e4e"}]},
				{"featureType": "road.arterial","elementType": "labels.text.fill","stylers": [{"color": "#787878"}]},
				{"featureType": "road.arterial","elementType": "labels.icon","stylers": [{"visibility": "off"}]},
				{"featureType": "transit","elementType": "all","stylers": [{"visibility": "simplified"}]},
				{"featureType": "transit.station.airport","elementType": "labels.icon","stylers": [{"hue": "#0a00ff"},{"saturation": "-77"},{"gamma": "0.57"},{"lightness": "0"}]},
				{"featureType": "transit.station.rail","elementType": "labels.text.fill","stylers": [{"color": "#43321e"}]},
				{"featureType": "transit.station.rail","elementType": "labels.icon","stylers": [{"hue": "#ff6c00"},{"lightness": "4"},{"gamma": "0.75"},{"saturation": "-68"}]},
				{"featureType": "water","elementType": "all","stylers": [{"color": "#eaf6f8"},{"visibility": "on"}]},
				{"featureType": "water","elementType": "geometry.fill","stylers": [{"color": "#c7eced"}]},
				{"featureType": "water","elementType": "labels.text.fill","stylers": [{"lightness": "-49"},{"saturation": "-53"},{"gamma": "0.79"}]}
			],
      center: new google.maps.LatLng(22.5370479,88.3585414),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++){
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        icon: 'images/map-pin.png',
      });
	  infowindow.setContent(locations[i][0]);
	  infowindow.open(map, marker);
	   marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
    }
	
}
google.maps.event.addDomListener(window, "load", init_map);
google.maps.event.addDomListener(window, "resize", init_map);
});

$(function () {
function init_map() {
    var locations = [
      ['<div class="marker-info-win">' + '<div class="marker-inner-win"><span class="info-content">' + 
	  '<h2 class="marker-heading">Corporate Office</h2>' + '<span>' +
	  'B/25, 4th Floor, Morya Landmark I, <br>Veera Industrial Estate, Off New Link Road, <br>Andheri West, Mumbai 400 053.' + '</span>' + 
	  '</div></div>', 19.1405479,72.8327269]
    ]; 
	
    var map = new google.maps.Map(document.getElementById('map-corporate-office'), {		
      zoom: 15,
	  styles:[
    			{"featureType": "administrative","elementType": "geometry.fill","stylers": [{"hue": "#5500ff"}]},
   				{"featureType": "administrative","elementType": "geometry.stroke","stylers": [{"hue": "#00ff1c"}]},
				{"featureType": "administrative","elementType": "labels.text.fill","stylers": [{"color": "#6195a0"}]},
				{"featureType": "administrative.province","elementType": "geometry.stroke","stylers": [{"visibility": "off"}]},
				{"featureType": "landscape","elementType": "geometry","stylers": [{"lightness": "0"},{"saturation": "0"},{"color": "#f5f5f2"},{"gamma": "1"}]},
				{"featureType": "landscape.man_made","elementType": "all","stylers": [{"lightness": "-3"},{"gamma": "1.00"}]},
				{"featureType": "landscape.natural.landcover","elementType": "geometry.stroke","stylers": [{"weight": "3.83"}]},
				{"featureType": "landscape.natural.landcover","elementType": "labels.text.fill","stylers": [{"hue": "#07ff00"}]},
				{"featureType": "landscape.natural.terrain","elementType": "all","stylers": [{"visibility": "off"}]},
				{"featureType": "poi","elementType": "all","stylers": [{"visibility": "off"}]},
				{"featureType": "poi.park","elementType": "geometry.fill","stylers": [{"color": "#bae5ce"},{"visibility": "on"}]},
				{"featureType": "road","elementType": "all","stylers": [{"saturation": -100},{"lightness": 45},{"visibility": "simplified"}]},
				{"featureType": "road.highway","elementType": "all","stylers": [{"visibility": "simplified"}]},
				{"featureType": "road.highway","elementType": "geometry.fill","stylers": [{"color": "#dbdbdb"},{"visibility": "simplified"}]},
				{"featureType": "road.highway","elementType": "labels.text","stylers": [{"color": "#4e4e4e"}]},
				{"featureType": "road.arterial","elementType": "labels.text.fill","stylers": [{"color": "#787878"}]},
				{"featureType": "road.arterial","elementType": "labels.icon","stylers": [{"visibility": "off"}]},
				{"featureType": "transit","elementType": "all","stylers": [{"visibility": "simplified"}]},
				{"featureType": "transit.station.airport","elementType": "labels.icon","stylers": [{"hue": "#0a00ff"},{"saturation": "-77"},{"gamma": "0.57"},{"lightness": "0"}]},
				{"featureType": "transit.station.rail","elementType": "labels.text.fill","stylers": [{"color": "#43321e"}]},
				{"featureType": "transit.station.rail","elementType": "labels.icon","stylers": [{"hue": "#ff6c00"},{"lightness": "4"},{"gamma": "0.75"},{"saturation": "-68"}]},
				{"featureType": "water","elementType": "all","stylers": [{"color": "#eaf6f8"},{"visibility": "on"}]},
				{"featureType": "water","elementType": "geometry.fill","stylers": [{"color": "#c7eced"}]},
				{"featureType": "water","elementType": "labels.text.fill","stylers": [{"lightness": "-49"},{"saturation": "-53"},{"gamma": "0.79"}]}
			],
      center: new google.maps.LatLng(19.1405479,72.8325269),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++){
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        icon: 'images/map-pin.png',
      });
	  infowindow.setContent(locations[i][0]);
	  infowindow.open(map, marker);
	   marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
    }
	
}
google.maps.event.addDomListener(window, "load", init_map);
google.maps.event.addDomListener(window, "resize", init_map);
});


$(function () {
function init_map() {
    var locations = [
      ['<div class="marker-info-win">' + '<div class="marker-inner-win"><span class="info-content">' + 
	  '<h2 class="marker-heading">Complience Matters</h2>' + '<span>' +
	  '</div></div>', 19.110593,73.017341]
    ]; 
	
    var map = new google.maps.Map(document.getElementById('map-complience-matters'), {		
      zoom: 15,
	  styles:[
    			{"featureType": "administrative","elementType": "geometry.fill","stylers": [{"hue": "#5500ff"}]},
   				{"featureType": "administrative","elementType": "geometry.stroke","stylers": [{"hue": "#00ff1c"}]},
				{"featureType": "administrative","elementType": "labels.text.fill","stylers": [{"color": "#6195a0"}]},
				{"featureType": "administrative.province","elementType": "geometry.stroke","stylers": [{"visibility": "off"}]},
				{"featureType": "landscape","elementType": "geometry","stylers": [{"lightness": "0"},{"saturation": "0"},{"color": "#f5f5f2"},{"gamma": "1"}]},
				{"featureType": "landscape.man_made","elementType": "all","stylers": [{"lightness": "-3"},{"gamma": "1.00"}]},
				{"featureType": "landscape.natural.landcover","elementType": "geometry.stroke","stylers": [{"weight": "3.83"}]},
				{"featureType": "landscape.natural.landcover","elementType": "labels.text.fill","stylers": [{"hue": "#07ff00"}]},
				{"featureType": "landscape.natural.terrain","elementType": "all","stylers": [{"visibility": "off"}]},
				{"featureType": "poi","elementType": "all","stylers": [{"visibility": "off"}]},
				{"featureType": "poi.park","elementType": "geometry.fill","stylers": [{"color": "#bae5ce"},{"visibility": "on"}]},
				{"featureType": "road","elementType": "all","stylers": [{"saturation": -100},{"lightness": 45},{"visibility": "simplified"}]},
				{"featureType": "road.highway","elementType": "all","stylers": [{"visibility": "simplified"}]},
				{"featureType": "road.highway","elementType": "geometry.fill","stylers": [{"color": "#dbdbdb"},{"visibility": "simplified"}]},
				{"featureType": "road.highway","elementType": "labels.text","stylers": [{"color": "#4e4e4e"}]},
				{"featureType": "road.arterial","elementType": "labels.text.fill","stylers": [{"color": "#787878"}]},
				{"featureType": "road.arterial","elementType": "labels.icon","stylers": [{"visibility": "off"}]},
				{"featureType": "transit","elementType": "all","stylers": [{"visibility": "simplified"}]},
				{"featureType": "transit.station.airport","elementType": "labels.icon","stylers": [{"hue": "#0a00ff"},{"saturation": "-77"},{"gamma": "0.57"},{"lightness": "0"}]},
				{"featureType": "transit.station.rail","elementType": "labels.text.fill","stylers": [{"color": "#43321e"}]},
				{"featureType": "transit.station.rail","elementType": "labels.icon","stylers": [{"hue": "#ff6c00"},{"lightness": "4"},{"gamma": "0.75"},{"saturation": "-68"}]},
				{"featureType": "water","elementType": "all","stylers": [{"color": "#eaf6f8"},{"visibility": "on"}]},
				{"featureType": "water","elementType": "geometry.fill","stylers": [{"color": "#c7eced"}]},
				{"featureType": "water","elementType": "labels.text.fill","stylers": [{"lightness": "-49"},{"saturation": "-53"},{"gamma": "0.79"}]}
			],
      center: new google.maps.LatLng(19.110593,73.017341),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++){
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        icon: 'images/map-pin.png',
      });
	  infowindow.setContent(locations[i][0]);
	  infowindow.open(map, marker);
	   marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
    }
	
}
google.maps.event.addDomListener(window, "load", init_map);
google.maps.event.addDomListener(window, "resize", init_map);
});


$(function () {
function init_map() {
    var locations = [
      ['<div class="marker-info-win">' + '<div class="marker-inner-win"><span class="info-content">' + 
	  '<h2 class="marker-heading">Register</h2>' + '<span>' +
	  'Link Intime India Private Limited, <br>C 101, 247 Park, L.B.S. Marg, <br>Vikhroli West, Mumbai - 400 083.' + '</span>' + 
	  '</div></div>', 19.1199323,72.9266016]
    ]; 
	
    var map = new google.maps.Map(document.getElementById('map-register'), {		
      zoom: 15,
	  styles:[
    			{"featureType": "administrative","elementType": "geometry.fill","stylers": [{"hue": "#5500ff"}]},
   				{"featureType": "administrative","elementType": "geometry.stroke","stylers": [{"hue": "#00ff1c"}]},
				{"featureType": "administrative","elementType": "labels.text.fill","stylers": [{"color": "#6195a0"}]},
				{"featureType": "administrative.province","elementType": "geometry.stroke","stylers": [{"visibility": "off"}]},
				{"featureType": "landscape","elementType": "geometry","stylers": [{"lightness": "0"},{"saturation": "0"},{"color": "#f5f5f2"},{"gamma": "1"}]},
				{"featureType": "landscape.man_made","elementType": "all","stylers": [{"lightness": "-3"},{"gamma": "1.00"}]},
				{"featureType": "landscape.natural.landcover","elementType": "geometry.stroke","stylers": [{"weight": "3.83"}]},
				{"featureType": "landscape.natural.landcover","elementType": "labels.text.fill","stylers": [{"hue": "#07ff00"}]},
				{"featureType": "landscape.natural.terrain","elementType": "all","stylers": [{"visibility": "off"}]},
				{"featureType": "poi","elementType": "all","stylers": [{"visibility": "off"}]},
				{"featureType": "poi.park","elementType": "geometry.fill","stylers": [{"color": "#bae5ce"},{"visibility": "on"}]},
				{"featureType": "road","elementType": "all","stylers": [{"saturation": -100},{"lightness": 45},{"visibility": "simplified"}]},
				{"featureType": "road.highway","elementType": "all","stylers": [{"visibility": "simplified"}]},
				{"featureType": "road.highway","elementType": "geometry.fill","stylers": [{"color": "#dbdbdb"},{"visibility": "simplified"}]},
				{"featureType": "road.highway","elementType": "labels.text","stylers": [{"color": "#4e4e4e"}]},
				{"featureType": "road.arterial","elementType": "labels.text.fill","stylers": [{"color": "#787878"}]},
				{"featureType": "road.arterial","elementType": "labels.icon","stylers": [{"visibility": "off"}]},
				{"featureType": "transit","elementType": "all","stylers": [{"visibility": "simplified"}]},
				{"featureType": "transit.station.airport","elementType": "labels.icon","stylers": [{"hue": "#0a00ff"},{"saturation": "-77"},{"gamma": "0.57"},{"lightness": "0"}]},
				{"featureType": "transit.station.rail","elementType": "labels.text.fill","stylers": [{"color": "#43321e"}]},
				{"featureType": "transit.station.rail","elementType": "labels.icon","stylers": [{"hue": "#ff6c00"},{"lightness": "4"},{"gamma": "0.75"},{"saturation": "-68"}]},
				{"featureType": "water","elementType": "all","stylers": [{"color": "#eaf6f8"},{"visibility": "on"}]},
				{"featureType": "water","elementType": "geometry.fill","stylers": [{"color": "#c7eced"}]},
				{"featureType": "water","elementType": "labels.text.fill","stylers": [{"lightness": "-49"},{"saturation": "-53"},{"gamma": "0.79"}]}
			],
      center: new google.maps.LatLng(19.1199323,72.9242616),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++){
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        icon: 'images/map-pin.png',
      });
	  infowindow.setContent(locations[i][0]);
	  infowindow.open(map, marker);
	   marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
    }
	
}
google.maps.event.addDomListener(window, "load", init_map);
google.maps.event.addDomListener(window, "resize", init_map);
});