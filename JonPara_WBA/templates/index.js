var capitalUrl = "http://techslides.com/demos/country-capitals.json"

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


// Need to add in data for Country's Debt.

// var countryDebt =   L.geoJson(data,{
//     pointToLayer: function(feature,latlng){
//       var marker = L.marker(latlng,{icon: ratIcon});
//       marker.bindPopup(feature.properties.Location + '<br/>' + feature.properties.OPEN_DT);
//       return marker;
//     }
//   });
//    var clusters = L.markerClusterGroup();
//   clusters.addLayer(rodents);
//   map.addLayer(clusters); 


