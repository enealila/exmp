var mongoose = require( 'mongoose' );

var dbURI = 'mongodb://localhost:27017/project2';

mongoose.connect(dbURI);


mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + dbURI);
});

//DECLARE MODELS
require('./User');

