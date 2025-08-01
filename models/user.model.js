import mongoose, { Schema } from 'mongoose'

const userSchema = new mongoose.Schema({
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
    isadmin:{
        type:Boolean
    },
    cart:{
        type:Array,
        default:[]
    },
    orders:{
        type:Array,
        default :[]
    },
    contact:{
        type:Number,
        required:true
    },
    pic:{
        type:String
    }
})  


const userModel = mongoose.model("user",userSchema)

export default userModel