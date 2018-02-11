var map;
var json_res = "https://pvanh80.github.io/anotherWeb/restaurants.json";
var infowindow = new google.maps.InfoWindow();

function initialize() {

    var mapProp = {
        center: new google.maps.LatLng(60.170708, 24.938224), 
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("map"), mapProp);

    $.getJSON(json_res, function(res) {

	    $.each(res, function (key, data) {

	        var latLng = new google.maps.LatLng(data.location.lat, data.location.lon);

	        var marker = new google.maps.Marker({
	            position: latLng,
	            map: map,
	            title: data.name
	        });

	        var details = "<span style='font-weight:bold'>" + data.name + " Restaurant</span></br>Tel: " + data.phone_number ; 

	        bindInfoWindow(marker, map, infowindow, details);

	    });

    });

}

function bindInfoWindow(marker, map, infowindow, strDescription) {
    google.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent(strDescription);
        infowindow.open(map, marker);
    });
}
google.maps.event.addDomListener(window, 'load', initialize);
