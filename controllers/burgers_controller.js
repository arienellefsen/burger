//import the files:
//Express
//burger.js

//crete router
//export routers

var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req, res) {
    res.send('Home Page for burgers!!!!');
});
module.exports = router;