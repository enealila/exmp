var mongoose= require('mongoose');


var LayoutSchema =  new mongoose.Schema({

 filenameHeader:{
    type: JSON
    
 },
 blocks:{
     type: JSON
 }
});



 module.exports= mongoose.model('Layout',LayoutSchema);



