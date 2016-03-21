var btcRate;
var convertedBTC;
$.getJSON('https://api.bitcoinaverage.com/ticker/USD/', function(data) {
  btcRate = data.last;
});

document.getElementById('convert').onclick = convert;

function convert(){
  usdToConvert = document.getElementById('usd').value;
  //console.log(usdToConvert);
  btc = usdToBTC(usdToConvert);
  //console.log(btc);
  document.getElementById('btc').value = btc;

}

function usdToBTC(usd) {
  convertedBTC = usd / btcRate;
  return convertedBTC;
}