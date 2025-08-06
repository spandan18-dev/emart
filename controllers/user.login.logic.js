import userModel from '../models/user.model.js'
import bcrypt from 'bcrypt'
import {generateToken} from '../utils/generateToken.js'

const userlogin = async (req,res)=>{
    let {email, password} = req.body
    let user =await userModel.findOne({email:email})
    if(!user){
        req.flash("error","Email or Password Incorrect")
        res.redirect('/')
    }
    bcrypt.compare(password, user.password , (err,result)=>{
        if(result){
            let token = generateToken(user)
            res.cookie("token",token)
            res.redirect('/shop')
        }else{
            req.flash("error","Incorrect email or password")
            return res.redirect('/')
        }
    })

}

export {userlogin} 