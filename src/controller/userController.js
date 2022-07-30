const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
let userList = require("../../databaseJSON/users.json");

const f_modules = require("../../public/js/controllerJS/userFunctions");

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
                    //guarda el usuario en session
                    req.session.userLogged = user;
                    //casilla recuerdame
                    res.cookie("remember", (req.body.remember != undefined) ? user.email : undefined, { maxAge: 1000*60*2 });
                    res.redirect("/user/profile");
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

    //vista perfil
    profile: (req, res) => {
        
        res.render('profile',{
            user: req.session.userLogged
        });
    },

    logout:(req,res)=>{
        req.session.destroy();
        return res.redirect('/');
    }

}


module.exports = userController