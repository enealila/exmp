const mongoose 		= require('mongoose');
// const bcrypt 		= require('bcrypt');
const Schema 		= mongoose.Schema;
const bcrypt = require('bcryptjs');

var UserSchema =  new mongoose.Schema({
name:{
   type:String,
   required: true,
    trim: true,
    minLength:5,
},
email:{
       type:String,
       required: true,
       trim: true,
       minLength:5,
       unique: true
   },
   lastname:{
       type:String,
       required: true
   },
   password:{
       type: 'String',
       require: true,
       minlength:6
   }
});
// var User = module.exports= mongoose.model('User',UserSchema);

UserSchema.methods.createUser = function(newUser,callback) {
bcrypt.genSalt(10, function(err, salt) {
   bcrypt.hash(newUser.password, salt, function(err, hash) {
     console.log(newUser.password); 
     newUser.password = hash;
     console.log(newUser.password); 
       newUser.save(callback);
   });
});}


UserSchema.methods.getUserByEmail = function(email,callback){
   var query = {email: email};
   console.log(query);
   User.findOne(query,callback);
}

UserSchema.methods.getUserById = function(id,callback){
   User.findById(id,callback);
}

UserSchema.methods.comparePassword = function(candidatePassword,hash,callback){
   bcrypt.compare(candidatePassword, hash, function(err,isMatch){
     console.log(candidatePassword);
   if(err) throw err;
   callback(null, isMatch);
   console.log(isMatch);
   });
}
// UserSchema.methods.hash = function(bcrypt,newUser.password){
// bcrypt.genSalt(10, function(err,salt){
//     bcrypt.hash(newUser.password, salt, function(err,hash){
//         console.log(newUser.password);
//         newUser.password = hash;
//     })
// })}
module.exports = mongoose.model('User', UserSchema);