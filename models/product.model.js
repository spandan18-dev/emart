import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    image : {
        type:Buffer
    },
    itemname:{
        type:String
    },
    price:{
        type:Number
    },
    discount : {
        type:Number,
        default :0
    },
    bgcolor: String,
    panelcolor: String, 
    textcolor: String
})

const productModel = mongoose.model("product",productSchema)

export default productModel