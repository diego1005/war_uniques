const userNavMid = (req, res, next) => {
    res.locals.isLogged = (req.session.userLogged) ? req.session.userLogged : false;
    console.log("aca", res.locals.isLogged);

    next();
}

module.exports = userNavMid;