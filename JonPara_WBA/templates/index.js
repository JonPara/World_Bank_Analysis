var map = L.map( 'map', {
    center: [20.0, 5.0],
    minZoom: 2,
    zoom: 2
});

L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v9/tiles/256/{z}/{x}/{y}?" +
"access_token=pk.eyJ1Ijoiam9ucGFyYSIsImEiOiJjamh4aXplemMwY2FiM3dscmgyYWx2cnA2In0.EkbMLM9pydlSlE8pBTjxLA", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: ["a","b","c"]
    }).addTo(map);

var queryUrl = "https://raw.githubusercontent.com/Stefie/geojson-world/master/capitals.geojson"

d3.json(queryUrl, function (data) {
    // console.log(data.features[0]);
    // Once we get a reponse, send the data.features object to the createFeatures function
    // createFeatures(data);
    var obj = {
        "type": "FeatureCollection",
        "features": []
    };
    data.features.map(function (rawData, i) {
        rawData.type = 'Feature';
        // rawData.properties.type = 'Feature';
        return obj.features.push(rawData);
    });
    createFeatures(obj);
});

// var test = {"type": "FeatureCollection",
// "features": [
//   {
//     "geometry": {"type": "Point", "coordinates": [102.0, 0.5]},
//     "properties": {"prop0": "value0"}
//     },
//   {
//     "geometry": {
//       "type": "LineString",
//       "coordinates": [
//         [102.0, 0.0], [103.0, 1.0], [104.0, 0.0], [105.0, 1.0]
//         ]
//       },
//     "properties": {
//       "prop0": "value0",
//       "prop1": 0.0
//       }
//     }]
// }
// createFeatures(test);
function createFeatures(locationData) {

    // locationData.features[0].type = 'Feature';
    // locationData.features[1].type = 'Feature';

    var locations = L.geoJSON(locationData, {
        onEachFeature: function (features, layer) {
            // console.log(features);
            // console.log(layer);
            layer.bindPopup("<h3>Country Name: " + features.properties.country + "</h3><h3>Capital: " +
                features.properties.city + "</h3>");
        },

        // Add properties to the circle
        pointToLayer: function (feature, coordinates) {
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

function createMap(locations) {
console.log(locations);
console.log('satelliteMap started');
    var satelliteMap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v9/tiles/256/{z}/{x}/{y}?" +
        "access_token=pk.eyJ1Ijoiam9ucGFyYSIsImEiOiJjamh4aXplemMwY2FiM3dscmgyYWx2cnA2In0.EkbMLM9pydlSlE8pBTjxLA", {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            subdomains: ["a", "b", "c"]
        }).addTo(map);

        console.log('satelliteMap just finished');

    var map = L.map('map', {
        center: [20.0, 5.0],
        minZoom: 2,
        zoom: 2
    });

};


