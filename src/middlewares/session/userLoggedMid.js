const userLoggedMid = (req, res, next) => {
    if (req.session.userLogged != undefined) {
        let user = req.session.userLogged;
        return res.render("profile", { user });
    }else {
        next();
    }
}

module.exports = userLoggedMid;