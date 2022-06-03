const path = require("path");

const productsController = {
    detail: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/detail.html"));
    },
    cart: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/chart.html"));
    }
}

module.exports = productsController;