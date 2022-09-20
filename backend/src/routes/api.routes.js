const express = require("express");
const router = express.Router();

const apiController = require("../controller/apiController");

//PRODUCTS
//Read -------------------------------------------------------------------
router.get("/products", apiController.list);

//Otras funciones
/*
router.get("/products/:id", apiController.listOne);
//Create -------------------------------------------------------------------
router.post("/products/add", apiController.create);
//Edit -------------------------------------------------------------------
router.put("/products/edit/:id", apiController.edit);
//Delete -------------------------------------------------------------------
router.delete("/products/delete/:id", apiController.delete);

//USERS
//Read -------------------------------------------------------------------
router.get("/users", apiController.list);
router.get("/users/:id", apiController.listOne);
//Create -------------------------------------------------------------------
router.post("/users/add", apiController.create);
//Edit -------------------------------------------------------------------
router.put("/users/edit/:id", apiController.edit);
//Delete -------------------------------------------------------------------
router.delete("/users/delete/:id", apiController.delete);
*/
module.exports = router;