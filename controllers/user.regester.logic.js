import userModel from '../models/user.model.js'
import {validationResult} from 'express-validator'
import bcrypt from 'bcrypt'
import {generateToken} from '../utils/generateToken.js'


// user/ page
const user = ((req,res)=>{
    res.send("hey this is working")
})


// User regestation logic
const userreg = async (req,res)=>{
    try{
    
        let {fullname , email , password} = req.body
        const error = validationResult(req)

// Check if user alredy exixt or not
        let checkUser = await userModel.findOne({email : email})
        if(checkUser){
         return   res.status(400).send("You alredy have account , plese login")
        }

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

        const token =  generateToken(newuser);

        res.redirect('/shop')


    } catch(err){
    console.error(err.message)
}
}

export {user,
    userreg
}