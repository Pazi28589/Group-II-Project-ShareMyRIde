const express=require("express");
const app=new express();
const mongoose=require("mongoose");

const authRouter=require("./routes/authRoute")
const rideRoute=require("./routes/rideRoute")

mongoose.connect("mongodb+srv://thathsaraniadithyaa:<2009@Adith0331>@socialconnect.ykuwxon.mongodb.net/?retryWrites=true&w=majority&appName=socialConnect");
var db = mongoose.connection;
db.on('error', () => console.log("Error in connecting to DB"));
db.once('open', () => console.log("Connected to DB"));
app.use(express.json());

app.use("/api/auth",authRouter);
app.use("/api/ride",rideRoute);


app.listen(2001,()=>{
    console.log("Backend server is running")
});