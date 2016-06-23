var socket = io(); //from the socketio library

socket.on('connect', function(){

	console.log('connected to socket server');

});

socket.on('message', function(message){ //everytime new message comes in

	console.log('New message ' + message.text);

	jQuery('.messages').append('<p>' + message.text + '</p>');

})



var $form = jQuery('#message-form');

$form.on('submit', function(event){ //submit event, from browser

	event.preventDefault(); //for not submitting with page refresh <<old way>>


	var $inputMessage = $form.find('input[name=message]');

	socket.emit('message',{

		text : $inputMessage.val()

	});

	$inputMessage.val('');
	$inputMessage.focus();


})