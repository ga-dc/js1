document.getElementById('roll-dice').onclick = diceRoll;

function diceRoll() {
  var random1 = Math.floor((Math.random() * 6) + 1);
  var random2 = Math.floor((Math.random() * 6) + 1);
  var firstDie = 'dice-' + random1;
  var secondDie = 'dice-' + random2;
  document.getElementById("first-die").className = firstDie;
  document.getElementById("second-die").className = secondDie;
}