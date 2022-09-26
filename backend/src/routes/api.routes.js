const express = require("express");
const router = express.Router();

const productsAPIController = require("../controller/api/productsAPIController");
const usersAPIController = require("../controller/api/usersAPIController");

//PRODUCTS
//Read -------------------------------------------------------------------
router.get('/products',productsAPIController.list);
router.get("/products/:id", productsAPIController.listOne);
router.get("/products/flags/:flag", productsAPIController.totalForFlag);
//Create -------------------------------------------------------------------
router.post("/products/add", productsAPIController.create);
//Edit -------------------------------------------------------------------
router.put("/products/edit/:id", productsAPIController.edit);
//Delete -------------------------------------------------------------------
router.delete("/products/delete/:id", productsAPIController.delete);

//USERS
//Read -------------------------------------------------------------------
router.get("/users", usersAPIController.list);
router.get("/users/:id", usersAPIController.listOne);
//Create -------------------------------------------------------------------
router.post("/users/add", usersAPIController.create);
//Edit -------------------------------------------------------------------
router.put("/users/edit/:id", usersAPIController.edit);
//Delete -------------------------------------------------------------------
router.delete("/users/delete/:id", usersAPIController.delete);

module.exports = router;