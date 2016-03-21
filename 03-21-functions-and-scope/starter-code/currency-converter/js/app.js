var btcRate;
$.getJSON('https://api.bitcoinaverage.com/ticker/USD/', function(data) {
  btcRate = data.last;
});
