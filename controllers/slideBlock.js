const mongoose = require('mongoose');
const fs = require('fs');
const path  = require('path');
const Images = require('../models/Images');
const ObjectId    = mongoose.Types.ObjectId();

let listSlide = (req,res)=>{
    Promise.all([
        Images.find({ }).exec()
    ])
    .then(result => {
        const images = result[0];
        res.render('home/list-slide', {
            images,
        });
    })
    .catch(err => {
        console.log(err);
        res.redirect('/');
    })
}

let remove = (req,res)=>{
    const id = req.params._id;
    db.collection('images').deleteOne({ 
        _id: id 
      })
      .then(function(result) {
        // process result
      })
    res.redirect('/listHeaders');
    console.log('image deleted')
}

module.exports = {
    listSlide,
    remove,
}