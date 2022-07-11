const { check } = require("express-validator")

const validates = {

    //configuarción validaciones de registro -----------------------------------------------
    validateRegister : [
        check("name").notEmpty().withMessage("Debes completar el campo"),
        check("lastname").notEmpty().withMessage("Debes completar el campo"),
        check("email").isEmail().notEmpty().withMessage("El email no es valido"),
        check("password").isLength({ min: 12 }).notEmpty().withMessage("Contraseña invalida")
    ],
    //---------------------------------------------------------------------------------------

    //configuracion validaciones de logueo --------------------------------------------------
    validateLogin : [
        check("user").notEmpty().withMessage("Campo obligatorio").bail().isEmail().withMessage("Email no válido"),
        check("password").notEmpty().withMessage("Campo obligatorio")
    ]
    //---------------------------------------------------------------------------------------
}

module.exports = validates;
