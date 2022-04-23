const express = require("express");
const app = express();
const nunjucks = require("nunjucks");

nunjucks.configure("views", {
    express:app
})

app.set("view engine", "html");

app.get('/', (req, res)=>{
    res.render("index");
})

app.listen(3006, (req, res)=>{
    console.log("front is running");
})