const fs = require("fs");
const path = require("path");

let filePath = path.join(__dirname, "../../../database/users.json");
let imgPath = path.join(__dirname, "../../../public/images/user-image/");

let f_modules = {
    write: (array) => {
        array = JSON.stringify(array);
        fs.writeFileSync(filePath, array);
        array = JSON.parse(array);
        return array;
    },
    eraseImg: (filename) => {
        fs.unlinkSync(`${imgPath + filename}`);
    }
}

module.exports = f_modules;