const { default: mongoose, model } = require("mongoose");
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
const UsersSchema = new mongoose.Schema({
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
UsersSchema.pre("save",async function(next){
  if(!this.isModified("password")){
    return next()
  }
  this.password = await bcrypt.hash(this.password,10)
  next()
})
UsersSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(this.password,password)
  
}
UsersSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id : this._id,
      email:this._email,
      username:this.username,
      fullname:this.fullname
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn:"1d"
    }
  )
}

UsersSchema.methods.generateRefreshToken = function () {
  jwt.sign({
   _id:this._id,
   username:this.username,
   fullname:this.fullname,
   email:this.email

  },
  process.env.REFRESH_TOKEN_SECRET
  ,{
    expiresIn:"10d"
  })
}


export const User = mongoose.model("User",UsersSchema)