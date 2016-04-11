'use strict';

var FavoriteThings = {
  elements: {
    $thingList: $('#todo-list'),
    $button: $('#new-thing-button'),
    $form: $('#new-thing-form'),
    $newItemInput: $('#new-thing'),
    $toDoTemplate: $("#to-do-template")
  },
  add: function(thing){
    var $listItem = FavoriteThings.render(FavoriteThings.elements.$toDoTemplate,thing);
    FavoriteThings.elements.$thingList.append($listItem);
    FavoriteThings.elements.$newItemInput.val('');
    // send a post request to "/things"
    // data: { newThing: thing.text }
    $.ajax({
      url: "/things",
      method: "post",
      data: {
        newThing: thing.text
      }
    })
  },
  markComplete: function(event){
    event.preventDefault();
    $(this).parent().addClass("completed");
    var thing = $(this).siblings(".todo-text").html()
    // send a patch request to /things/thing-text
    // e.g. /things/my+favorite+thing
    $.ajax({
      url: "/things/" + thing,
      method: "patch",
      data: {
        completed: true 
      }
    })
  },
  delete: function(event){
    event.preventDefault();
    $(this).parent().remove();
    // send a delete request to /thing
    // data: { thing: thing.text }
    // modify server.js to delete the thing
  },
  listen: function(){
    FavoriteThings.elements.$form.on("submit", function(event){
      event.preventDefault();
      FavoriteThings.add({
	text: FavoriteThings.elements.$newItemInput.val(),
	completed: false
      })
    })
    FavoriteThings.elements.$thingList.on(
      "click", 'a.complete',
      FavoriteThings.markComplete
    )
    FavoriteThings.elements.$thingList.on(
      "click", 'a.delete',
      FavoriteThings.delete
    )
  },
  render: function($element, context){
    var source = $element.html();
    var template = Handlebars.compile(source);
    var html = template(context);
    return $(html);
  },
  load: function(callback){
    $.get("/things", function(response){
      console.log(response)
      response.forEach(function(thing){
        FavoriteThings.elements.$thingList.append(
	  FavoriteThings.render(FavoriteThings.elements.$toDoTemplate,thing)
	)
      })
      callback(response)
    })
  }
};

FavoriteThings.load(function(){
  FavoriteThings.listen()
})
