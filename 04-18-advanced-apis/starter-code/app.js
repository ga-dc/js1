

// get access token from hash/fragment
var uriHash = window.location.hash;

if (uriHash.length > 0) {
	var accessToken = uriHash.replace('#access_token=', '');
	getImages(accessToken);
} else {
	// if not yet redirected hide results view
  $('.image-results-view').hide();
}


function getImages(accessToken) {
  // hide the sign in view


  // Determine the user's location. When the location position is obtained
		// store latitude in a variable
		// store longitude in a variable

		// create a variable for the endpoing
		var instagramEndpoint = ``; // <== store your url here in this string!

		// now lets fetch the data images from instagram and handle the response
		$ajax({
			url: instagramEndpoint,
			method: '', // <=== Hmm, what type of request is this?,
			dataType: 'jsonp',
			success: handleResponseSuccess // <== You'll have to implement this below
		});
}


function handleResponseSuccess(response) {
	var allData = response.data;
  // for each item in allData
  	// assign the item's image url to a variable imageUrl
  	// create a new jQuery div element
  	// Use the jQuery css method to change the background of the the div to the imageUrl
  	// Use jQuery to add the 'image' class to the new div element
  	// append the new div element to the .images div
}

// This function fetches the current location of the user. It has one parameter
// onLocation which is a callback function here's an example
//	getCurrentLocation(function(position) {
		// the position object has the current lat/long
//	})
function getCurrentLocation(onLocation) {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(onLocation);
	} else {
		console.error("Geolocation is not supported by this browser.");
	}
}
