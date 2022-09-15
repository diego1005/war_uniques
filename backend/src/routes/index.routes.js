const express = require("express");
const router = express.Router();

const indexController = require("../controller/indexController");

//Home -------------------------------------------------------------------
router.get("/", indexController.findAll);
//Cart -------------------------------------------------------------------
router.get("/cart", indexController.cart);

module.exports = router;
