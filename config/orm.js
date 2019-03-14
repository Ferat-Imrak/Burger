//require connection.js
var connection = require("../config/connection");

//in order to retrieve and store data in my database
var orm = {
    selectAll: function() {
        var queryString = "SELECT * FROM burgers;";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    }
}

module.exports = orm;