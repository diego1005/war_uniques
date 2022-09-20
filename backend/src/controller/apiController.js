const db = require("../database/models");
const { Product, User } = require("../database/models");
const Op = db.Sequelize.Op;

const apiController = {
    list: (req, res) => {
        res.send("hola");
    }
}

module.exports = apiController;