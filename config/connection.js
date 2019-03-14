//require mysql packeges
var mysql = require("mysql");

//create connection with mysql for data base
var connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    port: 3306,
    database: "burgers_db"

});

connection.connect(function(err) {
    if(err) {
        console.log("error connection: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;