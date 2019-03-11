var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var router = express.Router();
var route = require('./server/routes').router;

var express = require('express');
var bodyParser = require('body-parser');
var Diagram = require('./api/diagram/diagram.controller');
var router = express.Router();
router.post('/saveUpdateDiagram',bodyParser,function(req,res){
    console.log(req.body);
});


app.use(express.static(path.join(__dirname, 'public')));
app.use('/', route);
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get("/", function(req, res){
    res
    .status(200)
    .sendFile(path.join(__dirname,"public", "login.html"));
    })
  

app.listen(8760, function() {
    console.log('I am listening 8760...');
});