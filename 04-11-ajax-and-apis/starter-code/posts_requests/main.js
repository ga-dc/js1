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
  },
  markComplete: function(event){
    event.preventDefault();
    $(this).parent().addClass("complete");
  },
  delete: function(event){
    event.preventDefault();
    $(this).parent().remove();
  },
  listen: function(){
    FavoriteThings.elements.$form.on("submit", function(event){
      event.preventDefault();
      FavoriteThings.add(FavoriteThings.elements.$newItemInput.val())
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
        FavoriteThings.add(thing)
      })
      callback()
    })
  }
};

FavoriteThings.load(function(){
  FavoriteThings.listen()
})
