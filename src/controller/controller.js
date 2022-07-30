const db = require("../database/models");
const { Artist } = require("../database/models");

const controller = {
    //Read ---------------------------------------------------------------
    findAll: (req, res) => {
        Artist.findAll()
        .then(result => {
            return res.send(result);
        })
        .catch(err => {
            res.send(err)
        })
    },
    findByPk: (req, res) => {

    },
    findOne: (req, res) => {

    }
}

module.exports = controller;