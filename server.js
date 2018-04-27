const db                   = require('./models/db');
const port                 = process.env.PORT || 3000;
const express              = require('express');
const app                  = express();
const path                 = require('path');
const cookieParser         = require('cookie-parser');
const bodyParser           = require('body-parser');
 const flash                = require('connect-flash');
const session              = require('express-session');
const passport             = require('passport');

require('./core/config/passport')(passport);

app.set('views', path.join(__dirname, 'views/pages'));
app.set('view engine', 'ejs');

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

require('./routes')(app);

app.listen(port, () => {
    console.log(`The server is running on PORT ${port}`);
});

module.exports = app;