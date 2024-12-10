const express=require('express');
const router =express.Router();
const User=require('../models/User');
const Feedback=require('../models/Feedback');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const auth=require('../Security/auth');
const secretKey='project@shareMyRide';



//login user
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
//submit feedback
router.post('/feedback',auth,async(req,res)=>{
    const{rideId,rating,comment,feedbackType}=req.body;
    try{
        const feedback =new Feedback({
            userId:req.user.userId,
            rideId,
            rating,
            comment,
            feedbackType
        });
const savedFeedback=await feedback.save();
res.status(200).json(savedFeedback);
    }catch(err){
        res.status(500).json({error:error.message});
    }
    });