const fs = require("fs");
const path = require("path");

let productList = require("../database/productsList.json");

const f_modules = require("../public/js/controllerJS/productFunctions");

const productsController = {
    detail: (req, res) => {
        let id = req.params.id;
        //Buscar y traer producto en lista
        let dataResult = f_modules.showOne(id, productList);
        res.render("detail", { prod: dataResult[0], fee: dataResult[1] });
    },
    add: (req, res) => {
        res.render("add");
    },
    create: (req, res) => {
        let product = req.body;
        //Crear nuevo producto y actualizar lista de productos
        productList = f_modules.add(product, req.file, productList);
        res.render("home", { prod: productList });
    },
    edit: (req, res) => {
        let product = productList.find(el => el.id == req.params.id);
        res.render("edit", {prod: product});
    },
    upgrade: (req, res) => {
        let product = req.body;
        let id = req.params.id;
        //Borrar el producto a reemplazar y traer nueva lista sin ese producto
        productList = f_modules.erase(id, productList);
        //Crear nuevo producto y actualizar lista de productos
        productList = f_modules.add(product, req.file, productList);
        //Traer producto modificado para pasar a la vista
        let dataResult = f_modules.showOne(id, productList);
        res.render("detail", { prod: dataResult[0], fee: dataResult[1] });
    },
    delete: (req, res) => {
        let id = req.params.id;
        //Eliminar producto
        productList = f_modules.erase(id, productList);
        //Actualizar lista
        productList = f_modules.write(productList);
        res.render("home", {prod: productList});
    },
    cart: (req, res) => {
        res.render("cart");
    }
}

module.exports = productsController;