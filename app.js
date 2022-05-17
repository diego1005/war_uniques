const express = require("express");
const path = require("path");
const app = express();

//routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/index.html"));
})

//static
app.use(express.static(path.join(__dirname, "public")));

//server
app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
})
