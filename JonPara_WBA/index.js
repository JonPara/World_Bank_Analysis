
var queryUrl = "https://raw.githubusercontent.com/Stefie/geojson-world/master/capitals.geojson"

d3.json(queryUrl, function(data){
    // Once we get a reponse, send the data.features object to the createFeatures function
    createFeatures(data.features);
});

function createFeatures(locationData){
    var locations = L.geoJSON(locationData, {
        onEachFeature: function(features, layer){
            layer.bindPopup("<h3>Country Name: " + features.properties.country + "</h3><h3>Capital: " + 
            features.properties.city + "</h3>");
        },

// Add properties to the circle
    pointToLayer: function(feature, coordinates){
        return new L.marker(coordinates,
        {
        fillOpacity: .6,
        color: "#000",  
        stroke: true,
        weight: .8
        })
    }
    });
    // Have a map created based on the variable above
    createMap(locations);
}

function createMap(locations){

    var satelliteMap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v9/tiles/256/{z}/{x}/{y}?" +
    "access_token=pk.eyJ1Ijoiam9ucGFyYSIsImEiOiJjamh4aXplemMwY2FiM3dscmgyYWx2cnA2In0.EkbMLM9pydlSlE8pBTjxLA", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: ["a","b","c"]
    }).addTo(map);

    var map = L.map( 'map', {
    center: [20.0, 5.0],
    minZoom: 2,
    zoom: 2
    });

};


