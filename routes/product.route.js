import express from 'express'
const router = express.Router()

router.get("/",(req,res)=>{
    res.send("product page")
})

export default router