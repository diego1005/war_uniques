const express = require("express");
const router = express.Router();
const path = require("path");

//controller
const userController = require("../../controller/userController");

//middlewares
//-multer
const { userUpload } = require("../middlewares/multer/multer");
//-validations
const validates = require("../middlewares/validations/userValidations");

//login view
router.get("/login", userController.login);
//login process
router.post("/login", validates.validateLogin, userController.processLogin);
//signin view
router.get("/signin", userController.signin);
//signin process
router.post("/signin", userUpload.single("avatar"), validates.validateRegister, userController.processRegister);

module.exports = router;