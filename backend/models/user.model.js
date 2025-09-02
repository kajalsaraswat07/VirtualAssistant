import mongoose from "mongoose";

const userSchema=new mongoose.Schema({

    // FOR USER
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
   },
    password:{
        type:String,
        required:true,
   },

   //FOR ASSISTANT 
   assistantName:{
    type:String
   },
   assistantImage:{
    type:String
    },
    history:[
        {type:String}
    ]
 }, {timestamps:true})

 //USER MODEL
const User=mongoose.model("User",userSchema)
export default User