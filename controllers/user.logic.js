import userModel from '../models/user.model.js'
import {validationResult} from 'express-validator'
import bcrypt from 'bcrypt'


// user/ page
const user = ((req,res)=>{
    res.send("hey this is working")
})


// User regestation logic
const userreg = async (req,res)=>{
    try{
    
     let {fullname , email , password} = req.body
    const error = validationResult(req)

    if(!error.isEmpty()){
        res.status(404).json({
            error : error,
            message : "invalid datas"
        })
    }

    const hashpassword = await bcrypt.hash(password,10)

    const newuser = await userModel.create({
        fullname:fullname,
        email:email,
        password:hashpassword
    }) 

    res.status(200).json({
        message :"user created sucesfully",
        newuser
    })

    } catch(err){
    console.log(err.message)
    if(err.code===11000){
        res.status(400).json({
            message:"user alrady exist"
        })
    }
        
}
}

export {user,
    userreg
}