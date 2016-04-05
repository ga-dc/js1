
'use strict';

var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var myFavThings = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false  }));
app.use(express.static('.'));

app.post('/thing', function(req, res) {
  var newThing = req.body.newThing;
  if (myFavThings.indexOf(newThing) === -1) {
    myFavThings.push(newThing);
    res.status(200).json(newThing);
  } else {
    res.status(500).json({ message: `Thing ${newThing} is already in your list` });
  }
});

app.get('/things', function(req, res) {
  res.status(200).json(myFavThings);
});

app.delete('/thing', function(req, res) {
  var thingToDelete = req.body.thing;
  /*
   * Remove the thing from our favThings array and return
   * the new array with a status of 200. Use the app.post('/thing')
   * route as a guide.
   */
});

app.get('/', function(req, res) {
  fs.createReadStream('index.html').pipe(res);
});

app.listen(3000, function() {
  console.log('\n**********************************');
  console.log(`   I believe in you :-)\n   Go to http://localhost:3000`);
  console.log('**********************************\n');
})

// function exists(thingText) {
//   return myFavThings.some(function(item) {
//     return item.text === thingText
//   })
// }