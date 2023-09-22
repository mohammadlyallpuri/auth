const express = require('express')
const app = express();
const port = process.env.PORT || 3000;
const studentapi = require("./routes/student")
const authapi = require("./routes/authentication")
const mongoose = require("mongoose")
const cookieparser = require("cookie-parser")
const jwt = require("jsonwebtoken")

app.set("view engine", "ejs")
app.use(express.static(__dirname+"/public"));
app.use(express.json());
app.use(cookieparser())




app.use("/api/student", studentapi);
app.use("/api/auth", authapi)


app.get("/",(req,res)=>{
    res.render(__dirname+"/views/admission.ejs")
})


app.get("/dashboard", (req,res)=>{

    if(req.cookies.accesstoken){
        try {
            var isTokenValid = jwt.verify(req.cookies.accesstoken,"qwertyuiop1234567890")
            console.log(isTokenValid)
        } catch (error) {
            res.redirect("/login")
        }
    }else{
        res.redirect("/login")
    }
    res.render(__dirname+"/views/dashboard.ejs")
})


app.get("/login", (req,res)=>{

    if(req.cookies.accesstoken){
        try {
            var isTokenValid = jwt.verify(req.cookies.accesstoken,"qwertyuiop1234567890")
            res.redirect("/dashboard")
        } catch (error) {        
        }
    }
    res.render(__dirname+"/views/login.ejs")
})



mongoose.connect("mongodb+srv://mohammadweex21:yWLnU2es3w4q0gvE@cluster0.7vod0my.mongodb.net/?retryWrites=true&w=majority").then((res)=>{
    console.log("Database is connected!")
}).catch((err)=>{
    console.log(err.message)
})


app.listen(port, ()=>{
    console.log("Server is running....")
})