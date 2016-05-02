$(document).ready(function() {

  // connect to your Firebase application using your reference URL
  var messageAppReference = new Firebase("https://js-dev-test.firebaseio.com/");

  $('#message-form').submit(function(event) {
    // by default a form submit reloads the DOM which will subsequently reload all our JS
    // to avoid this we preventDefault()
    event.preventDefault()

    // grab user message input
    var message = $('#message').val()

    // clear message input (for UX purposes)
    $('#message').val('')

    // create a section for messages data in your db
    var messagesReference = messageAppReference.child('messages');

    // use the set method to save data to the messages
    messagesReference.push({
      message: message,
      votes: 0
    })

  })

  // // on initialization of app (when document is ready) get fan messages
  getFanMessages()

  function getFanMessages() {
    // retrieve messages data when .on() initially executes
    // and when its data updates
    messageAppReference.child('messages').on('value', function(results) {
      var $messageBoard = $('.message-board')
      var messages = []

      // iterate through results coming from database call; messages
      for (var msg in results.val()) {
        // get method is supposed to represent HTTP GET method
        var message = results.val()[msg].message
        var votes = results.val()[msg].votes

        // create message element
        var $messageListElement = $('<li></li>')
        // add message to li
        $messageListElement.html(message)

        // create delete element
        var $deleteElement = $('<i class="fa fa-trash pull-right delete"></i>')
        $deleteElement.click(function(e) {
          var id = $(e.target.parentNode).data('id')
          deleteMessage(id)
        })

        // add delete element
        $messageListElement.append($deleteElement)

        // create up vote element
        var $upVoteElement = $('<i class="fa fa-thumbs-up pull-right"></i>')
        $upVoteElement.click(function(e) {

          var id = $(e.target.parentNode).data('id')
          updateMessage(id, votes++)
        })

        // create down vote element
        var $downVoteElement = $('<i class="fa fa-thumbs-down pull-right"></i>')
        $downVoteElement.click(function(e) {
          var id = $(e.target.parentNode).data('id')
          updateMessage(id, votes--)
        })

        // add voting elements
        $messageListElement.append($upVoteElement)
        $messageListElement.append($downVoteElement)

        // show votes
        $messageListElement.append('<div class="pull-right">' + votes + '</div>')

        // add id as data attribute so we can refer to later for updating
        $messageListElement.attr('data-id', msg)

        // push element to array of messages
        messages.push($messageListElement)

        // remove lis to avoid dupes
        $messageBoard.empty()

        for (var i in messages) {
          $messageBoard.append(messages[i])
        }

      }
    })

  }

  function updateMessage(id, votes) {
    // find message whose objectId is equal to the id we're searching with
    var messageReference = new Firebase('https://js-dev-test.firebaseio.com/messages/' + id)

    // update votes property
    messageReference.update({
      votes: votes
    })
  }

  function deleteMessage(id) {
    // find message whose objectId is equal to the id we're searching with
    var messageReference = new Firebase('https://js-dev-test.firebaseio.com/messages/' + id)

    messageReference.remove()
  }
})