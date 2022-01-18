
       function initMap(){
            var map = new google.maps.Map(document.getElementById("map"),{
                zoom: 9,
                center: {
                    lat: 34.034390,
                    lng: -84.430920
                }
            });

            var labels = "asjkhdlaskh";

            var locations = [
                {lat: 34.058180, lng: -84.379580},
                {lat: 34.134117, lng: -118.321495},
                {lat: 37.383064, lng: -109.071236}
            ];

            var markers = locations.map(function(location, i){
                return new google.maps.Marker({
                    position: location,
                    label: labels[i % labels.lenght]
                });
            });
            new MarkerClusterer(map, markers, {
    imagePath:"https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",});
       }    
    