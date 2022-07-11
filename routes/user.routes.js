//modulos requeridos
const express = require("express");
const router = express.Router();
const path = require("path");
const multer  = require('multer')

//controlador
const userController = require("../controller/userController");

//validaciones
const validates = require("../public/js/validations/validations");

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
router.post("/login", validates.validateLogin, userController.processLogin);
//carga la vista del signin
router.get("/signin", userController.signin);
//procesa los datos del signin
router.post("/signin", upload.single("avatar"), validates.validateRegister, userController.processRegister);

module.exports = router;