//import MySQL connection.
var connection = require("../config/connection");

//Helper function for generating MySQL syntax
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
};

//Helper function for generating MySQL syntax
function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        var value = ob[key];

        if (Object.hasOwnProperty.call(ob, key)) {

            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + "'";
            }

            arr.push(key + "=" + value);
        }
    }

    return arr.toString();
}

//in order to retrieve and store data in my database
var orm = {
    selectAll: function (tableInput, cb) {
        // Construct the query string that returns all rows from the target table
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            //return result in callback
            cb(result);
        });
    },

    //function that insert a single table entry
    insertOne: function (table, cols, vals, cb) {
        // Construct the query string that inserts a single row into the target table
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);
        
        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },

    //function that updates a single table entry
    updateOne: function (table, objColVals, condition, cb) {
        // Construct the query string that updates a single entry in the target table
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
}

//Export the orm object for use in other modules
module.exports = orm;



//`selectAll()` `insertOne()` `updateOne()