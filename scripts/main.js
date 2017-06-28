var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]'

function setDetails(imageUrl, titleText) {
  'use strict';
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
