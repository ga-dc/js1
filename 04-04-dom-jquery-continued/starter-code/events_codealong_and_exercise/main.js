/*

Appending: Independent Practice

- Open the index.html file in your browser and play around with it first before attempting to complete these instructions.
- Append two anchor tags to each list item (the ones added by clicking "Create new thing"):
  - An anchortag to complete the task.
  - An anchortag to delete the task (list item).

- The complete task event handler should toggle a 'completed' class on the list item.
So <li class="completed">
*/


'use strict';

var $ = require('jquery');

$(function() {
  var yourName = prompt('What is your name?');

  $('#name').html(yourName);

  var $thingList = $('#fav-list');

  var $button = $('#new-thing-button');
  // button.onclick = function(event) {
  $button.on('click', function(event) {
    event.preventDefault();
    MyApp.addToList($thingList);
  });
});

var MyApp = {};

MyApp.addToList = function(list) {
  var $newLi = $('<li>');
  var $newItemText = $('#new-thing');
  $newLi.html($newItemText.val());
  $newItemText.val('');
  if ($newLi.html() !== '') {
    list.append($newLi);
  }
}
