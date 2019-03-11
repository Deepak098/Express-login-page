var app = require('express')();
var express = require('express');
var http = require('http').Server(app);
var bodyParser = require('body-parser');
var path = require('path');
var router = express.Router();



app.use('/public', router);
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', function(req, res){
  res.sendFile(__dirname + '/new.html');
});


app.post('/', function(req, res) {
    
    res.sendFile(__dirname +'/si.html');
});
/*router.post('/login',bodyParser,function(req,res){
  res.sendFile(__dirname +'/login.html');
});*/

http.listen(3000, function(){
  console.log('listening on *:3000');
});