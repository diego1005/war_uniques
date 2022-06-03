const path = require("path");

const indexController = {
    home: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/home.html"));
    }
}

module.exports = indexController;