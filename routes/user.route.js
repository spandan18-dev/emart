import express from 'express'
const router = express.Router()
import {body} from 'express-validator'


// controllers 
import {user,userreg} from '../controllers/user.regester.logic.js'
import {userlogin} from '../controllers/user.login.logic.js'

router.get('/',user)

// Regester with express validator  


router.post('/regester',
    body("email")
        .trim()
        .isEmail()
        .withMessage("enter a vailid email"),
    body("fullname")
        .trim()
        .isLength({min:3})
        .withMessage("Username should be at least 3 characters"),
    body("password")
        .trim()
        .isLength({min:6})
        .withMessage("Password should be at least 6 characters"),


    userreg)

// Login routes 

router.post('/login',userlogin)

export default router