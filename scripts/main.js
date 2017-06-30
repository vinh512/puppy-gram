var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var DETAIL_FRAME_SELECTOR = '[data-image-role="frame"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]'
var HIDDEN_DETAIL_CLASS = 'hidden-detail';
var TINY_EFFECT_CLASS = 'is-tiny';
var KEY_CODE = 27;
var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
var PIC_ARRAY = ['Ollie', 'Cotton', 'Max', 'Zeus_Emma', 'Lola',
                  'Bailey', 'Gatsby', 'Bisquick', 'Duke', 'Nina'];

function randomizePic() {
  var picValue = Math.floor(Math.random() * 10);
  detailImage.setAttribute('src', 'images/' + PIC_ARRAY[picValue] + '.jpg');
}

function setDetails(imageUrl, titleText) {
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
    showDetails();
  });
}

function getThumbnailsArray() {
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailsArray = [].slice.call(thumbnails);
  return thumbnailsArray;
}

function hideDetails() {
  document.body.classList.add(HIDDEN_DETAIL_CLASS);
}

function showDetails() {
  var frame = document.querySelector(DETAIL_FRAME_SELECTOR);
  document.body.classList.remove(HIDDEN_DETAIL_CLASS);
  frame.classList.add(TINY_EFFECT_CLASS);
  setTimeout(function(){
    frame.classList.remove(TINY_EFFECT_CLASS);
  }, 50);
}

function addKeyPressHandler() {
  document.body.addEventListener('keyup', function(e) {
    e.preventDefault();
    if (e.keyCode === 27) {
      hideDetails();
    }
  });
}

function initializeEvents() {
  randomizePic();
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(function(thumbnail) {
    addThumbClickHandler(thumbnail);
  });
  addKeyPressHandler();
}

initializeEvents();
