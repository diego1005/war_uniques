const userFn = require("../../controller/userController");

const userNavMid = (req, res, next) => {
    let isLogged = {};
    if (req.session.userLogged != undefined) {
        isLogged = userFn.find(req.session.userLogged);
    } else {
        isLogged = false;
    }

    res.locals.isLogged = isLogged;

    next();
}

module.exports = userNavMid;