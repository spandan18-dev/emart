import express from 'express'
const router = express.Router()

router.get("/",(req,res)=>{
    res.send("owner page")
})

export default router