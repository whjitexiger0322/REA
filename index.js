var express = require("express");
var app = express();

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8020");
		res.header("Access-Control-Allow-Headers", "X-Requested-With");
		res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
		next();
});

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
	res.sendFile("index.html");
});

app.listen(8080);