const db = require("../database/models");
const { Product } = require("../database/models");
const Op = db.Sequelize.Op;

const indexController = {
    findAll: (req, res) => {
        const productOffers = Product.findAll({
            where: {
                offer: { [Op.like]: 1 }
            },
            limit: 4,
            include: ["country"]
        });
        const productShipping = Product.findAll({
            where: {
                shipping: { [Op.like]: 1 }
            },
            limit: 4,
            include: ["country"]
        });
        Promise.all([productOffers, productShipping])
        .then(([resultOffer, resultShipping]) => {
            return res.render("home", { prodO: resultOffer, prodS: resultShipping });
        })
        .catch(err => {
            return res.send(err)
        })
    },
    cart: (req, res) => {
        return res.render("cart");
    }
}

module.exports = indexController;