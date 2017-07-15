var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers123: data,

        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", function(req, res) {
    console.log(req.body);
    burger.create(["burger_name"], [req.body.name],
        function(alert) {
            res.redirect("/");

        });
});
router.put("/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    burger.update({
        devoured: req.body.devoured
    },  condition, function() {
        res.redirect("/");
    });
});
module.exports = router;