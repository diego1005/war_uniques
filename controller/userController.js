const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const user= require('../src/models/user');
let userList = require("../database/users.json");

const f_modules = require("../public/js/controllerJS/userFunctions");

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
            let user = userList.find(el => el.email == req.body.user);
            //usuario existe
            if (user != undefined) {
                //comparar password hasheado
                let authPass = bcrypt.compareSync(req.body.password, user.password);
                if (authPass) { //contraseña correcta
                    //requiere la sesion del usuario que ingresa
                    req.session.userLogged=user;
                    res.redirect("/user/perfil");
                } else { //contraseña incorrecta
                    let result = { password: { msg: "Contraseña incorrecta" } };
                    res.render("login", { result: result, old: req.body });
                }
            } else { //usuario no existe
                let result = { user: { msg: "El usuario no existe" } };
                res.render("login", { result: result, old: req.body });
            }
        } else { //validacion con errores
            res.render("login", { errors: errors.mapped(), old: req.body });
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
            let userLen = existUser.length;
            if (userLen > 0) { //email ya cargado en bd
                let result = { email: { msg: "Email ya registrado" } };
                f_modules.eraseImg(req.file.filename);
                res.render("signin", { result: result, old: req.body });
            } else { //nuevo usuario
                let len = (userList.length == 0) ? 1 : userList.length;
                let file = req.file;
                let newId = (userList[(len - 1)] == undefined) ? 1 : userList[(len - 1)].id + 1;
                let newUser = {
                    id: newId,
                    ...req.body,
                    password: bcrypt.hashSync(req.body.password, 10)
                }
                delete newUser.confirmPassword;
                newUser.avatar = file.filename;
                userList.push(newUser);
                f_modules.write(userList);
                res.redirect("/user/login");
            }
        } else {
            (req.file) ? f_modules.eraseImg(req.file.filename): '';
            res.render("signin", { errors: errors.mapped(), old: req.body });
        }
    },

    //perfil
    perfil: (req, res) => {
        
        return res.render('perfil',{
            user: req.session.userLogged
        });
    },

}


module.exports = userController