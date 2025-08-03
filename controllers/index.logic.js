import userModel from '../models/user.model.js'
import productModel from '../models/product.model.js'

const logsinpge = ((req,res)=>{
    let error = req.flash("error")
    res.render("index",{error})
})

const shoplogic = ((req,res)=>{
    const products = productModel.find()
    res.render('shop',{products : [products]})
})


export  {logsinpge,
    shoplogic
}  