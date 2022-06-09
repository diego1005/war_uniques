const productsController = {
    detail: (req, res) => {
        res.render("detail");
    },
    cart: (req, res) => {
        res.render("cart");
    },
    sell: (req, res) => {
        res.render("sell");
    }
}

module.exports = productsController;