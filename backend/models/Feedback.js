const mongoose =require('mongoose');
const Schema =mongoose.Schema;

const feedbackSchema=new Schema(
    {
userId:{type:Schema.Types.ObjectId,ref: 'User',required:true},
rideId:{}
    
    });