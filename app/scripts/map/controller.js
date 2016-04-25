define(['map/model', 'map/view'], function(model, view) {

  var map;

  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  function success(pos) {
    map.panTo({lat: pos.coords.latitude, lng: pos.coords.longitude});
  };

  function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  };

  function getUserLocation() {
      // todo: loading page: locatiing user
      // todo: home icon
      navigator.geolocation.getCurrentPosition(success, error, options);
  }

  function init() {
    getUserLocation();
    map = new google.maps.Map(document.querySelector('.map__base'), {
      center: {
        lat: -34.397,
        lng: 150.644
      },
      zoom: 7
    });

    console.log('Map up and running');
  }

  function positionLocation(position) {
    console.log(position);

    marker = new google.maps.Marker({
      map: map,
      draggable: false,
      animation: google.maps.Animation.DROP,
      position: {
        lat: parseFloat(position.latitude),
        lng: parseFloat(position.longitude)
      }
    });

    map.panTo(marker.getPosition());
  }

  // getBrowserCoordinates

  return {
    init: init,
    positionLocation: positionLocation
  }
});
