import mongoose, { Mongoose } from "mongoose";

const UserSchema= new mongoose.Schema({
    FirstName:{
        type:String,
        required:true,
        trim:true,
    },
    LastName:{
        type:String,
        required:true,
        trim:true,
    },
    UserName:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        unique:true,
    },
    Email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
    Phone:{
        type:String,
        unique:true,
        required:true,
        trim:true,
        min:10,
        max:10,
    },
    Password:{
        type:String,
        trim:true
    }
});
const User=mongoose.model('user',UserSchema);

export default User;