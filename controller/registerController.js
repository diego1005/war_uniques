const path = require("path");

const registerController = {
    login: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/login.html"));
    },
    signin: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/signin.html"));
    }
}

module.exports = registerController;