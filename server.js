//require packeges
var express = require("express");
var mysql = require("mysql");
var exphbs = require("express-handlebars");

var app = express();

var PORT = process.env.PORT || 8080;





app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});