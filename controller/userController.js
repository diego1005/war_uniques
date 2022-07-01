const { validatioResult } = require("express-validator");

const userController = {
    login: (req, res) => {
        res.render("login");
    },

    loginB: (req, res) => {
        let errors = validatioResult(req)
        if(errors.isEmpty()){
            res.render("/")
        }else{
            res.render("login", {errors: errors.array()});
        }
    },

    signin: (req, res) => {
        res.render("signin");
    },

    signinB: (req, res) => {
        let errors = validatioResult(req)
        if(errors.isEmpty()){
            res.render("/")
        }else{
            res.render("login", {errors: errors.array()});
        }
    }
}

module.exports = userController;