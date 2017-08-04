javascript: ( function () { 
	
	/** This inverts the preview image on the listing page **/
	if(document.getElementById("icImg") !== null) {
		document.getElementById("icImg").style.filter="invert(100%)"
		
	} 

	/** This inverts the enlarged preview when hoving over the preview image on the listing page. **/
	if(document.getElementById("zoom_main_img") !== null) {
		document.getElementById("zoom_main_img").style.filter="invert(100%)"
	}

	/** This inverts the image displayed in the image viewer when the preview image on main page is clicked **/
	if(document.getElementById("viEnlargeImgLayer_img_ctr") !== null) {
		console.log("inside viEnlarge");
		document.getElementById("viEnlargeImgLayer_img_ctr").style.filter="invert(100%)"
	}
	
}());