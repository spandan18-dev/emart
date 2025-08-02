import mongoose from 'mongoose' 
import debug from 'debug'
const dblog = debug("dev:db")


const connectdb = async (url) =>{
    try{
        await mongoose.connect(url)
        dblog("db connected....")
    }catch(e){
        console.log(e)
    }
}

export default connectdb