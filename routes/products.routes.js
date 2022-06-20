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

router.get("/detail/:id", productsController.detail);
router.get("/cart", productsController.cart);
// router.get("/sell", productsController.sell);
router.get("/edit", productsController.edit);
router.get("/add", productsController.add);
router.post("/create", upload.single("prod_img"), productsController.create);

module.exports = router;