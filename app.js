const express = require("express");
const path = require("path");
const app = express();

//settings
const port = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: false}));

//routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/index.html"));
})

//static
app.use(express.static(path.join(__dirname, "public")));

//server
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
})
