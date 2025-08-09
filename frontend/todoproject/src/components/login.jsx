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
    <div>
<div>
  <h1>Login</h1>
  <form method='post' onSubmit={loginUser}>
  <label htmlFor="username">Username:</label>
<input type="text" id="username" value={username} onChange={(e)=>setUsername(e.target.value)} />
  <label htmlFor="email">Email:</label>
<input type="text" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
  <label htmlFor="password">Password</label>
<input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
<button type='submit'>Login
</button>
  </form>
</div>

    </div>
  )
}

export default Login
