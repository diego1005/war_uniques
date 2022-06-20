const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../database/productsList.json");

const indexController = {
    home: (req, res) => {
        let productsList = fs.readFileSync(filePath, "utf-8");
        productsList = JSON.parse(productsList);
        res.render("home", {prod: productsList});
    }
}

module.exports = indexController;