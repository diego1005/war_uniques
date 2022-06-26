const fs = require("fs");
const path = require("path");

let productList = require("../Proyecto-Integrador/database/productsList.json");
// let filePath = path.join(__dirname, "/database/productsList.json");
// let productList = fs.readFileSync(filePath, "utf-8");
// productList = JSON.parse(productList);

let product = productList.find(el => el.id == 4);

console.log(product);