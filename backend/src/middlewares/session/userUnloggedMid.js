const userUnloggedMid = (req, res, next) => {
    if (req.session.userLogged != undefined) {
        let user = req.session.userLogged;
        return res.render("profile", { user });
    }else {
        return res.redirect("/");
    }
}

module.exports = userUnloggedMid;