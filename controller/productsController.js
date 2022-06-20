const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../database/productsList.json");

const productsController = {
    detail: (req, res) => {
        res.render("detail");
    },
    cart: (req, res) => {
        res.render("cart");
    },
    sell: (req, res) => {
        res.render("sell");
    },
    edit: (req, res) => {
        res.render("edit");
    },
    add: (req, res) => {
        res.render("add");
    },
    create: (req, res) => {
        let product = req.body;
        let prodList = fs.readFileSync(filePath, "utf-8");
        prodList = JSON.parse(prodList);
        let len = prodList.length;
        product.id = len + 1;
        product.image = req.file.filename;
        prodList.push(product);
        prodList = JSON.stringify(prodList);
        fs.writeFileSync(filePath, prodList);
        prodList = JSON.parse(prodList);
        res.render("home", {prod: prodList});
    }
}

module.exports = productsController;