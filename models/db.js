var mongoose = require( 'mongoose' );

var dbURI = 'mongodb://localhost:27017/exmp';

mongoose.connect(dbURI);


mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + dbURI);
});

//DECLARE MODELS
require('./User');

