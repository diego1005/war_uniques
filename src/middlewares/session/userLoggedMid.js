const userFn = require("../../controller/userController");

const userLoggedMid = (req, res, next) => {
    if (req.session.userLogged != undefined) {
        let user = userFn.find(req.session.userLogged);
        console.log("aca", user);
        return res.render("profile", { user });
    }else {
        next();
    }
}

module.exports = userLoggedMid;