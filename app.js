const express = require("express");
const path = require("path");
const app = express();

const indexRouter = require("./routes/index.routes.js");
const productsRouter = require("./routes/products.routes.js");
const registerRouter = require("./routes/register.routes.js");

//settings___________________________________________________
const port = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: false}));

//routes____________________________________________________
app.use("/", indexRouter);
app.use("/products", productsRouter);
app.use("/register", registerRouter);


//static____________________________________________________
app.use(express.static(path.join(__dirname, "public")));

//server____________________________________________________
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
})
