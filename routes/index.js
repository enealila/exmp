const pagesController  = require('../controllers').pages;


module.exports = (app)=>{
    
    app.get ('/login'                 ,     pagesController.login              );
    app.get ('/home'                 ,     pagesController.home              );
}