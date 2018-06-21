function initMap() {
  var od = { lat: 46.45907763841859, lng: 30.75200658100505 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 19,
    center: od
  });
  var myIcon = 'images/beetroot.png';
  var marker = new google.maps.Marker({
    position: lala,
    icon: myIcon,
    map: map
  });
}
google.maps.event.addDomListener(window, 'load', initMap);
