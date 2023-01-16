const jwt = require("jsonwebtoken");
require("dotenv").config()

const authenticate = (req,res,next)=>{
    const token = req.headers.authorization;
    if(token){
        const decoding = jwt.verify(token,process.env.key);
        // console.log(decoding)
        if(decoding){
            const id = decoding.id;
            req.body.id=id
            next();
        }else{
            res.send("Please login")
        }
        // req.body.
    }
    res.send("Please login")
}

module.exports= {
    authenticate
}