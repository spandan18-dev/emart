import mongoose from 'mongoose' 

const connectdb = async (url) =>{
    try{
        await mongoose.connect(url)
        console.log("db connected....")
    }catch(e){
        console.log(e)
    }
}

export default connectdb