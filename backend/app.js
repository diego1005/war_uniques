const express = require("express");
const path = require("path");
const app = express();
const session = require("express-session");
const cookies = require("cookie-parser");
const methodOverride = require("method-override");
const cors = require("cors");

const rememberMid = require("./src/middlewares/session/rememberMid");
const userNavMid = require("./src/middlewares/session/userNavMid");

const indexRouter = require("./src/routes/index.routes");
const productsRouter = require("./src/routes/products.routes.js");
const userRouter = require("./src/routes/user.routes.js");
const apiRouter = require("./src/routes/api.routes.js");

//settings___________________________________________________
const port = process.env.PORT || 3001;
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

//middlewares________________________________________________
app.use(express.urlencoded({ extended: false}));
app.use(express.json());  
app.use(session({
    secret:"mensaje secreto",
    resave: true,
    saveUninitialized: true
}));
app.use(cookies());
app.use(rememberMid);
app.use(userNavMid);
app.use(methodOverride("_method"));
app.use(cors());

//routes____________________________________________________
app.use("/", indexRouter);
app.use("/products", productsRouter);
app.use("/user", userRouter);
app.use("/api", apiRouter);


//static____________________________________________________
app.use(express.static(path.join(__dirname, "public")));

//server____________________________________________________
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
})
