var mongoose= require('mongoose');


var ImageSchema =  new mongoose.Schema({
fieldname:{
   type:String,
   
},
originalname:{
    type:String,
    
 },
 encoding:{
    type:String,
    
 },
 mimetype:{
    type:String,
    
 },
 destination:{
    type:String,
    
 },
 filename:{
    type:String,
    
 },
 path:{
    type:String,
    
 },
 size:{
    type:String,
    
 }
});


ImageSchema.methods.saveImage = function(newImage,callback) {
        newImage.save(callback);
}

ImageSchema.methods.findImages = function(filename,callback){
    var query = {filename:filename}
    Image.findOne(query,callback);
}
ImageSchema.methods.findImage = function(callback){
    Image.find({});
}
 module.exports= mongoose.model('Image',ImageSchema);



