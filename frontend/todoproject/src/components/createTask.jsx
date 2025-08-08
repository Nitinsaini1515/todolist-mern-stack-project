import axios from "axios"
import React from "react"
import { useState ,useEffect} from "react"
const CreateTask = () => {
  const [taskInput,setTaskInput] = useState("")
  // const [task ,setTask] = useState([])
  const [message,setMessage] = useState("")
  const [error,setError] = useState(null)
const [loading,setLoading] = useState(false)
  // useEffect(()=>{
const handleCreateTask = async ()=>{
if(taskInput.trim()==""){
  setMessage("Please Enter task")
  return;
}
  try {
   
    const response = await axios.post("/api/v2/todoroute/createtask",
       { task: taskInput },
    {
      withCredentials:true,
      headers:{
"Content-Type":"application/json"}
    });
    setMessage("Task is created successfully")
    setTaskInput("")
  } catch (error) {
    console.log("Error in task creation ",error)
    setError("Task is not created")

  }
}
// handleCreateTask()
  // },[])
  return (
    <>
    
    <div>
      <input type="text" value={taskInput} onChange={(e)=>setTaskInput(e.target.value)} />
      <button onClick={handleCreateTask}>Add task</button>
    </div>
    </>
  )
}

export default CreateTask
