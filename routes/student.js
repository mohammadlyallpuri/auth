const router = require('express').Router();
const studentmodel = require("../models/studentm")

router.get("/",async (req,res)=>{
    await studentmodel.create(req.query)
    res.send("Student Enrolled Successfully!")
})

router.get("/records",async (req,res)=>{
    var studentrecord = await studentmodel.find()
    res.json(studentrecord)
})

router.put("/",async (req,res)=>{
    await studentmodel.findByIdAndUpdate(req.query.id,{$set:req.body})
    res.send("Student Updated Successfully!")
})

router.delete("/",async (req,res)=>{
    await studentmodel.findByIdAndDelete(req.query.id)
    res.send("Student Deleted Successfully!")
})

module.exports = router