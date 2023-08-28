const express = require("express");
const cors=require("cors");
const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

const apidata = require("./data.json");

app.get("/",(req,res)=>{
    res.send("hello i am live");
});

app.get("/service",(req,res)=>{
    res.send(apidata);
});

app.listen(port, ()=>{
    console.log("I am live again");
});