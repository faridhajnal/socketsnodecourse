var express = require('express');
var PORT = process.env.PORT || 3333;
var app = express();
var http = require('http').Server(app); //we will start server with node (no express)

app.use(express.static(__dirname + '/public'));

http.listen(PORT, function(){
	console.log('Server started on port: ' + PORT);
})
