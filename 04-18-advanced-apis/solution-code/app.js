

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
  // if redirected hide initial view
  $('.sign-in-view').hide();

  // use the navigator given to us by the window.navigator object to find the user's location
  getCurrentLocation(function(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;

    // configure instagram endpoint with accessToken and user's location data
    var instagramEndpoint = 'https://api.instagram.com/v1/media/search?lat=' + lat + '&lng=' + lng + '&access_token=' + accessToken

    // call the instagram with configured URI
    $.ajax({
      url: instagramEndpoint,
      method: 'GET',
      dataType: 'jsonp',
      success: handleResponseSuccess
    });
  });

}

function handleResponseSuccess(response) {
  var allData = response.data;

  // iterate through each piece of data
  allData.forEach(function(data) {
    var imageUrl = 'url(' + data.images.standard_resolution.url + ')';

    // create element
    var element = $('<div></div>').css({'background-image': imageUrl}).addClass('image');

    // append element to .images node
    $('.images').append(element);
  });
}

function getCurrentLocation(onLocation) {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(onLocation);
	} else {
		console.error("Geolocation is not supported by this browser.");
	}
}
