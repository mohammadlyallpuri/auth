const router = require('express').Router();
const jwt = require("jsonwebtoken");


router.post("/login", async (req,res)=>{
    try {
        
        var data = {emailaddress:"admin",password:"admin123"}


        var inputdata = req.body

        if((inputdata.emailaddress === data.emailaddress) && (inputdata.password === data.password)){
            var token = jwt.sign({emailaddress:"admin"},"qwertyuiop1234567890",{expiresIn:"30s"})

            res.cookie("accesstoken",token,{secure:true,httpOnly:true})

            res.json({
                success:true,
                message:"Log in Successfully!"
            })
        }else{
            res.status(403).json({
                success:false,
                message:"Invalid Email or Password!"
            })
        }


    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Something Went Wrong, Please try again later!"
        })
    }
})

module.exports = router