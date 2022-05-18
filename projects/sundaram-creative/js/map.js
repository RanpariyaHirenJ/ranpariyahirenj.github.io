function init_map() {
    var locations = [
      ['<div class="marker-info-win">' + '<div class="marker-inner-win"><span class="info-content">' + 
	  '<h2 class="marker-heading">Sundaram Creative</h2>' + 
	  ' <br>Wing-B, Chhatrapati Shivaji Rd No 4,  <br>Sudhindra Nagar, Dahisar East, <br>Mumbai, Maharashtra 400068' + '</span>' + 
	  '</div></div>', 19.261092,72.8611368,19.5]
    ]; 
	
    var map = new google.maps.Map(document.getElementById('map'), {		
      zoom: 16,
	  styles: [{"stylers":[{"hue":"#ff1a00"},{"invert_lightness":true},{"saturation":-100},{"lightness":33},{"gamma":0.5}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#2D333C"}]}],
      center: new google.maps.LatLng(19.261092,72.8611368,19.5),
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