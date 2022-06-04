const productsController = {
    detail: (req, res) => {
        res.render("detail");
    },
    cart: (req, res) => {
        res.render("cart");
    }
}

module.exports = productsController;