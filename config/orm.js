var path = require('path');
var connection = require('../config/connection.js');
//create an object

var orm = {
    selectAll: function() {
        connection.query("SELECT * FROM burgers", function(err, data) {
            if (err) {
                console.log(err);
            }
            data.forEach(function(index) {
                console.log(index);
                return index;
            });
        });
    }
};

//insertOne();
//updateOne();

module.exports = orm;