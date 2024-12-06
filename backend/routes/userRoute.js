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

router.post('/login',async(req,res)=>{
    const {NIC,password}=req.body;
    try{
        const user=await User.findOne({NIC});
        if(!user)return res.status(404).send({message:'User not found'});

        const isValidPassword =await bcrypt.compare(password,user.password);
        if(!isValidPassword) return res.status(400).send({message:'Invalid password'});

        const token =jwt.sign({userId:user._id},secretKey,{expiresIn: '10h'});
        console.log('Generated Token:',token);

        res.send({token,user:{id:user._id,username:user.firstname,email:user.email}});

    }
    catch(err){
        console.error("Error during login:",err);
        res.status(500).json({error:err.message});
    }
});