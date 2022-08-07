const rememberMid = (req, res, next) => {
    req.session.userLogged = (req.cookies.remember != undefined && req.session == undefined) ? res.cookies.remember : next();

}

module.exports = rememberMid;