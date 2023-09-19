const mongoose=require('mongoose');

const Userschema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        requires:true
    }
},{
    timestamps:true
});

const user=mongoose.model('user',Userschema);
module.exports=user;