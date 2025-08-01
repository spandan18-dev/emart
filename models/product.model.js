import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    Image : {
        type:String
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
    bgcolor : {
        type:String
    },
    textcolor :{
        type:String
    }

})

const productModel = mongoose.model("product",productSchema)

export default productModel