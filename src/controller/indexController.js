const db = require("../database/models");
const { Product } = require("../database/models");

const indexController = {
    findAll: (req, res) => {
        Product.findAll({
            include: ["country"]
        })
        .then(result => {
            return res.render("home", { prod: result});
        })
    }
}

module.exports = indexController;