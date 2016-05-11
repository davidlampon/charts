define(function() {

  var infoContainer = document.querySelector('.map__info');
  var locationContainer = infoContainer.querySelector('.map__infoLocation');
  var countryContainer = infoContainer.querySelector('.map__infoCountry');
  var coordinatesContainer = infoContainer.querySelector('.map__infoCoordinates');

  function printInfo(addresses, position) {    
    locationContainer.innerHTML = addresses[0];
    countryContainer.innerHTML = addresses[addresses.length-1];
    coordinatesContainer.innerHTML = position.longitude + ', ' + position.latitude;
  }

  return {
    printInfo : printInfo
  }

});
