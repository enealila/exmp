const mongoose    = require('mongoose');
const User        = mongoose.model('User');
// const ObjectId    = mongoose.Types.ObjectId();
const fs          = require('fs');
const path        = require('path');
const passport    = require('passport');
const flash       = require('express-flash');
const crypto      = require("crypto");
const user        = require('../core/middleware/auth');
const querystring = require('querystring');


/* GET Login Page. */
let login = (req, res) => {
    res.render('login', {
        message:      req.flash('loginMessage'),
        messageEmail: req.flash('signupMessage'),
        user:         req.user
    });
}

/* GET register Page. */
let register = (req, res) => {
   res.render('register');
}

/* GET home Page. */
let home = (req, res) => {
    res.render('home');
}

/* GET Logout. */
let logout = (req, res) => {
    if (req.session) { req.session.destroy(); }
    res.redirect('/login');
}

/* POST Login. */
let postLogin = passport.authenticate('local-login', {
    successRedirect: '/home',
    failureRedirect: '/login',
    failureFlash: true
});

/* POST Signup. */
let postSignup = passport.authenticate('local-signup', {
    successRedirect: '/login',
    failureRedirect: '/register',
    failureFlash: true
});

/* Exports All Modules */
module.exports = {
    login,
    logout,
    postLogin,
    postSignup,
    register,
}