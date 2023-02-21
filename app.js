const  express =require("express");
const app=express();
const mongoose=require('mongoose');
const morgan=require('morgan');
const productRouter = require("./API/routes/productRouter");
app.use(express.json());
 

mongoose.connect('mongodb+srv://maysMokary:mais12345@test.3rjkuyj.mongodb.net/?retryWrites=true&w=majority')
mongoose.connection.on('connected',()=>{
    console.log("mongo conected")
})
app.use('/',productRouter)
app.use(morgan("dev"));

module.exports=app