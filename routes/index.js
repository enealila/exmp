const pagesController       = require('../controllers').pages;
const accountsController    = require('../controllers').accounts;
const imagesController      = require('../controllers').images;
const headerController      = require('../controllers').header;
const videoController       = require('../controllers').video;
const slideController       = require('../controllers').slide;
const footerController      = require('../controllers').footer;
const user                  = require('../core/middleware/auth');
module.exports = (app) =>{
    
    app.get('/login'            , user.is.NOT_LOGGED    , accountsController.login      );
    app.get('/'                 , user.is.NOT_LOGGED    , accountsController.login      );
    app.get('/logout'           , user.is.LOGGED        , accountsController.logout     );
    app.get('/register'         , user.is.NOT_LOGGED    , accountsController.register   );
    app.get('/home'             , user.is.LOGGED        , pagesController.home          );
    app.get('/profile'          , user.is.LOGGED        , pagesController.profile       );
    app.get('/about'            , user.is.LOGGED        , pagesController.about         );
    app.post('/register'        , user.is.NOT_LOGGED    , accountsController.postSignup );
    app.post('/login'           , user.is.NOT_LOGGED    , accountsController.postLogin  );
//---------------------------------------------------------------------

    app.post('/uploadHeader'                             , imagesController.uploadHeader );
    app.post('/uploadVideo'                              , imagesController.uploadVideo  );
    app.post('/uploadFooter'                             , imagesController.uploadFooter );
    app.post('/uploadSlide'                              , imagesController.uploadSlide  );
    app.get('/home/list-headers'                         , headerController.listHeaders  );
    app.get('/home/list-video'                           , videoController.listVideo     );
    app.get('/home/list-slide'                           , slideController.listSlide     );
    app.get('/home/list-footer'                          , footerController.listFooter   );
    app.get('/home/list-headers/remove/:_id'             , headerController.remove       );
    app.get('/home/list-slide/remove/:_id'               , slideController.remove        );
    app.get('/home/list-video/remove/:_id'               , videoController.remove        );
    app.get('/home/list-footer/remove/:_id'              , footerController.remove       );
    
}