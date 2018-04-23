const pagesController  = require('../controllers').pages;
const accountsController  = require('../controllers').accounts;
const user  = require('../core/middleware/auth');
module.exports = (app) =>{
    
    app.get('/login'            , user.is.NOT_LOGGED    , accountsController.login      );
    app.get('/logout'            , user.is.LOGGED        , accountsController.logout     );
    app.get('/register'         , user.is.NOT_LOGGED    , accountsController.register   );
    app.get('/home'             , user.is.LOGGED        , pagesController.home          );
    app.get('/profile'          , user.is.LOGGED        , pagesController.profile       );
    app.get('/about'            , user.is.LOGGED        , pagesController.about         );
    app.post('/register'        , user.is.NOT_LOGGED    ,  accountsController.postSignup);
    app.post('/login'           , user.is.NOT_LOGGED    ,  accountsController.postLogin );
}