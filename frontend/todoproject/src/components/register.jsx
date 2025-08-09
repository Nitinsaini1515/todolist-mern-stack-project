import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register =()=>{

  const navigate = useNavigate()
const [username,setUsername] = useState("")
const[password,setPassword] = useState("")
const [email,setEmail] = useState("")
const [fullname,setFullname] = useState("")
const [message,setMessage] = useState("")
const registerUser = async(e)=>{
  e.preventDefault()
  if([username,email,password,fullname].some((field=>!field.trim()))){
    setMessage("All fields are required")
    return;
  }
  try {
    
    const response = await axios.post("/api/v1/user/register",
      {fullname,username,email,password},{
            withCredentials:true,
      headers:{
"Content-Type":"application/json"}
      }
    );
    setMessage("User is registerd successfully")
    navigate("/login")
  } catch (error) {
    setMessage("There is an error in register")
  }
}

return(
  <div>
  <div>
    <h2>Sign up</h2>
  <form onSubmit={registerUser} method="post">
  <label htmlFor="fullname">Fullname</label>
  <input type="text" required id="fullname" value={fullname} onChange={(e)=>setFullname(e.target.value)}/>
  <label htmlFor="username">username</label>
  <input type="text" required id="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
  <label htmlFor="email">email</label>
  <input type="text" required id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
  <label htmlFor="password">password</label>
  <input type="password" required id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
  <button type="submit">Register</button>
  </form>

  </div>
  </div>
)
}
export default Register