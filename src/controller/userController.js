const db = require("../database/models");
const { User } = require("../database/models");
const Op = db.Sequelize.Op;
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

const userController = {
    loginForm: (req, res) => {
        res.render("login");
    },
    login: (req, res) => {
        //validacion de los campos del formulariod de login
        const errors = validationResult(req);
        //validacion sin errores
        if (errors.isEmpty()) {
            //identificacion del usuario a loguear
            User.findOne({
                where: {
                    email: { [Op.like]: req.body.user }
                }
            })
                .then(user => {
                    //usuario existe
                    if (user != null) {
                        //comparar password hasheado
                        let authPass = bcrypt.compareSync(req.body.password, user.password);
                        if (authPass) { //contraseña correcta
                            //guarda el usuario en session
                            delete user.dataValues.password;
                            req.session.userLogged = user.dataValues;
                            //casilla recuerdame
                            if (req.body.remember != undefined) {
                                res.cookie("remember", user.dataValues, { maxAge: 1000 * 60 * 2 });
                            }
                            return res.redirect("/user/profile");
                        } else { //contraseña incorrecta
                            let result = { password: { msg: "Contraseña incorrecta" } };
                            return res.render("login", { result: result, old: req.body });
                        }
                    } else { //usuario no existe
                        let result = { user: { msg: "El usuario no existe" } };
                        return res.render("login", { result: result, old: req.body });
                    }
                })
                .catch(err => {
                    return res.send(err);
                })
        } else { //validacion con errores
            res.render("login", { errors: errors.mapped(), old: req.body });
        }
    },
    signinForm: (req, res) => {
        res.render("signin");
    },
    signin: (req, res) => {
        //validacion de los campos del formulario de registro
        const errors = validationResult(req);
        //validacion sin errores
        if (errors.isEmpty()) {
            //Comprobacion de usuario ya existente
            User.findOne({
                where: {
                    email: { [Op.like]: req.body.email }
                }
            })
                .then(user => {
                    if (user != null) {
                        let result = { email: { msg: "Email ya registrado" } };
                        //aca la linea para borrar el archivo de imagen
                        res.render("signin", { result: result, old: req.body });
                    } else {
                        //creacion de nuevo usuario
                        User.create({
                            name: req.body.name,
                            lastname: req.body.lastname,
                            email: req.body.email,
                            password: bcrypt.hashSync(req.body.password, 10),
                            imageURL: req.file.filename
                        })
                            .then(user => {
                                delete user.dataValues.password;
                                req.session.userLogged = user.dataValues;
                                return res.redirect("/user/profile");
                            })
                            .catch(err => {
                                return res.send(err);
                            })
                    }
                })
                .catch(err => {
                    return res.send(err);
                })
        } else {
            //linea para borrar archivo de imagen
            res.render("signin", { errors: errors.mapped(), old: req.body });
        }
    },
    //vista perfil
    profile: (req, res) => {
        res.render('profile', { user: req.session.userLogged });
    },
    //Logout
    logout: (req, res) => {
        req.session.destroy();
        return res.redirect("/");
    },
    //Delete
    delete: (req, res) => {
        User.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(result => {
                return res.redirect("/");
            })
            .catch(err => {
                return res.send(err);
            })
    },
    //Edit ---------------------------------------------------------------
    formEdit: (req, res) => {
        User.findByPk(req.params.id, {
        })
            .then(result => {
                return res.render("profile_edit", { old: result });
            })
            .catch(err => {
                return res.send(err);
            })
    },
    edit_user: (req, res) => {
        //validacion de errores en el formulario de agregar producto
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            User.update({
                name: req.body.name,
                lastName: req.body.lastName,
                email: req.body.email,
                // password: req.body.password,
                // imageURL: req.file.filename
            }, {
                where: {
                    id: req.params.id
                }
            })
                .then(result => {
                    User.findOne({
                        attributes: ["name", "lastname", "email", "imageURL"],
                        where: {
                            id: req.params.id
                        }
                    })
                        .then(user => {
                            req.session.userLogged = user.dataValues;
                            return res.redirect("/user/profile");
                        })
                        .catch(err => {
                            res.send(err);
                        })
                })
                .catch(err => {
                    return res.send(err)
                })
        } else {
            req.body.id = req.params.id;
            res.render("profile_edit", { errors: errors.mapped(), old: req.body });
        }
    },
    /*
        //Read ---------------------------------------------------------------
        findAll: (req, res) => {
            User.findAll()
                .then(result => {
                    return res.send(result);
                })
                .catch(err => {
                    return res.send(err)
                })
        },
        findByPk: (req, res) => {
            User.findByPk(req.params.id, {
            })
                .then(result => {
                    if (result != undefined) {
                        return res.render("detail", { User: result });
                    }
                })
                .catch(err => {
                    return res.send(err)
                })
        },
        //--------------------------------------------------------------------
        //Create -------------------------------------------------------------
        formCreate: (req, res) => {
            return res.render("add");
        },
        create: (req, res) => {
            //validacion de errores en el formulario de agregar producto
            const errors = validationResult(req);
            if (errors.isEmpty()) {
                User.create({
                    name: req.body.name,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password: req.body.password,
                    imageURL: req.file.filename
                })
                    .then(result => {
                        return res.redirect("home");
                    })
                    .catch(err => {
                        return res.send(err);
                    })
            } else {
                res.render("add", { errors: errors.mapped(), old: req.body });
            }
        },
        //--------------------------------------------------------------------
        //Edit ---------------------------------------------------------------
        formEdit: (req, res) => {
            User.findByPk(req.params.id, {
            })
                .then(result => {
                    return res.render("edit", { old: result });
                })
                .catch(err => {
                    return res.send(err);
                })
        },
        edit: (req, res) => {
            //validacion de errores en el formulario de agregar producto
            const errors = validationResult(req);
            if (errors.isEmpty()) {
                User.update({
                    name: req.body.name,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password: req.body.password,
                    imageURL: req.file.filename
                }, {
                    where: {
                        id: req.params.id
                    }
                })
                    .then(result => {
                        return res.redirect("home");
                    })
                    .catch(err => {
                        return res.send(err)
                    })
            } else {
                res.render("edit", { errors: errors.mapped(), old: req.body });
            }
        },
        //--------------------------------------------------------------------
    */
}
module.exports = userController;