import axios from 'axios'
import React, { useState } from 'react'
// import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const[username,setUsername] = useState("")
  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")
  const [message,setMessage] = useState("")
const navigate = useNavigate()
  const loginUser = async(e)=>{
e.preventDefault()
try {
  
  const response = await axios.post("/api/v1/user/login",{
   username,email,password 
  },{
    withCredentials:true,
    headers:{
      "Content-Type":"application/json"
    }
  })
  navigate("/home")
} catch (error) {
 if(error.response){
  setMessage(error.response.data.message)
}}

    
  }
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80')" }}
    >
      <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h1>
        {message && (
          <div className="mb-4 text-red-600 text-center font-medium">{message}</div>
        )}
        <form method="post" onSubmit={loginUser} className="space-y-5">
          <div>
            <label htmlFor="username" className="block text-gray-700 font-semibold mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              autoComplete="username"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              autoComplete="email"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              autoComplete="current-password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
