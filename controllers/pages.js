const mongoose 	  = require('mongoose');
const fs          = require('fs');
const path        = require('path');
const Images = require('../models/Images');
/* GET Home Page. */
let home = (req, res) => {
    Promise.all([
        Images.find({}).exec()
    ])
    .then(result => {
        const images = result[0];
        console.log(images);
        res.render('home/home', {
            images,
            
        });
    })
    .catch(err => {
        console.log(err);
        res.redirect('/');
    })

}
let profile = (req, res) => {

    Promise.all([
        Images.find({}).exec()
    ])
    .then(result => {
        const images = result[0];
        console.log(images);
        res.render('profile', {
            images,
            
        });
    })
    .catch(err => {
        console.log(err);
        res.redirect('/');
    })
}
 /* GET about Page. */
 let about = (req, res) => {
    res.render('about');
 }
 
/* GET Not Found Page. */
let notFound = (req, res) => {
    res.render('notFoundPage');
}


/* Exports All Modules */
module.exports = {
    home,
    profile,
    about,
    notFound
}
