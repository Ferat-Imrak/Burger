//require mysql packeges
var mysql = require("mysql");

//create connection with mysql for data base
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "ferhat5020",
    database: "burgers_db"

});

connection.connect(function(err) {
    if(err) {
        console.log("error connection: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

//Make connection for orm to use
module.exports = connection;