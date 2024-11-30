const express=require("express");
const app=new express();
const mongoose=require("mongoose");

const authRouter=require("./routes/authRoute")
const rideRoute=require("./routes/rideRoute")

mongoose.connect("mongodb+srv://adithyagunasekara2000:YvovidOF8PJwJoTI@cluster0.ksfu6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
var db = mongoose.connection;
db.on('error', () => console.log("Error in connecting to DB"));
db.once('open', () => console.log("Connected to DB"));
app.use(express.json());

app.use("/api/auth",authRouter);
app.use("/api/ride",rideRoute);


app.listen(2002,()=>{
    console.log("Backend server is running")
});
// YvovidOF8PJwJoTI