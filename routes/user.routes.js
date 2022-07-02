const express = require("express");
const router = express.Router();
const { check } = require("express-validator")

const userController = require("../controller/userController");

let validateRegister = [
    check("name")
        .notEmpty().withMessage("Debe rellenar este campo"),
    check("lastname")
        .notEmpty().withMessage("Debe rellenar este campo"),
    check("email")
        .isEmail().notEmpty().withMessage("Debe rellenar este campo"),
    check("password")
        .notEmpty().withMessage("Debe rellenar este campo")
]


router.get("/login", userController.login);
router.post("/login", validateRegister, userController.loginB);

router.get("/signin", userController.signin);
router.post("/crearuser", validateRegister, userController.crearuser);

module.exports = router;