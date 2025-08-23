import axios from "axios"
import React, { useState, useEffect } from "react"

const CreateTask = () => {
  const [taskInput, setTaskInput] = useState("")
  const [tasks, setTask] = useState([])
  const [message, setMessage] = useState("")
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleCreateTask = async () => {
    if (taskInput.trim() === "") {
      setMessage("Please Enter task")
      return
    }
    setLoading(true)
    try {
      await axios.post("/api/v2/todoroute/createtask",
        { task: taskInput },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" }
        }
      )
      setMessage("Task is created successfully")
      setTaskInput("")
      gettask()
    } catch (error) {
      setError("Task is not created")
    } finally {
      setLoading(false)
    }
  }

  const gettask = async () => {
    try {
      const response = await axios.get("/api/v2/todoroute/gettask")
      setTask(response.data.data)
    } catch (error) {
      setMessage(error.response?.data?.message)
    }
  }

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`/api/v2/todoroute/deletetask/${id}`, { withCredentials: true })
      setMessage("Task deleted successfully")
      gettask()
    } catch (error) {
      setMessage(error.response?.data?.message || "Error deleting task")
    }
  }

  const updateTodo = async (id, completed) => {
    try {
      await axios.put(`/api/v2/todoroute/updatetask/${id}`, { completed}, { withCredentials: true })
      setMessage("Task updated successfully")
      //  setTask((prevTasks) => prevTasks.filter((task) => task._id !== id));
      gettask()
    } catch (error) {
      setMessage(error.response?.data?.message || "Error updating task")
    }
  }

  useEffect(() => {
    gettask()
  }, [])

  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-gradient-to-br from-purple-100 via-white to-purple-200 w-full px-2 py-8">
      <div className="bg-white shadow-2xl rounded-2xl p-8 sm:p-12 w-full max-w-2xl md:max-w-xl lg:max-w-lg">
        <h2 className="text-3xl font-extrabold text-purple-700 mb-8 text-center tracking-tight">
          Create a New Task
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <input
            type="text"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            placeholder="Enter your task..."
            className="flex-1 px-4 py-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition text-lg"
          />
          <button
            onClick={handleCreateTask}
            className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition disabled:opacity-60"
            disabled={loading}
          >
            {loading ? "Adding..." : "Add Task"}
          </button>
        </div>
        {message && (
          <div className="mb-4 text-green-600 text-center font-medium">{message}</div>
        )}
        {error && (
          <div className="mb-4 text-red-500 text-center font-medium">{error}</div>
        )}

        <div className="mt-8">
          <h3 className="text-xl font-bold text-purple-600 mb-4">Tasks</h3>
          <ul className="space-y-3">
            {tasks.map((task) => (
              <li
                key={task._id}
                className="flex items-center bg-purple-50 border border-purple-200 rounded-lg px-4 py-3 shadow-sm"
              >
                 <input type="checkbox" checked={task.completed} onChange={(e)=>updateTodo(task._id,e.target.checked)} name="checkbox" id="checkbox" />
                <span className={`text-gray-800 flex-1 ${task.completed ? "line-through" : ""}`}>
                  {task.task}
                </span>
                <button
                  onClick={() => deleteTodo(task._id)}
                  className="ml-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
          {tasks.length === 0 && (
            <div className="text-gray-400 text-center mt-6">No tasks yet.</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CreateTask
