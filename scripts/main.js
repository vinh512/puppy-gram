var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]'

function setDetails(imageUrl, titleText) {
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);

  detailImage.setAttribute('src', imageUrl);
  detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
  return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
  return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail) {
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) {
  thumb.addEventListener('click', function(e) {
    e.preventDefault();
    setDetailsFromThumb(thumb);
  });
}

function getThumbnailsArray() {
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailsArray = [].slice.call(thumbnails);
  return thumbnailsArray;
}

function initializeEvents() {
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(function(thumbnail) {
    addThumbClickHandler(thumbnail);
  });
}

initializeEvents();


//
// var xyz = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
//
// xyz.forEach(function(thumbnail) {
//   addThumbClickHandler(thumbnail);
// })
