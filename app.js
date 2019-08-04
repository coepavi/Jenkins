var express = require('express');
var app = express();
//var bodyParser = require('body-parser');

app.get('/getdata', function(req, res){
	console.log("Jenkins @ ah06701")
	res.send("Test check")
})

app.listen(8000);

