import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import API from '../api/api'
const Login = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  const navigate = useNavigate()

  const loginUser = async (e) => {
    e.preventDefault()
    try {
      const response = await API.post("/api/v1/user/login",
        { username, email, password },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      setMessage("User Logged in successfully")
      navigate("/home")
    } catch (error) {
      setMessage(error.response?.data?.message || "Please check your username, email, or password")
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80')" }}
    >
      <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6 sm:p-8 w-full max-w-sm sm:max-w-md lg:max-w-lg">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">Login</h1>

        {message && (
          <div className="mb-4 text-red-600 text-center font-medium text-sm sm:text-base">{message}</div>
        )}

        <form method="post" onSubmit={loginUser} className="space-y-4 sm:space-y-5">
          <div>
            <label htmlFor="username" className="block text-gray-700 font-semibold mb-1 text-sm sm:text-base">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
              autoComplete="username"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-1 text-sm sm:text-base">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
              autoComplete="email"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-1 text-sm sm:text-base">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
              autoComplete="current-password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded transition duration-200 text-sm sm:text-base"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
