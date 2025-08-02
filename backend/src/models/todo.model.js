import mongoose, { Schema } from "mongoose";

const TodoSchema = new mongoose.Schema({
  task:{
    type:String,
    required:true
  },
  createdby:{
type:Schema.Types.ObjectId,
ref:"User"
  },
  completed:{
type:Boolean,
default:false
  },
  deleted:{
type:Boolean,
default:false
  },
  deletedat:{
    type:Date,
    default:null
  }
},{timestamps:true})

export const Task = new mongoose.model("Task",TodoSchema)