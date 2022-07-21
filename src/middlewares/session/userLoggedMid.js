const userLoggedMid = (req, res, next) => {
    const userLogged = req.session.userLogged;
    console.log(userLogged);
    (userLogged) ? res.render("perfil", { user : userLogged }) : next(); 
}

module.exports = userLoggedMid;