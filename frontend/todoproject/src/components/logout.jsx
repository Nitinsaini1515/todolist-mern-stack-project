import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
  const navigate = useNavigate()
  const [message, setMessage] = useState("")

  const logout = async () => {
    try {
      await axios.post("/api/v1/user/logout", {}, { withCredentials: true })
      setMessage("User logged out successfully")
      navigate('/login')
    } catch (error) {
      setMessage("Error in user logout")
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80')" }}
    >
      <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Logout</h1>
        <p className="mb-4 text-gray-700">
          If you click on logout, you will need to log in again.  
          Make sure you remember your <span className="font-semibold">email, username, and password</span>.
        </p>
        <button
          onClick={logout}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded transition duration-200"
        >
          Logout
        </button>
        {message && (
          <div className="mt-4 text-red-600 font-medium">{message}</div>
        )}
      </div>
    </div>
  )
}

export default Logout
