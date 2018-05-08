var mongoose= require('mongoose');


var LayoutSchema =  new mongoose.Schema({

 filenameHeader:{
    type: String
    
 }
});



 module.exports= mongoose.model('Layout',LayoutSchema);



