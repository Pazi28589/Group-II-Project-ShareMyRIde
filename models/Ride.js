const mongoose=require("mongoose");

const Schema = mongoose.Schema;

const RideSchema = new Schema({
    startingPoint:{type:String,required:true},
    endingPoint:{type:String,required:true}
}) 

const Ride = mongoose.model('libraries',RideSchema)

module.exports = Ride;