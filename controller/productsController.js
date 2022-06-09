const productsController = {
    detail: (req, res) => {
        res.render("detail");
    },
    cart: (req, res) => {
        res.render("cart");
    },
    sell: (req, res) => {
        res.render("sell");
    },
    edit: (req, res) => {
        res.render("edit");
    }
}

module.exports = productsController;