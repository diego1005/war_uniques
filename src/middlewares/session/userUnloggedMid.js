const userUnloggedMid = (req, res, next) => {
    const userLogged = req.session.userLogged;
    (userLogged) ? res.render("profile", { user: userLogged }) : res.redirect("/");
    next();
}

module.exports = userUnloggedMid;