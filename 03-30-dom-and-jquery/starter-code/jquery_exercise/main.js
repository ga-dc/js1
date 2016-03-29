/*Create a Checklist: Independent Practice

You'll add the ability to complete tasks in your favorite things list. Your program must complete the following rules:

- Through jQuery, add a "complete task" link at the end of each to-do item (i.e. each "favorite thing").
- When clicked, the link will cross out the current item (hint: add a class to the list that sets the text-decoration to strikeout).
- Each new item added by the user needs to also have the "complete task" link at the end.
- Bonus: when user completes an item, remove that item from the current list and add it to a completed list below. Do not show this list unless the there are completed items.
- Bonus 2: add the ability to restore items from the completed list to the first list.

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
