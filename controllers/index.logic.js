import userModel from '../models/user.model.js'

const logsinpge = ((req,res)=>{
    const error = console.error();
    
    res.render("index",{error})
})

export  {logsinpge}  