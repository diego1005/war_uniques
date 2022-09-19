const express = require("express");
const router = express.Router();

const apiController = require("../controller/apiController");

//PRODUCTS
//Read -------------------------------------------------------------------
router.get("/products", apiController.list("prod"));
router.get("/products/:id", apiController.listOne("prod"));
//Create -------------------------------------------------------------------
router.post("/products/add", apiController.create("prod"));
//Edit -------------------------------------------------------------------
router.put("/products/edit/:id", apiController.edit("prod"));
//Delete -------------------------------------------------------------------
router.delete("/products/delete/:id", apiController.delete("prod"));

//USERS
//Read -------------------------------------------------------------------
router.get("/users", apiController.list("user"));
router.get("/users/:id", apiController.listOne("user"));
//Create -------------------------------------------------------------------
router.post("/users/add", apiController.create("user"));
//Edit -------------------------------------------------------------------
router.put("/users/edit/:id", apiController.edit("user"));
//Delete -------------------------------------------------------------------
router.delete("/users/delete/:id", apiController.delete("user"));

module.exports = router;