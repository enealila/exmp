const mongoose      = require('mongoose');
const fs            = require('fs');
const path          = require('path');
const Layout        = require('../models/Layout');

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

module.exports = {
    save,
}