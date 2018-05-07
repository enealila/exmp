const mongoose = require('mongoose');
const fs = require('fs');
const path  = require('path');
const Images = require('../models/Images');
const ObjectId    = mongoose.Types.ObjectId();
const Table   = require('../models/Table');
let listHeadersI = (req,res)=>{
    Promise.all([
        Images.find({}).exec(),
        Table.find({}).exec()
        ])
        .then(result => {
            const images = result[0];
            const table = result[1];
            console.log(images);
            console.log(table);
            res.render('home/list-headers-i', {
                images,table
                
            });
        })
        .catch(err => {
            console.log(err);
            res.redirect('/');
        })
}
let listHeadersT = (req,res)=>{
    Promise.all([
        Images.find({}).exec(),
        Table.find({}).exec()
        ])
        .then(result => {
            const images = result[0];
            const table = result[1];
            console.log(images);
            console.log(table);
            res.render('home/list-headers', {
                images,table
                
            });
        })
        .catch(err => {
            console.log(err);
            res.redirect('/');
        })
}

let removeT = (req,res)=>{
    const id = req.params;
    console.log(id);
    if(id) {
     Images.findOneAndRemove({_id: id}, (err) => {
        res.redirect('/home/list-headers');
            
        });
    }
}
let removeI = (req,res)=>{
    const id = req.params;
    console.log(id);
    if(id) {
     Images.findOneAndRemove({_id: id}, (err) => {
        res.redirect('/home/list-headers-i');
            
        });
    }
}

module.exports = {
    listHeadersI,
    listHeadersT,
    removeT,
    removeI,
}
