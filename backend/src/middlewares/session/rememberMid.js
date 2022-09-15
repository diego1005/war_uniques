const rememberMid = (req, res, next) => {
    if (req.cookies.remember != undefined && req.session.userLogged == undefined) {
        let userInCookies = req.cookies.remember;
        req.session.userLogged = userInCookies;
    }

    next();
}

module.exports = rememberMid;