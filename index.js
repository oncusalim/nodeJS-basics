const express = require("express");
const path = require("path")

const MainRouter = require("./router/MainRouter")
const UserRouter = require("./router/UserRouter")

const app = express();
const port = process.env.port || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))

app.use("/", MainRouter)
app.use("/user", UserRouter)

app.listen(port, ()=>{
    console.log(`dinlemede ${port}`)
})