const userFn = require("../../controller/userController");

const userUnloggedMid = (req, res, next) => {
    if (req.session.userLogged != undefined) {
        let user = userFn.find(req.session.userLogged);
        return res.render("profile", { user });
    }else {
        return res.redirect("/");
    }
}

module.exports = userUnloggedMid;