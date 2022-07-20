const rememberMid = (req, res, next) => {
    next();
    
    console.log(req.cookies);
    // if (req.cookies.remember != undefined) {
    //     console.log(req.cookies.remember);
    // }
}

module.exports = rememberMid;