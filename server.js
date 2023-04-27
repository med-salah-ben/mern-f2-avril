//1-import express
const express = require("express");
//5-import dotenv file
require("dotenv").config()
//6-import connect db
const connectDB = require("./config/connectDB");
//9-import contact routes
const contact = require("./routes/contact")

//2- 
const app = express();

//7-run connectdb func
connectDB();

//8-use Middleware routing
app.use(express.json())
app.use('/api/contact', contact)


//3-declare port 
const PORT = process.env.PORT || 7001;

//4-listen to port 
app.listen(PORT , (err)=>{
    err?
    console.log("error : ",err )
    :console.log(`server is running on port ${PORT}`);
});