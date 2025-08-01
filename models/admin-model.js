import mongoose from 'mongoose'

const adminSchema = new mongoose.Schema({
  fullname :{
        type:String,
        required:true,
        trim:true,
        min:[3,"username should be at least 3 character"]
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        min:[6, "password should atleast of 6 character or more "]
    },
    product:{
        type:Array,
        default :[]
    },
    pic:{
        type:String
    },
    gstin:{
        type:String
    }
})  


const adminMOdel = mongoose.model("admin",adminSchema)