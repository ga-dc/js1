/* Variables for random example */
var btcRate = 300;
module.exports = function(robot) {
  robot.respond(/convert (.*) to btc/i, function(msg) {
    var usd;
    usd = msg.match[1];
    btc = usdToBTC(usd);
    return msg.send(btc + " btc :moneybag:");
  });
};


function usdToBTC(usd) {
  convertedBTC = usd / btcRate;
  return convertedBTC;
}
