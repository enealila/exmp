const mongoose = require('mongoose');
const fs = require('fs');
const path  = require('path');
const Images = require('../models/Images');
const ObjectId    = mongoose.Types.ObjectId();

let listVideo = (req,res)=>{
    Promise.all([
        Images.find({ }).exec()
    ])
    .then(result => {
        const images = result[0];
        res.render('home/list-video', {
            images,
        });
    })
    .catch(err => {
        console.log(err);
        res.redirect('/');
    })
}

let remove = (req,res)=>{
    const id = req.ObjectId;
    Images.findByIdAndRemove({ObjectId:id});
    res.redirect('/listHeaders');
    console.log('image deleted')
}

module.exports = {
    listVideo,
    remove,
}