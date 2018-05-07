const mongoose = require('mongoose');
const fs = require('fs');
const path  = require('path');
const Images = require('../models/Images');
const ObjectId    = mongoose.Types.ObjectId();
const Table     = require('../models/Table');

let listLayoutTable = (req,res)=>{
    Promise.all([
        Images.find({}).exec(),
        Table.find({}).exec()
        ])
        .then(result => {
            const images = result[0];
            const table = result[1];
            console.log(images);
            console.log(table);
            res.render('home/layout-table', {
                images,table
                
            });
        })
        .catch(err => {
            console.log(err);
            res.redirect('/');
        })
}


let listLayoutImage = (req,res)=>{
    Promise.all([
        Images.find({}).exec(),
        Table.find({}).exec()
        ])
        .then(result => {
            const images = result[0];
            const table = result[1];
            console.log(images);
            console.log(table);
            res.render('home/layout-image', {
                images,table
                
            });
        })
        .catch(err => {
            console.log(err);
            res.redirect('/');
        })
}


module.exports = {
    listLayoutImage,
    listLayoutTable,
}