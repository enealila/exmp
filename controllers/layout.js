const mongoose      = require('mongoose');
const fs            = require('fs');
const path          = require('path');
const Images        = require('../models/Images');
const ObjectId      = mongoose.Types.ObjectId();
const Table         = require('../models/Table');
const Layout        = require('../models/Layout');
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

let save = ((req,res)=>{
    var filenameHeader = req.params.filename;
   
    console.log('Images : ');
    var newLayout = new Layout ({
        filenameHeader:filenameHeader
    });
    
    newLayout.save(newLayout,function(err,layout){
        if(err) console.log(err);
        console.log(layout);
    });
        
    
// fs.mkdir("output/layout-1",function(){
//     fs.writeFile("output/layout-1/layout1.txt",JSON.stringify(images),function(){
//         console.log('file created!');
//     });
// })
    res.redirect('/home/layout-image/');
})

module.exports = {
    listLayoutImage,
    listLayoutTable,
    save,
}