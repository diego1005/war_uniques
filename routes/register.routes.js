const express = require("express");
const router = express.Router();

const registerController = require("../controller/registerController");

router.get("/login", registerController.login);
router.get("/signin", registerController.signin);

module.exports = router;