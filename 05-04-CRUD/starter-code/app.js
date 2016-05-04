/*
===================================================
===================== WELCOME =====================
===================================================
*/

var Message = TypeFactory('Message');

$(document).ready(function() {
	// TODO
	// When the message form submits
		// stop the page from refreshing
		// Take the data entered and create a new message. Relevant data is the message text and number of upVotes
			// When the message is SUCCESSFULLY created, grab the objectId from the result and render a new handlebars template

	// on initialization of app (when document is ready) get fan messages
  getFanMessages();

	// This function should get all the currently saved messages and setup the event listeners
	// for the upvote and delete button!
  function getFanMessages() {

		// TODO
		// When someone clicks an upvote button, increase the number of votes and update the corresponding message model
		// When someone clicks a delete button, remove that message from the database
		// Update the view to reflect the upvote or deletion

		// Maybe you can use this function to encapsulate the remote post functionality.
		// Maybe $messageEl is the corresponding li element. IDK, do what you want.
    function removePost($messageEl) {
			// TODO
			// Remove the message from the database. When it's done, update the view
    }

		// Maybe you can use this function to encapsulate the increment votes functionality.
		// Maybe $messageEl is the corresponding li element. IDK, do what you want.
    function updateVote($messageEl) {
			// TODO
			// Update the vote count in the database. When it's done, update the view
    }

		// TODO
		// There should be code here to get all the current messages and populate the view accordingly
  }

  function renderMessage(messageData) {
    var html = compile(messageData);
    $('.message-board').append(html);
  }

  function compile(messageData) {
    var source = $("#message-template").html();
    var template = Handlebars.compile(source);
    var html = template(messageData);
    return html;
  }
});
