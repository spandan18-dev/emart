import adminModel from '../models/admin-model.js'
import bcrypt from 'bcrypt'
import flash from 'connect-flash'

//  debugs :
import debug from 'debug'
const admincount = debug("development:admincount")


// Regester Admin Logic :

const addadmin = async(req,res)=>{

    const admins = await adminModel.find();
    admincount("Admin count:", admins.length);

    // Prevent adding more than one admin
    
    if (admins.length > 0) {
        return res.status(501).send("You don't have access to create a new admin");
    }
    const {fullname , email , password} =req.body

// Hash password
    const saltRound = 10
    const hashPassword = await bcrypt.hash(password,saltRound)

    const newadmin = await  adminModel.create({
        fullname:fullname,
        email:email,
        password:hashPassword,
    })
    res.status(201)
    .send(newadmin)
}

// Admin Pages :
const adminpage = ((req,res)=>{
    let success = req.flash("success")
    res.render("createproducts",{success})
})

export {addadmin,
    adminpage
} 