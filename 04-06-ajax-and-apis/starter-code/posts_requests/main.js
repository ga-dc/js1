

'use strict';

var MyApp = {};
var $thingList = $('#todo-list');
var $button = $('#new-thing-button');
var $form = $('#new-thing-form');
var $newItemInput = $('#new-thing');

MyApp.addToList = function(text) {
  addThing(text, function(item) {
	  var context = {
	  	text: text
	  };	
	  appendItem(context);
	  $newItemInput.val('');
  });
};

MyApp.markComplete = function(text) {
	markComplete(text, function(items) {
		replaceItems(items);
	});
}

$(function() {

	function onClickOrSubmit(event) {
    event.preventDefault();
    var newItemText = $newItemInput.val();
    MyApp.addToList(newItemText);		
	}

	$button.on('click', onClickOrSubmit);
	$form.on('submit', onClickOrSubmit);

  $thingList.on('click', 'a.complete', function(e) {
    e.preventDefault();

    var $listItem = $(this).parent('li');
    var $textSpan = $listItem.find('.todo-text');

    MyApp.markComplete($textSpan.text());
  });

  $thingList.on('click', 'a.delete', function(e) {
    e.preventDefault();
    $(this).parent('li').remove();
  });

  // When the page loads, go the API and fetch all the items.
  // After we receive all the items replace the empty list with
  // the items we found on the server
  fetchThings(function(items) {
  	replaceItems(items);
  });

});

// ======================== helper functions ===============

function appendItem(context) {
	var source = $("#to-do-template").html();
	var template = Handlebars.compile(source);	
	var html = template(context);
	$thingList.append(html);
}

function replaceItems(items) {
	// empty out the current list
	$thingList.html('');
	// append each item in the items array to the list
	items.forEach(function(item) {
		appendItem(item);
	});
}

function markComplete(thingText, onMarkComplete) {
	$.ajax({
		method: 'PATCH',
		url: '/thing/' + thingText,
		data: {
			completed: true
		},
		success: function(items) {
			onMarkComplete(items);
		}
	});
}

/*
	This function will fetch the things the current things by
	sending a GET request to the API server. This function has one 
	parameter:

	onItemsFetched - a callback function that will 
	be called when the items have been fetched. The items fetched 
	will be passed to the callback function
*/
function fetchThings(onItemsFetched) {
	// send a GET request to the API
	$.get('/things', onFetchSuccess);
	function onFetchSuccess(things) {
		onItemsFetched(things);
	}
}

/*
	This function will add a new thing to the list by sending a POST
	request to our API server. This function has two parameters:

	thing - a string that is the thing to be added
	onThingAdded - a callback function to be called when we've successfully added a new thing
*/
function addThing(thing, onThingAdded) {
	// send a POST request to the API
	$.ajax({
		url: '/thing/' + thing,
		method: 'PUT',
		success: function(things) {
			onThingAdded(thing);	
		}
	});
}

