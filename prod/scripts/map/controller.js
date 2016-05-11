define(['map/model', 'map/view', 'chart/model'], function(model, view, chartModel) {

  var map;
  var marker;

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
    // getUserLocation();
    map = new google.maps.Map(document.querySelector('.map__base'), {
      center: {
        lat: -34.397,
        lng: 150.644
      },
      zoom: 7
    });
  }

  function getFormattedAdresses(results, position) {
    var addresses = [];

    for (var i = 0; i < results.length; i += 1) {
      addresses[i] = results[i].formatted_address;
    };

    view.printInfo(addresses, position);
    chartModel.loadInfo(addresses[addresses.length-1]);
  }

  function positionLocation(position) {
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
    getCountry(position);
  }

  function removePreviousMarker() {
    marker.setMap(null);
  }

  function getCountry(position) {
    var key = 'AIzaSyA-LeD-hgffpgVXyL_3o9y8pwOKMcaocKI';
    var url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + position.latitude + ',' + position.longitude + '&key=' + key + '&language=en';
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        var response = JSON.parse(xhttp.responseText);

        if (response.status === 'OK') {
          getFormattedAdresses(response.results, position);
        }
      }
    };

    xhttp.open("GET", url, true);
    xhttp.send();
  }

  return {
    init: init,
    positionLocation: positionLocation,
    removePreviousMarker : removePreviousMarker
  }
});
