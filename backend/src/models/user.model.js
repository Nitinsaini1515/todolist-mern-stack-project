const { default: mongoose, model } = require("mongoose");

const UsersSchema = mongoose.Schema({
username:{
  type:String,
  required:true,
  unique:true,
  lowercase:true,
  trim:true
},
fullname:{
   type:String,
  required:true,
  trim:true
},
email:{
 type:String,
  required:true,
  lowercase:true,
  trim:true
},
password:{
  type:String,
  required:[true,"Password is required"],
  unique:true
},
refreshtoken:{
  type:String
}
},{timestamps:true})

export const User = new mongoose.model("User",UsersSchema)