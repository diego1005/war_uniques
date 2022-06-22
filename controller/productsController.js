const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../database/productsList.json");

const productsController = {
    add: (req, res) => {
        res.render("add");
    },
    create: (req, res) => {
        let product = req.body;
        let prodList = fs.readFileSync(filePath, "utf-8");
        prodList = JSON.parse(prodList);
        let len = prodList.length;
        product.id = len + 1;
        product.price = parseFloat(product.price).toLocaleString();
        product.offer = (req.body.offer) ? true : false;
        product.shipping = (req.body.shipping) ? true : false;
        product.credit = (req.body.credit) ? req.body.credit : "No";
        product.image = req.file.filename;
        prodList.push(product);
        prodList = JSON.stringify(prodList);
        fs.writeFileSync(filePath, prodList);
        prodList = JSON.parse(prodList);
        res.render("home", { prod: prodList });
    },
    detail: (req, res) => {
        let product = fs.readFileSync(filePath, "utf-8");
        product = JSON.parse(product).find(el => el.id == req.params.id);
        let price = product.price.split(",").join("");
        let result = parseFloat(price) / parseFloat(product.credit);
        let credit = (product.credit != "No") ? result.toLocaleString("en-US") : false;
        res.render("detail", { prod: product, fee: credit });
    },
    edit: (req, res) => {
        res.render("edit");
    },
    delete: (req, res) => {
        let prodList = fs.readFileSync(filePath, "utf-8");
        prodList = JSON.parse(prodList);
        prodList = prodList.filter(el => el.id != req.params.id);
        prodList = JSON.stringify(prodList);
        fs.writeFileSync(filePath, prodList);
        prodList = JSON.parse(prodList);
        res.render("home", {prod: prodList});
    },
    cart: (req, res) => {
        res.render("cart");
    },
    sell: (req, res) => {
        res.render("sell");
    }
}

module.exports = productsController;