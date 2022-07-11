let fs = require("fs");
let path = require("path");
let { validationResult } = require("express-validator");

let userlist = require("../database/users.json");

const userController = {

    login: (req, res) => {
        res.render("login");
    },

    loginB: (req, res) => {
        //validacion de los campos del formulario
        let errors = validatioResult(req);
        if(errors.isEmpty()){
            //identificacion del usuario a loguear
            let user = userlist.filter(el => el.email == req.body.user);

            if (user != undefined) {
                
            }

            for(let i = 0; i < users.length; i++){
                if(users[i].email == req.body.email){
                    if (bcrypt.compareSync(req.body.password, users[i].password)){
                        usuarioALoguearse = users[i];
                        break;
                    }
                }
            }

            if (usuarioALoguearse == undefined){
                return res.render("login", {errors: [
                    {msg: "Credenciales invalidas"}
                ]});
            }

            req.session.usuarioLogueado = usuarioALoguearse;
            res.render("success");

        }else{

            res.render("login", {errors:errors.errors})

        }
    },

    signin: (req, res) => {
        res.render("signin");
    },

    signinB: (req, res) => {
        let errors = validationResult(req);

        if(errors.isEmpty()){

            let newId = userlist[(userlist.length - 1)].id + 1
            let file = req.file;
            let newuser = {
                id: newId,
                name: req.body.name,
                lastname: req.body.lastname,
                email: req.body.email,
                password: req.body.password,
                avatar: `img/${file.filename}`
            };
    
            userlist.push(newuser);
    
            fs.writeFileSync(
                path.join(__dirname, "../database/users.json"),
                JSON.stringify(userlist, null, 4),
                {
                    encoding: "utf-8"
                }
            );
            res.redirect("/")

        }else{

            res.render("signin", {errors: errors.array(), old:req.body})

        }
    }
}

module.exports = userController;