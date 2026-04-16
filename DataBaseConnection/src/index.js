import dotenv from "dotenv";
dotenv.config();   // 👈 sabse pehle

console.log("ENV:", process.env.MONGODB_URL);

import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

connectDB();






/*
approach 1: try catch, async await, app.on(error) and app.listen() inside try block

import express from "express"
const app =express()

; (async ()=>{
    try{
       await  mongoose.connect(`${process.env.MOGODB_URL}/${DB_NAME}`)
       app.on(error, (error)=>{
        console.log("ERRR : ",error);
        throw error
       })

       app.listen(process.env.PORT,()=>{
        console.log(`App is running on port ${process.env.PORT}`);
       })

    } catch(error){
        console.error("ERROR : ", error)
        throw err
    }
})() //effi
 */
