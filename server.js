var express = require('express');
var PORT = process.env.PORT || 3333;
var app = express();
var http = require('http').Server(app); //we will start server with node (no express)
var io = require('socket.io')(http); //format that it expects.

app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket){ //socket:: individual connection

	console.log('user connected via socket.io');

	socket.on('message', function(message){

		console.log('Message received: ' + message.text);
		//socket.broadcast.emit('message', message); //everybody else...
		io.emit('message', message); //everyone including sender.
	}); //listens to events

	socket.emit('message', {
		text : 'Welcome to the chat app'
	});	

}) //connection event (function run when it happens)

http.listen(PORT, function(){
	console.log('Server started on port: ' + PORT);
})
