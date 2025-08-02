import express from 'express'
const router = express.Router()

// controllers 
import {logsinpge} from '../controllers/index.logic.js'


router.get('/',logsinpge)

export default router