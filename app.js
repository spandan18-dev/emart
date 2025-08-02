import express from 'express'
import connectdb from './config/db.js'
import dotenv from 'dotenv'; dotenv.config()
import path from 'path'
import debug from 'debug'; 

const app= express()

// debugs:
const log = debug("dev:app")


// routes
import ownerrouter from './routes/owner.route.js'
import productrouter from './routes/product.route.js'
import userrouter from './routes/user.route.js'

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

// using routes
app.use('/admin',ownerrouter)
app.use('/users',userrouter)
app.use('/products',productrouter)


app.listen(port,()=>{
   log(`server up ! http://localhost:${port}`)
}) 