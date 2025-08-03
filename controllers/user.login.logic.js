import userModel from '../models/user.model.js'
import bcrypt from 'bcrypt'
import {generateToken} from '../utils/generateToken.js'

const userlogin = async (req,res)=>{
    let {email, password} = req.body
    let user =await userModel.findOne({email:email})
    if(!user){
       return res.send("Email or Password Incorrect")
    }
    bcrypt.compare(password,user.password , (err,result)=>{
        if(result){
            let token = generateToken(user)
            res.cookie("token",token)
            res.send("login sucesses....")
        }else{
            res.status(400).send("Incorrect email or password")
        }
    })

}

export {userlogin} 