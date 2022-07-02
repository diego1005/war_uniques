const { validatioResult } = require("express-validator");
let fs = require("fs");
let path = require("path");

let userlist = require("../database/users.json");

const userController = {
    login: (req, res) => {
        res.render("login");
    },

    loginB: (req, res) => {
        errors = validatioResult(req);
        if(errors.isEmpty()){
            res.render("home")
        }else{
            res.render("")
        }
    },

    signin: (req, res) => {
        res.render("signin");
    },

    crearuser: (req, res) => {
        errors = validatioResult(req);
        if(errors.isEmpty()){

            let newId = userlist[(userlist.length - 1)].id + 1
        let newuser = {
            id: newId,
            name: req.body.name,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password
        };

        userlist.push(newuser);

        fs.writeFileSync(
            path.join(__dirname, "../database/users.json"),
            JSON.stringify(userlist, null, 4),
            {
                encoding: "utf-8"
            }
        );
            res.redirect("home")

        }else{
            res.render("signin",{errors: errors.array()})
        }
        
    }
}

module.exports = userController;