const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../public/images/products-image"));
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`);
    }
})

const upload = multer({storage});

const productsController = require("../controller/productsController");

//READ
//Carga la vista detalle de producto
router.get("/detail/:id", productsController.detail);

//Carga la vista carrito de compras
router.get("/cart", productsController.cart);

//CREATE
//Carga la vista vender producto
router.get("/add", productsController.add);
//Ruta que carga el producto nuevo
router.post("/create", upload.single("image"), productsController.create);

//EDIT
//Carga la vista editar producto
router.get("/edit/:id", productsController.edit);
//Ruta que edita el producto
router.put("/edit/:id", upload.single("image"), productsController.upgrade);

//DELETE
//Ruta que elimina el producto
router.delete("/delete/:id", productsController.delete);

module.exports = router;