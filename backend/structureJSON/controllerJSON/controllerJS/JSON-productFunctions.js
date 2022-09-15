const fs = require("fs");
const path = require("path");

let filePath = path.join(__dirname, "../../databaseJSON/productsList.json");
let imgPath = path.join(__dirname, "../../../public/images/products-image");

let f_modules = {
    showOne: (id, productList) => {
        let product = productList.find(el => el.id == id);
        let price = product.price.split(",").join("");
        let result = parseFloat(price) / parseFloat(product.credit);
        result = result.toFixed(2);
        let credit = (product.credit != "No") ? result.toLocaleString("en-US") : false;
        return [product, credit];
    },
    add: (product, file, productList) => {
        let len = productList.length;
        product.id = (len == 0) ? 0 : productList[len-1].id + 1;
        product.price = f_modules.currencyType(product.price);
        product.offer = (product.offer != undefined);
        product.shipping = (product.shipping != undefined);
        product.credit = (product.credit) ? product.credit : "No";
        product.image = file.filename;
        productList.push(product);
        productList = f_modules.write(productList);
        return productList;
    },
    erase: (id, productList) => {
        let product = productList.find(el => el.id == id);
        let imgToDelete = product.image;
        fs.unlinkSync(`${imgPath + imgToDelete}`)
        productList = productList.filter(el => el.id != id);
        return productList;
    },
    write: (array) => {
        array = JSON.stringify(array);
        fs.writeFileSync(filePath, array);
        array = JSON.parse(array);
        return array;
    },
    currencyType: (string) => {
        string = string.split(",").join("");
        string = parseFloat(string).toLocaleString("en-US");
        return string.toString();
    }
}

module.exports = f_modules;