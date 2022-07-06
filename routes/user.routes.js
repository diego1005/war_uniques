//modulos requeridos
const express = require("express");
const router = express.Router();
const multer  = require('multer')
const path = require("path");
const {check} = require("express-validator")
//lista de usuarios
const userController = require("../controller/userController");

//configuarción de express-validator-------------------------------------------
let validateRegister = [
    check("name").notEmpty().withMessage("Debes completar el campo"),
    check("lastname").notEmpty().withMessage("Debes completar el campo"),
    check("email").isEmail().notEmpty().withMessage("El email no es valido"),
    check("password").isLength({min: 12}).notEmpty().withMessage("Contraseña invalida"),]
//-----------------------------------------------------------------------------

//configuración de multer------------------------------------------------------
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../public/images/avatares"))
    },
    filename: function (req, file, cb) {
        const filename = `${Date.now()}-img${path.extname(file.originalname)}`
        cb(null, filename)
    }
})
const upload = multer({storage})
//-----------------------------------------------------------------------------


//carga la vista del login
router.get("/login", userController.login);
//procesa los datos del login
router.post("/login", userController.loginB);
//carga la vista del signin
router.get("/signin", userController.signin);
//procesa los datos del signin
router.post("/signin", upload.single("avatar"), validateRegister, userController.signinB);

module.exports = router;