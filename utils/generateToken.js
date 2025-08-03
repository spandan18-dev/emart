import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'; dotenv.config()

const generateToken = (newuser)=>{
        let token = jwt.sign({
        email:newuser.email,
        id :newuser._id,
    },process.env.JWT_KEY)

    return token
}

export {generateToken}