$(document).ready(function(){
	// create and array of images
	var image, imageCounter = 0, imageCache = [];
	
	$("#slides img").each(function(){
		image = new Image();
		image.src = $(this).attr("src");
		image.title = $(this).attr("alt");
		imageCache[imageCounter] = image;
		imageCounter++;
	}); // end preload
	
	// start slide show
	imageCounter = 0;
	var nextImage;
	setInterval(function(){
		$("#caption").fadeOut(1000);
		$("#slides").fadeOut(1000,
			function(){
				imageCounter = (imageCounter + 1) % imageCache.length;
				nextImage = imageCache[imageCounter];
				$("#slides").attr("src", nextImage.src).fadeIn(1000);
				$("#caption").text(nextImage.title).fadeIn(1000);
			}
		);
	}, 5000); // end of setInterval
	
}); // end of ready