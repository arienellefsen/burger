//Import files:
//orm.js
var orm = require('../config/orm.js');
var burger = {
    all: function() {
        orm.selectAll();
    }
};

module.exports = burger;