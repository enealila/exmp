const mongoose 	    = require('mongoose');
const fs            = require('fs');
const path          = require('path');
const Images        = require('../models/Images');
const Table         = require('../models/Table');
const Layout        = require('../models/Layout')
const Blocks        = require('../models/Blocks');
const lay          = require('../lay.json');

/* GET Home Page. */
let home = (req, res) => {
    Promise.all([
    Images.find({}).exec(),
    Table.find({}).exec(),
    Layout.find({}).exec(),
    Blocks.find({}).exec()
    ])
    .then(result => {
        const images = result[0];
        const table = result[1];
        const layout = result[2];
        console.log(images);
        console.log(table);
        console.log(layout);
        console.log(lay);
        res.render('home/home', {
            images,
            table,
            layout,
            lay ,
        });
    })
    .catch(err => {
        console.log(err);
        res.redirect('/');
    })

}
let profile = (req, res) => {

    Promise.all([
        Images.find({}).exec(),
        Table.find({}).exec()
        ])
        .then(result => {
            const images = result[0];
            const table = result[1];
            console.log(images);
            console.log(table);
            res.render('profile', {
                images,table
                
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
    res.render('home/home');
}


/* Exports All Modules */
module.exports = {
    home,
    profile,
    about,
    notFound
}
