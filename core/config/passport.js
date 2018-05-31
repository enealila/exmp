var LocalStrategy   = require('passport-local').Strategy;
var User            = require('../../models/User');
var bcrypt          = require('bcryptjs');
module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });
    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user);
        });
    });
    passport.use('local-signup', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },
    (req, email, password, done) => {
        process.nextTick(() => {
        if (req.body.email && req.body.password && req.body.name && req.body.lastname) {
            User.findOne({email: req.body.email, editable:true }).then(user => {
                if (user) {
                    return done(null, false, req.flash('signupMessage', 'Ky email ekziston i rregjistruar në këtë sistem.'));
                }
                if(!user) {
                    var newUser         = new User();
                    newUser.email       = req.body.email;
                    newUser.password    = req.body.password;
                    newUser.name        = req.body.name;
                    newUser.lastname    = req.body.lastname;

                    newUser.save((err) => {
                        if (err)
                            throw err;
                        return done(null, false, req.flash('success', 'Llogaria e re u krijua me sukses.'));
                    });
                }
            }).catch(err => {
                return done(err);
            })
        } else{
            return done(null, false, req.flash('fieldEmpty', 'Plotësoni fushat!.'));
         }
        });
    }));
    passport.use('local-login', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, (req, email, password, done) => {
        User.findOne({ email : email }, (err, user) => {
            if (err)
                return done(err);

            if (!user)
                return done(null, false, req.flash('loginMessage', 'Ky email nuk ekziston ne këtë sistem'));

            if (user.password!== password)
                return done(null, false, req.flash('loginMessage', 'Kujdes! Fjalëkalimi i gabuar!'));

            return done(null, user);
        });
    }));

};