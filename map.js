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
