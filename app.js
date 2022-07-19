const express = require("express");
const path = require("path");
const app = express();
const session = require("express-session");
const cookieParser=require("cookie-parser");

const methodOverride = require("method-override");

const indexRouter = require("./src/routes/index.routes");
const productsRouter = require("./src/routes/products.routes.js");
const userRouter = require("./src/routes/user.routes.js");
const { cookie } = require("express-validator");

//settings___________________________________________________
const port = process.env.PORT || 3000;
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

//middlewares________________________________________________
app.use(express.urlencoded({ extended: false}));

app.use(express.json());  
app.use(cookieParser());                             
app.use(methodOverride("_method"));
app.use(session({
    secret:"mensaje secreto",
    resave: false,
    saveUninitialized: true
}));


//routes____________________________________________________
app.use("/", indexRouter);
app.use("/products", productsRouter);
app.use("/user", userRouter);


//static____________________________________________________
app.use(express.static(path.join(__dirname, "public")));

//server____________________________________________________
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
})
