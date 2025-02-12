const mongoose = require('mongoose');

const userSchema  = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    bio:{type:String,required:true},
    profile:{type:String,default:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'},
    date:{type:Date,default:Date.now}
})


module.exports = mongoose.model('User',userSchema);