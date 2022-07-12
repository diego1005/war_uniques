const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");

let userList = require("../database/users.json");

const userController = {

    login: (req, res) => {
        res.render("login");
    },

    processLogin: (req, res) => {
        //validacion de los campos del formulariod de login
        const errors = validationResult(req);
        //validacion sin errores
        if (errors.isEmpty()) {
            //identificacion del usuario a loguear
            let user = userList.filter(el => el.email == req.body.user);
            //usuario existe
            if (user != undefined) {
                //una vez realizado el registro con el hash en password --------------
                // let authPass = bcrypt.compareSync(req.body.password, user.password);
                //---------------------------------------------------------------------
                let authPass = (req.body.password === user.password);
                if (authPass) {     //contraseña correcta
                    req.session.userLogged = user;
                    res.render("/");
                } else {        //contraseña incorrecta
                    let result = {password : { msg : "Contraseña incorrecta" }};
                    res.render("login", { result : result, old : req.body });
                }
            } else {    //usuario no existe
                let result = {user : { msg : "El usuario no existe" }};
                res.render("login", { result : result, old : req.body });
            }
        }else {     //validacion con errores
            res.render("login", { errors : errors.mapped(), old : req.body });
        }
    },

    signin: (req, res) => {
        res.render("signin");
    },

    processRegister: (req, res) => {
        //validacion de los campos del formulario de registro
        const errors = validationResult(req);
        //validacion sin errores
        if (errors.isEmpty()) {
            //Comprobacion de usuario ya existente
            let existUser = userList.filter(el => el.email == req.body.email);
            if (!existUser.isEmpty()) {
                let result = {email : { msg : "Email ya registrado" }};
                res.render("signin", { result : result, old : req.body} );
            }else {
                let len = userList.length;
                let file = req.file;
                let newUser = req.body;
                newUser.id = userList[(len - 1)].id + 1;
                newUser.avatar = file.filename;
            }

            /*

            userList.push(newuser);

            fs.writeFileSync(
                path.join(__dirname, "../database/users.json"),
                JSON.stringify(userlist, null, 4),
                {
                    encoding: "utf-8"
                }
            );
            res.redirect("/")

            */
        } else {
            res.render("signin", { errors : errors.mapped(), old : req.body });
        }
    }
}

module.exports = userController;