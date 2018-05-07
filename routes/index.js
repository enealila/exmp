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

    app.post('/layout-image/uploadHeader'                             , imagesController.uploadHeaderI      );
    app.post('/layout-image/uploadVideo'                              , imagesController.uploadVideoI       );
    app.post('/layout-image/uploadFooter'                             , imagesController.uploadFooter       );
    app.post('/layout-image/uploadSlide'                              , imagesController.uploadSlideI       );

    app.post('/layout-table/uploadHeader'                             , imagesController.uploadHeaderT      );
    app.post('/layout-table/uploadVideo'                              , imagesController.uploadVideoT       );
    app.post('/layout-table/uploadSlide'                              , imagesController.uploadSlideT       );
 
    app.get('/home/layout-image/list-headers-i'                       , headerController.listHeadersI       );
    app.get('/home/layout-image/list-video-i'                         , videoController.listVideoI          );
    app.get('/home/layout-image/list-slide-i'                         , slideController.listSlideI          );
    app.get('/home/layout-image/list-footer'                          , footerController.listFooter         );

    app.get('/home/layout-image/list-headers/remove/:_id'             , headerController.removeI            );
    app.get('/home/layout-image/list-slide/remove/:_id'               , slideController.removeI             );
    app.get('/home/layout-image/list-video/remove/:_id'               , videoController.removeI             );
    app.get('/home/layout-image/list-footer/remove/:_id'              , footerController.remove             );

    app.get('/home/layout-table/list-headers'                         , headerController.listHeadersT       );
    app.get('/home/layout-table/list-video'                           , videoController.listVideoT          );
    app.get('/home/layout-table/list-slide'                           , slideController.listSlideT          );
    // app.get('/home/layout-table/list-footer'                          , footerController.listFooter         );

    app.get('/home/layout-table/list-headers/remove/:_id'             , headerController.removeT            );
    app.get('/home/layout-table/list-slide/remove/:_id'               , slideController.removeT             );
    app.get('/home/layout-table/list-video/remove/:_id'               , videoController.removeT             );
    // app.get('/home/layout-table/list-footer/remove/:_id'              , footerController.remove             );

    app.get('/home/layout-table/list-table'                           , tableController.listTable           );
    app.get('/home/layout-table/list-table/update/'                   , tableController.update              );
    app.post('/home/layout-table/list-table/update/:_id'              , tableController.update              );
    app.get('/home/layout-table'                                      , layoutController.listLayoutTable    );
    app.get('/home/layout-image'                                      , layoutController.listLayoutImage    );
}