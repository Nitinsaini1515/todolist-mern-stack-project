import axios from "axios"
import React from "react"
import { useState ,useEffect} from "react"
// import { gettask } from "../../../../backend/src/controller/todo.controller"
const CreateTask = () => {
  const [taskInput,setTaskInput] = useState("")
  const [tasks,setTask] = useState([])
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
    gettask()
  } catch (error) {
    console.log("Error in task creation ",error)
    setError("Task is not created")

  }
}

// gettask
const gettask = async()=>{
  try {
    const response = await axios.get("/api/v2/todoroute/gettask")
     setTask(response.data.data); 
    //  setTask("")
  } catch (error) {
    setMessage(error.response?.data?.message)
  }
}
useEffect(()=>{
gettask()
},[])



  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-gradient-to-br w-xl rounded-2xl bg-white  px-4 py-8">
      <div className=" bg-white shadow-lg rounded-xl p-8 sm:p-10 w-xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Create a New Task</h2>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Enter your task..."
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
        />
        <div className="flex justify-end">
          <button
            onClick={handleCreateTask}
            className="bg-purple-500 hover:bg-purple-600 text-white px-5 py-2 rounded-md font-semibold transition"
            disabled={loading}
          >
            {loading ? "Adding..." : "Add Task"}
          </button>
        </div>
        {message && (
          <div className="mt-5 text-green-600 text-center font-medium">{message}</div>
        )}
        {error && (
          <div className="mt-5 text-red-500 text-center font-medium">{error}</div>
        )}


        {/* gettask */}

        <div>
          <h2>Tasks</h2>
          <ul>

          {tasks.map((task)=>(
<li key={task._id}>
{task.task}

</li>
          ))}
          </ul>
          
                  </div>
      </div>
    </div>
  )
}

export default CreateTask
