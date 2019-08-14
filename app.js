var express = require('express');
var app = express();
//var bodyParser = require('body-parser');

app.get('/getdata', function(req, res){
	console.log("Jenkins @ ah06701")
	console.log("India")
	res.send("India is great : ")
})

app.listen(8000);

