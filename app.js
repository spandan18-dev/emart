import express from 'express'
import connectdb from './config/db.js'
import dotenv from 'dotenv'; dotenv.config()
import path from 'path'

const app= express()


// routes


//data from .env
const port = process.env.PORT
const db_url = process.env.MONGODB_URL

//connecting db 
connectdb(db_url)

// view engine and static files

app.set("view engine","ejs")
app.set(path.join(process.cwd(),"views"))
app.use(express.static(path.join(process.cwd(),"public")))
app.use(express.json())
app.use(express.urlencoded({extended:true}))




app.listen(port,()=>{
    console.log(`server up ! http://localhost:${port}`)
}) 