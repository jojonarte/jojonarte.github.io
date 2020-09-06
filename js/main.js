'use-strict';
function loadImage(id, targetId) {
	const element = document.getElementById(id);
	const targetElement = targetId ? document.getElementById(targetId) : element;

	let imageToLoad;

	if (element.dataset.image) {
		imageToLoad = element.dataset.image;
	} else if (typeof element.currentSrc === 'undefined') {
		imageToLoad = element.src;
	} else {
		imageToLoad = element.currentSrc;
	}

	if (imageToLoad) {
		const image = new Image();
		image.src = imageToLoad;
		image.onload = function () {
			targetElement.classList.add('is-loaded');
		};
	}
}

document.addEventListener('DOMContentLoaded', function () {
	loadImage('wallpaper');
	loadImage('pictureImage', 'picture');
});
