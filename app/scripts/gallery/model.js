define(['gallery/controller', 'map/controller'], function(controller, mapController) {

  var data = null;
  var photos = [];

  function setPosition(id, latitude, longitude) {
    photos[id].position = {
      latitude: latitude,
      longitude: longitude
    };
  }

  function checkForPosition(pictureId) {
    var url = 'https://api.flickr.com/services/rest/?api_key=77c423c90208d7e7f19bf1b48873c62f&format=json&method=flickr.photos.geo.getLocation&photo_id=' + pictureId + '&nojsoncallback=1';
    console.log(pictureId);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        var response = JSON.parse(xhttp.responseText);

        if (response.stat === 'ok') {
          console.log("Photo located.");
          mapController.positionLocation(response.photo.location);
        } else {
          console.log("No location for this photo.");
        }
      }
    };

    xhttp.open("GET", url, true);
    xhttp.send();
  }

  function createPictureArray() {
    var rawPhotos = this.data.photos.photo;
    var photoLink = null;

    for (var i = 0; i < rawPhotos.length; i++) {
      // https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
      photoLink = 'https://farm' + rawPhotos[i].farm + '.staticflickr.com/' + rawPhotos[i].server + '/' + rawPhotos[i].id + '_' + rawPhotos[i].secret + '_c.jpg';
      photos[i] = {
        id: rawPhotos[i].id,
        url: photoLink,
        owner: rawPhotos[i].owner,
        title: rawPhotos[i].title
      };
      //checkForPosition(rawPhotos[i].id, i);
    }
  }

  function getPictureInfo(id) {
    return photos.filter(function(obj) {
      return obj.id === id;
    })[0];
  }

  return {
    data: data,
    photos: photos,
    createPictureArray: createPictureArray,
    getPictureInfo: getPictureInfo,
    checkForPosition: checkForPosition
  }
});
