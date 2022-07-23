const userLoggedMid = (req, res, next) => {
    const userLogged = req.session.userLogged;
    (userLogged) ? res.render("perfil", { user: userLogged }) : res.redirect("/");
    next();
}


module.exports = userLoggedMid;