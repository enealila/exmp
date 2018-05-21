const mongoose = require('mongoose');
const fs = require('fs');
const path  = require('path');
const Images = require('../models/Images');
const ObjectId    = mongoose.Types.ObjectId();
const Table   = require('../models/Table');
const lay = require('../lay.json');
let listHeaders = (req,res)=>{
    var id= req.params._id;
    var idd = req.params.id;
    Promise.all([
        Images.find({}).exec(),
        Table.find({}).exec()
        ])
        .then(result => {
            const images = result[0];
            const table = result[1];
            console.log(images);
            console.log(table);
            console.log(id);
            console.log(lay);
            console.log(idd);
            res.render('home/list-headers', {
                images,table,lay,id,idd
                
            });
        })
        .catch(err => {
            console.log(err);
            res.redirect('/');
        })
}

let remove = (req,res)=>{
    const id = req.params;
    console.log(id);
    if(id) {
     Images.findOneAndRemove({_id: id}, (err) => {
        res.redirect('/home/list-headers');
            
        });
    }
}


module.exports = {
    listHeaders,
    remove,
}
