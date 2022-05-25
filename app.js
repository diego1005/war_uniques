const express = require("express");
const path = require("path");
const app = express();

//settings___________________________________________________
const port = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: false}));

//routes____________________________________________________

//Home
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"));
})
//Log in
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/login.html"));
})
//Sing in
app.get("/signin", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/signin.html"));
})
//chart
app.get("/chart", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/chart.html"));
})

//static____________________________________________________
app.use(express.static(path.join(__dirname, "public")));

//server____________________________________________________
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
})
