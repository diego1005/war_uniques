const userController = {
    login: (req, res) => {
        res.render("login");
    },
    signin: (req, res) => {
        res.render("signin");
    }
}

module.exports = userController;