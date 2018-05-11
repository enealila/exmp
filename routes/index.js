const pagesController       = require('../controllers').pages;
const accountsController    = require('../controllers').accounts;
const imagesController      = require('../controllers').images;
const headerController      = require('../controllers').header;
const videoController       = require('../controllers').video;
const slideController       = require('../controllers').slide;
const footerController      = require('../controllers').footer;
const user                  = require('../core/middleware/auth');
const block                 = require('../controllers').block;
const tableController       = require('../controllers').table;
const layoutController      = require('../controllers').layout;

module.exports = (app) =>{
    
    app.get('/login'            , user.is.NOT_LOGGED                            , accountsController.login      );
    app.get('/'                 , user.is.NOT_LOGGED                            , accountsController.login      );
    app.get('/logout'           , user.is.LOGGED                                , accountsController.logout     );
    app.get('/register'         , user.is.NOT_LOGGED                            , accountsController.register   );
    app.get('/home'             , user.is.LOGGED                                , pagesController.home          );
    app.get('/profile'          , user.is.LOGGED                                , pagesController.profile       );
    app.get('/about'            , user.is.LOGGED                                , pagesController.about         );
    app.post('/register'        , user.is.NOT_LOGGED                            , accountsController.postSignup );
    app.post('/login'           , user.is.NOT_LOGGED                            , accountsController.postLogin  );

//---------------------------------------------------------------------

    app.post('/uploadHeader'                                           , imagesController.uploadHeader      );
    app.post('/uploadVideo'                                            , imagesController.uploadVideo       );
    app.post('/uploadFoote'                                            , imagesController.uploadFooter      );
    app.post('/uploadSlide'                                            , imagesController.uploadSlide       );

    app.get('/home/list-headers'               , user.is.LOGGED         , headerController.listHeaders      );
    app.get('/home/list-video'                 , user.is.LOGGED         , videoController.listVideo         );
    app.get('/home/list-slide'                 , user.is.LOGGED         , slideController.listSlide         );
    app.get('/home/list-footer'                , user.is.LOGGED         , footerController.listFooter       );

    app.get('/home/list-layout'                , user.is.LOGGED         , layoutController.listLayout       );

    app.get('/home/list-headers/remove/:_id'   , user.is.LOGGED         , headerController.remove            );
    app.get('/home/list-slide/remove/:_id'     , user.is.LOGGED         , slideController.remove             );
    app.get('/home/list-video/remove/:_id'     , user.is.LOGGED         , videoController.remove             );
    app.get('/home/list-footer/remove/:_id'    , user.is.LOGGED         , footerController.remove            );

    app.get('/home/list-headers/remove/:_id'   , user.is.LOGGED         , headerController.remove            );
    app.get('/home/list-slide/remove/:_id'     , user.is.LOGGED         , slideController.remove             );
    app.get('/home/list-video/remove/:_id'     , user.is.LOGGED         , videoController.remove             );

    app.get('/home/list-table'                  , user.is.LOGGED        , tableController.listTable          );
    app.get('/home/list-table/update/'          , user.is.LOGGED        , tableController.update             );
    app.post('/home/list-table/update/:_id'     , user.is.LOGGED        , tableController.update             );
    app.get('/home/save/:src'                   , user.is.LOGGED        , layoutController.save              );
}