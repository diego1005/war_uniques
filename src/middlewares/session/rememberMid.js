const f_modules = require("../../../public/js/controllerJS/userFunctions");

const rememberMid = (req, res, next) => {

    if (req.cookies.remember != undefined && req.session == undefined) {
        let userInCookie = f_modules.findOne(req.cookies.remember);
        req.session.userLogged = userInCookie;
    }

    next();

}

module.exports = rememberMid;