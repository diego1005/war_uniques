const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");

let productList = require("../../structureJSON/databaseJSON/productsList.json");

const f_modules = require("../controllerJSON/controllerJS/JSON-productFunctions");

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
        //Validacion de errores en el formulario de agregar producto
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            let product = req.body;
            //Crear nuevo producto y actualizar lista de productos
            productList = f_modules.add(product, req.file, productList);
            res.render("home", { prod: productList });
        } else {
            res.render("add", { errors: errors.mapped(), old: req.body });
        }
    },
    edit: (req, res) => {
        let product = productList.find(el => el.id == req.params.id);
        res.render("edit", { prod: product });
    },
    upgrade: (req, res) => {
        //Validacion de errores en el formulario de agregar producto
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            let product = req.body;
            let id = req.params.id;
            //Borrar el producto a reemplazar y traer nueva lista sin ese producto
            productList = f_modules.erase(id, productList);
            //Crear nuevo producto y actualizar lista de productos
            productList = f_modules.add(product, req.file, productList);
            //Traer producto modificado para pasar a la vista
            let dataResult = f_modules.showOne(id, productList);
            res.render("detail", { prod: dataResult[0], fee: dataResult[1] });
        }else {
            res.render("edit", { errors: errors.mapped(), old: req.body });
        }
    },
    delete: (req, res) => {
        let id = req.params.id;
        //Eliminar producto
        productList = f_modules.erase(id, productList);
        //Actualizar lista
        productList = f_modules.write(productList);
        res.render("home", { prod: productList });
    },
    cart: (req, res) => {
        res.render("cart");
    }
}

module.exports = productsController;