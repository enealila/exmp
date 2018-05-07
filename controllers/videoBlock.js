const mongoose = require('mongoose');
const fs = require('fs');
const path  = require('path');
const Images = require('../models/Images');
const ObjectId    = mongoose.Types.ObjectId();
const Table    = require('../models/Table');

let listVideoI = (req,res)=>{
    Promise.all([
        Images.find({}).exec(),
        Table.find({}).exec()
        ])
        .then(result => {
            const images = result[0];
            const table = result[1];
            console.log(images);
            console.log(table);
            res.render('home/list-video-i', {
                images,table
                
            });
        })
        .catch(err => {
            console.log(err);
            res.redirect('/');
        })
}
let listVideoT = (req,res)=>{
    Promise.all([
        Images.find({}).exec(),
        Table.find({}).exec()
        ])
        .then(result => {
            const images = result[0];
            const table = result[1];
            console.log(images);
            console.log(table);
            res.render('home/list-video', {
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
        res.redirect('pages/home/home/layout-table/list-video');
            
        });
    }
}
let removeI = (req,res)=>{
    const id = req.params;
    console.log(id);
    if(id) {
     Images.findOneAndRemove({_id: id}, (err) => {
        res.redirect('/home/layout-image/list-video');
            
        });
    }
}



module.exports = {
    listVideoI,
    listVideoT,
    removeT,
    removeI,
}