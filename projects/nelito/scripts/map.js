function init_map() {
    var locations = [
      ['<div class="marker-info-win">' + '<div class="marker-inner-win"><span class="info-content">' + 
	  '<h2 class="marker-heading">Nelito Systems Ltd.</h2>' + '<span>' +
	  '205-208 Bldg 2,<br> Sector 1, Millennium Business Park,<br> Navi Mumbai 400 710. Maharashtra, India.' + '</span>' + 
	  '</div></div>', 19.110593,73.017341]
    ]; 
	
    var map = new google.maps.Map(document.getElementById('map'), {		
      zoom: 18,
	 //styles: [{"stylers":[{"hue":"#1d2c4d"},{"invert_lightness":true},{"saturation":-100},{"lightness":33},{"gamma":0.5}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#2D333C"}]}],
	  styles: [
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
			],
      center: new google.maps.LatLng(19.110593,73.017341),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) { 
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        icon: 'images/map-pin.png',
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
}
google.maps.event.addDomListener(window, "load", init_map);
google.maps.event.addDomListener(window, "resize", init_map);