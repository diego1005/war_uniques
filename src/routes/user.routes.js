const express = require("express");
const router = express.Router();
const path = require("path");

//controller
const userController = require("../../controller/userController");

//middlewares
//-userLogged
const userLoggedMid = require("../middlewares/session/userLoggedMid");
//-userUnlogged
const userUnloggedMid = require("../middlewares/session/userUnloggedMid");
//-multer
const { userUpload } = require("../middlewares/multer/multer");
//-validations
const validates = require("../middlewares/validations/userValidations");

//login view
router.get("/login", userLoggedMid, userController.login);
//login process
router.post("/login", validates.validateLogin, userController.processLogin);
//signin view
router.get("/signin", userLoggedMid, userController.signin);
//signin process
router.post("/signin", userUpload.single("avatar"), validates.validateRegister, userController.processRegister);
//perfil view
router.get("/profile", userUnloggedMid, userController.profile);
//logout
 router.get("/logout",userController.logout);

module.exports = router;