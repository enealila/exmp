var mongoose= require('mongoose');


var BlockSchema =  new mongoose.Schema({

 name:{
    type: String
    
 },
 x:{
     type:String
 },
 y:{
     type: String
 },
 width:{
    type:String
},
height:{
    type: String
},

});



 module.exports= mongoose.model('Block',BlockSchema);



