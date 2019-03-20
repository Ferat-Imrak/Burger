//require mysql packeges
var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
    // DB is JawsDB on Heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    //create connection with mysql for data base
    var connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "ferhat5020",
        database: "burgers_db"

    });
};

//Make the connection to MySQL
connection.connect(function (err) {
    if (err) {
        console.log("error connection: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

//Make connection for orm to use
module.exports = connection;