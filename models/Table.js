var mongoose= require('mongoose');


var TableSchema =  new mongoose.Schema({
name:{
   type:String,
   
},
sell:{
    type:String,
    
 },
buy:{
    type:String,
    
 },
});


TableSchema.methods.saveTable = function(newTable,callback) {
        newTable.save(callback);
}

TableSchema.methods.findTables = function(name,callback){
    var query = {name:name}
    Table.findOne(query,callback);
}
TableSchema.methods.findTable = function(callback){
    Table.find({});
}
 module.exports= mongoose.model('Table',TableSchema);



