const express = require("express");
const router = express.Router();
const path = require("path");

//controller
const productController = require("../controller/productController");

//middlewares
//-multer
const { productUpload } = require("../middlewares/multer/multer");
//-validates
const validates = require("../middlewares/validations/productsValidations");
//-userSellMid
const userSellMid = require("../middlewares/session/userSellMid");

//Read ----------------------------------------------------------------
router.get("/detail/:id", productController.findByPk); //vista detalle de producto
router.post("/search", productController.findOne); //vista detalle de producto desde busqueda
//---------------------------------------------------------------------
//Create --------------------------------------------------------------
router.get("/add", userSellMid ,productController.formCreate); //vista formulario agregar producto
//-agregar producto
router.post("/create", productUpload.single("image"), validates.validateProduct, productController.create);
//---------------------------------------------------------------------
//Edit ----------------------------------------------------------------
router.get("/edit/:id", productController.formEdit); //vista formualrio editar producto
//-editar producto
router.put("/edit/:id", productUpload.single("image"), validates.validateProduct, productController.edit);
//---------------------------------------------------------------------
//Delete --------------------------------------------------------------
router.delete("/delete/:id", productController.delete); //borrar producto
//---------------------------------------------------------------------

/*
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
*/

module.exports = router;