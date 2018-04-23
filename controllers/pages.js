let login = (req, res) => {

    res.render('login');
}
let home = (req, res) => {

    res.render('home');
}

module.exports = {
    login,
    home
}