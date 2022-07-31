const fs = require("fs");
const path = require("path");

let filePath = path.join(__dirname, "../../databaseJSON/users.json");
let imgPath = path.join(__dirname, "../../../public/images/user-image");
let userList = require("../../databaseJSON/users.json");

let f_modules = {
    findOne: (email) => {
        let user = userList.find(el => el.email == email);
        return user;
    },

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