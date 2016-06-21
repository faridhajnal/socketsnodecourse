var socket = io(); //from the socketio library

socket.on('connect', function(){

	console.log('connected to socket server');

});

socket.on('message', function(message){

	console.log('New message ' + message.text);

})