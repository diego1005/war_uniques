const userNavMid = (req, res, next) => {
    let isLogged = (req.session.userLogged) ? req.session.userLogged : false;

    res.locals.isLogged = isLogged;

    next();
}

module.exports = userNavMid;