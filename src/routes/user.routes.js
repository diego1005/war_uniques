const express = require("express");
const router = express.Router();
const path = require("path");

//controller
const userController = require("../controller/userController");

//middlewares
//-userLogged
const userLoggedMid = require("../middlewares/session/userLoggedMid");
//-userUnlogged
const userUnloggedMid = require("../middlewares/session/userUnloggedMid");
//-multer
const { userUpload } = require("../middlewares/multer/multer");
//-validations
const validates = require("../middlewares/validations/userValidations");

const userSellMid = require("../middlewares/session/userSellMid");

//Read ----------------------------------------------------------------
router.get("/detail/:id", userController.findByPk); //vista detalle de usuario
router.post("/search", userController.findOne); //vista detalle de usuario desde busqueda
//---------------------------------------------------------------------
//Create --------------------------------------------------------------
router.get("/signin", userSellMid ,userController.formCreate); //vista formulario agregar usuario
//-agregar usuario
router.post("/create", userUpload.single("image"), validates.validateRegister, userController.create);
//---------------------------------------------------------------------
//Edit ----------------------------------------------------------------
// router.get("/edit/:id", userController.formEdit); //vista formualrio editar usuario
//-editar usuario
// router.put("/edit/:id", userUpload.single("image"), validates.validateLogin, userController.edit);
//---------------------------------------------------------------------
//Delete --------------------------------------------------------------
router.delete("/delete/:id", userController.delete); //borrar usuario

module.exports = router;