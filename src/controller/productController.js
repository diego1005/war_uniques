const db = require("../database/models");
const { Product } = require("../database/models");
const Op = db.Sequelize.Op;

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
        Product.findByPk(req.params.id)
            .then(result => {
                result = (result != undefined) ? result : "No hay resultados";
                return result;
            })
            .catch(err => {
                return res.send(err)
            })
    },
    findOne: (req, res) => {
        Product.findOne({
            where: {
                name: {
                    [Op.like]: `%${req.body.name}%`
                }
            }
        })
            .then(result => {
                result = (result != undefined) ? result : "No hay resultados";
                return result;
            })
            .catch(err => {
                return res.send(err);
            })
    },
    //--------------------------------------------------------------------
    //Create -------------------------------------------------------------
    formCreate: (req, res) => {
        res.render("createFormView");
    },
    create: (req, res) => {
        Product.create({
            name: "Soda Stereo"
        })
        .then(result => {
            return res.send(result);
        })
        .catch(err => {
            return res.send(err);
        })
    },
    //Edit ---------------------------------------------------------------
    formEdit: (req, res) => {
        res.render("editFormView");
    },
    edit: (req, res) => {
        Product.update()
    }
    //--------------------------------------------------------------------
}

module.exports = productController;