const userLoggedMid = (req, res, next) => {
    const userLogged = req.session.userLogged;
    (userLogged) ? res.render("profile", { user: userLogged }) : next();
}

module.exports = userLoggedMid;