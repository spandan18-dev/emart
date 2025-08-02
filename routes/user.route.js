import express from 'express'
const router = express.Router()
import {user,
    userreg
} from '../controllers/user.logic.js'

import {body} from 'express-validator'

router.get('/',user)

// Regester with express validator  
router.post('/regester',
    body("email")
        .trim()
        .isEmail(),
    body("fullname")
        .trim()
        .isLength({min:3})
        .withMessage("Username should be at least 3 characters"),
    body("password")
        .trim()
        .isLength({min:6})
        .withMessage("Password should be at least 6 characters"),


    userreg)

export default router