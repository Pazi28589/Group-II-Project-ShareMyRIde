const express=require('express');
const router =express.Router();
const User=require('../models/User');
const Feedback=require('../models/Feedback');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const auth=require('../Security/auth');
const secretKey='project@shareMyRide';

// Register User
router.post("/register",async(req,res)=>{
try{
    if(req.body.password !== req.body.confirmPassword){
        return res.status(400).json({message:"Passwords do not match"});

    }
    const salt=await bcrypt.genSalt(10);
    const hashedPassword=await bcrypt.hash(req.body.password,salt);

    const newUser=new User({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        password:hashedPassword,
        mobileNumber:req.body.mobileNumber,
        NIC:req.body.NIC
    });
    const user=await newUser.save();
    res.status(200).json(user);
}
catch(err){
    res.status(500).json({error:err.message});

}
});