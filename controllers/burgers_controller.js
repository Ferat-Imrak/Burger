//dependencies
var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

//create the routes and associated logic
router.get("/", function(req, res) {
    
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        //console.log(hbsObject);
        res.render("index", hbsObject);
    });
    
});

router.post("/api/burgers", function(req, res) {
    console.log('req.body: ', req.body)
    burger.insertOne([
        "burger_name"
    ], [
        req.body.burger_name
    ], function(data) {
        
        res.redirect("/");
    });
});

router.put("api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
        devoured: true
    }, condition, function(data) {
        res.redirect("/");
    });
    // burger.updateOne({
    //     devoured: req.body.devoured
    // }, condition, function(result) {
    //     if(result.changeRows == 0) {
    //         return res.status(404).end();
    //     } else {
    //         res.status(200).end();
    //     }
    // });
});

//Export routes for server.js to use.
module.exports = router;