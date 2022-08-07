const userNavMid = (req, res, next) => {
    res.locals.isLogged = (req.session.userLogged) ? req.session.userLogged : false;

    next();
}

module.exports = userNavMid;