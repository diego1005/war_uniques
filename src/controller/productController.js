const db = require("../database/models");
const { Product } = require("../database/models");
const Op = db.Sequelize.Op;
const { validationResult } = require("express-validator");

const productController = {
    //Read ---------------------------------------------------------------
    findAll: (req, res) => {
        Product.findAll()
            .then(result => {
                return res.send(result);
            })
            .catch(err => {
                return res.send(err)
            })
    },
    findByPk: (req, res) => {
        Product.findByPk(req.params.id, {
            include: ["country"]
        })
            .then(result => {
                if (result != undefined) {
                    return res.render("detail", { prod: result });
                }
            })
            .catch(err => {
                return res.send(err)
            })
    },
    findOne: (req, res) => {
        Product.findOne({
            where: {
                name: {
                    [Op.like]: `%${req.body.search}%`
                }
            },
            include: ["country"]
        })
            .then(result => {
                result = (result != undefined) ? result : "No hay resultados";
                return res.render("detail", { prod: result });
            })
            .catch(err => {
                return res.send(err);
            })
    },
    //--------------------------------------------------------------------
    //Create -------------------------------------------------------------
    formCreate: (req, res) => {
        return res.render("add");
    },
    create: (req, res) => {
        //validacion de errores en el formulario de agregar producto
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            Product.create({
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                shipping: (req.body.shipping != undefined),
                offer: (req.body.offer != undefined),
                credit: (req.body.credit) ? req.body.credit : "No",
                imageURL: req.file.filename
            })
                .then(result => {
                    return res.redirect("home");
                })
                .catch(err => {
                    return res.send(err);
                })
        } else {
            res.render("add", { errors: errors.mapped(), old: req.body });
        }
    },
    //--------------------------------------------------------------------
    //Edit ---------------------------------------------------------------
    formEdit: (req, res) => {
        Product.findByPk(req.params.id, {
            include: ["country"]
        })
            .then(result => {
                return res.render("edit", { old: result });
            })
            .catch(err => {
                return res.send(err);
            })
    },
    edit: (req, res) => {
        //validacion de errores en el formulario de agregar producto
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            Product.update({
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                shipping: (req.body.shipping != undefined),
                offer: (req.body.offer != undefined),
                credit: (req.body.credit) ? req.body.credit : "No",
                imageURL: req.file.filename
            }, {
                where: {
                    id: req.params.id
                }
            })
                .then(result => {
                    return res.redirect("home");
                })
                .catch(err => {
                    return res.send(err)
                })
        } else {
            res.render("edit", { errors: errors.mapped(), old: req.body });
        }
    },
    //--------------------------------------------------------------------
    //Delete -------------------------------------------------------------
    delete: (req, res) => {
        Product.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(result => {
            return res.redirect("home");
        })
        .catch(err => {
            return res.send(err);
        })
    }
    //--------------------------------------------------------------------
}
module.exports = productController;