define(['gallery/model', 'gallery/view', 'map/controller', 'slick', 'jquery'], function(model, view, mapController, slick, $) {

  function setModel(data) {
    model.data = JSON.parse(data);
    model.createPictureArray();
    renderView();
  }

  function initGallery() {
    $('.gallery__container').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1
    });
  }

  function renderView() {
    view.displayAllPictures(model.photos);
    initGallery();
  }

  function getData() {
    var url = 'https://api.flickr.com/services/rest/?api_key=77c423c90208d7e7f19bf1b48873c62f&format=json&method=flickr.interestingness.getList&nojsoncallback=1';

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        setModel(xhttp.responseText);
      }
    };

    xhttp.open("GET", url, true);
    xhttp.send();
  }

  function addEventListeners() {
    view.galleryBase.addEventListener('click', function(e) {
      console.log(e);
      var photo = model.getPictureInfo(e.target.dataset.id);
      model.checkForPosition(photo.id);
    });
  }

  function init() {
    getData();
    addEventListeners();
    console.log('Gallery up and running');
  }

  return {
    init: init
  }
});
