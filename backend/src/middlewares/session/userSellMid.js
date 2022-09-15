const userSellMid = (req, res, next) => {
    const userLogged = req.session.userLogged;
    (userLogged) ? res.render("add") : res.redirect("/");
}

module.exports = userSellMid;