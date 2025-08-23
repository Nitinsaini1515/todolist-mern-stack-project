import ApiResponse from "../utils/ApiResponse.js";
import ApiErrors from "../utils/ApiErrors.js";
import asynchandler from "../utils/asynchandler.js"
import {User} from "../models/user.model.js"
import { Task } from "../models/todo.model.js";

export const TaskCreate = asynchandler(async(req,res)=>{

  const {task} = req.body
  const userId = req.user._id
  const user = await User.findById(userId)
  if(!user){
    throw new ApiErrors(403,"no user exist")
  }
const maintask = Task.create({
task,
createdby:userId,
completed:false,
// createdAt,
})
  if(!task){
    throw new ApiErrors(403,"There is an error to get a task")
  }
return res.status(200).json(new ApiResponse(200,maintask,"task created successfully"))

})


export const gettask = asynchandler(async(req,res)=>{
  const userId = req.user._id
  const user = await User.findById(userId)
  if(!user){
    throw new ApiErrors(403,"No user exist")

  }
  const tasks = await Task.find({createdby:userId})
  if(tasks.length ==0){
    return res.status(200).json(new ApiResponse(200,[],"Create some task no exsist"))
  }
  return res.status(200).json(new ApiResponse(200,tasks,"Task fetched successfully"))
})


export const updatetask = asynchandler(async(req,res)=>{
  const userId = req.user._id
  const id = req.params.id;
  const {updatedTask,completed} = req.body
  // const task = await Todo.findById(id)
  const user = await User.findById(userId)
  if(!user){
    throw new ApiErrors(401,"There is an error to get user in updatetask")

  }
    const task = await Task.findById(id)
    if(!task){
      throw ApiErrors(402,"Task is not found")
    }
  // const task = await Todo.findByIdAndUpdate()
task.task = updatedTask??task.task
task.completed = completed??task.completed 
const updatedtask = await task.save()
return res.status(200).json(new ApiResponse(200,updatedtask,"task is updated successfully"))
}) 

export const deleteTask = asynchandler(async(req,res)=>{
  const taskId = req.params.id
  const userId = req.user._id
  const user = await User.findById(userId)
    if(!user){
    throw new ApiErrors(401,"There is an error to get user in updatetask")
  }
  const task = await Task.findById(taskId)
  if(!task){
    throw new ApiErrors(403,"no task exsist")
  }
  await Task.findByIdAndDelete(taskId)
  // task.deleted = true
  // task.deletedat = new Date() 
  // await task.save()
  return res.status(200).json(new ApiResponse(200,{},"task is deleted"))
})