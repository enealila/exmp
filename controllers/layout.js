const mongoose      = require('mongoose');
const fs            = require('fs');
const path          = require('path');
const Layout        = require('../models/Layout');
const Images        = require('../models/Images');
const Table         = require('../models/Table');
const Blocks        = require('../models/Blocks');
const lay          = require('../lay.json');
let save = ((req,res)=>{
    var filenameHeader = req.params;
    console.log('============================================================');
    console.log(filenameHeader);
    var newLayout = new Layout ({
        filenameHeader : filenameHeader

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
    res.redirect('/home/');
})
let listLayout = (req,res)=>{
    var id = req.params.id;
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
            res.render('home/list-layout', {
                images,table,lay,id
                
            });
        })
        .catch(err => {
            console.log(err);
            res.redirect('/');
        })
}


module.exports = {
    save,
    listLayout,
}