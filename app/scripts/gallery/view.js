define(function() {
  var galleryBase = document.querySelector('.gallery__base');
  var galleryContainer = document.querySelector('.gallery__container');
  var docfrag = document.createDocumentFragment();

  function addPicture(picture) {
    var div = document.createElement("div");
    var img = document.createElement("img");
    img.classList.add('gallery__image');
    img.src = picture.url;
    img.title = picture.title;
    img.dataset.id = picture.id;
    div.appendChild(img);
    docfrag.appendChild(div);
  }

  function displayAllPictures(photoObject) {
    var counter = 0;

    for (var key in photoObject) {
      if (counter < 5) {
        addPicture(photoObject[key]);
        counter += 1;
      }
    }
    galleryContainer.appendChild(docfrag);
  }

  return {
    galleryBase: galleryBase,
    galleryContainer : galleryContainer,
    displayAllPictures: displayAllPictures
  }
});
