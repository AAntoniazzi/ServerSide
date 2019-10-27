var express = require('express');
var router = express.Router();
var authService = require('../services/authService');

router.get('/login', function(req, res, next) {

    res.render('login', {msg: '' });
});

router.post('/login', function(req, res, next) {

    var email = req.body.email;
    var password = req.body.password;

    if (authService.validateUserEmailAndPassword(email, password)) {
        if (!req.session.authentucatedUsers) {
            req.session.authentucatedUsers = [];
        }
        
        var user = authService.getUserByEmail(email);
        user.loginToken = authService.generateToken();

        req.session.authentucatedUsers.push(user);
        res.cookie('loginToken', user.loginToken, {maxAge: 900000, httpOnly: true});

        res.redirect('/admin/posts');

    }

    res.render('login', {msg: 'Email e senha incorretos'});
});

module.exports = router;