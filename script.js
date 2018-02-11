var map;
//var icon = "http://path/to/icon.png";
//var json = "http://path/to/universities.json";
var infowindow = new google.maps.InfoWindow();
function initialize() {

    var mapProp = {
        center: new google.maps.LatLng(60.170708, 24.938224), //LLANDRINDOD WELLS
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("map"), mapProp);

    //  $.getJSON(json, function(json1) {
    var json1 = {
        "universities": [
            {
                "city_slug": "helsinki",
                "currency": "EUR",
                "description": "Perferendis esse ad esse corrupti architecto. Dicta non a cupiditate. Eligendi explicabo iure nam totam sunt neque facere.",
                "id": "123704012656",
                "localized_city_name": "Helsinki",
                "location": {
                    "lat": 60.167624,
                    "lon": 24.939962
                },
                "name": "Vietnamese Plus",
                "phone_number": "020 844 6409",
                "timezone": "Helsinki/Europe"
            },
            {
                "city_slug": "helsinki",
                "currency": "EUR",
                "description": "Perferendis adipisci asperiores sequi maxime labore. Sit nisi alias similique tenetur perspiciatis totam voluptas maiores.",
                "id": "112278359460",
                "localized_city_name": "Helsinki",
                "location": {
                    "lat": 60.17683,
                    "lon": 24.933922
                },
                "name": "Beetroot Factory",
                "phone_number": "071 564 2071",
                "timezone": "Helsinki/Europe"
            },
            {
                "city_slug": "helsinki",
                "currency": "EUR",
                "description": "Maxime sed corrupti hic a. Alias corrupti similique provident fugit nemo iure. Alias eligendi sed expedita numquam odio.",
                "id": "320459077527",
                "localized_city_name": "Helsinki",
                "location": {
                    "lat": 60.175594,
                    "lon": 24.934195
                },
                "name": "Steak Hotel",
                "phone_number": "+358 59 3518832",
                "timezone": "Helsinki/Europe"
            }
        ]
    };
    $.each(json1.universities, function (key, data) {

        var latLng = new google.maps.LatLng(data.location.lat, data.location.lon);

        var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            // icon: icon,
            title: data.name
        });

        var details = data.city_slug + ", " + data.phone_number + ".";

        bindInfoWindow(marker, map, infowindow, details);

        //    });

    });

}

function bindInfoWindow(marker, map, infowindow, strDescription) {
    google.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent(strDescription);
        infowindow.open(map, marker);
    });
}

google.maps.event.addDomListener(window, 'load', initialize);