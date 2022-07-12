const express = require("express");
const router = express.Router();
const path = require("path");
const multer  = require('multer')

//controller
const userController = require("../controller/userController");

//validations
const validates = require("../public/js/validations/userValidations");

//multer settings------------------------------------------------------
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../public/images/user-image"));
    },
    filename: function (req, file, cb) {
        const filename = `${Date.now()}-img${path.extname(file.originalname)}`
        cb(null, filename)
    }
})
const upload = multer({storage})
//-----------------------------------------------------------------------------


//login view
router.get("/login", userController.login);
//login process
router.post("/login", validates.validateLogin, userController.processLogin);
//signin view
router.get("/signin", userController.signin);
//signin process
router.post("/signin", upload.single("avatar"), validates.validateRegister, userController.processRegister);

module.exports = router;