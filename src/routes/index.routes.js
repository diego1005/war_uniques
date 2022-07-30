const express = require("express");
const router = express.Router();

// const indexController = require("../../controller/indexController");
const controller = require("../controller/controller");

// router.get("/", indexController.home);

router.get("/", controller.findAll);

module.exports = router;
