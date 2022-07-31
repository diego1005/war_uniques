const f_modules = require("../../../structureJSON/controllerJSON/controllerJS/JSON-userFunctions");

const rememberMid = (req, res, next) => {

    if (req.cookies.remember != undefined && req.session == undefined) {
        let userInCookie = f_modules.findOne(req.cookies.remember);
        req.session.userLogged = userInCookie;
    }

    next();

}

module.exports = rememberMid;