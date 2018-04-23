const db                   = require('./models/db');
const port                 = process.env.PORT || 3000;
const express              = require('express');
const app                  = express();
const path                 = require('path');
// const favicon              = require('serve-favicon');
// const logger               = require('morgan');
const cookieParser         = require('cookie-parser');
const bodyParser           = require('body-parser');
 const flash                = require('connect-flash');
const session              = require('express-session');
const passport             = require('passport');
// const jwt                  = require('jsonwebtoken');
// const config               = require('./core/config/index');
 require('./core/config/passport')(passport);
const mongoose          = require('mongoose');
// app.use(function(req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
// });
app.set('views', path.join(__dirname, 'views/pages'));
app.set('view engine', 'ejs');

// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// app.locals.moment = require('moment');

require('./routes')(app);


// app.use(function(req, res, next) {
//   const err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

/*  Error Handler */
// app.use(function(err, req, res, next) {
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//   res.status(err.status || 500);
//   res.render('error');
// });


app.listen(port, () => {
    console.log(`The server is running on PORT ${port}`);
});


// app.get('*', (req, res) => res.status(200).send({
//     message: 'Welcome to the beginning of nothingness.',
// }));


module.exports = app;