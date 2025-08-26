import axios from "axios"
import React, { useState, useEffect } from "react"
import API from "../api/api"
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
      await API.post(
        "/api/v2/todoroute/createtask",
        { task: taskInput },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      )
      setMessage("Task is created successfully")
      setTaskInput("")
      gettask()
    } catch (error) {
      setError("Task is not created some error......")
    } finally {
      setLoading(false)
    }
  }

  const gettask = async () => {
    try {
      const response = await API.get("/api/v2/todoroute/gettask")
      setTask(response.data.data)
    } catch (error) {
      setMessage(error.response?.data?.message)
    }
  }

  const deleteTodo = async (id) => {
    try {
      await API.delete(`/api/v2/todoroute/deletetask/${id}`, {
        withCredentials: true,
      })
      setMessage("Task deleted successfully")
      gettask()
    } catch (error) {
      setMessage(error.response?.data?.message || "Error deleting task")
    }
  }

  const updateTodo = async (id, completed) => {
    try {
      await API.put(
        `/api/v2/todoroute/updatetask/${id}`,
        { completed },
        { withCredentials: true }
      )
      setMessage("Task updated successfully")
      gettask()
    } catch (error) {
      setMessage(error.response?.data?.message || "Error updating task")
    }
  }

  useEffect(() => {
    gettask()
  }, [])

  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-gradient-to-br  w-full px-2 py-8">
      <div className="bg-white shadow-2xl rounded-2xl p-6 sm:p-10 w-full max-w-4xl sm:max-w-2xl">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-purple-700 mb-8 text-center tracking-tight">
          Create a New Task
        </h2>

        {/* Input + Button */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <input
            type="text"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            placeholder="Enter your task..."
            className="flex-1 px-4 py-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition text-base sm:text-lg"
          />
          <button
            onClick={handleCreateTask}
            className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition disabled:opacity-60"
            disabled={loading}
          >
            {loading ? "Adding..." : "Add Task"}
          </button>
        </div>

        {/* Messages */}
        {message && (
          <div className="mb-4 text-green-600 text-center font-medium">
            {message}
          </div>
        )}
        {error && (
          <div className="mb-4 text-red-500 text-center font-medium">
            {error}
          </div>
        )}

        {/* Task List */}
        <div className="mt-8">
          <h3 className="text-lg sm:text-xl font-bold text-purple-600 mb-4">
            Tasks
          </h3>
          <ul className="space-y-3">
            {tasks.map((task) => (
              <li
                key={task._id}
                className="flex items-center gap-3 bg-purple-50 border border-purple-200 rounded-lg px-4 py-3 shadow-sm"
              >
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={(e) => updateTodo(task._id, e.target.checked)}
                  className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer accent-purple-600"
                />
                <span
                  className={`text-gray-800 flex-1 ${
                    task.completed ? "line-through" : ""
                  }`}
                >
                  {task.task}
                </span>
                <button
                  onClick={() => deleteTodo(task._id)}
                  className="ml-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm sm:text-base"
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
