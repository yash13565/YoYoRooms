import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import roomsRoute from "./routes/rooms.js"
import hotelsRoute from "./routes/hotels.js"
import usersRoute from "./routes/users.js"
import cookieParser from "cookie-parser"
import cors from "cors"

const app=express()
dotenv.config()
const connect =async()=>{
    try{
        await mongoose.connect(process.env.MONGO)
        console.log("Connected to mongoDB")
    }
    catch(err){
        throw (err)
    }
}

mongoose.connection.on("disconnected",()=>{
    console.log("mongoDB disconnected!")
})

app.use(cookieParser())
app.use(express.json())
app.use(cors())
app.use("/api/auth",authRoute)
app.use("/api/users",usersRoute)
app.use("/api/rooms",roomsRoute)
app.use("/api/hotels",hotelsRoute)

app.use((err,req,res,next)=>{
    const errorStatus=err.status || 500
    const errorMessage=err.message || "something went wrong"
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack,
    })
})
app.listen(8800,()=>{
    connect()
console.log("connected to backend server.")
})