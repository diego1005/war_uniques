let { check, validationResult, body } = require("express-validator");
let fs = require("fs");
let path = require("path");
let userlist = require("../database/users.json");


const userController = {

    login: (req, res) => {
        res.render("login");
    },

    loginB: (req, res) => {
        let errors = validatioResult(req);
        if(errors.isEmpty()){

            let usersJSON = fs.readFileSync("../database/users.json", {encoding: "utf8"}) 
            let users;
            if(usersJSON == "") {
                users = [];
            }else{
                users = JSON.parse(usersJSON);
            }
            let usuarioALoguearse

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
            res.render("succes");

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