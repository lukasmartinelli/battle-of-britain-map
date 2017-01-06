function fetchJSONFile(path, callback) {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
				var data = JSON.parse(httpRequest.responseText);
				if (callback) callback(data);
			}
    }
  };
  httpRequest.open('GET', path);
  httpRequest.send();
}

mapboxgl.accessToken = 'pk.eyJ1IjoibW9yZ2Vua2FmZmVlIiwiYSI6IjIzcmN0NlkifQ.0LRTNgCc-envt9d5MzR75w';
var map = new mapboxgl.Map({
  container: 'map',
  style: '/style.json',
  maxBounds: [
    [ -10, 48],
    [ 7, 56 ]
  ],
  minZoom: 5.6,
  maxZoom: 8.5
});
map.addControl(new mapboxgl.NavigationControl());

fetchJSONFile('/datasets/battle_of_britain_bombed_towns.geojson', function(collection) {
  var container = document.getElementById('bombings');
  collection.features.forEach(function(bombing) {
    var coords = bombing.geometry.coordinates;
    var props = bombing.properties;
		var node = document.createElement('div');
		node.class = 'city-item'
		node.innerHTML = '<a class="city-link" href="#7.5/' + coords[1] + '/' + coords[0] + '"><img class="city-icon" src="/icons/bomb-15.svg">' + props.name + '</a>';
		container.appendChild(node);
  });
});

window.onhashchange = function() {
  var hash = window.location.hash.replace('#', '');
  var parts = hash.split('/');
  var zoom = parseFloat(parts[0]);
  var lat = parseFloat(parts[1]);
  var lon = parseFloat(parts[2]);
  console.log('Fly to', [lon, lat])
  map.flyTo({
    center: [lon, lat],
    speed: 0.2,
    curve: 1,
    zoom: zoom
  });
}
