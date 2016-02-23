var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
var startupIdea;
var favorites = [];

createStartup()

document.getElementById('create').onclick = createStartup;
document.getElementById('save').onclick = save;
document.getElementById('print').onclick = print;

function createStartup(){
  var random1 = Math.floor((Math.random() * startupX.length));
  var random2 = Math.floor((Math.random() * startupY.length));
  startupIdea = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];
  document.getElementById('xForY').innerHTML = startupIdea;
}
function save(){
  favorites.push(startupIdea);
  console.log(favorites);
}
function print(){
  document.getElementById('favorites').innerHTML = '';
  for(i=0;i<favorites.length;i++){
    document.getElementById('favorites').innerHTML += favorites[i] + '<br />';
  }
}
