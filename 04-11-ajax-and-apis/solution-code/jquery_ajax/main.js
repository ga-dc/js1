'use strict';
(function() {
  var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
  var apiKey = "2de143494c0b295cca9337e1e96b00e0";

  getWeather('washington', 'dc');

  $('#getTemp').on('click', function(e) {
    getWeather($('#city').val(), $('#state').val());
  });

  function getWeather(city, state) {
    $.ajax({
        url: weatherUrl + city + ',' + state + '&appid=' + apiKey,

        // Work with the response
        success: function( response ) {
            updateUISuccess(response.main.temp, city, state);
        },

        error: function() {
          updateUIError();
        }
    });
  }

  function updateUISuccess(temp, city, state) {
    $('#city, #state').val('');
    $('#location').html(city + ', ' + state);
    console.log(temp);
    $('#temp').html(temp);
  }

  function updateUIError() {
    alert("There was an error getting weather data :(");
  }

})();
