const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../database/productsList.json");
let productsList = require("../database/productsList.json");

const indexController = {
    home: (req, res) => {
        res.render("home", {prod: productsList});
    }
}

module.exports = indexController;