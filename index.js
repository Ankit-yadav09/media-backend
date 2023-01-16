const express = require("express");
const {MediaModel} = require("./models/Media.model")
const {connection} = require("./configs/db")
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("home")
})

app.post("/register",async(req,res)=>{
    const payload = req.body;
    try{
        const media = new MediaModel(payload)
        await media.save();
        res.send("Registered")
    }catch(err){
        res.send(err)
        console.log({"msg":"Error in registering"})
    }
})

app.post("/login",async(req,res)=>{
    const {email,pass} = req.body;
    try{
       const media = await MediaModel.find({email,pass})
       const token = jwt.sign({field:it}, "masai")
       if(user.length > 0){
        res.send({"msg":"Login successfull","token":token})
       }else{
        res.send("Wrong password/email")
       }
    }catch(err){
        res.send(err)
        console.log({"msg":"Error in login"})
    }
})

app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("Connected to DB")
    }catch(err){
        console.log("Error in connection")
        console.log(err)
    }
    console.log("Server started at 8000");
})