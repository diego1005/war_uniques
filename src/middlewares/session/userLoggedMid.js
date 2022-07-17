const userLoggedMid = (req, res, next) => {
    (req.session.userLogged) ? res.redirect("/") : next(); 
}

module.exports = userLoggedMid;