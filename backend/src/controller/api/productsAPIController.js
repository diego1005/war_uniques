const db = require("../../database/models");
const { Product, sequelize } = require("../../database/models");
const Op = db.Sequelize.Op;

const productsAPIController = {
    list: (req, res) => {
        Product.findAll()
            .then(result => {
                return res.status(200).json({
                    count: result.length,
                    data: result,
                    status: 200
                });
            })
            .catch(err => {
                return res.json(err)
            })
    },
    totalForFlag: (req, res) => {
        Product.findAll({
            attributes: ["id_country", [sequelize.fn("COUNT", sequelize.col("id_country")), "total"]],
            group: "id_country",
            order: ["id_country"]
        })
            .then(result => {
                return res.json(result);
            })
            .catch(err => {
                return res.json(err);
            })
    },
    listTheLast: (req, res) => {
        Product.findAll({
            order: [["id", "DESC"]],
            limit: 1
        })
        .then(result => {
            return res.status(200).json({
                data: result,
                status: 200
            });
        })
        .catch(err => {
            return res.status(500).json(err);
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