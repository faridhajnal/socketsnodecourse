var express = require('express');
var PORT = process.env.PORT || 3333;
var app = express();
var http = require('http').Server(app); //we will start server with node (no express)
var io = require('socket.io')(http); //format that it expects.

app.use(express.static(__dirname + '/public'));

io.on('connection', function(){

	console.log('user connected via socket.io');	

}) //connection event (function run when it happens)

http.listen(PORT, function(){
	console.log('Server started on port: ' + PORT);
})
