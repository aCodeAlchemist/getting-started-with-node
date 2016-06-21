var express, app, port;

express = require("express");
app = express();
port = 3000;

/** Main Route */
app.get('/', function (req, res) {
	res.sendFile("index.html", {
		root: __dirname + '/'
	});
});

/** Users route */
app.get('/users', function (req, res) {
	var users = [
		{"name": "Jay"},
		{"name": "Mani"},
		{"name": "Lahar"},
		{"name": "Harsh"}
	];
	res.status(200).send(users);
});

/** Start server on pre-configured port */
app.listen(port, function () {
	console.log("Listening at " + port + " !!");
});