const db = require("../database/models");
const { User } = require("../database/models");
const Op = db.Sequelize.Op;
const { validationResult } = require("express-validator");

const userController = {
    //Read ---------------------------------------------------------------
    findAll: (req, res) => {
        User.findAll()
            .then(result => {
                return res.send(result);
            })
            .catch(err => {
                return res.send(err)
            })
    },
    findByPk: (req, res) => {
        User.findByPk(req.params.id, {
        })
            .then(result => {
                if (result != undefined) {
                    return res.render("detail", { User: result });
                }
            })
            .catch(err => {
                return res.send(err)
            })
    },
    findOne: (req, res) => {
        User.findOne({
            where: {
                name: {
                    [Op.like]: `%${req.body.search}%`
                }
            },
        })
            .then(result => {
                result = (result != undefined) ? result : "No hay resultados";
                return res.render("detail", { User: result });
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
            User.create({
                name: req.body.name,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
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
        User.findByPk(req.params.id, {
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
            User.update({
                name: req.body.name,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
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
        User.destroy({
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
module.exports = userController;