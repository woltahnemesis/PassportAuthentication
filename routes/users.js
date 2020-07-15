'use strict';
var express = require('express');
var router = express.Router();
var User = require('../models/user.js');
var MongoClient = require('mongodb').MongoClient;

/* GET users listing. */
//router.get('/', function (req, res) {
//    res.send('respond with a resource');
//});

router.get('/', function (req, res) {

    User.find({}, function (err, users) {

        var userMap = {};

        users.forEach(function (user) {

            userMap[user._id] = user;

        });

        res.send(userMap);
        res.render('users', { user: userMap } );
    });

});


module.exports = router;
