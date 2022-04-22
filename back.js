const express = require("express");
const app = express();

app.get('/', (req, res)=>{
    res.send("hi this is 3005 back");
})

app.listen(3005, (req, res)=>{
    console.log("back is running");
})