const { check } = require("express-validator");
const path = require("path");

const validates = {

    //configuracion validaciones de agregar producto ------------------------------------------
    validateProduct: [
        check("country").notEmpty().withMessage("Debe elegir un pais de origen"),
        check("name").notEmpty().withMessage("Campo obligatorio"),
        check("description").notEmpty().withMessage("Campo obligatorio"),
        check("price").notEmpty().withMessage("Campo obligatorio"),
        check("image").custom((el, { req }) => {
            const ext = [".jpg", ".png", ".jpeg", ".webp"];
            const extFile = path.extname(req.file.originalname);
            return (ext.includes(extFile));
        }).withMessage(`Las extensiones validas son ${this.ext}`)
    ]


    //-----------------------------------------------------------------------------------------
}

module.exports = validates;