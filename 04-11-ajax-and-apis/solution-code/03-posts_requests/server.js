
'use strict';

var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var connect = require('connect');
var app = express();
var myFavThings = [];

app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false  }));
app.use(express.static('.'));

app.patch('/things/:existingThing', function(req, res) {
  var existingThing = req.params.existingThing;
  var completed = req.body.completed;
  var index = indexOf(existingThing);
  if (index > -1) {
    myFavThings[index].completed = completed;
    res.status(200).send(myFavThings);
  } else {
    res.status(500).send(`Thing ${existingThing} does not exist`);
  }
});

app.post('/things', function(req, res) {
  var newThing = req.body.newThing;
  if (!exists(newThing)) {
    myFavThings.push({ text: newThing, completed: false });
    res.status(200).json(newThing);
  } else {
    res.status(500).json({ message: `Thing ${newThing} is already in your list` });
  }
})

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
});

function exists(thing) {
  return myFavThings.some(function(item) {
    return item.text === thing.text;
  });
}

function indexOf(thingText) {
  var index;
  for (var i = 0; i < myFavThings.length; i++) {
    if (thingText === myFavThings[i].text) {
      index = i;
      break;
    }
  }
  return index;
}