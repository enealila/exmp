
/* GET Home Page. */
let home = (req, res) => {

    // res.json('test home');
    res.render('home');
}
let profile = (req, res) => {

    // res.json('test home');
    res.render('profile');
}
 /* GET about Page. */
 let about = (req, res) => {
    res.render('about');
 }
 
/* GET Not Found Page. */
let notFound = (req, res) => {
    res.render('notFoundPage');
}


/* Exports All Modules */
module.exports = {
    home,
    profile,
    about,
    notFound
}
