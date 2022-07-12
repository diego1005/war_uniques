const { check } = require("express-validator")

const validates = {

    //configuarción validaciones de registro -----------------------------------------------
    validateRegister : [
        check("name").notEmpty().withMessage("Campo obligatorio"),
        check("lastname").notEmpty().withMessage("Campo obligatorio"),
        check("email").notEmpty().withMessage("Campo obligatorio").bail().isEmail().withMessage("Email no válido"),
        check("password").notEmpty().withMessage("Campo oblgatorio"),
        check("confirmPassword").notEmpty().withMessage("Campo oblgatorio").bail().custom((confirmPassword, { req }) => {
            if (confirmPassword != req.body.password) throw new Error("Las contraseñas no coinciden");
        }),
        check("avatar").notEmpty().withMessage("Debes subir una imagen de perfil")
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
