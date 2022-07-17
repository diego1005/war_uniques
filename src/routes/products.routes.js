const express = require("express");
const router = express.Router();
const path = require("path");

//controller
const productsController = require("../../controller/productsController");

//middlewares
//-multer
const { productUpload } = require("../middlewares/multer/multer");
//-validates
const validates = require("../middlewares/validations/productsValidations");

//READ
//Carga la vista detalle de producto
router.get("/detail/:id", productsController.detail);

//Carga la vista carrito de compras
router.get("/cart", productsController.cart);

//CREATE
//Carga la vista vender producto
router.get("/add", productsController.add);
//Ruta que carga el producto nuevo
router.post("/create", productUpload.single("image"), validates.validateProduct ,productsController.create);

//EDIT
//Carga la vista editar producto
router.get("/edit/:id", productsController.edit);
//Ruta que edita el producto
router.put("/edit/:id", productUpload.single("image"), validates.validateProduct ,productsController.upgrade);

//DELETE
//Ruta que elimina el producto
router.delete("/delete/:id", productsController.delete);

module.exports = router;