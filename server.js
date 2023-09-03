const express = require('express')
const app = express()
const mongoose = require("mongoose")
const route = require('./routes/ToDoRoute')
const cors = require("cors")
require("dotenv").config()

const Port = process.env.PORT || 5000

mongoose
.connect(process.env.MONGODB_URL)
.then(()=>console.log("Connected Database Successfully"))
.catch((err)=>console.log(err))

app.use(cors())
app.use(express.json())
app.use("/",route)

app.listen(Port,()=>console.log(`App Listening on : ${Port}`))