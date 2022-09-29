const db = require("../../database/models");
const { User } = require("../../database/models");
const Op = db.Sequelize.Op;

const userAPIController = {
    list: (req, res) => {
        User.findAll()
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
    listOne: (req, res) => {
        User.findByPk(req.params.id, {
        })
            .then(result => {
                return res.json(result);
            })
            .catch(err => {
                return res.error(err);
            })
    },
    create: (req, res) => {
        User.create({
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
                return res.json(result);
            })
            .catch(err => {
                return res.error(err)
            })
    },
    delete: (req, res) => {
        User.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(result => {
                return res.json(result);
            })
            .catch(err => {
                return res.error(err);
            })
    }
}

module.exports = userAPIController;

