var map = L.map( 'heatmap', {
    center: [20.0, 5.0],
    minZoom: 2,
    zoom: 2
});

L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v9/tiles/256/{z}/{x}/{y}?" +
"access_token=pk.eyJ1Ijoiam9ucGFyYSIsImEiOiJjamh4aXplemMwY2FiM3dscmgyYWx2cnA2In0.EkbMLM9pydlSlE8pBTjxLA", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: ["a","b","c"]
    }).addTo(map);


map.on('load', function() {

    map.addSource('trees', {
        type: 'geojson',
        data: './trees.geojson'
    });
        // add heatmap layer here
        // add circle layer here
    });

    map.addLayer({
        id: 'trees-heat',
        type: 'heatmap',
        source: 'trees',
        maxzoom: 15,
        paint: {
          // increase weight as diameter breast height increases
          'heatmap-weight': {
            property: 'dbh',
            type: 'exponential',
            stops: [
              [1, 0],
              [62, 1]
            ]
          },
          // increase intensity as zoom level increases
          'heatmap-intensity': {
            stops: [
              [11, 1],
              [15, 3]
            ]
          },
          // assign color values be applied to points depending on their density
          'heatmap-color': [
            'interpolate',
            ['linear'],
            ['heatmap-density'],
            0, 'rgba(236,222,239,0)',
            0.2, 'rgb(208,209,230)',
            0.4, 'rgb(166,189,219)',
            0.6, 'rgb(103,169,207)',
            0.8, 'rgb(28,144,153)'
          ],
          // increase radius as zoom increases
          'heatmap-radius': {
            stops: [
              [11, 15],
              [15, 20]
            ]
          },
          // decrease opacity to transition into the circle layer
          'heatmap-opacity': {
            default: 1,
            stops: [
              [14, 1],
              [15, 0]
            ]
          },
        }
      }, 'waterway-label');