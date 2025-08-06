import express from 'express'
const router = express.Router()
import {islogin} from '../middlewares/isLogin.js'


// controllers 
import {logsinpge,
    shoplogic,viewcart
} from '../controllers/index.logic.js'



router.get('/',logsinpge)
router.get('/shop',islogin,shoplogic)
router.get("/cart/:id",islogin,viewcart)


export default router