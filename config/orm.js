//import MySQL connection.
var connection = require("../config/connection");

//in order to retrieve and store data in my database
var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM" + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO" + table;
    }
}

module.exports = orm;



//`selectAll()` `insertOne()` `updateOne()