//require library
const mongoose=require('mongoose');

//connect to database
 mongoose.connect('mongodb://127.0.0.1:27017/codeial_development');

 //checking connection
 const db=mongoose.connection;

 //if error
 db.on('error', console.error.bind(console,"error connection to db"));

 //if successfull
 db.once('open',function(){
    console.log("connection successfully")   
 })      

 module.exports=db