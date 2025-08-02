import ApiResponse from "../utils/ApiResponse.js";
import ApiErrors from "../utils/ApiErrors.js";
import asynchandler from "../utils/asynchandler.js"
import { User } from "../models/user.model.js";
// register
// login
// logout
// generateaccesstoken
// generaterefreshtoken
// refreshaccesstoken

export const register = asynchandler(async(req,res)=>{
  const {username,email,fullname,password} = req.body
  if([username,email,fullname,password].some((fields)=>fields.trim()=="")){
    throw new ApiErrors(403,"All fields are required")
  }
  if(!email.toLowercase().endsWith("@gmail.com")){
throw new ApiErrors(401,"email should be end with @gamil.com")
  }
  const AlreadyExist = await User.findOne({
    $or:[{username},{email}]
  })
  if(AlreadyExist){
    throw new ApiErrors(403,"User already exsist")
  }
  const mainuser = await User.create({
    username:username.toLowercase(),
    email:email.toLowercase(),
    fullname,
password
  })

  const user = await User.findById(mainuser._id).select("-password refreshtoken")
  return res.status(200).json(new ApiResponse(200,user,"User registerd successfully"))
})
const login = asynchandler(async(req,res)=>{
  const 
})