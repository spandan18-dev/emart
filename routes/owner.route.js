import express from 'express'
const router = express.Router()
import dotenv from 'dotenv' ; dotenv.config()

// debug 
const nelog = debug("development:nodeenv","testing:nodeenv")


// controllers :


import {adminpage,
    addadmin
} from '../controllers/admin.logics.js'
import debug from 'debug';

// add admin

nelog("NODE_ENV",process.env.NODE_ENV)
if(process.env.NODE_ENV === "development" || "testing"){
router.post('/add',addadmin)
}



// admin page :
router.get('/',adminpage)




export default router   