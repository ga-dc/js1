
//SOLUTION: Appending: Independent Practice

'use strict';
var MyApp = {};

MyApp.addToList = function(list) {
  var $newLi = $('<li>');
  var $newItemText = $('#new-thing');
  $newLi.html($newItemText.val());
  $newItemText.val('');
  if ($newLi.html() !== '') {
    list.append($newLi);
  }
  MyApp.addButtons($newLi);
}

MyApp.initiateButtons = function($thingList) {
  $thingList.find('li').each(function() {
    MyApp.addButtons($(this));
  });
}

MyApp.addButtons = function($item) {
  var completeBtn = ' <a href="#" class="complete">Complete</a>';
  $item.append(completeBtn);

  var deleteBtn = ' <a href="#" class="delete">Delete</a>';
  $item.append(deleteBtn);
}

$(function() {
  // var yourName = prompt('What is your name?');

  $('#name').html("World");

  var $thingList = $('#fav-list');

  var $button = $('#new-thing-button');
  // button.onclick = function(event) {
  $button.on('click', function(event) {
    event.preventDefault();
    MyApp.addToList($thingList);
  });


  $thingList.on('mouseenter mouseleave', 'li', function(event) {
       if (event.type == 'mouseenter') {
         $(this).removeClass('inactive');
         $(this).siblings().addClass('inactive');
      } else if (event.type == 'mouseleave') {
          $(this).siblings().removeClass('inactive');
      }
  });

  $thingList.on('click', 'a.complete', function(e) {
    e.preventDefault();
    var listItem = $(this).parent('li');

    listItem.toggleClass('completed');
  });

  $thingList.on('click', 'a.delete', function(e) {
    e.preventDefault();
    $(this).parent('li').remove();
  });

  MyApp.initiateButtons($thingList);
});
