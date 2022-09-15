const userNavMid = (req, res, next) => {
    if (req.session.userLogged != undefined) {
        res.locals.isLogged = req.session.userLogged;
    } else {
        res.locals.isLogged = false;
    }

    next();
}

module.exports = userNavMid;