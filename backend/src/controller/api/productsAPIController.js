const db = require("../../database/models");
const { Product, sequelize } = require("../../database/models");
const Op = db.Sequelize.Op;

const productsAPIController = {
    list: (req, res) => {
        Product.findAll()
            .then(result => {
                return res.json(result);
            })
            .catch(err => {
                return res.error(err)
            })
    },
    totalForFlag: (req, res) => {
        Product.count({
            where: {
                id_country: req.params.flag
            }
        })
            .then(result => {
                console.log(result);
                return res.json(result);
            })
            .catch(err => {
                return res.error(err);
            })
    },
    listOne: (req, res) => {
        Product.findByPk(req.params.id, {
        })
            .then(result => {
                return res.json(result);
            })
            .catch(err => {
                return res.error(err);
            })
    },
    create: (req, res) => {
        Product.create({
            name: req.body.name,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            imageURL: req.file.filename
        })
            .then(result => {
                return res.json(result);
            })
            .catch(err => {
                return res.error(err);
            })
    },
    edit: (req, res) => {
        Product.update({
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
                return res.json(result);
            })
            .catch(err => {
                return res.error(err)
            })
    },
    delete: (req, res) => {
        Product.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(result => {
                return res.redirect("/");
            })
            .catch(err => {
                return res.send(err);
            })
    }
}

module.exports = productsAPIController;