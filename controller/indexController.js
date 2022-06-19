const fs = require("fs");
const path = require("path");

const indexController = {
    home: (req, res) => {
        let productsList = fs.readFileSync(path.join(__dirname, "../database/productsList.json"));
        productsList = JSON.parse(productsList);
        res.render("home", {prod: productsList});
    }
}

module.exports = indexController;