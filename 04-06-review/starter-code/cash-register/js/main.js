

var $form = $('#entry');
var $costInput = $('#newEntry');

$(function() {

	$form.on('submit', function(event) {
		event.preventDefault();

		var cost = $costInput.val();

		console.log(cost)
	});

});