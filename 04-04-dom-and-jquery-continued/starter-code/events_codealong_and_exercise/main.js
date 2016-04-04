$(function() {
  var $thingList = $('#fav-list');
  var $listItem = $('#fav-list li');
  var $button = $('#new-thing-button');
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
